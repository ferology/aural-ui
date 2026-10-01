# Popover

## 1. Metadata

|                   |                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| Name              | Popover                                                                                        |
| Category          | Overlays                                                                                       |
| Status            | Stable                                                                                         |
| CSS file          | `components/popover.css`                                                                       |
| JS file           | `javascript/index.js` (`Aural.initPopovers` / `showPopover` / `hidePopover` / `togglePopover`) |
| Naming convention | Flat kebab-case (`.popover`, `.popover-header`, `.popover-with-arrow`)                         |

## 2. Overview

Popover is a dismissible, trigger-anchored overlay for rich, interactive
content — forms, menus, user-account panels, detailed previews — that
doesn't warrant a full Modal. Unlike Tooltip (hover-only, plain text),
Popover opens on click, can contain buttons/inputs/lists, and supports an
optional header/footer and backdrop.

**When to use:** account/user menus, quick-action panels, inline help
that needs more than a sentence, detail previews triggered from a list
item or icon button.

**When NOT to use:** single-line hints on hover — use **Tooltip**; content
that must block the rest of the page or needs its own focus trap for a
multi-step flow — use **Modal**.

## 3. Anatomy

| Class                                           | Purpose                                                                                                                                          |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.popover-wrapper`                              | Positioning context for the trigger + popover.                                                                                                   |
| `.popover`                                      | The panel itself — absolutely positioned, blurred/bordered surface, scale+fade entrance via `.popover-show` / removal of the `hidden` attribute. |
| `.popover-header`                               | Top section with a heading (`h3`/`h4`/`h5`) and `.popover-close`.                                                                                |
| `.popover-body`                                 | Scrollable content area (custom thin scrollbar), focus-visible ring for keyboard scroll.                                                         |
| `.popover-footer`                               | Right-aligned action row.                                                                                                                        |
| `.popover-close`                                | 32×32px dismiss button.                                                                                                                          |
| `.popover-top/-bottom/-left/-right`             | Position variants — anchor edge + offset + entrance transform direction.                                                                         |
| `.popover-with-arrow`                           | Adds a bordered CSS-triangle arrow pointing at the trigger.                                                                                      |
| `.popover-sm` / `-lg` / `-xl`                   | Size modifiers — `max-width` plus header/body/footer padding and font sizes.                                                                     |
| `.popover-no-header` / `-no-footer` / `-simple` | Adjusts which section's corners get rounded when a section is omitted.                                                                           |
| `.popover-backdrop` / `-backdrop-show`          | Optional full-viewport dimmed scrim behind the popover.                                                                                          |
| `.popover-focus-trap`                           | Marker hook for JS-side focus-trap wiring (no visual styling of its own).                                                                        |

## 4. Tokens used

| Token                                                                             | Used for                                                                     |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `--color-popover-bg` / `--color-popover-border`                                   | Panel surface                                                                |
| `--color-popover-header-bg` / `--color-popover-header-text`                       | Header background / title text                                               |
| `--color-popover-body-text`                                                       | Body copy                                                                    |
| `--color-text-muted` / `--color-text-primary`                                     | Close-button icon default / hover color                                      |
| `--color-bg-glass-light`                                                          | Close-button hover background (`rgba(255,255,255,0.05)`)                     |
| `--color-border-medium`                                                           | Body's custom scrollbar thumb                                                |
| `--color-primary`                                                                 | Close-button and body focus-visible ring                                     |
| `--space-2` / `--space-3` / `--space-4` / `--space-5` / `--space-6` / `--space-8` | Header/body/footer gaps and padding across sizes                             |
| `--size-12` (margins) / `--size-18` / `--size-32`                                 | Arrow offset margins / close-icon size / close-button dimensions             |
| `--size-400` / `--size-600` / `--size-800`                                        | Default/body-scroll `max-height` and `-lg`/`-xl` `max-width`                 |
| `--radius-md` / `--radius-full`                                                   | Panel + section corners / scrollbar thumb                                    |
| `--shadow-xl`                                                                     | Panel elevation                                                              |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg` / `--text-xl`             | Header/body font sizes across `-sm`/default/`-lg`/`-xl`                      |
| `--font-semibold`                                                                 | Header title weight                                                          |
| `--leading-normal` / `--leading-relaxed`                                          | Header / body line-height                                                    |
| `--transition-all-fast`                                                           | Close-button hover transition                                                |
| `--duration-moderate`                                                             | Show/hide and backdrop opacity transitions (new core token — see tooltip.md) |
| `--z-popover` / `--z-overlay`                                                     | Panel stacking layer / backdrop stacking layer                               |

**New tokens added while migrating this file:** none directly (reuses
`--duration-moderate`, added while migrating `tooltip.css` in this same
batch — see that spec for the rationale).

**Single-occurrence raw values kept as `aural-ignore`:** `.popover-sm`'s
`max-width: 250px` (falls between `--size-200` and `--size-280`, not
worth a new rung for one caller) and the backdrop's `rgba(0, 0, 0, 0.3)`
(deliberately lighter than `--color-dialog-backdrop`'s `0.5`, so a
popover reads as less blocking than a modal).

## 5. Props/API

Popover is pure CSS/markup plus a small JS helper:

- `Aural.initPopovers()` — wires click-to-toggle on every
  `[data-popover-trigger]` inside a `.popover-wrapper`, Escape-to-close,
  the `.popover-close` button, and click-outside-to-close. Called
  automatically by `Aural.init()`.
- `Aural.showPopover(triggerId)` — adds `.popover-show`, clears the
  `hidden` attribute, and focuses the first focusable element inside.
- `Aural.hidePopover(triggerId)` — removes `.popover-show` and re-adds
  `hidden`.
- `Aural.togglePopover(triggerId)` — picks show/hide based on current state.

## 6. States

| State              | Trigger                                         | Effect                                                                                                              |
| ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Hidden             | `[hidden]` attribute (default)                  | `opacity: 0`, `transform: scale(0.95)`, `pointer-events: none`.                                                     |
| Shown              | `.popover-show` or removing `[hidden]`          | Scales/fades to resting position over `--duration-moderate`.                                                        |
| With arrow         | `.popover-with-arrow`                           | Renders a bordered-triangle pointer; the fill triangle color matches whichever section (body/header bg) it touches. |
| Close hover/focus  | `:hover` / `:focus-visible` on `.popover-close` | Background tint; 2px focus ring.                                                                                    |
| Body focus-visible | `:focus-visible` on `.popover-body`             | Inset 2px primary ring (for keyboard-driven scrolling).                                                             |
| Backdrop shown     | `.popover-backdrop-show`                        | Fades the scrim in/out.                                                                                             |
| Reduced motion     | `prefers-reduced-motion: reduce`                | All transitions removed; shown-state transform forced to `none`.                                                    |

Accessibility: wrap trigger + popover in `.popover-wrapper`, use
`role="dialog"` with `aria-labelledby` pointing at the header title,
Escape returns focus to the trigger, and every interactive element inside
must be reachable via Tab with 44×44px minimum touch targets.

## 7. Code example

```html
<div class="popover-wrapper">
  <button class="btn btn-primary" id="user-menu-trigger" data-popover-trigger>Account</button>
  <div
    class="popover popover-bottom popover-with-arrow"
    id="user-menu-popover"
    role="dialog"
    aria-labelledby="popover-title"
    hidden
  >
    <div class="popover-header">
      <h3 id="popover-title">Account</h3>
      <button class="popover-close" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
    <div class="popover-body">
      <p>Signed in as jane@example.com</p>
    </div>
    <div class="popover-footer">
      <button class="btn btn-ghost btn-sm">Sign out</button>
    </div>
  </div>
</div>
```

## 8. Cross-references

- **Tooltip** — shares the positioning/arrow pattern and the new
  `--duration-moderate` show/hide timing token; use Tooltip instead for
  plain-text, hover-only hints.
- **Modal** — use instead when content must block the entire page or
  needs a dedicated focus trap for a multi-step flow.
- **Dropdown** — shares `--color-popover-border`/`--color-dropdown-border`'s
  pattern of a medium-contrast border on an elevated surface.
