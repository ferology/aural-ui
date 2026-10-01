# Time Picker

## 1. Metadata

|                   |                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name              | Time Picker                                                                                                                                                |
| Category          | Forms                                                                                                                                                      |
| Status            | Stable                                                                                                                                                     |
| CSS file          | `components/time-picker.css`                                                                                                                               |
| Naming convention | BEM (`.aural-time-picker__period-btn--selected`) — **not** flat kebab-case, following the same pattern as its sibling `date-picker.css`. Don't convert it. |

## 2. Overview

Time Picker is a text-input-triggered dropdown for selecting a
hour/minute/AM-PM (or 24-hour) time value: two scrollable lists (hours,
minutes) plus an AM/PM toggle, a "Now" shortcut, and Clear/Done footer
actions. It supports both 12-hour and 24-hour formats and an inline
variant that renders the dropdown permanently expanded in place (no
popup). JS behavior (populating the lists, open/close, selection,
formatting) lives in `javascript/index.js` (`Aural.initTimePicker`).

**When to use:**

- Appointment/meeting scheduling, booking systems, or any form needing a
  structured, validated time value
- Alarms, reminders, and timers
- Paired with Date Picker / Date Range Picker for full date+time
  scheduling flows

**When NOT to use:**

- Capturing a duration (e.g. "2h 30m") rather than a clock time — use
  separate hour/minute number inputs or a dedicated duration field
- Only a few fixed time slots are bookable — use a dropdown or radio group
  showing just the available slots
- Relative time ("in 5 minutes") — use preset buttons instead

## 3. Anatomy

| Class                                      | Purpose                                                                                             |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| `.aural-time-picker`                       | Root container, inline-flex column, `max-width: 300px`.                                             |
| `.aural-time-picker__label`                | Optional label above the input.                                                                     |
| `.aural-time-picker__input-wrapper`        | Relative-positioned row holding the input, icon, and toggle.                                        |
| `.aural-time-picker__input`                | Text field showing the formatted time; monospace font, accepts manual typed input.                  |
| `.aural-time-picker__icon`                 | Clock glyph inside the input, turns primary on input focus.                                         |
| `.aural-time-picker__toggle`               | Button that opens/closes the dropdown.                                                              |
| `.aural-time-picker__dropdown`             | The floating panel — hidden (`opacity: 0; visibility: hidden`) until the root has `--open`.         |
| `.aural-time-picker__selectors`            | Row holding the hour/minute `__selector` columns (and period column via `__period`).                |
| `.aural-time-picker__selector`             | One scrollable-list column (label + `__list`).                                                      |
| `.aural-time-picker__selector-label`       | Uppercase column label ("HOUR"/"MINUTE").                                                           |
| `.aural-time-picker__list`                 | Scrollable list of `__item` buttons (`--hours` / `--minutes` via JS-added modifier class).          |
| `.aural-time-picker__item`                 | A single selectable hour/minute value.                                                              |
| `.aural-time-picker__item--selected`       | The chosen value — tinted background, primary text, semibold.                                       |
| `.aural-time-picker__item--disabled`       | Non-selectable value — muted, not clickable.                                                        |
| `.aural-time-picker__period`               | Column of AM/PM buttons (hidden entirely in `--24h` mode).                                          |
| `.aural-time-picker__period-btn`           | A single AM or PM button.                                                                           |
| `.aural-time-picker__period-btn--selected` | The active period — solid primary background, white text.                                           |
| `.aural-time-picker__actions`              | Footer row holding Clear/Done buttons.                                                              |
| `.aural-time-picker__action-btn`           | A default (outlined) footer action.                                                                 |
| `.aural-time-picker__action-btn--primary`  | Solid-primary variant of a footer action (e.g. "Done").                                             |
| `.aural-time-picker__now`                  | Wrapper around the "Now" shortcut, top-bordered.                                                    |
| `.aural-time-picker__now-btn`              | Dashed-bordered button that sets the current time.                                                  |
| `.aural-time-picker__error`                | Inline validation error message under the field.                                                    |
| `.aural-time-picker__sr-label`             | Visually-hidden label text for screen readers.                                                      |
| `.aural-time-picker--sm` / `--lg`          | Size modifiers — adjust `__input` height/padding/font, `__dropdown` min-width, `__list` height.     |
| `.aural-time-picker--24h`                  | Hides the AM/PM `__period` column and widens the gap between the remaining selectors.               |
| `.aural-time-picker--inline`               | Renders `__dropdown` permanently expanded in normal flow (`position: static`) and hides `__toggle`. |
| `.aural-time-picker--error` / `--success`  | Validation state — tints the input border (and, for error, its focus ring).                         |
| `.aural-time-picker--disabled`             | Whole-component disabled state — 50% opacity, non-interactive, tertiary input background.           |

## 4. Tokens used

| Token                                                                                              | Used for                                                                      |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `--size-44` / `--size-36` / `--size-52`                                                            | `__input` / list-item & button min-height at default / implicit sm / `--lg`   |
| `--size-32` / `--size-18` / `--size-20` / `--size-16` / `--size-14` / `--size-6`                   | Toggle button, toggle svg, icon, now-btn svg, error svg, and scrollbar widths |
| `--space-40`                                                                                       | `__list` height (160px)                                                       |
| `--space-60`                                                                                       | `__dropdown` min-width (240px)                                                |
| `--size-200`                                                                                       | `--sm` dropdown min-width and `--lg` list height (both 200px)                 |
| `--z-dropdown`                                                                                     | Dropdown panel stacking (was a hardcoded `1000`)                              |
| `--duration-moderate`                                                                              | Dropdown fade/slide transition (was a hardcoded `0.2s`)                       |
| `--primary-alpha-10`                                                                               | Selected list item and "Now" button hover tint                                |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary` / `--color-text-muted` | Text color by emphasis level                                                  |
| `--color-bg-primary` / `--color-bg-secondary` / `--color-bg-tertiary` / `--color-bg-hover`         | Input/list/dropdown backgrounds and hover states                              |
| `--color-border-medium` / `--color-border-subtle` / `--color-border-strong`                        | Borders, scrollbar thumb, section dividers                                    |
| `--color-primary` / `--color-primary-hover`                                                        | Selection accents, focus rings, primary action button                         |
| `--color-error` / `--color-success`                                                                | Validation border accents                                                     |
| `--radius-sm` / `--radius-md` / `--radius-lg`                                                      | Corner rounding (list items / controls / mobile sheet corners)                |
| `--shadow-xl`                                                                                      | Dropdown elevation                                                            |
| `--text-xs` / `--text-sm` / `--text-base`                                                          | Font sizes by context/size variant                                            |
| `--font-mono` / `--font-sans`                                                                      | Monospace time text / placeholder & sans-serif labels                         |
| `--font-medium` / `--font-semibold`                                                                | Label/button and selected-state weight                                        |
| `--space-1` – `--space-4` / `--space-10`                                                           | Padding and gaps throughout                                                   |
| `--transition-all-fast`                                                                            | Most hover/focus transitions                                                  |

**New tokens added while migrating this file:** none. `--duration-moderate`
(200ms) and `--size-200` (12.5rem/200px, "default floating menu/panel
min-width") both existed by the time this file was audited — both were
added by a concurrently-running sibling migration for the exact
`0.2s ease` popup-transition and `200px` floating-panel-width idioms this
file also used, so both apply as exact-value matches here.

## 5. Props/API

Time Picker is markup + CSS classes, driven by a JS API in
`javascript/index.js` (the global `Aural` object). It is **not**
auto-initialized by `Aural.init()` — call `Aural.initTimePicker()` per
instance. Note: there is no `TimePicker.stories.ts` in this codebase (the
only Storybook file matching "time" is `Timeline.stories.ts`, an unrelated
component) — `docs/components/time-picker.html` is this component's only
documented usage reference besides the CSS/JS themselves.

`Aural.initTimePicker(pickerId, options)`:

| Option        | Type                               | Description                                                      |
| ------------- | ---------------------------------- | ---------------------------------------------------------------- |
| `format`      | `'12h' \| '24h'` (default `'12h'`) | Hour format; `'24h'` also drives the `--24h` CSS modifier usage. |
| `defaultTime` | time-parseable                     | Initial selected time.                                           |
| `onChange`    | `(time: string) => void`           | Called when the selection changes.                               |
| `onOpen`      | `() => void`                       | Called when the dropdown opens.                                  |
| `onClose`     | `() => void`                       | Called when the dropdown closes.                                 |

Returns an instance with:

| Method                           | Description                                    |
| -------------------------------- | ---------------------------------------------- |
| `getTime()`                      | Returns the input's current formatted value.   |
| `setTime(hour, minute, period?)` | Programmatically sets the time and re-renders. |
| `open()` / `close()`             | Opens/closes the dropdown.                     |

`initTimePicker` populates `.aural-time-picker__list--hours` (1–12 or
0–24 depending on `format`) and `.aural-time-picker__list--minutes`
(0–59 in steps of 5) with `.aural-time-picker__item` buttons at init time
— the markup in the Code example below shows empty list containers that
JS fills in.

## 6. States

| State                   | Trigger                                                         | Effect                                                                                              |
| ----------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Closed (default)        | `.aural-time-picker__dropdown` without the root having `--open` | `opacity: 0; visibility: hidden`, lifted `translateY(-8px)`.                                        |
| Open                    | `.aural-time-picker--open .aural-time-picker__dropdown`         | Fades/slides in to resting position.                                                                |
| Hover (input)           | `.aural-time-picker__input:hover`                               | Border turns primary, background shifts to `--color-bg-hover`.                                      |
| Focus (input)           | `.aural-time-picker__input:focus`                               | 2px primary outline, offset 2px; adjacent `__icon` turns primary.                                   |
| List item hover         | `.aural-time-picker__item:hover`                                | Background tint + primary text.                                                                     |
| List item selected      | `.aural-time-picker__item--selected`                            | `--primary-alpha-10` background, primary text, semibold.                                            |
| List item disabled      | `.aural-time-picker__item--disabled`                            | 40% opacity, `cursor: not-allowed`, `pointer-events: none`.                                         |
| List item focus-visible | `.aural-time-picker__item:focus-visible`                        | Inset `0 0 0 2px` primary ring instead of an outline (focus-ring idiom).                            |
| Period button selected  | `.aural-time-picker__period-btn--selected`                      | Solid primary background, white text, semibold.                                                     |
| Now-button hover        | `.aural-time-picker__now-btn:hover`                             | `--primary-alpha-10` tint, border solidifies from dashed.                                           |
| Error                   | `.aural-time-picker--error`                                     | Input border tints to `--color-error`; focus adds a 3px error-tinted ring; `__error` message shown. |
| Success                 | `.aural-time-picker--success`                                   | Input border tints to `--color-success`.                                                            |
| Disabled                | `.aural-time-picker--disabled`                                  | Whole control at 50% opacity, non-interactive; input background shifts to `--color-bg-tertiary`.    |
| 24-hour mode            | `.aural-time-picker--24h`                                       | `__period` column hidden; `__selectors` gap widens.                                                 |
| Inline                  | `.aural-time-picker--inline`                                    | `__dropdown` always visible in normal flow (no popup); `__toggle` hidden.                           |
| Reduced motion          | `prefers-reduced-motion: reduce`                                | Dropdown, item, period-btn, and action-btn transitions are disabled.                                |

**Responsive / touch:**

- Below `640px`, the dropdown becomes a fixed bottom sheet
  (`position: fixed; bottom: 0`, rounded top corners only) the same way
  Combobox's dropdown and Date Picker's calendar do, `__selectors` padding
  grows, and `__list` height grows to 180px (one-off, not tokenized).

## 7. Code example

```html
<div class="aural-time-picker" id="meeting-time">
  <label class="aural-time-picker__label">Meeting time</label>
  <div class="aural-time-picker__input-wrapper">
    <input type="text" class="aural-time-picker__input" placeholder="Select time..." readonly />
    <svg class="aural-time-picker__icon"><!-- clock icon --></svg>
    <button class="aural-time-picker__toggle" aria-label="Toggle time picker">
      <svg><!-- chevron icon --></svg>
    </button>
  </div>
  <div class="aural-time-picker__dropdown">
    <div class="aural-time-picker__selectors">
      <div class="aural-time-picker__selector">
        <div class="aural-time-picker__selector-label">Hour</div>
        <div class="aural-time-picker__list aural-time-picker__list--hours">
          <!-- filled by JS -->
        </div>
      </div>
      <div class="aural-time-picker__selector">
        <div class="aural-time-picker__selector-label">Minute</div>
        <div class="aural-time-picker__list aural-time-picker__list--minutes">
          <!-- filled by JS -->
        </div>
      </div>
      <div class="aural-time-picker__period">
        <button class="aural-time-picker__period-btn">AM</button>
        <button class="aural-time-picker__period-btn">PM</button>
      </div>
    </div>
    <div class="aural-time-picker__now">
      <button class="aural-time-picker__now-btn">
        <svg><!-- clock icon --></svg>
        Now
      </button>
    </div>
    <div class="aural-time-picker__actions">
      <button class="aural-time-picker__action-btn">Clear</button>
      <button class="aural-time-picker__action-btn aural-time-picker__action-btn--primary">
        Done
      </button>
    </div>
  </div>
</div>

<script>
  Aural.initTimePicker('meeting-time', {
    format: '12h',
    onChange: (time) => console.log('Time selected:', time),
  });
</script>
```

## 8. Cross-references

- **Date Picker** / **Date Range Picker** (`components/date-range-picker.css`,
  migrated in this same pass) — the date-of-day counterparts, often paired
  with Time Picker in scheduling forms.
- **Combobox** — shares the same floating-panel idiom (`--z-dropdown`
  stacking, mobile bottom-sheet override, `max-height`/fade transition
  pattern).
- **Input** — Time Picker's `__input` shares the same focus-ring and
  border idiom as the plain Input component.
