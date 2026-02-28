# Storybook Installation Guide

## Current Issue
The package.json has been updated with Storybook v8.6.17 and React dependencies, but dependencies need to be installed.

## Step-by-Step Installation

### 1. Navigate to project directory
```bash
cd /Users/feraf/Projects/aural-ui
```

### 2. Clean any existing installations (if needed)
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
```

### 3. Install dependencies
Try the standard install first:
```bash
npm install
```

If you get peer dependency errors, use:
```bash
npm install --legacy-peer-deps
```

### 4. Verify Storybook is installed
```bash
npx storybook --version
```

Should show: `8.6.17`

### 5. Start Storybook
```bash
npm run storybook
```

This will start Storybook at **http://localhost:6006/**

## What to Expect

Once Storybook loads, you should see:

✅ **Component stories** in the sidebar:
- Test/Simple
- Accordion
- Button (with variants: primary, secondary, outline, ghost, danger, success)
- Modal
- Input
- Tabs
- Card
- Badge
- Progress
- Spinner
- Dropdown
- Drawer
- Toast
- Avatar
- Select
- Alert
- DatePicker

✅ **Theme switcher** in the toolbar (paintbrush icon):
- Dark (default)
- Light
- Neon
- Kinetic
- Prismatic
- Minimal
- Warm

✅ **All components** should render with proper styling and theme switching should work instantly

## If Installation Fails

### Check Node version
```bash
node --version  # Should be 16+ or 18+
```

### Check npm version
```bash
npm --version  # Should be 8+
```

### Try alternative package managers

If npm continues to fail, try:

**Using yarn:**
```bash
npm install -g yarn
yarn install
yarn storybook
```

**Using pnpm:**
```bash
npm install -g pnpm
pnpm install
pnpm run storybook
```

## Configuration Files

The following configuration files have been set up:

- **`.storybook/main.ts`** - Storybook configuration for react-vite framework
- **`.storybook/preview.ts`** - Theme switching and CSS imports
- **`stories/*.stories.ts`** - 17+ component stories

## What Changed

✅ Removed invalid `workspaces` configuration from package.json
✅ Updated all Storybook packages to v8.6.17 (consistent versions)
✅ Changed framework from html-vite to react-vite
✅ Added React 18 as dependency
✅ Added all theme CSS imports to preview.ts
✅ Set up theme switching decorator

## Next Steps After Install

1. Open http://localhost:6006/
2. Browse component stories in sidebar
3. Test theme switching using toolbar dropdown
4. Verify all 7 themes render correctly
5. Check that components are interactive (modals open, tabs switch, etc.)
