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

## Status colors: `-solid`, `-text`, and the 500 shades

The 500 shades (`--color-success`, `--color-error`, `--color-warning`, `--color-info`) are too light to carry white text (2.15-3.76:1) and too dark/saturated to read as text on every surface (2.2-3.8:1 on white). They remain as indicator/accent colors (borders, dots, icons next to text), but text and filled backgrounds use dedicated roles:

| Role           | Tokens                                       | Use for                                                                                                                                                           | Rule                                                                                                                                                                      |
| -------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Solid fill     | `--color-{success,error,info,warning}-solid` | Backgrounds that carry text: chips, solid alerts, snackbars, stepper/timeline markers, count badges, danger button                                                | Always pair with `--color-text-on-{success,error,info,warning}`. Defaults: success-700, error-600, info-600, warning-500 (warning carries dark `--color-text-on-warning`) |
| Status text    | `--color-{success,error,warning,info}-text`  | Status text and icons on a page/card surface: validation messages, alert titles/icons, trend values, rating/slider value text                                     | >= 4.5:1 on `--color-bg-primary`/`-secondary`/`-elevated`. Default 400 shades (dark); `themes/light.css` and `themes/minimal.css` use 700/600 shades                      |
| Control border | `--color-control-border`                     | Boundary of form controls (input, checkbox, radio, select) via `--color-input-border`, `--color-checkbox-border`, `--color-radio-border`, `--color-select-border` | >= 3:1 against the surface (WCAG 1.4.11). `--color-border-subtle`/`-medium` are decorative only (about 1.2:1) and must not be the only boundary of a control              |

```css
/* Don't — white on success-500 is 2.28:1; success-500 text is below 4.5:1 on light themes */
.my-pill {
  background: var(--color-success);
  color: white;
}
.my-msg {
  color: var(--color-success);
}

/* Do */
.my-pill {
  background: var(--color-success-solid);
  color: var(--color-text-on-success);
} /* 5.02:1 */
.my-msg {
  color: var(--color-success-text);
}
```

Text on any `--color-primary` fill (chips, pill tabs, active pagination, progress fills, calendar selection) uses `--color-text-on-primary`, which follows `--color-button-primary-text`, so it is dark in the dark theme and white in the light theme. Never hard-code `color: white` on `--color-primary`.

Related defaults: `--color-button-primary-text` is `var(--color-bg-primary)` (dark text on the light brand green; `themes/light.css` overrides it to white), `--color-button-danger-bg` is `--color-error-solid` with hover `--error-700`, and `--color-text-tertiary`/`--color-text-muted` are neutral-400 so they stay readable (>= 4.5:1).

## Verifying contrast

`npm run audit:contrast` (run `npm run build:css` first) loads `dist/aural-ui.css` plus each theme in a real browser, resolves the tokens, and checks: text tokens (primary/secondary/tertiary/muted) and `-text` status tokens >= 4.5:1 on all three surfaces, `--color-control-border` >= 3:1, the primary link color, primary/danger button text, `--color-text-on-primary` on `--color-primary`, `--color-text-on-*` on the matching `-solid` fill, and nav-active text. It exits 1 on any failure. All 11 themes pass; rerun it after touching `tokens/semantic/colors.css` or any `themes/*.css`.

## How themes override this

A theme (`themes/*.css`) is a `:root` block that redefines **semantic** tokens only (`--color-bg-primary`, `--color-text-primary`, `--color-primary`, ...). Because every component reads semantic (or component-specific, which chains to semantic) tokens, loading a different theme file after `aural-ui.css` repaints the entire system without editing a single component file. Core palette values are the implementation detail behind the default theme — a custom theme is free to ignore the core scale entirely and point semantic tokens at its own hex values.

If you're adding a new color need in a component, first check whether an existing semantic or component-specific token already covers it (`specs/tokens/token-reference.md`) before adding a new one.

A theme must also define passing values for `--color-*-text`, `--color-control-border`, and `--color-text-on-*` whenever the inherited defaults would fail against its own surfaces (a light theme cannot inherit the 400-shade status text), and must pass `npm run audit:contrast`. See `THEMES.md`.
