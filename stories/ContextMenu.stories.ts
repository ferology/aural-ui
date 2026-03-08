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

Context menus appear on right-click (or long-press on mobile) and display actions specific to the selected item or area. They're essential for power users who prefer mouse/keyboard efficiency.

## When to Use

- **File/folder actions**: Right-click menus for copy, paste, delete, rename operations
- **Table row actions**: Quick access to view, edit, delete for data rows
- **Text selection**: Show copy, cut, paste, format options for selected text
- **Canvas/drawing tools**: Context-specific tools for selected elements
- **List item actions**: Quick actions without cluttering the interface

## When NOT to Use

- **Primary navigation**: Use Navbar or Tabs for main navigation
- **Mobile-only apps**: Touch and hold gesture may conflict with other interactions
- **Critical actions**: Don't hide essential actions in context menus
- **Discoverable actions**: Use visible buttons for actions users need to find easily
- **Single action**: If there's only one action, use a button instead

## Framework Examples

### Vanilla HTML
\`\`\`html
<!-- Trigger element -->
<div class="context-trigger" id="my-trigger">
  <p>Right-click here for menu</p>
</div>

<!-- Context menu (hidden by default) -->
<div class="aural-context-menu" id="menu-my-trigger" role="menu">
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
</div>

<script>
// Initialize context menu
if (window.Aural) {
  window.Aural.initContextMenu();
}

// Manual setup (if not using Aural.js)
const trigger = document.getElementById('my-trigger');
const menu = document.getElementById('menu-my-trigger');

trigger.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menu.style.left = e.clientX + 'px';
  menu.style.top = e.clientY + 'px';
  menu.classList.add('aural-context-menu--open');
});

document.addEventListener('click', () => {
  menu.classList.remove('aural-context-menu--open');
});
</script>
\`\`\`

### React
\`\`\`jsx
import { useState, useEffect, useRef } from 'react';

interface MenuItem {
  label: string;
  icon?: string;
  shortcut?: string;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  separator?: boolean;
}

interface ContextMenuProps {
  items: MenuItem[];
  onClose?: () => void;
}

function ContextMenu({ items, onClose }: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose?.();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div ref={menuRef} className="aural-context-menu aural-context-menu--open" role="menu">
      {items.map((item, index) =>
        item.separator ? (
          <div key={index} className="aural-context-menu__separator" role="separator" />
        ) : (
          <button
            key={index}
            className={\`aural-context-menu__item \${item.danger ? 'aural-context-menu__item--danger' : ''} \${item.disabled ? 'aural-context-menu__item--disabled' : ''}\`}
            role="menuitem"
            disabled={item.disabled}
            onClick={() => {
              item.onClick?.();
              onClose?.();
            }}
          >
            {item.icon && <i data-lucide={item.icon} className="aural-context-menu__item-icon" />}
            <span className="aural-context-menu__item-label">{item.label}</span>
            {item.shortcut && (
              <span className="aural-context-menu__item-shortcut">{item.shortcut}</span>
            )}
          </button>
        )
      )}
    </div>
  );
}

// Hook for context menu positioning
function useContextMenu() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const closeMenu = () => setPosition(null);

  return { position, handleContextMenu, closeMenu };
}

// Usage
function MyComponent() {
  const { position, handleContextMenu, closeMenu } = useContextMenu();

  return (
    <>
      <div onContextMenu={handleContextMenu}>
        Right-click me
      </div>

      {position && (
        <div style={{ position: 'fixed', left: position.x, top: position.y }}>
          <ContextMenu
            items={[
              { label: 'Copy', icon: 'copy', shortcut: '⌘C', onClick: () => console.log('Copy') },
              { label: 'Cut', icon: 'scissors', shortcut: '⌘X', onClick: () => console.log('Cut') },
              { separator: true },
              { label: 'Delete', icon: 'trash-2', danger: true, onClick: () => console.log('Delete') }
            ]}
            onClose={closeMenu}
          />
        </div>
      )}
    </>
  );
}
\`\`\`

### Vue
\`\`\`vue
<template>
  <div>
    <div @contextmenu="handleContextMenu">
      Right-click me
    </div>

    <div
      v-if="menuPosition"
      class="aural-context-menu aural-context-menu--open"
      role="menu"
      :style="{ position: 'fixed', left: menuPosition.x + 'px', top: menuPosition.y + 'px' }"
      ref="menuRef"
    >
      <template v-for="(item, index) in items" :key="index">
        <div v-if="item.separator" class="aural-context-menu__separator" role="separator" />
        <button
          v-else
          :class="[\`aural-context-menu__item\`, {
            'aural-context-menu__item--danger': item.danger,
            'aural-context-menu__item--disabled': item.disabled
          }]"
          role="menuitem"
          :disabled="item.disabled"
          @click="handleItemClick(item)"
        >
          <i v-if="item.icon" :data-lucide="item.icon" class="aural-context-menu__item-icon" />
          <span class="aural-context-menu__item-label">{{ item.label }}</span>
          <span v-if="item.shortcut" class="aural-context-menu__item-shortcut">{{ item.shortcut }}</span>
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  items: { type: Array, required: true }
});

const menuPosition = ref(null);
const menuRef = ref(null);

function handleContextMenu(e) {
  e.preventDefault();
  menuPosition.value = { x: e.clientX, y: e.clientY };
}

function handleItemClick(item) {
  item.onClick?.();
  closeMenu();
}

function closeMenu() {
  menuPosition.value = null;
}

function handleClickOutside(e) {
  if (menuRef.value && !menuRef.value.contains(e.target)) {
    closeMenu();
  }
}

function handleEscape(e) {
  if (e.key === 'Escape') {
    closeMenu();
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleEscape);
});
</script>
\`\`\`

### Svelte
\`\`\`svelte
<script>
  import { onMount, onDestroy } from 'svelte';

  export let items = [];

  let menuPosition = null;
  let menuRef;

  function handleContextMenu(e) {
    e.preventDefault();
    menuPosition = { x: e.clientX, y: e.clientY };
  }

  function handleItemClick(item) {
    item.onClick?.();
    closeMenu();
  }

  function closeMenu() {
    menuPosition = null;
  }

  function handleClickOutside(e) {
    if (menuRef && !menuRef.contains(e.target)) {
      closeMenu();
    }
  }

  function handleEscape(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
  });

  onDestroy(() => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleEscape);
  });
</script>

<div on:contextmenu={handleContextMenu}>
  Right-click me
</div>

{#if menuPosition}
  <div
    bind:this={menuRef}
    class="aural-context-menu aural-context-menu--open"
    role="menu"
    style="position: fixed; left: {menuPosition.x}px; top: {menuPosition.y}px;"
  >
    {#each items as item, index}
      {#if item.separator}
        <div class="aural-context-menu__separator" role="separator" />
      {:else}
        <button
          class="aural-context-menu__item"
          class:aural-context-menu__item--danger={item.danger}
          class:aural-context-menu__item--disabled={item.disabled}
          role="menuitem"
          disabled={item.disabled}
          on:click={() => handleItemClick(item)}
        >
          {#if item.icon}
            <i data-lucide={item.icon} class="aural-context-menu__item-icon" />
          {/if}
          <span class="aural-context-menu__item-label">{item.label}</span>
          {#if item.shortcut}
            <span class="aural-context-menu__item-shortcut">{item.shortcut}</span>
          {/if}
        </button>
      {/if}
    {/each}
  </div>
{/if}
\`\`\`

## Accessibility

1. **Proper ARIA roles**: Menu uses \`role="menu"\` and items use \`role="menuitem"\`
2. **Keyboard trigger**: Shift+F10 or Context Menu key opens context menu on focused element
3. **Arrow key navigation**: Up/Down arrows move focus between menu items
4. **Home/End keys**: Jump to first/last menu item for quick navigation
5. **Enter/Space activation**: Activate the focused menu item
6. **Escape key**: Closes menu and returns focus to trigger element
7. **Focus trap**: Focus stays within menu while open, doesn't leak to background
8. **Focus restoration**: Focus returns to trigger element when menu closes
9. **Disabled state**: Disabled items use \`disabled\` attribute and \`aria-disabled="true"\`
10. **Separators**: Use \`role="separator"\` for visual dividers
11. **Keyboard shortcuts**: Display keyboard shortcuts (⌘C, Ctrl+V, etc.) for discoverability
12. **Touch support**: Long-press gesture on mobile devices triggers context menu
13. **Screen reader labels**: Menu items have clear, descriptive labels
14. **Danger indication**: Destructive actions clearly marked with color and icons
15. **Motion preferences**: Menu animations respect \`prefers-reduced-motion\` setting

## Usage Guidelines

### Best Practices

- **Right-click trigger**: Context menus should primarily open on right-click
- **Relevant actions**: Only show actions applicable to the clicked element
- **Keyboard shortcuts**: Display keyboard shortcuts when available
- **Logical grouping**: Use separators to group related actions
- **Danger actions**: Place destructive actions at the bottom, after a separator
- **Action order**: Most common actions at the top for quick access

### Mobile Behavior

- Opens on long-press (touch and hold) gesture
- Displays as bottom sheet on mobile (< 640px) for better reach
- Touch-optimized item heights (44px minimum)
- Swipe down to dismiss on mobile
- Submenus stack instead of flying out
- Larger tap targets for better touch accuracy

### Positioning

Context menus automatically position themselves:
- Opens at cursor position by default
- Adjusts if near screen edges (flips to stay on screen)
- Submenus open to the right (or left near edge)
- Z-index: 9999 to appear above other content

### Common Patterns

**File/Folder Menu**:
- Open, Preview, Download
- Rename, Duplicate, Share
- Move to Trash (danger action)

**Table Row Menu**:
- View Details, Edit
- Duplicate, Export
- Delete (danger action)

**Text Selection Menu**:
- Copy, Cut, Paste
- Format options
- Search web for selection

### Variants

- **Default**: Standard context menu with normal spacing
- **Compact** (\`aural-context-menu--compact\`): Reduced padding for dense layouts
- **Dark** (\`aural-context-menu--dark\`): Dark variant with blur background
        `.trim(),
      },
    },
  },
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
      document
        .querySelectorAll('.aural-context-menu')
        .forEach((m) => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();

    return wrapper;
  },
};

export const WithIcons: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText =
      'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

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
      document
        .querySelectorAll('.aural-context-menu')
        .forEach((m) => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  },
};

export const WithSeparators: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText =
      'padding: var(--space-8); display: flex; justify-content: center; min-height: 400px;';

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
      document
        .querySelectorAll('.aural-context-menu')
        .forEach((m) => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  },
};

export const WithDisabledItems: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText =
      'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

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
      document
        .querySelectorAll('.aural-context-menu')
        .forEach((m) => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  },
};

export const WithCheckableItems: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText =
      'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

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
      document
        .querySelectorAll('.aural-context-menu')
        .forEach((m) => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  },
};

export const CompactVariant: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText =
      'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

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
      document
        .querySelectorAll('.aural-context-menu')
        .forEach((m) => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  },
};

export const DangerActions: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText =
      'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

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
      document
        .querySelectorAll('.aural-context-menu')
        .forEach((m) => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  },
};

export const FileManagerPattern: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText =
      'padding: var(--space-8); display: flex; justify-content: center; min-height: 400px;';

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
      document
        .querySelectorAll('.aural-context-menu')
        .forEach((m) => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  },
};

export const TextEditorPattern: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText =
      'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

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
      document
        .querySelectorAll('.aural-context-menu')
        .forEach((m) => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  },
};

export const TableRowPattern: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText =
      'padding: var(--space-8); display: flex; justify-content: center; min-height: 300px;';

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
      document
        .querySelectorAll('.aural-context-menu')
        .forEach((m) => m.classList.remove('aural-context-menu--open'));
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.classList.add('aural-context-menu--open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('aural-context-menu--open');
    });

    initContextMenu();
    return wrapper;
  },
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
        document
          .querySelectorAll('.aural-context-menu')
          .forEach((m) => m.classList.remove('aural-context-menu--open'));
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
  },
};
