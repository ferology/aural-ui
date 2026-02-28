import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Command Palette',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Command Palette Component

Quick command launcher with keyboard shortcuts, fuzzy search, and grouped actions for power users.

## Features

- **Keyboard Shortcuts**: Open with ⌘K / Ctrl+K
- **Fuzzy Search**: Fast filtering as you type
- **Grouped Commands**: Organized by category (Navigation, Actions, Theme, etc.)
- **Icons**: Visual identifiers using Lucide icons
- **Accessibility**: Full keyboard navigation with ARIA support

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-command-palette-backdrop is-open" role="dialog" aria-modal="true">
  <div class="aural-command-palette">
    <div class="aural-command-palette__search">
      <span class="aural-command-palette__search-icon"></span>
      <input type="text" class="aural-command-palette__input"
             placeholder="Type a command..."
             role="combobox"
             aria-autocomplete="list">
    </div>
    <div class="aural-command-palette__results">
      <div class="aural-command-palette__group">
        <div class="aural-command-palette__group-label">Navigation</div>
        <div class="aural-command-palette__items">
          <button class="aural-command-palette__item">
            <span class="aural-command-palette__item-icon">
              <i data-lucide="home"></i>
            </span>
            <div class="aural-command-palette__item-content">
              <div class="aural-command-palette__item-title">Go to Dashboard</div>
              <div class="aural-command-palette__item-subtitle">View overview</div>
            </div>
            <kbd class="aural-command-palette__item-kbd">⌘D</kbd>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  // Initialize Command Palette
  window.Aural?.initCommandPalette();

  // Global keyboard shortcut
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      document.querySelector('.aural-command-palette-backdrop').classList.add('is-open');
    }
  });
</script>
\`\`\`

See the **Documentation** tab for React, Vue, and Svelte examples.
        `.trim()
      }
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create command palette structure
function createCommandPalette(groups: any[], placeholder: string = 'Type a command...') {
  const backdrop = document.createElement('div');
  backdrop.className = 'aural-command-palette-backdrop is-open';
  backdrop.setAttribute('role', 'dialog');
  backdrop.setAttribute('aria-modal', 'true');
  backdrop.setAttribute('aria-labelledby', 'command-palette-title');

  const palette = document.createElement('div');
  palette.className = 'aural-command-palette';

  // Search section
  const search = document.createElement('div');
  search.className = 'aural-command-palette__search';

  const searchIcon = document.createElement('span');
  searchIcon.className = 'aural-command-palette__search-icon';
  search.appendChild(searchIcon);

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'aural-command-palette__input';
  input.placeholder = placeholder;
  input.setAttribute('role', 'combobox');
  input.setAttribute('aria-autocomplete', 'list');
  input.setAttribute('aria-expanded', 'true');
  input.setAttribute('aria-controls', 'command-results');
  search.appendChild(input);

  palette.appendChild(search);

  // Results section
  const results = document.createElement('div');
  results.className = 'aural-command-palette__results';
  results.id = 'command-results';
  results.setAttribute('role', 'listbox');

  groups.forEach(group => {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'aural-command-palette__group';

    const groupLabel = document.createElement('div');
    groupLabel.className = 'aural-command-palette__group-label';
    groupLabel.textContent = group.label;
    groupDiv.appendChild(groupLabel);

    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'aural-command-palette__items';

    group.items.forEach((item: any, index: number) => {
      const button = document.createElement('button');
      button.className = 'aural-command-palette__item';
      button.setAttribute('role', 'option');
      button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');

      if (item.icon) {
        const icon = document.createElement('span');
        icon.className = 'aural-command-palette__item-icon';
        icon.innerHTML = `<i data-lucide="${item.icon}" style="width: 18px; height: 18px;"></i>`;
        button.appendChild(icon);
      }

      const content = document.createElement('div');
      content.className = 'aural-command-palette__item-content';

      const title = document.createElement('div');
      title.className = 'aural-command-palette__item-title';
      title.textContent = item.title;
      content.appendChild(title);

      if (item.subtitle) {
        const subtitle = document.createElement('div');
        subtitle.className = 'aural-command-palette__item-subtitle';
        subtitle.textContent = item.subtitle;
        content.appendChild(subtitle);
      }

      button.appendChild(content);

      if (item.kbd) {
        const kbd = document.createElement('kbd');
        kbd.className = 'aural-command-palette__item-kbd';
        kbd.textContent = item.kbd;
        button.appendChild(kbd);
      }

      itemsDiv.appendChild(button);
    });

    groupDiv.appendChild(itemsDiv);
    results.appendChild(groupDiv);
  });

  palette.appendChild(results);
  backdrop.appendChild(palette);

  // Click backdrop to close
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.classList.remove('is-open');
    }
  });

  // Initialize Lucide icons
  setTimeout(() => {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, 0);

  return backdrop;
}

// Wrapper to show trigger button
function createTriggerWrapper(paletteElement: HTMLElement, buttonText: string = 'Open Command Palette') {
  const wrapper = document.createElement('div');
  wrapper.style.padding = '2rem';

  const button = document.createElement('button');
  button.className = 'btn btn-primary';
  button.innerHTML = `${buttonText} <kbd style="margin-left: var(--space-2); padding: var(--space-1) var(--space-2); background: rgba(255,255,255,0.1); border-radius: var(--radius-sm); font-size: var(--text-xs);">⌘K</kbd>`;
  button.onclick = () => paletteElement.classList.add('is-open');

  const hint = document.createElement('p');
  hint.style.marginTop = 'var(--space-3)';
  hint.style.color = 'var(--color-text-secondary)';
  hint.style.fontSize = 'var(--text-sm)';
  hint.innerHTML = 'Click to open or press <kbd style="padding: 2px 6px; background: var(--color-bg-tertiary); border-radius: var(--radius-sm);">⌘K</kbd> / <kbd style="padding: 2px 6px; background: var(--color-bg-tertiary); border-radius: var(--radius-sm);">Ctrl+K</kbd>';

  wrapper.appendChild(button);
  wrapper.appendChild(hint);
  wrapper.appendChild(paletteElement);

  // Hide palette initially
  paletteElement.classList.remove('is-open');

  return wrapper;
}

export const Basic: Story = {
  render: () => {
    const groups = [
      {
        label: 'Navigation',
        items: [
          { icon: 'home', title: 'Go to Dashboard', subtitle: 'View your dashboard overview', kbd: '⌘D' },
          { icon: 'folder', title: 'Browse Projects', subtitle: 'View all your projects', kbd: '⌘P' },
          { icon: 'settings', title: 'Open Settings', subtitle: 'Configure your preferences', kbd: '⌘,' }
        ]
      }
    ];

    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette);
  }
};

export const WithMultipleGroups: Story = {
  render: () => {
    const groups = [
      {
        label: 'Navigation',
        items: [
          { icon: 'home', title: 'Go to Dashboard', subtitle: 'View your dashboard overview', kbd: '⌘D' },
          { icon: 'folder', title: 'Browse Projects', subtitle: 'View all your projects', kbd: '⌘P' },
          { icon: 'settings', title: 'Open Settings', subtitle: 'Configure your preferences', kbd: '⌘,' }
        ]
      },
      {
        label: 'Actions',
        items: [
          { icon: 'plus', title: 'Create New Project', subtitle: 'Start a new project', kbd: '⌘N' },
          { icon: 'upload', title: 'Upload Files', subtitle: 'Upload documents or images', kbd: '⌘U' },
          { icon: 'download', title: 'Export Data', subtitle: 'Download your data', kbd: '⌘E' }
        ]
      },
      {
        label: 'Theme',
        items: [
          { icon: 'sun', title: 'Light Mode' },
          { icon: 'moon', title: 'Dark Mode' },
          { icon: 'monitor', title: 'System Preference' }
        ]
      }
    ];

    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Open Full Palette');
  }
};

export const FileSearch: Story = {
  render: () => {
    const groups = [
      {
        label: 'Recent Files',
        items: [
          { icon: 'file-text', title: 'project-proposal.docx', subtitle: 'Documents/Projects' },
          { icon: 'file-spreadsheet', title: 'budget-2024.xlsx', subtitle: 'Documents/Finance' },
          { icon: 'image', title: 'logo-design.png', subtitle: 'Images/Branding' },
          { icon: 'file-code', title: 'index.html', subtitle: 'Web/Development' }
        ]
      },
      {
        label: 'All Files',
        items: [
          { icon: 'file', title: 'meeting-notes.txt', subtitle: 'Documents/Notes' },
          { icon: 'file-archive', title: 'backup.zip', subtitle: 'Downloads' }
        ]
      }
    ];

    const palette = createCommandPalette(groups, 'Search files...');
    return createTriggerWrapper(palette, 'Open File Search');
  }
};

export const NavigationCommands: Story = {
  render: () => {
    const groups = [
      {
        label: 'Quick Navigation',
        items: [
          { icon: 'home', title: 'Dashboard', subtitle: 'View your dashboard', kbd: '⌘D' },
          { icon: 'inbox', title: 'Inbox', subtitle: 'Check messages', kbd: '⌘I' },
          { icon: 'calendar', title: 'Calendar', subtitle: 'View schedule', kbd: '⌘C' },
          { icon: 'users', title: 'Team', subtitle: 'Manage team members', kbd: '⌘T' },
          { icon: 'folder', title: 'Projects', subtitle: 'Browse all projects', kbd: '⌘P' },
          { icon: 'star', title: 'Favorites', subtitle: 'Starred items', kbd: '⌘F' }
        ]
      }
    ];

    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Navigation Menu');
  }
};

export const QuickActions: Story = {
  render: () => {
    const groups = [
      {
        label: 'Create',
        items: [
          { icon: 'file-plus', title: 'New Document', kbd: '⌘N' },
          { icon: 'folder-plus', title: 'New Folder', kbd: '⌘⇧N' },
          { icon: 'users-plus', title: 'Invite Team Member' }
        ]
      },
      {
        label: 'Quick Actions',
        items: [
          { icon: 'copy', title: 'Duplicate', kbd: '⌘D' },
          { icon: 'share-2', title: 'Share', kbd: '⌘⇧S' },
          { icon: 'download', title: 'Download', kbd: '⌘S' },
          { icon: 'trash-2', title: 'Delete', kbd: '⌫' }
        ]
      }
    ];

    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Quick Actions');
  }
};

export const ThemeSwitcher: Story = {
  render: () => {
    const groups = [
      {
        label: 'Theme',
        items: [
          { icon: 'sun', title: 'Light Mode', subtitle: 'Bright and clean' },
          { icon: 'moon', title: 'Dark Mode', subtitle: 'Easy on the eyes' },
          { icon: 'zap', title: 'Neon Theme', subtitle: 'Vibrant and electric' },
          { icon: 'sparkles', title: 'Prismatic Theme', subtitle: 'Colorful gradients' },
          { icon: 'minimize', title: 'Minimal Theme', subtitle: 'Simple and focused' },
          { icon: 'flame', title: 'Warm Theme', subtitle: 'Cozy and inviting' },
          { icon: 'activity', title: 'Kinetic Theme', subtitle: 'Dynamic and energetic' },
          { icon: 'monitor', title: 'System Preference', subtitle: 'Match OS setting' }
        ]
      }
    ];

    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Change Theme');
  }
};

export const WithoutKeyboardShortcuts: Story = {
  render: () => {
    const groups = [
      {
        label: 'Actions',
        items: [
          { icon: 'plus', title: 'Create New' },
          { icon: 'copy', title: 'Duplicate' },
          { icon: 'edit', title: 'Edit' },
          { icon: 'trash-2', title: 'Delete' },
          { icon: 'share-2', title: 'Share' }
        ]
      }
    ];

    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Simple Menu');
  }
};

export const SearchResults: Story = {
  render: () => {
    const groups = [
      {
        label: 'Commands',
        items: [
          { icon: 'search', title: 'Search Everything', subtitle: 'Find files, commands, and more' },
          { icon: 'filter', title: 'Filter Results', subtitle: 'Narrow down your search' }
        ]
      },
      {
        label: 'Results',
        items: [
          { icon: 'file', title: 'Search Implementation', subtitle: 'src/components/Search.tsx' },
          { icon: 'file', title: 'Search Documentation', subtitle: 'docs/search.md' },
          { icon: 'folder', title: 'Search Tests', subtitle: 'tests/search/' }
        ]
      }
    ];

    const palette = createCommandPalette(groups, 'Search...');
    return createTriggerWrapper(palette, 'Search');
  }
};

export const RecentCommands: Story = {
  render: () => {
    const groups = [
      {
        label: 'Recent',
        items: [
          { icon: 'clock', title: 'Open Settings', subtitle: 'Used 2 minutes ago', kbd: '⌘,' },
          { icon: 'clock', title: 'Create New Project', subtitle: 'Used 10 minutes ago', kbd: '⌘N' },
          { icon: 'clock', title: 'Upload Files', subtitle: 'Used 1 hour ago', kbd: '⌘U' }
        ]
      },
      {
        label: 'All Commands',
        items: [
          { icon: 'home', title: 'Go to Dashboard', kbd: '⌘D' },
          { icon: 'folder', title: 'Browse Projects', kbd: '⌘P' }
        ]
      }
    ];

    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Recent & All Commands');
  }
};

export const GroupedByCategory: Story = {
  render: () => {
    const groups = [
      {
        label: 'File',
        items: [
          { icon: 'file-plus', title: 'New File', kbd: '⌘N' },
          { icon: 'folder-open', title: 'Open File', kbd: '⌘O' },
          { icon: 'save', title: 'Save', kbd: '⌘S' }
        ]
      },
      {
        label: 'Edit',
        items: [
          { icon: 'scissors', title: 'Cut', kbd: '⌘X' },
          { icon: 'copy', title: 'Copy', kbd: '⌘C' },
          { icon: 'clipboard', title: 'Paste', kbd: '⌘V' }
        ]
      },
      {
        label: 'View',
        items: [
          { icon: 'zoom-in', title: 'Zoom In', kbd: '⌘+' },
          { icon: 'zoom-out', title: 'Zoom Out', kbd: '⌘-' },
          { icon: 'maximize', title: 'Full Screen', kbd: '⌘⇧F' }
        ]
      }
    ];

    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Menu Commands');
  }
};

export const InteractiveDemo: Story = {
  render: () => {
    const groups = [
      {
        label: 'Navigation',
        items: [
          { icon: 'home', title: 'Dashboard', subtitle: 'Your overview', kbd: '⌘D' },
          { icon: 'folder', title: 'Projects', subtitle: 'All projects', kbd: '⌘P' }
        ]
      },
      {
        label: 'Actions',
        items: [
          { icon: 'plus', title: 'Create', subtitle: 'New item', kbd: '⌘N' },
          { icon: 'upload', title: 'Upload', subtitle: 'Add files', kbd: '⌘U' }
        ]
      }
    ];

    const palette = createCommandPalette(groups);

    // Add keyboard shortcut support
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        palette.classList.add('is-open');
        const input = palette.querySelector('.aural-command-palette__input') as HTMLInputElement;
        setTimeout(() => input?.focus(), 100);
      }
      if (e.key === 'Escape' && palette.classList.contains('is-open')) {
        palette.classList.remove('is-open');
      }
    };

    document.addEventListener('keydown', handleKeydown);

    const wrapper = createTriggerWrapper(palette, 'Try ⌘K / Ctrl+K');

    // Cleanup
    (wrapper as any)._cleanup = () => {
      document.removeEventListener('keydown', handleKeydown);
    };

    return wrapper;
  }
};

export const ThemeComparison: Story = {
  render: () => {
    return createThemeGrid(() => {
      const groups = [
        {
          label: 'Navigation',
          items: [
            { icon: 'home', title: 'Dashboard', subtitle: 'Overview', kbd: '⌘D' },
            { icon: 'folder', title: 'Projects', kbd: '⌘P' }
          ]
        },
        {
          label: 'Actions',
          items: [
            { icon: 'plus', title: 'Create New', kbd: '⌘N' }
          ]
        }
      ];

      const palette = createCommandPalette(groups);

      // Keep palette open for theme comparison
      palette.style.position = 'relative';
      palette.style.pointerEvents = 'none';

      const paletteDiv = palette.querySelector('.aural-command-palette') as HTMLElement;
      if (paletteDiv) {
        paletteDiv.style.position = 'relative';
        paletteDiv.style.transform = 'none';
        paletteDiv.style.top = '0';
        paletteDiv.style.left = '0';
        paletteDiv.style.marginTop = '0';
      }

      return palette;
    });
  }
};
