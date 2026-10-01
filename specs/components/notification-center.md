# Notification Center

## 1. Metadata

|                   |                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Name              | Notification Center                                                                                                                  |
| Category          | Navigation / Feedback                                                                                                                |
| Status            | Stable                                                                                                                               |
| CSS file          | `components/notification-center.css`                                                                                                 |
| Naming convention | `aural-` prefixed BEM (`.aural-notification-center`, `.aural-notification-center__item`, `.aural-notification-center__item--unread`) |

## 2. Overview

Notification Center is a bell-icon trigger with an anchored dropdown panel
(`.aural-notification-center__dropdown`) listing notifications with
read/unread state, category tabs/filters, and per-item type coloring
(info/success/warning/error). It's a persistent, historical inbox the user
opens and triages at their own pace — unlike Toast/Snackbar, which interrupt
with a single, temporary message.

**When to use:**

- A persistent activity feed of recent system/user activity
- Centralizing alerts and warnings the user needs to review, not just glance at
- Social updates (comments, mentions), task-progress updates, system messages

**When NOT to use:**

- A single, transient, auto-dismissing confirmation — use **Toast** or **Snackbar**
- A blocking message requiring immediate acknowledgment — use **Dialog**

## 3. Anatomy

| Class                                                                                           | Purpose                                                                                                  |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `.aural-notification-center`                                                                    | Outer relative-positioned wrapper (trigger + dropdown).                                                  |
| `.aural-notification-center__trigger` / `__icon`                                                | The bell-icon button; `--active` modifier while the dropdown is open.                                    |
| `.aural-notification-center__badge` / `--pulse`                                                 | Unread-count badge on the trigger; empty content auto-hides it; `--pulse` adds an attention animation.   |
| `.aural-notification-center__dropdown` / `--open`                                               | The anchored panel (`top: 100% + gap`, right-aligned by default); toggles via `--open`.                  |
| `.aural-notification-center__dropdown--left` / `--center`                                       | Alternate horizontal anchoring.                                                                          |
| `.aural-notification-center__header` / `__title` / `__actions` / `__action`                     | Panel header with a title and action buttons (e.g. "Mark all read").                                     |
| `.aural-notification-center__tabs` / `__tab` / `__tab--active`                                  | Category filter row.                                                                                     |
| `.aural-notification-center__list`                                                              | Scrollable notification list.                                                                            |
| `.aural-notification-center__item` / `--unread` / `--info/--success/--warning/--error`          | One notification row; unread adds a left accent bar and tinted background; type variants color the icon. |
| `.aural-notification-center__item-icon` / `-content` / `-title` / `-message` / `-time` / `-dot` | Row internals — leading icon, text block (2-line-clamped message), timestamp, unread dot.                |
| `.aural-notification-center__empty` / `-icon` / `-text`                                         | Empty-list state.                                                                                        |
| `.aural-notification-center__footer` / `__footer-link`                                          | Bottom "View all" link row.                                                                              |
| `.aural-notification-center--sm` / `--lg`                                                       | Dropdown size presets.                                                                                   |

## 4. Tokens used

| Token                                                                                             | Used for                                                                                                            |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `--color-bg-primary` / `--color-bg-secondary` / `--color-bg-tertiary`                             | Badge border / dropdown background & list scrollbar track / item-icon & scrollbar-track                             |
| `--color-bg-hover` / `--primary-alpha-5` / `--primary-alpha-10`                                   | Trigger/tab/item hover / unread-item background (default & hover)                                                   |
| `--color-border-medium` / `--color-border-subtle`                                                 | Trigger & dropdown border / header-tabs-footer dividers                                                             |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-tertiary`                       | Title & item-title / tab & item-message / item-time & empty-icon                                                    |
| `--color-primary`                                                                                 | Active trigger/tab, action links, unread accent & dot                                                               |
| `--color-error`                                                                                   | Badge background                                                                                                    |
| `--color-info-bg` / `--color-success-bg` / `--color-warning-bg` / `--color-error-bg`              | Item-icon background per type variant (shared with Dialog — see note)                                               |
| `--color-info` / `--color-success` / `--color-warning` / `--color-error`                          | Item-icon glyph color per type variant                                                                              |
| `--z-dropdown`                                                                                    | Dropdown stacking context (per `tokens/semantic/z-index.css`'s own note that this tier covers "notification panel") |
| `--duration-moderate`                                                                             | Dropdown open/close opacity+transform+visibility transition                                                         |
| `--size-6` / `--size-18` / `--size-20` / `--size-40` / `--size-44` / `--size-64`                  | Badge offsets/size, icon sizes, touch target, empty-icon                                                            |
| `--size-300` / `--size-360` / `--size-380` / `--size-480` / `--size-600`                          | Dropdown width/max-height across default/`--sm`/`--lg` (new/shared tokens — see note)                               |
| `--space-0-5` / `--space-1` / `--space-2` / `--space-3` / `--space-4` / `--space-5` / `--space-8` | Gaps and padding throughout                                                                                         |
| `--text-xs` / `--text-sm` / `--text-base`                                                         | Message/time/footer-link & tab text / title & empty-text / header title                                             |
| `--font-medium` / `--font-semibold` / `--font-bold`                                               | Tab/action/message-adjacent text / title & item-title / badge count                                                 |
| `--leading-tight` / `--leading-relaxed`                                                           | Item-title / item-message line-height                                                                               |
| `--radius-sm` / `--radius-md` / `--radius-lg` / `--radius-full`                                   | Scrollbar-thumb & action corners / tab & item-icon corners / dropdown corners / trigger & badge pill                |
| `--shadow-xl`                                                                                     | Dropdown elevation                                                                                                  |
| `--transition-all-fast`                                                                           | Trigger/tab/item/action/footer-link hover transitions                                                               |

**New tokens added while migrating this file:**

- `--size-300` / `--size-380` / `--size-600` (`tokens/core/size.css`, new
  "Overlay Height/Width Presets" section) — Notification Center's own
  sm/default/lg dropdown width and lg max-height; `--size-300` and `--size-600`
  turned out to match Carousel's `--sm` height and Image Gallery's lightbox
  caption width respectively, so they're shared rather than duplicated.
- `--color-info-bg` / `--color-success-bg` / `--color-warning-bg` (`tokens/semantic/colors.css`,
  State Colors section) — added while migrating Dialog, completing the
  `--color-error-bg`-led family; this file's item-icon variants already
  referenced these exact token names before the tokens existed, so adding
  them resolved this file's errors too.
- A bespoke `0.65rem` badge count font-size and the `2s` badge-pulse
  animation duration are intentionally left — the former marked
  `/* aural-ignore */` as a one-off smaller-than-`--text-2xs` size, the
  latter left as a literal per the project's non-blocking duration-warning precedent.

## 5. Props/API

Notification Center is markup + CSS classes, driven by a JS API in
`javascript/index.js` (the global `Aural` object):

| Method                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Aural.initNotificationCenter(centerId, options)`      | Wires the trigger toggle, outside-click/Escape-to-close, and a "Mark all read" button. `options`: `notifications` (initial array), `onNotificationClick`, `onMarkAllRead`. Returns `{ addNotification, removeNotification, markAsRead, markAllAsRead, getUnreadCount }`. |
| `Aural.addNotification(centerId, notification)`        | Prepends a new `.aural-notification-center__item` built from `{ id, title, message, time, icon?, type?, unread?, onClick? }` and increments the badge.                                                                                                                   |
| `Aural.markNotificationRead(centerId, notificationId)` | Removes the `--unread` modifier and dot from one item, decrements the badge.                                                                                                                                                                                             |
| `Aural.markAllNotificationsRead(centerId)`             | Clears `--unread`/dot from every item and empties the badge.                                                                                                                                                                                                             |
| `Aural.removeNotification(centerId, notificationId)`   | Removes one item from the DOM, decrementing the badge if it was unread.                                                                                                                                                                                                  |

## 6. States

| State               | Trigger                                                 | Effect                                                                                                                           |
| ------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Closed (default)    | `.aural-notification-center__dropdown` without `--open` | `opacity: 0`, `visibility: hidden`, translated up 8px.                                                                           |
| Open                | `.aural-notification-center__dropdown--open`            | Fades in, becomes visible, translates to resting position; trigger gets `--active`.                                              |
| Unread item         | `.aural-notification-center__item--unread`              | `--primary-alpha-5` background, `--color-primary` left accent bar, a trailing unread dot; hover deepens to `--primary-alpha-10`. |
| Type variant (item) | `--info` / `--success` / `--warning` / `--error`        | Recolors the item-icon background/glyph to match the notification type.                                                          |
| Active tab          | `.aural-notification-center__tab--active`               | `--primary-alpha-10` background, `--color-primary` text/border.                                                                  |
| Badge pulse         | `.aural-notification-center__badge--pulse`              | `opacity` pulse animation (2s) to draw attention to new unread notifications.                                                    |
| Empty badge         | `.aural-notification-center__badge:empty`               | Hidden entirely (`display: none`).                                                                                               |
| Empty list          | No notifications                                        | Shows `.aural-notification-center__empty` with a muted icon and message.                                                         |
| Reduced motion      | `prefers-reduced-motion: reduce`                        | Dropdown transition and the badge pulse animation are skipped.                                                                   |

## 7. Code example

```html
<div class="aural-notification-center" id="notif-center">
  <button class="aural-notification-center__trigger" aria-label="Notifications">
    <span class="aural-notification-center__icon"></span>
    <span class="aural-notification-center__badge aural-notification-center__badge--pulse">3</span>
  </button>
  <div class="aural-notification-center__dropdown">
    <div class="aural-notification-center__header">
      <h3 class="aural-notification-center__title">Notifications</h3>
      <button class="aural-notification-center__action" data-action="mark-all-read">
        Mark all read
      </button>
    </div>
    <div class="aural-notification-center__list"></div>
  </div>
</div>

<script>
  Aural.initNotificationCenter('notif-center', {
    notifications: [
      {
        id: '1',
        title: 'Build Successful',
        message: 'Your project built.',
        time: '2m ago',
        type: 'success',
        unread: true,
      },
    ],
  });
</script>
```

## 8. Cross-references

- **Dialog** — the `--color-*-bg` type-tint tokens (info/success/warning/error
  at 10% alpha) are shared between this file's item-icon variants and
  Dialog's icon-swatch variants.
- **Badge** — the trigger's unread-count badge is a simpler, single-purpose
  cousin of the general Badge component.
- **Toast / Snackbar** — for transient, single-action feedback instead of a
  persistent, reviewable inbox.
