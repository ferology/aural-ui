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

Contextual help text that appears on hover or focus, providing additional information without cluttering the interface.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<button data-tooltip="Helpful information">Hover me</button>
\`\`\`

**React:**
\`\`\`jsx
<button data-tooltip="Helpful information">Hover me</button>
\`\`\`

**Vue:**
\`\`\`vue
<button data-tooltip="Helpful information">Hover me</button>
\`\`\`
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

    // Add aria-describedby for accessibility
    const tooltipId = 'tooltip-' + Math.random().toString(36).substr(2, 9);
    button.setAttribute('aria-describedby', tooltipId);

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
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      padding: 4rem 2rem;
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
      button.setAttribute('aria-describedby', `tooltip-${pos}`);
      container.appendChild(button);
    });

    return container;
  }
};

export const Colors: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      padding: 2rem;
    `;

    const colors = [
      { color: '', label: 'Default', text: 'Default tooltip' },
      { color: 'primary', label: 'Primary', text: 'Primary tooltip' },
      { color: 'success', label: 'Success', text: 'Operation successful' },
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
      button.setAttribute('aria-describedby', `tooltip-${label.toLowerCase()}`);
      container.appendChild(button);
    });

    return container;
  }
};

export const Sizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      padding: 2rem;
      align-items: center;
    `;

    const sizes = [
      { size: 'sm', label: 'Small', text: 'Small tooltip' },
      { size: 'md', label: 'Medium', text: 'Medium size tooltip (default)' },
      { size: 'lg', label: 'Large', text: 'Large tooltip with more content to display' }
    ];

    sizes.forEach(({ size, label, text }) => {
      const button = document.createElement('button');
      button.className = 'btn btn-secondary';
      button.textContent = label;
      button.setAttribute('data-tooltip', text);
      button.setAttribute('data-tooltip-size', size);
      button.setAttribute('aria-describedby', `tooltip-${size}`);
      container.appendChild(button);
    });

    return container;
  }
};

export const WithIcon: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      padding: 2rem;
    `;

    const iconButtons = [
      { icon: '✏️', tooltip: 'Edit item', label: 'Edit' },
      { icon: '🗑️', tooltip: 'Delete item', label: 'Delete' },
      { icon: '📤', tooltip: 'Share with others', label: 'Share' },
      { icon: '❤️', tooltip: 'Add to favorites', label: 'Favorite' }
    ];

    iconButtons.forEach(({ icon, tooltip, label }) => {
      const button = document.createElement('button');
      button.className = 'btn btn-ghost btn-icon';
      button.setAttribute('data-tooltip', tooltip);
      button.setAttribute('aria-label', label);
      button.setAttribute('aria-describedby', `tooltip-${label.toLowerCase()}`);

      const iconSpan = document.createElement('span');
      iconSpan.setAttribute('aria-hidden', 'true');
      iconSpan.textContent = icon;
      button.appendChild(iconSpan);

      container.appendChild(button);
    });

    return container;
  }
};

export const OnButton: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      padding: 2rem;
    `;

    const buttons = [
      { variant: 'primary', label: 'Save', tooltip: 'Save your changes', icon: '✓' },
      { variant: 'secondary', label: 'Cancel', tooltip: 'Discard changes', icon: '✕' },
      { variant: 'danger', label: 'Delete', tooltip: 'Permanently delete this item', icon: '🗑️' }
    ];

    buttons.forEach(({ variant, label, tooltip, icon }) => {
      const button = document.createElement('button');
      button.className = `btn btn-${variant}`;
      button.setAttribute('data-tooltip', tooltip);
      button.setAttribute('aria-describedby', `tooltip-${label.toLowerCase()}`);

      const iconSpan = document.createElement('span');
      iconSpan.setAttribute('aria-hidden', 'true');
      iconSpan.textContent = icon;
      button.appendChild(iconSpan);
      button.appendChild(document.createTextNode(' ' + label));

      container.appendChild(button);
    });

    return container;
  }
};

export const HelpIcons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 2rem;
      max-width: 400px;
    `;

    const formFields = [
      { id: 'username', label: 'Username', tooltip: 'Your unique username for login' },
      { id: 'password', label: 'Password', tooltip: 'Must be at least 8 characters with numbers and symbols' },
      { id: 'email', label: 'Email', tooltip: 'We will send confirmation to this address' }
    ];

    formFields.forEach(({ id, label, tooltip }) => {
      const fieldGroup = document.createElement('div');
      fieldGroup.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.5rem;
      `;

      const labelElement = document.createElement('label');
      labelElement.htmlFor = id;
      labelElement.textContent = label;
      labelElement.style.fontWeight = '500';

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

    return container;
  }
};

export const StatusIndicators: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      padding: 2rem;
    `;

    const statuses = [
      {
        name: 'API Server',
        status: 'operational',
        color: '#22c55e',
        tooltip: 'Service is operational',
        tooltipColor: 'success'
      },
      {
        name: 'Database',
        status: 'degraded',
        color: '#f59e0b',
        tooltip: 'Degraded performance',
        tooltipColor: 'warning'
      },
      {
        name: 'Cache Server',
        status: 'offline',
        color: '#ef4444',
        tooltip: 'Service offline',
        tooltipColor: 'error'
      }
    ];

    statuses.forEach(({ name, status, color, tooltip, tooltipColor }) => {
      const statusItem = document.createElement('div');
      statusItem.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.5rem;
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

      const tooltipId = 'tooltip-' + Math.random().toString(36).substr(2, 9);
      button.setAttribute('aria-describedby', tooltipId);

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
