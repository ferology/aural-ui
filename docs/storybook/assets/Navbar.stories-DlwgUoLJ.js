const ua={title:"Components/Navbar",tags:["autodocs"],parameters:{docs:{description:{component:`
# Navbar Component

Persistent top navigation bar that provides site-wide branding, primary navigation links, search, and user actions across all pages.

Use Navbar as the primary global navigation pattern for your application. It anchors users by keeping branding, main navigation, and key actions consistently accessible. Unlike Drawer which slides in on demand, Navbar is always visible at the top, establishing your app's hierarchy and providing wayfinding. It's the first thing users see and the constant they return to while navigating.

Navbars support responsive designs that collapse into hamburger menus on mobile, multiple visual variants (sticky, transparent, blur), and common patterns like search bars, notification badges, and user profile menus. They're essential for any multi-page application or complex single-page app requiring persistent navigation.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<nav class="aural-navbar" role="navigation" aria-label="Main navigation">
  <div class="aural-navbar__inner">
    <a href="/" class="aural-navbar__brand">
      <i data-lucide="sparkles" style="width: 24px; height: 24px;"></i>
      <span>Brand Name</span>
    </a>

    <div class="aural-navbar__nav">
      <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">
        Home
      </a>
      <a href="#" class="aural-navbar__link">Products</a>
      <a href="#" class="aural-navbar__link">About</a>
      <a href="#" class="aural-navbar__link">Contact</a>
    </div>

    <div class="aural-navbar__actions">
      <button class="aural-navbar__action" aria-label="Notifications, 3 unread">
        <i data-lucide="bell"></i>
        <span class="aural-navbar__badge aural-navbar__badge--pulse">3</span>
      </button>
      <button class="btn btn-primary btn-sm">Sign Up</button>
    </div>

    <button class="aural-navbar__toggle" aria-label="Toggle menu" aria-expanded="false">
      <i data-lucide="menu"></i>
    </button>
  </div>
</nav>

<script>
  window.Aural?.initNavbar();
<\/script>
\`\`\`

**React:**
\`\`\`jsx
import { useEffect, useState } from 'react';

function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.Aural?.initNavbar();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="aural-navbar" role="navigation" aria-label="Main navigation">
      <div className="aural-navbar__inner">
        <a href="/" className="aural-navbar__brand">
          <i data-lucide="sparkles" style={{ width: 24, height: 24 }}></i>
          <span>Brand Name</span>
        </a>

        <div className="aural-navbar__nav">
          <a href="#" className="aural-navbar__link aural-navbar__link--active" aria-current="page">
            Home
          </a>
          <a href="#" className="aural-navbar__link">Products</a>
          <a href="#" className="aural-navbar__link">About</a>
        </div>

        <div className="aural-navbar__actions">
          <button className="aural-navbar__action" aria-label="Notifications">
            <i data-lucide="bell"></i>
          </button>
          <button className="btn btn-primary btn-sm">Sign Up</button>
        </div>

        <button
          className="aural-navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <i data-lucide="menu"></i>
        </button>
      </div>
    </nav>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <nav class="aural-navbar" role="navigation" aria-label="Main navigation">
    <div class="aural-navbar__inner">
      <a href="/" class="aural-navbar__brand">
        <i data-lucide="sparkles" style="width: 24px; height: 24px;"></i>
        <span>Brand Name</span>
      </a>

      <div class="aural-navbar__nav">
        <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">
          Home
        </a>
        <a href="#" class="aural-navbar__link">Products</a>
        <a href="#" class="aural-navbar__link">About</a>
      </div>

      <div class="aural-navbar__actions">
        <button class="aural-navbar__action" aria-label="Notifications">
          <i data-lucide="bell"></i>
        </button>
        <button class="btn btn-primary btn-sm">Sign Up</button>
      </div>

      <button
        class="aural-navbar__toggle"
        aria-label="Toggle menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <i data-lucide="menu"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    };
  },
  mounted() {
    window.Aural?.initNavbar();
  }
};
<\/script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { onMount } from 'svelte';

  let menuOpen = false;

  onMount(() => {
    window.Aural?.initNavbar();
  });
<\/script>

<nav class="aural-navbar" role="navigation" aria-label="Main navigation">
  <div class="aural-navbar__inner">
    <a href="/" class="aural-navbar__brand">
      <i data-lucide="sparkles" style="width: 24px; height: 24px;"></i>
      <span>Brand Name</span>
    </a>

    <div class="aural-navbar__nav">
      <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">
        Home
      </a>
      <a href="#" class="aural-navbar__link">Products</a>
      <a href="#" class="aural-navbar__link">About</a>
    </div>

    <div class="aural-navbar__actions">
      <button class="aural-navbar__action" aria-label="Notifications">
        <i data-lucide="bell"></i>
      </button>
      <button class="btn btn-primary btn-sm">Sign Up</button>
    </div>

    <button
      class="aural-navbar__toggle"
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
      on:click={() => menuOpen = !menuOpen}
    >
      <i data-lucide="menu"></i>
    </button>
  </div>
</nav>
\`\`\`

## Accessibility

- **Landmark navigation**: Use \`<nav>\` element with \`role="navigation"\` and descriptive \`aria-label="Main navigation"\`
- **Active link indication**: Mark current page with \`aria-current="page"\` on active navigation link
- **Keyboard navigation**: All links and buttons are keyboard accessible with visible focus indicators
- **Mobile menu toggle**: Toggle button uses \`aria-expanded\` to indicate menu state, \`aria-label="Toggle menu"\` for screen readers
- **Touch targets**: All interactive elements meet 44×44px minimum touch target size on mobile
- **Notification badges**: Notification count included in \`aria-label\` (e.g., "Notifications, 3 unread")
- **Skip navigation**: Consider adding "Skip to main content" link before navbar for keyboard users
- **Color contrast**: Text and interactive elements meet WCAG AA standards (4.5:1 for text, 3:1 for UI components)
- **Focus indicators**: Visible 2px outline with offset on all interactive elements
- **Responsive behavior**: Menu collapses to hamburger on mobile with proper focus management
- **Sticky positioning**: Sticky navbar maintains accessibility when scrolling (no focus loss)
- **Reduced motion**: Navbar animations respect \`prefers-reduced-motion\` setting

## Usage Guidelines

- **When to use:**
  - Primary global navigation for multi-page applications
  - Site-wide branding and logo placement
  - Persistent access to search functionality
  - User account access and notifications
  - E-commerce navigation with cart access
  - Dashboard navigation with quick actions

- **When NOT to use:**
  - For secondary navigation within pages — use Tabs or Sidebar instead
  - For contextual actions — use Toolbar or action bars specific to content
  - For mobile-only apps — consider bottom navigation bar for thumb-friendly access
  - For single-page landing pages — hero section with in-page navigation may be better
  - For print layouts — navbars don't translate well to printed pages

- **Best practices:**
  - Keep navigation links to 4-7 items for optimal scannability
  - Place logo/brand on the left (follows F-pattern reading)
  - Position primary CTA button (Sign Up, Get Started) on the right
  - Use sticky variant for long pages to maintain access to navigation
  - Collapse to hamburger menu below 768px viewport width
  - Highlight active page with visual distinction and \`aria-current\`
  - Include search in navbar if it's a primary user need
  - Use notification badges sparingly (only for important updates)
  - Test navbar on all viewport sizes (desktop, tablet, mobile)
  - Keep navbar height between 56-72px on desktop for balance

- **Mobile considerations:**
  - Navbar automatically collapses to hamburger menu on mobile (< 768px)
  - Mobile menu slides down with full-width links stacked vertically
  - Touch targets automatically expand to 44×44px minimum on touch devices
  - Brand/logo remains visible at all breakpoints for wayfinding
  - Consider bottom navigation pattern for mobile apps (better thumb reach)
  - Test mobile menu behavior with long link lists (scrollable overflow)
        `.trim()}},layout:"fullscreen"},argTypes:{brand:{control:"text",description:'Brand name or logo text displayed on the left side of navbar. Typically company/product name or logo image. Should be concise (1-3 words) and link to homepage. Examples: "Aural UI", "Dashboard", "My App".',table:{type:{summary:"string"},defaultValue:{summary:"Aural"}}},variant:{control:"select",options:["default","sticky","transparent","blur"],description:"Visual and positioning variant of navbar. **default** — static positioning with solid background. **sticky** — sticks to top when scrolling (position: sticky). **transparent** — no background, ideal for hero sections (text color must be adjusted). **blur** — frosted glass effect with backdrop blur for modern aesthetic.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","default","lg"],description:"Size of navbar affecting height and padding. **sm** (compact, ~48px) — space-constrained layouts, secondary navbars. **default** (~64px) — standard size for most applications. **lg** (prominent, ~72px) — larger branding presence, marketing sites.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},withIcons:{control:"boolean",description:"Whether to include icons alongside navigation link text. Icons improve scannability and visual hierarchy. Recommended for dashboards and apps with 4-6 primary nav items. Not recommended if labels are self-explanatory or navbar is crowded."},withSearch:{control:"boolean",description:"Whether to include integrated search bar in navbar actions area. Search becomes prominent feature when enabled. Best for content-heavy sites (e-commerce, documentation, media). Max width ~300px to preserve space for other elements."},withNotifications:{control:"boolean",description:"Whether to include notification bell icon with badge counter. Shows unread notification count when notificationCount > 0. Badge pulses to draw attention. Common in dashboards, social apps, and collaboration tools."},withUserMenu:{control:"boolean",description:"Whether to show user profile avatar/menu instead of Sign In/Sign Up buttons. Indicates authenticated state. Avatar links to user profile or opens account menu. Use when user is logged in."},notificationCount:{control:"number",description:'Number of unread notifications to display in badge. Only visible when withNotifications is true. Badge shows count up to 99 (displays "99+" for higher values). Set to 0 to show bell without badge.',if:{arg:"withNotifications"}}}},i=a=>{const e=a.variant&&a.variant!=="default"?`aural-navbar--${a.variant}`:"",n=a.size&&a.size!=="default"?`aural-navbar--${a.size}`:"",r=`navbar-${Math.random().toString(36).substr(2,9)}`,t=document.createElement("div");return t.innerHTML=`
    <nav id="${r}" class="aural-navbar ${e} ${n}" role="navigation" aria-label="Main navigation">
      <div class="aural-navbar__inner">
        <a href="#" class="aural-navbar__brand">
          ${a.withIcons?'<i data-lucide="sparkles" style="width: 24px; height: 24px;" aria-hidden="true"></i>':""}
          <span>${a.brand}</span>
        </a>
        <div class="aural-navbar__nav">
          ${a.withIcons?`
            <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">
              <i data-lucide="home" class="aural-navbar__link-icon" aria-hidden="true"></i>
              Home
            </a>
            <a href="#" class="aural-navbar__link">
              <i data-lucide="briefcase" class="aural-navbar__link-icon" aria-hidden="true"></i>
              Work
            </a>
            <a href="#" class="aural-navbar__link">
              <i data-lucide="users" class="aural-navbar__link-icon" aria-hidden="true"></i>
              Team
            </a>
          `:`
            <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">Home</a>
            <a href="#" class="aural-navbar__link">Products</a>
            <a href="#" class="aural-navbar__link">Features</a>
            <a href="#" class="aural-navbar__link">Pricing</a>
          `}
        </div>
        <div class="aural-navbar__actions">
          ${a.withSearch?`
            <div class="aural-search-bar" style="max-width: 300px;">
              <div class="aural-search-bar__wrapper">
                <div class="aural-search-bar__icon">
                  <i data-lucide="search" aria-hidden="true"></i>
                </div>
                <input type="search" class="aural-search-bar__input" placeholder="Search..." aria-label="Search">
              </div>
            </div>
          `:""}
          ${a.withNotifications?`
            <button class="aural-navbar__action" aria-label="Notifications, ${a.notificationCount||0} unread">
              <i data-lucide="bell" aria-hidden="true"></i>
              ${a.notificationCount?`<span class="aural-navbar__badge aural-navbar__badge--pulse" aria-hidden="true">${a.notificationCount}</span>`:""}
            </button>
          `:""}
          ${a.withUserMenu?`
            <a href="#" class="aural-navbar__action avatar avatar-sm" aria-label="User profile">
              <img src="https://i.pravatar.cc/150?img=3" alt="User profile picture">
            </a>
          `:`
            <button class="btn btn-ghost btn-sm">Sign In</button>
            <button class="btn btn-primary btn-sm">Sign Up</button>
          `}
        </div>
        <button class="aural-navbar__toggle" aria-label="Toggle menu" aria-expanded="false">
          <i data-lucide="menu" aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  `,setTimeout(()=>{var s;window.lucide&&window.lucide.createIcons(),(s=window.Aural)!=null&&s.initNavbar&&window.Aural.initNavbar(r)},0),t},l={args:{brand:"Aural"},render:i},c={args:{brand:"Brand",withIcons:!0},render:i,parameters:{docs:{description:{story:"Navbar with icons in both the brand and navigation links for enhanced visual hierarchy."}}}},d={args:{brand:"Logo",withSearch:!0},render:i,parameters:{docs:{description:{story:"Navbar with an integrated search bar in the actions area."}}}},u={args:{brand:"Aural",withNotifications:!0,notificationCount:3},render:i,parameters:{docs:{description:{story:"Navbar with notification badge showing unread count. The badge pulses to draw attention."}}}},b={args:{brand:"Dashboard",withUserMenu:!0,withSearch:!0},render:i,parameters:{docs:{description:{story:"Navbar with user profile avatar instead of sign-in buttons, typical for authenticated views."}}}},v={args:{brand:"Sticky Nav",variant:"sticky"},render:i,parameters:{docs:{description:{story:"Navbar that stays at the top of the viewport when scrolling. Uses position: sticky."}}}},p={args:{brand:"Brand",variant:"transparent"},render:a=>{const e=i(a),n=document.createElement("div");return n.style.cssText="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover)); padding: var(--space-8); min-height: 400px;",n.appendChild(e),setTimeout(()=>{const r=n.querySelector(".aural-navbar");if(r){const t=r.querySelector(".aural-navbar__brand"),s=r.querySelectorAll(".aural-navbar__link"),da=r.querySelectorAll(".btn");t&&(t.style.color="white"),s.forEach(o=>o.style.color="rgba(255,255,255,0.8)"),da.forEach(o=>{o.style.color="white",o.style.borderColor="white"})}},0),n},parameters:{docs:{description:{story:"Transparent navbar perfect for hero sections or background images. Customize text colors as needed."}}}},m={args:{brand:"Blur Nav",variant:"blur"},render:i,parameters:{docs:{description:{story:"Navbar with frosted glass effect (backdrop blur) for a modern aesthetic."}}}},h={args:{brand:"Small",size:"sm"},render:i,parameters:{docs:{description:{story:"Compact navbar variant for space-constrained layouts."}}}},g={args:{brand:"Large",size:"lg"},render:i,parameters:{docs:{description:{story:"Large navbar variant for prominent navigation."}}}},_={render:()=>{const a=document.createElement("div");return a.innerHTML=`
      <nav class="aural-navbar" role="navigation" aria-label="E-commerce navigation">
        <div class="aural-navbar__inner">
          <a href="#" class="aural-navbar__brand">
            <i data-lucide="shopping-bag" style="width: 24px; height: 24px;" aria-hidden="true"></i>
            <span>Shop</span>
          </a>
          <div class="aural-navbar__nav">
            <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">New Arrivals</a>
            <a href="#" class="aural-navbar__link">Men</a>
            <a href="#" class="aural-navbar__link">Women</a>
            <a href="#" class="aural-navbar__link">Sale</a>
          </div>
          <div class="aural-navbar__actions">
            <div class="aural-search-bar" style="max-width: 300px;">
              <div class="aural-search-bar__wrapper">
                <div class="aural-search-bar__icon">
                  <i data-lucide="search" aria-hidden="true"></i>
                </div>
                <input type="search" class="aural-search-bar__input" placeholder="Search products..." aria-label="Search products">
              </div>
            </div>
            <button class="aural-navbar__action" aria-label="Wishlist">
              <i data-lucide="heart" aria-hidden="true"></i>
            </button>
            <button class="aural-navbar__action" aria-label="Shopping cart, 2 items">
              <i data-lucide="shopping-cart" aria-hidden="true"></i>
              <span class="aural-navbar__badge" aria-hidden="true">2</span>
            </button>
            <button class="aural-navbar__action" aria-label="User account">
              <i data-lucide="user" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </nav>
    `,setTimeout(()=>{var e;window.lucide&&window.lucide.createIcons(),(e=window.Aural)!=null&&e.initNavbar&&window.Aural.initNavbar()},0),a},parameters:{docs:{description:{story:"E-commerce navbar pattern with search, wishlist, shopping cart with item count, and user account."}}}},f={render:()=>{const a=document.createElement("div");return a.innerHTML=`
      <nav class="aural-navbar" role="navigation" aria-label="Dashboard navigation">
        <div class="aural-navbar__inner">
          <a href="#" class="aural-navbar__brand">
            <i data-lucide="zap" style="width: 24px; height: 24px; color: var(--color-primary);" aria-hidden="true"></i>
            <span>Dashboard</span>
          </a>
          <div class="aural-navbar__nav">
            <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">
              <i data-lucide="layout-dashboard" class="aural-navbar__link-icon" aria-hidden="true"></i>
              Overview
            </a>
            <a href="#" class="aural-navbar__link">
              <i data-lucide="bar-chart-2" class="aural-navbar__link-icon" aria-hidden="true"></i>
              Analytics
            </a>
            <a href="#" class="aural-navbar__link">
              <i data-lucide="users" class="aural-navbar__link-icon" aria-hidden="true"></i>
              Customers
            </a>
            <a href="#" class="aural-navbar__link">
              <i data-lucide="settings" class="aural-navbar__link-icon" aria-hidden="true"></i>
              Settings
            </a>
          </div>
          <div class="aural-navbar__actions">
            <button class="aural-navbar__action" aria-label="Help">
              <i data-lucide="help-circle" aria-hidden="true"></i>
            </button>
            <button class="aural-navbar__action" aria-label="Notifications, 5 unread">
              <i data-lucide="bell" aria-hidden="true"></i>
              <span class="aural-navbar__badge aural-navbar__badge--pulse" aria-hidden="true">5</span>
            </button>
            <a href="#" class="aural-navbar__action avatar avatar-sm" aria-label="User profile">
              <img src="https://i.pravatar.cc/150?img=3" alt="User profile picture">
            </a>
          </div>
        </div>
      </nav>
    `,setTimeout(()=>{var e;window.lucide&&window.lucide.createIcons(),(e=window.Aural)!=null&&e.initNavbar&&window.Aural.initNavbar()},0),a},parameters:{docs:{description:{story:"SaaS dashboard navbar with icon navigation, help button, pulsing notifications, and user avatar."}}}},w={render:()=>{const a=document.createElement("div");return a.innerHTML=`
      <nav class="aural-navbar" role="navigation" aria-label="Responsive navigation" id="mobile-navbar">
        <div class="aural-navbar__inner">
          <a href="#" class="aural-navbar__brand">
            <span>Mobile Nav</span>
          </a>
          <div class="aural-navbar__nav">
            <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">Home</a>
            <a href="#" class="aural-navbar__link">Products</a>
            <a href="#" class="aural-navbar__link">About</a>
            <a href="#" class="aural-navbar__link">Contact</a>
          </div>
          <div class="aural-navbar__actions">
            <button class="btn btn-primary btn-sm">Get Started</button>
          </div>
          <button class="aural-navbar__toggle" aria-label="Toggle menu" aria-expanded="false" id="menu-toggle">
            <i data-lucide="menu" aria-hidden="true"></i>
          </button>
        </div>
      </nav>
      <div style="padding: var(--space-6); background: var(--color-bg-secondary); margin-top: var(--space-4); border-radius: var(--radius-md);">
        <p style="color: var(--color-text-secondary); margin: 0;">
          Resize your browser to mobile width (below 768px) to see the hamburger menu toggle. Click the menu icon to open/close the mobile navigation.
        </p>
      </div>
    `,setTimeout(()=>{var r;window.lucide&&window.lucide.createIcons(),(r=window.Aural)!=null&&r.initNavbar&&window.Aural.initNavbar();const e=a.querySelector("#menu-toggle"),n=a.querySelector("#mobile-navbar");e&&n&&e.addEventListener("click",()=>{const t=n.classList.toggle("aural-navbar--menu-open");e.setAttribute("aria-expanded",String(t))})},0),a},parameters:{docs:{description:{story:"Responsive navbar with hamburger menu toggle for mobile devices. The menu automatically shows/hides based on viewport width."}}}},y={render:()=>{const a=document.createElement("div"),n=[{name:"Default",class:""},{name:"Sticky",class:"aural-navbar--sticky"},{name:"Blur",class:"aural-navbar--blur"}].map(r=>`
      <div style="margin-bottom: var(--space-8);">
        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: var(--tracking-wide); margin-bottom: var(--space-3);">
          ${r.name}
        </div>
        <div style="padding: var(--space-6); background: var(--color-bg-secondary); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
          <nav class="aural-navbar ${r.class}" role="navigation" aria-label="${r.name} navigation" style="border-radius: var(--radius-lg); overflow: hidden;">
            <div class="aural-navbar__inner">
              <a href="#" class="aural-navbar__brand">
                <i data-lucide="sparkles" style="width: 24px; height: 24px;" aria-hidden="true"></i>
                <span>Brand</span>
              </a>
              <div class="aural-navbar__nav">
                <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">Home</a>
                <a href="#" class="aural-navbar__link">Products</a>
                <a href="#" class="aural-navbar__link">Features</a>
                <a href="#" class="aural-navbar__link">Pricing</a>
              </div>
              <div class="aural-navbar__actions">
                <button class="aural-navbar__action" aria-label="Notifications, 3 unread">
                  <i data-lucide="bell" aria-hidden="true"></i>
                  <span class="aural-navbar__badge aural-navbar__badge--pulse" aria-hidden="true">3</span>
                </button>
                <button class="btn btn-primary btn-sm">Sign Up</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    `).join("");return a.innerHTML=n,setTimeout(()=>{var r;window.lucide&&window.lucide.createIcons(),(r=window.Aural)!=null&&r.initNavbar&&window.Aural.initNavbar()},0),a},parameters:{docs:{description:{story:"Side-by-side comparison of different navbar variants to see how they appear in various themes."}}}};var k,N,S;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    brand: 'Aural'
  },
  render: createNavbar
}`,...(S=(N=l.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var x,T,A;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    brand: 'Brand',
    withIcons: true
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Navbar with icons in both the brand and navigation links for enhanced visual hierarchy.'
      }
    }
  }
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var M,E,C;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    brand: 'Logo',
    withSearch: true
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Navbar with an integrated search bar in the actions area.'
      }
    }
  }
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var U,H,L;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    brand: 'Aural',
    withNotifications: true,
    notificationCount: 3
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Navbar with notification badge showing unread count. The badge pulses to draw attention.'
      }
    }
  }
}`,...(L=(H=u.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var I,z,B;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    brand: 'Dashboard',
    withUserMenu: true,
    withSearch: true
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Navbar with user profile avatar instead of sign-in buttons, typical for authenticated views.'
      }
    }
  }
}`,...(B=(z=b.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var O,$,W;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    brand: 'Sticky Nav',
    variant: 'sticky'
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Navbar that stays at the top of the viewport when scrolling. Uses position: sticky.'
      }
    }
  }
}`,...(W=($=v.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var P,q,D;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    brand: 'Brand',
    variant: 'transparent'
  },
  render: args => {
    const navbar = createNavbar(args);
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover)); padding: var(--space-8); min-height: 400px;';
    wrapper.appendChild(navbar);

    // Override text colors for transparent variant
    setTimeout(() => {
      const navElement = wrapper.querySelector('.aural-navbar');
      if (navElement) {
        const brand = navElement.querySelector('.aural-navbar__brand');
        const links = navElement.querySelectorAll('.aural-navbar__link');
        const buttons = navElement.querySelectorAll('.btn');
        if (brand) (brand as HTMLElement).style.color = 'white';
        links.forEach(link => (link as HTMLElement).style.color = 'rgba(255,255,255,0.8)');
        buttons.forEach(btn => {
          (btn as HTMLElement).style.color = 'white';
          (btn as HTMLElement).style.borderColor = 'white';
        });
      }
    }, 0);
    return wrapper;
  },
  parameters: {
    docs: {
      description: {
        story: 'Transparent navbar perfect for hero sections or background images. Customize text colors as needed.'
      }
    }
  }
}`,...(D=(q=p.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var R,F,V;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    brand: 'Blur Nav',
    variant: 'blur'
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Navbar with frosted glass effect (backdrop blur) for a modern aesthetic.'
      }
    }
  }
}`,...(V=(F=m.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var G,j,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    brand: 'Small',
    size: 'sm'
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Compact navbar variant for space-constrained layouts.'
      }
    }
  }
}`,...(K=(j=h.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var J,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    brand: 'Large',
    size: 'lg'
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Large navbar variant for prominent navigation.'
      }
    }
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,aa;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = \`
      <nav class="aural-navbar" role="navigation" aria-label="E-commerce navigation">
        <div class="aural-navbar__inner">
          <a href="#" class="aural-navbar__brand">
            <i data-lucide="shopping-bag" style="width: 24px; height: 24px;" aria-hidden="true"></i>
            <span>Shop</span>
          </a>
          <div class="aural-navbar__nav">
            <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">New Arrivals</a>
            <a href="#" class="aural-navbar__link">Men</a>
            <a href="#" class="aural-navbar__link">Women</a>
            <a href="#" class="aural-navbar__link">Sale</a>
          </div>
          <div class="aural-navbar__actions">
            <div class="aural-search-bar" style="max-width: 300px;">
              <div class="aural-search-bar__wrapper">
                <div class="aural-search-bar__icon">
                  <i data-lucide="search" aria-hidden="true"></i>
                </div>
                <input type="search" class="aural-search-bar__input" placeholder="Search products..." aria-label="Search products">
              </div>
            </div>
            <button class="aural-navbar__action" aria-label="Wishlist">
              <i data-lucide="heart" aria-hidden="true"></i>
            </button>
            <button class="aural-navbar__action" aria-label="Shopping cart, 2 items">
              <i data-lucide="shopping-cart" aria-hidden="true"></i>
              <span class="aural-navbar__badge" aria-hidden="true">2</span>
            </button>
            <button class="aural-navbar__action" aria-label="User account">
              <i data-lucide="user" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </nav>
    \`;
    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initNavbar) {
        window.Aural.initNavbar();
      }
    }, 0);
    return wrapper;
  },
  parameters: {
    docs: {
      description: {
        story: 'E-commerce navbar pattern with search, wishlist, shopping cart with item count, and user account.'
      }
    }
  }
}`,...(aa=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:aa.source}}};var ra,ea,na;f.parameters={...f.parameters,docs:{...(ra=f.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = \`
      <nav class="aural-navbar" role="navigation" aria-label="Dashboard navigation">
        <div class="aural-navbar__inner">
          <a href="#" class="aural-navbar__brand">
            <i data-lucide="zap" style="width: 24px; height: 24px; color: var(--color-primary);" aria-hidden="true"></i>
            <span>Dashboard</span>
          </a>
          <div class="aural-navbar__nav">
            <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">
              <i data-lucide="layout-dashboard" class="aural-navbar__link-icon" aria-hidden="true"></i>
              Overview
            </a>
            <a href="#" class="aural-navbar__link">
              <i data-lucide="bar-chart-2" class="aural-navbar__link-icon" aria-hidden="true"></i>
              Analytics
            </a>
            <a href="#" class="aural-navbar__link">
              <i data-lucide="users" class="aural-navbar__link-icon" aria-hidden="true"></i>
              Customers
            </a>
            <a href="#" class="aural-navbar__link">
              <i data-lucide="settings" class="aural-navbar__link-icon" aria-hidden="true"></i>
              Settings
            </a>
          </div>
          <div class="aural-navbar__actions">
            <button class="aural-navbar__action" aria-label="Help">
              <i data-lucide="help-circle" aria-hidden="true"></i>
            </button>
            <button class="aural-navbar__action" aria-label="Notifications, 5 unread">
              <i data-lucide="bell" aria-hidden="true"></i>
              <span class="aural-navbar__badge aural-navbar__badge--pulse" aria-hidden="true">5</span>
            </button>
            <a href="#" class="aural-navbar__action avatar avatar-sm" aria-label="User profile">
              <img src="https://i.pravatar.cc/150?img=3" alt="User profile picture">
            </a>
          </div>
        </div>
      </nav>
    \`;
    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initNavbar) {
        window.Aural.initNavbar();
      }
    }, 0);
    return wrapper;
  },
  parameters: {
    docs: {
      description: {
        story: 'SaaS dashboard navbar with icon navigation, help button, pulsing notifications, and user avatar.'
      }
    }
  }
}`,...(na=(ea=f.parameters)==null?void 0:ea.docs)==null?void 0:na.source}}};var ia,ta,sa;w.parameters={...w.parameters,docs:{...(ia=w.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = \`
      <nav class="aural-navbar" role="navigation" aria-label="Responsive navigation" id="mobile-navbar">
        <div class="aural-navbar__inner">
          <a href="#" class="aural-navbar__brand">
            <span>Mobile Nav</span>
          </a>
          <div class="aural-navbar__nav">
            <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">Home</a>
            <a href="#" class="aural-navbar__link">Products</a>
            <a href="#" class="aural-navbar__link">About</a>
            <a href="#" class="aural-navbar__link">Contact</a>
          </div>
          <div class="aural-navbar__actions">
            <button class="btn btn-primary btn-sm">Get Started</button>
          </div>
          <button class="aural-navbar__toggle" aria-label="Toggle menu" aria-expanded="false" id="menu-toggle">
            <i data-lucide="menu" aria-hidden="true"></i>
          </button>
        </div>
      </nav>
      <div style="padding: var(--space-6); background: var(--color-bg-secondary); margin-top: var(--space-4); border-radius: var(--radius-md);">
        <p style="color: var(--color-text-secondary); margin: 0;">
          Resize your browser to mobile width (below 768px) to see the hamburger menu toggle. Click the menu icon to open/close the mobile navigation.
        </p>
      </div>
    \`;
    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initNavbar) {
        window.Aural.initNavbar();
      }
      const toggle = wrapper.querySelector('#menu-toggle');
      const navbar = wrapper.querySelector('#mobile-navbar');
      if (toggle && navbar) {
        toggle.addEventListener('click', () => {
          const isOpen = navbar.classList.toggle('aural-navbar--menu-open');
          toggle.setAttribute('aria-expanded', String(isOpen));
        });
      }
    }, 0);
    return wrapper;
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive navbar with hamburger menu toggle for mobile devices. The menu automatically shows/hides based on viewport width.'
      }
    }
  }
}`,...(sa=(ta=w.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};var oa,la,ca;y.parameters={...y.parameters,docs:{...(oa=y.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    const themes = [{
      name: 'Default',
      class: ''
    }, {
      name: 'Sticky',
      class: 'aural-navbar--sticky'
    }, {
      name: 'Blur',
      class: 'aural-navbar--blur'
    }];
    const navbars = themes.map(theme => \`
      <div style="margin-bottom: var(--space-8);">
        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: var(--tracking-wide); margin-bottom: var(--space-3);">
          \${theme.name}
        </div>
        <div style="padding: var(--space-6); background: var(--color-bg-secondary); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
          <nav class="aural-navbar \${theme.class}" role="navigation" aria-label="\${theme.name} navigation" style="border-radius: var(--radius-lg); overflow: hidden;">
            <div class="aural-navbar__inner">
              <a href="#" class="aural-navbar__brand">
                <i data-lucide="sparkles" style="width: 24px; height: 24px;" aria-hidden="true"></i>
                <span>Brand</span>
              </a>
              <div class="aural-navbar__nav">
                <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">Home</a>
                <a href="#" class="aural-navbar__link">Products</a>
                <a href="#" class="aural-navbar__link">Features</a>
                <a href="#" class="aural-navbar__link">Pricing</a>
              </div>
              <div class="aural-navbar__actions">
                <button class="aural-navbar__action" aria-label="Notifications, 3 unread">
                  <i data-lucide="bell" aria-hidden="true"></i>
                  <span class="aural-navbar__badge aural-navbar__badge--pulse" aria-hidden="true">3</span>
                </button>
                <button class="btn btn-primary btn-sm">Sign Up</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    \`).join('');
    wrapper.innerHTML = navbars;
    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initNavbar) {
        window.Aural.initNavbar();
      }
    }, 0);
    return wrapper;
  },
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of different navbar variants to see how they appear in various themes.'
      }
    }
  }
}`,...(ca=(la=y.parameters)==null?void 0:la.docs)==null?void 0:ca.source}}};const ba=["Basic","WithIcons","WithSearch","WithNotifications","WithUserMenu","StickyNavbar","TransparentNavbar","BlurNavbar","SmallSize","LargeSize","EcommerceHeader","SaaSDashboard","MobileResponsive","ThemeComparison"];export{l as Basic,m as BlurNavbar,_ as EcommerceHeader,g as LargeSize,w as MobileResponsive,f as SaaSDashboard,h as SmallSize,v as StickyNavbar,y as ThemeComparison,p as TransparentNavbar,c as WithIcons,u as WithNotifications,d as WithSearch,b as WithUserMenu,ba as __namedExportsOrder,ua as default};
