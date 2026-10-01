# Pagination

## 1. Metadata

|                   |                                                       |
| ----------------- | ----------------------------------------------------- |
| Name              | Pagination                                            |
| Category          | Navigation                                            |
| Status            | Stable                                                |
| CSS file          | `components/pagination.css`                           |
| Naming convention | Flat kebab-case (`.pagination`, `.pagination-active`) |

## 2. Overview

Pagination is a set of controls for browsing through multiple pages of
content, giving users clear wayfinding and a sense of total dataset size.
It's pure markup + CSS — a `<nav>` of `<a>`/`<button>` items — with no
JS-driven API shipped; page-change logic (building the href/page number,
updating `aria-current`) is left to the consuming app.

Use Pagination when displaying large datasets (search results, product
catalogs, blog posts, table rows) split across pages for performance and
usability. Unlike infinite scroll, Pagination gives users control over
their position, lets them jump to a specific page, and shows how large the
dataset is.

**When to use:**

- Large datasets that would be overwhelming on a single page (rule of thumb: 25–50+ items)
- Browsing sequential content (search results, product listings, blog archives)
- At the bottom of data tables or search-result lists
- When the total item/page count is known up front

**When NOT to use:**

- Small lists that fit comfortably on one page — pagination adds friction with no benefit
- Feeds meant for continuous browsing (social, discovery) — use infinite scroll instead
- Sequential, stateful processes (checkout, onboarding) — use Stepper, not Pagination

## 3. Anatomy

| Class                                                            | Purpose                                                                                                         |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `.pagination`                                                    | Root `<nav>` — centers items in a flex row by default.                                                          |
| `.pagination-item`                                               | A single page-number link/button.                                                                               |
| `.pagination-prev` / `.pagination-next`                          | Previous/next controls — share `.pagination-item`'s base styling.                                               |
| `.pagination-active`                                             | The current page — filled background, `pointer-events: none`.                                                   |
| `.pagination-disabled`, `[disabled]`                             | A non-interactive item (e.g. "Previous" on page 1) — dimmed, `cursor: not-allowed`.                             |
| `.pagination-ellipsis`                                           | Non-interactive "…" marker for skipped page ranges.                                                             |
| `.pagination-sm` / `.pagination-lg`                              | Size modifiers — scale padding, `min-width`, font-size, and icon size.                                          |
| `.pagination-simple`                                             | Borderless variant.                                                                                             |
| `.pagination-rounded`                                            | Fully-rounded (pill) items.                                                                                     |
| `.pagination-compact`                                            | Attached-button look — zero gap, items share borders, only the first/last item keep rounded outer corners.      |
| `.pagination-left` / `.pagination-right` / `.pagination-between` | Alignment variants (default is centered).                                                                       |
| `.pagination-with-info`                                          | Stacks a `.pagination-info` text line ("Showing 1–10 of 100") below the control row.                            |
| `.pagination-responsive`                                         | At `max-width: 640px`, hides all non-active page-number items and the ellipsis (keeps prev/next + active page). |
| `.pagination-with-jumper`                                        | Adds a `.pagination-jumper` "Go to page" number `<input>` alongside the controls.                               |
| `.pagination-sr-only`                                            | Visually-hidden-but-focusable screen-reader-only text helper (WAI clip-rect idiom).                             |

## 4. Tokens used

| Token                                                                                                  | Used for                                                                                      |
| ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `--color-pagination-bg` / `--color-pagination-border`                                                  | Item resting background / border                                                              |
| `--color-pagination-hover-bg` / `--color-pagination-hover-border`                                      | Item `:hover` background / border                                                             |
| `--color-pagination-active-bg` / `--color-pagination-active-border` / `--color-pagination-active-text` | `.pagination-active` styling                                                                  |
| `--color-pagination-disabled-text`                                                                     | `.pagination-disabled`/`[disabled]` text color                                                |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-muted`                               | Item text / `.pagination-info` text / ellipsis color                                          |
| `--color-primary`                                                                                      | `:focus-visible` ring, jumper input `:focus` border                                           |
| `--color-input-bg` / `--color-input-border`                                                            | Jumper `<input>` background / border                                                          |
| `--font-sans` / `--font-medium`                                                                        | Base typography / item label weight                                                           |
| `--text-xs` / `--text-sm` / `--text-base`                                                              | Font size at `.pagination-sm` / default / `.pagination-lg`                                    |
| `--leading-none`                                                                                       | Item label line-height                                                                        |
| `--space-1` … `--space-4`                                                                              | Padding and gaps across sizes                                                                 |
| `--size-14` / `--size-16` / `--size-20`                                                                | Icon dimensions at `.pagination-sm` / default / `.pagination-lg`                              |
| `--size-32` / `--size-40` / `--size-44` / `--size-48`                                                  | Item `min-width`/`min-height` at `.pagination-sm` / default / touch target / `.pagination-lg` |
| `--size-80`                                                                                            | Jumper `<input>` touch-target `min-width` at `(pointer: coarse)`                              |
| `--radius-md` / `--radius-full`                                                                        | Default item corners / `.pagination-rounded` corners                                          |
| `--transition-all-fast`                                                                                | Item hover/focus transitions                                                                  |

**New tokens added while migrating this file:** none — every raw value
had an existing exact-match token (including `--size-80` for the touch
jumper input, already defined for other components' overlay widths).

Two values are intentionally left raw with `aural-ignore`: the "attached
buttons" `margin-left: -1px` border-overlap idiom in `.pagination-compact`
(the same hairline-overlap trick used by Tabs and Button), and the
"jump to page" `<input>` 's `width: 60px` (a one-off small-number-field
width, not on the size scale).

## 5. Props/API

Pagination is pure markup + CSS — there is no JS-driven API in
`javascript/index.js`. Page-range generation (which page numbers/ellipses
to render), the active-page/disabled-state wiring, and the actual page
navigation are all left to the consuming app; the Storybook stories
illustrate a typical React `generatePageRange()` implementation in their
description block as a reference pattern, but it ships with the docs, not
the library.

## 6. States

| State                 | Selector                                                                   | Effect                                                                              |
| --------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Default               | `.pagination-item`, `.pagination-prev`, `.pagination-next`                 | `--color-pagination-bg` background, bordered.                                       |
| Hover                 | `:hover:not(.pagination-active):not([disabled]):not(.pagination-disabled)` | `--color-pagination-hover-bg` background, `--color-pagination-hover-border` border. |
| Focus                 | `:focus-visible`                                                           | 2px `--color-primary` outline with offset.                                          |
| Active (current page) | `.pagination-active`                                                       | Filled `--color-pagination-active-bg`, `pointer-events: none`.                      |
| Disabled              | `.pagination-disabled`, `[disabled]`                                       | `opacity: 0.5`, `cursor: not-allowed`, `pointer-events: none`.                      |
| Reduced motion        | `prefers-reduced-motion: reduce`                                           | Item transitions disabled.                                                          |

`aria-current="page"` should be kept in sync with `.pagination-active` by
the consuming app — the CSS only reacts to the class.

## 7. Code example

```html
<nav class="pagination" aria-label="Pagination">
  <a href="?page=4" class="pagination-prev" aria-label="Go to previous page">
    <i data-lucide="chevron-left" aria-hidden="true"></i>
    Previous
  </a>

  <a href="?page=1" class="pagination-item" aria-label="Go to page 1">1</a>
  <span class="pagination-ellipsis" aria-hidden="true">...</span>
  <a href="?page=4" class="pagination-item" aria-label="Go to page 4">4</a>
  <a
    href="?page=5"
    class="pagination-item pagination-active"
    aria-current="page"
    aria-label="Current page, page 5"
  >
    5
  </a>
  <a href="?page=6" class="pagination-item" aria-label="Go to page 6">6</a>
  <span class="pagination-ellipsis" aria-hidden="true">...</span>
  <a href="?page=20" class="pagination-item" aria-label="Go to page 20">20</a>

  <a href="?page=6" class="pagination-next" aria-label="Go to next page">
    Next
    <i data-lucide="chevron-right" aria-hidden="true"></i>
  </a>
</nav>
```

## 8. Cross-references

- **Breadcrumb** — shows ancestry/location, not a position within a sequence; don't substitute one for the other.
- **Stepper** — use Stepper for a sequential, stateful process (checkout, onboarding), not Pagination.
- **Table** — Pagination commonly sits below a Table for paged row data.
