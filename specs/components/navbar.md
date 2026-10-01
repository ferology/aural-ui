# Navbar

## 1. Metadata

|                   |                                                                           |
| ----------------- | ------------------------------------------------------------------------- |
| Name              | Navbar                                                                    |
| Category          | Navigation                                                                |
| Status            | Stable                                                                    |
| CSS file          | `components/navbar.css`                                                   |
| Naming convention | BEM-ish (`.aural-navbar`, `.aural-navbar__link`, `.aural-navbar--sticky`) |

## 2. Overview

Navbar is the persistent top navigation bar that provides site-wide
branding, primary navigation links, search, and user actions across every
page. It's the first thing users see and the constant they return to while
navigating — unlike Drawer, which slides in on demand, Navbar is always
visible at the top and establishes the app's hierarchy.

Navbar supports a responsive collapse into a hamburger menu on mobile,
several visual variants (sticky, fixed, transparent, blur, dark), and
common patterns like a search input, notification badges, and a
link-triggered user/account dropdown — all driven by a small JS API in
`javascript/index.js`.

**When to use:**

- Primary site navigation that must be reachable from every page
- Keep navigation items to roughly 4–7 for scanability; put the brand/logo on the left, primary CTAs (sign up, login) on the right
- Use `.aural-navbar--sticky` for long-scrolling pages so navigation stays reachable

**When NOT to use:**

- On-demand, secondary navigation — use Drawer instead
- Mobile-first app navigation between 3–5 top-level destinations — use Bottom Navigation, which Navbar is commonly paired with (Navbar at the top for branding/search, Bottom Nav for primary mobile navigation)
- In-page section switching — use Tabs

## 3. Anatomy

| Class                                                                                  | Purpose                                                                                                                        |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `.aural-navbar`                                                                        | Root `<nav>` — full-width bar, bottom border, base `z-index: var(--z-sticky)`.                                                 |
| `.aural-navbar__inner`                                                                 | Max-width, centered, horizontally-padded flex row that holds brand/nav/actions.                                                |
| `.aural-navbar__brand`                                                                 | Logo + wordmark link, flex-shrink: 0.                                                                                          |
| `.aural-navbar__logo`                                                                  | The brand's `<img>`/icon, fixed height.                                                                                        |
| `.aural-navbar__nav`                                                                   | The primary link list — centered flex row on desktop, becomes a fixed full-width collapsible panel on mobile.                  |
| `.aural-navbar__link` / `.aural-navbar__link--active`                                  | A single nav link / its active-page styling.                                                                                   |
| `.aural-navbar__link-icon`                                                             | Optional icon inside a link.                                                                                                   |
| `.aural-navbar__actions`                                                               | Right-side action cluster (icon buttons, avatar, CTA button).                                                                  |
| `.aural-navbar__action`                                                                | An icon-button action; `.avatar`/`.avatar-sm`/`.avatar-xs` modify it to contain an Avatar instead of an icon.                  |
| `.aural-navbar__badge` / `.aural-navbar__badge--pulse`                                 | Notification-count badge on an action button, optionally pulsing.                                                              |
| `.aural-navbar__search` / `.aural-navbar__search-input` / `.aural-navbar__search-icon` | Inline search field, pill-shaped, with a leading icon.                                                                         |
| `.aural-navbar__toggle`                                                                | Mobile hamburger menu button — hidden on desktop, shown ≤768px.                                                                |
| `.aural-navbar__dropdown` / `-toggle` / `-arrow` / `-menu` / `-item` / `-divider`      | A nav-link-triggered dropdown (e.g. "Products ▾") — own small submenu system, distinct from the standalone Dropdown component. |
| `.aural-navbar--sticky` / `--fixed`                                                    | Sticky-in-flow vs. fixed-to-viewport positioning, both elevated to `var(--z-dropdown)`.                                        |
| `.aural-navbar--transparent` / `--blur` / `--dark`                                     | Background treatment variants.                                                                                                 |
| `.aural-navbar--sm` / `--lg`                                                           | Size modifiers — scale `__inner` padding and `__link` padding/font-size.                                                       |
| `.aural-navbar--centered`                                                              | Reorders brand/nav/actions so the nav links sit centered with the brand pushed to the far left.                                |
| `.aural-navbar--menu-open`                                                             | Mobile-only state class — expands `__nav` and reveals `__actions` inside the collapsed panel.                                  |
| `body.has-navbar-fixed`                                                                | Companion class for the consuming page's `<body>` — adds top padding to offset a `--fixed` navbar's removal from flow.         |

## 4. Tokens used

| Token                                                                                                                                                    | Used for                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `--color-bg-primary` / `--color-bg-secondary` / `--color-bg-tertiary`                                                                                    | Navbar / `__dropdown-menu` / mobile `__dropdown-menu` background                             |
| `--color-border-medium` / `--color-border-subtle`                                                                                                        | Navbar bottom border, search/dropdown-menu borders, dropdown-divider, mobile actions divider |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary` / `--color-text-muted`                                                       | Brand / link / search-icon / placeholder text                                                |
| `--color-primary`                                                                                                                                        | Brand hover, active-link text, focus rings, search focus border                              |
| `--primary-alpha-10`                                                                                                                                     | `__link--active` background                                                                  |
| `--color-bg-hover`                                                                                                                                       | Link/action/toggle hover background                                                          |
| `--color-error`                                                                                                                                          | Notification badge background                                                                |
| `--color-bg-dark-overlay`                                                                                                                                | `--dark` variant background (new semantic token — see below)                                 |
| `--color-text-on-dark-muted`                                                                                                                             | `--dark` variant resting link text color (new semantic token — see below)                    |
| `--color-badge-neutral-bg`                                                                                                                               | `--dark` variant border and hover background (reused from Badge)                             |
| `--z-sticky`                                                                                                                                             | Base navbar layer                                                                            |
| `--z-dropdown`                                                                                                                                           | `--sticky`/`--fixed` navbar, nav-link dropdown menu, `__dropdown-menu`                       |
| `--font-bold` / `--font-extrabold` / `--font-semibold` / `--font-medium`                                                                                 | Brand / mobile brand / active-link / link weight                                             |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg`                                                                                                  | Font size at `--sm` link / base link / `--lg` link & mobile brand / brand                    |
| `--space-1` … `--space-10`, `--space-60`                                                                                                                 | Padding, gaps, search width                                                                  |
| `--size-12` / `--size-16` / `--size-18` / `--size-20` / `--size-24` / `--size-28` / `--size-32` / `--size-40` / `--size-44` / `--size-64` / `--size-200` | Icon/avatar/action/logo/search/toggle dimensions, body offset, dropdown-menu min-width       |
| `--radius-sm` / `--radius-md` / `--radius-full`                                                                                                          | Focus-ring / link, action, dropdown-menu / badge corners                                     |
| `--shadow-xl`                                                                                                                                            | Dropdown-menu and mobile nav-panel elevation                                                 |
| `--transition-all-fast` / `--duration-normal`                                                                                                            | Link/action/toggle transitions / mobile nav & dropdown-menu max-height transitions           |

**New tokens added while migrating this file:**

- `--color-bg-dark-overlay: rgba(0, 0, 0, 0.9)` (`tokens/semantic/colors.css`) —
  the `--dark` variant's background had no matching token; the same literal
  is used identically by Bottom Navigation and Context Menu's own `--dark`
  variants, so it's a shared cross-component token rather than three
  near-duplicates.
- `--color-text-on-dark: rgba(255, 255, 255, 0.9)` and
  `--color-text-on-dark-muted: rgba(255, 255, 255, 0.7)`
  (`tokens/semantic/colors.css`) — "muted"/"resting" text color on a dark
  surface, following the existing `--color-text-on-primary`/`-success`/etc.
  naming family. `-muted` is reused here and by Bottom Navigation; the full
  `--color-text-on-dark` is reused by Context Menu.
- `--size-200: 12.5rem` (`tokens/core/size.css`) — the default floating-menu
  `min-width` (200px) had no token and is reused identically by this file's
  nav-link dropdown, `dropdown.css`, and `context-menu.css`.

`--color-badge-neutral-bg` (reused for the `--dark` variant's border/hover
background) and `--size-72`/`--duration-normal`/`--z-popover`/`--z-max`
(used by sibling files in this same migration batch) were added or already
present from parallel work — see `pagination.md`/`stepper.md`/etc. for
their own notes; nothing else new was needed here.

A handful of one-off values are left raw with `aural-ignore`: the
`__inner` max-width (1280px), the badge pulse animation speed (2s), the
dropdown-arrow rotate transition and dropdown-menu fade/slide transitions
(0.2s — don't cleanly match the 150/300ms duration scale), the
dropdown-divider hairline (1px), and the mobile dropdown-menu's open-state
`max-height` ceiling (500px). The badge's `font-size: 0.65rem` is also
left raw — it's reused verbatim by Bottom Navigation, Notification Center,
and Multi-Select, but sits slightly off the `--text-2xs` (0.625rem) rung,
so snapping it to that token would be a (tiny) real visual change, not a
value-preserving swap.

## 5. Props/API

Navbar is markup + CSS, driven by a small JS API in `javascript/index.js`
(the global `Aural` object):

| Method                             | Description                                                                                                                                                                                    |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Aural.initNavbar(navId, options)` | Wires up the mobile `__toggle` button and each `__dropdown`'s link-click toggle; closes open dropdowns and the mobile menu on an outside click. Returns `{ openMenu, closeMenu, toggleMenu }`. |

`options`: `mobileBreakpoint` (number, default `768`, used only to decide
whether an outside click should also close the mobile menu — it does not
change the CSS breakpoint, which is fixed at `768px`/`640px` in
`navbar.css`), `onToggle` (callback invoked with the new open/closed
boolean whenever the hamburger toggle is clicked).

## 6. States

| State                     | Selector                                    | Effect                                                                                                |
| ------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Default                   | `.aural-navbar__link`                       | `--color-text-secondary` text.                                                                        |
| Hover                     | `.aural-navbar__link:hover`                 | `--color-bg-hover` background, text brightens to primary text color.                                  |
| Active (current page)     | `.aural-navbar__link--active`               | `--primary-alpha-10` background, `--color-primary` text, semibold.                                    |
| Focus                     | `:focus-visible` (link/action/brand/toggle) | 2px `--color-primary` outline with offset.                                                            |
| Dropdown open             | `.aural-navbar__dropdown--open`             | Menu fades/slides in, arrow rotates 180°.                                                             |
| Mobile menu open          | `.aural-navbar--menu-open`                  | `__nav` panel expands (`max-height`), `__actions` revealed inside it.                                 |
| Reduced motion            | `prefers-reduced-motion: reduce`            | All listed transitions and the badge pulse animation disabled.                                        |
| Touch (`pointer: coarse`) | —                                           | Links, actions, brand, dropdown items, and search input all grow to the 44×44px minimum touch target. |

Navbar has no disabled/error state — it's a structural, always-interactive
navigation element.

## 7. Code example

```html
<nav
  class="aural-navbar aural-navbar--sticky"
  role="navigation"
  aria-label="Main navigation"
  id="main-navbar"
>
  <div class="aural-navbar__inner">
    <a href="/" class="aural-navbar__brand">
      <i data-lucide="sparkles" style="width: 24px; height: 24px;"></i>
      <span>Brand Name</span>
    </a>

    <div class="aural-navbar__nav">
      <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">Home</a>
      <a href="#" class="aural-navbar__link">Products</a>
      <a href="#" class="aural-navbar__link">About</a>
      <a href="#" class="aural-navbar__link">Contact</a>
    </div>

    <div class="aural-navbar__actions">
      <button class="aural-navbar__action" aria-label="Notifications, 3 unread">
        <i data-lucide="bell"></i>
        <span class="aural-navbar__badge aural-navbar__badge--pulse">3</span>
      </button>
      <button class="btn btn-primary btn-sm">Sign Up</button>
    </div>

    <button class="aural-navbar__toggle" aria-label="Toggle menu" aria-expanded="false">
      <i data-lucide="menu"></i>
    </button>
  </div>
</nav>

<script>
  window.Aural?.initNavbar('main-navbar');
</script>
```

## 8. Cross-references

- **Dropdown** — the standalone Dropdown component; `.aural-navbar__dropdown*` is a self-contained, simpler sibling scoped to nav links, not built on top of it.
- **Bottom Navigation** — the mobile-first counterpart for 3–5 top-level destinations; commonly paired with Navbar (Navbar for branding/search at top, Bottom Nav for primary navigation).
- **Context Menu** / **Bottom Navigation** — share this component's `--dark` variant tokens (`--color-bg-dark-overlay`, `--color-text-on-dark[-muted]`).
- **Breadcrumb** — a secondary, in-page trail that typically sits just below Navbar, not a replacement for it.
