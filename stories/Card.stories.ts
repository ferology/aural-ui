import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Flexible, composable content containers for organizing and displaying related information.'
      }
    }
  },
  argTypes: {
    hover: {
      control: 'boolean',
      description: 'Add hover effect with card-hover class'
    }
  }
};

export default meta;
type Story = StoryObj;

export const BasicCard: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-body">
        <h3 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Simple Card</h3>
        <p style="margin: 0; color: var(--color-text-secondary);">A basic card with just a body. Perfect for simple content grouping without extra decoration.</p>
      </div>
    `;

    container.appendChild(card);
    return container;
  }
};

export const WithHeaderAndFooter: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-header">
        <h3 class="card-title">Project Status</h3>
        <span class="badge badge-success">Active</span>
      </div>
      <div class="card-body">
        <p style="margin: 0; color: var(--color-text-secondary);">This project is currently in active development. The team is working on implementing new features and bug fixes.</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary btn-sm">View Details</button>
        <button class="btn btn-ghost btn-sm">Edit</button>
      </div>
    `;

    container.appendChild(card);
    return container;
  }
};

export const StatCard: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '300px';

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-body">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-3);">
          <h4 style="margin: 0; color: var(--color-text-primary);">Total Revenue</h4>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <div style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-text-primary); margin-bottom: var(--space-2);">$45,231</div>
        <div style="display: flex; align-items: center; gap: var(--space-2);">
          <span class="badge badge-success badge-sm">
            ↑ 12%
          </span>
          <span style="font-size: var(--text-sm); color: var(--color-text-tertiary);">vs last month</span>
        </div>
      </div>
    `;

    container.appendChild(card);
    return container;
  }
};

export const WithImage: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '300px';

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-image" style="height: 160px; background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); display: flex; align-items: center; justify-content: center; color: white; font-size: var(--text-3xl);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      </div>
      <div class="card-body">
        <h3 style="margin: 0 0 var(--space-3) 0; color: var(--color-text-primary); font-size: var(--text-lg); font-weight: var(--font-semibold);">Design System</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed);">Complete design system with 60+ components and utilities.</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary btn-sm" style="width: 100%;">Learn More</button>
      </div>
    `;

    container.appendChild(card);
    return container;
  }
};

export const ProductCard: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '320px';

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-image" style="height: 200px; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; color: white;">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      </div>
      <div class="card-body">
        <span class="badge badge-primary badge-sm" style="margin-bottom: var(--space-2);">New</span>
        <h3 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary); font-size: var(--text-lg);">Product Name</h3>
        <p style="margin: 0 0 var(--space-4) 0; color: var(--color-text-secondary); font-size: var(--text-sm);">High-quality product with amazing features and excellent reviews.</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: var(--color-text-primary);">$29.99</span>
          <button class="btn btn-primary btn-sm">Add to Cart</button>
        </div>
      </div>
    `;

    container.appendChild(card);
    return container;
  }
};

export const HoverableCard: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '250px';

    const card = document.createElement('button');
    card.className = 'card card-hover';
    card.style.border = 'inherit';
    card.style.background = 'inherit';
    card.style.textAlign = 'inherit';
    card.style.width = '100%';
    card.setAttribute('aria-label', 'Manage team members');

    card.innerHTML = `
      <div class="card-body" style="text-align: center;">
        <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); background: var(--color-primary-subtle); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-primary);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h4 style="margin: 0 0 var(--space-1) 0; color: var(--color-text-primary);">Team</h4>
        <p style="margin: 0; color: var(--color-text-tertiary); font-size: var(--text-sm);">Manage members</p>
      </div>
    `;

    container.appendChild(card);
    return container;
  }
};

export const HorizontalCard: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const card = document.createElement('div');
    card.className = 'card';
    card.style.padding = '0';
    card.style.overflow = 'hidden';

    card.innerHTML = `
      <div style="display: flex;">
        <div style="width: 200px; min-height: 180px; background: linear-gradient(135deg, var(--color-warning), var(--color-error)); flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: white;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <div style="flex: 1; padding: var(--space-6); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h3 style="margin: 0 0 var(--space-3) 0; color: var(--color-text-primary); font-size: var(--text-lg); font-weight: var(--font-semibold);">Premium Plan</h3>
            <p style="margin: 0 0 var(--space-4) 0; color: var(--color-text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed);">All features included with priority support and custom integrations.</p>
            <div style="display: flex; align-items: baseline; gap: var(--space-2);">
              <span style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-text-primary);">$99</span>
              <span style="color: var(--color-text-tertiary); font-size: var(--text-sm);">/month</span>
            </div>
          </div>
          <div style="margin-top: var(--space-5);">
            <button class="btn btn-primary btn-sm">Subscribe Now</button>
          </div>
        </div>
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
    container.style.gap = 'var(--space-6)';

    const stats = [
      {
        title: 'Total Revenue',
        value: '$45,231',
        change: '+12%',
        trend: 'up',
        icon: `<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>`
      },
      {
        title: 'New Users',
        value: '1,429',
        change: '+8%',
        trend: 'up',
        icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>`
      },
      {
        title: 'Conversion Rate',
        value: '3.24%',
        change: '-2%',
        trend: 'down',
        icon: `<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>`
      }
    ];

    stats.forEach(({ title, value, change, trend, icon }) => {
      const card = document.createElement('div');
      card.className = 'card';
      const badgeClass = trend === 'up' ? 'badge-success' : 'badge-error';
      const iconColor = trend === 'up' ? 'var(--color-success)' : 'var(--color-error)';

      card.innerHTML = `
        <div class="card-body">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-3);">
            <h4 style="margin: 0; color: var(--color-text-primary);">${title}</h4>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2">
              ${icon}
            </svg>
          </div>
          <div style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-text-primary); margin-bottom: var(--space-2);">${value}</div>
          <div style="display: flex; align-items: center; gap: var(--space-2);">
            <span class="badge ${badgeClass} badge-sm">
              ${change}
            </span>
            <span style="font-size: var(--text-sm); color: var(--color-text-tertiary);">vs last month</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    return container;
  }
};

export const FeatureGrid: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    container.style.gap = 'var(--space-6)';

    const features = [
      {
        title: 'Fast Performance',
        description: 'Lightning-fast load times',
        color: 'var(--color-primary)',
        bgColor: 'var(--color-primary-subtle)',
        icon: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>`
      },
      {
        title: 'Secure by Default',
        description: 'Built-in security features',
        color: 'var(--color-success)',
        bgColor: 'var(--color-success-subtle)',
        icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>`
      },
      {
        title: 'Mobile Friendly',
        description: 'Responsive everywhere',
        color: 'var(--color-secondary)',
        bgColor: 'var(--color-secondary-subtle)',
        icon: `<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>`
      }
    ];

    features.forEach(({ title, description, color, bgColor, icon }) => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <div class="card-body" style="text-align: center;">
          <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); background: ${bgColor}; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: ${color};">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${icon}
            </svg>
          </div>
          <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">${title}</h4>
          <p style="margin: 0; color: var(--color-text-secondary); font-size: var(--text-sm);">${description}</p>
        </div>
      `;
      container.appendChild(card);
    });

    return container;
  }
};
