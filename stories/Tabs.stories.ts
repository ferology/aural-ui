import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tabbed interface with keyboard navigation support (arrow keys, Home, End).'
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
    container.style.maxWidth = '800px';

    const tabsId = 'tabs-default';

    const tabs = document.createElement('div');
    tabs.id = tabsId;
    tabs.className = 'tabs';

    tabs.innerHTML = `
      <div class="tab-list" role="tablist">
        <button
          id="${tabsId}-tab-1"
          class="tab-trigger active"
          role="tab"
          aria-selected="true"
          aria-controls="${tabsId}-panel-1"
          tabindex="0"
        >
          Profile
        </button>
        <button
          id="${tabsId}-tab-2"
          class="tab-trigger"
          role="tab"
          aria-selected="false"
          aria-controls="${tabsId}-panel-2"
          tabindex="-1"
        >
          Settings
        </button>
        <button
          id="${tabsId}-tab-3"
          class="tab-trigger"
          role="tab"
          aria-selected="false"
          aria-controls="${tabsId}-panel-3"
          tabindex="-1"
        >
          Notifications
        </button>
      </div>

      <div
        id="${tabsId}-panel-1"
        class="tab-panel active"
        role="tabpanel"
        aria-labelledby="${tabsId}-tab-1"
      >
        <h3>Profile Settings</h3>
        <p>Manage your profile information and preferences.</p>
        <div class="form-group">
          <label class="label">Display Name</label>
          <input type="text" class="input" placeholder="Enter your name" />
        </div>
      </div>

      <div
        id="${tabsId}-panel-2"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="${tabsId}-tab-2"
        hidden
      >
        <h3>Application Settings</h3>
        <p>Configure your application preferences.</p>
        <div class="form-group">
          <label class="label">Email Notifications</label>
          <input type="checkbox" class="checkbox" checked />
        </div>
      </div>

      <div
        id="${tabsId}-panel-3"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="${tabsId}-tab-3"
        hidden
      >
        <h3>Notification Preferences</h3>
        <p>Choose which notifications you want to receive.</p>
        <div class="form-group">
          <label class="label">Push Notifications</label>
          <input type="checkbox" class="checkbox" />
        </div>
      </div>
    `;

    container.appendChild(tabs);

    // Initialize tabs
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);

    return container;
  }
};

export const WithIcons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const tabsId = 'tabs-icons';

    const tabs = document.createElement('div');
    tabs.id = tabsId;
    tabs.className = 'tabs';

    tabs.innerHTML = `
      <div class="tab-list" role="tablist">
        <button
          id="${tabsId}-tab-1"
          class="tab-trigger active"
          role="tab"
          aria-selected="true"
          aria-controls="${tabsId}-panel-1"
        >
          <span>🏠</span> Home
        </button>
        <button
          id="${tabsId}-tab-2"
          class="tab-trigger"
          role="tab"
          aria-selected="false"
          aria-controls="${tabsId}-panel-2"
        >
          <span>👤</span> Profile
        </button>
        <button
          id="${tabsId}-tab-3"
          class="tab-trigger"
          role="tab"
          aria-selected="false"
          aria-controls="${tabsId}-panel-3"
        >
          <span>⚙️</span> Settings
        </button>
      </div>

      <div
        id="${tabsId}-panel-1"
        class="tab-panel active"
        role="tabpanel"
      >
        <h3>Welcome Home</h3>
        <p>Your dashboard overview.</p>
      </div>

      <div
        id="${tabsId}-panel-2"
        class="tab-panel"
        role="tabpanel"
        hidden
      >
        <h3>Your Profile</h3>
        <p>View and edit your profile.</p>
      </div>

      <div
        id="${tabsId}-panel-3"
        class="tab-panel"
        role="tabpanel"
        hidden
      >
        <h3>Settings</h3>
        <p>Adjust your preferences.</p>
      </div>
    `;

    container.appendChild(tabs);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);

    return container;
  }
};

export const Vertical: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const tabsId = 'tabs-vertical';

    const tabs = document.createElement('div');
    tabs.id = tabsId;
    tabs.className = 'tabs tabs-vertical';

    tabs.innerHTML = `
      <div class="tab-list" role="tablist">
        <button
          id="${tabsId}-tab-1"
          class="tab-trigger active"
          role="tab"
          aria-selected="true"
        >
          General
        </button>
        <button
          id="${tabsId}-tab-2"
          class="tab-trigger"
          role="tab"
          aria-selected="false"
        >
          Security
        </button>
        <button
          id="${tabsId}-tab-3"
          class="tab-trigger"
          role="tab"
          aria-selected="false"
        >
          Privacy
        </button>
        <button
          id="${tabsId}-tab-4"
          class="tab-trigger"
          role="tab"
          aria-selected="false"
        >
          Billing
        </button>
      </div>

      <div
        id="${tabsId}-panel-1"
        class="tab-panel active"
        role="tabpanel"
      >
        <h3>General Settings</h3>
        <p>Basic account settings and preferences.</p>
      </div>

      <div
        id="${tabsId}-panel-2"
        class="tab-panel"
        role="tabpanel"
        hidden
      >
        <h3>Security Settings</h3>
        <p>Manage passwords and two-factor authentication.</p>
      </div>

      <div
        id="${tabsId}-panel-3"
        class="tab-panel"
        role="tabpanel"
        hidden
      >
        <h3>Privacy Settings</h3>
        <p>Control who can see your information.</p>
      </div>

      <div
        id="${tabsId}-panel-4"
        class="tab-panel"
        role="tabpanel"
        hidden
      >
        <h3>Billing Settings</h3>
        <p>Manage your subscription and payment methods.</p>
      </div>
    `;

    container.appendChild(tabs);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);

    return container;
  }
};
