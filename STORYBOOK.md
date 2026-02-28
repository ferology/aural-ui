# Storybook Setup Documentation

## Current Status

✅ **Working:**
- Storybook v8.6.17 installed and configured
- HTML/Vite framework for vanilla JavaScript components
- 17+ component stories created
- Theme switcher with 7 themes (Dark, Light, Neon, Kinetic, Prismatic, Minimal, Warm)
- Dynamic theme loading
- Component interactivity (Aural UI JavaScript loaded)

⚠️ **Known Issues:**
- Styling was loading but not applying (fixed by using compiled CSS from `/docs/aural-ui.css`)
- Theme CSS needs to load dynamically to avoid conflicts
- Some components may need manual initialization

---

## Configuration Files

### `.storybook/main.ts`
Main Storybook configuration:

```typescript
import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/html-vite',  // HTML framework for vanilla JS
    options: {}
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['../docs', '../javascript', '../themes', '../src']
};

export default config;
```

**Key settings:**
- `framework: '@storybook/html-vite'` - Uses HTML framework (not React)
- `staticDirs` - Serves docs, javascript, themes, and src directories at root
- Stories located in `../stories/` directory

### `.storybook/preview.ts`
Theme switching and story decorator:

```typescript
import type { Preview } from '@storybook/html';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    layout: 'padded',
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'dark';

      // Remove existing theme CSS
      const existingLink = document.getElementById('theme-stylesheet');
      if (existingLink) existingLink.remove();

      // Load selected theme CSS
      const link = document.createElement('link');
      link.id = 'theme-stylesheet';
      link.rel = 'stylesheet';
      link.href = `/themes/${theme}.css`;
      document.head.appendChild(link);

      // Set data-theme attribute
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);

      return story();
    }
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
          { value: 'neon', title: 'Neon' },
          { value: 'kinetic', title: 'Kinetic' },
          { value: 'prismatic', title: 'Prismatic' },
          { value: 'minimal', title: 'Minimal' },
          { value: 'warm', title: 'Warm' }
        ],
        dynamicTitle: true
      }
    }
  }
};

export default preview;
```

**How it works:**
- Decorator runs before each story renders
- Dynamically loads the selected theme CSS file
- Only one theme CSS loaded at a time (prevents conflicts)
- Sets `data-theme` attribute for components that use it

### `.storybook/preview-head.html`
Loads global assets into the preview iframe:

```html
<!-- Load Aural UI JavaScript for interactive components -->
<script src="/javascript/index.js"></script>

<!-- Load base Aural UI CSS (compiled version with all imports resolved) -->
<link rel="stylesheet" href="/aural-ui.css">

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
</style>
```

**Important:**
- Uses `/aural-ui.css` from the `docs` directory (compiled version)
- **DO NOT** use `/src/aural-ui.css` - it has `@import` statements with broken relative paths
- The compiled version has all imports resolved

---

## Running Storybook

### Installation
```bash
cd /Users/feraf/Projects/aural-ui
npm install --legacy-peer-deps
```

### Start Storybook
```bash
npm run storybook
```

Opens at: **http://localhost:6006/**

### Stop Storybook
Press `Ctrl+C` in the terminal

---

## Dependencies

Required packages in `package.json`:

```json
{
  "devDependencies": {
    "@chromatic-com/storybook": "^3.2.2",
    "@storybook/addon-a11y": "^8.6.17",
    "@storybook/addon-docs": "^8.6.17",
    "@storybook/addon-essentials": "^8.6.17",
    "@storybook/addon-interactions": "^8.6.17",
    "@storybook/html": "^8.6.17",
    "@storybook/html-vite": "^8.6.17",
    "storybook": "^8.6.17"
  }
}
```

---

## Story Structure

Stories are located in `/stories/` directory:

### Example: Button.stories.ts
```typescript
import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: (args) => {
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Click Me';
    return button;
  }
};
```

### Example: Modal.stories.ts (Interactive Component)
```typescript
export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');

    // Create button to trigger modal
    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.textContent = 'Open Modal';

    // Create modal HTML
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `...`;

    container.appendChild(openButton);
    container.appendChild(modal);

    // Initialize component after render
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initModals();
      }
    }, 100);

    return container;
  }
};
```

**Pattern for interactive components:**
1. Create DOM elements with correct class names
2. Return the container
3. Use `setTimeout()` to initialize after render
4. Check `window.Aural` exists before calling methods

---

## Component Stories

### Completed (17 stories):
- Introduction.mdx
- Accordion
- Alert
- Avatar
- Badge
- Button
- Card
- DatePicker
- Drawer
- Dropdown
- Input
- Modal
- Progress
- Select
- Spinner
- Tabs
- Toast
- Welcome

### Missing Components:
Many components from `/docs/components/` don't have stories yet:
- Breadcrumbs
- Bottom Navigation
- Carousel
- Calendar
- Checkbox
- Code Block
- Color Picker
- Command Palette
- Combobox
- Context Menu
- Data Table
- Date Range Picker
- Divider
- Empty State
- File Upload
- Form
- Grid
- Icon
- Keyboard Shortcuts
- Link
- Menu
- Navbar
- Pagination
- Popover
- Radio
- Range Slider
- Rating
- Search Bar
- Segmented Control
- Skeleton
- Snackbar
- Split Button
- Stepper
- Switch
- Tag Input
- Text Area
- Time Picker
- Toggle
- Tooltip
- Tree View
- Typography

---

## Troubleshooting

### Issue: CSS files load but styles don't apply

**Problem:** The source CSS file (`src/aural-ui.css`) uses `@import` statements with relative paths that break when served from Storybook.

**Solution:** Use the compiled CSS from `docs/aural-ui.css` in `preview-head.html`:
```html
<link rel="stylesheet" href="/aural-ui.css">
```

### Issue: All themes look the same

**Problem:** All theme CSS files were being imported at once in `preview.ts`, causing conflicts.

**Solution:** Dynamically load only one theme at a time using the decorator:
```typescript
const link = document.createElement('link');
link.href = `/themes/${theme}.css`;
document.head.appendChild(link);
```

### Issue: Components not interactive (modals won't open, dropdowns won't expand)

**Problem:** Aural UI JavaScript not loaded.

**Solution:** Load JavaScript in `preview-head.html`:
```html
<script src="/javascript/index.js"></script>
```

And initialize components in stories:
```typescript
setTimeout(() => {
  window.Aural.initModals();
}, 100);
```

### Issue: "Cannot find module '@storybook/html'"

**Problem:** Wrong Storybook packages installed (React instead of HTML).

**Solution:** Update `package.json` to include:
```json
"@storybook/html": "^8.6.17",
"@storybook/html-vite": "^8.6.17"
```

### Issue: Port 6006 already in use

**Solution:** Kill existing Storybook process:
```bash
killall node
npm run storybook
```

Or use a different port:
```bash
npx storybook dev -p 6007
```

---

## Theme Switching

The theme switcher appears in the Storybook toolbar (top toolbar, paintbrush icon).

**How it works:**
1. User selects theme from dropdown
2. Decorator removes old theme CSS `<link>` tag
3. Decorator adds new theme CSS `<link>` tag
4. Theme CSS applies instantly to all components

**Why not import all themes?**
Theme CSS files use `:root` selectors, so they override each other. Only one can be active at a time.

---

## Next Steps

### 1. Complete Missing Stories
Create stories for all 40+ remaining components.

**Priority components:**
- Tooltip
- Popover
- Navbar
- Breadcrumbs
- Pagination
- Data Table
- Calendar
- File Upload
- Tree View

### 2. Improve Story Quality
- Add interactive controls (args/argTypes)
- Add more story variants
- Improve documentation in MDX
- Add usage examples

### 3. Testing
- Add interaction tests (@storybook/addon-interactions)
- Add accessibility tests (@storybook/addon-a11y)
- Add visual regression tests (Chromatic)

### 4. Documentation
- Create comprehensive MDX docs for each component
- Document props/options
- Add code examples
- Add accessibility notes
- Add browser support

### 5. Deployment
Build and deploy Storybook:
```bash
npm run build-storybook
# Outputs to storybook-static/
# Deploy to GitHub Pages or Netlify
```

---

## File Structure

```
/Users/feraf/Projects/aural-ui/
├── .storybook/
│   ├── main.ts              # Main config
│   ├── preview.ts           # Theme switcher & decorators
│   └── preview-head.html    # Global CSS/JS
├── stories/
│   ├── Introduction.mdx
│   ├── Button.stories.ts
│   ├── Modal.stories.ts
│   └── ...                  # 17+ stories
├── docs/
│   └── aural-ui.css         # ✅ Compiled CSS (use this!)
├── src/
│   └── aural-ui.css         # ❌ Source CSS (broken @imports)
├── themes/
│   ├── dark.css
│   ├── light.css
│   ├── neon.css
│   ├── kinetic.css
│   ├── prismatic.css
│   ├── minimal.css
│   └── warm.css
├── javascript/
│   └── index.js             # Aural UI component logic
└── package.json
```

---

## Quick Reference

### Start Storybook
```bash
npm run storybook
```

### Create New Story
```bash
# Create file: stories/ComponentName.stories.ts
```

### View Storybook
Open: http://localhost:6006/

### Switch Themes
Click paintbrush icon in toolbar → Select theme

### Check CSS Loading
F12 → Network → Filter "css" → Should see:
- aural-ui.css (200 or 304)
- dark.css (200 or 304) - or whichever theme is selected

### Debug Story
F12 → Console → Look for errors
Check if `window.Aural` exists

---

## Additional Resources

- **Storybook Docs:** https://storybook.js.org/docs
- **HTML Framework:** https://storybook.js.org/docs/html/get-started
- **Writing Stories:** https://storybook.js.org/docs/writing-stories
- **Theming:** https://storybook.js.org/docs/configure/theming
- **Addons:** https://storybook.js.org/docs/addons

---

## Contacts & Support

For Storybook issues:
- GitHub: https://github.com/storybookjs/storybook/issues
- Discord: https://discord.gg/storybook

For Aural UI issues:
- GitHub: https://github.com/ferology/aural-ui/issues
