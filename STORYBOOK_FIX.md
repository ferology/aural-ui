# Storybook Installation Fix

The 404 errors indicate Storybook's build is incomplete. Follow these steps:

## Step 1: Clean Everything

```bash
cd /Users/feraf/Projects/aural-ui

# Remove node_modules and lock files
rm -rf node_modules
rm -f package-lock.json
rm -rf .storybook-static
rm -rf storybook-static

# Clear npm cache
npm cache clean --force
```

## Step 2: Install Storybook Properly

```bash
# Install dependencies
npm install

# If that fails, try with legacy peer deps
npm install --legacy-peer-deps

# Verify Storybook CLI is installed
npx storybook --version
```

## Step 3: Initialize Storybook (if needed)

If the install doesn't work, initialize Storybook from scratch:

```bash
# This will detect your project and install Storybook
npx storybook@7.6.17 init --type html

# When prompted:
# - Accept configuration
# - Say YES to ESLint plugin
# - Let it install dependencies
```

This will overwrite `.storybook/main.ts` - that's OK, we'll fix it.

## Step 4: After Init, Update Configs

If you ran `storybook init`, copy these configs:

### .storybook/main.ts
```typescript
import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['../docs', '../javascript']
};

export default config;
```

### .storybook/preview.ts
```typescript
import type { Preview } from '@storybook/html';
import '../src/aural-ui.css';
import '../themes/dark.css';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    layout: 'padded'
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'dark';
      document.documentElement.setAttribute('data-theme', theme);
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
        items: ['dark', 'light', 'neon', 'kinetic', 'prismatic', 'minimal', 'warm'],
        dynamicTitle: true
      }
    }
  }
};

export default preview;
```

## Step 5: Run Storybook

```bash
npm run storybook
```

## Alternative: Use npx directly

If npm run doesn't work:

```bash
npx storybook dev -p 6006
```

## Still Not Working?

Share the output of these commands:

```bash
# Check Node version (should be 16+)
node --version

# Check npm version
npm --version

# Check what's installed
npm list @storybook/html-vite

# Check for errors in install
npm install 2>&1 | grep -i error
```
