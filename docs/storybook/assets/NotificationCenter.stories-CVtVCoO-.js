import{c as J}from"./createThemeGrid-DWAncU4Q.js";const G={title:"Components/NotificationCenter",tags:["autodocs"],parameters:{docs:{description:{component:`
# Notification Center Component

Centralized notification hub for managing multiple alerts, messages, and updates with categorization, read/unread states, and actionable items in a dropdown panel.

Use Notification Center for persistent, historical notifications users need to review (emails, mentions, system updates). For temporary, single-action feedback, use **Snackbars** instead.

Notification Centers provide a unified inbox for all app notifications, allowing users to triage, act on, or dismiss messages at their own pace rather than being interrupted by individual alerts.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-notification-center">
  <div class="aural-notification-center__header">
    <h3 class="aural-notification-center__title">Notifications</h3>
    <span class="badge badge-primary">3 new</span>
  </div>

  <div class="aural-notification-center__list">
    <!-- Unread Notification -->
    <button
      class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--success"
    >
      <div class="aural-notification-center__item-icon">
        <i data-lucide="check-circle" style="width: 20px; height: 20px;"></i>
      </div>
      <div class="aural-notification-center__item-content">
        <div class="aural-notification-center__item-title">Build Successful</div>
        <div class="aural-notification-center__item-message">
          Your project built successfully
        </div>
        <div class="aural-notification-center__item-time">5 minutes ago</div>
      </div>
      <div class="aural-notification-center__item-dot"></div>
    </button>

    <!-- Read Notification -->
    <button class="aural-notification-center__item">
      <div class="aural-notification-center__item-icon">
        <i data-lucide="bell" style="width: 20px; height: 20px;"></i>
      </div>
      <div class="aural-notification-center__item-content">
        <div class="aural-notification-center__item-title">Welcome</div>
        <div class="aural-notification-center__item-message">
          Thanks for joining!
        </div>
        <div class="aural-notification-center__item-time">2 days ago</div>
      </div>
    </button>
  </div>

  <div class="aural-notification-center__footer">
    <a href="#" class="aural-notification-center__footer-link">View all</a>
  </div>
</div>

<script>
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
<\/script>
\`\`\`

**React:**
\`\`\`jsx
import { Bell, CheckCircle, AlertCircle, X } from 'lucide-react';
import { useState } from 'react';

function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Build Successful', message: 'Your project built successfully', time: '5 min ago', type: 'success', unread: true },
    { id: 2, title: 'New Update', message: 'Version 2.0 is ready', time: '1 hour ago', type: 'info', unread: true },
    { id: 3, title: 'Welcome', message: 'Thanks for joining!', time: '2 days ago', type: 'default', unread: false }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, unread: false } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  return (
    <div className="aural-notification-center">
      <button
        className="aural-notification-center__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={\`Notifications, \${unreadCount} unread\`}
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="aural-notification-center__badge">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="aural-notification-center__dropdown aural-notification-center__dropdown--open">
          <div className="aural-notification-center__header">
            <h3 className="aural-notification-center__title">Notifications</h3>
            <button
              className="btn btn-ghost btn-sm"
              onClick={markAllAsRead}
              disabled={unreadCount === 0}
            >
              Mark all read
            </button>
          </div>

          <div className="aural-notification-center__list">
            {notifications.map(notif => (
              <button
                key={notif.id}
                className={\`aural-notification-center__item \${notif.unread ? 'aural-notification-center__item--unread' : ''} aural-notification-center__item--\${notif.type}\`}
                onClick={() => markAsRead(notif.id)}
              >
                <div className="aural-notification-center__item-icon">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="aural-notification-center__item-content">
                  <div className="aural-notification-center__item-title">{notif.title}</div>
                  <div className="aural-notification-center__item-message">{notif.message}</div>
                  <div className="aural-notification-center__item-time">{notif.time}</div>
                </div>
                {notif.unread && <div className="aural-notification-center__item-dot" />}
              </button>
            ))}
          </div>

          <div className="aural-notification-center__footer">
            <a href="/notifications" className="aural-notification-center__footer-link">
              View all notifications
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div class="aural-notification-center">
    <button
      class="aural-notification-center__trigger"
      @click="isOpen = !isOpen"
      :aria-label="\`Notifications, \${unreadCount} unread\`"
    >
      <Bell class="w-5 h-5" />
      <span v-if="unreadCount > 0" class="aural-notification-center__badge">
        {{ unreadCount }}
      </span>
    </button>

    <div
      v-if="isOpen"
      class="aural-notification-center__dropdown aural-notification-center__dropdown--open"
    >
      <div class="aural-notification-center__header">
        <h3 class="aural-notification-center__title">Notifications</h3>
        <button
          class="btn btn-ghost btn-sm"
          @click="markAllAsRead"
          :disabled="unreadCount === 0"
        >
          Mark all read
        </button>
      </div>

      <div class="aural-notification-center__list">
        <button
          v-for="notif in notifications"
          :key="notif.id"
          :class="[
            'aural-notification-center__item',
            notif.unread && 'aural-notification-center__item--unread',
            \`aural-notification-center__item--\${notif.type}\`
          ]"
          @click="markAsRead(notif.id)"
        >
          <div class="aural-notification-center__item-icon">
            <CheckCircle class="w-5 h-5" />
          </div>
          <div class="aural-notification-center__item-content">
            <div class="aural-notification-center__item-title">{{ notif.title }}</div>
            <div class="aural-notification-center__item-message">{{ notif.message }}</div>
            <div class="aural-notification-center__item-time">{{ notif.time }}</div>
          </div>
          <div v-if="notif.unread" class="aural-notification-center__item-dot" />
        </button>
      </div>

      <div class="aural-notification-center__footer">
        <a href="/notifications" class="aural-notification-center__footer-link">
          View all notifications
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Bell, CheckCircle } from 'lucide-vue-next';

const isOpen = ref(false);
const notifications = ref([
  { id: 1, title: 'Build Successful', message: 'Your project built successfully', time: '5 min ago', type: 'success', unread: true },
  { id: 2, title: 'New Update', message: 'Version 2.0 is ready', time: '1 hour ago', type: 'info', unread: true },
  { id: 3, title: 'Welcome', message: 'Thanks for joining!', time: '2 days ago', type: 'default', unread: false }
]);

const unreadCount = computed(() => notifications.value.filter(n => n.unread).length);

const markAsRead = (id) => {
  const notif = notifications.value.find(n => n.id === id);
  if (notif) notif.unread = false;
};

const markAllAsRead = () => {
  notifications.value.forEach(n => n.unread = false);
};
<\/script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { Bell, CheckCircle } from 'lucide-svelte';

  let isOpen = false;
  let notifications = [
    { id: 1, title: 'Build Successful', message: 'Your project built successfully', time: '5 min ago', type: 'success', unread: true },
    { id: 2, title: 'New Update', message: 'Version 2.0 is ready', time: '1 hour ago', type: 'info', unread: true },
    { id: 3, title: 'Welcome', message: 'Thanks for joining!', time: '2 days ago', type: 'default', unread: false }
  ];

  $: unreadCount = notifications.filter(n => n.unread).length;

  function markAsRead(id) {
    notifications = notifications.map(n =>
      n.id === id ? { ...n, unread: false } : n
    );
  }

  function markAllAsRead() {
    notifications = notifications.map(n => ({ ...n, unread: false }));
  }
<\/script>

<div class="aural-notification-center">
  <button
    class="aural-notification-center__trigger"
    on:click={() => isOpen = !isOpen}
    aria-label="Notifications, {unreadCount} unread"
  >
    <Bell class="w-5 h-5" />
    {#if unreadCount > 0}
      <span class="aural-notification-center__badge">{unreadCount}</span>
    {/if}
  </button>

  {#if isOpen}
    <div class="aural-notification-center__dropdown aural-notification-center__dropdown--open">
      <div class="aural-notification-center__header">
        <h3 class="aural-notification-center__title">Notifications</h3>
        <button
          class="btn btn-ghost btn-sm"
          on:click={markAllAsRead}
          disabled={unreadCount === 0}
        >
          Mark all read
        </button>
      </div>

      <div class="aural-notification-center__list">
        {#each notifications as notif (notif.id)}
          <button
            class="aural-notification-center__item {notif.unread ? 'aural-notification-center__item--unread' : ''} aural-notification-center__item--{notif.type}"
            on:click={() => markAsRead(notif.id)}
          >
            <div class="aural-notification-center__item-icon">
              <CheckCircle class="w-5 h-5" />
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">{notif.title}</div>
              <div class="aural-notification-center__item-message">{notif.message}</div>
              <div class="aural-notification-center__item-time">{notif.time}</div>
            </div>
            {#if notif.unread}
              <div class="aural-notification-center__item-dot" />
            {/if}
          </button>
        {/each}
      </div>

      <div class="aural-notification-center__footer">
        <a href="/notifications" class="aural-notification-center__footer-link">
          View all notifications
        </a>
      </div>
    </div>
  {/if}
</div>
\`\`\`

## Accessibility

1. **Badge count announcement** - Add \`aria-label="Notifications, 3 unread"\` to bell button to announce unread count to screen readers
2. **Dropdown role** - Use \`role="dialog"\` or \`role="menu"\` for notification panel to indicate interactive overlay
3. **Focus management** - Move focus to first notification when opening panel; return focus to bell button when closing
4. **Keyboard navigation** - Support Arrow keys to navigate notifications, Enter/Space to select, Escape to close panel
5. **List semantics** - Wrap notifications in \`<ul>\` with \`<li>\` items for proper screen reader list navigation
6. **Unread indicators** - Don't rely solely on color/dot; include \`aria-label="Unread:"\` or visually hidden "New" text
7. **Mark all read button** - Disable when unreadCount === 0 and provide \`aria-live="polite"\` announcement when clicked
8. **Empty state** - Show "No notifications" message with friendly icon rather than empty panel
9. **Time stamps** - Use \`<time datetime="2024-03-04T12:00:00">\` for machine-readable timestamps
10. **Action buttons** - For notifications with "Accept"/"Decline" buttons, ensure keyboard-focusable and labeled
11. **Close behavior** - Clicking outside or pressing Escape should close panel (focus trap pattern)
12. **Loading states** - Show skeleton notifications while fetching data (don't show empty panel)
13. **Badge color contrast** - Ensure badge meets 3:1 contrast ratio against button background
14. **Mobile drawer** - On mobile, use full-screen drawer instead of dropdown for better accessibility

## Usage Guidelines

### When to Use

- **Email/message notifications** - New emails, chat messages, mentions, replies
- **System updates** - App updates, maintenance windows, feature announcements
- **Social activity** - Follows, likes, comments, shares, friend requests
- **Task/project updates** - Assignments, due dates, status changes, approvals
- **Transactional events** - Orders, payments, shipments, confirmations
- **Alerts/warnings** - Security alerts, quota warnings, errors requiring action

### When NOT to Use

- **Single, immediate feedback** - Use Snackbars for one-off confirmations ("Saved!")
- **Critical errors** - Use Modal dialogs for errors requiring immediate attention
- **Real-time chat** - Use dedicated chat interface not notification center
- **Form validation** - Use inline errors not notification center
- **Transient status** - For temporary states like "Loading...", use Progress/Spinner
- **Marketing/promotions** - Don't spam notification center with promotional content

### Best Practices

- Show most recent notifications first (reverse chronological order)
- Limit dropdown to 5-10 notifications; provide "View all" link for full list
- Group notifications by type/date ("Today", "Yesterday", "Earlier") for scannability
- Auto-mark as read when user clicks notification (expand content or navigate)
- Show unread badge count up to 99, then "99+" for higher counts
- Provide "Mark all as read" button to batch-clear notifications
- For actionable notifications (invites, requests), embed Accept/Decline buttons
- Persist notifications across sessions (don't disappear on page reload)
- Use pulsing badge animation for new notifications (but respect reduced motion)
- Allow users to configure notification preferences (email, mentions, etc.)

### Mobile Considerations

- Use full-screen drawer (slide from top/bottom) instead of dropdown on mobile
- Increase touch target size to 48×48px minimum for notification items
- Stack action buttons vertically on mobile (horizontal on desktop)
- Show fewer notifications in mobile drawer (3-5 vs 10) to reduce scroll
- Place bell icon in top-right of navbar (standard mobile pattern)
- Consider swipe-to-dismiss gesture for individual notifications
- Test on iOS with Dynamic Island/notch to ensure proper positioning
        `.trim()}}},argTypes:{title:{control:"text",description:'Header title for notification panel (typically "Notifications" or "Activity"); shown at top of dropdown panel alongside unread count'},showSettings:{control:"boolean",description:"Whether to display settings/preferences button in panel header (allows users to configure notification types, email preferences, or mute options)"}}},n={render:i=>{const t=document.createElement("div");return t.style.padding="2rem",t.style.display="flex",t.style.justifyContent="center",t.innerHTML=`
      <div class="aural-notification-center" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">${i.title||"Notifications"}</h3>
          ${i.showSettings?`
            <button class="btn btn-ghost btn-sm" aria-label="Notification settings">
              <i data-lucide="settings" style="width: 16px; height: 16px;"></i>
            </button>
          `:""}
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
    `,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),t},args:{title:"Notifications",showSettings:!0}},o={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.display="flex",i.style.justifyContent="center",i.innerHTML=`
      <div class="aural-notification-center" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Recent Activity</h3>
          <span class="badge badge-primary">4 new</span>
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
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--info">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="message-square" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">New Comment</div>
              <div class="aural-notification-center__item-message">John replied to your comment on "Q4 Planning"</div>
              <div class="aural-notification-center__item-time">3 hours ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
        </div>
      </div>
    `,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),i}},c={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.display="flex",i.style.justifyContent="center",i.innerHTML=`
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
    `,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),i}},r={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.display="flex",i.style.justifyContent="center",i.innerHTML=`
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
    `,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),i}},s={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.display="flex",i.style.justifyContent="center",i.innerHTML=`
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
    `,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),i}},l={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.display="flex",i.style.justifyContent="center",i.innerHTML=`
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
    `,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),i}},d={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.display="flex",i.style.justifyContent="center",i.innerHTML=`
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
    `,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),i}},u={render:()=>{const i=document.createElement("div");i.style.padding="2rem",i.style.display="flex",i.style.justifyContent="center";const t=`notification-center-${Math.random().toString(36).substr(2,9)}`;return i.innerHTML=`
      <div class="aural-notification-center" id="${t}" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Notifications</h3>
          <button class="btn btn-ghost btn-sm" id="mark-all-read-${t}">
            <i data-lucide="check-check" style="width: 16px; height: 16px;"></i>
            Mark all read
          </button>
        </div>
        <div class="aural-notification-center__list" id="notification-list-${t}">
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
    `,setTimeout(()=>{const e=i.querySelector(`#mark-all-read-${t}`),a=i.querySelector(`#notification-list-${t}`);e&&a&&e.addEventListener("click",()=>{a.querySelectorAll(".aural-notification-center__item--unread").forEach(v=>{v.classList.remove("aural-notification-center__item--unread");const p=v.querySelector(".aural-notification-center__item-dot");p&&p.remove()}),e.innerHTML='<i data-lucide="check" style="width: 16px; height: 16px;"></i> All read',e.disabled=!0,typeof lucide<"u"&&lucide.createIcons()}),typeof lucide<"u"&&lucide.createIcons()},0),i}},_={render:()=>{const i=document.createElement("div");i.style.padding="2rem",i.style.display="flex",i.style.justifyContent="center";const t=`notification-center-${Math.random().toString(36).substr(2,9)}`;return i.innerHTML=`
      <div class="aural-notification-center" id="${t}" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Notifications</h3>
          <span class="badge badge-primary">12 total</span>
        </div>
        <div class="aural-notification-center__list" id="notification-list-${t}">
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
          <button class="btn btn-ghost btn-sm" style="width: 100%; justify-content: center;" id="load-more-${t}">
            <i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i>
            Load more notifications
          </button>
        </div>
      </div>
    `,setTimeout(()=>{const e=i.querySelector(`#load-more-${t}`),a=i.querySelector(`#notification-list-${t}`);if(e&&a){let f=0;e.addEventListener("click",()=>{f++,e.innerHTML='<span class="spinner" style="width: 16px; height: 16px;"></span> Loading...',e.disabled=!0,setTimeout(()=>{a.insertAdjacentHTML("beforeend",`
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
            `),f>=2?(e.innerHTML="All notifications loaded",e.disabled=!0):(e.innerHTML='<i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i> Load more notifications',e.disabled=!1),typeof lucide<"u"&&lucide.createIcons()},1e3)})}typeof lucide<"u"&&lucide.createIcons()},0),i}},m={render:()=>J(()=>{const i=document.createElement("div");return i.innerHTML=`
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
      `,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),i.firstElementChild})};var h,g,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.innerHTML = \`
      <div class="aural-notification-center" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">\${args.title || 'Notifications'}</h3>
          \${args.showSettings ? \`
            <button class="btn btn-ghost btn-sm" aria-label="Notification settings">
              <i data-lucide="settings" style="width: 16px; height: 16px;"></i>
            </button>
          \` : ''}
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
    \`;
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
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,x,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.innerHTML = \`
      <div class="aural-notification-center" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Recent Activity</h3>
          <span class="badge badge-primary">4 new</span>
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
          <button class="aural-notification-center__item aural-notification-center__item--unread aural-notification-center__item--info">
            <div class="aural-notification-center__item-icon">
              <i data-lucide="message-square" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="aural-notification-center__item-content">
              <div class="aural-notification-center__item-title">New Comment</div>
              <div class="aural-notification-center__item-message">John replied to your comment on "Q4 Planning"</div>
              <div class="aural-notification-center__item-time">3 hours ago</div>
            </div>
            <div class="aural-notification-center__item-dot"></div>
          </button>
        </div>
      </div>
    \`;
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var k,C,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.innerHTML = \`
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
    \`;
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(N=(C=c.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var T,A,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.innerHTML = \`
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
    \`;
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(S=(A=r.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var M,L,I;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.innerHTML = \`
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
    \`;
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(I=(L=s.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var j,E,B;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.innerHTML = \`
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
    \`;
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(B=(E=l.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var U,$,H;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.innerHTML = \`
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
    \`;
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(H=($=d.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var q,Y,W;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    const notificationCenterId = \`notification-center-\${Math.random().toString(36).substr(2, 9)}\`;
    container.innerHTML = \`
      <div class="aural-notification-center" id="\${notificationCenterId}" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Notifications</h3>
          <button class="btn btn-ghost btn-sm" id="mark-all-read-\${notificationCenterId}">
            <i data-lucide="check-check" style="width: 16px; height: 16px;"></i>
            Mark all read
          </button>
        </div>
        <div class="aural-notification-center__list" id="notification-list-\${notificationCenterId}">
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
    \`;
    setTimeout(() => {
      const markAllButton = container.querySelector(\`#mark-all-read-\${notificationCenterId}\`);
      const notificationList = container.querySelector(\`#notification-list-\${notificationCenterId}\`);
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
}`,...(W=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var R,D,P;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    const notificationCenterId = \`notification-center-\${Math.random().toString(36).substr(2, 9)}\`;
    container.innerHTML = \`
      <div class="aural-notification-center" id="\${notificationCenterId}" style="max-width: 400px;">
        <div class="aural-notification-center__header">
          <h3 class="aural-notification-center__title">Notifications</h3>
          <span class="badge badge-primary">12 total</span>
        </div>
        <div class="aural-notification-center__list" id="notification-list-\${notificationCenterId}">
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
          <button class="btn btn-ghost btn-sm" style="width: 100%; justify-content: center;" id="load-more-\${notificationCenterId}">
            <i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i>
            Load more notifications
          </button>
        </div>
      </div>
    \`;
    setTimeout(() => {
      const loadMoreButton = container.querySelector(\`#load-more-\${notificationCenterId}\`);
      const notificationList = container.querySelector(\`#notification-list-\${notificationCenterId}\`);
      if (loadMoreButton && notificationList) {
        let loadCount = 0;
        loadMoreButton.addEventListener('click', () => {
          loadCount++;

          // Simulate loading
          loadMoreButton.innerHTML = '<span class="spinner" style="width: 16px; height: 16px;"></span> Loading...';
          loadMoreButton.disabled = true;
          setTimeout(() => {
            // Add more notifications
            const newNotifications = \`
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
            \`;
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
}`,...(P=(D=_.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var F,O,V;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    return createThemeGrid(() => {
      const div = document.createElement('div');
      div.innerHTML = \`
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
      \`;
      setTimeout(() => {
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }, 0);
      return div.firstElementChild as HTMLElement;
    });
  }
}`,...(V=(O=m.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const Q=["Default","DifferentTypes","WithUnreadIndicator","WithAvatars","WithActionButtons","GroupedByDate","EmptyState","MarkAllAsRead","LoadMorePattern","ThemeComparison"];export{n as Default,o as DifferentTypes,d as EmptyState,l as GroupedByDate,_ as LoadMorePattern,u as MarkAllAsRead,m as ThemeComparison,s as WithActionButtons,r as WithAvatars,c as WithUnreadIndicator,Q as __namedExportsOrder,G as default};
