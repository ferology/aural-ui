---
title: How to Create Reusable UI Components with Pure CSS
published: false
description: A practical guide to building flexible, maintainable, and framework-agnostic components using modern CSS techniques
tags: css, webdev, components, architecture
cover_image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/your-cover-image.png
canonical_url: https://yourblog.com/reusable-css-components
---

# How to Create Reusable UI Components with Pure CSS

When building [Aural UI](https://github.com/yourusername/aural-ui), I had a choice: use a CSS-in-JS solution or stick with pure CSS. I chose **pure CSS**, and it turned out to be one of the best decisions I made.

Here's how I built 60+ production-ready components using modern CSS techniques that work with any framework (or no framework at all).

## Why Pure CSS?

### The Framework Problem

CSS-in-JS is popular, but it has downsides:

- ❌ **Framework lock-in** - Styled-components only works with React
- ❌ **Runtime overhead** - Styles generated at runtime
- ❌ **Bundle size** - JavaScript + CSS engine
- ❌ **No progressive enhancement** - Needs JavaScript to render
- ❌ **Harder to customize** - Override props, not CSS

### The Pure CSS Advantage

- ✅ **Framework-agnostic** - Works with React, Vue, Svelte, or plain HTML
- ✅ **Zero runtime** - Styles load instantly
- ✅ **Better performance** - Browser-native CSS parsing
- ✅ **Progressive enhancement** - Works without JavaScript
- ✅ **Easy customization** - Override CSS variables
- ✅ **Better caching** - Static CSS files

## The Architecture

### Design System Foundation

Every great component library starts with a solid design system.

```css
/* design-tokens.css - The single source of truth */

:root {
  /* === Colors === */

  /* Primary palette */
  --primary-50: #edfdf7;
  --primary-100: #d3fae8;
  --primary-200: #aaf4d5;
  --primary-300: #71e9bb;
  --primary-400: #5ebd8f;
  --primary-500: #4da77a;
  --primary-600: #3d8a64;
  --primary-700: #326d51;
  --primary-800: #2a5842;
  --primary-900: #244837;

  /* Semantic colors */
  --color-primary: var(--primary-400);
  --color-primary-hover: var(--primary-500);
  --color-primary-active: var(--primary-600);

  /* === Spacing === */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */

  /* === Typography === */
  --font-sans: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', monospace;

  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */

  /* === Border Radius === */
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.375rem;  /* 6px */
  --radius-lg: 0.5rem;    /* 8px */
  --radius-xl: 0.75rem;   /* 12px */
  --radius-2xl: 1rem;     /* 16px */
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* === Transitions === */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Key principle:** All components reference these tokens, never hard-code values.

### Component Structure

Each component follows a consistent pattern:

```css
/* button.css */

/* 1. Base component styles */
.btn {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  /* Spacing */
  padding: var(--btn-padding-y, var(--space-2)) var(--btn-padding-x, var(--space-4));

  /* Typography */
  font-family: var(--font-sans);
  font-size: var(--btn-font-size, var(--text-sm));
  font-weight: 500;
  line-height: 1.5;
  text-decoration: none;
  white-space: nowrap;

  /* Borders */
  border: var(--btn-border-width, 1px) solid var(--btn-border-color, transparent);
  border-radius: var(--btn-border-radius, var(--radius-md));

  /* Colors */
  background: var(--btn-bg, var(--color-bg-primary));
  color: var(--btn-color, var(--color-text-primary));

  /* Interaction */
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;

  /* Transitions */
  transition: all var(--transition-fast);
}

/* 2. Hover states (desktop only) */
@media (hover: hover) and (pointer: fine) {
  .btn:hover:not(:disabled) {
    background: var(--btn-hover-bg, var(--color-bg-hover));
    border-color: var(--btn-hover-border-color, transparent);
    color: var(--btn-hover-color, var(--color-text-primary));
  }
}

/* 3. Active states (all devices) */
.btn:active:not(:disabled) {
  background: var(--btn-active-bg, var(--color-bg-active));
  transform: scale(0.98);
}

/* 4. Focus states (keyboard navigation) */
.btn:focus-visible {
  outline: 2px solid var(--btn-focus-color, var(--color-primary));
  outline-offset: 2px;
}

/* 5. Disabled states */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 6. Variants */
.btn-primary {
  --btn-bg: var(--color-primary);
  --btn-color: white;
  --btn-border-color: var(--color-primary);
  --btn-hover-bg: var(--color-primary-hover);
  --btn-hover-border-color: var(--color-primary-hover);
}

.btn-secondary {
  --btn-bg: transparent;
  --btn-color: var(--color-text-primary);
  --btn-border-color: var(--color-border-medium);
  --btn-hover-bg: var(--color-bg-hover);
}

/* 7. Sizes */
.btn-sm {
  --btn-padding-y: var(--space-1);
  --btn-padding-x: var(--space-3);
  --btn-font-size: var(--text-xs);
  min-height: 44px;  /* Mobile WCAG */
}

@media (min-width: 768px) and (pointer: fine) {
  .btn-sm {
    min-height: 36px;  /* Desktop can be smaller */
  }
}

.btn-lg {
  --btn-padding-y: var(--space-3);
  --btn-padding-x: var(--space-6);
  --btn-font-size: var(--text-base);
  min-height: 52px;
}
```

## The CSS Variable Pattern

CSS variables are the secret sauce for reusable components.

### Default Values with Fallbacks

```css
.component {
  /* Syntax: var(--custom-property, fallback) */
  padding: var(--component-padding, var(--space-4));
  color: var(--component-color, var(--color-text-primary));
  border-radius: var(--component-radius, var(--radius-md));
}
```

This creates a **customization cascade**:

1. Component-specific variable (`--component-padding`)
2. Falls back to design token (`var(--space-4)`)
3. Falls back to hard-coded value (if token undefined)

### Component-Level Customization

Users can override variables at different levels:

```css
/* Global override - affects ALL buttons */
:root {
  --btn-border-radius: 0;  /* Square buttons everywhere */
}

/* Component instance override - affects ONE button */
.btn-special {
  --btn-bg: purple;
  --btn-color: white;
}

/* Inline override - highest specificity */
<button class="btn" style="--btn-bg: orange;">
  Custom Button
</button>
```

### Theme Switching

Variables make theme switching trivial:

```css
/* dark.css */
:root {
  --color-bg-primary: #0f0f1a;
  --color-text-primary: #f5f5fa;
  --color-primary: #5ebd8f;
}

/* light.css */
:root {
  --color-bg-primary: #ffffff;
  --color-text-primary: #111827;
  --color-primary: #3d8a64;
}
```

All components automatically adapt - no JavaScript, no theme prop.

## Building a Complete Component

Let's build a card component from scratch using these principles.

### Step 1: Define the API

What do we want the component to do?

```html
<!-- Basic card -->
<div class="card">
  <p>Simple card</p>
</div>

<!-- Card with sections -->
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>

<!-- Card variants -->
<div class="card card-elevated">Elevated</div>
<div class="card card-outlined">Outlined</div>
<div class="card card-interactive">Interactive (hover effect)</div>
```

### Step 2: Build the Base Styles

```css
/* card.css */

.card {
  /* Layout */
  display: flex;
  flex-direction: column;

  /* Spacing */
  padding: var(--card-padding, var(--space-4));
  gap: var(--card-gap, var(--space-3));

  /* Colors */
  background: var(--card-bg, var(--color-bg-secondary));
  color: var(--card-color, var(--color-text-primary));

  /* Borders */
  border: var(--card-border-width, 1px) solid var(--card-border-color, var(--color-border-subtle));
  border-radius: var(--card-border-radius, var(--radius-lg));

  /* Effects */
  box-shadow: var(--card-shadow, var(--shadow-sm));

  /* Transitions */
  transition: all var(--transition-base);
}
```

### Step 3: Add Child Components

```css
/* Card sections */
.card-header {
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border-subtle);
}

.card-body {
  flex: 1;
}

.card-footer {
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-subtle);
  display: flex;
  gap: var(--space-2);
  justify-content: flex-end;
}

/* Card title in header */
.card-header h3 {
  margin: 0;
  font-size: var(--text-lg);
  font-weight: 600;
}
```

### Step 4: Create Variants

```css
/* Elevated variant - more shadow */
.card-elevated {
  --card-shadow: var(--shadow-lg);
  --card-border-color: transparent;
}

/* Outlined variant - no shadow */
.card-outlined {
  --card-shadow: none;
  --card-border-width: 2px;
  --card-border-color: var(--color-border-medium);
}

/* Interactive variant - hover effect */
.card-interactive {
  cursor: pointer;
}

@media (hover: hover) and (pointer: fine) {
  .card-interactive:hover {
    --card-shadow: var(--shadow-xl);
    transform: translateY(-2px);
  }
}

.card-interactive:active {
  transform: translateY(0);
}
```

### Step 5: Add Responsive Styles

```css
/* Mobile adjustments */
.card {
  padding: var(--space-3);
}

.card-footer {
  flex-direction: column;  /* Stack buttons on mobile */
}

.card-footer .btn {
  width: 100%;  /* Full-width buttons on mobile */
}

/* Desktop improvements */
@media (min-width: 768px) {
  .card {
    padding: var(--space-4);
  }

  .card-footer {
    flex-direction: row;  /* Row layout on desktop */
  }

  .card-footer .btn {
    width: auto;  /* Auto-width on desktop */
  }
}
```

## Advanced Patterns

### 1. Compound Components

Components that work together:

```css
/* Tabs component family */
.tabs {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.tabs-list {
  display: flex;
  gap: var(--space-1);
  border-bottom: 2px solid var(--color-border-subtle);
}

.tabs-trigger {
  padding: var(--space-2) var(--space-4);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tabs-trigger[aria-selected="true"] {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.tabs-content[hidden] {
  display: none;
}
```

### 2. State Modifiers

Handle different states cleanly:

```css
/* Input component with states */
.input {
  /* Base styles */
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

/* Focus state */
.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--primary-alpha-20);
}

/* Error state */
.input[aria-invalid="true"] {
  border-color: var(--color-danger);
}

.input[aria-invalid="true"]:focus {
  box-shadow: 0 0 0 3px var(--danger-alpha-20);
}

/* Disabled state */
.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--color-bg-disabled);
}
```

### 3. Responsive Typography

Make text scale smoothly:

```css
/* Fluid typography using clamp() */
h1 {
  font-size: clamp(
    var(--text-2xl),  /* Minimum size (mobile) */
    5vw,              /* Preferred size (scales) */
    var(--text-4xl)   /* Maximum size (desktop) */
  );
}

h2 {
  font-size: clamp(var(--text-xl), 4vw, var(--text-3xl));
}

h3 {
  font-size: clamp(var(--text-lg), 3vw, var(--text-2xl));
}
```

### 4. Dark Mode with Color Mix

Create alpha variants on the fly:

```css
/* Modern approach with color-mix() */
.component {
  /* Fallback for older browsers */
  background: rgba(94, 189, 143, 0.1);

  /* Modern color-mix() for browsers that support it */
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
}

/* Hover state - increase opacity */
@media (hover: hover) and (pointer: fine) {
  .component:hover {
    background: rgba(94, 189, 143, 0.2);
    background: color-mix(in srgb, var(--color-primary) 20%, transparent);
  }
}
```

### 5. Container Queries (Modern)

Components that adapt to their container, not viewport:

```css
/* Container query setup */
.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}

/* Card adapts to sidebar width */
.card {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2);
}

/* When sidebar > 400px, card uses two columns */
@container sidebar (min-width: 400px) {
  .card {
    grid-template-columns: auto 1fr;
  }
}
```

## Naming Conventions

### BEM-Inspired Approach

I use a simplified BEM naming:

```css
/* Block - The component */
.component { }

/* Element - Parts of the component (single dash) */
.component-header { }
.component-body { }
.component-footer { }

/* Modifier - Variations (double dash or second class) */
.component--large { }
.component-variant { }
```

**Example:**

```html
<div class="card card-elevated">
  <div class="card-header">Header</div>
  <div class="card-body">Body</div>
  <div class="card-footer">Footer</div>
</div>
```

### State Classes

For JavaScript-driven states:

```css
/* Use is- or has- prefixes for states */
.modal.is-open { }
.dropdown.is-active { }
.input.has-error { }
.form.is-loading { }
```

## File Organization

### Component-Based Structure

```
css/
├── design-tokens.css       # Design system foundation
├── reset.css               # CSS reset
├── utilities.css           # Utility classes
├── components/
│   ├── button.css
│   ├── card.css
│   ├── input.css
│   ├── modal.css
│   └── ...
└── themes/
    ├── dark.css
    ├── light.css
    └── ...
```

### Import Order

```css
/* main.css - Import order matters! */

/* 1. Design tokens (variables) */
@import 'design-tokens.css';

/* 2. Reset/normalize */
@import 'reset.css';

/* 3. Base styles */
@import 'base.css';

/* 4. Utilities */
@import 'utilities.css';

/* 5. Components (alphabetically) */
@import 'components/button.css';
@import 'components/card.css';
@import 'components/input.css';
/* ... */

/* 6. Theme overrides */
@import 'themes/dark.css' (prefers-color-scheme: dark);
```

## Utility Classes

Create commonly-needed utilities:

```css
/* utilities.css */

/* Display */
.hidden { display: none !important; }
.block { display: block !important; }
.flex { display: flex !important; }
.grid { display: grid !important; }

/* Flex utilities */
.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }

/* Spacing */
.p-2 { padding: var(--space-2); }
.p-4 { padding: var(--space-4); }
.m-2 { margin: var(--space-2); }
.m-4 { margin: var(--space-4); }

/* Text */
.text-sm { font-size: var(--text-sm); }
.text-lg { font-size: var(--text-lg); }
.font-bold { font-weight: 700; }
.text-center { text-align: center; }

/* Colors */
.text-primary { color: var(--color-primary); }
.text-muted { color: var(--color-text-muted); }
.bg-primary { background: var(--color-primary); }

/* Borders */
.border { border: 1px solid var(--color-border-medium); }
.border-t { border-top: 1px solid var(--color-border-medium); }
.rounded { border-radius: var(--radius-md); }
.rounded-full { border-radius: 9999px; }

/* Accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

## Testing Your Components

### Cross-Browser Testing

```css
/* Use @supports for feature detection */
.component {
  /* Fallback */
  background: rgba(94, 189, 143, 0.1);

  /* Modern feature */
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
}

/* Provide alternatives for unsupported features */
@supports not (backdrop-filter: blur(10px)) {
  .modal-backdrop {
    background: rgba(0, 0, 0, 0.8);  /* Solid fallback */
  }
}

@supports (backdrop-filter: blur(10px)) {
  .modal-backdrop {
    backdrop-filter: blur(10px);     /* Blur effect */
    background: rgba(0, 0, 0, 0.5);
  }
}
```

### Accessibility Testing

```css
/* Always provide focus indicators */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Remove focus on mouse click, keep for keyboard */
*:focus:not(:focus-visible) {
  outline: none;
}

/* Ensure sufficient contrast */
.btn-primary {
  /* Light on dark OR dark on light */
  background: var(--color-primary);
  color: white;  /* 4.5:1 contrast minimum */
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .btn {
    border-width: 2px;
  }

  *:focus-visible {
    outline-width: 3px;
  }
}
```

## Performance Optimization

### Critical CSS

Extract above-the-fold styles:

```html
<head>
  <!-- Inline critical CSS -->
  <style>
    /* Only the CSS needed for initial render */
    :root { /* design tokens */ }
    body { /* base styles */ }
    .btn { /* button styles */ }
  </style>

  <!-- Load full CSS asynchronously -->
  <link rel="preload" href="main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
</head>
```

### CSS Minification

```bash
# Using cssnano
npx cssnano input.css output.min.css

# Or PostCSS with cssnano plugin
npx postcss input.css --use cssnano -o output.min.css
```

### Unused CSS Removal

```bash
# Using PurgeCSS
npx purgecss --css main.css --content *.html --output dist/

# Or in build process
npm install -D @fullhuman/postcss-purgecss
```

## Documentation

Every component needs:

### 1. Visual Examples

```html
<!-- Show all variants -->
<div class="examples">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-success">Success</button>
</div>
```

### 2. Code Snippets

````markdown
```html
<button class="btn btn-primary" type="button">
  Click me
</button>
```
````

### 3. Customization Guide

```css
/* Available CSS variables */
.btn {
  --btn-padding-x: /* horizontal padding */
  --btn-padding-y: /* vertical padding */
  --btn-bg: /* background color */
  --btn-color: /* text color */
  --btn-border-color: /* border color */
  --btn-border-radius: /* corner rounding */
}
```

### 4. Accessibility Notes

```markdown
## Accessibility

- Use `<button type="button">` for actions
- Add `aria-label` for icon-only buttons
- Ensure 4.5:1 contrast ratio
- Keyboard accessible (Tab, Enter, Space)
```

## Key Takeaways

After building 60+ components with pure CSS:

1. ✅ **CSS variables are powerful** - Use them for everything
2. ✅ **Mobile-first is essential** - Start small, enhance larger
3. ✅ **Hover states need media queries** - Avoid sticky hovers
4. ✅ **Progressive enhancement works** - Build for the lowest common denominator
5. ✅ **Naming consistency matters** - Pick a convention, stick to it
6. ✅ **Fallbacks are crucial** - Test on older browsers
7. ✅ **Performance is a feature** - Minify, tree-shake, lazy load
8. ✅ **Documentation is essential** - No docs = no adoption
9. ✅ **Accessibility is non-negotiable** - Build it in from day one
10. ✅ **Framework-agnostic is freeing** - Works everywhere

## Resources

Tools and references I used:

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)
- [Modern CSS Solutions](https://moderncss.dev/)
- [Every Layout](https://every-layout.dev/)
- [Cube CSS](https://cube.fyi/)
- [PostCSS](https://postcss.org/)
- [cssnano](https://cssnano.co/)

## Try Aural UI

See these patterns in action with 60+ production-ready components:

- 🌟 [GitHub Repository](https://github.com/yourusername/aural-ui)
- 🎨 [Live Demo](https://yourusername.github.io/aural-ui)
- 📚 [Documentation](https://yourusername.github.io/aural-ui/docs)

```bash
# Install
npm install aural-ui
```

Or use CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aural-ui/aural-ui.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aural-ui/dark.css">
```

---

**What's your CSS architecture?** Do you use CSS-in-JS or pure CSS? 👇

If you found this helpful, give [Aural UI a star on GitHub](https://github.com/yourusername/aural-ui) ⭐

---

*This article is part of a series about building Aural UI:*
1. Building an Accessible Design System
2. 7 Unique Themes: How I Designed Beyond Bootstrap
3. Cross-Browser Compatibility: A Complete Guide
4. 60+ Accessible Components: A Library Showcase
5. **How to Create Reusable UI Components with Pure CSS** (you are here)
