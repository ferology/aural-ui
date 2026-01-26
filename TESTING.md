# Aural UI - Testing & Review Guide

This document provides a comprehensive testing checklist for all recently added features.

---

## 🧪 Test Environment

**Live URL:** https://ferology.github.io/aural-ui/

**Test Browsers:**
- ✅ Chrome/Edge (Chromium-based)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

---

## ✅ Phase 1: Utility Classes Testing

### Backdrop Filters
**Location:** Navigate to Utility Classes page in demo

**Test Cases:**
1. Open browser DevTools
2. Apply classes in console:
   ```javascript
   document.body.classList.add('backdrop-blur-md');
   ```
3. Test all variants:
   - `.backdrop-blur-sm` through `.backdrop-blur-3xl`
   - `.backdrop-brightness-*`
   - `.backdrop-contrast-*`
   - `.backdrop-saturate-*`

**Expected:** Visual blur effects should be visible on overlays

### Gradient Utilities
**Test Cases:**
1. Create test element:
   ```html
   <div class="bg-gradient-to-r from-primary to-secondary" style="height: 200px; width: 100%;"></div>
   ```
2. Test all directions: `to-t`, `to-tr`, `to-r`, `to-br`, `to-b`, `to-bl`, `to-l`, `to-tl`
3. Test color stops: `from-*`, `via-*`, `to-*`

**Expected:** Smooth gradients in all directions

### Aspect Ratio Utilities
**Test Cases:**
1. Test on images:
   ```html
   <div class="aspect-video">
     <img src="image.jpg" class="w-full object-cover" />
   </div>
   ```
2. Test variants: `aspect-square`, `aspect-video`, `aspect-wide`, `aspect-portrait`

**Expected:** Images maintain correct aspect ratios

### Dark Mode Utilities
**Test Cases:**
1. Add `.dark` class to `<html>` element
2. Apply dark mode classes:
   ```html
   <div class="bg-white dark:bg-black text-black dark:text-white">
     Dark mode test
   </div>
   ```

**Expected:** Styles change when `.dark` class is present

### RTL Support Utilities
**Test Cases:**
1. Set `dir="rtl"` on `<html>` element
2. Test logical properties:
   ```html
   <div class="ms-4 me-8">RTL spacing test</div>
   ```
3. Test RTL-aware classes: `.rtl:ml-4`, `.start-0`, `.end-0`

**Expected:** Layout flips correctly for RTL languages

---

## ✅ Phase 2: Component Enhancements Testing

### Button Icon-Only Variant
**Location:** Navigate to Buttons component page

**Test Cases:**
1. Add icon-only buttons:
   ```html
   <button class="btn btn-primary btn-icon">
     <i data-lucide="search"></i>
   </button>
   ```
2. Test size variants: `.btn-icon.btn-sm`, `.btn-icon`, `.btn-icon.btn-lg`

**Expected:**
- ✅ Square buttons (44x44, 36x36, 52x52)
- ✅ Icon centered
- ✅ Maintains touch target size

### Input Prefix/Suffix Icons
**Location:** Navigate to Inputs component page

**Test Cases:**
1. Create input with prefix icon:
   ```html
   <div class="input-group input-group-prefix">
     <span class="input-group-icon input-group-icon-left">
       <i data-lucide="search"></i>
     </span>
     <input type="text" class="input" placeholder="Search...">
   </div>
   ```
2. Test suffix icon version
3. Test size variants: `.input-group-sm`, `.input-group-lg`

**Expected:**
- ✅ Icons positioned correctly
- ✅ Input padding accommodates icons
- ✅ Icons don't interfere with typing

### Input Character Counter
**Test Cases:**
1. Create input with counter:
   ```html
   <div class="input-with-counter">
     <input type="text" class="input" maxlength="100" id="test-input">
     <div class="input-counter">
       <span class="input-counter-text">Character count:</span>
       <span class="input-counter-count">0 / 100</span>
     </div>
   </div>
   ```
2. Type text and update counter with JavaScript
3. Test warning state (80% threshold)
4. Test error state (exceeds limit)

**Expected:**
- ✅ Counter updates as user types
- ✅ Warning color at 80%
- ✅ Error color when exceeded

### Modal Fullscreen Variant
**Location:** Navigate to Modals component page

**Test Cases:**
1. Add fullscreen modal:
   ```html
   <div class="modal-overlay open">
     <div class="modal modal-fullscreen">
       <div class="modal-header">Fullscreen Modal</div>
       <div class="modal-body">Content...</div>
     </div>
   </div>
   ```

**Expected:**
- ✅ Takes entire viewport (no margins)
- ✅ No border radius
- ✅ Scrollable if content overflows

### Modal Scrollable Variant
**Test Cases:**
1. Add scrollable modal:
   ```html
   <div class="modal modal-scrollable">
     <div class="modal-header">Fixed Header</div>
     <div class="modal-body">Long scrollable content...</div>
     <div class="modal-footer">Fixed Footer</div>
   </div>
   ```

**Expected:**
- ✅ Header and footer stay fixed
- ✅ Body scrolls independently
- ✅ Works with all modal sizes

### Table Expandable Rows
**Location:** Navigate to Tables component page

**Test Cases:**
1. Add expandable row:
   ```html
   <tr class="expandable">
     <td class="expand-cell">
       <span class="table-expand-icon">
         <i data-lucide="chevron-right"></i>
       </span>
     </td>
     <td>Row content...</td>
   </tr>
   <tr class="expanded-content hidden">
     <td colspan="3">
       <div class="table-expanded-content">
         Expanded details...
       </div>
     </td>
   </tr>
   ```
2. Toggle expanded state with JavaScript
3. Test rotation animation on icon

**Expected:**
- ✅ Chevron rotates 90° when expanded
- ✅ Content row shows/hides smoothly
- ✅ Styled content area with proper spacing

---

## ✅ Phase 3: Theme System Testing

### High Contrast Theme
**Location:** Navigate to any component page

**Test Cases:**
1. Load high contrast theme:
   ```html
   <link rel="stylesheet" href="./high-contrast.css" id="theme-link">
   ```
2. Test on multiple components:
   - Buttons (should have bright colors on black)
   - Inputs (white borders on black)
   - Cards (strong contrast borders)
   - Text (pure white on pure black)

**Expected:**
- ✅ 7:1+ contrast ratio on all text
- ✅ Pure black backgrounds
- ✅ Bright, saturated colors
- ✅ Enhanced 3px focus outlines

**Accessibility Verification:**
- Use browser DevTools Lighthouse
- Check "Accessibility" score
- Verify WCAG AAA compliance

### Colorblind-Friendly Theme
**Location:** Navigate to any component page

**Test Cases:**
1. Load colorblind theme:
   ```html
   <link rel="stylesheet" href="./colorblind-friendly.css" id="theme-link">
   ```
2. Test semantic colors:
   - Success badges (should be BLUE, not green)
   - Error badges (should be ORANGE, not red)
   - Warning badges (should be YELLOW)
   - Info badges (should be CYAN)
3. Check for border indicators on alerts

**Expected:**
- ✅ No red/green combinations
- ✅ Blue for success
- ✅ Orange for errors
- ✅ Additional border/pattern indicators
- ✅ Icon-based indicators

**Simulation Test:**
- Use browser extension or DevTools to simulate colorblindness
- Verify all states are distinguishable

### Theme Builder
**Location:** Navigate to Documentation > Theme Builder

**Test Cases:**

#### 1. Preset Theme Loading
- Click "Dark" preset → should load dark theme colors
- Click "Light" preset → should load light colors
- Click "High Contrast" → should load high contrast colors
- Click "Colorblind" → should load colorblind-friendly colors

**Expected:**
- ✅ All color pickers update
- ✅ Text inputs show hex values
- ✅ Preview area updates immediately
- ✅ Active preset highlights

#### 2. Color Picker Interaction
- Change primary color picker
- Verify:
  - Text input updates with hex value
  - Preview buttons update color
  - Contrast checker recalculates

**Expected:**
- ✅ Real-time preview updates
- ✅ Hex value syncs with picker
- ✅ No lag or delay

#### 3. Text Input Color Entry
- Type a hex color (e.g., `#ff6600`) into primary color input
- Press Enter or click outside

**Expected:**
- ✅ Color picker updates
- ✅ Preview updates
- ✅ Invalid hex values are rejected

#### 4. Contrast Checker
- Set primary color to `#5ebd8f`
- Check contrast results section

**Expected:**
- ✅ Shows contrast ratio (e.g., "7.2:1")
- ✅ Shows WCAG AA status (Pass/Fail)
- ✅ Shows WCAG AAA status (Pass/Fail)
- ✅ Updates in real-time when colors change

#### 5. Live Preview
Verify preview shows:
- ✅ Buttons (primary, secondary, danger, ghost)
- ✅ Button sizes (small, medium, large)
- ✅ Input fields
- ✅ Textarea
- ✅ Alerts (success, error, warning, info)
- ✅ Cards
- ✅ Badges (all semantic colors)

All should update when colors change.

#### 6. Export Functionality
- Customize colors
- Click "Export CSS" button

**Expected:**
- ✅ Downloads `custom-theme.css` file
- ✅ File contains CSS custom properties
- ✅ Hex values match theme builder

#### 7. Copy Functionality
- Customize colors
- Click "Copy" button
- Paste into text editor

**Expected:**
- ✅ CSS custom properties copied to clipboard
- ✅ Shows success alert
- ✅ Formatted CSS code

---

## 🔗 Link Verification Checklist

### Demo Navigation
- [ ] Logo clicks to landing page
- [ ] "What it is" → landing page
- [ ] "Accessibility" → accessibility page
- [ ] "Getting Started" → getting started page
- [ ] All component links work
- [ ] Documentation links work
- [ ] Theme Builder link works
- [ ] Search functionality works

### Landing Page (in iframe)
- [ ] "View Components" button navigates within demo
- [ ] "Get Started" button navigates within demo
- [ ] Footer links navigate correctly
- [ ] GitHub link opens in new tab

---

## 📱 Mobile Testing Checklist

### Responsive Navigation
- [ ] Hamburger menu appears on mobile
- [ ] Sidebar slides in from left
- [ ] Overlay closes sidebar when clicked
- [ ] Search works on mobile
- [ ] Component categories expand/collapse

### Mobile Components
- [ ] Buttons maintain 44px touch target
- [ ] Inputs are easy to tap
- [ ] Modals work on mobile
- [ ] Tables scroll horizontally
- [ ] Theme builder is usable on mobile

---

## ♿ Accessibility Testing Checklist

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Enter/Space activate buttons
- [ ] Arrow keys work in dropdowns
- [ ] Escape closes modals
- [ ] Focus indicators are visible

### Screen Reader Testing
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] ARIA labels are present
- [ ] Semantic HTML is used
- [ ] Skip-to-content link works

### Lighthouse Audit
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit with:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO

**Target Scores:**
- Accessibility: 100/100 ✅
- Performance: 90+ ✅
- Best Practices: 90+ ✅

---

## 🐛 Known Issues to Check

### Potential Issues to Verify:
1. **CSS Cache:** Hard refresh may be needed to see new utilities
2. **Theme Switching:** Verify theme persists in localStorage
3. **Iframe Theme Sync:** Check parent/child theme synchronization
4. **Mobile Sidebar:** Test sidebar on various screen sizes
5. **Focus States:** Verify all interactive elements have focus styles

---

## 📊 Performance Metrics

### Bundle Size Check
```bash
# Check CSS file size
ls -lh docs/aural-ui.css
ls -lh docs/dark.css
ls -lh docs/high-contrast.css
ls -lh docs/colorblind-friendly.css
```

**Expected:**
- aural-ui.css: ~200-300KB (unminified)
- Theme files: ~5-15KB each

### Load Time Testing
1. Open browser DevTools Network tab
2. Disable cache
3. Reload page
4. Check:
   - ✅ First Contentful Paint < 1.5s
   - ✅ Time to Interactive < 3s
   - ✅ Total page size < 1MB

---

## ✅ Test Results Template

Copy this template for manual testing:

```markdown
## Test Session: [Date]

**Browser:** Chrome 120.0
**Device:** MacBook Pro / iPhone 14
**Tester:** [Name]

### Phase 1: Utilities
- [ ] Backdrop filters working
- [ ] Gradients rendering correctly
- [ ] Aspect ratios maintaining
- [ ] Dark mode classes functioning
- [ ] RTL support working

### Phase 2: Components
- [ ] Button icon-only variant
- [ ] Input with icons
- [ ] Character counter
- [ ] Modal fullscreen
- [ ] Modal scrollable
- [ ] Table expandable rows

### Phase 3: Themes
- [ ] High contrast theme loads
- [ ] Colorblind theme loads
- [ ] Theme builder functional
- [ ] Color picker works
- [ ] Contrast checker accurate
- [ ] Export/copy works

### Issues Found:
1. [Description]
2. [Description]

### Screenshots:
[Attach screenshots of any issues]
```

---

## 🚀 Quick Start Testing

### Fastest way to test everything:

1. **Open Live Site:**
   ```
   https://ferology.github.io/aural-ui/
   ```

2. **Test Demo Navigation:**
   - Click through all menu items
   - Test search
   - Test mobile menu

3. **Test Theme Builder:**
   - Go to Documentation > Theme Builder
   - Load each preset
   - Change colors
   - Export theme

4. **Test Components:**
   - Navigate to Buttons
   - Navigate to Inputs
   - Navigate to Tables
   - Navigate to Modals

5. **Run Lighthouse:**
   - Open DevTools
   - Lighthouse tab
   - Generate report

---

**Last Updated:** January 26, 2026
