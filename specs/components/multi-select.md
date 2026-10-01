# Multi-Select

## 1. Metadata

|                   |                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------- |
| Name              | Multi-Select                                                                             |
| Category          | Forms                                                                                    |
| Status            | Stable                                                                                   |
| CSS file          | `components/multi-select.css`                                                            |
| Naming convention | BEM (`.aural-multi-select`, `.aural-multi-select__trigger`, `.aural-multi-select--open`) |

## 2. Overview

Multi-Select is a dropdown for choosing several items from a list,
rendering selections as removable chips inside the trigger. It is a
purely CSS/markup component — all interactivity (opening/closing,
search filtering, chip add/remove, keyboard navigation,
`aria-multiselectable`) is wired up by consumer JS (see the
`window.Aural.initMultiSelect(...)` example in `MultiSelect.stories.ts`).
The CSS covers the trigger, chip tags, dropdown panel, sticky search
input, sticky "select all" row, option rows with their own checkbox
indicator, a selected-count badge, and a compact-tags mode that swaps
chips for a count badge.

**When to use:**

- **Multiple related choices** — selecting 2+ items from a predefined list (skills, tags, categories)
- **Filtering operations** — applying multiple filters to data tables or search results
- **Permission/role assignment** — assigning multiple roles or access levels
- **Tag management** — categorizing content with multiple labels
- **Team/group selection** — assigning tasks or sharing with multiple people
- **Moderate option count** — best for 3–20 options; use the built-in search for more

**When NOT to use:**

- **Single selection** — use Select or Radio
- **20+ options without search** — becomes overwhelming; lean on `.aural-multi-select__search`, or use Combobox
- **2–3 options** — inline Checkboxes are more visible
- **Binary choices** — use Switch or a single Checkbox
- **Deeply nested hierarchies** — use a tree select or nested menu instead

## 3. Anatomy

| Class                                                  | Purpose                                                                                                                                                                               |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.aural-multi-select`                                  | Root container, `position: relative`.                                                                                                                                                 |
| `.aural-multi-select__trigger`                         | Clickable field — `min-height: var(--size-44)`, wraps chips + placeholder + clear + arrow; flat bottom corners while open (`.aural-multi-select--open .aural-multi-select__trigger`). |
| `.aural-multi-select__tags`                            | Flex-wrap row of selected chips inside the trigger.                                                                                                                                   |
| `.aural-multi-select__tag`                             | One selected-item chip (`primary-alpha-10` background, primary text).                                                                                                                 |
| `.aural-multi-select__tag-remove`                      | Remove button on a chip.                                                                                                                                                              |
| `.aural-multi-select__placeholder`                     | Empty-state text, hidden once `.aural-multi-select__tags` is non-empty.                                                                                                               |
| `.aural-multi-select__arrow`                           | Chevron icon; rotates 180° when `.aural-multi-select--open`.                                                                                                                          |
| `.aural-multi-select__clear`                           | "Clear all" button, shown only once tags exist.                                                                                                                                       |
| `.aural-multi-select__dropdown`                        | Absolutely-positioned panel below the trigger; `max-height` animates 0 → 300px via `.aural-multi-select--open`.                                                                       |
| `.aural-multi-select__search`                          | Sticky search header inside the dropdown.                                                                                                                                             |
| `.aural-multi-select__search-input`                    | The filter `<input>`.                                                                                                                                                                 |
| `.aural-multi-select__select-all`                      | Sticky "select all" row, pinned above the option list.                                                                                                                                |
| `.aural-multi-select__options`                         | Scrollable option list with a custom scrollbar.                                                                                                                                       |
| `.aural-multi-select__option`                          | One selectable row (a `<button>`), with hover/focus/selected/disabled modifiers.                                                                                                      |
| `.aural-multi-select__option--selected` / `--disabled` | State modifiers on `.aural-multi-select__option`.                                                                                                                                     |
| `.aural-multi-select__checkbox`                        | Per-option checkbox indicator (own implementation, not `.checkbox`); fills and reveals its checkmark SVG when the option is selected.                                                 |
| `.aural-multi-select__option-label`                    | Option text.                                                                                                                                                                          |
| `.aural-multi-select__option-icon`                     | Optional leading icon in an option row.                                                                                                                                               |
| `.aural-multi-select__group-label`                     | Uppercase small-caps heading for grouped options.                                                                                                                                     |
| `.aural-multi-select__empty` / `__empty-icon`          | Empty-results state shown when search matches nothing.                                                                                                                                |
| `.aural-multi-select__count`                           | Selected-count pill badge (used by `--compact-tags`).                                                                                                                                 |
| `.aural-multi-select__sr-label`                        | Visually-hidden (WAI clip-rect) screen-reader-only label.                                                                                                                             |
| `.aural-multi-select--open`                            | Open-state modifier on the root, drives trigger/dropdown/arrow visuals.                                                                                                               |
| `.aural-multi-select--disabled`                        | Disables the whole control (`pointer-events: none`, dimmed).                                                                                                                          |
| `.aural-multi-select--sm` / `--lg`                     | Size modifiers (trigger `min-height`, tag size).                                                                                                                                      |
| `.aural-multi-select--error` / `--success`             | Validation-state border colors on the trigger.                                                                                                                                        |
| `.aural-multi-select--compact-tags`                    | Hides individual chips in favor of `.aural-multi-select__count` + the placeholder text.                                                                                               |

## 4. Tokens used

| Token                                                                                                                                    | Used for                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `--color-bg-primary` / `--color-bg-secondary` / `--color-bg-tertiary`                                                                    | Trigger/dropdown/search backgrounds; disabled trigger background                       |
| `--color-border-medium` / `--color-border-subtle`                                                                                        | Trigger/dropdown borders, search/select-all dividers                                   |
| `--color-primary`                                                                                                                        | Open/hover/focus border, chip text/icon, focus outline                                 |
| `--color-bg-hover`                                                                                                                       | Option hover/focus background, clear-button hover background                           |
| `--primary-alpha-10` / `--primary-alpha-20`                                                                                              | Chip background, selected-option background, count-badge background, chip-remove hover |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary` / `--color-text-muted`                                       | Option text, placeholder, arrow/clear icon, group labels, empty-state copy             |
| `--color-error` / `--color-success`                                                                                                      | Clear-button hover icon color; `--error`/`--success` trigger border variants           |
| `--font-sans` (inherited) / `--text-xs` / `--text-sm`                                                                                    | Typography across tags, options, labels                                                |
| `--font-medium` / `--font-semibold` / `--font-bold`                                                                                      | Chip/count/selected-option/group-label weights                                         |
| `--space-0-5` / `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-6`                                                      | Gaps and padding throughout                                                            |
| `--space-60`                                                                                                                             | `.aural-multi-select__options` `max-height` (240px)                                    |
| `--size-6` / `--size-12` / `--size-14` / `--size-16` / `--size-18` / `--size-20` / `--size-36` / `--size-44` / `--size-48` / `--size-52` | Icon/control sizing and trigger `min-height` across sm/default/lg                      |
| `--radius-sm` / `--radius-md` / `--radius-full`                                                                                          | Chip, trigger/dropdown, and count-badge corner radius                                  |
| `--shadow-lg`                                                                                                                            | Dropdown drop shadow                                                                   |
| `--z-dropdown`                                                                                                                           | Dropdown stacking (was a raw `1000`, same resolved value)                              |
| `--transition-all-fast`                                                                                                                  | Hover/focus transitions                                                                |

Several values are left as `/* aural-ignore */` rather than tokenized:
the dropdown's 300px `max-height` ceiling and 0.3s expand transition, the
checkmark's 0.2s opacity fade, the arrow's 0.2s rotate transition,
`--sm`'s `0.65rem` compact tag font-size (between `--text-2xs` and
`--text-xs`, not on the type scale), and the `.aural-multi-select__sr-label`
clip-rect recipe's `1px`/`1px`/`-1px` (the standard WAI visually-hidden
idiom, reused verbatim across the codebase).

## 5. Props/API

Multi-Select is markup + CSS only; all behavior comes from consumer JS.
`MultiSelect.stories.ts` models the React-style props such an
implementation typically exposes:

| Prop / attribute                       | Maps to                                                                                                                             |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `options` (`{value, label, group?}[]`) | Rendered as `.aural-multi-select__option` rows, optionally grouped under `.aural-multi-select__group-label`                         |
| `value` (`string[]`)                   | Drives `.aural-multi-select__tag`s in the trigger and `.aural-multi-select__option--selected` / `aria-selected` on matching options |
| `onChange`                             | Fired on chip add/remove and option toggle                                                                                          |
| `placeholder`                          | Text content of `.aural-multi-select__placeholder`                                                                                  |
| `searchable`                           | Whether `.aural-multi-select__search` is rendered and wired to filter `.aural-multi-select__option`s                                |
| `maxSelections`                        | Consumer-enforced cap on `value.length`; not styled differently in CSS                                                              |
| `disabled`                             | `.aural-multi-select--disabled`                                                                                                     |

## 6. States

| State                      | Selector                                               | Behavior                                                                                      |
| -------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Hover (trigger)            | `.aural-multi-select__trigger:hover`                   | Border → `--color-primary`, background → `--color-bg-hover`                                   |
| Focus-visible (trigger)    | `.aural-multi-select__trigger:focus-visible`           | 2px solid `--color-primary` outline, 2px offset                                               |
| Open                       | `.aural-multi-select--open`                            | Trigger border highlights + flattens bottom corners, arrow rotates 180°, dropdown expands     |
| Option hover/focus-visible | `.aural-multi-select__option:hover` / `:focus-visible` | Background → `--color-bg-hover` (and text → primary on hover)                                 |
| Option selected            | `.aural-multi-select__option--selected`                | Background tint, bold text, checkbox fills with checkmark revealed                            |
| Option disabled            | `.aural-multi-select__option--disabled`                | Dimmed, `cursor: not-allowed`, `pointer-events: none`                                         |
| Clear-button hover         | `.aural-multi-select__clear:hover`                     | Background → `--color-bg-hover`, icon → `--color-error`                                       |
| Disabled (whole control)   | `.aural-multi-select--disabled`                        | `opacity: 0.5`, `pointer-events: none`; trigger background → `--color-bg-tertiary`            |
| Error / Success            | `.aural-multi-select--error` / `--success`             | Trigger border → `--color-error` / `--color-success`                                          |
| Reduced motion             | `@media (prefers-reduced-motion: reduce)`              | Strips trigger/dropdown/option/checkbox/arrow transitions                                     |
| Responsive (≤640px)        | `@media (max-width: 640px)`                            | Dropdown becomes a fixed bottom sheet (`position: fixed; bottom: 0`) with rounded top corners |

## 7. Code example

```html
<div class="aural-multi-select" id="skills-select">
  <div
    class="aural-multi-select__trigger"
    tabindex="0"
    role="button"
    aria-haspopup="listbox"
    aria-expanded="false"
  >
    <div class="aural-multi-select__tags">
      <span class="aural-multi-select__tag">
        JavaScript
        <button class="aural-multi-select__tag-remove" aria-label="Remove JavaScript">
          <svg viewBox="0 0 24 24"><!-- x icon --></svg>
        </button>
      </span>
    </div>
    <span class="aural-multi-select__placeholder">Select skills...</span>
    <span
      class="aural-multi-select__clear"
      aria-label="Clear all selections"
      role="button"
      tabindex="0"
    >
      <svg viewBox="0 0 24 24"><!-- x icon --></svg>
    </span>
    <span class="aural-multi-select__arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24"><!-- chevron --></svg>
    </span>
  </div>

  <div class="aural-multi-select__dropdown" hidden>
    <div class="aural-multi-select__search">
      <input
        type="text"
        class="aural-multi-select__search-input"
        placeholder="Search..."
        aria-label="Search options"
      />
    </div>
    <div class="aural-multi-select__options" role="listbox" aria-multiselectable="true">
      <button
        class="aural-multi-select__option aural-multi-select__option--selected"
        data-value="javascript"
        role="option"
        aria-selected="true"
      >
        <span class="aural-multi-select__checkbox" aria-hidden="true"
          ><svg viewBox="0 0 24 24"><!-- check --></svg></span
        >
        <span class="aural-multi-select__option-label">JavaScript</span>
      </button>
    </div>
  </div>
</div>

<script>
  window.Aural.initMultiSelect('skills-select', {
    options: [{ value: 'javascript', label: 'JavaScript' }],
    searchable: true,
    maxSelections: 5,
    onChange: (values) => console.log('Selected:', values),
  });
</script>
```

Accessibility notes:

- Support Tab, Enter, Space, and Arrow keys for navigation and selection.
- Use `role="combobox"` on the trigger (or `role="button"` with
  `aria-haspopup="listbox"`), `aria-multiselectable="true"` on the
  options list, and `aria-expanded` on the trigger.
- Announce selection count and changes to screen readers (e.g. "3 items
  selected").
- Ensure chip-remove buttons are keyboard accessible with a descriptive
  `aria-label` (e.g. "Remove JavaScript").
- Provide a visible label describing what's being selected.

## 8. Cross-references

- **Select** (`specs/components/select.md`) — use instead for single
  selection; don't reach for native `<select multiple>`.
- **Checkbox** — use inline checkboxes instead of Multi-Select for 2–3
  options.
- **Search Bar** (`specs/components/search-bar.md`) — a separate
  component; Multi-Select's own `__search-input` is a lightweight,
  dropdown-embedded filter field, not built on `.aural-search-bar`.
- **Combobox** — use instead for 20+ options without a maintained
  `searchable` filter, or for single-selection type-ahead.
