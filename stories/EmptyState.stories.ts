import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Layout/Empty State',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Empty State Component

Guide users when content is unavailable with helpful placeholders and clear calls to action.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="empty-state">
  <div class="empty-state-icon">
    <i data-lucide="inbox"></i>
  </div>
  <h3 class="empty-state-title">No items yet</h3>
  <p class="empty-state-description">Get started by creating your first item.</p>
  <button class="btn btn-primary">Create Item</button>
</div>
\`\`\`

**React:**
\`\`\`jsx
<div className="empty-state">
  <div className="empty-state-icon">
    <Inbox size={48} />
  </div>
  <h3 className="empty-state-title">No items yet</h3>
  <p className="empty-state-description">Get started by creating your first item.</p>
  <button className="btn btn-primary">Create Item</button>
</div>
\`\`\`

**Vue:**
\`\`\`vue
<div class="empty-state">
  <div class="empty-state-icon">
    <Inbox :size="48" />
  </div>
  <h3 class="empty-state-title">No items yet</h3>
  <p class="empty-state-description">Get started by creating your first item.</p>
  <button class="btn btn-primary">Create Item</button>
</div>
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Empty state heading'
    },
    description: {
      control: 'text',
      description: 'Helpful message explaining the empty state'
    },
    icon: {
      control: 'text',
      description: 'Lucide icon name (e.g., "inbox", "search", "alert-circle")'
    },
    iconColor: {
      control: 'color',
      description: 'Custom icon color (use CSS variable or hex)'
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'search'],
      description: 'Empty state variant'
    },
    primaryAction: {
      control: 'text',
      description: 'Primary action button text'
    },
    secondaryAction: {
      control: 'text',
      description: 'Secondary action button text'
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create empty state
function createEmptyState(args: any): HTMLElement {
  const container = document.createElement('div');
  container.style.padding = '3rem';
  container.style.minHeight = '400px';
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';

  const emptyState = document.createElement('div');
  emptyState.className = 'empty-state';

  // Icon
  const iconWrapper = document.createElement('div');
  iconWrapper.className = 'empty-state-icon';
  if (args.iconColor) {
    iconWrapper.style.color = args.iconColor;
  }

  const icon = document.createElement('i');
  icon.setAttribute('data-lucide', args.icon || 'inbox');
  icon.style.width = '48px';
  icon.style.height = '48px';
  iconWrapper.appendChild(icon);
  emptyState.appendChild(iconWrapper);

  // Title
  const title = document.createElement('h3');
  title.className = 'empty-state-title';
  title.textContent = args.title || 'No items yet';
  emptyState.appendChild(title);

  // Description
  const description = document.createElement('p');
  description.className = 'empty-state-description';
  description.textContent = args.description || 'Get started by creating your first item.';
  emptyState.appendChild(description);

  // Actions
  if (args.primaryAction || args.secondaryAction) {
    const actionsWrapper = document.createElement('div');
    actionsWrapper.style.display = 'flex';
    actionsWrapper.style.gap = 'var(--space-3)';
    actionsWrapper.style.justifyContent = 'center';

    if (args.secondaryAction) {
      const secondaryBtn = document.createElement('button');
      secondaryBtn.className = 'btn btn-secondary';
      secondaryBtn.textContent = args.secondaryAction;
      actionsWrapper.appendChild(secondaryBtn);
    }

    if (args.primaryAction) {
      const primaryBtn = document.createElement('button');
      primaryBtn.className = 'btn btn-primary';

      if (args.primaryIcon) {
        const btnIcon = document.createElement('i');
        btnIcon.setAttribute('data-lucide', args.primaryIcon);
        btnIcon.style.width = '16px';
        btnIcon.style.height = '16px';
        btnIcon.setAttribute('aria-hidden', 'true');
        primaryBtn.appendChild(btnIcon);
        primaryBtn.appendChild(document.createTextNode(' '));
      }

      primaryBtn.appendChild(document.createTextNode(args.primaryAction));
      actionsWrapper.appendChild(primaryBtn);
    }

    emptyState.appendChild(actionsWrapper);
  }

  container.appendChild(emptyState);

  // Initialize Lucide icons
  setTimeout(() => {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, 0);

  return container;
}

export const Default: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'No items yet',
    description: 'Get started by creating your first item. It only takes a few seconds!',
    icon: 'inbox',
    primaryAction: 'Create Item',
    primaryIcon: 'plus'
  }
};

export const NoResults: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'No results found',
    description: 'We couldn\'t find any results matching your search. Try adjusting your filters or search terms.',
    icon: 'search',
    variant: 'search',
    primaryAction: 'Clear Filters'
  }
};

export const NoData: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'No data available',
    description: 'There is no data to display at this time. Check back later or refresh the page.',
    icon: 'database',
    primaryAction: 'Refresh',
    primaryIcon: 'refresh-cw'
  }
};

export const Error: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'Something went wrong',
    description: 'We\'re having trouble loading your data. Please check your connection and try again.',
    icon: 'alert-circle',
    iconColor: 'var(--color-error)',
    variant: 'error',
    primaryAction: 'Try Again',
    primaryIcon: 'refresh-cw',
    secondaryAction: 'Go Back'
  }
};

export const SearchNoResults: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'No results found for "React"',
    description: 'Try searching for something else or browse our popular categories.',
    icon: 'search-x',
    variant: 'search',
    primaryAction: 'Clear Search',
    secondaryAction: 'Browse All'
  }
};

export const FirstTimeUse: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'Welcome to Aural UI!',
    description: 'Let\'s get you started with a quick tour of the platform. It will only take a minute to set up your workspace.',
    icon: 'rocket',
    iconColor: 'var(--color-primary)',
    primaryAction: 'Start Tour',
    primaryIcon: 'play'
  }
};

export const Permissions: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'Access restricted',
    description: 'You don\'t have permission to view this content. Contact your administrator for access.',
    icon: 'lock',
    iconColor: 'var(--color-warning)',
    primaryAction: 'Request Access',
    secondaryAction: 'Go Back'
  }
};

export const Offline: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'You\'re offline',
    description: 'Please check your internet connection and try again.',
    icon: 'wifi-off',
    iconColor: 'var(--color-error)',
    primaryAction: 'Retry',
    primaryIcon: 'refresh-cw'
  }
};

export const Completed: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'All caught up!',
    description: 'You\'ve completed all your tasks. Great work! We\'ll notify you when new items arrive.',
    icon: 'check-circle',
    iconColor: 'var(--color-success)',
    variant: 'success'
  }
};

export const WithIllustration: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '3rem';
    container.style.minHeight = '400px';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';

    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';

    // Illustration placeholder (can be replaced with actual SVG)
    const illustration = document.createElement('div');
    illustration.style.cssText = `
      width: 200px;
      height: 200px;
      margin: 0 auto var(--space-6);
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.1;
    `;
    const illustrationIcon = document.createElement('i');
    illustrationIcon.setAttribute('data-lucide', args.icon || 'inbox');
    illustrationIcon.style.width = '80px';
    illustrationIcon.style.height = '80px';
    illustrationIcon.style.opacity = '1';
    illustration.appendChild(illustrationIcon);
    emptyState.appendChild(illustration);

    // Title
    const title = document.createElement('h3');
    title.className = 'empty-state-title';
    title.textContent = args.title;
    emptyState.appendChild(title);

    // Description
    const description = document.createElement('p');
    description.className = 'empty-state-description';
    description.textContent = args.description;
    emptyState.appendChild(description);

    // Actions
    const actionsWrapper = document.createElement('div');
    actionsWrapper.style.display = 'flex';
    actionsWrapper.style.gap = 'var(--space-3)';
    actionsWrapper.style.justifyContent = 'center';

    const primaryBtn = document.createElement('button');
    primaryBtn.className = 'btn btn-primary';
    const btnIcon = document.createElement('i');
    btnIcon.setAttribute('data-lucide', 'upload');
    btnIcon.style.width = '16px';
    btnIcon.style.height = '16px';
    btnIcon.setAttribute('aria-hidden', 'true');
    primaryBtn.appendChild(btnIcon);
    primaryBtn.appendChild(document.createTextNode(' Upload Files'));
    actionsWrapper.appendChild(primaryBtn);

    emptyState.appendChild(actionsWrapper);
    container.appendChild(emptyState);

    setTimeout(() => {
      if ((window as any).lucide) {
        (window as any).lucide.createIcons();
      }
    }, 0);

    return container;
  },
  args: {
    title: 'This folder is empty',
    description: 'Upload files or create folders to organize your content.',
    icon: 'folder-open'
  }
};

export const WithActions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '3rem';
    container.style.minHeight = '400px';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';

    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';

    // Icon
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'empty-state-icon';
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', 'users');
    icon.style.width = '48px';
    icon.style.height = '48px';
    iconWrapper.appendChild(icon);
    emptyState.appendChild(iconWrapper);

    // Title
    const title = document.createElement('h3');
    title.className = 'empty-state-title';
    title.textContent = 'No connections yet';
    emptyState.appendChild(title);

    // Description
    const description = document.createElement('p');
    description.className = 'empty-state-description';
    description.textContent = 'Start building your network by connecting with people you know or discovering new connections.';
    emptyState.appendChild(description);

    // Multiple actions
    const actionsWrapper = document.createElement('div');
    actionsWrapper.style.display = 'flex';
    actionsWrapper.style.gap = 'var(--space-3)';
    actionsWrapper.style.justifyContent = 'center';
    actionsWrapper.style.flexWrap = 'wrap';

    const secondaryBtn = document.createElement('button');
    secondaryBtn.className = 'btn btn-secondary';
    const searchIcon = document.createElement('i');
    searchIcon.setAttribute('data-lucide', 'search');
    searchIcon.style.width = '16px';
    searchIcon.style.height = '16px';
    searchIcon.setAttribute('aria-hidden', 'true');
    secondaryBtn.appendChild(searchIcon);
    secondaryBtn.appendChild(document.createTextNode(' Browse People'));
    actionsWrapper.appendChild(secondaryBtn);

    const primaryBtn = document.createElement('button');
    primaryBtn.className = 'btn btn-primary';
    const userPlusIcon = document.createElement('i');
    userPlusIcon.setAttribute('data-lucide', 'user-plus');
    userPlusIcon.style.width = '16px';
    userPlusIcon.style.height = '16px';
    userPlusIcon.setAttribute('aria-hidden', 'true');
    primaryBtn.appendChild(userPlusIcon);
    primaryBtn.appendChild(document.createTextNode(' Invite Friends'));
    actionsWrapper.appendChild(primaryBtn);

    emptyState.appendChild(actionsWrapper);
    container.appendChild(emptyState);

    setTimeout(() => {
      if ((window as any).lucide) {
        (window as any).lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const emptyState = document.createElement('div');
      emptyState.className = 'empty-state';
      emptyState.style.padding = '2rem';

      // Icon
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'empty-state-icon';
      if (args.iconColor) {
        iconWrapper.style.color = args.iconColor;
      }

      const icon = document.createElement('i');
      icon.setAttribute('data-lucide', args.icon || 'inbox');
      icon.style.width = '48px';
      icon.style.height = '48px';
      iconWrapper.appendChild(icon);
      emptyState.appendChild(iconWrapper);

      // Title
      const title = document.createElement('h3');
      title.className = 'empty-state-title';
      title.textContent = args.title || 'No items yet';
      emptyState.appendChild(title);

      // Description
      const description = document.createElement('p');
      description.className = 'empty-state-description';
      description.textContent = args.description || 'Get started by creating your first item.';
      emptyState.appendChild(description);

      // Action
      if (args.primaryAction) {
        const button = document.createElement('button');
        button.className = 'btn btn-primary btn-sm';
        button.textContent = args.primaryAction;
        emptyState.appendChild(button);
      }

      setTimeout(() => {
        if ((window as any).lucide) {
          (window as any).lucide.createIcons();
        }
      }, 0);

      return emptyState;
    });
  },
  args: {
    title: 'No items yet',
    description: 'Get started by creating your first item.',
    icon: 'inbox',
    primaryAction: 'Create Item',
    iconColor: ''
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Empty state heading'
    },
    description: {
      control: 'text',
      description: 'Helpful message'
    },
    icon: {
      control: 'text',
      description: 'Lucide icon name'
    },
    iconColor: {
      control: 'color',
      description: 'Custom icon color'
    },
    primaryAction: {
      control: 'text',
      description: 'Primary button text'
    }
  }
};
