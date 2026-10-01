# Toast

## 1. Metadata

|                   |                                              |
| ----------------- | -------------------------------------------- |
| Name              | Toast                                        |
| Category          | Feedback / Overlays                          |
| Status            | Stable                                       |
| CSS file          | `components/toast.css`                       |
| JS file           | `javascript/index.js` (`Aural.showToast`)    |
| Naming convention | Flat kebab-case (`.toast`, `.toast-success`) |

## 2. Overview

Toast is a brief, non-intrusive notification that appears in a fixed
corner stack (top-right by default) and auto-dismisses after a few
seconds. It's purely informational — unlike Snackbar it never carries
action buttons, and unlike Alert Banner it isn't meant to be
page-blocking or persistent.

**When to use:**

- Brief feedback for a user action or background status update
  ("File saved", "Connection lost")
- Non-critical, auto-dismissing confirmations that don't need a response

**When NOT to use:**

- When the user needs to take an action (Undo, Retry) — use **Snackbar**
- Page-level, must-acknowledge messages — use **Alert Banner**
- Form-field-specific errors — use inline validation text

## 3. Anatomy

| Class                                  | Purpose                                                                                                  |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `.toast-container`                     | Fixed top-right stack; `aria-live="polite"`; `pointer-events: none` so empty space doesn't block clicks. |
| `.toast`                               | Individual toast card — row layout, blur backdrop, slide-in-from-right entrance.                         |
| `.toast-success/-error/-warning/-info` | 3px left-accent border in the matching state color.                                                      |
| `.toast-icon`                          | Leading status icon (20px).                                                                              |
| `.toast-content`                       | Flex column wrapping title + message; `min-width: 0` so long text can wrap/truncate.                     |
| `.toast-title`                         | Bold heading line (defaults to the type name — "Success", "Error", …).                                   |
| `.toast-message`                       | Body copy.                                                                                               |
| `.toast-close`                         | Dismiss button (20px icon, reset button chrome).                                                         |
| `.toast-exit`                          | Applied before removal; plays the slide-out-right animation.                                             |

## 4. Tokens used

| Token                                                                                                                        | Used for                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `--color-toast-bg` / `--color-toast-border`                                                                                  | Toast card background / border                |
| `--color-toast-success-border` / `--color-toast-error-border` / `--color-toast-warning-border` / `--color-toast-info-border` | Left-accent border per variant                |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-muted`                                                     | Title / message / close-icon color            |
| `--color-bg-glass-light`                                                                                                     | Close-button hover background                 |
| `--space-1` / `--space-3` / `--space-4` / `--space-6`                                                                        | Margins, gaps, and padding                    |
| `--space-80`                                                                                                                 | Toast card `min-width` (320px)                |
| `--size-20`                                                                                                                  | Icon and close-button dimensions              |
| `--radius-lg` / `--radius-sm`                                                                                                | Card corners / close-button corners           |
| `--shadow-xl`                                                                                                                | Card elevation                                |
| `--text-sm` / `--text-base`                                                                                                  | Message / title font size                     |
| `--font-semibold`                                                                                                            | Title weight                                  |
| `--duration-normal` / `--duration-fast` / `--ease-out` / `--ease-in`                                                         | Slide-in / slide-out-on-exit animation timing |
| `--transition-all-fast`                                                                                                      | Close-button hover transition                 |
| `--z-toast`                                                                                                                  | Stack's stacking layer                        |

**New tokens added while migrating this file:** none — every raw value
(`9999`, `320px`, `20px`, `0.25rem`, `rgba(255,255,255,0.05)`) had an exact
existing match. `420px` (the stack's own `max-width`) has no matching
token and is marked `/* aural-ignore: one-off toast-stack max-width */` —
it's a one-off container ceiling, same pattern as `calendar.css` and
`select.css`'s ignored 400px ceilings.

## 5. Props/API

Toast is created via `Aural.showToast(message, type, title, duration)`:

| Param      | Type                                          | Default  | Notes                                                                                   |
| ---------- | --------------------------------------------- | -------- | --------------------------------------------------------------------------------------- |
| `message`  | `string`                                      | —        | Required body text.                                                                     |
| `type`     | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | Maps to `.toast-{type}` and sets `role="alert"` for `error`, `role="status"` otherwise. |
| `title`    | `string \| null`                              | `null`   | Defaults to the capitalized type name ("Success", …).                                   |
| `duration` | `number` (ms)                                 | `5000`   | `0` disables auto-dismiss.                                                              |

Lazily creates `#aural-toast-container` (`.toast-container`) on first
call. Returns the toast `HTMLElement`. Dismissal (manual close-click or
auto-dismiss timeout) adds `.toast-exit` then removes the node after
`300ms`.

## 6. States

| State       | Trigger                                | Effect                                                                         |
| ----------- | -------------------------------------- | ------------------------------------------------------------------------------ |
| Entering    | Mount                                  | Slides in from `translateX(100%)` + fade, over `--duration-normal`.            |
| Exiting     | `.toast-exit` (added by JS)            | Slides out to `translateX(100%)` + fade, over `--duration-fast`, then removed. |
| Close hover | `:hover` on `.toast-close`             | Background tint, icon turns `--color-text-primary`.                            |
| Variant     | `.toast-success/-error/-warning/-info` | 3px left-accent border in the state color.                                     |

No reduced-motion override is defined in this file (unlike most other
components in this batch) — worth flagging if the system's reduced-motion
pass reaches Toast later.

## 7. Code example

```html
<div class="toast-container" aria-live="polite" aria-atomic="false">
  <div class="toast toast-success" role="status">
    <div class="toast-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
    <div class="toast-content">
      <div class="toast-title">Success</div>
      <div class="toast-message">Changes saved.</div>
    </div>
    <button class="toast-close" aria-label="Close">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
</div>
```

```javascript
Aural.showToast('Changes saved', 'success');
Aural.showToast('Connection lost', 'error', 'Network Error', 0); // no auto-dismiss
```

## 8. Cross-references

- **Snackbar** — use instead when the message needs an action button
  (Undo, Retry) or should anchor to the bottom of the screen.
- **Alert Banner** — use instead for page-level, must-acknowledge messages.
- **Popover**/**Tooltip** share `--color-bg-glass-light` with Toast's
  close-button hover state.
