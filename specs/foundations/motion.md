# Motion

## What this is

`tokens/core/animations.css` has three layers:

1. **Durations** — `--duration-instant` (0ms) → `--duration-fast` (150ms) → `--duration-normal` (300ms) → `--duration-slow` (500ms) → `--duration-slower` (750ms) → `--duration-slowest` (1000ms).
2. **Easing functions** — `--ease-linear`, `--ease-in`, `--ease-out`, `--ease-in-out` (the default for most UI motion), `--ease-bounce`, `--ease-spring`.
3. **Composite transitions** — `--transition-fast`, `--transition-normal`, `--transition-slow`, `--transition-all-fast`, `--transition-all-normal`, `--transition-colors`, `--transition-transform`, `--transition-opacity`.

Full values: `specs/tokens/token-reference.md` ("Motion" section).

**Important: the composite `--transition-*` tokens are full shorthand values, not just a duration.** `--transition-fast` resolves to `var(--duration-fast) var(--ease-in-out)` (i.e. `150ms cubic-bezier(0.4, 0, 0.2, 1)`) — it already includes the easing curve. Some composites go further and include the property name too: `--transition-all-fast` is `all var(--duration-fast) var(--ease-in-out)`, and `--transition-colors` is a full multi-property `transition` declaration (`color`, `background-color`, `border-color`, each at `--duration-fast`/`--ease-in-out`). Don't write `transition: var(--transition-fast) var(--ease-out)` — that redundantly appends a second easing function after one the token already supplies. Pick one: use the composite as-is, or compose duration + easing yourself for a non-default curve.

## When to use it

- **Default/common case** → use a composite transition token directly: `transition: var(--transition-all-fast);` on a button, `transition: var(--transition-colors);` for a color-only hover (no layout shift).
- **Need a non-default easing curve** (e.g. a spring-feel drawer) → compose duration + easing yourself: `transition: transform var(--duration-slow) var(--ease-spring);`
- **GPU-composited properties** (`transform`, `opacity`) are preferred for perf-sensitive animations — `--transition-transform` and `--transition-opacity` exist specifically for this.

```css
.btn {
  transition: var(--transition-all-fast);
}

.drawer {
  transition: transform var(--duration-slow) var(--ease-spring);
}

.modal-overlay {
  transition: var(--transition-opacity);
}
```

## Do / don't

```css
/* Don't — raw ms value, and redundant easing after a composite that already has one */
.card {
  transition:
    all 150ms,
    var(--transition-fast) ease-out;
}

/* Do */
.card {
  transition: var(--transition-all-fast);
}
```

Always wrap meaningful motion in `@media (prefers-reduced-motion: reduce)` fallbacks at the component level (set `transition: none` / `animation: none`) — see `specs/foundations/accessibility.md`.
