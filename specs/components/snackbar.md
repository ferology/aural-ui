# Snackbar

## 1. Metadata

|                   |                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------- |
| Name              | Snackbar                                                                           |
| Category          | Feedback / Overlays                                                                |
| Status            | Stable                                                                             |
| CSS file          | `components/snackbar.css`                                                          |
| JS file           | `javascript/index.js` (`Aural.showSnackbar`)                                       |
| Naming convention | BEM-ish, `aural-` prefixed (`.aural-snackbar__action`, `.aural-snackbar--success`) |

## 2. Overview

Snackbar is a brief, edge-anchored message that can carry an optional
action button (Undo, Retry, View) and an optional auto-dismiss progress
bar. It's the action-capable sibling of Toast.

**Key differences from Toast:**

- Snackbars can include action buttons; Toasts are purely informational.
- Snackbars typically anchor to the bottom of the screen; Toasts to the
  top corners.
- Use Snackbar whenever an undo/retry action would help the user.

**When to use:** operation feedback that benefits from an inline action
("Item deleted — Undo"), brief status updates anchored to a configurable
screen edge, messages that should show a visible auto-dismiss countdown.

**When NOT to use:** page-level persistent messages (use **Alert
Banner**), purely informational corner notices with no action (use
**Toast**), form-field errors (use inline validation).

## 3. Anatomy

| Class                                            | Purpose                                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `.aural-snackbar-container`                      | Fixed, positioned stack; one per screen-edge position; `pointer-events: none` so gaps don't block clicks.                       |
| `.aural-snackbar-container--{position}`          | `bottom-left/-center/-right`, `top-left/-center/-right` — anchors the stack and flips the entrance transform for top positions. |
| `.aural-snackbar`                                | The message card — inverted surface (`--color-bg-inverse`/`--color-text-inverse`) by default, translateY entrance/exit.         |
| `.aural-snackbar--show` / `--hide`               | Toggled by JS to animate the entrance/exit.                                                                                     |
| `.aural-snackbar__icon`                          | Status icon (20px), only rendered for non-default types.                                                                        |
| `.aural-snackbar__content`                       | Flex column wrapping message + description.                                                                                     |
| `.aural-snackbar__message`                       | Primary text.                                                                                                                   |
| `.aural-snackbar__description`                   | Optional secondary line.                                                                                                        |
| `.aural-snackbar__actions`                       | Wraps the action button(s).                                                                                                     |
| `.aural-snackbar__action`                        | Uppercase, tracked action button (e.g. "UNDO").                                                                                 |
| `.aural-snackbar__close`                         | Dismiss button.                                                                                                                 |
| `.aural-snackbar__progress` / `__progress-bar`   | Thin bar along the bottom edge that animates from full to empty over the auto-dismiss `duration`.                               |
| `.aural-snackbar--success/-error/-warning/-info` | Fills the whole card with the state color (not just an accent).                                                                 |
| `.aural-snackbar--sm` / `--lg`                   | Size modifiers (min-height, min-width, padding, icon/message size).                                                             |
| `.aural-snackbar--full-width`                    | Spans the full viewport width, no radius.                                                                                       |
| `.aural-snackbar--elevated`                      | Alternate non-inverted surface (`--color-bg-secondary` + a border) instead of the default inverted one.                         |
| `.aural-snackbar__avatar` / `__image`            | Optional leading avatar (circular) or image (rounded rect) slot.                                                                |
| `.aural-snackbar--loading`                       | Spins the icon (reuses the `aural-snackbar-spin` keyframe).                                                                     |
| `.aural-snackbar--compact`                       | Icon-only mode — hides `__content` and `__actions`.                                                                             |
| `.aural-snackbar--mobile-stack`                  | Below 640px, stacks action buttons vertically and makes them full-width.                                                        |

## 4. Tokens used

| Token                                                                                                                          | Used for                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `--color-bg-inverse` / `--color-text-inverse`                                                                                  | Default snackbar surface (inverted relative to the app's dark theme)                                                                           |
| `--color-success` / `--color-error` / `--color-warning` / `--color-info`                                                       | Full-fill background for color variants                                                                                                        |
| `--color-bg-secondary` / `--color-border-medium` / `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary` | `--elevated` variant's surface                                                                                                                 |
| `--color-chip-remove-on-color`                                                                                                 | Description text / variant close-icon color (reused `rgba(255,255,255,0.8)` token, shared with Chip's remove-icon-on-solid-background pattern) |
| `--color-text-on-dark`                                                                                                         | Progress-bar fill on the success/error/info variants (`rgba(255,255,255,0.9)`)                                                                 |
| `--color-badge-neutral-bg`                                                                                                     | Action/close hover backgrounds (`rgba(255,255,255,0.1)`)                                                                                       |
| `--color-tab-badge-bg`                                                                                                         | Default progress-track background and avatar border (`rgba(255,255,255,0.2)`)                                                                  |
| `--color-primary-light`                                                                                                        | Action text / progress-bar fill on the default (inverted) surface (see gap note below)                                                         |
| `--space-0-5` / `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-6`                                            | Gaps and padding across sizes                                                                                                                  |
| `--space-80`                                                                                                                   | Default `min-width` (320px)                                                                                                                    |
| `--size-18` / `--size-20` / `--size-24` / `--size-32` / `--size-36` / `--size-40` / `--size-48` / `--size-56`                  | Icon / control / avatar / image dimensions across sizes                                                                                        |
| `--size-280` / `--size-400` / `--size-560`                                                                                     | `--sm` / `--lg` / default container min/max-width                                                                                              |
| `--radius-md` / `--radius-sm`                                                                                                  | Card corners / image corners                                                                                                                   |
| `--shadow-xl`                                                                                                                  | Card elevation                                                                                                                                 |
| `--text-xs` / `--text-sm` / `--text-base`                                                                                      | Description / message font size across sizes                                                                                                   |
| `--font-medium` / `--font-semibold`                                                                                            | Message / action-button weight                                                                                                                 |
| `--duration-normal` / `--duration-slowest`                                                                                     | Show/hide transition / loading-icon spin                                                                                                       |
| `--transition-all-fast`                                                                                                        | Action/close hover transitions                                                                                                                 |
| `--z-max`                                                                                                                      | Stack's stacking layer (above everything else, including toasts/popovers)                                                                      |

**New tokens added while migrating this file:** none — the sibling token
additions (`--color-chip-remove-on-color`, `--color-text-on-dark`,
`--color-badge-neutral-bg`, `--size-280/400/560`, `--z-max`) already
covered every repeated raw value exactly.

**Known pre-existing gap (not introduced by this migration):**
`--color-primary-light` (used for the action-button text and the default
surface's progress-bar fill) is **not defined anywhere** in `tokens/` —
it currently resolves to nothing, so those two elements inherit
`currentColor`/fall back to transparent instead of showing a tinted
primary. Flagged here rather than guessed at, since the right value
depends on a design decision (a lighter primary step for use on the
light, inverted snackbar surface) outside this migration's scope.

**Single-occurrence raw values kept as `aural-ignore`:** the warning
variant's `rgba(0, 0, 0, 0.7)` / `rgba(0, 0, 0, 0.3)` (black overlays for
contrast on that variant's light fill) and the default surface's
`rgba(0, 0, 0, 0.1)` close-hover tint — these are surface-specific
overlays, not reusable brand colors.

## 5. Props/API

Snackbar is created via `Aural.showSnackbar(message, options)`:

| Option         | Type                                                                                              | Default           | Notes                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------- |
| `description`  | `string \| null`                                                                                  | `null`            | Optional secondary line.                                              |
| `type`         | `'default' \| 'success' \| 'error' \| 'warning' \| 'info'`                                        | `'default'`       | Maps to `.aural-snackbar--{type}` (omitted for `'default'`).          |
| `duration`     | `number` (ms)                                                                                     | `4000`            | `0` disables auto-dismiss.                                            |
| `position`     | `'bottom-left' \| 'bottom-center' \| 'bottom-right' \| 'top-left' \| 'top-center' \| 'top-right'` | `'bottom-center'` | Selects/creates the matching `.aural-snackbar-container--{position}`. |
| `action`       | `{ label, onClick } \| null`                                                                      | `null`            | Renders a single `.aural-snackbar__action` button.                    |
| `dismissible`  | `boolean`                                                                                         | `true`            | Renders the close button.                                             |
| `showProgress` | `boolean`                                                                                         | `true`            | Renders the auto-dismiss progress bar (only when `duration > 0`).     |
| `onDismiss`    | `function \| null`                                                                                | `null`            | Called after the dismiss animation completes.                         |

Returns `{ dismiss }` — call `dismiss()` to close it programmatically.
Internally, the progress bar's `animation-duration` is set inline to
match `duration`, and the stack container is created lazily per
position and removed once empty.

## 6. States

| State                    | Trigger                                                   | Effect                                                                                                 |
| ------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Hidden → Show            | `--show` added ~10ms after mount                          | `translateY(100%)` (or `-100%` for top positions) → `translateY(0)` + fade in, over `0.3s`.            |
| Show → Hide              | `--hide` added before removal                             | Reverses the entrance transform + fades out, then the node is removed after `300ms`.                   |
| Variant                  | `--success/-error/-warning/-info`                         | Full-color fill instead of the default inverted surface.                                               |
| Elevated                 | `--elevated`                                              | Swaps to the standard (non-inverted) card surface with a border.                                       |
| Loading                  | `--loading`                                               | Spins `__icon` continuously.                                                                           |
| Compact                  | `--compact`                                               | Hides content/actions, leaving only the icon.                                                          |
| Action/close hover/focus | `:hover` / `:focus-visible`                               | Background tint; 2px focus ring (white ring on close for contrast on inverted surface).                |
| Reduced motion           | `prefers-reduced-motion: reduce`                          | Entrance/exit transitions and the progress-bar/icon animations are disabled.                           |
| Mobile (≤640px)          | `max-width: 640px`                                        | Edge positions go full-bleed (no radius, no side padding); `--mobile-stack` stacks actions vertically. |
| iOS safe area            | `@supports (padding-bottom: env(safe-area-inset-bottom))` | Bottom-anchored stacks add safe-area inset padding.                                                    |

## 7. Code example

```html
<div class="aural-snackbar-container aural-snackbar-container--bottom-center">
  <div class="aural-snackbar aural-snackbar--show" role="status">
    <div class="aural-snackbar__content">
      <div class="aural-snackbar__message">Item deleted</div>
    </div>
    <div class="aural-snackbar__actions">
      <button class="aural-snackbar__action">Undo</button>
    </div>
    <button class="aural-snackbar__close" aria-label="Dismiss">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
</div>
```

```javascript
Aural.showSnackbar('Item deleted', {
  action: { label: 'Undo', onClick: () => restoreItem() },
});
Aural.showSnackbar('Upload failed', { type: 'error', duration: 0 });
```

## 8. Cross-references

- **Toast** — use instead for purely informational, action-less corner notices.
- **Alert Banner** — use instead for persistent, page-level messages.
- **Badge** — `--color-badge-neutral-bg` (hover overlay) and
  `--color-chip-remove-on-color`/`--color-text-on-dark` (text/fill on a
  colored surface) are reused from Badge/Chip rather than duplicated.
