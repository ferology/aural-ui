# Accessibility Testing Checklist

This checklist ensures Aural UI components meet WCAG 2.1 Level AA standards and provide an excellent experience for all users, including those using assistive technologies.

## Table of Contents
- [Keyboard Navigation](#keyboard-navigation)
- [Screen Reader Support](#screen-reader-support)
- [Color Contrast](#color-contrast)
- [Touch Targets](#touch-targets)
- [Motion & Animation](#motion--animation)
- [Focus Management](#focus-management)
- [Forms & Input](#forms--input)
- [Testing Tools](#testing-tools)

---

## Keyboard Navigation

### General Requirements
- [ ] All interactive elements are reachable via Tab key
- [ ] Tab order follows logical reading order (left to right, top to bottom)
- [ ] Shift+Tab moves backwards through interactive elements
- [ ] No keyboard traps (users can always navigate away from an element)
- [ ] Skip links provided for bypassing repetitive content

### Focus Indicators
- [ ] All focusable elements have visible focus indicators
- [ ] Focus indicators have minimum 2px solid outline
- [ ] Focus indicators have sufficient color contrast (3:1 minimum)
- [ ] Focus indicators are not removed or hidden with CSS
- [ ] Custom focus styles are at least as prominent as browser defaults

### Component-Specific Keyboard Support

**Buttons**
- [ ] Enter key activates buttons
- [ ] Space key activates buttons
- [ ] Disabled buttons cannot receive focus

**Links**
- [ ] Enter key follows links
- [ ] Links have clear, descriptive text (not just "click here")

**Modals/Dialogs**
- [ ] ESC key closes modals
- [ ] Focus trapped within open modal
- [ ] Focus returns to trigger element when modal closes
- [ ] First focusable element receives focus when modal opens

**Dropdowns/Menus**
- [ ] Enter or Space opens dropdown
- [ ] Arrow Up/Down navigate menu items
- [ ] Home/End jump to first/last menu item
- [ ] ESC closes dropdown
- [ ] Type-ahead search works (typing filters items)

**Tabs**
- [ ] Left/Right arrow keys navigate between tabs
- [ ] Home/End jump to first/last tab
- [ ] Tab key moves focus into tab panel
- [ ] Only active tab is in tab order (tabindex="0")
- [ ] Inactive tabs have tabindex="-1"

**Accordions**
- [ ] Enter or Space toggles accordion items
- [ ] Arrow Up/Down navigate between accordion headers
- [ ] Home/End jump to first/last accordion header

**Carousels/Sliders**
- [ ] Arrow Left/Right navigate slides
- [ ] Pause/Play button available for auto-advancing carousels
- [ ] Auto-advance stops on keyboard focus or hover

---

## Screen Reader Support

### Semantic HTML
- [ ] Proper heading hierarchy (h1 → h2 → h3, no skipped levels)
- [ ] Landmark regions used appropriately (`<main>`, `<nav>`, `<aside>`, etc.)
- [ ] Lists use proper `<ul>`, `<ol>`, `<li>` elements
- [ ] Tables use `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` elements
- [ ] Forms use `<form>`, `<label>`, `<fieldset>`, `<legend>` elements

### ARIA Attributes

**Labels & Descriptions**
- [ ] All icon-only buttons have `aria-label` or `aria-labelledby`
- [ ] Complex widgets have `aria-describedby` for additional context
- [ ] Form inputs have associated `<label>` elements
- [ ] Groups of radio buttons/checkboxes use `<fieldset>` and `<legend>`

**Roles**
- [ ] Custom interactive elements have appropriate `role` attributes
- [ ] ARIA roles match semantic HTML when possible
- [ ] `role="button"` used for clickable non-button elements (avoid when possible)
- [ ] `role="dialog"` used for modals
- [ ] `role="alertdialog"` used for modals requiring user action

**States & Properties**
- [ ] Expandable elements use `aria-expanded="true/false"`
- [ ] Hidden content uses `aria-hidden="true"` or `hidden` attribute
- [ ] Current page/section indicated with `aria-current="page/step/location"`
- [ ] Required form fields have `aria-required="true"` or `required` attribute
- [ ] Invalid form fields have `aria-invalid="true"`
- [ ] Disabled elements have `aria-disabled="true"` or `disabled` attribute

**Live Regions**
- [ ] Dynamic content updates use `aria-live="polite"` or `aria-live="assertive"`
- [ ] Toast notifications have `role="status"` or `role="alert"`
- [ ] Loading states have `aria-live="polite"` and `aria-busy="true"`
- [ ] Form validation errors announced to screen readers
- [ ] Success messages announced to screen readers

### Screen Reader Testing

**NVDA (Windows)**
- [ ] Navigate through all components using only NVDA and keyboard
- [ ] All text content is announced
- [ ] All interactive elements are announced with their role
- [ ] States (expanded, checked, selected) are announced
- [ ] Dynamic updates are announced appropriately

**VoiceOver (macOS/iOS)**
- [ ] Navigate through all components using only VoiceOver and keyboard/gestures
- [ ] Rotor navigation works (headings, landmarks, forms)
- [ ] All text content is announced
- [ ] All interactive elements are announced with their role
- [ ] States (expanded, checked, selected) are announced

**JAWS (Windows)**
- [ ] Navigate through all components using only JAWS and keyboard
- [ ] All virtual cursor commands work as expected
- [ ] Forms mode activates appropriately
- [ ] All content is accessible and announced

---

## Color Contrast

### Text Contrast (WCAG AA)
- [ ] Normal text (< 18pt) has 4.5:1 contrast ratio minimum
- [ ] Large text (≥ 18pt or 14pt bold) has 3:1 contrast ratio minimum
- [ ] Text on colored backgrounds meets contrast requirements
- [ ] Placeholder text has 4.5:1 contrast ratio
- [ ] Disabled text is visually distinct but doesn't need to meet contrast ratio

### UI Component Contrast (WCAG 2.1)
- [ ] Graphical objects (icons, graphs) have 3:1 contrast ratio
- [ ] UI component borders/boundaries have 3:1 contrast ratio
- [ ] Focus indicators have 3:1 contrast ratio
- [ ] Active/hover states have 3:1 contrast ratio
- [ ] Form input borders have 3:1 contrast ratio

### Color Independence
- [ ] Color is not the only means of conveying information
- [ ] Success/error states use icons or text in addition to color
- [ ] Links are distinguishable from surrounding text (underline, weight, or icon)
- [ ] Charts/graphs have patterns or labels in addition to colors
- [ ] Required fields indicated with text ("required") not just color

### Testing Tools
- [ ] Test with browser DevTools color picker
- [ ] Test with WebAIM Contrast Checker
- [ ] Test with axe DevTools browser extension
- [ ] Simulate color blindness with browser extensions
  - [ ] Protanopia (red-blind)
  - [ ] Deuteranopia (green-blind)
  - [ ] Tritanopia (blue-blind)
  - [ ] Achromatopsia (total color blindness)

---

## Touch Targets

### Size Requirements (WCAG 2.5.5)
- [ ] All interactive elements are at least 44x44 CSS pixels
- [ ] Buttons meet 44x44px minimum
- [ ] Form inputs meet 44x44px minimum
- [ ] Links in body text can be smaller if sufficient spacing around them
- [ ] Inline links have sufficient spacing (not too close together)

### Spacing
- [ ] Interactive elements have adequate spacing (minimum 8px between targets)
- [ ] No accidental activations due to closely spaced elements
- [ ] Touch targets don't overlap
- [ ] Hit areas extend beyond visible bounds when appropriate

### Mobile Testing
- [ ] Test on actual mobile devices, not just emulators
- [ ] Test with various finger sizes (use testing guides/overlays)
- [ ] Verify no accidental activations when scrolling
- [ ] Verify pinch-to-zoom is not disabled (unless critical)

---

## Motion & Animation

### Respecting User Preferences
- [ ] All animations respect `prefers-reduced-motion: reduce` media query
- [ ] When reduced motion is preferred, animations are either:
  - [ ] Disabled completely, or
  - [ ] Reduced to instant state changes
- [ ] Essential animations (e.g., loading spinners) use minimal, non-moving alternatives

### Animation Safety
- [ ] No animations flash more than 3 times per second
- [ ] No rapid color changes that could trigger seizures
- [ ] Auto-playing videos can be paused
- [ ] Parallax scrolling effects can be disabled
- [ ] Infinite loops have a pause/stop control

### User Control
- [ ] Users can pause, stop, or hide moving content
- [ ] Carousels have play/pause controls
- [ ] Auto-advancing content pauses on hover or focus
- [ ] Content doesn't move for more than 5 seconds (unless user can control it)

---

## Focus Management

### Focus Visibility
- [ ] Current focus position is always visually clear
- [ ] Focus outline is never removed without providing an alternative
- [ ] Focus styles work in both light and dark themes
- [ ] :focus-visible used where appropriate (keyboard only, not mouse clicks)

### Focus Order
- [ ] Tab order matches visual order
- [ ] Modal/dialog focus is trapped while open
- [ ] Focus returns to trigger element when modal closes
- [ ] Dynamically added content is reachable via keyboard
- [ ] Hidden content (display: none) is removed from tab order

### Focus Loss Prevention
- [ ] Focus never gets lost or sent to top of page unexpectedly
- [ ] Deleting focused element moves focus to logical next element
- [ ] Page refreshes maintain focus position when possible
- [ ] AJAX updates don't cause focus loss

---

## Forms & Input

### Labels
- [ ] All form inputs have associated `<label>` elements
- [ ] Labels are programmatically associated (for/id or wrapping)
- [ ] Label text is visible (not hidden or placeholder-only)
- [ ] Multi-word labels are properly worded (not just "Name" but "Full Name")

### Instructions
- [ ] Clear instructions provided before form (not just in placeholders)
- [ ] Password requirements stated upfront
- [ ] Required fields indicated with text and/or asterisk
- [ ] Optional fields indicated when most fields are required
- [ ] Format requirements explained (e.g., "MM/DD/YYYY" for dates)

### Error Handling
- [ ] Error messages are clear and specific
- [ ] Errors are announced to screen readers (aria-live)
- [ ] Error messages appear near the relevant input
- [ ] Errors use text, not just color indicators
- [ ] `aria-invalid="true"` set on invalid inputs
- [ ] `aria-describedby` links inputs to error messages

### Validation
- [ ] Real-time validation doesn't interfere with typing
- [ ] Validation errors appear after blur or submit, not during typing
- [ ] Success indicators shown for valid inputs
- [ ] Form submission prevented until all errors resolved
- [ ] Clear success message shown after successful submission

### Autocomplete
- [ ] Appropriate `autocomplete` attributes used
  - [ ] `autocomplete="name"` for full name
  - [ ] `autocomplete="email"` for email
  - [ ] `autocomplete="tel"` for phone
  - [ ] `autocomplete="street-address"` for address
  - [ ] See [HTML Spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list

---

## Testing Tools

### Automated Testing
- [ ] **Chrome DevTools Lighthouse** - Run accessibility audit
- [ ] **axe DevTools** - Browser extension for in-depth testing
- [ ] **WAVE** - Browser extension for visual feedback
- [ ] **Pa11y** - Command-line accessibility testing
- [ ] **Deque's axe-core** - Library for automated testing in CI/CD

### Manual Testing
- [ ] **Keyboard-only navigation** - Unplug mouse and test
- [ ] **Screen reader testing** - NVDA (Windows), VoiceOver (Mac), JAWS (Windows)
- [ ] **Color contrast** - WebAIM Contrast Checker, Stark plugin
- [ ] **Color blindness simulation** - Chrome DevTools, Color Oracle
- [ ] **Zoom testing** - Test at 200% and 400% zoom levels
- [ ] **Mobile testing** - Test on real devices with various screen sizes

### Browser Testing
- [ ] Test in Chrome/Edge (Chromium)
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in older browsers if supporting IE11

### Assistive Technology Testing
- [ ] **Screen Readers**
  - NVDA + Chrome/Firefox (Windows)
  - JAWS + Chrome/Firefox (Windows)
  - VoiceOver + Safari (macOS)
  - VoiceOver + Safari (iOS)
  - TalkBack + Chrome (Android)
- [ ] **Magnification Software**
  - Windows Magnifier
  - macOS Zoom
  - ZoomText
- [ ] **Voice Control**
  - Dragon NaturallySpeaking (Windows)
  - Voice Control (macOS, iOS)

---

## Resources

### WCAG Guidelines
- [WCAG 2.1 Spec](https://www.w3.org/TR/WCAG21/)
- [WCAG Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/)

### Testing Tools
- [Chrome DevTools Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Oracle](https://colororacle.org/) - Color blindness simulator

### Screen Readers
- [NVDA](https://www.nvaccess.org/download/) (Free, Windows)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/) (Commercial, Windows)
- VoiceOver (Built into macOS and iOS)

### Learning Resources
- [WebAIM](https://webaim.org/)
- [A11ycasts with Rob Dodson](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)
- [The A11Y Project](https://www.a11yproject.com/)
- [Inclusive Components](https://inclusive-components.design/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

---

## Checklist Summary

Before releasing any component:

1. **Keyboard Navigation**: ✓ All interactive elements accessible via keyboard
2. **Screen Reader Support**: ✓ Proper semantic HTML and ARIA attributes
3. **Color Contrast**: ✓ Meets WCAG AA standards (4.5:1 for text, 3:1 for UI)
4. **Touch Targets**: ✓ Minimum 44x44px for all interactive elements
5. **Motion & Animation**: ✓ Respects `prefers-reduced-motion`
6. **Focus Management**: ✓ Clear focus indicators and logical focus order
7. **Forms & Input**: ✓ Proper labels, error handling, and autocomplete

**Testing completed with**:
- [ ] Automated tools (Lighthouse, axe, WAVE)
- [ ] Keyboard-only navigation
- [ ] Screen reader (NVDA, VoiceOver, or JAWS)
- [ ] Color contrast checker
- [ ] Color blindness simulation
- [ ] Mobile devices and touch testing

---

*Last updated: January 2026*
