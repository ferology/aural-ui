# Aural UI

**A modern, accessible design system built for flexibility and customization**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](package.json)

## 🚀 [Live Demo](https://ferology.github.io/aural-ui/)

**[View the complete component showcase →](https://ferology.github.io/aural-ui/)**

---

## 🎯 Overview

Aural UI is a comprehensive component library that combines beautiful design with practical functionality. Built on a foundation of design tokens and CSS custom properties, it offers unparalleled customization while maintaining consistency across your entire application.

**Key Features:**
- 🎨 **Token-Driven Architecture** - Customize every aspect with CSS custom properties
- 🌓 **Dark & Light Themes** - Both themes included, seamlessly switchable
- ♿ **Accessibility First** - ~95% WCAG 2.1 AA compliant with comprehensive ARIA support
- 📦 **59 Components** - Everything from buttons to notification centers
- 📱 **Responsive Grid System** - Mobile-first, flexible layout utilities
- ✨ **Typography System** - Comprehensive font utilities for all use cases
- 💫 **Glow & Shadow Utilities** - 60+ luminous effects and elevation tokens
- 🎭 **Icon Integration** - Works seamlessly with Lucide Icons (MIT licensed)
- 🚀 **Lightweight** - Zero dependencies, vanilla JavaScript, optimized CSS
- 🔧 **Framework-Agnostic** - Works with React, Vue, Svelte, or vanilla JS
- 💡 **Developer Friendly** - Simple, semantic HTML with intuitive class names
- ⌨️ **Keyboard Navigation** - Full keyboard support across all components

---

## 📚 Documentation

### Quick Start
- **[Navigation Hub](docs/nav.html)** - Central navigation for all documentation
- **[Project Structure](docs/project-tree.html)** - Complete component hierarchy (59 components organized by category)
- **[Getting Started Tutorial](docs/tutorial.html)** - 5-step interactive tutorial
- **[Component Showcase](docs/index.html)** - All 59 components with live demos

### Complete Documentation
- **[API Reference](docs/api.html)** - 25+ JavaScript methods with interactive playgrounds
- **[Design Tokens](docs/tokens.html)** - Visual reference for colors, spacing, typography
- **[Themes Guide](docs/themes.html)** - Pre-built themes and custom theme creation
- **[Examples](docs/examples.html)** - Production-ready templates

### Project Organization
For a detailed overview of the project structure, see **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** which includes:
- Complete file hierarchy
- Component categorization (Form Controls, Navigation, Data Display, Interactive, Feedback)
- Utility class reference (350+ utility classes)
- JavaScript API method listing
- Quick navigation links

---

## 📦 Installation

### Option 1: Direct Include

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Aural UI CSS -->
    <link rel="stylesheet" href="aural-ui/dist/aural-ui.css">

    <!-- Choose a theme -->
    <link rel="stylesheet" href="aural-ui/themes/dark.css">
    <!-- OR -->
    <link rel="stylesheet" href="aural-ui/themes/light.css">
</head>
<body>
    <button class="btn btn-primary">Click me</button>

    <!-- Aural UI JavaScript -->
    <script src="aural-ui/dist/aural-ui.js"></script>
</body>
</html>
```

### Option 2: Build from Source

```bash
# Clone the repository
cd /path/to/aural-ui

# Install dependencies
npm install

# Build CSS and JavaScript
npm run build

# Development with watch mode
npm run dev
```

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
    <input type="email" class="input" placeholder="you@example.com">
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

```html
<!-- Dark theme (default) -->
<link rel="stylesheet" href="aural-ui/themes/dark.css">

<!-- Light theme -->
<link rel="stylesheet" href="aural-ui/themes/light.css">
```

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
<link rel="stylesheet" href="aural-ui/dist/aural-ui.css">
<link rel="stylesheet" href="my-brand-theme.css">
```

---

## 📚 Documentation

Comprehensive documentation is available with interactive examples:

- **[Component Showcase](https://ferology.github.io/aural-ui/)** - Browse all 49+ components with live demos
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
<div class="grid-2-col">...</div> <!-- 2 columns on tablet+ -->
<div class="grid-3-col">...</div> <!-- 3 columns on desktop -->
<div class="grid-4-col">...</div> <!-- 2 on tablet, 4 on desktop -->
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

All components follow WCAG AA accessibility guidelines and include:

- ✅ **Keyboard Navigation** - Full support for Tab, Arrow keys, Enter, Escape
- ✅ **Focus Indicators** - Visible focus outlines with proper contrast (2px solid)
- ✅ **ARIA Attributes** - Proper roles, states, and relationships
- ✅ **Screen Reader Support** - Meaningful labels and state announcements
- ✅ **Touch Targets** - Minimum 44px for all interactive elements
- ✅ **Reduced Motion** - Respects `prefers-reduced-motion` preference
- ✅ **Color Contrast** - WCAG AA compliant (4.5:1 for text, 3:1 for UI)
- ✅ **Semantic HTML** - Proper use of headings, lists, and landmarks

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
