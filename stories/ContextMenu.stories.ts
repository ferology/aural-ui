import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Overlay/Context Menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Context Menu Component

Right-click menus for contextual actions and keyboard-accessible options. Context menus provide quick access to frequently used actions relevant to the clicked element.

## Usage

Context menus are created using the \`.aural-context-menu\` class and require JavaScript initialization:

\`\`\`html
<div class="aural-context-menu" id="context-menu" role="menu">
  <button class="aural-context-menu__item" role="menuitem">
    <i data-lucide="copy" class="aural-context-menu__item-icon"></i>
    <span class="aural-context-menu__item-label">Copy</span>
    <span class="aural-context-menu__item-shortcut">⌘C</span>
  </button>
</div>

<script>
  // Initialize context menu
  window.Aural?.initContextMenu();
</script>
\`\`\`

## Classes

- **\`.aural-context-menu\`** - Main container
- **\`.aural-context-menu__item\`** - Menu item button
- **\`.aural-context-menu__item-icon\`** - Icon element
- **\`.aural-context-menu__item-label\`** - Item label text
- **\`.aural-context-menu__item-shortcut\`** - Keyboard shortcut display
- **\`.aural-context-menu__separator\`** - Visual separator
- **\`.aural-context-menu__header\`** - Section header
- **\`.aural-context-menu__item--disabled\`** - Disabled state
- **\`.aural-context-menu__item--danger\`** - Destructive action styling
- **\`.aural-context-menu--compact\`** - Compact variant

## Accessibility

- Uses proper ARIA roles (\`role="menu"\`, \`role="menuitem"\`)
- Keyboard navigation with arrow keys
- Escape key closes menu
- Focus management
- Works with Shift+F10 keyboard shortcut
        `.trim()
      }
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper to initialize context menu after render
const initContextMenu = () => {
  setTimeout(() => {
    if (window.Aural?.initContextMenu) {
      window.Aural.initContextMenu();
    }
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, 0);
};

export const Default: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      padding: var(--space-8);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 300px;
    `;

    const trigger = document.createElement('div');
    trigger.className = 'context-trigger';
    trigger.id = 'default-trigger';
    trigger.style.cssText = `
      background: var(--color-bg-secondary);
      border: 2px dashed var(--color-border-medium);
      border-radius: var(--radius-lg);
      padding: var(--space-8);
      text-align: center;
      cursor: context-menu;
      transition: var(--transition-all-fast);
    `;
    trigger.innerHTML = `
      <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); color: var(--color-text-secondary);">
        <i data-lucide="mouse-pointer-click" style="width: 100%; height: 100%;"></i>
      </div>
      <p style="color: var(--color-text-primary); font-weight: var(--font-medium); margin-bottom: var(--space-1);">Right-click here</p>
      <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">to see the context menu</p>
    `;

    const menu = document.createElement('div');
    menu.className = 'aural-context-menu';
    menu.id = 'menu-default-trigger';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="copy" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Copy</span>
        <span class="aural-context-menu__item-shortcut">⌘C</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="scissors" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Cut</span>
        <span class="aural-context-menu__item-shortcut">⌘X</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="clipboard" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Paste</span>
        <span class="aural-context-menu__item-shortcut">⌘V</span>
      </button>
      <div class="aural-context-menu__separator" role="separator"></div>
      <button class="aural-context-menu__item aural-context-menu__item--danger" role="menuitem">
        <i data-lucide="trash-2" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Delete</span>
      </button>
    `;

    wrapper.appendChild(trigger);
    document.body.appendChild(menu);

    // Setup context menu
    trigger.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      document.querySelectorAll('.aural-context-menu').forEach(m => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();

    return wrapper;
  }
};

export const WithIcons: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

    const trigger = document.createElement('div');
    trigger.className = 'context-trigger';
    trigger.id = 'icons-trigger';
    trigger.style.cssText = `
      background: var(--color-bg-secondary);
      border: 2px dashed var(--color-border-medium);
      border-radius: var(--radius-lg);
      padding: var(--space-8);
      text-align: center;
      cursor: context-menu;
    `;
    trigger.innerHTML = `
      <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); color: var(--color-text-secondary);">
        <i data-lucide="file-text" style="width: 100%; height: 100%;"></i>
      </div>
      <p style="color: var(--color-text-primary); font-weight: var(--font-medium); margin-bottom: var(--space-1);">Document Actions</p>
      <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">Right-click for options</p>
    `;

    const menu = document.createElement('div');
    menu.className = 'aural-context-menu';
    menu.id = 'menu-icons-trigger';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="file-plus" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">New File</span>
        <span class="aural-context-menu__item-shortcut">⌘N</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="folder-plus" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">New Folder</span>
        <span class="aural-context-menu__item-shortcut">⌘⇧N</span>
      </button>
      <div class="aural-context-menu__separator" role="separator"></div>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="folder-open" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Open</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="download" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Download</span>
      </button>
    `;

    wrapper.appendChild(trigger);
    document.body.appendChild(menu);

    trigger.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      document.querySelectorAll('.aural-context-menu').forEach(m => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  }
};

export const WithSeparators: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding: var(--space-8); display: flex; justify-content: center; min-height: 400px;';

    const trigger = document.createElement('div');
    trigger.className = 'context-trigger';
    trigger.id = 'separators-trigger';
    trigger.style.cssText = `
      background: var(--color-bg-secondary);
      border: 2px dashed var(--color-border-medium);
      border-radius: var(--radius-lg);
      padding: var(--space-8);
      text-align: center;
      cursor: context-menu;
    `;
    trigger.innerHTML = `
      <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); color: var(--color-text-secondary);">
        <i data-lucide="settings" style="width: 100%; height: 100%;"></i>
      </div>
      <p style="color: var(--color-text-primary); font-weight: var(--font-medium); margin-bottom: var(--space-1);">Settings Menu</p>
      <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">Right-click for grouped options</p>
    `;

    const menu = document.createElement('div');
    menu.className = 'aural-context-menu';
    menu.id = 'menu-separators-trigger';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <div class="aural-context-menu__header">Edit</div>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="copy" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Copy</span>
        <span class="aural-context-menu__item-shortcut">⌘C</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="scissors" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Cut</span>
        <span class="aural-context-menu__item-shortcut">⌘X</span>
      </button>
      <div class="aural-context-menu__separator" role="separator"></div>
      <div class="aural-context-menu__header">File</div>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="save" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Save</span>
        <span class="aural-context-menu__item-shortcut">⌘S</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="download" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Export</span>
      </button>
    `;

    wrapper.appendChild(trigger);
    document.body.appendChild(menu);

    trigger.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      document.querySelectorAll('.aural-context-menu').forEach(m => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  }
};

export const WithDisabledItems: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

    const trigger = document.createElement('div');
    trigger.className = 'context-trigger';
    trigger.id = 'disabled-trigger';
    trigger.style.cssText = `
      background: var(--color-bg-secondary);
      border: 2px dashed var(--color-border-medium);
      border-radius: var(--radius-lg);
      padding: var(--space-8);
      text-align: center;
      cursor: context-menu;
    `;
    trigger.innerHTML = `
      <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); color: var(--color-text-secondary);">
        <i data-lucide="file" style="width: 100%; height: 100%;"></i>
      </div>
      <p style="color: var(--color-text-primary); font-weight: var(--font-medium); margin-bottom: var(--space-1);">Disabled States</p>
      <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">Some options are disabled</p>
    `;

    const menu = document.createElement('div');
    menu.className = 'aural-context-menu';
    menu.id = 'menu-disabled-trigger';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="copy" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Copy</span>
      </button>
      <button class="aural-context-menu__item aural-context-menu__item--disabled" role="menuitem" disabled aria-disabled="true">
        <i data-lucide="scissors" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Cut (disabled)</span>
      </button>
      <button class="aural-context-menu__item aural-context-menu__item--disabled" role="menuitem" disabled aria-disabled="true">
        <i data-lucide="clipboard" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Paste (disabled)</span>
      </button>
    `;

    wrapper.appendChild(trigger);
    document.body.appendChild(menu);

    trigger.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      document.querySelectorAll('.aural-context-menu').forEach(m => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  }
};

export const WithCheckableItems: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

    const trigger = document.createElement('div');
    trigger.className = 'context-trigger';
    trigger.id = 'checkable-trigger';
    trigger.style.cssText = `
      background: var(--color-bg-secondary);
      border: 2px dashed var(--color-border-medium);
      border-radius: var(--radius-lg);
      padding: var(--space-8);
      text-align: center;
      cursor: context-menu;
    `;
    trigger.innerHTML = `
      <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); color: var(--color-text-secondary);">
        <i data-lucide="layout" style="width: 100%; height: 100%;"></i>
      </div>
      <p style="color: var(--color-text-primary); font-weight: var(--font-medium); margin-bottom: var(--space-1);">View Options</p>
      <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">Toggle view settings</p>
    `;

    const menu = document.createElement('div');
    menu.className = 'aural-context-menu';
    menu.id = 'menu-checkable-trigger';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <div class="aural-context-menu__header">View</div>
      <label class="aural-context-menu__item checkbox" tabindex="-1">
        <input type="checkbox" checked>
        <span>Show Sidebar</span>
      </label>
      <label class="aural-context-menu__item checkbox" tabindex="-1">
        <input type="checkbox">
        <span>Show Toolbar</span>
      </label>
      <label class="aural-context-menu__item checkbox" tabindex="-1">
        <input type="checkbox" checked>
        <span>Show Status Bar</span>
      </label>
    `;

    wrapper.appendChild(trigger);
    document.body.appendChild(menu);

    trigger.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      document.querySelectorAll('.aural-context-menu').forEach(m => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  }
};

export const CompactVariant: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

    const trigger = document.createElement('div');
    trigger.className = 'context-trigger';
    trigger.id = 'compact-trigger';
    trigger.style.cssText = `
      background: var(--color-bg-secondary);
      border: 2px dashed var(--color-border-medium);
      border-radius: var(--radius-lg);
      padding: var(--space-8);
      text-align: center;
      cursor: context-menu;
    `;
    trigger.innerHTML = `
      <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); color: var(--color-text-secondary);">
        <i data-lucide="more-vertical" style="width: 100%; height: 100%;"></i>
      </div>
      <p style="color: var(--color-text-primary); font-weight: var(--font-medium); margin-bottom: var(--space-1);">Compact Menu</p>
      <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">Space-efficient variant</p>
    `;

    const menu = document.createElement('div');
    menu.className = 'aural-context-menu aural-context-menu--compact';
    menu.id = 'menu-compact-trigger';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="edit" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Edit</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="share" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Share</span>
      </button>
      <div class="aural-context-menu__separator" role="separator"></div>
      <button class="aural-context-menu__item aural-context-menu__item--danger" role="menuitem">
        <i data-lucide="trash-2" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Delete</span>
      </button>
    `;

    wrapper.appendChild(trigger);
    document.body.appendChild(menu);

    trigger.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      document.querySelectorAll('.aural-context-menu').forEach(m => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  }
};

export const DangerActions: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

    const trigger = document.createElement('div');
    trigger.className = 'context-trigger';
    trigger.id = 'danger-trigger';
    trigger.style.cssText = `
      background: var(--color-bg-secondary);
      border: 2px dashed var(--color-border-medium);
      border-radius: var(--radius-lg);
      padding: var(--space-8);
      text-align: center;
      cursor: context-menu;
    `;
    trigger.innerHTML = `
      <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); color: var(--color-text-secondary);">
        <i data-lucide="alert-triangle" style="width: 100%; height: 100%;"></i>
      </div>
      <p style="color: var(--color-text-primary); font-weight: var(--font-medium); margin-bottom: var(--space-1);">Destructive Actions</p>
      <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">Highlighted danger items</p>
    `;

    const menu = document.createElement('div');
    menu.className = 'aural-context-menu';
    menu.id = 'menu-danger-trigger';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="edit" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Edit</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="copy" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Duplicate</span>
      </button>
      <div class="aural-context-menu__separator" role="separator"></div>
      <button class="aural-context-menu__item aural-context-menu__item--danger" role="menuitem">
        <i data-lucide="trash-2" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Delete</span>
      </button>
      <button class="aural-context-menu__item aural-context-menu__item--danger" role="menuitem">
        <i data-lucide="x-circle" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Delete Permanently</span>
      </button>
    `;

    wrapper.appendChild(trigger);
    document.body.appendChild(menu);

    trigger.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      document.querySelectorAll('.aural-context-menu').forEach(m => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  }
};

export const FileManagerPattern: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding: var(--space-8); display: flex; justify-content: center; min-height: 400px;';

    const trigger = document.createElement('div');
    trigger.className = 'context-trigger';
    trigger.id = 'file-manager-trigger';
    trigger.style.cssText = `
      background: var(--color-bg-secondary);
      border: 2px dashed var(--color-border-medium);
      border-radius: var(--radius-lg);
      padding: var(--space-8);
      text-align: center;
      cursor: context-menu;
    `;
    trigger.innerHTML = `
      <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); color: var(--color-text-secondary);">
        <i data-lucide="folder" style="width: 100%; height: 100%;"></i>
      </div>
      <p style="color: var(--color-text-primary); font-weight: var(--font-medium); margin-bottom: var(--space-1);">Project Folder</p>
      <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">File system actions</p>
    `;

    const menu = document.createElement('div');
    menu.className = 'aural-context-menu';
    menu.id = 'menu-file-manager-trigger';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="folder-open" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Open</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="eye" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Preview</span>
      </button>
      <div class="aural-context-menu__separator" role="separator"></div>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="edit" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Rename</span>
        <span class="aural-context-menu__item-shortcut">F2</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="copy" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Duplicate</span>
        <span class="aural-context-menu__item-shortcut">⌘D</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="share" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Share</span>
      </button>
      <div class="aural-context-menu__separator" role="separator"></div>
      <button class="aural-context-menu__item aural-context-menu__item--danger" role="menuitem">
        <i data-lucide="trash-2" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Move to Trash</span>
        <span class="aural-context-menu__item-shortcut">⌘⌫</span>
      </button>
      <div class="aural-context-menu__separator" role="separator"></div>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="info" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Get Info</span>
        <span class="aural-context-menu__item-shortcut">⌘I</span>
      </button>
    `;

    wrapper.appendChild(trigger);
    document.body.appendChild(menu);

    trigger.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      document.querySelectorAll('.aural-context-menu').forEach(m => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  }
};

export const TextEditorPattern: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

    const trigger = document.createElement('div');
    trigger.className = 'context-trigger';
    trigger.id = 'text-editor-trigger';
    trigger.style.cssText = `
      background: var(--color-bg-secondary);
      border: 2px dashed var(--color-border-medium);
      border-radius: var(--radius-lg);
      padding: var(--space-8);
      text-align: center;
      cursor: context-menu;
    `;
    trigger.innerHTML = `
      <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); color: var(--color-text-secondary);">
        <i data-lucide="type" style="width: 100%; height: 100%;"></i>
      </div>
      <p style="color: var(--color-text-primary); font-weight: var(--font-medium); margin-bottom: var(--space-1);">Selected Text</p>
      <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">Text editing actions</p>
    `;

    const menu = document.createElement('div');
    menu.className = 'aural-context-menu';
    menu.id = 'menu-text-editor-trigger';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="copy" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Copy</span>
        <span class="aural-context-menu__item-shortcut">⌘C</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="scissors" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Cut</span>
        <span class="aural-context-menu__item-shortcut">⌘X</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="clipboard" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Paste</span>
        <span class="aural-context-menu__item-shortcut">⌘V</span>
      </button>
      <div class="aural-context-menu__separator" role="separator"></div>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="search" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Search Web</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="bold" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Format</span>
      </button>
    `;

    wrapper.appendChild(trigger);
    document.body.appendChild(menu);

    trigger.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      document.querySelectorAll('.aural-context-menu').forEach(m => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  }
};

export const TableRowPattern: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

    const trigger = document.createElement('div');
    trigger.className = 'context-trigger';
    trigger.id = 'table-row-trigger';
    trigger.style.cssText = `
      background: var(--color-bg-secondary);
      border: 2px dashed var(--color-border-medium);
      border-radius: var(--radius-lg);
      padding: var(--space-8);
      text-align: center;
      cursor: context-menu;
    `;
    trigger.innerHTML = `
      <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); color: var(--color-text-secondary);">
        <i data-lucide="table" style="width: 100%; height: 100%;"></i>
      </div>
      <p style="color: var(--color-text-primary); font-weight: var(--font-medium); margin-bottom: var(--space-1);">User Row</p>
      <p style="color: var(--color-text-secondary); font-size: var(--text-sm); margin: 0;">Data table actions</p>
    `;

    const menu = document.createElement('div');
    menu.className = 'aural-context-menu';
    menu.id = 'menu-table-row-trigger';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="eye" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">View Details</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="edit" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Edit</span>
      </button>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="copy" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Duplicate</span>
      </button>
      <div class="aural-context-menu__separator" role="separator"></div>
      <button class="aural-context-menu__item" role="menuitem">
        <i data-lucide="download" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Export</span>
      </button>
      <div class="aural-context-menu__separator" role="separator"></div>
      <button class="aural-context-menu__item aural-context-menu__item--danger" role="menuitem">
        <i data-lucide="trash-2" class="aural-context-menu__item-icon"></i>
        <span class="aural-context-menu__item-label">Delete</span>
      </button>
    `;

    wrapper.appendChild(trigger);
    document.body.appendChild(menu);

    trigger.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      document.querySelectorAll('.aural-context-menu').forEach(m => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  }
};

export const ThemeComparison: Story = {
  render: () => {
    return createThemeGrid(() => {
      const trigger = document.createElement('div');
      trigger.className = 'context-trigger';
      trigger.id = `theme-trigger-${Math.random().toString(36).substr(2, 9)}`;
      trigger.style.cssText = `
        background: var(--color-bg-secondary);
        border: 2px dashed var(--color-border-medium);
        border-radius: var(--radius-lg);
        padding: var(--space-6);
        text-align: center;
        cursor: context-menu;
        transition: var(--transition-all-fast);
      `;
      trigger.innerHTML = `
        <div style="width: 32px; height: 32px; margin: 0 auto var(--space-2); color: var(--color-text-secondary);">
          <i data-lucide="mouse-pointer-click" style="width: 100%; height: 100%;"></i>
        </div>
        <p style="color: var(--color-text-primary); font-weight: var(--font-medium); margin: 0; font-size: var(--text-sm);">Right-click</p>
      `;

      const menuId = `menu-${trigger.id}`;
      const menu = document.createElement('div');
      menu.className = 'aural-context-menu';
      menu.id = menuId;
      menu.setAttribute('role', 'menu');
      menu.innerHTML = `
        <button class="aural-context-menu__item" role="menuitem">
          <i data-lucide="copy" class="aural-context-menu__item-icon"></i>
          <span class="aural-context-menu__item-label">Copy</span>
          <span class="aural-context-menu__item-shortcut">⌘C</span>
        </button>
        <button class="aural-context-menu__item" role="menuitem">
          <i data-lucide="scissors" class="aural-context-menu__item-icon"></i>
          <span class="aural-context-menu__item-label">Cut</span>
          <span class="aural-context-menu__item-shortcut">⌘X</span>
        </button>
        <div class="aural-context-menu__separator" role="separator"></div>
        <button class="aural-context-menu__item aural-context-menu__item--danger" role="menuitem">
          <i data-lucide="trash-2" class="aural-context-menu__item-icon"></i>
          <span class="aural-context-menu__item-label">Delete</span>
        </button>
      `;

      document.body.appendChild(menu);

      trigger.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        document.querySelectorAll('.aural-context-menu').forEach(m => m.classList.remove('aural-context-menu--open'));
        menu.style.left = e.clientX + 'px';
        menu.style.top = e.clientY + 'px';
        menu.classList.add('aural-context-menu--open');
      });

      document.addEventListener('click', () => {
        menu.classList.remove('aural-context-menu--open');
      });

      initContextMenu();

      return trigger;
    });
  }
};
