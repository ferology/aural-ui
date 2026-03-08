# 🎨 Aural UI

> **Framework-agnostic, WCAG AA accessible design system.** Copy-paste components for React, Vue, Svelte, and Vanilla HTML. Perfect for AI-assisted development.

[![npm version](https://img.shields.io/npm/v/aural-design.svg?style=flat-square)](https://www.npmjs.com/package/aural-design)
[![npm downloads](https://img.shields.io/npm/dm/aural-design.svg?style=flat-square)](https://www.npmjs.com/package/aural-design)
[![GitHub stars](https://img.shields.io/github/stars/ferology/aural-ui.svg?style=flat-square)](https://github.com/ferology/aural-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![WCAG AA](https://img.shields.io/badge/WCAG-AA-green.svg?style=flat-square)](https://www.w3.org/WAI/WCAG2AA-Conformance)

## 🚀 [Live Demo](https://ferology.github.io/aural-ui/) | [📖 Storybook Docs](https://ferology.github.io/aural-ui/storybook/)

---

## ⚡ Quick Start

### NPM Installation

```bash
npm install aural-design
```

```javascript
// Import CSS and JavaScript
import 'aural-design/dist/aural-ui.css';
import 'aural-design/dist/aural-ui.js';

// Optional: Choose a theme
import 'aural-design/themes/dark.css';
```

### CDN (Zero Installation)

```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/aural-design/dist/aural-ui.css" />

<!-- Optional: Choose a theme -->
<link rel="stylesheet" href="https://unpkg.com/aural-design/themes/dark.css" />

<!-- JavaScript (for interactive components) -->
<script src="https://unpkg.com/aural-design/dist/aural-ui.js"></script>
```

### 30-Second Example

```html
<!DOCTYPE html>
<html data-theme="dark">
  <head>
    <link rel="stylesheet" href="https://unpkg.com/aural-design/dist/aural-ui.css" />
  </head>
  <body>
    <!-- Accessible by default -->
    <button class="btn btn-primary">Click Me</button>

    <!-- WCAG AA compliant form -->
    <div class="form-group">
      <label class="label" for="email">Email</label>
      <input type="email" id="email" class="input" placeholder="you@example.com" />
    </div>

    <!-- Theme switching -->
    <button class="btn btn-ghost" onclick="document.documentElement.dataset.theme='light'">
      Toggle Theme
    </button>

    <script src="https://unpkg.com/aural-design/dist/aural-ui.js"></script>
  </body>
</html>
```

[**→ See all 60+ components in action**](https://ferology.github.io/aural-ui/storybook/)

---

## 💡 Why Aural UI?

### Truly Accessible (Not Just ARIA-Labeled)

- ✅ **WCAG 2.1 AA compliant** - 4.5:1+ contrast ratios, tested with real screen readers
- ✅ **High-Contrast theme achieves AAA** - 7:1+ contrast for maximum accessibility
- ✅ **Full keyboard navigation** - Tab, Enter, Escape, Arrow keys all work correctly
- ✅ **44px touch targets** - Meets mobile accessibility requirements
- ✅ **Proper ARIA patterns** - Not just slapping aria-label on divs

### Framework-Agnostic (Works Everywhere)

Every component has **documented examples** for:

- 🟦 **React** (with hooks and TypeScript)
- 🟩 **Vue 3** (Composition API)
- 🟧 **Svelte** (with stores)
- ⬜ **Vanilla HTML** (zero dependencies)

### AI-Optimized Documentation

**Perfect for AI-assisted development:**

- 🤖 **Comprehensive docs** - Claude, ChatGPT, Cursor can copy-paste working code
- 📖 **Usage guidelines** - Every component explains "when to use" vs alternatives
- ♿ **Accessibility built-in** - AI doesn't have to guess ARIA attributes
- 🎨 **Theme examples** - AI can switch vibes instantly

### Zero Dependencies & Customizable

- **Pure CSS** - No PostCSS, no Sass, no build step required
- **Optional vanilla JS** - For interactive components (modals, dropdowns)
- **Token-driven architecture** - Customize with 350+ CSS custom properties
- **No framework lock-in** - Works with any stack

---

## 🎨 Features

### 60+ Production-Ready Components

**Form Controls:** Button, Input, Checkbox, Radio, Select, Textarea, Toggle, Range Slider, Color Picker

**Navigation:** Navbar, Breadcrumbs, Tabs, Pagination, Steps, Sidebar

**Data Display:** Card, Table, Badge, Avatar, Timeline, Stats Card, Image Gallery

**Feedback:** Alert, Toast, Modal, Drawer, Progress, Spinner, Skeleton, Snackbar

**Interactive:** Dropdown, Popover, Tooltip, Accordion, Carousel, Context Menu

[**→ Browse all components**](https://ferology.github.io/aural-ui/storybook/)

### 9 Built-In Themes

- 🌙 **Dark** - Modern dark theme (default)
- ☀️ **Light** - Clean light theme
- 🌟 **Neon** - Vibrant cyberpunk aesthetic
- ⚡ **Kinetic** - Energetic, dynamic colors
- 🌈 **Prismatic** - Rich, saturated palette
- 👁️ **High-Contrast** - WCAG AAA (7:1+ contrast)
- 🎨 **Colorblind-Friendly** - Optimized for color vision deficiency
- 🤍 **Minimal** - Subtle, understated design
- 🧡 **Warm** - Cozy, inviting tones

**Switch themes instantly:**

```html
<html data-theme="neon-dark"></html>
```

[**→ Explore theme gallery**](https://ferology.github.io/aural-ui/storybook/?path=/docs/themes--docs)

---

## 📊 Comparison

| Feature                   | Aural UI           | shadcn/ui     | Bootstrap           | Tailwind UI          |
| ------------------------- | ------------------ | ------------- | ------------------- | -------------------- |
| **Framework-agnostic**    | ✅ Yes             | ❌ React only | ✅ Yes              | ❌ Tailwind only     |
| **Copy-paste components** | ✅ Yes             | ✅ Yes        | ❌ Install required | ❌ Build required    |
| **WCAG AA compliant**     | ✅ Built-in        | ⚠️ Manual     | ⚠️ Manual           | ❌ DIY               |
| **Built-in themes**       | ✅ 9 themes        | ❌ 0          | ⚠️ 2 themes         | ❌ 0                 |
| **AI-friendly docs**      | ✅ Yes             | ✅ Yes        | ❌ Dated            | ⚠️ Partial           |
| **Zero dependencies**     | ✅ Yes             | ❌ Radix UI   | ✅ Yes              | ❌ PostCSS           |
| **NPM package**           | ✅ `aural-design`  | ❌ N/A        | ✅ `bootstrap`      | ✅ `@tailwindcss/ui` |
| **CDN available**         | ✅ unpkg, jsdelivr | ❌ N/A        | ✅ Yes              | ❌ No                |
| **Touch targets**         | ✅ 44px            | ⚠️ Manual     | ⚠️ Manual           | ❌ DIY               |

---

## 🎯 Perfect For

### ✅ Use Aural UI When You Need:

- ♿ **Accessibility-first projects** - Government, healthcare, education, finance
- 🤖 **AI-assisted development** - Works great with Claude Code, ChatGPT, Cursor, Copilot
- 🚀 **Rapid prototyping** - Copy-paste components, ship faster
- 📱 **Multi-framework teams** - Same design system across React, Vue, Svelte
- 🎨 **White-label SaaS** - Built-in theme system makes branding easy
- 🌍 **Inclusive apps** - Colorblind-friendly and high-contrast themes
- 📦 **Zero build step** - Just include CSS and go

### ⚠️ Consider Alternatives If:

- You need **highly customized, unique designs** (use headless UI like Radix)
- You're **already deep in Tailwind** (use shadcn/ui)
- You need **Material Design** specifically (use Material UI)
- You want **component logic only** (use Headless UI)

---

## 📖 Documentation

### Interactive Documentation

- **[📖 Storybook](https://ferology.github.io/aural-ui/storybook/)** - Interactive component library
  - Live component previews with all 9 themes
  - Framework examples (React, Vue, Svelte, HTML)
  - Accessibility guidelines for every component
  - Copy-paste ready code

### Comprehensive Guides

- **[Getting Started Tutorial](https://ferology.github.io/aural-ui/docs/tutorial.html)** - 5-step interactive tutorial
- **[Component Showcase](https://ferology.github.io/aural-ui/docs/index.html)** - All 60+ components with live demos
- **[Design Tokens](https://ferology.github.io/aural-ui/docs/tokens.html)** - Visual reference for customization
- **[Themes Guide](https://ferology.github.io/aural-ui/docs/themes.html)** - Pre-built themes and custom theme creation
- **[API Reference](https://ferology.github.io/aural-ui/docs/api.html)** - JavaScript methods with examples
- **[Error Pages](https://ferology.github.io/aural-ui/docs/error-pages/)** - Accessible error page templates

### Project Organization

- **[Project Structure](https://ferology.github.io/aural-ui/docs/project-tree.html)** - Complete component hierarchy
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - File organization, utility classes (350+), API methods

---

## 📦 Installation

### Option 1: NPM (Recommended)

```bash
npm install aural-design
```

Then import in your project:

```javascript
// CSS
import 'aural-design/dist/aural-ui.css';

// Optional: Choose a theme
import 'aural-design/themes/dark.css';

// JavaScript (for interactive components)
import 'aural-design/dist/aural-ui.js';
```

### Option 2: CDN (No Installation)

```html
<!-- Latest version (auto-updates) -->
<link rel="stylesheet" href="https://unpkg.com/aural-design/dist/aural-ui.css" />

<!-- Or specific version -->
<link rel="stylesheet" href="https://unpkg.com/aural-design@1.0.0/dist/aural-ui.css" />

<!-- jsdelivr (faster CDN) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aural-design/dist/aural-ui.css" />

<!-- JavaScript -->
<script src="https://unpkg.com/aural-design/dist/aural-ui.js"></script>
```

### Option 3: Download & Self-Host

```bash
# Clone repository
git clone https://github.com/ferology/aural-ui.git
cd aural-ui

# Install dependencies
npm install

# Build CSS and JavaScript
npm run build

# Development with watch mode
npm run dev
```

---

## 🚀 Framework Examples

### React

```jsx
import 'aural-design/dist/aural-ui.css';
import { useEffect } from 'react';

function LoginForm() {
  useEffect(() => {
    window.Aural?.init(); // Initialize interactive components
  }, []);

  return (
    <div className="form-group">
      <label className="label" htmlFor="email">
        Email
      </label>
      <input type="email" id="email" className="input" aria-required="true" />
      <button className="btn btn-primary">Log In</button>
    </div>
  );
}
```

### Vue 3

```vue
<template>
  <div class="form-group">
    <label class="label" for="email">Email</label>
    <input type="email" id="email" class="input" v-model="email" aria-required="true" />
    <button class="btn btn-primary">Log In</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import 'aural-design/dist/aural-ui.css';

const email = ref('');
onMounted(() => window.Aural?.init());
</script>
```

### Svelte

```svelte
<script>
  import { onMount } from 'svelte';
  import 'aural-design/dist/aural-ui.css';

  let email = '';
  onMount(() => window.Aural?.init());
</script>

<div class="form-group">
  <label class="label" for="email">Email</label>
  <input
    type="email"
    id="email"
    class="input"
    bind:value={email}
    aria-required="true"
  />
  <button class="btn btn-primary">Log In</button>
</div>
```

[**→ See more examples in Storybook**](https://ferology.github.io/aural-ui/storybook/)

---

## ♿ Accessibility

**All components follow WCAG 2.1 AA standards** (High-Contrast theme achieves AAA)

- ✅ **Color Contrast** - 4.5:1+ minimum (7:1+ in High-Contrast theme)
- ✅ **Touch Targets** - 44px minimum for interactive elements (40px for small variants)
- ✅ **Keyboard Navigation** - Full support with visible focus indicators
- ✅ **Screen Reader** - Tested with NVDA, JAWS, VoiceOver
- ✅ **ARIA Patterns** - Proper roles, states, and properties
- ✅ **Motion** - Respects `prefers-reduced-motion`
- ✅ **Color Vision** - Colorblind-friendly theme available

**Note**: Neon and aesthetic-focused themes prioritize visual impact while maintaining minimum WCAG AA standards where possible.

[**→ Read full accessibility guidelines**](https://ferology.github.io/aural-ui/storybook/?path=/docs/accessibility--docs)

---

## 🚀 Quick Start

```html
<!-- Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-danger">Danger</button>

<!-- Buttons with Icons (Lucide) -->
<button class="btn btn-primary">
  <i data-lucide="plus" style="width: 18px; height: 18px;"></i>
  Add Item
</button>

<!-- Input with label -->
<div class="form-group">
  <label class="label">Email</label>
  <input type="email" class="input" placeholder="you@example.com" />
  <p class="form-helper">We'll never share your email</p>
</div>

<!-- Responsive Grid Layout -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="card">
    <h3 class="text-lg font-semibold">Card 1</h3>
    <p class="text-secondary">Card content</p>
  </div>
  <div class="card">
    <h3 class="text-lg font-semibold">Card 2</h3>
    <p class="text-secondary">Card content</p>
  </div>
  <div class="card">
    <h3 class="text-lg font-semibold">Card 3</h3>
    <p class="text-secondary">Card content</p>
  </div>
</div>

<!-- Typography Utilities -->
<h1 class="text-4xl font-bold">Large Heading</h1>
<p class="text-base leading-relaxed">Body text with comfortable line height</p>
<small class="text-sm text-secondary">Small secondary text</small>

<!-- Modal -->
<script>
  Aural.openModal('my-modal');
  Aural.closeModal('my-modal');
</script>

<!-- Toast Notification -->
<script>
  Aural.showToast('Operation successful!', 'success');
</script>
```

---

## 🎨 Theming

### Using Pre-built Themes

Aural UI includes **9 professionally designed themes**, each showcasing the flexibility of our token system:

| Theme                   | Description                                   | Use Case                        |
| ----------------------- | --------------------------------------------- | ------------------------------- |
| **Minimal**             | Ultra-clean monochrome with subtle grays      | Default, maximum clarity        |
| **Light**               | Clean light theme with subtle grays           | Light mode preference           |
| **Dark**                | Professional dark theme with blue accents     | Dark mode, general purpose      |
| **Neon**                | Cyberpunk aesthetic with vibrant cyan/magenta | Bold, modern applications       |
| **Kinetic**             | Brutalist editorial with high contrast        | Content-focused, editorial      |
| **Prismatic**           | Purple gradients with glass morphism          | Colorful, modern design systems |
| **High Contrast**       | Maximum contrast ratios (WCAG AAA)            | Accessibility, visibility       |
| **Colorblind Friendly** | Blue/yellow palette optimized for CVD         | Color vision deficiency         |
| **Warm**                | Cozy earth tones with amber accents           | Long reading sessions, comfort  |

```html
<!-- Minimal theme (default) -->
<link rel="stylesheet" href="aural-ui/themes/minimal.css" />

<!-- Light theme -->
<link rel="stylesheet" href="aural-ui/themes/light.css" />

<!-- Dark theme -->
<link rel="stylesheet" href="aural-ui/themes/dark.css" />

<!-- Neon theme -->
<link rel="stylesheet" href="aural-ui/themes/neon.css" />

<!-- Kinetic theme -->
<link rel="stylesheet" href="aural-ui/themes/kinetic.css" />

<!-- Prismatic theme -->
<link rel="stylesheet" href="aural-ui/themes/prismatic.css" />

<!-- High Contrast theme -->
<link rel="stylesheet" href="aural-ui/themes/high-contrast.css" />

<!-- Colorblind Friendly theme -->
<link rel="stylesheet" href="aural-ui/themes/colorblind-friendly.css" />

<!-- Warm theme -->
<link rel="stylesheet" href="aural-ui/themes/warm.css" />
```

**All themes meet WCAG 2.1 AA standards** (4.5:1+ contrast). The **High-Contrast theme achieves WCAG AAA** (7:1+) for maximum accessibility.

### Creating Custom Themes

Override semantic tokens to match your brand:

```css
/* my-brand-theme.css */
:root {
  /* Brand colors */
  --color-primary: #ff6b35;
  --color-primary-hover: #e85d2f;

  /* Backgrounds */
  --color-bg-primary: #1a1a2e;
  --color-bg-secondary: #16213e;

  /* Text */
  --color-text-primary: #eaeaea;
}
```

Then include after Aural UI:

```html
<link rel="stylesheet" href="aural-ui/dist/aural-ui.css" />
<link rel="stylesheet" href="my-brand-theme.css" />
```

---

## 📚 Additional Documentation

Comprehensive documentation is available with interactive examples:

- **[🎉 Storybook](https://ferology.github.io/aural-ui/storybook/)** - Interactive component library with all 9 themes
- **[Component Showcase](https://ferology.github.io/aural-ui/)** - Browse all 60+ components with live demos
- **[API Reference](https://ferology.github.io/aural-ui/docs/api.html)** - Complete JavaScript API documentation
- **[Getting Started Tutorial](https://ferology.github.io/aural-ui/docs/tutorial.html)** - 5-step interactive tutorial
- **[Design Tokens](https://ferology.github.io/aural-ui/docs/tokens.html)** - Visual token reference with copy functionality
- **[Theme Guide](https://ferology.github.io/aural-ui/docs/themes.html)** - Pre-built themes and customization guide
- **[Real-World Examples](https://ferology.github.io/aural-ui/docs/examples.html)** - Production-ready templates
- **[Accessibility Tests](./ACCESSIBILITY_TESTS.md)** - Comprehensive WCAG 2.1 AA testing checklist
- **[TypeScript Support](./types/index.d.ts)** - Full TypeScript definitions included

### Serve Documentation Locally

```bash
npm run serve
# Open http://localhost:3001
```

---

## 🧩 Components & Utilities

### Form Controls

- **Button** - Primary, secondary, danger, ghost variants with loading states
- **Input** - Text, email, password, number with validation states
- **Search Bar** - Autocomplete search with keyboard navigation and suggestions
- **Checkbox** - Custom styled with indeterminate state and sizes
- **Radio** - Custom styled with button variant and grouping
- **Toggle/Switch** - Animated on/off switch with labels
- **Switch** - iOS-style visual toggle switch with multiple variants
- **Select** - Native styled + custom dropdown variant
- **Rating** - Star rating with interactive and read-only modes, half-stars
- **Slider** - Range input with custom styling and value display
- **Color Picker** - Visual HSL color selection with multiple input modes
- **Range Slider** - Dual-handle slider for min/max range selection
- **Multi-Select** - Multi-select dropdown with chips/tags display
- **Combobox** - Input with autocomplete dropdown for search and selection
- **Chips/Tags** - Input tags with add/remove functionality
- **File Upload** - Drag-and-drop with validation and progress tracking
- **Date Picker** - Calendar component with date selection
- **Time Picker** - Time selection with 12/24 hour format support
- **Calendar** - Full month view calendar with navigation and events
- **Date Range Picker** - Select start and end dates with dual calendars

### Navigation

- **Navigation Bar** - Horizontal top navigation with logo, links, dropdowns, and mobile menu
- **Tabs** - Underline, pills, and boxed styles with keyboard navigation
- **Breadcrumb** - Location hierarchy with customizable separators
- **Pagination** - Page navigation with numbered and simple variants
- **Stepper** - Step indicator for multi-step processes (horizontal/vertical)
- **Drawer** - Sliding side panel with left/right/top/bottom positions
- **Command Palette** - CMD/CTRL+K searchable command menu
- **Context Menu** - Right-click menu with nested submenus and keyboard navigation
- **Bottom Navigation** - Mobile-first bottom nav bar with badges and FAB variant

### Data Display

- **Table** - Striped, bordered, compact, with sticky headers
- **Avatar** - Images, initials, icons, status badges, stacked groups
- **Progress Bar** - Determinate/indeterminate with 5 color variants
- **Badge** - Status indicators, labels, and counts
- **Card** - Content containers with optional headers/footers
- **Divider** - Horizontal/vertical separators with optional labels
- **Empty State** - No data placeholders with icons
- **Timeline** - Vertical/horizontal event timeline with states
- **Code Block** - Syntax highlighting with copy functionality
- **Stats Card** - Metric display cards with trend indicators and progress bars
- **Carousel** - Image/content slider with navigation, autoplay, and touch support
- **Tree View** - Hierarchical tree structure with expand/collapse and checkboxes
- **Image Gallery** - Responsive grid gallery with lightbox modal

### Interactive

- **Tooltip** - Contextual information on hover/focus (4 positions)
- **Dropdown** - Action menus with keyboard navigation and submenus
- **Accordion** - Collapsible content sections (single/multiple modes)
- **Popover** - Rich content overlays with auto-positioning
- **Modal** - Dialog overlays with focus trapping
- **Dialog** - Lightweight confirmation dialogs with variants

### Feedback

- **Toast** - Notification messages (success, error, warning, info)
- **Snackbar** - Brief messages at screen edge (Material Design style)
- **Skeleton** - Loading placeholders for content
- **Alert Banner** - Prominent page-level notifications with actions
- **Loading Spinner** - Multiple variants (dots, pulse, bars, dual)
- **Notification Center** - Bell icon with dropdown notification list

### Layout Utilities

#### Responsive Grid System

Mobile-first grid system with breakpoints at 640px, 768px, 1024px, and 1280px.

```html
<!-- Container with max-width -->
<div class="container">...</div>

<!-- Basic grid (1 col mobile, 3 cols desktop) -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">...</div>

<!-- 12-column grid with custom spans -->
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-12 md:col-span-8">Main</div>
  <div class="col-span-12 md:col-span-4">Sidebar</div>
</div>

<!-- Auto-responsive card grid -->
<div class="grid-cards">...</div>

<!-- Common patterns -->
<div class="grid-2-col">...</div>
<!-- 2 columns on tablet+ -->
<div class="grid-3-col">...</div>
<!-- 3 columns on desktop -->
<div class="grid-4-col">...</div>
<!-- 2 on tablet, 4 on desktop -->
```

**Available Classes:**

- Containers: `.container`, `.container-fluid`
- Grid columns: `.grid-cols-1` through `.grid-cols-12`
- Column spans: `.col-span-1` through `.col-span-12`, `.col-span-full`
- Row spans: `.row-span-1` through `.row-span-6`
- Gap utilities: `.gap-0`, `.gap-1`, `.gap-2`, `.gap-3`, `.gap-4`, `.gap-6`, `.gap-8`, `.gap-12`
- Responsive modifiers: `sm:`, `md:`, `lg:`, `xl:`

#### Typography Utilities

Comprehensive typography system for all text needs.

```html
<!-- Font Families -->
<p class="font-sans">Sans-serif text</p>
<p class="font-serif">Serif text</p>
<p class="font-mono">Monospace text</p>

<!-- Font Sizes (xs, sm, base, lg, xl, 2xl-9xl) -->
<h1 class="text-4xl font-bold">Large Heading</h1>
<p class="text-base">Body text</p>
<small class="text-sm">Small text</small>

<!-- Font Weights (thin, extralight, light, normal, medium, semibold, bold, extrabold, black) -->
<p class="font-semibold">Semi-bold text</p>

<!-- Line Heights -->
<p class="leading-relaxed">Relaxed line height</p>

<!-- Letter Spacing -->
<p class="tracking-wide uppercase">Tracked text</p>

<!-- Text Utilities -->
<p class="truncate">Truncated text...</p>
<p class="line-clamp-2">Clamped to 2 lines...</p>
```

#### Spacing Utilities (NEW)

Tailwind-like spacing utilities for margin and padding.

```html
<!-- Margin -->
<div class="m-4">Margin on all sides</div>
<div class="mt-6 mb-4">Margin top and bottom</div>
<div class="mx-auto">Center horizontally</div>

<!-- Padding -->
<div class="p-6">Padding on all sides</div>
<div class="px-4 py-2">Padding horizontal and vertical</div>

<!-- Responsive -->
<div class="p-4 md:p-6 lg:p-8">Responsive padding</div>
```

#### Display & Flexbox Utilities (NEW)

Comprehensive layout utilities for modern CSS.

```html
<!-- Display -->
<div class="flex items-center justify-between">...</div>
<div class="grid grid-cols-3 gap-4">...</div>
<div class="hidden md:block">Show on desktop</div>

<!-- Flexbox -->
<div class="flex flex-col md:flex-row gap-4">...</div>
<div class="flex-1">Grow to fill space</div>

<!-- Position -->
<div class="relative">
  <div class="absolute top-0 right-0">...</div>
</div>
```

#### Color Utilities (NEW)

Quick color application for text, backgrounds, and borders.

```html
<!-- Text Colors -->
<p class="text-primary">Primary color text</p>
<p class="text-success">Success message</p>
<p class="text-error">Error message</p>

<!-- Background Colors -->
<div class="bg-primary text-white">Primary background</div>
<div class="bg-success-alpha">Translucent success</div>

<!-- Border Colors -->
<div class="border border-primary">Primary border</div>
```

#### Border Utilities (NEW)

Border width, radius, and style utilities.

```html
<!-- Border Width -->
<div class="border">1px border</div>
<div class="border-2">2px border</div>
<div class="border-t-4">4px top border</div>

<!-- Border Radius -->
<div class="rounded">Default radius</div>
<div class="rounded-lg">Large radius</div>
<div class="rounded-full">Fully rounded</div>

<!-- Border Style -->
<div class="border border-dashed">Dashed border</div>
```

#### Animation Utilities (NEW)

Pre-built animations with accessibility support.

```html
<!-- Entrance Animations -->
<div class="animate-fade-in">Fade in</div>
<div class="animate-slide-in-up">Slide up</div>

<!-- Attention Seekers -->
<div class="animate-pulse">Pulsing</div>
<div class="animate-bounce">Bouncing</div>

<!-- Modifiers -->
<div class="animate-fade-in animate-slow">Slow fade</div>
<div class="animate-pulse animate-delay-1">Delayed pulse</div>

<!-- Respects prefers-reduced-motion automatically -->
```

### Page Templates

#### Error Pages

Production-ready, accessible error page templates included:

- **404 Not Found** - Custom styled page not found
- **403 Forbidden** - Access denied page
- **500 Server Error** - Internal server error page
- **Maintenance Mode** - Scheduled maintenance page
- **Coming Soon** - Launch countdown page

**Features:**

- ✅ WCAG 2.1 AA compliant
- ✅ Mobile-optimized with responsive breakpoints (768px, 480px)
- ✅ Touch-friendly buttons (48×48px minimum)
- ✅ Theme-aware (works with all 4 themes)
- ✅ Respects prefers-reduced-motion
- ✅ High contrast mode support
- ✅ Semantic HTML with proper ARIA labels
- ✅ Screen reader tested

**Usage:**

```html
<!-- Example: 404 Page -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="aural-ui.css" />
    <link rel="stylesheet" href="dark.css" />
  </head>
  <body>
    <!-- Ready-to-use error page template -->
  </body>
</html>
```

See **[Error Pages Documentation](docs/error-pages/ACCESSIBILITY.md)** for full accessibility and mobile compliance details.

### Icon Integration

Aural UI works seamlessly with **Lucide Icons** (MIT licensed).

```html
<!-- Include Lucide -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Use icons -->
<i data-lucide="heart" style="width: 20px; height: 20px;"></i>
<i data-lucide="star" style="width: 24px; height: 24px; color: var(--color-warning);"></i>

<!-- Initialize -->
<script>
  lucide.createIcons();
</script>
```

Browse 1000+ icons at [lucide.dev/icons](https://lucide.dev/icons)

---

## 🏗️ Project Structure

```
aural-ui/
├── tokens/
│   ├── core/              # Primitive tokens (colors, spacing, typography, etc.)
│   └── semantic/          # Semantic tokens (component-specific mappings)
├── themes/
│   ├── dark.css           # Dark theme
│   ├── light.css          # Light theme
│   └── custom-template.css
├── components/            # Component styles (20+ components)
│   ├── button.css
│   ├── input.css
│   ├── modal.css
│   └── ...
├── utilities/             # Utility classes
│   ├── typography.css     # Font utilities
│   └── grid.css          # Responsive grid system
├── javascript/
│   └── index.js          # Interactive component logic
├── src/
│   └── aural-ui.css      # Main entry point (imports all)
├── dist/                 # Built/compiled files
│   ├── aural-ui.css
│   ├── aural-ui.min.css
│   ├── aural-ui.js
│   └── aural-ui.min.js
└── docs/                 # Documentation and showcase
    └── showcase.html     # Live component showcase
```

### Token Architecture

```
Core Tokens (Primitives)
    ↓
Semantic Tokens (Behavior)
    ↓
Component Styles
```

**Core tokens** define raw values (colors, spacing scales, font sizes).
**Semantic tokens** map core tokens to intent (e.g., `--color-btn-primary-bg`).
**Components** use only semantic tokens for easy theming.

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Watch mode (auto-rebuild on changes)
npm run dev

# Build for production
npm run build

# Serve documentation
npm run serve
```

---

## ♿ Accessibility

All components follow WCAG 2.1 AA accessibility standards (High-Contrast theme achieves AAA) and include:

- ✅ **Keyboard Navigation** - Full support for Tab, Arrow keys, Enter, Escape
- ✅ **Focus Indicators** - Visible focus outlines with proper contrast (2px solid)
- ✅ **ARIA Attributes** - Proper roles, states, and relationships
- ✅ **Screen Reader Support** - Meaningful labels and state announcements
- ✅ **Touch Targets** - Minimum 44px for all interactive elements (40px for small variants)
- ✅ **Reduced Motion** - Respects `prefers-reduced-motion` preference
- ✅ **Color Contrast** - WCAG AA compliant (4.5:1+ minimum); High-Contrast theme achieves AAA (7:1+)
- ✅ **Semantic HTML** - Proper use of headings, lists, and landmarks

**Note**: Neon and aesthetic-focused themes prioritize visual impact while maintaining minimum WCAG AA standards where possible. Use High-Contrast theme for maximum accessibility compliance.

### Testing Recommendations

- Test with keyboard only (no mouse)
- Use screen reader (VoiceOver on macOS, NVDA on Windows)
- Run browser accessibility checker (Chrome DevTools)
- Verify color contrast ratios
- Test with reduced motion enabled

---

## 📊 Browser Support

- **Chrome/Edge** - Last 2 versions
- **Firefox** - Last 2 versions
- **Safari** - 12+
- **iOS Safari** - 12+
- **Modern Browsers** - Supporting CSS Custom Properties and ES6+

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- Setting up the development environment
- Code standards and conventions
- Creating new components
- Submitting pull requests
- Reporting issues

---

## 📄 License

**MIT License** - See [LICENSE](LICENSE) for details.

---

## 🤝 Credits

Built for Bai and future applications.

**Inspired by:**

- Shadcn UI
- Radix UI
- Tailwind CSS
- Material Design
