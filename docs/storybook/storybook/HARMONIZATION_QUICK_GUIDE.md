# Component Page Harmonization - Quick Reference Guide

## Quick Start

This guide shows exactly what to change in each component page to harmonize it with the centralized theme system.

---

## Step 1: Add Common Styles

**Location:** In the `<head>` section, right after the theme-link

**Find:**
```html
<!-- Theme CSS -->
<link rel="stylesheet" href="../dark.css" id="theme-link">

<!-- Lucide Icons -->
```

**Replace with:**
```html
<!-- Theme CSS -->
<link rel="stylesheet" href="../dark.css" id="theme-link">

<!-- Common Page Styles -->
<link rel="stylesheet" href="../styles/page-common.css">

<!-- Lucide Icons -->
```

---

## Step 2: Replace Theme Scripts

**Location:** Bottom of the file, before closing `</body>` tag

### Find and DELETE ALL of these patterns:

#### Pattern A: Simple Theme Toggle (20-30 lines)
```javascript
// Theme toggle
let isDark = true;
function toggleTheme() {
    const themeLink = document.getElementById('theme-link');
    isDark = !isDark;
    themeLink.href = isDark ? '../dark.css' : '../light.css';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    isDark = savedTheme === 'dark';
    document.getElementById('theme-link').href = isDark ? '../dark.css' : '../light.css';
}
```

#### Pattern B: Unified Theme Sync Block (80-100 lines)
```javascript
<!-- Unified Theme Sync -->
<script>
(function() {
    // Comprehensive theme sync supporting all 7 themes
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const themeLink = document.getElementById('theme-link');

    if (themeLink) {
        const isInComponents = window.location.pathname.includes('/components/');
        // ... 80+ more lines ...
    }
})();
</script>
```

**DELETE both Pattern A and Pattern B if present!**

### Add This Instead:

```html
<!-- Aural UI JavaScript -->
<script src="../aural-ui.js?v=9"></script>

<!-- Theme Manager -->
<script src="../js/theme-manager.js"></script>

<script>
    // Initialize Aural UI components
    Aural.initTabs(); // or other initialization as needed

    // Initialize Lucide icons
    lucide.createIcons();

    // Theme toggle (uses centralized theme manager)
    function toggleTheme() {
        if (window.AuralThemeManager) {
            window.AuralThemeManager.cycleTheme();
        }
    }

    // ... keep any page-specific logic below ...
</script>

<!-- Documentation Utilities -->
<script src="../doc-utils.js"></script>
```

---

## Step 3: Preserve Page-Specific Logic

**IMPORTANT:** Keep any custom JavaScript that's unique to the page!

### Examples of Logic to KEEP:

✅ **Character Counter (inputs.html):**
```javascript
function updateCounter() {
    const input = document.getElementById('bio-input');
    const counter = document.getElementById('bio-counter');
    // ... keep all this ...
}
```

✅ **Tab Switching (tabs.html):**
```javascript
function switchTab(event, panelId) {
    // ... keep all this ...
}

function initMainTabs() {
    // ... keep all this ...
}
```

✅ **Modal Functions:**
```javascript
function openModal(id) { /* ... */ }
function closeModal(id) { /* ... */ }
```

### Examples of Code to DELETE:

❌ Any `toggleTheme()` implementation
❌ Any `savedTheme` localStorage reading
❌ Any theme file path setting
❌ Any `themeLink.href =` assignments
❌ The entire "Unified Theme Sync" block
❌ Any `isInComponents` path detection
❌ Any theme component CSS loading logic
❌ Any neon effects initialization in theme code

---

## Step 4: Verify CSS Variables

Check that custom inline styles use CSS variables, NOT hardcoded values.

### ✅ Correct (Use CSS Variables):
```css
color: var(--color-text-primary);
background: var(--color-bg-secondary);
border: 1px solid var(--color-border-subtle);
padding: var(--space-4);
border-radius: var(--radius-md);
font-size: var(--text-lg);
```

### ❌ Incorrect (Hardcoded Values):
```css
color: #ffffff;
background: #2a2a2a;
border: 1px solid rgba(255, 255, 255, 0.1);
padding: 16px;
border-radius: 8px;
font-size: 18px;
```

**If you find hardcoded values, replace them with the appropriate CSS variables.**

---

## Complete Example

### Before (OLD):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example - Aural UI</title>

    <link rel="stylesheet" href="../aural-ui.css?v=1769438626">
    <link rel="stylesheet" href="../dark.css" id="theme-link">
    <script src="https://unpkg.com/lucide@latest"></script>

    <style>/* custom styles */</style>
</head>
<body>
    <!-- content -->

    <script src="../aural-ui.js?v=9"></script>

    <script>
        Aural.initTabs();
        lucide.createIcons();

        // OLD theme toggle - DELETE THIS
        let isDark = true;
        function toggleTheme() {
            const themeLink = document.getElementById('theme-link');
            isDark = !isDark;
            themeLink.href = isDark ? '../dark.css' : '../light.css';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            isDark = savedTheme === 'dark';
            document.getElementById('theme-link').href = isDark ? '../dark.css' : '../light.css';
        }
    </script>

    <!-- DELETE THIS ENTIRE BLOCK -->
    <script>
    (function() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        // ... 88 lines of theme sync code ...
    })();
    </script>

    <script src="../doc-utils.js"></script>
</body>
</html>
```

### After (NEW):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example - Aural UI</title>

    <link rel="stylesheet" href="../aural-ui.css?v=1769438626">
    <link rel="stylesheet" href="../dark.css" id="theme-link">

    <!-- ✅ ADD THIS -->
    <link rel="stylesheet" href="../styles/page-common.css">

    <script src="https://unpkg.com/lucide@latest"></script>

    <style>/* custom styles */</style>
</head>
<body>
    <!-- content -->

    <script src="../aural-ui.js?v=9"></script>

    <!-- ✅ ADD THIS -->
    <script src="../js/theme-manager.js"></script>

    <script>
        Aural.initTabs();
        lucide.createIcons();

        // ✅ NEW simple theme toggle
        function toggleTheme() {
            if (window.AuralThemeManager) {
                window.AuralThemeManager.cycleTheme();
            }
        }
    </script>

    <script src="../doc-utils.js"></script>
</body>
</html>
```

---

## Checklist for Each Page

Use this checklist when harmonizing a page:

- [ ] Added `<link rel="stylesheet" href="../styles/page-common.css">` in `<head>`
- [ ] Added `<script src="../js/theme-manager.js"></script>` after aural-ui.js
- [ ] Deleted old `toggleTheme()` implementation
- [ ] Deleted "Unified Theme Sync" block
- [ ] Added new 6-line `toggleTheme()` function
- [ ] Kept all page-specific custom JavaScript
- [ ] Verified CSS variables are used (no hardcoded colors)
- [ ] Tested page in browser
- [ ] Verified theme switching works
- [ ] Verified theme persists on refresh
- [ ] Verified all interactive features work

---

## Testing

After making changes, test each page:

1. **Open in browser:** `http://localhost:PORT/docs/components/[page].html`
2. **Click theme toggle:** Should cycle through themes
3. **Refresh page:** Theme should persist
4. **Test interactions:** Tabs, buttons, modals, etc. should work
5. **Check console:** No JavaScript errors
6. **Try all themes:** Dark, Light, Neon, Neon Refined, Kinetic, High Contrast, Colorblind

---

## Common Mistakes to Avoid

❌ **Don't delete page-specific functions**
- Keep modal handlers, tab switchers, character counters, etc.

❌ **Don't forget the page-common.css link**
- Pages will look broken without it

❌ **Don't modify theme-manager.js**
- All changes should be in individual page files only

❌ **Don't keep old theme code**
- Delete ALL old theme-related code completely

❌ **Don't hardcode paths**
- Use `../` relative paths for component pages

---

## Need Help?

**Reference the pilot implementation:**
- `/docs/components/buttons.html`
- `/docs/components/inputs.html`
- `/docs/components/cards.html`
- `/docs/components/modals.html`
- `/docs/components/tabs.html`

**See the full report:**
- `/docs/COMPONENT_HARMONIZATION_REPORT.md`

**Centralized resources:**
- `/docs/styles/page-common.css` - Common page styles
- `/docs/js/theme-manager.js` - Theme management system

---

## Quick Commands

**Count theme code lines in a file:**
```bash
grep -n "theme" components/yourfile.html | wc -l
```

**Find old theme toggle pattern:**
```bash
grep -l "let isDark = true" components/*.html
```

**Find unified theme sync blocks:**
```bash
grep -l "Unified Theme Sync" components/*.html
```

**Verify page-common.css is linked:**
```bash
grep "page-common.css" components/*.html
```

---

**Last Updated:** 2026-02-12
**Version:** 1.0 (Pilot)
