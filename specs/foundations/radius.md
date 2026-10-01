# Radius

## What this is

`--radius-*` in `tokens/core/radius.css` — a single scale, no semantic layer, used directly in components:

`--radius-none` (0) → `--radius-sm` → `--radius` (the unprefixed default, 8px) → `--radius-md` → `--radius-lg` → `--radius-xl` → `--radius-2xl` → `--radius-3xl` → `--radius-full` (9999px, for pills/circles).

Full values: `specs/tokens/token-reference.md` ("Radius" section).

## When to use it

Any `border-radius`. As a rough guide (see actual component usage for precedent before guessing): `--radius-sm`/`--radius` for inputs and small controls, `--radius-md`/`--radius-lg` for cards and panels, `--radius-full` for avatars, pills, badges, and circular icon buttons.

```css
.input {
  border-radius: var(--radius-sm);
}
.card {
  border-radius: var(--radius-lg);
}
.avatar {
  border-radius: var(--radius-full);
}
```

## Do / don't

```css
/* Don't */
.tooltip {
  border-radius: 6px;
}

/* Do */
.tooltip {
  border-radius: var(--radius-sm);
}
```

Note `--radius` (no suffix) is a real, distinct token — not a typo for `--radius-md`. Both exist; `--radius` is the default/moderate step between `--radius-sm` and `--radius-md`.
