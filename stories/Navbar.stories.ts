import type { Meta, StoryObj } from '@storybook/html';

interface NavbarArgs {
  brand: string;
  variant?: 'default' | 'sticky' | 'transparent' | 'blur';
  size?: 'sm' | 'default' | 'lg';
  withIcons?: boolean;
  withSearch?: boolean;
  withNotifications?: boolean;
  withUserMenu?: boolean;
  notificationCount?: number;
  transparent?: boolean;
}

const meta: Meta<NavbarArgs> = {
  title: 'Components/Navbar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Top navigation bar with branding, links, and actions. Supports responsive design, icons, search, notifications, and multiple variants.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    brand: {
      control: 'text',
      description: 'Brand name or logo text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Aural' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'sticky', 'transparent', 'blur'],
      description: 'Visual variant of the navbar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Size of the navbar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    withIcons: {
      control: 'boolean',
      description: 'Include icons in navigation links',
    },
    withSearch: {
      control: 'boolean',
      description: 'Include search bar',
    },
    withNotifications: {
      control: 'boolean',
      description: 'Include notification badge',
    },
    withUserMenu: {
      control: 'boolean',
      description: 'Include user profile menu',
    },
    notificationCount: {
      control: 'number',
      description: 'Number of unread notifications',
      if: { arg: 'withNotifications' },
    },
  },
};

export default meta;
type Story = StoryObj<NavbarArgs>;

const createNavbar = (args: NavbarArgs) => {
  const variantClass = args.variant && args.variant !== 'default' ? `aural-navbar--${args.variant}` : '';
  const sizeClass = args.size && args.size !== 'default' ? `aural-navbar--${args.size}` : '';

  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <nav class="aural-navbar ${variantClass} ${sizeClass}" role="navigation" aria-label="Main navigation">
      <div class="aural-navbar__inner">
        <a href="#" class="aural-navbar__brand">
          ${args.withIcons ? '<i data-lucide="sparkles" style="width: 24px; height: 24px;" aria-hidden="true"></i>' : ''}
          <span>${args.brand}</span>
        </a>
        <div class="aural-navbar__nav">
          ${args.withIcons ? `
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
          ` : `
            <a href="#" class="aural-navbar__link aural-navbar__link--active" aria-current="page">Home</a>
            <a href="#" class="aural-navbar__link">Products</a>
            <a href="#" class="aural-navbar__link">Features</a>
            <a href="#" class="aural-navbar__link">Pricing</a>
          `}
        </div>
        <div class="aural-navbar__actions">
          ${args.withSearch ? `
            <div class="aural-search-bar" style="max-width: 300px;">
              <div class="aural-search-bar__wrapper">
                <div class="aural-search-bar__icon">
                  <i data-lucide="search" aria-hidden="true"></i>
                </div>
                <input type="search" class="aural-search-bar__input" placeholder="Search..." aria-label="Search">
              </div>
            </div>
          ` : ''}
          ${args.withNotifications ? `
            <button class="aural-navbar__action" aria-label="Notifications, ${args.notificationCount || 0} unread">
              <i data-lucide="bell" aria-hidden="true"></i>
              ${args.notificationCount ? `<span class="aural-navbar__badge aural-navbar__badge--pulse" aria-hidden="true">${args.notificationCount}</span>` : ''}
            </button>
          ` : ''}
          ${args.withUserMenu ? `
            <a href="#" class="aural-navbar__action avatar avatar-sm" aria-label="User profile">
              <img src="https://i.pravatar.cc/150?img=3" alt="User profile picture">
            </a>
          ` : `
            <button class="btn btn-ghost btn-sm">Sign In</button>
            <button class="btn btn-primary btn-sm">Sign Up</button>
          `}
        </div>
      </div>
    </nav>
  `;

  setTimeout(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
    if (window.Aural?.initNavbar) {
      window.Aural.initNavbar();
    }
  }, 0);

  return wrapper;
};

export const Basic: Story = {
  args: {
    brand: 'Aural',
  },
  render: createNavbar,
};

export const WithIcons: Story = {
  args: {
    brand: 'Brand',
    withIcons: true,
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Navbar with icons in both the brand and navigation links for enhanced visual hierarchy.',
      },
    },
  },
};

export const WithSearch: Story = {
  args: {
    brand: 'Logo',
    withSearch: true,
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Navbar with an integrated search bar in the actions area.',
      },
    },
  },
};

export const WithNotifications: Story = {
  args: {
    brand: 'Aural',
    withNotifications: true,
    notificationCount: 3,
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Navbar with notification badge showing unread count. The badge pulses to draw attention.',
      },
    },
  },
};

export const WithUserMenu: Story = {
  args: {
    brand: 'Dashboard',
    withUserMenu: true,
    withSearch: true,
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Navbar with user profile avatar instead of sign-in buttons, typical for authenticated views.',
      },
    },
  },
};

export const StickyNavbar: Story = {
  args: {
    brand: 'Sticky Nav',
    variant: 'sticky',
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Navbar that stays at the top of the viewport when scrolling. Uses position: sticky.',
      },
    },
  },
};

export const TransparentNavbar: Story = {
  args: {
    brand: 'Brand',
    variant: 'transparent',
  },
  render: (args) => {
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
        story: 'Transparent navbar perfect for hero sections or background images. Customize text colors as needed.',
      },
    },
  },
};

export const BlurNavbar: Story = {
  args: {
    brand: 'Blur Nav',
    variant: 'blur',
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Navbar with frosted glass effect (backdrop blur) for a modern aesthetic.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    brand: 'Small',
    size: 'sm',
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Compact navbar variant for space-constrained layouts.',
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    brand: 'Large',
    size: 'lg',
  },
  render: createNavbar,
  parameters: {
    docs: {
      description: {
        story: 'Large navbar variant for prominent navigation.',
      },
    },
  },
};

export const EcommerceHeader: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
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
    `;

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
        story: 'E-commerce navbar pattern with search, wishlist, shopping cart with item count, and user account.',
      },
    },
  },
};

export const SaaSDashboard: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
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
    `;

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
        story: 'SaaS dashboard navbar with icon navigation, help button, pulsing notifications, and user avatar.',
      },
    },
  },
};

export const MobileResponsive: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
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
    `;

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
        story: 'Responsive navbar with hamburger menu toggle for mobile devices. The menu automatically shows/hides based on viewport width.',
      },
    },
  },
};

export const ThemeComparison: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    const themes = [
      { name: 'Default', class: '' },
      { name: 'Sticky', class: 'aural-navbar--sticky' },
      { name: 'Blur', class: 'aural-navbar--blur' },
    ];

    const navbars = themes.map(theme => `
      <div style="margin-bottom: var(--space-8);">
        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: var(--tracking-wide); margin-bottom: var(--space-3);">
          ${theme.name}
        </div>
        <div style="padding: var(--space-6); background: var(--color-bg-secondary); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
          <nav class="aural-navbar ${theme.class}" role="navigation" aria-label="${theme.name} navigation" style="border-radius: var(--radius-lg); overflow: hidden;">
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
    `).join('');

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
        story: 'Side-by-side comparison of different navbar variants to see how they appear in various themes.',
      },
    },
  },
};
