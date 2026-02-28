import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Small status indicators and labels with multiple color variants.'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge text'
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Badge color variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Badge size'
    },
    pill: {
      control: 'boolean',
      description: 'Pill shape with rounded edges'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const badge = document.createElement('span');
    badge.className = `badge badge-${args.variant} badge-${args.size}`;
    if (args.pill) badge.classList.add('badge-pill');
    badge.textContent = args.label;
    return badge;
  },
  args: {
    label: 'Badge',
    variant: 'default',
    size: 'md',
    pill: false
  }
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '0.5rem';
    container.style.flexWrap = 'wrap';
    container.style.padding = '2rem';

    const variants = [
      { name: 'default', label: 'Default' },
      { name: 'primary', label: 'Primary' },
      { name: 'secondary', label: 'Secondary' },
      { name: 'success', label: 'Success' },
      { name: 'warning', label: 'Warning' },
      { name: 'error', label: 'Error' },
      { name: 'info', label: 'Info' }
    ];

    variants.forEach(({ name, label }) => {
      const badge = document.createElement('span');
      badge.className = `badge badge-${name}`;
      badge.textContent = label;
      container.appendChild(badge);
    });

    return container;
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '0.5rem';
    container.style.alignItems = 'center';
    container.style.padding = '2rem';

    const sizes = ['sm', 'md', 'lg'];

    sizes.forEach(size => {
      const badge = document.createElement('span');
      badge.className = `badge badge-primary badge-${size}`;
      badge.textContent = size.toUpperCase();
      container.appendChild(badge);
    });

    return container;
  }
};

export const Pill: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '0.5rem';
    container.style.flexWrap = 'wrap';
    container.style.padding = '2rem';

    const variants = ['primary', 'success', 'warning', 'error'];

    variants.forEach(variant => {
      const badge = document.createElement('span');
      badge.className = `badge badge-${variant} badge-pill`;
      badge.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      container.appendChild(badge);
    });

    return container;
  }
};

export const WithIcons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '0.5rem';
    container.style.flexWrap = 'wrap';
    container.style.padding = '2rem';

    const badges = [
      { variant: 'success', icon: '✓', label: 'Verified' },
      { variant: 'warning', icon: '⚠', label: 'Warning' },
      { variant: 'error', icon: '✕', label: 'Error' },
      { variant: 'info', icon: 'ℹ', label: 'Info' }
    ];

    badges.forEach(({ variant, icon, label }) => {
      const badge = document.createElement('span');
      badge.className = `badge badge-${variant}`;
      badge.innerHTML = `<span>${icon}</span> ${label}`;
      container.appendChild(badge);
    });

    return container;
  }
};

export const OnButton: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.style.position = 'relative';
    button.innerHTML = `
      Messages
      <span class="badge badge-error badge-sm" style="margin-left: 0.5rem;">5</span>
    `;

    container.appendChild(button);
    return container;
  }
};

export const StatusIndicators: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';

    const items = [
      { status: 'success', label: 'Active', text: 'Service is running' },
      { status: 'warning', label: 'Pending', text: 'Waiting for approval' },
      { status: 'error', label: 'Failed', text: 'Build failed' },
      { status: 'info', label: 'Info', text: 'New update available' }
    ];

    items.forEach(({ status, label, text }) => {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.alignItems = 'center';
      item.style.gap = '1rem';
      item.innerHTML = `
        <span class="badge badge-${status}">${label}</span>
        <span>${text}</span>
      `;
      container.appendChild(item);
    });

    return container;
  }
};
