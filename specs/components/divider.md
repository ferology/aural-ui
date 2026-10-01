# Divider

## 1. Metadata

|                   |                                                   |
| ----------------- | ------------------------------------------------- |
| Name              | Divider                                           |
| Category          | Data Display                                      |
| Status            | Stable                                            |
| CSS file          | `components/divider.css`                          |
| Naming convention | Flat kebab-case (`.divider`, `.divider-vertical`) |

## 2. Overview

Divider is a simple visual separator used to organize content and create
hierarchy without adding a heavy visual element. It renders as a thin line
(solid, dashed, or dotted), optionally with a short text label in the
middle (e.g. "OR"), and can run horizontally or vertically.

**When to use:**

- Separating distinct sections of related content (e.g. between list items, menu groups, form sections)
- Grouping related actions in a toolbar or button group
- Showing an alternative path in a flow — e.g. "Sign in with email" **OR** "Continue with Google"
- Dividing items inline (vertical variant) — e.g. breadcrumb-like metadata rows

**When NOT to use:**

- As a substitute for proper spacing/whitespace — if whitespace alone already communicates separation, a line is visual clutter
- As a structural layout tool (it is a cosmetic rule, not a grid/flex primitive)
- Excessively, stacked one after another — overuse undermines the hierarchy it's meant to create
- To separate truly unrelated page regions — use a Card or section boundary instead

## 3. Anatomy

| Class                                         | Purpose                                                                                                                                        |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `.divider`                                    | Base class. Renders as a 1px horizontal rule (works on `<hr>` or any block element).                                                           |
| `.divider-vertical`                           | Vertical orientation modifier — thin vertical rule, `inline-block`, stretches to the height of its flex container.                             |
| `.divider-with-text`                          | Content modifier — turns the divider into a flex row with a line on each side (`::before`/`::after`) and a centered label (any child content). |
| `.divider-sm` / `.divider-lg` / `.divider-xl` | Spacing modifiers — adjust the margin around a horizontal divider.                                                                             |
| `.divider-vertical.divider-sm/lg/xl`          | Same spacing modifiers, applied to the vertical axis instead.                                                                                  |
| `.divider-dashed` / `.divider-dotted`         | Style modifiers — switch the line from solid `background` to a dashed/dotted `border` (horizontal or vertical).                                |

## 4. Tokens used

| Token                  | Used for                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| `--color-divider`      | Line color (background, or border color for dashed/dotted variants)                           |
| `--color-divider-text` | Label text color in `.divider-with-text`                                                      |
| `--space-2`            | Vertical-divider spacing at `.divider-sm`                                                     |
| `--space-4`            | Default vertical-divider spacing; gap between line segments and label in `.divider-with-text` |
| `--space-6`            | Default horizontal-divider margin; vertical-divider spacing at `.divider-lg`                  |
| `--space-8`            | Horizontal-divider margin at `.divider-lg`; vertical-divider spacing at `.divider-xl`         |
| `--space-12`           | Horizontal-divider margin at `.divider-xl`                                                    |
| `--text-sm`            | Label font size in `.divider-with-text`                                                       |
| `--font-medium`        | Label font weight in `.divider-with-text`                                                     |

The 1px line thickness itself is a hairline value with no matching token
(marked `/* aural-ignore */` in the CSS) — it's treated the same as the
untracked `1px` border widths used throughout the rest of the library.

## 5. Props/API

Divider is pure CSS/markup — there is no JS-driven API (no `Aural.*` init
function in `javascript/index.js`). The Storybook story models the
following as documentation-only controls, implemented by toggling classes:

| Control       | Options                            | Maps to                                            |
| ------------- | ---------------------------------- | -------------------------------------------------- |
| `variant`     | `solid` / `dashed` / `dotted`      | (no class) / `.divider-dashed` / `.divider-dotted` |
| `orientation` | `horizontal` / `vertical`          | (no class) / `.divider-vertical`                   |
| `spacing`     | `default` / `compact` / `spacious` | (no class) / `.divider-sm` / `.divider-lg`         |
| `withLabel`   | boolean                            | toggles `.divider-with-text` + child content       |

## 6. States

Divider is non-interactive and has no hover/focus/active/disabled states.
Its only "state" is the orientation/style/spacing variant selected via
classes (see Anatomy).

## 7. Code example

```html
<!-- Horizontal -->
<hr class="divider" />

<!-- With a centered label -->
<div class="divider divider-with-text">
  <span>OR</span>
</div>

<!-- Vertical, between two inline items -->
<div style="display: flex; align-items: center; gap: var(--space-4);">
  <span>Item 1</span>
  <hr class="divider divider-vertical" role="separator" aria-orientation="vertical" />
  <span>Item 2</span>
</div>

<!-- Dashed, large spacing -->
<hr class="divider divider-dashed divider-lg" />
```

Accessibility note: when using `<hr>` for a vertical divider (a
non-semantic use of `<hr>`), add `role="separator"` and
`aria-orientation="vertical"` so assistive tech announces it correctly.

## 8. Cross-references

- **Card** — card footers/headers often use a divider-like border instead
  of this component; use Divider when the separator needs to stand on its
  own between arbitrary content blocks.
- **Dropdown / Context Menu** — use `.divider` (or a dedicated
  `*-divider` class in those components) to separate menu item groups.
- **Button Group** — toolbars combining a `.btn-group` with a vertical
  `.divider` to separate clusters of actions.
