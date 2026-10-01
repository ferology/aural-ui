# Chips

## 1. Metadata

|                   |                                                   |
| ----------------- | ------------------------------------------------- |
| Name              | Chips                                             |
| Category          | Data Display                                      |
| Status            | Stable                                            |
| CSS file          | `components/chips.css`                            |
| Naming convention | BEM (`.aural-chip__text`, `.aural-chip--primary`) |

## 2. Overview

Chips (also known as tags or pills) are compact, removable elements for
tags, filters, and multi-value selections. They work either standalone
(`.aural-chip--standalone`, e.g. a static filter list) or inside a
chip-input container (`.aural-chips`) where users type to add new chips
alongside a text input — the classic "tag input" pattern.

**When to use:**

- Multi-select filters (e.g. selected categories above a search result list)
- Tag/skill input fields where users add and remove discrete values
- Compact display of multiple short labels (e.g. a user's skills, a post's topics)

**When NOT to use:**

- A single non-removable status label — use Badge instead
- An action button styled as a pill — use Button
- Long text content — chip copy should stay to a word or two, like Badge

## 3. Anatomy

| Class                                                                     | Purpose                                                                                                               |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `.aural-chips`                                                            | Outer wrapper for the chip-input pattern (position context for the container below it).                               |
| `.aural-chips__container`                                                 | Bordered, wrapping flex row holding chips + the text input; hover/focus-within states.                                |
| `.aural-chip`                                                             | A single chip — rounded-pill, secondary background, primary text, wraps `__text` + optional `__remove`.               |
| `.aural-chip__text`                                                       | The chip's label text, truncated with ellipsis if it overflows.                                                       |
| `.aural-chip__remove`                                                     | Circular "×" remove button; meets a 44×44px touch target via `min-width`/`min-height` regardless of visual chip size. |
| `.aural-chips__input`                                                     | The text input embedded in `.aural-chips__container` for typing new chip values.                                      |
| `.aural-chip--primary` / `--success` / `--warning` / `--error` / `--info` | Solid semantic-color variants (white text/remove-icon on a colored fill).                                             |
| `.aural-chip--sm` / `--lg` / `--xl`                                       | Size modifiers (default is medium): smaller/larger padding, font-size, gap, and remove-icon size.                     |
| `.aural-chip--with-avatar` + `.aural-chip__avatar`                        | Leading circular avatar image inside a chip (e.g. "assigned to" chips).                                               |
| `.aural-chip__icon`                                                       | Leading icon slot (alternative to an avatar) inside a chip.                                                           |
| `.aural-chip--standalone`                                                 | Use when a chip is NOT inside `.aural-chips__container` (e.g. a static filter list).                                  |
| `.aural-chip--clickable`                                                  | Interactive affordance: pointer cursor, lift + shadow on hover, press on active.                                      |
| `.aural-chips-list`                                                       | Wrapping flex container for a group of standalone chips.                                                              |
| `.aural-chips__container--disabled`                                       | Dims the whole input container and disables its chips/input.                                                          |
| `.aural-chips__container--error` + `.aural-chips__error-message`          | Error-state border/focus glow plus an error message below the container.                                              |
| `.aural-chips__limit` / `--warning` / `--max`                             | Right-aligned "N/limit" counter text below the container, with warning/max color escalation.                          |
| `.aural-chip__sr-only`                                                    | Visually-hidden text for screen-reader-only context within a chip.                                                    |

## 4. Tokens used

| Token                                                                                        | Used for                                                                                      |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `--color-bg-primary` / `--color-bg-secondary` / `--color-bg-tertiary` / `--color-bg-hover`   | Input background, chip background, disabled-container background, container hover             |
| `--color-border`                                                                             | Chip-input container border                                                                   |
| `--color-primary` / `--color-success` / `--color-warning` / `--color-error` / `--color-info` | Solid color variants, error-state border/message, limit-warning/max color                     |
| `--color-tab-badge-bg`                                                                       | Remove-icon hover background on a solid variant chip (shared translucent-white overlay token) |
| `--color-chip-remove-on-color`                                                               | Remove-icon default color on a solid variant chip                                             |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-muted`                     | Chip/input text, default remove-icon color, placeholder/limit text                            |
| `--font-medium`                                                                              | Chip text weight                                                                              |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg` / `--text-2xl`                       | Size-variant font sizes and remove-icon glyph sizes                                           |
| `--radius-full` / `--radius-md`                                                              | Chip/remove-button pill shape, input-container corners                                        |
| `--shadow-sm` / `--glow-error-sm`                                                            | Clickable-chip hover elevation, error-state focus glow                                        |
| `--size-16` / `--size-20` / `--size-24` / `--size-44`                                        | Icon/avatar/remove-button dimensions across variants and the touch target                     |
| `--space-1` … `--space-6`, `--space-32`                                                      | Padding, gaps, and the input's minimum width                                                  |

**New tokens added while migrating this file:**

- `--color-chip-remove-on-color: rgba(255, 255, 255, 0.8)`
  (`tokens/semantic/colors.css`, "Chips" section) — the remove-icon's
  default color on a solid variant chip (primary/success/warning/error/
  info) had no existing token; this literal was repeated identically
  across all five variants, so it's named once rather than duplicated.
- The remove-icon's _hover_ background on a solid variant chip reuses the
  existing `--color-tab-badge-bg` token (`rgba(255, 255, 255, 0.2)`)
  rather than adding a near-duplicate — same translucent-white-overlay
  value already established for Tabs' badge-on-colored-background pattern.

**Warnings left as `aural-ignore`:**

- `.aural-chip__remove:hover`'s `rgba(0, 0, 0, 0.1)` (default/neutral chip
  variant) — a one-off neutral hover scrim, not tied to the primary color ramp.
- `.aural-chip--lg .aural-chip__remove::before`'s `font-size: 1.375rem` —
  a one-off glyph size between `--text-xl` (20px) and `--text-2xl` (24px).
- `.aural-chip__sr-only`'s `width`/`height: 1px`, `margin: -1px` — the
  standard WAI visually-hidden clip-rect idiom, reused verbatim from
  `components/combobox.css` and `components/switch.css`.

**Warnings left as-is (non-blocking category):** three `transition: all
0.2s ease` declarations (container, chip, remove button) — raw
durations, a non-blocking audit category repository-wide.

**Pre-existing, already-tokenized:** `.aural-chip--xl` and its
`.aural-chip__remove` (padding `var(--space-3) var(--space-5)`, gap
`var(--space-4)`, font-size `var(--text-lg)`, remove-button
`var(--space-6)` square, glyph `var(--text-2xl)`) — added in a prior pass
with 0 audit errors; left unchanged here.

## 5. Props/API

Chips is pure CSS/markup — there is no JS-driven API. Adding/removing
chips from the input pattern (`.aural-chips__container` +
`.aural-chips__input`) is consumer-authored JS that inserts/removes
`.aural-chip` elements and keeps the trailing `.aural-chips__input`
focused.

## 6. States

| State                  | Trigger                                        | Effect                                                                                               |
| ---------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Default                | `.aural-chip`                                  | Static pill, secondary background, primary text.                                                     |
| Container hover        | `.aural-chips__container:hover`                | Border turns primary, background tints hover.                                                        |
| Container focus-within | `.aural-chips__container:focus-within`         | 2px primary outline, 2px offset, border primary.                                                     |
| Remove hover/focus     | `.aural-chip__remove:hover` / `:focus-visible` | Background scrim appears (or variant-specific tint); 2px focus ring.                                 |
| Clickable hover/active | `.aural-chip--clickable:hover` / `:active`     | Lifts `-1px` with `--shadow-sm` on hover; resets on active.                                          |
| Disabled               | `.aural-chips__container--disabled`            | 50% opacity, `cursor: not-allowed`, remove button and input disabled.                                |
| Error                  | `.aural-chips__container--error`               | Border and (on focus-within) a glow ring turn `--color-error`; paired `.aural-chips__error-message`. |
| Limit warning / max    | `.aural-chips__limit--warning` / `--max`       | Counter text turns warning/error color as the limit is approached/reached.                           |
| Reduced motion         | `prefers-reduced-motion: reduce`               | Chip, remove-button, container, and clickable transitions disabled.                                  |

## 7. Code example

```html
<!-- Standalone filter chips -->
<div class="aural-chips-list" role="list">
  <div class="aural-chip aural-chip--primary aural-chip--standalone" role="listitem">
    <span class="aural-chip__text">Design</span>
  </div>
  <div class="aural-chip aural-chip--standalone" role="listitem">
    <span class="aural-chip__text">JavaScript</span>
    <button class="aural-chip__remove" aria-label="Remove JavaScript"></button>
  </div>
</div>

<!-- Tag input -->
<div class="aural-chips">
  <div class="aural-chips__container">
    <div class="aural-chip">
      <span class="aural-chip__text">HTML</span>
      <button class="aural-chip__remove" aria-label="Remove HTML"></button>
    </div>
    <input
      type="text"
      class="aural-chips__input"
      placeholder="Add skill…"
      aria-label="Add new skill"
    />
  </div>
</div>

<!-- Extra-large chip -->
<div class="aural-chip aural-chip--xl aural-chip--standalone">
  <span class="aural-chip__text">Featured</span>
  <button class="aural-chip__remove" aria-label="Remove Featured"></button>
</div>
```

Accessibility notes (from `docs/components/chips.html`):

- Give every `.aural-chip__remove` a specific `aria-label` (e.g. "Remove JavaScript"), not a generic "Remove".
- Wrap a group of standalone chips in `role="list"` with each chip as `role="listitem"` when they represent a meaningful collection.
- Label the chip-input field itself (`aria-label="Add new chip"` or similar) since it has no visible `<label>`.
- `.aural-chip__remove` keeps a 44×44px hit target at every chip size, even though its visual glyph stays small.

## 8. Cross-references

- **Badge** — Chip is the interactive, removable sibling of Badge; reach for Badge instead when the element is a static, non-removable label.
- **Avatar** — `.aural-chip__avatar` reuses a small circular-image pattern similar to Avatar, sized to `--size-24`.
- **Button** — chip-input error/limit messaging follows the same semantic-color conventions used by form controls like Button's `--danger` variant.
