import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Overlays/Popover',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Popover Component

Contextual overlays triggered by user actions with rich content. Popovers display interactive content like forms, menus, and detailed information.

## Usage

Wrap your trigger element and popover in a \`.popover-wrapper\`:

\`\`\`html
<div class="popover-wrapper">
  <button class="btn btn-primary" id="trigger">Show Popover</button>
  <div class="popover popover-bottom" id="popover" role="dialog" hidden>
    <div class="popover-header">
      <h3 class="popover-title">Title</h3>
      <button class="popover-close" aria-label="Close">
        <i data-lucide="x"></i>
      </button>
    </div>
    <div class="popover-body">
      <p>Content goes here</p>
    </div>
  </div>
</div>
\`\`\`

## Position Classes

- **\`.popover-top\`** - Opens above the trigger
- **\`.popover-right\`** - Opens to the right
- **\`.popover-bottom\`** - Opens below (default)
- **\`.popover-left\`** - Opens to the left

## Structure

- **\`.popover-wrapper\`** - Container for trigger and popover
- **\`.popover-header\`** - Title and close button
- **\`.popover-body\`** - Main content area
- **\`.popover-close\`** - Close button

## Accessibility

- Use \`role="dialog"\` for the popover
- Link title with \`aria-labelledby\`
- Include a visible close button
- Support keyboard navigation (Escape to close)

## Initialization

\`\`\`javascript
// Initialize all popovers
window.Aural?.initPopovers();
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Popover title'
    },
    content: {
      control: 'text',
      description: 'Popover content'
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Popover position relative to trigger'
    },
    showClose: {
      control: 'boolean',
      description: 'Show close button'
    },
    showHeader: {
      control: 'boolean',
      description: 'Show header with title'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';

    const triggerId = `popover-trigger-${Math.random().toString(36).substr(2, 9)}`;
    const popoverId = `popover-${Math.random().toString(36).substr(2, 9)}`;

    const trigger = document.createElement('button');
    trigger.className = 'btn btn-primary';
    trigger.id = triggerId;
    trigger.textContent = 'Show Popover';

    const popover = document.createElement('div');
    popover.className = `popover popover-${args.position}`;
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', `${popoverId}-title`);
    popover.setAttribute('hidden', '');

    if (args.showHeader) {
      const header = document.createElement('div');
      header.className = 'popover-header';

      const title = document.createElement('h3');
      title.id = `${popoverId}-title`;
      title.className = 'popover-title';
      title.textContent = args.title;

      if (args.showClose) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'popover-close';
        closeBtn.setAttribute('aria-label', 'Close');
        closeBtn.innerHTML = '<i data-lucide="x" style="width: 16px; height: 16px;"></i>';
        header.appendChild(title);
        header.appendChild(closeBtn);
      } else {
        header.appendChild(title);
      }

      popover.appendChild(header);
    }

    const body = document.createElement('div');
    body.className = 'popover-body';
    body.innerHTML = `<p style="margin: 0;">${args.content}</p>`;
    popover.appendChild(body);

    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);

    // Initialize popovers and icons
    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return wrapper;
  },
  args: {
    title: 'Popover Title',
    content: 'This is a basic popover with a title and some content.',
    position: 'bottom',
    showClose: true,
    showHeader: true
  }
};

export const Positions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-6);
      justify-content: center;
      padding: var(--space-8);
    `;

    const positions = ['top', 'right', 'bottom', 'left'];

    positions.forEach((position) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'popover-wrapper';

      const triggerId = `popover-trigger-${position}`;
      const popoverId = `popover-${position}`;

      const trigger = document.createElement('button');
      trigger.className = 'btn btn-secondary';
      trigger.id = triggerId;
      trigger.textContent = position.charAt(0).toUpperCase() + position.slice(1);

      const popover = document.createElement('div');
      popover.className = `popover popover-${position}`;
      popover.id = popoverId;
      popover.setAttribute('role', 'dialog');
      popover.setAttribute('hidden', '');

      const body = document.createElement('div');
      body.className = 'popover-body';
      body.innerHTML = `<p style="margin: 0;">Popover on ${position}</p>`;
      popover.appendChild(body);

      wrapper.appendChild(trigger);
      wrapper.appendChild(popover);
      container.appendChild(wrapper);
    });

    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
    }, 0);

    return container;
  }
};

export const WithCloseButton: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';

    const triggerId = 'popover-trigger-close';
    const popoverId = 'popover-close';

    const trigger = document.createElement('button');
    trigger.className = 'btn btn-primary';
    trigger.id = triggerId;
    trigger.textContent = 'Show Popover';

    const popover = document.createElement('div');
    popover.className = 'popover popover-bottom';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', `${popoverId}-title`);
    popover.setAttribute('hidden', '');

    popover.innerHTML = `
      <div class="popover-header">
        <h3 id="${popoverId}-title" class="popover-title">Popover Title</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <p style="margin: 0;">This popover includes a close button in the header.</p>
      </div>
    `;

    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);

    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return wrapper;
  }
};

export const MenuPattern: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';

    const triggerId = 'popover-trigger-menu';
    const popoverId = 'popover-menu';

    const trigger = document.createElement('button');
    trigger.className = 'btn btn-primary';
    trigger.id = triggerId;
    trigger.textContent = 'User Actions';

    const popover = document.createElement('div');
    popover.className = 'popover popover-bottom';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', `${popoverId}-title`);
    popover.setAttribute('hidden', '');

    popover.innerHTML = `
      <div class="popover-header">
        <h3 id="${popoverId}-title" class="popover-title">User Settings</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <p style="margin: 0 0 var(--space-3) 0; color: var(--color-text-secondary);">Manage your account</p>
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="user" style="width: 16px; height: 16px;"></i>
            Profile
          </button>
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="settings" style="width: 16px; height: 16px;"></i>
            Settings
          </button>
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="log-out" style="width: 16px; height: 16px;"></i>
            Logout
          </button>
        </div>
      </div>
    `;

    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);

    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return wrapper;
  }
};

export const FormPattern: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';

    const triggerId = 'popover-trigger-form';
    const popoverId = 'popover-form';

    const trigger = document.createElement('button');
    trigger.className = 'btn btn-primary';
    trigger.id = triggerId;
    trigger.textContent = 'Add Comment';

    const popover = document.createElement('div');
    popover.className = 'popover popover-bottom';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', `${popoverId}-title`);
    popover.setAttribute('hidden', '');
    popover.style.width = '300px';

    popover.innerHTML = `
      <div class="popover-header">
        <h3 id="${popoverId}-title" class="popover-title">Add Comment</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <form style="display: flex; flex-direction: column; gap: var(--space-3);">
          <label for="comment-textarea" class="visually-hidden">Your comment</label>
          <textarea id="comment-textarea" class="input" rows="3" placeholder="Write your comment..." aria-label="Your comment"></textarea>
          <div style="display: flex; gap: var(--space-2); justify-content: flex-end;">
            <button type="button" class="btn btn-ghost btn-sm">Cancel</button>
            <button type="submit" class="btn btn-primary btn-sm">Post</button>
          </div>
        </form>
      </div>
    `;

    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);

    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return wrapper;
  }
};

export const InfoPattern: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
    `;

    const span = document.createElement('span');
    span.textContent = 'Hover for information';

    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';

    const triggerId = 'popover-trigger-info';
    const popoverId = 'popover-info';

    const trigger = document.createElement('button');
    trigger.className = 'btn btn-ghost btn-sm';
    trigger.id = triggerId;
    trigger.style.cssText = 'padding: var(--space-1); width: 24px; height: 24px;';
    trigger.setAttribute('aria-label', 'More information');
    trigger.innerHTML = '<i data-lucide="info" style="width: 16px; height: 16px;" aria-hidden="true"></i>';

    const popover = document.createElement('div');
    popover.className = 'popover popover-top';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('hidden', '');

    popover.innerHTML = `
      <div class="popover-body">
        <p style="margin: 0; max-width: 250px;">This feature requires a premium subscription. Upgrade your account to unlock all features.</p>
      </div>
    `;

    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);
    container.appendChild(span);
    container.appendChild(wrapper);

    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const WithList: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';

    const triggerId = 'popover-trigger-list';
    const popoverId = 'popover-list';

    const trigger = document.createElement('button');
    trigger.className = 'btn btn-secondary';
    trigger.id = triggerId;
    trigger.textContent = 'View Features';

    const popover = document.createElement('div');
    popover.className = 'popover popover-bottom';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', `${popoverId}-title`);
    popover.setAttribute('hidden', '');

    popover.innerHTML = `
      <div class="popover-header">
        <h3 id="${popoverId}-title" class="popover-title">Premium Features</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <ul style="margin: 0; padding-left: var(--space-5); color: var(--color-text-secondary);">
          <li>Unlimited storage space</li>
          <li>Advanced analytics</li>
          <li>Priority support</li>
          <li>Custom branding</li>
        </ul>
      </div>
    `;

    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);

    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return wrapper;
  }
};

export const WithButtons: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';

    const triggerId = 'popover-trigger-buttons';
    const popoverId = 'popover-buttons';

    const trigger = document.createElement('button');
    trigger.className = 'btn btn-primary';
    trigger.id = triggerId;
    trigger.textContent = 'Quick Actions';

    const popover = document.createElement('div');
    popover.className = 'popover popover-bottom';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', `${popoverId}-title`);
    popover.setAttribute('hidden', '');

    popover.innerHTML = `
      <div class="popover-header">
        <h3 id="${popoverId}-title" class="popover-title">Actions</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <button class="btn btn-outline btn-sm" style="justify-content: flex-start;">
            <i data-lucide="download" style="width: 16px; height: 16px;"></i>
            Download
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content: flex-start;">
            <i data-lucide="share-2" style="width: 16px; height: 16px;"></i>
            Share
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content: flex-start;">
            <i data-lucide="copy" style="width: 16px; height: 16px;"></i>
            Duplicate
          </button>
        </div>
      </div>
    `;

    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);

    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return wrapper;
  }
};

export const ComplexContent: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';

    const triggerId = 'popover-trigger-complex';
    const popoverId = 'popover-complex';

    const trigger = document.createElement('button');
    trigger.className = 'btn btn-primary';
    trigger.id = triggerId;
    trigger.textContent = 'User Profile';

    const popover = document.createElement('div');
    popover.className = 'popover popover-bottom';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', `${popoverId}-title`);
    popover.setAttribute('hidden', '');
    popover.style.width = '280px';

    popover.innerHTML = `
      <div class="popover-header">
        <h3 id="${popoverId}-title" class="popover-title">John Doe</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <div style="display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-4);">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary-subtle); display: flex; align-items: center; justify-content: center; color: var(--color-primary); font-weight: var(--font-bold);">
            JD
          </div>
          <div>
            <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">John Doe</div>
            <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">john@example.com</div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="user" style="width: 16px; height: 16px;"></i>
            View Profile
          </button>
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="settings" style="width: 16px; height: 16px;"></i>
            Account Settings
          </button>
          <hr style="margin: var(--space-2) 0; border: none; border-top: 1px solid var(--color-border-subtle);">
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start; color: var(--color-error);">
            <i data-lucide="log-out" style="width: 16px; height: 16px;"></i>
            Sign Out
          </button>
        </div>
      </div>
    `;

    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);

    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return wrapper;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const wrapper = document.createElement('div');
      wrapper.className = 'popover-wrapper';
      wrapper.style.cssText = 'display: inline-block;';

      const triggerId = `theme-popover-trigger-${Math.random().toString(36).substr(2, 9)}`;
      const popoverId = `theme-popover-${Math.random().toString(36).substr(2, 9)}`;

      const trigger = document.createElement('button');
      trigger.className = 'btn btn-primary';
      trigger.id = triggerId;
      trigger.textContent = 'Show Popover';

      const popover = document.createElement('div');
      popover.className = `popover popover-${args.position}`;
      popover.id = popoverId;
      popover.setAttribute('role', 'dialog');
      popover.setAttribute('aria-labelledby', `${popoverId}-title`);
      popover.setAttribute('hidden', '');

      if (args.showHeader) {
        const header = document.createElement('div');
        header.className = 'popover-header';

        const title = document.createElement('h3');
        title.id = `${popoverId}-title`;
        title.className = 'popover-title';
        title.textContent = args.title;

        if (args.showClose) {
          const closeBtn = document.createElement('button');
          closeBtn.className = 'popover-close';
          closeBtn.setAttribute('aria-label', 'Close');
          closeBtn.innerHTML = '<i data-lucide="x" style="width: 16px; height: 16px;"></i>';
          header.appendChild(title);
          header.appendChild(closeBtn);
        } else {
          header.appendChild(title);
        }

        popover.appendChild(header);
      }

      const body = document.createElement('div');
      body.className = 'popover-body';
      body.innerHTML = `<p style="margin: 0;">${args.content}</p>`;
      popover.appendChild(body);

      wrapper.appendChild(trigger);
      wrapper.appendChild(popover);

      setTimeout(() => {
        if (window.Aural?.initPopovers) {
          window.Aural.initPopovers();
        }
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }, 0);

      return wrapper;
    });
  },
  args: {
    title: 'Popover Title',
    content: 'This is a popover component.',
    position: 'bottom',
    showClose: true,
    showHeader: true
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Popover title'
    },
    content: {
      control: 'text',
      description: 'Popover content'
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Popover position'
    },
    showClose: {
      control: 'boolean',
      description: 'Show close button'
    },
    showHeader: {
      control: 'boolean',
      description: 'Show header with title'
    }
  }
};
