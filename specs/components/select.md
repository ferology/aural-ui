# Select

## 1. Metadata

|                   |                                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| Name              | Select                                                                                               |
| Category          | Forms                                                                                                |
| Status            | Stable                                                                                               |
| CSS file          | `components/select.css`                                                                              |
| Naming convention | Flat kebab-case, two independent variants: `.select` (native) and `.select-custom` (custom dropdown) |

## 2. Overview

Select ships **two** independent implementations sharing one visual
language and the same `--color-select-*` token set:

1. **Native** (`.select` wrapping a real `<select>`) — a styled native
   dropdown with a custom SVG chevron drawn over the native one
   (`appearance: none` + a `background-image` arrow). Gets all native
   keyboard/ARIA/mobile-picker behavior for free.
2. **Custom** (`.select-custom` wrapping a `.select-trigger` button +
   `.select-dropdown` listbox) — a fully custom `role="listbox"`
   implementation for cases needing richer option rendering, consistent
   cross-browser styling, or option groups with custom markup. Requires
   JS to wire up `aria-expanded`, open/close, and `aria-selected`.

Both variants share `sm`/`lg` size modifiers, a `full` width modifier,
and the `.select-wrapper` label/helper/error wrapper.

**When to use:**

- **6+ options** — conserves space by hiding options until opened
- **Known options** — users are already familiar with the choices (country, state, month)
- **Single selection** from a predefined list
- **Forms and settings panels** where space efficiency matters
- **Categorized options** — native `<optgroup>` or `.select-optgroup` for the custom variant
- **Mobile-friendly needs** — the native variant gets the OS-level picker for free

**When NOT to use:**

- **100+ searchable options** — use Combobox instead; scrolling a huge select is frustrating
- **3–5 options** — use Radio buttons for better scannability
- **2 options** — use Switch or Checkbox for a binary choice
- **Multiple selection** — native `multiple` selects have poor UX; use Multi-Select instead
- **Primary actions / navigation** — use Button or a link

## 3. Anatomy

### Native variant

| Class                         | Purpose                                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `.select`                     | Wrapper — `inline-flex`, `max-width: var(--space-80)` (320px) by default.                                                |
| `.select > select`            | The real `<select>` — `appearance: none`, custom SVG chevron background, 44px `min-height`, hover/focus/disabled states. |
| `.select > select > option`   | Dropdown option styling (background/color/padding) — browser support varies.                                             |
| `.select > select > optgroup` | Bold, secondary-colored group label.                                                                                     |
| `.select-sm` / `.select-lg`   | Size modifiers — smaller/larger padding, font-size, `min-height`, arrow size, `max-width`.                               |
| `.select-full`                | Removes `max-width` constraint.                                                                                          |

### Custom variant

| Class                                                   | Purpose                                                                                                                                                                   |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.select-custom`                                        | Wrapper — same layout/`max-width` as `.select`.                                                                                                                           |
| `.select-trigger`                                       | `<button aria-haspopup="listbox" aria-expanded>` — visually identical to the native field; rotates `.select-icon` when `aria-expanded="true"`.                            |
| `.select-icon`                                          | Chevron SVG inside the trigger; rotates 180° when open.                                                                                                                   |
| `.select-dropdown`                                      | `role="listbox"` panel — absolutely positioned below the trigger, `max-height: 300px` with custom scrollbar, fade/slide-in transition driven by the `[hidden]` attribute. |
| `.select-option`                                        | `role="option"` row — hover/focus background, `[aria-selected="true"]` highlight + bold text, `[data-disabled="true"]` dim-and-block-pointer-events.                      |
| `.select-optgroup`                                      | Option group wrapper — `.select-optgroup-label` heading + divider before all but the first group.                                                                         |
| `.select-custom.select-sm` / `.select-custom.select-lg` | Size modifiers mirroring the native variant's sizing.                                                                                                                     |
| `.select-custom.select-full`                            | Removes `max-width` constraint.                                                                                                                                           |

### Shared wrapper

| Class                       | Purpose                                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| `.select-wrapper`           | Stacks `.select-label`, the field, and `.select-description`/`.select-error` with a `--space-2` gap.      |
| `.select-wrapper.has-error` | Forces the field's border to `--color-error` (applies to both the native `select` and `.select-trigger`). |

## 4. Tokens used

| Token                                                                                                          | Used for                                                                          |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `--color-select-bg` / `--color-select-border` / `--color-select-text`                                          | Base field appearance (both variants)                                             |
| `--color-select-border-hover` / `--color-bg-glass-light`                                                       | Hover border / background tint                                                    |
| `--color-select-border-focus`                                                                                  | Focus/open border                                                                 |
| `--color-primary`                                                                                              | Focus-visible outline                                                             |
| `--color-select-dropdown-bg` / `--color-select-dropdown-border`                                                | Native `<option>` background; custom `.select-dropdown` background/border         |
| `--color-select-option-hover` / `--color-select-option-selected` / `--color-select-option-selected-text`       | `.select-option` hover / selected states                                          |
| `--color-dropdown-item-text`                                                                                   | `.select-option` default text color                                               |
| `--color-dropdown-divider`                                                                                     | `.select-optgroup` divider border                                                 |
| `--color-text-secondary` / `--color-text-muted`                                                                | `optgroup` label, `.select-optgroup-label`, `.select-description`                 |
| `--color-text-primary`                                                                                         | `.select-label`                                                                   |
| `--color-error`                                                                                                | `.select-error` text                                                              |
| `--color-border-medium`                                                                                        | `.select-dropdown` custom scrollbar thumb                                         |
| `--font-sans` / `--text-sm` / `--text-base` / `--text-lg` / `--text-xs` / `--font-semibold` / `--font-medium`  | Typography across sizes and labels                                                |
| `--leading-normal`                                                                                             | Field text line height                                                            |
| `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-5` / `--space-6` / `--space-8` / `--space-12` | Field padding (varies by size), dropdown offset, option padding, scrollbar width  |
| `--space-60` / `--space-80`                                                                                    | `.select-sm`/`-custom.select-sm` `max-width` (240px); default `max-width` (320px) |
| `--size-16` / `--size-20` / `--size-24` / `--size-36` / `--size-44` / `--size-52`                              | Icon size and field `min-height` across sm/default/lg                             |
| `--radius-md` / `--radius-full`                                                                                | Field corner radius; scrollbar thumb radius                                       |
| `--shadow-lg`                                                                                                  | `.select-dropdown` drop shadow                                                    |
| `--z-dropdown`                                                                                                 | `.select-dropdown` stacking (was a raw `1000`, same resolved value)               |
| `--transition-all-fast`                                                                                        | Hover/focus/open transitions                                                      |

Several values are left as `/* aural-ignore */` rather than tokenized:
the native dropdown-arrow SVG's `fill='rgba(255,255,255,0.5)'` (baked
into an inline data-URI string, which can't reference a CSS custom
property), `.select-lg`/`.select-custom.select-lg`'s 400px `max-width`
ceiling, `.select-dropdown`'s 300px `max-height` ceiling, and the
icon-rotate/dropdown fade-slide transition durations (0.2s, not on the
shared duration scale — same convention as `combobox.css`/`date-picker.css`).

## 5. Props/API

Select is pure CSS/markup for the native variant; the custom variant
needs consumer JS to toggle `aria-expanded`/`[hidden]` and manage
`aria-selected`. `Select.stories.ts` documents the native variant's
controls:

| Control / attribute                          | Maps to                                                                 |
| -------------------------------------------- | ----------------------------------------------------------------------- |
| `size`                                       | `.select-sm` / (default) / `.select-lg`                                 |
| `disabled`                                   | `disabled` attribute on `<select>` / `.select-trigger`                  |
| `aria-invalid` + `.select-wrapper.has-error` | Error state border + helper text as `.select-error`                     |
| `<optgroup>` / `.select-optgroup`            | Grouped options                                                         |
| First `<option value="">`                    | Placeholder option convention — empty value validates as "not selected" |

## 6. States

| State                       | Selector                                                               | Behavior                                                                                          |
| --------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Hover                       | `select:hover:not(:disabled)` / `.select-trigger:hover:not(:disabled)` | Border → `--color-select-border-hover`, background tint                                           |
| Focus                       | `select:focus` / open trigger                                          | Border → `--color-select-border-focus`                                                            |
| Focus-visible               | `select:focus-visible` / `.select-trigger:focus-visible`               | 2px solid `--color-primary` outline, 2px offset                                                   |
| Open (custom only)          | `.select-trigger[aria-expanded="true"]`                                | Border → focus color, icon rotates 180°, `.select-dropdown` fades/slides in                       |
| Disabled                    | `select:disabled` / `.select-trigger:disabled`                         | `opacity: 0.5`, `cursor: not-allowed`, `pointer-events: none`                                     |
| Option hover/focus (custom) | `.select-option:hover` / `:focus`                                      | Background → `--color-select-option-hover`                                                        |
| Option selected (custom)    | `.select-option[aria-selected="true"]`                                 | Background → `--color-select-option-selected`, text → `--color-select-option-selected-text`, bold |
| Option disabled (custom)    | `.select-option[data-disabled="true"]`                                 | Dimmed, `cursor: not-allowed`, `pointer-events: none`                                             |
| Error                       | `.select-wrapper.has-error`                                            | Field border → `--color-error`                                                                    |
| Reduced motion              | `@media (prefers-reduced-motion: reduce)`                              | Strips all transitions; icon rotation becomes instant (`transform: none`)                         |

## 7. Code example

```html
<!-- Native select -->
<div class="select-wrapper">
  <label class="select-label" for="country-select">Country</label>
  <div class="select">
    <select id="country-select">
      <option value="">Select a country...</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
    </select>
  </div>
  <div class="select-description">Choose your country or region</div>
</div>

<!-- Custom select (requires JS for open/close + aria-selected) -->
<div class="select-custom" id="my-select">
  <button class="select-trigger" aria-haspopup="listbox" aria-expanded="false">
    <span>Select option...</span>
    <svg class="select-icon" viewBox="0 0 16 16"><!-- chevron --></svg>
  </button>
  <div class="select-dropdown" role="listbox" hidden>
    <div class="select-option" role="option" data-value="1" aria-selected="false">Option 1</div>
    <div class="select-option" role="option" data-value="2" aria-selected="true">Option 2</div>
  </div>
</div>
```

Accessibility notes:

- Always associate a visible `<label>` (via `for`/`id` or wrapping) with
  the field; fall back to `aria-label`/`aria-labelledby` only when a
  visible label truly isn't possible.
- Native selects get Tab/Space/Enter/Arrow keys/Escape/type-ahead for
  free; the custom variant must implement all of this manually (role,
  `aria-expanded`, `aria-activedescendant` or roving `tabindex`, and
  `aria-selected`).
- Link helper/error text with `aria-describedby`, and set
  `aria-invalid="true"` alongside `.select-wrapper.has-error`.

## 8. Cross-references

- **Multi-Select** (`specs/components/multi-select.md`) — use instead
  when more than one option must be selectable; don't reach for native
  `<select multiple>`.
- **Combobox** — use instead of Select for 100+ searchable options.
- **Radio** — use instead of Select for 3–5 options.
- **Input** — shares the same validation-state (`error`/`success`) and
  sizing (`sm`/`lg`) conventions as a sibling form control.
