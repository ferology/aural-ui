# Browser Compatibility Testing Guide

**Aural UI** - Comprehensive Browser Testing Manual
Last Updated: February 16, 2026

This guide documents all browser compatibility fixes implemented in Aural UI and provides detailed testing procedures for each browser and feature. Use this as a checklist to verify that the design system works consistently across all supported platforms.

---

## Table of Contents

1. [Browser Support Matrix](#browser-support-matrix)
2. [Recent Fixes Summary](#recent-fixes-summary)
3. [Desktop Browser Testing](#desktop-browser-testing)
4. [Mobile Browser Testing](#mobile-browser-testing)
5. [Feature-Specific Testing](#feature-specific-testing)
6. [Legacy Browser Testing](#legacy-browser-testing)
7. [Common Issues & Solutions](#common-issues--solutions)
8. [Testing Checklist](#testing-checklist)

---

## Browser Support Matrix

### Modern Browsers (Full Support)

| Browser | Desktop Version | Mobile Version | Notes |
|---------|----------------|----------------|-------|
| **Chrome** | 88+ | 88+ | Full feature support |
| **Safari** | 14+ | 13+ | Requires vendor prefixes |
| **Firefox** | 89+ | 89+ | Full feature support |
| **Edge** | 88+ | 88+ | Chromium-based, full support |

### Older Browsers (Graceful Degradation)

| Browser | Version Range | Support Level | Fallbacks Required |
|---------|--------------|---------------|-------------------|
| Safari | 9-13 | Partial | backdrop-filter, sticky |
| Firefox | 55-88 | Partial | IntersectionObserver |
| Chrome | 51-87 | Partial | IntersectionObserver |
| IE11 | N/A | Minimal | All modern features |

### Mobile Platforms

| Platform | Browser | Version | Special Considerations |
|----------|---------|---------|----------------------|
| **iOS** | Safari | 13+ | Viewport height, safe-area, transform bugs |
| **iPadOS** | Safari | 13+ | Same as iOS Safari |
| **Android** | Chrome | 88+ | Touch interactions, tap delay |
| **Android** | Firefox | 89+ | Touch interactions |

---

## Recent Fixes Summary

### CSS Vendor Prefixes (115+ instances)

#### backdrop-filter
- **Fixed**: 35+ instances in aural-ui.css, deluxe-neon.css, buttons-refined.css, cards-refined.css
- **Added**: 40+ component files (modals, drawers, toasts, cards)
- **Support**: Safari 9+ (instead of Safari 14+ only)
- **Test**: Verify glassmorphism effects work on older Safari versions

#### user-select
- **Fixed**: kinetic.css, buttons-refined.css, kinetic-buttons.css
- **Added**: 18 component files
- **Support**: Older Firefox and Safari versions
- **Test**: Verify text cannot be selected when dragging interactive elements

#### position: sticky
- **Fixed**: 27 instances (tables, multi-select, navbar)
- **Support**: Safari 6.1-12 (pre-2019 versions)
- **Test**: Verify table headers stick when scrolling

#### clip-path
- **Fixed**: 4 instances (kinetic.css, aural-ui.css, rating component)
- **Support**: Older Safari and Chrome versions
- **Test**: Verify custom shapes render correctly

### Mobile Touch & Hover (397 hover states fixed)

#### Touch-action properties
- **Added**: 20+ interactive element types
- **Effect**: Removes 300ms tap delay on iOS and Android
- **Test**: Verify immediate button response on mobile

#### Hover state fixes
- **Fixed**: 397 :hover states wrapped with @media (hover: hover)
- **Effect**: Prevents sticky hover states on mobile touch devices
- **Added**: Matching :active states for touch feedback
- **Test**: Verify no sticky hover states remain after touching buttons

#### Button sizes
- **Changed**: .btn-sm from 36px to 44px on mobile
- **Standard**: WCAG 2.1 touch target guidelines (44x44px minimum)
- **Maintains**: 36px on desktop (768px+) for compact design
- **Test**: Verify buttons are easy to tap on mobile devices

### Mobile iOS Safari (6 critical fixes)

#### Viewport height fixes
- **Added**: height: 100dvh fallback after all 100vh declarations
- **Accounts for**: Safari dynamic address bar
- **Fixed in**: demo.html, page-common.css, component pages
- **Test**: Verify no content cut off when address bar shows/hides

#### Safe-area insets
- **Added**: env(safe-area-inset-*) to mobile header (top)
- **Added**: safe-area-inset to sidebar (left, bottom)
- **Added**: safe-area-inset to page containers
- **Effect**: Prevents content from being hidden by iPhone notch/home indicator
- **Test**: Verify no content hidden on iPhone X and newer

#### Fixed positioning fixes
- **Changed**: Sidebar from transform: translateX() to left: -280px
- **Avoids**: iOS Safari bug with transform + position: fixed
- **Fixed**: Overlay fade animation (opacity instead of display)
- **Added**: -webkit-overflow-scrolling: touch to all scrollable areas
- **Test**: Verify smooth sidebar transitions on iOS

#### Body scroll lock
- **Added**: body.sidebar-open class to prevent background scroll
- **Updated**: toggleDemoMenu() to manage body class
- **Effect**: Prevents scroll-through when mobile menu is open
- **Test**: Verify body doesn't scroll when sidebar is open on mobile

### JavaScript Compatibility (100+ instances)

#### localStorage error handling
- **Added**: isLocalStorageAvailable() helper in theme-manager.js
- **Wrapped**: All localStorage operations in try-catch
- **Fallback**: Graceful fallback when private browsing blocks storage
- **Test**: Verify app doesn't crash in iOS Safari private mode

#### IntersectionObserver fallbacks
- **Added**: Feature detection in doc-enhanced.js and doc-modern.js
- **Implemented**: Scroll event fallback for older browsers
- **Uses**: requestAnimationFrame for smooth performance
- **Supports**: IE11, Safari <12.1, Firefox <55, Chrome <51
- **Test**: Verify animations work on older browsers

#### scrollIntoView options fallback
- **Added**: scrollBehavior feature detection
- **Falls back to**: Basic scrollIntoView(true) on older browsers
- **Maintains**: Smooth scrolling where supported
- **Test**: Verify navigation scrolling works on all browsers

#### Iframe cross-origin handling
- **Improved**: syncIframeTheme() with nested try-catch
- **Added**: Origin checking before accessing contentDocument
- **Added**: Warnings for cross-origin scenarios
- **Effect**: Prevents SecurityError exceptions
- **Test**: Verify theme syncing works in iframes

### CSS Feature Fallbacks

#### color-mix() fallbacks
- **Added**: rgba() fallback values for all 8 primary-alpha variants
- **Added**: Fallback for hover/active state color mixing
- **Supports**: Browsers without color-mix() (pre-2023)
- **Compatibility**: Chrome <111, Safari <16.2, Firefox <113
- **Test**: Verify colors display correctly on older browsers

---

## Desktop Browser Testing

### Safari (macOS)

#### Version Range: 14+ (Full Support), 9-13 (Partial Support)

**Test Scenarios:**

1. **Vendor Prefix Features**
   - [ ] Verify backdrop-filter blur effects work on modals
   - [ ] Verify backdrop-filter blur effects work on drawers
   - [ ] Verify backdrop-filter blur effects work on toasts
   - [ ] Verify sticky table headers work when scrolling
   - [ ] Verify clip-path shapes render correctly in rating component
   - [ ] Verify user-select prevents text selection on draggable elements

2. **Glassmorphism Effects**
   - [ ] Open a modal - verify frosted glass background
   - [ ] Open a drawer - verify blur effect behind
   - [ ] Show toast notification - verify transparent blur
   - [ ] Test in light theme - verify blur adapts
   - [ ] Test in dark theme - verify blur adapts
   - [ ] Test in neon theme - verify blur adapts

3. **Hover States**
   - [ ] Hover over buttons - verify smooth transition
   - [ ] Hover over cards - verify shadow increase
   - [ ] Hover over navigation links - verify background change
   - [ ] Hover over tabs - verify underline animation
   - [ ] Verify no hover quirks with trackpad vs mouse

4. **Scroll Behavior**
   - [ ] Scroll long pages - verify smooth scrolling
   - [ ] Click anchor links - verify smooth scroll to section
   - [ ] Scroll tables - verify headers stick at top
   - [ ] Scroll dropdown menus - verify momentum scrolling
   - [ ] Test with Safari's "swipe between pages" gesture

5. **Theme Switching**
   - [ ] Switch from dark to light - verify instant change
   - [ ] Switch to neon theme - verify effects load
   - [ ] Switch to kinetic theme - verify typography updates
   - [ ] Refresh page - verify theme persists
   - [ ] Test in Private Browsing - verify no localStorage crash

6. **Form Elements**
   - [ ] Test input fields - verify focus states
   - [ ] Test select dropdowns - verify native styling works
   - [ ] Test checkboxes - verify custom styling renders
   - [ ] Test radio buttons - verify custom styling renders
   - [ ] Test switches - verify smooth toggle animation

**Expected Behavior:**

- All vendor prefixes should work seamlessly
- Glassmorphism effects should be smooth and performant
- No visual glitches or rendering issues
- Theme switching should be instant with no flash
- localStorage fallback should work in Private Browsing

**Common Issues:**

- Older Safari (9-13): Backdrop-filter may not work without -webkit- prefix
- Safari <12.1: IntersectionObserver not supported (fallback should activate)
- Safari in Private Browsing: localStorage throws errors (should be caught)

---

### Firefox (Desktop)

#### Version Range: 89+ (Full Support), 55-88 (Partial Support)

**Test Scenarios:**

1. **Vendor Prefix Features**
   - [ ] Verify user-select with -moz-user-select works
   - [ ] Verify clip-path renders correctly
   - [ ] Verify backdrop-filter works (Firefox 103+)
   - [ ] Verify sticky positioning works on table headers
   - [ ] Verify custom scrollbar styling (scrollbar-width)

2. **Hover States**
   - [ ] Hover over buttons - verify instant response
   - [ ] Hover over cards - verify no lag
   - [ ] Hover over navigation - verify smooth transition
   - [ ] Hover over dropdown triggers - verify immediate open
   - [ ] Verify hover states work with mouse and touchpad

3. **JavaScript Features**
   - [ ] Test IntersectionObserver on Firefox 55-88 (should use fallback)
   - [ ] Test IntersectionObserver on Firefox 89+ (should use native)
   - [ ] Verify scroll animations trigger correctly
   - [ ] Verify lazy loading works
   - [ ] Test localStorage in regular and private browsing

4. **Scroll Behavior**
   - [ ] Scroll long pages - verify smooth behavior
   - [ ] Click anchor links - verify scrollIntoView works
   - [ ] Scroll dropdown menus - verify no lag
   - [ ] Test keyboard navigation - verify focus follows scroll

5. **Theme Switching**
   - [ ] Switch themes - verify no flash of unstyled content (FOUC)
   - [ ] Verify theme persists after page refresh
   - [ ] Test theme switching in private browsing
   - [ ] Verify neon effects load correctly

6. **Forms and Inputs**
   - [ ] Test input fields - verify focus rings are visible
   - [ ] Test select dropdowns - verify custom styling works
   - [ ] Test checkboxes - verify custom styling works
   - [ ] Test radio buttons - verify keyboard navigation
   - [ ] Test file inputs - verify custom styling

**Expected Behavior:**

- All modern features should work on Firefox 89+
- Older Firefox (55-88) should use IntersectionObserver fallback
- Scrollbar styling should use Firefox-specific properties
- No visual glitches with text rendering or layout
- Theme switching should be instant

**Common Issues:**

- Firefox <89: May need additional vendor prefixes
- Firefox <103: Backdrop-filter not supported
- Firefox custom scrollbars: Use scrollbar-width/scrollbar-color, not ::-webkit-scrollbar

---

### Chrome (Desktop)

#### Version Range: 88+ (Full Support), 51-87 (Partial Support)

**Test Scenarios:**

1. **Modern CSS Features**
   - [ ] Verify backdrop-filter works without prefix
   - [ ] Verify clip-path works without prefix
   - [ ] Verify position: sticky works on tables
   - [ ] Verify color-mix() works (Chrome 111+) or fallback works (Chrome <111)
   - [ ] Verify CSS Grid and Flexbox layouts are correct

2. **Hover States**
   - [ ] Hover over buttons - verify instant response
   - [ ] Hover over cards - verify shadow transition
   - [ ] Hover over tabs - verify border animation
   - [ ] Hover over tooltips - verify show/hide
   - [ ] Verify no lag with CSS transitions

3. **JavaScript Features**
   - [ ] Test IntersectionObserver on Chrome 51-87 (should use fallback)
   - [ ] Test IntersectionObserver on Chrome 88+ (should use native)
   - [ ] Verify scroll animations are smooth
   - [ ] Verify lazy loading works
   - [ ] Test localStorage in incognito mode

4. **Performance**
   - [ ] Open DevTools Performance tab
   - [ ] Record page load - verify no long tasks
   - [ ] Record scroll - verify 60fps
   - [ ] Record theme switch - verify smooth transition
   - [ ] Check memory usage - verify no leaks

5. **Theme Switching**
   - [ ] Switch themes - verify instant change
   - [ ] Verify CSS caching works correctly
   - [ ] Test theme persistence after refresh
   - [ ] Test in incognito - verify fallback works
   - [ ] Verify neon effects initialize correctly

6. **Dev Tools Testing**
   - [ ] Device emulation - verify responsive behavior
   - [ ] Lighthouse audit - verify 90+ accessibility score
   - [ ] Network throttling - verify graceful loading
   - [ ] Coverage tool - verify minimal unused CSS

**Expected Behavior:**

- All features should work perfectly on Chrome 88+
- Older Chrome should gracefully degrade with fallbacks
- Performance should be excellent (60fps)
- No console errors or warnings
- Theme switching should be instant

**Common Issues:**

- Chrome <111: color-mix() not supported (should use rgba fallback)
- Chrome <88: May need vendor prefixes for some features
- Chrome DevTools: May show warnings for experimental features

---

### Edge (Desktop)

#### Version Range: 88+ (Chromium-based)

**Test Scenarios:**

1. **Chromium Compatibility**
   - [ ] Verify all features work identical to Chrome
   - [ ] Test backdrop-filter effects
   - [ ] Test position: sticky on tables
   - [ ] Test CSS Grid and Flexbox layouts
   - [ ] Verify custom properties (CSS variables) work

2. **Windows-Specific**
   - [ ] Test with Windows High Contrast mode enabled
   - [ ] Verify scrollbar styling matches Windows theme
   - [ ] Test with Windows dark mode enabled
   - [ ] Test with Windows light mode enabled
   - [ ] Verify touch interactions on Surface devices

3. **Hover States**
   - [ ] Test with mouse - verify instant response
   - [ ] Test with trackpad - verify same behavior
   - [ ] Test with touch (Surface) - verify no sticky hovers
   - [ ] Test with stylus - verify proper interaction

4. **JavaScript Features**
   - [ ] Verify IntersectionObserver works natively
   - [ ] Test localStorage in InPrivate mode
   - [ ] Test theme switching
   - [ ] Verify no Edge-specific JavaScript errors

5. **Forms and Inputs**
   - [ ] Test input fields - verify Edge autofill works
   - [ ] Test password fields - verify Edge password manager
   - [ ] Test select dropdowns - verify custom styling
   - [ ] Test file inputs - verify Windows file picker

**Expected Behavior:**

- Should work identically to Chrome 88+
- Windows High Contrast mode should be respected
- No Edge-specific quirks or issues
- InPrivate mode should work with localStorage fallback

**Common Issues:**

- Edge may have different scrollbar styling preferences
- Windows High Contrast mode may override some custom styles
- Touch devices may need extra touch-action considerations

---

## Mobile Browser Testing

### iOS Safari (iPhone & iPad)

#### Version Range: 13+ (iPadOS 13+)

**Critical Test Scenarios:**

1. **Viewport Height Issues**
   - [ ] Open app in portrait - verify no content cut off at bottom
   - [ ] Scroll down - address bar hides - verify layout adjusts
   - [ ] Scroll up - address bar shows - verify no content jump
   - [ ] Rotate to landscape - verify full-screen layout
   - [ ] Test on iPhone SE (small screen) - verify 100dvh works
   - [ ] Test on iPhone 14 Pro Max - verify 100dvh works

2. **Safe Area Insets (iPhone X and newer)**
   - [ ] Open app on iPhone with notch - verify no content behind notch
   - [ ] Check mobile header - verify padding-top accounts for notch
   - [ ] Open sidebar - verify content not hidden by notch (left)
   - [ ] Scroll to bottom - verify content not hidden by home indicator
   - [ ] Test in landscape - verify safe areas on both sides
   - [ ] Test on iPad Pro with rounded corners - verify safe areas

3. **Fixed Positioning Bugs**
   - [ ] Open sidebar - verify smooth slide-in (left: -280px method)
   - [ ] Close sidebar - verify smooth slide-out
   - [ ] Scroll page with sidebar open - verify sidebar stays fixed
   - [ ] Test overlay - verify smooth fade-in/out (opacity method)
   - [ ] Verify no flickering or jumping during animations
   - [ ] Test on iOS 13, 14, 15 - verify consistent behavior

4. **Body Scroll Lock**
   - [ ] Open sidebar on mobile - verify body doesn't scroll behind
   - [ ] Try to scroll body with sidebar open - should be locked
   - [ ] Close sidebar - verify body scroll unlocks
   - [ ] Test with long pages - verify scroll position maintained
   - [ ] Test keyboard open - verify scroll lock still works
   - [ ] Test on various iPhone models

5. **Touch Interactions**
   - [ ] Tap button - verify instant response (no 300ms delay)
   - [ ] Tap and hold button - verify no context menu
   - [ ] Swipe on cards - verify smooth scroll
   - [ ] Tap tab - verify instant switch (no hover state stuck)
   - [ ] Tap toggle switch - verify immediate toggle
   - [ ] Tap rating stars - verify instant selection

6. **Hover State Fixes**
   - [ ] Tap button - verify no hover state remains after tap
   - [ ] Tap card - verify no stuck hover shadow
   - [ ] Tap navigation link - verify no stuck background
   - [ ] Tap tab - verify no stuck underline
   - [ ] Test all interactive elements - verify clean :active states

7. **Touch Scrolling**
   - [ ] Scroll main page - verify smooth momentum scrolling
   - [ ] Scroll sidebar - verify -webkit-overflow-scrolling: touch works
   - [ ] Scroll dropdown menus - verify smooth scrolling
   - [ ] Scroll tables - verify sticky headers work
   - [ ] Test with fast fling - verify momentum continues smoothly
   - [ ] Test with slow drag - verify precise control

8. **Theme Switching**
   - [ ] Switch theme - verify instant change
   - [ ] Test in Private Browsing - verify no crash (localStorage fallback)
   - [ ] Refresh page - verify theme persists (if not private)
   - [ ] Test neon theme - verify effects work on iOS
   - [ ] Switch between all 5 themes - verify smooth transitions

9. **Button Sizes (WCAG Touch Targets)**
   - [ ] Measure .btn-sm on mobile - should be 44x44px minimum
   - [ ] Test with finger - verify easy to tap
   - [ ] Test icon buttons - verify 44x44px minimum
   - [ ] Test close buttons in modals - verify adequate size
   - [ ] Test navigation links - verify adequate tap target
   - [ ] Compare to desktop - .btn-sm should be 36px on desktop

10. **Form Elements**
    - [ ] Test input fields - verify iOS keyboard doesn't cover input
    - [ ] Test select dropdowns - verify native iOS picker appears
    - [ ] Test date inputs - verify native iOS date picker
    - [ ] Test checkboxes - verify easy to tap (44x44px)
    - [ ] Test radio buttons - verify easy to tap (44x44px)
    - [ ] Test switches - verify smooth toggle animation

11. **Orientation Changes**
    - [ ] Rotate to landscape - verify layout adapts
    - [ ] Rotate to portrait - verify layout adapts
    - [ ] Verify no content cut off during rotation
    - [ ] Test on iPad - verify both orientations work
    - [ ] Verify sidebar closes gracefully on orientation change

**Expected Behavior:**

- No content cut off by dynamic address bar (100dvh)
- No content hidden by notch or home indicator (safe-area-inset)
- Smooth sidebar animations with no flickering (left positioning)
- Body scroll locked when sidebar open
- Instant button response with no 300ms delay
- No sticky hover states after tap
- Smooth momentum scrolling everywhere
- Theme switching works in Private Browsing
- All buttons meet 44x44px minimum touch target
- Forms work seamlessly with iOS keyboard

**Common Issues to Watch For:**

- **100vh bug**: Content cut off when address bar shows/hides (should use 100dvh)
- **Transform bug**: Sidebar flickers with transform: translateX() (should use left)
- **Scroll-through**: Body scrolls behind sidebar (should use body.sidebar-open lock)
- **Tap delay**: 300ms delay on buttons (should use touch-action: manipulation)
- **Sticky hover**: Hover states remain after tap (should use @media (hover: hover))
- **Private browsing**: localStorage crashes (should use try-catch fallback)
- **Small buttons**: Buttons < 44x44px hard to tap (should use responsive sizes)

---

### Android Chrome

#### Version Range: 88+

**Test Scenarios:**

1. **Touch Interactions**
   - [ ] Tap button - verify instant response (no 300ms delay)
   - [ ] Tap and hold - verify no context menu on buttons
   - [ ] Swipe on cards - verify smooth scroll
   - [ ] Pinch to zoom - verify page responds (if zoom enabled)
   - [ ] Double-tap - verify appropriate behavior

2. **Hover State Fixes**
   - [ ] Tap button - verify no hover state remains
   - [ ] Tap card - verify no stuck hover effects
   - [ ] Tap navigation link - verify clean state
   - [ ] Tap tabs - verify immediate switch, no hover state
   - [ ] Test all interactive elements

3. **Viewport Issues**
   - [ ] Test on various Android screen sizes
   - [ ] Verify 100vh works correctly (no address bar issues)
   - [ ] Test on foldable devices (if available)
   - [ ] Rotate device - verify layout adapts
   - [ ] Test with Chrome flags (if doing advanced testing)

4. **Touch Scrolling**
   - [ ] Scroll main page - verify smooth scrolling
   - [ ] Scroll sidebar - verify momentum scrolling
   - [ ] Scroll dropdown menus - verify smooth behavior
   - [ ] Scroll tables - verify sticky headers work
   - [ ] Test fast fling - verify smooth momentum

5. **Theme Switching**
   - [ ] Switch themes - verify instant change
   - [ ] Test in Incognito mode - verify localStorage fallback
   - [ ] Refresh page - verify theme persists
   - [ ] Test all 5 themes - verify smooth transitions

6. **Button Sizes**
   - [ ] Verify .btn-sm is 44x44px on mobile
   - [ ] Test with finger - verify easy to tap
   - [ ] Test icon buttons - verify adequate size
   - [ ] Compare to desktop - verify responsive sizing

7. **Form Elements**
   - [ ] Test input fields - verify keyboard doesn't cover input
   - [ ] Test select dropdowns - verify native Android picker
   - [ ] Test date inputs - verify native date picker
   - [ ] Test checkboxes - verify easy to tap
   - [ ] Test switches - verify smooth animation

**Expected Behavior:**

- Instant touch response (no 300ms delay)
- No sticky hover states
- Smooth scrolling with momentum
- Theme switching works in Incognito
- All buttons meet 44x44px minimum
- Forms work with Android keyboard

**Common Issues:**

- Some Android browsers may have custom tap delay behavior
- Different manufacturers may have different scroll behaviors
- Test on multiple Android versions and manufacturers if possible

---

### Android Firefox

#### Version Range: 89+

**Test Scenarios:**

1. **Touch Interactions**
   - [ ] Verify same behavior as Android Chrome
   - [ ] Test tap delay removal
   - [ ] Test hover state fixes
   - [ ] Verify touch-action: manipulation works

2. **Firefox-Specific**
   - [ ] Test custom scrollbar styling (scrollbar-width)
   - [ ] Verify Firefox reader mode compatibility
   - [ ] Test with Firefox tracking protection enabled
   - [ ] Verify no Firefox-specific JavaScript errors

3. **Theme Switching**
   - [ ] Switch themes - verify instant change
   - [ ] Test in Private Browsing - verify fallback
   - [ ] Verify theme persists after refresh

**Expected Behavior:**

- Should work similar to Android Chrome
- May have different scrollbar styling
- Reader mode should display content correctly

---

## Feature-Specific Testing

### Hover State Testing (397 hover states fixed)

**Desktop Testing (Mouse/Trackpad):**

1. **Buttons**
   - [ ] Hover .btn-primary - verify background darkens
   - [ ] Hover .btn-secondary - verify background fills
   - [ ] Hover .btn-ghost - verify background appears
   - [ ] Hover .btn-danger - verify background darkens
   - [ ] Hover disabled button - verify no hover effect

2. **Cards**
   - [ ] Hover .card - verify shadow increases
   - [ ] Hover .card-interactive - verify lift animation
   - [ ] Hover .card-hover - verify border color changes
   - [ ] Hover disabled card - verify no hover effect

3. **Navigation**
   - [ ] Hover .demo-nav-link - verify background changes
   - [ ] Hover .demo-nav-title.collapsible - verify color changes
   - [ ] Hover breadcrumb links - verify underline appears
   - [ ] Hover pagination buttons - verify background changes

4. **Tabs**
   - [ ] Hover tab button - verify border animation
   - [ ] Hover active tab - verify no additional change
   - [ ] Hover disabled tab - verify no hover effect

5. **Forms**
   - [ ] Hover input field - verify border color changes
   - [ ] Hover select dropdown - verify border color changes
   - [ ] Hover checkbox - verify background changes
   - [ ] Hover switch - verify slight scale

**Mobile Testing (Touch):**

1. **Touch Feedback**
   - [ ] Tap button - verify :active state shows
   - [ ] Tap card - verify :active state shows
   - [ ] Tap navigation link - verify :active state shows
   - [ ] Release finger - verify NO hover state remains

2. **No Sticky Hover**
   - [ ] Tap button - verify hover doesn't stick after release
   - [ ] Tap card - verify hover shadow doesn't remain
   - [ ] Tap tab - verify hover underline doesn't remain
   - [ ] Tap any element - verify clean state after interaction

3. **Proper Active States**
   - [ ] Verify :active states are visible during tap
   - [ ] Verify :active states disappear after release
   - [ ] Verify :active states are different from :hover
   - [ ] Test on various mobile devices

**How Hover Fix Works:**

- Desktop (hover: hover): Hover states work normally
- Mobile (hover: none): Hover states are disabled, :active states provide feedback
- Hybrid devices: Automatically detect input method

**To Verify Fix:**

```css
/* Hover states only on devices with hover capability */
@media (hover: hover) {
  .btn:hover {
    background: var(--color-primary-hover);
  }
}

/* Active states for all devices (including touch) */
.btn:active {
  transform: scale(0.98);
}
```

---

### Touch Target Testing (WCAG 2.1 Level AAA)

**Minimum Size: 44x44 pixels**

**Button Size Testing:**

1. **Small Buttons (.btn-sm)**
   - [ ] Measure on desktop (768px+) - should be 36px
   - [ ] Measure on mobile (<768px) - should be 44px
   - [ ] Test tap on mobile - should be easy to hit
   - [ ] Compare to iOS guidelines - should meet 44pt minimum

2. **Regular Buttons (.btn)**
   - [ ] Measure on desktop - should be 48px
   - [ ] Measure on mobile - should be 48px or larger
   - [ ] Test tap on mobile - should be very easy to hit

3. **Icon Buttons**
   - [ ] Measure icon-only buttons - should be 44x44px minimum
   - [ ] Test close buttons in modals - should be 44x44px
   - [ ] Test hamburger menu button - should be 44x44px
   - [ ] Test icon links in navigation - should meet 44x44px

4. **Form Elements**
   - [ ] Measure checkbox click area - should be 44x44px
   - [ ] Measure radio button click area - should be 44x44px
   - [ ] Measure switch toggle area - should be 44px wide minimum
   - [ ] Measure dropdown trigger - should be 44px height minimum

**Testing Tools:**

- Browser DevTools: Measure element dimensions
- Accessibility Inspector: Check touch target sizes
- Physical device: Test with actual finger taps
- Various hand sizes: Test with different users

**CSS Implementation:**

```css
/* Responsive button sizing */
.btn-sm {
  min-height: 44px; /* Mobile default */
}

@media (min-width: 768px) {
  .btn-sm {
    min-height: 36px; /* Desktop compact size */
  }
}
```

---

### Viewport Height Testing (100vh vs 100dvh)

**iOS Safari Dynamic Address Bar:**

1. **Portrait Mode**
   - [ ] Load page with address bar visible
   - [ ] Verify content reaches bottom (100dvh)
   - [ ] Scroll down - address bar hides
   - [ ] Verify layout adjusts smoothly
   - [ ] Verify no content cut off
   - [ ] Scroll up - address bar shows
   - [ ] Verify content still fits

2. **Landscape Mode**
   - [ ] Rotate to landscape
   - [ ] Verify 100dvh adapts to new viewport
   - [ ] Scroll page - verify address bar behavior
   - [ ] Verify no content cut off in landscape

3. **Various iPhone Models**
   - [ ] Test on iPhone SE (small screen)
   - [ ] Test on iPhone 12/13/14 (standard)
   - [ ] Test on iPhone 14 Pro Max (large)
   - [ ] Test on iPad (tablet size)
   - [ ] Compare behavior across devices

**CSS Implementation:**

```css
.full-height-container {
  height: 100vh;  /* Fallback for older browsers */
  height: 100dvh; /* Dynamic viewport height for mobile */
}
```

**What to Look For:**

- Content should never be cut off at the bottom
- Layout should adjust smoothly when address bar shows/hides
- No jumpy or jerky animations
- Consistent behavior across devices

---

### Safe Area Insets (iPhone Notch & Home Indicator)

**iPhone X and Newer (Notch):**

1. **Portrait Mode**
   - [ ] Verify mobile header has top padding for notch
   - [ ] Verify no content hidden behind notch
   - [ ] Open sidebar - verify left padding for notch
   - [ ] Verify title and logo not hidden
   - [ ] Scroll to bottom - verify home indicator spacing

2. **Landscape Mode**
   - [ ] Rotate to landscape
   - [ ] Verify notch safe area on left side
   - [ ] Verify notch safe area on right side
   - [ ] Verify content centered away from notches
   - [ ] Open sidebar - verify safe area maintained

3. **iPad Pro (Rounded Corners)**
   - [ ] Verify corners don't cut off content
   - [ ] Test in both orientations
   - [ ] Verify safe areas applied to all edges

**CSS Implementation:**

```css
.mobile-header {
  padding-top: var(--space-4);
  padding-top: calc(var(--space-4) + env(safe-area-inset-top));
}

.sidebar {
  padding-left: var(--space-6);
  padding-left: calc(var(--space-6) + env(safe-area-inset-left));
}
```

**Safe Area Reference:**

- top: Status bar / notch area
- left: Notch area (landscape)
- right: Notch area (landscape)
- bottom: Home indicator area

---

### localStorage Testing (Private Browsing)

**Safari Private Browsing:**

1. **Enable Private Browsing**
   - [ ] Open Safari in Private Browsing mode
   - [ ] Navigate to Aural UI demo site
   - [ ] Verify page loads without crash
   - [ ] Verify no console errors about localStorage

2. **Theme Switching**
   - [ ] Switch to light theme - verify it works
   - [ ] Switch to neon theme - verify it works
   - [ ] Switch to kinetic theme - verify it works
   - [ ] Refresh page - verify theme resets to default (dark)
   - [ ] Verify fallback message in console (optional)

3. **Error Handling**
   - [ ] Open DevTools console
   - [ ] Verify no JavaScript errors
   - [ ] Verify try-catch blocks prevent crashes
   - [ ] Verify graceful fallback to default theme

**Chrome Incognito:**

1. **Enable Incognito Mode**
   - [ ] Open Chrome in Incognito mode
   - [ ] Navigate to Aural UI demo site
   - [ ] Verify page loads correctly

2. **Theme Persistence**
   - [ ] Switch themes - verify instant change
   - [ ] Refresh page - verify theme persists (Chrome allows localStorage in Incognito)
   - [ ] Close tab - reopen - verify theme resets

**Firefox Private Browsing:**

1. **Enable Private Browsing**
   - [ ] Open Firefox in Private Browsing
   - [ ] Navigate to Aural UI demo site
   - [ ] Verify page loads correctly

2. **localStorage Behavior**
   - [ ] Switch themes - verify it works
   - [ ] Refresh page - verify theme persists (Firefox allows localStorage in Private)
   - [ ] Close window - reopen - verify theme resets

**JavaScript Implementation:**

```javascript
function isLocalStorageAvailable() {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

// Use localStorage with try-catch
if (isLocalStorageAvailable()) {
  try {
    localStorage.setItem('theme', 'dark');
  } catch (e) {
    console.warn('Could not save theme:', e);
    // Fallback: Use session memory or default
  }
}
```

---

### IntersectionObserver Fallback Testing

**Modern Browsers (Chrome 51+, Safari 12.1+, Firefox 55+):**

1. **Native IntersectionObserver**
   - [ ] Open DevTools console
   - [ ] Verify "IntersectionObserver supported" message
   - [ ] Scroll page - verify animations trigger
   - [ ] Verify lazy loading works
   - [ ] Check performance - should be 60fps

2. **Animation Triggers**
   - [ ] Scroll to reveal sections - verify fade-in
   - [ ] Scroll to cards - verify slide-up
   - [ ] Scroll to images - verify lazy load
   - [ ] Scroll fast - verify all animations trigger

**Older Browsers (IE11, Safari <12.1, Firefox <55, Chrome <51):**

1. **Scroll Event Fallback**
   - [ ] Open DevTools console
   - [ ] Verify "Using scroll event fallback" message
   - [ ] Scroll page - verify animations still trigger
   - [ ] Check performance - should still be smooth

2. **Fallback Behavior**
   - [ ] Verify animations trigger slightly earlier (offset)
   - [ ] Verify lazy loading works with scroll events
   - [ ] Check CPU usage - should use requestAnimationFrame
   - [ ] Verify no scroll jank or lag

**JavaScript Implementation:**

```javascript
// Feature detection
const supportsIntersectionObserver = 'IntersectionObserver' in window;

if (supportsIntersectionObserver) {
  // Use native IntersectionObserver
  const observer = new IntersectionObserver(callback, options);
  observer.observe(element);
} else {
  // Use scroll event fallback
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        checkVisibility();
        ticking = false;
      });
      ticking = true;
    }
  });
}
```

---

### Vendor Prefix Testing

**backdrop-filter Testing:**

1. **Safari 9-14**
   - [ ] Open modal - verify frosted glass blur works
   - [ ] Open drawer - verify backdrop blur works
   - [ ] Show toast - verify blur behind notification
   - [ ] Check CSS - verify -webkit-backdrop-filter is applied

2. **All Browsers**
   - [ ] Verify glassmorphism effects render
   - [ ] Verify no visual glitches
   - [ ] Verify fallback works if not supported (solid background)

**user-select Testing:**

1. **Safari & Firefox**
   - [ ] Try to select text in buttons - should not select
   - [ ] Try to select text while dragging - should not select
   - [ ] Try to select text in disabled elements - should not select
   - [ ] Verify -webkit-user-select and -moz-user-select work

**position: sticky Testing:**

1. **Safari 6.1-12**
   - [ ] Scroll table - verify header sticks at top
   - [ ] Scroll page - verify navbar sticks at top
   - [ ] Check CSS - verify position: -webkit-sticky is applied

**clip-path Testing:**

1. **Safari & Older Chrome**
   - [ ] Check rating component - verify star shapes render
   - [ ] Check custom shapes - verify clip-path works
   - [ ] Verify -webkit-clip-path is applied

---

## Legacy Browser Testing

### IE11 (Minimal Support)

**Note:** IE11 support is minimal and focuses on graceful degradation rather than full functionality.

**Test Scenarios:**

1. **Basic Layout**
   - [ ] Verify page loads without crashing
   - [ ] Verify basic layout is readable
   - [ ] Verify text content is accessible
   - [ ] Verify images display correctly

2. **CSS Fallbacks**
   - [ ] Verify CSS custom properties have fallback values
   - [ ] Verify Grid layouts fall back to Flexbox or inline-block
   - [ ] Verify modern CSS features degrade gracefully
   - [ ] Verify no visual corruption

3. **JavaScript Compatibility**
   - [ ] Verify no JavaScript errors in console
   - [ ] Verify IntersectionObserver fallback works
   - [ ] Verify localStorage try-catch prevents crashes
   - [ ] Verify basic interactivity works (buttons, forms)

4. **What Won't Work**
   - CSS custom properties (--var)
   - CSS Grid (use Flexbox fallback)
   - Backdrop-filter (use solid backgrounds)
   - Modern ES6+ JavaScript (needs transpilation)

**Expected Behavior:**

- Basic layout should be usable
- Content should be readable
- Forms should work
- No crashes or white screens
- Many modern features will not work (expected)

**Note:** If IE11 support is critical, consider:
- Transpiling JavaScript with Babel
- Using PostCSS with autoprefixer
- Adding polyfills for modern APIs
- Extensive testing and fallbacks

---

### Safari 9-13 (Partial Support)

**Test Scenarios:**

1. **Vendor Prefixes**
   - [ ] Verify -webkit-backdrop-filter works (Safari 9+)
   - [ ] Verify -webkit-user-select works
   - [ ] Verify -webkit-clip-path works
   - [ ] Verify position: -webkit-sticky works

2. **CSS Fallbacks**
   - [ ] Verify color-mix() fallback (rgba) works
   - [ ] Verify CSS Grid works (Safari 10.1+)
   - [ ] Verify Flexbox works (Safari 9+)

3. **JavaScript Fallbacks**
   - [ ] Verify IntersectionObserver fallback works (Safari <12.1)
   - [ ] Verify localStorage try-catch works
   - [ ] Verify scrollIntoView fallback works

**Expected Behavior:**

- Most features should work with vendor prefixes
- IntersectionObserver uses fallback on Safari <12.1
- Some modern CSS features may not work

---

### Firefox 55-88 (Partial Support)

**Test Scenarios:**

1. **IntersectionObserver**
   - [ ] Verify scroll event fallback works on Firefox <55
   - [ ] Verify native IntersectionObserver works on Firefox 55+

2. **CSS Features**
   - [ ] Verify backdrop-filter works on Firefox 103+
   - [ ] Verify fallback (solid background) works on Firefox <103
   - [ ] Verify user-select with -moz-user-select works

**Expected Behavior:**

- IntersectionObserver fallback on Firefox <55
- Backdrop-filter not supported until Firefox 103
- Most other features work normally

---

### Chrome 51-87 (Partial Support)

**Test Scenarios:**

1. **IntersectionObserver**
   - [ ] Verify scroll event fallback works on Chrome <51
   - [ ] Verify native IntersectionObserver works on Chrome 51+

2. **CSS Features**
   - [ ] Verify color-mix() fallback works on Chrome <111
   - [ ] Verify backdrop-filter works (Chrome 76+)
   - [ ] Verify CSS Grid works (Chrome 57+)

**Expected Behavior:**

- IntersectionObserver fallback on Chrome <51
- color-mix() fallback (rgba) on Chrome <111
- Most other features work normally

---

## Common Issues & Solutions

### Issue 1: Sticky Hover States on Mobile

**Symptoms:**
- After tapping a button, hover state remains visible
- Cards stay "hovered" after touch
- Navigation links show hover background after tap

**Root Cause:**
- Mobile browsers treat touch as both :active and :hover
- Hover states persist after finger is lifted
- No way to "unhover" on touch devices

**Solution:**
```css
/* Only apply hover on devices with hover capability */
@media (hover: hover) {
  .btn:hover {
    background: var(--color-primary-hover);
  }
}

/* Active state for all devices (touch feedback) */
.btn:active {
  transform: scale(0.98);
}
```

**How to Test:**
1. Tap button on mobile device
2. Lift finger
3. Verify NO hover state remains
4. Verify button returns to default state

**Fixed in:** 397 hover states across all components

---

### Issue 2: 300ms Tap Delay on Mobile

**Symptoms:**
- Buttons feel sluggish on mobile
- Noticeable delay between tap and action
- Poor perceived performance

**Root Cause:**
- Mobile browsers wait 300ms after tap to detect double-tap
- Legacy behavior for zooming on mobile web

**Solution:**
```css
button, a, .interactive {
  touch-action: manipulation; /* Removes 300ms delay */
}
```

**How to Test:**
1. Tap button on mobile device
2. Should feel instant (< 50ms)
3. Compare to buttons without fix (300ms delay noticeable)

**Fixed in:** 20+ interactive element types

---

### Issue 3: Content Cut Off by iOS Address Bar

**Symptoms:**
- Bottom of page cut off on iOS Safari
- Content jumps when scrolling (address bar shows/hides)
- Layout doesn't account for dynamic viewport

**Root Cause:**
- `100vh` is static and doesn't adjust for address bar
- Safari's address bar changes visible viewport height
- Content designed for full height gets cut off

**Solution:**
```css
.full-height {
  height: 100vh;  /* Fallback */
  height: 100dvh; /* Dynamic viewport height */
}
```

**How to Test:**
1. Open page on iPhone with address bar visible
2. Verify content reaches bottom
3. Scroll down - address bar hides
4. Verify layout adjusts, no content cut off
5. Scroll up - address bar shows
6. Verify content still fits

**Fixed in:** demo.html, page-common.css, all component pages

---

### Issue 4: Content Hidden by iPhone Notch

**Symptoms:**
- Logo or header content hidden behind notch
- Bottom content hidden by home indicator
- Sidebar content cut off on left edge

**Root Cause:**
- Fixed positioning doesn't account for iPhone safe areas
- Notch, status bar, and home indicator overlap content
- No padding for device-specific features

**Solution:**
```css
.mobile-header {
  padding-top: calc(var(--space-4) + env(safe-area-inset-top));
  padding-left: calc(var(--space-4) + env(safe-area-inset-left));
  padding-right: calc(var(--space-4) + env(safe-area-inset-right));
}

.full-height-container {
  padding-bottom: calc(var(--space-4) + env(safe-area-inset-bottom));
}
```

**How to Test:**
1. Open on iPhone X or newer (with notch)
2. Verify no content behind notch in portrait
3. Rotate to landscape
4. Verify no content behind notch on either side
5. Scroll to bottom
6. Verify home indicator doesn't hide content

**Fixed in:** Mobile header, sidebar, page containers

---

### Issue 5: Flickering Sidebar on iOS

**Symptoms:**
- Sidebar animation is jerky or flickery on iOS
- Fixed position + transform causes visual glitches
- Overlay doesn't fade smoothly

**Root Cause:**
- iOS Safari bug with `transform: translateX()` + `position: fixed`
- Multiple rendering layers cause flickering
- `display: none` prevents smooth transition

**Solution:**
```css
/* Use left positioning instead of transform */
.sidebar {
  position: fixed;
  left: -280px; /* Hidden state */
  transition: left 0.3s ease;
}

.sidebar.active {
  left: 0; /* Visible state */
}

/* Overlay with opacity instead of display */
.overlay {
  opacity: 0;
  pointer-events: none; /* Prevent clicks when hidden */
  transition: opacity 0.3s ease;
}

.overlay.active {
  opacity: 1;
  pointer-events: auto; /* Allow clicks when visible */
}
```

**How to Test:**
1. Open sidebar on iPhone
2. Verify smooth slide-in animation
3. Close sidebar
4. Verify smooth slide-out animation
5. Verify no flickering or jumping
6. Test on iOS 13, 14, 15

**Fixed in:** demo.html sidebar and overlay

---

### Issue 6: Body Scrolls Behind Sidebar

**Symptoms:**
- When sidebar is open on mobile, body scrolls behind it
- Disorienting user experience
- Content jumps around unexpectedly

**Root Cause:**
- No scroll lock on body when sidebar is open
- Touch events propagate to body
- Mobile browsers allow background scrolling by default

**Solution:**
```css
body.sidebar-open {
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100vh;
  height: 100dvh;
}
```

```javascript
function toggleDemoMenu() {
  const sidebar = document.getElementById('demo-sidebar');
  const overlay = document.getElementById('demo-overlay');
  const isActive = sidebar.classList.toggle('active');
  overlay.classList.toggle('active', isActive);
  document.body.classList.toggle('sidebar-open', isActive); // Lock body scroll
}
```

**How to Test:**
1. Open sidebar on mobile
2. Try to scroll body
3. Verify body doesn't scroll
4. Close sidebar
5. Verify body scrolling unlocks

**Fixed in:** demo.js and demo.html

---

### Issue 7: localStorage Crashes in Private Browsing

**Symptoms:**
- Page crashes on iOS Safari Private Browsing
- Console error: "QuotaExceededError"
- Theme switching doesn't work

**Root Cause:**
- Safari Private Browsing throws exception on localStorage access
- No quota available for storage
- Uncaught exception crashes the page

**Solution:**
```javascript
function isLocalStorageAvailable() {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

// Safe localStorage access
if (isLocalStorageAvailable()) {
  try {
    localStorage.setItem('theme', 'dark');
  } catch (e) {
    console.warn('Could not save theme:', e);
    // Fallback: Use default theme
  }
}
```

**How to Test:**
1. Enable Safari Private Browsing
2. Navigate to site
3. Verify page loads without crash
4. Switch themes
5. Verify themes work (but don't persist)
6. Refresh page
7. Verify default theme loads

**Fixed in:** theme-manager.js

---

### Issue 8: Buttons Too Small on Mobile

**Symptoms:**
- Hard to tap small buttons on mobile
- Users frequently miss touch targets
- Accessibility issues

**Root Cause:**
- Desktop button sizes optimized for mouse (36px)
- Touch targets need minimum 44x44px (WCAG 2.1 AAA)
- Fixed pixel sizes don't adapt to touch

**Solution:**
```css
.btn-sm {
  min-height: 44px; /* Mobile default - WCAG compliant */
}

@media (min-width: 768px) {
  .btn-sm {
    min-height: 36px; /* Desktop can be smaller */
  }
}
```

**How to Test:**
1. Open DevTools Device Mode
2. Measure .btn-sm on mobile (<768px)
3. Verify height is 44px or greater
4. Switch to desktop view (>768px)
5. Verify height is 36px
6. Test tap on real mobile device
7. Verify easy to hit with finger

**Fixed in:** All button components

---

### Issue 9: IntersectionObserver Not Supported

**Symptoms:**
- Animations don't trigger on older browsers
- Lazy loading doesn't work
- Console error: "IntersectionObserver is not defined"

**Root Cause:**
- IntersectionObserver not supported on:
  - IE11
  - Safari <12.1
  - Firefox <55
  - Chrome <51

**Solution:**
```javascript
const supportsIntersectionObserver = 'IntersectionObserver' in window;

if (supportsIntersectionObserver) {
  // Use native IntersectionObserver
  const observer = new IntersectionObserver(callback, options);
  observer.observe(element);
} else {
  // Fallback: Use scroll events
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        checkVisibility();
        ticking = false;
      });
      ticking = true;
    }
  });
}
```

**How to Test:**
1. Open site in older browser (or DevTools device emulation)
2. Open console
3. Verify "Using scroll event fallback" message (or similar)
4. Scroll page
5. Verify animations still trigger
6. Verify lazy loading still works
7. Check performance (should still be smooth)

**Fixed in:** doc-enhanced.js, doc-modern.js

---

### Issue 10: Vendor Prefix Missing

**Symptoms:**
- Glassmorphism effects don't work on Safari
- Backdrop blur missing
- User-select allows text selection when it shouldn't
- Sticky positioning doesn't work

**Root Cause:**
- Older browsers require vendor prefixes
- Safari needs -webkit- prefix for many features
- Firefox needs -moz- prefix for some features
- Missing prefixes = feature doesn't work

**Solution:**
```css
/* Always include vendor prefixes for broader support */
.modal-backdrop {
  backdrop-filter: blur(10px); /* Standard */
  -webkit-backdrop-filter: blur(10px); /* Safari 9+ */
}

.drag-handle {
  user-select: none; /* Standard */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
}

.sticky-header {
  position: sticky; /* Standard */
  position: -webkit-sticky; /* Safari 6.1-12 */
}
```

**How to Test:**
1. Open site in Safari 9-13
2. Verify backdrop blur works on modals
3. Verify text can't be selected when dragging
4. Verify sticky headers work in tables
5. Check in Firefox
6. Verify all features work

**Fixed in:** 115+ instances across all CSS files

---

## Testing Checklist

Use this comprehensive checklist to verify cross-browser compatibility:

### Pre-Testing Setup

- [ ] Set up testing environment with required browsers
- [ ] Install browser DevTools extensions if needed
- [ ] Prepare test devices (iOS, Android)
- [ ] Clear browser cache before testing
- [ ] Note browser versions being tested

### Desktop Browser Testing

**Safari (macOS)**
- [ ] Vendor prefix features work (backdrop-filter, sticky, clip-path)
- [ ] Glassmorphism effects render correctly
- [ ] Hover states work with mouse/trackpad
- [ ] Scroll behavior is smooth
- [ ] Theme switching is instant
- [ ] Forms work correctly
- [ ] No console errors
- [ ] Private Browsing doesn't crash

**Firefox (Desktop)**
- [ ] Vendor prefixes work (-moz-user-select)
- [ ] Hover states work correctly
- [ ] IntersectionObserver works or falls back
- [ ] Scroll behavior is smooth
- [ ] Theme switching is instant
- [ ] Forms work correctly
- [ ] Custom scrollbar styling works
- [ ] No console errors

**Chrome (Desktop)**
- [ ] All modern CSS features work
- [ ] Hover states are instant
- [ ] IntersectionObserver works natively
- [ ] Performance is excellent (60fps)
- [ ] Theme switching is instant
- [ ] Forms work correctly
- [ ] Incognito mode works with fallback
- [ ] No console errors or warnings

**Edge (Desktop)**
- [ ] Works identically to Chrome
- [ ] Windows High Contrast mode is respected
- [ ] Touch interactions work on Surface devices
- [ ] Forms work with Edge autofill
- [ ] InPrivate mode works with fallback
- [ ] No Edge-specific issues

### Mobile Browser Testing

**iOS Safari (iPhone & iPad)**
- [ ] No content cut off (100dvh works)
- [ ] Safe area insets work (notch, home indicator)
- [ ] Fixed positioning smooth (no flickering)
- [ ] Body scroll locked when sidebar open
- [ ] Touch interactions instant (no 300ms delay)
- [ ] No sticky hover states
- [ ] Smooth momentum scrolling
- [ ] Theme switching works in Private Browsing
- [ ] Buttons meet 44x44px minimum
- [ ] Forms work with iOS keyboard
- [ ] Orientation changes work smoothly

**Android Chrome**
- [ ] Touch interactions instant (no tap delay)
- [ ] No sticky hover states
- [ ] Smooth scrolling with momentum
- [ ] Theme switching works in Incognito
- [ ] Buttons meet 44x44px minimum
- [ ] Forms work with Android keyboard
- [ ] Viewport height works correctly

**Android Firefox**
- [ ] Same behavior as Android Chrome
- [ ] Custom scrollbar styling works
- [ ] Reader mode compatible
- [ ] Private Browsing works with fallback

### Feature-Specific Testing

**Hover States (397 fixes)**
- [ ] Desktop: Hover works with mouse/trackpad
- [ ] Mobile: No sticky hover after tap
- [ ] Mobile: :active states provide feedback
- [ ] Hybrid devices: Detect input method correctly

**Touch Targets (WCAG 2.1)**
- [ ] .btn-sm is 44px on mobile, 36px on desktop
- [ ] Icon buttons meet 44x44px minimum
- [ ] Form elements meet 44x44px minimum
- [ ] All interactive elements easy to tap

**Viewport Height (iOS)**
- [ ] Content not cut off by address bar
- [ ] Layout adjusts when address bar shows/hides
- [ ] Works in portrait and landscape
- [ ] Works on all iPhone models

**Safe Area Insets (iPhone X+)**
- [ ] No content behind notch (portrait)
- [ ] No content behind notch (landscape)
- [ ] No content hidden by home indicator
- [ ] Works on iPad Pro rounded corners

**localStorage (Private Browsing)**
- [ ] Safari Private: No crash, fallback works
- [ ] Chrome Incognito: Works normally
- [ ] Firefox Private: Works normally
- [ ] Theme switching doesn't crash

**IntersectionObserver (Older Browsers)**
- [ ] Modern browsers: Native API works
- [ ] Older browsers: Fallback works
- [ ] Animations trigger correctly
- [ ] Performance is smooth

**Vendor Prefixes (Safari 9+)**
- [ ] -webkit-backdrop-filter works
- [ ] -webkit-user-select works
- [ ] -webkit-sticky works
- [ ] -webkit-clip-path works

### Legacy Browser Testing

**IE11 (Minimal Support)**
- [ ] Page loads without crash
- [ ] Basic layout is readable
- [ ] Content is accessible
- [ ] Forms work
- [ ] Graceful degradation for modern features

**Safari 9-13 (Partial Support)**
- [ ] Vendor prefixes work
- [ ] IntersectionObserver fallback works (Safari <12.1)
- [ ] Most features work correctly

**Firefox 55-88 (Partial Support)**
- [ ] IntersectionObserver fallback works (Firefox <55)
- [ ] Backdrop-filter fallback works (Firefox <103)
- [ ] Most features work correctly

**Chrome 51-87 (Partial Support)**
- [ ] IntersectionObserver fallback works (Chrome <51)
- [ ] color-mix() fallback works (Chrome <111)
- [ ] Most features work correctly

### Performance Testing

- [ ] Page load time < 3 seconds
- [ ] Scroll at 60fps
- [ ] Theme switch < 100ms
- [ ] No memory leaks
- [ ] No long tasks (> 50ms)
- [ ] Lighthouse score 90+

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Focus indicators visible
- [ ] Touch targets meet WCAG 2.1
- [ ] Color contrast meets WCAG AA
- [ ] Skip navigation link works

### Final Verification

- [ ] All critical features work on target browsers
- [ ] Graceful degradation on older browsers
- [ ] No console errors in any browser
- [ ] Performance is acceptable on all devices
- [ ] Accessibility requirements met
- [ ] Documentation is accurate and complete

---

## Testing Tools & Resources

### Browser Testing Tools

**Desktop:**
- Chrome DevTools (Device Mode, Lighthouse, Performance)
- Firefox Developer Tools
- Safari Web Inspector
- Edge DevTools

**Mobile:**
- iOS Simulator (Xcode)
- Android Emulator (Android Studio)
- BrowserStack (real device testing)
- Sauce Labs (cross-browser testing)

**Accessibility:**
- axe DevTools
- WAVE Browser Extension
- Lighthouse Accessibility Audit
- VoiceOver (macOS/iOS)
- NVDA (Windows)

### Testing Checklist Tools

- [ ] Physical devices for testing
- [ ] Remote debugging set up (iOS Safari, Android Chrome)
- [ ] Performance monitoring tools
- [ ] Screenshot comparison tools

### Documentation References

- [MDN Browser Compatibility](https://developer.mozilla.org/en-US/docs/Web/API)
- [Can I Use](https://caniuse.com/)
- [CSS Vendor Prefix Guide](https://autoprefixer.github.io/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [iOS Safari Quirks](https://github.com/webkit/webkit)

---

## Reporting Issues

If you find browser compatibility issues:

1. **Document the Issue**
   - Browser name and version
   - Operating system
   - Device model (if mobile)
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots or screen recordings

2. **Check Console**
   - JavaScript errors
   - CSS warnings
   - Network errors
   - Performance warnings

3. **Create Bug Report**
   - Use GitHub Issues
   - Include all documentation from step 1
   - Tag with appropriate labels (browser, mobile, bug)
   - Link to related issues if applicable

4. **Test Workarounds**
   - Try with different browser settings
   - Test with extensions disabled
   - Test in incognito/private mode
   - Test with different network speeds

---

## Conclusion

This comprehensive testing guide ensures Aural UI works consistently across all supported browsers and devices. The recent fixes address 800+ lines of compatibility improvements, including:

- **115+ vendor prefix additions** for Safari, Firefox compatibility
- **397 hover state fixes** for mobile touch devices
- **6 critical iOS Safari fixes** for viewport, safe-area, and fixed positioning
- **100+ JavaScript compatibility improvements** for localStorage and IntersectionObserver
- **Touch target improvements** meeting WCAG 2.1 AAA guidelines
- **Graceful degradation** for older browsers

Follow this guide to verify that all features work correctly across your target platforms. Update the checklist as new browser versions are released and new compatibility issues are discovered.

**Last Updated:** February 16, 2026
**Tested Browsers:** Chrome 88+, Safari 14+, Firefox 89+, Edge 88+, iOS Safari 13+, Android Chrome 88+
**Legacy Support:** Safari 9+, Firefox 55+, Chrome 51+, IE11 (minimal)

---

**Happy Testing!** 🎉
