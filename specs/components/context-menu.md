# Context Menu

## 1. Metadata

|                   |                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Name              | Context Menu                                                                                 |
| Category          | Overlay                                                                                      |
| Status            | Stable                                                                                       |
| CSS file          | `components/context-menu.css`                                                                |
| Docs page         | `docs/components/context-menu.html`                                                          |
| Naming convention | BEM-ish (`.aural-context-menu`, `.aural-context-menu__item`, `.aural-context-menu--compact`) |

## 2. Overview

Context Menu is a right-click (or long-press, on mobile) menu that shows
actions relevant to whatever was clicked — a file, a table row, a
selection. It's cursor-positioned rather than trigger-anchored (unlike
Dropdown), supports nested submenus, checkable items, and keyboard
navigation, and is essential for power users who want quick access to
contextual actions.

**When to use:**

- Actions directly related to the clicked element
- Power users who want quick access to advanced features
- Data-rich applications: file managers, editors, data tables
- Context-specific actions that don't belong in primary navigation
- Pair with visible keyboard shortcuts for all actions where possible

**When NOT to use:**

- A trigger-anchored menu (a "⋯" button, a toolbar action) — use Dropdown instead
- Mobile-only apps — the long-press gesture can conflict with other touch interactions
- Critical or primary actions — don't hide essential actions behind a right-click
- A single action — use a button

## 3. Anatomy

| Class                                                                 | Purpose                                                                                                          |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `.aural-context-menu`                                                 | Root panel — `position: fixed`, positioned by JS to the click coordinates, `z-index: var(--z-popover)`.          |
| `.aural-context-menu--open`                                           | State class that reveals the menu (scale/opacity transition).                                                    |
| `.aural-context-menu__item`                                           | A single action (`role="menuitem"`).                                                                             |
| `.aural-context-menu__item-icon` / `-label` / `-shortcut` / `-arrow`  | Leading icon / label text / trailing keyboard-shortcut text / submenu disclosure arrow.                          |
| `.aural-context-menu__item--disabled`                                 | Non-interactive item.                                                                                            |
| `.aural-context-menu__item--danger`                                   | Destructive-action styling.                                                                                      |
| `.aural-context-menu__item--active`                                   | Marks a currently-applied/selected item.                                                                         |
| `.aural-context-menu__item--checkable` / `--checked` + `__item-check` | Toggleable item with a leading checkmark that fades in when checked.                                             |
| `.aural-context-menu__item--loading`                                  | Shows a trailing spinner and blocks further interaction on that item.                                            |
| `.aural-context-menu__separator`                                      | Thin divider between item groups.                                                                                |
| `.aural-context-menu__header`                                         | Non-interactive uppercase group label.                                                                           |
| `.aural-context-menu__submenu` / `--left`                             | A nested menu anchored to a parent item's right edge (or left, near a viewport edge), `z-index: var(--z-max)`.   |
| `.aural-context-menu--compact`                                        | Denser variant — smaller padding/min-height/icon size.                                                           |
| `.aural-context-menu--icons-only`                                     | Hides labels/shortcuts, centers icons, shrinks to content width.                                                 |
| `.aural-context-menu--dark`                                           | Opaque dark background treatment, independent of the active theme.                                               |
| `.aural-context-menu-trigger`                                         | Marker class for the element that owns a context menu (positioning context only — no visual styling of its own). |

## 4. Tokens used

| Token                                                                                            | Used for                                                                                                               |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `--color-bg-secondary`                                                                           | Menu background                                                                                                        |
| `--color-border-medium` / `--color-border-subtle`                                                | Menu border / separator color                                                                                          |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary`                      | Item text / item-icon resting / shortcut & arrow & header text                                                         |
| `--color-primary` / `--color-bg-hover`                                                           | Item hover/focus-visible text & spinner accent / item hover/focus-visible background                                   |
| `--primary-alpha-10`                                                                             | `--active` item background                                                                                             |
| `--color-error` / `--color-error-bg`                                                             | `--danger` item text / hover background (new semantic token — shared with Dropdown)                                    |
| `--color-bg-dark-overlay`                                                                        | `--dark` variant background (new semantic token — shared with Navbar, Bottom Nav)                                      |
| `--color-text-on-dark`                                                                           | `--dark` variant item text color (new semantic token — see below)                                                      |
| `--color-badge-neutral-bg`                                                                       | `--dark` variant border, hover background, separator color (reused from Badge)                                         |
| `--z-popover` / `--z-max`                                                                        | Menu / nested-submenu stacking layer                                                                                   |
| `--font-medium` / `--font-semibold` / `--font-mono`                                              | Item weight / header weight / shortcut font                                                                            |
| `--text-sm` / `--text-xs`                                                                        | Item font-size / shortcut, compact-item, header font-size                                                              |
| `--space-1` … `--space-4`, `--space-8`, `--space-80`                                             | Gaps, padding, offsets, checkable-item indent, menu `max-width`                                                        |
| `--size-12` / `--size-14` / `--size-16` / `--size-28` / `--size-36` / `--size-44` / `--size-200` | Arrow/spinner, compact-icon, item/check icon, compact min-height, default min-height, touch min-height, menu min-width |
| `--radius-md` / `--radius-lg`                                                                    | Menu corners / mobile bottom-sheet top corners                                                                         |
| `--shadow-xl`                                                                                    | Menu elevation                                                                                                         |
| `--transition-all-fast` / `--duration-fast` / `--duration-normal`                                | Item transitions / menu open/close transition / mobile submenu stack transition                                        |

**New tokens added while migrating this file:**

- `--color-text-on-dark: rgba(255, 255, 255, 0.9)` (`tokens/semantic/colors.css`) —
  the `--dark` variant's item text color, following the existing
  `--color-text-on-primary`/`-success`/etc. naming family; its
  "muted" (0.7-alpha) sibling, `--color-text-on-dark-muted`, is defined
  alongside it and used by Navbar and Bottom Navigation's own `--dark`
  variants. See `navbar.md` §4 for the full rationale.
- `--color-bg-dark-overlay` and `--color-error-bg` — already covered by
  `navbar.md` and `dropdown.md` respectively; both are reused here as-is
  rather than duplicated (this file's own `--danger:hover` rule already
  referenced `var(--color-error-bg)` before it had a definition anywhere).

A few one-off values are left raw with `aural-ignore`: the separator
hairline (1px), the WAI visually-hidden `.aural-context-menu__sr-label`
clip-rect idiom (1px/1px/-1px, the standard pattern reused verbatim
elsewhere in the codebase), the loading-spinner animation speed (0.8s),
and the mobile stacked-submenu open-state `max-height` ceiling (500px).

## 5. Props/API

Context Menu is markup + CSS, driven by a small JS API in
`javascript/index.js` (the global `Aural` object):

| Method                                              | Description                                                                                                                                                                                                |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Aural.initContextMenu(triggerId, menuId, options)` | Wires a right-click handler on `triggerId` that opens `menuId` at the cursor; also wires outside-click-to-close, Esc-to-close, Arrow-key navigation, and Enter/Space activation. Returns `{ show, hide }`. |
| `Aural.showContextMenu(menuId, x, y)`               | Closes any other open context menu, positions `menuId` at `(x, y)`, reveals it, nudges it back on-screen if it would overflow the viewport, and focuses its first enabled item.                            |
| `Aural.hideContextMenu(menuId)`                     | Removes `.aural-context-menu--open`.                                                                                                                                                                       |

`options`: `preventDefault` (boolean, default `true` — suppresses the
browser's native context menu on the trigger).

## 6. States

| State                       | Selector                                                                          | Effect                                                                                                        |
| --------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Closed (default)            | `.aural-context-menu` (no `--open`)                                               | `opacity: 0`, `visibility: hidden`, `scale(0.95)`.                                                            |
| Open                        | `.aural-context-menu--open`                                                       | Fades/scales in to full opacity and `scale(1)`.                                                               |
| Item hover/focus-visible    | `.aural-context-menu__item:hover:not(--disabled)`, `:focus-visible`               | `--color-bg-hover` background, `--color-primary` text/icon.                                                   |
| Item disabled               | `.aural-context-menu__item--disabled`                                             | `opacity: 0.5`, `cursor: not-allowed`, `pointer-events: none`.                                                |
| Item danger                 | `.aural-context-menu__item--danger`, `:hover`                                     | `--color-error` text; `--color-error-bg` background on hover.                                                 |
| Item active (applied)       | `.aural-context-menu__item--active`                                               | `--primary-alpha-10` background, primary text.                                                                |
| Item checked                | `.aural-context-menu__item--checked`                                              | The item's `__item-check` icon fades to `opacity: 1`.                                                         |
| Item loading                | `.aural-context-menu__item--loading`                                              | Trailing spinner, `pointer-events: none`.                                                                     |
| Submenu open (nested)       | `.aural-context-menu__item:hover > .aural-context-menu__submenu`, `:focus-within` | Nested menu reveals (scale/opacity).                                                                          |
| Mobile (`max-width: 640px`) | —                                                                                 | Menu becomes a bottom sheet; submenus stack in place instead of flying out; the disclosure arrow rotates 90°. |
| Reduced motion              | `prefers-reduced-motion: reduce`                                                  | Menu/item transitions and the loading spinner animation disabled.                                             |
| Touch (`pointer: coarse`)   | —                                                                                 | Items grow to the 44px touch-target minimum.                                                                  |

## 7. Code example

```html
<div class="context-trigger" id="my-trigger">
  <p>Right-click here for menu</p>
</div>

<div class="aural-context-menu" id="menu-my-trigger" role="menu">
  <button class="aural-context-menu__item" role="menuitem">
    <i data-lucide="copy" class="aural-context-menu__item-icon"></i>
    <span class="aural-context-menu__item-label">Copy</span>
    <span class="aural-context-menu__item-shortcut">⌘C</span>
  </button>
  <button class="aural-context-menu__item" role="menuitem">
    <i data-lucide="scissors" class="aural-context-menu__item-icon"></i>
    <span class="aural-context-menu__item-label">Cut</span>
    <span class="aural-context-menu__item-shortcut">⌘X</span>
  </button>

  <div class="aural-context-menu__separator" role="separator"></div>

  <button class="aural-context-menu__item aural-context-menu__item--danger" role="menuitem">
    <i data-lucide="trash-2" class="aural-context-menu__item-icon"></i>
    <span class="aural-context-menu__item-label">Delete</span>
  </button>
</div>

<script>
  lucide.createIcons();
  window.Aural?.initContextMenu('my-trigger', 'menu-my-trigger');
</script>
```

## 8. Cross-references

- **Dropdown** — use Dropdown, not Context Menu, for a trigger-anchored (not cursor-positioned) menu; shares `--color-error-bg`, `--size-200`, and the overlay stacking pattern with this component.
- **Navbar** / **Bottom Navigation** — share this component's `--dark`-variant tokens (`--color-bg-dark-overlay`, `--color-text-on-dark`).
- **Table** — Context Menu is a common pattern for per-row actions, as an alternative to a Dropdown triggered by a "⋯" button.
