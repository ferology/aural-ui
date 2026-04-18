/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Drawer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Drawer Component

Slide-out panels that provide secondary navigation, contextual actions, or supplementary content without navigating away from the current page.

Use Drawers for navigation menus, filter panels, settings, shopping carts, or detail views that complement the main content. Unlike Modals which demand immediate attention, Drawers provide optional access to additional features while keeping the main content visible (though typically disabled). They're perfect for responsive navigation on mobile devices and for providing contextual tools in desktop applications.

Drawers can slide from any edge (left, right, top, bottom) and support various sizes. Left drawers typically house navigation, right drawers often contain details or actions, while top/bottom drawers work well for mobile action sheets or supplementary information.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Trigger button -->
<button class="btn btn-primary" onclick="window.Aural.openDrawer('nav-drawer')">
  Open Navigation
</button>

<!-- Drawer backdrop -->
<div class="aural-drawer-backdrop"></div>

<!-- Drawer panel (left position) -->
<div
  class="aural-drawer aural-drawer--left"
  id="nav-drawer"
  role="dialog"
  aria-modal="true"
  aria-labelledby="drawer-title"
>
  <div class="aural-drawer__header">
    <h2 class="aural-drawer__title" id="drawer-title">Navigation</h2>
    <button class="aural-drawer__close" aria-label="Close drawer">
      <i data-lucide="x" aria-hidden="true"></i>
    </button>
  </div>

  <div class="aural-drawer__body">
    <nav class="aural-drawer__nav">
      <a href="#" class="aural-drawer__nav-item">
        <i data-lucide="home" aria-hidden="true"></i>
        <span>Home</span>
      </a>
      <a href="#" class="aural-drawer__nav-item">
        <i data-lucide="inbox" aria-hidden="true"></i>
        <span>Messages</span>
      </a>
    </nav>
  </div>

  <div class="aural-drawer__footer">
    <button class="btn btn-primary" style="flex: 1;">
      <i data-lucide="save" aria-hidden="true"></i>
      Save Changes
    </button>
  </div>
</div>

<script>
  window.Aural?.initDrawers();
</script>
\`\`\`

**React:**
\`\`\`jsx
import { useEffect, useState } from 'react';

function NavigationDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.Aural?.initDrawers();
  }, []);

  const openDrawer = () => {
    window.Aural?.openDrawer('nav-drawer');
    setIsOpen(true);
  };

  const closeDrawer = () => {
    window.Aural?.closeDrawer('nav-drawer');
    setIsOpen(false);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={openDrawer}>
        <i data-lucide="menu" aria-hidden="true"></i>
        Menu
      </button>

      <div className="aural-drawer-backdrop"></div>

      <div
        className="aural-drawer aural-drawer--left"
        id="nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <div className="aural-drawer__header">
          <h2 className="aural-drawer__title" id="drawer-title">
            Navigation
          </h2>
          <button
            className="aural-drawer__close"
            aria-label="Close drawer"
            onClick={closeDrawer}
          >
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>

        <div className="aural-drawer__body">
          <nav className="aural-drawer__nav">
            <a href="#" className="aural-drawer__nav-item">
              <i data-lucide="home" aria-hidden="true"></i>
              <span>Home</span>
            </a>
            <a href="#" className="aural-drawer__nav-item">
              <i data-lucide="inbox" aria-hidden="true"></i>
              <span>Messages</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div>
    <button class="btn btn-primary" @click="openDrawer">
      <i data-lucide="menu" aria-hidden="true"></i>
      Menu
    </button>

    <div class="aural-drawer-backdrop"></div>

    <div
      class="aural-drawer aural-drawer--left"
      id="nav-drawer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      <div class="aural-drawer__header">
        <h2 class="aural-drawer__title" id="drawer-title">Navigation</h2>
        <button
          class="aural-drawer__close"
          aria-label="Close drawer"
          @click="closeDrawer"
        >
          <i data-lucide="x" aria-hidden="true"></i>
        </button>
      </div>

      <div class="aural-drawer__body">
        <nav class="aural-drawer__nav">
          <a href="#" class="aural-drawer__nav-item">
            <i data-lucide="home" aria-hidden="true"></i>
            <span>Home</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.Aural?.initDrawers();
  },
  methods: {
    openDrawer() {
      window.Aural?.openDrawer('nav-drawer');
    },
    closeDrawer() {
      window.Aural?.closeDrawer('nav-drawer');
    }
  }
};
</script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    window.Aural?.initDrawers();
  });

  function openDrawer() {
    window.Aural?.openDrawer('nav-drawer');
  }

  function closeDrawer() {
    window.Aural?.closeDrawer('nav-drawer');
  }
</script>

<button class="btn btn-primary" on:click={openDrawer}>
  <i data-lucide="menu" aria-hidden="true"></i>
  Menu
</button>

<div class="aural-drawer-backdrop"></div>

<div
  class="aural-drawer aural-drawer--left"
  id="nav-drawer"
  role="dialog"
  aria-modal="true"
  aria-labelledby="drawer-title"
>
  <div class="aural-drawer__header">
    <h2 class="aural-drawer__title" id="drawer-title">Navigation</h2>
    <button
      class="aural-drawer__close"
      aria-label="Close drawer"
      on:click={closeDrawer}
    >
      <i data-lucide="x" aria-hidden="true"></i>
    </button>
  </div>

  <div class="aural-drawer__body">
    <nav class="aural-drawer__nav">
      <a href="#" class="aural-drawer__nav-item">
        <i data-lucide="home" aria-hidden="true"></i>
        <span>Home</span>
      </a>
    </nav>
  </div>
</div>
\`\`\`

## Accessibility

- **Focus management**: Focus is trapped within the drawer when open and restored to trigger element on close
- **Escape key**: Pressing Escape closes the drawer and returns focus to the trigger button
- **Backdrop click**: Clicking outside the drawer closes it (can be disabled for critical actions)
- **ARIA attributes**: Uses \`role="dialog"\`, \`aria-modal="true"\`, and \`aria-labelledby\` for proper screen reader announcements
- **Keyboard navigation**: All interactive elements are keyboard accessible with visible focus indicators
- **Body scroll lock**: Prevents background scrolling when drawer is open to avoid confusing navigation
- **Close button requirements**: Always include a visible close button with \`aria-label="Close drawer"\`
- **Touch targets**: All interactive elements meet 44×44px minimum touch target size for mobile usability
- **Color contrast**: Text and interactive elements meet WCAG AA standards (4.5:1 for text, 3:1 for UI components)
- **Animation respect**: Drawer animations are disabled when \`prefers-reduced-motion\` is set
- **Screen reader announcements**: Drawer state changes are announced to assistive technologies
- **Semantic HTML**: Uses appropriate heading hierarchy (\`h2\` for title) and navigation landmarks where applicable

## Usage Guidelines

- **When to use:**
  - Primary or secondary navigation menus (especially on mobile)
  - Filter panels for search results or data tables
  - Settings or configuration panels that don't need a full page
  - Shopping cart or checkout flows in e-commerce
  - Detail views or property inspectors that complement main content
  - Multi-step forms that benefit from persistent access

- **When NOT to use:**
  - For critical decisions or confirmations — use Modal instead for alerts requiring immediate attention
  - For transient messages — use Toast or Snackbar for notifications that auto-dismiss
  - For full-page content — navigate to a new route instead
  - For dropdown menus or select options — use Dropdown or Select components
  - For tooltips or hints — use Tooltip or Popover for contextual help

- **Best practices:**
  - Use left drawers for navigation (follows common mobile patterns like hamburger menus)
  - Use right drawers for details, actions, or shopping carts (follows e-commerce conventions)
  - Keep drawer width between 280-480px on desktop (320px default works for most cases)
  - Use top/bottom drawers sparingly, primarily for mobile action sheets
  - Include a clear header with title and close button for wayfinding
  - Ensure drawer content is scrollable for long lists or forms
  - Disable backdrop click for drawers containing unsaved form data
  - Provide visual feedback during drawer transitions (slide animation)
  - Consider using persistent drawers (always visible) for primary navigation on desktop

- **Mobile considerations:**
  - Drawers automatically expand to full width (90vw max) on mobile devices
  - Left/right drawers work well for mobile navigation and filters
  - Bottom drawers are ideal for mobile action sheets or picker UIs
  - Ensure touch targets are at least 44×44px for easy tapping
  - Use swipe gestures to close drawers on touch devices (if implementing custom behavior)
  - Keep mobile drawer content concise to minimize scrolling
        `.trim(),
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description:
        'Position from which the drawer slides in. **left** (default, 320px wide) — primary navigation, slide from left edge. **right** (320px wide) — details, actions, shopping cart, slide from right edge. **top** (400px tall) — announcements, notifications, slide down from top. **bottom** (400px tall) — mobile action sheets, pickers, slide up from bottom. Width and height can be customized with size modifiers (--sm: 240/280px, --lg: 480/560px, --xl: 640/720px, --full: 100vw/100vh).',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Left: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.textContent = 'Open Left Drawer';

    const drawerId = 'drawer-left';

    const drawerHTML = `
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--left" id="${drawerId}" role="dialog" aria-modal="true" aria-labelledby="${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${drawerId}-title">Left Drawer</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is a left-side drawer. It slides in from the left edge of the screen.</p>
          <p>Drawers are useful for:</p>
          <ul>
            <li>Navigation menus</li>
            <li>Filters and settings</li>
            <li>Additional content panels</li>
            <li>Contextual actions</li>
          </ul>
        </div>
      </div>
    `;

    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(drawerWrapper);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      // Initialize Lucide icons if available
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);

    return container;
  },
};

export const Right: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.textContent = 'Open Right Drawer';

    const drawerId = 'drawer-right';

    const drawerHTML = `
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--right" id="${drawerId}" role="dialog" aria-modal="true" aria-labelledby="${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${drawerId}-title">Right Drawer</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is a right-side drawer. It slides in from the right edge of the screen.</p>
          <p>Right drawers are commonly used for:</p>
          <ul>
            <li>Shopping carts</li>
            <li>Details panels</li>
            <li>User profiles</li>
            <li>Notifications</li>
          </ul>
        </div>
      </div>
    `;

    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(drawerWrapper);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);

    return container;
  },
};

export const Top: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.textContent = 'Open Top Drawer';

    const drawerId = 'drawer-top';

    const drawerHTML = `
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--top" id="${drawerId}" role="dialog" aria-modal="true" aria-labelledby="${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${drawerId}-title">Top Drawer</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is a top drawer. It slides down from the top of the screen.</p>
          <p>Useful for announcements, search bars, or temporary notifications.</p>
        </div>
      </div>
    `;

    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(drawerWrapper);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);

    return container;
  },
};

export const Bottom: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.textContent = 'Open Bottom Drawer';

    const drawerId = 'drawer-bottom';

    const drawerHTML = `
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--bottom" id="${drawerId}" role="dialog" aria-modal="true" aria-labelledby="${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${drawerId}-title">Bottom Drawer</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is a bottom drawer. It slides up from the bottom of the screen.</p>
          <p>Common on mobile for action sheets, share menus, or quick options.</p>
        </div>
      </div>
    `;

    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(drawerWrapper);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);

    return container;
  },
};

export const NavigationDrawer: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.innerHTML =
      '<i data-lucide="menu" style="width: 16px; height: 16px;" aria-hidden="true"></i> Open Navigation';

    const drawerId = 'drawer-nav';

    const drawerHTML = `
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--left" id="${drawerId}" role="dialog" aria-modal="true" aria-labelledby="${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${drawerId}-title">Navigation</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <nav class="aural-drawer__nav">
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="home" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Home</span>
            </a>
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="inbox" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Messages</span>
            </a>
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="users" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Team</span>
            </a>
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="file-text" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Documents</span>
            </a>
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="settings" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Settings</span>
            </a>
          </nav>
        </div>
        <div class="aural-drawer__footer">
          <a href="#" class="aural-drawer__nav-item">
            <i data-lucide="log-out" style="width: 20px; height: 20px;" aria-hidden="true"></i>
            <span>Logout</span>
          </a>
        </div>
      </div>
    `;

    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(drawerWrapper);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);

    return container;
  },
};

export const WithForm: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.textContent = 'Open Form Drawer';

    const drawerId = 'drawer-form';

    const drawerHTML = `
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--right" id="${drawerId}" role="dialog" aria-modal="true" aria-labelledby="${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${drawerId}-title">Add New Item</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <form style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div>
              <label for="item-title" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Title</label>
              <input type="text" id="item-title" class="input" placeholder="Enter title" />
            </div>
            <div>
              <label for="item-description" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Description</label>
              <textarea id="item-description" class="input" rows="4" placeholder="Enter description"></textarea>
            </div>
            <div>
              <label for="item-category" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Category</label>
              <select id="item-category" class="input">
                <option>Select category</option>
                <option>Work</option>
                <option>Personal</option>
                <option>Other</option>
              </select>
            </div>
            <label class="switch">
              <input type="checkbox" class="switch__input" role="switch">
              <div class="switch__track">
                <div class="switch__thumb"></div>
              </div>
              <span class="switch__label">Mark as important</span>
            </label>
          </form>
        </div>
        <div class="aural-drawer__footer" style="display: flex; gap: var(--space-3);">
          <button type="button" class="btn btn-ghost" onclick="window.Aural?.closeDrawer('${drawerId}')">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" style="flex: 1;" onclick="window.Aural?.closeDrawer('${drawerId}')">
            <i data-lucide="save" style="width: 16px; height: 16px;" aria-hidden="true"></i>
            Create
          </button>
        </div>
      </div>
    `;

    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(drawerWrapper);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);

    return container;
  },
};

export const SettingsDrawer: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.innerHTML =
      '<i data-lucide="settings" style="width: 16px; height: 16px;" aria-hidden="true"></i> Settings';

    const drawerId = 'drawer-settings';

    const drawerHTML = `
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--right" id="${drawerId}" role="dialog" aria-modal="true" aria-labelledby="${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${drawerId}-title">Settings</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <div style="display: flex; flex-direction: column; gap: var(--space-6);">
            <!-- Notifications Section -->
            <div>
              <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
                <i data-lucide="bell" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: var(--space-2);"></i>
                Notifications
              </h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch" checked>
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Push notifications</span>
                </label>
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch" checked>
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Email alerts</span>
                </label>
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch">
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Sound effects</span>
                </label>
              </div>
            </div>

            <!-- Privacy Section -->
            <div>
              <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
                <i data-lucide="shield" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: var(--space-2);"></i>
                Privacy
              </h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch" checked>
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Public profile</span>
                </label>
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch">
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Share activity</span>
                </label>
              </div>
            </div>

            <!-- Display Section -->
            <div>
              <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
                <i data-lucide="monitor" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: var(--space-2);"></i>
                Display
              </h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <div>
                  <label for="settings-theme" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Theme</label>
                  <select id="settings-theme" class="input input-sm">
                    <option>Light</option>
                    <option selected>Dark</option>
                    <option>Auto</option>
                  </select>
                </div>
                <div>
                  <label for="settings-language" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Language</label>
                  <select id="settings-language" class="input input-sm">
                    <option selected>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch" checked>
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Compact mode</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="aural-drawer__footer" style="display: flex; gap: var(--space-3);">
          <button class="btn btn-ghost" onclick="window.Aural?.closeDrawer('${drawerId}')">Cancel</button>
          <button class="btn btn-primary" style="flex: 1;" onclick="window.Aural?.closeDrawer('${drawerId}')">
            <i data-lucide="save" style="width: 16px; height: 16px;"></i>
            Save Changes
          </button>
        </div>
      </div>
    `;

    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(drawerWrapper);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);

    return container;
  },
};
