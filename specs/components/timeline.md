# Timeline

## 1. Metadata

|                   |                                                              |
| ----------------- | ------------------------------------------------------------ |
| Name              | Timeline                                                     |
| Category          | Data Display                                                 |
| Status            | Stable                                                       |
| CSS file          | `components/timeline.css`                                    |
| Naming convention | BEM (`.aural-timeline__item`, `.aural-timeline--horizontal`) |

## 2. Overview

Timeline displays a chronological sequence of events — milestones, order
tracking, activity history, version history — as a connected series of
markers and content blocks, vertically or horizontally, with
completed/active/pending/error/warning status states per item.

**When to use:**

- Order tracking / shipping status progress
- Project milestones, sprints, and completion status
- Activity feeds and chronological system events
- Multi-step process flows and approval chains
- Version history / changelogs

**When NOT to use:**

- Non-chronological data — use a list or Card grid instead
- Complex branching/conditional workflows — use a flowchart, not a linear timeline
- Real-time streaming updates — consider an activity feed or notification component
- Very small datasets (2–3 items) — a simpler layout may read better

## 3. Anatomy

| Class                                                                                   | Purpose                                                                                            |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `.aural-timeline`                                                                       | Root flex container; `--vertical` (column) or `--horizontal` (row, scrollable) orientation.        |
| `.aural-timeline__item`                                                                 | One event: marker + connector + content.                                                           |
| `.aural-timeline__connector`                                                            | The line between consecutive markers; hidden on the last item.                                     |
| `.aural-timeline__marker` / `__marker-icon`                                             | The circular dot/icon node (32px default); color/border change per status modifier.                |
| `.aural-timeline__item--completed` / `--active` / `--pending` / `--error` / `--warning` | Status modifiers driving marker and connector color.                                               |
| `.aural-timeline__content`                                                              | Text region next to/under the marker.                                                              |
| `.aural-timeline__time`                                                                 | `<time>` label (small, muted, medium weight).                                                      |
| `.aural-timeline__title` / `__description`                                              | Event heading and supporting text.                                                                 |
| `.aural-timeline__meta` / `__tag`                                                       | Row of small metadata tags/badges below the description.                                           |
| `.aural-timeline--card`                                                                 | Wraps each item's content in a bordered, padded card surface with hover elevation.                 |
| `.aural-timeline__marker--avatar`                                                       | Lets a marker host a circular avatar `<img>` instead of an icon.                                   |
| `.aural-timeline--alternating`                                                          | Vertical-only layout that alternates content left/right of a centered spine.                       |
| `.aural-timeline--centered`                                                             | Centers a horizontal timeline's items within its container.                                        |
| `.aural-timeline--sm` / `--lg`                                                          | Smaller/larger marker and text sizing.                                                             |
| `.aural-timeline--dense`                                                                | Reduced spacing between items/content.                                                             |
| `.aural-timeline--interactive`                                                          | Makes items clickable: pointer cursor, hover background, marker scale, focus ring.                 |
| `.aural-timeline--responsive`                                                           | Collapses a horizontal timeline to vertical under `max-width: 768px`; disables alternating layout. |

## 4. Tokens used

| Token                                                                             | Used for                                                                        |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `--color-bg-secondary` / `--color-bg-tertiary` / `--color-bg-hover`               | Marker background, pending marker, interactive hover background                 |
| `--color-border-medium` / `--color-border-subtle`                                 | Default connector/marker border, tag border, card divider                       |
| `--color-primary` / `--color-success` / `--color-warning` / `--color-error`       | Active/completed/warning/error marker and connector colors                      |
| `--primary-alpha-20`                                                              | Active-marker focus-style glow (`box-shadow`)                                   |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary`       | Title, description, time-label text                                             |
| `--font-medium` / `--font-semibold`                                               | Time label weight, title weight                                                 |
| `--leading-tight` / `--leading-relaxed`                                           | Title / description line-height                                                 |
| `--text-xs` / `--text-sm` / `--text-base` / `--text-lg`                           | Time/tag size, base/`--sm` text, `--lg` title/description sizes                 |
| `--radius-sm` / `--radius-md` / `--radius-lg`                                     | Tag/scrollbar corners, interactive focus corners, card corners                  |
| `--shadow-sm` / `--shadow-md`                                                     | `.aural-timeline--card` resting / hover elevation                               |
| `--size-12` / `--size-16` / `--size-24` / `--size-32` / `--size-40` / `--size-48` | Marker/icon dimensions across default/`--sm`/`--lg` variants, connector offsets |
| `--space-0-5` / `--space-1` … `--space-6`                                         | Connector thickness, gaps, padding across variants                              |
| `--transition-all-fast`                                                           | Marker and card hover transitions                                               |

**New tokens added while migrating this file:** none — every raw error
value matched an existing `--size-*`/`--space-*` token exactly.

**Warnings left as `aural-ignore`:** `.aural-timeline--horizontal
.aural-timeline__item`'s `min-width: 280px` — a one-off horizontal-item
width between `--space-64` (256px) and `--space-72` (288px), not worth a
new rung on the spacing scale for a single consumer.

## 5. Props/API

Timeline is pure CSS/markup — there is no JS-driven API. The documented
React wrapper (`stories/Timeline.stories.ts`) models a `TimelineItem` with
`time`, `title`, `description`, `status` (`completed | active | pending |
warning | error`), and `datetime` props that map to the modifier classes
in §3.

## 6. States

| State               | Trigger                                                                           | Effect                                                                                             |
| ------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Pending (default)   | `.aural-timeline__item` with no status modifier                                   | Neutral marker/connector in `--color-border-medium` / `--color-bg-tertiary`.                       |
| Completed           | `.aural-timeline__item--completed`                                                | Marker and connector turn `--color-success`, marker text white.                                    |
| Active              | `.aural-timeline__item--active`                                                   | Marker turns `--color-primary` with a soft glow ring; connector gradients from primary to neutral. |
| Error / Warning     | `.aural-timeline__item--error` / `--warning`                                      | Marker and border turn `--color-error` / `--color-warning`.                                        |
| Interactive hover   | `.aural-timeline--interactive .aural-timeline__item:hover`                        | Content background tints, marker scales to `1.1`.                                                  |
| Focus               | `.aural-timeline--interactive .aural-timeline__item:focus-visible`                | 2px `--color-primary` outline, 2px offset.                                                         |
| Card hover          | `.aural-timeline--card .aural-timeline__content:hover`                            | Border turns primary, elevation increases to `--shadow-md`.                                        |
| Reduced motion      | `prefers-reduced-motion: reduce`                                                  | Marker/content transitions and interactive hover scale disabled.                                   |
| Responsive (mobile) | `.aural-timeline--horizontal.aural-timeline--responsive` under `max-width: 768px` | Switches to a vertical layout; alternating layout is disabled.                                     |

## 7. Code example

```html
<ol class="aural-timeline aural-timeline--vertical" role="list" aria-label="Project timeline">
  <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
    <div class="aural-timeline__connector"></div>
    <div class="aural-timeline__marker">
      <i class="aural-timeline__marker-icon" data-lucide="check" aria-hidden="true"></i>
    </div>
    <div class="aural-timeline__content">
      <time class="aural-timeline__time" datetime="2024-01-15">Jan 15, 2024</time>
      <h3 class="aural-timeline__title">Project Started</h3>
      <p class="aural-timeline__description">Initial planning and setup</p>
      <span class="sr-only">Status: Completed</span>
    </div>
  </li>
  <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
    <div class="aural-timeline__marker">
      <i class="aural-timeline__marker-icon" data-lucide="loader" aria-hidden="true"></i>
    </div>
    <div class="aural-timeline__content">
      <div class="aural-timeline__time">In Progress</div>
      <h3 class="aural-timeline__title">Development</h3>
      <p class="aural-timeline__description">Building core features</p>
      <span class="sr-only">Status: In Progress</span>
    </div>
  </li>
</ol>
```

Accessibility notes (from `stories/Timeline.stories.ts`):

- Use `<ol>`/`<li role="listitem">` for chronological vertical timelines; give the container a descriptive `aria-label`.
- Use `<time datetime="...">` for machine-readable dates.
- Status must be conveyed through text/icons as well as color — pair each item with a screen-reader-only status label (e.g. "Status: Completed").
- Interactive timeline items need visible focus rings and must be reachable via Tab.
- Icons are decorative — mark them `aria-hidden="true"`.

## 8. Cross-references

- **Avatar** — `.aural-timeline__marker--avatar` embeds an Avatar-style circular image in place of an icon marker.
- **Badge** — `.aural-timeline__tag` renders small metadata chips similar in spirit to Badge; use actual `.badge` markup inside `.aural-timeline__meta` for status tags where semantics matter.
- **Card** — `.aural-timeline--card` reuses Card's elevation/border language (`--shadow-sm`/`--shadow-md`, `--radius-lg`) for its content blocks.
