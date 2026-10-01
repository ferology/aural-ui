# Stepper

## 1. Metadata

|                   |                                                                             |
| ----------------- | --------------------------------------------------------------------------- |
| Name              | Stepper                                                                     |
| Category          | Navigation                                                                  |
| Status            | Stable                                                                      |
| CSS file          | `components/stepper.css`                                                    |
| Naming convention | BEM-ish (`.aural-stepper`, `.aural-step__indicator`, `.aural-step--active`) |

## 2. Overview

Stepper is a step indicator for multi-step, sequential processes — form
wizards, checkout flows, onboarding, order tracking — showing users where
they are in the process and how much is left. It supports horizontal
layouts (desktop, few steps) and vertical layouts (more steps, or mobile),
plus clickable step navigation, completed/error states, and icon or
number indicators.

**When to use:**

- Multi-step processes: forms, checkout, onboarding
- Showing progress through a sequential workflow
- Horizontal steppers for 3–5 steps on desktop
- Vertical steppers for more than 5 steps, or on mobile
- Tracking order status or delivery progress

**When NOT to use:**

- Independent, equal-weight views of the same object — use Tabs instead (see Tabs §2 "When NOT to use")
- A single binary progress value (percent complete, file upload) — use Progress
- Non-sequential navigation — use Navbar, Breadcrumb, or Tabs as appropriate

## 3. Anatomy

| Class                                                            | Purpose                                                                                                    |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `.aural-stepper`                                                 | Root container.                                                                                            |
| `.aural-stepper--horizontal` / `--vertical`                      | Layout direction — row of centered steps vs. a column of left-aligned steps.                               |
| `.aural-step`                                                    | A single step; flexes to share space equally with its siblings.                                            |
| `.aural-step__indicator`                                         | The circular number/icon badge (44px by default).                                                          |
| `.aural-step__indicator-icon`                                    | Optional icon inside the indicator — hides the auto-generated number (`:has()`) when present.              |
| `.aural-step__connector`                                         | The line between this step's indicator and the next, positioned to run through the indicator's center.     |
| `.aural-step__content` / `__title` / `__description`             | Label wrapper / step name / optional supporting text.                                                      |
| `.aural-step--active` / `--completed` / `--error` / `--disabled` | Step state modifiers — color the indicator, connector, and title accordingly.                              |
| `.aural-step--clickable`                                         | Makes the indicator a focusable, hoverable button-like target (`role="button"`, `tabindex="0"` set by JS). |
| `.aural-stepper--sm` / `--lg`                                    | Size modifiers — scale indicator/connector/title/description dimensions.                                   |
| `.aural-stepper--numbered`                                       | Auto-fills the indicator with its `data-step` attribute via `::before`.                                    |
| `.aural-stepper--responsive`                                     | At `max-width: 640px`, forces a horizontal stepper to stack like a vertical one.                           |

## 4. Tokens used

| Token                                                                                                 | Used for                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--color-bg-secondary` / `--color-bg-tertiary`                                                        | Indicator resting / disabled background                                                                                                                                   |
| `--color-text-secondary` / `--color-text-tertiary` / `--color-text-primary` / `--color-text-disabled` | Indicator/title resting, description, completed-title, disabled text                                                                                                      |
| `--color-primary` / `--color-success` / `--color-error`                                               | Active / completed / error indicator, connector, and title color                                                                                                          |
| `--primary-alpha-20`                                                                                  | Active indicator's focus-style ring (`box-shadow`)                                                                                                                        |
| `--color-border-medium` / `--color-border-subtle`                                                     | Indicator/connector resting border / disabled indicator border                                                                                                            |
| `--font-semibold` / `--font-bold`                                                                     | Title weight / active-title weight                                                                                                                                        |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg`                                               | Description/sm-title, title/sm-indicator, indicator/lg-title, lg-indicator font sizes                                                                                     |
| `--leading-relaxed`                                                                                   | Description line-height                                                                                                                                                   |
| `--space-0-5` / `--space-1` / `--space-3` / `--space-4` / `--space-5` / `--space-6`                   | Connector thickness, content gap, content margins, vertical step padding                                                                                                  |
| `--size-20` / `--size-24` / `--size-28` / `--size-36` / `--size-44` / `--size-48` / `--size-56`       | Indicator-icon, touch/lg-connector-offset, lg-connector-offset/lg-connector, sm-indicator, default indicator/touch-sm-indicator, touch indicator, lg-indicator dimensions |
| `--transition-all-fast`                                                                               | Indicator/connector/title transitions                                                                                                                                     |

**New tokens added while migrating this file:** none.

Rather than invent a token for the "half the indicator diameter" connector
offsets (22px = `--size-44`/2, 18px = `--size-36`/2 — neither 22px nor
18px is itself a meaningful design value), these are expressed as
`calc(var(--size-N) / 2)` directly against the matching indicator size
token. This keeps the relationship self-documenting and means the offset
automatically stays correct if the indicator size token ever changes,
rather than requiring two numbers to be kept in sync by hand. Where the
half-value happens to coincide with an existing token (`--size-56`/2 =
`--size-28`, `--size-48`/2 = `--size-24`), the existing token is used
directly instead.

The sm-stepper's `.aural-step__description` font-size (`0.7rem`) is left
raw with `aural-ignore` — it doesn't match the `--text-*` scale and is
also used verbatim by `search-bar.css`, but isn't common enough elsewhere
to warrant a new token.

## 5. Props/API

Stepper is markup + CSS, driven by a small JS API in
`javascript/index.js` (the global `Aural` object):

| Method                                               | Description                                                                                                                                                      |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Aural.initStepper(stepperId, options)`              | If `clickable` (default `true`), makes every non-disabled step's indicator focusable/clickable. Returns `{ next, prev, goTo, getCurrentStep, complete, error }`. |
| `Aural.goToStep(stepperId, stepIndex)`               | Sets `.aural-step--active` on the step at `stepIndex`, clearing it from all siblings.                                                                            |
| `Aural.nextStep(stepperId)` / `.prevStep(stepperId)` | Advances/retreats the active step by one, no-op at the ends.                                                                                                     |
| `Aural.completeStep(stepperId, stepIndex)`           | Adds `.aural-step--completed`, clears `.aural-step--error`, on the given step.                                                                                   |
| `Aural.errorStep(stepperId, stepIndex)`              | Adds `.aural-step--error`, clears `.aural-step--completed`, on the given step.                                                                                   |

`options`: `initialStep` (number, default `0`), `clickable` (boolean,
default `true`), `onChange` (callback — accepted but not currently invoked
by `goToStep`/`nextStep`/`prevStep` in the shipped implementation).

## 6. States

| State                     | Selector                                                      | Effect                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Default (pending)         | `.aural-step`                                                 | `--color-bg-secondary` indicator, `--color-border-medium` border, `--color-text-secondary` title.                                           |
| Active                    | `.aural-step--active`                                         | `--color-primary` indicator + connector gradient + alpha ring; bold primary-colored title.                                                  |
| Completed                 | `.aural-step--completed`                                      | `--color-success` indicator + connector; `--color-text-primary` title.                                                                      |
| Error                     | `.aural-step--error`                                          | `--color-error` indicator (overrides completed if both would otherwise apply, since each is set exclusively by `completeStep`/`errorStep`). |
| Disabled                  | `.aural-step--disabled`                                       | Dimmed indicator/title (`opacity: 0.5`), not marked `--clickable`.                                                                          |
| Clickable hover           | `.aural-step--clickable .aural-step__indicator:hover`         | Border turns primary, `scale(1.05)`.                                                                                                        |
| Clickable focus           | `.aural-step--clickable .aural-step__indicator:focus-visible` | 2px `--color-primary` outline with offset.                                                                                                  |
| Reduced motion            | `prefers-reduced-motion: reduce`                              | Indicator/connector/title transitions and the clickable hover `scale()` disabled.                                                           |
| Touch (`pointer: coarse`) | —                                                             | Indicators grow to the 44–48px touch-target minimum at every size.                                                                          |

## 7. Code example

```html
<div
  class="aural-stepper aural-stepper--horizontal"
  role="navigation"
  aria-label="Registration progress"
  id="signup-stepper"
>
  <div class="aural-step aural-step--completed">
    <div class="aural-step__indicator"><i data-lucide="check"></i></div>
    <div class="aural-step__connector"></div>
    <div class="aural-step__content">
      <div class="aural-step__title">Account</div>
    </div>
  </div>
  <div class="aural-step aural-step--active">
    <div class="aural-step__indicator" aria-current="step">2</div>
    <div class="aural-step__connector"></div>
    <div class="aural-step__content">
      <div class="aural-step__title">Profile</div>
      <div class="aural-step__description">Tell us about yourself</div>
    </div>
  </div>
  <div class="aural-step">
    <div class="aural-step__indicator">3</div>
    <div class="aural-step__connector"></div>
    <div class="aural-step__content">
      <div class="aural-step__title">Confirm</div>
    </div>
  </div>
</div>

<script>
  lucide.createIcons();
  window.Aural?.initStepper('signup-stepper', { initialStep: 1 });
</script>
```

## 8. Cross-references

- **Tabs** — use Stepper, not Tabs, for sequential multi-step flows; use Tabs for equal-weight, independent views.
- **Progress** — use Progress for a single continuous completion value, not a multi-step process.
- **Pagination** — both show position-in-a-sequence, but Pagination navigates paged _content_, Stepper tracks a _process_.
