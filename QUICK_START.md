# Aural UI - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies

```bash
cd /Users/feraf/Projects/aural-ui
npm install
```

This will install PostCSS and build tools.

---

### Step 2: Build the CSS & JavaScript

```bash
npm run build
```

This creates:
- `dist/aural-ui.css` (full CSS with all components)
- `dist/aural-ui.min.css` (minified version)
- `dist/aural-ui.js` (JavaScript utilities)
- `dist/aural-ui.min.js` (minified JS)

---

### Step 3: View the Showcase

```bash
npm run serve
```

Then open: **http://localhost:3001/showcase.html**

You'll see all components with dark/light theme toggle!

---

## 📦 Using in Your Project

### Option 1: Include Directly (Recommended for Bai)

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Aural UI CSS -->
    <link rel="stylesheet" href="/path/to/aural-ui/dist/aural-ui.css">

    <!-- Choose a theme -->
    <link rel="stylesheet" href="/path/to/aural-ui/themes/dark.css">
</head>
<body>
    <button class="btn btn-primary">Click me</button>

    <!-- Aural UI JavaScript -->
    <script src="/path/to/aural-ui/dist/aural-ui.js"></script>

    <script>
        // Show a toast
        Aural.showToast('Hello world!', 'success');

        // Open a modal
        Aural.openModal('my-modal');
    </script>
</body>
</html>
```

### Option 2: Import Specific Components

```html
<head>
    <!-- Only import what you need -->
    <link rel="stylesheet" href="/path/to/aural-ui/tokens/core/colors.css">
    <link rel="stylesheet" href="/path/to/aural-ui/tokens/semantic/colors.css">
    <link rel="stylesheet" href="/path/to/aural-ui/components/button.css">
    <link rel="stylesheet" href="/path/to/aural-ui/components/input.css">
</head>
```

---

## 🎨 Creating a Custom Theme

Create a new CSS file that overrides semantic tokens:

```css
/* my-brand-theme.css */
:root {
    /* Brand color */
    --color-primary: #ff6b35;
    --color-primary-hover: #e85d2f;

    /* Backgrounds */
    --color-bg-primary: #1a1a2e;
    --color-bg-secondary: #16213e;

    /* Text */
    --color-text-primary: #eaeaea;
}
```

Then include it AFTER Aural UI:

```html
<link rel="stylesheet" href="aural-ui/dist/aural-ui.css">
<link rel="stylesheet" href="my-brand-theme.css">
```

---

## 🔧 Development Mode

Watch for changes and auto-rebuild:

```bash
npm run dev
```

This runs PostCSS in watch mode - any changes to CSS files will auto-rebuild.

---

## 📚 Component Examples

### Button

```html
<!-- Variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-ghost">Ghost</button>

<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- States -->
<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-primary btn-loading">Loading</button>

<!-- With icon -->
<button class="btn btn-primary">
    <svg>...</svg>
    Button Text
</button>
```

### Input

```html
<!-- Basic -->
<input type="text" class="input" placeholder="Enter text">

<!-- With form group -->
<div class="form-group">
    <label class="label">Email</label>
    <input type="email" class="input" placeholder="you@example.com">
    <p class="form-helper">We'll never share your email</p>
</div>

<!-- Error state -->
<input type="email" class="input error" placeholder="Invalid">
<p class="form-error">Please enter a valid email</p>

<!-- Success state -->
<input type="text" class="input success" value="Valid input">
<p class="form-success">Looks good!</p>
```

### Card

```html
<!-- Basic card -->
<div class="card">
    <h3>Card Title</h3>
    <p>Card content</p>
</div>

<!-- Hoverable card -->
<div class="card card-hover">
    <p>Hover me!</p>
</div>

<!-- Bordered with accent -->
<div class="card card-bordered card-primary">
    <p>Primary accent</p>
</div>
```

### Badge

```html
<span class="badge badge-success">Active</span>
<span class="badge badge-warning">Pending</span>
<span class="badge badge-error">Error</span>
```

### Toast (JavaScript)

```javascript
// Success toast
Aural.showToast('Operation successful!', 'success');

// Error toast
Aural.showToast('Something went wrong', 'error');

// Custom title and duration
Aural.showToast('Message', 'info', 'Custom Title', 3000);
```

### Modal (JavaScript)

```html
<!-- Modal HTML -->
<div class="modal-overlay" id="my-modal">
    <div class="modal">
        <div class="modal-header">
            <h2 class="modal-title">Modal Title</h2>
        </div>
        <div class="modal-body">
            <p>Modal content...</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="Aural.closeModal('my-modal')">Cancel</button>
            <button class="btn btn-primary">Confirm</button>
        </div>
    </div>
</div>

<!-- JavaScript -->
<script>
// Open
Aural.openModal('my-modal');

// Close
Aural.closeModal('my-modal');

// Toggle
Aural.toggleModal('my-modal');
</script>
```

### Skeleton

```html
<!-- Title skeleton -->
<div class="skeleton skeleton-title"></div>

<!-- Text skeletons -->
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text" style="width: 70%;"></div>

<!-- Circle (avatar) -->
<div class="skeleton skeleton-circle" style="width: 40px; height: 40px;"></div>

<!-- Button -->
<div class="skeleton skeleton-button"></div>
```

### Empty State

```html
<div class="empty-state">
    <svg class="empty-state-icon" viewBox="0 0 24 24">...</svg>
    <h3 class="empty-state-title">No items yet</h3>
    <p class="empty-state-description">Get started by creating your first item</p>
    <button class="btn btn-primary">Create Item</button>
</div>
```

---

## 🛠️ Build Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Watch mode (auto-rebuild on changes) |
| `npm run build` | Build CSS + JS |
| `npm run build:css` | Build CSS only |
| `npm run build:js` | Build JS only |
| `npm run serve` | Serve docs at localhost:3001 |

---

## 📂 Project Structure

```
aural-ui/
├── tokens/
│   ├── core/          # Primitive tokens (never change)
│   └── semantic/      # Semantic tokens (themes override these)
├── themes/
│   ├── dark.css       # Dark theme (Bai default)
│   └── light.css      # Light theme
├── components/        # All UI components
├── javascript/        # Interactive utilities
├── dist/             # Built files (generated by npm run build)
└── docs/             # Documentation & showcase
```

---

## ✅ Next Steps

1. **Build the project**: `npm run build`
2. **View showcase**: `npm run serve` → http://localhost:3001/showcase.html
3. **Integrate into Bai**: Replace Bai's CSS with Aural UI
4. **Create custom theme**: Override semantic tokens for brand colors

---

## 🎨 Design Tokens Reference

**Core tokens** (`tokens/core/`):
- `colors.css` - All color primitives
- `spacing.css` - Spacing scale (space-0 to space-96)
- `typography.css` - Font families, sizes, weights
- `shadows.css` - Shadow scale (shadow-xs to shadow-2xl)
- `radius.css` - Border radius (radius-none to radius-full)
- `animations.css` - Durations, easing, transitions

**Semantic tokens** (`tokens/semantic/`):
- `colors.css` - System colors (--color-primary, --color-bg-primary, etc.)

**Themes** (`themes/`):
- `dark.css` - Override semantic tokens for dark mode
- `light.css` - Override semantic tokens for light mode

---

## 🚨 Important Notes

- **Always use semantic tokens** in your code, never core tokens directly
- **Never modify core tokens** - they're primitives
- **Create new themes** by overriding semantic tokens
- **Build before testing** - run `npm run build` after CSS changes
- **Use PostCSS nesting** - it's enabled (cleaner syntax)

---

## 💬 Questions?

Check the showcase page (`docs/showcase.html`) for live examples of all components!
