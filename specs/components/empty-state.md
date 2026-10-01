# Empty State

## 1. Metadata

|                   |                                                       |
| ----------------- | ----------------------------------------------------- |
| Name              | Empty State                                           |
| Category          | Layout                                                |
| Status            | Stable                                                |
| CSS file          | `components/empty-state.css`                          |
| Naming convention | Flat kebab-case (`.empty-state`, `.empty-state-icon`) |

## 2. Overview

Empty State is a centered placeholder shown in place of content that
doesn't yet exist, has been filtered to nothing, or failed to load —
pairing a muted icon with a heading, a short description, and (typically)
a primary call-to-action button.

**When to use:**

- A list, table, or search result has zero items
- A feature hasn't been set up yet ("No integrations connected")
- A filtered view returns nothing

**When NOT to use:**

- Loading states — use Skeleton instead
- Error states that need specific troubleshooting detail — consider Alert in addition to, or instead of, Empty State
- Any state where content _does_ exist but is simply off-screen (e.g. pagination) — Empty State implies genuine absence

## 3. Anatomy

| Class                      | Purpose                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------ |
| `.empty-state`             | Root container — centered column flex, generous padding, secondary text color.                   |
| `.empty-state-icon`        | Large (64px default), dimmed (`opacity: 0.4`) decorative icon/illustration.                      |
| `.empty-state-title`       | Heading (`<h3>`), semibold, primary text color.                                                  |
| `.empty-state-description` | Supporting copy, muted, capped at `400px` width for readable line length.                        |
| `.empty-state .btn`        | Spacing hook so a following `.btn` call-to-action sits with consistent top margin.               |
| `.empty-state-compact`     | Reduced padding, smaller icon (48px) and title size — for tighter contexts (e.g. inside a Card). |

## 4. Tokens used

| Token                                                                              | Used for                                                            |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-muted`           | Title, base/body text color, description color                      |
| `--font-semibold`                                                                  | Title weight                                                        |
| `--text-sm` / `--text-base` / `--text-lg`                                          | Description size, compact/mobile title size, default title size     |
| `--size-48` / `--size-56` / `--size-64`                                            | Icon dimensions across compact / mobile / default                   |
| `--space-2` / `--space-4` / `--space-5` / `--space-6` / `--space-8` / `--space-12` | Padding and margins across the default, compact, and mobile layouts |

**New tokens added while migrating this file:** none — every raw error
value matched an existing `--size-*` token exactly.

**Warnings left as `aural-ignore`:** `.empty-state-description`'s
`max-width: 400px` — a one-off text measure between `--size-360` (360px)
and `--size-480` (480px).

## 5. Props/API

Empty State is pure CSS/markup — there is no JS-driven API. The content
(icon, title, description, action button) is fully consumer-authored.

## 6. States

Empty State is a static, non-interactive container — it has no
hover/focus/disabled states of its own. Its only variation is layout
density:

| Variant | Trigger                     | Effect                                                                                            |
| ------- | --------------------------- | ------------------------------------------------------------------------------------------------- |
| Default | `.empty-state`              | Full padding, 64px icon, `--text-lg` title.                                                       |
| Compact | `.empty-state-compact`      | Reduced padding, 48px icon, `--text-base` title.                                                  |
| Mobile  | `@media (max-width: 640px)` | Padding and icon size step down further (56px icon, `--text-base` title, full-width description). |

## 7. Code example

```html
<div class="empty-state">
  <div class="empty-state-icon">
    <i data-lucide="inbox" aria-hidden="true"></i>
  </div>
  <h3 class="empty-state-title">No items yet</h3>
  <p class="empty-state-description">Get started by creating your first item.</p>
  <button class="btn btn-primary">
    <i data-lucide="plus" aria-hidden="true"></i>
    Create Item
  </button>
</div>
```

## 8. Cross-references

- **Skeleton** — use Skeleton instead of Empty State while content is still loading; switch to Empty State only once loading is confirmed to have produced zero results.
- **Card** — `.empty-state-compact` is sized to fit comfortably inside a `.card-body`.
- **Button** — the call-to-action beneath the description is typically a `.btn.btn-primary`.
