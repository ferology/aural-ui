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

## Structure

\`\`\`html
<div class="empty-state">
  <div class="empty-state-icon">
    <i data-lucide="inbox"></i>
  </div>
  <h3 class="empty-state-title">No items yet</h3>
  <p class="empty-state-description">Get started by creating your first item.</p>
  <button class="btn btn-primary">
    <i data-lucide="plus"></i>
    Create Item
  </button>
</div>
\`\`\`

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

**Svelte:**
\`\`\`svelte
<div class="empty-state">
  <div class="empty-state-icon">
    <Inbox size={48} />
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

// Helper function to create empty state following the exact Aural UI structure
function createEmptyState(args: any): HTMLElement {
  const container = document.createElement('div');
  container.style.padding = '3rem';
  container.style.minHeight = '400px';
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';

  const emptyState = document.createElement('div');
  emptyState.className = 'empty-state';

  // Icon - wrapped in empty-state-icon div
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

  // Title - h3 with empty-state-title class
  const title = document.createElement('h3');
  title.className = 'empty-state-title';
  title.textContent = args.title || 'No items yet';
  emptyState.appendChild(title);

  // Description - p with empty-state-description class
  const description = document.createElement('p');
  description.className = 'empty-state-description';
  description.textContent = args.description || 'Get started by creating your first item.';
  emptyState.appendChild(description);

  // Actions - buttons directly under empty-state or in wrapper div for multiple actions
  if (args.primaryAction || args.secondaryAction) {
    if (args.secondaryAction) {
      // Multiple actions - use flex wrapper
      const actionsWrapper = document.createElement('div');
      actionsWrapper.style.display = 'flex';
      actionsWrapper.style.gap = 'var(--space-3)';
      actionsWrapper.style.justifyContent = 'center';

      const secondaryBtn = document.createElement('button');
      secondaryBtn.className = 'btn btn-secondary';

      if (args.secondaryIcon) {
        const btnIcon = document.createElement('i');
        btnIcon.setAttribute('data-lucide', args.secondaryIcon);
        btnIcon.style.width = '16px';
        btnIcon.style.height = '16px';
        secondaryBtn.appendChild(btnIcon);
      }

      secondaryBtn.appendChild(document.createTextNode(args.secondaryAction));
      actionsWrapper.appendChild(secondaryBtn);

      if (args.primaryAction) {
        const primaryBtn = document.createElement('button');
        primaryBtn.className = 'btn btn-primary';

        if (args.primaryIcon) {
          const btnIcon = document.createElement('i');
          btnIcon.setAttribute('data-lucide', args.primaryIcon);
          btnIcon.style.width = '16px';
          btnIcon.style.height = '16px';
          primaryBtn.appendChild(btnIcon);
        }

        primaryBtn.appendChild(document.createTextNode(args.primaryAction));
        actionsWrapper.appendChild(primaryBtn);
      }

      emptyState.appendChild(actionsWrapper);
    } else if (args.primaryAction) {
      // Single primary action - button directly under empty-state
      const primaryBtn = document.createElement('button');
      primaryBtn.className = 'btn btn-primary';

      if (args.primaryIcon) {
        const btnIcon = document.createElement('i');
        btnIcon.setAttribute('data-lucide', args.primaryIcon);
        btnIcon.style.width = '16px';
        btnIcon.style.height = '16px';
        primaryBtn.appendChild(btnIcon);
      }

      primaryBtn.appendChild(document.createTextNode(args.primaryAction));
      emptyState.appendChild(primaryBtn);
    }
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
    primaryAction: 'Clear Filters'
  }
};

export const NoSearchResults: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'No results found',
    description: 'Try adjusting your filters or search terms.',
    icon: 'search',
    primaryAction: 'Clear Filters'
  }
};

export const NoData: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'No data available',
    description: 'There is no data to display at this time. Check back later or refresh the page.',
    icon: 'inbox',
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
    primaryAction: 'Try Again',
    primaryIcon: 'refresh-cw',
    secondaryAction: 'Go Back'
  }
};

export const ErrorRecovery: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'Something went wrong',
    description: 'We\'re having trouble loading your data. Please check your connection and try again.',
    icon: 'alert-circle',
    iconColor: 'var(--color-error)',
    primaryAction: 'Try Again',
    primaryIcon: 'refresh-cw',
    secondaryAction: 'Go Back'
  }
};

export const NoMessages: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'No messages',
    description: 'Your inbox is empty. Check back later for new messages.',
    icon: 'inbox'
  }
};

export const NoNotifications: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'No notifications',
    description: 'You\'re all caught up! We\'ll notify you when something new happens.',
    icon: 'bell-off'
  }
};

export const NoConnections: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'No connections yet',
    description: 'Start building your network by connecting with people.',
    icon: 'users'
  }
};

export const Welcome: Story = {
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

export const Onboarding: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'Welcome to Aural UI!',
    description: 'Let\'s get you started with a quick tour of the platform.',
    icon: 'rocket',
    iconColor: 'var(--color-primary)',
    primaryAction: 'Start Tour',
    primaryIcon: 'play'
  }
};

export const EmptyFolder: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'This folder is empty',
    description: 'Upload files or create folders to organize your content.',
    icon: 'folder-open',
    primaryAction: 'Upload Files',
    primaryIcon: 'upload',
    secondaryAction: 'New Folder',
    secondaryIcon: 'folder-plus'
  }
};

export const NetworkBuilding: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'No connections yet',
    description: 'Start building your network by connecting with people you know or discovering new connections.',
    icon: 'users',
    primaryAction: 'Invite Friends',
    primaryIcon: 'user-plus',
    secondaryAction: 'Browse People',
    secondaryIcon: 'search'
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
    iconColor: 'var(--color-success)'
  }
};

export const AllCaughtUp: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'All caught up!',
    description: 'You\'re all caught up! We\'ll notify you when something new happens.',
    icon: 'check-circle',
    iconColor: 'var(--color-success)'
  }
};

export const WithMultipleActions: Story = {
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
    icon.setAttribute('data-lucide', 'folder-open');
    icon.style.width = '48px';
    icon.style.height = '48px';
    iconWrapper.appendChild(icon);
    emptyState.appendChild(iconWrapper);

    // Title
    const title = document.createElement('h3');
    title.className = 'empty-state-title';
    title.textContent = 'This folder is empty';
    emptyState.appendChild(title);

    // Description
    const description = document.createElement('p');
    description.className = 'empty-state-description';
    description.textContent = 'Upload files or create folders to organize your content.';
    emptyState.appendChild(description);

    // Multiple actions in flex container
    const actionsWrapper = document.createElement('div');
    actionsWrapper.style.display = 'flex';
    actionsWrapper.style.gap = 'var(--space-3)';
    actionsWrapper.style.justifyContent = 'center';

    const secondaryBtn = document.createElement('button');
    secondaryBtn.className = 'btn btn-secondary';
    const folderIcon = document.createElement('i');
    folderIcon.setAttribute('data-lucide', 'folder-plus');
    folderIcon.style.width = '16px';
    folderIcon.style.height = '16px';
    secondaryBtn.appendChild(folderIcon);
    secondaryBtn.appendChild(document.createTextNode('New Folder'));
    actionsWrapper.appendChild(secondaryBtn);

    const primaryBtn = document.createElement('button');
    primaryBtn.className = 'btn btn-primary';
    const uploadIcon = document.createElement('i');
    uploadIcon.setAttribute('data-lucide', 'upload');
    uploadIcon.style.width = '16px';
    uploadIcon.style.height = '16px';
    primaryBtn.appendChild(uploadIcon);
    primaryBtn.appendChild(document.createTextNode('Upload Files'));
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

export const WithColoredIcon: Story = {
  render: (args) => createEmptyState(args),
  args: {
    title: 'Welcome to Aural UI!',
    description: 'Let\'s get you started with a quick tour of the platform.',
    icon: 'rocket',
    iconColor: 'var(--color-primary)',
    primaryAction: 'Start Tour',
    primaryIcon: 'play'
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

        if (args.primaryIcon) {
          const btnIcon = document.createElement('i');
          btnIcon.setAttribute('data-lucide', args.primaryIcon);
          btnIcon.style.width = '16px';
          btnIcon.style.height = '16px';
          button.appendChild(btnIcon);
        }

        button.appendChild(document.createTextNode(args.primaryAction));
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
    primaryIcon: 'plus',
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
    },
    primaryIcon: {
      control: 'text',
      description: 'Primary button icon'
    }
  }
};
