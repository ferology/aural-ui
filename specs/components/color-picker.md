# Color Picker

## 1. Metadata

|                   |                                                                                                                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name              | Color Picker                                                                                                                                                                                                                                 |
| Category          | Forms                                                                                                                                                                                                                                        |
| Status            | Stable                                                                                                                                                                                                                                       |
| CSS file          | `components/color-picker.css`                                                                                                                                                                                                                |
| Naming convention | BEM (`.aural-color-picker__swatch-color`, `.aural-color-picker--compact`) — not flat kebab-case. A third exception to the convention called out in `CLAUDE.md` (alongside `date-picker.css` and `combobox.css`); match it, don't convert it. |

## 2. Overview

Color Picker is a visual color-selection panel combining an HSL
saturation/lightness canvas, a hue slider, an optional alpha (opacity)
slider, HEX/RGB/HSL text-input modes, preset swatches, and a recent-colors
row. It also ships a compact trigger-button + popover pair
(`.aural-color-picker-trigger` / `.aural-color-picker-popover`) for
embedding the full picker behind a small swatch button instead of showing
it inline. JS behavior (hue/alpha drag handling, HEX conversion, value
syncing) lives in `javascript/index.js` (`Aural.initColorPicker`).

**When to use:**

- Design tools, theme editors, and brand customizers where users need
  precise control over hue, saturation, lightness, and optionally alpha
- Form fields for color input (accent colors, backgrounds, text colors) in
  admin/settings UIs
- Anywhere a fixed palette isn't enough and the user needs to dial in an
  exact value, not just pick from swatches

**When NOT to use:**

- Selecting from a small, fixed brand palette only — use plain swatch
  buttons or a Dropdown/Select instead
- Binary light/dark mode choice — use Toggle or Radio
- Icon/image tinting with a handful of options — use the compact/preset-only
  mode, not the full canvas+sliders picker

## 3. Anatomy

| Class                                             | Purpose                                                                                                               |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `.aural-color-picker`                             | Root container. Inline-flex column, fixed `width: 280px` (one-off, not a token — see Tokens section).                 |
| `.aural-color-picker__preview`                    | Top row: swatch + current-value text input.                                                                           |
| `.aural-color-picker__swatch`                     | Clickable color preview square; renders a checkerboard behind it for alpha transparency.                              |
| `.aural-color-picker__swatch-color`               | The actual color fill, reads `--color-value` (set inline by JS).                                                      |
| `.aural-color-picker__value`                      | Read-only text field showing the current value in the active format.                                                  |
| `.aural-color-picker__canvas`                     | The saturation/lightness picking surface (`role="slider"`).                                                           |
| `.aural-color-picker__saturation` / `__lightness` | Two stacked gradient overlays (white→transparent, transparent→black) forming the 2D HSL field.                        |
| `.aural-color-picker__cursor`                     | The draggable position indicator on the canvas.                                                                       |
| `.aural-color-picker__hue`                        | Hue slider track (full-spectrum rainbow gradient, `role="slider"`).                                                   |
| `.aural-color-picker__hue-handle`                 | Hue slider's draggable handle.                                                                                        |
| `.aural-color-picker__alpha`                      | Alpha/opacity slider track (checkerboard + color gradient, `role="slider"`), only rendered when alpha is enabled.     |
| `.aural-color-picker__alpha-gradient`             | The transparent→opaque color overlay inside `__alpha`.                                                                |
| `.aural-color-picker__alpha-handle`               | Alpha slider's draggable handle.                                                                                      |
| `.aural-color-picker__modes`                      | Row of format-toggle tabs (`role="tablist"`).                                                                         |
| `.aural-color-picker__mode`                       | A single format tab (HEX/RGB/HSL), `role="tab"`, `data-mode="hex\|rgb\|hsl"`.                                         |
| `.aural-color-picker__mode--active`               | The currently-selected format tab.                                                                                    |
| `.aural-color-picker__inputs`                     | Grid of channel text inputs for the active format, `data-mode` mirrors the active tab.                                |
| `.aural-color-picker__inputs--rgba` / `--hsla`    | Modifier switching the grid to 4 columns when alpha is shown alongside RGB/HSL.                                       |
| `.aural-color-picker__input-group`                | One labeled channel field (e.g. "R", "H", "Hex").                                                                     |
| `.aural-color-picker__input-label`                | Small uppercase channel label.                                                                                        |
| `.aural-color-picker__input`                      | The channel's numeric/text input itself.                                                                              |
| `.aural-color-picker__presets`                    | Preset-colors section (label + grid).                                                                                 |
| `.aural-color-picker__preset-grid`                | 8-column grid of preset swatch buttons.                                                                               |
| `.aural-color-picker__preset`                     | A single preset swatch button; checkerboard behind it for alpha presets.                                              |
| `.aural-color-picker__preset--active`             | The preset matching the current value — primary border + focus-style ring.                                            |
| `.aural-color-picker__preset-color`               | The fill square inside a preset button.                                                                               |
| `.aural-color-picker__recent`                     | Recent-colors section (label + grid), same visual structure as `__presets`.                                           |
| `.aural-color-picker__eyedropper`                 | Button triggering the browser `EyeDropper` API (icon + label), disabled state supported.                              |
| `.aural-color-picker--compact`                    | Modifier: smaller width/canvas/swatch, hides mode tabs/inputs/presets by convention (JS/markup decides what to omit). |
| `.aural-color-picker--inline`                     | Modifier: strips the container's background/border/shadow/padding for embedding inside another surface.               |
| `.aural-color-picker-trigger`                     | Standalone button (swatch + label) that opens a popover-hosted picker.                                                |
| `.aural-color-picker-trigger__swatch`             | Small color-preview square inside the trigger button.                                                                 |
| `.aural-color-picker-trigger__label`              | Trigger button's text label.                                                                                          |
| `.aural-color-picker-popover`                     | The floating panel that hosts a `.aural-color-picker` when using the trigger pattern — hidden until `--open`.         |
| `.aural-color-picker-popover--open`               | Modifier that reveals the popover.                                                                                    |
| `.aural-color-picker__sr-label`                   | Visually-hidden label text for screen readers.                                                                        |

## 4. Tokens used

| Token                                                                                      | Used for                                                             |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| `--size-56` / `--size-48` / `--size-24`                                                    | Swatch dimensions (default / compact / trigger)                      |
| `--size-16` / `--size-18` / `--size-12`                                                    | Cursor, hue/alpha handles, hue/alpha track height                    |
| `--size-20` / `--size-28` / `--size-44`                                                    | Touch-target bumps under `(pointer: coarse)`                         |
| `--space-40`                                                                               | Canvas height (160px)                                                |
| `--space-60`                                                                               | Compact variant width (240px)                                        |
| `--space-80`                                                                               | Mobile `max-width` (320px)                                           |
| `--space-0-5` / `--space-1` – `--space-4`                                                  | Padding/gaps throughout                                              |
| `--z-dropdown`                                                                             | Popover stacking (was a hardcoded `1000`)                            |
| `--duration-moderate`                                                                      | Popover fade/slide transition (was a hardcoded `0.2s`)               |
| `--primary-alpha-20`                                                                       | Active preset's focus-style ring                                     |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary`                | Text color by context                                                |
| `--color-bg-primary` / `--color-bg-secondary` / `--color-bg-tertiary` / `--color-bg-hover` | Container/input/surface backgrounds and hover state                  |
| `--color-border-medium`                                                                    | Swatch, input, and control borders                                   |
| `--color-primary`                                                                          | Focus rings, hover accents, active mode tab, eyedropper hover        |
| `--radius-sm` / `--radius-md` / `--radius-lg` / `--radius-full`                            | Corner rounding (controls / canvas / container / hue & alpha tracks) |
| `--shadow-lg` / `--shadow-md`                                                              | Container elevation / handle & hover shadows                         |
| `--text-xs` / `--text-sm`                                                                  | Font sizes (labels / values)                                         |
| `--font-mono`                                                                              | Monospace value/input text (hex/rgb/hsl)                             |
| `--font-medium` / `--font-semibold`                                                        | Label/button and active-state weight                                 |
| `--transition-all-fast`                                                                    | Most hover/focus transitions                                         |

**New tokens added while migrating this file:** none. `--duration-moderate`
(200ms, `tokens/core/animations.css`) and `--size-200` existed by the time
this file was audited — both were added by a concurrently-running sibling
migration for the same widely-repeated `0.2s ease` popup-transition and
floating-panel-width idioms this file also uses. This file only _consumes_
`--duration-moderate`; it didn't need `--size-200`.

**Bug fix (not a token addition):** `.file-upload__zone`, `__item`, and
`__action` (in the sibling `file-upload.css`, migrated in this same pass)
referenced `var(--color-border)`, a custom property that doesn't exist
anywhere in the token layer — see `specs/components/file-upload.md` for
detail. No equivalent bug was found in `color-picker.css` itself.

Several raw values here are intentionally left as literals with
`/* aural-ignore: ... */` rather than tokenized, because they're either
one-off container/field dimensions (280px panel width, 140px value-field
width, 240px compact width's canvas/value sub-cases, etc.) or are
mathematically-meaningful color stops that aren't part of the shared
palette (the HSL hue rainbow's 7 stops, the saturation/lightness
gradients' white/black endpoints, the checkerboard pattern's neutral
`#ccc`, and the `var(--color-value, #000)` fallback baked into the
swatch's custom-property default).

## 5. Props/API

Color Picker is markup + CSS classes, driven by a JS API in
`javascript/index.js` (the global `Aural` object). It is **not**
auto-initialized by `Aural.init()` — call `Aural.initColorPicker()` per
instance.

`Aural.initColorPicker(pickerId, options)`:

| Option         | Type                                        | Description                                                                                                            |
| -------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `initialColor` | string (default `'#000000'`)                | Starting color value.                                                                                                  |
| `mode`         | `'hex' \| 'rgb' \| 'hsl'` (default `'hex'`) | Which format the `__value` field displays/parses.                                                                      |
| `showAlpha`    | boolean (default `true`)                    | Whether the alpha slider's click handler is wired up.                                                                  |
| `onChange`     | `(color: string) => void`                   | Called whenever hue or alpha changes (canvas drag is not yet wired in the current JS implementation — see note below). |

Returns an instance with:

| Method            | Description                                     |
| ----------------- | ----------------------------------------------- |
| `getColor()`      | Returns the current color string.               |
| `setColor(color)` | Programmatically sets the color and re-renders. |

**Implementation note:** the current `initColorPicker` wires up click
handlers on `.aural-color-picker__hue` and `.aural-color-picker__alpha`
only — it does not attach a listener to `.aural-color-picker__canvas`
(saturation/lightness), and `hslToHex`/presets/recent-colors/eyedropper
markup shown in `stories/ColorPicker.stories.ts` and
`docs/components/color-picker.html` are illustrative of the intended full
component, not all currently driven by `initColorPicker` itself. Treat the
CSS classes as the stable contract; the JS is a partial reference
implementation.

## 6. States

| State                 | Trigger                                                                                  | Effect                                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Hover (swatch)        | `.aural-color-picker__swatch:hover`                                                      | Scales up slightly (`transform: scale(1.05)`), adds `--shadow-md`.                                          |
| Hover (value/input)   | `.aural-color-picker__value:hover`, `__input:hover`                                      | Border turns primary, background shifts to `--color-bg-hover`.                                              |
| Focus (value/input)   | `:focus`                                                                                 | 2px primary outline, offset 2px.                                                                            |
| Hue/alpha dragging    | `.aural-color-picker__hue:active .aural-color-picker__hue-handle` (and alpha equivalent) | Handle scales to 1.2x.                                                                                      |
| Mode active           | `.aural-color-picker__mode--active`                                                      | Background shifts to `--color-bg-primary`, text turns primary, semibold.                                    |
| Preset hover          | `.aural-color-picker__preset:hover`                                                      | Scales up (`1.1x`), adds shadow + primary border.                                                           |
| Preset active         | `.aural-color-picker__preset--active`                                                    | Primary border + `0 0 0 2px var(--primary-alpha-20)` ring (focus-ring idiom).                               |
| Eyedropper disabled   | `.aural-color-picker__eyedropper:disabled`                                               | 50% opacity, `cursor: not-allowed`.                                                                         |
| Compact               | `.aural-color-picker--compact`                                                           | Narrower width (240px), smaller canvas (120px) and swatch (48px/48px).                                      |
| Inline                | `.aural-color-picker--inline`                                                            | Transparent background, no border/shadow/padding — for embedding in another surface.                        |
| Trigger focus-visible | `.aural-color-picker-trigger:focus-visible`                                              | 2px primary outline, offset 2px.                                                                            |
| Popover closed/open   | `.aural-color-picker-popover` / `--open`                                                 | Fades/slides in from `translateY(-8px)`, same idiom as Date Picker's calendar popup.                        |
| Reduced motion        | `prefers-reduced-motion: reduce`                                                         | Swatch/preset/mode/eyedropper/trigger/popover transitions, plus hue/alpha handle transitions, are disabled. |

**Responsive / touch:**

- Below `640px`, the root's `max-width` is capped at `var(--space-80)`
  (320px) and preset/recent grids drop from 8 to 6 columns.
- Under `(pointer: coarse)`, the hue/alpha tracks grow to `var(--size-44)`
  tall with `var(--space-4)` vertical padding, their handles grow to
  `var(--size-28)`, the canvas cursor grows to `var(--size-24)` (3px
  border), preset buttons get a `var(--size-44)` minimum touch target, mode
  buttons get a `var(--size-44)` minimum height, and the canvas itself
  grows to a taller 180px (one-off, not tokenized).

## 7. Code example

```html
<div class="aural-color-picker" id="my-color-picker">
  <div class="aural-color-picker__preview">
    <div class="aural-color-picker__swatch">
      <div class="aural-color-picker__swatch-color"></div>
    </div>
    <input
      type="text"
      class="aural-color-picker__value"
      value="#F00054"
      readonly
      aria-label="Selected color value"
    />
  </div>

  <div
    class="aural-color-picker__canvas"
    role="slider"
    aria-label="Select color saturation and lightness"
    tabindex="0"
  >
    <div class="aural-color-picker__saturation"></div>
    <div class="aural-color-picker__lightness"></div>
    <div class="aural-color-picker__cursor"></div>
  </div>

  <div
    class="aural-color-picker__hue"
    role="slider"
    aria-label="Select hue"
    aria-valuemin="0"
    aria-valuemax="360"
    aria-valuenow="340"
    tabindex="0"
  >
    <div class="aural-color-picker__hue-handle"></div>
  </div>

  <div class="aural-color-picker__modes" role="tablist">
    <button
      type="button"
      class="aural-color-picker__mode aural-color-picker__mode--active"
      role="tab"
      data-mode="hex"
    >
      HEX
    </button>
    <button type="button" class="aural-color-picker__mode" role="tab" data-mode="rgb">RGB</button>
    <button type="button" class="aural-color-picker__mode" role="tab" data-mode="hsl">HSL</button>
  </div>

  <div class="aural-color-picker__presets">
    <div class="aural-color-picker__preset-label">Presets</div>
    <div class="aural-color-picker__preset-grid" role="group" aria-label="Preset colors">
      <button
        type="button"
        class="aural-color-picker__preset"
        aria-label="Select preset color: Red"
      >
        <div class="aural-color-picker__preset-color" style="background: #f00054;"></div>
      </button>
      <!-- More presets... -->
    </div>
  </div>
</div>

<script>
  Aural.initColorPicker('my-color-picker', {
    initialColor: '#F00054',
    mode: 'hex',
    showAlpha: true,
    onChange: (color) => console.log('Color changed:', color),
  });
</script>
```

## 8. Cross-references

- **Date Picker** / **Combobox** — the other floating-panel components in
  this codebase; `.aural-color-picker-popover`'s open/close idiom
  (`translateY` slide + opacity/visibility fade, `--z-dropdown` stacking)
  mirrors Date Picker's calendar popup.
- **Input** — Color Picker's `__value`/`__input` fields share the same
  focus-ring and border idiom as the plain Input component.
- **File Upload** — unrelated functionally, but migrated in the same pass;
  see `specs/components/file-upload.md` for the `--color-border` bug fix
  found while auditing that file.
