# Table

## 1. Metadata

|                   |                                              |
| ----------------- | -------------------------------------------- |
| Name              | Table                                        |
| Category          | Data Display                                 |
| Status            | Stable                                       |
| CSS file          | `components/table.css`                       |
| Naming convention | Flat kebab-case (`.table`, `.table-striped`) |

## 2. Overview

Table is a semantic `<table>`-based component for structured, scannable
data: sortable headers, striped/hoverable rows, row selection, sticky
header/columns, mobile card-stacking, and a loading overlay — all layered
on top of plain `<table>`/`<thead>`/`<tbody>`/`<tfoot>` markup via class
modifiers and attribute selectors (`[aria-selected="true"]`).

**When to use:**

- Structured, multi-column data a user scans or compares row-by-row (user lists, transaction logs, inventories)
- Data that benefits from sorting, selection, or row-level actions
- Tabular data pulled from an API that maps cleanly to rows/columns

**When NOT to use:**

- A single record's attributes — use definition lists or a Card instead
- Free-form or deeply nested data — consider Tree View
- Fewer than ~3 columns of simple text — a list may be lighter-weight

## 3. Anatomy

| Class                                            | Purpose                                                                                                                                      |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `.table`                                         | Base `<table>` — collapsed borders, `--color-table-row-text` text, `--color-table-bg` background.                                            |
| `.table-wrapper`                                 | Horizontal-scroll wrapper for responsiveness; also hosts the custom scrollbar and rounded outer border.                                      |
| `.table-sm` / `.table-lg`                        | Compact / spacious cell padding and font-size.                                                                                               |
| `.table-striped`                                 | Alternating `tbody tr:nth-child(even)` background.                                                                                           |
| `.table-bordered`                                | Full cell borders on every `th`/`td`.                                                                                                        |
| `.table-borderless`                              | Removes all borders from cells, head, and body rows.                                                                                         |
| `.table-hover`                                   | Pointer cursor + hover background on `tbody tr`.                                                                                             |
| `.table-fixed`                                   | `table-layout: fixed` with ellipsis truncation on overflowing cell content.                                                                  |
| `.text-center` / `.text-right` / `.text-left`    | Horizontal cell-content alignment (on `th`/`td`).                                                                                            |
| `.align-top` / `.align-middle` / `.align-bottom` | Vertical cell-content alignment (on `td`).                                                                                                   |
| `th.sortable`                                    | Clickable sort affordance with a background-image sort-arrow glyph; `.sort-asc` / `.sort-desc` swap the arrow and tint it `--color-primary`. |
| `tr.selected`, `tr[aria-selected="true"]`        | Selected-row background + 3px left accent border.                                                                                            |
| `tr.selectable`                                  | Pointer cursor, pressed-state background on `:active`.                                                                                       |
| `th.checkbox-cell` / `td.checkbox-cell`          | Fixed-width (`--size-44`) column for a row-selection checkbox.                                                                               |
| `.table-sticky`                                  | Sticky `<thead>` row pinned to the scroll container's top.                                                                                   |
| `.sticky-left` / `.sticky-right`                 | Sticky first/last column, with elevated `z-index` when combined with `.table-sticky thead`.                                                  |
| `.table-responsive`                              | Block-level horizontal scroll wrapper (alternative to `.table-wrapper`).                                                                     |
| `.table-stack` (`@media max-width: 640px`)       | Collapses the table to stacked "label: value" cards on narrow viewports, using `data-label` attributes.                                      |
| `caption`, `.table-caption-top`                  | Table caption, bottom by default, movable to the top.                                                                                        |
| `.table-empty`                                   | Centered, italic, muted empty-state row styling.                                                                                             |
| `.table-loading`                                 | Disables pointer events and overlays a dark scrim (`::after`) while data loads.                                                              |
| `.table-actions`                                 | Right-aligned flex row for per-row action buttons/links in a cell.                                                                           |
| `.table td .badge`                               | Ensures a `.badge` inside a cell renders `inline-flex` (baseline alignment with text).                                                       |

## 4. Tokens used

| Token                                                                                                                        | Used for                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `--color-table-bg` / `--color-table-border` / `--color-table-row-text`                                                       | Base table surface, borders, row text                                                   |
| `--color-table-header-bg` / `--color-table-header-text`                                                                      | `<thead>`/`<tfoot>` background and header text                                          |
| `--color-table-row-hover` / `--color-table-row-selected` / `--color-table-row-selected-border` / `--color-table-row-striped` | Hover, selected, and striped row backgrounds/borders                                    |
| `--color-input-bg`                                                                                                           | `th.sortable:hover` background (shared subtle-hover tint)                               |
| `--color-border-medium`                                                                                                      | `.table-wrapper` custom scrollbar thumb/track color                                     |
| `--color-primary`                                                                                                            | Selectable/sortable focus-visible outline                                               |
| `--color-text-secondary` / `--color-text-muted`                                                                              | Caption text / empty-state text                                                         |
| `--font-sans` / `--font-semibold`                                                                                            | Base typography, header/footer weight                                                   |
| `--leading-normal`                                                                                                           | Base row line-height                                                                    |
| `--text-xs` / `--text-sm` / `--text-base`                                                                                    | Header label size, base/caption size, `.table-lg` size                                  |
| `--space-1` … `--space-12`                                                                                                   | Cell padding across default/compact/spacious sizes, sort-icon offset, mobile stack gaps |
| `--size-16` / `--size-44`                                                                                                    | Sort-arrow icon size, checkbox-column width and `.table-sticky` touch target            |
| `--radius-full` / `--radius-md`                                                                                              | Scrollbar thumb shape / `.table-wrapper` outer corners                                  |
| `--transition-all-fast`                                                                                                      | Row hover transition                                                                    |

**New tokens added while migrating this file:** none — every raw error
value matched an existing token (`--color-input-bg` for the sortable
hover tint, `--size-16`/`--size-44`/`--space-2` for the remaining
dimensions).

**Warnings left as `aural-ignore`:**

- The sort-arrow `background-image` data-URI SVGs (`rgba(255,255,255,0.5)`, `rgba(16,185,129,1)`) — the color is baked into the inline SVG markup, which can't reference a CSS custom property.
- `.table-loading::after`'s `rgba(0, 0, 0, 0.3)` scrim — a one-off loading overlay alpha, distinct from the standard modal/dialog overlay token.
- The mobile `font-size: 0.8125rem` (13px) step and `min-width: 100px` readability floor inside the `max-width: 768px` query — one-off values with no adjacent token.

## 5. Props/API

Table is pure CSS/markup — there is no JS-driven API for the base
component. The documented React wrapper (`stories/Table.stories.ts`)
exposes `columns`, `data`, `striped`, `hover`, `compact`, `caption`,
`className`, and `onRowClick` as props that map to the classes in §3.
Sorting, row-expansion, and selection are left to consumer JS (toggling
`aria-sort`, `.expanded`/`.hidden`, and `aria-selected`/checkbox state).

## 6. States

| State                | Trigger                                             | Effect                                                                                         |
| -------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Default              | —                                                   | Static rows, bottom border per row, no hover affordance unless `.table-hover`.                 |
| Hover                | `.table-hover tbody tr:hover` / `th.sortable:hover` | Row or header background tints to `--color-table-row-hover` / `--color-input-bg`.              |
| Selected             | `tr.selected`, `tr[aria-selected="true"]`           | Tinted background + 3px left accent border in `--color-table-row-selected-border`.             |
| Selectable (pressed) | `tr.selectable:active`                              | Background switches to the selected tint while the row is pressed.                             |
| Sorted               | `th.sortable.sort-asc` / `.sort-desc`               | Sort-arrow icon becomes fully opaque and colored, instead of the dim neutral default arrow.    |
| Focus                | `tr.selectable:focus`, `tr[role="button"]:focus`    | 2px `--color-primary` outline, `-2px` offset (inset ring).                                     |
| Loading              | `.table-loading`                                    | Pointer events disabled, dark scrim overlay via `::after`.                                     |
| Empty                | `.table-empty`                                      | Centered, muted, italic placeholder text in place of data rows.                                |
| Sticky               | `.table-sticky`, `.sticky-left`, `.sticky-right`    | Header row and/or first/last column pin during horizontal/vertical scroll, elevated `z-index`. |
| Reduced motion       | `prefers-reduced-motion: reduce`                    | Row hover transition disabled.                                                                 |
| Mobile stacked       | `.table-stack` under `max-width: 640px`             | Header hidden; each row becomes a bordered block with `data-label`-prefixed cells.             |

## 7. Code example

```html
<div class="table-wrapper">
  <table class="table table-striped table-hover">
    <caption>
      Team members
    </caption>
    <thead>
      <tr>
        <th scope="col" class="checkbox-cell">
          <input type="checkbox" aria-label="Select all rows" />
        </th>
        <th scope="col">Name</th>
        <th scope="col" class="sortable" role="button" tabindex="0" aria-sort="none">Email</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="true">
        <td class="checkbox-cell">
          <input type="checkbox" aria-label="Select John Doe" checked />
        </td>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td><span class="badge badge-success">Active</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

## 8. Cross-references

- **Badge** — status cells commonly hold a `.badge`; `.table td .badge` ensures correct inline alignment.
- **Avatar** — a leading cell often pairs a small Avatar with the row's name/role text.
- **Pagination** — tables with many rows pair with the Pagination component below the wrapper.
- **Skeleton** — `.table-loading`/loading rows pair with `.skeleton` blocks for a loading-state table body.
