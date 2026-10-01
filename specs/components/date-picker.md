# Date Picker

## 1. Metadata

|                   |                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name              | Date Picker                                                                                                                                                          |
| Category          | Forms                                                                                                                                                                |
| Status            | Stable                                                                                                                                                               |
| CSS file          | `components/date-picker.css`                                                                                                                                         |
| Naming convention | BEM (`.aural-date-picker__day--selected`) — **not** flat kebab-case; this file is one of the two intentional exceptions called out in `CLAUDE.md`. Don't convert it. |

## 2. Overview

Date Picker is a compact text input that opens a calendar popup for date
selection, with month/year navigation, keyboard support, min/max date
restriction, and configurable output formats. It's the single-date,
input-triggered counterpart to the standalone Calendar component (see
`specs/components/calendar.md`) — Date Picker shows a one-line input until
clicked; Calendar renders its full grid inline, always visible, with no
input field. JS behavior (open/close, rendering the grid, navigation,
date formatting) lives in `javascript/index.js` (`Aural.initDatePicker`).

**When to use:**

- Forms/booking flows where a single date needs to be captured and the
  field should otherwise stay compact (one line) until the user needs it
- Scheduling UIs, check-in/check-out style flows (each date gets its own
  Date Picker instance), date-of-birth fields, etc.
- Whenever you want date restrictions (`minDate`/`maxDate`/
  `disabledDates`) enforced visually in the popup, not just validated on
  submit

**When NOT to use:**

- An always-visible, no-input calendar view (e.g. a scheduling dashboard
  where the grid itself is the primary content) — use Calendar instead
- Selecting a date **range** — this component's JS (`initDatePicker`)
  only tracks a single `selectedDate`; use the separate
  `date-range-picker.css` / `Aural.initDateRangePicker` pair (out of
  scope for this spec)
- A time-of-day value — use Time Picker

## 3. Anatomy

| Class                                                                                   | Purpose                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.aural-date-picker`                                                                    | Root container, `max-width: 320px`.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `.aural-date-picker__input-wrapper`                                                     | Flex row holding the input and its calendar icon.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `.aural-date-picker__input`                                                             | Read-only-by-convention text field showing the formatted date; click opens the calendar.                                                                                                                                                                                                                                                                                                                                                                          |
| `.aural-date-picker__icon`                                                              | Calendar glyph inside the input, also clickable.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `.aural-date-picker__calendar`                                                          | The floating popup panel — hidden (`opacity: 0; visibility: hidden`) until `--open`.                                                                                                                                                                                                                                                                                                                                                                              |
| `.aural-date-picker__calendar--open`                                                    | Modifier (combined with the base class) that reveals the popup.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `.aural-date-picker__header`                                                            | Flex row: prev button, current month/year label, next button.                                                                                                                                                                                                                                                                                                                                                                                                     |
| `.aural-date-picker__nav-button`                                                        | Prev/next month button, `data-action="prev"`/`"next"`.                                                                                                                                                                                                                                                                                                                                                                                                            |
| `.aural-date-picker__current-month`                                                     | Centered "Month YYYY" label.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `.aural-date-picker__weekdays` / `__weekday`                                            | 7-column grid of weekday abbreviations (Su–Sa).                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `.aural-date-picker__days`                                                              | 7-column grid of day buttons.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `.aural-date-picker__day`                                                               | A single day cell/button.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `.aural-date-picker__day--other-month`                                                  | Day belongs to the previous/next month (leading/trailing fill), dimmed.                                                                                                                                                                                                                                                                                                                                                                                           |
| `.aural-date-picker__day--today`                                                        | Today's date — primary-colored outline.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `.aural-date-picker__day--selected`                                                     | The chosen date — solid primary background.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `.aural-date-picker__day--disabled`                                                     | Outside `minDate`/`maxDate` or in `disabledDates` — not clickable.                                                                                                                                                                                                                                                                                                                                                                                                |
| `.aural-date-picker__day--range-start` / `--range-end` / `--in-range` / `--hover-range` | Range-selection visuals (solid ends, tinted fill between, lighter tint on hover-preview). **Note:** these classes are styled in the CSS but are not produced by `initDatePicker`'s own rendering logic (which only tracks a single `selectedDate`) — they exist for the sibling range-selection JS/markup (`date-range-picker.css`'s own init, or a custom range implementation reusing this file's day styling). Out of scope for this component's own behavior. |
| `.aural-date-picker__footer`                                                            | Row holding the Today/Clear action buttons.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `.aural-date-picker__footer-button`                                                     | Default (outlined) footer action.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `.aural-date-picker__footer-button--primary`                                            | Solid-primary variant of a footer action.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `.aural-date-picker--sm` / `--lg`                                                       | Size modifiers — adjusts `__input` padding/font-size and `__calendar` min-width.                                                                                                                                                                                                                                                                                                                                                                                  |

## 4. Tokens used

| Token                                                                                                 | Used for                                                              |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `--space-80`                                                                                          | Root `max-width` (320px)                                              |
| `--size-44`                                                                                           | Nav button / day cell / footer button min dimensions                  |
| `--size-48`                                                                                           | Touch-device (`pointer: coarse`) min dimensions for the same elements |
| `--size-20`                                                                                           | Calendar icon box                                                     |
| `--z-dropdown`                                                                                        | Calendar popup stacking (was a hardcoded `1000`)                      |
| `--primary-alpha-20`                                                                                  | Day hover border tint (fixed — see note below)                        |
| `--primary-alpha-10` / `--primary-alpha-20`                                                           | In-range / hover-range day backgrounds                                |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary` / `--color-text-disabled` | Text color by context/state                                           |
| `--color-bg-secondary` / `--color-bg-hover`                                                           | Input/popup backgrounds and hover state                               |
| `--color-border-medium` / `--color-border-subtle`                                                     | Borders, footer divider                                               |
| `--color-primary` / `--color-primary-hover`                                                           | Selected day, primary footer button, focus/hover accents              |
| `--radius-md` / `--radius-lg`                                                                         | Corner rounding                                                       |
| `--shadow-lg`                                                                                         | Calendar popup elevation                                              |
| `--text-sm` / `--text-base` / `--text-lg`                                                             | Font sizes by context/size variant                                    |
| `--font-medium` / `--font-semibold`                                                                   | Label/button/selected-day weight                                      |
| `--space-1` – `--space-5`                                                                             | Padding and gaps throughout                                           |
| `--transition-all-fast`                                                                               | Most hover/focus transitions                                          |

**New tokens added while migrating this file:** none — every hardcoded
value had an exact existing match (`--space-80` for the pre-existing
320px container width, `--size-480`'s sibling rungs for icon/control
sizes, etc.).

**Bug fix (not a token addition):** `.aural-date-picker__day:hover` and
`.aural-calendar__day:hover` both referenced `var(--color-primary-alpha-20)`,
a custom property that doesn't exist anywhere in the token layer (the
real token is `--primary-alpha-20`, no `color-` prefix — compare
`--color-toggle-track-hover: var(--primary-alpha-20)` in
`tokens/semantic/colors.css`). Because the reference was undefined, the
day-hover border tint was silently not rendering. Corrected to
`var(--primary-alpha-20)` in both files as part of this migration — this
restores intended behavior, it isn't a value change.

## 5. Props/API

Date Picker is markup + CSS classes, driven by a JS API in
`javascript/index.js` (the global `Aural` object). It is **not**
auto-initialized by `Aural.init()` — call `Aural.initDatePicker()` per
instance.

`Aural.initDatePicker(pickerId, options)`:

| Option          | Type                            | Description                                                 |
| --------------- | ------------------------------- | ----------------------------------------------------------- |
| `format`        | string (default `'YYYY-MM-DD'`) | Output format token string (`YYYY`/`MM`/`DD` substitution). |
| `minDate`       | Date-parseable                  | Earliest selectable date.                                   |
| `maxDate`       | Date-parseable                  | Latest selectable date.                                     |
| `disabledDates` | array                           | Specific dates to disable (compared by `toDateString()`).   |
| `onChange`      | `(date: Date) => void`          | Called when a day is clicked.                               |

Returns an instance with:

| Method          | Description                                         |
| --------------- | --------------------------------------------------- |
| `getDate()`     | Returns the currently selected `Date`, or `null`.   |
| `setDate(date)` | Programmatically sets the selection and re-renders. |
| `clear()`       | Clears the input and selection.                     |

Clicking outside the picker or pressing `Escape` closes the calendar
(both wired globally in `initDatePicker`, not per-instance listeners).

## 6. States

| State                                | Trigger                                                                | Effect                                                               |
| ------------------------------------ | ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Closed (default)                     | `.aural-date-picker__calendar` without `--open`                        | `opacity: 0; visibility: hidden`, lifted `translateY(-8px)`.         |
| Open                                 | `.aural-date-picker__calendar--open`                                   | Fades/slides in to its resting position.                             |
| Hover (input)                        | `.aural-date-picker__input:hover`                                      | Border turns primary, background shifts to `--color-bg-hover`.       |
| Focus (input)                        | `.aural-date-picker__input:focus`                                      | 2px primary outline, offset 2px.                                     |
| Today                                | `.aural-date-picker__day--today`                                       | Primary-colored border, semibold.                                    |
| Selected                             | `.aural-date-picker__day--selected`                                    | Solid primary background, white text.                                |
| Disabled day                         | `.aural-date-picker__day--disabled`                                    | Muted text, `cursor: not-allowed`, excluded from the hover selector. |
| Other-month day                      | `.aural-date-picker__day--other-month`                                 | 50% opacity, tertiary text color (leading/trailing fill days).       |
| Range start/end/in-range/hover-range | see Anatomy note                                                       | Styled but not produced by this component's own JS — see note above. |
| Day hover                            | `.aural-date-picker__day:hover:not(.aural-date-picker__day--disabled)` | Background tint + primary border/text.                               |
| Day focus-visible                    | `.aural-date-picker__day:focus-visible`                                | 2px primary outline, offset 2px.                                     |
| Reduced motion                       | `prefers-reduced-motion: reduce`                                       | Calendar fade/slide and all element transitions are disabled.        |

**Responsive / touch:**

- Below `640px`, the calendar popup centers horizontally under the
  trigger (`left: 50%` + `translateX(-50%)`) instead of left-aligning,
  and the input's font-size is forced to 16px (`var(--text-base)`) to
  prevent iOS auto-zoom on focus.
- Under `(pointer: coarse)`, day cells, nav buttons, footer buttons, and
  the input all grow their minimum touch target from 44px to 48px
  (`var(--size-48)`).

## 7. Code example

```html
<div class="aural-date-picker" id="checkin-picker">
  <div class="aural-date-picker__input-wrapper">
    <input type="text" class="aural-date-picker__input" placeholder="Select date..." readonly />
    <div class="aural-date-picker__icon">
      <svg><!-- calendar icon --></svg>
    </div>
  </div>
  <div class="aural-date-picker__calendar">
    <div class="aural-date-picker__header">
      <button class="aural-date-picker__nav-button" data-action="prev" aria-label="Previous month">
        <svg><!-- chevron-left --></svg>
      </button>
      <div class="aural-date-picker__current-month">January 2026</div>
      <button class="aural-date-picker__nav-button" data-action="next" aria-label="Next month">
        <svg><!-- chevron-right --></svg>
      </button>
    </div>
    <div class="aural-date-picker__weekdays">
      <div class="aural-date-picker__weekday">Su</div>
      <!-- ...Mo–Sa... -->
    </div>
    <div class="aural-date-picker__days">
      <!-- Days rendered by Aural.initDatePicker -->
    </div>
    <div class="aural-date-picker__footer">
      <button class="aural-date-picker__footer-button">Today</button>
      <button class="aural-date-picker__footer-button">Clear</button>
    </div>
  </div>
</div>

<script>
  Aural.initDatePicker('checkin-picker', {
    format: 'MM/DD/YYYY',
    minDate: new Date(),
    onChange: (date) => console.log('Check-in selected:', date),
  });
</script>
```

## 8. Cross-references

- **Calendar** — the always-visible, no-input sibling; use it instead
  when the grid itself should be the primary on-page content rather than
  a popup triggered by a field. See `specs/components/calendar.md`.
- **Date Range Picker** (`components/date-range-picker.css`, out of
  scope for this pass) — the two-date variant; shares this file's
  `--range-start`/`--range-end`/`--in-range`/`--hover-range` day
  modifiers.
- **Time Picker** (`components/time-picker.css`, out of scope) — the
  time-of-day counterpart, often paired with Date Picker in scheduling
  forms.
- **Combobox** — shares the same floating-panel idiom (`--z-dropdown`
  stacking, mobile override that re-centers/bottom-sheets the popup).
- **Input** — Date Picker's `__input` shares the same focus-ring and
  border idiom as the plain Input component.
