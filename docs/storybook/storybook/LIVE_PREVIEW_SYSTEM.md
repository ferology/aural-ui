# Live Component Preview System - Implementation Plan

## Overview

This document outlines the design and implementation strategy for adding live, interactive component previews to the Aural UI documentation site, supporting React, Vue, and Svelte frameworks.

## Current State Analysis

### Existing Documentation Structure
- **Location**: `/Users/feraf/Projects/aural-ui/docs/`
- **Architecture**: Iframe-based navigation with persistent sidebar (`demo.html` + `demo.js`)
- **Component Pages**: Static HTML with code examples (e.g., `components/buttons.html`)
- **Framework Support**: Code tabs showing Vanilla JS, React, and Vue examples
- **Styling**: Uses Aural UI CSS with theme switching via `theme-manager.js`

### Existing Framework Packages
- **React**: `/Users/feraf/Projects/aural-ui/packages/react/`
- **Vue**: `/Users/feraf/Projects/aural-ui/packages/vue/`
- **Svelte**: `/Users/feraf/Projects/aural-ui/packages/svelte/`
- **Core**: `/Users/feraf/Projects/aural-ui/packages/core/`
- **Example Apps**: `/Users/feraf/Projects/aural-ui/examples/react-demo/` and `vue-demo/`

## Recommended Approach

After evaluating the options, I recommend **Option 3: Custom Preview System with In-Browser Bundler**.

### Why This Approach?

1. **No External Dependencies**: Self-contained, works offline
2. **Fast Iteration**: Instant preview updates without full page reloads
3. **Full Control**: Custom theming, error handling, and UX
4. **Framework Native**: Can run actual React/Vue/Svelte components
5. **Consistent UX**: Matches existing documentation style
6. **Security**: Sandboxed iframe execution
7. **Mobile Friendly**: Works on all devices without external embeds

### Comparison of Options

| Feature | CodeSandbox/StackBlitz | Simple Iframes | Custom Bundler (Recommended) |
|---------|----------------------|----------------|------------------------------|
| Setup Complexity | Low | Low | Medium |
| Performance | Medium (network) | High | High |
| Offline Support | No | Yes | Yes |
| Customization | Limited | Limited | Full |
| Framework Support | All | All | All |
| Bundle Size Impact | None | Minimal | Medium (~50KB) |
| Real-time Editing | Yes | No | Yes (optional) |
| Theme Integration | Manual | Native | Native |

## Architecture Design

### Component Structure

```
docs/
├── js/
│   ├── preview-system/
│   │   ├── PreviewManager.js      # Main orchestrator
│   │   ├── ReactRenderer.js       # React component renderer
│   │   ├── VueRenderer.js         # Vue component renderer
│   │   ├── SvelteRenderer.js      # Svelte component renderer
│   │   ├── VanillaRenderer.js     # Vanilla JS renderer
│   │   ├── PreviewSandbox.js      # Iframe sandbox manager
│   │   └── CodeHighlighter.js     # Syntax highlighting
│   └── preview-examples/
│       ├── button-examples.js     # Button component examples
│       ├── input-examples.js      # Input component examples
│       └── ...
├── components/
│   └── buttons.html               # Updated with live previews
└── preview-runtime/
    ├── react-runtime.html         # React preview iframe
    ├── vue-runtime.html           # Vue preview iframe
    └── svelte-runtime.html        # Svelte preview iframe
```

### Data Flow

```
Component Page (buttons.html)
    ↓
PreviewManager.js
    ↓
Load Example Definition (button-examples.js)
    ↓
Choose Framework (React/Vue/Svelte/Vanilla)
    ↓
Framework Renderer (ReactRenderer.js)
    ↓
Create/Update Sandbox Iframe (PreviewSandbox.js)
    ↓
Render Component in Iframe
    ↓
Display + Code Tabs + Copy Button
```

### Preview Component API

```javascript
// Usage in component pages
<div class="live-preview"
     data-component="Button"
     data-example="primary-buttons"
     data-frameworks="vanilla,react,vue,svelte">
</div>

<script>
PreviewManager.init({
  container: '.live-preview',
  defaultFramework: 'vanilla',
  theme: 'dark',
  showCode: true,
  editable: false
});
</script>
```

### Example Definition Format

```javascript
// button-examples.js
export const examples = {
  'primary-buttons': {
    title: 'Primary Buttons',
    description: 'Basic button variants',
    vanilla: {
      html: `
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-danger">Danger</button>
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
      <Button variant="danger">Danger</Button>
    </>
  );
}
      `,
      dependencies: ['react', 'react-dom', '@aural-ui/react']
    },
    vue: {
      code: `
<template>
  <AuralButton variant="primary">Primary</AuralButton>
  <AuralButton variant="secondary">Secondary</AuralButton>
  <AuralButton variant="danger">Danger</AuralButton>
</template>

<script setup>
import { AuralButton } from '@aural-ui/vue';
</script>
      `,
      dependencies: ['vue', '@aural-ui/vue']
    },
    svelte: {
      code: `
<script>
  import { Button } from '@aural-ui/svelte';
</script>

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
      `,
      dependencies: ['svelte', '@aural-ui/svelte']
    }
  }
};
```

## Implementation Phases

### Phase 1: Core Infrastructure (Week 1)
- [ ] Create `PreviewManager.js` - main orchestrator
- [ ] Create `PreviewSandbox.js` - iframe management
- [ ] Create `VanillaRenderer.js` - HTML/CSS/JS renderer
- [ ] Build preview UI components (tabs, code display, copy button)
- [ ] Add error handling and loading states

### Phase 2: Framework Renderers (Week 2)
- [ ] Implement `ReactRenderer.js` using React 18 ESM CDN
- [ ] Implement `VueRenderer.js` using Vue 3 ESM CDN
- [ ] Implement `SvelteRenderer.js` using Svelte compiler
- [ ] Create runtime HTML files for each framework
- [ ] Add framework-specific error boundaries

### Phase 3: Example Library (Week 2)
- [ ] Create example definitions for Button component
- [ ] Create example definitions for Input component
- [ ] Create example definitions for 5+ other components
- [ ] Add interactive examples (state management)
- [ ] Document example format and guidelines

### Phase 4: Integration (Week 3)
- [ ] Update `buttons.html` with live previews
- [ ] Add preview system to 3-5 other component pages
- [ ] Integrate with existing theme system
- [ ] Add keyboard shortcuts (e.g., Alt+F to cycle frameworks)
- [ ] Mobile responsive design

### Phase 5: Advanced Features (Week 3-4)
- [ ] Add code editing capability (optional)
- [ ] Add "Open in CodeSandbox" export
- [ ] Add component playground page
- [ ] Add example search/filter
- [ ] Performance optimization

## Technical Implementation Details

### Framework Rendering Strategies

#### Vanilla JS
- Direct HTML injection into iframe
- Safest and fastest option
- No bundling required

#### React
```javascript
// Use React ESM from CDN
import React from 'https://esm.sh/react@18';
import ReactDOM from 'https://esm.sh/react-dom@18/client';
import { Button } from './local-react-build.js';

// Compile JSX to JS using Babel standalone (for code display)
// OR use pre-compiled examples
```

#### Vue
```javascript
// Use Vue 3 ESM from CDN
import { createApp } from 'https://esm.sh/vue@3';
import { AuralButton } from './local-vue-build.js';

const app = createApp({
  template: `<AuralButton>Click me</AuralButton>`,
  components: { AuralButton }
});
app.mount('#app');
```

#### Svelte
```javascript
// Pre-compile Svelte components to JS
// Or use Svelte REPL compiler API
// Store compiled output and run in iframe
```

### Security Considerations

1. **Sandbox Attributes**: Use `sandbox="allow-scripts allow-same-origin"`
2. **CSP Headers**: Content Security Policy for iframe content
3. **Code Validation**: Sanitize user input if editing is enabled
4. **Origin Isolation**: Separate origin for iframe execution
5. **Error Boundaries**: Catch and display errors gracefully

### Performance Optimization

1. **Lazy Loading**: Load preview system only when needed
2. **Code Splitting**: Separate bundles for each framework renderer
3. **Caching**: Cache compiled examples in localStorage
4. **Debouncing**: Debounce live editing updates
5. **Virtual Scrolling**: For large example lists

## Proof of Concept - Button Component

See `docs/components/buttons-preview.html` for a working proof-of-concept implementation.

### Key Features Demonstrated

1. Live interactive button preview
2. Framework tabs (Vanilla, React, Vue, Svelte)
3. Code display with syntax highlighting
4. Copy to clipboard functionality
5. Theme integration (respects active theme)
6. Responsive design
7. Loading states
8. Error handling

### User Experience Flow

1. User opens button documentation page
2. Sees live preview of buttons (clickable, interactive)
3. Can switch between frameworks using tabs
4. Code updates to show selected framework
5. Can copy code with one click
6. Preview updates when theme changes
7. Works on mobile with touch interactions

## Migration Strategy

### For Existing Component Pages

1. Keep existing structure (tabs, examples)
2. Add live preview section at top
3. Replace static code examples with interactive previews
4. Maintain backward compatibility
5. Progressive enhancement approach

### Template Structure

```html
<!-- Component Page Template -->
<div class="page-header">
  <h1>Button Component</h1>
  <p>Interactive buttons with multiple variants</p>
</div>

<!-- NEW: Live Preview Section -->
<section class="live-preview-section">
  <div class="live-preview"
       data-component="Button"
       data-example="variants"
       data-frameworks="vanilla,react,vue,svelte">
  </div>
</section>

<!-- Existing content continues -->
<div class="tabs">...</div>
```

## Maintenance Considerations

1. **Example Updates**: When components change, update example definitions
2. **Framework Versions**: Pin CDN versions, update quarterly
3. **Testing**: Visual regression tests for preview rendering
4. **Documentation**: Maintain example authoring guide
5. **Performance**: Monitor iframe count and memory usage

## Alternative Approaches Considered

### 1. CodeSandbox Embeds
**Pros**: Full dev environment, collaborative editing
**Cons**: Network dependent, slower, less control, not self-hosted

### 2. StackBlitz WebContainers
**Pros**: Full Node.js in browser, modern tech
**Cons**: Large bundle size, browser compatibility, complexity

### 3. Simple Static Iframes
**Pros**: Simple, fast, reliable
**Cons**: No framework support, limited interactivity

### 4. Server-Side Rendering
**Pros**: SEO friendly, fast initial load
**Cons**: Complex build process, server dependency, no editing

## Success Metrics

1. **User Engagement**: Time spent on component pages (+30%)
2. **Code Copy Rate**: How often users copy code (+50%)
3. **Page Load Time**: Keep under 2s for preview load
4. **Error Rate**: <1% preview render failures
5. **Framework Usage**: Track which frameworks users preview most

## Next Steps

1. Review and approve this plan
2. Set up project structure
3. Build Phase 1 (Core Infrastructure)
4. Create proof-of-concept for Button component
5. Gather feedback and iterate
6. Scale to all components

## Resources Required

- **Development Time**: 3-4 weeks
- **Design Review**: UI/UX for preview components
- **Testing**: Cross-browser testing (Chrome, Firefox, Safari, Edge)
- **Documentation**: Example authoring guide
- **Assets**: Framework logos, icons for UI

## Risks and Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|------------|
| Browser compatibility | High | Medium | Polyfills, fallback to static examples |
| Performance on mobile | Medium | Medium | Lazy loading, simplified mobile view |
| Framework CDN downtime | High | Low | Local fallback copies |
| Complex state examples | Medium | High | Simplify examples, add playground page |
| Maintenance burden | Medium | Medium | Good documentation, automated tests |

## Conclusion

The custom preview system with in-browser rendering provides the best balance of functionality, performance, and maintainability for the Aural UI documentation. It will significantly improve the developer experience while remaining true to the project's principles of accessibility, simplicity, and framework-agnostic design.
