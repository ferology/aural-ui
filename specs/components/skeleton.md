# Skeleton

## 1. Metadata

|                   |                                                 |
| ----------------- | ----------------------------------------------- |
| Name              | Skeleton                                        |
| Category          | Data Display / Feedback                         |
| Status            | Stable                                          |
| CSS file          | `components/skeleton.css`                       |
| JS file           | None — pure CSS/markup.                         |
| Naming convention | Flat kebab-case (`.skeleton`, `.skeleton-text`) |

## 2. Overview

Skeleton is an animated loading placeholder that mimics the structure of
content before it loads — a shimmering gray shape standing in for a line
of text, a title, an avatar, a button, or a whole card. It improves
perceived performance by giving users visual structure immediately
instead of a blank screen.

**When to use:** initial page load and data-heavy views (dashboards,
feeds, tables) where you know the approximate shape of the incoming
content.

**When NOT to use:** button/form submission loading — use **Spinner**;
operations with measurable completion (uploads, multi-step processes) —
use **Progress**.

## 3. Anatomy

| Class                       | Purpose                                                                                       |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| `.skeleton`                 | Base shimmer — animated gradient sweep, `--radius-md` corners by default.                     |
| `.skeleton-text`            | A line of body text (16px tall).                                                              |
| `.skeleton-text-sm` / `-lg` | Shorter/taller text-line variants (12px / 20px).                                              |
| `.skeleton-title`           | A heading line (24px tall, 60% width, extra bottom margin).                                   |
| `.skeleton-circle`          | Forces `border-radius: 50%` — for avatars (combine with an explicit inline `width`/`height`). |
| `.skeleton-button`          | A button-shaped placeholder (44px tall × 120px wide).                                         |
| `.skeleton-card`            | A full card-shaped placeholder (200px tall, 100% width).                                      |
| `.skeleton-sr-only`         | Visually-hidden text announcing the loading state to screen readers.                          |

Any skeleton piece can be resized with an inline `style="width: …; height: …"` override (see the circle/avatar example below) — the classes above are starting shapes, not a fixed grid.

## 4. Tokens used

| Token                                                                    | Used for                                                                       |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `--color-skeleton-from` / `--color-skeleton-via` / `--color-skeleton-to` | The three-stop shimmer gradient (and the static reduced-motion fallback color) |
| `--space-2` / `--space-4`                                                | `.skeleton-text` / `.skeleton-title` bottom margin                             |
| `--size-12` / `--size-16` / `--size-20` / `--size-24`                    | Text-line heights across `-sm` / default / `-lg` / title                       |
| `--size-44`                                                              | `.skeleton-button` height                                                      |
| `--size-200`                                                             | `.skeleton-card` height                                                        |
| `--radius-md`                                                            | Default corner radius                                                          |
| `--duration-slower`                                                      | Shimmer sweep duration (750ms)                                                 |

**New tokens added while migrating this file:** none — `--size-200`
(added by a sibling agent while migrating another component) exactly
matched `.skeleton-card`'s 200px height.

**Kept as `aural-ignore`:** `.skeleton-button`'s `width: 120px` (a
one-off approximation of a default button's width, same pattern as other
migrated components' ignored container widths) and the
`.skeleton-sr-only` recipe's `1px`/`-1px` values (the standard
visually-hidden-but-focusable technique used identically across ~17
other components in this codebase — not a spacing value).

## 5. Props/API

Skeleton is pure CSS/markup — there is no JS-driven API. Compose shapes
directly in HTML and swap them out for real content once it loads.

## 6. States

| State             | Trigger                          | Effect                                                                 |
| ----------------- | -------------------------------- | ---------------------------------------------------------------------- |
| Loading (default) | —                                | Gradient background-position animates left-to-right on a loop.         |
| Reduced motion    | `prefers-reduced-motion: reduce` | Animation disabled; falls back to a flat `--color-skeleton-from` fill. |

Accessibility: wrap the skeleton group in a container with
`aria-busy="true"` and a descriptive `aria-label` (e.g. `"Loading user
profile"`), include visually-hidden text via `.skeleton-sr-only` (or the
visible content's own `aria-live="polite"` region) so screen readers
learn when loading finishes, and never make skeleton shapes focusable or
clickable — they're purely visual placeholders.

## 7. Code example

```html
<!-- Text lines -->
<div aria-busy="true" aria-label="Loading content">
  <div class="skeleton skeleton-text" style="width: 100%"></div>
  <div class="skeleton skeleton-text" style="width: 80%"></div>
  <div class="skeleton skeleton-text" style="width: 60%"></div>
  <span class="skeleton-sr-only">Loading content…</span>
</div>

<!-- Avatar + text pattern -->
<div
  aria-busy="true"
  aria-label="Loading user profile"
  style="display: flex; gap: 1rem; align-items: center;"
>
  <div class="skeleton skeleton-circle" style="width: 48px; height: 48px;"></div>
  <div style="flex: 1;">
    <div class="skeleton skeleton-text" style="width: 40%;"></div>
    <div class="skeleton skeleton-text" style="width: 60%;"></div>
  </div>
</div>

<!-- Card placeholder -->
<div class="skeleton skeleton-card" aria-busy="true" aria-label="Loading card"></div>
```

## 8. Cross-references

- **Spinner** — use instead for button/form-level loading, not full-page
  or list-item content placeholders.
- **Progress** — use instead when completion is measurable (0–100%).
- **Avatar** — `.skeleton-circle` mimics Avatar's shape as a loading stand-in.
