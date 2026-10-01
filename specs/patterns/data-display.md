# Pattern: Data Display

Source: `docs/patterns.html` ("Dashboard Stats Cards", "Data Table with Actions", and "Empty State" patterns).

## What this covers

Three related ways of presenting collections/metrics inside `.card`: summary metric tiles, a full data table with row actions, and the empty state a collection shows when it has nothing to display. All are compositions of existing components — no new component files.

## Dashboard stat cards

A responsive grid of `.card`s (`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-4)`), one card per metric. Each card follows the same internal layout:

- Top row: label (`--text-sm`, `--color-text-secondary`) + large value (`--text-3xl`, `--font-bold`, `--color-text-primary`) on the left; a `40px` rounded icon swatch on the right, colored with the semantic tone that matches the metric (a muted tint bg + the matching solid icon color, e.g. success tone for revenue, primary tone for a people metric).

> **Note on source accuracy:** `docs/patterns.html`'s demo markup uses `--color-success-subtle` / `--color-primary-subtle` / `--color-info-subtle` / `--color-warning-subtle` for these icon-swatch backgrounds. **Those tokens do not exist** in `tokens/semantic/colors.css` — the actual muted-background tokens are `--color-success-muted`, `--color-primary-muted`, `--color-warning-muted`, `--color-info-muted`, `--color-error-muted` (see `specs/foundations/color.md` and `specs/tokens/token-reference.md`). Use the `-muted` tokens; don't copy the `-subtle` names out of the HTML doc verbatim.

- Bottom row: a small `badge` (`badge-success`/`badge-error`) with a trend icon (`trending-up`/`trending-down`) and percentage, plus a muted "vs last month" comparison label.

Convention: pick the icon-swatch and badge color by what the metric _means_ (success tone for growth/revenue, error tone for a declining number), not by position or card order.

## Data table with actions

A `.card` wrapping: a `.card-header` with a title and a primary "New X" action button; a zero-padding `.card-body` containing the `.table`; a `.card-footer` with a result count on the left and `Previous`/`Next` pagination buttons on the right.

Table conventions:

- First column is a bulk-select checkbox (header checkbox + one per row).
- Status is always a semantic `badge` (`badge-success`/`badge-warning`/`badge-info`/etc.), never plain colored text.
- Last column (narrow, no header label) holds a per-row `.dropdown` of actions (View / Edit / a `dropdown-divider` / a destructive "Delete" styled in `--color-error`). Destructive actions are always separated from non-destructive ones by a divider, not just ordered last.

## Empty state

Used wherever a collection/table/list has zero items. Structure: a centered `.card-body` with generous padding (`--space-12`), a large (80px) circular icon swatch (`--color-bg-tertiary` bg, a muted 40px icon), a short heading, one or two sentences of supporting copy (`max-width: 400px`, centered), and a primary call-to-action button that leads to creating the first item.

Tone conventions from the pattern's own usage notes: keep the copy positive/helpful ("you don't have any X yet... they'll appear here"), not discouraging, and always pair the empty state with a clear next action rather than leaving it as a dead end.

## Tokens used

`--space-3`/`--space-4`/`--space-6`/`--space-12` for internal spacing, `--text-sm`/`--text-3xl` for label/value contrast, `--font-bold` for metric values, `--radius-md` for icon swatches, and the semantic color families (`--color-success`/`--color-primary`/`--color-info`/`--color-warning` + their `-muted` backgrounds, NOT `-subtle` — see the note above) for both stat-card icon tinting and status badges.
