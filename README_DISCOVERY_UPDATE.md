# README Discovery Update

Replace the current README.md lines 1-117 with this optimized version:

---

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

```html
<!-- In your HTML -->
<link rel="stylesheet" href="node_modules/aural-design/dist/aural-ui.css" />
<script src="node_modules/aural-design/dist/aural-ui.js"></script>
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

### Zero Dependencies

- **Pure CSS** - No PostCSS, no Sass, no build step required
- **Optional vanilla JS** - For interactive components (modals, dropdowns)
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

### Design Token System

**350+ customizable tokens:**

- Colors (semantic + neutral palette)
- Spacing (consistent scale)
- Typography (6 font sizes, 3 weights)
- Shadows (5 elevation levels)
- Border radius (4 sizes)
- Transitions (fast, normal, slow)

```css
/* Customize via CSS variables */
:root {
  --color-primary: #6366f1;
  --space-base: 8px;
  --font-sans: 'Inter', sans-serif;
}
```

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

### Project Organization

- **[Project Structure](https://ferology.github.io/aural-ui/docs/project-tree.html)** - Complete component hierarchy
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - File organization, utility classes, API methods

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

## 🛠️ Installation Options

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
```

### Option 3: Download & Self-Host

```bash
# Download latest release
wget https://github.com/ferology/aural-ui/archive/refs/heads/main.zip

# Or clone repository
git clone https://github.com/ferology/aural-ui.git
cd aural-ui
npm install
npm run build
```

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Good first issues:** [https://github.com/ferology/aural-ui/labels/good%20first%20issue](https://github.com/ferology/aural-ui/labels/good%20first%20issue)

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

- **Icons:** [Lucide](https://lucide.dev) (MIT licensed)
- **Inspiration:** Modern design systems prioritizing accessibility
- **Community:** All contributors making Aural UI better

---

## 📞 Support

- **Documentation:** [https://ferology.github.io/aural-ui/](https://ferology.github.io/aural-ui/)
- **Issues:** [GitHub Issues](https://github.com/ferology/aural-ui/issues)
- **Discussions:** [GitHub Discussions](https://github.com/ferology/aural-ui/discussions)

---

**Made with ♿ accessibility and 🤖 AI-assisted development in mind**

[⬆ Back to top](#-aural-ui)

---

## [Rest of original README continues from line 118 onwards...]
