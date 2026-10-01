# Badge

## 1. Metadata

|                   |                                              |
| ----------------- | -------------------------------------------- |
| Name              | Badge                                        |
| Category          | Data Display                                 |
| Status            | Stable                                       |
| CSS file          | `components/badge.css`                       |
| Naming convention | Flat kebab-case (`.badge`, `.badge-primary`) |

## 2. Overview

Badge is a small, compact label used to add status, category, or count
information without cluttering the surrounding UI. It's an inline-flex
pill (or rounded rect) with a semantic color variant, typically wrapping
one or two words or a number.

**When to use:**

- **Status indicators** — order status, user status, process state (Active, Pending, Failed)
- **Counts & numbers** — notification counts, unread messages, quantities
- **Categories & tags** — label content by topic, type, or classification
- **Metadata** — version numbers, dates, or other supplementary info
- **Feature flags** — highlight new, beta, or experimental features

**When NOT to use:**

- For actions — badges are labels, not buttons; if it needs to be clicked, use a `<button>` (optionally styled to look badge-like) with a proper `aria-label`, not a bare `<span class="badge">`
- For long text — badge copy should be 1–3 words; anything longer belongs in body text or a tooltip
- As the _only_ signal for critical information — color alone isn't accessible; pair it with text or an icon
- Stacked with punctuation or redundant decoration — keep badges terse and scannable

## 3. Anatomy

| Class                                                                                   | Purpose                                                                                                              |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `.badge`                                                                                | Base class — inline-flex pill with icon gap, uppercase tracked text, `border-radius: var(--radius-full)`.            |
| `.badge-primary` / `.badge-success` / `.badge-warning` / `.badge-error` / `.badge-info` | Semantic color variants, each backed by a dedicated `--color-badge-{variant}-bg`/`-text` token pair.                 |
| `.badge-neutral`                                                                        | Low-emphasis variant using a translucent white background and `--color-text-secondary`.                              |
| `.badge-sm` / `.badge-lg`                                                               | Size modifiers adjusting padding and font-size.                                                                      |
| `.badge-dot`                                                                            | Modifier enabling a nested `.dot` indicator (small solid circle using `currentColor`), used for presence/alert dots. |

## 4. Tokens used

| Token                                                     | Used for                                                                            |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `--color-badge-primary-bg` / `--color-badge-primary-text` | `.badge-primary`                                                                    |
| `--color-badge-success-bg` / `--color-badge-success-text` | `.badge-success`                                                                    |
| `--color-badge-warning-bg` / `--color-badge-warning-text` | `.badge-warning`                                                                    |
| `--color-badge-error-bg` / `--color-badge-error-text`     | `.badge-error`                                                                      |
| `--color-badge-info-bg` / `--color-badge-info-text`       | `.badge-info`                                                                       |
| `--color-badge-neutral-bg`                                | `.badge-neutral` background (new semantic token — see note below)                   |
| `--color-text-secondary`                                  | `.badge-neutral` text                                                               |
| `--space-1` / `--space-2` / `--space-3`                   | Padding at default/large sizes, icon gap                                            |
| `--space-0-5`                                             | Padding at `.badge-sm` (new core token — see note below)                            |
| `--text-xs` / `--text-sm` / `--text-2xs`                  | Font size at default / `.badge-lg` / `.badge-sm` (`--text-2xs` is a new core token) |
| `--font-semibold`                                         | Font weight                                                                         |
| `--tracking-wide`                                         | Letter spacing (uppercase label style)                                              |
| `--leading-none`                                          | Line height                                                                         |
| `--radius-full`                                           | Pill shape                                                                          |
| `--size-6`                                                | `.badge-lg` vertical padding and the `.dot` indicator's width/height                |

**New tokens added while migrating this file:**

- `--text-2xs: 0.625rem` (`tokens/core/typography.css`) — `.badge-sm`'s 10px
  label was a repeated raw value (also used identically in `avatar.css`),
  with no font-size step below `--text-xs` (12px).
- `--space-0-5: 0.125rem` (`tokens/core/spacing.css`) — `.badge-sm`'s 2px
  vertical padding, also used identically in `code-block.css`.
- `--color-badge-neutral-bg: rgba(255, 255, 255, 0.1)` (`tokens/semantic/colors.css`) —
  fills a gap where every other badge variant already had a dedicated
  semantic bg/text token pair except neutral, which was a raw literal.

## 5. Props/API

Badge is pure CSS/markup — there is no JS-driven API. The Storybook story
models variant/size/icon as documentation-only controls that map directly
to the classes above (e.g. `variant: 'success'` → `.badge-success`).

## 6. States

Badge is non-interactive by default and has no hover/focus/disabled
states of its own. If a badge is made clickable (e.g. a removable tag),
it must be implemented as a `<button>` and inherit that element's own
focus-visible/hover/disabled states — Badge itself does not define them.

## 7. Code example

```html
<!-- Status -->
<span class="badge badge-success">Active</span>

<!-- Size variants -->
<span class="badge badge-primary badge-sm">Small</span>
<span class="badge badge-primary badge-lg">Large</span>

<!-- With icon -->
<span class="badge badge-success">
  <i data-lucide="check-circle"></i>
  Verified
</span>

<!-- Notification count on an icon button -->
<div style="position: relative; display: inline-flex;">
  <button class="btn btn-ghost" aria-label="Notifications, 3 unread">
    <i data-lucide="bell"></i>
  </button>
  <span
    class="badge badge-error badge-sm"
    aria-hidden="true"
    style="position: absolute; top: -4px; right: -4px;"
  >
    3
  </span>
</div>
```

Accessibility notes:

- For notification badges, put the count in the parent control's
  `aria-label` (e.g. "Notifications, 3 unread") and mark the visual badge
  `aria-hidden="true"` — the count shouldn't be announced twice.
- If a badge is interactive, it must be a real `<button>` with its own
  `aria-label`, reachable and operable by keyboard (Tab, Enter, Space).

## 8. Cross-references

- **Button** — notification-count badges are almost always paired with an
  icon button, absolutely positioned on top of it (see example above).
- **Avatar** — status dots on avatars use the same small-circle pattern as
  `.badge-dot .dot`, and share the `--text-2xs` token for compact labels.
- **Chip** — Chip is the interactive, removable sibling of Badge; reach
  for Chip instead of a clickable badge when the element needs to support
  selection or removal.
