# File Upload

## 1. Metadata

|                   |                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name              | File Upload                                                                                                                                                                                                                                                                                                                                                         |
| Category          | Forms                                                                                                                                                                                                                                                                                                                                                               |
| Status            | Stable                                                                                                                                                                                                                                                                                                                                                              |
| CSS file          | `components/file-upload.css`                                                                                                                                                                                                                                                                                                                                        |
| Naming convention | Flat BEM-ish (`.file-upload__zone`, `.file-upload--sm`) — **no `aural-` prefix**, unlike most other components in this batch (`color-picker`, `date-range-picker`, `time-picker` all use `.aural-<name>`). This file already uses the unprefixed form consistently across its CSS, docs, and stories; keep it unprefixed — don't add `aural-` as a drive-by change. |

## 2. Overview

File Upload is a drag-and-drop file picker: a dropzone (`<label>` wrapping
a hidden native `<input type="file">`) plus an optional list of
in-progress/uploaded files with preview thumbnails, progress bars, and
per-file status (pending/uploading/success/error). It ships size variants
(sm/default/lg), a compact inline "button" variant for toolbars, and an
image-grid variant for photo-heavy uploads.

**When to use:**

- Any form needing file attachments (documents, images, avatars) with
  drag-and-drop support
- Multi-file uploads where users benefit from seeing per-file progress and
  being able to remove individual files before/during upload
- Image-heavy uploads (galleries, product photos) — use `--image-grid`

**When NOT to use:**

- A single native file input is sufficient and no drag-and-drop/preview/
  progress UI is needed — a plain `<input type="file">` is simpler
- Selecting an existing asset from a library rather than uploading a new
  one — use a picker/browser pattern instead

## 3. Anatomy

| Class                                                                   | Purpose                                                                                                     |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `.file-upload`                                                          | Root container, full width.                                                                                 |
| `.file-upload__zone`                                                    | The `<label>` dropzone — dashed border, click/drag target, wraps the hidden input.                          |
| `.file-upload__input`                                                   | The native `<input type="file">`, visually hidden (sr-only clip pattern), `multiple` optional.              |
| `.file-upload__content`                                                 | Column of icon + text + subtext inside the dropzone (`pointer-events: none` so drag events reach `__zone`). |
| `.file-upload__icon`                                                    | Upload/image glyph inside the dropzone.                                                                     |
| `.file-upload__text`                                                    | Primary dropzone label ("Drop files or click to browse").                                                   |
| `.file-upload__subtext`                                                 | Secondary helper line under `__text`.                                                                       |
| `.file-upload__browse`                                                  | Inline "browse" link-style span (underlined, primary color) for use inside `__text`.                        |
| `.file-upload__constraints`                                             | Helper text below the dropzone (e.g. "Maximum file size: 10MB").                                            |
| `.file-upload__list`                                                    | Container for the rendered file items, appended below the dropzone.                                         |
| `.file-upload__item`                                                    | One file row: preview + info + actions.                                                                     |
| `.file-upload__preview`                                                 | Thumbnail/icon box on the left of an item.                                                                  |
| `.file-upload__preview-icon`                                            | Fallback file-type icon inside `__preview` when no image preview is available.                              |
| `.file-upload__info`                                                    | Column of filename + meta inside an item.                                                                   |
| `.file-upload__filename`                                                | File name, truncated with ellipsis.                                                                         |
| `.file-upload__meta`                                                    | Row holding filesize + status.                                                                              |
| `.file-upload__filesize`                                                | Formatted file size text.                                                                                   |
| `.file-upload__status`                                                  | Status text + icon (Pending/Uploading/Complete).                                                            |
| `.file-upload__progress`                                                | Wrapper for the progress bar, appended once upload starts.                                                  |
| `.file-upload__progress-bar`                                            | Track for the fill.                                                                                         |
| `.file-upload__progress-fill`                                           | The animated fill, width set inline by JS as upload % changes.                                              |
| `.file-upload__progress-text`                                           | Optional percentage/status text under the bar.                                                              |
| `.file-upload__actions`                                                 | Row of per-item action buttons (e.g. remove).                                                               |
| `.file-upload__action`                                                  | A single icon action button.                                                                                |
| `.file-upload__action--remove`                                          | Remove-file modifier — turns red on hover.                                                                  |
| `.file-upload__error-message`                                           | Inline per-file error text (shown under a `--error` item).                                                  |
| `.file-upload__error-text`                                              | Dropzone-level error banner (distinct from per-file `__error-message`).                                     |
| `.file-upload__sr-only`                                                 | Visually-hidden screen-reader-only text.                                                                    |
| `.file-upload--sm` / `--lg`                                             | Size modifiers — adjust `__zone` padding/min-height, `__icon` size, `__text` font-size.                     |
| `.file-upload--button`                                                  | Variant: dropzone renders as an inline solid-primary button instead of a block dashed zone.                 |
| `.file-upload--image-grid`                                              | Variant: `__list` becomes a responsive grid of square `__item` tiles with hover-reveal actions.             |
| `.file-upload__zone--active`                                            | Dragging-over state (while a drag is in progress over the dropzone).                                        |
| `.file-upload__zone--error`                                             | Dropzone-level error state (e.g. invalid file type dropped).                                                |
| `.file-upload__zone--disabled`                                          | Disabled dropzone — not clickable, muted.                                                                   |
| `.file-upload__item--pending` / `--uploading` / `--success` / `--error` | Per-file state — see States below.                                                                          |

## 4. Tokens used

| Token                                                                                                            | Used for                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `--size-16` / `--size-20` / `--size-24` / `--size-32` / `--size-40` / `--size-48` / `--size-64`                  | Icon and preview dimensions across default/sm/lg/mobile/button variants       |
| `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-6` / `--space-8` / `--space-10`                 | Padding and gaps throughout                                                   |
| `--space-40`                                                                                                     | Mobile dropzone `min-height` (160px)                                          |
| `--color-bg-primary` / `--color-bg-secondary` / `--color-bg-tertiary`                                            | Dropzone/item/preview backgrounds                                             |
| `--color-border-subtle`                                                                                          | Dropzone dashed border, item border, action-button border (see Bug fix below) |
| `--color-border-medium`                                                                                          | Action-button hover border                                                    |
| `--color-primary` / `--color-button-primary-bg` / `--color-button-primary-hover` / `--color-button-primary-text` | Hover/active accents and the `--button` variant's solid fill                  |
| `--color-error` / `--color-success`                                                                              | Error/success per-file accents and the error banner                           |
| `--color-text-primary` / `--color-text-muted` / `--color-text-tertiary`                                          | Text color by emphasis level                                                  |
| `--primary-alpha-5` / `--primary-alpha-10`                                                                       | Active dropzone tint and its focus-style ring                                 |
| `--radius-md` / `--radius-lg` / `--radius-full`                                                                  | Corner rounding (controls / dropzone / progress bar)                          |
| `--shadow-sm` / `--shadow-primary-lg`                                                                            | Item hover elevation / `--button` variant hover elevation                     |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg`                                                          | Font sizes by context/size variant                                            |
| `--font-sans` / `--font-medium` / `--font-semibold`                                                              | Body font family and label/filename/browse-link weight                        |
| `--duration-normal`                                                                                              | Progress-fill width transition (was a hardcoded `0.3s`)                       |
| `--duration-moderate`                                                                                            | Image-grid hover-reveal actions transition (was a hardcoded `0.2s`)           |
| `--transition-all-fast`                                                                                          | Most hover/focus transitions                                                  |

**New tokens added while migrating this file:** none. `--duration-normal`
and `--duration-moderate` (200ms, added by a concurrently-running sibling
migration for the same widely-repeated `0.2s ease` idiom) both had exact
matches for this file's `0.3s`/`0.2s` raw durations.

**Bug fix (not a token addition):** `.file-upload__zone`, `.file-upload__item`,
`.file-upload__item--pending`, and `.file-upload__action` all referenced
`var(--color-border)` — a custom property that **doesn't exist anywhere in
the token layer** (the full token is `--color-border-subtle`; compare
`--color-input-border: var(--color-border-subtle)` in
`tokens/semantic/colors.css`). With no fallback supplied, each of those
`border`/`border-color` declarations was invalid and silently dropped,
meaning the dropzone's dashed border, file-item borders, and action-button
borders were **not rendering at all** before this fix. Corrected to
`var(--color-border-subtle)` in all four places — this restores intended
behavior (visible dashed/solid borders), it isn't a value change. This is
the same class of bug documented in `specs/components/date-picker.md`
(`--color-primary-alpha-20` → `--primary-alpha-20`) and found again in
`date-range-picker.css` during this same migration pass (see
`specs/components/date-range-picker.md`).

## 5. Props/API

File Upload is markup + CSS classes. There are **two separate, divergent**
JS entry points for it, which is worth calling out explicitly:

- `javascript/index.js`'s `Aural.initFileUpload(uploadId, options)` queries
  `.aural-file-upload__dropzone`, `.aural-file-upload__input`, and
  `.aural-file-upload__files` — class names that **do not exist** in this
  CSS file (which uses unprefixed `.file-upload__zone` / `__input` /
  `__list`) or in `docs/components/file-upload.html`. Calling
  `Aural.initFileUpload()` against the markup documented here is a no-op
  (its internal `querySelector` calls return `null`). Treat it as stale/for
  a different markup convention, not as this component's real init path.
- `stories/FileUpload.stories.ts` instead defines and uses its own local
  `initFileUpload(container)` helper (not exported, not part of the
  `Aural` global) that queries the correct `.file-upload__zone` /
  `__input` / `__list` classes and implements drag-and-drop, per-file
  rendering, remove, and a simulated upload-progress animation. This is
  the only working reference implementation for this component's behavior
  today — consumers wiring up `File Upload` should model their own JS on
  the Storybook helper, not on `Aural.initFileUpload`.

`Aural.initFileUpload(uploadId, options)` options (as documented in the
function signature, even though the selectors inside don't match this
component's markup):

| Option         | Type                                | Description                                 |
| -------------- | ----------------------------------- | ------------------------------------------- |
| `maxSize`      | number (default `10 * 1024 * 1024`) | Max file size in bytes.                     |
| `allowedTypes` | string[] (default `[]`)             | Allowed MIME types; empty = no restriction. |
| `multiple`     | boolean (default `true`)            | Whether multiple files are accepted.        |
| `onUpload`     | callback                            | Called with accepted files.                 |

## 6. States

| State                 | Trigger                                             | Effect                                                                                                                      |
| --------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Hover (zone)          | `.file-upload__zone:hover:not(--disabled)`          | Border turns primary, background shifts to `--color-bg-primary`.                                                            |
| Focus-within          | `.file-upload__zone:focus-within`                   | 2px primary outline, offset 2px.                                                                                            |
| Dragging              | `.file-upload__zone--active`                        | Primary border, `--primary-alpha-5` tint background, `--primary-alpha-10` focus-style ring; icon turns primary + scales up. |
| Error (dropzone)      | `.file-upload__zone--error`                         | Error-colored border + faint error-tinted background.                                                                       |
| Disabled              | `.file-upload__zone--disabled`                      | `cursor: not-allowed`, 50% opacity, tertiary background.                                                                    |
| Item hover            | `.file-upload__item:hover`                          | `--shadow-sm` elevation.                                                                                                    |
| Item pending          | `.file-upload__item--pending`                       | Default subtle border, "Pending" status.                                                                                    |
| Item uploading        | `.file-upload__item--uploading`                     | Primary border + tint, primary-colored status, animated progress fill.                                                      |
| Item success          | `.file-upload__item--success`                       | Success-colored border + faint tint, success status, success-colored progress fill.                                         |
| Item error            | `.file-upload__item--error`                         | Error-colored border + faint tint, error status, `__error-message` shown.                                                   |
| Action hover          | `.file-upload__action:hover`                        | Tertiary background, medium border, primary text.                                                                           |
| Remove action hover   | `.file-upload__action--remove:hover`                | Error-colored fill, white icon.                                                                                             |
| Action focus-visible  | `.file-upload__action:focus-visible`                | 2px primary outline, offset 2px.                                                                                            |
| Image-grid item hover | `.file-upload--image-grid .file-upload__item:hover` | Reveals the otherwise-hidden `__actions` row (opacity 0→1).                                                                 |
| Reduced motion        | `prefers-reduced-motion: reduce`                    | Zone/item/progress-fill/action/icon transitions and animations disabled.                                                    |

**Responsive:** below `640px`, the dropzone's padding/min-height shrink,
icon/preview sizes drop, text drops to `--text-sm`, and the image-grid's
`minmax()` tile size shrinks from 120px to 100px.

## 7. Code example

```html
<div class="file-upload" id="upload-basic">
  <label class="file-upload__zone">
    <input type="file" class="file-upload__input" multiple />
    <div class="file-upload__content">
      <i data-lucide="upload" class="file-upload__icon"></i>
      <span class="file-upload__text">Drop files here or click to browse</span>
      <span class="file-upload__subtext">Support for multiple files</span>
    </div>
  </label>
  <div class="file-upload__list"></div>
</div>
```

```js
// See stories/FileUpload.stories.ts's local `initFileUpload()` helper for
// a working reference implementation (drag/drop, preview, simulated
// progress, remove) — Aural.initFileUpload() in javascript/index.js
// targets a different, unprefixed-vs-prefixed markup convention and is a
// no-op against this component's actual classes (see Props/API above).
```

## 8. Cross-references

- **Input** — File Upload's visually-hidden native `<input>` uses the same
  sr-only clip-rect recipe as other components' screen-reader-only text.
- **Progress** — `.file-upload__progress-bar`/`__progress-fill` duplicate a
  simplified version of the standalone Progress component's track/fill
  pattern, scoped to this component instead of reusing it directly.
- **Color Picker**, **Date Range Picker**, **Time Picker** — migrated in
  the same pass; unrelated functionally.
