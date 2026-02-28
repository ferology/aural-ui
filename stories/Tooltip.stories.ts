import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Data Display/Tooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Tooltip Component

Contextual help text that appears on hover or focus. Tooltips are implemented using data attributes and work automatically across all themes.

## Usage

Add the \`data-tooltip\` attribute to any element:

\`\`\`html
<button class="btn btn-secondary" data-tooltip="This is a helpful tooltip">
  Hover me
</button>
\`\`\`

## Attributes

- **data-tooltip** - The tooltip text content (required)
- **data-tooltip-position** - Position: \`top\` (default), \`bottom\`, \`left\`, \`right\`
- **data-tooltip-color** - Color variant: \`primary\`, \`success\`, \`warning\`, \`error\`
- **data-tooltip-size** - Size: \`sm\`, \`md\` (default), \`lg\`

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<button class="btn btn-secondary"
        data-tooltip="Helpful information"
        data-tooltip-position="top">
  Hover me
</button>
\`\`\`

**React:**
\`\`\`jsx
<button className="btn btn-secondary"
        data-tooltip="Helpful information"
        data-tooltip-position="top">
  Hover me
</button>
\`\`\`

**Vue:**
\`\`\`vue
<button class="btn btn-secondary"
        :data-tooltip="tooltipText"
        data-tooltip-position="top">
  Hover me
</button>
\`\`\`

**Svelte:**
\`\`\`svelte
<button class="btn btn-secondary"
        data-tooltip={tooltipText}
        data-tooltip-position="top">
  Hover me
</button>
\`\`\`

## Accessibility

- Tooltips appear on both hover and focus for keyboard users
- Always include \`aria-label\` on icon-only buttons
- Keep tooltip text concise (1-2 short sentences)
- Don't use tooltips for critical information
        `.trim()
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Tooltip text content'
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip position relative to element'
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Tooltip color variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tooltip size'
    },
    label: {
      control: 'text',
      description: 'Button label text'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const button = document.createElement('button');
    button.className = 'btn btn-secondary';
    button.textContent = args.label || 'Hover me';
    button.setAttribute('data-tooltip', args.text || 'This is a helpful tooltip');

    if (args.position && args.position !== 'top') {
      button.setAttribute('data-tooltip-position', args.position);
    }

    if (args.color && args.color !== 'default') {
      button.setAttribute('data-tooltip-color', args.color);
    }

    if (args.size && args.size !== 'md') {
      button.setAttribute('data-tooltip-size', args.size);
    }

    // Initialize tooltips after element is added to DOM
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);

    return button;
  },
  args: {
    text: 'This is a helpful tooltip',
    position: 'top',
    color: 'default',
    size: 'md',
    label: 'Hover me'
  }
};

export const Positions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      justify-content: center;
      padding: var(--space-8) var(--space-4);
    `;

    const positions = [
      { pos: 'top', label: 'Top' },
      { pos: 'bottom', label: 'Bottom' },
      { pos: 'left', label: 'Left' },
      { pos: 'right', label: 'Right' }
    ];

    positions.forEach(({ pos, label }) => {
      const button = document.createElement('button');
      button.className = 'btn btn-secondary';
      button.textContent = label;
      button.setAttribute('data-tooltip', `Tooltip on ${pos}`);
      button.setAttribute('data-tooltip-position', pos);
      container.appendChild(button);
    });

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);

    return container;
  }
};

export const Colors: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      padding: var(--space-4);
    `;

    const colors = [
      { color: '', label: 'Default', text: 'Default tooltip' },
      { color: 'primary', label: 'Primary', text: 'Primary tooltip' },
      { color: 'success', label: 'Success', text: 'Success message' },
      { color: 'warning', label: 'Warning', text: 'Warning message' },
      { color: 'error', label: 'Error', text: 'Error message' }
    ];

    colors.forEach(({ color, label, text }) => {
      const button = document.createElement('button');
      button.className = 'btn btn-secondary';
      button.textContent = label;
      button.setAttribute('data-tooltip', text);
      if (color) {
        button.setAttribute('data-tooltip-color', color);
      }
      container.appendChild(button);
    });

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);

    return container;
  }
};

export const Sizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      padding: var(--space-4);
      align-items: center;
    `;

    const sizes = [
      { size: 'sm', label: 'Small', text: 'Small tooltip' },
      { size: 'md', label: 'Medium', text: 'Default size tooltip' },
      { size: 'lg', label: 'Large', text: 'Large tooltip with more content to display' }
    ];

    sizes.forEach(({ size, label, text }) => {
      const button = document.createElement('button');
      button.className = 'btn btn-secondary';
      button.textContent = label;
      button.setAttribute('data-tooltip', text);
      if (size !== 'md') {
        button.setAttribute('data-tooltip-size', size);
      }
      container.appendChild(button);
    });

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);

    return container;
  }
};

export const IconButtons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      padding: var(--space-4);
    `;

    // Using unicode symbols since lucide icons require special loading
    const iconButtons = [
      { icon: '✏', tooltip: 'Edit item', label: 'Edit' },
      { icon: '🗑', tooltip: 'Delete item', label: 'Delete' },
      { icon: '↗', tooltip: 'Share with others', label: 'Share' },
      { icon: '♥', tooltip: 'Add to favorites', label: 'Favorite' }
    ];

    iconButtons.forEach(({ icon, tooltip, label }) => {
      const button = document.createElement('button');
      button.className = 'btn btn-ghost btn-icon';
      button.setAttribute('data-tooltip', tooltip);
      button.setAttribute('aria-label', label);
      button.textContent = icon;
      container.appendChild(button);
    });

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);

    return container;
  }
};

export const HelpIcons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      padding: var(--space-4);
      max-width: 400px;
    `;

    const formFields = [
      { id: 'username', label: 'Username', tooltip: 'Your unique username for login' },
      { id: 'password', label: 'Password', tooltip: 'Must be at least 8 characters' },
      { id: 'email', label: 'Email', tooltip: 'We will send confirmation to this address' }
    ];

    formFields.forEach(({ id, label, tooltip }) => {
      const fieldGroup = document.createElement('div');
      fieldGroup.style.cssText = `
        display: flex;
        align-items: center;
        gap: var(--space-2);
      `;

      const labelElement = document.createElement('label');
      labelElement.htmlFor = id;
      labelElement.textContent = label;
      labelElement.style.fontWeight = 'var(--font-medium)';

      const helpButton = document.createElement('button');
      helpButton.className = 'btn btn-ghost btn-icon btn-sm';
      helpButton.setAttribute('data-tooltip', tooltip);
      helpButton.setAttribute('data-tooltip-position', 'right');
      helpButton.setAttribute('aria-label', `Help for ${label}`);
      helpButton.textContent = '?';
      helpButton.style.cssText = `
        width: 20px;
        height: 20px;
        padding: 0;
        font-size: 12px;
        border-radius: 50%;
        opacity: 0.7;
      `;

      fieldGroup.appendChild(labelElement);
      fieldGroup.appendChild(helpButton);
      container.appendChild(fieldGroup);
    });

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);

    return container;
  }
};

export const StatusIndicators: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      gap: var(--space-4);
      flex-wrap: wrap;
      padding: var(--space-4);
    `;

    const statuses = [
      {
        name: 'API Server',
        status: 'operational',
        color: 'var(--color-success)',
        tooltip: 'Service is operational',
        tooltipColor: 'success'
      },
      {
        name: 'Database',
        status: 'degraded',
        color: 'var(--color-warning)',
        tooltip: 'Degraded performance',
        tooltipColor: 'warning'
      },
      {
        name: 'Cache Server',
        status: 'offline',
        color: 'var(--color-error)',
        tooltip: 'Service offline',
        tooltipColor: 'error'
      }
    ];

    statuses.forEach(({ name, status, color, tooltip, tooltipColor }) => {
      const statusItem = document.createElement('div');
      statusItem.style.cssText = `
        display: flex;
        align-items: center;
        gap: var(--space-2);
      `;

      const indicator = document.createElement('span');
      indicator.style.cssText = `
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${color};
      `;
      indicator.setAttribute('data-tooltip', tooltip);
      indicator.setAttribute('data-tooltip-color', tooltipColor);
      indicator.setAttribute('role', 'status');
      indicator.setAttribute('aria-label', status);

      const label = document.createElement('span');
      label.textContent = name;

      statusItem.appendChild(indicator);
      statusItem.appendChild(label);
      container.appendChild(statusItem);
    });

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);

    return container;
  }
};

export const Toolbar: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      padding: var(--space-4);
    `;

    const toolbar = document.createElement('div');
    toolbar.style.cssText = `
      display: flex;
      gap: var(--space-2);
      padding: var(--space-2);
      background: var(--color-bg-tertiary);
      border-radius: var(--radius-md);
      width: fit-content;
    `;
    toolbar.setAttribute('role', 'toolbar');
    toolbar.setAttribute('aria-label', 'Text formatting');

    const actions = [
      { icon: 'B', tooltip: 'Bold', label: 'Bold' },
      { icon: 'I', tooltip: 'Italic', label: 'Italic' },
      { icon: 'U', tooltip: 'Underline', label: 'Underline' },
      { icon: '≡', tooltip: 'Align left', label: 'Align left' },
      { icon: '≣', tooltip: 'Align center', label: 'Align center' },
      { icon: '≡', tooltip: 'Align right', label: 'Align right' }
    ];

    actions.forEach(({ icon, tooltip, label }, index) => {
      // Add divider before align buttons
      if (index === 3) {
        const divider = document.createElement('div');
        divider.style.cssText = `
          width: 1px;
          background: var(--color-border);
          margin: 0 var(--space-2);
        `;
        toolbar.appendChild(divider);
      }

      const button = document.createElement('button');
      button.className = 'btn btn-ghost btn-icon btn-sm';
      button.setAttribute('data-tooltip', tooltip);
      button.setAttribute('aria-label', label);
      button.textContent = icon;
      button.style.fontWeight = index < 3 ? 'bold' : 'normal';
      button.style.fontStyle = index === 1 ? 'italic' : 'normal';
      button.style.textDecoration = index === 2 ? 'underline' : 'none';
      toolbar.appendChild(button);
    });

    container.appendChild(toolbar);

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const button = document.createElement('button');
      button.className = 'btn btn-secondary';
      button.textContent = args.label || 'Hover me';
      button.setAttribute('data-tooltip', args.text || 'This is a helpful tooltip');

      if (args.position && args.position !== 'top') {
        button.setAttribute('data-tooltip-position', args.position);
      }

      if (args.color && args.color !== 'default') {
        button.setAttribute('data-tooltip-color', args.color);
      }

      if (args.size && args.size !== 'md') {
        button.setAttribute('data-tooltip-size', args.size);
      }

      // Initialize tooltips
      setTimeout(() => {
        if (window.Aural?.initTooltips) {
          window.Aural.initTooltips();
        }
      }, 0);

      return button;
    });
  },
  args: {
    text: 'Helpful tooltip',
    position: 'top',
    color: 'default',
    size: 'md',
    label: 'Hover me'
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Tooltip text content'
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip position'
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Tooltip color variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tooltip size'
    },
    label: {
      control: 'text',
      description: 'Button label'
    }
  }
};
