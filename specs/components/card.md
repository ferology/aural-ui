# Card

## 1. Metadata

|                   |                                          |
| ----------------- | ---------------------------------------- |
| Name              | Card                                     |
| Category          | Layout                                   |
| Status            | Stable                                   |
| CSS file          | `components/card.css`                    |
| Naming convention | Flat kebab-case (`.card`, `.card-hover`) |

## 2. Overview

Card is a flexible, composable content container used to group related
information and actions into a single visually-distinct unit with
consistent padding, border, and background. It's a layout primitive —
`.card` plus optional `.card-header` / `.card-body` / `.card-footer` /
`.card-image` sub-parts — not a single fixed template.

**When to use:**

- **Content grouping** — organize related information into scannable, digestible chunks
- **Product catalogs** — image, title, description, and pricing as one unit
- **User profiles** — avatar, name, bio, and actions in a compact format
- **Dashboard widgets** — stats, charts, and metrics in modular containers
- **Article previews** — blog post summaries with images and metadata

**When NOT to use:**

- For a single piece of information — use text/typography directly, a card wrapper adds no value
- For navigation — use Tabs, Navbar, or a sidebar component instead
- For important/urgent messages — use Alert, not a card styled to look like one
- For simple forms — a form doesn't need a card wrapper unless it's genuinely one unit among several on the page

## 3. Anatomy

| Class                                                                              | Purpose                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.card`                                                                            | Base container — padding, `var(--color-card-bg)` background, `backdrop-filter: blur(20px)`, 1px border, `var(--radius-lg)` corners.                                                     |
| `.card-compact`                                                                    | Reduced padding (`--space-4`) for denser layouts.                                                                                                                                       |
| `.card-hover`                                                                      | Makes the card an interactive/clickable surface: lift + border highlight on `:hover`, visible ring on `:focus-visible`, settle on `:active`.                                            |
| `.card-active`                                                                     | Highlights a selected/active card (tinted background + primary border).                                                                                                                 |
| `.card-bordered`                                                                   | Adds a 3px left accent border; pair with a color variant below.                                                                                                                         |
| `.card-primary` / `.card-success` / `.card-warning` / `.card-error` / `.card-info` | Sets the `.card-bordered` left-accent color to the matching semantic color.                                                                                                             |
| `.card-header`                                                                     | Top section — flex row, bottom border, negative margin so it bleeds to the card's edges.                                                                                                |
| `.card-title`                                                                      | Heading element inside `.card-header`.                                                                                                                                                  |
| `.card-body`                                                                       | Main content section; collapses its top margin/padding when directly preceded by `.card-header`, and its bottom margin/padding when directly followed by `.card-footer` (via `:has()`). |
| `.card-footer`                                                                     | Bottom section — flex row, right-aligned by default, top border, negative margin to bleed to the card's edges.                                                                          |
| `.card-image` / `.card-image img`                                                  | Edge-to-edge image region at the top of the card; `img` is `width/height: 100%`, `object-fit: cover`.                                                                                   |

## 4. Tokens used

| Token                                                                    | Used for                                                                           |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| `--color-card-bg` / `--color-card-border`                                | `.card` background / border                                                        |
| `--color-card-hover-border`                                              | `.card-hover:hover` border                                                         |
| `--color-card-active-bg`                                                 | `.card-active` background (new semantic token — see note below)                    |
| `--color-primary`                                                        | `.card-hover:focus-visible` ring and `.card-active` border                         |
| `--color-success` / `--color-warning` / `--color-error` / `--color-info` | `.card-success` / `.card-warning` / `.card-error` / `.card-info` left-accent color |
| `--color-border-subtle`                                                  | `.card-header` / `.card-footer` divider border                                     |
| `--color-text-primary`                                                   | `.card-title`                                                                      |
| `--radius-lg`                                                            | Card corners, and the top corners of `.card-image`                                 |
| `--space-3` / `--space-4` / `--space-5` / `--space-6`                    | Padding and negative-margin bleed at default / compact / mobile breakpoints        |
| `--text-lg`                                                              | `.card-title` font size                                                            |
| `--font-semibold`                                                        | `.card-title` font weight                                                          |
| `--shadow-md`                                                            | `.card-hover:hover` elevation                                                      |
| `--transition-all-fast`                                                  | Hover/active transition                                                            |

**New tokens added while migrating this file:**

- `--color-card-active-bg: rgba(16, 185, 129, 0.05)` (`tokens/semantic/colors.css`) —
  `.card-active`'s background was a raw literal with no matching color
  token (the audit found no exact match since it's a flat-alpha tint, not
  a `color-mix()` step of the current `--color-primary`). It reuses the
  same RGB already established for the "primary" accent family elsewhere
  in this codebase (`--color-badge-primary-bg`, `--shadow-primary`,
  `--glow-primary-*`), just at a new 5% alpha step, so it's named and
  grouped as a Card-specific semantic token rather than a new core color.

## 5. Props/API

Card is pure CSS/markup — there is no JS-driven API. The Storybook story's
only control is `hover` (boolean), which toggles the `.card-hover` class.

## 6. States

| State             | Trigger                          | Effect                                                                                                                                     |
| ----------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Default           | —                                | Static container, no interaction affordance.                                                                                               |
| Hover             | `.card-hover:hover`              | Lifts (`translateY(-2px)`), border turns to `--color-card-hover-border`, `--shadow-md` elevation.                                          |
| Focus             | `.card-hover:focus-visible`      | 2px `--color-primary` outline with offset, border turns primary.                                                                           |
| Active (pressed)  | `.card-hover:active`             | Lift resets to `translateY(0)`.                                                                                                            |
| Active (selected) | `.card-active`                   | Tinted background (`--color-card-active-bg`) + primary border — independent of `.card-hover`, for marking a card as the current selection. |
| Reduced motion    | `prefers-reduced-motion: reduce` | `.card-hover` transition and transform are disabled entirely.                                                                              |

`.card` itself has no disabled or error state — it's a container, not a
form control. If a card is interactive (`.card-hover`), accessibility
requires it to be a real focusable element (`<button>` or `<a>`, not a
`<div>` with a click handler) so these states are reachable by keyboard.

## 7. Code example

```html
<!-- Basic card -->
<div class="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>

<!-- Card with header, body, and footer -->
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Project Status</h3>
    <span class="badge badge-success">Active</span>
  </div>
  <div class="card-body">
    <p>Project details and description.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">View</button>
    <button class="btn btn-ghost btn-sm">Edit</button>
  </div>
</div>

<!-- Clickable card (must be a real interactive element) -->
<button class="card card-hover" aria-label="Manage team members">
  <h4>Team</h4>
  <p>Manage members</p>
</button>

<!-- Bordered accent variant -->
<div class="card card-bordered card-success">
  <p>Everything looks good.</p>
</div>
```

## 8. Theme variants

Two docs-site theme assets reskin cards on top of (not instead of)
`.card`. Like Button's theme variants (see `specs/components/button.md`
§8), neither is a separate component or published in `dist/` — both are
demo-site CSS loaded only when the docs site's theme switcher selects the
matching theme, and neither touches `components/card.css` itself.

| File                           | Theme                                                                                                                                                                                                                                                                                                                                                                                    | Classes                                                                                                                                                                                                                                                   | What it changes                                                                                                                                                                                                                      |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `components/kinetic-cards.css` | Kinetic (live — in `docs/js/theme-manager.js`'s `THEMES.kinetic.components`)                                                                                                                                                                                                                                                                                                             | `.card-kinetic` plus ~15 structural/pattern variants (`-accent`, `-header/title/subtitle/body/footer`, `-elevated/filled/outlined`, `-split`, `-stat`, `-minimal`, `-interactive`, `-feature`, `-quote`, `-reveal`, `-animated`) and `.card-grid-kinetic` | Brutalist/editorial look: sharp square corners, bold borders, and a much larger anatomy than the base Card — several of these patterns (stat display, quote, feature-icon, hover-reveal) have no equivalent on the base Card at all. |
| `components/cards-refined.css` | **Not reachable from the live theme switcher** — same caveat as `buttons-refined.css` (see `specs/components/button.md` §8): its classes depend on custom properties defined only in `themes/neon-refined.css`, and `neon-refined` isn't a selectable theme in `docs/js/theme-manager.js`. Reachable only via the unlinked `docs/prismatic-demo.html`. Flagged here rather than deleted. | `.card-prismatic` plus `-header/title/subtitle/body/footer`, `-elevated`, `-accent-top/left`, `-asymmetric`, `-floating`, `-interactive` (3D tilt), `-compact`, `-icon`, stacked/media variants, `.card-grid-prismatic`                                   | Glassmorphic look: backdrop blur, gradient-mask borders, dimensional `--shadow-depth-*` layers, and several decorative-only patterns (asymmetric diagonal accent, overlapping stack, 3D tilt-on-hover) with no base-Card equivalent. |

## 9. Cross-references

- **Badge** — badges are commonly placed in `.card-header` for a status indicator (see example above).
- **Button** — primary/secondary actions in `.card-footer` use the Button component.
- **Tabs** — use Tabs instead of multiple cards when content represents navigable views of the same object, not independent grouped content.
- **Alert** — use Alert, not a card, for messages that need immediate attention.
