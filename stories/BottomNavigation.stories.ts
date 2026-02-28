import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Bottom Navigation',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Bottom Navigation Component

Mobile-first bottom navigation bar for easy thumb-accessible navigation. Perfect for mobile apps with 3-5 top-level destinations.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<nav class="aural-bottom-nav" role="navigation" aria-label="Main navigation">
  <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
    <i data-lucide="home" class="aural-bottom-nav__icon"></i>
    <span class="aural-bottom-nav__label">Home</span>
  </a>
</nav>
\`\`\`
        `.trim()
      }
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create a phone frame container
function createPhoneFrame(): HTMLElement {
  const phoneFrame = document.createElement('div');
  phoneFrame.style.cssText = `
    max-width: 400px;
    margin: 2rem auto;
    border: 8px solid var(--color-border-medium);
    border-radius: 32px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    position: relative;
  `;

  const phoneScreen = document.createElement('div');
  phoneScreen.style.cssText = `
    position: relative;
    aspect-ratio: 9 / 19.5;
    background: var(--color-bg-primary);
    overflow: hidden;
  `;

  const content = document.createElement('div');
  content.style.cssText = `
    height: 100%;
    overflow-y: auto;
    padding: var(--space-6);
    padding-bottom: 100px;
  `;

  content.innerHTML = `
    <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
      Welcome to the App
    </h3>
    <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
      This is a demo of the bottom navigation component in a phone-sized container.
    </p>
    <p style="color: var(--color-text-secondary); margin: 0;">
      Click the navigation items below to see the active state change.
    </p>
  `;

  phoneScreen.appendChild(content);
  phoneFrame.appendChild(phoneScreen);

  return phoneFrame;
}

// Helper function to initialize interactive navigation
function initBottomNav(nav: HTMLElement): void {
  const items = nav.querySelectorAll('.aural-bottom-nav__item:not(.aural-bottom-nav__fab)');
  items.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      items.forEach(i => {
        i.classList.remove('aural-bottom-nav__item--active');
        i.removeAttribute('aria-current');
      });
      item.classList.add('aural-bottom-nav__item--active');
      item.setAttribute('aria-current', 'page');
    });
  });

  // Initialize Lucide icons
  if (typeof (window as any).lucide !== 'undefined') {
    (window as any).lucide.createIcons();
  }
}

export const BasicBottomNav: Story = {
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;

    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Main navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';

    nav.innerHTML = `
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Notifications</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `;

    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);

    return container;
  }
};

export const WithBadges: Story = {
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;

    content.innerHTML = `
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Notification Badges
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Badges can show counts or simple dots to indicate new activity.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Use <code>aural-bottom-nav__badge--pulse</code> for urgent notifications and <code>aural-bottom-nav__badge--dot</code> for simple presence.
      </p>
    `;

    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Navigation with badges');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';

    nav.innerHTML = `
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Messages, 12 unread">
        <i data-lucide="message-circle" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Messages</span>
        <span class="aural-bottom-nav__badge aural-bottom-nav__badge--pulse" aria-hidden="true">12</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Alerts, new activity">
        <i data-lucide="bell" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Alerts</span>
        <span class="aural-bottom-nav__badge aural-bottom-nav__badge--dot" aria-hidden="true"></span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `;

    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);

    return container;
  }
};

export const IconsOnly: Story = {
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;

    content.innerHTML = `
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Icon-Only Navigation
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Use the compact variant when you need to save vertical space.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Labels are visually hidden but still available to screen readers. Always include <code>aria-label</code> on each item.
      </p>
    `;

    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--compact';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Compact navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';

    nav.innerHTML = `
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page" aria-label="Home">
        <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Search">
        <i data-lucide="search" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Search</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Favorites">
        <i data-lucide="heart" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Favorites</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Settings">
        <i data-lucide="settings" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Settings</span>
      </a>
    `;

    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);

    return container;
  }
};

export const WithFAB: Story = {
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;

    content.innerHTML = `
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        FAB Navigation
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Add a prominent floating action button for the primary action.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        The FAB should represent the single most important action in your app (create, compose, add).
      </p>
    `;

    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--with-fab';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Navigation with FAB');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';

    nav.innerHTML = `
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="search" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Search</span>
      </a>
      <button class="aural-bottom-nav__fab" aria-label="Create new post">
        <i data-lucide="plus"></i>
      </button>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Notifications</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `;

    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);

    return container;
  }
};

export const PrimaryVariant: Story = {
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;

    content.innerHTML = `
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Primary Variant
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Bold primary color background for brand-focused navigation.
      </p>
    `;

    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--primary';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Primary navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';

    nav.innerHTML = `
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Alerts</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `;

    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);

    return container;
  }
};

export const DarkVariant: Story = {
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;

    content.innerHTML = `
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Dark Variant
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Dark background with backdrop blur effect.
      </p>
    `;

    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--dark';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Dark navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';

    nav.innerHTML = `
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Alerts</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `;

    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);

    return container;
  }
};

export const BlurVariant: Story = {
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;

    content.innerHTML = `
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Blur Variant
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Modern frosted glass effect with backdrop blur.
      </p>
    `;

    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--blur';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Blur navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';

    nav.innerHTML = `
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Alerts</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `;

    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);

    return container;
  }
};

export const EcommercePattern: Story = {
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;

    content.innerHTML = `
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Shop Products
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Browse thousands of products in our mobile store.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Your cart has 2 items ready for checkout.
      </p>
    `;

    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Shop navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';

    nav.innerHTML = `
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="grid-3x3" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Categories</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Cart, 2 items">
        <i data-lucide="shopping-cart" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Cart</span>
        <span class="aural-bottom-nav__badge" aria-hidden="true">2</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user-circle" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Account</span>
      </a>
    `;

    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);

    return container;
  }
};

export const SocialMediaPattern: Story = {
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;

    content.innerHTML = `
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Your Feed
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Stay connected with friends and share your moments.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Tap the + button to create a new post.
      </p>
    `;

    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--with-fab';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Social navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';

    nav.innerHTML = `
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Feed</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="search" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Discover</span>
      </a>
      <button class="aural-bottom-nav__fab" aria-label="Create new post">
        <i data-lucide="plus"></i>
      </button>
      <a href="#" class="aural-bottom-nav__item" aria-label="Activity, 8 new">
        <i data-lucide="heart" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Activity</span>
        <span class="aural-bottom-nav__badge aural-bottom-nav__badge--pulse" aria-hidden="true">8</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `;

    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);

    return container;
  }
};

export const MobileOnlyPattern: Story = {
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;

    content.innerHTML = `
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Responsive Navigation
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        This bottom nav is visible only on mobile devices (below 1024px).
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        On desktop, you would use a sidebar or top navbar instead.
      </p>
    `;

    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--mobile-only';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Mobile navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';

    nav.innerHTML = `
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="layout-dashboard" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Dashboard</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bar-chart-2" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Analytics</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="users" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Team</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="settings" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Settings</span>
      </a>
    `;

    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);

    return container;
  }
};

export const FixedAtBottom: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      position: relative;
      width: 100%;
      height: 600px;
      background: var(--color-bg-primary);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      overflow: hidden;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
      padding: var(--space-6);
      padding-bottom: 100px;
    `;

    content.innerHTML = `
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Fixed Position Example
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        This navigation is fixed at the bottom of the viewport. Scroll down to see it stay in place.
      </p>
      ${Array.from({ length: 20 }, (_, i) => `
        <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-3) 0;">
          Content section ${i + 1} - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      `).join('')}
    `;

    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Fixed navigation');
    nav.style.position = 'fixed';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';

    nav.innerHTML = `
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Notifications</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `;

    container.appendChild(content);
    container.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);

    return container;
  }
};

export const ThemeComparison: Story = {
  render: () => {
    return createThemeGrid((theme) => {
      const phoneFrame = document.createElement('div');
      phoneFrame.style.cssText = `
        max-width: 280px;
        margin: 0 auto;
        border: 4px solid var(--color-border-medium);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: var(--shadow-md);
        position: relative;
      `;

      const phoneScreen = document.createElement('div');
      phoneScreen.style.cssText = `
        position: relative;
        aspect-ratio: 9 / 16;
        background: var(--color-bg-primary);
        overflow: hidden;
      `;

      const content = document.createElement('div');
      content.style.cssText = `
        padding: var(--space-4);
        padding-bottom: 80px;
      `;

      content.innerHTML = `
        <h4 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-2) 0;">
          ${theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
        </h4>
        <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">
          Navigation example
        </p>
      `;

      const nav = document.createElement('nav');
      nav.className = 'aural-bottom-nav';
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Theme navigation');
      nav.style.position = 'absolute';
      nav.style.bottom = '0';
      nav.style.left = '0';
      nav.style.right = '0';

      nav.innerHTML = `
        <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
          <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
          <span class="aural-bottom-nav__label">Home</span>
        </a>
        <a href="#" class="aural-bottom-nav__item" aria-label="Messages, 3 unread">
          <i data-lucide="message-circle" class="aural-bottom-nav__icon" aria-hidden="true"></i>
          <span class="aural-bottom-nav__label">Messages</span>
          <span class="aural-bottom-nav__badge" aria-hidden="true">3</span>
        </a>
        <a href="#" class="aural-bottom-nav__item">
          <i data-lucide="bell" class="aural-bottom-nav__icon" aria-hidden="true"></i>
          <span class="aural-bottom-nav__label">Alerts</span>
        </a>
        <a href="#" class="aural-bottom-nav__item">
          <i data-lucide="user" class="aural-bottom-nav__icon" aria-hidden="true"></i>
          <span class="aural-bottom-nav__label">Profile</span>
        </a>
      `;

      phoneScreen.appendChild(content);
      phoneScreen.appendChild(nav);
      phoneFrame.appendChild(phoneScreen);

      setTimeout(() => {
        if (typeof (window as any).lucide !== 'undefined') {
          (window as any).lucide.createIcons();
        }
      }, 0);

      return phoneFrame;
    }, { columns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' });
  }
};
