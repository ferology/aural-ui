import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Flexible content container with optional header, body, and footer sections.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated'],
      description: 'Card style variant'
    },
    hoverable: {
      control: 'boolean',
      description: 'Add hover effect'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';

    const card = document.createElement('div');
    card.className = `card ${args.variant !== 'default' ? `card-${args.variant}` : ''} ${args.hoverable ? 'card-hoverable' : ''}`;

    card.innerHTML = `
      <div class="card-header">
        <h3>Card Title</h3>
      </div>
      <div class="card-body">
        <p>This is the card content. Cards can contain any type of content including text, images, buttons, and more.</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary btn-sm">Action</button>
        <button class="btn btn-ghost btn-sm">Cancel</button>
      </div>
    `;

    container.appendChild(card);
    return container;
  },
  args: {
    variant: 'default',
    hoverable: false
  }
};

export const Bordered: Story = {
  ...Default,
  args: {
    variant: 'bordered',
    hoverable: false
  }
};

export const Elevated: Story = {
  ...Default,
  args: {
    variant: 'elevated',
    hoverable: false
  }
};

export const Hoverable: Story = {
  ...Default,
  args: {
    variant: 'elevated',
    hoverable: true
  }
};

export const WithImage: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';

    const card = document.createElement('div');
    card.className = 'card card-elevated card-hoverable';

    card.innerHTML = `
      <img
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop"
        alt="Card image"
        style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-md) var(--radius-md) 0 0;"
      />
      <div class="card-body">
        <h3 style="margin-top: 0;">Beautiful Landscape</h3>
        <p>A stunning view of mountains and valleys.</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary btn-sm">View More</button>
      </div>
    `;

    container.appendChild(card);
    return container;
  }
};

export const SimpleCard: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-body">
        <p>A simple card with just a body section.</p>
      </div>
    `;

    container.appendChild(card);
    return container;
  }
};

export const CardGrid: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    container.style.gap = '1.5rem';

    const cards = [
      { title: 'Analytics', content: 'View your analytics dashboard', icon: '📊' },
      { title: 'Messages', content: 'Check your messages', icon: '💬' },
      { title: 'Settings', content: 'Manage your settings', icon: '⚙️' },
      { title: 'Profile', content: 'Edit your profile', icon: '👤' }
    ];

    cards.forEach(({ title, content, icon }) => {
      const card = document.createElement('div');
      card.className = 'card card-elevated card-hoverable';
      card.innerHTML = `
        <div class="card-body">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">${icon}</div>
          <h3 style="margin-top: 0;">${title}</h3>
          <p style="margin-bottom: 0;">${content}</p>
        </div>
      `;
      container.appendChild(card);
    });

    return container;
  }
};
