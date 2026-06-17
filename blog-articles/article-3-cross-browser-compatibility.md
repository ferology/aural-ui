---
title: The Day Aural UI Broke on an iPhone — A Cross-Browser Reckoning
published: false
description: What happens when your seven-theme, a11y-perfect design system meets the real web. iOS Safari, sticky hovers, tap delays, notches, and the patterns those bugs forced into the architecture.
tags: webdev, css, javascript, compatibility
cover_image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/your-cover-image.png
canonical_url: https://yourblog.com/cross-browser-compatibility
---

# The Day Aural UI Broke on an iPhone — A Cross-Browser Reckoning

I was fairly sure I was done.

Seven themes, all contrast-tested. Every component keyboard-navigable. Lighthouse accessibility score staring proudly back at me in green. I shipped the first multi-theme demo to a friend so they could pick a favorite.

They opened it on an iPhone.

- The primary button stayed "hovered" — dark blue and slightly scaled up — after every single tap.
- The top nav disappeared into the notch.
- Every tap felt about a third of a second late.
- The theme switcher threw a console error on first click (private browsing, localStorage blocked).
- A sidebar slid open, and then slid back closed about 16 pixels short of the edge, for reasons that appeared to be entirely personal to iOS Safari.

Chrome DevTools mobile emulation had lied to me, and I had believed it for four months.

This is the article about every bug that iPhone demo uncovered, and the patterns those bugs forced into the rest of [Aural UI](https://github.com/ferology/aural-ui).

## Part 1: The Bugs That Found Me

These weren't theoretical compatibility concerns. They were things I watched happen in real time on someone else's phone while I quietly died inside.

### Bug 1 — The Sticky Hover

Tap a button on a touch device. iOS Safari fires `:hover`. Tap somewhere else. iOS Safari, in its wisdom, does not _unfire_ `:hover`. The button remains visibly "hovered" until you tap another interactive element.

My buttons scaled up on hover. The result, on mobile, was a dashboard of permanently "active" buttons that looked broken because, functionally, they were.

```css
/* ❌ Hover state sticks on mobile */
.btn:hover {
  background: blue;
  transform: scale(1.05);
}
```

**The fix:** only apply hover styles on devices that _actually_ have hover.

```css
@media (hover: hover) and (pointer: fine) {
  .btn:hover {
    background: blue;
    transform: scale(1.05);
  }
}

/* Touch gets a different affordance — an active state, not a hover one */
.btn:active {
  background: darkblue;
  transform: scale(0.98);
}
```

I ended up wrapping **397 hover declarations** across the library behind `@media (hover: hover)`. Every theme, every component. It is now one of the first things I check in any PR.

### Bug 2 — The 300ms Tap Delay

Every tap on iOS and Android has a ~300ms delay by default, reserved for the browser to decide whether you were going to double-tap-to-zoom. On a dashboard with 40 buttons, that delay is the difference between "feels like a native app" and "feels like a 2012 jQuery site."

```css
/* ✅ Kill the tap delay */
.btn,
a,
[role='button'] {
  touch-action: manipulation;
}
```

One line. Applied across every interactive element type in the system — buttons, links, tabs, dropdown triggers, modal close buttons, nav items, form controls.

### Bug 3 — The Notch

The iPhone notch and home indicator are opaque. iOS doesn't tell you; you just discover that the top 48px of your fixed header is where the speaker lives.

```css
/* ❌ Content hidden behind notch and home indicator */
.mobile-header {
  position: fixed;
  top: 0;
  padding: 16px;
}

/* ✅ Respects the hardware */
.mobile-header {
  position: fixed;
  top: 0;
  padding: 16px;
  padding-top: calc(16px + env(safe-area-inset-top));
  padding-left: calc(16px + env(safe-area-inset-left));
  padding-right: calc(16px + env(safe-area-inset-right));
}

.page-container {
  padding-bottom: calc(16px + env(safe-area-inset-bottom));
}
```

Plus the easy-to-forget part:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

Without `viewport-fit=cover`, `env(safe-area-inset-*)` returns `0` and it looks like your CSS is doing nothing.

### Bug 4 — The Viewport That Changes Height

`100vh` on iOS does not account for the dynamic address bar. As you scroll, the bar hides, the viewport grows, and a modal sized to `100vh` suddenly has a dead strip at the bottom. Or the inverse: you set `100vh` expecting the full screen, and the bottom of your modal sits under the address bar.

```css
/* ✅ Fallback + dynamic viewport height */
.full-screen-modal {
  height: 100vh; /* Fallback */
  height: 100dvh; /* Dynamic viewport height */
}
```

Support for `100dvh`: Safari 15.4+, Chrome 108+. Everything older falls back to `100vh` and accepts the imperfection.

### Bug 5 — Private Mode Killed My Theme Switcher

Theme switching stores the user's choice in `localStorage`. Safari in private browsing mode, and some Firefox configurations, **throw** when you touch `localStorage`. Not "silently return null." Throw.

```javascript
// ❌ Crashes in private browsing — and takes the rest of the page with it
function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

// ✅ Wrap it
function isLocalStorageAvailable() {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

function saveTheme(theme) {
  if (isLocalStorageAvailable()) {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.warn('Could not save theme:', e);
    }
  } else {
    // Fall back to a session-only attribute
    document.documentElement.dataset.theme = theme;
  }
}
```

Every piece of persisted state in the library now goes through a wrapper like this.

### Bug 6 — The Transform/Fixed Drawer

The sidebar slid most of the way open and stopped short. It was a well-known iOS Safari bug: `position: fixed` + `transform: translateX()` fights with the viewport in ways that produce off-by-a-bit glitches.

```css
/* ❌ Flaky on iOS Safari */
.sidebar {
  position: fixed;
  transform: translateX(-280px);
  transition: transform 0.3s;
}
.sidebar.open {
  transform: translateX(0);
}

/* ✅ Use left instead */
.sidebar {
  position: fixed;
  left: -280px;
  transition: left 0.3s;
}
.sidebar.open {
  left: 0;
}
```

Slightly less performant on paper. In practice, the one that actually works.

---

## Part 2: The Patterns Those Bugs Forced

Each individual bug was a one-line fix. The important part was realizing they weren't individual bugs. They were symptoms of a set of assumptions I'd been quietly making, and every component I'd already written carried the same assumptions. The real work was generalizing the fixes into patterns the rest of the library could inherit.

### Pattern 1 — Vendor Prefixes Still Matter in 2026

I thought this was settled in 2020. It is not. Modern CSS is amazing; browser support is still uneven once you step past the latest two versions.

```css
.component {
  /* Position */
  position: -webkit-sticky; /* Safari 6.1+ */
  position: sticky;

  /* User interaction */
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  user-select: none;

  /* Visual effects */
  -webkit-backdrop-filter: blur(10px); /* Safari 9+ */
  backdrop-filter: blur(10px); /* Safari 14+ without prefix */

  /* Transforms */
  -webkit-clip-path: circle(50%);
  clip-path: circle(50%);
}
```

The backdrop-filter prefix alone buys **five extra years** of Safari support (9+ vs 14+). For a CSS design system meant to be picked up by people I don't know, "works on the iPad their boss forgot to update" matters.

### Pattern 2 — Touch Targets, Properly

WCAG 2.1 wants 44×44px minimum. Desktop mice can handle 36px buttons without problems. Rather than pick one, I scale down only when the pointer actually reports as precise:

```css
/* Mobile-first: WCAG-compliant 44px */
.btn-sm {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 20px;
}

/* Desktop with a precise pointer: 36px is fine */
@media (min-width: 768px) and (pointer: fine) {
  .btn-sm {
    min-height: 36px;
    padding: 8px 16px;
  }
}
```

`pointer: fine` is the key. Width alone isn't enough — a touchscreen laptop is still 1400px wide.

### Pattern 3 — The Scroll Trilogy

Three iOS-specific scroll things, once, at the start of every feature that involves scrolling:

```css
/* Smooth inertia on iOS */
.scrollable-container {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
```

```javascript
// Body scroll lock when modals open — doesn't work on iOS with overflow alone
function openModal() {
  document.body.classList.add('modal-open');
}
```

```css
body.modal-open {
  position: fixed;
  width: 100%;
  overflow: hidden;
}
```

### Pattern 4 — Feature Detection Before Everything

`@supports` for CSS, `in` checks for JS. Nothing exotic; just the habit of not assuming.

```javascript
// IntersectionObserver
function observeElement(element, callback) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(callback);
    observer.observe(element);
  } else {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          callback([{ isIntersecting: isVisible }]);
          ticking = false;
        });
        ticking = true;
      }
    });
  }
}
```

```javascript
// Smooth scroll
function scrollToElement(element) {
  if ('scrollBehavior' in document.documentElement.style) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    element.scrollIntoView(true);
  }
}
```

```css
/* color-mix() fallback */
.element {
  background: rgba(94, 189, 143, 0.5); /* Fallback */
  background: color-mix(in srgb, var(--primary) 50%, transparent);
}
```

```css
/* Grid with flex fallback */
.grid-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

@supports (display: grid) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
  }
}
```

### Pattern 5 — The Four Weird Bugs Worth Memorizing

Small enough to not deserve their own section. Big enough that skipping them breaks real things.

**Safari double-tap zoom** — same `touch-action: manipulation` fix, same place.

```css
button,
a,
input,
textarea {
  touch-action: manipulation;
}
```

**Firefox flex-item min-height** — Firefox doesn't respect `min-height` on flex items unless you also set `height: 0`. It looks wrong. It works.

```css
.flex-item {
  min-height: 100px;
  height: 0; /* Firefox fix */
}
```

**Safari focus ring on click** — Safari shows a focus ring on mouse click, which is ugly. `:focus-visible` is the right answer, not `:focus`.

```css
button:focus:not(:focus-visible) {
  outline: none;
}
button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

**Chrome autofill yellow** — the one where Chrome fills in an email and suddenly your beautifully themed input has a canary background.

```css
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px var(--input-bg) inset;
  -webkit-text-fill-color: var(--text-color);
  transition: background-color 5000s ease-in-out 0s;
}
```

---

## Part 3: The Testing Discipline That Emerged

The iPhone demo was an accident. I needed to not have accidents. So I built a matrix and tested against it every release.

### The Matrix

| Browser          | OS            | Version   | Status              |
| ---------------- | ------------- | --------- | ------------------- |
| Safari           | macOS         | 14+       | ✅ Primary          |
| Safari           | iOS 15        | 15.4+     | ✅ Primary          |
| Safari           | iOS 14        | 14.0-15.3 | ✅ With prefixes    |
| Safari           | iOS 13        | 13.0-13.7 | ✅ Limited features |
| Chrome           | macOS/Windows | 88+       | ✅ Full support     |
| Chrome           | Android       | 88+       | ✅ Full support     |
| Firefox          | macOS/Windows | 89+       | ✅ Full support     |
| Firefox          | Android       | 89+       | ✅ Full support     |
| Edge             | Windows       | 88+       | ✅ Chromium-based   |
| Samsung Internet | Android       | 14+       | ✅ Tested           |

### Real Devices, Always

Emulators hide the three things that matter most: hover, touch, and the viewport. I used:

1. **BrowserStack** for the versions I didn't own
2. **My own phone and a friend's Android** for everyday testing
3. **Someone with an actual iPad** whenever I doubted my setup

### The Checklist

A smaller version of the checklist goes into every component's story. The big one runs per release.

```markdown
## Visual Testing

- [ ] All themes render correctly
- [ ] Colors match design specs
- [ ] Fonts load properly
- [ ] Icons display correctly
- [ ] Spacing is consistent

## Interaction Testing

- [ ] Buttons respond immediately (no 300ms delay)
- [ ] Hover states don't stick on mobile
- [ ] Focus indicators are visible
- [ ] Animations are smooth (60fps)
- [ ] Scrolling feels natural

## Layout Testing

- [ ] Responsive breakpoints work
- [ ] Content doesn't overflow
- [ ] Safe areas are respected (iOS notch)
- [ ] Viewport height is correct
- [ ] Fixed elements position correctly

## Functionality Testing

- [ ] Forms submit correctly
- [ ] Modals open/close properly
- [ ] Dropdowns work
- [ ] Tabs switch correctly
- [ ] localStorage saves settings
- [ ] Theme switching works
```

### The Tools

```bash
# Lighthouse (built into Chrome)
npx lighthouse https://your-site.com --view

# BrowserStack CLI
npx browserstack-cypress run

# Playwright (cross-browser E2E)
npx playwright test

# Can I Use, on the command line
npx caniuse backdrop-filter
```

---

## Browser Support Summary

| Feature              | Chrome | Safari              | Firefox             | Edge | IE11           |
| -------------------- | ------ | ------------------- | ------------------- | ---- | -------------- |
| **CSS**              |
| Vendor prefixes      | ✅     | ✅                  | ✅                  | ✅   | ✅             |
| CSS Grid             | 57+    | 10.1+               | 52+                 | 16+  | ❌             |
| CSS Variables        | 49+    | 9.1+                | 31+                 | 15+  | ❌             |
| Backdrop filter      | 76+    | 9+ (prefix)         | 103+                | 79+  | ❌             |
| color-mix()          | 111+   | 16.2+               | 113+                | 111+ | ❌             |
| **JavaScript**       |
| IntersectionObserver | 51+    | 12.1+               | 55+                 | 15+  | ❌ (fallback)  |
| localStorage         | ✅     | ✅ (error handling) | ✅ (error handling) | ✅   | ✅             |
| Optional chaining    | 80+    | 13.1+               | 74+                 | 80+  | ❌ (transpile) |
| **Mobile**           |
| Touch interactions   | 51+    | 11.1+               | 49+                 | 79+  | ❌             |
| Safe area insets     | 69+    | 11.1+               | 89+                 | 79+  | ❌             |
| dvh units            | 108+   | 15.4+               | 110+                | 108+ | ❌             |

---

## The Ten Rules That Stuck

The iPhone demo gave me a list, and the list gave me a discipline. These are the rules I follow now on every new component:

1. **Test on real devices.** Emulators lie.
2. **Prefix the things that are still worth prefixing.** Backdrop-filter, user-select, sticky, clip-path.
3. **Wrap every hover.** `@media (hover: hover) and (pointer: fine)`.
4. **Kill the tap delay on every interactive.** `touch-action: manipulation`.
5. **Respect the hardware.** `env(safe-area-inset-*)`, `100dvh`, `viewport-fit=cover`.
6. **Provide a fallback for anything new.** `color-mix`, grid, `@supports`.
7. **Wrap `localStorage`.** Private mode is a thing.
8. **Feature-detect, don't version-detect.** `'IntersectionObserver' in window`, not user agent.
9. **Graceful degradation over graceful failure.** Make it work everywhere; make it better where supported.
10. **Test early.** The iPhone demo should have happened in week two, not month four.

---

## Resources

- [Can I Use](https://caniuse.com/) — browser support tables
- [MDN Browser Compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS#browser_compatibility)
- [BrowserStack](https://www.browserstack.com/) — real devices, real Safari
- [Autoprefixer](https://autoprefixer.github.io/) — automate the prefixes
- [Browserslist](https://browsersl.ist/) — one query, every tool
- [Polyfill.io](https://polyfill.io/) — polyfills on demand
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## What I Still Had to Do

With hover wrapped, tap delay killed, the notch respected, localStorage wrapped, and a matrix I actually ran — I had a solid button. And a solid input. And a solid modal.

I still had to make **fifty-seven more components** and get them all to respect every pattern in this article. One Button works in 7 themes on 15 browsers. Doing that 60 times without losing my mind was a different problem entirely — an architecture problem, not a bug-fix problem.

That's article 4.

---

## Try Aural UI

- 🌟 [GitHub](https://github.com/ferology/aural-ui)
- 🎨 [Live Demo](https://ferology.github.io/aural-ui)
- 📚 [Docs](https://ferology.github.io/aural-ui/docs)

```bash
npm install aural-ui
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aural-ui/aural-ui.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aural-ui/dark.css" />
```

---

**What browser bug has personally cost you the most hours?** I'll go first: the transform-vs-fixed sidebar. 👇

If this was useful, [give Aural UI a star on GitHub](https://github.com/ferology/aural-ui) ⭐

---

_This article is part of a series about building Aural UI:_

1. Building an Accessible Design System from Scratch
2. 7 Unique Themes: How I Designed Beyond Bootstrap
3. **The Day Aural UI Broke on an iPhone: A Cross-Browser Reckoning** (you are here)
4. 60+ Components, 7 Themes, Zero Dependencies: The Library
5. How to Create Reusable UI Components with Pure CSS
6. Claude Design + Aural UI: Shipping Interfaces at the Speed of Thought
