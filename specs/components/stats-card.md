# Stats Card

## 1. Metadata

|                   |                                                                |
| ----------------- | -------------------------------------------------------------- |
| Name              | Stats Card                                                     |
| Category          | Data Display                                                   |
| Status            | Stable                                                         |
| CSS file          | `components/stats-card.css`                                    |
| Naming convention | BEM (`.aural-stats-card__value`, `.aural-stats-card--primary`) |

## 2. Overview

Stats Card displays a single key metric with visual emphasis — a label,
a large value, an optional icon, an optional trend indicator (up/down/
neutral), an optional progress bar or sparkline, and a footer
description/link — for dashboards and analytics summaries.

**When to use:**

- Dashboard KPI tiles (revenue, active users, conversion rate, etc.)
- Summary metrics that benefit from a trend indicator or progress-to-goal
- A grid of comparable at-a-glance numbers

**When NOT to use:**

- Detailed tabular/comparative data — use Table instead
- A metric that needs interactive drill-down beyond a single click-through — pair with a chart/modal, not a bigger Stats Card
- Non-numeric status — use Badge or Card instead

## 3. Anatomy

| Class                                                                           | Purpose                                                                                                                          |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `.aural-stats-card`                                                             | Root container — column flex, padding, bordered surface, hover elevation + primary border.                                       |
| `.aural-stats-card__header`                                                     | Top row: label (left) + icon (right).                                                                                            |
| `.aural-stats-card__label`                                                      | Small, secondary-colored metric name.                                                                                            |
| `.aural-stats-card__icon`                                                       | 40px rounded-square icon swatch; color/background follow the card's semantic variant.                                            |
| `.aural-stats-card--primary` / `--success` / `--warning` / `--error` / `--info` | Tints the icon swatch (and, for success/warning/error, the progress-bar fill / sparkline stroke) to the matching semantic color. |
| `.aural-stats-card__value`                                                      | The headline metric; `--large` / `--small` modifiers adjust font-size.                                                           |
| `.aural-stats-card__trend`                                                      | Small pill showing change direction; `--up` / `--down` / `--neutral` set its tint.                                               |
| `.aural-stats-card__trend-icon`                                                 | Small arrow/caret icon inside the trend pill.                                                                                    |
| `.aural-stats-card__footer`                                                     | Bottom row: trend (left) + description (right), top-bordered.                                                                    |
| `.aural-stats-card__description`                                                | Small muted footer text.                                                                                                         |
| `.aural-stats-card__link`                                                       | Inline "view more"-style link with an icon, gap widens on hover.                                                                 |
| `.aural-stats-card__progress` / `__progress-bar`                                | Thin progress track + animated fill for a metric with a visible limit/goal.                                                      |
| `.aural-stats-card__comparison` / `-label` / `-value`                           | Small "vs. last period"-style comparison row.                                                                                    |
| `.aural-stats-card__sparkline` / `-path` / `-area`                              | Inline SVG trend line + filled area beneath the headline value.                                                                  |
| `.aural-stats-card--sm` / `--lg`                                                | Compact / spacious padding, value size, and icon size.                                                                           |
| `.aural-stats-card--horizontal`                                                 | Row layout (icon/value left, footer right) instead of the default stacked column.                                                |
| `.aural-stats-card--clickable`                                                  | Pointer cursor, lift-on-hover, press-down-on-active, visible focus ring.                                                         |
| `.aural-stats-card--loading`                                                    | Shimmering skeleton gradient over the value/label, reduced opacity, no pointer events.                                           |

## 4. Tokens used

| Token                                                                                                                                                        | Used for                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `--color-bg-secondary` / `--color-bg-tertiary` / `--color-bg-hover`                                                                                          | Card background, icon/progress-track/trend-neutral background, loading shimmer                   |
| `--color-border-medium` / `--color-border-subtle`                                                                                                            | Card border, horizontal-layout footer divider                                                    |
| `--color-primary` / `--color-primary-hover` / `--primary-alpha-10`                                                                                           | Hover border, link hover, `--primary` variant icon tint                                          |
| `--color-success` / `--color-success-bg`, `--color-warning` / `--color-warning-bg`, `--color-error` / `--color-error-bg`, `--color-info` / `--color-info-bg` | Semantic variant icon/progress/sparkline color + background pairs                                |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary`                                                                                  | Value text, label/comparison text, description/comparison-label text                             |
| `--font-medium` / `--font-semibold` / `--font-bold`                                                                                                          | Label weight, trend/comparison weight, headline value weight                                     |
| `--leading-tight` / `--leading-relaxed`                                                                                                                      | Label / description line-height                                                                  |
| `--text-xs` / `--text-sm` / `--text-2xl` / `--text-3xl` / `--text-4xl` / `--text-5xl`                                                                        | Trend/description size, comparison-value size, value size across default/`--sm`/`--large`/`--lg` |
| `--radius-sm` / `--radius-md` / `--radius-lg` / `--radius-full`                                                                                              | Trend pill / loading shimmer, icon swatch, card corners, progress bar                            |
| `--shadow-md` / `--shadow-lg`                                                                                                                                | Hover elevation, clickable-hover elevation                                                       |
| `--size-6` / `--size-12` / `--size-16` / `--size-20` / `--size-28` / `--size-32` / `--size-40` / `--size-56`                                                 | Icon/trend-icon/progress-bar/sparkline dimensions across default/`--sm`/`--lg`                   |
| `--space-0-5` … `--space-8`                                                                                                                                  | Gaps and padding across header/trend/footer and size variants                                    |
| `--transition-all-fast`                                                                                                                                      | Hover/active transitions                                                                         |

**New tokens added while migrating this file:** none — every raw error
value matched an existing `--size-*`/`--space-*` token exactly.

**Warnings left as-is (non-blocking category):** `transition: width 0.5s
ease` (progress-bar fill) and `animation: ... 1.5s ease-in-out infinite`
(loading shimmer) — raw durations are a non-blocking audit category
repository-wide (see e.g. `components/accordion.css`), left unconverted
rather than retrofitted to `--duration-*` as a drive-by change.

## 5. Props/API

Stats Card is pure CSS/markup — there is no JS-driven API. The documented
story (`stories/StatsCard.stories.ts`) models `variant`, `label`, `value`,
`icon`, `hasIcon`, `hasTrend`, `trendDirection`, `trendValue`,
`description`, and `hasProgress` as controls that map to the classes and
content slots in §3.

## 6. States

| State               | Trigger                                                  | Effect                                                                                       |
| ------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Default             | —                                                        | Static card, no lift.                                                                        |
| Hover               | `.aural-stats-card:hover`                                | Border turns primary, `--shadow-md` elevation.                                               |
| Clickable hover     | `.aural-stats-card--clickable:hover`                     | Lifts (`translateY(-2px)`), `--shadow-lg` elevation.                                         |
| Clickable active    | `.aural-stats-card--clickable:active`                    | Lift resets to `translateY(0)`.                                                              |
| Focus               | `.aural-stats-card--clickable:focus-visible`             | 2px `--color-primary` outline, 2px offset.                                                   |
| Loading             | `.aural-stats-card--loading`                             | Value/label become a shimmering animated gradient (text transparent), interactions disabled. |
| Reduced motion      | `prefers-reduced-motion: reduce`                         | Card/progress-bar/clickable transitions and the loading shimmer animation are disabled.      |
| Responsive (mobile) | `.aural-stats-card--horizontal` under `max-width: 640px` | Switches back to a stacked column layout.                                                    |

## 7. Code example

```html
<div class="aural-stats-card aural-stats-card--success">
  <div class="aural-stats-card__header">
    <span class="aural-stats-card__label">Monthly Revenue</span>
    <div class="aural-stats-card__icon">
      <i data-lucide="dollar-sign" aria-hidden="true"></i>
    </div>
  </div>
  <div class="aural-stats-card__value">$48,290</div>
  <div class="aural-stats-card__progress">
    <div
      class="aural-stats-card__progress-bar"
      style="width: 72%"
      role="progressbar"
      aria-valuenow="72"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
  <div class="aural-stats-card__footer">
    <span class="aural-stats-card__trend aural-stats-card__trend--up">
      <i data-lucide="trending-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
      12.4%
    </span>
    <span class="aural-stats-card__description">vs. last month</span>
  </div>
</div>
```

Accessibility notes (from `stories/StatsCard.stories.ts`):

- All decorative icons use `aria-hidden="true"`.
- Progress bars include `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`.
- Semantic color variants don't rely on color alone — pair with the trend icon and text (e.g. "12.4%" plus an up-arrow icon, not color alone).

## 8. Cross-references

- **Badge** — semantic color variants (`--primary`/`--success`/`--warning`/`--error`/`--info`) follow the same naming pattern as Badge's variants.
- **Card** — Stats Card is a specialized, metric-focused sibling of Card; reach for Card when the content isn't a single headline number.
- **Table** — for row-by-row comparison of many metrics, use Table instead of a grid of Stats Cards.
