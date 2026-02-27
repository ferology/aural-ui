# Framework Tabs - Carbon Design System Style Guide

## Overview

The framework tabs have been redesigned with inspiration from IBM's Carbon Design System, featuring clean lines, smooth animations, and professional aesthetics. The new design includes support for all four frameworks: Vanilla JS, React, Vue, and Svelte.

## Visual Design Features

### 1. Clean Underline Active Indicator
- **3px solid underline** in the primary theme color
- Appears below the active tab with a smooth slide-in animation
- Uses `cubic-bezier(0.2, 0, 0.38, 0.9)` timing function (Carbon standard)
- Animation duration: 240ms

### 2. Hover States
- Subtle background color on hover (`rgba(255, 255, 255, 0.05)`)
- Text color brightens to primary text color
- Framework icons increase opacity to 100%
- Smooth 110ms transition

### 3. Typography & Spacing
- Font size: 14px (--text-sm)
- Font weight: 500 (medium)
- Letter spacing: 0.16px
- Padding: 12px vertical, 24px horizontal
- No gaps between tabs (clean, connected look)

### 4. Framework Icons
Each tab includes a visual indicator:
- **Vanilla JS**: "JS" badge with subtle background
- **React**: ⚛ atom symbol
- **Vue**: "V" badge with subtle background
- **Svelte**: 🔥 flame emoji
- Icons fade to 70% opacity on inactive tabs, 100% on active/hover

### 5. Responsive Design
- Horizontal scrolling on mobile devices
- Hidden scrollbars for clean appearance
- Touch-friendly with `-webkit-overflow-scrolling: touch`
- Tabs don't wrap, maintaining consistent layout

## Implementation

### HTML Structure

```html
<div class="framework-tabs">
    <div role="tablist" class="tabs-list">
        <button role="tab" aria-selected="true" aria-controls="vanilla-panel" id="vanilla-tab" class="tab active">
            Vanilla JS
        </button>
        <button role="tab" aria-selected="false" aria-controls="react-panel" id="react-tab" class="tab">
            React
        </button>
        <button role="tab" aria-selected="false" aria-controls="vue-panel" id="vue-tab" class="tab">
            Vue
        </button>
        <button role="tab" aria-selected="false" aria-controls="svelte-panel" id="svelte-tab" class="tab">
            Svelte
        </button>
    </div>

    <div role="tabpanel" id="vanilla-panel" aria-labelledby="vanilla-tab">
        <!-- Vanilla JS code example -->
    </div>

    <div role="tabpanel" id="react-panel" aria-labelledby="react-tab" hidden>
        <!-- React code example -->
    </div>

    <div role="tabpanel" id="vue-panel" aria-labelledby="vue-tab" hidden>
        <!-- Vue code example -->
    </div>

    <div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
        <!-- Svelte code example -->
    </div>
</div>
```

### CSS Classes

- `.framework-tabs` - Container for the entire tab component
- `.tabs-list` - Container for tab buttons (role="tablist")
- `.tab` - Individual tab button
- `.tab.active` - Active/selected tab state
- `[role="tabpanel"]` - Content panels

### JavaScript Integration

The existing `doc-utils.js` handles all tab functionality:

```javascript
// Automatic initialization on page load
DocUtils.init();

// Manual initialization (if needed)
DocUtils.initFrameworkTabs();
```

No changes needed to the JavaScript - it works seamlessly with the new CSS.

## Accessibility Features

### Keyboard Navigation
- **Tab**: Move focus to next tab
- **Shift+Tab**: Move focus to previous tab
- **Enter/Space**: Activate focused tab
- Clear focus indicators (2px outline in primary color)

### ARIA Attributes
- `role="tablist"` on tab container
- `role="tab"` on tab buttons
- `role="tabpanel"` on content panels
- `aria-selected` indicates active tab
- `aria-controls` links tabs to panels
- `aria-labelledby` links panels to tabs

### Screen Readers
- Proper semantic HTML structure
- Descriptive labels for all interactive elements
- Hidden attribute on inactive panels

### Reduced Motion
Users with `prefers-reduced-motion` setting enabled will experience:
- Instant transitions instead of animations
- No sliding or fading effects
- Immediate state changes

## Animation Details

### Tab Activation
```css
/* Active indicator slide-in */
@keyframes slideIn {
    from {
        transform: scaleX(0);
        opacity: 0;
    }
    to {
        transform: scaleX(1);
        opacity: 1;
    }
}
/* Duration: 240ms */
/* Timing: cubic-bezier(0.2, 0, 0.38, 0.9) */
```

### Panel Transitions
```css
/* Content fade-in with upward motion */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
/* Duration: 240ms */
/* Timing: cubic-bezier(0.2, 0, 0.38, 0.9) */
```

## Design Tokens Used

```css
/* Colors */
--color-text-primary: Primary text color
--color-text-secondary: Secondary/inactive text
--color-text-tertiary: Tertiary/muted text
--color-primary: Theme primary color (active indicator)
--color-border-subtle: Bottom border
--color-bg-tertiary: Hover background
--color-bg-hover: Alternative hover background

/* Spacing */
--space-2: 8px (icon margins)
--space-3: 12px (vertical padding)
--space-6: 24px (horizontal padding, margins)

/* Typography */
--text-sm: 14px (font size)
--font-medium: 500 (font weight)
--font-bold: 700 (icon badges)

/* Border Radius */
--radius-sm: 4px (icon badges)
```

## Carbon Design System Inspiration

The design draws from Carbon's principles:

1. **IBM Design Language**: Clean, professional, enterprise-grade
2. **Motion**: Productive motion using cubic-bezier(0.2, 0, 0.38, 0.9)
3. **Typography**: Clear hierarchy with consistent spacing
4. **Color**: Subtle use of color with high contrast for active states
5. **Interaction**: Clear feedback on hover and focus
6. **Accessibility**: WCAG 2.1 Level AA compliant

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with touch support
- Graceful degradation for older browsers

## Performance Considerations

- CSS animations use `transform` and `opacity` (GPU accelerated)
- No JavaScript for visual transitions
- Minimal repaints and reflows
- Smooth 60fps animations

## Customization

### Changing Colors
Override the CSS custom properties:

```css
.framework-tabs {
    --color-primary: #your-color;
}
```

### Adjusting Timing
Modify the transition duration:

```css
.tab {
    transition: all 0.2s cubic-bezier(0.2, 0, 0.38, 0.9);
}
```

### Removing Icons
Hide the framework icons:

```css
.tab::before {
    display: none;
}
```

## Testing Checklist

- [ ] All four tabs (Vanilla, React, Vue, Svelte) are visible
- [ ] Active tab shows underline indicator
- [ ] Hover states work correctly
- [ ] Click switches between tabs smoothly
- [ ] Content panels fade in when activated
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Focus indicators are visible
- [ ] Mobile layout scrolls horizontally
- [ ] Works across all supported browsers
- [ ] Screen readers announce tab changes

## Files Modified

1. **`/docs/styles/page-common.css`**
   - Updated `.framework-tabs` section
   - Added Carbon-inspired animations
   - Enhanced accessibility states

2. **`/docs/components/buttons.html`**
   - Already includes Svelte tab
   - Works with new CSS automatically

3. **`/docs/components/inputs.html`**
   - Already includes Svelte tab
   - Works with new CSS automatically

## Demo

View the interactive demo: `/docs/framework-tabs-demo.html`

## Resources

- [Carbon Design System - Tabs](https://carbondesignsystem.com/components/tabs/usage/)
- [ARIA Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [MDN - ARIA: tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)

## Support

For issues or questions about the framework tabs:
1. Check this guide first
2. Review the demo file
3. Verify CSS is properly loaded
4. Test in different browsers
5. Check browser console for errors
