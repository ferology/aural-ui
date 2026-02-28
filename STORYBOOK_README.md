# Aural UI Storybook

Interactive component documentation with live examples and theme switching.

## Setup

### 1. Install Dependencies

First, install Storybook and its dependencies:

```bash
npm install
```

This will install all required Storybook packages including:
- `@storybook/html-vite` - Storybook for vanilla HTML/JS
- `@storybook/addon-essentials` - Essential addons (controls, docs, actions)
- `@storybook/addon-a11y` - Accessibility testing
- `@storybook/addon-themes` - Theme switching support
- `@storybook/addon-interactions` - Interaction testing

### 2. Run Storybook

Start the Storybook development server:

```bash
npm run storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006)

### 3. Build Storybook

To build a static version of Storybook:

```bash
npm run build-storybook
```

The built files will be in the `storybook-static` directory.

## Features

### 🎨 Theme Switching

Use the theme toolbar dropdown to switch between all 7 available themes:
- **Dark** (default) - Elegant dark theme
- **Light** - Clean light theme
- **Neon** - Vibrant neon aesthetic
- **Kinetic** - Dynamic gradient theme
- **Prismatic** - Colorful prismatic theme
- **Minimal** - Minimalist grayscale theme
- **Warm** - Warm, inviting color palette

### ♿ Accessibility Testing

The a11y addon automatically checks components for accessibility violations:
- Color contrast ratios
- ARIA attributes
- Keyboard navigation
- Focus management

View accessibility results in the "Accessibility" panel.

### 📖 Component Documentation

Each component story includes:
- **Canvas** - Live component preview
- **Controls** - Interactive props/args panel
- **Actions** - Event logging
- **Docs** - Auto-generated documentation

## Story Structure

Stories are organized by component:

```
stories/
├── Introduction.mdx          # Getting started guide
├── Button.stories.ts         # Button component
├── Modal.stories.ts          # Modal component
├── Input.stories.ts          # Input component
├── DatePicker.stories.ts     # DatePicker component
└── ...                       # More components
```

## Writing New Stories

### Basic Story Example

```typescript
import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/MyComponent',
  tags: ['autodocs'],
  argTypes: {
    // Define controls
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    // Create and return DOM element
    const el = document.createElement('div');
    el.textContent = 'Hello World';
    return el;
  },
  args: {
    // Default args
  }
};
```

## Configuration

### Storybook Config

- **`.storybook/main.ts`** - Storybook configuration (addons, framework, stories)
- **`.storybook/preview.ts`** - Global decorators and parameters (themes, CSS imports)

### Theme Configuration

Themes are configured in `.storybook/preview.ts`:

```typescript
withThemeByDataAttribute({
  themes: {
    Dark: 'dark',
    Light: 'light',
    Neon: 'neon',
    Kinetic: 'kinetic',
    Prismatic: 'prismatic',
    Minimal: 'minimal',
    Warm: 'warm'
  },
  defaultTheme: 'Dark',
  attributeName: 'data-theme'
})
```

## Tips

- Use the **Controls** panel to interactively change component props
- Check the **Actions** panel to see event callbacks
- Use the **Accessibility** panel to ensure WCAG compliance
- Switch themes using the toolbar dropdown
- Use the **Docs** tab for auto-generated documentation

## Troubleshooting

### Storybook won't start

- Make sure all dependencies are installed: `npm install`
- Check that ports 6006 is available
- Clear cache: `rm -rf node_modules/.cache`

### Styles not loading

- Verify CSS imports in `.storybook/preview.ts`
- Check that build process has run: `npm run build`
- Ensure theme CSS files exist in `themes/` directory

### Components not initializing

- Check that `javascript/index.js` is imported in preview
- Verify `window.Aural` is available
- Add initialization delays in stories if needed

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Aural UI Documentation](https://ferology.github.io/aural-ui/)
- [Component Examples](https://ferology.github.io/aural-ui/docs/demo.html)
