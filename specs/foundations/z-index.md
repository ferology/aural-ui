# Z-Index

## What this is

Two layers, same pattern as color:

1. **Core scale** (`tokens/core/z-index.css`) — raw, meaningless rungs: `--z-0`, `--z-10`, `--z-20`, `--z-30`, `--z-40` (100), `--z-50` (1000), `--z-60` (2000), `--z-70` (9998), `--z-80` (9999), `--z-90` (10000). The jumps are deliberately uneven — they were set to match stacking values already in use across components (dropdowns at 1000, overlays near 9999, etc.) so introducing the token scale didn't change any existing stacking behavior.
2. **Semantic scale** (`tokens/semantic/z-index.css`) — intent-named aliases onto the core rungs: `--z-sticky` (sticky in-flow elements like a sticky navbar), `--z-dropdown` (floating panels anchored to a trigger: dropdown, select, combobox, date/time pickers, suggestions), `--z-modal` (app-level modal backdrop + content), `--z-overlay` (a secondary overlay above a modal, e.g. a drawer backdrop), `--z-popover`/`--z-tooltip`/`--z-toast` (content that must float above everything in normal flow), `--z-max` (absolute top layer: command palette, snackbar, lightbox, submenus).

Full values: `specs/tokens/token-reference.md` ("Z-Index" section).

## When to use it — and when NOT to

**Component code should reference the semantic tokens** (`var(--z-dropdown)`), not the raw `--z-N` rungs, so the _meaning_ of a layer is visible at the call site.

**Important nuance: small z-index values used purely for local stacking tricks inside a single component are NOT part of this scale and don't need a token.** If you're layering a decorative pseudo-element above its own container, ordering a badge dot over an avatar, or doing any `z-index` trick where everything being stacked lives inside one component's own DOM subtree — and the value is 20 or smaller — leave it as a plain integer. This is intentional, not a gap in token coverage: these values never interact with another component's stacking context, so giving them a global name would be noise, not clarity.

**Reach for a global token only when the element needs to stack above or below content belonging to a _different_ component** — a dropdown panel escaping its trigger's container, a modal backdrop covering the whole page, a toast floating above everything.

```css
/* Local stacking trick — stays a plain small integer, no token needed */
.avatar-status-dot {
  position: absolute;
  z-index: 1;
}

/* Cross-component global layer — use the semantic token */
.dropdown-menu {
  position: absolute;
  z-index: var(--z-dropdown);
}
.modal-backdrop {
  position: fixed;
  z-index: var(--z-modal);
}
```

## Do / don't

```css
/* Don't — raw global-scale number, meaning not visible at the call site */
.toast {
  z-index: 9999;
}

/* Don't — reaching past the semantic layer for no reason */
.toast {
  z-index: var(--z-80);
}

/* Do */
.toast {
  z-index: var(--z-toast);
}
```
