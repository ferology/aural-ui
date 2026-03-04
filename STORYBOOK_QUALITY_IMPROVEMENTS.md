# Storybook Quality Improvements
## Aural UI - March 3, 2026

**Goal:** Transform Storybook from basic component showcase to comprehensive design system documentation with testing, interactions, and accessibility examples.

---

## Current State Analysis

### ✅ Strengths
- 50 component stories created
- Good variety of variants (size, state, theme)
- Basic argTypes and controls
- Theme grid utility for multi-theme preview
- Autodocs enabled

### ⚠️ Areas for Improvement
- No interaction testing (play functions)
- Limited accessibility documentation
- Missing comprehensive argTypes with categories
- No keyboard shortcut documentation
- Incomplete MDX documentation
- Missing "Accessibility Demo" stories

---

## Enhancement Strategy

### 1. Add Interaction Tests (Play Functions)

**Benefits:**
- Automated testing of user interactions
- Visual regression testing
- Demonstrates component behavior
- Catches bugs early

**Example Implementation:**
```typescript
import { userEvent, within, expect } from '@storybook/test';

export const KeyboardNavigation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test Tab to focus
    await userEvent.tab();
    const button = canvas.getByRole('button', { name: /primary/i });
    await expect(button).toHaveFocus();

    // Test Enter/Space activation
    await userEvent.keyboard('{Enter}');
    // Verify expected behavior

    // Test Escape
    await userEvent.keyboard('{Escape}');
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates keyboard navigation: Tab to focus, Enter/Space to activate, Escape to dismiss.'
      }
    }
  }
};
```

---

### 2. Comprehensive ArgTypes with Categories

**Current:**
```typescript
argTypes: {
  label: {
    control: 'text',
    description: 'Button text'
  },
  variant: {
    control: 'select',
    options: ['primary', 'secondary']
  }
}
```

**Enhanced:**
```typescript
argTypes: {
  label: {
    control: 'text',
    description: 'Text displayed on the button',
    table: {
      category: 'Content',
      type: { summary: 'string' },
      defaultValue: { summary: 'Click me' }
    }
  },
  variant: {
    control: 'select',
    options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'],
    description: 'Visual style of the button, affects background, text color, and border',
    table: {
      category: 'Appearance',
      type: { summary: 'string' },
      defaultValue: { summary: 'primary' }
    }
  },
  size: {
    control: 'radio',
    options: ['sm', 'md', 'lg'],
    description: 'Button size affecting padding and font-size',
    table: {
      category: 'Appearance',
      defaultValue: { summary: 'md' }
    }
  },
  disabled: {
    control: 'boolean',
    description: 'When true, prevents user interaction and applies disabled styling',
    table: {
      category: 'State',
      defaultValue: { summary: false }
    }
  },
  loading: {
    control: 'boolean',
    description: 'Shows loading spinner and prevents interaction. Sets aria-busy=true',
    table: {
      category: 'State',
      defaultValue: { summary: false }
    }
  },
  icon: {
    control: 'text',
    description: 'Optional icon displayed before label (emoji or SVG)',
    table: {
      category: 'Content',
      type: { summary: 'string | ReactNode' }
    }
  },
  onClick: {
    action: 'clicked',
    description: 'Callback fired when button is clicked',
    table: {
      category: 'Events',
      type: { summary: '() => void' }
    }
  }
}
```

---

### 3. Enhanced Documentation Sections

**Add to meta object:**
```typescript
const meta: Meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Button Component

A versatile button component supporting multiple variants, sizes, states, and icons.

## Features

- 🎨 **6 Visual Variants**: primary, secondary, outline, ghost, danger, success
- 📏 **3 Sizes**: small (sm), medium (md), large (lg)
- ♿ **Fully Accessible**: WCAG 2.1 AA compliant
- ⌨️ **Keyboard Friendly**: Enter and Space key activation
- 🔄 **Loading State**: Built-in spinner with aria-busy
- 🎭 **Icon Support**: Pre/post icon positioning
- 🌗 **Theme Agnostic**: Works across all 7 themes

## Accessibility

### ARIA Attributes
- \`aria-busy="true"\` when loading
- \`aria-hidden="true"\` on decorative icons
- \`disabled\` attribute for disabled state

### Keyboard Support
| Key | Action |
|-----|--------|
| \`Tab\` | Move focus to/from button |
| \`Space\` or \`Enter\` | Activate button |
| \`Shift + Tab\` | Move focus backward |

### Screen Reader Announcements
- Button label and variant are announced
- Loading state is announced as "busy"
- Disabled state is announced
- Icon text is hidden from screen readers (decorative)

## Usage Examples

### React
\`\`\`jsx
import { Button } from '@aural-ui/react';

<Button variant="primary" size="md" onClick={() => {}}>
  Click me
</Button>
\`\`\`

### Vue
\`\`\`vue
<template>
  <button class="btn btn-primary btn-md" @click="handleClick">
    Click me
  </button>
</template>
\`\`\`

### HTML
\`\`\`html
<button class="btn btn-primary btn-md">
  Click me
</button>
\`\`\`

## Design Tokens

The button uses the following design tokens:

- \`--color-primary\` - Primary button background
- \`--color-primary-hover\` - Hover state
- \`--color-text-on-primary\` - Text color on primary
- \`--radius-md\` - Border radius
- \`--space-2, --space-3, --space-4\` - Padding
- \`--font-medium, --font-semibold\` - Font weight

## Best Practices

✅ **DO:**
- Use primary for main actions
- Use secondary for less important actions
- Use danger for destructive actions
- Provide clear, action-oriented labels
- Use icons to reinforce meaning

❌ **DON'T:**
- Use more than one primary button per section
- Use vague labels like "Click here" or "Submit"
- Stack too many buttons without visual hierarchy
- Forget to handle loading states for async actions
        `.trim()
      }
    }
  },
  argTypes: { /* ... comprehensive argTypes ... */ }
};
```

---

### 4. Accessibility Demo Story

**Add to each component:**
```typescript
export const AccessibilityDemo: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '2rem';
    container.style.maxWidth = '600px';

    // Section 1: Keyboard Navigation
    const keyboardSection = document.createElement('div');
    keyboardSection.innerHTML = `
      <h3 style="margin-top: 0; color: var(--color-text-primary);">
        ⌨️ Keyboard Navigation
      </h3>
      <p style="color: var(--color-text-secondary); margin-bottom: 1rem;">
        Press Tab to focus buttons, then Space or Enter to activate.
      </p>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <button class="btn btn-primary">First Button</button>
        <button class="btn btn-secondary">Second Button</button>
        <button class="btn btn-outline">Third Button</button>
      </div>
    `;

    // Section 2: Focus Indicators
    const focusSection = document.createElement('div');
    focusSection.innerHTML = `
      <h3 style="color: var(--color-text-primary);">🎯 Focus Indicators</h3>
      <p style="color: var(--color-text-secondary); margin-bottom: 1rem;">
        All buttons have visible focus rings meeting WCAG 2.1 (3:1 contrast ratio).
      </p>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <button class="btn btn-primary" autofocus>Focused Button</button>
        <button class="btn btn-primary">Normal Button</button>
      </div>
    `;

    // Section 3: Screen Reader Announcements
    const srSection = document.createElement('div');
    srSection.innerHTML = `
      <h3 style="color: var(--color-text-primary);">🔊 Screen Reader</h3>
      <p style="color: var(--color-text-secondary); margin-bottom: 1rem;">
        Buttons announce their label, state, and variant to screen readers.
      </p>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <button class="btn btn-primary">
          Normal Button
        </button>
        <button class="btn btn-primary btn-loading" disabled aria-busy="true">
          <span class="spinner" aria-hidden="true"></span>
          Loading...
        </button>
        <button class="btn btn-primary" disabled>
          Disabled Button
        </button>
      </div>
      <p style="color: var(--color-text-tertiary); font-size: 0.875rem; margin-top: 1rem;">
        💡 Tip: Test with screen readers (NVDA, JAWS, VoiceOver) to hear announcements.
      </p>
    `;

    // Section 4: ARIA Attributes
    const ariaSection = document.createElement('div');
    ariaSection.innerHTML = `
      <h3 style="color: var(--color-text-primary);">🏷️ ARIA Attributes</h3>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;">
        <thead>
          <tr style="background: var(--color-bg-secondary);">
            <th style="padding: 0.5rem; text-align: left; border: 1px solid var(--color-border);">State</th>
            <th style="padding: 0.5rem; text-align: left; border: 1px solid var(--color-border);">ARIA Attribute</th>
            <th style="padding: 0.5rem; text-align: left; border: 1px solid var(--color-border);">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 0.5rem; border: 1px solid var(--color-border);">Loading</td>
            <td style="padding: 0.5rem; border: 1px solid var(--color-border);"><code>aria-busy</code></td>
            <td style="padding: 0.5rem; border: 1px solid var(--color-border);"><code>"true"</code></td>
          </tr>
          <tr style="background: var(--color-bg-secondary);">
            <td style="padding: 0.5rem; border: 1px solid var(--color-border);">Disabled</td>
            <td style="padding: 0.5rem; border: 1px solid var(--color-border);"><code>disabled</code></td>
            <td style="padding: 0.5rem; border: 1px solid var(--color-border);"><code>true</code></td>
          </tr>
          <tr>
            <td style="padding: 0.5rem; border: 1px solid var(--color-border);">Decorative Icon</td>
            <td style="padding: 0.5rem; border: 1px solid var(--color-border);"><code>aria-hidden</code></td>
            <td style="padding: 0.5rem; border: 1px solid var(--color-border);"><code>"true"</code></td>
          </tr>
        </tbody>
      </table>
    `;

    container.appendChild(keyboardSection);
    container.appendChild(focusSection);
    container.appendChild(srSection);
    container.appendChild(ariaSection);

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates all accessibility features of the Button component:

- **Keyboard Navigation**: Fully keyboard accessible
- **Focus Indicators**: WCAG 2.1 compliant focus rings
- **Screen Reader Support**: Proper announcements and ARIA attributes
- **State Management**: Loading and disabled states properly communicated

### Testing Instructions

1. **Keyboard Test**: Press Tab to navigate, Space/Enter to activate
2. **Screen Reader Test**: Enable VoiceOver/NVDA and navigate through buttons
3. **Focus Test**: Ensure focus indicators are visible and high contrast
4. **State Test**: Verify loading and disabled states are properly announced
        `
      }
    }
  }
};
```

---

### 5. MDX Documentation Pages

**Create `Button.mdx`:**
```mdx
import { Meta, Canvas, Story, ArgTypes, Description } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />

# Button

<Description of={ButtonStories} />

## Interactive Demo

<Canvas of={ButtonStories.Primary} />

## Variants

The Button component supports 6 visual variants to convey different meanings:

### Primary
Primary buttons for main actions.
<Canvas of={ButtonStories.Primary} />

### Secondary
Secondary buttons for less important actions.
<Canvas of={ButtonStories.Secondary} />

### Outline
Outline buttons for subtle actions.
<Canvas of={ButtonStories.Outline} />

## Sizes

<Canvas of={ButtonStories.AllSizes} />

## States

<Canvas of={ButtonStories.Disabled} />
<Canvas of={ButtonStories.Loading} />

## Accessibility

<Canvas of={ButtonStories.AccessibilityDemo} />

## Props

<ArgTypes of={ButtonStories} />

## Guidelines

### When to Use
- Use primary buttons for the most important action on a page
- Use secondary buttons for secondary actions
- Use danger buttons for destructive actions (delete, remove)
- Use ghost buttons for tertiary actions or in toolbars

### When Not to Use
- Don't use buttons for navigation (use links instead)
- Don't use multiple primary buttons in the same section
- Don't use buttons without clear labels

## Related Components

- [Link](#) - For navigation
- [Icon Button](#) - For icon-only actions
- [Button Group](#) - For related button sets
```

---

## Implementation Plan

### Week 1: Foundation
- [ ] Add interaction tests to Button, Input, Modal
- [ ] Create AccessibilityDemo stories for 5 key components
- [ ] Enhance argTypes with categories for 10 components

### Week 2: Expansion
- [ ] Add play functions to 15 components
- [ ] Create MDX docs for 10 components
- [ ] Add keyboard shortcuts documentation

### Week 3: Polish
- [ ] Complete all remaining components
- [ ] Add visual regression tests
- [ ] Create comprehensive component guidelines
- [ ] Setup automated a11y testing

---

## Quality Metrics

### Before
- ❌ 0 components with interaction tests
- ❌ 0 components with AccessibilityDemo stories
- ⚠️ Basic argTypes (50% complete)
- ⚠️ Minimal documentation

### After (Target)
- ✅ 50 components with interaction tests
- ✅ 50 components with AccessibilityDemo stories
- ✅ Comprehensive argTypes with categories (100%)
- ✅ MDX documentation for all components
- ✅ Keyboard shortcuts documented
- ✅ Automated a11y testing in CI

---

## Benefits

1. **Better Testing**: Catch bugs before production
2. **Improved Documentation**: Developers understand how to use components
3. **Accessibility Confidence**: Verified WCAG compliance
4. **Design System Excellence**: Industry-leading component library
5. **Developer Experience**: Clear examples and guidelines

---

**Next Steps:**
1. Review this plan with team
2. Create example enhanced stories
3. Roll out to all components
4. Setup automated testing
5. Gather feedback and iterate
