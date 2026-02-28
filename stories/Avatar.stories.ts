import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'User profile images or initials with various sizes and shapes.'
      }
    }
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Image URL'
    },
    initials: {
      control: 'text',
      description: 'Initials to display'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size'
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
      description: 'Avatar shape'
    },
    status: {
      control: 'select',
      options: [null, 'online', 'offline', 'busy', 'away'],
      description: 'Status indicator'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const avatar = document.createElement('div');
    avatar.className = `avatar avatar-${args.size} avatar-${args.shape}${args.status ? ' avatar-with-status' : ''}`;

    if (args.src) {
      avatar.innerHTML = `<img src="${args.src}" alt="Avatar" class="avatar-image" />`;
    } else if (args.initials) {
      avatar.innerHTML = `<span class="avatar-initials">${args.initials}</span>`;
    } else {
      avatar.innerHTML = `
        <span class="avatar-placeholder">
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
        </span>
      `;
    }

    if (args.status) {
      const statusIndicator = document.createElement('span');
      statusIndicator.className = `avatar-status avatar-status-${args.status}`;
      avatar.appendChild(statusIndicator);
    }

    return avatar;
  },
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    size: 'md',
    shape: 'circle',
    status: null
  }
};

export const WithInitials: Story = {
  ...Default,
  args: {
    initials: 'JD',
    size: 'md',
    shape: 'circle',
    status: null
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.alignItems = 'center';
    container.style.padding = '2rem';

    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

    sizes.forEach(size => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';

      const avatar = document.createElement('div');
      avatar.className = `avatar avatar-${size} avatar-circle`;
      avatar.innerHTML = `<img src="https://i.pravatar.cc/150?img=1" alt="Avatar" class="avatar-image" />`;

      const label = document.createElement('div');
      label.style.marginTop = '0.5rem';
      label.style.fontSize = '0.75rem';
      label.textContent = size.toUpperCase();

      wrapper.appendChild(avatar);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const AllShapes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '2rem';
    container.style.padding = '2rem';

    const shapes = ['circle', 'rounded', 'square'];

    shapes.forEach(shape => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';

      const avatar = document.createElement('div');
      avatar.className = `avatar avatar-lg avatar-${shape}`;
      avatar.innerHTML = `<img src="https://i.pravatar.cc/150?img=2" alt="Avatar" class="avatar-image" />`;

      const label = document.createElement('div');
      label.style.marginTop = '0.5rem';
      label.textContent = shape.charAt(0).toUpperCase() + shape.slice(1);

      wrapper.appendChild(avatar);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const WithStatus: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '2rem';
    container.style.padding = '2rem';

    const statuses = [
      { status: 'online', label: 'Online' },
      { status: 'offline', label: 'Offline' },
      { status: 'busy', label: 'Busy' },
      { status: 'away', label: 'Away' }
    ];

    statuses.forEach(({ status, label }) => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';

      const avatar = document.createElement('div');
      avatar.className = `avatar avatar-md avatar-circle avatar-with-status`;
      avatar.innerHTML = `
        <img src="https://i.pravatar.cc/150?img=${statuses.indexOf({ status, label }) + 1}" alt="Avatar" class="avatar-image" />
        <span class="avatar-status avatar-status-${status}"></span>
      `;

      const labelEl = document.createElement('div');
      labelEl.style.marginTop = '0.5rem';
      labelEl.style.fontSize = '0.875rem';
      labelEl.textContent = label;

      wrapper.appendChild(avatar);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const InitialsOnly: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.padding = '2rem';

    const users = [
      { initials: 'JD', name: 'John Doe' },
      { initials: 'SA', name: 'Sarah Anderson' },
      { initials: 'MK', name: 'Mike Kumar' },
      { initials: 'EW', name: 'Emily Wilson' }
    ];

    users.forEach(({ initials, name }) => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';

      const avatar = document.createElement('div');
      avatar.className = 'avatar avatar-md avatar-circle';
      avatar.innerHTML = `<span class="avatar-initials">${initials}</span>`;

      const label = document.createElement('div');
      label.style.marginTop = '0.5rem';
      label.style.fontSize = '0.875rem';
      label.textContent = name;

      wrapper.appendChild(avatar);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const AvatarGroup: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const group = document.createElement('div');
    group.style.display = 'flex';
    group.style.alignItems = 'center';

    for (let i = 1; i <= 4; i++) {
      const avatar = document.createElement('div');
      avatar.className = 'avatar avatar-md avatar-circle';
      avatar.style.marginLeft = i > 1 ? '-0.75rem' : '0';
      avatar.style.border = '2px solid var(--color-bg-primary)';
      avatar.innerHTML = `<img src="https://i.pravatar.cc/150?img=${i}" alt="Avatar" class="avatar-image" />`;
      group.appendChild(avatar);
    }

    const more = document.createElement('div');
    more.className = 'avatar avatar-md avatar-circle';
    more.style.marginLeft = '-0.75rem';
    more.style.border = '2px solid var(--color-bg-primary)';
    more.innerHTML = '<span class="avatar-initials">+5</span>';
    group.appendChild(more);

    container.appendChild(group);
    return container;
  }
};
