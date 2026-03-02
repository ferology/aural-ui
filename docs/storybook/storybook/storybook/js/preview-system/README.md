# Live Component Preview System

A powerful, framework-agnostic live preview system for Aural UI documentation that supports Vanilla JS, React, Vue, and Svelte.

## Overview

The preview system renders interactive, working components in sandboxed iframes with full theme support and code display. Users can switch between frameworks to see equivalent implementations and copy code with one click.

## Architecture

```
PreviewManager (Orchestrator)
    ├── VanillaRenderer  (HTML/CSS/JS)
    ├── ReactRenderer    (React 18 + ESM CDN)
    ├── VueRenderer      (Vue 3 + ESM CDN)
    └── SvelteRenderer   (Svelte + compiler)

Example Definitions (button-examples.js, input-examples.js, etc.)
    └── Define code for each framework

Preview UI
    ├── Framework tabs
    ├── Live preview iframe
    ├── Code display
    └── Copy button
```

## Quick Start

### 1. Include Required Files

```html
<!-- CSS -->
<link rel="stylesheet" href="../aural-ui.css">
<link rel="stylesheet" href="../dark.css" id="theme-link">
<link rel="stylesheet" href="../styles/preview-system.css">

<!-- JavaScript -->
<script src="../aural-ui.js"></script>
<script src="../js/theme-manager.js"></script>
```

### 2. Add Preview Containers

```html
<div class="live-preview"
     data-component="Button"
     data-example="primary-buttons"
     data-frameworks="vanilla,react,vue,svelte">
</div>
```

### 3. Initialize Preview System

```html
<script type="module">
  import PreviewManager from '../js/preview-system/PreviewManager.js';

  PreviewManager.init({
    defaultFramework: 'vanilla',
    theme: 'dark',
    showCode: true
  });
</script>
```

## Creating Example Definitions

Create a file in `js/preview-examples/[component]-examples.js`:

```javascript
export const examples = {
  'example-id': {
    title: 'Example Title',
    description: 'Example description',

    // Vanilla JS
    vanilla: {
      html: '<button class="btn btn-primary">Click me</button>',
      css: '',
      js: ''
    },

    // React
    react: {
      code: `
import { Button } from '@aural-ui/react';

function Example() {
  return <Button variant="primary">Click me</Button>;
}
      `
    },

    // Vue
    vue: {
      code: `
<template>
  <AuralButton variant="primary">Click me</AuralButton>
</template>

<script setup>
import { AuralButton } from '@aural-ui/vue';
</script>
      `
    },

    // Svelte
    svelte: {
      code: `
<script>
  import { Button } from '@aural-ui/svelte';
</script>

<Button variant="primary">Click me</Button>
      `
    }
  }
};
```

## API Reference

### PreviewManager.init(options)

Initialize the preview system.

**Options:**
- `defaultFramework` (string): Initial framework to display (`'vanilla'`, `'react'`, `'vue'`, `'svelte'`)
- `theme` (string): Initial theme (`'dark'`, `'light'`, etc.)
- `showCode` (boolean): Show code display section (default: `true`)
- `editable` (boolean): Enable code editing (default: `false`)
- `autoHeight` (boolean): Auto-resize iframes to content (default: `true`)

### Data Attributes

**`data-component`** (required)
Component name, must match example file name (e.g., `"Button"` → `button-examples.js`)

**`data-example`** (required)
Example ID from the examples object

**`data-frameworks`** (required)
Comma-separated list of frameworks to show (e.g., `"vanilla,react,vue"`)

## Features

### Framework Support

- **Vanilla JS**: Direct HTML injection, no compilation needed
- **React**: Uses React 18 from ESM CDN, JSX transformation
- **Vue**: Uses Vue 3 from ESM CDN, SFC parsing
- **Svelte**: Pre-compiled components (planned)

### Theme Integration

Automatically syncs with theme changes via `AuralThemeManager`:

```javascript
// Previews update automatically when theme changes
window.AuralThemeManager.applyTheme('neon');
```

### Interactive Examples

Support for state management and event handlers:

```javascript
// React example with state
react: {
  code: `
import { Button } from '@aural-ui/react';
import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </Button>
  );
}
  `
}
```

### Code Copying

Built-in clipboard functionality with visual feedback:
- Click "Copy" button
- Shows "Copied!" confirmation
- Automatically reverts after 2 seconds

### Accessibility

- Proper ARIA labels and roles
- Keyboard navigation (Tab, Enter, Space)
- Screen reader announcements
- Focus indicators
- Reduced motion support

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Requires ES modules support and `import` statements.

## Performance

### Bundle Sizes
- PreviewManager: ~8 KB (gzipped)
- VanillaRenderer: ~2 KB (gzipped)
- ReactRenderer: ~4 KB (gzipped)
- VueRenderer: ~4 KB (gzipped)
- CSS: ~3 KB (gzipped)

### Optimization Strategies
- Lazy loading of framework renderers
- Example caching in memory
- Debounced iframe resizing
- Automatic cleanup on destroy

## Troubleshooting

### Preview not rendering

Check browser console for errors. Common issues:
1. Missing example definition file
2. Incorrect component or example ID
3. Framework not included in data-frameworks
4. Module import errors

### Iframe sizing issues

The auto-resize feature requires same-origin access. If using `file://` protocol:
1. Use a local server (`python -m http.server`)
2. Or set manual height with CSS

### Theme not syncing

Ensure `theme-manager.js` is loaded before preview system:

```html
<script src="../js/theme-manager.js"></script>
<script type="module" src="../js/preview-system/PreviewManager.js"></script>
```

### Code not copying

Check browser permissions:
- Clipboard API requires HTTPS or localhost
- Some browsers block clipboard access in iframes

## Advanced Usage

### Custom Renderers

Create a custom renderer by extending the base pattern:

```javascript
class CustomRenderer {
  async render(container, exampleCode, options) {
    // Your rendering logic
  }

  destroy() {
    // Cleanup
  }
}

// Register with PreviewManager
PreviewManager.renderers.set('custom', new CustomRenderer());
```

### Manual Refresh

Force refresh of all previews:

```javascript
await PreviewManager.refreshPreviews();
```

### Programmatic Control

```javascript
// Get active framework
const framework = PreviewManager.activeFramework;

// Change theme
PreviewManager.theme = 'neon';
await PreviewManager.refreshPreviews();

// Access examples
const example = await PreviewManager.loadExample('Button', 'primary-buttons');
```

## Development

### Running Locally

```bash
# Start local server
cd docs
python -m http.server 3000

# Open in browser
open http://localhost:3000/components/buttons-preview.html
```

### Testing

```bash
# Run tests (when implemented)
npm test

# Visual regression tests
npm run test:visual
```

### Adding New Components

1. Create example file: `js/preview-examples/[component]-examples.js`
2. Define examples for each framework
3. Add preview containers to component page
4. Test all frameworks and themes

## Roadmap

- [ ] Svelte compiler integration
- [ ] Live code editing
- [ ] Code playground page
- [ ] Export to CodeSandbox
- [ ] Syntax highlighting with Prism.js
- [ ] TypeScript support
- [ ] Component search/filter
- [ ] Mobile touch gestures
- [ ] Performance monitoring
- [ ] A11y audit integration

## Contributing

When adding examples:
1. Keep code simple and focused
2. Follow framework best practices
3. Test with all supported themes
4. Add descriptive titles and descriptions
5. Ensure accessibility (ARIA, keyboard nav)
6. Update this README if needed

## License

Part of Aural UI - same license applies.

## Support

For issues or questions:
- GitHub Issues: [link]
- Documentation: [link]
- Discord: [link]
