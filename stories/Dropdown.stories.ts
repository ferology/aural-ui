import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Reveal contextual menus and actions on demand. Dropdowns display a list of options when triggered, providing access to secondary functions without cluttering the interface.'
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

    container.innerHTML = `
      <div class="dropdown" id="dropdown-default">
        <button class="btn btn-primary dropdown-trigger" aria-expanded="false" aria-haspopup="true">
          Options
          <i data-lucide="chevron-down" style="width: 16px; height: 16px; margin-left: 6px;" aria-hidden="true"></i>
        </button>
        <div class="dropdown-menu" role="menu" aria-labelledby="dropdown-default-trigger" hidden>
          <a href="#" class="dropdown-item" role="menuitem">Profile</a>
          <a href="#" class="dropdown-item" role="menuitem">Settings</a>
          <a href="#" class="dropdown-item" role="menuitem">Help Center</a>
          <div class="dropdown-divider" role="separator"></div>
          <a href="#" class="dropdown-item" role="menuitem">Sign Out</a>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);

    return container;
  }
};

export const ButtonVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.minHeight = '300px';

    container.innerHTML = `
      <div style="display: flex; gap: var(--space-4); flex-wrap: wrap;">
        <div class="dropdown" id="dropdown-primary">
          <button class="btn btn-primary dropdown-trigger" aria-expanded="false" aria-haspopup="true">
            Primary
            <i data-lucide="chevron-down" style="width: 16px; height: 16px; margin-left: 6px;"></i>
          </button>
          <div class="dropdown-menu" role="menu" hidden>
            <a href="#" class="dropdown-item" role="menuitem">Action 1</a>
            <a href="#" class="dropdown-item" role="menuitem">Action 2</a>
          </div>
        </div>

        <div class="dropdown" id="dropdown-secondary">
          <button class="btn btn-secondary dropdown-trigger" aria-expanded="false" aria-haspopup="true">
            Secondary
            <i data-lucide="chevron-down" style="width: 16px; height: 16px; margin-left: 6px;"></i>
          </button>
          <div class="dropdown-menu" role="menu" hidden>
            <a href="#" class="dropdown-item" role="menuitem">Action 1</a>
            <a href="#" class="dropdown-item" role="menuitem">Action 2</a>
          </div>
        </div>

        <div class="dropdown" id="dropdown-ghost">
          <button class="btn btn-ghost dropdown-trigger" aria-expanded="false" aria-haspopup="true">
            Ghost
            <i data-lucide="chevron-down" style="width: 16px; height: 16px; margin-left: 6px;"></i>
          </button>
          <div class="dropdown-menu" role="menu" hidden>
            <a href="#" class="dropdown-item" role="menuitem">Action 1</a>
            <a href="#" class="dropdown-item" role="menuitem">Action 2</a>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
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

    container.innerHTML = `
      <div class="dropdown" id="dropdown-icons">
        <button class="btn btn-secondary dropdown-trigger" aria-expanded="false" aria-haspopup="true">
          Actions
          <i data-lucide="chevron-down" style="width: 16px; height: 16px; margin-left: 6px;"></i>
        </button>
        <div class="dropdown-menu" role="menu" hidden>
          <a href="#" class="dropdown-item" role="menuitem">
            <i data-lucide="edit" style="width: 16px; height: 16px; margin-right: 8px;"></i>
            Edit
          </a>
          <a href="#" class="dropdown-item" role="menuitem">
            <i data-lucide="copy" style="width: 16px; height: 16px; margin-right: 8px;"></i>
            Duplicate
          </a>
          <a href="#" class="dropdown-item" role="menuitem">
            <i data-lucide="share-2" style="width: 16px; height: 16px; margin-right: 8px;"></i>
            Share
          </a>
          <div class="dropdown-divider" role="separator"></div>
          <a href="#" class="dropdown-item dropdown-item-danger" role="menuitem">
            <i data-lucide="trash-2" style="width: 16px; height: 16px; margin-right: 8px;"></i>
            Delete
          </a>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);

    return container;
  }
};

export const IconOnlyTrigger: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.minHeight = '300px';

    container.innerHTML = `
      <div style="display: flex; gap: var(--space-4); flex-wrap: wrap;">
        <div class="dropdown" id="dropdown-icon-only">
          <button class="btn btn-ghost btn-icon dropdown-trigger" aria-expanded="false" aria-haspopup="true" aria-label="More options">
            <i data-lucide="more-vertical" style="width: 20px; height: 20px;"></i>
          </button>
          <div class="dropdown-menu" role="menu" hidden>
            <a href="#" class="dropdown-item" role="menuitem">View</a>
            <a href="#" class="dropdown-item" role="menuitem">Edit</a>
            <a href="#" class="dropdown-item" role="menuitem">Share</a>
          </div>
        </div>

        <div class="dropdown" id="dropdown-icon-dots">
          <button class="btn btn-secondary btn-icon dropdown-trigger" aria-expanded="false" aria-haspopup="true" aria-label="More options">
            <i data-lucide="more-horizontal" style="width: 20px; height: 20px;"></i>
          </button>
          <div class="dropdown-menu" role="menu" hidden>
            <a href="#" class="dropdown-item" role="menuitem">Option A</a>
            <a href="#" class="dropdown-item" role="menuitem">Option B</a>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);

    return container;
  }
};

export const RightAlignedMenu: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.minHeight = '300px';
    container.style.display = 'flex';
    container.style.justifyContent = 'flex-end';

    container.innerHTML = `
      <div class="dropdown dropdown-right" id="dropdown-right">
        <button class="btn btn-secondary dropdown-trigger" aria-expanded="false" aria-haspopup="true">
          Right Aligned
          <i data-lucide="chevron-down" style="width: 16px; height: 16px; margin-left: 6px;"></i>
        </button>
        <div class="dropdown-menu" role="menu" hidden>
          <a href="#" class="dropdown-item" role="menuitem">Option 1</a>
          <a href="#" class="dropdown-item" role="menuitem">Option 2</a>
          <a href="#" class="dropdown-item" role="menuitem">Option 3</a>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);

    return container;
  }
};

export const WithHeadersAndSections: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.minHeight = '400px';

    container.innerHTML = `
      <div class="dropdown" id="dropdown-headers">
        <button class="btn btn-secondary dropdown-trigger" aria-expanded="false" aria-haspopup="true">
          Grouped Menu
          <i data-lucide="chevron-down" style="width: 16px; height: 16px; margin-left: 6px;"></i>
        </button>
        <div class="dropdown-menu" role="menu" hidden style="min-width: 200px;">
          <div class="dropdown-header">Account</div>
          <a href="#" class="dropdown-item" role="menuitem">Profile</a>
          <a href="#" class="dropdown-item" role="menuitem">Settings</a>
          <div class="dropdown-divider" role="separator"></div>
          <div class="dropdown-header">Team</div>
          <a href="#" class="dropdown-item" role="menuitem">Members</a>
          <a href="#" class="dropdown-item" role="menuitem">Invite</a>
          <div class="dropdown-divider" role="separator"></div>
          <a href="#" class="dropdown-item" role="menuitem">Sign Out</a>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);

    return container;
  }
};

export const UserMenu: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.minHeight = '400px';

    container.innerHTML = `
      <div class="dropdown" id="dropdown-user">
        <button class="btn btn-ghost dropdown-trigger" aria-expanded="false" aria-haspopup="true" style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); display: flex; align-items: center; justify-content: center; color: white; font-weight: var(--font-semibold); font-size: var(--text-sm);">
            JD
          </div>
          <span>John Doe</span>
          <i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i>
        </button>
        <div class="dropdown-menu" role="menu" hidden style="min-width: 220px;">
          <div style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border-subtle);">
            <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">John Doe</div>
            <div style="font-size: var(--text-sm); color: var(--color-text-tertiary);">john.doe@example.com</div>
          </div>
          <a href="#" class="dropdown-item" role="menuitem">
            <i data-lucide="user" style="width: 16px; height: 16px; margin-right: 8px;"></i>
            Your Profile
          </a>
          <a href="#" class="dropdown-item" role="menuitem">
            <i data-lucide="settings" style="width: 16px; height: 16px; margin-right: 8px;"></i>
            Settings
          </a>
          <div class="dropdown-divider" role="separator"></div>
          <a href="#" class="dropdown-item" role="menuitem">
            <i data-lucide="log-out" style="width: 16px; height: 16px; margin-right: 8px;"></i>
            Sign Out
          </a>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);

    return container;
  }
};

export const TableRowActions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.minHeight = '400px';
    container.style.display = 'block';

    container.innerHTML = `
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th style="width: 50px;"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Project Alpha</td>
            <td><span class="badge badge-success">Active</span></td>
            <td>Jan 26, 2026</td>
            <td>
              <div class="dropdown dropdown-right" id="dropdown-table-1">
                <button class="btn btn-ghost btn-icon btn-sm dropdown-trigger" aria-expanded="false" aria-haspopup="true" aria-label="Row actions">
                  <i data-lucide="more-vertical" style="width: 16px; height: 16px;"></i>
                </button>
                <div class="dropdown-menu" role="menu" hidden>
                  <a href="#" class="dropdown-item" role="menuitem">
                    <i data-lucide="eye" style="width: 16px; height: 16px; margin-right: 8px;"></i>
                    View
                  </a>
                  <a href="#" class="dropdown-item" role="menuitem">
                    <i data-lucide="edit" style="width: 16px; height: 16px; margin-right: 8px;"></i>
                    Edit
                  </a>
                  <div class="dropdown-divider" role="separator"></div>
                  <a href="#" class="dropdown-item dropdown-item-danger" role="menuitem">
                    <i data-lucide="trash-2" style="width: 16px; height: 16px; margin-right: 8px;"></i>
                    Delete
                  </a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Project Beta</td>
            <td><span class="badge badge-warning">Pending</span></td>
            <td>Jan 25, 2026</td>
            <td>
              <div class="dropdown dropdown-right" id="dropdown-table-2">
                <button class="btn btn-ghost btn-icon btn-sm dropdown-trigger" aria-expanded="false" aria-haspopup="true" aria-label="Row actions">
                  <i data-lucide="more-vertical" style="width: 16px; height: 16px;"></i>
                </button>
                <div class="dropdown-menu" role="menu" hidden>
                  <a href="#" class="dropdown-item" role="menuitem">
                    <i data-lucide="eye" style="width: 16px; height: 16px; margin-right: 8px;"></i>
                    View
                  </a>
                  <a href="#" class="dropdown-item" role="menuitem">
                    <i data-lucide="edit" style="width: 16px; height: 16px; margin-right: 8px;"></i>
                    Edit
                  </a>
                  <div class="dropdown-divider" role="separator"></div>
                  <a href="#" class="dropdown-item dropdown-item-danger" role="menuitem">
                    <i data-lucide="trash-2" style="width: 16px; height: 16px; margin-right: 8px;"></i>
                    Delete
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);

    return container;
  }
};

export const WithNotifications: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.minHeight = '400px';

    container.innerHTML = `
      <div class="dropdown" id="dropdown-notifications">
        <button class="btn btn-secondary dropdown-trigger" aria-expanded="false" aria-haspopup="true">
          Notifications
          <span class="badge badge-error badge-sm" style="margin-left: 8px;">3</span>
          <i data-lucide="chevron-down" style="width: 16px; height: 16px; margin-left: 6px;"></i>
        </button>
        <div class="dropdown-menu" role="menu" hidden style="min-width: 280px;">
          <a href="#" class="dropdown-item" role="menuitem" style="display: flex; justify-content: space-between; align-items: center;">
            <span>New Messages</span>
            <span class="badge badge-error badge-sm">2</span>
          </a>
          <a href="#" class="dropdown-item" role="menuitem" style="display: flex; justify-content: space-between; align-items: center;">
            <span>Team Updates</span>
            <span class="badge badge-warning badge-sm">1</span>
          </a>
          <a href="#" class="dropdown-item" role="menuitem">
            <span>System Alerts</span>
          </a>
          <div class="dropdown-divider" role="separator"></div>
          <a href="#" class="dropdown-item" role="menuitem" style="text-align: center; color: var(--color-primary);">
            View All Notifications
          </a>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDropdowns();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);

    return container;
  }
};
