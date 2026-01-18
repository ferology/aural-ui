# Aural UI

**Token-driven, white-label design system for modern web applications**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](package.json)

---

## 🎯 Overview

Aural UI is a professional design system built with scalability and customization in mind. Change a few tokens to completely rebrand your application.

**Key Features:**
- 🎨 **Token-based theming** - Change entire brand with a few variables
- 🌓 **Dark & Light modes** - Both themes included
- ♿ **Accessible by default** - WCAG AA compliant
- 📦 **Framework-agnostic** - Works with React, Vue, Svelte, vanilla JS
- 🎯 **Production-ready** - Battle-tested components
- 🔧 **Highly customizable** - Override any token or component style

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
<!-- Button examples -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-danger">Danger</button>

<!-- Input with label -->
<div class="form-group">
    <label class="label">Email</label>
    <input type="email" class="input" placeholder="you@example.com">
    <p class="form-helper">We'll never share your email</p>
</div>

<!-- Card -->
<div class="card">
    <h3>Card Title</h3>
    <p>Card content goes here</p>
</div>

<!-- Toast notification -->
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

- **Component Showcase**: `docs/showcase.html`
- **Token Reference**: `docs/tokens.html`
- **Theme Guide**: `docs/themes.html`

### Serve Documentation Locally

```bash
npm run serve
# Open http://localhost:3001
```

---

## 🧩 Components

### Form Controls
- **Button** - Primary, secondary, danger, ghost variants
- **Input** - Text, email, password, number with validation states
- **Checkbox** - Custom styled with indeterminate state
- **Radio** - Custom styled with button variant
- **Toggle** - Animated on/off switch
- **Select** - Native styled + custom dropdown variant

### Navigation
- **Tabs** - Underline, pills, and boxed styles
- **Breadcrumb** - Location hierarchy with multiple separators
- **Pagination** - Page navigation with various layouts

### Data Display
- **Table** - Sortable, striped, bordered, sticky headers
- **Avatar** - Images, initials, status badges, groups
- **Progress** - Determinate/indeterminate with color variants
- **Badge** - Status indicators and labels
- **Card** - Content containers
- **Divider** - Horizontal/vertical separators
- **Empty State** - No data placeholders

### Interactive
- **Tooltip** - Contextual information on hover/focus
- **Dropdown** - Action menus with keyboard navigation
- **Accordion** - Collapsible content sections
- **Popover** - Rich content overlays
- **Modal** - Dialog overlays

### Feedback
- **Toast** - Notification messages
- **Skeleton** - Loading placeholders

---

## 🏗️ Project Structure

```
aural-ui/
├── tokens/
│   ├── core/           # Primitive tokens (colors, spacing, etc.)
│   └── semantic/       # Semantic tokens (map to core)
├── themes/
│   ├── dark.css        # Dark theme
│   ├── light.css       # Light theme
│   └── custom-template.css
├── components/         # Component styles
├── javascript/         # Interactive components
├── dist/              # Built files
└── docs/              # Documentation
```

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

## 📊 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari 12+
- iOS Safari 12+

---

## 📄 License

**MIT License** - See [LICENSE](LICENSE) for details.

---

## 🤝 Credits

Built by the Workshop BAI team for Bai and future applications.

**Inspired by:**
- Shadcn UI
- Radix UI
- Tailwind CSS
- Material Design
