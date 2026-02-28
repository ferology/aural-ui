import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Data Display/Divider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Divider Component

Visual separators to organize and structure content sections.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Horizontal divider -->
<hr class="divider">

<!-- With text -->
<div class="divider divider-with-text">
  <span>OR</span>
</div>

<!-- Vertical divider -->
<div style="display: flex; align-items: center; gap: var(--space-4);">
  <span>Item 1</span>
  <hr class="divider divider-vertical" role="separator" aria-orientation="vertical">
  <span>Item 2</span>
</div>
\`\`\`

**React:**
\`\`\`jsx
<hr className="divider" />
\`\`\`

**Vue:**
\`\`\`vue
<hr class="divider">
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Visual style of the divider',
      table: {
        defaultValue: { summary: 'solid' }
      }
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
      table: {
        defaultValue: { summary: 'horizontal' }
      }
    },
    spacing: {
      control: 'select',
      options: ['default', 'compact', 'spacious'],
      description: 'Spacing around the divider',
      table: {
        defaultValue: { summary: 'default' }
      }
    },
    withLabel: {
      control: 'boolean',
      description: 'Show divider with text label',
      table: {
        defaultValue: { summary: false }
      }
    },
    label: {
      control: 'text',
      description: 'Text label to display (when withLabel is true)',
      if: { arg: 'withLabel', truthy: true }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    // With label variant
    if (args.withLabel) {
      const container = document.createElement('div');
      container.className = 'divider divider-with-text';

      if (args.spacing && args.spacing !== 'default') {
        container.classList.add(`divider-${args.spacing}`);
      }

      const label = document.createElement('span');
      label.textContent = args.label || 'OR';
      container.appendChild(label);

      return container;
    }

    // Regular divider
    const divider = document.createElement('hr');
    let classes = ['divider'];

    // Add orientation
    if (args.orientation === 'vertical') {
      classes.push('divider-vertical');
      divider.setAttribute('role', 'separator');
      divider.setAttribute('aria-orientation', 'vertical');
    }

    // Add variant
    if (args.variant && args.variant !== 'solid') {
      classes.push(`divider-${args.variant}`);
    }

    // Add spacing
    if (args.spacing && args.spacing !== 'default') {
      classes.push(`divider-${args.spacing}`);
    }

    divider.className = classes.join(' ');

    // Wrap vertical divider for demo
    if (args.orientation === 'vertical') {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = 'var(--space-4)';
      wrapper.style.padding = 'var(--space-6)';

      const text1 = document.createElement('span');
      text1.textContent = 'Item 1';
      text1.style.color = 'var(--color-text-secondary)';

      const text2 = document.createElement('span');
      text2.textContent = 'Item 2';
      text2.style.color = 'var(--color-text-secondary)';

      wrapper.appendChild(text1);
      wrapper.appendChild(divider);
      wrapper.appendChild(text2);

      return wrapper;
    }

    // Wrap horizontal divider for demo
    const wrapper = document.createElement('div');
    wrapper.style.padding = 'var(--space-6)';

    const text1 = document.createElement('p');
    text1.textContent = 'Content above the divider';
    text1.style.color = 'var(--color-text-secondary)';
    text1.style.margin = '0 0 var(--space-4) 0';

    const text2 = document.createElement('p');
    text2.textContent = 'Content below the divider';
    text2.style.color = 'var(--color-text-secondary)';
    text2.style.margin = 'var(--space-4) 0 0 0';

    wrapper.appendChild(text1);
    wrapper.appendChild(divider);
    wrapper.appendChild(text2);

    return wrapper;
  },
  args: {
    variant: 'solid',
    orientation: 'horizontal',
    spacing: 'default',
    withLabel: false,
    label: 'OR'
  }
};

export const Dashed: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.padding = 'var(--space-6)';

    const text1 = document.createElement('p');
    text1.textContent = 'Content above the dashed divider';
    text1.style.color = 'var(--color-text-secondary)';
    text1.style.margin = '0 0 var(--space-4) 0';

    const divider = document.createElement('hr');
    divider.className = 'divider divider-dashed';

    const text2 = document.createElement('p');
    text2.textContent = 'Content below the dashed divider';
    text2.style.color = 'var(--color-text-secondary)';
    text2.style.margin = 'var(--space-4) 0 0 0';

    wrapper.appendChild(text1);
    wrapper.appendChild(divider);
    wrapper.appendChild(text2);

    return wrapper;
  }
};

export const Dotted: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.padding = 'var(--space-6)';

    const text1 = document.createElement('p');
    text1.textContent = 'Content above the dotted divider';
    text1.style.color = 'var(--color-text-secondary)';
    text1.style.margin = '0 0 var(--space-4) 0';

    const divider = document.createElement('hr');
    divider.className = 'divider divider-dotted';

    const text2 = document.createElement('p');
    text2.textContent = 'Content below the dotted divider';
    text2.style.color = 'var(--color-text-secondary)';
    text2.style.margin = 'var(--space-4) 0 0 0';

    wrapper.appendChild(text1);
    wrapper.appendChild(divider);
    wrapper.appendChild(text2);

    return wrapper;
  }
};

export const WithLabel: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--space-6)';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    // OR divider
    const orDivider = document.createElement('div');
    orDivider.className = 'divider divider-with-text';
    const orLabel = document.createElement('span');
    orLabel.textContent = 'OR';
    orDivider.appendChild(orLabel);

    // Continue with divider
    const continueDivider = document.createElement('div');
    continueDivider.className = 'divider divider-with-text';
    const continueLabel = document.createElement('span');
    continueLabel.textContent = 'Continue with';
    continueDivider.appendChild(continueLabel);

    // Optional Information divider
    const optionalDivider = document.createElement('div');
    optionalDivider.className = 'divider divider-with-text';
    const optionalLabel = document.createElement('span');
    optionalLabel.textContent = 'Optional Information';
    optionalDivider.appendChild(optionalLabel);

    container.appendChild(orDivider);
    container.appendChild(continueDivider);
    container.appendChild(optionalDivider);

    return container;
  }
};

export const Vertical: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.gap = 'var(--space-4)';
    wrapper.style.padding = 'var(--space-6)';

    const items = ['Dashboard', 'Settings', 'Profile', 'Logout'];

    items.forEach((item, index) => {
      const span = document.createElement('span');
      span.textContent = item;
      span.style.color = 'var(--color-text-secondary)';
      wrapper.appendChild(span);

      if (index < items.length - 1) {
        const divider = document.createElement('hr');
        divider.className = 'divider divider-vertical';
        divider.setAttribute('role', 'separator');
        divider.setAttribute('aria-orientation', 'vertical');
        wrapper.appendChild(divider);
      }
    });

    return wrapper;
  }
};

export const InContent: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--space-6)';
    container.style.maxWidth = '600px';

    // Section 1
    const heading1 = document.createElement('h3');
    heading1.textContent = 'Introduction';
    heading1.style.color = 'var(--color-text-primary)';
    heading1.style.margin = '0 0 var(--space-3) 0';
    heading1.style.fontSize = 'var(--text-xl)';
    heading1.style.fontWeight = 'var(--font-semibold)';

    const para1 = document.createElement('p');
    para1.textContent = 'This is the introduction section with some descriptive content that explains the topic.';
    para1.style.color = 'var(--color-text-secondary)';
    para1.style.margin = '0';
    para1.style.lineHeight = '1.6';

    const divider1 = document.createElement('hr');
    divider1.className = 'divider';

    // Section 2
    const heading2 = document.createElement('h3');
    heading2.textContent = 'Main Content';
    heading2.style.color = 'var(--color-text-primary)';
    heading2.style.margin = '0 0 var(--space-3) 0';
    heading2.style.fontSize = 'var(--text-xl)';
    heading2.style.fontWeight = 'var(--font-semibold)';

    const para2 = document.createElement('p');
    para2.textContent = 'The main content section contains the primary information that users need to understand.';
    para2.style.color = 'var(--color-text-secondary)';
    para2.style.margin = '0';
    para2.style.lineHeight = '1.6';

    const divider2 = document.createElement('hr');
    divider2.className = 'divider';

    // Section 3
    const heading3 = document.createElement('h3');
    heading3.textContent = 'Conclusion';
    heading3.style.color = 'var(--color-text-primary)';
    heading3.style.margin = '0 0 var(--space-3) 0';
    heading3.style.fontSize = 'var(--text-xl)';
    heading3.style.fontWeight = 'var(--font-semibold)';

    const para3 = document.createElement('p');
    para3.textContent = 'Finally, the conclusion wraps up the content and provides key takeaways.';
    para3.style.color = 'var(--color-text-secondary)';
    para3.style.margin = '0';
    para3.style.lineHeight = '1.6';

    container.appendChild(heading1);
    container.appendChild(para1);
    container.appendChild(divider1);
    container.appendChild(heading2);
    container.appendChild(para2);
    container.appendChild(divider2);
    container.appendChild(heading3);
    container.appendChild(para3);

    return container;
  }
};

export const InList: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--space-6)';
    container.style.maxWidth = '400px';
    container.style.background = 'var(--color-bg-secondary)';
    container.style.border = '1px solid var(--color-border-subtle)';
    container.style.borderRadius = 'var(--radius-md)';

    const items = [
      { label: 'Dashboard', shortcut: '⌘D' },
      { label: 'Settings', shortcut: '⌘,' },
      { label: 'Profile', shortcut: '⌘P' },
      { label: 'Help', shortcut: '⌘H' }
    ];

    items.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.style.display = 'flex';
      itemDiv.style.alignItems = 'center';
      itemDiv.style.justifyContent = 'space-between';
      itemDiv.style.padding = 'var(--space-3) 0';

      const label = document.createElement('span');
      label.textContent = item.label;
      label.style.color = 'var(--color-text-primary)';

      const shortcut = document.createElement('span');
      shortcut.textContent = item.shortcut;
      shortcut.style.color = 'var(--color-text-secondary)';
      shortcut.style.fontSize = 'var(--text-sm)';

      itemDiv.appendChild(label);
      itemDiv.appendChild(shortcut);
      container.appendChild(itemDiv);

      if (index < items.length - 1) {
        const divider = document.createElement('hr');
        divider.className = 'divider divider-compact';
        container.appendChild(divider);
      }
    });

    return container;
  }
};

export const InToolbar: Story = {
  render: () => {
    const toolbar = document.createElement('div');
    toolbar.style.display = 'flex';
    toolbar.style.alignItems = 'center';
    toolbar.style.gap = 'var(--space-2)';
    toolbar.style.padding = 'var(--space-3)';
    toolbar.style.background = 'var(--color-bg-tertiary)';
    toolbar.style.borderRadius = 'var(--radius-md)';
    toolbar.style.width = 'fit-content';

    // Text formatting group
    const createButton = (content: string, ariaLabel: string) => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-ghost btn-sm btn-icon';
      btn.setAttribute('aria-label', ariaLabel);
      btn.textContent = content;
      btn.style.minWidth = '32px';
      btn.style.height = '32px';
      return btn;
    };

    toolbar.appendChild(createButton('B', 'Bold'));
    toolbar.appendChild(createButton('I', 'Italic'));
    toolbar.appendChild(createButton('U', 'Underline'));

    // Divider
    const divider1 = document.createElement('hr');
    divider1.className = 'divider divider-vertical';
    divider1.style.height = '24px';
    divider1.setAttribute('role', 'separator');
    divider1.setAttribute('aria-orientation', 'vertical');
    toolbar.appendChild(divider1);

    // Alignment group
    toolbar.appendChild(createButton('⬅', 'Align left'));
    toolbar.appendChild(createButton('⬌', 'Align center'));
    toolbar.appendChild(createButton('➡', 'Align right'));

    // Divider
    const divider2 = document.createElement('hr');
    divider2.className = 'divider divider-vertical';
    divider2.style.height = '24px';
    divider2.setAttribute('role', 'separator');
    divider2.setAttribute('aria-orientation', 'vertical');
    toolbar.appendChild(divider2);

    // Insert group
    toolbar.appendChild(createButton('🔗', 'Insert link'));
    toolbar.appendChild(createButton('🖼', 'Insert image'));

    return toolbar;
  }
};

export const Spacing: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--space-6)';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-8)';

    const createSection = (label: string, className: string) => {
      const section = document.createElement('div');

      const labelEl = document.createElement('p');
      labelEl.textContent = label;
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.margin = '0 0 var(--space-2) 0';

      const divider = document.createElement('hr');
      divider.className = className;

      section.appendChild(labelEl);
      section.appendChild(divider);

      return section;
    };

    container.appendChild(createSection('Compact spacing (divider-compact)', 'divider divider-compact'));
    container.appendChild(createSection('Default spacing', 'divider'));
    container.appendChild(createSection('Spacious (divider-spacious)', 'divider divider-spacious'));

    return container;
  }
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--space-6)';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    const createVariant = (label: string, className: string) => {
      const section = document.createElement('div');

      const labelEl = document.createElement('p');
      labelEl.textContent = label;
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.margin = '0 0 var(--space-2) 0';

      const divider = document.createElement('hr');
      divider.className = className;

      section.appendChild(labelEl);
      section.appendChild(divider);

      return section;
    };

    container.appendChild(createVariant('Solid (default)', 'divider'));
    container.appendChild(createVariant('Dashed', 'divider divider-dashed'));
    container.appendChild(createVariant('Dotted', 'divider divider-dotted'));

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      // With label variant
      if (args.withLabel) {
        const container = document.createElement('div');
        container.className = 'divider divider-with-text';

        if (args.spacing && args.spacing !== 'default') {
          container.classList.add(`divider-${args.spacing}`);
        }

        const label = document.createElement('span');
        label.textContent = args.label || 'OR';
        container.appendChild(label);

        return container;
      }

      // Regular divider
      const wrapper = document.createElement('div');
      wrapper.style.padding = 'var(--space-4)';

      const text1 = document.createElement('p');
      text1.textContent = 'Content above';
      text1.style.color = 'var(--color-text-secondary)';
      text1.style.margin = '0 0 var(--space-2) 0';
      text1.style.fontSize = 'var(--text-sm)';

      const divider = document.createElement('hr');
      let classes = ['divider'];

      // Add variant
      if (args.variant && args.variant !== 'solid') {
        classes.push(`divider-${args.variant}`);
      }

      // Add spacing
      if (args.spacing && args.spacing !== 'default') {
        classes.push(`divider-${args.spacing}`);
      }

      divider.className = classes.join(' ');

      const text2 = document.createElement('p');
      text2.textContent = 'Content below';
      text2.style.color = 'var(--color-text-secondary)';
      text2.style.margin = 'var(--space-2) 0 0 0';
      text2.style.fontSize = 'var(--text-sm)';

      wrapper.appendChild(text1);
      wrapper.appendChild(divider);
      wrapper.appendChild(text2);

      return wrapper;
    });
  },
  args: {
    variant: 'solid',
    spacing: 'default',
    withLabel: false,
    label: 'OR'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Visual style of the divider'
    },
    spacing: {
      control: 'select',
      options: ['default', 'compact', 'spacious'],
      description: 'Spacing around the divider'
    },
    withLabel: {
      control: 'boolean',
      description: 'Show divider with text label'
    },
    label: {
      control: 'text',
      description: 'Text label to display (when withLabel is true)',
      if: { arg: 'withLabel', truthy: true }
    }
  }
};
