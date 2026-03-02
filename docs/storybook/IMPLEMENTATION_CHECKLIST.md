# Framework Tabs Implementation Checklist

Quick reference for implementing or verifying the new Carbon Design System-inspired framework tabs.

## Pre-Implementation Checklist

- [ ] Reviewed the demo page (`framework-tabs-demo.html`)
- [ ] Read the comprehensive guide (`FRAMEWORK_TABS_GUIDE.md`)
- [ ] Understand the design changes (`TABS_DESIGN_COMPARISON.md`)
- [ ] Have access to `page-common.css`

## Implementation Steps

### Step 1: Remove Old Styles

- [ ] Open your component HTML file (e.g., `buttons.html`)
- [ ] Locate inline `<style>` blocks with tab styles
- [ ] Remove or comment out these sections:
  - `.tabs-list { ... }`
  - `.framework-tabs .tab { ... }`
  - `.framework-tabs .tab:hover { ... }`
  - `.framework-tabs .tab.active { ... }`
  - `[role="tabpanel"] { ... }`
  - `@keyframes fadeIn { ... }`
- [ ] Add comment: `/* Framework Tabs - Styles moved to page-common.css */`
- [ ] Save file

### Step 2: Verify CSS Link

- [ ] Check `<head>` section for this link:
  ```html
  <link rel="stylesheet" href="../styles/page-common.css">
  ```
- [ ] Verify path is correct relative to your file location
- [ ] Save file

### Step 3: Update HTML Structure

- [ ] Find the framework tabs section
- [ ] Verify this structure exists:
  ```html
  <div class="framework-tabs">
      <div role="tablist" class="tabs-list">
          <!-- Tab buttons here -->
      </div>
      <!-- Tab panels here -->
  </div>
  ```
- [ ] Check all four tabs are present:
  - [ ] Vanilla JS tab
  - [ ] React tab
  - [ ] Vue tab
  - [ ] Svelte tab (add if missing)

### Step 4: Add Svelte Tab (if missing)

- [ ] Copy this button into the `tabs-list`:
  ```html
  <button role="tab" aria-selected="false"
          aria-controls="svelte-panel"
          id="svelte-tab"
          class="tab">
      Svelte
  </button>
  ```
- [ ] Add corresponding panel:
  ```html
  <div role="tabpanel" id="svelte-panel"
       aria-labelledby="svelte-tab" hidden>
      <pre><code class="language-svelte">
      <!-- Svelte code example -->
      </code></pre>
  </div>
  ```
- [ ] Customize the Svelte code example for your component

### Step 5: Verify JavaScript

- [ ] Check `doc-utils.js` is linked:
  ```html
  <script src="../doc-utils.js"></script>
  ```
- [ ] No changes needed to JavaScript
- [ ] Tab switching should work automatically

## Verification Checklist

### Visual Verification

Open the page in a browser and verify:

- [ ] Page loads without CSS errors
- [ ] All four tabs are visible
- [ ] Framework icons appear:
  - [ ] `[JS]` badge for Vanilla JS
  - [ ] `⚛` atom for React
  - [ ] `[V]` badge for Vue
  - [ ] `🔥` flame for Svelte
- [ ] Inactive tabs are muted (grayish)
- [ ] Active tab is bright white
- [ ] Active tab has green underline (3px)

### Interaction Verification

- [ ] Click on each tab
- [ ] Tab content switches correctly
- [ ] Underline animates smoothly to clicked tab
- [ ] Panel content fades in with slight upward motion
- [ ] No JavaScript errors in console

### Hover Verification

- [ ] Hover over inactive tabs
- [ ] Text brightens to white
- [ ] Subtle background appears
- [ ] Framework icon becomes more visible
- [ ] Transition is smooth (110ms)

### Keyboard Navigation Verification

- [ ] Press Tab key to focus tabs
- [ ] Green outline appears on focused tab
- [ ] Press Enter or Space to activate
- [ ] Tab switches correctly
- [ ] Press Shift+Tab to go backward
- [ ] Focus indicators are clearly visible

### Mobile Verification

- [ ] Resize browser to mobile width (<768px)
- [ ] Tabs scroll horizontally
- [ ] Scrollbar is hidden
- [ ] Touch scrolling works smoothly
- [ ] All tabs are accessible by scrolling

## Accessibility Checklist

### ARIA Attributes

- [ ] `role="tablist"` on `.tabs-list`
- [ ] `role="tab"` on each button
- [ ] `role="tabpanel"` on each panel
- [ ] `aria-selected="true"` on active tab only
- [ ] `aria-selected="false"` on inactive tabs
- [ ] `aria-controls` links tabs to panels
- [ ] `aria-labelledby` links panels to tabs
- [ ] `id` attributes are unique
- [ ] `hidden` attribute on inactive panels

### Screen Reader Testing

- [ ] Use screen reader (VoiceOver, NVDA, JAWS)
- [ ] Tab buttons announce correctly
- [ ] Selection state is announced
- [ ] Tab count is announced (e.g., "1 of 4")
- [ ] Panel content is announced when tab activates

### Focus Management

- [ ] Focus indicators are visible
- [ ] Focus doesn't get trapped
- [ ] Tab order is logical
- [ ] Shift+Tab works backward
- [ ] Focus doesn't disappear

## Performance Checklist

### Animation Performance

- [ ] Animations run at 60fps
- [ ] No stuttering or jank
- [ ] Smooth on mobile devices
- [ ] GPU acceleration working (check DevTools)

### Loading Performance

- [ ] CSS loads quickly
- [ ] No render blocking
- [ ] No layout shifts (CLS = 0)
- [ ] First paint is fast

### Browser Performance

Test in multiple browsers:

- [ ] Chrome/Edge: Works perfectly
- [ ] Firefox: Works perfectly
- [ ] Safari: Works perfectly
- [ ] Mobile Safari: Works perfectly
- [ ] Chrome Mobile: Works perfectly

## Browser Compatibility Checklist

### Desktop Browsers

- [ ] Chrome 90+ ✅
- [ ] Edge 90+ ✅
- [ ] Firefox 88+ ✅
- [ ] Safari 14+ ✅

### Mobile Browsers

- [ ] iOS Safari 14+ ✅
- [ ] Chrome Mobile ✅
- [ ] Samsung Internet ✅
- [ ] Firefox Mobile ✅

### Older Browser Testing

- [ ] Graceful degradation works
- [ ] No JavaScript errors
- [ ] Basic functionality intact

## Code Quality Checklist

### CSS Validation

- [ ] No CSS syntax errors
- [ ] Valid CSS custom properties
- [ ] Proper vendor prefixes (if needed)
- [ ] No unused styles

### HTML Validation

- [ ] Valid HTML5 markup
- [ ] No duplicate IDs
- [ ] Proper nesting
- [ ] Semantic structure

### JavaScript Validation

- [ ] No console errors
- [ ] No console warnings
- [ ] Proper event handling
- [ ] No memory leaks

## Documentation Checklist

### Files to Reference

- [ ] Read `FRAMEWORK_TABS_GUIDE.md` for implementation details
- [ ] Check `TABS_DESIGN_COMPARISON.md` for design changes
- [ ] Review `VISUAL_REFERENCE.md` for visual specifications
- [ ] Use `framework-tabs-snippet.css` as CSS reference
- [ ] Test with `framework-tabs-demo.html` as example

### Code Comments

- [ ] Added comment about styles in page-common.css
- [ ] Removed old style comments
- [ ] Updated any inline documentation

## Troubleshooting Checklist

### Tabs Not Styling Correctly

- [ ] Verify `page-common.css` is linked
- [ ] Check CSS path is correct
- [ ] Clear browser cache
- [ ] Check for CSS conflicts in browser DevTools
- [ ] Verify no inline styles override page-common.css

### Icons Not Appearing

- [ ] Check tab button has correct `id` attribute
- [ ] Verify `id` contains framework name (vanilla, react, vue, svelte)
- [ ] Check CSS `::before` pseudo-elements in DevTools
- [ ] Verify no other styles hide the icons

### Animations Not Working

- [ ] Check browser supports CSS animations
- [ ] Verify no `prefers-reduced-motion` setting
- [ ] Check DevTools for CSS errors
- [ ] Test in different browser

### JavaScript Not Working

- [ ] Verify `doc-utils.js` is linked
- [ ] Check browser console for errors
- [ ] Verify tab/panel IDs match
- [ ] Check `aria-controls` attributes are correct

### Mobile Scrolling Issues

- [ ] Test on actual mobile device (not just resize)
- [ ] Verify `-webkit-overflow-scrolling: touch` is applied
- [ ] Check `overflow-x: auto` on `.tabs-list`
- [ ] Test touch gestures

## Testing Matrix

| Feature | Chrome | Firefox | Safari | Mobile |
|---------|--------|---------|--------|--------|
| Visual rendering | [ ] | [ ] | [ ] | [ ] |
| Tab switching | [ ] | [ ] | [ ] | [ ] |
| Hover states | [ ] | [ ] | [ ] | [ ] |
| Animations | [ ] | [ ] | [ ] | [ ] |
| Keyboard nav | [ ] | [ ] | [ ] | [ ] |
| Focus indicators | [ ] | [ ] | [ ] | [ ] |
| Icons display | [ ] | [ ] | [ ] | [ ] |
| Mobile scroll | N/A | N/A | N/A | [ ] |
| Performance | [ ] | [ ] | [ ] | [ ] |
| Accessibility | [ ] | [ ] | [ ] | [ ] |

## Final Sign-Off

### Before Deployment

- [ ] All visual checks passed
- [ ] All interaction checks passed
- [ ] All accessibility checks passed
- [ ] All performance checks passed
- [ ] All browser tests passed
- [ ] Documentation reviewed
- [ ] Code reviewed
- [ ] No console errors

### Deployment

- [ ] Backed up old files
- [ ] Deployed new CSS
- [ ] Deployed updated HTML
- [ ] Tested on production
- [ ] Verified all pages work

### Post-Deployment

- [ ] Monitor for issues
- [ ] Collect user feedback
- [ ] Check analytics for errors
- [ ] Update documentation if needed

## Quick Reference Commands

### Open Demo Page
```bash
cd /Users/feraf/Projects/aural-ui/docs
open framework-tabs-demo.html
```

### Check for Framework Tabs
```bash
grep -r "framework-tabs" docs/components/*.html
```

### Verify CSS Link
```bash
grep "page-common.css" docs/components/*.html
```

### Git Status
```bash
git status
```

## Support Resources

### Documentation Files
- `FRAMEWORK_TABS_GUIDE.md` - Complete implementation guide
- `TABS_DESIGN_COMPARISON.md` - Before/after comparison
- `VISUAL_REFERENCE.md` - Visual specifications
- `FRAMEWORK_TABS_SUMMARY.md` - Project summary
- `framework-tabs-snippet.css` - CSS reference

### Example Files
- `framework-tabs-demo.html` - Interactive demo
- `components/buttons.html` - Implementation example
- `components/inputs.html` - Implementation example

### Style Files
- `styles/page-common.css` - Main tab styles (lines 283-430)
- `framework-tabs-snippet.css` - Standalone CSS

### Carbon Design System
- [Carbon Tabs](https://carbondesignsystem.com/components/tabs/usage/)
- [Carbon Motion](https://carbondesignsystem.com/guidelines/motion/overview/)

## Need Help?

1. Check the demo page for working example
2. Review documentation files
3. Inspect working page with browser DevTools
4. Test in different browsers
5. Check browser console for errors
6. Verify HTML structure matches guide
7. Confirm CSS is loading correctly

---

**Implementation Date**: 2026-02-26
**Design System**: Carbon Design System Inspired
**Status**: Production Ready
**Compatibility**: Modern Browsers (2020+)
