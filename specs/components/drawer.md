# Drawer

## 1. Metadata

|                   |                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------- |
| Name              | Drawer                                                                                  |
| Category          | Overlay                                                                                 |
| Status            | Stable                                                                                  |
| CSS file          | `components/drawer.css`                                                                 |
| Naming convention | `aural-` prefixed BEM (`.aural-drawer`, `.aural-drawer__header`, `.aural-drawer--left`) |

## 2. Overview

Drawer is a sliding side panel for secondary navigation, filters, or
supplementary content that doesn't require navigating away from the page.
Like Dialog it's a two-layer structure — `.aural-drawer-backdrop` (full-screen
blurred backdrop) adjacent to `.aural-drawer` (the sliding panel,
`role="dialog"` `aria-modal="true"`) — but it can slide in from any of four
edges (`--left`/`--right`/`--top`/`--bottom`) and supports a `--persistent`
variant with no backdrop at all (an always-visible, in-flow side panel).

**When to use:**

- Navigation menus (`--left`)
- Shopping carts, detail panels, settings (`--right`)
- Announcements, search (`--top`)
- Mobile action sheets, quick options (`--bottom`)
- Any optional, secondary content that should keep the main content visible
  (though typically disabled) rather than demand immediate attention

**When NOT to use:**

- Content requiring immediate acknowledgment before continuing — use **Modal** or **Dialog**
- A single yes/no confirmation — use **Dialog**

## 3. Anatomy

| Class                                                                              | Purpose                                                                                               |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `.aural-drawer-backdrop`                                                           | Full-screen, fixed, blurred backdrop; toggles via `.aural-drawer-backdrop--open`.                     |
| `.aural-drawer`                                                                    | The sliding panel itself — fixed position, elevated, flex column; toggles via `.aural-drawer--open`.  |
| `.aural-drawer--left` / `--right` / `--top` / `--bottom`                           | Edge-position modifiers; each defines its own default size and translate-based closed/open transform. |
| `.aural-drawer__header` / `__title` / `__close`                                    | Header row, title text, close button.                                                                 |
| `.aural-drawer__body`                                                              | Scrollable main content area.                                                                         |
| `.aural-drawer__footer`                                                            | Action row; `--right`/`--center`/`--between` control justify-content.                                 |
| `.aural-drawer__nav` / `__nav-item` / `__nav-icon` / `__nav-label` / `__nav-badge` | Built-in vertical nav-link list, with an active-state modifier `__nav-item--active`.                  |
| `.aural-drawer__section` / `__section-title`                                       | Groups nav items under an uppercase label.                                                            |
| `.aural-drawer--sm` / `--lg` / `--xl` / `--full`                                   | Size presets (scale the edge-specific width or height); `--full` goes to 100vw/100vh.                 |
| `.aural-drawer-backdrop--dark` / `--light` / `--no-blur`                           | Backdrop intensity/blur variants.                                                                     |
| `.aural-drawer--persistent`                                                        | No backdrop, static position — an always-visible in-flow panel.                                       |

## 4. Tokens used

| Token                                                                                             | Used for                                                                                                                  |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `--color-drawer-backdrop` / `--color-drawer-backdrop-dark` / `--color-drawer-backdrop-light`      | `.aural-drawer-backdrop` background and its `--dark`/`--light` variants (new tokens — see note)                           |
| `--color-bg-primary` / `--color-bg-secondary`                                                     | `.aural-drawer` background / body scrollbar track                                                                         |
| `--color-border-medium` / `--color-border-subtle`                                                 | Edge border (per position) / header-footer dividers                                                                       |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary`                       | Title / nav icon & close button / section-title text                                                                      |
| `--color-bg-hover` / `--primary-alpha-10`                                                         | Close-button & nav-item hover / active nav-item background                                                                |
| `--z-overlay` / `--z-popover`                                                                     | Backdrop / panel stacking context (matching Modal.md's documented z-index.css note that this tier is "a drawer backdrop") |
| `--size-20` / `--size-24` / `--size-44`                                                           | Nav icon size / close-icon size / close-button & nav-item touch targets                                                   |
| `--space-60` / `--space-80`                                                                       | `--sm` width / default width (`--left`/`--right`)                                                                         |
| `--size-280` / `--size-400` / `--size-560` / `--size-720`                                         | `--sm`/default/`--lg`/`--xl` height (`--top`/`--bottom`) (new tokens — see note)                                          |
| `--size-480` / `--size-640`                                                                       | `--lg`/`--xl` width (shared overlay-width scale from Modal.md)                                                            |
| `--space-0-5` / `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-5` / `--space-6` | Nav-badge padding, body/footer/header/section spacing                                                                     |
| `--text-xs` / `--text-base` / `--text-lg`                                                         | Section-title / nav-item / drawer title font sizes                                                                        |
| `--font-medium` / `--font-semibold`                                                               | Nav-item / title & active-nav-item font weight                                                                            |
| `--radius-sm` / `--radius-md` / `--radius-full`                                                   | Scrollbar-thumb corners / close-button & nav-item corners / nav-badge pill                                                |
| `--shadow-xl`                                                                                     | Panel elevation                                                                                                           |
| `--duration-normal` / `--transition-all-fast`                                                     | Backdrop fade & panel slide transitions / close-button & nav-item hover                                                   |

**New tokens added while migrating this file:**

- `--color-drawer-backdrop: rgba(0, 0, 0, 0.5)`, `--color-drawer-backdrop-dark: rgba(0, 0, 0, 0.75)`,
  `--color-drawer-backdrop-light: rgba(0, 0, 0, 0.3)` (`tokens/semantic/colors.css`, new
  Drawer section) — following the precedent set by `--color-dialog-backdrop` /
  `--color-palette-backdrop`, a dedicated backdrop token per overlay component
  even where the base value is shared.
- `--size-280` / `--size-400` / `--size-560` / `--size-720` (`tokens/core/size.css`, new
  "Overlay Height/Width Presets" section) — Drawer's own top/bottom height
  scale (sm/default/lg/xl), parallel to but distinct from the shared
  360/480/640/800 width family used by Modal/Dialog/Command Palette.
- `--space-60` (an existing `tokens/core/spacing.css` token, 240px) is reused
  here for the `--sm` drawer width rather than adding a new `--size-240` —
  size and spacing share a 4px-step scale at several rungs, and this one
  already existed at the exact value.

## 5. Props/API

Drawer is markup + CSS classes, opened/closed via a JS API in
`javascript/index.js` (the global `Aural` object):

| Method                         | Description                                                                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Aural.openDrawer(drawerId)`   | Adds `.aural-drawer--open` to the panel and `.aural-drawer-backdrop--open` to its preceding-sibling backdrop, prevents body scroll, focuses the first focusable element. |
| `Aural.closeDrawer(drawerId)`  | Reverses `openDrawer`.                                                                                                                                                   |
| `Aural.toggleDrawer(drawerId)` | Opens if closed, closes if open.                                                                                                                                         |
| `Aural.initDrawers()`          | Global listener: closes all open drawers on Escape, closes on backdrop click, and wires every `.aural-drawer__close` button. Call once on load.                          |

## 6. States

| State                  | Trigger                                                  | Effect                                                                                     |
| ---------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Closed (default)       | `.aural-drawer` without `.aural-drawer--open`            | Translated fully off-screen on its edge axis (e.g. `translateX(-100%)` for `--left`).      |
| Open                   | `.aural-drawer--open`                                    | Slides to `translate(0)`; backdrop (if present) fades/becomes visible.                     |
| Hover (close/nav item) | `.aural-drawer__close:hover` / `__nav-item:hover`        | `--color-bg-hover` background; nav items also recolor icon/label to `--color-primary`.     |
| Active (nav item)      | `.aural-drawer__nav-item--active`                        | `--primary-alpha-10` background, `--color-primary` text/icon, `--font-semibold`.           |
| Focus                  | Any focusable child, `:focus-visible` on close/nav items | `outline: 2px solid var(--color-primary)`; JS focuses the first focusable element on open. |
| Persistent             | `.aural-drawer--persistent`                              | No backdrop, `box-shadow: none`, static in-flow position for `--left`/`--right`.           |
| Reduced motion         | `prefers-reduced-motion: reduce`                         | Panel slide and backdrop fade transitions are skipped.                                     |

## 7. Code example

```html
<button class="btn btn-primary" onclick="Aural.openDrawer('nav-drawer')">Open Navigation</button>

<div class="aural-drawer-backdrop"></div>
<div
  class="aural-drawer aural-drawer--left"
  id="nav-drawer"
  role="dialog"
  aria-modal="true"
  aria-labelledby="drawer-title"
>
  <div class="aural-drawer__header">
    <h2 class="aural-drawer__title" id="drawer-title">Navigation</h2>
    <button class="aural-drawer__close" aria-label="Close drawer"></button>
  </div>
  <div class="aural-drawer__body">
    <nav class="aural-drawer__nav">
      <a href="#" class="aural-drawer__nav-item aural-drawer__nav-item--active">
        <span class="aural-drawer__nav-icon"></span>
        <span class="aural-drawer__nav-label">Home</span>
      </a>
    </nav>
  </div>
</div>

<script>
  window.Aural?.initDrawers();
</script>
```

## 8. Cross-references

- **Dialog / Modal / Command Palette** — alternative overlay patterns; Drawer
  shares the backdrop + panel idiom and the `--size-480`/`--size-640` rungs of
  the shared overlay-width scale with Modal.
- **Button** — footer actions use the Button component.
- **Accordion** — `.aural-drawer__nav`'s section grouping mirrors a simple
  vertical nav list; use Accordion instead for collapsible content groups.
