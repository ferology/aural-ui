import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'User profile images and visual identifiers with support for images, initials, status indicators, and interactive states.'
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
    status: {
      control: 'select',
      options: [null, 'online', 'offline', 'busy', 'away'],
      description: 'Status indicator'
    },
    clickable: {
      control: 'boolean',
      description: 'Make avatar clickable'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const sizeClass = args.size && args.size !== 'md' ? ` avatar-${args.size}` : '';
    const statusClass = args.status ? ` avatar-status-${args.status}` : '';
    const clickableClass = args.clickable ? ' avatar-clickable' : '';

    const avatar = document.createElement(args.clickable ? 'button' : 'div');
    avatar.className = `avatar${sizeClass}${statusClass}${clickableClass}`;

    if (args.clickable) {
      avatar.setAttribute('aria-label', 'View profile');
    }

    if (args.src) {
      avatar.innerHTML = `<img src="${args.src}" alt="User avatar">`;
    } else if (args.initials) {
      avatar.innerHTML = `<span>${args.initials}</span>`;
    } else {
      avatar.innerHTML = `<span>JD</span>`;
    }

    return avatar;
  },
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    size: 'md',
    status: null,
    clickable: false
  }
};

export const WithInitials: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';

    const avatars = ['JD', 'AB', 'CD', 'EF'];

    avatars.forEach(initials => {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerHTML = `<span>${initials}</span>`;
      container.appendChild(avatar);
    });

    return container;
  }
};

export const WithImages: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';

    for (let i = 1; i <= 4; i++) {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerHTML = `<img src="https://i.pravatar.cc/150?img=${i}" alt="User ${i}">`;
      container.appendChild(avatar);
    }

    return container;
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';

    const sizes = [
      { class: 'avatar-xs', label: 'XS' },
      { class: 'avatar-sm', label: 'SM' },
      { class: '', label: 'Default' },
      { class: 'avatar-lg', label: 'LG' },
      { class: 'avatar-xl', label: 'XL' }
    ];

    sizes.forEach(({ class: sizeClass, label }) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = 'var(--space-2)';

      const avatar = document.createElement('div');
      avatar.className = sizeClass ? `avatar ${sizeClass}` : 'avatar';
      avatar.innerHTML = `<span>${label}</span>`;

      const labelEl = document.createElement('p');
      labelEl.style.fontSize = 'var(--text-xs)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.style.margin = '0';
      labelEl.textContent = label;

      wrapper.appendChild(avatar);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const WithStatus: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';

    const statuses = [
      { status: 'online', label: 'Online' },
      { status: 'busy', label: 'Busy' },
      { status: 'away', label: 'Away' },
      { status: 'offline', label: 'Offline' }
    ];

    statuses.forEach(({ status, label }, index) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = 'var(--space-2)';

      const avatar = document.createElement('div');
      avatar.className = `avatar avatar-status-${status}`;
      avatar.innerHTML = `<img src="https://i.pravatar.cc/150?img=${index + 5}" alt="User ${status}">`;

      const labelEl = document.createElement('p');
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.style.margin = '0';
      labelEl.textContent = label;

      wrapper.appendChild(avatar);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const Clickable: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';

    const examples = [
      { src: 'https://i.pravatar.cc/150?img=14', alt: 'John Doe' },
      { src: 'https://i.pravatar.cc/150?img=15', alt: 'Jane Smith' },
      { src: 'https://i.pravatar.cc/150?img=16', alt: 'Mike Johnson', status: 'online' },
      { initials: 'SW', alt: 'Sarah Wilson', size: 'lg' }
    ];

    examples.forEach(({ src, initials, alt, status, size }) => {
      const avatar = document.createElement('button');
      const sizeClass = size ? ` avatar-${size}` : '';
      const statusClass = status ? ` avatar-status-${status}` : '';
      avatar.className = `avatar avatar-clickable${sizeClass}${statusClass}`;
      avatar.setAttribute('aria-label', `View profile of ${alt}`);
      avatar.setAttribute('tabindex', '0');

      if (src) {
        avatar.innerHTML = `<img src="${src}" alt="">`;
      } else {
        avatar.innerHTML = `<span>${initials}</span>`;
      }

      container.appendChild(avatar);
    });

    return container;
  }
};

export const AvatarGroup: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    // Initials group
    const group1 = document.createElement('div');
    group1.className = 'avatar-group';
    const initials = ['A', 'B', 'C', 'D', '+5'];
    initials.forEach(initial => {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerHTML = `<span>${initial}</span>`;
      group1.appendChild(avatar);
    });
    container.appendChild(group1);

    // Images group
    const group2 = document.createElement('div');
    group2.className = 'avatar-group';
    for (let i = 10; i <= 13; i++) {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerHTML = `<img src="https://i.pravatar.cc/150?img=${i}" alt="User ${i}">`;
      group2.appendChild(avatar);
    }
    container.appendChild(group2);

    return container;
  }
};

export const UserProfile: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    // Basic user profile
    const profile1 = document.createElement('div');
    profile1.style.display = 'flex';
    profile1.style.alignItems = 'center';
    profile1.style.gap = 'var(--space-3)';

    const avatar1 = document.createElement('div');
    avatar1.className = 'avatar';
    avatar1.innerHTML = `<img src="https://i.pravatar.cc/150?img=20" alt="John Doe">`;

    const info1 = document.createElement('div');
    info1.innerHTML = `
      <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">John Doe</div>
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">john.doe@example.com</div>
    `;

    profile1.appendChild(avatar1);
    profile1.appendChild(info1);
    container.appendChild(profile1);

    // Online user
    const profile2 = document.createElement('div');
    profile2.style.display = 'flex';
    profile2.style.alignItems = 'center';
    profile2.style.gap = 'var(--space-3)';

    const avatar2 = document.createElement('div');
    avatar2.className = 'avatar avatar-status-online';
    avatar2.innerHTML = `<img src="https://i.pravatar.cc/150?img=21" alt="Jane Smith">`;

    const info2 = document.createElement('div');
    info2.innerHTML = `
      <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">Jane Smith</div>
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">Active now</div>
    `;

    profile2.appendChild(avatar2);
    profile2.appendChild(info2);
    container.appendChild(profile2);

    return container;
  }
};

export const UserList: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';

    const users = [
      {
        src: 'https://i.pravatar.cc/150?img=20',
        name: 'John Doe',
        role: 'Product Designer',
        badge: 'Admin',
        badgeClass: 'badge-success'
      },
      {
        src: 'https://i.pravatar.cc/150?img=21',
        name: 'Jane Smith',
        role: 'Developer',
        badge: 'Member',
        badgeClass: 'badge-secondary',
        status: 'online'
      },
      {
        initials: 'MJ',
        name: 'Mike Johnson',
        role: 'Marketing Manager',
        badge: 'Member',
        badgeClass: 'badge-secondary',
        status: 'away'
      }
    ];

    users.forEach(({ src, initials, name, role, badge, badgeClass, status }) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = 'var(--space-3)';

      const avatar = document.createElement('div');
      const statusClass = status ? ` avatar-status-${status}` : '';
      avatar.className = `avatar avatar-sm${statusClass}`;

      if (src) {
        avatar.innerHTML = `<img src="${src}" alt="${name}">`;
      } else {
        avatar.innerHTML = `<span>${initials}</span>`;
      }

      const info = document.createElement('div');
      info.style.flex = '1';
      info.innerHTML = `
        <div style="font-weight: var(--font-semibold); color: var(--color-text-primary); font-size: var(--text-sm);">${name}</div>
        <div style="font-size: var(--text-xs); color: var(--color-text-secondary);">${role}</div>
      `;

      const badgeEl = document.createElement('span');
      badgeEl.className = `badge ${badgeClass} badge-sm`;
      badgeEl.textContent = badge;

      row.appendChild(avatar);
      row.appendChild(info);
      row.appendChild(badgeEl);
      container.appendChild(row);
    });

    return container;
  }
};

export const Comments: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    const comments = [
      {
        src: 'https://i.pravatar.cc/150?img=30',
        name: 'Sarah Wilson',
        time: '2 hours ago',
        text: 'Great work on the new design! The color scheme really pops and the layout is much more intuitive.'
      },
      {
        initials: 'TJ',
        name: 'Tom Jackson',
        time: '5 hours ago',
        text: 'Updated the documentation with the latest API changes. Please review when you get a chance.'
      }
    ];

    comments.forEach(({ src, initials, name, time, text }) => {
      const comment = document.createElement('div');
      comment.style.display = 'flex';
      comment.style.gap = 'var(--space-3)';

      const avatar = document.createElement('div');
      avatar.className = 'avatar avatar-sm';

      if (src) {
        avatar.innerHTML = `<img src="${src}" alt="${name}">`;
      } else {
        avatar.innerHTML = `<span>${initials}</span>`;
      }

      const content = document.createElement('div');
      content.style.flex = '1';
      content.innerHTML = `
        <div>
          <span style="font-weight: var(--font-semibold); color: var(--color-text-primary);">${name}</span>
          <span style="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-left: var(--space-2);">${time}</span>
        </div>
        <p style="margin: var(--space-2) 0 0 0; color: var(--color-text-secondary); font-size: var(--text-sm);">${text}</p>
      `;

      comment.appendChild(avatar);
      comment.appendChild(content);
      container.appendChild(comment);
    });

    return container;
  }
};
