# Combobox

## 1. Metadata

|                   |                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name              | Combobox                                                                                                                                                             |
| Category          | Forms                                                                                                                                                                |
| Status            | Stable                                                                                                                                                               |
| CSS file          | `components/combobox.css`                                                                                                                                            |
| Naming convention | BEM (`.aural-combobox__option--selected`) — **not** flat kebab-case; this file is one of the two intentional exceptions called out in `CLAUDE.md`. Don't convert it. |

## 2. Overview

Combobox is a searchable dropdown that combines a text input with a
filterable list of options — type-ahead autocomplete over a flat or
async-loaded dataset, with optional custom-value creation. It is
JS-driven: `javascript/index.js` (`Aural.initCombobox`) owns filtering,
keyboard navigation, option rendering, and open/close state; the CSS only
styles the structure and state classes that JS toggles.

**When to use:**

- Selecting from a large option set (roughly 20+) where searching
  materially speeds up finding the right item
- Country/state/city pickers, user/contact directories, product catalogs
- Tag input with autocomplete suggestions, optionally allowing the user to
  create a new tag that isn't in the list (`creatable`)
- Async-loaded option lists (remote search), signaled with the loading
  spinner state

**When NOT to use:**

- Fewer than ~10 options — use Select, it's simpler and doesn't need a
  search affordance
- Free-form text with no fixed option set — use a plain Input
- Multiple simultaneous selections — use MultiSelect instead
- A binary choice — use Radio or Toggle/Switch

## 3. Anatomy

| Class                                                      | Purpose                                                                                            |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `.aural-combobox`                                          | Root container. `position: relative`, full width.                                                  |
| `.aural-combobox__label`                                   | Optional label above the input.                                                                    |
| `.aural-combobox__wrapper`                                 | Flex row holding the input and its icon cluster.                                                   |
| `.aural-combobox__input`                                   | The text field itself — `role="combobox"`, drives filtering on `input`.                            |
| `.aural-combobox__icons`                                   | Absolutely-positioned right-side cluster holding clear/spinner/arrow.                              |
| `.aural-combobox__clear`                                   | Clear ("×") button; only shown via `.aural-combobox--has-value`.                                   |
| `.aural-combobox__arrow`                                   | Dropdown chevron toggle button; rotates 180° when open.                                            |
| `.aural-combobox__spinner`                                 | Loading spinner, shown via `.aural-combobox--loading` (hides the arrow while visible).             |
| `.aural-combobox__dropdown`                                | The floating panel — collapsed to `max-height: 0` until `.aural-combobox--open`.                   |
| `.aural-combobox__options`                                 | Scrollable list inside the dropdown, `role="listbox"`.                                             |
| `.aural-combobox__option`                                  | A single selectable row (rendered as a `<button>`).                                                |
| `.aural-combobox__option--selected`                        | The currently-chosen option — tinted background, primary text, checkmark visible.                  |
| `.aural-combobox__option--highlighted`                     | Keyboard/search-highlighted row (distinct from `:hover`/`:focus-visible`).                         |
| `.aural-combobox__option--disabled`                        | Non-interactive row.                                                                               |
| `.aural-combobox__option-icon`                             | Optional leading icon inside an option.                                                            |
| `.aural-combobox__option-content`                          | Wraps label + description in a column.                                                             |
| `.aural-combobox__option-label`                            | The option's primary text; may contain a `<mark>` for search-match highlighting.                   |
| `.aural-combobox__option-description`                      | Secondary, smaller text under the label (e.g. "SKU: WH-001 \| $99.99").                            |
| `.aural-combobox__option-check`                            | Trailing checkmark icon, `opacity: 0` unless `--selected`.                                         |
| `.aural-combobox__group-label`                             | Sticky section header inside a grouped options list.                                               |
| `.aural-combobox__divider`                                 | 1px rule separating groups/sections of options.                                                    |
| `.aural-combobox__empty` / `__empty-icon` / `__empty-text` | "No results found" state inside the options list.                                                  |
| `.aural-combobox__create`                                  | Sticky "Create '{value}'" row, shown when `creatable` is enabled and the typed value has no match. |
| `.aural-combobox__create-value`                            | Bold span wrapping the quoted value inside `__create`.                                             |
| `.aural-combobox__helper`                                  | Helper text under the field.                                                                       |
| `.aural-combobox__error`                                   | Error message under the field, paired with `.aural-combobox--error`.                               |
| `.aural-combobox__prefix`                                  | Optional leading icon inside the input, enabled via `.aural-combobox--has-prefix`.                 |
| `.aural-combobox__sr-label`                                | Visually-hidden label text for screen readers.                                                     |
| `.aural-combobox--open`                                    | Dropdown is expanded; also squares off the input's bottom corners and turns its border primary.    |
| `.aural-combobox--has-value`                               | Shows the clear button.                                                                            |
| `.aural-combobox--loading`                                 | Shows the spinner, hides the arrow.                                                                |
| `.aural-combobox--error` / `--success`                     | Validation state — tints the input border (and focus ring, for error).                             |
| `.aural-combobox--disabled`                                | Whole-component disabled state, `opacity: 0.5`, `pointer-events: none`.                            |
| `.aural-combobox--sm` / `--lg`                             | Size modifiers on the root, cascading to `__input` and `__option` sizing.                          |
| `.aural-combobox--has-prefix`                              | Adds left padding to the input to make room for `__prefix`.                                        |

## 4. Tokens used

| Token                                                                                              | Used for                                                                                               |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `--size-44` / `--size-36` / `--size-52`                                                            | `__input` min-height at default / `--sm` / `--lg`                                                      |
| `--size-40` / `--size-32` / `--size-48`                                                            | `__option` min-height at default / `--sm` / `--lg`                                                     |
| `--size-24` / `--size-20` / `--size-18` / `--size-16` / `--size-14`                                | Icon/button box sizes (clear button, arrow, option icon/check, prefix, svg glyphs)                     |
| `--space-0-5`                                                                                      | 2px padding/gap/border-radius values (clear button padding, option-content gap, mark padding & radius) |
| `--space-2`                                                                                        | Options-list scrollbar width                                                                           |
| `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-6`                                | Padding and gaps throughout                                                                            |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary` / `--color-text-muted` | Text color by emphasis level                                                                           |
| `--color-bg-primary` / `--color-bg-hover` / `--color-bg-tertiary`                                  | Input/dropdown backgrounds and hover states                                                            |
| `--color-border-medium` / `--color-border-subtle`                                                  | Input/dropdown borders, dividers                                                                       |
| `--color-primary`                                                                                  | Focus ring, open-state border, selected option, checkmark                                              |
| `--primary-alpha-10`                                                                               | Selected-option background tint, create-row hover                                                      |
| `--warning-alpha-20`                                                                               | Search-match `<mark>` highlight background (new token — see below)                                     |
| `--color-error` / `--color-success`                                                                | Error/success validation accents                                                                       |
| `--radius-sm` / `--radius-md` / `--radius-lg`                                                      | Corner rounding                                                                                        |
| `--shadow-lg`                                                                                      | Dropdown elevation                                                                                     |
| `--text-xs` / `--text-sm` / `--text-base`                                                          | Font sizes by context/size variant                                                                     |
| `--font-medium` / `--font-semibold`                                                                | Label/selected-option/create-row weight                                                                |
| `--z-dropdown`                                                                                     | Dropdown panel stacking (was a hardcoded `1000`)                                                       |
| `--duration-normal`                                                                                | Dropdown open/close `max-height` transition                                                            |
| `--transition-all-fast`                                                                            | Most hover/focus transitions                                                                           |

**New tokens added while migrating this file:**

- `--warning-alpha-20: color-mix(in srgb, var(--color-warning, var(--warning-500)) 20%, transparent)`
  (`tokens/core/colors.css`) — `.aural-combobox__option-label mark` referenced
  `var(--warning-alpha-20)`, which didn't exist anywhere in the token
  layer (unlike `--primary-alpha-*`, there was no warning-color alpha
  scale at all). Because the custom property was undefined, the
  search-match highlight was silently rendering with **no background** —
  this was a pre-existing visual bug, not a style this migration
  introduced. Added the single rung actually used, following the exact
  `color-mix()` pattern already established by `--primary-alpha-20`, so
  the highlight now renders as intended.

## 5. Props/API

Combobox is markup + CSS classes, wired up via a JS API in
`javascript/index.js` (the global `Aural` object). It is **not**
auto-initialized by `Aural.init()` — call `Aural.initCombobox()` per
instance after the markup exists in the DOM.

`Aural.initCombobox(comboboxId, options)`:

| Option        | Type                               | Description                                                                       |
| ------------- | ---------------------------------- | --------------------------------------------------------------------------------- |
| `options`     | `{value, label, description?}[]`   | The option list to render/filter.                                                 |
| `searchable`  | boolean (default `true`)           | Filters `options` by label on every keystroke (case-insensitive substring match). |
| `creatable`   | boolean (default `false`)          | Shows a "Create '{value}'" row when the typed text has no match.                  |
| `placeholder` | string                             | Input placeholder text.                                                           |
| `onChange`    | `(option \| null) => void`         | Called when an option is selected or the field is cleared.                        |
| `onSearch`    | `(query, filteredOptions) => void` | Called on every filter pass.                                                      |
| `onCreate`    | `(value) => void`                  | Called when the create row is clicked.                                            |

Returns an instance with:

| Method               | Description                                        |
| -------------------- | -------------------------------------------------- |
| `getValue()`         | Returns the currently selected `value`, or `null`. |
| `setValue(value)`    | Programmatically selects the matching option.      |
| `clear()`            | Clears the input and selection.                    |
| `open()` / `close()` | Opens/closes the dropdown.                         |

`Combobox.stories.ts` also models a few story-only controls that aren't
real `initCombobox` options but represent how a framework wrapper would
typically expose the component: `label` (text), `disabled` (boolean),
`size` (`sm`/`md`/`lg` → `.aural-combobox--sm`/`--lg`), `loading`
(boolean → `.aural-combobox--loading`).

## 6. States

| State                | Trigger                                 | Effect                                                                                                                       |
| -------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Default              | —                                       | Collapsed dropdown (`max-height: 0`), arrow pointing down.                                                                   |
| Open                 | `.aural-combobox--open`                 | Dropdown expands to `max-height: 300px`; input's border turns primary and its bottom corners square off; arrow rotates 180°. |
| Has value            | `.aural-combobox--has-value`            | Clear button becomes visible.                                                                                                |
| Loading              | `.aural-combobox--loading`              | Spinner replaces the arrow.                                                                                                  |
| Hover (input)        | `.aural-combobox__input:hover`          | Border turns primary, background shifts to `--color-bg-hover`.                                                               |
| Focus (input)        | `.aural-combobox__input:focus`          | 2px primary outline, offset 2px.                                                                                             |
| Option hover         | `.aural-combobox__option:hover`         | Background + text tint to primary.                                                                                           |
| Option focus-visible | `.aural-combobox__option:focus-visible` | Inset left accent bar instead of an outline, so focus is visible without disrupting row layout.                              |
| Option selected      | `.aural-combobox__option--selected`     | Tinted background, primary text, semibold, visible checkmark.                                                                |
| Option highlighted   | `.aural-combobox__option--highlighted`  | Background tint only — used for keyboard/search highlight distinct from hover/focus.                                         |
| Option disabled      | `.aural-combobox__option--disabled`     | 50% opacity, `cursor: not-allowed`, not clickable.                                                                           |
| Error                | `.aural-combobox--error`                | Input border + focus ring tint to `--color-error`; `__error` message shown.                                                  |
| Success              | `.aural-combobox--success`              | Input border tints to `--color-success`.                                                                                     |
| Disabled             | `.aural-combobox--disabled`             | Whole control at 50% opacity, non-interactive; input background shifts to `--color-bg-tertiary`.                             |
| Reduced motion       | `prefers-reduced-motion: reduce`        | Dropdown expand, option transitions, arrow rotation, and spinner animation are all disabled.                                 |

**Responsive:** below `640px`, the dropdown becomes a fixed bottom sheet
(`position: fixed; bottom: 0`) that expands to `70vh`, rather than
anchoring under the input — the same mobile pattern Date Picker uses for
its calendar popup.

## 7. Code example

```html
<div class="aural-combobox" id="country-combobox">
  <div class="aural-combobox__wrapper">
    <input
      type="text"
      class="aural-combobox__input"
      placeholder="Search countries..."
      aria-label="Search countries"
      role="combobox"
      aria-expanded="false"
      aria-autocomplete="list"
      aria-controls="country-listbox"
    />
    <div class="aural-combobox__icons">
      <button class="aural-combobox__clear" aria-label="Clear selection">
        <svg><!-- x icon --></svg>
      </button>
      <div class="aural-combobox__spinner" aria-live="polite"></div>
      <button class="aural-combobox__arrow" aria-label="Toggle dropdown">
        <svg><!-- chevron icon --></svg>
      </button>
    </div>
  </div>
  <div class="aural-combobox__dropdown">
    <div class="aural-combobox__options" id="country-listbox" role="listbox">
      <!-- Options rendered dynamically by Aural.initCombobox -->
    </div>
  </div>
</div>

<script>
  Aural.initCombobox('country-combobox', {
    options: [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
    ],
    searchable: true,
    onChange: (selected) => console.log('Selected:', selected),
  });
</script>
```

## 8. Cross-references

- **Select** — reach for Select instead when the option count is small
  (<10) and search/filter adds no value.
- **MultiSelect** — the multi-selection sibling; use it instead of
  Combobox when more than one value must be chosen at once.
- **Input** — Combobox's `__input` shares the same focus-ring and border
  idiom as the plain Input component.
- **Date Picker** / **Calendar** — the other two BEM-named floating-panel
  components in this codebase; Combobox's dropdown open/close pattern
  (`max-height` transition, `--z-dropdown` stacking, mobile bottom-sheet
  override) mirrors Date Picker's calendar popup.
