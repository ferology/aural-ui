# Image Gallery

## 1. Metadata

|                   |                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- |
| Name              | Image Gallery                                                                       |
| Category          | Media / Content Display                                                             |
| Status            | Stable                                                                              |
| CSS file          | `components/image-gallery.css`                                                      |
| Naming convention | `aural-` prefixed BEM, two blocks in one file (`.aural-gallery`, `.aural-lightbox`) |

## 2. Overview

Image Gallery is a responsive grid of images (`.aural-gallery`) that opens a
full-screen lightbox (`.aural-lightbox`) for focused, full-size viewing. The
grid supports fixed column counts, an auto-fill responsive mode, and a CSS
columns-based masonry layout; each grid item can show a hover/focus overlay
with title/description. The lightbox adds prev/next navigation, a slide
counter, captions, zoom controls, and an optional thumbnail strip.

**When to use:**

- Photo collections displayed as an organized, scannable grid
- Product catalogs with hover information
- Portfolios / team pages / media libraries

**When NOT to use:**

- A single-item-at-a-time, auto-advancing sequence — use **Carousel**
- A small, fixed set of inline images that don't need a full-size view

## 3. Anatomy

| Class                                                                 | Purpose                                                                                    |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `.aural-gallery`                                                      | Grid container.                                                                            |
| `.aural-gallery--cols-2` … `--cols-6`                                 | Fixed-column-count variants.                                                               |
| `.aural-gallery--auto`                                                | `repeat(auto-fill, minmax(200px, 1fr))` responsive columns.                                |
| `.aural-gallery--masonry`                                             | CSS-columns masonry layout (`column-count`); items use `break-inside: avoid`.              |
| `.aural-gallery--compact`                                             | Reduced grid/column gap.                                                                   |
| `.aural-gallery--borderless`                                          | Removes item corner rounding.                                                              |
| `.aural-gallery__item`                                                | One grid cell — square aspect by default, clipped, lifts and shadows on hover.             |
| `.aural-gallery__image`                                               | The `img`, scales slightly on item hover.                                                  |
| `.aural-gallery__overlay` / `__title` / `__description`               | Bottom gradient overlay with title/description, shown on hover/focus.                      |
| `.aural-gallery__badge`                                               | Top-right small label chip (e.g. a count or type badge).                                   |
| `.aural-gallery__icon`                                                | Centered zoom/view affordance icon, shown on hover.                                        |
| `.aural-gallery__item--loading`                                       | Shimmer-animation loading placeholder.                                                     |
| `.aural-gallery__sr-label`                                            | Visually-hidden text for screen readers.                                                   |
| `.aural-lightbox`                                                     | Full-screen fixed overlay; toggles via `.aural-lightbox--open`.                            |
| `.aural-lightbox__content` / `__image-wrapper` / `__image`            | Centered content column / image container / the displayed image.                           |
| `.aural-lightbox__nav--prev` / `--next`                               | Prev/next navigation buttons (disabled at either end when not looping).                    |
| `.aural-lightbox__close`                                              | Close button, top-right.                                                                   |
| `.aural-lightbox__caption` / `-title` / `-description`                | Caption below the image, capped at `--size-600` width.                                     |
| `.aural-lightbox__counter`                                            | "`n / total`" overlay badge, bottom-center.                                                |
| `.aural-lightbox__zoom` / `__zoom-button`                             | Top-left zoom in/out controls; `.aural-lightbox__image--zoomed`/`--dragging` on the image. |
| `.aural-lightbox__thumbnails` / `__thumbnail` / `__thumbnail--active` | Bottom thumbnail strip (hidden ≤768px).                                                    |

## 4. Tokens used

| Token                                                                                           | Used for                                                                                                                                |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--color-media-overlay-bg` / `--color-media-overlay-bg-strong`                                  | Gallery icon/badge, lightbox nav/close/counter/zoom/thumbnails-strip chrome, default and hover/strong (shared with Carousel — see note) |
| `--color-media-dot-bg`                                                                          | Lightbox thumbnail hover border (shared with Carousel — see note)                                                                       |
| `--color-media-track-bg`                                                                        | Lightbox thumbnails-strip scrollbar thumb (shared with Carousel — see note)                                                             |
| `--color-lightbox-backdrop`                                                                     | `.aural-lightbox` full-screen background (new token — see note)                                                                         |
| `--color-badge-neutral-bg`                                                                      | Lightbox thumbnails scrollbar track, gallery-item loading-shimmer gradient stop (existing exact-match token)                            |
| `--color-bg-secondary`                                                                          | `.aural-gallery__item` background                                                                                                       |
| `--color-primary`                                                                               | Item focus ring, hover thumbnail/active-thumbnail border                                                                                |
| `--z-max`                                                                                       | `.aural-lightbox` stacking context (per `tokens/semantic/z-index.css`'s own note that this tier covers "lightbox")                      |
| `--duration-normal`                                                                             | Lightbox open/close opacity+visibility transition, gallery image hover-scale                                                            |
| `--size-18` / `--size-20` / `--size-24` / `--size-40` / `--size-44` / `--size-48` / `--size-60` | Zoom/nav/close icon sizes and touch targets, gallery icon, thumbnail dimension                                                          |
| `--size-600`                                                                                    | Lightbox caption max-width (new token — see note)                                                                                       |
| `--space-0-5` / `--space-1` / `--space-2` / `--space-3` / `--space-4`                           | Grid/column gaps, badge padding, overlay/caption padding                                                                                |
| `--text-xs` / `--text-sm` / `--text-lg`                                                         | Description / caption-description & counter / title & caption-title font sizes                                                          |
| `--font-medium` / `--font-semibold`                                                             | Counter / title & caption-title font weight                                                                                             |
| `--leading-tight` / `--leading-relaxed`                                                         | Title / description line-height                                                                                                         |
| `--radius-sm` / `--radius-md` / `--radius-full`                                                 | Badge/thumbnail corners / item & overlay-chrome corners / nav & close/zoom buttons                                                      |
| `--shadow-lg` / `--shadow-2xl`                                                                  | Item hover elevation / lightbox image elevation                                                                                         |
| `--transition-all-fast`                                                                         | Item/overlay/icon/nav/close/zoom/thumbnail hover transitions                                                                            |

**New tokens added while migrating this file:**

- `--color-lightbox-backdrop: rgba(0, 0, 0, 0.95)` (`tokens/semantic/colors.css`) —
  the lightbox's distinctly darker full-screen scrim, one step past
  `--color-bg-dark-overlay` (0.9) and `--color-bg-overlay` (0.85).
- `--color-media-overlay-bg` / `--color-media-overlay-bg-strong` / `--color-media-dot-bg` /
  `--color-media-track-bg` (`tokens/semantic/colors.css`, new "Carousel / Image Gallery"
  section) — added while migrating Carousel; reused here as-is since the
  lightbox's dark-glass control chrome is byte-identical.
- `--size-60` (`tokens/core/size.css` Size Scale) — added while migrating
  Carousel; reused here for the lightbox thumbnail strip.
- `--size-600` (`tokens/core/size.css`, new "Overlay Height/Width Presets"
  section) — the lightbox caption's max-width, which also turned out to
  match Notification Center's `--lg` dropdown max-height, so it's shared
  rather than duplicated.

The standard 1px visually-hidden `.aural-gallery__sr-label` pattern is marked
`/* aural-ignore */` as a non-token accessibility idiom.

## 5. Props/API

Image Gallery is markup + CSS classes, driven by a JS API in
`javascript/index.js` (the global `Aural` object):

| Method                                       | Description                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Aural.initImageGallery(galleryId, options)` | Wires every `.aural-gallery__item` to open the lightbox at its index; auto-creates the lightbox element (via `Aural.createLightbox`) if `options.lightboxId` doesn't already exist. Wires close/prev/next buttons, backdrop click, and Escape/←/→ keys. `options`: `lightboxId`, `onOpen(index, item)`, `onClose(index)`. Returns `{ open(index), close, next, prev }`. |

## 6. States

| State                     | Trigger                                         | Effect                                                                                        |
| ------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Hover/focus (item)        | `.aural-gallery__item:hover` / `:focus-visible` | Item lifts (`translateY(-4px)`) with `--shadow-lg`; image scales 1.05×; overlay/icon fade in. |
| Loading                   | `.aural-gallery__item--loading`                 | Shimmer gradient animation over the item; pointer-events disabled.                            |
| Lightbox closed (default) | `.aural-lightbox` without `--open`              | `opacity: 0`, `visibility: hidden`.                                                           |
| Lightbox open             | `.aural-lightbox--open`                         | Fades in and becomes visible/interactive.                                                     |
| Nav disabled              | `.aural-lightbox__nav:disabled` (at either end) | `opacity: 0.3`, `cursor: not-allowed`.                                                        |
| Zoomed                    | `.aural-lightbox__image--zoomed` / `--dragging` | Image drops its max-width/height cap; cursor becomes grab/grabbing.                           |
| Active thumbnail          | `.aural-lightbox__thumbnail--active`            | `--color-primary` border plus a white focus-ring-style glow.                                  |
| Reduced motion            | `prefers-reduced-motion: reduce`                | Item/image/overlay/lightbox/nav/close transitions and the loading shimmer are all skipped.    |

## 7. Code example

```html
<div class="aural-gallery aural-gallery--cols-3" id="photo-grid">
  <button class="aural-gallery__item" tabindex="0">
    <img class="aural-gallery__image" src="1.jpg" alt="…" />
    <div class="aural-gallery__overlay">
      <div class="aural-gallery__title">Mountain View</div>
    </div>
  </button>
  <!-- more .aural-gallery__item … -->
</div>

<script>
  Aural.initImageGallery('photo-grid');
</script>
```

## 8. Cross-references

- **Carousel** — shares the `--color-media-*` dark-glass chrome tokens and
  `--size-60` thumbnail dimension; use Carousel instead for a
  one-at-a-time, auto-advancing sequence rather than a browsable grid.
- **Modal** — the lightbox is conceptually a media-focused, full-screen
  sibling of Modal, sharing the `--z-max`-and-above overlay stacking idiom
  but using its own backdrop depth (0.95 vs. Modal's 0.85).
