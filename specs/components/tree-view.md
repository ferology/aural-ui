# Tree View

## 1. Metadata

|                   |                                                           |
| ----------------- | --------------------------------------------------------- |
| Name              | Tree View                                                 |
| Category          | Navigation                                                |
| Status            | Stable                                                    |
| CSS file          | `components/tree-view.css`                                |
| Naming convention | BEM (`.aural-tree__item`, `.aural-tree--with-checkboxes`) |

## 2. Overview

Tree View renders a hierarchical, nested `<ul>` structure — file
explorers, org charts, nested navigation, category trees — with
expand/collapse toggles, icons, badges, inline actions, optional
checkboxes, connector lines, drag/drop, and search-highlight support.
Expand/collapse interactivity is JS-driven (`Aural.initTreeView()`); the
CSS only defines the resulting visual states.

**When to use:**

- File/folder explorers and document trees
- Nested category or organization navigation
- Any parent/child data where disclosure (expand/collapse) matters

**When NOT to use:**

- Flat, non-hierarchical lists — use a plain list or Table
- A small, fixed set of top-level sections — use Tabs or Accordion instead

## 3. Anatomy

| Class                                                                                                                                                   | Purpose                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `.aural-tree`                                                                                                                                           | Root `<ul>` — bordered, rounded container.                                                       |
| `.aural-tree__item`                                                                                                                                     | One `<li>` node (branch or leaf).                                                                |
| `.aural-tree__content`                                                                                                                                  | The clickable row (`<button>`) for a node: toggle + icon + label + badge + actions.              |
| `.aural-tree__item--selected` / `--disabled` / `--expanded` / `--leaf` / `--loading` / `--dragging` / `--drop-target` / `--checked` / `--indeterminate` | State modifiers on `.aural-tree__item` driving its content's appearance.                         |
| `.aural-tree__toggle`                                                                                                                                   | Expand/collapse chevron; rotates 90° when expanded, hidden (`.--leaf`) on leaf nodes.            |
| `.aural-tree__icon`                                                                                                                                     | Node-type icon; `--primary`/`--success`/`--warning`/`--error`/`--info` recolor it.               |
| `.aural-tree__label`                                                                                                                                    | The node's text.                                                                                 |
| `.aural-tree__badge`                                                                                                                                    | Trailing count/badge (e.g. item count in a folder).                                              |
| `.aural-tree__actions` / `__action`                                                                                                                     | Row of inline action buttons, revealed on content hover/focus.                                   |
| `.aural-tree__children`                                                                                                                                 | The nested `<ul>` of child items; collapses via `max-height: 0` → a large cap when `--expanded`. |
| `.aural-tree--with-checkboxes` + `.aural-tree__checkbox`                                                                                                | Adds a custom checkbox before the icon, for multi-select trees.                                  |
| `.aural-tree--with-lines`                                                                                                                               | Draws `::before`/`::after` connector lines between sibling/parent nodes.                         |
| `.aural-tree--compact` / `--large`                                                                                                                      | Reduced / enlarged row height, icon size, and indentation.                                       |
| `.aural-tree--draggable`                                                                                                                                | `cursor: grab` affordance for drag-reorderable trees.                                            |
| `.aural-tree__label mark`                                                                                                                               | Search-match highlight within a label.                                                           |
| `.aural-tree__empty` / `__empty-icon`                                                                                                                   | Empty-state placeholder when the tree has no nodes.                                              |
| `.aural-tree--highlight-hover`                                                                                                                          | Adds an inset left accent bar on content hover (alternative hover treatment).                    |
| `.aural-tree__sr-label`                                                                                                                                 | Visually-hidden text for screen-reader-only context.                                             |

## 4. Tokens used

| Token                                                                                                                                                                | Used for                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `--color-bg-primary` / `--color-bg-secondary` / `--color-bg-tertiary` / `--color-bg-hover`                                                                           | Tree/children background, content hover, action hover, checkbox background                                            |
| `--color-border-medium` / `--color-border-subtle`                                                                                                                    | Tree/checkbox border, row divider, connector lines                                                                    |
| `--color-primary` / `--primary-alpha-10` / `--primary-alpha-20`                                                                                                      | Selected/expanded/checked state tint, drop-target border                                                              |
| `--color-success` / `--color-warning` / `--color-warning-bg` / `--color-error` / `--color-info`                                                                      | Icon color variants, search-highlight `mark` color                                                                    |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary` / `--color-text-muted`                                                                   | Label text, icon/toggle default color, badge text, empty-state text/icon                                              |
| `--font-medium` / `--font-semibold`                                                                                                                                  | Content text weight, selected-label/badge weight                                                                      |
| `--leading-tight`                                                                                                                                                    | Label line-height                                                                                                     |
| `--text-xs` / `--text-sm` / `--text-base`                                                                                                                            | Badge/compact text, default content text, large-variant text                                                          |
| `--radius-sm` / `--radius-lg` / `--radius-full`                                                                                                                      | Action-button corners, tree container corners, badge/checkbox pill shape                                              |
| `--size-6` / `--size-12` / `--size-14` / `--size-16` / `--size-18` / `--size-20` / `--size-24` / `--size-28` / `--size-32` / `--size-40` / `--size-44` / `--size-48` | Row heights and icon/toggle/checkbox/action dimensions across default/`--compact`/`--large` and the mobile breakpoint |
| `--space-0-5` … `--space-8`                                                                                                                                          | Gaps, padding, and indentation across content/children/variants                                                       |
| `--transition-all-fast`                                                                                                                                              | Toggle rotation, hover, and checkbox transitions                                                                      |

**New tokens added while migrating this file:** none — every raw error
value matched an existing `--size-*`/`--space-*` token exactly.

**Warnings left as `aural-ignore`:**

- `.aural-tree__item--indeterminate .aural-tree__checkbox::after`'s
  `border-radius: 1px` — a hairline rounding on a 2px-tall dash, smaller
  than `--radius-sm`.
- `.aural-tree--with-lines`'s connector offsets (`left: 10px`, `width:
1px`/`height: 1px`) — centered on the 20px toggle with no token at that
  step, and hairline rule thickness thinner than any spacing token.
- `.aural-tree__item--expanded > .aural-tree__children`'s `max-height:
2000px` — a deliberately oversized expand-animation ceiling, not a real
  dimension.
- `.aural-tree__sr-label`'s `width`/`height: 1px`, `margin: -1px` — the
  standard WAI visually-hidden clip-rect idiom, reused verbatim from
  `components/combobox.css` and `components/switch.css`.

**Warnings left as-is (non-blocking category):** `transition: max-height
0.3s ease` and `animation: ... 1s linear infinite` (loading spinner) —
raw durations, a non-blocking audit category repository-wide.

## 5. Props/API

Tree View is CSS/markup plus a required init call:
`Aural.initTreeView()` wires expand/collapse (toggling
`.aural-tree__item--expanded` and `aria-expanded`), keyboard navigation
(arrow keys, Enter, Space), and selection state. The CSS itself defines
no component-level props.

## 6. States

| State                   | Trigger                                          | Effect                                                                      |
| ----------------------- | ------------------------------------------------ | --------------------------------------------------------------------------- |
| Default                 | —                                                | Collapsed branch or leaf row, no children rendered open.                    |
| Hover                   | `.aural-tree__content:hover`                     | Background tints, text/icon turn primary.                                   |
| Focus                   | `.aural-tree__content:focus-visible`             | 2px `--color-primary` outline, inset; hover background also applied.        |
| Expanded                | `.aural-tree__item--expanded`                    | Toggle rotates 90°, icon tints primary, `__children` opens (`max-height`).  |
| Selected                | `.aural-tree__item--selected`                    | Tinted background, primary text, semibold label and badge.                  |
| Disabled                | `.aural-tree__item--disabled`                    | 50% opacity, `cursor: not-allowed`, pointer events disabled.                |
| Checked / Indeterminate | `.aural-tree__item--checked` / `--indeterminate` | Checkbox fills primary; indeterminate shows a dash instead of a check.      |
| Loading                 | `.aural-tree__item--loading`                     | Toggle spins continuously; row pointer events disabled.                     |
| Dragging / Drop target  | `.aural-tree__item--dragging` / `--drop-target`  | Dragged row dims to 50% opacity; drop target gets a dashed primary border.  |
| Reduced motion          | `prefers-reduced-motion: reduce`                 | Toggle/content/children/checkbox transitions and the loading spin disabled. |
| Responsive (mobile)     | `.aural-tree__content` under `max-width: 640px`  | Row height grows to a 44px touch target; actions are always visible.        |

## 7. Code example

```html
<ul class="aural-tree" role="tree" aria-label="Project files">
  <li class="aural-tree__item aural-tree__item--expanded" role="treeitem" aria-expanded="true">
    <button class="aural-tree__content">
      <span class="aural-tree__toggle"><i data-lucide="chevron-right" aria-hidden="true"></i></span>
      <span class="aural-tree__icon"><i data-lucide="folder" aria-hidden="true"></i></span>
      <span class="aural-tree__label">Documents</span>
      <span class="aural-tree__badge">12</span>
    </button>
    <ul class="aural-tree__children" role="group">
      <li class="aural-tree__item aural-tree__item--leaf" role="treeitem">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle"></span>
          <span class="aural-tree__icon"><i data-lucide="file" aria-hidden="true"></i></span>
          <span class="aural-tree__label">readme.txt</span>
        </button>
      </li>
    </ul>
  </li>
</ul>
```

```javascript
lucide.createIcons();
Aural.initTreeView();
```

## 8. Cross-references

- **Badge** — `.aural-tree__badge` is a compact count indicator alongside a label, the same role Badge plays elsewhere.
- **Checkbox** — `.aural-tree--with-checkboxes` reimplements a compact checkbox visual rather than embedding the full `.checkbox` component, to fit the tree row's tight layout.
- **Avatar** — `.aural-tree__icon--*` color variants mirror the same semantic palette (primary/success/warning/error/info) used by Avatar's status dots and Badge's variants.
