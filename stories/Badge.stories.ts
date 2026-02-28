import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Small, versatile status indicators and labels for displaying counts, statuses, and categories.'
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
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'],
      description: 'Badge color variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Badge size'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const badge = document.createElement('span');
    const classes = ['badge', `badge-${args.variant}`];
    if (args.size === 'sm') classes.push('badge-sm');
    if (args.size === 'lg') classes.push('badge-lg');
    badge.className = classes.join(' ');
    badge.textContent = args.label;
    return badge;
  },
  args: {
    label: 'Badge',
    variant: 'primary',
    size: 'default'
  }
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-3)';
    container.style.flexWrap = 'wrap';
    container.style.padding = '2rem';
    container.style.alignItems = 'center';

    const variants = [
      { name: 'primary', label: 'Primary' },
      { name: 'secondary', label: 'Secondary' },
      { name: 'success', label: 'Success' },
      { name: 'error', label: 'Error' },
      { name: 'warning', label: 'Warning' },
      { name: 'info', label: 'Info' },
      { name: 'neutral', label: 'Neutral' }
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
    container.style.gap = 'var(--space-3)';
    container.style.alignItems = 'center';
    container.style.padding = '2rem';

    const sizes = [
      { class: 'badge-sm', label: 'Small' },
      { class: '', label: 'Default' },
      { class: 'badge-lg', label: 'Large' }
    ];

    sizes.forEach(({ class: sizeClass, label }) => {
      const badge = document.createElement('span');
      badge.className = sizeClass ? `badge badge-primary ${sizeClass}` : 'badge badge-primary';
      badge.textContent = label;
      container.appendChild(badge);
    });

    return container;
  }
};

export const WithIcons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-3)';
    container.style.flexWrap = 'wrap';
    container.style.padding = '2rem';

    const badges = [
      { variant: 'success', icon: 'check-circle', label: 'Verified' },
      { variant: 'error', icon: 'x-circle', label: 'Failed' },
      { variant: 'warning', icon: 'alert-triangle', label: 'Pending' },
      { variant: 'info', icon: 'info', label: 'New' }
    ];

    badges.forEach(({ variant, icon, label }) => {
      const badge = document.createElement('span');
      badge.className = `badge badge-${variant}`;

      const iconElement = document.createElement('i');
      iconElement.setAttribute('data-lucide', icon);
      iconElement.style.width = '14px';
      iconElement.style.height = '14px';

      badge.appendChild(iconElement);
      badge.appendChild(document.createTextNode(' ' + label));
      container.appendChild(badge);
    });

    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
      setTimeout(() => lucide.createIcons(), 0);
    }

    return container;
  }
};

export const StatusIndicators: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    const items = [
      { status: 'success', label: 'Delivered', text: 'Order Status' },
      { status: 'warning', label: 'In Transit', text: 'Order Status' },
      { status: 'error', label: 'Cancelled', text: 'Order Status' }
    ];

    items.forEach(({ status, label, text }) => {
      const item = document.createElement('div');
      item.innerHTML = `
        <div style="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: var(--space-2);">${text}</div>
        <span class="badge badge-${status}">${label}</span>
      `;
      container.appendChild(item);
    });

    return container;
  }
};

export const UserRoles: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';

    const users = [
      { name: 'John Doe', role: 'Admin', verified: true },
      { name: 'Jane Smith', role: 'Editor', verified: true },
      { name: 'Bob Johnson', role: 'Viewer', verified: false }
    ];

    users.forEach(({ name, role, verified }) => {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.gap = 'var(--space-2)';
      item.style.alignItems = 'center';

      const nameSpan = document.createElement('span');
      nameSpan.style.color = 'var(--color-text-primary)';
      nameSpan.textContent = name;

      const roleBadge = document.createElement('span');
      roleBadge.className = 'badge badge-primary badge-sm';
      roleBadge.textContent = role;

      item.appendChild(nameSpan);
      item.appendChild(roleBadge);

      if (verified) {
        const verifiedBadge = document.createElement('span');
        verifiedBadge.className = 'badge badge-success badge-sm';

        const iconElement = document.createElement('i');
        iconElement.setAttribute('data-lucide', 'check');
        iconElement.style.width = '12px';
        iconElement.style.height = '12px';

        verifiedBadge.appendChild(iconElement);
        verifiedBadge.appendChild(document.createTextNode(' Verified'));
        item.appendChild(verifiedBadge);
      }

      container.appendChild(item);
    });

    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
      setTimeout(() => lucide.createIcons(), 0);
    }

    return container;
  }
};

export const NotificationBadges: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    container.style.alignItems = 'center';
    container.style.padding = '2rem';

    const notifications = [
      { icon: 'bell', count: '3', variant: 'error', label: 'Notifications, 3 unread' },
      { icon: 'mail', count: '12', variant: 'primary', label: 'Messages, 12 unread' },
      { icon: 'shopping-cart', count: '5', variant: 'success', label: 'Shopping cart, 5 items' }
    ];

    notifications.forEach(({ icon, count, variant, label }) => {
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.display = 'inline-flex';

      const button = document.createElement('button');
      button.className = 'btn btn-ghost btn-icon';
      button.setAttribute('aria-label', label);

      const iconElement = document.createElement('i');
      iconElement.setAttribute('data-lucide', icon);
      button.appendChild(iconElement);

      const badge = document.createElement('span');
      badge.className = `badge badge-${variant} badge-sm`;
      badge.setAttribute('aria-hidden', 'true');
      badge.style.position = 'absolute';
      badge.style.top = '-4px';
      badge.style.right = '-4px';
      badge.style.minWidth = '18px';
      badge.style.height = '18px';
      badge.style.borderRadius = '9px';
      badge.style.padding = '0 4px';
      badge.style.display = 'flex';
      badge.style.alignItems = 'center';
      badge.style.justifyContent = 'center';
      badge.style.fontSize = '10px';
      badge.textContent = count;

      wrapper.appendChild(button);
      wrapper.appendChild(badge);
      container.appendChild(wrapper);
    });

    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
      setTimeout(() => lucide.createIcons(), 0);
    }

    return container;
  }
};

export const ContentTags: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const header = document.createElement('div');
    header.style.fontSize = 'var(--text-sm)';
    header.style.color = 'var(--color-text-tertiary)';
    header.style.marginBottom = 'var(--space-2)';
    header.textContent = 'Article Tags';

    const tagsContainer = document.createElement('div');
    tagsContainer.style.display = 'flex';
    tagsContainer.style.gap = 'var(--space-2)';
    tagsContainer.style.flexWrap = 'wrap';

    const tags = ['JavaScript', 'React', 'Tutorial'];
    tags.forEach(tag => {
      const badge = document.createElement('span');
      badge.className = 'badge badge-secondary';
      badge.textContent = tag;
      tagsContainer.appendChild(badge);
    });

    const featuredBadge = document.createElement('span');
    featuredBadge.className = 'badge badge-primary badge-sm';
    featuredBadge.textContent = 'Featured';
    tagsContainer.appendChild(featuredBadge);

    container.appendChild(header);
    container.appendChild(tagsContainer);
    return container;
  }
};
