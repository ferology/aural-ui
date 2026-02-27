# Live Preview System - Quick Start Guide

Get your component documentation pages updated with live, interactive previews in minutes.

## What You Get

- Live, interactive component demos
- Framework tabs (Vanilla JS, React, Vue, Svelte)
- Automatic theme synchronization
- Copy-to-clipboard functionality
- Mobile-responsive design
- Full accessibility support

## 5-Minute Setup

### Step 1: Update Your Component Page HTML

Add the preview system CSS to your page head:

```html
<head>
  <!-- Existing CSS -->
  <link rel="stylesheet" href="../aural-ui.css">
  <link rel="stylesheet" href="../dark.css" id="theme-link">

  <!-- ADD THIS: Preview System CSS -->
  <link rel="stylesheet" href="../styles/preview-system.css">
</head>
```

### Step 2: Add Preview Containers

Replace static examples with live preview containers:

```html
<!-- OLD: Static example -->
<div class="example-demo">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
</div>

<!-- NEW: Live preview -->
<div class="live-preview"
     data-component="Button"
     data-example="primary-buttons"
     data-frameworks="vanilla,react,vue,svelte">
</div>
```

### Step 3: Initialize the Preview System

Add this script block at the end of your page, before closing `</body>`:

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

### Step 4: Create Example Definitions

Create `/docs/js/preview-examples/button-examples.js`:

```javascript
export const examples = {
  'primary-buttons': {
    title: 'Button Variants',
    description: 'Different button styles',

    vanilla: {
      html: `
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
      `,
      css: '',
      js: ''
    },

    react: {
      code: `
import { Button } from '@aural-ui/react';

function Example() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </>
  );
}
      `
    },

    vue: {
      code: `
<template>
  <AuralButton variant="primary">Primary</AuralButton>
  <AuralButton variant="secondary">Secondary</AuralButton>
</template>

<script setup>
import { AuralButton } from '@aural-ui/vue';
</script>
      `
    },

    svelte: {
      code: `
<script>
  import { Button } from '@aural-ui/svelte';
</script>

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
      `
    }
  }
};
```

### Step 5: Test It!

Open your page in a browser (use a local server, not `file://`):

```bash
cd docs
python -m http.server 3000
open http://localhost:3000/components/your-component.html
```

You should see:
- Live, clickable buttons
- Framework tabs to switch between implementations
- Code display with syntax highlighting
- Copy button that works

## Data Attribute Reference

### `data-component` (required)
The component name, which must match your example file.

**Example:** `data-component="Button"` → looks for `button-examples.js`

### `data-example` (required)
The example ID from your examples object.

**Example:** `data-example="primary-buttons"` → `examples['primary-buttons']`

### `data-frameworks` (required)
Comma-separated list of frameworks to show tabs for.

**Example:** `data-frameworks="vanilla,react,vue"`

Only tabs for listed frameworks will appear. Good for:
- Showing only implemented frameworks
- Hiding complex examples from certain frameworks
- Progressive rollout (start with vanilla, add others later)

## Common Patterns

### Simple Static Example

```javascript
'button-sizes': {
  title: 'Button Sizes',
  description: 'Small, medium, and large',
  vanilla: {
    html: `
      <button class="btn btn-sm">Small</button>
      <button class="btn">Medium</button>
      <button class="btn btn-lg">Large</button>
    `
  },
  react: { code: `...` },
  vue: { code: `...` }
}
```

### Interactive Example with State

```javascript
'interactive-counter': {
  title: 'Counter Button',
  description: 'Click to increment',
  vanilla: {
    html: `
      <button class="btn" onclick="increment()">Count: <span id="count">0</span></button>
    `,
    js: `
      let count = 0;
      function increment() {
        count++;
        document.getElementById('count').textContent = count;
      }
    `
  },
  react: {
    code: `
import { Button } from '@aural-ui/react';
import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={() => setCount(count + 1)}>
      Count: {count}
    </Button>
  );
}
    `
  }
}
```

### Example with Custom CSS

```javascript
'styled-buttons': {
  title: 'Custom Styled Buttons',
  vanilla: {
    html: `<button class="btn custom-btn">Styled</button>`,
    css: `
      .custom-btn {
        background: linear-gradient(135deg, #667eea, #764ba2);
        border: none;
      }
    `
  }
}
```

### Example with Icons

```javascript
'icon-buttons': {
  title: 'Buttons with Icons',
  vanilla: {
    html: `
      <button class="btn btn-primary">
        <i data-lucide="plus"></i>
        Add Item
      </button>
    `,
    js: `
      // Icons auto-initialize
    `
  }
}
```

## Framework-Specific Tips

### Vanilla JS
- Use inline event handlers or initialization code
- Icons (Lucide) are automatically initialized
- Keep JavaScript simple and self-contained

### React
- Import from `@aural-ui/react` (automatically provided)
- `useState`, `useEffect` available from `react`
- Wrap in a function component
- JSX is automatically transformed

### Vue
- Use `<template>` and `<script setup>` format
- Import from `@aural-ui/vue` (automatically provided)
- `ref`, `computed` available from `vue`
- Components auto-registered in preview

### Svelte
- Use standard Svelte syntax
- Import from `@aural-ui/svelte`
- Pre-compilation coming soon (currently shows code only)

## Troubleshooting

### "Example not found" error
- Check file name: `button-examples.js` for `Button` component
- Check example ID matches: `'primary-buttons'` in both HTML and JS
- Check file is in `js/preview-examples/` directory

### Preview shows but code doesn't update
- Make sure example has code for selected framework
- Check browser console for errors
- Verify framework name in `data-frameworks` matches example key

### iframe height issues
- Auto-resize is enabled by default
- For fixed height: add CSS `.preview-sandbox { height: 200px; }`
- Check for cross-origin errors in console

### Copy button not working
- Clipboard API requires HTTPS or localhost
- Check browser permissions
- Use a local server, not `file://` protocol

### Theme not syncing
- Verify `theme-manager.js` is loaded
- Check `AuralThemeManager` is available globally
- Preview system listens to theme changes automatically

## Best Practices

### 1. Keep Examples Focused
Show one concept per example. Don't combine too many features.

**Good:**
```javascript
'button-variants': { ... }  // Just variants
'button-sizes': { ... }     // Just sizes
```

**Bad:**
```javascript
'everything': { ... }  // Variants, sizes, icons, states all in one
```

### 2. Add Helpful Descriptions
```javascript
{
  title: 'Button Variants',
  description: 'Use primary for main actions, secondary for less important actions'
}
```

### 3. Test All Frameworks
If you add a framework to `data-frameworks`, provide code for it.

### 4. Use Consistent Styling
Match the existing documentation style. Use CSS custom properties.

### 5. Make Examples Interactive
When possible, show interactions (clicks, hovers, state changes).

### 6. Consider Mobile
Test preview on small screens. Keep examples simple on mobile.

## Next Steps

1. **Start Simple**: Convert one component page (like Buttons)
2. **Test Thoroughly**: Check all frameworks and themes
3. **Add More**: Once comfortable, convert other components
4. **Get Feedback**: Ask users which previews are most helpful
5. **Iterate**: Improve based on usage patterns

## Examples to Reference

- `/docs/components/buttons-preview.html` - Full working example
- `/docs/js/preview-examples/button-examples.js` - Complete example definitions
- `/docs/LIVE_PREVIEW_SYSTEM.md` - Detailed architecture documentation

## Support

Questions? Check:
- `/docs/js/preview-system/README.md` - Full API reference
- Browser console for error messages
- Example implementations for patterns

## Checklist for Adding Previews

- [ ] Add preview system CSS to page head
- [ ] Create example definitions file
- [ ] Add `data-component`, `data-example`, `data-frameworks` attributes
- [ ] Initialize PreviewManager with `<script type="module">`
- [ ] Test in local server (not `file://`)
- [ ] Verify all framework tabs work
- [ ] Test theme switching
- [ ] Check mobile responsiveness
- [ ] Verify copy button works
- [ ] Test keyboard navigation
- [ ] Check browser console for errors

That's it! You're ready to add live previews to your documentation.
