# Spinner

## 1. Metadata

|                   |                                                                               |
| ----------------- | ----------------------------------------------------------------------------- |
| Name              | Spinner                                                                       |
| Category          | Feedback                                                                      |
| Status            | Stable                                                                        |
| CSS file          | `components/spinner.css`                                                      |
| JS file           | `javascript/index.js` (`Aural.showSpinner` / `hideSpinner`)                   |
| Naming convention | BEM-ish, `aural-` prefixed (`.aural-spinner__circle`, `.aural-spinner--dual`) |

## 2. Overview

Spinner is an animated loading indicator for operations of unknown or
very short duration (under ~2 seconds) — button submissions, instant
fetches, processing states where there's nothing more specific to show
than "working on it." It ships in six visual variants (ring, dual-ring,
dots, pulse, grow, bars), five sizes, color variants, and a full-page
overlay mode.

**When to use:** operations with unknown duration or near-instant loading
(disabled-button submit state, inline async fetch indicators).

**When NOT to use:** measurable progress (file uploads, multi-step
processes) — use **Progress**; initial page/content load where the
shape of the incoming content is known — use **Skeleton**.

## 3. Anatomy

| Class                                                                | Purpose                                                                                            |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `.aural-spinner`                                                     | Base wrapper — `inline-block`, positioning context for its child shape(s).                         |
| `.aural-spinner__circle`                                             | The default ring shape — a bordered circle spun via `border-top-color` contrast.                   |
| `.aural-spinner--dual`                                               | Two-tone ring variant (opposite-quadrant coloring) — reuses `__circle`.                            |
| `.aural-spinner--dots` / `.aural-spinner__dot` (×3)                  | Three bouncing dots, staggered via `animation-delay`.                                              |
| `.aural-spinner--pulse`                                              | A single filled circle that scales/fades in a loop — reuses `__circle`.                            |
| `.aural-spinner--grow` / `.aural-spinner__circle` (×3)               | Three growing-dot circles, staggered.                                                              |
| `.aural-spinner--bars` / `.aural-spinner__bar` (×4)                  | Four vertical bars animating height/opacity, staggered.                                            |
| `.aural-spinner--primary/-secondary/-success/-warning/-error/-white` | Color variants.                                                                                    |
| `.aural-spinner--xs/-sm/-lg/-xl`                                     | Size variants (medium is the unmodified default) — scale every shape's own dimensions in lockstep. |
| `.aural-spinner--slow` / `.aural-spinner--fast`                      | Overrides `animation-duration` on the ring shape.                                                  |
| `.aural-spinner--with-text` / `.aural-spinner__text`                 | Stacks a label below the shape.                                                                    |
| `.aural-spinner-overlay`                                             | Full-viewport, blurred, dimmed backdrop centering a spinner (+ optional text) card.                |

## 4. Tokens used

| Token                                                                                                                                                  | Used for                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `--color-border-subtle`                                                                                                                                | Default ring's track color                                                                                        |
| `--color-primary` / `--color-text-secondary` / `--color-success` / `--color-warning` / `--color-error`                                                 | Color variants' ring/dot/bar fill                                                                                 |
| `--color-text-secondary`                                                                                                                               | `__text` label color                                                                                              |
| `--color-dialog-backdrop`                                                                                                                              | Full-page overlay's dim background (`rgba(0,0,0,0.5)`, reused from Dialog)                                        |
| `--color-bg-secondary`                                                                                                                                 | Overlay's inner spinner+text card background                                                                      |
| `--space-1` / `--space-2` / `--space-3` / `--space-4`                                                                                                  | Dot/bar gaps and overlay padding                                                                                  |
| `--size-6` / `--size-12` / `--size-16` / `--size-20` / `--size-24` / `--size-32` / `--size-40` / `--size-48` / `--size-56` / `--size-64` / `--size-72` | Shape dimensions across all six variants × five sizes                                                             |
| `--radius-sm`                                                                                                                                          | Bar corners                                                                                                       |
| `--radius-lg`                                                                                                                                          | Overlay's inner card corners                                                                                      |
| `--shadow-xl`                                                                                                                                          | Overlay's inner card elevation                                                                                    |
| `--text-sm` / `--font-medium`                                                                                                                          | `__text` label typography                                                                                         |
| `--duration-slow`                                                                                                                                      | `--fast` speed-variant override (500ms — the "fast" preset was identical to the existing `--duration-slow` token) |
| `--z-popover`                                                                                                                                          | Full-page overlay's stacking layer                                                                                |

**New tokens added while migrating this file:**

- `--size-72: 4.5rem` (`tokens/core/size.css`) — the `--xl` ring's 72px
  diameter had no matching rung on the size scale (it jumped from 64px
  straight to 80px); also used identically by `bottom-nav.css`, so it's
  a genuinely shared value, not a one-off.

**Deliberately left as decorative/one-off (`aural-ignore` or
untouched warnings):** every per-variant keyframe duration (`0.8s`
rotate, `1.2s` dual/bars, `1.4s` dots/grow, `1.5s` pulse/`--slow`, `2s`
reduced-motion fallback) is a bespoke "feel" for that motion style, not
an interaction-timing value — these are intentionally _not_ folded into
the shared duration scale, unlike `--duration-moderate` (see
`tooltip.md`), which was a genuine missing UI-interaction rung. Similarly
the `--xs`/`--sm` bar widths (`3px`) and `--sm` grow-dot size (`10px`)
have no scale rung and are single-use within this file. The `--white`
variant's `rgba(255, 255, 255, 0.3)` ring-track color is a white-on-white
definition independent of the brand palette.

## 5. Props/API

Spinner is mostly pure CSS/markup; `Aural.showSpinner(text, options)` /
`Aural.hideSpinner()` manage the full-page overlay mode:

| Option    | Type                                                                       | Default      | Notes                                                                                                                        |
| --------- | -------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `text`    | `string \| ''`                                                             | `'Loading…'` | Falsy hides the `__text` label.                                                                                              |
| `variant` | `'default' \| 'dual' \| 'dots' \| 'pulse' \| 'grow' \| 'bars'`             | `'default'`  | Maps to `.aural-spinner--{variant}` and renders the matching shape markup (dots ×3, bars ×4, otherwise a single `__circle`). |
| `color`   | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'white'` | `'primary'`  | Maps to `.aural-spinner--{color}`.                                                                                           |
| `size`    | `'xs' \| 'sm' \| 'lg' \| 'xl'` (medium = omit)                             | `'lg'`       | Maps to `.aural-spinner--{size}`.                                                                                            |

`showSpinner()` appends `#aural-spinner-overlay` to `document.body` and
sets `overflow: hidden` on it; `hideSpinner()` removes the overlay and
restores scroll.

## 6. States

| State          | Trigger                          | Effect                                                                                                                                                    |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Spinning       | Default (any variant)            | Continuous loop — rotate / bounce / pulse / grow / bar-scale depending on variant.                                                                        |
| Speed override | `--slow` / `--fast`              | Overrides the ring's `animation-duration` (1.5s / 0.5s).                                                                                                  |
| Reduced motion | `prefers-reduced-motion: reduce` | All shape animations slow to a shared 2s duration rather than stopping outright (so the loading state remains perceivable but far less motion-intensive). |

Accessibility: use `role="status"` with a descriptive `aria-label`
(`"Loading content"`, `"Processing payment"`); don't move focus to the
spinner; pair a spinner inside a button with `disabled` + `aria-busy="true"`
on that button; prefer the `md` (default, 40px) size or larger for
standalone use, reserving `xs` (16px) for inline/in-button use.

## 7. Code example

```html
<!-- Standalone -->
<div class="aural-spinner aural-spinner--primary" role="status" aria-label="Loading">
  <div class="aural-spinner__circle"></div>
</div>

<!-- With text -->
<div class="aural-spinner aural-spinner--with-text aural-spinner--primary">
  <div class="aural-spinner__circle"></div>
  <span class="aural-spinner__text">Loading…</span>
</div>

<!-- Inside a disabled button -->
<button class="btn btn-primary" disabled aria-busy="true">
  <span
    class="aural-spinner aural-spinner--xs aural-spinner--white"
    role="status"
    aria-label="Loading"
  >
    <span class="aural-spinner__circle"></span>
  </span>
  <span>Saving…</span>
</button>
```

```javascript
const overlay = Aural.showSpinner('Uploading…', { variant: 'dots', color: 'primary' });
// later
Aural.hideSpinner();
```

## 8. Cross-references

- **Progress** — use instead once the operation has a measurable
  percentage to report.
- **Skeleton** — use instead for full-page/list content placeholders
  rather than an indeterminate spinner.
- **Dialog** — `--color-dialog-backdrop` is reused for the spinner's
  full-page overlay scrim.
