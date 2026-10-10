# Accessibility

This is not a WCAG primer — it documents the concrete a11y conventions actually in use across `components/*.css`, so a new component matches existing patterns instead of inventing its own.

## State is read from ARIA attributes, not a parallel CSS class

Interactive components style their state off the ARIA attribute the JS/HTML side is already required to set, rather than a separate `.is-active`-style class that could drift out of sync with it. Examples from real components:

```css
/* components/tabs.css */
.tab-active,
.tab[aria-selected="true"] { color: var(--color-tabs-active-text); ... }

/* components/accordion.css */
.accordion-header[aria-expanded="true"] .accordion-icon { ... }

/* components/dialog.css */
.aural-dialog[aria-hidden="true"]  { /* hidden state */ }
.aural-dialog[aria-hidden="false"] { /* visible state */ }
```

When adding a new interactive component, check whether it already has a standard ARIA state attribute (`aria-expanded`, `aria-selected`, `aria-checked`, `aria-pressed`, `aria-hidden`, `aria-disabled`, `aria-invalid`) before inventing a bespoke class to track the same state. `components/input.css` documents `aria-invalid="true"`/`"false"` as the mechanism for error-state styling on form fields, for the same reason.

## Focus is `:focus-visible`, not `:focus`

Every interactive component uses `:focus-visible` (not bare `:focus`) so the focus ring only appears for keyboard navigation, not every mouse click. The ring is consistently `2px solid var(--color-primary)` with component-specific `outline-offset` (inset for contained elements like accordion headers, outset for tabs):

```css
/* components/accordion.css */
&:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: -2px;
}

/* components/tabs.css */
&:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

Use `var(--color-primary)` for the outline color (not a hardcoded value) so focus rings repaint correctly under any theme.

## Reduced motion

Any component with a `transition` or `animation` tied to a visible state change includes a `prefers-reduced-motion: reduce` block near the bottom of the file (grouped under an `ACCESSIBILITY` comment header in newer files, e.g. `tabs.css`) that strips the motion rather than just shortening it:

```css
/* components/accordion.css */
@media (prefers-reduced-motion: reduce) {
  .accordion-header,
  .accordion-icon,
  .accordion-panel {
    transition: none;
  }
  .accordion-header[aria-expanded='true'] .accordion-icon {
    transform: none;
  }
}

/* components/tabs.css */
@media (prefers-reduced-motion: reduce) {
  .tab,
  .tab-close {
    transition: none;
  }
  .tab-panel {
    animation: none;
  }
}
```

When you add motion to a component (anything using `--duration-*`/`--transition-*`, see `specs/foundations/motion.md`), add or extend this block rather than skipping it.

## Disabled state

Disabled interactive elements consistently get `opacity: 0.5`, `cursor: not-allowed`, and usually `pointer-events: none`, keyed off the native `:disabled`/`[disabled]` selector:

```css
&:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

## Color contrast (WCAG 1.4.3 / 1.4.11)

- Text and status foregrounds must reach 4.5:1; form control boundaries and focus indicators 3:1. Use the token roles from `specs/foundations/color.md`: `--color-*-text` for status text/icons, `--color-*-solid` + `--color-text-on-*` for filled backgrounds, `--color-control-border` for input/checkbox/radio/select borders. Never use the 500 shades (`--color-success/error/warning/info`) for text or under white text, and never rely on `--color-border-subtle`/`-medium` as a control's only boundary.
- `npm run audit:contrast` (after `npm run build:css`) checks these token pairs in a real browser for every theme and fails on any pair below its threshold. It is not wired into CI by this change; run it after touching tokens or themes.
- `.skip-link` uses `--color-button-primary-bg` / `--color-button-primary-text` and a `currentColor` focus outline, so it passes in every theme.

## JavaScript behavior (`javascript/index.js`)

### Tooltips (`initTooltips`, WCAG 1.4.13)

- Hover or focus on the trigger shows the tooltip; the tooltip stays open while the pointer is over the tooltip itself (hoverable) and closes on mouseleave from the wrapper or blur.
- Escape dismisses it without moving focus or the pointer (`tooltip-show` removed; the key event does not propagate, so it will not also close an enclosing modal).
- The tooltip gets `role="tooltip"` and an id (generated as `aural-tooltip-*` if missing), and the trigger gets that id appended to `aria-describedby` (existing values preserved). No manual wiring needed.

### Modals (`openModal` / `closeModal`)

- On open, every sibling of the modal and of each of its ancestors (up to `<body>`) gets `inert` and `aria-hidden="true"`; the previous values are restored on close. This works when the modal lives inside `<main>` (the old behavior put `aria-hidden` on `<main>` itself).
- The focus trap re-queries focusable elements on each Tab: visible, enabled, not `tabindex="-1"`, not inside `[hidden]`/`[inert]`; includes `summary` and `[contenteditable="true"]`. Content added after open is included. Shift+Tab/Tab wrap at the ends, and focus outside the modal is pulled back in.
- Initial focus goes to the first focusable element, or to the dialog (`[role="dialog"]`/`[role="alertdialog"]`, given `tabindex="-1"` if needed) when none exists.
- Escape closes only the topmost (last opened) modal.

## Documented markup in file headers

Most component files open with a `/** ... Usage: <markup sample> */` comment block showing the exact required ARIA wiring (see the top of `components/accordion.css` and `components/tabs.css`). Treat that comment as authoritative for how the component expects to be marked up — read it before using or modifying a component, and keep it in sync if you change which ARIA attributes the CSS keys off.
