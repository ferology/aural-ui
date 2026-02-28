import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/NotificationCenter',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Centralized notification management with categorized alerts, read/unread states, and actionable items. See the **Documentation** tab for framework-specific examples (React, Vue, Svelte).'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Notification center title'
    },
    showSettings: {
      control: 'boolean',
      description: 'Show settings button in header'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';

    container.innerHTML = `
      <div class="aural-notification-center" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">${args.title || 'Notifications'}</h3>
          ${args.showSettings ? `
            <button class="btn btn-ghost btn-sm" aria-label="Notification settings">
              <i data-lucide="settings" style="width: 16px; height: 16px;"></i>
            </button>
          ` : ''}
        </div>
        <div class="aural-notification-center__list">
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--success">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="check-circle" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Build Successful</div>
              <div class="aural-notification-center__item-message">Your project built successfully with no errors</div>
              <div class="aural-notification-center__item-time">5 minutes ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--info">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="info" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">New Update Available</div>
              <div class="aural-notification-center__item-message">Version 2.0 is ready to install</div>
              <div class="aural-notification-center__item-time">1 hour ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="bell" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Welcome to Aural UI</div>
              <div class="aural-notification-center__item-message">Get started with our comprehensive component library</div>
              <div class="aural-notification-center__item-time">2 days ago</div>
            </div>
          </button>
        </div>
        <div class="aural-notification-center__footer">
          <a href="#" class="aural-notification-center__footer-link">View all notifications</a>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  },
  args: {
    title: 'Notifications',
    showSettings: true
  }
};

export const WithUnreadIndicator: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';

    container.innerHTML = `
      <div class="aural-notification-center" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Notifications</h3>
          <span class="badge badge-primary">3 new</span>
        </div>
        <div class="aural-notification-center__list">
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--error">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="alert-circle" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Build Failed</div>
              <div class="aural-notification-center__item-message">Error in main.js line 42: Unexpected token</div>
              <div class="aural-notification-center__item-time">Just now</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--warning">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="alert-triangle" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Storage Almost Full</div>
              <div class="aural-notification-center__item-message">You're using 95% of your storage space</div>
              <div class="aural-notification-center__item-time">10 minutes ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--success">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="user-check" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">New Team Member</div>
              <div class="aural-notification-center__item-message">Sarah Johnson joined your workspace</div>
              <div class="aural-notification-center__item-time">2 hours ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const WithAvatars: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';

    container.innerHTML = `
      <div class="aural-notification-center" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Activity</h3>
          <button class="btn btn-ghost btn-sm">Mark all read</button>
        </div>
        <div class="aural-notification-center__list">
          <button class="aural-notification-center__item aural-notification-center__item--unread">
            <div class="aural-notification-center__item-icon">
              <img src="https://i.pravatar.cc/40?img=1" alt="Sarah" style="width: 32px; height: 32px; border-radius: 50%;">
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Sarah commented on your post</div>
              <div class="aural-notification-center__item-message">"Great work on the new design!"</div>
              <div class="aural-notification-center__item-time">5 minutes ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item aural-notification-center__item--unread">
            <div class="aural-notification-center__item-icon">
              <img src="https://i.pravatar.cc/40?img=5" alt="Mike" style="width: 32px; height: 32px; border-radius: 50%;">
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Mike mentioned you</div>
              <div class="aural-notification-center__item-message">"@you Check out this awesome feature!"</div>
              <div class="aural-notification-center__item-time">1 hour ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item">
            <div class="aural-notification-center__item-icon">
              <img src="https://i.pravatar.cc/40?img=8" alt="Alex" style="width: 32px; height: 32px; border-radius: 50%;">
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Alex liked your comment</div>
              <div class="aural-notification-center__item-message">on "Q4 Planning Discussion"</div>
              <div class="aural-notification-center__item-time">Yesterday</div>
            </div>
          </button>
        </div>
        <div class="aural-notification-center__footer">
          <a href="#" class="aural-notification-center__footer-link">View all activity</a>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const WithActionButtons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';

    container.innerHTML = `
      <div class="aural-notification-center" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Notifications</h3>
          <button class="btn btn-ghost btn-sm">Mark all read</button>
        </div>
        <div class="aural-notification-center__list">
          <div class="aural-notification-center__item aural-notification-center__item--unread" style="flex-direction: column; align-items: flex-start;">
            <div style="display: flex; width: 100%; align-items: flex-start;">
              <div class="aural-notification-center__item-icon">
                <img src="https://i.pravatar.cc/40?img=1" alt="User avatar" style="width: 32px; height: 32px; border-radius: 50%;">
              </div>
              <div class="aural-notification-center__item-content">
                <div class="aural-notification-center__item-title">Team invitation</div>
                <div class="aural-notification-center__item-message">Sarah invited you to join "Design Team"</div>
                <div class="aural-notification-center__item-time">Just now</div>
              </div>
              <div class="aural-notification-center__item-dot"></div>
            </div>
            <div style="display: flex; gap: var(--space-2); margin-left: 44px; margin-top: var(--space-2);">
              <button class="btn btn-primary btn-sm">Accept</button>
              <button class="btn btn-ghost btn-sm">Decline</button>
            </div>
          </div>
          <div class="aural-notification-center__item aural-notification-center__item--unread" style="flex-direction: column; align-items: flex-start;">
            <div style="display: flex; width: 100%; align-items: flex-start;">
              <div class="aural-notification-center__item-icon">
                <img src="https://i.pravatar.cc/40?img=5" alt="User avatar" style="width: 32px; height: 32px; border-radius: 50%;">
              </div>
              <div class="aural-notification-center__item-content">
                <div class="aural-notification-center__item-title">Follow request</div>
                <div class="aural-notification-center__item-message">Mike wants to follow you</div>
                <div class="aural-notification-center__item-time">1 hour ago</div>
              </div>
              <div class="aural-notification-center__item-dot"></div>
            </div>
            <div style="display: flex; gap: var(--space-2); margin-left: 44px; margin-top: var(--space-2);">
              <button class="btn btn-primary btn-sm">Accept</button>
              <button class="btn btn-ghost btn-sm">Ignore</button>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const GroupedByDate: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';

    container.innerHTML = `
      <div class="aural-notification-center" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Activity</h3>
        </div>
        <div style="padding: var(--space-2) var(--space-4); font-size: var(--text-xs); font-weight: var(--font-semibold); color: var(--color-text-tertiary); text-transform: uppercase;">Today</div>
        <div class="aural-notification-center__list">
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--success">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="check" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Build successful</div>
              <div class="aural-notification-center__item-message">Production deployment completed</div>
              <div class="aural-notification-center__item-time">10 minutes ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--info">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="message-square" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">New comment</div>
              <div class="aural-notification-center__item-message">John replied to "Q4 Planning"</div>
              <div class="aural-notification-center__item-time">2 hours ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
        </div>
        <div style="padding: var(--space-2) var(--space-4); font-size: var(--text-xs); font-weight: var(--font-semibold); color: var(--color-text-tertiary); text-transform: uppercase;">Yesterday</div>
        <div class="aural-notification-center__list">
          <button class="aural-notification-center__item aural-notification-center__item--info">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="git-pull-request" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">PR merged</div>
              <div class="aural-notification-center__item-message">Your pull request was merged</div>
              <div class="aural-notification-center__item-time">Yesterday at 4:30 PM</div>
            </div>
          </button>
        </div>
        <div style="padding: var(--space-2) var(--space-4); font-size: var(--text-xs); font-weight: var(--font-semibold); color: var(--color-text-tertiary); text-transform: uppercase;">Earlier</div>
        <div class="aural-notification-center__list">
          <button class="aural-notification-center__item">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="bell" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Welcome</div>
              <div class="aural-notification-center__item-message">Welcome to the platform!</div>
              <div class="aural-notification-center__item-time">Last week</div>
            </div>
          </button>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const DifferentTypes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';

    container.innerHTML = `
      <div class="aural-notification-center" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Recent Activity</h3>
          <span class="badge badge-primary">4 new</span>
        </div>
        <div class="aural-notification-center__list">
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--info">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="at-sign" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Mention</div>
              <div class="aural-notification-center__item-message">@you mentioned in "Project Discussion"</div>
              <div class="aural-notification-center__item-time">5 minutes ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--success">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="heart" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Like</div>
              <div class="aural-notification-center__item-message">Alex liked your post</div>
              <div class="aural-notification-center__item-time">1 hour ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--info">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="message-circle" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Comment</div>
              <div class="aural-notification-center__item-message">Sarah commented on your issue</div>
              <div class="aural-notification-center__item-time">3 hours ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--warning">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="settings" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">System Update</div>
              <div class="aural-notification-center__item-message">Scheduled maintenance tonight at 2 AM</div>
              <div class="aural-notification-center__item-time">5 hours ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
        </div>
        <div class="aural-notification-center__footer">
          <a href="#" class="aural-notification-center__footer-link">View all notifications</a>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const EmptyState: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';

    container.innerHTML = `
      <div class="aural-notification-center" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Notifications</h3>
        </div>
        <div class="aural-notification-center__list">
          <div class="empty-state" style="padding: var(--space-8) var(--space-4);">
            <div class="empty-state-icon">
              <i data-lucide="bell-off" style="width: 40px; height: 40px;"></i>
            </div>
            <h3 class="empty-state-title" style="font-size: var(--text-lg);">No notifications</h3>
            <p class="empty-state-description">You're all caught up!</p>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const MarkAllAsRead: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';

    const notificationCenterId = `notification-center-${Math.random().toString(36).substr(2, 9)}`;

    container.innerHTML = `
      <div class="aural-notification-center" id="${notificationCenterId}" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Notifications</h3>
          <button class="btn btn-ghost btn-sm" id="mark-all-read-${notificationCenterId}">
            <i data-lucide="check-check" style="width: 16px; height: 16px;"></i>
            Mark all read
          </button>
        </div>
        <div class="aural-notification-center__list" id="notification-list-${notificationCenterId}">
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--success">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="check-circle" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Task Completed</div>
              <div class="aural-notification-center__item-message">All tests passed successfully</div>
              <div class="aural-notification-center__item-time">5 minutes ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--info">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="info" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">New Feature</div>
              <div class="aural-notification-center__item-message">Dark mode is now available</div>
              <div class="aural-notification-center__item-time">1 hour ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--warning">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="alert-triangle" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Action Required</div>
              <div class="aural-notification-center__item-message">Please verify your email address</div>
              <div class="aural-notification-center__item-time">2 hours ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
        </div>
      </div>
    `;

    setTimeout(() => {
      const markAllButton = container.querySelector(`#mark-all-read-${notificationCenterId}`);
      const notificationList = container.querySelector(`#notification-list-${notificationCenterId}`);

      if (markAllButton && notificationList) {
        markAllButton.addEventListener('click', () => {
          const unreadItems = notificationList.querySelectorAll('.aural-notification-center__item--unread');
          unreadItems.forEach(item => {
            item.classList.remove('aural-notification-center__item--unread');
            const dot = item.querySelector('.aural-notification-center__item-dot');
            if (dot) {
              dot.remove();
            }
          });

          // Update button text
          markAllButton.innerHTML = '<i data-lucide="check" style="width: 16px; height: 16px;"></i> All read';
          markAllButton.disabled = true;

          if (typeof lucide !== 'undefined') {
            lucide.createIcons();
          }
        });
      }

      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const LoadMorePattern: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';

    const notificationCenterId = `notification-center-${Math.random().toString(36).substr(2, 9)}`;

    container.innerHTML = `
      <div class="aural-notification-center" id="${notificationCenterId}" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Notifications</h3>
          <span class="badge badge-primary">12 total</span>
        </div>
        <div class="aural-notification-center__list" id="notification-list-${notificationCenterId}">
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--success">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="check-circle" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Build Successful</div>
              <div class="aural-notification-center__item-message">Your project built successfully</div>
              <div class="aural-notification-center__item-time">5 minutes ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
          <button class="aural-notification-center__item aural-notification-center__item--info">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="message-square" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">New Comment</div>
              <div class="aural-notification-center__item-message">John replied to your comment</div>
              <div class="aural-notification-center__item-time">1 hour ago</div>
            </div>
          </button>
          <button class="aural-notification-center__item">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="bell" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">Welcome</div>
              <div class="aural-notification-center__item-message">Thanks for joining!</div>
              <div class="aural-notification-center__item-time">2 days ago</div>
            </div>
          </button>
        </div>
        <div class="aural-notification-center__footer">
          <button class="btn btn-ghost btn-sm" style="width: 100%; justify-content: center;" id="load-more-${notificationCenterId}">
            <i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i>
            Load more notifications
          </button>
        </div>
      </div>
    `;

    setTimeout(() => {
      const loadMoreButton = container.querySelector(`#load-more-${notificationCenterId}`);
      const notificationList = container.querySelector(`#notification-list-${notificationCenterId}`);

      if (loadMoreButton && notificationList) {
        let loadCount = 0;
        loadMoreButton.addEventListener('click', () => {
          loadCount++;

          // Simulate loading
          loadMoreButton.innerHTML = '<span class="spinner" style="width: 16px; height: 16px;"></span> Loading...';
          loadMoreButton.disabled = true;

          setTimeout(() => {
            // Add more notifications
            const newNotifications = `
              <button class="aural-notification-center__item">
                <div class="aural-notification-center__item-icon">
                  <i data-lucide="star" style="width: 20px; height: 20px;"></i>
                </div>
                <div class="aural-notification-center__item-content">
                  <div class="aural-notification-center__item-title">New Achievement</div>
                  <div class="aural-notification-center__item-message">You earned a badge!</div>
                  <div class="aural-notification-center__item-time">3 days ago</div>
                </div>
              </button>
              <button class="aural-notification-center__item">
                <div class="aural-notification-center__item-icon">
                  <i data-lucide="gift" style="width: 20px; height: 20px;"></i>
                </div>
                <div class="aural-notification-center__item-content">
                  <div class="aural-notification-center__item-title">Special Offer</div>
                  <div class="aural-notification-center__item-message">Limited time discount available</div>
                  <div class="aural-notification-center__item-time">1 week ago</div>
                </div>
              </button>
            `;

            notificationList.insertAdjacentHTML('beforeend', newNotifications);

            if (loadCount >= 2) {
              loadMoreButton.innerHTML = 'All notifications loaded';
              loadMoreButton.disabled = true;
            } else {
              loadMoreButton.innerHTML = '<i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i> Load more notifications';
              loadMoreButton.disabled = false;
            }

            if (typeof lucide !== 'undefined') {
              lucide.createIcons();
            }
          }, 1000);
        });
      }

      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const ThemeComparison: Story = {
  render: () => {
    return createThemeGrid(() => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="aural-notification-center" style="max-width: 400px;">
          <div class="aural-notification-center__header">
            <h3 class="aural-notification-center__title">Notifications</h3>
            <span class="badge badge-primary">2 new</span>
          </div>
          <div class="aural-notification-center__list">
            <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--success">
              <div class="aural-notification-center__item-icon">
                <i data-lucide="check-circle" style="width: 20px; height: 20px;"></i>
              </div>
              <div class="aural-notification-center__item-content">
                <div class="aural-notification-center__item-title">Build Successful</div>
                <div class="aural-notification-center__item-message">Your project built successfully</div>
                <div class="aural-notification-center__item-time">5 minutes ago</div>
              </div>
              <div class="aural-notification-center__item-dot"></div>
            </button>
            <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--info">
              <div class="aural-notification-center__item-icon">
                <i data-lucide="info" style="width: 20px; height: 20px;"></i>
              </div>
              <div class="aural-notification-center__item-content">
                <div class="aural-notification-center__item-title">New Update</div>
                <div class="aural-notification-center__item-message">Version 2.0 is ready</div>
                <div class="aural-notification-center__item-time">1 hour ago</div>
              </div>
              <div class="aural-notification-center__item-dot"></div>
            </button>
            <button class="aural-notification-center__item">
              <div class="aural-notification-center__item-icon">
                <i data-lucide="bell" style="width: 20px; height: 20px;"></i>
              </div>
              <div class="aural-notification-center__item-content">
                <div class="aural-notification-center__item-title">Welcome</div>
                <div class="aural-notification-center__item-message">Get started with Aural UI</div>
                <div class="aural-notification-center__item-time">2 days ago</div>
              </div>
            </button>
          </div>
          <div class="aural-notification-center__footer">
            <a href="#" class="aural-notification-center__footer-link">View all</a>
          </div>
        </div>
      `;

      setTimeout(() => {
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }, 0);

      return div.firstElementChild as HTMLElement;
    });
  }
};
