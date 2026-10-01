# Modal

## 1. Metadata

|                   |                                              |
| ----------------- | -------------------------------------------- |
| Name              | Modal                                        |
| Category          | Overlay                                      |
| Status            | Stable                                       |
| CSS file          | `components/modal.css`                       |
| Naming convention | Flat kebab-case (`.modal`, `.modal-overlay`) |

## 2. Overview

Modal is an overlay dialog that focuses user attention on a specific task
or decision, blocking interaction with the underlying page until it's
dismissed. It's a two-layer structure: `.modal-overlay` (the full-screen
backdrop) containing `.modal` (the dialog surface itself,
`role="dialog"` `aria-modal="true"`).

**When to use:**

- Destructive actions requiring confirmation (delete, remove, cancel subscription)
- Critical decisions needing full attention (save changes before leaving)
- Focused create/edit tasks that shouldn't navigate away from the page
- Detailed information that would clutter the main page
- Multi-step workflows (wizards, onboarding) where each step must complete
- Login, signup, or authentication forms

**When NOT to use:**

- Simple notifications or confirmations — use Toast or Snackbar, which don't block the page
- Non-critical information that doesn't require acknowledgment
- Long-form content better suited to a dedicated page
- Frequent, lightweight interactions — use Dropdown or Popover instead
- Mobile-first flows where a full-page view works better than an overlay

## 3. Anatomy

| Class                                                 | Purpose                                                                                                                                                     |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.modal-overlay`                                      | Full-screen, fixed, backdrop-blurred layer that centers the dialog; toggles visible via the `.open` class.                                                  |
| `.modal`                                              | The dialog surface — bordered, rounded, elevated, max-height capped with internal scroll; scales/translates in on open (respects `prefers-reduced-motion`). |
| `.modal-header`                                       | Flex row for the icon + title block.                                                                                                                        |
| `.modal-icon`                                         | Optional circular/rounded icon swatch in the header, using a two-color gradient background.                                                                 |
| `.modal-title`                                        | Dialog heading; rendered with a gradient text-fill effect (text → primary color).                                                                           |
| `.modal-subtitle`                                     | Secondary line under the title.                                                                                                                             |
| `.modal-body`                                         | Main content area, column flex with gap for stacked content.                                                                                                |
| `.modal-footer`                                       | Action row (buttons); each direct `.btn` child grows equally (`flex: 1`).                                                                                   |
| `.modal-close`                                        | Absolutely-positioned close ("x") button, top-right.                                                                                                        |
| `.modal-sm` / `.modal-md` / `.modal-lg` / `.modal-xl` | Width presets: 360px / 480px (same as the unmodified `.modal` default) / 640px / 800px.                                                                     |
| `.modal-full`                                         | Near-fullscreen variant (`95vw` / `95vh`).                                                                                                                  |

## 4. Tokens used

| Token                                                                             | Used for                                                                                                           |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `--color-modal-bg` / `--color-modal-border`                                       | `.modal` background / border                                                                                       |
| `--color-modal-overlay`                                                           | `.modal-overlay` backdrop color                                                                                    |
| `--color-modal-icon-gradient-start` / `--color-modal-icon-gradient-end`           | `.modal-icon` background gradient (new semantic tokens — see note below)                                           |
| `--color-primary`                                                                 | `.modal-icon` icon color, `.modal-title` gradient end                                                              |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-muted`          | Title / subtitle & body / close-button text color                                                                  |
| `--color-bg-glass-light`                                                          | `.modal-close:hover` background                                                                                    |
| `--z-modal`                                                                       | `.modal-overlay` stacking context                                                                                  |
| `--size-20` / `--size-28` / `--size-56`                                           | Close-icon size / `.modal-icon` svg size / `.modal-icon` swatch size                                               |
| `--size-360` / `--size-480` / `--size-640` / `--size-800`                         | `.modal-sm` / `.modal` default & `.modal-md` / `.modal-lg` / `.modal-xl` widths (new core tokens — see note below) |
| `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-6` / `--space-8` | Header/body/footer gaps, title margin, close-button offset/padding, modal padding/margin                           |
| `--text-sm` / `--text-xl`                                                         | Subtitle / title font size                                                                                         |
| `--font-bold`                                                                     | Title font weight                                                                                                  |
| `--radius-sm` / `--radius-lg` / `--radius-xl`                                     | Close-button corners / icon swatch corners / modal corners                                                         |
| `--shadow-2xl`                                                                    | Modal elevation                                                                                                    |
| `--duration-normal` / `--ease-in-out` / `--ease-out`                              | Overlay fade / modal entrance transitions                                                                          |
| `--transition-all-fast`                                                           | Close-button hover transition                                                                                      |

**New tokens added while migrating this file:**

- `--size-360`, `--size-480`, `--size-640`, `--size-800`
  (`tokens/core/size.css`, new "Container / Overlay Width Scale" section) —
  these four fixed widths were already a de-facto standard reused
  verbatim across `modal.css`, `dialog.css`, `drawer.css`,
  `notification-center.css`, `popover.css`, `alert-banner.css`, and
  `calendar.css`, but had no token. Added to `tokens/core/size.css`
  (alongside the existing icon/control size scale, under its own labeled
  section) rather than inventing a new foundation file, since `size` is
  already the token category for fixed pixel dimensions.
- `--color-modal-icon-gradient-start: rgba(16, 185, 129, 0.2)` and
  `--color-modal-icon-gradient-end: rgba(6, 182, 212, 0.2)`
  (`tokens/semantic/colors.css`) — the icon swatch's gradient reuses the
  same two RGB values already established core-side for the
  primary/secondary "glow" family (`--glow-primary-*`,
  `--glow-secondary-*`, `--shadow-primary`, `--shadow-secondary`), just at
  a new 20% flat-alpha step with no existing token, so each got a
  dedicated Modal-specific semantic token rather than a raw literal.

## 5. Props/API

Modal is markup + CSS classes, opened/closed via a JS API in
`javascript/index.js` (the global `Aural` object):

| Method                       | Description                                                                                                                                                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Aural.openModal(modalId)`   | Adds `.open` to the overlay, traps focus inside the modal, focuses the first focusable element, prevents body scroll, and marks the rest of the page `aria-hidden`. Remembers the triggering element. |
| `Aural.closeModal(modalId)`  | Removes `.open`, releases the focus trap, restores body scroll and `aria-hidden`, and returns focus to the element that opened it.                                                                    |
| `Aural.toggleModal(modalId)` | Opens if closed, closes if open.                                                                                                                                                                      |
| `Aural.initModals()`         | Global listener: closes any open modal on `Escape`, and closes on a click directly on `.modal-overlay` (the backdrop, not the dialog content). Call once on load.                                     |

`Modal.stories.ts` also documents a conceptual prop surface used by its
story controls (not a real JS API, but how framework wrappers typically
expose the component): `title` (text), `subtitle` (text), `content`
(text/HTML), `size` (`sm` | `default` | `lg` | `fullscreen`), `closable`
(boolean — close button/Escape/backdrop), `backdrop` (boolean — show the
overlay), `icon` (text, icon name for `.modal-icon`).

## 6. States

| State                | Trigger                                                                       | Effect                                                                                                     |
| -------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Closed (default)     | `.modal-overlay` without `.open`                                              | `opacity: 0`, `visibility: hidden`, `pointer-events: none` — fully inert.                                  |
| Open                 | `.modal-overlay.open`                                                         | Fades in, `.modal` scales/translates to its resting position, focus trapped inside.                        |
| Hover (close button) | `.modal-close:hover`                                                          | `--color-bg-glass-light` background, text brightens to `--color-text-primary`.                             |
| Focus                | Any focusable element inside `.modal`, including `.modal-close:focus-visible` | Browser/shared focus-visible styling; focus is trapped within the dialog via JS while open.                |
| Reduced motion       | `prefers-reduced-motion: reduce`                                              | Overlay fade and modal scale/translate transitions are both skipped — the modal simply appears/disappears. |

Modal has no disabled or error state of its own; its body is free-form
content (often a form), so those states belong to whatever's inside it.

## 7. Code example

```html
<div class="modal-overlay open" id="my-modal">
  <div
    class="modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    aria-describedby="modal-desc"
  >
    <div class="modal-header">
      <h2 id="modal-title" class="modal-title">Modal Title</h2>
      <button class="modal-close" aria-label="Close modal" onclick="Aural.closeModal('my-modal')">
        <svg>...</svg>
      </button>
    </div>
    <div class="modal-body">
      <p id="modal-desc">Modal description...</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>

<script>
  window.Aural?.initModals();
</script>
```

## 8. Cross-references

- **Button** — footer actions (`.btn btn-primary` / `.btn-secondary` / `.btn-ghost`) use the Button component; destructive confirmations should use a danger-variant button.
- **Badge** — reuses the same two-tone "icon swatch" gradient idea now that `--color-modal-icon-gradient-*` exists.
- **Card** — both share the bordered/rounded/elevated "surface" treatment, but Card is inline content, Modal is a blocking overlay.
- **Drawer / Popover / Dialog** — alternative overlay patterns; all now share the same `--size-360/480/640/800` width scale as Modal.
