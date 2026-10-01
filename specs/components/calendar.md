# Calendar

## 1. Metadata

|                   |                                                                                                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name              | Calendar                                                                                                                                                                                                                                                        |
| Category          | Forms                                                                                                                                                                                                                                                           |
| Status            | Stable (CSS/JS exist and are complete) — **documentation is new as of this spec; see the coverage note below.**                                                                                                                                                 |
| CSS file          | `components/calendar.css`                                                                                                                                                                                                                                       |
| Naming convention | BEM (`.aural-calendar__day--selected`). The codebase's `CLAUDE.md` only explicitly calls out `date-picker.css` and `combobox.css` as its BEM exceptions, but `calendar.css` is written in the same convention — matched here rather than "fixed" to kebab-case. |

## 2. Overview

> **Coverage note:** unlike Combobox and Date Picker, Calendar has **no
> Storybook story** (`stories/*.stories.ts`) and **no docs page**
> (`docs/components/calendar.html`) anywhere in the repo as of this
> writing. Everything below is derived directly from `components/calendar.css`
> and its JS counterpart `Aural.initCalendar` in `javascript/index.js` —
> real anatomy, real states, real API. The **"When to use vs. Date
> Picker" guidance in this section is a best-effort inference from
> comparing the two components' structure and JS, not a sourced fact** —
> there is no existing design doc, PR description, or story to confirm
> the intended product usage. Treat it as a reasonable starting point to
> revise once this component gets real documentation, not as settled
> guidance.

Calendar is a full month-view grid component: month/year navigation
(prev/next, and optional `<select>` dropdowns for jumping directly to a
month or year), a 7-column day grid with per-day state styling, a
Today/Clear footer, and a multi-month grid layout for showing several
months at once. Unlike Date Picker, there's no input field or popup —
`.aural-calendar` renders its grid directly wherever it's placed in the
page (or inline/borderless via `.aural-calendar--inline`).

**When to use (inferred):**

- The calendar grid itself is the primary content, always visible — e.g.
  an availability/booking dashboard, an events calendar, or an inline
  date picker embedded directly in a page layout rather than behind a
  popup trigger
- You need the `.aural-calendar__day--has-event` dot indicator or
  `--weekend` styling, which Date Picker's day grid doesn't define
- You need several months visible side-by-side (`.aural-calendar--multi`
  - `__months-grid`)

**When NOT to use (inferred):**

- A compact form field where the calendar should stay hidden until the
  user interacts with an input — use Date Picker instead
  (`specs/components/date-picker.md`)
- Selecting a date **range** — `Aural.initCalendar` only tracks a single
  `selectedDate`, with no range-selection day modifiers defined in this
  file (compare Date Picker's `--range-start`/`--range-end`/`--in-range`,
  which Calendar has no equivalent of)

## 3. Anatomy

| Class                                     | Purpose                                                                                                                                                     |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.aural-calendar`                         | Root container — bordered panel, `max-width: 400px`, shadow.                                                                                                |
| `.aural-calendar--inline`                 | Modifier stripping the background/border/shadow/padding, for embedding without a panel chrome.                                                              |
| `.aural-calendar--multi`                  | Modifier removing `max-width` for a multi-month grid layout.                                                                                                |
| `.aural-calendar__header`                 | Flex row: prev button, month/year label (or selectors), next button.                                                                                        |
| `.aural-calendar__nav-button`             | Prev/next month button, `data-action="prev"`/`"next"`; has its own `:disabled` styling (unlike Date Picker's nav button).                                   |
| `.aural-calendar__current-month`          | Centered "Month YYYY" label (hidden when selectors are shown).                                                                                              |
| `.aural-calendar__month-year-selectors`   | Wraps the optional month/year `<select>` pair, shown when `showMonthYearSelectors: true`.                                                                   |
| `.aural-calendar__select`                 | A single month or year `<select data-type="month"\|"year">`.                                                                                                |
| `.aural-calendar__weekdays` / `__weekday` | 7-column grid of weekday abbreviations.                                                                                                                     |
| `.aural-calendar__days`                   | 7-column grid of day buttons.                                                                                                                               |
| `.aural-calendar__day`                    | A single day cell/button, `position: relative` (for the event-dot pseudo-element).                                                                          |
| `.aural-calendar__day--other-month`       | Leading/trailing fill day from the adjacent month, dimmed, `tabindex="-1"`.                                                                                 |
| `.aural-calendar__day--today`             | Today's date — primary-colored outline, semibold.                                                                                                           |
| `.aural-calendar__day--selected`          | The chosen date — solid primary background, white text.                                                                                                     |
| `.aural-calendar__day--disabled`          | Outside `minDate`/`maxDate` or in `disabledDates` — not clickable.                                                                                          |
| `.aural-calendar__day--weekend`           | Saturday/Sunday, shown when `highlightWeekends` is on (default `true`) — tints text `--color-warning`.                                                      |
| `.aural-calendar__day--has-event`         | Adds a small dot indicator (`::after`) under the day number, for dates present in the `events` option; the dot turns white when combined with `--selected`. |
| `.aural-calendar__footer`                 | Row holding the Today/Clear action buttons.                                                                                                                 |
| `.aural-calendar__footer-button`          | Default (outlined) footer action, `data-action="today"`/`"clear"`.                                                                                          |
| `.aural-calendar__footer-button--primary` | Solid-primary variant of a footer action.                                                                                                                   |
| `.aural-calendar__months-grid`            | `repeat(auto-fit, minmax(320px, 1fr))` grid for `--multi` mode.                                                                                             |
| `.aural-calendar--sm` / `--lg`            | Size modifiers — adjusts container `max-width`/padding, day cell size, and `__current-month` font-size.                                                     |

## 4. Tokens used

| Token                                                                                                 | Used for                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--size-44`                                                                                           | Nav button / footer button / default day cell min dimensions                                                                                                                 |
| `--size-36` / `--size-52` / `--size-40`                                                               | Day cell min dimensions at `--sm` / `--lg` / mobile (`max-width: 640px`)                                                                                                     |
| `--space-80`                                                                                          | `--sm` container `max-width` (320px)                                                                                                                                         |
| `--size-480`                                                                                          | `--lg` container `max-width` (480px) — part of the shared "Container / Overlay Width Scale" in `tokens/core/size.css`, reused verbatim from Modal/Dialog/Drawer/Popover/etc. |
| `--space-1`                                                                                           | Event-dot size and offset (4px)                                                                                                                                              |
| `--primary-alpha-20`                                                                                  | Day hover border tint (fixed — see note below)                                                                                                                               |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary` / `--color-text-disabled` | Text color by context/state                                                                                                                                                  |
| `--color-bg-secondary` / `--color-bg-primary` / `--color-bg-hover`                                    | Panel, `__select`, and hover backgrounds                                                                                                                                     |
| `--color-border-medium` / `--color-border-subtle`                                                     | Panel border, footer divider                                                                                                                                                 |
| `--color-primary` / `--color-primary-hover`                                                           | Selected day, event dot, primary footer button, focus/hover accents                                                                                                          |
| `--color-warning`                                                                                     | Weekend day text tint                                                                                                                                                        |
| `--radius-md` / `--radius-lg`                                                                         | Corner rounding                                                                                                                                                              |
| `--shadow-md`                                                                                         | Panel elevation (non-inline)                                                                                                                                                 |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg` / `--text-xl`                                 | Font sizes by context/size variant                                                                                                                                           |
| `--font-medium` / `--font-semibold`                                                                   | Label/button/selected-day weight                                                                                                                                             |
| `--space-1` – `--space-6`                                                                             | Padding and gaps throughout                                                                                                                                                  |
| `--transition-all-fast`                                                                               | Most hover/focus transitions                                                                                                                                                 |

**New tokens added while migrating this file:** none — `--size-480` and
`--space-80` already existed as exact matches for this file's `--lg`/`--sm`
container widths (`tokens/core/size.css`'s header comment already lists
`calendar` among the consumers of that width scale, added by the agent
that migrated Modal/Dialog/Drawer).

**Bug fix (not a token addition):** `.aural-calendar__day:hover`
referenced `var(--color-primary-alpha-20)`, an undefined custom property
(the real token is `--primary-alpha-20)`. Same bug, same fix, as the
identical pattern in `date-picker.css` — see `specs/components/date-picker.md`
§4 for the full explanation. Corrected to `var(--primary-alpha-20)`.

## 5. Props/API

Calendar is markup + CSS classes, driven by a JS API in
`javascript/index.js` (the global `Aural` object). It is **not**
auto-initialized by `Aural.init()` — call `Aural.initCalendar()` per
instance.

`Aural.initCalendar(calendarId, options)`:

| Option                   | Type                           | Description                                                      |
| ------------------------ | ------------------------------ | ---------------------------------------------------------------- |
| `selectedDate`           | Date-parseable                 | Initially-selected date; also seeds the initial displayed month. |
| `minDate` / `maxDate`    | Date-parseable                 | Selectable date range.                                           |
| `disabledDates`          | array                          | Specific dates to disable.                                       |
| `highlightWeekends`      | boolean (default `true`)       | Toggles `--weekend` styling on Sat/Sun.                          |
| `events`                 | Date-parseable[]               | Dates that get the `--has-event` dot indicator.                  |
| `showMonthYearSelectors` | boolean (default `false`)      | Swaps the static month label for `<select>` dropdowns.           |
| `onChange`               | `(date: Date \| null) => void` | Called on day selection and on Clear.                            |
| `onMonthChange`          | `(date: Date) => void`         | Called on prev/next navigation and selector changes.             |

Returns an instance with:

| Method                          | Description                                                                                               |
| ------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `getSelectedDate()`             | Returns the currently selected `Date`, or `null`.                                                         |
| `setSelectedDate(date \| null)` | Programmatically sets (or clears) the selection; also jumps the displayed month to match a non-null date. |
| `getCurrentMonth()`             | Returns the currently displayed month as a `Date`.                                                        |
| `goToMonth(year, month)`        | Jumps to an arbitrary month without changing the selection.                                               |
| `refresh()`                     | Re-renders with current state (e.g. after externally mutating `events`/`disabledDates`).                  |

The Today footer button sets the selection _and_ jumps to the current
month; Clear only clears the selection (month stays put).

## 6. States

| State               | Trigger                                                         | Effect                                                                                                                                         |
| ------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Today               | `.aural-calendar__day--today`                                   | Primary-colored border, semibold.                                                                                                              |
| Selected            | `.aural-calendar__day--selected`                                | Solid primary background, white text; event dot (if present) turns white too.                                                                  |
| Disabled day        | `.aural-calendar__day--disabled`                                | Muted text, `cursor: not-allowed`, excluded from the hover selector.                                                                           |
| Other-month day     | `.aural-calendar__day--other-month`                             | 40% opacity, tertiary text, `tabindex="-1"` (not keyboard-reachable).                                                                          |
| Weekend             | `.aural-calendar__day--weekend`                                 | Text tinted `--color-warning` (when `highlightWeekends` is on).                                                                                |
| Has event           | `.aural-calendar__day--has-event`                               | Small dot under the day number via `::after`.                                                                                                  |
| Day hover           | `.aural-calendar__day:hover:not(--disabled):not(--other-month)` | Background tint + primary border/text.                                                                                                         |
| Day focus-visible   | `.aural-calendar__day:focus-visible`                            | 2px primary outline, offset 2px.                                                                                                               |
| Nav button disabled | `.aural-calendar__nav-button:disabled`                          | 40% opacity, `cursor: not-allowed`, hover styling suppressed — distinct from Date Picker, whose nav button has no disabled styling of its own. |
| Reduced motion      | `prefers-reduced-motion: reduce`                                | Day/nav/footer/select transitions are all disabled.                                                                                            |

**Responsive:** below `640px`, the container drops its `max-width` cap
(`max-width: 100%`), day cells shrink to `var(--size-40)`, the
current-month label drops to `var(--text-base)`, and the multi-month
grid collapses to a single column. Calendar has no `(pointer: coarse)`
touch-target override — unlike Date Picker, its day cells stay at their
default size on touch devices.

## 7. Code example

> No existing story or doc page to draw from — this example is
> constructed directly from the CSS class contract and the
> `initCalendar` option/return shape documented above, not copied from
> an existing source.

```html
<div class="aural-calendar" id="events-calendar">
  <div class="aural-calendar__header">
    <button class="aural-calendar__nav-button" data-action="prev" aria-label="Previous month">
      <svg><!-- chevron-left --></svg>
    </button>
    <div class="aural-calendar__current-month">January 2026</div>
    <button class="aural-calendar__nav-button" data-action="next" aria-label="Next month">
      <svg><!-- chevron-right --></svg>
    </button>
  </div>
  <div class="aural-calendar__weekdays">
    <div class="aural-calendar__weekday">Su</div>
    <!-- ...Mo–Sa... -->
  </div>
  <div class="aural-calendar__days">
    <!-- Days rendered by Aural.initCalendar -->
  </div>
  <div class="aural-calendar__footer">
    <button class="aural-calendar__footer-button" data-action="today">Today</button>
    <button class="aural-calendar__footer-button" data-action="clear">Clear</button>
  </div>
</div>

<script>
  Aural.initCalendar('events-calendar', {
    highlightWeekends: true,
    events: ['2026-01-15', '2026-01-22'],
    onChange: (date) => console.log('Selected:', date),
    onMonthChange: (date) => console.log('Viewing month:', date),
  });
</script>
```

## 8. Cross-references

- **Date Picker** — the compact, input-triggered counterpart; see
  `specs/components/date-picker.md` §2 for the (also best-effort) "when
  to use which" comparison from the other side.
- **Date Range Picker** (`components/date-range-picker.css`, out of
  scope for this pass) — reuses the same month-grid structure for
  two-date range selection; Calendar itself has no range-selection day
  modifiers.
- **Time Picker** (`components/time-picker.css`, out of scope) — the
  time-of-day counterpart.
- **Badge** — a `.badge-warning`/dot pattern could substitute for the
  built-in `--has-event` dot indicator if a richer event marker is
  needed; not currently composed together anywhere in this codebase.
