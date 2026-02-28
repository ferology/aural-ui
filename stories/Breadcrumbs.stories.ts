import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbArgs {
  items: BreadcrumbItem[];
  separator: 'slash' | 'chevron' | 'arrow' | 'dash' | 'dot';
  size: 'sm' | 'md' | 'lg';
  withIcons: boolean;
  withBackground: boolean;
  maxItems?: number;
}

const meta: Meta<BreadcrumbArgs> = {
  title: 'Components/Navigation/Breadcrumbs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Breadcrumbs Component

Navigation trail showing the current page's location within the site hierarchy, helping users understand where they are and navigate back through parent pages.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li aria-current="page">Details</li>
  </ol>
</nav>
\`\`\`

**React:**
\`\`\`jsx
<nav className="breadcrumb" aria-label="Breadcrumb">
  <ol>
    {items.map((item, index) => (
      <li key={index}>
        {item.href ? (
          <a href={item.href}>{item.label}</a>
        ) : (
          <span aria-current="page">{item.label}</span>
        )}
      </li>
    ))}
  </ol>
</nav>
\`\`\`

**Vue:**
\`\`\`vue
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li v-for="(item, index) in items" :key="index">
      <a v-if="item.href" :href="item.href">{{ item.label }}</a>
      <span v-else aria-current="page">{{ item.label }}</span>
    </li>
  </ol>
</nav>
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items with label and optional href'
    },
    separator: {
      control: 'select',
      options: ['slash', 'chevron', 'arrow', 'dash', 'dot'],
      description: 'Visual separator between breadcrumb items'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Breadcrumb size'
    },
    withIcons: {
      control: 'boolean',
      description: 'Display icons alongside labels'
    },
    withBackground: {
      control: 'boolean',
      description: 'Display with background container'
    },
    maxItems: {
      control: 'number',
      description: 'Maximum items to show before collapsing (optional)'
    }
  }
};

export default meta;
type Story = StoryObj<BreadcrumbArgs>;

function renderBreadcrumb(args: BreadcrumbArgs): HTMLElement {
  const nav = document.createElement('nav');
  nav.className = 'breadcrumb';
  nav.setAttribute('aria-label', 'Breadcrumb');

  // Add separator class
  if (args.separator !== 'slash') {
    nav.classList.add(`breadcrumb-${args.separator}`);
  }

  // Add size class
  if (args.size !== 'md') {
    nav.classList.add(`breadcrumb-${args.size}`);
  }

  // Add icon class
  if (args.withIcons) {
    nav.classList.add('breadcrumb-with-icons');
  }

  // Add background class
  if (args.withBackground) {
    nav.classList.add('breadcrumb-bg');
  }

  // Add collapsed class if maxItems is set
  if (args.maxItems && args.items.length > args.maxItems) {
    nav.classList.add('breadcrumb-collapsed');
  }

  const ol = document.createElement('ol');

  args.items.forEach((item, index) => {
    const li = document.createElement('li');
    const isLast = index === args.items.length - 1;

    if (isLast) {
      // Current page - not clickable
      li.setAttribute('aria-current', 'page');
      if (args.withIcons) {
        const icon = document.createElement('i');
        icon.setAttribute('data-lucide', 'file-text');
        icon.className = 'breadcrumb-icon';
        icon.setAttribute('aria-hidden', 'true');
        li.appendChild(icon);
      }
      li.appendChild(document.createTextNode(item.label));
    } else {
      // Clickable link
      const link = document.createElement('a');
      link.href = item.href || '#';
      if (args.withIcons) {
        const icon = document.createElement('i');
        icon.setAttribute('data-lucide', index === 0 ? 'home' : 'folder');
        icon.className = 'breadcrumb-icon';
        icon.setAttribute('aria-hidden', 'true');
        link.appendChild(icon);
      }
      link.appendChild(document.createTextNode(item.label));
      li.appendChild(link);
    }

    ol.appendChild(li);
  });

  nav.appendChild(ol);

  // Initialize Lucide icons if with icons
  if (args.withIcons) {
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);
  }

  return nav;
}

export const Default: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Laptop' }
    ],
    separator: 'slash',
    size: 'md',
    withIcons: false,
    withBackground: false
  }
};

export const TwoLevels: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'About' }
    ],
    separator: 'slash',
    size: 'md',
    withIcons: false,
    withBackground: false
  }
};

export const FourLevels: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Components', href: '/docs/components' },
      { label: 'Navigation', href: '/docs/components/navigation' },
      { label: 'Breadcrumbs' }
    ],
    separator: 'chevron',
    size: 'md',
    withIcons: false,
    withBackground: true
  }
};

export const ManyLevels: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Computers', href: '/products/electronics/computers' },
      { label: 'Laptops', href: '/products/electronics/computers/laptops' },
      { label: 'Gaming Laptops', href: '/products/electronics/computers/laptops/gaming' },
      { label: 'High Performance Model' }
    ],
    separator: 'slash',
    size: 'md',
    withIcons: false,
    withBackground: false,
    maxItems: 4
  }
};

export const WithIcons: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Documents', href: '/documents' },
      { label: 'Projects', href: '/documents/projects' },
      { label: 'Report.pdf' }
    ],
    separator: 'slash',
    size: 'md',
    withIcons: true,
    withBackground: false
  }
};

export const WithBackground: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Settings', href: '/dashboard/settings' },
      { label: 'Profile' }
    ],
    separator: 'chevron',
    size: 'md',
    withIcons: false,
    withBackground: true
  }
};

export const ChevronSeparator: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Categories', href: '/categories' },
      { label: 'Fashion', href: '/categories/fashion' },
      { label: 'Shoes' }
    ],
    separator: 'chevron',
    size: 'md',
    withIcons: false,
    withBackground: false
  }
};

export const ArrowSeparator: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Drive', href: '/drive' },
      { label: 'Projects', href: '/drive/projects' },
      { label: 'Website', href: '/drive/projects/website' },
      { label: 'index.html' }
    ],
    separator: 'arrow',
    size: 'md',
    withIcons: true,
    withBackground: false
  }
};

export const DashSeparator: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Store', href: '/' },
      { label: 'Electronics', href: '/electronics' },
      { label: 'Audio', href: '/electronics/audio' },
      { label: 'Headphones' }
    ],
    separator: 'dash',
    size: 'md',
    withIcons: false,
    withBackground: false
  }
};

export const DotSeparator: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Technology', href: '/blog/technology' },
      { label: 'Web Development', href: '/blog/technology/web' },
      { label: 'CSS Tips' }
    ],
    separator: 'dot',
    size: 'md',
    withIcons: false,
    withBackground: false
  }
};

export const SmallSize: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Details' }
    ],
    separator: 'slash',
    size: 'sm',
    withIcons: false,
    withBackground: false
  }
};

export const LargeSize: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Details' }
    ],
    separator: 'slash',
    size: 'lg',
    withIcons: false,
    withBackground: false
  }
};

export const CurrentPageHighlighted: Story = {
  render: renderBreadcrumb,
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'Men', href: '/shop/men' },
      { label: 'Shoes', href: '/shop/men/shoes' },
      { label: 'Running Shoes' }
    ],
    separator: 'chevron',
    size: 'md',
    withIcons: false,
    withBackground: false
  }
};

export const AllSeparators: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
    `;

    const separators: Array<{ type: BreadcrumbArgs['separator']; label: string }> = [
      { type: 'slash', label: 'Slash (Default)' },
      { type: 'chevron', label: 'Chevron' },
      { type: 'arrow', label: 'Arrow' },
      { type: 'dash', label: 'Dash' },
      { type: 'dot', label: 'Dot' }
    ];

    separators.forEach(({ type, label }) => {
      const section = document.createElement('div');

      const heading = document.createElement('div');
      heading.textContent = label;
      heading.style.cssText = `
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.7;
        margin-bottom: 0.5rem;
      `;

      const breadcrumb = renderBreadcrumb({
        items: [
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Details' }
        ],
        separator: type,
        size: 'md',
        withIcons: false,
        withBackground: false
      });

      section.appendChild(heading);
      section.appendChild(breadcrumb);
      container.appendChild(section);
    });

    return container;
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
    `;

    const sizes: Array<{ size: BreadcrumbArgs['size']; label: string }> = [
      { size: 'sm', label: 'Small' },
      { size: 'md', label: 'Medium (Default)' },
      { size: 'lg', label: 'Large' }
    ];

    sizes.forEach(({ size, label }) => {
      const section = document.createElement('div');

      const heading = document.createElement('div');
      heading.textContent = label;
      heading.style.cssText = `
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.7;
        margin-bottom: 0.5rem;
      `;

      const breadcrumb = renderBreadcrumb({
        items: [
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Details' }
        ],
        separator: 'slash',
        size,
        withIcons: false,
        withBackground: false
      });

      section.appendChild(heading);
      section.appendChild(breadcrumb);
      container.appendChild(section);
    });

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      return renderBreadcrumb(args);
    });
  },
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Laptop' }
    ],
    separator: 'chevron',
    size: 'md',
    withIcons: false,
    withBackground: false
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items'
    },
    separator: {
      control: 'select',
      options: ['slash', 'chevron', 'arrow', 'dash', 'dot'],
      description: 'Separator style'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Breadcrumb size'
    },
    withIcons: {
      control: 'boolean',
      description: 'Show icons'
    },
    withBackground: {
      control: 'boolean',
      description: 'Show background'
    }
  }
};
