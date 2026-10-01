# Pattern: Tabbed Settings Layout

Source: `docs/patterns.html` ("Settings Page Layout" pattern).

## What this covers

Composing `.card` + `.tabs` (pills variant) + per-tab panels into a settings-style page: one `.card` holds a `tabs tabs-pills` navigation strip at the top and a set of sibling panel `div`s below it, with only the active panel visible.

## Structure

```html
<div class="card">
  <div class="tabs tabs-pills" role="tablist">
    <button class="tab tab-active" role="tab">...</button>
    <button class="tab" role="tab">...</button>
  </div>

  <div id="profile-settings" class="tab-panel">...</div>
  <div id="privacy-settings" class="tab-panel" style="display: none;">...</div>
</div>
```

- The tab strip uses `role="tablist"` on the container and `role="tab"` on each button, per the a11y conventions in `specs/foundations/accessibility.md` — don't drop the ARIA roles even though this is "just" a composition pattern copied from the demo. The demo's own JS toggles `tab-active` on click and `display: none`/`block` on panels; a real implementation should additionally drive `aria-selected` on the tabs and `hidden`/`tabindex` on the panels per `components/tabs.css`'s documented usage, since the raw pattern demo in `docs/patterns.html` is simplified.
- Each settings panel groups its controls by topic (Profile / Privacy / Notifications in the source example) — one `<h3>` panel heading, then either a `<form>` (for text fields) or a vertical stack of label+description+control rows (for toggles).
- The toggle-row sub-pattern repeats inside Privacy/Notifications panels: a `flex` row with `justify-content: space-between`, a left-hand text block (bold title + muted `--text-sm` description), and a `.toggle` control on the right.

## Tokens used

`--space-4`/`--space-6` for panel and field spacing, `--font-semibold` for row titles, `--text-sm` + `--color-text-tertiary` for row descriptions. Nothing here introduces a token beyond what's already documented in `specs/foundations/`.

## Judgment call

`docs/patterns.html` only contains one layout pattern of this shape (tabbed settings). A generic "tabs + panels" pattern doc was not written separately since the only real-world instance in the source material is this settings-specific composition — write a more general tabs-layout pattern doc later only if a second distinct use case shows up.
