# Progress

## 1. Metadata

|                   |                                                                           |
| ----------------- | ------------------------------------------------------------------------- |
| Name              | Progress                                                                  |
| Category          | Feedback                                                                  |
| Status            | Stable                                                                    |
| CSS file          | `components/progress.css`                                                 |
| JS file           | `javascript/index.js` (`Aural.setProgress`)                               |
| Naming convention | Flat kebab-case (`.progress`, `.progress-bar`, `.progress-indeterminate`) |

## 2. Overview

Progress is a horizontal bar indicator for operations with a measurable
completion state (0–100%) or, in indeterminate mode, ongoing activity of
unknown duration. It reassures the user the system is working and (when
determinate) helps them estimate remaining time.

**When to use:** file uploads, multi-step form/setup flows, data
processing with a known percentage.

**When NOT to use:** instant or unknown-duration operations with nothing
meaningful to show as a fraction — use **Spinner**; content placeholders
during initial load — use **Skeleton**.

## 3. Anatomy

| Class                                              | Purpose                                                                                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `.progress`                                        | Track — `role="progressbar"` host, rounded-pill background, hides overflow.                                                    |
| `.progress-bar`                                    | The fill — animates its `width`; centers an optional text label inside itself.                                                 |
| `.progress-sm` / `-md` / `-lg` / `-xl`             | Height modifiers (4px / 8px / 12px / 20px); `-sm`/`-md` hide the in-bar label (`font-size: 0`), `-xl` shows it at `--text-sm`. |
| `.progress-primary/-success/-warning/-error/-info` | Fill color variants.                                                                                                           |
| `.progress-indeterminate`                          | Forces the bar to 100% width and sweeps a gradient highlight across it instead of resizing.                                    |
| `.progress-striped`                                | Adds a repeating diagonal-stripe texture to the fill.                                                                          |
| `.progress-animated`                               | Combined with `-striped`, animates the stripes scrolling.                                                                      |
| `.progress-with-label` / `.progress-label`         | Wraps a `.progress` with a trailing numeric label (right-aligned, tabular numerals, fixed min-width to avoid layout shift).    |

## 4. Tokens used

| Token                                                             | Used for                                                                |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `--color-progress-bg`                                             | Track background                                                        |
| `--color-progress-fill`                                           | Default/`-primary` fill (and the indeterminate sweep's highlight color) |
| `--color-progress-fill-success` / `-warning` / `-error` / `-info` | Color variant fills (solid and indeterminate-sweep versions)            |
| `--color-progress-text`                                           | `.progress-label` text color                                            |
| `--space-1` / `--space-2`                                         | `-sm` / default (`-md`) track height                                    |
| `--size-12` / `--size-20`                                         | `-lg` / `-xl` track height                                              |
| `--radius-full`                                                   | Track + fill pill shape                                                 |
| `--text-xs` / `--text-sm`                                         | In-bar label (default) / `-xl` in-bar label and `.progress-label`       |
| `--font-semibold` / `--font-medium`                               | In-bar label / `.progress-label` weight                                 |
| `--duration-normal`                                               | Width-change transition on determinate fills                            |
| `--duration-slowest`                                              | Striped-scroll animation duration (1s, exact match)                     |

**New tokens added while migrating this file:** none — `--space-1`/`-2`,
`--size-12`/`-20`, and `--duration-normal`/`--duration-slowest` all had
exact matches already.

**Kept as `aural-ignore` / untouched warnings (decorative, non-exact):**
the indeterminate sweep's `1.5s` duration (between `--duration-normal`
300ms and `--duration-slowest` 1000ms, no exact rung — treated the same
as Spinner's bespoke per-variant animation speeds, not folded into the
interaction-timing scale) and the striped pattern's
`rgba(255, 255, 255, 0.15)` diagonal highlight (a decorative overlay
independent of whichever fill color it's layered on, so it can't be tied
to one variant's token). The two `font-size: 0` declarations in
`.progress-sm`/`.progress-md` are an intentional technique (hides the
in-bar label at heights too short to legibly contain it) rather than a
missing token.

## 5. Props/API

Progress is pure CSS/markup, with one JS convenience helper:

- `Aural.setProgress(progressId, value)` — finds `#progressId
.progress-bar`, sets its inline `width` to `${value}%`, and updates the
  host `.progress` element's `aria-valuenow`.

For indeterminate progress, omit `aria-valuenow`/`-valuemin`/`-valuemax`
entirely (there's no meaningful value to announce) and add
`.progress-indeterminate`.

## 6. States

| State              | Trigger                                  | Effect                                                                                 |
| ------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------- |
| Determinate        | Default + explicit `.progress-bar` width | Fill width animates to the new value over `--duration-normal`.                         |
| Indeterminate      | `.progress-indeterminate`                | Fill forced to 100% width; a gradient highlight sweeps back and forth continuously.    |
| Striped            | `.progress-striped`                      | Diagonal stripe texture overlaid on the fill.                                          |
| Striped + animated | `.progress-striped.progress-animated`    | Stripes scroll continuously.                                                           |
| Reduced motion     | `prefers-reduced-motion: reduce`         | Width transition, indeterminate sweep, and striped-scroll animations are all disabled. |

Accessibility: use `role="progressbar"` with `aria-valuenow`/`aria-valuemin="0"`/`aria-valuemax="100"`
and a descriptive `aria-label` (e.g. `"File upload progress"`) for
determinate bars; show the numeric percentage visually alongside the bar
for users who can't perceive bar length; announce completion via an
`aria-live="polite"` region; prefer `-md` (8px) or larger for
critical operations — `-sm` (4px) is hard to perceive.

## 7. Code example

```html
<!-- Determinate, with a visible label -->
<div class="progress-with-label">
  <div
    class="progress progress-success"
    role="progressbar"
    id="upload-progress"
    aria-label="File upload progress"
    aria-valuenow="65"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="progress-bar" style="width: 65%"></div>
  </div>
  <span class="progress-label">65%</span>
</div>

<!-- Indeterminate -->
<div class="progress progress-indeterminate" aria-label="Processing">
  <div class="progress-bar"></div>
</div>
```

```javascript
Aural.setProgress('upload-progress', 80);
```

## 8. Cross-references

- **Spinner** — use instead for instant or unknown-duration operations.
- **Skeleton** — use instead for content placeholders during initial load.
- **File Upload** — `--color-upload-progress-bg`/`-fill` follow the same
  track/fill naming pattern as Progress's own tokens.
