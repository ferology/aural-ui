# Aural UI Storybook Stories

This directory contains all component stories for Aural UI's interactive documentation.

## 📚 Component Stories Created (17 total)

### Interactive Components
- **Button** - All variants, sizes, states, and loading indicators
- **Modal** - Multiple sizes, form example, full-screen
- **Tabs** - Horizontal/vertical, with icons, keyboard navigation
- **Accordion** - Single/multiple expansion, default open
- **Dropdown** - Various positions, with icons, user menu, filters
- **Drawer** - All positions (left/right/top/bottom), with forms
- **DatePicker** - Calendar navigation, date selection, disabled dates

### Form Components
- **Input** - All states, validation, sizes, types
- **Select** - Custom dropdown, searchable, grouped options, disabled items

### Feedback Components
- **Toast** - All types (success/error/warning/info), persistent, long messages
- **Alert** - All variants, with icons, actions, banners
- **Progress** - All variants, sizes, striped, animated, with labels
- **Spinner** - All sizes, variants, in buttons, centered

### Display Components
- **Card** - Variants (bordered/elevated), hoverable, with images, grid layout
- **Badge** - All variants, sizes, pill shape, with icons, status indicators
- **Avatar** - All sizes, shapes, with status, initials, groups

### Documentation
- **Introduction** - Getting started guide and feature overview

## 🎨 Features

Each story includes:
- **Interactive Controls** - Modify props in real-time
- **Multiple Variants** - See all variations of each component
- **Accessibility Testing** - Automatic a11y violation detection
- **Theme Switching** - Test components across all 7 themes
- **Auto-generated Docs** - Comprehensive API documentation
- **Code Examples** - Copy-paste ready code snippets

## 🎯 Theme Support

All stories work with these themes:
- Dark (default)
- Light
- Neon
- Kinetic
- Prismatic
- Minimal
- Warm

Switch themes using the toolbar dropdown in Storybook.

## 📝 Story Organization

Stories follow this structure:

```
ComponentName.stories.ts
├── Default - Basic usage
├── Variant1 - First variation
├── Variant2 - Second variation
└── AllVariants - Showcase all options
```

## 🚀 Running Storybook

```bash
# Install dependencies
npm install

# Start Storybook dev server
npm run storybook

# Build static Storybook
npm run build-storybook
```

## 📖 Writing New Stories

### Template

```typescript
import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ComponentName',
  tags: ['autodocs'],
  argTypes: {
    propName: {
      control: 'text',
      description: 'Prop description'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const element = document.createElement('div');
    // Build your component
    return element;
  },
  args: {
    propName: 'default value'
  }
};
```

### Best Practices

1. **Use Semantic HTML** - Proper elements with ARIA attributes
2. **Initialize Components** - Call `window.Aural.init*()` in `setTimeout`
3. **Provide Multiple Examples** - Show different use cases
4. **Include Descriptions** - Document props and behavior
5. **Test Accessibility** - Check a11y panel for violations
6. **Support All Themes** - Ensure components work in all themes

## 🔗 Related Files

- `.storybook/main.ts` - Storybook configuration
- `.storybook/preview.ts` - Global decorators and theme setup
- `STORYBOOK_README.md` - Detailed setup instructions

## 📦 Next Components to Add

Remaining components from the design system:
- Tooltip
- Popover
- Carousel
- Checkbox
- Radio
- Toggle/Switch
- Slider
- File Upload
- Breadcrumbs
- Pagination
- Timeline
- Stats Cards
- Code Block
- And 40+ more!

## 🎓 Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Aural UI Docs](https://ferology.github.io/aural-ui/)
- [Component Demos](https://ferology.github.io/aural-ui/docs/demo.html)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
