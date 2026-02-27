# Testing Aural UI Locally

This guide explains how to test the Aural UI framework packages locally.

## Quick Start - React Demo

The easiest way to test all React components:

```bash
# From the root directory
npm run demo:react
```

This will start a Vite dev server at **http://localhost:3000** with a live demo of all 14 components.

## What's Included

The demo showcases:
- ✅ Modal, Toast, Button
- ✅ Dropdown, Tabs, Accordion
- ✅ Tooltip, Popover
- ✅ Drawer, Select
- ✅ Carousel (with autoplay)
- ✅ DatePicker
- ✅ Stepper
- ✅ CommandPalette (⌘K)

All components are interactive with live state updates and hot module reload.

## Manual Setup

If you want to create your own test app:

```bash
# Install local packages using file: protocol
npm install file:./packages/core
npm install file:./packages/react
```

Then import the CSS and components:

```jsx
import '@aural-ui/core/dist/aural-ui.css';
import { Modal, Button } from '@aural-ui/react';
```

## Testing Other Frameworks

### Vue
```bash
cd examples
# Create vue-demo following same pattern as react-demo
```

### Svelte
```bash
cd examples  
# Create svelte-demo following same pattern as react-demo
```

## Common Issues

**Components not styled?**
→ Import CSS: `import '@aural-ui/core/dist/aural-ui.css';`

**Changes not reflecting?**
→ Rebuild packages: `npm run build`

**TypeScript errors?**
→ Check declarations exist: `ls packages/react/dist/index.d.ts`

## Browser Testing

Open http://localhost:3000 and test:
- Click interactions
- Keyboard navigation
- Escape key behavior
- Focus trapping
- Responsive behavior
