import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Dropdown menu with keyboard navigation and click-outside handling.'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.minHeight = '300px';

    const dropdownId = 'dropdown-default';

    const dropdown = document.createElement('div');
    dropdown.id = dropdownId;
    dropdown.className = 'dropdown';

    dropdown.innerHTML = `
      <button class="btn btn-primary dropdown-trigger" aria-haspopup="true" aria-expanded="false">
        Options
        <span style="margin-left: 0.5rem;">▼</span>
      </button>
      <div class="dropdown-menu" role="menu" hidden>
        <a href="#" class="dropdown-item" role="menuitem">Edit</a>
        <a href="#" class="dropdown-item" role="menuitem">Duplicate</a>
        <a href="#" class="dropdown-item" role="menuitem">Archive</a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item dropdown-item-danger" role="menuitem">Delete</a>
      </div>
    `;

    container.appendChild(dropdown);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
    }, 100);

    return container;
  }
};

export const WithIcons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.minHeight = '300px';

    const dropdownId = 'dropdown-icons';

    const dropdown = document.createElement('div');
    dropdown.id = dropdownId;
    dropdown.className = 'dropdown';

    dropdown.innerHTML = `
      <button class="btn btn-outline dropdown-trigger">
        Actions ▼
      </button>
      <div class="dropdown-menu" role="menu" hidden>
        <a href="#" class="dropdown-item" role="menuitem">
          <span>✏️</span> Edit
        </a>
        <a href="#" class="dropdown-item" role="menuitem">
          <span>📋</span> Copy
        </a>
        <a href="#" class="dropdown-item" role="menuitem">
          <span>📤</span> Share
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item dropdown-item-danger" role="menuitem">
          <span>🗑️</span> Delete
        </a>
      </div>
    `;

    container.appendChild(dropdown);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
    }, 100);

    return container;
  }
};

export const Positions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.minHeight = '300px';

    const positions = [
      { id: 'left', label: 'Left', class: 'dropdown-left' },
      { id: 'center', label: 'Center', class: '' },
      { id: 'right', label: 'Right', class: 'dropdown-right' }
    ];

    positions.forEach(({ id, label, class: posClass }) => {
      const dropdown = document.createElement('div');
      dropdown.id = `dropdown-${id}`;
      dropdown.className = `dropdown ${posClass}`;

      dropdown.innerHTML = `
        <button class="btn btn-outline dropdown-trigger">
          ${label} ▼
        </button>
        <div class="dropdown-menu" hidden>
          <a href="#" class="dropdown-item">Item 1</a>
          <a href="#" class="dropdown-item">Item 2</a>
          <a href="#" class="dropdown-item">Item 3</a>
        </div>
      `;

      container.appendChild(dropdown);
    });

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
    }, 100);

    return container;
  }
};

export const UserMenu: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.minHeight = '300px';

    const dropdown = document.createElement('div');
    dropdown.id = 'dropdown-user';
    dropdown.className = 'dropdown dropdown-right';

    dropdown.innerHTML = `
      <button class="btn btn-ghost dropdown-trigger" style="display: flex; align-items: center; gap: 0.5rem;">
        <div style="width: 32px; height: 32px; background: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">
          JD
        </div>
        <span>John Doe</span>
        <span>▼</span>
      </button>
      <div class="dropdown-menu" hidden>
        <div style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--color-border);">
          <div style="font-weight: 500;">John Doe</div>
          <div style="font-size: 0.875rem; color: var(--color-text-secondary);">john@example.com</div>
        </div>
        <a href="#" class="dropdown-item">
          <span>👤</span> Profile
        </a>
        <a href="#" class="dropdown-item">
          <span>⚙️</span> Settings
        </a>
        <a href="#" class="dropdown-item">
          <span>💳</span> Billing
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <span>🚪</span> Sign out
        </a>
      </div>
    `;

    container.appendChild(dropdown);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
    }, 100);

    return container;
  }
};

export const WithCheckboxes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.minHeight = '300px';

    const dropdown = document.createElement('div');
    dropdown.id = 'dropdown-checkboxes';
    dropdown.className = 'dropdown';

    dropdown.innerHTML = `
      <button class="btn btn-outline dropdown-trigger">
        Filters ▼
      </button>
      <div class="dropdown-menu" hidden style="min-width: 200px;">
        <div style="padding: 0.75rem 1rem;">
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <input type="checkbox" checked />
            <span>Active</span>
          </label>
        </div>
        <div style="padding: 0.75rem 1rem;">
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <input type="checkbox" />
            <span>Inactive</span>
          </label>
        </div>
        <div style="padding: 0.75rem 1rem;">
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <input type="checkbox" checked />
            <span>Pending</span>
          </label>
        </div>
        <div class="dropdown-divider"></div>
        <div style="padding: 0.75rem 1rem;">
          <button class="btn btn-primary btn-sm" style="width: 100%;">Apply</button>
        </div>
      </div>
    `;

    container.appendChild(dropdown);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
    }, 100);

    return container;
  }
};
