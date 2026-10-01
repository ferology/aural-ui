# Button

## 1. Metadata

|                   |                                          |
| ----------------- | ---------------------------------------- |
| Name              | Button                                   |
| Category          | Actions                                  |
| Status            | Stable                                   |
| CSS file          | `components/button.css`                  |
| Naming convention | Flat kebab-case (`.btn`, `.btn-primary`) |

## 2. Overview

Button is the unified, single source of truth for clickable actions in
the library — primary, secondary, danger, ghost, and link styles, three
sizes, loading/disabled states, and grouping. It applies to native
`<button>` elements as well as anchors styled to look like buttons.

**When to use:**

- `.btn-primary` for the single main action on a page or in a dialog
- `.btn-secondary` for secondary, lower-emphasis actions alongside a primary one
- `.btn-danger` for destructive actions (delete, remove, revoke)
- `.btn-ghost` for tertiary actions or minimal/toolbar UI
- `.btn-link` for a text-only action that reads inline with content

**When NOT to use:**

- For navigation that should be a plain hyperlink with no button chrome — use `.btn-link` or an unstyled `<a>`, not `.btn`
- For more than one `.btn-primary` in the same view/section — primary emphasis should be singular to preserve hierarchy
- As a layout/toolbar container — use `.btn-group` / `.btn-group-attached` around multiple `.btn` elements instead of ad hoc flex wrappers

## 3. Anatomy

| Class                 | Purpose                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `.btn`                | Base class — flex layout, padding, type, border-radius, 44px min-height touch target, transition.                        |
| `.btn-sm` / `.btn-lg` | Size modifiers (padding, font-size, min-height). Default (no modifier) is the medium size.                               |
| `.btn-primary`        | Solid primary-color button with a colored shadow; lifts (`translateY`) on hover.                                         |
| `.btn-secondary`      | Bordered, low-emphasis button.                                                                                           |
| `.btn-danger`         | Solid destructive-action button with an error-colored shadow.                                                            |
| `.btn-ghost`          | Transparent background, fills on hover.                                                                                  |
| `.btn-link`           | Text-only, underlined, no padding/min-height.                                                                            |
| `.btn-loading`        | State modifier — hides label text, shows a centered `::after` spinner, disables pointer events.                          |
| `.btn-group`          | Layout wrapper — lays out multiple `.btn` with a gap.                                                                    |
| `.btn-group-attached` | Layout wrapper — lays out multiple `.btn` with no gap, shared borders, and rounded corners only on the first/last child. |

## 4. Tokens used

| Token                                                               | Used for                                                                                           |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `--color-button-primary-bg` / `-hover` / `-text`                    | `.btn-primary`                                                                                     |
| `--color-button-secondary-bg` / `-hover` / `-border` / `-text`      | `.btn-secondary`                                                                                   |
| `--color-button-danger-bg` / `-hover` / `-text`                     | `.btn-danger`                                                                                      |
| `--color-button-ghost-bg` / `-hover` / `-text`                      | `.btn-ghost`                                                                                       |
| `--color-button-disabled-bg` / `-border` / `-text`                  | `.btn:disabled` (all variants)                                                                     |
| `--color-primary` / `--color-primary-hover`                         | `.btn-link` text, focus-visible outline color                                                      |
| `--color-text-primary`                                              | Base text color; `.btn-ghost:hover` text                                                           |
| `--color-border-medium`                                             | `.btn-secondary:hover` border color                                                                |
| `--shadow-primary` / `--shadow-primary-lg`                          | `.btn-primary` default / hover elevation                                                           |
| `--shadow-error` / `--shadow-error-lg`                              | `.btn-danger` default / hover elevation (`--shadow-error-lg` is a new core token — see note below) |
| `--space-2` / `--space-3` / `--space-4` / `--space-6` / `--space-8` | Padding (varies by size), icon gap                                                                 |
| `--size-16`                                                         | Loading spinner diameter                                                                           |
| `--size-40` / `--size-44` / `--size-52`                             | `min-height` at sm / default / lg (`--size-52` is a new core token — see note below)               |
| `--text-sm` / `--text-base` / `--text-lg`                           | Font size at sm / default / lg                                                                     |
| `--font-sans` / `--font-medium` / `--leading-none`                  | Typography                                                                                         |
| `--radius-md`                                                       | Corner radius                                                                                      |
| `--transition-all-fast`                                             | Hover/active transitions                                                                           |

**New tokens added while migrating this file:**

- `--size-52: 3.25rem` (`tokens/core/size.css`) — `.btn-lg`'s 52px
  `min-height` had no matching size step; it's also reused identically by
  `.input-lg` in `input.css`.
- `--shadow-error-lg: 0 4px 16px rgba(239, 68, 68, 0.3)` (`tokens/core/shadows.css`) —
  `.btn-danger`'s hover shadow had no token; added alongside the existing
  `--shadow-error` the same way `--shadow-primary-lg` complements
  `--shadow-primary` for the primary variant.

Two values were left as `/* aural-ignore */` rather than tokenized: the
`0.6s` spinner animation speed (a one-off, not a shared duration) and the
`-1px` `margin-left` in `.btn-group-attached` (a border-overlap hairline
hack, not a spacing value).

## 5. Props/API

Button is pure CSS/markup — there is no JS-driven `Aural.*` init function.
The Storybook story models the following as documentation-only controls:

| Control    | Options                                                              | Maps to                                                                                                                                                                      |
| ---------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `variant`  | `primary` / `secondary` / `outline` / `ghost` / `danger` / `success` | `.btn-{variant}` (note: `outline`/`success` are modeled in the story but have no dedicated class in the CSS today — use `.btn-secondary`/a custom success color until added) |
| `size`     | `sm` / `md` / `lg`                                                   | `.btn-sm` / (default) / `.btn-lg`                                                                                                                                            |
| `disabled` | boolean                                                              | `disabled` attribute                                                                                                                                                         |
| `loading`  | boolean                                                              | `.btn-loading` + `disabled` + `aria-busy="true"`                                                                                                                             |
| `icon`     | text                                                                 | prepended `<span aria-hidden="true">`                                                                                                                                        |

## 6. States

| State            | Selector                  | Behavior                                                                                                                                    |
| ---------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Default          | `.btn`                    | Base styling per variant                                                                                                                    |
| Hover            | `&:hover:not(:disabled)`  | Background/border shift, deeper shadow, `translateY(-2px)` lift (primary/secondary/danger) — skipped under `prefers-reduced-motion: reduce` |
| Active           | `&:active:not(:disabled)` | `translateY(0)` — resets the hover lift                                                                                                     |
| Focus (keyboard) | `.btn:focus-visible`      | 2px solid outline in `--color-primary`, 2px offset                                                                                          |
| Disabled         | `.btn:disabled`           | WCAG-AA-compliant explicit colors (no opacity trick), `cursor: not-allowed`, `pointer-events: none`                                         |
| Loading          | `.btn-loading`            | Label hidden (`color: transparent`), centered spinner, `pointer-events: none`                                                               |

## 7. Code example

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary btn-sm">Small Secondary</button>
<button class="btn btn-danger btn-lg" disabled>Large Disabled</button>

<!-- Loading -->
<button class="btn btn-primary btn-loading" aria-busy="true" disabled>Saving…</button>

<!-- Attached group -->
<div class="btn-group-attached">
  <button class="btn btn-secondary">Day</button>
  <button class="btn btn-secondary">Week</button>
  <button class="btn btn-secondary">Month</button>
</div>
```

Accessibility notes:

- Icon-only buttons must carry a `title` or `aria-label` describing the action.
- Use the native `disabled` attribute to disable a button, not visual styling alone.
- Always provide descriptive button text — avoid vague labels like "Click here."

## 8. Theme variants

Three docs-site theme assets reskin buttons on top of (not instead of)
`.btn`. None of these are separate components or published in `dist/` —
they're demo-site CSS, loaded only when the docs site's theme switcher
selects the matching theme (see `docs/js/theme-manager.js`'s `THEMES`
map and `docs/demo.js`'s `themeComponents` map). None of them touch
`components/button.css` itself.

| File                             | Theme                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Classes                                                                                                                                                                                 | What it changes                                                                                                                                                                                                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `components/kinetic-buttons.css` | Kinetic (live — in `theme-manager.js`'s `THEMES.kinetic.components`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `.btn-kinetic`, `.btn-kinetic-primary/secondary/ghost`, `.btn-kinetic-sm/lg`, `.btn-kinetic-icon`, `.btn-kinetic-loading`, `.btn-kinetic-split/slide/expand/skew`, `.btn-group-kinetic` | Brutalist/editorial look: square corners, 2px border, uppercase bold type, a kinetic underline-reveal `::after`, and several standalone motion variants (split-reveal, text-slide, width-expand, skew) not present on the base Button at all.                             |
| `components/deluxe-neon.css`     | Neon (live — in `theme-manager.js`'s `THEMES.neon.components`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `.btn-neon`, `.btn-neon-magenta/green`, `.btn-pulse`, `.btn-magnetic`                                                                                                                   | Cyberpunk glow look: translucent cyan/magenta/green fills with multi-layer `box-shadow` glows, a hover shimmer sweep, and a pulsing animation variant (`.btn-pulse`). This file also covers card/input/badge/progress/divider neon variants — see its own header comment. |
| `components/buttons-refined.css` | **Not reachable from the live theme switcher.** Its classes (`.btn-prismatic*`) depend on custom properties (`--gradient-primary`, `--glass-blur`, `--shadow-depth-*`, `--ease-smooth`) defined only in `themes/neon-refined.css`. `docs/js/theme-manager.js` (the theme system actually wired to the site nav's dropdown) has no `neon-refined` entry at all; a `neon-refined` key exists only in the older, unused-by-the-dropdown `docs/demo.js` theme map and in a standalone `docs/prismatic-demo.html` page that nothing in the site links to. Flagged here rather than deleted — out of scope for this pass (see repo notes). | `.btn-prismatic`, `.btn-prismatic-primary/secondary/accent/ghost/solid`, `.btn-prismatic-sm/lg/icon`, `.btn-prismatic-loading/kinetic/shimmer`, `.btn-group-prismatic`                  | Glassmorphic look: backdrop blur, gradient borders via a mask trick, and dimensional `--shadow-depth-*` elevation layers.                                                                                                                                                 |

## 9. Cross-references

- **Badge** — notification-count badges are commonly absolutely positioned on top of an icon `.btn-ghost`.
- **Input** — `.input-number__button` (the number-input spinner controls) is a related but separate small-button pattern defined in `components/input.css`, not `.btn`.
- **Divider** — `.btn-group`/`.btn-group-attached` toolbars sometimes use a vertical `.divider` to separate clusters of actions.
