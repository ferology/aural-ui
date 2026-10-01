# Pattern: Forms

Source: `docs/patterns.html` ("Login Form" and "Form with Validation" patterns).

## What this covers

Composing `.card` + `.label` + `.input` + `.btn` into complete forms, and layering validation feedback on top of inputs. This is a composition pattern (how existing components combine), not a new component — nothing here should be built as a new `components/*.css` file.

## Login form

Structure: a centered `.card` (`max-width: 400px`) containing a `.card-body`, a centered heading block, a `<form>` with stacked `label`+`input` pairs (`margin-bottom: var(--space-4)` between fields), a "remember me" checkbox paired with a "forgot password" link on one row (`display: flex; justify-content: space-between`), and a full-width primary submit button.

Conventions:

- Every `input` has an associated `label class="label"` with a matching `for`/`id` pair — never a bare placeholder as the only label.
- The submit button is full-width (`width: 100%`) for better mobile ergonomics, and visually last in the form.
- A secondary "don't have an account? Sign up" line sits below the button in `--text-sm` / `--color-text-secondary`, centered.
- Keep the field set minimal — only what's needed to authenticate (email/username + password). Don't add extra fields to a login form.

## Form with validation

Validation state is communicated two ways at once on the same field, not just one:

1. **Border color** on the `input` itself: `border-color: var(--color-success)` or `var(--color-error)`.
2. **A message row below the field**, in matching color and `--text-sm`, prefixed with a small icon (`check-circle` for success, `alert-circle` for error) at `14px`.

```html
<input class="input" style="border-color: var(--color-success);" />
<div style="color: var(--color-success); font-size: var(--text-sm);">
  <!-- check-circle icon -->
  Username is available
</div>
```

For password fields with composable requirements (length, uppercase, number, ...), render each requirement as a list item that is `--color-success` + a filled check icon once satisfied, and `--color-text-tertiary` + an empty circle icon while unmet — don't collapse this into a single pass/fail message, since showing which specific requirements remain is the point of the pattern.

Validate on blur or submit — not on every keystroke — per the pattern's own usage notes.

## Tokens used

`--space-4`/`--space-6`/`--space-8` for field and section spacing, `--text-sm` for helper/validation text, `--color-success`/`--color-error` for validation state, `--color-text-secondary`/`--color-text-tertiary` for supporting copy. Nothing here introduces a token that isn't already documented in `specs/foundations/`.
