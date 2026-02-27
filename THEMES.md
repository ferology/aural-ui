# Aural UI Theme System Documentation

## Overview

Aural UI uses a **token-based theming system** powered by CSS custom properties (CSS variables). All themes share the same design tokens but with different color values, ensuring consistent component behavior across all themes.

### Key Features

- **7 Built-in Themes** - Dark, Light, Neon, Kinetic, Prismatic, Minimal, Warm
- **WCAG AA Compliant** - All color combinations meet accessibility standards
- **CSS Variables** - Easy customization without JavaScript
- **Instant Switching** - Change themes without page reload
- **Component Consistency** - All components automatically adapt to theme changes

---

## Available Themes

### 1. Dark (Default)
**Purpose:** Default theme optimized for low-light conditions
**Colors:** Dark navy backgrounds, vibrant green accent
**Best For:** Night time use, reducing eye strain, professional interfaces

```css
/* Primary Brand: Vibrant Green (#5ebd8f) */
--color-bg-primary: #0f0f1a;
--color-text-primary: #f5f5fa;
```

### 2. Light
**Purpose:** Clean theme for daytime use
**Colors:** White backgrounds, vibrant green accent
**Best For:** Bright environments, documentation, public-facing sites

```css
/* Primary Brand: Vibrant Green (#5ebd8f) */
--color-bg-primary: #ffffff;
--color-text-primary: #111827;
```

### 3. Neon
**Purpose:** Cyberpunk-inspired with electric colors
**Colors:** Dark backgrounds, electric cyan/magenta/green
**Best For:** Creative projects, music apps, gaming interfaces

```css
/* Primary: Electric Cyan (#00ffff) */
/* Secondary: Hot Magenta (#ff00ff) */
/* Success: Acid Green (#00ff88) */
```

### 4. Kinetic
**Purpose:** Dynamic gradients and motion-inspired
**Colors:** Purple/blue gradients, energetic vibes
**Best For:** Modern apps, dashboards, creative tools

```css
/* Gradient-based theme with purple/blue spectrum */
--color-bg-primary: #0f0a1f;
--color-primary: #8b5cf6;
```

### 5. Prismatic
**Purpose:** Colorful rainbow theme
**Colors:** Full spectrum colors, vibrant and playful
**Best For:** Creative apps, children's apps, portfolio sites

```css
/* Rainbow color palette */
/* Every semantic color uses different hue */
```

### 6. Minimal
**Purpose:** Clean grayscale minimalist design
**Colors:** Grayscale only, no color accents
**Best For:** Professional tools, documentation, clean aesthetic

```css
/* Grayscale palette */
--color-bg-primary: #0a0a0a;
--color-text-primary: #f5f5f5;
--primary-400: #888888;
```

### 7. Warm
**Purpose:** Inviting warm color palette
**Colors:** Warm oranges, browns, and earth tones
**Best For:** Content-heavy sites, blogs, community platforms

```css
/* Warm earth tones */
--color-bg-primary: #1a1410;
--primary-400: #f97316;
```

---

## Using Themes

### Method 1: Via `<link>` Tag (Static)

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Base styles -->
  <link rel="stylesheet" href="path/to/aural-ui.css">

  <!-- Theme -->
  <link rel="stylesheet" href="path/to/themes/dark.css">
</head>
<body>
  <!-- Your content -->
</body>
</html>
```

### Method 2: Via JavaScript (Dynamic)

```javascript
// Function to switch themes
function switchTheme(themeName) {
  // Remove existing theme
  const existingTheme = document.getElementById('theme-stylesheet');
  if (existingTheme) {
    existingTheme.remove();
  }

  // Add new theme
  const link = document.createElement('link');
  link.id = 'theme-stylesheet';
  link.rel = 'stylesheet';
  link.href = `path/to/themes/${themeName}.css`;
  document.head.appendChild(link);
}

// Usage
switchTheme('dark');    // Dark theme
switchTheme('light');   // Light theme
switchTheme('neon');    // Neon theme
```

### Method 3: Theme Selector Component

```html
<div class="theme-selector">
  <label for="theme-select">Theme:</label>
  <select id="theme-select" onchange="switchTheme(this.value)">
    <option value="dark">Dark</option>
    <option value="light">Light</option>
    <option value="neon">Neon</option>
    <option value="kinetic">Kinetic</option>
    <option value="prismatic">Prismatic</option>
    <option value="minimal">Minimal</option>
    <option value="warm">Warm</option>
  </select>
</div>

<script>
function switchTheme(theme) {
  const existing = document.getElementById('theme-stylesheet');
  if (existing) existing.remove();

  const link = document.createElement('link');
  link.id = 'theme-stylesheet';
  link.rel = 'stylesheet';
  link.href = `themes/${theme}.css`;
  document.head.appendChild(link);

  // Save preference
  localStorage.setItem('theme', theme);
}

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'dark';
switchTheme(savedTheme);
document.getElementById('theme-select').value = savedTheme;
</script>
```

---

## Design Token Reference

All themes use the same token names with different values. This ensures components work consistently across all themes.

### Color Tokens

#### Primary Color Scale (Brand Color)
```css
--primary-50   /* Lightest tint */
--primary-100
--primary-200
--primary-300
--primary-400  /* Main brand color - use this for buttons, links, etc. */
--primary-500
--primary-600
--primary-700
--primary-800
--primary-900
--primary-950  /* Darkest shade */
```

#### Secondary Color Scale
```css
--secondary-50
--secondary-100
/* ... same pattern as primary ... */
--secondary-950
```

#### Semantic Colors
```css
/* Success (green) */
--success-50 through --success-950

/* Warning (yellow/orange) */
--warning-50 through --warning-950

/* Error (red) */
--error-50 through --error-950

/* Info (blue) */
--info-50 through --info-950
```

### Background Colors
```css
--color-bg-primary       /* Main page background */
--color-bg-secondary     /* Subtle contrast (cards, panels) */
--color-bg-tertiary      /* More contrast (hover states) */
--color-bg-elevated      /* Floating elements (modals, popovers) */
--color-bg-overlay       /* Dark overlay for modals */
--color-bg-hover         /* Interactive element hover */
--color-bg-active        /* Interactive element active/pressed */
--color-bg-glass         /* Glassmorphism background */
--color-bg-glass-light   /* Light glassmorphism */
```

### Text Colors
```css
--color-text-primary     /* High contrast - body text, headings */
--color-text-secondary   /* Medium contrast - secondary text */
--color-text-tertiary    /* Lower contrast - captions */
--color-text-muted       /* Subtle text - hints, disabled labels */
--color-text-disabled    /* Disabled state text */
--color-text-inverse     /* Text on dark backgrounds (light theme) */
```

### Border Colors
```css
--color-border-subtle    /* Barely visible borders */
--color-border-medium    /* Standard borders */
--color-border-strong    /* Emphasized borders */
```

### Component-Specific Colors

#### Buttons
```css
--color-button-secondary-bg
--color-button-secondary-hover
--color-button-secondary-border
--color-button-ghost-bg
--color-button-ghost-hover
--color-button-ghost-text
```

#### Inputs
```css
--color-input-bg
--color-input-border
--color-input-border-hover
--color-input-border-focus
--color-input-disabled-bg
```

#### Cards
```css
--color-card-bg
--color-card-border
--color-card-hover-border
```

#### Modal
```css
--color-modal-bg
--color-modal-border
```

#### Toast
```css
--color-toast-bg
```

#### Skeleton
```css
--color-skeleton-from   /* Shimmer animation start */
--color-skeleton-via    /* Shimmer animation middle */
--color-skeleton-to     /* Shimmer animation end */
```

---

## Creating Custom Themes

### Step 1: Copy Existing Theme

Start with a theme closest to your desired aesthetic:

```bash
cp themes/dark.css themes/my-custom-theme.css
```

### Step 2: Update Theme Header

```css
/**
 * AURAL UI - My Custom Theme
 *
 * Description of your theme
 * Optimized for [use case]
 */
```

### Step 3: Customize Colors

Modify the CSS custom properties:

```css
:root {
    /* Primary Brand Color - your company color */
    --primary-400: #your-brand-color;

    /* Adjust the scale around your brand color */
    --primary-50: #lightest-tint;
    --primary-100: ...
    --primary-900: #darkest-shade;
    --primary-950: ...

    /* Background Colors */
    --color-bg-primary: #your-background;
    --color-text-primary: #your-text-color;

    /* Continue for all tokens... */
}
```

### Step 4: Verify Contrast Ratios

Ensure WCAG AA compliance:

- **Normal text (< 18px):** Minimum 4.5:1 contrast ratio
- **Large text (≥ 18px or bold ≥ 14px):** Minimum 3:1 contrast ratio
- **Interactive components:** Minimum 3:1 contrast ratio

Use tools like:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)

### Step 5: Test Your Theme

```html
<link rel="stylesheet" href="aural-ui.css">
<link rel="stylesheet" href="themes/my-custom-theme.css">
```

Test all components to ensure they look good and are readable.

---

## Best Practices

### 1. Always Use Semantic Tokens

❌ **Don't:**
```css
.my-component {
  background: #1a1a2e;
  color: #f5f5fa;
}
```

✅ **Do:**
```css
.my-component {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
}
```

### 2. Provide Fallbacks for Critical Colors

```css
.my-component {
  /* Fallback if theme not loaded */
  background: var(--color-bg-primary, #1a1a2e);
  color: var(--color-text-primary, #f5f5fa);
}
```

### 3. Don't Mix Theme Files

Only load **one theme at a time**. Multiple themes will conflict since they all define `:root` variables.

❌ **Don't:**
```html
<link rel="stylesheet" href="themes/dark.css">
<link rel="stylesheet" href="themes/light.css">
```

✅ **Do:**
```html
<link rel="stylesheet" href="themes/dark.css">
```

### 4. Test in All Themes

If you create custom components, test them in all 7 themes to ensure they adapt correctly.

### 5. Use Color Scales Appropriately

- **50-300:** Light tints (backgrounds, subtle accents)
- **400:** Main color (buttons, links, primary actions)
- **500-700:** Medium shades (hover states, icons)
- **800-950:** Dark shades (text, high contrast elements)

---

## Theme Switching Patterns

### Pattern 1: Remember User Preference

```javascript
// On theme change
function setTheme(theme) {
  localStorage.setItem('preferred-theme', theme);
  loadTheme(theme);
}

// On page load
const preferredTheme = localStorage.getItem('preferred-theme') || 'dark';
loadTheme(preferredTheme);
```

### Pattern 2: Respect System Preference

```javascript
// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = prefersDark ? 'dark' : 'light';

// Load theme
loadTheme(localStorage.getItem('theme') || defaultTheme);

// Listen for system changes
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      loadTheme(e.matches ? 'dark' : 'light');
    }
  });
```

### Pattern 3: Time-Based Auto-Switching

```javascript
function getAutoTheme() {
  const hour = new Date().getHours();
  // Dark theme: 6 PM to 6 AM
  return (hour < 6 || hour >= 18) ? 'dark' : 'light';
}

// Auto-switch every hour
setInterval(() => {
  if (autoThemeEnabled) {
    loadTheme(getAutoTheme());
  }
}, 3600000); // 1 hour
```

---

## Component Adaptation Examples

### Example 1: Button

```css
.btn-primary {
  background: var(--primary-400);
  color: var(--color-text-inverse);
  border: 1px solid var(--primary-500);
}

.btn-primary:hover {
  background: var(--primary-500);
}

.btn-primary:active {
  background: var(--primary-600);
}
```

**Result:** Button automatically uses the right green (Dark/Light), cyan (Neon), purple (Kinetic), gray (Minimal), or orange (Warm) based on active theme.

### Example 2: Card

```css
.card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-card-border);
  color: var(--color-text-primary);
}

.card:hover {
  border-color: var(--color-card-hover-border);
}
```

**Result:** Card background is white in Light theme, dark navy in Dark theme, darker in Neon theme, etc.

### Example 3: Input

```css
.input {
  background: var(--color-input-bg);
  border: 1px solid var(--color-input-border);
  color: var(--color-text-primary);
}

.input:hover {
  border-color: var(--color-input-border-hover);
}

.input:focus {
  border-color: var(--primary-400);
  outline: 2px solid var(--primary-400);
  outline-offset: 2px;
}
```

**Result:** Input adapts to each theme with proper contrast and focus states.

---

## Color Psychology by Theme

### Dark Theme
- **Feeling:** Professional, modern, relaxed
- **Use Cases:** Developer tools, night mode, streaming apps
- **Advantage:** Reduces eye strain in low light

### Light Theme
- **Feeling:** Clean, fresh, traditional
- **Use Cases:** Documentation, business apps, public websites
- **Advantage:** Familiar, better readability in bright light

### Neon Theme
- **Feeling:** Bold, energetic, futuristic
- **Use Cases:** Music apps, gaming, creative tools
- **Advantage:** Memorable, stands out

### Kinetic Theme
- **Feeling:** Dynamic, modern, elegant
- **Use Cases:** Dashboards, analytics, modern apps
- **Advantage:** Gradient depth adds visual interest

### Prismatic Theme
- **Feeling:** Playful, colorful, creative
- **Use Cases:** Art apps, children's apps, portfolios
- **Advantage:** Each element has unique color

### Minimal Theme
- **Feeling:** Clean, focused, professional
- **Use Cases:** Professional tools, writing apps, docs
- **Advantage:** Zero distraction from color

### Warm Theme
- **Feeling:** Inviting, cozy, comfortable
- **Use Cases:** Blogs, communities, content platforms
- **Advantage:** Welcoming, easier on eyes

---

## Accessibility Guidelines

### Contrast Requirements

All themes meet WCAG AA standards:

| Element Type | Minimum Ratio | Aural UI Compliance |
|-------------|---------------|---------------------|
| Normal Text | 4.5:1 | ✅ All themes |
| Large Text | 3:1 | ✅ All themes |
| UI Components | 3:1 | ✅ All themes |
| Graphics | 3:1 | ✅ All themes |

### Testing Your Theme

1. **Automated Testing:**
   ```bash
   # Use axe-core or similar
   npm install @axe-core/cli
   axe https://your-site.com --tags wcag2aa
   ```

2. **Manual Testing:**
   - Test with screen readers (NVDA, JAWS, VoiceOver)
   - Test keyboard navigation
   - Test with color blindness simulators
   - Test in bright and dim lighting

3. **Color Blindness:**
   - Don't rely solely on color to convey information
   - Use icons, labels, and patterns alongside colors
   - Test with simulators (Coblis, Color Oracle)

---

## Performance Considerations

### CSS Variables Are Fast

CSS custom properties update instantly without recalculating styles. Theme switching is performant even with thousands of elements.

### Reduce Reflows

When switching themes, the browser only updates colors, not layout:

```javascript
// ✅ Fast - only color changes
loadTheme('dark');

// ❌ Slow - causes layout recalculation
document.body.style.fontSize = '18px';
```

### Preload Theme CSS

For faster switching:

```html
<link rel="preload" href="themes/dark.css" as="style">
<link rel="preload" href="themes/light.css" as="style">
```

---

## Advanced Techniques

### Per-Component Theme Overrides

```css
/* Override specific component in your custom CSS */
.my-special-button {
  --primary-400: #custom-color;
}
```

### Dark Mode Only Overrides

```css
/* Apply only in dark themes */
[data-theme="dark"] .component {
  /* dark-specific styles */
}
```

### Gradients Using Theme Colors

```css
.gradient-bg {
  background: linear-gradient(
    135deg,
    var(--primary-400),
    var(--secondary-400)
  );
}
```

### Animated Theme Transitions

```css
* {
  transition: background-color 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease;
}
```

---

## Troubleshooting

### Issue: Theme Not Applying

**Check:**
1. Is the theme CSS loaded? (Check browser Network tab)
2. Is it loaded **after** base CSS?
3. Is there only **one** theme loaded at a time?

### Issue: Colors Look Wrong

**Check:**
1. CSS custom property names match exactly
2. Fallback values provided where critical
3. Browser supports CSS custom properties (IE11 doesn't)

### Issue: WCAG Contrast Failures

**Fix:**
1. Use a contrast checker tool
2. Adjust `--color-text-secondary` or `--color-text-muted`
3. Ensure minimum 4.5:1 for body text

### Issue: Theme Flicker on Load

**Fix:**
```html
<!-- Inline critical theme CSS -->
<style>
  :root {
    --color-bg-primary: #0f0f1a;
    --color-text-primary: #f5f5fa;
  }
  body {
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
  }
</style>
```

---

## NPM Package Name

Remember: The package is **`aural-design`**, not `@aural-ui/core`:

```bash
npm install aural-design
```

---

## Resources

- **Color Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **CSS Variables Guide:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Color Blindness Simulator:** https://www.color-blindness.com/coblis-color-blindness-simulator/

---

## Quick Reference

### Load a Theme
```html
<link rel="stylesheet" href="themes/dark.css">
```

### Switch Theme via JavaScript
```javascript
switchTheme('neon');
```

### Use Tokens in CSS
```css
background: var(--color-bg-primary);
color: var(--primary-400);
```

### Create Custom Theme
1. Copy existing theme
2. Modify color values
3. Test contrast ratios
4. Test all components

---

*For questions or issues, see: https://github.com/ferology/aural-ui/issues*
