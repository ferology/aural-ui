# Input

## 1. Metadata

|                   |                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Name              | Input                                                                                                                      |
| Category          | Forms                                                                                                                      |
| Status            | Stable                                                                                                                     |
| CSS file          | `components/input.css`                                                                                                     |
| Naming convention | Flat kebab-case (`.input`, `.form-group`, `.input-number__button` is a BEM-ish exception for the number spinner sub-parts) |

## 2. Overview

Input covers accessible text entry: the base `.input` field (used for
`<input>` and `<textarea>`), the `.form-group` wrapper that pairs a label
with helper/error/success copy, validation states, size variants, a
number input with custom increment/decrement spinners, and an
icon-prefixed/suffixed input group.

**When to use:**

- Single-line text entry — names, emails, search queries, URLs, phone numbers (use the matching `type` attribute)
- Multi-line text entry — comments, descriptions, messages (`.textarea` / `textarea.input`)
- Numeric entry with step controls — `.input-number` with its spinner buttons
- Any field that needs a label, helper text, or validation feedback — always via `.form-group`

**When NOT to use:**

- For a small number of mutually exclusive choices — use Radio or Select instead of free text
- For long-form rich text — this is a plain text field, not a rich-text editor
- Without a `<label>` — placeholder text is never a substitute for a label (see Accessibility Requirements in the file's own doc comment)

## 3. Anatomy

| Class                                                                      | Purpose                                                                                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.input`                                                                   | Base field — full-width, padded, bordered, 44px min-height touch target. Applies to `<input>` and (combined with `textarea.input`) `<textarea>`. |
| `.input-sm` / `.input-lg`                                                  | Size modifiers (padding, font-size, min-height).                                                                                                 |
| `.input.error` / `.input.success` / `.input.warning`                       | Validation-state modifiers (border + focus-outline color).                                                                                       |
| `.textarea` / `textarea.input`                                             | Multi-line variant — adds a default `min-height` and vertical resize.                                                                            |
| `.form-group`                                                              | Wrapper — stacks a `.label`, the field, and helper/error/success text with consistent gap.                                                       |
| `.label`                                                                   | Field label typography.                                                                                                                          |
| `.form-helper` / `.form-error` / `.form-success`                           | Supporting copy under the field, color-coded per state.                                                                                          |
| `.input-number`                                                            | Wrapper for a number input with custom spinner controls (hides the native browser spinner).                                                      |
| `.input-number__controls`                                                  | Absolutely-positioned column holding the two spinner buttons.                                                                                    |
| `.input-number__button`                                                    | Individual increment/decrement button.                                                                                                           |
| `.input-number--sm` / `.input-number--lg`                                  | Size modifiers for the number-input spinner controls.                                                                                            |
| `.input-group`                                                             | Wrapper for an input with a prefix and/or suffix icon.                                                                                           |
| `.input-group-prefix` / `.input-group-suffix`                              | Modifiers that reserve padding on the field for the icon.                                                                                        |
| `.input-group-icon` / `.input-group-icon-left` / `.input-group-icon-right` | Absolutely-positioned icon slot(s).                                                                                                              |

## 4. Tokens used

| Token                                                                                            | Used for                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `--color-input-bg` / `--color-input-border` / `--color-input-text` / `--color-input-placeholder` | Base field appearance                                                                                               |
| `--color-input-disabled-bg`                                                                      | `.input:disabled` and `.input:read-only` background                                                                 |
| `--color-primary`                                                                                | Hover/focus border + outline color                                                                                  |
| `--color-bg-hover`                                                                               | Hover background                                                                                                    |
| `--color-text-disabled`                                                                          | Disabled text color                                                                                                 |
| `--color-border-subtle`                                                                          | Disabled border color                                                                                               |
| `--color-border-error` / `--color-border-warning` / `--color-border-success`                     | Validation-state borders and focus outlines                                                                         |
| `--color-bg-tertiary`                                                                            | `.input-number__controls` background                                                                                |
| `--color-border-medium`                                                                          | `.input-number__controls` divider borders                                                                           |
| `--color-text-secondary`                                                                         | `.input-number__button` icon color                                                                                  |
| `--color-text-disabled`                                                                          | `.input-number__button:disabled`                                                                                    |
| `--color-text-tertiary`                                                                          | `.input-group-icon` color                                                                                           |
| `--color-text-primary`                                                                           | `.label`                                                                                                            |
| `--color-text-muted`                                                                             | `.form-helper`                                                                                                      |
| `--color-error` / `--color-success`                                                              | `.form-error` / `.form-success` text                                                                                |
| `--space-1`                                                                                      | `.form-helper`/`.form-error`/`.form-success` top margin, `.form-group` gap                                          |
| `--space-2` / `--space-3` / `--space-4` / `--space-6` / `--space-8`                              | Field padding (varies by size), `.input-group` icon offsets                                                         |
| `--space-10` / `--space-12`                                                                      | Reserved padding for icons / spinner controls                                                                       |
| `--size-12` / `--size-14` / `--size-16` / `--size-18` / `--size-24` / `--size-28` / `--size-32`  | Spinner-button and icon dimensions at various sizes                                                                 |
| `--size-36` / `--size-44` / `--size-48` / `--size-52`                                            | Field `min-height` at sm / default / touch (coarse pointer) / lg (`--size-52` is a new core token — see note below) |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg`                                          | Font sizes (helper text / sm / default / lg)                                                                        |
| `--font-sans` / `--font-semibold` / `--leading-normal`                                           | Typography                                                                                                          |
| `--radius-md`                                                                                    | Corner radius (field and spinner-controls container)                                                                |
| `--transition-all-fast`                                                                          | Hover/focus transitions                                                                                             |

**New token added while migrating this file:**

- `--size-52: 3.25rem` (`tokens/core/size.css`) — `.input-lg`'s 52px
  `min-height` had no matching size step; shared with `.btn-lg` in
  `button.css`, which has the identical value.

Two values were left as `/* aural-ignore */` rather than tokenized:
`textarea.input`'s `100px` default `min-height` (a one-off default, not on
the 4px spacing/size grid) and the Input itself has no other one-off
exceptions.

## 5. Props/API

Input is pure CSS/markup — there is no JS-driven `Aural.*` init function
(the number-input spinner buttons are wired up by consumer code, not by
this library). The Storybook story models the following as
documentation-only controls:

| Control       | Options                                                  | Maps to                                                                          |
| ------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `label`       | text                                                     | `<label class="label">`                                                          |
| `placeholder` | text                                                     | `placeholder` attribute                                                          |
| `type`        | `text` / `email` / `password` / `number` / `tel` / `url` | `type` attribute                                                                 |
| `size`        | `sm` / `default` / `lg`                                  | `.input-sm` / (default) / `.input-lg`                                            |
| `state`       | `default` / `error` / `success`                          | (none) / `.error` + `aria-invalid="true"` / `.success` + `aria-invalid="false"`  |
| `helperText`  | text                                                     | `.form-helper` / `.form-error` paired via `aria-describedby`/`aria-errormessage` |
| `disabled`    | boolean                                                  | `disabled` attribute                                                             |

## 6. States

| State                                | Selector                                        | Behavior                                                                           |
| ------------------------------------ | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| Default                              | `.input`                                        | Base appearance                                                                    |
| Hover                                | `&:hover:not(:disabled)`                        | Border becomes `--color-primary`, background shifts to `--color-bg-hover`          |
| Focus                                | `&:focus`                                       | 2px solid `--color-primary` outline (2px offset), border becomes `--color-primary` |
| Disabled                             | `&:disabled`                                    | Explicit WCAG-AA-compliant colors (no opacity trick), `cursor: not-allowed`        |
| Read-only                            | `&:read-only`                                   | Same background as disabled, `cursor: default`, but remains focusable/selectable   |
| Error                                | `.input.error` (+ focus)                        | Border/outline in `--color-border-error`                                           |
| Success                              | `.input.success` (+ focus)                      | Border/outline in `--color-border-success`                                         |
| Warning                              | `.input.warning` (+ focus)                      | Border/outline in `--color-border-warning`                                         |
| Spinner button hover/active/disabled | `.input-number__button:hover/:active/:disabled` | Background/color shifts; disabled drops to `--color-text-disabled`                 |

## 7. Code example

```html
<!-- With label (required for accessibility) -->
<div class="form-group">
  <label class="label" for="email-input">Email</label>
  <input type="email" id="email-input" class="input" />
  <p class="form-helper">We'll never share your email</p>
</div>

<!-- Error state, announced to screen readers -->
<div class="form-group">
  <label class="label" for="email-input-2">Email</label>
  <input
    type="email"
    id="email-input-2"
    class="input error"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <p class="form-error" id="email-error">Please enter a valid email address</p>
</div>

<!-- Required field -->
<label class="label" for="name"> Full Name <span aria-label="required">*</span> </label>
<input type="text" id="name" class="input" required aria-required="true" />
```

Accessibility requirements (from the component's own doc comment):

- Always use `<label>` with a matching `for`/`id`.
- Use `aria-invalid="true"` for error states.
- Use `aria-describedby` (or `aria-errormessage`) to link helper/error text.
- Use `aria-required="true"` for required fields.
- Ensure error/helper message elements have unique `id`s.

## 8. Cross-references

- **Search Bar** — builds on `.input-group`/`.input-group-prefix` for its leading search icon.
- **Select** — shares the same validation-state and sizing conventions (`.error`/`.success`, `sm`/`lg`) as a sibling form control.
- **Button** — `.input-number__button` is a small, component-local button pattern distinct from `.btn`; don't reuse `.btn` classes inside `.input-number__controls`.
