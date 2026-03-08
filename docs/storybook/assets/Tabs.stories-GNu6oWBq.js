const z={title:"Components/Tabs",tags:["autodocs"],parameters:{docs:{description:{component:`
# Tabs Component

Organize related content into separate views where only one view is visible at a time, allowing users to switch between sections without leaving the page.

Use Tabs to group related information that shares the same hierarchy and context but doesn't need to be viewed simultaneously. Tabs are perfect for settings panels with multiple categories, product details with specifications and reviews, or dashboard sections with different data views. They reduce cognitive load by progressive disclosure while keeping all options visible and accessible.

Tabs maintain context by keeping users on the same page while switching between related content groups. Unlike navigation that takes you to different pages, tabs show different facets of the same object or task. They're ideal when users need to compare information across sections or when switching contexts would be disruptive.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Tab buttons -->
<div class="tabs" role="tablist" aria-orientation="horizontal">
  <button
    class="tab tab-active"
    role="tab"
    id="tab-profile"
    aria-controls="panel-profile"
    aria-selected="true"
    tabindex="0"
  >
    Profile
  </button>
  <button
    class="tab"
    role="tab"
    id="tab-settings"
    aria-controls="panel-settings"
    aria-selected="false"
    tabindex="-1"
  >
    Settings
  </button>
  <button
    class="tab"
    role="tab"
    id="tab-activity"
    aria-controls="panel-activity"
    aria-selected="false"
    tabindex="-1"
  >
    Activity
  </button>
</div>

<!-- Tab panels -->
<div id="panel-profile" class="tab-panel" role="tabpanel" aria-labelledby="tab-profile">
  <h4>Profile Settings</h4>
  <p>Manage your personal information and public profile.</p>
</div>

<div id="panel-settings" class="tab-panel" role="tabpanel" aria-labelledby="tab-settings" style="display: none;">
  <h4>Account Settings</h4>
  <p>Configure preferences and account options.</p>
</div>

<div id="panel-activity" class="tab-panel" role="tabpanel" aria-labelledby="tab-activity" style="display: none;">
  <h4>Recent Activity</h4>
  <p>View your account activity and login history.</p>
</div>

<script>
  window.Aural?.initTabs();
<\/script>
\`\`\`

**React:**
\`\`\`jsx
import { useEffect, useState } from 'react';

function ProfileTabs() {
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    window.Aural?.initTabs();
  }, []);

  return (
    <>
      <div className="tabs" role="tablist" aria-orientation="horizontal">
        <button
          className={\`tab \${activeTab === 'profile' ? 'tab-active' : ''}\`}
          role="tab"
          id="tab-profile"
          aria-controls="panel-profile"
          aria-selected={activeTab === 'profile'}
          tabIndex={activeTab === 'profile' ? 0 : -1}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button
          className={\`tab \${activeTab === 'settings' ? 'tab-active' : ''}\`}
          role="tab"
          id="tab-settings"
          aria-controls="panel-settings"
          aria-selected={activeTab === 'settings'}
          tabIndex={activeTab === 'settings' ? 0 : -1}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      <div
        id="panel-profile"
        className="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-profile"
        style={{ display: activeTab === 'profile' ? 'block' : 'none' }}
      >
        <h4>Profile Settings</h4>
        <p>Manage your personal information.</p>
      </div>

      <div
        id="panel-settings"
        className="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-settings"
        style={{ display: activeTab === 'settings' ? 'block' : 'none' }}
      >
        <h4>Account Settings</h4>
        <p>Configure your preferences.</p>
      </div>
    </>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div>
    <div class="tabs" role="tablist" aria-orientation="horizontal">
      <button
        :class="['tab', { 'tab-active': activeTab === 'profile' }]"
        role="tab"
        id="tab-profile"
        aria-controls="panel-profile"
        :aria-selected="activeTab === 'profile'"
        :tabindex="activeTab === 'profile' ? 0 : -1"
        @click="activeTab = 'profile'"
      >
        Profile
      </button>
      <button
        :class="['tab', { 'tab-active': activeTab === 'settings' }]"
        role="tab"
        id="tab-settings"
        aria-controls="panel-settings"
        :aria-selected="activeTab === 'settings'"
        :tabindex="activeTab === 'settings' ? 0 : -1"
        @click="activeTab = 'settings'"
      >
        Settings
      </button>
    </div>

    <div
      id="panel-profile"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-profile"
      v-show="activeTab === 'profile'"
    >
      <h4>Profile Settings</h4>
      <p>Manage your personal information.</p>
    </div>

    <div
      id="panel-settings"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-settings"
      v-show="activeTab === 'settings'"
    >
      <h4>Account Settings</h4>
      <p>Configure your preferences.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'profile'
    };
  },
  mounted() {
    window.Aural?.initTabs();
  }
};
<\/script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { onMount } from 'svelte';

  let activeTab = 'profile';

  onMount(() => {
    window.Aural?.initTabs();
  });
<\/script>

<div class="tabs" role="tablist" aria-orientation="horizontal">
  <button
    class="tab {activeTab === 'profile' ? 'tab-active' : ''}"
    role="tab"
    id="tab-profile"
    aria-controls="panel-profile"
    aria-selected={activeTab === 'profile'}
    tabindex={activeTab === 'profile' ? 0 : -1}
    on:click={() => activeTab = 'profile'}
  >
    Profile
  </button>
  <button
    class="tab {activeTab === 'settings' ? 'tab-active' : ''}"
    role="tab"
    id="tab-settings"
    aria-controls="panel-settings"
    aria-selected={activeTab === 'settings'}
    tabindex={activeTab === 'settings' ? 0 : -1}
    on:click={() => activeTab = 'settings'}
  >
    Settings
  </button>
</div>

<div
  id="panel-profile"
  class="tab-panel"
  role="tabpanel"
  aria-labelledby="tab-profile"
  style="display: {activeTab === 'profile' ? 'block' : 'none'}"
>
  <h4>Profile Settings</h4>
  <p>Manage your personal information.</p>
</div>

<div
  id="panel-settings"
  class="tab-panel"
  role="tabpanel"
  aria-labelledby="tab-settings"
  style="display: {activeTab === 'settings' ? 'block' : 'none'}"
>
  <h4>Account Settings</h4>
  <p>Configure your preferences.</p>
</div>
\`\`\`

## Accessibility

- **Keyboard navigation**: Left/Right arrow keys move between tabs, Home/End jump to first/last tab
- **Tab key behavior**: Tab key moves focus out of tab list (not between tabs), per ARIA authoring practices
- **Active tab indication**: \`aria-selected="true"\` on active tab, \`aria-selected="false"\` on inactive tabs
- **Tab panel association**: Each tab has \`aria-controls\` pointing to its panel ID, each panel has \`aria-labelledby\` pointing to its tab
- **Focus management**: Only active tab is in tab sequence (\`tabindex="0"\`), others use \`tabindex="-1"\`
- **Role attributes**: Use \`role="tablist"\` on container, \`role="tab"\` on buttons, \`role="tabpanel"\` on content areas
- **Orientation**: Include \`aria-orientation="horizontal"\` or \`aria-orientation="vertical"\` on tablist
- **Panel visibility**: Hide inactive panels with \`display: none\` or \`hidden\` attribute (not just opacity)
- **Touch targets**: All tabs meet 44×44px minimum touch target size for mobile usability
- **Color contrast**: Active tab indicator meets WCAG AA contrast ratio (3:1 minimum for UI components)
- **Focus indicators**: Visible focus ring on keyboard navigation with 2px outline and offset
- **Reduced motion**: Tab panel transitions respect \`prefers-reduced-motion\` setting

## Usage Guidelines

- **When to use:**
  - Settings or preferences organized into categories (Account, Privacy, Notifications)
  - Product details with different aspects (Overview, Specs, Reviews, Q&A)
  - Dashboard views with related data (Analytics, Reports, Insights)
  - Multi-section forms where sections are independent
  - Documentation with different topics or API references
  - User profiles with distinct sections (Posts, Photos, About, Friends)

- **When NOT to use:**
  - For sequential processes — use Stepper or Wizard for multi-step flows
  - For primary navigation — use Navbar or Drawer for site-wide navigation
  - For showing/hiding single sections — use Accordion for collapsible content
  - For timeline or chronological data — use Timeline component
  - For comparing side-by-side — keep content visible simultaneously
  - For more than 7 tabs — consider splitting into multiple pages or using different navigation

- **Best practices:**
  - Limit to 3-7 tabs for optimal usability (5 or fewer is ideal)
  - Use clear, concise labels (1-2 words when possible)
  - Make first tab the default/most important one
  - Keep tab labels at same hierarchy level (all nouns or all verbs)
  - Show icon + text labels for better scannability when space allows
  - Use badges/counts to show notifications or item counts in tabs
  - Maintain tab state when navigating away and returning (use URL parameters or local state)
  - Ensure all tab panels are equally accessible (don't hide important content in later tabs)
  - Use pills variant (\`tabs-pills\`) for modern, softer appearance
  - Use boxed variant (\`tabs-boxed\`) for compact, contained layouts

- **Mobile considerations:**
  - Tabs automatically become scrollable on mobile when they don't fit
  - Consider using vertical tabs or Accordion on very small screens
  - Ensure touch targets are at least 44×44px (tabs component handles this)
  - Swipe gestures can be added for switching between tabs on mobile
  - Test tab overflow behavior with many tabs on narrow screens
  - Pills variant often works better on mobile (larger touch targets, better spacing)
        `.trim()}}}},e={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initTabs()},100),a}},t={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initTabs()},100),a}},r={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initTabs()},100),a}},i={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initTabs(),typeof lucide<"u"&&lucide.createIcons()},100),a}},o={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initTabs()},100),a}},s={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initTabs()},100),a}},l={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initTabs()},100),a}};var n,d,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;

    // Initialize tabs
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);
    return container;
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var b,p,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);
    return container;
  }
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var u,y,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);
    return container;
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var m,h,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;
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
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,w,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);
    return container;
  }
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var A,k,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);
    return container;
  }
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var P,M,C;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initTabs();
      }
    }, 100);
    return container;
  }
}`,...(C=(M=l.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const W=["Default","PillsStyle","BoxedStyle","WithIcons","WithBadges","DisabledTabs","InCard"];export{r as BoxedStyle,e as Default,s as DisabledTabs,l as InCard,t as PillsStyle,o as WithBadges,i as WithIcons,W as __namedExportsOrder,z as default};
