# Breadcrumb

## 1. Metadata

|                   |                                                   |
| ----------------- | ------------------------------------------------- |
| Name              | Breadcrumb                                        |
| Category          | Navigation                                        |
| Status            | Stable                                            |
| CSS file          | `components/breadcrumb.css`                       |
| Naming convention | Flat kebab-case (`.breadcrumb`, `.breadcrumb-sm`) |

## 2. Overview

Breadcrumb is a horizontal navigation trail showing a page's location within
the site hierarchy, letting users understand where they are and jump back to
any ancestor page in one click. It's pure markup + CSS — a `<nav>` wrapping
an `<ol>`/`<ul>` of `<li>` items — with no JS-driven behavior of its own
(the optional `.breadcrumb-collapsed` "…" expand toggle needs a small
click handler if used, but the component ships no JS API for it).

**When to use:**

- Sites with multiple levels of navigation hierarchy
- Pages that are 2+ levels deep from the homepage
- E-commerce category paths ("Home / Electronics / Laptops")
- Documentation sites, to show document/section structure
- File-management interfaces, to show folder hierarchy

**When NOT to use:**

- Single-level or flat sites with no real hierarchy — breadcrumbs add noise with nothing to navigate
- As a replacement for primary navigation (Navbar) or in-page section switching (Tabs)
- On a homepage or top-level landing page, where there's no parent to show

## 3. Anatomy

| Class                                                                                | Purpose                                                                                                                                                          |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.breadcrumb`                                                                        | Root `<nav>` — flex container; expects an `<ol>` or `<ul>` child.                                                                                                |
| `.breadcrumb > ol` / `.breadcrumb > ul`                                              | List container — flex row, wraps, resets list styling.                                                                                                           |
| `li`                                                                                 | A single crumb; a `/`-style separator (`::after`) is auto-added between items via `li:not(:last-child)::after`.                                                  |
| `li a`                                                                               | A clickable (non-current) crumb.                                                                                                                                 |
| `li[aria-current="page"]`                                                            | The current page — not a link, styled with `--color-breadcrumb-current` + medium weight.                                                                         |
| `.breadcrumb-chevron` / `.breadcrumb-dash` / `.breadcrumb-dot` / `.breadcrumb-arrow` | Separator variants — override the default `/` with a chevron icon, `—`, `•`, or `→`. (Default/unmodified is a slash.)                                            |
| `.breadcrumb-sm` / `.breadcrumb-lg`                                                  | Size modifiers — scale font-size and separator spacing.                                                                                                          |
| `.breadcrumb-collapsed`                                                              | Hides all but the first/last items behind a "…" expand affordance (`li:nth-last-child(2)::before`); combine with `.breadcrumb-expanded` to force-show all items. |
| `.breadcrumb-with-icons`                                                             | Enables `.breadcrumb-icon` (16×16) rendering before each crumb's label.                                                                                          |
| `.breadcrumb-bg`                                                                     | Wraps the whole trail in a padded, bordered, subtly-tinted container.                                                                                            |
| `.breadcrumb-sr-only`                                                                | Visually-hidden-but-focusable screen-reader-only text helper (WAI clip-rect idiom).                                                                              |

## 4. Tokens used

| Token                                                       | Used for                                                                        |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `--color-breadcrumb-link` / `--color-breadcrumb-link-hover` | Crumb link resting / hover color                                                |
| `--color-breadcrumb-current`                                | `[aria-current="page"]` text color                                              |
| `--color-breadcrumb-separator`                              | `/` (and `…` expand affordance) color                                           |
| `--color-primary`                                           | `:focus-visible` outline                                                        |
| `--color-bg-hover`                                          | `.breadcrumb-collapsed` "…" affordance hover background                         |
| `--color-input-bg`                                          | `.breadcrumb-bg` container background (reused translucent-wash token)           |
| `--color-border-subtle`                                     | `.breadcrumb-bg` container border                                               |
| `--font-sans` / `--font-medium`                             | Base typography / current-page weight                                           |
| `--text-xs` / `--text-sm` / `--text-base`                   | Font size at `.breadcrumb-sm` / default / `.breadcrumb-lg`                      |
| `--leading-normal`                                          | Line-height                                                                     |
| `--space-1` … `--space-4`                                   | Gaps, separator spacing, `.breadcrumb-bg` padding, collapsed affordance padding |
| `--size-16`                                                 | Chevron-separator icon and `.breadcrumb-icon` dimensions                        |
| `--size-44`                                                 | Touch-target `min-height`/`min-width` at `(pointer: coarse)`                    |
| `--radius-sm` / `--radius-md`                               | Focus-ring corners / `.breadcrumb-bg` and collapsed-affordance corners          |
| `--transition-all-fast`                                     | Link and collapsed-affordance hover transitions                                 |

**New tokens added while migrating this file:** none — every raw value
had an existing exact-match token.

One decorative value is intentionally left raw with `aural-ignore`: the
chevron-separator's inline SVG data-URI (`rgba(255,255,255,0.3)` baked
into the `fill` attribute) — a `var()` custom property can't be resolved
inside a static `data:` URI string, so it isn't tokenizable.

## 5. Props/API

Breadcrumb is pure markup + CSS — there is no JS-driven API in
`javascript/index.js`. The Storybook story (`Breadcrumbs.stories.ts`)
builds the `<nav>`/`<ol>`/`<li>` structure itself from an `items` array and
toggles modifier classes (`separator`, `size`, `withIcons`,
`withBackground`, `maxItems`) — there's no `Aural.init*` call to wire up.
If `.breadcrumb-collapsed` is used, showing the hidden items on "…" click
is left to the consuming app (e.g. toggle a `.breadcrumb-expanded` class).

## 6. States

| State              | Selector                                                                                | Effect                                                                    |
| ------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Default (link)     | `.breadcrumb li a`                                                                      | `--color-breadcrumb-link` text, no underline.                             |
| Hover              | `.breadcrumb li a:hover`                                                                | Text brightens to `--color-breadcrumb-link-hover`, underline appears.     |
| Focus              | `.breadcrumb li a:focus-visible`                                                        | 2px `--color-primary` outline with offset.                                |
| Current page       | `li[aria-current="page"]`                                                               | `--color-breadcrumb-current` text, medium weight, not a link.             |
| Collapsed (hidden) | `.breadcrumb-collapsed li:not(:first-child):not(:last-child):not(.breadcrumb-expanded)` | Middle items hidden, "…" affordance shown before the second-to-last item. |
| Expanded           | `.breadcrumb-collapsed.breadcrumb-expanded`                                             | All items forced visible (`display: flex !important`), "…" hidden.        |
| Reduced motion     | `prefers-reduced-motion: reduce`                                                        | Link and "…" affordance transitions disabled.                             |

There's no disabled or error state — a breadcrumb trail is always
navigable; a non-clickable crumb is expressed via `aria-current="page"`
(current page) rather than a disabled modifier.

## 7. Code example

```html
<!-- Basic -->
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li aria-current="page">Widget</li>
  </ol>
</nav>

<!-- Chevron separator, with icons, in a background container -->
<nav
  class="breadcrumb breadcrumb-chevron breadcrumb-with-icons breadcrumb-bg"
  aria-label="Breadcrumb"
>
  <ol>
    <li>
      <a href="/"><i data-lucide="home" class="breadcrumb-icon" aria-hidden="true"></i>Home</a>
    </li>
    <li>
      <a href="/products"
        ><i data-lucide="folder" class="breadcrumb-icon" aria-hidden="true"></i>Products</a
      >
    </li>
    <li aria-current="page">
      <i data-lucide="file-text" class="breadcrumb-icon" aria-hidden="true"></i>Widget
    </li>
  </ol>
</nav>

<!-- Collapsed (long trail) -->
<nav class="breadcrumb breadcrumb-collapsed" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/a">Category</a></li>
    <li><a href="/a/b">Subcategory</a></li>
    <li><a href="/a/b/c">Collection</a></li>
    <li aria-current="page">Item</li>
  </ol>
</nav>
```

## 8. Cross-references

- **Pagination** — use Pagination, not Breadcrumb, for moving sequentially through a paged list; Breadcrumb shows ancestry, not a sequence.
- **Tabs** — use Tabs for switching between views of the same object, not for showing where that object lives in a hierarchy.
- **Navbar** — Breadcrumb is a secondary, in-page trail; Navbar is the persistent site-wide navigation it sits below.
