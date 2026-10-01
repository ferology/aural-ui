# Color

## What this is

A 3-layer token system. Each layer exists for a reason — skipping a layer is how components end up unthemeable.

1. **Core palette** (`tokens/core/colors.css`) — raw color scales, each 50 (lightest) → 950 (darkest): `--neutral-*`, `--primary-*` (brand teal/green), `--secondary-*` (cyan/blue), `--success-*`, `--warning-*`, `--error-*`, `--info-*`, plus extended scales `--purple-*`, `--pink-*`, `--amber-*` for badges/item-type accents. Also defines `--primary-alpha-{5,8,10,12,15,20,30,40}` — opacity variants of `--color-primary` via `color-mix()`, used for hover/active tints instead of hand-rolled `rgba()`. These values **never change** across themes — a theme overrides semantic tokens, not core ones.
2. **Semantic roles** (`tokens/semantic/colors.css`) — intent-based tokens that map to core values: `--color-bg-*`, `--color-text-*`, `--color-border-*`, `--color-primary`/`--color-success`/etc. (plus their `-hover`, `-active`, `-muted` variants). Themes override _these_, not the core scale, so swapping a theme changes what "primary" or "bg-primary" resolves to without touching component code.
3. **Component-specific blocks** (also in `tokens/semantic/colors.css`) — one block per component (`--color-button-*`, `--color-input-*`, `--color-card-*`, `--color-badge-*`, `--color-dropdown-*`, `--color-accordion-*`, etc.), almost all of which just alias the general semantic tokens (e.g. `--color-card-bg: var(--color-bg-secondary)`). These exist so a component's color can be retargeted independently later without touching the general semantic layer.

Full value tables for all three layers: `specs/tokens/token-reference.md` (sections "Color (core palette)" and "Color (semantic)").

## When to use which

- **Writing component CSS → use the component-specific token if one exists** (`--color-button-primary-bg`, not `--color-primary`, inside `button.css`).
- **No component-specific token yet → use a general semantic token** (`--color-text-secondary`, `--color-border-subtle`, `--color-bg-elevated`).
- **Almost never reach for a raw core-palette token directly in `components/*.css`** (`--neutral-900`, `--primary-400`, `--error-500`). Semantic tokens exist precisely so theming works — a component hardcoded to `--neutral-900` stays that color even when a theme flips to light mode, which is the bug this layering prevents. `tokens/` and `themes/` are the only places exempt from this rule (see root `CLAUDE.md`).
- Need a translucent brand tint (hover/active backgrounds)? Use `--primary-alpha-N`, not a new hardcoded `rgba(...)`.

```css
/* Don't — reaches past semantic layer, breaks under any other theme */
.badge-custom {
  background: var(--primary-100);
  color: var(--neutral-900);
}

/* Do — themeable */
.badge-custom {
  background: var(--color-primary-muted);
  color: var(--color-text-inverse);
}
```

## How themes override this

A theme (`themes/*.css`) is a `:root` block that redefines **semantic** tokens only (`--color-bg-primary`, `--color-text-primary`, `--color-primary`, ...). Because every component reads semantic (or component-specific, which chains to semantic) tokens, loading a different theme file after `aural-ui.css` repaints the entire system without editing a single component file. Core palette values are the implementation detail behind the default theme — a custom theme is free to ignore the core scale entirely and point semantic tokens at its own hex values.

If you're adding a new color need in a component, first check whether an existing semantic or component-specific token already covers it (`specs/tokens/token-reference.md`) before adding a new one.
