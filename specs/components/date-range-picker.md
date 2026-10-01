# Date Range Picker

## 1. Metadata

|                   |                                                                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name              | Date Range Picker                                                                                                                                                                            |
| Category          | Forms                                                                                                                                                                                        |
| Status            | Stable                                                                                                                                                                                       |
| CSS file          | `components/date-range-picker.css`                                                                                                                                                           |
| Naming convention | BEM (`.aural-date-range-picker__day--range-start`) — **not** flat kebab-case, matching its sibling `date-picker.css`. One of the BEM exceptions called out in `CLAUDE.md`; don't convert it. |

## 2. Overview

Date Range Picker is a text-input pair (start/end) that opens a dropdown
containing two side-by-side month calendars for selecting a start and end
date in one flow, plus optional quick-select presets (e.g. "Last 7 Days").
It's the two-date counterpart to Date Picker and reuses that component's
day-cell visual language (today/disabled/other-month states) plus its own
range-specific modifiers (`--range-start`, `--range-end`, `--in-range`).
JS behavior (open/close, dual-month rendering, range tracking, presets)
lives in `javascript/index.js` (`Aural.initDateRangePicker`).

**When to use:**

- Filtering analytics/reports/logs by a date range
- Booking/reservation flows needing both a start and end date (hotel
  check-in/out, car rental, vacation planning)
- Event scheduling spanning multiple days, or report-generation UIs that
  take a date-range parameter

**When NOT to use:**

- Only one date is needed — use Date Picker; don't force users to pick the
  same date twice
- Only a few fixed periods are valid (quarters, semesters) — use a
  Dropdown/Select or radio group instead
- A time-of-day value is needed, not a date — use Time Picker

## 3. Anatomy

| Class                                                        | Purpose                                                                                   |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `.aural-date-range-picker`                                   | Root container, relative-positioned, full width.                                          |
| `.aural-date-range-picker__input-wrapper`                    | Flex row holding the inputs and the calendar icon.                                        |
| `.aural-date-range-picker__inputs`                           | Flex row holding the two date inputs and their separator.                                 |
| `.aural-date-range-picker__input`                            | A single start/end text field (`data-range="start"` / `"end"`), click opens the dropdown. |
| `.aural-date-range-picker__separator`                        | "to" label between the two inputs.                                                        |
| `.aural-date-range-picker__icon`                             | Calendar glyph, absolutely positioned at the row's right edge.                            |
| `.aural-date-range-picker__dropdown`                         | The floating panel — hidden (`opacity: 0; visibility: hidden`) until `--open`.            |
| `.aural-date-range-picker__dropdown--open`                   | Modifier that reveals the dropdown.                                                       |
| `.aural-date-range-picker__calendars`                        | Flex row holding the left/right month calendars side by side.                             |
| `.aural-date-range-picker__calendar`                         | One month's calendar (`data-calendar="left"` / `"right"`).                                |
| `.aural-date-range-picker__calendar-header`                  | Row: prev button, month/year label, next button.                                          |
| `.aural-date-range-picker__nav-button`                       | Prev/next month button, `data-action="prev"`/`"next"`, disableable.                       |
| `.aural-date-range-picker__month-label`                      | Centered "Month YYYY" label.                                                              |
| `.aural-date-range-picker__weekdays` / `__weekday`           | 7-column grid of weekday abbreviations.                                                   |
| `.aural-date-range-picker__days`                             | 7-column grid of day cells.                                                               |
| `.aural-date-range-picker__day`                              | A single day cell/button.                                                                 |
| `.aural-date-range-picker__day--other-month`                 | Day belongs to the previous/next month — dimmed.                                          |
| `.aural-date-range-picker__day--today`                       | Today's date — primary-colored outline, semibold.                                         |
| `.aural-date-range-picker__day--disabled`                    | Outside the allowed range — not clickable, muted.                                         |
| `.aural-date-range-picker__day--range-start` / `--range-end` | The two boundary dates — solid primary background, square-off the outer corner.           |
| `.aural-date-range-picker__day--in-range`                    | Dates between start and end — tinted fill, square corners (continuous band look).         |
| `.aural-date-range-picker__footer`                           | Row holding footer action buttons.                                                        |
| `.aural-date-range-picker__footer-button`                    | Default (outlined) footer action.                                                         |
| `.aural-date-range-picker__footer-button--primary`           | Solid-primary variant of a footer action (e.g. "Apply").                                  |
| `.aural-date-range-picker__presets`                          | Left-hand rail of quick-select preset buttons, bordered on its right edge.                |
| `.aural-date-range-picker__preset-label`                     | Uppercase "Presets" section label.                                                        |
| `.aural-date-range-picker__preset-list`                      | Column of preset buttons.                                                                 |
| `.aural-date-range-picker__preset-button`                    | A single preset (e.g. "Last 7 Days").                                                     |
| `.aural-date-range-picker__preset-button--active`            | The currently-applied preset — tinted background, primary border/text.                    |

## 4. Tokens used

| Token                                                                                                 | Used for                                                                               |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `--size-20`                                                                                           | Calendar icon box                                                                      |
| `--size-44`                                                                                           | Nav button / day cell / footer button min dimensions (44px touch target)               |
| `--space-40`                                                                                          | Presets rail `min-width` (160px)                                                       |
| `--z-dropdown`                                                                                        | Dropdown panel stacking (was a hardcoded `1000`)                                       |
| `--duration-moderate`                                                                                 | Dropdown fade/slide transition (was a hardcoded `0.2s`)                                |
| `--primary-alpha-20`                                                                                  | Day hover border tint, in-range day fill, preset hover/active tint (see Bug fix below) |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary` / `--color-text-disabled` | Text color by context/state                                                            |
| `--color-bg-secondary` / `--color-bg-hover`                                                           | Input/dropdown backgrounds and hover state                                             |
| `--color-border-medium` / `--color-border-subtle`                                                     | Borders, footer/presets dividers                                                       |
| `--color-primary` / `--color-primary-hover`                                                           | Range-boundary days, primary footer button, focus/hover accents                        |
| `--radius-md` / `--radius-lg`                                                                         | Corner rounding                                                                        |
| `--shadow-lg`                                                                                         | Dropdown elevation                                                                     |
| `--text-sm` / `--text-base`                                                                           | Font sizes by context                                                                  |
| `--font-medium` / `--font-semibold`                                                                   | Label/button/range-boundary weight                                                     |
| `--space-1` – `--space-6`                                                                             | Padding and gaps throughout                                                            |
| `--transition-all-fast`                                                                               | Most hover/focus transitions                                                           |

**New tokens added while migrating this file:** none. `--duration-moderate`
(200ms) existed by the time this file was audited, added by a
concurrently-running sibling migration for the same widely-repeated
`0.2s ease` popup-transition idiom this file also used — it's an exact
match for this file's hardcoded `0.2s`.

**Bug fix (not a token addition):** `.aural-date-range-picker__day:hover`,
`__day--in-range`, and `__preset-button:hover`/`--active` all referenced
`var(--color-primary-alpha-20)` — a custom property that **doesn't exist
anywhere in the token layer** (the real token is `--primary-alpha-20`, no
`color-` prefix; compare `--color-toggle-track-hover: var(--primary-alpha-20)`
in `tokens/semantic/colors.css`). With no fallback supplied, each
`border-color`/`background` declaration using it was invalid and silently
dropped — meaning the day-hover border tint, the in-range band fill, and
the preset hover/active tint were **not rendering at all** before this
fix. Corrected to `var(--primary-alpha-20)` in all four places — this
restores intended behavior, it isn't a value change. This is the exact
same bug already documented and fixed in `specs/components/date-picker.md`
for `.aural-date-picker__day:hover` and `.aural-calendar__day:hover` — it
evidently originated from copy-pasting the day-cell styling between the
single-date and range pickers before either was corrected.

## 5. Props/API

Date Range Picker is markup + CSS classes, driven by a JS API in
`javascript/index.js` (the global `Aural` object). It is **not**
auto-initialized by `Aural.init()` — call `Aural.initDateRangePicker()`
per instance.

`Aural.initDateRangePicker(pickerId, options)`:

| Option          | Type                                                          | Description                                                    |
| --------------- | ------------------------------------------------------------- | -------------------------------------------------------------- |
| `startDate`     | Date-parseable                                                | Initial start date.                                            |
| `endDate`       | Date-parseable                                                | Initial end date.                                              |
| `minDate`       | Date-parseable                                                | Earliest selectable date.                                      |
| `maxDate`       | Date-parseable                                                | Latest selectable date.                                        |
| `disabledDates` | array                                                         | Specific dates to disable.                                     |
| `presets`       | array                                                         | Quick-select preset definitions rendered into `__preset-list`. |
| `onChange`      | `(range: { start: Date \| null, end: Date \| null }) => void` | Called when the range changes.                                 |

Returns an instance with:

| Method                 | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| `getRange()`           | Returns `{ start, end }` (each a `Date` or `null`).            |
| `setRange(start, end)` | Programmatically sets the range and re-renders both calendars. |
| `clear()`              | Clears both dates and re-renders.                              |

Clicking a day toggles between setting the start and end date
(`selectingStart` internal flag); the two calendars (`left`/`right`,
`data-calendar`) are kept one month apart and re-synced whenever the range
changes.

## 6. States

| State               | Trigger                                                                  | Effect                                                                            |
| ------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Closed (default)    | `.aural-date-range-picker__dropdown` without `--open`                    | `opacity: 0; visibility: hidden`, lifted `translateY(-8px)`.                      |
| Open                | `.aural-date-range-picker__dropdown--open`                               | Fades/slides in to resting position.                                              |
| Hover (input)       | `.aural-date-range-picker__input:hover`                                  | Border turns primary, background shifts to `--color-bg-hover`.                    |
| Focus (input)       | `.aural-date-range-picker__input:focus`                                  | 2px primary outline, offset 2px.                                                  |
| Today               | `.aural-date-range-picker__day--today`                                   | Primary-colored border, semibold.                                                 |
| Range start / end   | `.aural-date-range-picker__day--range-start` / `--range-end`             | Solid primary background, white text, semibold; outer corner rounded.             |
| In range            | `.aural-date-range-picker__day--in-range`                                | Tinted fill (`--primary-alpha-20`), square corners.                               |
| Disabled day        | `.aural-date-range-picker__day--disabled`                                | Muted text, `cursor: not-allowed`, 30% opacity.                                   |
| Other-month day     | `.aural-date-range-picker__day--other-month`                             | 40% opacity, tertiary text.                                                       |
| Day hover           | `.aural-date-range-picker__day:hover:not(--disabled):not(--other-month)` | Background tint + primary border/text.                                            |
| Day focus-visible   | `.aural-date-range-picker__day:focus-visible`                            | 2px primary outline, offset 2px.                                                  |
| Nav button disabled | `.aural-date-range-picker__nav-button:disabled`                          | 40% opacity, `cursor: not-allowed`.                                               |
| Preset active       | `.aural-date-range-picker__preset-button--active`                        | Tinted background, primary border/text.                                           |
| Reduced motion      | `prefers-reduced-motion: reduce`                                         | Dropdown, day, nav-button, footer-button, and preset-button transitions disabled. |

**Responsive:** below `768px`, the two calendars stack vertically
(`flex-direction: column`), the dropdown re-centers horizontally
(`left: 50%` + `translateX(-50%)`) instead of left-aligning and caps its
width at `calc(100vw - var(--space-8))`, and each calendar's `min-width`
drops from 300px to 280px (both one-off values, not tokenized).

## 7. Code example

```html
<div class="aural-date-range-picker" id="date-range-1">
  <div class="aural-date-range-picker__input-wrapper">
    <div class="aural-date-range-picker__inputs">
      <input
        type="text"
        class="aural-date-range-picker__input"
        data-range="start"
        placeholder="Start date"
        readonly
        aria-label="Start date"
      />
      <span class="aural-date-range-picker__separator">to</span>
      <input
        type="text"
        class="aural-date-range-picker__input"
        data-range="end"
        placeholder="End date"
        readonly
        aria-label="End date"
      />
    </div>
    <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
  </div>
  <div class="aural-date-range-picker__dropdown">
    <div class="aural-date-range-picker__calendars">
      <div class="aural-date-range-picker__calendar" data-calendar="left"><!-- ... --></div>
      <div class="aural-date-range-picker__calendar" data-calendar="right"><!-- ... --></div>
    </div>
    <div class="aural-date-range-picker__footer">
      <button class="aural-date-range-picker__footer-button">Clear</button>
      <button
        class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary"
      >
        Apply
      </button>
    </div>
  </div>
</div>

<script>
  Aural.initDateRangePicker('date-range-1', {
    presets: [{ label: 'Last 7 Days', days: 7 }],
    onChange: (range) => console.log('Range selected:', range),
  });
</script>
```

## 8. Cross-references

- **Date Picker** (`components/date-picker.css`) — the single-date sibling
  this component's day-cell visuals and range modifiers (`--range-start`/
  `--range-end`/`--in-range`) were designed to share; see
  `specs/components/date-picker.md`'s Anatomy note on those shared
  modifiers, and its own `--primary-alpha-20` bug-fix precedent.
- **Time Picker** (`components/time-picker.css`, migrated in this same
  pass) — the time-of-day counterpart, often paired with Date/Date Range
  Picker in scheduling forms.
- **Combobox** — shares the same floating-panel idiom (`--z-dropdown`
  stacking, mobile override that re-centers/bottom-sheets the popup).
- **Input** — the two `__input` fields share the same focus-ring and
  border idiom as the plain Input component.
