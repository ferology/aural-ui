# Slider

## 1. Metadata

|                   |                                                                          |
| ----------------- | ------------------------------------------------------------------------ |
| Name              | Slider                                                                   |
| Category          | Forms                                                                    |
| Status            | Stable                                                                   |
| CSS file          | `components/slider.css`                                                  |
| Naming convention | BEM (`.aural-slider`, `.aural-slider__input`, `.aural-slider--vertical`) |

## 2. Overview

Slider is a custom-styled single-handle `<input type="range">`. It layers
a filled/unfilled track via a `linear-gradient` `background` on the
input itself (updated by consumer JS as the value changes) plus
vendor-prefixed pseudo-elements (`::-webkit-slider-track`/`-thumb`,
`::-moz-range-track`/`-progress`/`-thumb`) to restyle the native track
and thumb consistently across browsers. A label row shows the current
value, with optional tick marks (`.aural-slider--stepped`) and min/max
labels.

**When to use:**

- **Continuous value selection** — volume, brightness, temperature — where relative position matters more than the exact number
- **Visual feedback matters** — users benefit from seeing the immediate effect of an adjustment
- **Range with context** — users need to see their selection relative to the min/max
- **Approximate values are acceptable** and quick, fluid adjustment is wanted
- **Space-efficient controls** — compact and shows current value + range at a glance

**When NOT to use:**

- **Precise input required** — use a number input (`.input-number`) instead, especially for financial data or measurements
- **Binary choices** — use Switch or Toggle
- **2–5 discrete options** — use Radio buttons or a segmented control
- **Non-numeric/categorical data** — use Select or Radio
- **Critical precision tasks** — e.g. exact dates or phone numbers

## 3. Anatomy

| Class                                              | Purpose                                                                                                     |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `.aural-slider`                                    | Root container — vertical flex stack of the label row and the track.                                        |
| `.aural-slider__label-row`                         | Flex row pairing `.aural-slider__label` and `.aural-slider__value`.                                         |
| `.aural-slider__label`                             | Slider's text label.                                                                                        |
| `.aural-slider__value`                             | Current-value display, right-aligned, `min-width: var(--size-40)` to avoid layout shift as digits change.   |
| `.aural-slider__track`                             | Wrapper around the native `<input type="range">`.                                                           |
| `.aural-slider__input`                             | The native range input — `appearance: none`, 44px tall for touch, gradient-filled background, custom thumb. |
| `.aural-slider--sm` / `--lg`                       | Size modifiers — thinner/thicker track (4px/8px) and smaller/larger thumb (16px/24px).                      |
| `.aural-slider--success` / `--warning` / `--error` | Color variants for thumb, value text, and glow shadows.                                                     |
| `.aural-slider--stepped`                           | Enables `.aural-slider__ticks` — a row of `.aural-slider__tick` marks under the track.                      |
| `.aural-slider__tick`                              | One tick mark.                                                                                              |
| `.aural-slider__minmax`                            | Row pairing `.aural-slider__min` / `.aural-slider__max` boundary labels under the track.                    |
| `.aural-slider--vertical`                          | Rotates the whole control to a vertical orientation (`writing-mode`-based), fixed 250px length.             |

## 4. Tokens used

| Token                                                                                                     | Used for                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--color-primary`                                                                                         | Filled track portion, default thumb, focus outline, value text                                                                                                                         |
| `--color-bg-tertiary`                                                                                     | Unfilled track portion                                                                                                                                                                 |
| `--color-bg-primary`                                                                                      | Thumb border (creates a ring effect against the track)                                                                                                                                 |
| `--color-success` / `--color-warning` / `--color-error`                                                   | Color-variant thumb fill and value text                                                                                                                                                |
| `--color-text-secondary` / `--color-text-muted`                                                           | Slider label text; min/max boundary label text                                                                                                                                         |
| `--color-border`                                                                                          | Tick mark fill — **note:** this semantic token has no default-theme definition (only `themes/kinetic.css` defines it); pre-existing, not introduced by this migration — see note below |
| `--text-sm` / `--text-xs`                                                                                 | Label/value typography; min/max label typography                                                                                                                                       |
| `--font-medium` / `--font-semibold`                                                                       | Label weight; value weight                                                                                                                                                             |
| `--space-1` / `--space-2` / `--space-4`                                                                   | Row gaps, tick margin, vertical-mode gap                                                                                                                                               |
| `--space-0-5`                                                                                             | Tick mark width                                                                                                                                                                        |
| `--size-6` / `--size-16` / `--size-20` / `--size-24` / `--size-40` / `--size-44`                          | Track thickness (default), thumb size (sm/default/lg), value min-width, input height/vertical width                                                                                    |
| `--radius-full`                                                                                           | Track and thumb corner radius (fully rounded)                                                                                                                                          |
| `--shadow-sm` / `--shadow-md` / `--shadow-lg`                                                             | Thumb resting/hover/focus shadow                                                                                                                                                       |
| `--glow-primary-sm` / `--glow-primary-md` / `--glow-success-md` / `--glow-warning-md` / `--glow-error-md` | Thumb hover/focus glow, per color variant                                                                                                                                              |

**Bug fix (not a token addition):** `.aural-slider__tick` uses
`var(--color-border)`, which was not defined anywhere in
`tokens/semantic/colors.css` (only the non-default `themes/kinetic.css`
theme defined it) — in every other theme it resolved to nothing. The same
pattern existed in several other components (`chips.css`, `code-block.css`,
`command-palette.css`, `file-upload.css`, `kinetic-cards.css`,
`dialog.css`) and in `range-slider.css` (see
`specs/components/range-slider.md`). This wasn't something `token-audit.js`
flags (it only catches raw literals, not unresolved `var()` references) —
it's now fixed by adding `--color-border: var(--color-border-subtle)` as a
semantic alias in `tokens/semantic/colors.css`, so every one of those
components' borders render correctly in every theme, not just kinetic.

Several other values are left as `/* aural-ignore */`: all `0.2s`
transition durations (track-fill, thumb hover/focus — not on the shared
duration scale, same convention as `combobox.css`), the stepped-ticks row
`0.625rem` side padding (half the 1.25rem thumb width, centers ticks
under thumb travel), and `.aural-slider--vertical`'s 250px fixed length /
200px `min-height` (one-off layout values, not design tokens).

## 5. Props/API

Slider is pure CSS/markup wrapping a native `<input type="range">` — all
value-display syncing (updating `.aural-slider__value` and the gradient
`background` as the input changes) is consumer JS. From
`Slider.stories.ts`:

| Control                | Maps to                                                                   |
| ---------------------- | ------------------------------------------------------------------------- |
| `label`                | Text content of `.aural-slider__label`                                    |
| `value`                | `value` attribute on `.aural-slider__input` + `.aural-slider__value` text |
| `min` / `max` / `step` | Native `min`/`max`/`step` attributes                                      |
| `disabled`             | `disabled` attribute on `.aural-slider__input`                            |
| `showValue`            | Whether `.aural-slider__value` is rendered                                |
| `showLabels`           | Whether `.aural-slider__minmax` is rendered                               |
| `size`                 | `.aural-slider--sm` / (default) / `.aural-slider--lg`                     |
| variant                | `.aural-slider--success` / `--warning` / `--error`                        |

## 6. States

| State             | Selector                                  | Behavior                                                                       |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------------------------ |
| Hover             | `.aural-slider__input:hover`              | Slight opacity dip (0.9); thumb grows (`scale(1.1)`) and gains a glow + shadow |
| Focus-visible     | `.aural-slider__input:focus-visible`      | 2px solid `--color-primary` outline (2px offset) + stronger thumb glow         |
| Active (dragging) | `.aural-slider__input:active`             | Thumb shrinks slightly (`scale(0.95)`)                                         |
| Disabled          | `.aural-slider__input:disabled`           | `cursor: not-allowed`, `opacity: 0.5`, thumb cursor also `not-allowed`         |
| Reduced motion    | `@media (prefers-reduced-motion: reduce)` | Strips input/thumb transitions                                                 |

## 7. Code example

```html
<div class="aural-slider">
  <div class="aural-slider__label-row">
    <label class="aural-slider__label">Volume</label>
    <span class="aural-slider__value">50</span>
  </div>
  <input type="range" class="aural-slider__input" min="0" max="100" value="50" />
</div>

<!-- With tick marks and min/max labels -->
<div class="aural-slider aural-slider--stepped aural-slider--success">
  <div class="aural-slider__label-row">
    <label class="aural-slider__label">Brightness</label>
    <span class="aural-slider__value">75</span>
  </div>
  <div class="aural-slider__track">
    <input type="range" class="aural-slider__input" min="0" max="100" step="25" value="75" />
    <div class="aural-slider__ticks">
      <span class="aural-slider__tick"></span>
      <span class="aural-slider__tick"></span>
      <span class="aural-slider__tick"></span>
      <span class="aural-slider__tick"></span>
      <span class="aural-slider__tick"></span>
    </div>
  </div>
  <div class="aural-slider__minmax">
    <span class="aural-slider__min">0</span>
    <span class="aural-slider__max">100</span>
  </div>
</div>
```

Accessibility notes:

- Provide a descriptive `aria-label` (or associated `<label>`) that
  includes purpose, range, and current value.
- Native range inputs give Arrow keys (increment/decrement), Home/End
  (jump to min/max), and Page Up/Down (larger increments) for free.
- Always show the current value visually (`.aural-slider__value`), not
  just on interaction.
- For `.aural-slider--vertical`, add `aria-orientation="vertical"`.
- Keep the thumb's touch target at minimum 44×44px on touch devices
  (already satisfied by the default `height: var(--size-44)` on the
  input, independent of the visual track thickness).

## 8. Cross-references

- **Range Slider** (`specs/components/range-slider.md`) — the dual-handle
  sibling for selecting a min/max range; shares nearly identical sizing,
  color-variant, and vertical-orientation conventions, but is a from-scratch
  `<div>`-based widget rather than a styled native `<input type="range">`.
- **Input** — use `.input-number` instead of Slider when exact numeric
  entry is required.
- **Switch** / **Radio** — use instead of Slider for binary or small
  discrete choices.
