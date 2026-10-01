# Size

## What this is

`--size-N` in `tokens/core/size.css` sizes a UI element's **own box** — icons, avatars, status dots, toggle tracks/thumbs, control dimensions — as opposed to `--space-N`, which sizes the gap _between_ elements (see `specs/foundations/spacing.md`).

**Important and easy to get wrong: `--size-N`'s `N` is the literal pixel value, not px / 4 like spacing.** `--size-14` is 14px. `--size-44` is 44px. This is the opposite convention from `--space-N`, where `--space-14` is 56px (14 × 4). Do not assume `--size-N` and `--space-N` with the same `N` are interchangeable or equal — they are not (e.g. `--space-14` = 56px, `--size-14` = 14px). Always check the actual value in `specs/tokens/token-reference.md` ("Size" section) rather than inferring it from the name.

The scale exists because icon/control sizing in this library doesn't sit on a strict 4px grid (14px and 18px icons, 36px/44px toggle tracks are real, commonly-needed values). Where a size value _does_ coincide with an existing `--space-N` value, `--size-N` aliases it instead of duplicating the literal (e.g. `--size-16: var(--space-4)`) — so the two scales stay numerically consistent even though their naming conventions differ.

## When to use it

Use `--size-N` for: icon dimensions (`width`/`height` on an `<svg>` or icon font), avatar diameter, status-dot size, toggle/switch track and thumb dimensions, and other "this element's own footprint" measurements.

```css
.icon-sm {
  width: var(--size-14);
  height: var(--size-14);
} /* 14px small icon */
.avatar {
  width: var(--size-40);
  height: var(--size-40);
} /* 40px avatar */
.toggle-track {
  width: var(--size-44);
  height: var(--size-24);
} /* 44px touch target */
```

Use `--space-N` instead when the value is a margin, padding, or gap — not the dimension of the element itself.

## Do / don't

```css
/* Don't — raw px for a control dimension */
.status-dot {
  width: 6px;
  height: 6px;
}

/* Don't — reaching for the wrong scale by number-matching intuition */
.icon-md {
  width: var(--space-14);
} /* this is 56px, not 14px! */

/* Do */
.status-dot {
  width: var(--size-6);
  height: var(--size-6);
}
.icon-md {
  width: var(--size-18);
}
```
