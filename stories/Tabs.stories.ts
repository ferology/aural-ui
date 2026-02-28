import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Organize content into separate views where only one view is visible at a time. Tabs let users switch between related content groups without leaving the page.'
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

    container.innerHTML = `
      <div class="tabs" role="tablist" aria-orientation="horizontal">
        <button class="tab tab-active" role="tab" id="tab-profile" aria-controls="panel-profile" aria-selected="true" tabindex="0">Profile</button>
        <button class="tab" role="tab" id="tab-settings" aria-controls="panel-settings" aria-selected="false" tabindex="-1">Settings</button>
        <button class="tab" role="tab" id="tab-activity" aria-controls="panel-activity" aria-selected="false" tabindex="-1">Activity</button>
        <button class="tab" role="tab" id="tab-notifications" aria-controls="panel-notifications" aria-selected="false" tabindex="-1">Notifications</button>
      </div>
      <div id="panel-profile" class="tab-panel" role="tabpanel" aria-labelledby="tab-profile" style="padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Profile</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Manage your personal information, avatar, and public profile settings.</p>
      </div>
      <div id="panel-settings" class="tab-panel" role="tabpanel" aria-labelledby="tab-settings" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Settings</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Configure your account preferences, language, and display options.</p>
      </div>
      <div id="panel-activity" class="tab-panel" role="tabpanel" aria-labelledby="tab-activity" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Activity</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">View your recent actions, login history, and account activity.</p>
      </div>
      <div id="panel-notifications" class="tab-panel" role="tabpanel" aria-labelledby="tab-notifications" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Notifications</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Set up email, push, and in-app notification preferences.</p>
      </div>
    `;

    // Initialize tabs
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);

    return container;
  }
};

export const PillsStyle: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <div class="tabs tabs-pills" role="tablist" aria-orientation="horizontal">
        <button class="tab tab-active" role="tab" id="pills-tab-home" aria-controls="pills-panel-home" aria-selected="true" tabindex="0">Home</button>
        <button class="tab" role="tab" id="pills-tab-products" aria-controls="pills-panel-products" aria-selected="false" tabindex="-1">Products</button>
        <button class="tab" role="tab" id="pills-tab-about" aria-controls="pills-panel-about" aria-selected="false" tabindex="-1">About</button>
        <button class="tab" role="tab" id="pills-tab-contact" aria-controls="pills-panel-contact" aria-selected="false" tabindex="-1">Contact</button>
      </div>
      <div id="pills-panel-home" class="tab-panel" role="tabpanel" aria-labelledby="pills-tab-home" style="padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Welcome Home</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">This is the home tab content. Pills style gives a softer, more modern appearance with rounded backgrounds.</p>
      </div>
      <div id="pills-panel-products" class="tab-panel" role="tabpanel" aria-labelledby="pills-tab-products" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Our Products</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Browse through our extensive catalog of products and services.</p>
      </div>
      <div id="pills-panel-about" class="tab-panel" role="tabpanel" aria-labelledby="pills-tab-about" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">About Us</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Learn more about our company, mission, and the team behind our work.</p>
      </div>
      <div id="pills-panel-contact" class="tab-panel" role="tabpanel" aria-labelledby="pills-tab-contact" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Contact Us</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Get in touch with our support team for any questions or inquiries.</p>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);

    return container;
  }
};

export const BoxedStyle: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <div class="tabs tabs-boxed" role="tablist" aria-orientation="horizontal">
        <button class="tab tab-active" role="tab" id="boxed-tab-dashboard" aria-controls="boxed-panel-dashboard" aria-selected="true" tabindex="0">Dashboard</button>
        <button class="tab" role="tab" id="boxed-tab-analytics" aria-controls="boxed-panel-analytics" aria-selected="false" tabindex="-1">Analytics</button>
        <button class="tab" role="tab" id="boxed-tab-reports" aria-controls="boxed-panel-reports" aria-selected="false" tabindex="-1">Reports</button>
        <button class="tab" role="tab" id="boxed-tab-settings" aria-controls="boxed-panel-settings" aria-selected="false" tabindex="-1">Settings</button>
      </div>
      <div id="boxed-panel-dashboard" class="tab-panel" role="tabpanel" aria-labelledby="boxed-tab-dashboard" style="padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Dashboard Overview</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">View your key metrics and performance indicators at a glance.</p>
      </div>
      <div id="boxed-panel-analytics" class="tab-panel" role="tabpanel" aria-labelledby="boxed-tab-analytics" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Analytics Data</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Deep dive into your data with charts, graphs, and detailed statistics.</p>
      </div>
      <div id="boxed-panel-reports" class="tab-panel" role="tabpanel" aria-labelledby="boxed-tab-reports" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Generated Reports</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Access and download your scheduled and custom reports.</p>
      </div>
      <div id="boxed-panel-settings" class="tab-panel" role="tabpanel" aria-labelledby="boxed-tab-settings" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Dashboard Settings</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Customize your dashboard layout, widgets, and data preferences.</p>
      </div>
    `;

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

    container.innerHTML = `
      <div class="tabs tabs-pills" role="tablist" aria-orientation="horizontal">
        <button class="tab tab-active" role="tab" id="icons-tab-profile" aria-controls="icons-panel-profile" aria-selected="true" tabindex="0">
          <i data-lucide="user" style="width: 16px; height: 16px; margin-right: 6px;" aria-hidden="true"></i>
          Profile
        </button>
        <button class="tab" role="tab" id="icons-tab-settings" aria-controls="icons-panel-settings" aria-selected="false" tabindex="-1">
          <i data-lucide="settings" style="width: 16px; height: 16px; margin-right: 6px;" aria-hidden="true"></i>
          Settings
        </button>
        <button class="tab" role="tab" id="icons-tab-notifications" aria-controls="icons-panel-notifications" aria-selected="false" tabindex="-1">
          <i data-lucide="bell" style="width: 16px; height: 16px; margin-right: 6px;" aria-hidden="true"></i>
          Notifications
        </button>
        <button class="tab" role="tab" id="icons-tab-security" aria-controls="icons-panel-security" aria-selected="false" tabindex="-1">
          <i data-lucide="shield" style="width: 16px; height: 16px; margin-right: 6px;" aria-hidden="true"></i>
          Security
        </button>
      </div>
      <div id="icons-panel-profile" class="tab-panel" role="tabpanel" aria-labelledby="icons-tab-profile" style="padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Profile Settings</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Update your name, bio, and profile picture. This is what others will see when they visit your profile.</p>
      </div>
      <div id="icons-panel-settings" class="tab-panel" role="tabpanel" aria-labelledby="icons-tab-settings" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">General Settings</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Customize your experience with theme, language, timezone, and display preferences.</p>
      </div>
      <div id="icons-panel-notifications" class="tab-panel" role="tabpanel" aria-labelledby="icons-tab-notifications" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Notification Preferences</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Choose how and when you want to be notified about important updates and activities.</p>
      </div>
      <div id="icons-panel-security" class="tab-panel" role="tabpanel" aria-labelledby="icons-tab-security" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Security Options</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Manage your password, two-factor authentication, and active sessions.</p>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
      // Initialize Lucide icons if available
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);

    return container;
  }
};

export const WithBadges: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <div class="tabs" role="tablist" aria-orientation="horizontal">
        <button class="tab tab-active" role="tab" id="badges-tab-all" aria-controls="badges-panel-all" aria-selected="true" tabindex="0" aria-label="All, 24 items">
          <span>All</span>
          <span class="badge badge-sm" style="margin-left: 8px;" aria-hidden="true">24</span>
        </button>
        <button class="tab" role="tab" id="badges-tab-unread" aria-controls="badges-panel-unread" aria-selected="false" tabindex="-1" aria-label="Unread, 5 items">
          <span>Unread</span>
          <span class="badge badge-error badge-sm" style="margin-left: 8px;" aria-hidden="true">5</span>
        </button>
        <button class="tab" role="tab" id="badges-tab-starred" aria-controls="badges-panel-starred" aria-selected="false" tabindex="-1" aria-label="Starred, 3 items">
          <span>Starred</span>
          <span class="badge badge-warning badge-sm" style="margin-left: 8px;" aria-hidden="true">3</span>
        </button>
        <button class="tab" role="tab" id="badges-tab-archived" aria-controls="badges-panel-archived" aria-selected="false" tabindex="-1">
          <span>Archived</span>
        </button>
      </div>
      <div id="badges-panel-all" class="tab-panel" role="tabpanel" aria-labelledby="badges-tab-all" style="padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">All Messages (24)</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Showing all messages in your inbox, including read and unread items.</p>
      </div>
      <div id="badges-panel-unread" class="tab-panel" role="tabpanel" aria-labelledby="badges-tab-unread" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Unread Messages (5)</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">You have 5 unread messages that need your attention.</p>
      </div>
      <div id="badges-panel-starred" class="tab-panel" role="tabpanel" aria-labelledby="badges-tab-starred" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Starred Messages (3)</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Your important starred messages for quick access.</p>
      </div>
      <div id="badges-panel-archived" class="tab-panel" role="tabpanel" aria-labelledby="badges-tab-archived" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Archived Messages</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Messages you've archived for future reference.</p>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);

    return container;
  }
};

export const DisabledTabs: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <div class="tabs tabs-pills" role="tablist" aria-orientation="horizontal">
        <button class="tab tab-active" role="tab" id="disabled-tab-step1" aria-controls="disabled-panel-step1" aria-selected="true" tabindex="0">Step 1: Account</button>
        <button class="tab" role="tab" id="disabled-tab-step2" aria-controls="disabled-panel-step2" aria-selected="false" tabindex="-1">Step 2: Profile</button>
        <button class="tab" role="tab" aria-selected="false" disabled aria-disabled="true" style="opacity: 0.4; cursor: not-allowed;">Step 3: Payment</button>
        <button class="tab" role="tab" aria-selected="false" disabled aria-disabled="true" style="opacity: 0.4; cursor: not-allowed;">Step 4: Confirm</button>
      </div>
      <div id="disabled-panel-step1" class="tab-panel" role="tabpanel" aria-labelledby="disabled-tab-step1" style="padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Step 1: Create Your Account</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Enter your basic account information to get started.</p>
      </div>
      <div id="disabled-panel-step2" class="tab-panel" role="tabpanel" aria-labelledby="disabled-tab-step2" style="display: none; padding: var(--space-4); margin-top: var(--space-4); background: var(--color-bg-tertiary); border-radius: var(--radius-md);">
        <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Step 2: Complete Your Profile</h4>
        <p style="margin: 0; color: var(--color-text-secondary);">Add additional details to personalize your experience.</p>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);

    return container;
  }
};

export const InCard: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <div class="card">
        <div class="tabs" role="tablist" aria-orientation="horizontal" style="border-bottom: 1px solid var(--color-border-subtle); padding: 0 var(--space-4);">
          <button class="tab tab-active" role="tab" id="card-tab-overview" aria-controls="card-panel-overview" aria-selected="true" tabindex="0">Overview</button>
          <button class="tab" role="tab" id="card-tab-specs" aria-controls="card-panel-specs" aria-selected="false" tabindex="-1">Specifications</button>
          <button class="tab" role="tab" id="card-tab-reviews" aria-controls="card-panel-reviews" aria-selected="false" tabindex="-1">Reviews</button>
        </div>

        <div id="card-panel-overview" class="tab-panel" role="tabpanel" aria-labelledby="card-tab-overview" style="padding: var(--space-6);">
          <h3 style="margin: 0 0 var(--space-3) 0; color: var(--color-text-primary);">Product Overview</h3>
          <p style="color: var(--color-text-secondary); line-height: 1.6; margin: 0;">This is a comprehensive product description providing key information about features, benefits, and use cases. Content changes dynamically based on the selected tab.</p>
        </div>

        <div id="card-panel-specs" class="tab-panel" role="tabpanel" aria-labelledby="card-tab-specs" style="display: none; padding: var(--space-6);">
          <h3 style="margin: 0 0 var(--space-3) 0; color: var(--color-text-primary);">Technical Specifications</h3>
          <ul style="color: var(--color-text-secondary); line-height: 1.8; margin: 0;">
            <li>Dimensions: 10" x 7" x 2"</li>
            <li>Weight: 1.5 lbs</li>
            <li>Material: Aluminum alloy</li>
            <li>Warranty: 2 years</li>
          </ul>
        </div>

        <div id="card-panel-reviews" class="tab-panel" role="tabpanel" aria-labelledby="card-tab-reviews" style="display: none; padding: var(--space-6);">
          <h3 style="margin: 0 0 var(--space-3) 0; color: var(--color-text-primary);">Customer Reviews</h3>
          <div style="display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-3);">
            <div style="color: var(--color-warning);">★★★★★</div>
            <span style="color: var(--color-text-primary); font-weight: var(--font-semibold);">4.8</span>
            <span style="color: var(--color-text-tertiary);">(124 reviews)</span>
          </div>
          <p style="color: var(--color-text-secondary); margin: 0;">Customers love the quality and durability of this product.</p>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);

    return container;
  }
};
