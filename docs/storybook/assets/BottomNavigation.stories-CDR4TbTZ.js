import{c as Q}from"./createThemeGrid-DWAncU4Q.js";const Z={title:"Components/Bottom Navigation",tags:["autodocs"],parameters:{docs:{description:{component:`
# Bottom Navigation Component

Mobile-first bottom navigation bar for easy thumb-accessible navigation. Perfect for mobile apps with 3-5 top-level destinations.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<nav class="aural-bottom-nav" role="navigation" aria-label="Main navigation">
  <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
    <i data-lucide="home" class="aural-bottom-nav__icon" aria-hidden="true"></i>
    <span class="aural-bottom-nav__label">Home</span>
  </a>
</nav>
\`\`\`

## Component Structure

- \`.aural-bottom-nav\` - Main navigation container
- \`.aural-bottom-nav__item\` - Navigation item (anchor or button)
- \`.aural-bottom-nav__item--active\` - Active state modifier
- \`.aural-bottom-nav__icon\` - Icon element
- \`.aural-bottom-nav__label\` - Label text
- \`.aural-bottom-nav__badge\` - Badge for notifications
- \`.aural-bottom-nav__badge--pulse\` - Pulsing badge animation
- \`.aural-bottom-nav__badge--dot\` - Dot indicator badge
- \`.aural-bottom-nav__fab\` - Floating action button

## Variants

- \`.aural-bottom-nav--compact\` - Icon-only compact variant
- \`.aural-bottom-nav--with-fab\` - With floating action button
- \`.aural-bottom-nav--primary\` - Primary color variant
- \`.aural-bottom-nav--dark\` - Dark variant with blur
- \`.aural-bottom-nav--blur\` - Frosted glass effect
- \`.aural-bottom-nav--mobile-only\` - Hidden on desktop (1024px+)
        `.trim()}}}};function r(){const o=document.createElement("div");o.style.cssText=`
    max-width: 400px;
    margin: 2rem auto;
    border: 8px solid var(--color-border-medium);
    border-radius: 32px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    position: relative;
  `;const e=document.createElement("div");e.style.cssText=`
    position: relative;
    aspect-ratio: 9 / 19.5;
    background: var(--color-bg-primary);
    overflow: hidden;
  `;const t=document.createElement("div");return t.style.cssText=`
    height: 100%;
    overflow-y: auto;
    padding: var(--space-6);
    padding-bottom: 100px;
  `,t.innerHTML=`
    <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
      Welcome to the App
    </h3>
    <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
      This is a demo of the bottom navigation component in a phone-sized container.
    </p>
    <p style="color: var(--color-text-secondary); margin: 0;">
      Click the navigation items below to see the active state change.
    </p>
  `,e.appendChild(t),o.appendChild(e),o}function l(o){const e=o.querySelectorAll(".aural-bottom-nav__item:not(.aural-bottom-nav__fab)");e.forEach(t=>{t.addEventListener("click",a=>{a.preventDefault(),e.forEach(n=>{n.classList.remove("aural-bottom-nav__item--active"),n.removeAttribute("aria-current")}),t.classList.add("aural-bottom-nav__item--active"),t.setAttribute("aria-current","page")})}),typeof window.lucide<"u"&&window.lucide.createIcons()}const s={render:()=>{const o=r(),e=o.querySelector("div"),t=document.createElement("nav");return t.className="aural-bottom-nav",t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation"),t.style.position="absolute",t.style.bottom="0",t.style.left="0",t.style.right="0",t.innerHTML=`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Notifications</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `,e.appendChild(t),setTimeout(()=>l(t),0),o}},i={render:()=>{const o=r(),e=o.querySelector("div"),t=e.querySelector("div");t.innerHTML=`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Notification Badges
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Badges can show counts or simple dots to indicate new activity.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Use <code>aural-bottom-nav__badge--pulse</code> for urgent notifications and <code>aural-bottom-nav__badge--dot</code> for simple presence.
      </p>
    `;const a=document.createElement("nav");return a.className="aural-bottom-nav",a.setAttribute("role","navigation"),a.setAttribute("aria-label","Navigation with badges"),a.style.position="absolute",a.style.bottom="0",a.style.left="0",a.style.right="0",a.innerHTML=`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
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
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `,e.appendChild(a),setTimeout(()=>l(a),0),o}},c={render:()=>{const o=r(),e=o.querySelector("div"),t=e.querySelector("div");t.innerHTML=`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Icon-Only Navigation
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Use the compact variant when you need to save vertical space.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Labels are visually hidden but still available to screen readers. Always include <code>aria-label</code> on each item.
      </p>
    `;const a=document.createElement("nav");return a.className="aural-bottom-nav aural-bottom-nav--compact",a.setAttribute("role","navigation"),a.setAttribute("aria-label","Compact navigation"),a.style.position="absolute",a.style.bottom="0",a.style.left="0",a.style.right="0",a.innerHTML=`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page" aria-label="Home">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Search">
        <i data-lucide="search" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Search</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Favorites">
        <i data-lucide="heart" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Favorites</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Settings">
        <i data-lucide="settings" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Settings</span>
      </a>
    `,e.appendChild(a),setTimeout(()=>l(a),0),o}},m={render:()=>{const o=r(),e=o.querySelector("div"),t=e.querySelector("div");t.innerHTML=`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        FAB Navigation
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Add a prominent floating action button for the primary action.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        The FAB should represent the single most important action in your app (create, compose, add).
      </p>
    `;const a=document.createElement("nav");return a.className="aural-bottom-nav aural-bottom-nav--with-fab",a.setAttribute("role","navigation"),a.setAttribute("aria-label","Navigation with FAB"),a.style.position="absolute",a.style.bottom="0",a.style.left="0",a.style.right="0",a.innerHTML=`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="search" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Search</span>
      </a>
      <button class="aural-bottom-nav__fab" aria-label="Create new post">
        <i data-lucide="plus"></i>
      </button>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Notifications</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `,e.appendChild(a),setTimeout(()=>l(a),0),o}},v={render:()=>{const o=r(),e=o.querySelector("div"),t=e.querySelector("div");t.innerHTML=`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Primary Variant
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Bold primary color background for brand-focused navigation.
      </p>
    `;const a=document.createElement("nav");return a.className="aural-bottom-nav aural-bottom-nav--primary",a.setAttribute("role","navigation"),a.setAttribute("aria-label","Primary navigation"),a.style.position="absolute",a.style.bottom="0",a.style.left="0",a.style.right="0",a.innerHTML=`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Alerts</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `,e.appendChild(a),setTimeout(()=>l(a),0),o}},u={render:()=>{const o=r(),e=o.querySelector("div"),t=e.querySelector("div");t.innerHTML=`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Dark Variant
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Dark background with backdrop blur effect.
      </p>
    `;const a=document.createElement("nav");return a.className="aural-bottom-nav aural-bottom-nav--dark",a.setAttribute("role","navigation"),a.setAttribute("aria-label","Dark navigation"),a.style.position="absolute",a.style.bottom="0",a.style.left="0",a.style.right="0",a.innerHTML=`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Alerts</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `,e.appendChild(a),setTimeout(()=>l(a),0),o}},b={render:()=>{const o=r(),e=o.querySelector("div"),t=e.querySelector("div");t.innerHTML=`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Blur Variant
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Modern frosted glass effect with backdrop blur.
      </p>
    `;const a=document.createElement("nav");return a.className="aural-bottom-nav aural-bottom-nav--blur",a.setAttribute("role","navigation"),a.setAttribute("aria-label","Blur navigation"),a.style.position="absolute",a.style.bottom="0",a.style.left="0",a.style.right="0",a.innerHTML=`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Alerts</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `,e.appendChild(a),setTimeout(()=>l(a),0),o}},d={render:()=>{const o=r(),e=o.querySelector("div"),t=e.querySelector("div");t.innerHTML=`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Shop Products
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Browse thousands of products in our mobile store.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Your cart has 2 items ready for checkout.
      </p>
    `;const a=document.createElement("nav");return a.className="aural-bottom-nav",a.setAttribute("role","navigation"),a.setAttribute("aria-label","Shop navigation"),a.style.position="absolute",a.style.bottom="0",a.style.left="0",a.style.right="0",a.innerHTML=`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="grid-3x3" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Categories</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Cart, 2 items">
        <i data-lucide="shopping-cart" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Cart</span>
        <span class="aural-bottom-nav__badge" aria-hidden="true">2</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user-circle" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Account</span>
      </a>
    `,e.appendChild(a),setTimeout(()=>l(a),0),o}},p={render:()=>{const o=r(),e=o.querySelector("div"),t=e.querySelector("div");t.innerHTML=`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Your Feed
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Stay connected with friends and share your moments.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Tap the + button to create a new post.
      </p>
    `;const a=document.createElement("nav");return a.className="aural-bottom-nav aural-bottom-nav--with-fab",a.setAttribute("role","navigation"),a.setAttribute("aria-label","Social navigation"),a.style.position="absolute",a.style.bottom="0",a.style.left="0",a.style.right="0",a.innerHTML=`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Feed</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="search" class="aural-bottom-nav__icon"></i>
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
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    `,e.appendChild(a),setTimeout(()=>l(a),0),o}},_={render:()=>{const o=r(),e=o.querySelector("div"),t=e.querySelector("div");t.innerHTML=`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Responsive Navigation
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        This bottom nav is visible only on mobile devices (below 1024px).
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        On desktop, you would use a sidebar or top navbar instead.
      </p>
    `;const a=document.createElement("nav");return a.className="aural-bottom-nav aural-bottom-nav--mobile-only",a.setAttribute("role","navigation"),a.setAttribute("aria-label","Mobile navigation"),a.style.position="absolute",a.style.bottom="0",a.style.left="0",a.style.right="0",a.innerHTML=`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="layout-dashboard" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Dashboard</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bar-chart-2" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Analytics</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="users" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Team</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="settings" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Settings</span>
      </a>
    `,e.appendChild(a),setTimeout(()=>l(a),0),o}},h={render:()=>Q(o=>{const e=document.createElement("div");e.style.cssText=`
        max-width: 280px;
        margin: 0 auto;
        border: 4px solid var(--color-border-medium);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: var(--shadow-md);
        position: relative;
      `;const t=document.createElement("div");t.style.cssText=`
        position: relative;
        aspect-ratio: 9 / 16;
        background: var(--color-bg-primary);
        overflow: hidden;
      `;const a=document.createElement("div");a.style.cssText=`
        padding: var(--space-4);
        padding-bottom: 80px;
      `,a.innerHTML=`
        <h4 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-2) 0;">
          ${o.charAt(0).toUpperCase()+o.slice(1)} Theme
        </h4>
        <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">
          Navigation example
        </p>
      `;const n=document.createElement("nav");return n.className="aural-bottom-nav",n.setAttribute("role","navigation"),n.setAttribute("aria-label","Theme navigation"),n.style.position="absolute",n.style.bottom="0",n.style.left="0",n.style.right="0",n.innerHTML=`
        <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
          <i data-lucide="home" class="aural-bottom-nav__icon"></i>
          <span class="aural-bottom-nav__label">Home</span>
        </a>
        <a href="#" class="aural-bottom-nav__item" aria-label="Messages, 3 unread">
          <i data-lucide="message-circle" class="aural-bottom-nav__icon" aria-hidden="true"></i>
          <span class="aural-bottom-nav__label">Messages</span>
          <span class="aural-bottom-nav__badge" aria-hidden="true">3</span>
        </a>
        <a href="#" class="aural-bottom-nav__item">
          <i data-lucide="bell" class="aural-bottom-nav__icon"></i>
          <span class="aural-bottom-nav__label">Alerts</span>
        </a>
        <a href="#" class="aural-bottom-nav__item">
          <i data-lucide="user" class="aural-bottom-nav__icon"></i>
          <span class="aural-bottom-nav__label">Profile</span>
        </a>
      `,t.appendChild(a),t.appendChild(n),e.appendChild(t),setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},0),e},{columns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"})};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    nav.innerHTML = \`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Notifications</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    \`;
    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);
    return container;
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,S,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;
    content.innerHTML = \`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Notification Badges
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Badges can show counts or simple dots to indicate new activity.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Use <code>aural-bottom-nav__badge--pulse</code> for urgent notifications and <code>aural-bottom-nav__badge--dot</code> for simple presence.
      </p>
    \`;
    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Navigation with badges');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.innerHTML = \`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
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
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    \`;
    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);
    return container;
  }
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,H,M;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;
    content.innerHTML = \`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Icon-Only Navigation
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Use the compact variant when you need to save vertical space.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Labels are visually hidden but still available to screen readers. Always include <code>aria-label</code> on each item.
      </p>
    \`;
    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--compact';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Compact navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.innerHTML = \`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page" aria-label="Home">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Search">
        <i data-lucide="search" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Search</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Favorites">
        <i data-lucide="heart" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Favorites</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Settings">
        <i data-lucide="settings" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Settings</span>
      </a>
    \`;
    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);
    return container;
  }
}`,...(M=(H=c.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var A,L,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;
    content.innerHTML = \`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        FAB Navigation
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Add a prominent floating action button for the primary action.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        The FAB should represent the single most important action in your app (create, compose, add).
      </p>
    \`;
    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--with-fab';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Navigation with FAB');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.innerHTML = \`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="search" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Search</span>
      </a>
      <button class="aural-bottom-nav__fab" aria-label="Create new post">
        <i data-lucide="plus"></i>
      </button>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Notifications</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    \`;
    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);
    return container;
  }
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var N,C,P;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;
    content.innerHTML = \`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Primary Variant
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Bold primary color background for brand-focused navigation.
      </p>
    \`;
    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--primary';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Primary navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.innerHTML = \`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Alerts</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    \`;
    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);
    return container;
  }
}`,...(P=(C=v.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var B,q,F;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;
    content.innerHTML = \`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Dark Variant
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Dark background with backdrop blur effect.
      </p>
    \`;
    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--dark';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Dark navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.innerHTML = \`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Alerts</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    \`;
    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);
    return container;
  }
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var k,z,V;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;
    content.innerHTML = \`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Blur Variant
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Modern frosted glass effect with backdrop blur.
      </p>
    \`;
    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--blur';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Blur navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.innerHTML = \`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="compass" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Explore</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bell" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Alerts</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    \`;
    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);
    return container;
  }
}`,...(V=(z=b.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var D,I,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;
    content.innerHTML = \`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Shop Products
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Browse thousands of products in our mobile store.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Your cart has 2 items ready for checkout.
      </p>
    \`;
    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Shop navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.innerHTML = \`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Home</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="grid-3x3" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Categories</span>
      </a>
      <a href="#" class="aural-bottom-nav__item" aria-label="Cart, 2 items">
        <i data-lucide="shopping-cart" class="aural-bottom-nav__icon" aria-hidden="true"></i>
        <span class="aural-bottom-nav__label">Cart</span>
        <span class="aural-bottom-nav__badge" aria-hidden="true">2</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="user-circle" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Account</span>
      </a>
    \`;
    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);
    return container;
  }
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var U,W,Y;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;
    content.innerHTML = \`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Your Feed
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        Stay connected with friends and share your moments.
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Tap the + button to create a new post.
      </p>
    \`;
    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--with-fab';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Social navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.innerHTML = \`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="home" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Feed</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="search" class="aural-bottom-nav__icon"></i>
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
        <i data-lucide="user" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Profile</span>
      </a>
    \`;
    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);
    return container;
  }
}`,...(Y=(W=p.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var R,G,$;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const container = createPhoneFrame();
    const phoneScreen = container.querySelector('div') as HTMLElement;
    const content = phoneScreen.querySelector('div') as HTMLElement;
    content.innerHTML = \`
      <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
        Responsive Navigation
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0 0 var(--space-4) 0;">
        This bottom nav is visible only on mobile devices (below 1024px).
      </p>
      <p style="color: var(--color-text-secondary); margin: 0;">
        On desktop, you would use a sidebar or top navbar instead.
      </p>
    \`;
    const nav = document.createElement('nav');
    nav.className = 'aural-bottom-nav aural-bottom-nav--mobile-only';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Mobile navigation');
    nav.style.position = 'absolute';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.innerHTML = \`
      <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
        <i data-lucide="layout-dashboard" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Dashboard</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="bar-chart-2" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Analytics</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="users" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Team</span>
      </a>
      <a href="#" class="aural-bottom-nav__item">
        <i data-lucide="settings" class="aural-bottom-nav__icon"></i>
        <span class="aural-bottom-nav__label">Settings</span>
      </a>
    \`;
    phoneScreen.appendChild(nav);
    setTimeout(() => initBottomNav(nav), 0);
    return container;
  }
}`,...($=(G=_.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var j,J,K;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return createThemeGrid(theme => {
      const phoneFrame = document.createElement('div');
      phoneFrame.style.cssText = \`
        max-width: 280px;
        margin: 0 auto;
        border: 4px solid var(--color-border-medium);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: var(--shadow-md);
        position: relative;
      \`;
      const phoneScreen = document.createElement('div');
      phoneScreen.style.cssText = \`
        position: relative;
        aspect-ratio: 9 / 16;
        background: var(--color-bg-primary);
        overflow: hidden;
      \`;
      const content = document.createElement('div');
      content.style.cssText = \`
        padding: var(--space-4);
        padding-bottom: 80px;
      \`;
      content.innerHTML = \`
        <h4 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-2) 0;">
          \${theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
        </h4>
        <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">
          Navigation example
        </p>
      \`;
      const nav = document.createElement('nav');
      nav.className = 'aural-bottom-nav';
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Theme navigation');
      nav.style.position = 'absolute';
      nav.style.bottom = '0';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.innerHTML = \`
        <a href="#" class="aural-bottom-nav__item aural-bottom-nav__item--active" aria-current="page">
          <i data-lucide="home" class="aural-bottom-nav__icon"></i>
          <span class="aural-bottom-nav__label">Home</span>
        </a>
        <a href="#" class="aural-bottom-nav__item" aria-label="Messages, 3 unread">
          <i data-lucide="message-circle" class="aural-bottom-nav__icon" aria-hidden="true"></i>
          <span class="aural-bottom-nav__label">Messages</span>
          <span class="aural-bottom-nav__badge" aria-hidden="true">3</span>
        </a>
        <a href="#" class="aural-bottom-nav__item">
          <i data-lucide="bell" class="aural-bottom-nav__icon"></i>
          <span class="aural-bottom-nav__label">Alerts</span>
        </a>
        <a href="#" class="aural-bottom-nav__item">
          <i data-lucide="user" class="aural-bottom-nav__icon"></i>
          <span class="aural-bottom-nav__label">Profile</span>
        </a>
      \`;
      phoneScreen.appendChild(content);
      phoneScreen.appendChild(nav);
      phoneFrame.appendChild(phoneScreen);
      setTimeout(() => {
        if (typeof (window as any).lucide !== 'undefined') {
          (window as any).lucide.createIcons();
        }
      }, 0);
      return phoneFrame;
    }, {
      columns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    });
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const aa=["BasicBottomNav","WithBadges","CompactVariant","WithFAB","PrimaryVariant","DarkVariant","BlurVariant","EcommercePattern","SocialMediaPattern","MobileOnlyPattern","ThemeComparison"];export{s as BasicBottomNav,b as BlurVariant,c as CompactVariant,u as DarkVariant,d as EcommercePattern,_ as MobileOnlyPattern,v as PrimaryVariant,p as SocialMediaPattern,h as ThemeComparison,i as WithBadges,m as WithFAB,aa as __namedExportsOrder,Z as default};
