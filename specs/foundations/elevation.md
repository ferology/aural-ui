# Elevation

## What this is

`tokens/core/shadows.css` holds two distinct families that happen to live in the same file. Don't treat them as one scale — they serve different purposes.

### 1. Standard elevation shadows — `--shadow-*`

Soft, low-opacity black shadows that communicate stacking/depth, the conventional sense of "elevation":

- **Base scale**: `--shadow-xs` → `--shadow-sm` → `--shadow` (default) → `--shadow-md` → `--shadow-lg` → `--shadow-xl` → `--shadow-2xl`, plus `--shadow-inner` (inset) and `--shadow-none`.
- **Colored variants**: `--shadow-primary`, `--shadow-secondary`, `--shadow-success`, `--shadow-warning`, `--shadow-error` — a soft tinted shadow for emphasizing an element with its semantic color (e.g. a primary CTA button).
- **Directional**: `--shadow-top`/`--shadow-bottom`/`--shadow-left`/`--shadow-right` — single-direction shadows for elements like sticky headers/footers where a shadow should only read on one edge.

Use these for real elevation: cards, dropdowns, modals, popovers, anything that should look like it's physically sitting above the surface beneath it.

### 2. Decorative glow — `--glow-*`

A separate, much larger family: `--glow-sm/md/lg/xl/2xl` (white), `--glow-{primary,secondary,success,warning,error,info}-{sm,md,lg,xl}` (colored), `--glow-inner-*` (inset glow), `--glow-neon-{primary,secondary,error}` (multi-layer cyberpunk-style stacked glow, 4 layers each), and `--glow-depth-{sm,md,lg}` (multi-layer glow + shadow combined, for a 3D-lit look).

These are decorative/brand-expression effects (neon buttons, highlighted active states, themed accent treatments in the "neon"/"prismatic" themes) — not a depth cue. Don't reach for `--glow-*` where you mean ordinary card/dropdown elevation; use `--shadow-*` for that. Conversely, don't dial up `--shadow-*` opacity to fake a glow effect — use the purpose-built `--glow-*` token.

Full values for both families: `specs/tokens/token-reference.md` ("Shadow / Elevation" section).

## When to use which

```css
/* Elevation — a floating panel */
.dropdown-menu {
  box-shadow: var(--shadow-lg);
}

/* Decorative glow — a themed accent on an active/focused element */
.btn-neon:hover {
  box-shadow: var(--glow-neon-primary);
}
```

## Do / don't

```css
/* Don't — hand-rolled shadow duplicates an existing token */
.card {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

/* Do */
.card {
  box-shadow: var(--shadow-md);
}
```
