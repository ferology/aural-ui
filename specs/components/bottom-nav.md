# Bottom Navigation

## 1. Metadata

|                   |                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------- |
| Name              | Bottom Navigation                                                                      |
| Category          | Navigation                                                                             |
| Status            | Stable                                                                                 |
| CSS file          | `components/bottom-nav.css`                                                            |
| Docs page         | `docs/components/bottom-navigation.html`                                               |
| Naming convention | BEM-ish (`.aural-bottom-nav`, `.aural-bottom-nav__item`, `.aural-bottom-nav--compact`) |

## 2. Overview

Bottom Navigation is a mobile-first, fixed-to-viewport navigation bar
placed at the bottom of the screen for easy thumb reach. It's built for
apps with a small number of equal-weight, frequently-switched-between
destinations (home, search, notifications, profile) that need to stay
reachable from anywhere in the app.

**When to use:**

- Mobile-first applications with 3–5 top-level destinations
- Destinations that need to be accessible from anywhere in the app
- Equal-weight destinations users switch between frequently
- Content-focused apps where thumb reach matters (social media, e-commerce, news)

**When NOT to use:**

- Desktop or wide-viewport layouts — pair `.aural-bottom-nav--mobile-only` with a Navbar, or use Navbar alone
- More than 5 destinations — overflow into a menu instead of cramming more items in
- A single primary action — use a Floating Action Button alone, or `.aural-bottom-nav--with-fab` if it complements existing nav items
- Deep, hierarchical navigation — use Navbar + Drawer instead

## 3. Anatomy

| Class                                              | Purpose                                                                                                                                                                           |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.aural-bottom-nav`                                | Root `<nav>` — fixed to the viewport bottom, `space-around` flex row, `z-index: var(--z-dropdown)`.                                                                               |
| `.aural-bottom-nav__item` / `--active`             | A single destination (anchor or button); active state tints icon + label with `--color-primary`.                                                                                  |
| `.aural-bottom-nav__icon`                          | Icon wrapper; scales 1.1× when its item is active.                                                                                                                                |
| `.aural-bottom-nav__label`                         | Text label under the icon.                                                                                                                                                        |
| `.aural-bottom-nav__badge` / `--pulse` / `--dot`   | Notification-count badge on an item, optionally pulsing or shown as a dot with no number.                                                                                         |
| `.aural-bottom-nav__fab`                           | A raised, circular floating action button overlapping the bar; use with `.aural-bottom-nav--with-fab`.                                                                            |
| `.aural-bottom-nav--with-fab`                      | Adds bottom padding and spaces the two items flanking the FAB apart to make room for it.                                                                                          |
| `.aural-bottom-nav--compact`                       | Icon-only variant — hides labels, enlarges icons.                                                                                                                                 |
| `.aural-bottom-nav--labeled-active`                | Labels are hidden by default and only reveal (height/opacity transition) on the active item.                                                                                      |
| `.aural-bottom-nav--primary` / `--dark` / `--blur` | Background color/treatment variants.                                                                                                                                              |
| `.aural-bottom-nav--divided`                       | Adds a 1px vertical divider between items.                                                                                                                                        |
| `.aural-bottom-nav--mobile-only`                   | Hides the bar entirely at `min-width: 1024px` (desktop), and zeroes the companion body padding with it.                                                                           |
| `.aural-bottom-nav--slide-out` / `--slide-in`      | Hide/reveal animation states, e.g. for a hide-on-scroll pattern.                                                                                                                  |
| `body.has-bottom-nav`                              | Companion class for the consuming page's `<body>` — adds bottom padding so content isn't hidden behind the fixed bar; respects `env(safe-area-inset-bottom)` for notched devices. |
| `.aural-bottom-nav__sr-label`                      | Visually-hidden-but-focusable screen-reader-only text helper (WAI clip-rect idiom).                                                                                               |

## 4. Tokens used

| Token                                                                                                                      | Used for                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `--color-bg-primary` / `--color-border-medium`                                                                             | Bar background / top border                                                                        |
| `--color-text-secondary` / `--color-text-primary`                                                                          | Item resting / hover text                                                                          |
| `--color-primary` / `--color-primary-hover`                                                                                | Active item/icon color, FAB background / FAB hover                                                 |
| `--color-bg-hover`                                                                                                         | Item hover/focus-visible background                                                                |
| `--color-error`                                                                                                            | Badge background                                                                                   |
| `--color-border-subtle`                                                                                                    | `--divided` variant's divider line                                                                 |
| `--color-bg-dark-overlay`                                                                                                  | `--dark` variant background (new semantic token — shared with Navbar, Context Menu; see navbar.md) |
| `--color-text-on-dark-muted`                                                                                               | `--primary`/`--dark` variant resting item text color (new semantic token — shared with Navbar)     |
| `--color-badge-neutral-bg`                                                                                                 | `--primary`/`--dark` variant hover background and `--dark` top border (reused from Badge)          |
| `--z-dropdown`                                                                                                             | Bar's stacking layer                                                                               |
| `--font-semibold` / `--font-bold`                                                                                          | Active item label / badge text weight                                                              |
| `--text-xs`                                                                                                                | Item label font-size                                                                               |
| `--space-1` / `--space-2` / `--space-3` / `--space-6`                                                                      | Padding, gaps, badge offsets, FAB bottom offset                                                    |
| `--size-6` / `--size-18` / `--size-20` / `--size-24` / `--size-28` / `--size-48` / `--size-56` / `--size-64` / `--size-72` | Badge dot, icon, divider, item/compact-icon/FAB/compact-item, item, body-offset dimensions         |
| `--radius-md` / `--radius-full`                                                                                            | Item corners / badge & FAB corners                                                                 |
| `--shadow-xl`                                                                                                              | Bar and FAB elevation                                                                              |
| `--transition-all-fast` / `--duration-normal`                                                                              | Item/icon/FAB transitions / slide-in/out transitions                                               |

**New tokens added while migrating this file:**

- `--size-72: 4.5rem` (`tokens/core/size.css`) — the `body.has-bottom-nav`
  clearance padding (nav item height + its padding) had no token; added by
  a parallel migration in this same batch (also used by `spinner.css`'s
  xl spinner), reused here as-is.
- `--color-bg-dark-overlay`, `--color-text-on-dark-muted` — see
  `navbar.md` §4 for the full rationale; both are shared across this file,
  `navbar.css`, and `context-menu.css` rather than duplicated per
  component.

Everything else resolved to an existing token. Two non-standard
`@media` breakpoints (`max-width: 768px and min-width: 641px` for a
tablet-only item `max-width`, and `max-width: 360px` for a small-phone
layout tweak) are left as-is with `aural-ignore` — they're deliberately
finer-grained than the standard 640/768/1024/1280 scale (the 641px lower
bound exists specifically to avoid overlapping the 640px breakpoint), and
changing either would alter real responsive behavior, not just swap a
token.

## 5. Props/API

Bottom Navigation is markup + CSS, driven by a small JS API in
`javascript/index.js` (the global `Aural` object):

| Method                                | Description                                                                                                                                                                       |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Aural.initBottomNav(navId, options)` | Adds `body.has-bottom-nav`; wires up per-item click handlers that toggle `--active`; optionally wires a scroll-direction hide/show behavior. Returns `{ show, hide, setActive }`. |

`options`: `hideOnScroll` (boolean, default `false` — when `true`, the bar
slides out on scroll-down and back in on scroll-up, past `scrollThreshold`
px of movement), `scrollThreshold` (number, default `50`), `onItemClick`
(callback invoked with `(item, event)` on every item click).

## 6. States

| State                        | Selector                                | Effect                                                                          |
| ---------------------------- | --------------------------------------- | ------------------------------------------------------------------------------- |
| Default                      | `.aural-bottom-nav__item`               | `--color-text-secondary` icon/label.                                            |
| Hover                        | `.aural-bottom-nav__item:hover`         | `--color-bg-hover` background, text brightens.                                  |
| Focus                        | `.aural-bottom-nav__item:focus-visible` | 2px `--color-primary` outline (inset, `offset: -2px`) + hover background.       |
| Active (current destination) | `.aural-bottom-nav__item--active`       | `--color-primary` icon/label, icon scales 1.1×, label goes semibold.            |
| Hidden (scroll)              | `.aural-bottom-nav--slide-out`          | Bar translates fully off-screen (`translateY(100%)`).                           |
| Shown (scroll)               | `.aural-bottom-nav--slide-in`           | Bar translates back on-screen.                                                  |
| Reduced motion               | `prefers-reduced-motion: reduce`        | Bar/item/icon/FAB transitions and badge pulse animation disabled.               |
| Touch (`pointer: coarse`)    | — (already touch-sized by default)      | No separate touch media query — items already meet 56px+ min-height by default. |

Bottom Navigation has no disabled/error state — every destination is
always reachable.

## 7. Code example

```html
<nav class="aural-bottom-nav" role="navigation" aria-label="Main navigation" id="main-bottom-nav">
  <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
    <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
    <span class="aural-bottom-nav__label">Home</span>
  </a>
  <a href="#" class="aural-bottom-nav__item">
    <i data-lucide="search" class="aural-bottom-nav__icon" aria-hidden="true"></i>
    <span class="aural-bottom-nav__label">Search</span>
  </a>
  <a href="#" class="aural-bottom-nav__item">
    <i data-lucide="bell" class="aural-bottom-nav__icon" aria-hidden="true"></i>
    <span class="aural-bottom-nav__badge">3</span>
    <span class="aural-bottom-nav__label">Alerts</span>
  </a>
  <a href="#" class="aural-bottom-nav__item">
    <i data-lucide="user" class="aural-bottom-nav__icon" aria-hidden="true"></i>
    <span class="aural-bottom-nav__label">Profile</span>
  </a>
</nav>

<script>
  window.Aural?.initBottomNav('main-bottom-nav');
</script>
```

## 8. Cross-references

- **Navbar** — the desktop/top counterpart; the two are commonly paired (`.aural-bottom-nav--mobile-only` on this component, Navbar always visible).
- **Navbar** / **Context Menu** — share this component's `--dark`-variant tokens (`--color-bg-dark-overlay`, `--color-text-on-dark-muted`).
- **Badge** — the notification-count badge follows the same pattern as Badge's count badges; `--color-badge-neutral-bg` is reused directly from it.
