# Switch

## 1. Metadata

|                   |                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Name              | Switch                                                                                                                                    |
| Category          | Forms                                                                                                                                     |
| Status            | Stable                                                                                                                                    |
| CSS file          | `components/switch.css`                                                                                                                   |
| Naming convention | Flat kebab-case with a BEM-style element suffix for the real DOM parts (`.switch`, `.switch__track`, `.switch__thumb`, `.switch-success`) |

## 2. Overview

Switch is an iOS-style on/off control for settings and feature toggles
that take effect immediately (no form submission required). Unlike
`.toggle` (see `specs/components/toggle.md`), Switch builds its track and
thumb from real `<div>` elements rather than `::before`/`::after`
pseudo-elements — the file header calls this out explicitly: "Uses real
DOM elements for better rendering and alignment." This is the version to
reach for in new code.

**When to use:**

- **Settings and preferences** — toggling a feature on/off in a settings panel
- **Instant changes** — the change takes effect immediately, with no save/submit step
- **Binary states** — clear on/off, enabled/disabled choices
- **Visibility controls** — showing/hiding content or features

**When NOT to use:**

- **Form submissions** — use a checkbox for form data that requires a submit step
- **Multiple selections from a list** — use checkboxes
- **Single choice among several mutually exclusive options** — use radio buttons
- **Destructive actions** — never use a switch for delete or other irreversible actions

**Switch vs. checkbox:** switches are for settings that apply immediately
(iOS-style); checkboxes are for form data, multi-select, or anything that
waits for an explicit submit.

## 3. Anatomy

| Class                                                                                        | Purpose                                                                                                                                                            |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.switch`                                                                                    | Root `<label>` — inline-flex row, `min-height: var(--size-44)` touch target, owns hover/focus-within state via descendant selectors.                               |
| `.switch__input`                                                                             | The real `<input type="checkbox" role="switch">`, visually hidden with the standard clip-rect sr-only recipe (kept in the accessibility tree, not `display:none`). |
| `.switch__track`                                                                             | The pill-shaped track (`<div>`), 44×24px by default, animates `background-color`/`box-shadow`.                                                                     |
| `.switch__thumb`                                                                             | The circular thumb (`<div>`) nested inside the track, animates via `transform: translateX()`.                                                                      |
| `.switch__label`                                                                             | The visible text label `<span>`, optionally wrapping a `.switch__description`.                                                                                     |
| `.switch__description`                                                                       | Secondary helper text under the label, used with `.switch-with-description`.                                                                                       |
| `.switch-sm` / `.switch-lg`                                                                  | Size modifiers (36×20 / thumb 16, and 56×32 / thumb 28). Default is 44×24 / thumb 20.                                                                              |
| `.switch-primary` / `.switch-success` / `.switch-warning` / `.switch-error` / `.switch-info` | Checked-state track color variants.                                                                                                                                |
| `.switch-with-description`                                                                   | Stacks label + description, top-aligns the track with the label's first line.                                                                                      |
| `.switch-label-left`                                                                         | Reverses row direction so the label renders before the track.                                                                                                      |
| `.switch-only`                                                                               | Hides `.switch__label` for an icon-only / unlabeled switch (still requires an accessible name via `aria-label`).                                                   |
| `.switch-group` / `.switch-group-label` / `.switch-group-description`                        | Layout wrapper for a vertical stack of related switches.                                                                                                           |

## 4. Tokens used

| Token                                                                                                             | Used for                                                                      |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `--size-44` / `--size-24`                                                                                         | Default track width/height; also the base `.switch` touch-target `min-height` |
| `--size-36` / `--size-20`                                                                                         | `.switch-sm` track width/height                                               |
| `--size-56` / `--size-32`                                                                                         | `.switch-lg` track width/height                                               |
| `--size-16` / `--size-20` / `--size-28`                                                                           | Thumb diameter at sm / default / lg                                           |
| `--space-0-5`                                                                                                     | Thumb inset from the track edge, `.switch-with-description` track top offset  |
| `--color-border-strong` / `--color-border-stronger`                                                               | Track background at rest / hover (unchecked)                                  |
| `--color-primary` / `--color-primary-hover`                                                                       | Track background when checked, default variant                                |
| `--color-success` / `--color-warning` / `--color-error` / `--color-info`                                          | Track background when checked, color variants                                 |
| `--color-toggle-thumb-shadow`                                                                                     | Thumb drop shadow (shared semantic token with Toggle)                         |
| `--color-text-primary` / `--color-text-secondary`                                                                 | Label / description text color                                                |
| `--font-sans` / `--text-base` / `--text-sm` / `--text-lg` / `--font-medium` / `--font-normal` / `--font-semibold` | Typography across sizes and group labels                                      |
| `--leading-normal` / `--leading-relaxed`                                                                          | Line height for label / description                                           |
| `--radius-full`                                                                                                   | Pill-shaped track                                                             |
| `--space-1` / `--space-3` / `--space-4`                                                                           | Gaps in base layout, group spacing                                            |

Two `box-shadow` colors are intentionally left as literals rather than
tokenized — see the `/* aural-ignore */` comments at `switch.css:87`'s
backward-compat duplicate (`switch.css` line ~316, the inset track shadow)
and ~340 (the checked-state green glow, which predates the current
`--color-primary` and no longer matches it exactly). Both are flagged as
non-blocking warnings by `scripts/token-audit.js`, not errors.

## 5. Props/API

Switch is pure CSS/markup; `stories/Switch.stories.ts` models a JS-free
API surface for documentation purposes only:

| Story arg                                                          | Maps to                                                         |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| `checked`                                                          | `input` attribute `checked` + `aria-checked`                    |
| `disabled`                                                         | `input` attribute `disabled`                                    |
| `size` (`sm`/`md`/`lg`)                                            | `.switch-sm` / (none) / `.switch-lg`                            |
| `variant` (`default`/`primary`/`success`/`warning`/`error`/`info`) | `.switch-{variant}`                                             |
| `labelPosition` (`left`/`right`)                                   | `.switch-label-left` / (none)                                   |
| `description`                                                      | Adds `.switch-with-description` + a `.switch__description` span |
| `label`                                                            | Text content of `.switch__label`                                |

## 6. States

| State             | Mechanism                                                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hover (unchecked) | `.switch:hover .switch__track` → `--color-border-stronger`                                                                                               |
| Hover (checked)   | `.switch:hover .switch__input:checked + .switch__track` → `--color-primary-hover` (or the variant's hover, where defined)                                |
| Checked           | `.switch__input:checked + .switch__track` sets background; `.switch__input:checked + .switch__track .switch__thumb` slides via `transform: translateX()` |
| Focus-visible     | `.switch__input:focus-visible + .switch__track` gets a 2px `--color-primary` outline with 2px offset                                                     |
| Disabled          | `.switch__input:disabled + .switch__track` → `opacity: 0.5`; `.switch:has(.switch__input:disabled)` sets `cursor: not-allowed` on the whole label        |
| Reduced motion    | `@media (prefers-reduced-motion: reduce)` strips the track/thumb transitions                                                                             |
| High contrast     | `@media (prefers-contrast: high)` adds a 2px `currentColor` border to track and thumb                                                                    |

## 7. Code example

```html
<label class="switch">
  <input type="checkbox" class="switch__input" role="switch" checked />
  <div class="switch__track">
    <div class="switch__thumb"></div>
  </div>
  <span class="switch__label">Enable notifications</span>
</label>

<!-- With description -->
<label class="switch switch-with-description">
  <input type="checkbox" class="switch__input" role="switch" />
  <div class="switch__track">
    <div class="switch__thumb"></div>
  </div>
  <span class="switch__label">
    Marketing emails
    <span class="switch__description">Get updates about new features and special offers</span>
  </span>
</label>

<!-- Color variant + size -->
<label class="switch switch-success switch-lg">
  <input type="checkbox" class="switch__input" role="switch" checked />
  <div class="switch__track">
    <div class="switch__thumb"></div>
  </div>
  <span class="switch__label">Auto-save</span>
</label>
```

Accessibility notes:

- Always set `role="switch"` on the input for correct ARIA semantics, and
  keep `aria-checked` in sync with `checked` via a `change` listener (see
  `Switch.stories.ts`) if the framework binding doesn't already imply it.
- `.switch-only` still needs an accessible name — add `aria-label` to the
  input.
- Space toggles the control by default (native checkbox behavior);
  nothing extra is required for keyboard support.

## 8. Cross-references

- **Toggle** (`specs/components/toggle.md`) — functionally equivalent
  on/off control kept for backward compatibility. `components/switch.css`
  itself ships a duplicate `.toggle` rule block (its "BACKWARDS
  COMPATIBILITY" section) so that `.toggle` keeps working even though
  `components/toggle.css` also defines it — see the Toggle spec for the
  cascade implications of that duplication. Prefer `.switch` in new code.
- **Checkbox** — the form-semantics sibling; use it instead of Switch
  whenever the value needs to be part of a submitted form or multi-select.
- **Radio** — use instead of a group of switches when only one option in
  the group may be active at a time.
