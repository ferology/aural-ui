# WCAG 2.1 Level AA Compliance Checklist

**Target**: All documentation pages, component demos, and theme pages must be WCAG 2.1 Level AA compliant.

**Last Updated**: 2026-02-16
**Audit Coverage**: All themes (Light, Dark, Neon, Kinetic, High Contrast, Colorblind)

---

## 🚨 Critical Issues (Must Fix)

### Color Contrast Failures

- [ ] **Light Theme** - Button contrast ratio 4.19:1 (needs 4.5:1)
  - Color: `#3d8a64` on white background
  - Location: `docs/light.css`
  - Fix: Darken to `#2d7452` or similar

- [ ] **High Contrast Theme** - Button contrast ratio 3.09:1 (needs 4.5:1)
  - Color: `#000000` on `#0096ff` background
  - Location: `docs/high-contrast.css`
  - Fix: Change button background or use white text
  - **Note**: Ironic that "High Contrast" theme fails contrast standards

- [ ] **Colorblind Theme** - Button contrast ratio 3.37:1 (needs 4.5:1)
  - Color: `#ffffff` on `#1a8cff` background
  - Location: `docs/colorblind.css`
  - Fix: Darken button background to `#0066cc` or similar

### Keyboard Navigation (Level A Violation)

- [ ] **Missing Skip Links** - All pages
  - Required by WCAG 2.1 Level A (2.4.1)
  - Add skip link to main content at top of each page
  - Pattern: `<a href="#main-content" class="skip-link">Skip to main content</a>`

- [ ] **Modal Focus Traps** - All modals missing focus management
  - Users can Tab outside of open modals
  - No focus restoration when modals close
  - Files: `docs/demo.html` (lines 450-470, 580-600, 680-700)
  - Fix: Implement focus trap with first/last focusable element cycling

### ARIA Attributes

- [ ] **Icon-Only Buttons** - Using `title` instead of `aria-label`
  - Theme switcher buttons (all pages)
  - Fix: Replace `title="Light Theme"` with `aria-label="Light Theme"`
  - Keep title for mouse hover, add aria-label for screen readers

- [ ] **Modal ARIA** - Missing required attributes
  - Add `role="dialog"` to all modal containers
  - Add `aria-modal="true"` to all modals
  - Add `aria-labelledby` pointing to modal title
  - Files: `docs/demo.html` modals

---

## ⚠️ High Priority Issues (Should Fix)

### Mobile Viewport Support

- [ ] **Missing 100dvh** - Multiple components use old 100vh
  - `docs/drawer.css` - Full-height drawer
  - `docs/carousel.css` - Fullscreen mode
  - `docs/navbar.css` - Mobile menu
  - `docs/image-gallery.css` - Fullscreen gallery
  - Fix: Change `height: 100vh` to `height: 100dvh`
  - Add fallback: `height: 100vh; height: 100dvh;`

### Focus Indicators

- [ ] **Verify all interactive elements** have visible focus states
  - Check all themes (especially High Contrast)
  - Minimum 3:1 contrast ratio for focus indicators
  - Test with Tab key navigation

### Button Type Attributes

- [ ] **Inconsistent button types** across demo pages
  - Some buttons have `type="button"`, others don't
  - Standardize: All non-submit buttons should have `type="button"`
  - Prevents accidental form submissions

---

## 📋 Medium Priority Issues (Should Improve)

### Decorative Icons

- [ ] **Add aria-hidden="true"** to decorative icons
  - Theme switcher decorative icons
  - Navigation decorative icons
  - Prevents screen reader announcement of redundant content

### Touch Target Sizing

- [x] **Touch targets sized correctly** (44×44px minimum)
  - Current implementation: Good
  - Theme switcher buttons: Adequate size
  - Navigation elements: Meet minimum requirements

### Hover Media Queries

- [x] **Hover effects properly gated** with `@media (hover: hover)`
  - Current implementation: Good
  - Prevents sticky hover states on touch devices

---

## 🧪 Testing Procedures

### Automated Testing

- [ ] Run axe DevTools on all pages
- [ ] Run WAVE evaluation tool
- [ ] Run Lighthouse accessibility audit
- [ ] Check color contrast with WebAIM Contrast Checker

### Manual Testing

- [ ] **Keyboard Navigation Test**
  - Navigate entire page using only Tab/Shift+Tab
  - Verify all interactive elements are reachable
  - Verify focus order is logical
  - Test modal focus traps
  - Test Escape key closes modals

- [ ] **Screen Reader Test**
  - Test with VoiceOver (macOS)
  - Test with NVDA/JAWS (Windows)
  - Verify all content is announced correctly
  - Verify icon-only buttons have proper labels
  - Verify modal announcements

- [ ] **Color Contrast Test**
  - Check all text against backgrounds
  - Check all interactive elements
  - Test in each theme separately
  - Use browser zoom to 200%

- [ ] **Mobile Accessibility Test**
  - Test on actual devices (iOS/Android)
  - Verify touch targets are adequate
  - Test landscape/portrait orientations
  - Verify no horizontal scrolling

---

## 📊 Component-by-Component Checklist

### Documentation Pages (All Pages)

- [ ] Skip link present and functional
- [ ] Theme switcher has proper aria-labels
- [ ] Focus indicators visible in all themes
- [ ] Color contrast meets 4.5:1 minimum
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] All images have alt text
- [ ] Links have descriptive text (no "click here")

### Modal Component (`docs/demo.html`)

- [ ] `role="dialog"` attribute present
- [ ] `aria-modal="true"` attribute present
- [ ] `aria-labelledby` points to modal title
- [ ] Focus trap implemented
- [ ] Focus restoration on close
- [ ] Escape key closes modal
- [ ] Click outside closes modal
- [ ] Close button has visible focus indicator

### Drawer Component

- [ ] Uses 100dvh for height
- [ ] Focus trap when open
- [ ] Escape key closes drawer
- [ ] Proper ARIA labels
- [ ] Backdrop has proper contrast

### Carousel Component

- [ ] Uses 100dvh for fullscreen mode
- [ ] Previous/Next buttons have aria-labels
- [ ] Current slide announced to screen readers
- [ ] Keyboard controls (arrow keys)
- [ ] Pause button for auto-play

### Image Gallery Component

- [ ] Uses 100dvh for fullscreen
- [ ] Thumbnails are keyboard accessible
- [ ] Images have descriptive alt text
- [ ] Zoom controls are accessible
- [ ] Close button properly labeled

### Navbar Component

- [ ] Mobile menu uses 100dvh
- [ ] Hamburger button has aria-label
- [ ] aria-expanded state toggles
- [ ] Skip link before navbar
- [ ] Logo link has descriptive text

---

## 🎯 Theme-Specific Checklist

### Light Theme
- [ ] Button color contrast fixed (4.5:1 minimum)
- [ ] All text meets contrast requirements
- [ ] Focus indicators visible

### Dark Theme
- [x] Color contrast meets requirements
- [x] Focus indicators visible
- [x] Currently compliant

### Neon Theme
- [x] High contrast maintained
- [x] Glowing effects don't obscure content
- [x] Currently compliant

### Kinetic Theme
- [x] Animated elements don't interfere with accessibility
- [x] Color contrast maintained
- [x] Currently compliant

### High Contrast Theme
- [ ] **Fix button contrast** (currently fails at 3.09:1)
- [ ] Verify all elements meet enhanced contrast
- [ ] Test with Windows High Contrast Mode

### Colorblind Theme
- [ ] **Fix button contrast** (currently fails at 3.37:1)
- [ ] Verify no color-only information
- [ ] Test with color blindness simulators

---

## 📈 Current Accessibility Score

**Lighthouse Score**: 72/100
**Target Score**: 95/100

### Score Breakdown by Issue Type

- **Critical (Color Contrast)**: -15 points
- **Critical (Skip Links)**: -5 points
- **High (Modal Focus)**: -4 points
- **High (ARIA Labels)**: -2 points
- **Medium (100dvh)**: -2 points

**Estimated score after fixes**: 95/100

---

## 🔄 Ongoing Maintenance

### Before Each Release

- [ ] Run automated accessibility tests
- [ ] Manual keyboard navigation test
- [ ] Screen reader spot check
- [ ] Color contrast verification

### When Adding New Components

- [ ] Include ARIA attributes from start
- [ ] Implement keyboard navigation
- [ ] Test with screen reader
- [ ] Verify color contrast
- [ ] Add to this checklist

### When Adding New Themes

- [ ] Test all text/background combinations
- [ ] Verify minimum 4.5:1 contrast ratios
- [ ] Test focus indicators visibility
- [ ] Add theme to testing checklist

---

## 📚 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Evaluation Tool](https://wave.webaim.org/)
- [MDN ARIA Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

---

## ✅ Success Criteria

All pages meet WCAG 2.1 Level AA when:

1. ✅ All automated tests pass (Lighthouse, axe, WAVE)
2. ✅ All critical issues resolved
3. ✅ All high priority issues resolved
4. ✅ Manual keyboard navigation works flawlessly
5. ✅ Screen reader announces all content correctly
6. ✅ All themes pass color contrast requirements
7. ✅ Touch targets meet size requirements
8. ✅ Mobile viewport issues resolved
