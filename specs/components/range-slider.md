# Range Slider

## 1. Metadata

|                   |                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------- |
| Name              | Range Slider                                                                                |
| Category          | Forms                                                                                       |
| Status            | Stable                                                                                      |
| CSS file          | `components/range-slider.css`                                                               |
| Naming convention | BEM (`.aural-range-slider`, `.aural-range-slider__handle`, `.aural-range-slider--vertical`) |

## 2. Overview

Range Slider is a dual-handle control for picking a min/max range,
built from scratch with `<div>`s rather than a native
`<input type="range">` (unlike Slider) — the track background/fill and
two draggable `.aural-range-slider__handle` elements are plain
positioned `<div>`s, with all drag/keyboard behavior supplied by
consumer JS (each handle gets `role="slider"` + `aria-value*`
attributes). It intentionally mirrors Slider's sizing, color variants,
and vertical-orientation mechanics so the two feel like one family, and
also supports optional paired number inputs for manual min/max entry and
step tick markers that can be highlighted as "in range".

**When to use:**

- **Bounded value selection** — picking both a minimum and maximum from a continuous range (price filters, age ranges, date ranges)
- **Visual context matters** — users benefit from seeing the selected range within the full available range
- **Filtering interfaces** — e-commerce filters, search refinement, data visualization controls
- **Approximate boundaries are acceptable** — precise values are less critical than the general range
- **Large value ranges** — 50+ possible values where individual options would be impractical to list

**When NOT to use:**

- **Precise value entry required** — use number input fields instead (or pair them with `.aural-range-slider__inputs`)
- **Fewer than 10 discrete values** — use Checkboxes or Multi-Select instead
- **Only one value needed** — use Slider (single-handle) instead
- **Non-numeric/categorical data** — use filters or dropdown menus
- **Critical precision tasks** — e.g. medical dosages or engineering specifications

## 3. Anatomy

| Class                                                    | Purpose                                                                                                            |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `.aural-range-slider`                                    | Root container — vertical flex stack of label row, track wrapper, and value display.                               |
| `.aural-range-slider__label-row`                         | Flex row for `.aural-range-slider__label`.                                                                         |
| `.aural-range-slider__label`                             | The slider's text label.                                                                                           |
| `.aural-range-slider__wrapper`                           | Positioned container for the track and handles, `height: var(--size-44)`.                                          |
| `.aural-range-slider__track-bg`                          | Full-width unfilled track background.                                                                              |
| `.aural-range-slider__track-fill`                        | The highlighted in-range segment between the two handles (positioned/sized by consumer JS).                        |
| `.aural-range-slider__handle`                            | A draggable circular handle; `--min`/`--max` modifiers for z-index layering, `--active` raises it above the other. |
| `.aural-range-slider__values`                            | Row pairing `.aural-range-slider__value--min` / `--max` display text.                                              |
| `.aural-range-slider__value`                             | One value display, with an optional `.aural-range-slider__value-label` prefix (e.g. "Min:").                       |
| `.aural-range-slider__inputs`                            | Optional row of paired number inputs for manual min/max entry.                                                     |
| `.aural-range-slider__input-group` / `__input-label`     | Wrapper + label for one manual-entry input.                                                                        |
| `.aural-range-slider__input`                             | The manual-entry `<input>` itself (styled like `.input`, but a distinct, local class).                             |
| `.aural-range-slider__limits`                            | Row pairing min/max boundary labels under the track.                                                               |
| `.aural-range-slider--sm` / `--lg`                       | Size modifiers — thinner/thicker track (4px/8px) and smaller/larger handle (16px/24px).                            |
| `.aural-range-slider--success` / `--warning` / `--error` | Color variants for track-fill, handle, and value text.                                                             |
| `.aural-range-slider__steps`                             | Absolutely-positioned row of `.aural-range-slider__step` tick markers spanning the full track.                     |
| `.aural-range-slider__step` / `--in-range`               | One tick mark; `--in-range` highlights ticks that fall between the two handles.                                    |
| `.aural-range-slider--vertical`                          | Rotates the whole control to a vertical orientation, fixed 250px length.                                           |
| `.aural-range-slider--disabled`                          | Disables the whole control (`pointer-events: none`, dimmed).                                                       |
| `.aural-range-slider__sr-label`                          | Visually-hidden (WAI clip-rect) screen-reader-only label.                                                          |

## 4. Tokens used

| Token                                                                                                        | Used for                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--color-bg-tertiary`                                                                                        | Unfilled track background                                                                                                                                    |
| `--color-primary`                                                                                            | Filled track segment, default handle fill, focus outline, value text                                                                                         |
| `--color-bg-primary`                                                                                         | Handle border (creates a ring effect against the track)                                                                                                      |
| `--color-success` / `--color-warning` / `--color-error`                                                      | Color-variant track-fill/handle fill and value text                                                                                                          |
| `--color-text-secondary` / `--color-text-muted` / `--color-text-tertiary`                                    | Slider label; min/max boundary labels; value-label prefix text                                                                                               |
| `--color-bg-primary` (inputs) / `--color-text-primary`                                                       | Manual-entry input background/text                                                                                                                           |
| `--color-border-medium`                                                                                      | Manual-entry input border                                                                                                                                    |
| `--color-bg-hover`                                                                                           | Manual-entry input hover background                                                                                                                          |
| `--color-border`                                                                                             | Step-marker fill — **note:** this semantic token has no default-theme definition, see the note below                                                         |
| `--primary-alpha-50`                                                                                         | `.aural-range-slider__step--in-range` fill — **note:** this core alpha step is not defined (the alpha scale only goes up to `--primary-alpha-40`), see below |
| `--text-sm` / `--text-xs`                                                                                    | Typography across labels, values, inputs                                                                                                                     |
| `--font-medium` / `--font-semibold`                                                                          | Label/input-label weight; value weight                                                                                                                       |
| `--space-1` / `--space-2` / `--space-3` / `--space-4`                                                        | Row gaps, tick/limits margins, input gaps, vertical-mode gap                                                                                                 |
| `--space-0-5`                                                                                                | Step tick width                                                                                                                                              |
| `--size-6` / `--size-16` / `--size-20` / `--size-24` / `--size-36` / `--size-40` / `--size-44` / `--size-48` | Track thickness, handle size (sm/default/lg), value min-width, wrapper/manual-input/handle sizing, coarse-pointer sizing                                     |
| `--radius-full` / `--radius-md`                                                                              | Track/handle corner radius; manual-entry input radius                                                                                                        |
| `--shadow-sm`                                                                                                | Handle resting shadow                                                                                                                                        |
| `--glow-primary-sm` / `--glow-success-md` / `--glow-warning-md` / `--glow-error-md`                          | Handle hover glow, per color variant                                                                                                                         |

**Bug fixes (not token additions in the usual sense — neither was flagged
by `token-audit.js`, which only catches raw literals, not unresolved
`var()` references):**

- `.aural-range-slider__step` used `var(--color-border)`, which had no
  default-theme definition (only the non-default `themes/kinetic.css`
  defined it) — same issue as `slider.css`'s `.aural-slider__tick` (see
  `specs/components/slider.md`). Fixed by adding
  `--color-border: var(--color-border-subtle)` as a semantic alias.
- `.aural-range-slider__step--in-range` used `var(--primary-alpha-50)`,
  which didn't exist — `tokens/core/colors.css`'s alpha scale stopped at
  `--primary-alpha-40`. Fixed by extending the scale one more rung
  (`--primary-alpha-50`, same `color-mix()` pattern as the existing
  rungs), so in-range step markers now render with the intended tint in
  every theme.

Several other values are left as `/* aural-ignore */`: all `0.2s`
transition durations (handle hover/active, track-fill color — not on the
shared duration scale), `.aural-range-slider--vertical`'s 250px fixed
length / 200px `min-height` (one-off layout values), and the
`.aural-range-slider__sr-label` clip-rect recipe's `1px`/`1px`/`-1px`
(the standard WAI visually-hidden idiom, reused verbatim across the
codebase).

## 5. Props/API

Range Slider is markup + CSS only — dragging, keyboard adjustment,
positioning the handles/track-fill by percentage, and syncing the value
display are all consumer JS. From `RangeSlider.stories.ts`:

| Control                                    | Maps to                                                                                     |
| ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `minValue` / `maxValue`                    | `aria-valuenow` on each handle + `.aural-range-slider__value--min`/`--max` text             |
| `min` / `max` / `step`                     | `aria-valuemin`/`aria-valuemax` on each handle; drag/keyboard step granularity              |
| `disabled`                                 | `.aural-range-slider--disabled`                                                             |
| `showValues` / `showLabels` / `showLimits` | Whether `.aural-range-slider__values` / value-labels / `.aural-range-slider__limits` render |
| `showInputs`                               | Whether `.aural-range-slider__inputs` manual-entry fields render                            |
| `size`                                     | `.aural-range-slider--sm` / (default) / `--lg`                                              |
| `variant`                                  | `.aural-range-slider--success` / `--warning` / `--error`                                    |
| `minLabel` / `maxLabel`                    | Text for `.aural-range-slider__value-label`                                                 |
| `valuePrefix` / `valueSuffix`              | Extra text wrapped around the value number (e.g. "$" / "k")                                 |
| `vertical`                                 | `.aural-range-slider--vertical`                                                             |

## 6. States

| State                       | Selector                                      | Behavior                                                                   |
| --------------------------- | --------------------------------------------- | -------------------------------------------------------------------------- |
| Handle hover                | `.aural-range-slider__handle:hover`           | Grows (`scale(1.1)`) and gains a glow + shadow                             |
| Handle active (dragging)    | `.aural-range-slider__handle:active`          | Shrinks slightly (`scale(0.95)`)                                           |
| Handle focus-visible        | `.aural-range-slider__handle:focus-visible`   | 2px solid `--color-primary` outline, 2px offset                            |
| Handle raised (active drag) | `.aural-range-slider__handle--active`         | `z-index: 4`, above the resting `--min`/`--max` handles (`z-index: 3`)     |
| Manual input hover/focus    | `.aural-range-slider__input:hover` / `:focus` | Border → `--color-primary`, background tint on hover, 2px outline on focus |
| Disabled                    | `.aural-range-slider--disabled`               | `opacity: 0.5`, `pointer-events: none`; handle cursor `not-allowed`        |
| Reduced motion              | `@media (prefers-reduced-motion: reduce)`     | Strips handle/track-fill transitions                                       |
| Responsive (≤640px)         | `@media (max-width: 640px)`                   | Handles enlarge (24px default / 20px sm) for easier touch targeting        |
| Coarse pointer              | `@media (pointer: coarse)`                    | Handle grows to 44×44px, wrapper/track thicken (48px / 8px) for touch      |

## 7. Code example

```html
<div class="aural-range-slider">
  <div class="aural-range-slider__label-row">
    <label class="aural-range-slider__label">Price range</label>
  </div>
  <div class="aural-range-slider__wrapper">
    <div class="aural-range-slider__track-bg"></div>
    <div class="aural-range-slider__track-fill"></div>
    <div
      class="aural-range-slider__handle aural-range-slider__handle--min"
      tabindex="0"
      role="slider"
      aria-label="Minimum price"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="25"
    ></div>
    <div
      class="aural-range-slider__handle aural-range-slider__handle--max"
      tabindex="0"
      role="slider"
      aria-label="Maximum price"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="75"
    ></div>
  </div>
  <div class="aural-range-slider__values">
    <div class="aural-range-slider__value aural-range-slider__value--min">
      <span class="aural-range-slider__value-label">Min:</span>25
    </div>
    <div class="aural-range-slider__value aural-range-slider__value--max">
      <span class="aural-range-slider__value-label">Max:</span>75
    </div>
  </div>
</div>
```

Accessibility notes:

- Give each handle `role="slider"`, a descriptive `aria-label` (e.g.
  "Minimum price"), and `aria-valuemin`/`aria-valuemax`/`aria-valuenow`
  kept current as the user drags.
- Support Tab to move focus between handles, Arrow keys for single-step
  adjustment, Shift+Arrow for larger (~10%) jumps, Home/End for min/max,
  and Page Up/Down for ~25% jumps.
- Always show the current min/max values, either persistently
  (`.aural-range-slider__values`) or in a tooltip on interaction.
- Add `aria-orientation="vertical"` for `.aural-range-slider--vertical`.
- Prevent handles from crossing (min never exceeds max) in the
  controlling JS.

## 8. Cross-references

- **Slider** (`specs/components/slider.md`) — the single-handle sibling;
  this component mirrors its sizing/color-variant/vertical conventions
  but is a from-scratch `<div>`-based widget, not a styled native
  `<input type="range">`.
- **Input** — `.aural-range-slider__input` (the optional manual-entry
  field) is a local, separate class from `.input`; don't conflate them.
- **Multi-Select** / **Checkbox** — use instead of Range Slider for
  fewer than 10 discrete values.
