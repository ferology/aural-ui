# Radio

## 1. Metadata

|                   |                                                                          |
| ----------------- | ------------------------------------------------------------------------ |
| Name              | Radio                                                                    |
| Category          | Forms                                                                    |
| Status            | Stable                                                                   |
| CSS file          | `components/radio.css`                                                   |
| Naming convention | Flat kebab-case (`.radio`, `.radio-sm`, `.radio-group`, `.radio-button`) |

## 2. Overview

Radio is a custom-styled `<input type="radio">` for mutually-exclusive,
single-choice groups, built on the same "hidden real input + sibling
`<span>` with a generated circle" pattern as Checkbox. The outer ring is
drawn on `::before`; the checked inner dot is a separate `::after`
pseudo-element with its own pop-in `scale()` keyframe animation. A
`.radio-button` variant restyles the same markup into a flat, tab-like
button (no visible circle), and `.radio-group-buttons` /
`.radio-group-attached` lay a row of those out as a segmented control.

**When to use:**

- **Mutually exclusive choices** — users must select exactly one option from a set
- **Small option sets** — best with 2–7 options; use Select for longer lists
- **All options visible** — when it matters that users see every choice at once (vs. a collapsed dropdown)
- **Required selection** — when a choice must be made before proceeding

**When NOT to use:**

- **Multiple selections** — use Checkbox
- **8+ options** — use Select to save space
- **Binary on/off toggles** — use Switch or a single Checkbox
- **Settings that apply immediately** — use Switch

**Organization guidance (from the component's doc page):** wrap related
radios in `.radio-group`, pre-select a sensible default, and keep labels
short — add `.radio-with-description` only when extra context is needed.

## 3. Anatomy

| Class                          | Purpose                                                                                                                                                                                                    |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.radio`                       | Root `<label>` — inline-flex row, `min-height: var(--size-44)` touch target, hides the native input, owns hover/focus/disabled state.                                                                      |
| `.radio > input[type="radio"]` | The real radio input — visually hidden, stays in the a11y tree and keyboard-focusable.                                                                                                                     |
| `.radio > span`                | Label text; `padding-left` reserves room for the absolutely-positioned circle; its `::before` draws the outer ring, `::after` the checked inner dot.                                                       |
| `.radio-sm` / `.radio-lg`      | Size modifiers — 16px/24px circle, 36px/52px `min-height`, proportionally resized inner dot.                                                                                                               |
| `.radio-only`                  | Hides the label text visually (`font-size: 0`) for an icon-only radio; span is sized to the 20×20 circle instead of using `padding-left`.                                                                  |
| `.radio-with-description`      | Stacks label + `.radio-description` text, top-aligns the circle with the label's first line.                                                                                                               |
| `.radio-description`           | Secondary helper text used inside `.radio-with-description`.                                                                                                                                               |
| `.radio-button`                | Flat button-style variant — hides the circle (`::before`/`::after` set to `display: none`), styles the label itself as a bordered, centered button; `:has(input:checked)` fills it with `--color-primary`. |
| `.radio-group`                 | Vertical layout wrapper, with `.radio-group-label` and `.radio-group-description`.                                                                                                                         |
| `.radio-group-horizontal`      | Row layout modifier for `.radio-group` with wrapping.                                                                                                                                                      |
| `.radio-group-buttons`         | Row layout for `.radio-button` children with a gap between them (unattached segmented control).                                                                                                            |
| `.radio-group-attached`        | Row layout for `.radio-button` children with no gap and shared borders (attached segmented control); rounds only the first/last button's outer corners.                                                    |

Note: `Radio.stories.ts`'s `CardStyle` story renders a `.radio-card` /
`.radio-card-content` pricing-card pattern, but no `.radio-card` rule
exists in `components/radio.css` — that story relies entirely on
inline styles, not a shipped component class. Don't treat `.radio-card`
as part of this component's anatomy.

## 4. Tokens used

| Token                                                                                           | Used for                                                                         |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `--color-radio-bg` / `--color-radio-border`                                                     | Unchecked circle background/border; also `.radio-button`'s rest-state background |
| `--color-radio-border-hover`                                                                    | Border color on hover (unchecked, enabled)                                       |
| `--color-bg-glass-light`                                                                        | Hover background tint (unchecked circle, and `.radio-button` hover)              |
| `--color-radio-checked-bg` / `--color-radio-checked-border`                                     | Checked circle background/border                                                 |
| `--color-radio-dot`                                                                             | Inner checked dot color                                                          |
| `--color-primary`                                                                               | Focus-visible outline; `.radio-button` checked fill (via `:has()`)               |
| `--color-text-primary`                                                                          | Label text color                                                                 |
| `--color-text-secondary`                                                                        | `.radio-description` text color                                                  |
| `--color-border-subtle` / `--color-border-medium`                                               | `.radio-button` border (rest / hover)                                            |
| `--font-sans` / `--text-base` / `--text-sm` / `--text-lg` / `--font-semibold` / `--font-normal` | Typography across sizes and group labels                                         |
| `--leading-normal`                                                                              | Base label line height                                                           |
| `--space-2` / `--space-3` / `--space-4` / `--space-6`                                           | Circle-to-label gap (per size), `.radio-button` padding, group spacing           |
| `--size-6`                                                                                      | Inner dot's `left` offset at the default size                                    |
| `--size-16` / `--size-20` / `--size-24`                                                         | Circle dimensions at sm / default / lg                                           |
| `--size-36` / `--size-44` / `--size-52`                                                         | `.radio` `min-height` at sm / default / lg                                       |
| `--radius-md`                                                                                   | `.radio-button` / attached-group corner radius                                   |
| `--transition-all-fast`                                                                         | Hover/focus/checked transitions, `.radio-button` transitions                     |

Several small geometric values are left as `/* aural-ignore */` rather
than tokenized, since they're derived from circle-centering math specific
to each size step, not reusable design values: the sm/lg inner-dot
`width`/`height`/`left` offsets (`radio.css` sm circle: `left: 5px`; lg
circle: `width/height: 10px`, `left: 7px`), and `.radio-group-attached`'s
`margin-left: -1px` (overlaps the adjacent button's border for a seamless
attached group, same pattern as `tabs.css`'s underline overlap).

## 5. Props/API

Radio is pure CSS/markup — there is no JS-driven init function.
`Radio.stories.ts` models a group-oriented API surface:

| Story arg                                               | Maps to                                                                                         |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `name`                                                  | Shared `name` attribute across all radios in the group (required for native mutual exclusivity) |
| `options` (`{label, value, description?, disabled?}[]`) | One `.radio` per entry                                                                          |
| `selected`                                              | The option whose `value` gets the `checked` attribute                                           |
| `disabled`                                              | Disables every radio in the group                                                               |
| `layout` (`stacked`/`inline`)                           | `.radio-group` default (column) vs. row layout with wrapping                                    |
| `size` (`sm`/`md`/`lg`)                                 | `.radio-sm` / (none) / `.radio-lg`                                                              |
| `groupLabel`                                            | Text content of `.radio-group-label`                                                            |

## 6. States

| State                         | Selector                                             | Behavior                                                                                                 |
| ----------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Default (unchecked)           | `.radio > input + span::before`                      | Subtle bordered circle, no fill                                                                          |
| Hover                         | `.radio:hover > input:not(:disabled) + span::before` | Border → `--color-radio-border-hover`, background tint `--color-bg-glass-light`                          |
| Checked                       | `.radio > input:checked + span::before` / `::after`  | Ring fills `--color-radio-checked-bg`; inner dot animates in via `radio-pop` (scale 0 → 1.2 → 1, 0.2s)   |
| Focus-visible                 | `.radio > input:focus-visible + span::before`        | 2px solid `--color-primary` outline, 2px offset                                                          |
| Disabled                      | `.radio > input:disabled + span`                     | `opacity: 0.5`; `.radio:has(input:disabled)` sets `cursor: not-allowed` on the whole label               |
| `.radio-button` hover         | `.radio-button:hover`                                | Border → `--color-border-medium`, background tint                                                        |
| `.radio-button` checked       | `.radio-button:has(input:checked)`                   | Fills with `--color-primary` background/border, white text                                               |
| `.radio-button` focus-visible | `.radio-button:has(input:focus-visible)`             | 2px solid `--color-primary` outline, 2px offset, applied to the button itself                            |
| High contrast                 | `@media (prefers-contrast: high)`                    | Circle border-width increases to 3px                                                                     |
| Reduced motion                | `@media (prefers-reduced-motion: reduce)`            | Strips circle/`.radio-button` transitions; inner dot renders at `scale(1)` immediately, no pop animation |

## 7. Code example

```html
<!-- Group -->
<div class="radio-group">
  <div class="radio-group-label">Select your plan</div>
  <label class="radio">
    <input type="radio" name="plan" value="free" checked />
    <span>Free - $0/month</span>
  </label>
  <label class="radio">
    <input type="radio" name="plan" value="pro" />
    <span>Pro - $9/month</span>
  </label>
</div>

<!-- With description -->
<label class="radio radio-with-description">
  <input type="radio" name="shipping" value="standard" checked />
  <span>
    Standard Shipping
    <span class="radio-description">Delivery in 5-7 business days</span>
  </span>
</label>

<!-- Attached button group (segmented control) -->
<div class="radio-group radio-group-attached">
  <label class="radio radio-button">
    <input type="radio" name="period" value="day" checked />
    <span>Day</span>
  </label>
  <label class="radio radio-button">
    <input type="radio" name="period" value="week" />
    <span>Week</span>
  </label>
</div>
```

Accessibility notes:

- All radios in a group **must** share the same `name` attribute — this
  is what gives native mutual-exclusivity and arrow-key navigation.
- Each radio needs a unique `value`.
- Wrap each input in a `<label>` for a full click target.
- Label the group itself with `.radio-group-label` or a
  `<fieldset>`/`<legend>`.
- Arrow keys navigate within a group; Tab moves between groups (native
  browser behavior, no extra JS required).

## 8. Cross-references

- **Checkbox** — the multi-selection sibling; use it when more than one
  option can be chosen.
- **Switch** (`specs/components/switch.md`) — use instead of a single
  Radio pair for an immediate-effect on/off toggle.
- **Select** — use instead of Radio once the option count exceeds ~7.
- **Tabs** — `.radio-group-attached`'s segmented-control look is visually
  similar to Tabs but is form-semantics (a radio group), not navigation;
  don't substitute one for the other.
