# Command Palette

## 1. Metadata

|                   |                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Name              | Command Palette                                                                                                            |
| Category          | Overlay / Navigation                                                                                                       |
| Status            | Stable                                                                                                                     |
| CSS file          | `components/command-palette.css`                                                                                           |
| Naming convention | `aural-` prefixed BEM (`.aural-command-palette`, `.aural-command-palette__item`, `.aural-command-palette__item--selected`) |

## 2. Overview

Command Palette is a keyboard-driven, ⌘K/Ctrl+K-style launcher: a
centered, top-anchored overlay (`.aural-command-palette-backdrop` +
`.aural-command-palette`) with a search input, fuzzy-filtered and
grouped results, arrow-key selection, and keyboard-shortcut hints per item.
It's meant to float above every other overlay in the app — including an
open Modal or Drawer — since it's typically a global, app-wide affordance.

**When to use:**

- Power-user quick access to all application features/navigation
- Unified search across pages, files, commands, or content
- Fast execution of common actions without hunting through menus
- Quick settings/theme switching

**When NOT to use:**

- A single, contextual set of actions for one element — use **Context Menu** or **Dropdown**
- Simple in-page search — use **Search Bar**

## 3. Anatomy

| Class                                                                                          | Purpose                                                                                             |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `.aural-command-palette-backdrop`                                                              | Full-screen, fixed, blurred backdrop, top-anchored (`padding-top: 15vh`); toggles via `.is-open`.   |
| `.aural-command-palette`                                                                       | The palette surface — bordered, rounded, glow-elevated, capped at `--size-640`, `max-height: 70vh`. |
| `.aural-command-palette__search` / `__search-icon` / `__input`                                 | Search row with a leading icon and a borderless text input.                                         |
| `.aural-command-palette__results`                                                              | Scrollable results container.                                                                       |
| `.aural-command-palette__group` / `__group-label`                                              | One category section with an uppercase label.                                                       |
| `.aural-command-palette__items` / `__item` / `__item--selected`                                | The list of command rows and the keyboard-highlighted one.                                          |
| `.aural-command-palette__item-icon` / `__item-content` / `__item-title` / `__item-description` | Row content: leading icon, title, optional description (both single-line, ellipsized).              |
| `.aural-command-palette__shortcut` / `__key`                                                   | Right-aligned keycap row for a command's keyboard shortcut.                                         |
| `.aural-command-palette__match`                                                                | Highlights the matched substring within a result.                                                   |
| `.aural-command-palette__empty` / `__empty-icon` / `__empty-text`                              | "No commands found" state.                                                                          |
| `.aural-command-palette__loading` / `__spinner`                                                | Loading state with a spinning indicator.                                                            |
| `.aural-command-palette__footer` / `__hint` / `__hint-keys`                                    | Bottom hint bar (e.g. "↑↓ to navigate, ↵ to select").                                               |

## 4. Tokens used

| Token                                                                    | Used for                                                                                                         |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `--color-palette-backdrop`                                               | `.aural-command-palette-backdrop` background                                                                     |
| `--color-bg-primary` / `--color-bg-secondary` / `--color-bg-tertiary`    | Palette surface / footer & scrollbar-track / key background                                                      |
| `--color-border`                                                         | Palette/search/footer borders, key border                                                                        |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-muted` | Item text / key text / search-icon, placeholder, group-label, hint text                                          |
| `--color-text-on-dark`                                                   | Selected-item icon/description color (existing exact-match token)                                                |
| `--color-tab-badge-bg`                                                   | Selected-item key background (existing exact-match token)                                                        |
| `--color-media-track-bg`                                                 | Selected-item key border (shared with Carousel/Image Gallery — see note)                                         |
| `--color-primary`                                                        | Selected-item background, match-highlight text                                                                   |
| `--z-max`                                                                | Backdrop stacking context (per `tokens/semantic/z-index.css`'s own note that this tier covers "command palette") |
| `--duration-moderate` / `--duration-fast`                                | Backdrop fade & palette entrance / item hover transitions                                                        |
| `--size-24` / `--size-32` / `--size-48` / `--size-64` / `--size-640`     | Icon/key sizing, input left-padding & results max-height calc, spinner, palette max-width                        |
| `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-8`      | Gaps and padding throughout                                                                                      |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-xl` / `--text-5xl`   | Key/description / title & empty-text / input / search-icon & item-icon / empty-icon font sizes                   |
| `--font-medium` / `--font-semibold` / `--font-mono`                      | Title / group-label & match-highlight / key font family                                                          |
| `--radius-sm` / `--radius-md` / `--radius-lg` / `--radius-full`          | Key & scrollbar corners / item corners / palette corners / spinner                                               |
| `--shadow-2xl` / `--shadow-xs` / `--glow-primary-sm`                     | Palette elevation+glow / key elevation / selected-item glow                                                      |

**New tokens relied on (added by this or a concurrent migration):**

- `--duration-moderate: 200ms` (`tokens/core/animations.css`) — the
  widely-repeated raw `0.2s` the backdrop/palette transitions used.
- `--color-media-track-bg: rgba(255, 255, 255, 0.3)` (`tokens/semantic/colors.css`,
  added while migrating Carousel) — reused here for the selected-item key
  border, an exact value match.
- This file also already had dedicated `--color-palette-*` semantic tokens
  pre-existing in `tokens/semantic/colors.css` before this migration
  (`--color-palette-bg/border/backdrop/search-border/group-label/item-*/key-*/footer-*`),
  so most of its color literals resolved to a direct, already-named token
  rather than needing a new one.

## 5. Props/API

Command Palette is markup + CSS classes, driven by a JS API in
`javascript/index.js` (the global `Aural` object):

| Method                                            | Description                                                                                                                                                                                                                                  |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Aural.openCommandPalette(paletteId)`             | Adds `.is-open`, sets `role="dialog"`/`aria-modal`/`combobox`/`listbox` ARIA wiring, focuses the input, closes on Escape.                                                                                                                    |
| `Aural.closeCommandPalette(paletteId)`            | Removes `.is-open` and the body-scroll-lock class.                                                                                                                                                                                           |
| `Aural.initCommandPalette(paletteId, commands)`   | Renders grouped results, wires live search filtering, arrow-key selection (with `aria-activedescendant`), Enter-to-run, and a global ⌘K/Ctrl+K toggle. `commands`: array of `{ id, title, description?, icon?, group?, shortcut?, action }`. |
| `Aural.renderCommandResults(paletteId, commands)` | Re-renders the grouped, selectable result list (or the empty state) for a given command set.                                                                                                                                                 |

## 6. States

| State               | Trigger                                              | Effect                                                                                                                       |
| ------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Closed (default)    | `.aural-command-palette-backdrop` without `.is-open` | `opacity: 0`, `pointer-events: none`.                                                                                        |
| Open                | `.aural-command-palette-backdrop.is-open`            | Backdrop fades in, palette scales/translates to resting position, input is focused.                                          |
| Hover (item)        | `.aural-command-palette__item:hover`                 | `--color-bg-secondary` background.                                                                                           |
| Selected (keyboard) | `.aural-command-palette__item--selected`             | `--color-primary` background, white text, a primary glow; icon/description dim to `--color-text-on-dark`; keycaps recolor.   |
| Focus               | `.aural-command-palette__item:focus-visible`         | `outline: 2px solid var(--color-primary)`.                                                                                   |
| Empty               | Zero filtered results                                | Shows `.aural-command-palette__empty` with a muted search icon and "No commands found".                                      |
| Loading             | `.aural-command-palette__loading`                    | Centered spinner (`animation: spin 0.8s linear infinite`).                                                                   |
| Reduced motion      | `prefers-reduced-motion: reduce`                     | Backdrop/palette/item transitions and the spinner animation are skipped (spinner border-top falls back to `--color-border`). |

## 7. Code example

```html
<div class="aural-command-palette-backdrop" id="cmdk">
  <div class="aural-command-palette">
    <div class="aural-command-palette__search">
      <span class="aural-command-palette__search-icon"></span>
      <input class="aural-command-palette__input" placeholder="Type a command..." />
    </div>
    <div class="aural-command-palette__results"></div>
    <div class="aural-command-palette__footer">
      <span class="aural-command-palette__hint">↑↓ Navigate</span>
      <span class="aural-command-palette__hint">↵ Select</span>
      <span class="aural-command-palette__hint">esc Close</span>
    </div>
  </div>
</div>

<script>
  Aural.initCommandPalette('cmdk', [
    {
      id: 'home',
      title: 'Go to Dashboard',
      group: 'Navigation',
      shortcut: 'Cmd+D',
      action: () => go('/'),
    },
  ]);
</script>
```

## 8. Cross-references

- **Modal / Dialog / Drawer** — other overlay patterns; Command Palette is
  the one meant to sit above all of them (`--z-max`), since it's typically
  triggered globally regardless of what else is open.
- **Dropdown / Context Menu** — lighter-weight, anchored alternatives for a
  single element's actions rather than an app-wide launcher.
- **Badge** — the selected-item keycap reuses `--color-tab-badge-bg`, the
  same translucent-white chip tone Tabs uses for its count badges.
