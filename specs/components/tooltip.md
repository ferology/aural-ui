# Tooltip

## 1. Metadata

|                   |                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| Name              | Tooltip                                                                                          |
| Category          | Data Display / Overlays                                                                          |
| Status            | Stable                                                                                           |
| CSS file          | `components/tooltip.css`                                                                         |
| JS file           | `javascript/index.js` (`Aural.initTooltips` / `showTooltip` / `hideTooltip`)                     |
| Naming convention | Flat kebab-case (`.tooltip`, `.tooltip-top`); also a `[data-tooltip]` attribute-selector variant |

## 2. Overview

Tooltip shows short contextual help text on hover or focus, without
cluttering the interface. There are **two independent authoring modes**
in this one file: an explicit `.tooltip` element inside a
`.tooltip-wrapper` (JS-toggled), and a zero-markup `[data-tooltip]`
attribute variant driven entirely by CSS (`content: attr(data-tooltip)`
in a `::after` pseudo-element).

**When to use:** clarify icon-only buttons, explain abbreviated/truncated
text, supplement (never replace) visible labels, 1–2 short sentences
(~80 characters max).

**When NOT to use:** anything essential to completing a task (tooltips
aren't reliably discoverable or available on touch), content long enough
to need scrolling or rich formatting — use **Popover** instead.

## 3. Anatomy

| Class / selector                                                                                                     | Purpose                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.tooltip-wrapper`                                                                                                   | Positioning context (`position: relative`) for an explicit `.tooltip` + its trigger.                                                                                                 |
| `.tooltip`                                                                                                           | The bubble itself — absolutely positioned, blurred/bordered surface, fades/scales in via `.tooltip-show`.                                                                            |
| `.tooltip-show`                                                                                                      | Toggled by JS (hover/focus) to reveal the tooltip and enable pointer events.                                                                                                         |
| `.tooltip-top/-bottom/-left/-right`                                                                                  | Position variants — anchor edge + 8px offset + the entrance transform direction.                                                                                                     |
| `.tooltip-with-arrow`                                                                                                | Adds a bordered CSS-triangle arrow (`::before`/`::after`) pointing at the trigger.                                                                                                   |
| `.tooltip-sm` / `.tooltip-lg` / `.tooltip-xl`                                                                        | Size modifiers (max-width, padding, font-size). `-xl` is for cases needing a larger, more readable bubble than `-lg` (e.g. onboarding-tour callouts), not general-purpose help text. |
| `.tooltip-dark` / `.tooltip-light` / `.tooltip-primary` / `.tooltip-success` / `.tooltip-warning` / `.tooltip-error` | Color variants overriding the default surface.                                                                                                                                       |
| `[data-tooltip]` + `[data-tooltip-position]`                                                                         | Zero-markup variant: tooltip content/position are read from data attributes; the bubble is a `::after` pseudo-element shown on `:hover`/`:focus`.                                    |

## 4. Tokens used

| Token                                                                       | Used for                                                                      |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `--color-tooltip-bg` / `--color-tooltip-border` / `--color-tooltip-text`    | Default bubble surface (both `.tooltip` and `[data-tooltip]::after`)          |
| `--color-bg-dark-overlay`                                                   | `.tooltip-dark` background (`rgba(0,0,0,0.9)`)                                |
| `--color-badge-neutral-bg`                                                  | `.tooltip-dark` border (`rgba(255,255,255,0.1)`)                              |
| `--color-text-on-dark`                                                      | `.tooltip-light` background (`rgba(255,255,255,0.9)`)                         |
| `--color-text-inverse`                                                      | `.tooltip-light` text color                                                   |
| `--color-primary` / `--color-success` / `--color-warning` / `--color-error` | `.tooltip-primary/-success/-warning/-error` background + border               |
| `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-5`         | Padding (default/`-sm`/`-lg`/`-xl`) and the 8px position offset/arrow margins |
| `--space-80`                                                                | Default/`[data-tooltip]` bubble `max-width` (320px)                           |
| `--size-200` / `--size-400` / `--size-480`                                  | `.tooltip-sm` / `.tooltip-lg` / `.tooltip-xl` `max-width`                     |
| `--radius-md`                                                               | Bubble corners                                                                |
| `--shadow-lg`                                                               | Bubble elevation                                                              |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg`                     | Font size at `-sm` / default / `-lg` / `-xl`                                  |
| `--leading-normal`                                                          | Line height                                                                   |
| `--font-sans`                                                               | Font family                                                                   |
| `--duration-moderate`                                                       | Show/hide opacity+transform transition (200ms — see new-token note below)     |
| `--z-tooltip`                                                               | Stacking layer                                                                |

**New tokens added while migrating this file:**

- `--duration-moderate: 200ms` (`tokens/core/animations.css`) — the
  tooltip/popover show/hide transition used a raw `0.2s` that had no
  matching duration token (the scale jumps from `--duration-fast` 150ms
  straight to `--duration-normal` 300ms). `0.2s` turned out to be the
  single most common raw duration in the whole codebase (48 occurrences
  across 28 component files at the time of this audit), so it's added as
  a proper rung on the core duration scale rather than ignored file by
  file.

## 5. Props/API

Tooltip is pure CSS/markup plus a small JS helper:

- `Aural.initTooltips()` — wires `mouseenter`/`mouseleave`/`focus`/`blur`
  on every `[data-tooltip-trigger]` inside a `.tooltip-wrapper`, toggling
  `.tooltip-show` on the sibling `.tooltip`. Called automatically by
  `Aural.init()`.
- `Aural.showTooltip(triggerId)` / `Aural.hideTooltip(triggerId)` —
  imperative show/hide by trigger element ID, for the explicit
  `.tooltip-wrapper` markup only.
- The `[data-tooltip]` attribute variant needs **no JS at all** — it's
  driven purely by `:hover`/`:focus` CSS.

## 6. States

| State          | Trigger                                                           | Effect                                                                          |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Hidden         | Default                                                           | `opacity: 0`, `pointer-events: none`.                                           |
| Shown          | `.tooltip-show` (explicit) / `:hover`,`:focus` (`[data-tooltip]`) | Fades + slides in to its resting position over `--duration-moderate`.           |
| Focus-within   | `:focus-within` on `.tooltip`                                     | Forces it visible — keeps keyboard users from losing a tooltip mid-interaction. |
| With arrow     | `.tooltip-with-arrow`                                             | Renders a bordered-triangle pointer at the trigger edge.                        |
| Reduced motion | `prefers-reduced-motion: reduce`                                  | Transition removed; `transform` forced to `none !important` on show.            |

Accessibility: tooltips show on both `:hover` and `:focus` (keyboard
reachable), use `pointer-events: none` so they never block clicks on
nearby elements, and must never be the _only_ place essential
information lives — icon-only triggers still need their own
`aria-label` independent of the tooltip text.

## 7. Code example

```html
<!-- Zero-markup attribute variant -->
<button
  class="btn btn-ghost btn-icon"
  data-tooltip="Edit item"
  data-tooltip-position="bottom"
  aria-label="Edit"
>
  <i data-lucide="pencil"></i>
</button>

<!-- Explicit element variant -->
<div class="tooltip-wrapper">
  <button id="info-trigger" data-tooltip-trigger aria-describedby="info-tooltip">
    <i data-lucide="info"></i>
  </button>
  <div class="tooltip tooltip-top tooltip-with-arrow" id="info-tooltip" role="tooltip">
    Your plan renews on the 1st.
  </div>
</div>
```

## 8. Cross-references

- **Popover** — shares the same positioning/arrow/animation pattern but
  supports rich, interactive content (forms, buttons, lists); reach for
  Popover once the content needs more than a sentence or two, or needs to
  stay open on click.
- **Badge** — `--color-badge-neutral-bg` (`.tooltip-dark`'s border) is
  shared rather than duplicated.
