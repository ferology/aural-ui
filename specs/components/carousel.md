# Carousel

## 1. Metadata

|                   |                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Name              | Carousel                                                                                     |
| Category          | Media / Content Display                                                                      |
| Status            | Stable                                                                                       |
| CSS file          | `components/carousel.css`                                                                    |
| Naming convention | `aural-` prefixed BEM (`.aural-carousel`, `.aural-carousel__track`, `.aural-carousel--fade`) |

## 2. Overview

Carousel is a slideshow for cycling through images, cards, or content panels
— a `.aural-carousel__track` of `.aural-carousel__slide`s that translates
horizontally (or cross-fades, in `--fade` mode), with arrow navigation, dot
pagination, a slide counter, optional thumbnail strip, autoplay with a
progress indicator, and touch/swipe + keyboard support.

**When to use:**

- Hero sections showcasing multiple featured items or promotions
- Product galleries or variations
- Testimonial/review rotators
- Image galleries presented as a browsable sequence
- Onboarding walkthroughs

**When NOT to use:**

- Content a user must compare side-by-side (carousels hide all but one item at a time)
- A dense grid of images meant to be scanned at once — use **Image Gallery**
- Critical information that must always be visible (carousels are easy to miss or skip)

## 3. Anatomy

| Class                                                                 | Purpose                                                                                       |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `.aural-carousel`                                                     | Outer clipped container, rounded corners.                                                     |
| `.aural-carousel__track`                                              | Flex row of slides that translates to show the current one (`--no-transition` during a snap). |
| `.aural-carousel__slide` / `__slide-content`                          | One slide; `img` children are `object-fit: cover`.                                            |
| `.aural-carousel__arrow` / `--prev` / `--next`                        | Overlay nav buttons; hidden until hover (always visible under 768px).                         |
| `.aural-carousel__pagination` / `__dot` / `__dot--active`             | Dot-pagination strip and its active-dot modifier (pill-shaped when active).                   |
| `.aural-carousel__counter`                                            | "`n / total`" overlay badge, top-right.                                                       |
| `.aural-carousel__thumbnails` / `__thumbnail` / `__thumbnail--active` | Optional scrollable thumbnail strip below the carousel.                                       |
| `.aural-carousel__caption` / `-title` / `-description`                | Bottom overlay caption panel.                                                                 |
| `.aural-carousel__autoplay-progress` / `__autoplay-bar`               | Thin bottom progress bar that fills across the autoplay interval.                             |
| `.aural-carousel__play-button`                                        | Top-left pause/play toggle for autoplay.                                                      |
| `.aural-carousel__sr-status`                                          | Visually-hidden live region for screen-reader slide announcements.                            |
| `.aural-carousel--fade`                                               | Cross-fade variant instead of horizontal slide.                                               |
| `.aural-carousel--auto-height`                                        | Lets track/slide height follow content instead of a fixed max-height.                         |
| `.aural-carousel--sm` / `--md` / `--lg` / `--full`                    | Max-height presets (300/500/700px, or `100vh`).                                               |
| `.aural-carousel--16x9` / `--4x3` / `--1x1` / `--21x9`                | Aspect-ratio presets.                                                                         |
| `.aural-carousel--2-per-view` / `--3-per-view` / `--4-per-view`       | Multi-slide-per-view layouts.                                                                 |
| `.aural-carousel--centered`                                           | Adds horizontal padding so neighboring slides peek in.                                        |
| `.aural-carousel--loop`                                               | Marks a looping track (JS wraps `goToSlide` at the ends).                                     |

## 4. Tokens used

| Token                                                                                           | Used for                                                                                                         |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `--color-media-overlay-bg` / `--color-media-overlay-bg-strong`                                  | Arrow/pagination/counter/play-button/caption dark-glass chrome, default and hover/strong (new tokens — see note) |
| `--color-media-dot-bg` / `--color-media-dot-bg-hover`                                           | Pagination dot default / hover background (new tokens — see note)                                                |
| `--color-media-track-bg`                                                                        | Autoplay progress-track background (new token — see note)                                                        |
| `--color-bg-secondary` / `--color-bg-tertiary`                                                  | Slide background / thumbnail-strip scrollbar track                                                               |
| `--color-border-medium`                                                                         | Thumbnail-strip scrollbar thumb                                                                                  |
| `--color-primary` / `--primary-alpha-20`                                                        | Active-thumbnail border, autoplay-bar fill / active-thumbnail focus ring                                         |
| `--duration-slow`                                                                               | Track slide transition, fade-variant opacity transition (new usage — see note)                                   |
| `--size-16` / `--size-20` / `--size-24` / `--size-36` / `--size-44` / `--size-60` / `--size-80` | Icon sizes, touch targets, dot active-width, thumbnail dimensions                                                |
| `--size-300` / `--size-500` / `--size-700`                                                      | `--sm`/`--md`/`--lg` max-height presets (new tokens — see note)                                                  |
| `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-6`                             | Gaps, padding, arrow/caption offsets                                                                             |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg`                                         | Counter / caption-description / responsive caption-title / caption-title font sizes                              |
| `--font-medium` / `--font-semibold`                                                             | Counter / caption-title font weight                                                                              |
| `--leading-tight` / `--leading-relaxed`                                                         | Caption-title / caption-description line-height                                                                  |
| `--radius-sm` / `--radius-md` / `--radius-lg` / `--radius-full`                                 | Thumbnail-strip scrollbar / caption & counter / outer container / arrows & pagination corners                    |
| `--transition-all-fast`                                                                         | Arrow/dot/thumbnail/play-button hover transitions                                                                |

**New tokens added while migrating this file:**

- `--color-media-overlay-bg: rgba(0, 0, 0, 0.5)`, `--color-media-overlay-bg-strong: rgba(0, 0, 0, 0.7)`,
  `--color-media-dot-bg: rgba(255, 255, 255, 0.5)`, `--color-media-dot-bg-hover: rgba(255, 255, 255, 0.8)`,
  `--color-media-track-bg: rgba(255, 255, 255, 0.3)` (`tokens/semantic/colors.css`, new
  "Carousel / Image Gallery" section) — the dark-glass control chrome
  (translucent black buttons/badges over media, translucent white dots/tracks)
  is byte-identical across Carousel and Image Gallery's lightbox, so these
  are shared between the two files rather than duplicated per-component.
- `--size-60` (`tokens/core/size.css` Size Scale) — the 60px thumbnail
  dimension, shared with Image Gallery's lightbox thumbnail strip.
- `--size-300` / `--size-500` / `--size-700` (`tokens/core/size.css`, new
  "Overlay Height/Width Presets" section) — Carousel's own sm/md/lg
  max-height scale.

A handful of raw durations (`0.2s`-class) are intentionally left as literals
per the project's existing precedent (duration is a non-blocking audit
category); the 3px autoplay-progress-bar thickness and the standard 1px
visually-hidden `.aural-carousel__sr-status` pattern are marked
`/* aural-ignore */` as genuinely one-off, non-token values.

## 5. Props/API

Carousel is markup + CSS classes, driven by a JS API in `javascript/index.js`
(the global `Aural` object):

| Method                                    | Description                                                                                                                                                                                                                                                                              |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Aural.initCarousel(carouselId, options)` | Wires arrows, dots, keyboard (←/→), touch swipe, and optional autoplay (paused on hover). `options`: `autoplay` (bool), `autoplayDelay` (ms, default 5000), `loop` (bool, default true), `perView` (number), `onChange(index)`. Returns `{ next, prev, goTo, getCurrent, play, pause }`. |

## 6. States

| State                   | Trigger                                                                         | Effect                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Current slide           | JS toggles `.aural-carousel__slide--active` (fade mode) or translates `__track` | Shows the active slide; dots/counter update to match.                                     |
| Hover (container)       | `.aural-carousel:hover .aural-carousel__arrow`                                  | Arrows fade in (`opacity: 1`); always visible at ≤768px.                                  |
| Hover/focus (arrow/dot) | `:hover` / `:focus-visible`                                                     | Arrow background darkens and scales up; dot brightens/scales; both get a visible outline. |
| Disabled (arrow)        | `:disabled` (non-loop mode, at either end)                                      | `opacity: 0.3`, `cursor: not-allowed`, no hover-scale.                                    |
| Active thumbnail        | `.aural-carousel__thumbnail--active`                                            | `--color-primary` border plus a `--primary-alpha-20` focus-ring-style glow.               |
| Autoplay                | JS `setInterval` per `autoplayDelay`, paused on `mouseenter`                    | `.aural-carousel__autoplay-bar` animates its width to show time-to-next-slide.            |
| Reduced motion          | `prefers-reduced-motion: reduce`                                                | Track/slide/arrow/dot transitions are skipped.                                            |

## 7. Code example

```html
<div class="aural-carousel aural-carousel--md" id="hero-carousel">
  <div class="aural-carousel__track">
    <div class="aural-carousel__slide"><img src="1.jpg" alt="…" /></div>
    <div class="aural-carousel__slide"><img src="2.jpg" alt="…" /></div>
  </div>
  <button
    class="aural-carousel__arrow aural-carousel__arrow--prev"
    aria-label="Previous slide"
  ></button>
  <button
    class="aural-carousel__arrow aural-carousel__arrow--next"
    aria-label="Next slide"
  ></button>
  <div class="aural-carousel__pagination">
    <button class="aural-carousel__dot aural-carousel__dot--active" aria-label="Slide 1"></button>
    <button class="aural-carousel__dot" aria-label="Slide 2"></button>
  </div>
  <div class="aural-carousel__sr-status" role="status" aria-live="polite"></div>
</div>

<script>
  Aural.initCarousel('hero-carousel', { autoplay: true, loop: true });
</script>
```

## 8. Cross-references

- **Image Gallery** — shares the `--color-media-*` dark-glass chrome tokens
  and the `--size-60` thumbnail dimension with its lightbox; use Image
  Gallery instead when the content is a scannable grid rather than a
  one-at-a-time sequence.
- **Button** — arrows/play-button/thumbnails follow the same 44px
  touch-target convention as Button.
