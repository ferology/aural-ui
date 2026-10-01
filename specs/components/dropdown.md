# Dropdown

## 1. Metadata

|                   |                                                        |
| ----------------- | ------------------------------------------------------ |
| Name              | Dropdown                                               |
| Category          | Overlay                                                |
| Status            | Stable                                                 |
| CSS file          | `components/dropdown.css`                              |
| Docs page         | `docs/components/dropdowns.html`                       |
| Naming convention | Flat kebab-case (`.dropdown`, `.dropdown-item-danger`) |

## 2. Overview

Dropdown is a trigger-anchored menu that reveals a list of actions or
options on click, for secondary functions that don't need a dedicated
page or a blocking Modal. It's non-blocking — the rest of the page stays
interactive — and lightweight, built for presenting roughly 3–10 options.

**When to use:**

- Action menus (edit, share, delete) for an item
- User/account menus (settings, profile, sign out)
- Bulk actions on selected table rows or list items
- View options (filter, sort, display) for content
- Navigation overflow — secondary links that don't fit inline

**When NOT to use:**

- Right-click/contextual actions tied to a specific clicked point — use Context Menu instead
- A single action — just use a Button
- A choice that needs to block the page or demand a decision — use Modal
- More than ~10 options, or options with rich multi-field content — consider a dedicated page or panel instead

## 3. Anatomy

| Class                                                     | Purpose                                                                                                                   |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `.dropdown`                                               | Root container — `position: relative`, inline-flex; carries the `id` the JS API keys off of.                              |
| `.dropdown-trigger`                                       | The button that opens/closes the menu; expects `aria-haspopup="true"` and `aria-expanded` set in markup/JS.               |
| `.dropdown-menu`                                          | The floating panel — absolutely positioned, `z-index: var(--z-dropdown)`, backdrop-blurred, scrollable past `max-height`. |
| `.dropdown-item`                                          | A single menu action/link (`role="menuitem"`); 44px min-height touch target built in.                                     |
| `.dropdown-item-active`, `[aria-current="true"]`          | Marks the currently-selected item.                                                                                        |
| `.dropdown-item-danger`                                   | Destructive-action styling (red text, red-tinted hover).                                                                  |
| `.dropdown-item-disabled`, `[disabled]`                   | Non-interactive item.                                                                                                     |
| `.dropdown-item-with-description`                         | Stacks a `.dropdown-item-title` + `.dropdown-item-description` instead of a single line.                                  |
| `.dropdown-item-with-shortcut`                            | Right-aligns a `.dropdown-item-shortcut` (e.g. `⌘C`) opposite the label.                                                  |
| `.dropdown-header`                                        | Non-interactive uppercase group label.                                                                                    |
| `.dropdown-divider`                                       | 1px separator line between item groups.                                                                                   |
| `.dropdown-footer`                                        | Bordered bottom section, e.g. for a "View all" link.                                                                      |
| `.dropdown-submenu`                                       | Wraps a `.dropdown-item` that reveals a nested `.dropdown-menu` on hover/focus-within.                                    |
| `.dropdown-right` / `-center` / `-up` / `-start` / `-end` | Menu placement relative to the trigger (default: below, left-aligned).                                                    |
| `.dropdown-sm` / `-lg` / `-full`                          | Size modifiers — scale menu `min-width` and item padding/font-size, or stretch to 100% width.                             |
| `.dropdown-open`                                          | State class (on `.dropdown`) that reveals the menu — toggled by the JS API.                                               |

## 4. Tokens used

| Token                                                                                         | Used for                                                                            |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `--color-dropdown-bg` / `--color-dropdown-border`                                             | Menu background / border                                                            |
| `--color-dropdown-item-text` / `--color-dropdown-item-hover` / `--color-dropdown-item-active` | Item text / hover / active-or-pressed background                                    |
| `--color-dropdown-header-text` / `--color-dropdown-divider`                                   | Header text / divider & footer-border color                                         |
| `--color-error` / `--color-error-bg`                                                          | `.dropdown-item-danger` text / hover background (new semantic token — see below)    |
| `--color-primary`                                                                             | `:focus-visible` ring, active-item text                                             |
| `--color-text-muted` / `--color-text-primary` / `--color-text-secondary`                      | Item icon / item-title / item-description, shortcut, footer text                    |
| `--color-border-medium`                                                                       | Custom scrollbar thumb/track color                                                  |
| `--z-dropdown`                                                                                | Menu stacking layer                                                                 |
| `--font-sans` / `--font-medium` / `--font-semibold` / `--font-mono`                           | Base typography / active-item weight / header weight / shortcut font                |
| `--text-xs` / `--text-sm` / `--text-base`                                                     | Header & `-sm`/description font-size, base item font-size, `-lg` item font-size     |
| `--leading-normal`                                                                            | Item line-height                                                                    |
| `--space-1` … `--space-5`                                                                     | Margins, padding, divider spacing across sizes                                      |
| `--size-16` / `--size-18` / `--size-44` / `--size-200`                                        | Submenu-arrow icon, item icon, item touch-target min-height, menu default min-width |
| `--radius-md` / `--radius-full`                                                               | Menu/footer corners / scrollbar-thumb corners                                       |
| `--shadow-lg`                                                                                 | Menu elevation                                                                      |
| `--transition-all-fast`                                                                       | Item hover/active transitions                                                       |

**New tokens added while migrating this file:**

- `--color-error-bg: rgba(239, 68, 68, 0.1)` (`tokens/semantic/colors.css`) —
  `.dropdown-item-danger:hover`'s background was a raw literal with no
  token; `context-menu.css`'s own danger-hover rule already referenced
  this exact token name (`var(--color-error-bg)`) without it being
  defined anywhere, so adding it fixes both files from one definition
  rather than creating two separate near-duplicates.
- `--size-200: 12.5rem` (`tokens/core/size.css`) — see `navbar.md` §4;
  the default dropdown-menu `min-width` (200px), reused identically by
  this file, `navbar.css`'s nav-link dropdown, and `context-menu.css`.

A few one-off values are left raw with `aural-ignore`: the menu's
`max-height` (400px) and the `-sm`/`-lg` size variants' `min-width`
(150px/280px — all common round numbers reused elsewhere in the codebase
individually, but not consistently enough across components to warrant a
shared token yet), the open/close fade-slide transition (0.2s, doesn't
match the 150/300ms duration scale), the divider hairline (1px), and the
nested-submenu arrow icon's inline SVG data-URI fill color (baked into a
`data:` URI string, not tokenizable).

## 5. Props/API

Dropdown is markup + CSS, driven by a small JS API in
`javascript/index.js` (the global `Aural` object):

| Method                             | Description                                                                                                                                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Aural.initDropdowns()`            | Wires up every `.dropdown` on the page in one call: trigger click/keyboard (Enter/Space to open, Esc to close), Arrow-key navigation within the menu, and outside-click-to-close. Call once on load. |
| `Aural.openDropdown(dropdownId)`   | Adds `.dropdown-open`, sets the trigger's `aria-expanded="true"`, removes the menu's `hidden` attribute.                                                                                             |
| `Aural.closeDropdown(dropdownId)`  | Inverse of `openDropdown`.                                                                                                                                                                           |
| `Aural.toggleDropdown(dropdownId)` | Calls open/close based on current state.                                                                                                                                                             |

Each `.dropdown` needs a unique `id` for these functions to key off of.

## 6. States

| State                 | Selector                                                                     | Effect                                                                             |
| --------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Closed (default)      | `.dropdown-menu` (no `.dropdown-open` ancestor)                              | `opacity: 0`, translated up 8px, `pointer-events: none`.                           |
| Open                  | `.dropdown.dropdown-open .dropdown-menu`                                     | Fades/slides in, `pointer-events: auto`.                                           |
| Item hover/focus      | `.dropdown-item:hover`, `:focus`                                             | `--color-dropdown-item-hover` background.                                          |
| Item active (pressed) | `.dropdown-item:active`                                                      | `--color-dropdown-item-active` background.                                         |
| Item selected         | `.dropdown-item-active`, `[aria-current="true"]`                             | Persistent `--color-dropdown-item-active` background, primary text, medium weight. |
| Item focus-visible    | `.dropdown-item:focus-visible`                                               | 2px `--color-primary` outline, inset.                                              |
| Item disabled         | `.dropdown-item[disabled]`, `.dropdown-item-disabled`                        | `opacity: 0.5`, `cursor: not-allowed`, `pointer-events: none`.                     |
| Submenu open (nested) | `.dropdown-submenu:hover > .dropdown-menu`, `:focus-within > .dropdown-menu` | Nested menu fades/slides in.                                                       |
| Reduced motion        | `prefers-reduced-motion: reduce`                                             | Menu/item transitions disabled; all placement-variant transforms removed.          |

## 7. Code example

```html
<div class="dropdown" id="actions-dropdown">
  <button class="btn btn-primary dropdown-trigger" aria-haspopup="true" aria-expanded="false">
    Actions
    <i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i>
  </button>

  <div class="dropdown-menu" role="menu" hidden>
    <a href="#" class="dropdown-item" role="menuitem">
      <i data-lucide="edit"></i>
      Edit
    </a>
    <a href="#" class="dropdown-item" role="menuitem">
      <i data-lucide="copy"></i>
      Duplicate
    </a>
    <div class="dropdown-divider" role="separator"></div>
    <a href="#" class="dropdown-item dropdown-item-danger" role="menuitem">
      <i data-lucide="trash-2"></i>
      Delete
    </a>
  </div>
</div>

<script>
  window.Aural?.initDropdowns();
  lucide?.createIcons();
</script>
```

## 8. Cross-references

- **Context Menu** — use Context Menu, not Dropdown, for right-click/long-press actions anchored to a cursor position rather than a trigger element; shares `--color-error-bg`, `--size-200`, and the `--z-dropdown`/`--z-popover` stacking pattern with this component.
- **Navbar** — `.aural-navbar__dropdown*` is a separate, self-contained nav-link dropdown, not built on this component.
- **Select** / **Combobox** — for choosing a single value from a list (with a visible current selection), prefer those form-control components over a generic Dropdown.
- **Modal** — use Modal, not Dropdown, when the choice must block the page.
