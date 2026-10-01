# Accordion

## 1. Metadata

|                   |                                                     |
| ----------------- | --------------------------------------------------- |
| Name              | Accordion                                           |
| Category          | Disclosure                                          |
| Status            | Stable                                              |
| CSS file          | `components/accordion.css`                          |
| Naming convention | Flat kebab-case (`.accordion`, `.accordion-header`) |

## 2. Overview

Accordion is a set of vertically-stacked sections that expand and collapse
to reveal content, letting users focus on one section at a time while
reducing visual clutter. Built around a `<button>` header (`aria-expanded`)
and a content panel (`role="region"`, `hidden`) per item.

**When to use:**

- **FAQs** — collapsible question/answer pairs for easy scanning
- **Documentation** — structure long-form content into navigable sections
- **Settings panels** — group related settings into collapsible categories
- **Comparison details** — show/hide detailed specs on demand
- **Long forms** — break into manageable, progressive sections

**When NOT to use:**

- For critical information the user must see immediately — don't hide it behind a collapsed panel
- For short content that already fits on screen — an accordion adds complexity with no benefit
- For primary navigation — use Tabs or a Navbar instead
- For a single collapsible section — consider a Drawer or a simpler disclosure pattern
- For heavily nested/complex content — accordions work best with simple text content

## 3. Anatomy

| Class                                                                                              | Purpose                                                                                                                          |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `.accordion`                                                                                       | Outer container — column flex, bordered, rounded, clips children.                                                                |
| `.accordion-item`                                                                                  | One section — background + bottom divider (last item has no divider).                                                            |
| `.accordion-header`                                                                                | The clickable `<button>` — flex row, icon gap, 44px min-height touch target.                                                     |
| `.accordion-icon`                                                                                  | Chevron/indicator icon inside the header; rotates 180° when `aria-expanded="true"`.                                              |
| `.accordion-panel`                                                                                 | Collapsible content wrapper — animates `max-height`/`opacity`; uses `[hidden]` to fully remove it from layout/AT when collapsed. |
| `.accordion-content`                                                                               | Padded inner content of the panel.                                                                                               |
| `.accordion-sm` / `.accordion-lg`                                                                  | Size modifiers scaling header/content padding, font-size, and icon size.                                                         |
| `.accordion-flush`                                                                                 | Removes the outer border/radius, for embedding inside another container (e.g. a card).                                           |
| `.accordion-separated`                                                                             | Each `.accordion-item` becomes its own bordered, rounded, gapped card instead of a continuous list.                              |
| `.accordion-filled`                                                                                | Tinted header background (resting, hover, and expanded states).                                                                  |
| `.accordion-header-with-icon` / `.accordion-header-icon`                                           | Optional leading icon before the header label.                                                                                   |
| `.accordion-header-with-description` / `.accordion-header-title` / `.accordion-header-description` | Two-line header layout (title + secondary description).                                                                          |
| `.accordion-header-with-badge` / `.accordion-badge`                                                | Optional count/status badge in the header.                                                                                       |
| `.accordion-always-open`                                                                           | Marker class (no own styles) read by the JS to allow multiple items open at once.                                                |
| `.accordion-nested`                                                                                | Indents and left-borders a nested accordion inside another item.                                                                 |
| `.accordion-loading`                                                                               | Replaces the chevron with a spinning loading indicator and disables interaction (`pointer-events: none`).                        |

## 4. Tokens used

| Token                                                                                              | Used for                                                                                |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `--color-accordion-bg` / `--color-accordion-border`                                                | `.accordion-item` background / dividers, outer border                                   |
| `--color-accordion-header-bg` / `--color-accordion-header-hover` / `--color-accordion-header-text` | Header background, hover background, label color                                        |
| `--color-accordion-icon`                                                                           | `.accordion-icon` color                                                                 |
| `--color-accordion-panel-bg` / `--color-accordion-panel-text`                                      | Panel background / content text                                                         |
| `--color-input-bg`                                                                                 | `.accordion-filled` header resting background                                           |
| `--color-bg-glass-light`                                                                           | `.accordion-filled` header hover / expanded background                                  |
| `--color-bg-tertiary` / `--color-text-secondary`                                                   | `.accordion-badge` background / text                                                    |
| `--color-text-muted`                                                                               | `.accordion-header-icon` color                                                          |
| `--color-border-medium`                                                                            | `.accordion-loading` spinner track                                                      |
| `--color-primary`                                                                                  | Focus ring, `.accordion-loading` spinner active segment                                 |
| `--size-16` / `--size-20` / `--size-24`                                                            | Icon dimensions at `.accordion-sm` / default / `.accordion-lg`, and the loading spinner |
| `--size-44`                                                                                        | Header `min-height` touch target                                                        |
| `--space-1` … `--space-6`                                                                          | Padding, gaps, icon margins at default/sm/lg sizes                                      |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg`                                            | Badge / description / default / `.accordion-lg` font sizes                              |
| `--font-normal` / `--font-semibold`                                                                | Description / header-title weight                                                       |
| `--font-sans` / `--leading-normal` / `--leading-relaxed`                                           | Typography base / header line-height / content line-height                              |
| `--radius-full` / `--radius-md`                                                                    | Badge pill / accordion & item corners                                                   |
| `--duration-normal`                                                                                | Panel expand/collapse transition                                                        |
| `--transition-all-fast`                                                                            | Header hover/focus transition                                                           |

**New tokens needed:** none for color/size/spacing — every raw value in
this file already had a matching token once `--size-16/20/24/44` and the
existing `--color-input-bg`/`--color-bg-glass-light` semantic tokens were
applied. Two values are intentionally left un-tokenized with explanatory
comments rather than invented tokens:

- `max-height: 2000px` on `.accordion-panel:not([hidden])` —
  `/* aural-ignore: content-fit ceiling, not a design value */`. It's a
  "big enough" cap for the expand transition to animate against, not a
  deliberate design measurement.
- The `0.2s` (icon rotation) and `0.6s` (loading spinner) durations are
  left as plain warnings from `token-audit.js` rather than forced onto
  `--duration-fast`/`--duration-slower` (150ms/750ms) — both are a
  non-blocking audit category, and rounding them to the nearest existing
  duration token would be a small animation-timing change, which isn't
  value-preserving.

## 5. Props/API

Accordion is markup + CSS classes, driven by a small JS API in
`javascript/index.js` (the global `Aural` object). `Accordion.stories.ts`
has no `argTypes` block — variant behavior is demonstrated purely through
markup/class combinations in each story.

| Method                          | Description                                                                                                                                                                               |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Aural.initAccordions()`        | Wires up click handlers for every `.accordion` on the page. By default only one `.accordion-item` per `.accordion` stays open; `.accordion-always-open` disables that mutual-exclusivity. |
| `Aural.openAccordion(itemId)`   | Sets `aria-expanded="true"` and removes `hidden` from the item's panel.                                                                                                                   |
| `Aural.closeAccordion(itemId)`  | Sets `aria-expanded="false"` and sets `hidden` on the item's panel.                                                                                                                       |
| `Aural.toggleAccordion(itemId)` | Opens if closed, closes if open.                                                                                                                                                          |

## 6. States

| State               | Selector                                                              | Effect                                                                                                                      |
| ------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Default (collapsed) | `.accordion-header[aria-expanded="false"]`                            | Panel at `max-height: 0; opacity: 0`, chevron pointing down.                                                                |
| Expanded            | `.accordion-header[aria-expanded="true"]`                             | Panel grows to its content height and fades in; `.accordion-icon` rotates 180°.                                             |
| Hover               | `.accordion-header:hover`                                             | Background shifts to `--color-accordion-header-hover` (or `.accordion-filled`'s tint).                                      |
| Focus               | `.accordion-header:focus-visible`, `.accordion-content:focus-visible` | 2px `--color-primary` outline, `-2px` offset (inset ring).                                                                  |
| Disabled            | `.accordion-header[disabled]`                                         | `opacity: 0.5`, `cursor: not-allowed`, `pointer-events: none`.                                                              |
| Loading             | `.accordion-loading`                                                  | Chevron replaced by a spinning indicator; header interaction disabled.                                                      |
| Reduced motion      | `prefers-reduced-motion: reduce`                                      | Panel height transition, icon rotation, and spinner animation are all disabled; expanded panels snap to `max-height: none`. |

## 7. Code example

```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="panel-1">
      <span>Section 1</span>
      <svg class="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
        <path
          d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"
        />
      </svg>
    </button>
    <div id="panel-1" class="accordion-panel" role="region" hidden>
      <div class="accordion-content">Content for section 1</div>
    </div>
  </div>
</div>

<script>
  window.Aural?.initAccordions();
</script>
```

## 8. Cross-references

- **Tabs** — use Tabs instead of Accordion for equal-weight navigable views of the same object, rather than independent stacked content.
- **Card** — `.accordion-flush` is the variant intended for embedding inside a `.card`.
- **Badge** — `.accordion-badge` follows the same small-pill pattern as Badge.
- **Drawer** — for a single collapsible section, prefer a Drawer over a one-item accordion.
