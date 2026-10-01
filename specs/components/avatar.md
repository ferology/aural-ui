# Avatar

## 1. Metadata

|                   |                                                      |
| ----------------- | ---------------------------------------------------- |
| Name              | Avatar                                               |
| Category          | Data Display                                         |
| Status            | Stable                                               |
| CSS file          | `components/avatar.css`                              |
| Naming convention | Flat kebab-case (`.avatar`, `.avatar-status-online`) |

## 2. Overview

Avatar is a compact visual identifier for a user, team, or entity — an
inline-flex circle (or square/rounded-square) that shows an image, falls
back to initials when no image is available, and can carry a presence
status dot or sit in a stacked group.

**When to use:**

- **User profiles** — headers, navigation, account menus
- **Comment threads and discussions** — identify authors at a glance
- **Team member lists** — collaboration tools, people pickers
- **Activity feeds and notifications** — attribute an action to a person
- **Chat/messaging interfaces** — identify participants

**When NOT to use:**

- Logo or brand images — use `<img>` directly
- Product thumbnails — use Card with an image region instead
- Decorative images with no user/entity context
- Large hero images — Avatar is sized for small profile pictures only

## 3. Anatomy

| Class                                                     | Purpose                                                                                                                |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `.avatar`                                                 | Base container — `40×40px` circle, centers an `<img>` or initials `<span>`, uppercase text transform on the span.      |
| `.avatar-xs` / `.avatar-sm` / `.avatar-lg` / `.avatar-xl` | Size modifiers: `24px` / `32px` / `56px` / `80px` (default is `40px`), with matching font-size and SVG fallback scale. |
| `.avatar-square`                                          | Rounded-square shape (`--radius-md`) instead of a circle.                                                              |
| `.avatar-rounded`                                         | Rounded-square shape with a larger radius (`--radius-lg`).                                                             |
| `.avatar-status-online` / `-offline` / `-busy` / `-away`  | Adds a `::after` presence dot, bottom-right, colored by status.                                                        |
| `.avatar-group`                                           | Horizontal stack of `.avatar` children, reverse row order, overlapping with a negative left margin.                    |
| `.avatar-group-stacked`                                   | Vertical variant of `.avatar-group` (column, overlapping top margin).                                                  |
| `.avatar-wrapper` + `.avatar-wrapper > .badge`            | Positions a `.badge` (notification count) absolutely at the avatar's top-right corner.                                 |
| `.avatar-clickable`                                       | Interactive affordance: cursor pointer, hover/active scale, focus-visible ring. Must be a real `<button>`.             |

## 4. Tokens used

| Token                                                                                           | Used for                                                                |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `--color-avatar-bg` / `--color-avatar-border` / `--color-avatar-text`                           | `.avatar` background, border, initials text color                       |
| `--color-avatar-status-online` / `-offline` / `-busy` / `-away`                                 | Presence dot colors                                                     |
| `--color-text-muted`                                                                            | Fallback SVG icon color                                                 |
| `--color-bg-primary`                                                                            | Status dot border / avatar-group overlap border / badge border          |
| `--color-border-medium`                                                                         | `.avatar-clickable:hover` border                                        |
| `--color-primary`                                                                               | `.avatar-clickable:focus-visible` outline                               |
| `--size-24` / `--size-32` / `--size-40` / `--size-56` / `--size-80` / `--size-20` / `--size-44` | Avatar/badge dimensions across size variants and the notification badge |
| `--space-2` / `--space-3` / `--space-1`                                                         | Status-dot minimum size, avatar-group overlap, badge padding            |
| `--text-2xs` / `--text-xs` / `--text-sm` / `--text-base` / `--text-xl`                          | Initials font size per avatar size                                      |
| `--font-sans` / `--font-semibold`                                                               | Initials typography                                                     |
| `--radius-md` / `--radius-lg`                                                                   | `.avatar-square` / `.avatar-rounded`                                    |
| `--transition-all-fast`                                                                         | Group-hover lift and clickable hover/active transitions                 |

**New tokens added while migrating this file:** none — every raw value
had an exact match in the existing `--size-*`/`--space-*`/`--text-2xs`
scale.

**Warnings left as `aural-ignore`:**

- The notification-badge offset (`top: -4px; right: -4px;`) — a one-off
  overlap offset, not a spacing-scale value.
- The touch-device status-dot bump (`min-width/min-height: 10px`) inside
  `@media (pointer: coarse)` — a one-off enlargement with no token at that
  step.

## 5. Props/API

Avatar is pure CSS/markup — there is no JS-driven API. Framework wrapper
examples (React/Vue/Svelte, documented in `stories/Avatar.stories.ts`)
model `src`, `initials`, `alt`, `size`, `status`, and `clickable` as
component props that map directly to the classes in §3, plus an
`onError` handler that swaps the broken `<img>` for the initials `<span>`.

## 6. States

| State              | Trigger                                     | Effect                                                                                                                |
| ------------------ | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Default            | —                                           | Static circle/square, image or initials, no interaction affordance.                                                   |
| Image-load failure | `<img>` `onerror`                           | Consumer swaps to the initials `<span>` fallback (not CSS-driven).                                                    |
| Presence status    | `.avatar-status-{online,offline,busy,away}` | Colored dot rendered via `::after`, independent of size/shape variant.                                                |
| Hover (clickable)  | `.avatar-clickable:hover`                   | Scales to `1.05`, border tints to `--color-border-medium`.                                                            |
| Active (clickable) | `.avatar-clickable:active`                  | Scales to `0.95`.                                                                                                     |
| Focus (clickable)  | `.avatar-clickable:focus-visible`           | 2px `--color-primary` outline, 2px offset.                                                                            |
| Reduced motion     | `prefers-reduced-motion: reduce`            | Clickable and avatar-group hover/active transforms and transitions disabled.                                          |
| Touch device       | `@media (pointer: coarse)`                  | Status dots enlarge to a 10px floor; `.avatar-clickable` (including `-sm`/`-xs`) gets a 44×44px minimum touch target. |

## 7. Code example

```html
<!-- Image avatar -->
<div class="avatar">
  <img src="https://i.pravatar.cc/150?img=1" alt="John Doe" />
</div>

<!-- Initials fallback -->
<div class="avatar avatar-lg">
  <span>JD</span>
</div>

<!-- With presence status -->
<div class="avatar avatar-status-online">
  <img src="https://i.pravatar.cc/150?img=1" alt="Jane Smith" />
</div>

<!-- Clickable avatar (must be a real button) -->
<button class="avatar avatar-clickable" aria-label="View profile of John Doe">
  <img src="https://i.pravatar.cc/150?img=1" alt="" />
</button>

<!-- Avatar group with overflow count -->
<div class="avatar-group" aria-label="Team members">
  <div class="avatar"><img src="user1.jpg" alt="User 1" /></div>
  <div class="avatar"><img src="user2.jpg" alt="User 2" /></div>
  <div class="avatar"><span>+5</span></div>
</div>

<!-- Avatar with notification badge -->
<div class="avatar-wrapper">
  <div class="avatar"><img src="user1.jpg" alt="User 1" /></div>
  <span class="badge badge-error badge-sm" aria-hidden="true">3</span>
</div>
```

Accessibility notes (from `stories/Avatar.stories.ts`):

- Provide descriptive `alt` text identifying the person/entity; for a
  clickable avatar, use `alt=""` on the image and put the description in
  the button's `aria-label` instead (e.g. "View profile of John Doe").
- Always provide initials, or generate them from a name, so there's a
  graceful fallback when an image fails to load.
- Status color alone isn't sufficient — pair presence dots with a
  screen-reader-only text label (`<span class="sr-only">Online</span>`).
- Clickable avatars must be `<button>` elements (not a `<div>` with a
  click handler) so hover/focus/active states and keyboard activation
  (Enter/Space) work automatically.
- Provide `aria-label` on `.avatar-group` describing the group (e.g.
  "Team members").

## 8. Cross-references

- **Badge** — notification-count badges are positioned on `.avatar-wrapper`; both share the `--text-2xs` compact-label token.
- **Card** — avatars are commonly placed in a `.card-header` alongside a title for user-attributed content.
- **Table** — avatars pair with a name/role cell for user rows (see `specs/components/table.md`).
