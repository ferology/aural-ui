# Spacing

## What this is

The gap scale: `--space-N` in `tokens/core/spacing.css`, base unit 4px (0.25rem). **N = px / 4** — `--space-4` is 16px, `--space-8` is 32px, `--space-12` is 48px. The scale is not perfectly dense (it skips straight from `--space-16` to `--space-20`, from `--space-28` to `--space-32`, etc. at the higher end) — check `specs/tokens/token-reference.md` ("Spacing" section) for the exact set of defined rungs rather than assuming every multiple of 4px has a token.

There is no semantic spacing layer — `--space-N` tokens are used directly in components. Spacing is structural/layout, not thematic, so it doesn't need the core → semantic indirection that color does.

## When to use it

Use `--space-N` for the space **between or around** things: `padding`, `margin`, `gap` (flex/grid). Anything that separates one element's box from another's.

```css
.card-body {
  padding: var(--space-6);
}
.toolbar {
  display: flex;
  gap: var(--space-2);
}
```

Do not use `--space-N` to size an element's own box (an icon's width, an avatar's diameter, a toggle track) — that's what `--size-N` is for. See `specs/foundations/size.md` for the distinction; the two scales share several numeric values but mean different things.

## Do / don't

```css
/* Don't — raw px, invisible to the token audit, drifts from the scale */
.list-item {
  padding: 12px 16px;
  margin-bottom: 8px;
}

/* Do */
.list-item {
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-2);
}
```
