# Alert Banner

## 1. Metadata

|                   |                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------- |
| Name              | Alert Banner                                                                            |
| Category          | Feedback / Overlays                                                                     |
| Status            | Stable                                                                                  |
| CSS file          | `components/alert-banner.css`                                                           |
| JS file           | `javascript/index.js` (`Aural.showAlertBanner` / `dismissAlertBanner`)                  |
| Naming convention | BEM-ish, `aural-` prefixed (`.aural-alert-banner__title`, `.aural-alert-banner--solid`) |

## 2. Overview

Alert Banner is a prominent, page-level notification for messages that
affect the entire page or application and should remain visible until the
user acknowledges them — system maintenance windows, cookie/consent
notices, session-expiry warnings, breaking-change announcements. Unlike
Toast/Snackbar, it does not auto-dismiss by default and is meant to be
read, not glanced at.

**When to use:**

- System-wide announcements (maintenance, outages, feature launches)
- Critical errors requiring immediate attention (auth failure, connection loss)
- Cookie/consent notices and terms-of-service updates
- Session warnings with an action ("Your session expires in 5 minutes")
- Breaking-change notices with a migration path

**When NOT to use:**

- Form validation errors — use inline field-level errors instead
- Action confirmation ("Changes saved", "Item deleted") — use **Snackbar**
- Temporary, auto-dismissing notifications — use **Snackbar** or **Toast**
- Long-form content (more than 2-3 sentences) — use a **Modal** or a dedicated page

## 3. Anatomy

| Class                                               | Purpose                                                                                                          |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `.aural-alert-banner`                               | Base container — flex row, left-accent border, slide-in entrance animation.                                      |
| `.aural-alert-banner__icon`                         | Leading status icon (24px, 2px top margin to align with the title baseline).                                     |
| `.aural-alert-banner__content`                      | Flex column wrapping title/message/actions.                                                                      |
| `.aural-alert-banner__title`                        | Bold heading line, colored per variant.                                                                          |
| `.aural-alert-banner__message`                      | Body copy.                                                                                                       |
| `.aural-alert-banner__actions`                      | Row of action buttons, wraps on narrow viewports.                                                                |
| `.aural-alert-banner__action`                       | Secondary (outlined) action button; 44px min-height touch target.                                                |
| `.aural-alert-banner__action--primary`              | Filled variant of the action button for the primary CTA.                                                         |
| `.aural-alert-banner__close`                        | Dismiss button, 44×44px touch target.                                                                            |
| `.aural-alert-banner__close-icon`                   | The close (×) icon itself (20px).                                                                                |
| `.aural-alert-banner--info/success/warning/error`   | Semantic color variant — tints background/border/icon/title to the matching state color.                         |
| `.aural-alert-banner--solid`                        | Fills the whole banner with the variant color instead of just accenting it; forces white text.                   |
| `.aural-alert-banner--sm` / `--lg`                  | Size modifiers adjusting padding, gap, icon size, and font sizes.                                                |
| `.aural-alert-banner--fixed-top` / `--fixed-bottom` | Pins the banner to the viewport edge (`position: fixed`), full width, no radius, slide animation from that edge. |
| `.aural-alert-banner--dismissing`                   | Applied just before removal; plays a fade/slide-out and is the hook JS waits on before unmounting the node.      |

## 4. Tokens used

| Token                                                                                                | Used for                                                                                           |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `--color-bg-secondary` / `--color-border-medium`                                                     | Default (non-variant) background/border                                                            |
| `--color-info` / `--color-success` / `--color-warning` / `--color-error`                             | Variant left-accent border, icon color, title color, and `--solid` fill                            |
| `--color-info-bg` / `--color-success-bg` / `--color-warning-bg` / `--color-error-bg`                 | Variant tinted background (see gap note below)                                                     |
| `--color-info-border` / `--color-success-border` / `--color-warning-border` / `--color-error-border` | Variant border color (see gap note below)                                                          |
| `--color-text-primary` / `--color-text-secondary`                                                    | Title / message default color                                                                      |
| `--color-primary` / `--color-primary-hover`                                                          | Action button hover/focus and `--primary` action fill                                              |
| `--color-bg-hover`                                                                                   | Secondary action hover background                                                                  |
| `--color-tab-badge-bg`                                                                               | `--solid` variant's close/action hover background (white-on-color overlay, reused from Badge/Tabs) |
| `--space-2` / `--space-3` / `--space-4` / `--space-6`                                                | Gaps and padding across default/`--sm`/`--lg` sizes                                                |
| `--space-0-5`                                                                                        | Icon's top alignment margin                                                                        |
| `--size-20` / `--size-24` / `--size-28`                                                              | Icon dimensions at `--sm` / default / `--lg`                                                       |
| `--size-44`                                                                                          | Action-button and close-button min touch-target size                                               |
| `--size-800`                                                                                         | Banner's default `max-width`                                                                       |
| `--radius-md`                                                                                        | Corner radius (removed for `--fixed-top`/`--fixed-bottom`)                                         |
| `--text-sm` / `--text-base` / `--text-lg` / `--text-xs`                                              | Title/message font sizes across sizes                                                              |
| `--font-semibold` / `--font-medium`                                                                  | Title / action-button weight                                                                       |
| `--leading-tight` / `--leading-relaxed`                                                              | Title / message line-height                                                                        |
| `--transition-all-fast`                                                                              | Action/close hover transitions                                                                     |
| `--duration-normal`                                                                                  | Slide-in, slide-down/up, and fade-out entrance/exit animations                                     |
| `--z-toast`                                                                                          | Stacking layer for `--fixed-top`/`--fixed-bottom`                                                  |

**New tokens added while migrating this file:** none — every raw value had
an exact existing match (`--size-800`, `--size-24`, `--space-0-5`,
`--size-44`, `--size-20`, `--size-28`, `--color-tab-badge-bg`,
`--z-toast`, `--duration-normal`).

**Known pre-existing gap (not introduced by this migration):**
`--color-info-bg`, `--color-success-bg`, `--color-warning-bg` and the four
`--color-*-border` tokens referenced by the variant rules
(`.aural-alert-banner--info/success/warning/error`) are **not defined** in
`tokens/semantic/colors.css` — only `--color-error-bg` currently exists
there. They only resolve in the `colorblind-friendly` and `high-contrast`
theme overrides. In the default theme these `var()` calls fall back to
nothing, so the tinted background/border currently only render under
those two themes. This is a pre-existing gap (not a hardcoded value, so
the token audit doesn't catch it) — flagged here for whoever adds the
remaining semantic tokens, rather than guessed at and silently "fixed".

**White-on-solid-color overlays:** the `--solid` variant's action border
(`rgba(255, 255, 255, 0.3)`) and hover states (`0.3`/`0.5` alpha white)
are intentionally raw — they're overlays meant to read on _any_ variant
color (info/success/warning/error), so they can't be tied to the brand
palette. Marked `/* aural-ignore */` rather than tokenized.

## 5. Props/API

Alert Banner can be hand-authored as static HTML, or created/dismissed via
`Aural.showAlertBanner(message, type, options)` / `Aural.dismissAlertBanner(banner)`:

| Option        | Type                                          | Default  | Notes                                                                                                  |
| ------------- | --------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `message`     | `string`                                      | —        | Required body text.                                                                                    |
| `type`        | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Maps to `.aural-alert-banner--{type}`.                                                                 |
| `title`       | `string \| null`                              | `null`   | Optional bold heading line.                                                                            |
| `dismissible` | `boolean`                                     | `true`   | Renders the close button and wires its click handler.                                                  |
| `fixed`       | `'top' \| 'bottom' \| null`                   | `null`   | Adds `.aural-alert-banner--fixed-{top\|bottom}`.                                                       |
| `duration`    | `number` (ms)                                 | `0`      | `0` = permanent; otherwise auto-dismisses after the delay.                                             |
| `actions`     | `{ label, primary?, onClick?, dismiss? }[]`   | `[]`     | Renders `.aural-alert-banner__action` buttons; `dismiss: false` keeps the banner open after the click. |

`Aural.showAlertBanner()` appends the banner to `document.body` and returns
the element. `Aural.dismissAlertBanner(banner)` adds
`.aural-alert-banner--dismissing` (plays the fade-out) and removes the node
after `300ms`.

## 6. States

| State                                | Trigger                                    | Effect                                                                                                            |
| ------------------------------------ | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Default                              | —                                          | Slides in from `translateY(-10px)` + fade.                                                                        |
| Variant (info/success/warning/error) | `--info`/`--success`/`--warning`/`--error` | Tints left border, icon, and title (see token gap note above).                                                    |
| Solid                                | `--solid` + a variant class                | Fills the entire banner with the variant color; all text/icons turn white.                                        |
| Dismissing                           | `--dismissing` class (added by JS)         | Fades out + slides up over `--duration-normal`, then the node is removed.                                         |
| Fixed top/bottom                     | `--fixed-top` / `--fixed-bottom`           | `position: fixed` to the matching viewport edge, full width, square corners, slides in from that edge.            |
| Action hover/focus                   | `:hover` / `:focus-visible` on `__action`  | Border + text turn `--color-primary` (or lighten, for `--primary` actions); 2px focus ring.                       |
| Close hover/focus                    | `:hover` / `:focus-visible` on `__close`   | Background tint; 2px focus ring.                                                                                  |
| Reduced motion                       | `prefers-reduced-motion: reduce`           | All entrance/exit/fixed-position animations are disabled.                                                         |
| Mobile (≤640px)                      | `max-width: 640px`                         | Stacks to a column, close button moves to an absolute top-right corner, actions and action buttons go full-width. |

Accessibility: use `role="alert"` for error/warning banners (interrupts
immediately) and `role="status"` for info/success (announces politely).
Always label the close button (`aria-label="Close alert"`). Never rely on
color alone — pair every variant with an icon and explicit text.

## 7. Code example

```html
<div class="aural-alert-banner aural-alert-banner--warning" role="status">
  <i data-lucide="alert-triangle" class="aural-alert-banner__icon"></i>
  <div class="aural-alert-banner__content">
    <div class="aural-alert-banner__title">Scheduled maintenance</div>
    <div class="aural-alert-banner__message">
      The service will be unavailable Saturday 2–4 AM UTC.
    </div>
    <div class="aural-alert-banner__actions">
      <button class="aural-alert-banner__action aural-alert-banner__action--primary">
        Learn more
      </button>
      <button class="aural-alert-banner__action">Dismiss</button>
    </div>
  </div>
  <button class="aural-alert-banner__close" aria-label="Close alert">
    <svg
      class="aural-alert-banner__close-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </button>
</div>
```

```javascript
Aural.showAlertBanner('New version available.', 'info', {
  title: 'Update ready',
  fixed: 'top',
  actions: [{ label: 'Reload now', primary: true, onClick: () => location.reload() }],
});
```

## 8. Cross-references

- **Snackbar** — for temporary, action-specific feedback ("Changes saved",
  "Item deleted") instead of persistent page-level messages.
- **Toast** — for brief, corner-anchored, purely informational notices.
- **Badge** — `--color-tab-badge-bg` (the solid variant's hover overlay) is
  shared with Badge/Tabs rather than duplicated.
- **Modal** — for long-form content that needs to block interaction.
