# Rating

## 1. Metadata

|                   |                                                                         |
| ----------------- | ----------------------------------------------------------------------- |
| Name              | Rating                                                                  |
| Category          | Forms                                                                   |
| Status            | Stable                                                                  |
| CSS file          | `components/rating.css`                                                 |
| Naming convention | BEM (`.aural-rating`, `.aural-rating__star`, `.aural-rating--readonly`) |

## 2. Overview

Rating is a star-rating control supporting both interactive input
(clickable `<button>` stars) and read-only display. It covers whole-star
filled/empty states, a CSS `clip-path`-based half-star
(`.aural-rating__star--half`) for fixed half-point ratings, and a
finer-grained fractional fill (`.aural-rating__star--fractional`, driven
by a `data-fill="0.1"`–`"0.9"` attribute) for precisely rendering
non-half averages (e.g. a 4.3 average rating). It also supports an
alternate heart icon theme, a glow-on-hover effect, five size steps,
four semantic color variants, and dedicated print styles that pin
colors regardless of the active theme.

**When to use:**

- **Product reviews** — rating products, services, or experiences on a familiar 5-star scale
- **Feedback collection** — satisfaction data through surveys and post-interaction feedback
- **Content quality indicators** — displaying average ratings to help users decide
- **Skill level assessment** — proficiency indicators in portfolios or educational platforms
- **Priority setting** — letting users rank importance/preference for items

**When NOT to use:**

- **Binary choices** — use thumbs up/down or a toggle instead of ratings
- **Precise measurements** — use number inputs or a slider for exact values
- **Complex, multi-dimensional evaluations** — use separate rating criteria instead of one star scale
- **Unfamiliar contexts** — where the star metaphor doesn't make sense
- **Scales beyond 10 points** — 5–7 point scales are the documented sweet spot for user comprehension

## 3. Anatomy

| Class                                                         | Purpose                                                                                                                            |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `.aural-rating`                                               | Root container, inline-flex row of stars + value/count/label text.                                                                 |
| `.aural-rating__stars`                                        | Flex row of the individual star buttons.                                                                                           |
| `.aural-rating__star`                                         | One star — a `<button>`, `min-width/height: var(--size-44)` touch target by default, grows (`scale(1.1)`) on hover.                |
| `.aural-rating__star-icon`                                    | The inline SVG star icon (`fill: currentColor`), 24px by default.                                                                  |
| `.aural-rating__star--filled` / `--empty`                     | Whole-star fill state modifiers (color only — the icon itself is the same SVG).                                                    |
| `.aural-rating__star--half`                                   | CSS `clip-path`-based half-star fill via a `::before` overlay clipped to the left 50%.                                             |
| `.aural-rating__star--fractional`                             | Overlay-based fractional fill via `::after`, width set per `data-fill="0.1"`…`"0.9"` attribute (10%–90% in 10% steps).             |
| `.aural-rating__value`                                        | Numeric rating display (e.g. "4.0") after the stars.                                                                               |
| `.aural-rating__count`                                        | Review-count text (e.g. "(128)") after the value.                                                                                  |
| `.aural-rating__label`                                        | Optional text label after the stars (brightens on `.aural-rating:hover`).                                                          |
| `.aural-rating--readonly`                                     | Disables pointer interaction and the hover grow effect — display-only.                                                             |
| `.aural-rating--disabled`                                     | Dims the whole control and disables pointer events (distinct from read-only: communicates "unavailable" rather than "static").     |
| `.aural-rating--xs` / `--sm` / `--lg` / `--xl`                | Size steps (default is unprefixed "medium") — star touch-target and icon size scale together.                                      |
| `.aural-rating--primary` / `--success` / `--error` / `--info` | Color variants for filled/half/hover star color.                                                                                   |
| `.aural-rating--heart`                                        | Swaps the filled/hover color to `--color-error` (intended for a heart-shaped icon swap, done by the consumer's SVG, not this CSS). |
| `.aural-rating--compact`                                      | Removes inter-star gaps and shrinks stars to the `sm` footprint.                                                                   |
| `.aural-rating--glow`                                         | Adds a `drop-shadow(currentColor)` glow on hover/filled stars.                                                                     |

## 4. Tokens used

| Token                                                                                                         | Used for                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `--color-border-medium`                                                                                       | Empty-star color (default and `--empty` modifier)                                                                         |
| `--color-warning`                                                                                             | Filled/half/fractional star color (the default "star" color)                                                              |
| `--color-primary` / `--color-success` / `--color-error` / `--color-info`                                      | Filled/half/hover star color per `--primary`/`--success`/`--error`/`--info` variant (`--heart` also uses `--color-error`) |
| `--color-text-primary` / `--color-text-secondary`                                                             | `.aural-rating__value` text; `.aural-rating__count`/`__label` text                                                        |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg`                                                       | Value/count/label typography across `xs`–`xl` sizes                                                                       |
| `--font-medium` / `--font-semibold`                                                                           | Label weight; value weight                                                                                                |
| `--space-1` / `--space-2` / `--space-3` / `--space-4`                                                         | Star-row gap, star padding across sizes, value/count/label margins                                                        |
| `--size-12` / `--size-16` / `--size-24` / `--size-32` / `--size-40` / `--size-44` / `--size-56` / `--size-64` | Star touch-target and icon sizes across `xs`/`sm`/default/`lg`/`xl`/`compact`                                             |
| `--radius-sm`                                                                                                 | Focus-ring corner radius on a star                                                                                        |
| `--transition-all-fast`                                                                                       | Star hover/scale transitions                                                                                              |

Two values are left as `/* aural-ignore */` rather than tokenized: the
print-mode `color: #000` (filled/unfilled stars must render solid black
on paper regardless of the active theme) and `color: #FFB800` (a fixed
print amber for filled stars, independent of `--color-warning`, so
printed ratings stay legible without relying on screen color rendering).

## 5. Props/API

Rating is pure CSS/markup; computing which stars are filled/half/empty
from a numeric value, handling hover-preview, and keyboard interaction
are all consumer JS (see `Rating.stories.ts`'s React/Vue examples, which
track `rating`/`hover` state and toggle `--filled`/`--empty` per star).

| Prop / attribute                                   | Maps to                                                                   |
| -------------------------------------------------- | ------------------------------------------------------------------------- |
| `value` (0–5, 0.5 steps)                           | Determines which stars get `--filled`/`--half`/`--empty`                  |
| `max` (star count)                                 | Number of `.aural-rating__star` buttons rendered                          |
| `readonly`                                         | `.aural-rating--readonly`                                                 |
| `disabled`                                         | `.aural-rating--disabled`                                                 |
| `size` (`xs`/`sm`/`md`/`lg`/`xl`)                  | `.aural-rating--xs` / `--sm` / (none) / `--lg` / `--xl`                   |
| `variant` (`primary`/`success`/`error`/`info`)     | `.aural-rating--{variant}`                                                |
| `data-rating` (on the root)                        | Documented convention for exposing the numeric rating to styling/JS hooks |
| `data-value` (per star)                            | The 1-based index of that star, used by click/hover handlers              |
| `data-fill` (`"0.1"`–`"0.9"`, per fractional star) | Drives `.aural-rating__star--fractional::after` width                     |

## 6. States

| State                 | Selector                                                                                      | Behavior                                                                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Hover                 | `.aural-rating__star:hover`                                                                   | Color → `--color-warning` (or variant color), `scale(1.1)` grow                                                                           |
| Hover "reset" trail   | `.aural-rating:not(.readonly):not(.disabled) .aural-rating__star:hover ~ .aural-rating__star` | Stars after the hovered one preview as empty (`--color-border-medium`)                                                                    |
| Focus-visible         | `.aural-rating__star:focus-visible`                                                           | 2px solid `--color-primary` outline, 2px offset, rounded via `--radius-sm`                                                                |
| Filled / Half / Empty | `.aural-rating__star--filled` / `--half` / `--empty`                                          | Static color states (see Anatomy)                                                                                                         |
| Fractional fill       | `.aural-rating__star--fractional[data-fill="0.1"–"0.9"]`                                      | Partial `::after` overlay width in 10% steps                                                                                              |
| Read-only             | `.aural-rating--readonly`                                                                     | `cursor: default`, `pointer-events: none`, hover grow suppressed                                                                          |
| Disabled              | `.aural-rating--disabled`                                                                     | `opacity: 0.5`, `cursor: not-allowed`, `pointer-events: none` on all stars                                                                |
| Glow                  | `.aural-rating--glow` + hover/filled                                                          | `drop-shadow(0 0 8px currentColor)`                                                                                                       |
| Reduced motion        | `@media (prefers-reduced-motion: reduce)`                                                     | Strips star transitions and hover scale; glow filter removed                                                                              |
| Print                 | `@media print`                                                                                | Forces solid black stars, with filled stars in a fixed amber (`#FFB800`), `print-color-adjust: exact` to preserve color in printed output |

## 7. Code example

```html
<!-- Interactive -->
<div class="aural-rating" data-rating="4">
  <div class="aural-rating__stars">
    <button
      class="aural-rating__star aural-rating__star--filled"
      data-value="1"
      aria-label="Rate 1 star"
    >
      <svg class="aural-rating__star-icon" viewBox="0 0 24 24" fill="currentColor">
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        />
      </svg>
    </button>
    <!-- Repeat for stars 2-5, swapping --filled/--empty -->
  </div>
  <span class="aural-rating__value">4.0</span>
  <span class="aural-rating__count">(128)</span>
</div>

<!-- Read-only, with a fractional average -->
<div class="aural-rating aural-rating--readonly" data-rating="4.3">
  <div class="aural-rating__stars">
    <span class="aural-rating__star aural-rating__star--filled"
      ><svg class="aural-rating__star-icon" viewBox="0 0 24 24"></svg
    ></span>
    <span class="aural-rating__star aural-rating__star--filled"
      ><svg class="aural-rating__star-icon" viewBox="0 0 24 24"></svg
    ></span>
    <span class="aural-rating__star aural-rating__star--filled"
      ><svg class="aural-rating__star-icon" viewBox="0 0 24 24"></svg
    ></span>
    <span class="aural-rating__star aural-rating__star--filled"
      ><svg class="aural-rating__star-icon" viewBox="0 0 24 24"></svg
    ></span>
    <span class="aural-rating__star aural-rating__star--fractional" data-fill="0.3"
      ><svg class="aural-rating__star-icon" viewBox="0 0 24 24"></svg
    ></span>
  </div>
  <span class="aural-rating__value">4.3</span>
</div>
```

Accessibility notes:

- Give each star a clear `aria-label` describing the value (e.g. "Rate 4
  stars" or "4 out of 5 stars").
- Support Tab to focus the control, Arrow keys (Left/Right) to change the
  selected value, Space/Enter to confirm, and Escape to cancel and revert.
- Announce the current rating and total stars to screen readers (e.g.
  "4 out of 5 stars"), updating as the user hovers or selects.
- Keep each star's touch target at least 44×44px (the component's
  default size already satisfies this).
- Visually and programmatically distinguish read-only ratings from
  interactive ones (`.aural-rating--readonly` plus, ideally,
  `aria-readonly="true"` or rendering non-interactive `<span>`s instead
  of `<button>`s, as in the read-only example above).

## 8. Cross-references

- **Slider** (`specs/components/slider.md`) — use instead of Rating when
  precise numeric input is needed rather than a 5–7 point impression scale.
- **Switch** — use a toggle instead of Rating for simple binary
  like/dislike feedback.
- **Badge** — `.aural-rating__count`'s parenthetical review-count text is
  plain text, not a `.badge`; don't substitute one for the other.
