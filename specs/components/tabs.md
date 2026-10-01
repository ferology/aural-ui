# Tabs

## 1. Metadata

|                   |                                          |
| ----------------- | ---------------------------------------- |
| Name              | Tabs                                     |
| Category          | Navigation                               |
| Status            | Stable                                   |
| CSS file          | `components/tabs.css`                    |
| Naming convention | Flat kebab-case (`.tabs`, `.tab-active`) |

## 2. Overview

Tabs organize related content into separate views where only one view is
visible at a time, letting users switch between sections without leaving
the page. They keep users in context: unlike navigation that loads a
different page, tabs show different facets of the same object or task.

**When to use:**

- Settings or preferences organized into categories (Account, Privacy, Notifications)
- Product details with different aspects (Overview, Specs, Reviews, Q&A)
- Dashboard views with related data (Analytics, Reports, Insights)
- Multi-section forms where sections are independent
- User profiles with distinct sections (Posts, Photos, About, Friends)

**When NOT to use:**

- For sequential processes — use Stepper/Wizard for multi-step flows
- For primary/site-wide navigation — use Navbar or a Drawer
- For a single collapsible section — use Accordion
- For more than ~7 tabs — split into multiple pages or a different navigation pattern
- For content that needs to be compared side-by-side — keep it simultaneously visible instead

## 3. Anatomy

| Class                                        | Purpose                                                                                                                                          |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.tabs`                                      | Tab list container — flex row, bottom border (`role="tablist"` goes here).                                                                       |
| `.tab`                                       | A single tab button (`role="tab"`); underline-style by default via a transparent `border-bottom` that fills in when active.                      |
| `.tab-active` / `.tab[aria-selected="true"]` | Active tab styling — text color, active border/background. Either the class or the ARIA attribute selector matches, so JS only needs to set one. |
| `.tabs-sm` / `.tabs-lg`                      | Size modifiers on the container, scaling `.tab` padding, font-size, min-height, and icon size.                                                   |
| `.tabs-pills`                                | Pill variant — no bottom border on the list, each `.tab` becomes a rounded, filled pill.                                                         |
| `.tabs-boxed`                                | Boxed variant — the whole `.tabs` list sits inside a bordered, padded container (`--color-input-bg`).                                            |
| `.tabs-vertical`                             | Stacks tabs in a column with a right border instead of a bottom border; combinable with `.tabs-pills` / `.tabs-boxed`.                           |
| `.tabs-center`                               | Centers the tab list instead of left-aligning it.                                                                                                |
| `.tabs-full`                                 | Each `.tab` grows to fill the available width equally.                                                                                           |
| `.tab-badge`                                 | Small count/notification pill nested inside a `.tab`.                                                                                            |
| `.tab-panel`                                 | Content region (`role="tabpanel"`) associated with a tab; fades in on show, `[hidden]` when inactive.                                            |
| `.tab-panels`                                | Optional wrapper that gives panels a bordered, rounded "card" look attached under the tab list.                                                  |
| `.tabs-scrollable`                           | Horizontal-scroll container for tab lists that overflow, with a styled scrollbar.                                                                |
| `.tab-close`                                 | Optional close ("x") button nested inside a closable tab.                                                                                        |

## 4. Tokens used

| Token                                                                                | Used for                                                                                                                            |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `--color-tabs-border`                                                                | `.tabs` bottom border, `.tabs-boxed`/`.tabs-vertical` borders, `.tab-panels` border                                                 |
| `--color-tabs-text` / `--color-tabs-text-hover`                                      | Default / hovered tab label color                                                                                                   |
| `--color-tabs-active-text` / `--color-tabs-active-border` / `--color-tabs-active-bg` | Active tab styling                                                                                                                  |
| `--color-tabs-hover-bg`                                                              | Non-active tab hover background                                                                                                     |
| `--color-tabs-pill-bg` / `--color-tabs-pill-active-bg`                               | `.tabs-pills` resting / active pill background                                                                                      |
| `--color-input-bg`                                                                   | `.tabs-boxed` container background                                                                                                  |
| `--color-tab-badge-bg` / `--color-tab-badge-contrast-bg`                             | `.tab-badge` background on an active default tab / on a solid-color active pill or boxed tab (new semantic tokens — see note below) |
| `--color-bg-tertiary` / `--color-text-secondary`                                     | `.tab-badge` resting background / text                                                                                              |
| `--color-badge-neutral-bg`                                                           | `.tab-close:hover` background (reuses the Badge component's neutral-tint token — same 10% white value)                              |
| `--color-text-muted` / `--color-text-primary`                                        | `.tab-close` resting / hovered icon color                                                                                           |
| `--color-border-medium`                                                              | `.tabs-scrollable` scrollbar thumb/track                                                                                            |
| `--color-primary`                                                                    | `:focus-visible` ring, `.tabs-boxed .tab-active` background                                                                         |
| `--size-14` / `--size-16` / `--size-18` / `--size-20` / `--size-28`                  | Icon dimensions at various tab/close-button sizes                                                                                   |
| `--size-36` / `--size-44` / `--size-48` / `--size-52`                                | `min-height` touch targets at `.tabs-sm` / default / touch / `.tabs-lg`                                                             |
| `--space-1` … `--space-6`                                                            | Padding, gaps, scrollbar thickness                                                                                                  |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg`                              | Font sizes at badge / `.tabs-sm` / default / `.tabs-lg`                                                                             |
| `--font-medium` / `--font-semibold`                                                  | Tab label weight / badge weight                                                                                                     |
| `--font-sans` / `--leading-normal`                                                   | Typography base                                                                                                                     |
| `--radius-full` / `--radius-md` / `--radius-sm`                                      | Badge pill / pill-tab & panel corners / close-button corners                                                                        |
| `--shadow-sm`                                                                        | `.tabs-boxed .tab-active` elevation                                                                                                 |
| `--transition-all-fast`                                                              | Tab/close-button transitions                                                                                                        |

**New tokens added while migrating this file:**

- `--color-tab-badge-bg: rgba(255, 255, 255, 0.2)` and
  `--color-tab-badge-contrast-bg: rgba(255, 255, 255, 0.25)`
  (`tokens/semantic/colors.css`) — the active tab's badge needs enough
  contrast against two different backgrounds (a mostly-transparent
  underline tab vs. a solid-color pill/boxed tab); neither alpha step
  existed as a token yet, so both are new, Tabs-specific semantic tokens.
- `--size-52` (`tokens/core/size.css`) was already added by a sibling
  migration (reused here for `.tabs-lg` `min-height`, which needed the
  same 52px value also used by `calendar.css`).
- `--color-badge-neutral-bg` (`tokens/semantic/colors.css`) was already
  added by the Badge migration; reused as-is for `.tab-close:hover`
  rather than creating a near-duplicate token for the same 10% white tint.

Two `-1px` margins (`.tab`'s `margin-bottom` and `.tabs-vertical .tab`'s
`margin-right`) are intentionally left as raw values with an
`aural-ignore` comment — they overlap the tab's own border with the
container's 1px border for a seamless underline, which is a CSS idiom,
not a spacing/design value.

## 5. Props/API

Tabs is markup + CSS classes, driven by a small JS API in
`javascript/index.js` (the global `Aural` object) rather than a
component-level props interface:

| Method                            | Description                                                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `Aural.initTabs()`                | Wires up click and keyboard handlers (Arrow keys, Home/End) for every `[role="tablist"]` on the page. Call once on load.  |
| `Aural.switchTab(tabId, panelId)` | Activates the tab with `tabId` and shows the panel with `panelId`, deactivating/hiding all siblings in the same tab list. |

The Storybook stories (`Default`, `PillsStyle`, `BoxedStyle`, `WithIcons`,
`WithBadges`, `DisabledTabs`, `InCard`) are markup/class demonstrations;
`Tabs.stories.ts` has no `argTypes` block, since there's no single
component prop surface to control — state (`aria-selected`,
`tabindex`, `.tab-active`) is managed by the JS API above.

## 6. States

| State             | Selector                                     | Effect                                                                 |
| ----------------- | -------------------------------------------- | ---------------------------------------------------------------------- |
| Default           | `.tab`                                       | `--color-tabs-text`, transparent underline.                            |
| Hover             | `.tab:hover:not(.tab-active):not(:disabled)` | Text brightens, `--color-tabs-hover-bg` background.                    |
| Active (selected) | `.tab-active`, `.tab[aria-selected="true"]`  | `--color-tabs-active-text`, filled underline/background.               |
| Focus             | `.tab:focus-visible`                         | 2px `--color-primary` outline with offset.                             |
| Disabled          | `.tab:disabled`                              | `opacity: 0.5`, `cursor: not-allowed`, `pointer-events: none`.         |
| Reduced motion    | `prefers-reduced-motion: reduce`             | Tab/close-button transitions and panel fade-in animation are disabled. |

`aria-selected="true"`/`"false"` and `tabindex="0"`/`"-1"` must be kept in
sync with `.tab-active` by `Aural.switchTab()` (or equivalent framework
code) — the CSS alone only reacts to whichever is present.

## 7. Code example

```html
<div class="tabs" role="tablist" aria-label="Content tabs">
  <button
    class="tab tab-active"
    role="tab"
    id="tab-1"
    aria-selected="true"
    aria-controls="panel-1"
    tabindex="0"
  >
    Tab 1
  </button>
  <button
    class="tab"
    role="tab"
    id="tab-2"
    aria-selected="false"
    aria-controls="panel-2"
    tabindex="-1"
  >
    Tab 2
  </button>
</div>
<div id="panel-1" class="tab-panel" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
  Content 1
</div>
<div id="panel-2" class="tab-panel" role="tabpanel" aria-labelledby="tab-2" tabindex="0" hidden>
  Content 2
</div>

<script>
  window.Aural?.initTabs();
</script>
```

## 8. Cross-references

- **Accordion** — use Accordion instead of Tabs when sections should stack vertically and only need show/hide (no equal-weight navigation).
- **Card** — `.tab-panels` are frequently wrapped to look like an attached card (`InCard` story).
- **Badge** — `.tab-badge` follows the same small-pill pattern as Badge's count badges.
- **Stepper** — use Stepper, not Tabs, for sequential multi-step flows.
