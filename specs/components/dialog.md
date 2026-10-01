# Dialog

## 1. Metadata

|                   |                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------- |
| Name              | Dialog                                                                                   |
| Category          | Overlay                                                                                  |
| Status            | Stable                                                                                   |
| CSS file          | `components/dialog.css`                                                                  |
| Naming convention | `aural-` prefixed BEM (`.aural-dialog`, `.aural-dialog__header`, `.aural-dialog--alert`) |

## 2. Overview

Dialog is a lightweight confirmation/alert overlay: a two-layer structure of
`.aural-dialog-backdrop` (fixed, full-screen, blurred backdrop) containing
`.aural-dialog` (the compact message surface,
`role="dialog"` `aria-modal="true"`). It ships four semantic variants
(`alert`/`success`/`warning`/`destructive`) that color-code a leading icon
swatch, and is intentionally smaller and simpler than Modal — a single
message, an optional icon, and one or two actions, not arbitrary body
content.

**When to use:**

- Confirming a user action before it takes effect ("Delete this file?")
- Short alert/info/success/warning messages that need acknowledgment
- Destructive-action confirmations (use the `--destructive` variant)

**When NOT to use:**

- Anything with a form, multi-step flow, or free-form body content — use **Modal**
- Non-blocking, auto-dismissing feedback — use **Toast** or **Snackbar**
- Secondary navigation or supplementary panels — use **Drawer**

## 3. Anatomy

| Class                                                                | Purpose                                                                                         |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `.aural-dialog-backdrop`                                             | Full-screen, fixed, blurred backdrop that centers the dialog; toggles via the `.is-open` class. |
| `.aural-dialog`                                                      | The message surface — bordered, rounded, elevated, capped at `28rem`, internal scroll.          |
| `.aural-dialog__header`                                              | Flex row for the icon + title group.                                                            |
| `.aural-dialog__icon`                                                | Circular icon swatch, color-coded per variant (hidden by `.aural-dialog--no-icon`).             |
| `.aural-dialog__title-group` / `.aural-dialog__title`                | Heading wrapper / heading text.                                                                 |
| `.aural-dialog__body` / `.aural-dialog__message`                     | Message content area / the message paragraph.                                                   |
| `.aural-dialog__footer`                                              | Action row; `--reverse` flips to row-reverse, `--stacked` stacks actions vertically.            |
| `.aural-dialog__action`                                              | Each footer action grows equally (`flex: 1`).                                                   |
| `.aural-dialog__close`                                               | Absolutely-positioned close ("×") button, top-right.                                            |
| `.aural-dialog--alert` / `--success` / `--warning` / `--destructive` | Variant modifiers — recolor `.aural-dialog__icon` (and the title, for `--destructive`).         |
| `.aural-dialog--no-icon`                                             | Hides the icon swatch and restores header top padding.                                          |

## 4. Tokens used

| Token                                                                                | Used for                                                                                |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `--color-dialog-backdrop`                                                            | `.aural-dialog-backdrop` background                                                     |
| `--color-bg-primary` / `--color-border`                                              | `.aural-dialog` background / border                                                     |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-muted`             | Title / message / close-button text color                                               |
| `--color-info-bg` / `--color-success-bg` / `--color-warning-bg` / `--color-error-bg` | Variant icon swatch backgrounds (new tokens — see note below)                           |
| `--color-info` / `--color-success` / `--color-warning` / `--color-error`             | Variant icon swatch glyph color (and `--destructive` title color)                       |
| `--color-bg-secondary`                                                               | `.aural-dialog__close:hover` background                                                 |
| `--z-popover`                                                                        | `.aural-dialog-backdrop` stacking context                                               |
| `--size-44` / `--size-48`                                                            | Close-button touch target / icon swatch size                                            |
| `--space-2` / `--space-3` / `--space-4` / `--space-6`                                | Header/body/footer gaps and padding                                                     |
| `--text-sm` / `--text-lg` / `--text-2xl`                                             | Message / title / icon glyph & close-button glyph font sizes                            |
| `--font-semibold`                                                                    | Title font weight                                                                       |
| `--radius` / `--radius-sm` / `--radius-lg` / `--radius-full`                         | Close-button corners / scrollbar-thumb corners / dialog corners / icon swatch           |
| `--shadow-2xl`                                                                       | Dialog elevation                                                                        |
| `--duration-moderate`                                                                | Backdrop fade / dialog entrance / close-button hover transitions (new token — see note) |

**New tokens added while migrating this file:**

- `--color-success-bg: rgba(34, 197, 94, 0.1)`, `--color-warning-bg: rgba(245, 158, 11, 0.1)`,
  `--color-info-bg: rgba(59, 130, 246, 0.1)` (`tokens/semantic/colors.css`, State Colors
  section) — complete the family started by the already-present
  `--color-error-bg: rgba(239, 68, 68, 0.1)`, at the same 10%-alpha step, for the four
  variant icon swatches.
- Used (not added by this migration, but newly available from a concurrent
  sibling change): `--duration-moderate: 200ms` (`tokens/core/animations.css`) — the
  widely-repeated raw `0.2s` this file's backdrop/dialog/close-button transitions used.

`max-width: 28rem` on `.aural-dialog` is intentionally left as a literal
(`/* aural-ignore */`) — it's a Dialog-specific compact width, distinct from
the shared `--size-360/480/640/800` overlay-width scale Modal/Drawer/Command
Palette use.

## 5. Props/API

Dialog is markup + CSS classes, opened/closed via a JS API in
`javascript/index.js` (the global `Aural` object):

| Method                                                   | Description                                                                                                                                                                               |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Aural.openDialog(dialogId)`                             | Adds `.is-open` to the backdrop, sets `role`/`aria-modal`/`aria-labelledby`/`aria-describedby` on the dialog, focuses the first focusable element, closes on Escape.                      |
| `Aural.closeDialog(dialogId)`                            | Removes `.is-open` and sets `aria-hidden="true"` on the dialog.                                                                                                                           |
| `Aural.showConfirm(title, message, onConfirm, onCancel)` | Builds and appends an `--alert` dialog dynamically (title, message, Cancel/Confirm buttons), wires confirm/cancel/backdrop-click, opens it, and removes itself from the DOM on dismissal. |

## 6. States

| State                | Trigger                                                   | Effect                                                                                            |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Closed (default)     | `.aural-dialog-backdrop` without `.is-open`               | `opacity: 0`, `pointer-events: none` — fully inert.                                               |
| Open                 | `.aural-dialog-backdrop.is-open`                          | Backdrop fades in, dialog scales/translates to resting position.                                  |
| Hidden (ARIA)        | `.aural-dialog[aria-hidden="true"]`                       | `display: none` — a secondary, attribute-driven hide alongside the backdrop's opacity transition. |
| Hover (close button) | `.aural-dialog__close:hover`                              | `--color-bg-secondary` background, text brightens to `--color-text-primary`.                      |
| Focus                | `.aural-dialog__close:focus-visible`, any focusable child | `outline: 2px solid var(--color-primary)`; JS focuses the first focusable element on open.        |
| Variant              | `.aural-dialog--alert/success/warning/destructive`        | Recolors the icon swatch (and title, for destructive).                                            |
| Reduced motion       | `prefers-reduced-motion: reduce`                          | Backdrop and dialog transitions are skipped — it simply appears/disappears.                       |

Dialog has no disabled or loading state of its own — its content is a short
message, not a form.

## 7. Code example

```html
<div class="aural-dialog-backdrop is-open" id="my-dialog">
  <div class="aural-dialog aural-dialog--destructive" role="dialog" aria-modal="true">
    <button
      class="aural-dialog__close"
      aria-label="Close dialog"
      onclick="Aural.closeDialog('my-dialog')"
    ></button>
    <div class="aural-dialog__header">
      <div class="aural-dialog__icon"></div>
      <div class="aural-dialog__title-group">
        <h3 class="aural-dialog__title" id="dialog-title">Delete this file?</h3>
      </div>
    </div>
    <div class="aural-dialog__body">
      <p class="aural-dialog__message" id="dialog-desc">This action cannot be undone.</p>
    </div>
    <div class="aural-dialog__footer">
      <button
        class="btn btn-secondary aural-dialog__action"
        onclick="Aural.closeDialog('my-dialog')"
      >
        Cancel
      </button>
      <button class="btn btn-error aural-dialog__action">Delete</button>
    </div>
  </div>
</div>
```

```js
// Or dynamically, without any markup:
Aural.showConfirm(
  'Delete this file?',
  'This action cannot be undone.',
  () => deleteFile(),
  () => console.log('cancelled')
);
```

## 8. Cross-references

- **Modal** — the general-purpose overlay for forms/free-form content; Dialog
  is its compact, message-only sibling, sharing the two-layer
  backdrop/surface pattern and the `--shadow-2xl` elevation.
- **Drawer / Command Palette** — alternative overlay patterns using the same
  `is-open`/backdrop idiom and the shared z-index tiers.
- **Button** — footer actions use the Button component; destructive
  confirmations should pair the `--destructive` dialog variant with a
  danger-variant button.
- **Badge** — the variant icon-swatch tokens (`--color-*-bg` at 10% alpha)
  parallel the badge color family (`--color-badge-*-bg` at 15% alpha), one
  step lighter.
