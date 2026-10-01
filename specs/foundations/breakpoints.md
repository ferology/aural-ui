# Breakpoints

## What this is

A canonical set of four responsive breakpoints used across `components/*.css`:

| Breakpoint | Value  |
| ---------- | ------ |
| sm         | 640px  |
| md         | 768px  |
| lg         | 1024px |
| xl         | 1280px |

These are **documented, not tokenized** — there is no `--breakpoint-sm` custom property. That's deliberate, not an oversight.

## Why there's no token

CSS custom properties cannot be used inside `@media` feature queries (`@media (max-width: var(--breakpoint-sm))` is invalid CSS — media query conditions are evaluated before the cascade resolves custom properties). Working around this requires a PostCSS plugin such as `postcss-custom-media`, which this project does not have in its build (`postcss.config.js`). Adding one is a real option someday, but until then a breakpoint "token" would be decorative — it couldn't actually be consumed inside a media query, which is the only place a breakpoint value is used.

## How consistency is enforced instead

Since the value has to be hardcoded at each `@media` call site, consistency is enforced by:

1. **Convention** — always use one of 640 / 768 / 1024 / 1280, never an arbitrary nearby number (e.g. not `700px` or `769px`).
2. **The audit script's warning tier** — `scripts/token-audit.js` has an `ALLOWED_BREAKPOINTS` check (`[640, 768, 1024, 1280]`) that flags any `@media (max-width: …)` / `(min-width: …)` using a non-standard pixel value as a warning. Warnings aren't blocking (see root `CLAUDE.md`), but a new non-standard breakpoint should be treated as a mistake to fix, not a warning to ignore.

## When to use which

Existing component usage (see `components/*.css`) skews heavily toward `max-width: 640px` (the most common breakpoint by far) for mobile-only overrides, with `768px` next for tablet, and `1024px`/`1280px` used sparingly for wide-layout adjustments. Match the existing pattern of mobile-first content with `max-width` overrides for smaller viewports unless the component you're editing already uses `min-width`.

```css
/* Do */
@media (max-width: 640px) {
  .card {
    padding: var(--space-4);
  }
}

/* Don't — arbitrary, non-standard value */
@media (max-width: 700px) {
  .card {
    padding: var(--space-4);
  }
}
```
