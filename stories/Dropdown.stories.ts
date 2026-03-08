import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Dropdown Component

Contextual menus that reveal a list of actions or options when triggered, providing access to secondary functions without cluttering the interface.

Use Dropdowns for action menus, user profile menus, navigation overflow items, or any group of related commands that should appear on demand. They're lightweight overlays that appear inline with content, ideal for presenting 3-10 options without navigating to a new page.

Dropdowns differ from Modals by being non-blocking (you can still interact with the page) and less intrusive. They're perfect for frequent actions like table row operations, toolbar commands, or navigation shortcuts that don't warrant full-screen attention.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Dropdown container -->
<div class="dropdown" id="actions-dropdown">
  <!-- Trigger button -->
  <button
    class="btn btn-primary dropdown-trigger"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Actions
    <i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i>
  </button>

  <!-- Dropdown menu -->
  <div class="dropdown-menu" role="menu" hidden>
    <a href="#" class="dropdown-item" role="menuitem">
      <i data-lucide="edit"></i>
      Edit
    </a>
    <a href="#" class="dropdown-item" role="menuitem">
      <i data-lucide="copy"></i>
      Duplicate
    </a>
    <div class="dropdown-divider" role="separator"></div>
    <a href="#" class="dropdown-item dropdown-item-danger" role="menuitem">
      <i data-lucide="trash-2"></i>
      Delete
    </a>
  </div>
</div>

<script>
  window.Aural?.initDropdowns();
  lucide?.createIcons();
</script>
\`\`\`

**React:**
\`\`\`jsx
import { useEffect, useState } from 'react';

function ActionsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.Aural?.initDropdowns();
    lucide?.createIcons();
  }, []);

  return (
    <div className="dropdown" id="actions-dropdown">
      <button
        className="btn btn-primary dropdown-trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Actions
        <i data-lucide="chevron-down" style={{ width: 16, height: 16 }} />
      </button>

      <div className="dropdown-menu" role="menu" hidden>
        <a href="#" className="dropdown-item" role="menuitem">
          <i data-lucide="edit" />
          Edit
        </a>
        <a href="#" className="dropdown-item" role="menuitem">
          <i data-lucide="copy" />
          Duplicate
        </a>
        <div className="dropdown-divider" role="separator" />
        <a href="#" className="dropdown-item dropdown-item-danger" role="menuitem">
          <i data-lucide="trash-2" />
          Delete
        </a>
      </div>
    </div>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div class="dropdown" id="actions-dropdown">
    <button
      class="btn btn-primary dropdown-trigger"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      Actions
      <i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i>
    </button>

    <div class="dropdown-menu" role="menu" hidden>
      <a href="#" class="dropdown-item" role="menuitem">
        <i data-lucide="edit"></i>
        Edit
      </a>
      <a href="#" class="dropdown-item" role="menuitem">
        <i data-lucide="copy"></i>
        Duplicate
      </a>
      <div class="dropdown-divider" role="separator"></div>
      <a href="#" class="dropdown-item dropdown-item-danger" role="menuitem">
        <i data-lucide="trash-2"></i>
        Delete
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  mounted() {
    window.Aural?.initDropdowns();
    lucide?.createIcons();
  }
};
</script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { onMount } from 'svelte';
  let isOpen = false;

  onMount(() => {
    window.Aural?.initDropdowns();
    lucide?.createIcons();
  });
</script>

<div class="dropdown" id="actions-dropdown">
  <button
    class="btn btn-primary dropdown-trigger"
    aria-haspopup="true"
    aria-expanded={isOpen}
  >
    Actions
    <i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i>
  </button>

  <div class="dropdown-menu" role="menu" hidden>
    <a href="#" class="dropdown-item" role="menuitem">
      <i data-lucide="edit"></i>
      Edit
    </a>
    <a href="#" class="dropdown-item" role="menuitem">
      <i data-lucide="copy"></i>
      Duplicate
    </a>
    <div class="dropdown-divider" role="separator"></div>
    <a href="#" class="dropdown-item dropdown-item-danger" role="menuitem">
      <i data-lucide="trash-2"></i>
      Delete
    </a>
  </div>
</div>
\`\`\`

## Accessibility

- **Required ARIA attributes**: Add \`aria-haspopup="true"\` and \`aria-expanded="false"\` to trigger button
- **Menu role**: Use \`role="menu"\` on dropdown container and \`role="menuitem"\` on each action
- **Keyboard navigation**: Supports full keyboard control
  - **Enter/Space** on trigger: Open/close dropdown
  - **Arrow Down**: Open dropdown and focus first item, or move to next item
  - **Arrow Up**: Move to previous item, or close if on first item
  - **Escape**: Close dropdown and return focus to trigger
  - **Home**: Focus first menu item
  - **End**: Focus last menu item
  - **Type-ahead**: Type character to jump to items starting with that letter
- **Focus management**: When dropdown opens, focus moves to first menu item automatically
- **Focus restoration**: When closed, focus returns to trigger button
- **Screen reader support**: Announces "menu" role and expanded state changes
- **Touch targets**: Minimum 44px height for all menu items (WCAG 2.1 Level AA)
- **Dividers**: Use \`role="separator"\` on dividers for proper semantic structure
- **Icon-only triggers**: Always provide \`aria-label\` (e.g., "More options") for buttons without text

## Usage Guidelines

- **When to use:**
  - Action menus for table rows, cards, or list items (edit, delete, share)
  - User profile menus with account settings and logout
  - Navigation overflow ("More..." menu)
  - Filter or sort options in data views
  - Toolbar commands grouped by category
  - Context-specific actions that change based on selection

- **When NOT to use:**
  - Form inputs (use Select component for choosing values)
  - Critical confirmations requiring focus (use Modal instead)
  - Simple tooltips or help text (use Tooltip or Popover)
  - Primary navigation (use Navbar or Tabs)
  - More than 15 items (consider grouping or using different navigation)

- **Best practices:**
  - Limit items to 3-10 for scannability; group more with dividers
  - Use icons for visual scanning (edit, delete, share icons)
  - Place destructive actions (delete, remove) at bottom with \`.dropdown-item-danger\`
  - Add keyboard shortcuts hints in menu items ("⌘S" for save)
  - Use \`.dropdown-header\` for section labels in grouped menus
  - Provide clear action labels (prefer "Delete item" over "Delete")
  - Close dropdown automatically after action selection
  - Align dropdown menu to trigger button (left-align by default)
  - Use \`.dropdown-right\` for right-aligned menus (user profile, table actions)

- **Positioning:**
  - **Default** (\`.dropdown\`): Menu opens below trigger, aligned left
  - **Right-aligned** (\`.dropdown-right\`): Menu opens below trigger, aligned right (for nav items)
  - Automatically adjusts position if viewport space is limited (flips to top or opposite side)
  - Maintains 8px margin from viewport edges for mobile

- **Mobile considerations:**
  - Touch-friendly 44px minimum height for all menu items
  - Close dropdown on backdrop tap (area outside menu)
  - Consider bottom sheet pattern for mobile (fullwidth drawer from bottom)
  - Test scrolling within long menus on small screens
  - Ensure close button or backdrop tap is obvious for dismissal

- **Trigger types:**
  - **Button** (\`.btn.dropdown-trigger\`): Standard trigger with text and chevron icon
  - **Icon-only** (\`.btn-icon.dropdown-trigger\`): Three-dot menu or more-vertical icon
  - **Avatar** (\`.dropdown-trigger\`): User profile picture with dropdown on click
  - **Text link** (\`.dropdown-trigger\`): Inline text that opens menu on click
        `.trim(),
      },
    },
  },
  argTypes: {
    trigger: {
      control: 'select',
      options: ['button', 'icon-only', 'avatar', 'text-link'],
      description:
        'Trigger type: button (standard with text), icon-only (three dots), avatar (user profile), text-link (inline text)',
    },
    placement: {
      control: 'select',
      options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
      description:
        'Menu placement relative to trigger: bottom-left (default), bottom-right (.dropdown-right), auto-adjusts for viewport',
    },
    items: {
      control: 'object',
      description:
        'Array of menu items with label, icon, href, and optional danger flag for destructive actions',
    },
    grouped: {
      control: 'boolean',
      description:
        'Whether menu items are organized into sections with headers and dividers for better scannability',
    },
    icon: {
      control: 'text',
      description:
        'Icon name for trigger button (e.g., "chevron-down", "more-vertical", "more-horizontal") via Lucide icons',
    },
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
};
