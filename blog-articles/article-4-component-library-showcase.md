---
title: 60+ Components, 7 Themes, Zero Dependencies — The Aural UI Library
published: false
description: What it actually takes to build a design system at scale. The token architecture, the case studies, and the accidental realization that it was now perfectly shaped for AI.
tags: webdev, components, css, javascript
cover_image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/your-cover-image.png
canonical_url: https://yourblog.com/component-library-showcase
---

# 60+ Components, 7 Themes, Zero Dependencies — The Aural UI Library

At the end of [the cross-browser article](./article-3-cross-browser-compatibility.md), I had one really good button.

One button — keyboard-navigable, focus-ringed, WCAG AA in all seven themes, tap-delay killed, hover wrapped, working correctly on every browser from the matrix. I was proud of that button.

I had fifty-nine more components to go.

This is the article about what happened when the problem stopped being "does this thing work" and started being "does this thing _scale_." The answer was the part of [Aural UI](https://github.com/ferology/aural-ui) I care about most: a token architecture that let me write each component _once_ and get it for free in seven aesthetics, on fifteen browsers, with accessibility baked in.

And — the thing I only noticed at the end — it's also the reason Aural UI turns out to be unusually well-suited for AI tools. But that's article 6.

## Why Build Another Component Library?

I went through this question in article 1, but it's worth revisiting here with the scars earned. The problem wasn't that component libraries don't exist. The problem was:

1. **Generic aesthetics.** Bootstrap, Material, shadcn — every app built with them looks like every other app built with them.
2. **Accessibility as a docs section, not a default.** "Add ARIA here" in a code sample, with the actual component shipping ARIA-free.
3. **Heavy dependencies.** A button should not require React + a peer dep graph.
4. **Override hell.** Changing a color should not mean overriding 15 classes.
5. **Inconsistent patterns.** Each component in the same library speaking a different language.

The Aural UI bet, restated:

- ✨ 7 unique themes — from brutalist Kinetic to cyberpunk Neon
- ♿ Accessible by default, not optional
- 🎯 Framework-agnostic — HTML, CSS, vanilla JS
- 🎨 CSS variables, not rebuilds
- 📦 Modular — use what you need
- 🚀 Zero runtime dependencies

## The Architecture That Actually Made This Possible

If there's one thing to take from this article, it's this: you cannot ship 60 components × 7 themes × 15 browser/OS targets by _hand_. You can only ship them by making the component not care about the theme and not care about the browser, and forcing both concerns to live somewhere else.

Every component looks like this:

```
component/
├── component.html      # Markup examples
├── component.css       # Component styles (references tokens only)
└── component.js        # Optional JS (if needed)
```

### Five principles every component follows

1. **Semantic HTML first** — `<button>`, not `<div onclick>`.
2. **All visual choices go through CSS variables** — color, radius, weight, shadow, spacing.
3. **BEM-inspired naming** — `.component`, `.component__element`, `.component--modifier`.
4. **Progressive enhancement** — works without JS, better with it.
5. **Mobile-first responsive** — 320px and up.

### Four tiers of complexity

Organized so I could think about them:

- **Tier 1 — Foundations.** No JS. Buttons, links, typography, tokens, spacing.
- **Tier 2 — Basics.** Minimal JS. Inputs, checkboxes, radios, switches, badges, tags.
- **Tier 3 — Interactives.** JS required. Modals, dropdowns, tabs, accordions, tooltips.
- **Tier 4 — Complex.** Real logic. Command palette, multi-select, data tables, carousels, galleries.

## Five Case Studies (Not a Catalogue)

Instead of walking through all sixty components, here are the ones that made me rewrite an assumption about the architecture.

### Case Study 1 — Button, the Foundation That Had to Be Perfect

Every UI library lives or dies by its buttons. If Button is wrong, everything built on top of it is wrong.

```html
<button class="btn btn-primary" type="button">Click me</button>

<button class="btn btn-primary" type="button">
  <svg class="btn-icon" aria-hidden="true"><!-- icon --></svg>
  <span>Save</span>
</button>

<button class="btn btn-primary" type="button" disabled>
  <span class="spinner" role="status" aria-label="Loading"></span>
  <span>Saving...</span>
</button>
```

What Button had to do:

- 8 variants: primary, secondary, success, danger, warning, info, ghost, link
- 3 sizes: sm (36px desktop, 44px mobile), md (44px), lg (52px)
- Icons on either side, or icon-only
- Loading states with an accessible spinner
- Disabled states, obvious in every theme
- Full keyboard support
- WCAG AA contrast in all 7 themes — with no per-theme button CSS

The last bullet was the one that forced the whole architecture. Here's Button's variable surface:

```css
.btn {
  --btn-padding-x: var(--space-4);
  --btn-padding-y: var(--space-2);
  --btn-gap: var(--space-2);

  --btn-font-size: var(--text-sm);
  --btn-font-weight: 500;
  --btn-line-height: 1.5;

  --btn-border-width: 1px;
  --btn-border-radius: var(--radius-md);

  --btn-bg: var(--color-bg-primary);
  --btn-color: var(--color-text-primary);
  --btn-border-color: var(--color-border-medium);

  --btn-hover-bg: var(--color-bg-hover);
  --btn-hover-color: var(--color-text-primary);
  --btn-hover-border-color: var(--color-border-strong);

  --btn-focus-ring-color: var(--color-primary);
  --btn-focus-ring-width: 2px;
  --btn-focus-ring-offset: 2px;
}
```

Kinetic then does:

```css
:root[data-theme='kinetic'] {
  --btn-border-radius: 0;
  --btn-font-weight: 900;
  --btn-transform: uppercase;
  --btn-shadow: 8px 8px 0 #000;
}
```

…and Button becomes brutalist without Button knowing it's brutalist.

Want a purple button in your own theme? Two lines:

```css
.btn-purple {
  --btn-bg: #8b5cf6;
  --btn-hover-bg: #7c3aed;
}
```

This pattern repeats for every single component in the library. **That** is the architecture.

### Case Study 2 — Modal, the Accessibility Showpiece

Modals are the component that separates "a design system" from "a shelf of components." Every accessibility mistake you can make in a library, you'll make in a modal.

```html
<button
  type="button"
  class="btn btn-primary"
  aria-haspopup="dialog"
  onclick="openModal('example-modal')"
>
  Open Modal
</button>

<div
  id="example-modal"
  class="modal"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-desc"
  hidden
>
  <div class="modal-backdrop" onclick="closeModal('example-modal')"></div>

  <div class="modal-content">
    <header class="modal-header">
      <h2 id="modal-title">Modal Title</h2>
      <button
        type="button"
        class="modal-close"
        aria-label="Close dialog"
        onclick="closeModal('example-modal')"
      >
        <span aria-hidden="true">×</span>
      </button>
    </header>

    <div id="modal-desc" class="modal-body">
      <p>Modal content goes here.</p>
    </div>

    <footer class="modal-footer">
      <button type="button" class="btn btn-secondary" onclick="closeModal('example-modal')">
        Cancel
      </button>
      <button type="button" class="btn btn-primary">Confirm</button>
    </footer>
  </div>
</div>
```

Six things the JavaScript has to get right:

```javascript
function openModal(modalId) {
  const modal = document.getElementById(modalId);

  // 1. Remember who opened it
  modal.dataset.previousFocus = document.activeElement.id;

  // 2. Show it
  modal.removeAttribute('hidden');

  // 3. Lock background scroll (the iOS fix from article 3)
  document.body.classList.add('modal-open');

  // 4. Focus the first focusable thing inside
  const firstFocusable = modal.querySelector('button, a, input, textarea, select');
  firstFocusable?.focus();

  // 5. Trap focus inside
  trapFocus(modal);

  // 6. Escape closes
  modal.addEventListener('keydown', handleEscape);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.setAttribute('hidden', '');
  document.body.classList.remove('modal-open');

  // Return focus to whoever opened it
  const previousFocusId = modal.dataset.previousFocus;
  document.getElementById(previousFocusId)?.focus();

  modal.removeEventListener('keydown', handleEscape);
}
```

What makes this a "case study" and not just "a modal": every one of those six things is also the answer to a bug I shipped first. Focus not returning on close. Escape not working. Background scrolling on iOS. Tab escaping the modal. The final modal is _the bugs, fixed, generalized_.

### Case Study 3 — Dropdown, the Viewport Problem

Dropdowns look trivial until you realize they have to stay on screen. Open the options menu near the right edge of the browser — does it clip? Open it near the bottom — does it flip up? The naive implementation is a static `top/left`. The real implementation measures the trigger and the viewport and places itself.

```javascript
function positionDropdown(menu, trigger) {
  const triggerRect = trigger.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  let top = triggerRect.bottom + 4;
  let left = triggerRect.left;

  // If it'd clip right, right-align it to the trigger
  if (left + menuRect.width > viewport.width) {
    left = triggerRect.right - menuRect.width;
  }

  // If it'd clip bottom, flip it above the trigger
  if (top + menuRect.height > viewport.height) {
    top = triggerRect.top - menuRect.height - 4;
  }

  menu.style.top = `${top}px`;
  menu.style.left = `${left}px`;
}
```

Plus: keyboard navigation (arrows, Enter, Escape), click-outside-to-close, dividers, icons, danger items, submenus. One component. Every one of those capabilities optional.

### Case Study 4 — Tabs, the Pattern That's Actually in a Spec

Tabs have an ARIA-defined keyboard pattern. If you don't implement it, screen reader users can't use your tabs. If you _do_ implement it, you discover that "left arrow wraps to the last tab" is a subtle, specific requirement you would not invent from scratch.

```html
<div class="tabs">
  <div class="tabs-list" role="tablist" aria-label="Example tabs">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="tab-1"
      id="tab-button-1"
      class="tabs-trigger active"
      type="button"
    >
      Tab 1
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="tab-2"
      id="tab-button-2"
      class="tabs-trigger"
      type="button"
    >
      Tab 2
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="tab-3"
      id="tab-button-3"
      class="tabs-trigger"
      type="button"
    >
      Tab 3
    </button>
  </div>

  <div id="tab-1" role="tabpanel" aria-labelledby="tab-button-1" class="tabs-content">
    <p>Content for tab 1</p>
  </div>
  <div id="tab-2" role="tabpanel" aria-labelledby="tab-button-2" class="tabs-content" hidden>
    <p>Content for tab 2</p>
  </div>
  <div id="tab-3" role="tabpanel" aria-labelledby="tab-button-3" class="tabs-content" hidden>
    <p>Content for tab 3</p>
  </div>
</div>
```

```javascript
function initTabs(tablist) {
  const tabs = tablist.querySelectorAll('[role="tab"]');

  tabs.forEach((tab, index) => {
    tab.addEventListener('keydown', (e) => {
      let newIndex;

      if (e.key === 'ArrowRight') {
        newIndex = (index + 1) % tabs.length; // wrap
      } else if (e.key === 'ArrowLeft') {
        newIndex = (index - 1 + tabs.length) % tabs.length; // wrap
      } else if (e.key === 'Home') {
        newIndex = 0;
      } else if (e.key === 'End') {
        newIndex = tabs.length - 1;
      }

      if (newIndex !== undefined) {
        e.preventDefault();
        activateTab(tabs[newIndex]);
      }
    });
  });
}
```

Tabs taught me to stop inventing keyboard patterns and just read the WAI-ARIA Authoring Practices. Every composite widget in the library now starts there.

### Case Study 5 — Command Palette, the Everything Component

Inspired by VS Code, Raycast, Spotlight. A command palette is the one component that stretches _every_ subsystem at once: keyboard shortcuts, focus management, modal behavior, search, lists, rendering performance.

```html
<div id="command-palette" class="command-palette" hidden>
  <div class="command-palette-backdrop" onclick="closeCommandPalette()"></div>

  <div class="command-palette-content">
    <div class="command-palette-search">
      <svg class="search-icon" aria-hidden="true"><!-- icon --></svg>
      <input
        type="text"
        class="command-palette-input"
        placeholder="Type a command or search..."
        aria-label="Command palette search"
        autocomplete="off"
      />
    </div>

    <div class="command-palette-results">
      <div class="command-palette-group">
        <div class="command-palette-group-label">Quick Actions</div>
        <button class="command-palette-item" data-command="new-file">
          <svg aria-hidden="true"><!-- icon --></svg>
          <span>Create New File</span>
          <kbd class="command-palette-kbd">⌘N</kbd>
        </button>
      </div>
    </div>
  </div>
</div>
```

Tiny fuzzy search, no dependency:

```javascript
function fuzzySearch(query, items) {
  if (!query) return items;

  const results = items
    .map((item) => {
      const text = item.textContent.toLowerCase();
      const q = query.toLowerCase();

      let score = 0;
      let lastIndex = -1;

      for (const char of q) {
        const index = text.indexOf(char, lastIndex + 1);
        if (index === -1) return null;
        score += index - lastIndex;
        lastIndex = index;
      }

      return { item, score };
    })
    .filter(Boolean);

  results.sort((a, b) => a.score - b.score);
  return results.map((r) => r.item);
}
```

Type "nwfl", get "New File." The algorithm is fifteen lines. The ergonomic feel it produces is most of what people love about modern editors.

---

## What the Other 55 Look Like

The case studies covered the interesting shape of the architecture. Here's the rest of the library, grouped for findability rather than storytelling.

### Form Components (15)

- **Input** — text, email, password, number, URL, tel
- **Textarea** — auto-resize, character count
- **Select** — native + custom styled
- **Multi-Select** — search + tags + select-all
- **Checkbox** — standard + indeterminate
- **Radio** — grouped with legends
- **Switch** — toggle with labels
- **File Upload** — drag-and-drop + previews
- **Range Slider** — single and dual handles
- **Color Picker** — hex/rgb inputs
- **Date Picker** — keyboard-navigable calendar
- **Time Picker** — 12/24 hour
- **Rating** — star/heart
- **Combobox** — autocomplete
- **Search** — filters + suggestions

### Navigation Components (10)

Navbar, Sidebar, Breadcrumb, Pagination, Tabs, Stepper, Bottom Nav, Context Menu, Mega Menu, Skip Links.

### Feedback Components (12)

Toast, Alert, Banner, Badge, Tag, Progress Bar, Spinner, Skeleton, Empty State, Error Page, Tooltip, Popover.

### Overlay Components (6)

Modal, Drawer, Sheet (mobile), Alert Dialog, Lightbox, Backdrop.

### Display Components (12)

Card, Avatar, Avatar Group, Accordion, Carousel, Gallery, Table, List, Timeline, Stats, Code Block, Divider.

### Utility Components (5)

Command Palette, Keyboard Shortcut, Copy Button, Scroll to Top, Theme Switcher.

---

## Customization, in Two Seconds

Every component exposes a variable surface. Want to rebrand across all sixty components at once?

```css
:root {
  --btn-border-radius: 0;
  --btn-font-weight: 700;
  --btn-padding-x: 2rem;
}

.btn-primary {
  --btn-bg: #ff0080;
  --btn-hover-bg: #e60073;
  --btn-color: white;
}
```

That's the whole mental model. No build step. No overriding. No fighting specificity.

---

## Naming, Responsiveness, and No Framework Lock-In

**Naming** is BEM-inspired:

```css
.card {
}
.card__header {
}
.card__body {
}
.card__footer {
}
.card--elevated {
}
.card--outlined {
}
```

**Responsive** is mobile-first:

```css
.navbar {
  flex-direction: column;
  padding: var(--space-3);
}

@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    padding: var(--space-4);
  }
}

@media (min-width: 1024px) {
  .navbar {
    padding: var(--space-6);
  }
}
```

**Progressive enhancement** means components work without JavaScript and improve with it:

```html
<a href="#section-1" class="accordion-trigger">Section 1</a>
<div id="section-1" class="accordion-content">Content...</div>
```

```javascript
document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(trigger.getAttribute('href'));
    target.style.maxHeight = target.scrollHeight + 'px';
    target.classList.add('open');
  });
});
```

**No framework lock-in**, because everything is vanilla:

```jsx
// React
<button className="btn btn-primary">Click me</button>

// Vue
<button class="btn btn-primary">Click me</button>

// Svelte
<button class="btn btn-primary">Click me</button>

// HTML
<button class="btn btn-primary">Click me</button>
```

Same class. Same behavior. Same result.

---

## What I Actually Learned Building This

### 1. Start with accessibility

Bolt-on is a lie. ARIA added in month five is ARIA no one tested.

### 2. Test with real content

Lorem ipsum hides problems. Long names, empty states, 200-character error messages — those are where bugs live.

### 3. Mobile is different

Touch targets, hover states, viewport height. Article 3 was the whole article about this.

### 4. Performance matters

60+ components is a lot of CSS. Aural UI ships as a 120KB core with per-component CSS files you can cherry-pick.

### 5. Naming is hard

Spend the time. Future-you is one of the maintainers.

### 6. Documentation _is_ the product

A component without docs is a component that doesn't exist. Every component has live examples, a usage guide, an a11y note, and a variable reference.

### 7. Consistency beats perfection

Better for every component to speak the same language "pretty well" than for three to be spectacular and the rest to be strangers.

---

## Final Metrics

- **60+** components
- **120KB** core CSS (minified)
- **100%** WCAG AA compliance
- **7** themes included
- **0** runtime dependencies
- **15+** browser/OS combinations tested

---

## The Part I Didn't Plan For

The library was done. That was supposed to be the ending of this series.

Then I looked at what I'd actually built and noticed something odd. Every component had:

- **Semantic HTML** — so any parser could read its structure.
- **CSS variables for every visual choice** — so any tool could retheme it without touching markup.
- **BEM-ish, predictable class names** — so a model could _guess_ what a class means and be right.
- **No framework lock-in** — so code generated against it could target React, Vue, Svelte, or plain HTML from the same markup.
- **Accessibility baked in** — so generated code is accessible _by default_, not "if the model remembers the ARIA."

This is, not by design, a very good shape for AI-generated UI.

And around the time I was finishing up, Anthropic shipped [Claude Design](https://claude.ai/design) — a tool that, explicitly, reads your codebase and design files to build a design system it can then generate interfaces against.

The library I'd been building on nights and weekends to avoid feeling like every other AI prototype turned out to be ideally shaped to _fix_ the thing that was making every AI prototype look the same.

That's the subject of article 6.

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

## Still on the List

- 🔜 Data Grid with sorting/filtering
- 🔜 Date Range Picker
- 🔜 Rich Text Editor
- 🔜 Kanban Board
- 🔜 Tree View

**Which component is your favorite? Which one should I build next?** 👇

If this series has been useful, [star Aural UI on GitHub](https://github.com/ferology/aural-ui) ⭐

---

_This article is part of a series about building Aural UI:_

1. Building an Accessible Design System from Scratch
2. 7 Unique Themes: How I Designed Beyond Bootstrap
3. The Day Aural UI Broke on an iPhone: A Cross-Browser Reckoning
4. **60+ Components, 7 Themes, Zero Dependencies: The Library** (you are here)
5. How to Create Reusable UI Components with Pure CSS
6. Claude Design + Aural UI: Shipping Interfaces at the Speed of Thought
