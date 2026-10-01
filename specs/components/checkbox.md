# Checkbox

## 1. Metadata

|                   |                                                                  |
| ----------------- | ---------------------------------------------------------------- |
| Name              | Checkbox                                                         |
| Category          | Forms                                                            |
| Status            | Stable                                                           |
| CSS file          | `components/checkbox.css`                                        |
| Naming convention | Flat kebab-case (`.checkbox`, `.checkbox-sm`, `.checkbox-group`) |

## 2. Overview

Checkbox is a custom-styled `<input type="checkbox">` built on the
"real input + sibling `<span>` with a `::before` box" pattern: the native
input is visually hidden (not `display:none` — it stays in the
accessibility tree and keyboard-focusable) and a generated box on the
`<span>` draws the visible square, checkmark, and indeterminate dash via
inline SVG `background-image`s swapped per state.

**When to use:**

- **Multiple selections** — when users can select zero, one, or many options from a list
- **Binary settings** — toggleable features like "Remember me" or "Show preview" that are part of a form submission
- **Agreeing to terms** — accepting policies or terms of service
- **Filtering options** — multi-select filters in search or data tables
- **Select-all patterns** — a parent checkbox using `:indeterminate` to reflect partial selection of its children (see `Checkbox.stories.ts`'s `SelectAllPattern` story)

**When NOT to use:**

- **Settings that apply immediately with no submit step** — use Switch instead (see `specs/components/switch.md`)
- **Exactly one choice from a set** — use Radio instead
- **Free text input** — use Input

**Organization guidance (from the component's doc page):** wrap related
checkboxes in `<fieldset>`/`<legend>` or `.checkbox-group`, keep labels
short, and separate distinct groups with headings or dividers.

## 3. Anatomy

| Class                                | Purpose                                                                                                                                                               |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.checkbox`                          | Root `<label>` — inline-flex row, `min-height: var(--size-44)` touch target, hides the native input and owns hover/focus/disabled state via descendant selectors.     |
| `.checkbox > input[type="checkbox"]` | The real checkbox input — visually hidden (`position: absolute; opacity: 0; width: 0; height: 0`), stays in the a11y tree and keyboard-focusable.                     |
| `.checkbox > span`                   | Label wrapper — its `::before` pseudo-element draws the visible box (20×20px default); its text content is the visible label.                                         |
| `.checkbox-sm` / `.checkbox-lg`      | Size modifiers — 16px/24px box, 36px/52px `min-height`, smaller/larger gap and checkmark `background-size`.                                                           |
| `.checkbox-only`                     | Hides the label text visually (`font-size: 0`) for an icon-only checkbox; text remains in the a11y tree (not `aria-label` — relies on the visually-hidden text node). |
| `.checkbox-with-description`         | Stacks label + `.checkbox-description` text under it, top-aligns the box with the label's first line.                                                                 |
| `.checkbox-description`              | Secondary helper text used inside `.checkbox-with-description`.                                                                                                       |
| `.checkbox-group`                    | Vertical layout wrapper for a set of related checkboxes, with `.checkbox-group-label` and `.checkbox-group-description`.                                              |
| `.checkbox-group-horizontal`         | Row layout modifier for `.checkbox-group` with wrapping.                                                                                                              |

## 4. Tokens used

| Token                                                                         | Used for                                                                     |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `--color-checkbox-bg` / `--color-checkbox-border`                             | Unchecked box background/border                                              |
| `--color-checkbox-border-hover`                                               | Border color on hover (unchecked, enabled)                                   |
| `--color-bg-glass-light`                                                      | Hover background tint (unchecked, enabled)                                   |
| `--color-checkbox-checked-bg` / `--color-checkbox-checked-border`             | Checked box background/border                                                |
| `--color-checkbox-indeterminate-bg`                                           | Indeterminate box background (shares the checked border color)               |
| `--color-primary`                                                             | Focus-visible outline                                                        |
| `--color-text-primary`                                                        | Label text color                                                             |
| `--color-text-secondary`                                                      | `.checkbox-description` text color                                           |
| `--font-sans` / `--text-base` / `--text-sm` / `--text-lg` / `--font-semibold` | Typography across sizes and group labels                                     |
| `--leading-normal` / `--leading-relaxed`                                      | Line height for label / description                                          |
| `--space-0-5`                                                                 | `.checkbox-with-description` box top offset (`margin-top`)                   |
| `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-6`           | Gaps in box-to-label spacing (per size), group spacing, horizontal group gap |
| `--size-16` / `--size-20` / `--size-24`                                       | Box dimensions at sm / default / lg                                          |
| `--size-36` / `--size-44` / `--size-52`                                       | `.checkbox` `min-height` at sm / default / lg                                |
| `--radius-sm`                                                                 | Box corner radius                                                            |
| `--transition-all-fast`                                                       | Hover/focus/checked transitions                                              |

One value is left as `/* aural-ignore */` rather than tokenized:
`.checkbox-only`'s `font-size: 0` on the label `<span>` (a visibility
trick to collapse the text node, not a type-scale value — same pattern
used by `.radio-only` and `.toggle__label`).

## 5. Props/API

Checkbox is pure CSS/markup — there is no JS-driven init function. The
`:indeterminate` property must be set via JavaScript (it has no HTML
attribute); `Checkbox.stories.ts` sets it with
`input.indeterminate = true` and mirrors it to `aria-checked="mixed"`.

| Story arg               | Maps to                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| `label`                 | Text content of the `<span>`                                                                      |
| `checked`               | `input` attribute `checked`                                                                       |
| `disabled`              | `input` attribute `disabled`                                                                      |
| `indeterminate`         | `input.indeterminate` set via JS + `aria-checked="mixed"`                                         |
| `size` (`sm`/`md`/`lg`) | `.checkbox-sm` / (none) / `.checkbox-lg`                                                          |
| `description`           | Adds `.checkbox-with-description` + a `.checkbox-description` span, linked via `aria-describedby` |

## 6. States

| State               | Selector                                                | Behavior                                                                                                           |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Default (unchecked) | `.checkbox > input + span::before`                      | Subtle bordered box, no fill                                                                                       |
| Hover               | `.checkbox:hover > input:not(:disabled) + span::before` | Border → `--color-checkbox-border-hover`, background tint `--color-bg-glass-light`                                 |
| Checked             | `.checkbox > input:checked + span::before`              | Filled `--color-checkbox-checked-bg`, inline SVG checkmark                                                         |
| Indeterminate       | `.checkbox > input:indeterminate + span::before`        | Filled `--color-checkbox-indeterminate-bg`, inline SVG dash (checked state takes priority if both are somehow set) |
| Focus-visible       | `.checkbox > input:focus-visible + span::before`        | 2px solid `--color-primary` outline, 2px offset                                                                    |
| Disabled            | `.checkbox > input:disabled + span`                     | `opacity: 0.5`; `.checkbox:has(input:disabled)` sets `cursor: not-allowed` on the whole label                      |
| High contrast       | `@media (prefers-contrast: high)`                       | Box border-width increases to 3px                                                                                  |
| Reduced motion      | `@media (prefers-reduced-motion: reduce)`               | Strips the box's transition                                                                                        |

## 7. Code example

```html
<!-- Basic -->
<label class="checkbox">
  <input type="checkbox" checked />
  <span>Accept terms and conditions</span>
</label>

<!-- With description -->
<label class="checkbox checkbox-with-description">
  <input type="checkbox" />
  <span>
    Enable notifications
    <span class="checkbox-description">Receive email updates about your account</span>
  </span>
</label>

<!-- Group -->
<fieldset class="checkbox-group">
  <legend class="checkbox-group-label">Select your interests</legend>
  <label class="checkbox">
    <input type="checkbox" name="interests" value="design" checked />
    <span>Design</span>
  </label>
  <label class="checkbox">
    <input type="checkbox" name="interests" value="development" checked />
    <span>Development</span>
  </label>
</fieldset>

<!-- Indeterminate "select all" (set input.indeterminate = true via JS) -->
<label class="checkbox">
  <input type="checkbox" id="select-all" aria-checked="mixed" />
  <span>Select all</span>
</label>
```

Accessibility notes:

- Always wrap the input in a `<label>` (or associate via `for`/`id`) — the
  checkbox's own text node doubles as the click target.
- `:indeterminate` has no HTML attribute; set it via JS and keep
  `aria-checked="mixed"` in sync manually.
- `.checkbox-only` keeps the label text in the DOM (visually hidden via
  `font-size: 0`), so no extra `aria-label` is needed — don't remove the
  text node.
- Space toggles the control by default (native checkbox behavior).

## 8. Cross-references

- **Switch** (`specs/components/switch.md`) — use instead of Checkbox for
  settings that take effect immediately without a submit step.
- **Radio** — the single-selection sibling; use it when exactly one
  option from a set must be chosen.
- **Multi-Select** (`specs/components/multi-select.md`) — its
  `.aural-multi-select__checkbox` option indicator is a separate,
  dropdown-embedded checkbox visual, not built on `.checkbox`.
