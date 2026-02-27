# Aural UI - Comprehensive Documentation

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Architecture](#architecture)
4. [Components Reference](#components-reference)
5. [Framework Integration](#framework-integration)
6. [API Reference](#api-reference)
7. [Theming](#theming)
8. [Accessibility](#accessibility)
9. [Best Practices](#best-practices)
10. [Troubleshooting](#troubleshooting)

---

## Overview

### What is Aural UI?

Aural UI is a modern, accessible design system featuring:
- **60+ components** in vanilla JavaScript
- **14 priority components** with React, Vue, and Svelte wrappers
- **4 pre-built themes** (Dark, Light, Neon, Kinetic)
- **Design tokens** for easy customization
- **Utility classes** for rapid development
- **TypeScript definitions** for type safety
- **WCAG 2.1 AA compliant** accessibility

### Key Features

✅ **Framework Agnostic Core** - 4,977 lines of battle-tested vanilla JavaScript
✅ **Small Bundle Sizes** - React: 12KB, Vue: 6KB, Svelte: 16KB (gzipped)
✅ **Thin Wrapper Pattern** - Single source of truth, consistent behavior
✅ **Native Framework APIs** - Hooks, composables, stores, directives
✅ **SSR Compatible** - Dynamic imports prevent hydration issues
✅ **Accessible by Default** - ARIA attributes, keyboard navigation, focus management
✅ **Theme Ready** - CSS variables for easy customization

### Philosophy

Aural UI follows these principles:
1. **Accessibility First** - Every component is keyboard-navigable and screen-reader friendly
2. **Performance** - Minimal JavaScript, CSS-first approach, tree-shakeable
3. **Developer Experience** - Intuitive APIs, TypeScript support, comprehensive docs
4. **Consistency** - Single vanilla core ensures identical behavior across frameworks
5. **Flexibility** - Design tokens and utility classes for easy customization

---

## Installation

### React

```bash
npm install @aural-ui/react @aural-ui/core
```

```jsx
import { AuralProvider, Modal, Button } from '@aural-ui/react';
import '@aural-ui/core/css';

function App() {
  return (
    <AuralProvider>
      {/* Your components */}
    </AuralProvider>
  );
}
```

### Vue

```bash
npm install @aural-ui/vue @aural-ui/core
```

```javascript
// main.js
import { createApp } from 'vue';
import AuralUI from '@aural-ui/vue';
import '@aural-ui/core/css';

const app = createApp(App);
app.use(AuralUI);
app.mount('#app');
```

```vue
<template>
  <AuralModal v-model="open" title="My Modal">
    <p>Content</p>
  </AuralModal>
</template>
```

### Svelte

```bash
npm install @aural-ui/svelte @aural-ui/core
```

```javascript
// main.js
import App from './App.svelte';
import '@aural-ui/core/css';

const app = new App({ target: document.getElementById('app') });
```

```svelte
<script>
  import { Modal, Button } from '@aural-ui/svelte';
  let open = false;
</script>

<Modal bind:open title="My Modal">
  <p>Content</p>
</Modal>
```

---

## Architecture

### Thin Wrapper Pattern

Aural UI uses a unique architecture where framework-specific wrappers wrap a vanilla JavaScript core:

```
┌─────────────────────────────────────┐
│   Framework Layer (React/Vue/Svelte) │
│   - Native APIs (hooks/composables)  │
│   - Framework patterns (v-model/bind)│
│   - TypeScript definitions           │
└──────────────┬──────────────────────┘
               │ wraps
┌──────────────▼──────────────────────┐
│   Vanilla JS Core (@aural-ui/core)  │
│   - 4,977 lines of business logic    │
│   - Component initialization          │
│   - Event handling                    │
│   - State management                  │
│   - Accessibility features            │
└──────────────┬──────────────────────┘
               │ uses
┌──────────────▼──────────────────────┐
│   CSS Layer                          │
│   - Design tokens                    │
│   - Component styles                 │
│   - Themes                           │
│   - Utilities                        │
└─────────────────────────────────────┘
```

### Benefits

1. **Single Source of Truth** - Fix bugs once, works everywhere
2. **Consistent Behavior** - Identical functionality across frameworks
3. **Small Wrappers** - Framework code only handles API translation (6-16KB)
4. **Easy Maintenance** - Core updates automatically benefit all frameworks
5. **Framework Best Practices** - Each wrapper uses idiomatic patterns

### Package Structure

```
@aural-ui/
├── core/              # Vanilla JS + CSS
│   ├── dist/
│   │   ├── aural-ui.js       (153 KB)
│   │   ├── aural-ui.mjs      (169 KB)
│   │   ├── aural-ui.min.js   (79 KB)
│   │   └── aural-ui.css
│   ├── themes/
│   ├── utilities/
│   └── types/
│
├── react/             # React wrappers
│   ├── dist/
│   │   ├── index.js          (32 KB)
│   │   ├── index.mjs         (49 KB, 12 KB gzipped)
│   │   └── index.d.ts
│   └── src/
│       ├── components/
│       ├── hooks/
│       └── context/
│
├── vue/               # Vue wrappers
│   ├── dist/
│   │   ├── index.js          (26 KB)
│   │   ├── index.mjs         (31 KB, 6 KB gzipped)
│   │   └── index.d.ts
│   └── src/
│       ├── components/
│       ├── composables/
│       └── directives/
│
└── svelte/            # Svelte wrappers
    ├── dist/
    │   ├── index.js          (44 KB)
    │   ├── index.mjs         (75 KB, 16 KB gzipped)
    │   └── index.d.ts
    └── src/
        ├── components/
        ├── actions/
        └── stores/
```

---

## Components Reference

### Available Components (14/14)

| Component | Description | Framework Support |
|-----------|-------------|-------------------|
| **Modal** | Overlay dialog with backdrop | React, Vue, Svelte |
| **Toast** | Notification popups | React, Vue, Svelte |
| **Button** | Interactive button | React, Vue, Svelte |
| **Dropdown** | Menu with actions | React, Vue, Svelte |
| **Tabs** | Tabbed interface | React, Vue, Svelte |
| **Accordion** | Collapsible sections | React, Vue, Svelte |
| **Tooltip** | Hover tooltips | React, Vue, Svelte |
| **Popover** | Click-triggered content | React, Vue, Svelte |
| **Drawer** | Side panel | React, Vue, Svelte |
| **Select** | Custom dropdown with search | React, Vue, Svelte |
| **Carousel** | Image/content slider | React, Vue, Svelte |
| **DatePicker** | Calendar date selection | React, Vue, Svelte |
| **Stepper** | Multi-step progress | React, Vue, Svelte |
| **CommandPalette** | ⌘K command interface | React, Vue, Svelte |

### Component Status

✅ **Production Ready** - All 14 components
✅ **TypeScript Support** - Full type definitions
✅ **Accessibility** - WCAG 2.1 AA compliant
✅ **Cross-browser** - Chrome 90+, Firefox 88+, Safari 14+

---

## Framework Integration

### React Patterns

#### Controlled Components
```jsx
const [open, setOpen] = useState(false);

<Modal isOpen={open} onClose={() => setOpen(false)} />
```

#### Hooks
```jsx
const { showToast } = useToast();
const { currentIndex, next, prev } = useCarousel('carousel-1');
const { isOpen, toggle } = useCommandPalette();
```

#### Context Provider
```jsx
<AuralProvider autoInit={true}>
  <App />
</AuralProvider>
```

### Vue Patterns

#### v-model Binding
```vue
<AuralModal v-model="open" title="Modal" />
<AuralDatePicker v-model="date" />
```

#### Composables
```javascript
const { isOpen, open, close } = useModal('modal-1');
const { currentIndex, next, prev } = useCarousel('carousel-1');
```

#### Global Registration
```javascript
app.use(AuralUI, {
  prefix: 'Aural',  // AuralModal, AuralButton, etc.
  autoInit: true
});
```

### Svelte Patterns

#### Two-way Binding
```svelte
<Modal bind:open title="Modal" />
<DatePicker bind:value={date} />
```

#### Stores
```javascript
import { createModalStore, toast } from '@aural-ui/svelte';

const modalStore = createModalStore();
$modalStore.open();

toast.show('Message', 'success');
```

#### Actions
```svelte
<div use:tooltip="Tooltip text">Hover me</div>
```

---

## API Reference

### Modal

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` / `modelValue` / `open` | boolean | false | Controls visibility |
| `onClose` / `@close` / `on:close` | function | - | Close callback |
| `title` | string | - | Modal title |
| `id` | string | auto | Element ID |
| `showCloseButton` | boolean | true | Show X button |
| `closeOnBackdrop` | boolean | true | Close on backdrop click |
| `closeOnEscape` | boolean | true | Close on Escape key |

**Keyboard:**
- `Escape` - Closes modal
- `Tab` - Focus trap within modal

**Accessibility:**
- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby` for title
- Focus trap on open
- Return focus on close

### Carousel

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `slides` | array | [] | Slide objects [{id, content}] |
| `autoplay` | boolean | false | Auto-advance slides |
| `autoplayDelay` | number | 5000 | Delay in milliseconds |
| `loop` | boolean | true | Loop back to first |
| `perView` | number | 1 | Slides visible at once |
| `fade` | boolean | false | Fade transition |
| `showDots` | boolean | true | Show dot indicators |
| `showArrows` | boolean | true | Show prev/next arrows |
| `showCounter` | boolean | false | Show slide counter |
| `currentIndex` | number | 0 | Active slide index |
| `onChange` | function | - | Slide change callback |

**Keyboard:**
- `ArrowLeft` - Previous slide
- `ArrowRight` - Next slide

**Methods (via hook/composable):**
```javascript
const { next, prev, goTo, play, pause } = useCarousel('carousel-1');
```

### DatePicker

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` / `modelValue` | Date \| null | null | Selected date |
| `onChange` / `@change` | function | - | Date change callback |
| `format` | string | 'YYYY-MM-DD' | Display format |
| `minDate` | Date \| null | null | Minimum date |
| `maxDate` | Date \| null | null | Maximum date |
| `disabledDates` | Date[] | [] | Array of disabled dates |
| `placeholder` | string | 'Select a date' | Input placeholder |
| `disabled` | boolean | false | Disable input |

**Keyboard:**
- `Escape` - Closes calendar
- Arrow keys - Navigate days
- `Enter` - Select date

**Methods:**
```javascript
controller.setDate(new Date());
controller.clear();
const date = controller.getDate();
```

### CommandPalette

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `commands` | array | [] | Command objects [{id, title, description, action}] |
| `isOpen` / `modelValue` / `open` | boolean | false | Palette visibility |
| `onClose` / `@close` / `on:close` | function | - | Close callback |
| `onSelect` / `@select` / `on:select` | function | - | Command select callback |
| `placeholder` | string | 'Type a command...' | Input placeholder |

**Keyboard:**
- `⌘K` / `Ctrl+K` - Toggle palette (global)
- `ArrowUp` / `ArrowDown` - Navigate commands
- `Enter` - Execute selected command
- `Escape` - Close palette

**Hook:**
```javascript
const { isOpen, open, close, toggle } = useCommandPalette();
// Automatically listens for ⌘K / Ctrl+K
```

### Complete API Documentation

See individual component files for full API reference:
- [Modal API](./docs/api/modal.md)
- [Carousel API](./docs/api/carousel.md)
- [DatePicker API](./docs/api/datepicker.md)
- [All Components API](./docs/api/)

---

## Theming

### Built-in Themes

Aural UI includes 4 pre-built themes:

```html
<!-- Dark (default) -->
<link rel="stylesheet" href="@aural-ui/core/css">

<!-- Light -->
<link rel="stylesheet" href="@aural-ui/core/themes/light.css">

<!-- Neon -->
<link rel="stylesheet" href="@aural-ui/core/themes/neon.css">

<!-- Kinetic -->
<link rel="stylesheet" href="@aural-ui/core/themes/kinetic.css">
```

### Custom Themes

Create custom themes using CSS variables:

```css
:root {
  /* Colors */
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-accent: #f093fb;

  /* Typography */
  --font-sans: 'Inter', sans-serif;
  --text-base: 16px;

  /* Spacing */
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;

  /* Borders */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Transitions */
  --transition-fast: 150ms;
  --transition-base: 250ms;
}
```

### Design Tokens

All tokens are available in `/packages/core/tokens/`:
- `colors.css` - Color palette
- `typography.css` - Font definitions
- `spacing.css` - Spacing scale
- `shadows.css` - Box shadows
- `borders.css` - Border radii

---

## Accessibility

### WCAG 2.1 AA Compliance

All components meet WCAG 2.1 Level AA requirements:

✅ **Keyboard Navigation** - All interactive elements accessible via keyboard
✅ **Focus Management** - Visible focus indicators, logical focus order
✅ **ARIA Attributes** - Proper roles, labels, and states
✅ **Color Contrast** - Minimum 4.5:1 for text, 3:1 for UI components
✅ **Screen Reader Support** - Semantic HTML, descriptive labels
✅ **Motion Control** - Respects `prefers-reduced-motion`

### Keyboard Shortcuts

Global:
- `⌘K` / `Ctrl+K` - Command Palette
- `Escape` - Close modals, drawers, dropdowns
- `Tab` - Navigate interactive elements
- `Shift+Tab` - Navigate backward

Component-specific:
- **Carousel**: Arrow Left/Right
- **Tabs**: Arrow Left/Right
- **Dropdown**: Arrow Up/Down, Enter
- **DatePicker**: Arrow keys for date navigation
- **Stepper**: Enter on clickable steps

### Testing Accessibility

Use these tools to verify accessibility:
- **axe DevTools** - Browser extension for automated testing
- **WAVE** - Web accessibility evaluation tool
- **Lighthouse** - Chrome DevTools audit
- **Screen readers** - NVDA, JAWS, VoiceOver

---

## Best Practices

### Performance

1. **Tree Shaking** - Import only what you need:
   ```javascript
   import { Modal, Button } from '@aural-ui/react';  // ✅ Good
   import * as AuralUI from '@aural-ui/react';       // ❌ Bad
   ```

2. **Code Splitting** - Lazy load heavy components:
   ```javascript
   const DatePicker = lazy(() => import('@aural-ui/react').then(m => ({ default: m.DatePicker })));
   ```

3. **CSS Optimization** - Use PurgeCSS in production to remove unused styles

### State Management

1. **Controlled vs Uncontrolled** - Prefer controlled for complex state:
   ```jsx
   // ✅ Controlled (recommended)
   <Modal isOpen={open} onClose={() => setOpen(false)} />

   // ❌ Uncontrolled (avoid)
   <Modal defaultOpen={true} />
   ```

2. **Lift State Up** - Share state between components via parent:
   ```jsx
   function Parent() {
     const [modalOpen, setModalOpen] = useState(false);
     return (
       <>
         <Button onClick={() => setModalOpen(true)} />
         <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
       </>
     );
   }
   ```

### Accessibility

1. **Provide Labels** - Always label form controls:
   ```jsx
   <label htmlFor="date">Select Date</label>
   <DatePicker id="date" />
   ```

2. **Announce Changes** - Use toast for important updates:
   ```javascript
   await saveData();
   showToast('Data saved successfully', 'success');
   ```

3. **Test with Keyboard** - Ensure all functionality works without mouse

---

## Troubleshooting

### Common Issues

#### Components Not Styled

**Problem:** Components render but have no styles.

**Solution:** Import the CSS file:
```javascript
import '@aural-ui/core/css';
```

#### TypeScript Errors

**Problem:** `Cannot find module '@aural-ui/react'`

**Solution:** Ensure types are generated:
```bash
cd packages/react
npm run build
ls dist/index.d.ts  # Should exist
```

#### SSR Hydration Errors

**Problem:** Components fail during server-side rendering.

**Solution:** Components use dynamic imports internally. Ensure you're not calling Aural methods on the server:
```javascript
// ✅ Good - runs only on client
useEffect(() => {
  // Aural code here
}, []);

// ❌ Bad - runs on server
Aural.initModal();  // Don't call directly
```

#### Modal Not Closing on Escape

**Problem:** Escape key doesn't close modal.

**Solution:** Ensure `AuralProvider` wraps your app (React) or plugin is installed (Vue):
```jsx
<AuralProvider>  {/* Required for React */}
  <App />
</AuralProvider>
```

#### Carousel Not Auto-playing

**Problem:** Carousel doesn't advance automatically.

**Solution:** Set `autoplay` and `autoplayDelay` props:
```jsx
<Carousel autoplay autoplayDelay={3000} slides={slides} />
```

### Getting Help

- **GitHub Issues**: https://github.com/ferology/aural-ui/issues
- **Documentation**: Full docs at `/docs`
- **Examples**: Check `/examples` directory
- **Session Summaries**: See `SESSION_X_SUMMARY.md` files

---

## Migration Guide

### From Vanilla to React

**Before (Vanilla):**
```javascript
const modal = Aural.initModal('my-modal');
modal.open();
```

**After (React):**
```jsx
const [open, setOpen] = useState(false);
<Modal isOpen={open} onClose={() => setOpen(false)} />
```

### From Vanilla to Vue

**Before (Vanilla):**
```javascript
Aural.openModal('my-modal');
```

**After (Vue):**
```vue
<AuralModal v-model="open" />
```

### From Vanilla to Svelte

**Before (Vanilla):**
```javascript
Aural.openModal('my-modal');
```

**After (Svelte):**
```svelte
<Modal bind:open />
```

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on:
- Setting up development environment
- Running tests
- Submitting pull requests
- Code style guidelines

---

## License

MIT License - See [LICENSE](./LICENSE) file for details.

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and updates.

**Current Version:** 1.0.0

**Latest Changes:**
- ✅ Complete React, Vue, Svelte integrations (14 components)
- ✅ Comprehensive TypeScript definitions
- ✅ Interactive demo application
- ✅ Full documentation suite
