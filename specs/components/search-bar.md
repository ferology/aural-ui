# Search Bar

## 1. Metadata

|                   |                                                                                  |
| ----------------- | -------------------------------------------------------------------------------- |
| Name              | Search Bar                                                                       |
| Category          | Forms                                                                            |
| Status            | Stable                                                                           |
| CSS file          | `components/search-bar.css`                                                      |
| Naming convention | BEM (`.aural-search-bar`, `.aural-search-bar__input`, `.aural-search-bar--pill`) |

## 2. Overview

Search Bar is a search input with an icon, optional clear button,
optional keyboard-shortcut hint (e.g. `⌘K`), and an absolutely-positioned
suggestions dropdown supporting grouped results, per-item icon/title/
description/metadata, loading and empty states. It covers both a
traditional site-search field and a command-palette-style search —
behavior (opening suggestions, keyboard navigation, the `⌘K` shortcut
itself) is wired up by consumer JS; the CSS only styles the structure and
states.

**When to use:**

- **Site-wide search** — navigation and content discovery
- **Command palette** — keyboard-driven power-user interfaces (`⌘K`/`Ctrl+K` is the industry-standard shortcut)
- **Filter search** — narrowing large datasets or product catalogs
- **Autocomplete** — suggestions that reduce typing and speed up finding content
- **Recent searches** — surfacing search history for frequently accessed content

**When NOT to use:**

- A single, small, known list of options — use Select or Radio instead of free-text search
- Filtering a short visible list where typing adds friction — plain visible filters may be faster

## 3. Anatomy

| Class                                                        | Purpose                                                                                                          |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `.aural-search-bar`                                          | Root container, `max-width: 600px`, `position: relative` (for the absolutely-positioned suggestions panel).      |
| `.aural-search-bar__wrapper`                                 | The bordered field row — icon + input + clear + shortcut hint; highlights border/outline on `:focus-within`.     |
| `.aural-search-bar__icon`                                    | Leading search icon slot.                                                                                        |
| `.aural-search-bar__input`                                   | The text `<input>` itself — borderless, transparent, fills remaining space.                                      |
| `.aural-search-bar__clear`                                   | Clear button — shown only once the input has a value (`:has(.aural-search-bar__input:not(:placeholder-shown))`). |
| `.aural-search-bar__shortcut`                                | Keyboard-shortcut hint (e.g. "⌘K"), hidden once the field has focus.                                             |
| `.aural-search-bar__key`                                     | Individual `<kbd>`-style key chip inside the shortcut hint.                                                      |
| `.aural-search-bar__suggestions`                             | Absolutely-positioned dropdown panel, fades/slides in via `.aural-search-bar__suggestions--open`.                |
| `.aural-search-bar__group` / `__group-title`                 | Grouped suggestion sections with an uppercase heading.                                                           |
| `.aural-search-bar__item`                                    | One suggestion row (icon + content + meta), `min-height: var(--size-44)`.                                        |
| `.aural-search-bar__item--active`                            | Keyboard-highlighted suggestion row (equivalent to hover styling).                                               |
| `.aural-search-bar__item-icon`                               | Leading icon in a suggestion row.                                                                                |
| `.aural-search-bar__item-content`                            | Title + description stack.                                                                                       |
| `.aural-search-bar__item-title` / `__item-description`       | Suggestion title and secondary description text.                                                                 |
| `.aural-search-bar__item-meta` / `__item-shortcut`           | Trailing metadata and a `<kbd>`-style shortcut chip on a suggestion row.                                         |
| `.aural-search-bar__empty` / `__empty-icon` / `__empty-text` | Empty-results state.                                                                                             |
| `.aural-search-bar__loading`                                 | Loading-state row shown while suggestions are being fetched.                                                     |
| `.aural-search-bar--sm` / `--lg`                             | Size modifiers (input padding/font-size, icon size, item padding).                                               |
| `.aural-search-bar--pill`                                    | Fully-rounded (`--radius-full`) wrapper and larger dropdown radius.                                              |

## 4. Tokens used

| Token                                                                                             | Used for                                                                  |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `--color-bg-secondary` / `--color-bg-tertiary`                                                    | Wrapper/dropdown background; key-chip/shortcut-chip background            |
| `--color-border-medium` / `--color-border-subtle`                                                 | Wrapper/dropdown borders, key-chip border, group/shortcut dividers        |
| `--color-primary`                                                                                 | Hover/focus border and outline, active-item text                          |
| `--color-bg-hover`                                                                                | Item hover/active background                                              |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary`                       | Input/title text, description/icon text, placeholder/meta/empty-icon text |
| `--font-mono`                                                                                     | Shortcut hint and item-shortcut `<kbd>` chips                             |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg`                                           | Typography across sizes and item content                                  |
| `--font-medium` / `--font-semibold`                                                               | Item title, group-title weight                                            |
| `--leading-tight`                                                                                 | Item title/description line height                                        |
| `--space-0-5` / `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-5` / `--space-6` | Gaps and padding throughout                                               |
| `--size-6` / `--size-16` / `--size-18` / `--size-20` / `--size-24` / `--size-44` / `--size-48`    | Icon sizes, clear-button touch target, item `min-height`, empty-icon size |
| `--radius-sm` / `--radius-lg` / `--radius-xl` / `--radius-full`                                   | Key-chip radius; dropdown radius (default / pill); pill wrapper radius    |
| `--shadow-lg`                                                                                     | Suggestions dropdown shadow                                               |
| `--z-dropdown`                                                                                    | Suggestions dropdown stacking (was a raw `1000`, same resolved value)     |
| `--transition-all-fast`                                                                           | Wrapper/clear-button hover transitions                                    |

Several values are left as `/* aural-ignore */` rather than tokenized:
the root's 600px `max-width` ceiling, the dropdown's 400px (300px on
mobile) `max-height` ceiling, the dropdown fade/slide/visibility
transition durations (0.2s, not on the shared duration scale), and the
key-chip/shortcut-chip `0.7rem` font-size (a one-off between `--text-2xs`
and `--text-xs`, not on the type scale).

## 5. Props/API

Search Bar is markup + CSS only; opening/closing suggestions, filtering,
keyboard navigation, and the `⌘K` shortcut are all consumer JS
responsibilities. From `SearchBar.stories.ts` and the component's doc
page:

| Prop / attribute     | Maps to                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------- |
| `placeholder`        | `placeholder` attribute on `.aural-search-bar__input`                                        |
| `value` / `onChange` | Controlled input value/handler (framework-dependent)                                         |
| `size`               | `.aural-search-bar--sm` / (default) / `.aural-search-bar--lg`                                |
| `variant: pill`      | `.aural-search-bar--pill`                                                                    |
| Suggestions data     | Rendered as `.aural-search-bar__group`/`__item` rows inside `.aural-search-bar__suggestions` |

## 6. States

| State                     | Selector                                                                           | Behavior                                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Hover (wrapper)           | `.aural-search-bar__wrapper:hover`                                                 | Border → `--color-primary`, background → `--color-bg-hover`                                           |
| Focus-within (wrapper)    | `.aural-search-bar__wrapper:focus-within`                                          | 2px solid `--color-primary` outline (2px offset) + border highlight; shortcut hint hides              |
| Clear button visible      | `.aural-search-bar__wrapper:has(.aural-search-bar__input:not(:placeholder-shown))` | `.aural-search-bar__clear` becomes `display: flex`                                                    |
| Clear hover/focus-visible | `.aural-search-bar__clear:hover` / `:focus-visible`                                | Background tint / 2px outline                                                                         |
| Suggestions open          | `.aural-search-bar__suggestions--open`                                             | Opacity/visibility/transform transition to visible                                                    |
| Item hover / active       | `.aural-search-bar__item:hover` / `.aural-search-bar__item--active`                | Background → `--color-bg-hover`, text + icon → `--color-primary`                                      |
| Item focus-visible        | `.aural-search-bar__item:focus-visible`                                            | 2px solid `--color-primary` outline, **inset** (`-2px` offset)                                        |
| Empty                     | `.aural-search-bar__empty`                                                         | Centered icon + text, shown when no suggestions match                                                 |
| Loading                   | `.aural-search-bar__loading`                                                       | Centered row shown while results are being fetched                                                    |
| Reduced motion            | `@media (prefers-reduced-motion: reduce)`                                          | Strips suggestions/item transitions                                                                   |
| Responsive (≤640px)       | `@media (max-width: 640px)`                                                        | Root `max-width: 100%`, shortcut hint hidden, dropdown `max-height` reduced, item descriptions hidden |

## 7. Code example

```html
<div class="aural-search-bar">
  <div class="aural-search-bar__wrapper">
    <div class="aural-search-bar__icon">
      <svg viewBox="0 0 24 24"><!-- magnifier --></svg>
    </div>
    <input
      type="text"
      class="aural-search-bar__input"
      placeholder="Search..."
      aria-label="Search"
    />
    <button class="aural-search-bar__clear" aria-label="Clear search">
      <svg viewBox="0 0 24 24"><!-- x icon --></svg>
    </button>
    <div class="aural-search-bar__shortcut">
      <kbd class="aural-search-bar__key">⌘</kbd><kbd class="aural-search-bar__key">K</kbd>
    </div>
  </div>

  <div class="aural-search-bar__suggestions" role="listbox">
    <div class="aural-search-bar__group">
      <div class="aural-search-bar__group-title">Recent</div>
      <button class="aural-search-bar__item" role="option">
        <span class="aural-search-bar__item-icon"><svg viewBox="0 0 24 24"></svg></span>
        <span class="aural-search-bar__item-content">
          <span class="aural-search-bar__item-title">Dashboard</span>
          <span class="aural-search-bar__item-description">View your analytics</span>
        </span>
      </button>
    </div>
  </div>
</div>
```

Accessibility notes:

- Always include `aria-label` on the search input describing its purpose.
- Use `aria-live="polite"` on the suggestions container to announce
  result changes to screen readers.
- Support Tab, Enter, Escape, and Arrow keys for suggestion navigation.
- Trap focus within a command-palette-style modal search and restore
  focus on close.
- Apply `role="combobox"` to the wrapper and `role="option"` to each
  suggestion, with `aria-autocomplete="list"` and `aria-expanded` kept in
  sync.

## 8. Cross-references

- **Input** — `.aural-search-bar__input` is a bespoke borderless input,
  not built on `.input`; don't mix the two classes.
- **Multi-Select** (`specs/components/multi-select.md`) — has its own,
  separate search field (`.aural-multi-select__search-input`) for
  filtering dropdown options; it's unrelated to this component.
- **Combobox** — a related but distinct pattern for single-selection
  type-ahead from a bounded list, as opposed to Search Bar's open-ended
  query + suggestions model.
