# Typography

## What this is

Four token families in `tokens/core/typography.css`, all used directly (no semantic typography layer):

- **Font families** — `--font-sans` (system UI stack, the default for all text), `--font-serif`, `--font-mono` (code blocks, inline code).
- **Font sizes** — `--text-xs` through `--text-9xl` (12px → 128px), a standard type scale in rem.
- **Font weights** — `--font-thin` (100) through `--font-black` (900), named rather than numeric so intent survives a typeface swap.
- **Line heights** — `--leading-none` (1) through `--leading-loose` (2).
- **Letter spacing** — `--tracking-tighter` (-0.05em) through `--tracking-widest` (0.1em).

Full scale values: `specs/tokens/token-reference.md` ("Typography" section).

## When to use it

Any text styling in a component: `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`. There's no semantic indirection here (no `--text-body` or `--font-heading`) — components reference the core scale directly, e.g. `font-size: var(--text-sm)`, `font-weight: var(--font-semibold)`.

```css
.card-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--color-text-primary); /* color comes from the color foundation, not here */
}
```

Reach for `--tracking-*` mainly on uppercase/small-caps labels (badges, eyebrow text, all-caps buttons) where tightened or widened tracking improves legibility — most body copy should stay at `--tracking-normal`.

## Do / don't

```css
/* Don't */
.label {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
}

/* Do — snaps to the nearest scale step rather than inventing a one-off */
.label {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
}
```
