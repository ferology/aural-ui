# Theme Comparison Guide

This guide explains how to use the multi-theme comparison feature in Storybook to visualize components across all 7 available themes simultaneously.

## Overview

The theme comparison feature allows you to:
- View a single component rendered in all 7 themes side-by-side
- Compare visual consistency across the design system
- Quickly spot theme-specific issues or variations
- Use interactive controls to test different component states across all themes

## Available Themes

1. **Dark** - Default elegant dark theme
2. **Light** - Clean professional daytime theme
3. **Neon** - Cyberpunk vibrant glows
4. **Kinetic** - Brutalist bold motion with energetic lime accents
5. **Prismatic** - Iridescent purples with gradient depth
6. **High Contrast** - Maximum accessibility with bold color separation
7. **Colorblind** - Optimized for color vision deficiencies
8. **Minimal** - Ultra-clean monochrome design
9. **Warm** - Cozy earth tones with amber accents

## Using the Theme Comparison Stories

### Button Component Example

The Button component has two theme comparison stories:

1. **AllThemes** - Shows a primary button across all themes
2. **ThemeComparison** - Interactive story with controls to test different variants

To view:
1. Run `npm run storybook`
2. Navigate to **Components > Button** in the sidebar
3. Select **AllThemes** or **ThemeComparison**

### ThemeComparison Controls

Use the Controls panel to adjust:
- **variant**: primary, secondary, outline, ghost, danger, success
- **size**: sm, md, lg
- **label**: Button text
- **loading**: Toggle loading state
- **disabled**: Toggle disabled state
- **icon**: Add emoji or text icon

## Adding Theme Comparison to Other Components

### Basic Pattern

```typescript
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

export const AllThemes: Story = {
  render: () => {
    return createThemeGrid(() => {
      // Create your component element
      const element = document.createElement('div');
      element.className = 'your-component-class';
      element.textContent = 'Your Content';
      return element;
    });
  }
};
```

### With Interactive Controls

```typescript
export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const element = document.createElement('div');
      element.className = `component ${args.variant}`;
      element.textContent = args.label;

      if (args.disabled) {
        element.classList.add('disabled');
      }

      return element;
    });
  },
  args: {
    variant: 'default',
    label: 'Example',
    disabled: false
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
      description: 'Component variant'
    },
    label: {
      control: 'text',
      description: 'Component text'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    }
  }
};
```

## API Reference

### `createThemeGrid(renderComponent, options?)`

Creates a responsive grid displaying a component across all themes.

**Parameters:**
- `renderComponent: (theme: string) => HTMLElement` - Function that receives a theme ID and returns the component to display
- `options?: { columns?: string; gap?: string }` - Optional grid layout configuration
  - `columns`: CSS grid-template-columns value (default: `'repeat(auto-fit, minmax(280px, 1fr))'`)
  - `gap`: Grid gap value (default: `'2rem'`)

**Returns:**
- `HTMLElement` - The complete theme comparison grid

**Example with custom layout:**

```typescript
createThemeGrid(
  (theme) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>Theme: ${theme}</h3>`;
    return card;
  },
  {
    columns: 'repeat(3, 1fr)', // Force 3 columns
    gap: '1.5rem'               // Smaller gap
  }
);
```

## How It Works

### Theme Isolation

Each theme is rendered in an isolated container with:
1. A `data-theme` attribute set to the theme ID
2. A `<link>` tag loading the theme's CSS file (`/themes/${theme}.css`)
3. CSS custom properties (CSS variables) scoped to the container

This ensures:
- No CSS conflicts between themes
- Each theme's variables are properly applied
- Themes don't affect each other

### Responsive Layout

The grid uses CSS Grid with `auto-fit` to:
- Display multiple themes per row on larger screens
- Stack themes vertically on mobile devices
- Automatically adjust based on available space

### Theme Loading

Each theme container loads its CSS independently:

```typescript
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = `/themes/${theme.id}.css`;
container.appendChild(link);
```

This allows CSS variables to cascade properly within each container.

## Best Practices

1. **Keep Components Simple** - Theme comparison works best with focused component examples
2. **Test All Variants** - Use the ThemeComparison story to verify all states work across themes
3. **Check Contrast** - Use theme comparison to spot accessibility issues in different themes
4. **Responsive Testing** - Resize the browser to see how themes stack on smaller screens
5. **Use Controls** - Interactive controls make it easy to test edge cases across all themes

## Verification Checklist

When adding theme comparison to a component:

- [ ] All 7 themes render without errors
- [ ] Theme-specific colors and styles are visible
- [ ] Theme labels are clearly displayed
- [ ] Layout is responsive on different screen sizes
- [ ] Controls (if added) update all theme instances
- [ ] No console errors or CSS conflicts
- [ ] Component is centered and properly sized in each theme box

## Future Extensions

This pattern can be extended to:
- **Card components** - Show card layouts across themes
- **Alert components** - Compare alert variants and severities
- **Navigation components** - Test menu items and active states
- **Form components** - Verify input fields and validation states
- **Typography components** - Compare text styles and hierarchies

## Troubleshooting

### Theme not displaying correctly
- Verify the theme CSS file exists in `/themes/${theme}.css`
- Check the browser console for 404 errors
- Ensure CSS variables are properly defined in the theme file

### Layout issues
- Adjust the `columns` option for fixed-width layouts
- Modify `gap` for spacing adjustments
- Check that the component fits within the `min-height: 120px` container

### CSS conflicts
- Verify `data-theme` attribute is set on the container
- Check that CSS variables are scoped to `[data-theme="..."]`
- Ensure theme CSS is loaded before rendering the component

## Support

For issues or questions:
1. Check this documentation
2. Review the Button.stories.ts implementation
3. Examine the createThemeGrid.ts source code
4. Test in the Storybook UI at http://localhost:6006
