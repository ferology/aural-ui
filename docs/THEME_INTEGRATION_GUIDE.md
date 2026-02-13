# Aural UI - Theme Integration Guide

**Last Updated:** 2026-02-13
**Status:** ✅ All pages integrated with theme system

---

## Overview

All pages in the Aural UI documentation system now follow a unified theme management approach using the centralized `js/theme-manager.js`.

### Theme System Architecture

```
Theme Manager (js/theme-manager.js)
    ↓
Reads from: localStorage.getItem('theme')
    ↓
Loads: {theme}.css + theme-specific components
    ↓
Available Themes: dark, light, neon, neon-refined, kinetic, high-contrast, colorblind
```

---

## Integration Status

### ✅ Standalone Pages (15 pages)

All standalone documentation pages now include theme-manager.js:

- accessibility.html
- api.html
- catalog.html
- changelog.html
- contributing.html
- examples.html
- fonts.html
- getting-started.html
- landing.html
- patterns.html
- showcase.html
- themes.html
- tokens.html
- tutorial.html
- utilities.html
- what-it-is.html

### ✅ Component Pages (53 pages)

All component pages include theme-manager.js and can work standalone or in iframe:

- `/components/*.html` (all 53 files)

### ✅ Parent Frame

- demo.html (loads theme-manager.js and controls iframe themes)

---

## How It Works

### For Standalone Pages (Viewed Directly)

When a page is viewed directly (not in iframe):

1. **Page loads** with `<link id="theme-link">` element
2. **Theme Manager** initializes automatically on DOM ready
3. **Saved theme** is loaded from localStorage (or defaults to 'dark')
4. **Theme CSS** is applied via `theme-link.href`
5. **Theme components** (if any) are dynamically loaded
6. **Theme scripts** (e.g., neon-effects.js) are loaded if needed

### For Pages in Iframe (Component Pages)

When a page is in iframe within demo.html:

1. **Parent (demo.html)** loads theme-manager.js
2. **Parent controls** theme selection via its UI
3. **Child pages** inherit theme from parent
4. **Theme toggle** is hidden in iframe (parent controls it)
5. **Theme sync** happens automatically

---

## Required HTML Structure

### Minimal Requirements

Every page MUST have:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... other meta tags ... -->

    <!-- Aural UI Core CSS -->
    <link rel="stylesheet" href="aural-ui.css">

    <!-- Theme CSS - REQUIRED id="theme-link" -->
    <link rel="stylesheet" href="dark.css" id="theme-link">
</head>
<body>
    <!-- Your page content -->

    <!-- Theme Manager - REQUIRED for standalone pages -->
    <script src="js/theme-manager.js"></script>
</body>
</html>
```

### Path Adjustments

**For pages in `/docs/` root:**
```html
<link rel="stylesheet" href="dark.css" id="theme-link">
<script src="js/theme-manager.js"></script>
```

**For pages in `/docs/components/`:**
```html
<link rel="stylesheet" href="../dark.css" id="theme-link">
<script src="../js/theme-manager.js"></script>
```

---

## Theme Manager API

### Accessing the Theme Manager

```javascript
// Theme manager is available globally
window.AuralThemeManager
```

### Methods

```javascript
// Get current theme
const current = AuralThemeManager.getCurrentTheme();
// Returns: { id: 'dark', name: 'Dark', file: 'dark.css', ... }

// Get all available themes
const all = AuralThemeManager.getAllThemes();

// Apply a theme
AuralThemeManager.applyTheme('neon');

// Cycle to next theme
AuralThemeManager.cycleTheme();

// Register callback for theme changes
AuralThemeManager.onChange((themeId) => {
    console.log('Theme changed to:', themeId);
});
```

### Theme Configuration

Themes are defined in `js/theme-manager.js`:

```javascript
const THEMES = {
    'dark': {
        name: 'Dark',
        file: 'dark.css',
        icon: 'moon',
        components: []
    },
    'neon': {
        name: 'Neon',
        file: 'neon.css',
        icon: 'sparkles',
        components: ['fonts-neon.css', 'deluxe-neon.css'],
        scripts: ['neon-effects.js']
    },
    // ... more themes
};
```

---

## Theme-Specific Components

Some themes load additional CSS and JavaScript:

### Neon Theme
- `fonts-neon.css` - Google Fonts (Space Grotesk, JetBrains Mono, Orbitron)
- `deluxe-neon.css` - Premium neon components
- `neon-effects.js` - Particle effects and gradient mesh

### Neon Refined Theme
- `fonts-neon.css` - Same fonts as neon
- `buttons-refined.css` - Gradient button system
- `cards-refined.css` - Refined card styles
- `neon-effects.js` - Shared effects

### Kinetic Theme
- `kinetic-buttons.css` - Brutalist button styles
- `kinetic-cards.css` - Bold card designs

---

## localStorage

Theme preference is stored as:

```javascript
// Key: 'theme'
// Value: 'dark' | 'light' | 'neon' | 'neon-refined' | 'kinetic' | 'high-contrast' | 'colorblind'

// Read
const theme = localStorage.getItem('theme');

// Write (automatically done by theme manager)
localStorage.setItem('theme', 'neon');
```

---

## Creating New Pages

### Template for New Standalone Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page - Aural UI</title>

    <!-- Aural UI Core -->
    <link rel="stylesheet" href="aural-ui.css">

    <!-- Theme (REQUIRED id="theme-link") -->
    <link rel="stylesheet" href="dark.css" id="theme-link">

    <!-- Optional: Common page styles -->
    <link rel="stylesheet" href="styles/page-common.css">

    <!-- Optional: Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>
    <main>
        <h1>Your Page Content</h1>
        <!-- ... -->
    </main>

    <!-- Theme Manager (REQUIRED) -->
    <script src="js/theme-manager.js"></script>

    <!-- Optional: Initialize icons -->
    <script>
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    </script>
</body>
</html>
```

### Template for New Component Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Component Name - Aural UI</title>

    <!-- Aural UI Core -->
    <link rel="stylesheet" href="../aural-ui.css">

    <!-- Theme (REQUIRED id="theme-link") -->
    <link rel="stylesheet" href="../dark.css" id="theme-link">

    <!-- Common Page Styles -->
    <link rel="stylesheet" href="../styles/page-common.css">

    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>
    <main class="main-content">
        <header class="page-header">
            <h1 class="page-title">Component Name</h1>
            <p class="page-description">Component description</p>
        </header>

        <!-- Component examples -->
    </main>

    <!-- Aural UI JavaScript -->
    <script src="../aural-ui.js"></script>

    <!-- Theme Manager (REQUIRED) -->
    <script src="../js/theme-manager.js"></script>

    <!-- Initialize icons -->
    <script>
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    </script>
</body>
</html>
```

---

## Testing Theme Integration

### Checklist for New Pages

- [ ] Has `<link id="theme-link">` element
- [ ] Loads `js/theme-manager.js` (or `../js/theme-manager.js` for components)
- [ ] Correct relative paths for theme CSS files
- [ ] Works standalone (open directly in browser)
- [ ] Works in iframe (load via demo.html)
- [ ] Theme persists on page reload
- [ ] All 7 themes work correctly
- [ ] Neon themes load fonts and effects
- [ ] No console errors

### Testing Procedure

1. **Open page directly:**
   ```bash
   open /Users/feraf/Projects/aural-ui/docs/your-page.html
   ```
   - Theme should load from localStorage
   - Can cycle themes (if page has theme toggle)

2. **Open via demo.html:**
   ```bash
   open /Users/feraf/Projects/aural-ui/docs/demo.html
   # Navigate to your page
   ```
   - Theme controlled by parent
   - Changes sync immediately

3. **Test each theme:**
   - Switch between all 7 themes
   - Verify colors, fonts, and effects
   - Check browser console for errors

---

## Troubleshooting

### Theme Not Loading

**Problem:** Page shows unstyled or wrong theme

**Solutions:**
1. Check `id="theme-link"` exists in HTML
2. Verify path to dark.css is correct
3. Check theme-manager.js is loaded
4. Clear localStorage: `localStorage.clear()` then refresh
5. Check browser console for errors

### Neon Fonts Not Loading

**Problem:** Neon theme uses system fonts instead of Space Grotesk

**Solution:**
- Theme manager should auto-load `fonts-neon.css`
- Check if fonts-neon.css exists in docs folder
- Verify Google Fonts are not blocked
- Check Network tab for failed font requests

### Theme Not Persisting

**Problem:** Theme resets to dark on page reload

**Solutions:**
1. Check localStorage is not disabled
2. Verify theme-manager.js is calling `localStorage.setItem('theme', themeId)`
3. Check browser privacy settings

### Iframe Theme Not Syncing

**Problem:** Child page in iframe doesn't match parent theme

**Solutions:**
1. Ensure parent (demo.html) loads theme-manager.js
2. Check child has `id="theme-link"` element
3. Verify no JavaScript errors in either frame
4. Hard refresh both frames (Cmd/Ctrl + Shift + R)

---

## Adding a New Theme

To add a new theme to the system:

### 1. Create Theme CSS File

```css
/* /docs/my-theme.css */
:root {
    --color-primary: #your-color;
    --color-bg-primary: #your-bg;
    /* ... all required CSS variables */
}
```

### 2. Register in Theme Manager

Edit `js/theme-manager.js`:

```javascript
const THEMES = {
    // ... existing themes ...
    'my-theme': {
        name: 'My Theme',
        file: 'my-theme.css',
        icon: 'star', // lucide icon name
        components: [], // optional theme-specific CSS
        scripts: []     // optional theme-specific JS
    }
};
```

### 3. Update Theme Selectors

Add to any theme selection UI (demo.html, etc.):

```html
<option value="my-theme">My Theme</option>
```

### 4. Test Integration

```javascript
// Test programmatically
AuralThemeManager.applyTheme('my-theme');

// Or via UI
// Select "My Theme" from theme selector
```

---

## Best Practices

### ✅ DO:

- Always include `id="theme-link"` on theme stylesheet
- Always load `theme-manager.js` for standalone pages
- Use relative paths appropriate to page location
- Test all 7 themes on new pages
- Clear localStorage when testing theme changes
- Use theme manager API instead of custom theme code

### ❌ DON'T:

- Don't hardcode theme CSS paths
- Don't create custom theme switching code
- Don't skip theme-manager.js on standalone pages
- Don't forget to test in iframe context
- Don't modify theme-manager.js without testing all pages
- Don't use absolute paths for theme files

---

## File Locations

```
/docs/
├── js/
│   └── theme-manager.js          # Centralized theme manager
├── {theme-name}.css               # Theme CSS files
├── fonts-neon.css                 # Neon fonts
├── deluxe-neon.css               # Neon components
├── buttons-refined.css           # Refined buttons
├── cards-refined.css             # Refined cards
├── kinetic-buttons.css           # Kinetic buttons
├── kinetic-cards.css             # Kinetic cards
├── neon-effects.js               # Neon JavaScript effects
└── components/
    └── *.html                    # All component pages
```

---

## Summary

**Current Status:**
- ✅ 15 standalone pages integrated
- ✅ 53 component pages integrated
- ✅ 1 parent frame (demo.html) integrated
- ✅ All 7 themes working across all pages
- ✅ Theme persistence via localStorage
- ✅ Iframe theme synchronization working

**Total:** 69 pages fully integrated with theme system

---

## Support

For questions or issues:
1. Check this guide first
2. Review `js/theme-manager.js` source code
3. Test in browser with console open
4. Verify all required files exist
5. Check THEME_SYSTEM_STATUS.md for overall status

---

**Made with ♥️ for Aural UI**
