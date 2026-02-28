import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Data Display/Chip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Chip Component

Compact elements for tags, filters, and selections. Also known as tags or pills.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Key Features

- Multiple color variants (default, primary, success, warning, error, info)
- 3 sizes (small, medium, large)
- Removable with close button
- Optional Lucide icons
- Standalone or input mode
- Full keyboard accessibility
- WCAG AAA compliant

## Component Structure

\`\`\`html
<!-- Basic Chip -->
<div class="aural-chip aural-chip--standalone">
  <span class="aural-chip__text">Design</span>
</div>

<!-- Chip with Remove Button -->
<div class="aural-chip aural-chip--standalone">
  <span class="aural-chip__text">JavaScript</span>
  <button class="aural-chip__remove" aria-label="Remove JavaScript"></button>
</div>

<!-- Chip with Icon -->
<div class="aural-chip aural-chip--primary aural-chip--standalone">
  <i data-lucide="star"></i>
  <span class="aural-chip__text">Featured</span>
</div>

<!-- Chip Input Container -->
<div class="aural-chips">
  <div class="aural-chips__container">
    <div class="aural-chip">
      <span class="aural-chip__text">HTML</span>
      <button class="aural-chip__remove" aria-label="Remove HTML"></button>
    </div>
    <input type="text" class="aural-chips__input" placeholder="Add skill...">
  </div>
</div>
\`\`\`

## Important Classes

- \`.aural-chip\` - Base chip class
- \`.aural-chip--standalone\` - Use when chip is NOT inside \`.aural-chips\` input container
- \`.aural-chip--primary\`, \`.aural-chip--success\`, etc. - Color variants
- \`.aural-chip--sm\`, \`.aural-chip--lg\` - Size variants (default is medium)
- \`.aural-chip__text\` - Text wrapper (required)
- \`.aural-chip__remove\` - Remove button
- \`.aural-chips\` - Chip input container
- \`.aural-chips__container\` - Inner container for chips and input
- \`.aural-chips__input\` - Input field within chip container
- \`.aural-chips-list\` - Container for displaying multiple standalone chips
        `.trim()
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Chip text content'
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Chip color variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Chip size'
    },
    closeable: {
      control: 'boolean',
      description: 'Show remove button'
    },
    icon: {
      control: 'text',
      description: 'Lucide icon name (e.g., "star", "tag", "x")'
    },
    standalone: {
      control: 'boolean',
      description: 'Use standalone styling (outside of chip input)'
    }
  }
};

export default meta;
type Story = StoryObj;

/**
 * Creates a chip element with the given properties
 */
function createChip(args: any): HTMLElement {
  const chip = document.createElement('div');
  const classes = ['aural-chip'];

  if (args.variant && args.variant !== 'default') {
    classes.push(`aural-chip--${args.variant}`);
  }

  if (args.size && args.size !== 'md') {
    classes.push(`aural-chip--${args.size}`);
  }

  if (args.standalone) {
    classes.push('aural-chip--standalone');
  }

  chip.className = classes.join(' ');
  chip.setAttribute('role', 'listitem');

  // Add icon if provided (using Lucide)
  if (args.icon) {
    const iconElement = document.createElement('i');
    iconElement.setAttribute('data-lucide', args.icon);
    iconElement.setAttribute('aria-hidden', 'true');
    chip.appendChild(iconElement);
  }

  // Add text
  const textSpan = document.createElement('span');
  textSpan.className = 'aural-chip__text';
  textSpan.textContent = args.label;
  chip.appendChild(textSpan);

  // Add remove button if closeable
  if (args.closeable) {
    const removeBtn = document.createElement('button');
    removeBtn.className = 'aural-chip__remove';
    removeBtn.setAttribute('aria-label', `Remove ${args.label}`);
    removeBtn.setAttribute('type', 'button');
    removeBtn.onclick = () => {
      chip.remove();
    };
    chip.appendChild(removeBtn);
  }

  return chip;
}

/**
 * Initialize Lucide icons after rendering
 */
function initializeLucideIcons(container: HTMLElement) {
  // Wait for next tick to ensure DOM is ready
  setTimeout(() => {
    if (typeof (window as any).lucide !== 'undefined') {
      (window as any).lucide.createIcons();
    }
  }, 0);
}

export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.setAttribute('role', 'list');

    const chip = createChip(args);
    chipsList.appendChild(chip);
    container.appendChild(chipsList);

    initializeLucideIcons(container);
    return container;
  },
  args: {
    label: 'Design',
    variant: 'default',
    size: 'md',
    closeable: false,
    icon: '',
    standalone: true
  }
};

export const Primary: Story = {
  ...Default,
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'md',
    closeable: false,
    standalone: true
  }
};

export const Success: Story = {
  ...Default,
  args: {
    label: 'Completed',
    variant: 'success',
    size: 'md',
    closeable: false,
    standalone: true
  }
};

export const Warning: Story = {
  ...Default,
  args: {
    label: 'In Progress',
    variant: 'warning',
    size: 'md',
    closeable: false,
    standalone: true
  }
};

export const Error: Story = {
  ...Default,
  args: {
    label: 'Blocked',
    variant: 'error',
    size: 'md',
    closeable: false,
    standalone: true
  }
};

export const Info: Story = {
  ...Default,
  args: {
    label: 'Review',
    variant: 'info',
    size: 'md',
    closeable: false,
    standalone: true
  }
};

export const WithIcon: Story = {
  ...Default,
  args: {
    label: 'Featured',
    variant: 'primary',
    size: 'md',
    closeable: false,
    icon: 'star',
    standalone: true
  }
};

export const Closeable: Story = {
  ...Default,
  args: {
    label: 'Removable',
    variant: 'default',
    size: 'md',
    closeable: true,
    standalone: true
  }
};

export const Small: Story = {
  ...Default,
  args: {
    label: 'Small',
    variant: 'primary',
    size: 'sm',
    closeable: true,
    standalone: true
  }
};

export const Large: Story = {
  ...Default,
  args: {
    label: 'Large',
    variant: 'primary',
    size: 'lg',
    closeable: true,
    standalone: true
  }
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.setAttribute('role', 'list');

    const variants = [
      { variant: 'default', label: 'Default' },
      { variant: 'primary', label: 'Primary' },
      { variant: 'success', label: 'Success' },
      { variant: 'warning', label: 'Warning' },
      { variant: 'error', label: 'Error' },
      { variant: 'info', label: 'Info' }
    ];

    variants.forEach(({ variant, label }) => {
      const chip = createChip({
        label,
        variant,
        size: 'md',
        closeable: true,
        standalone: true
      });
      chipsList.appendChild(chip);
    });

    container.appendChild(chipsList);
    initializeLucideIcons(container);
    return container;
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.style.alignItems = 'center';
    chipsList.setAttribute('role', 'list');

    const sizes = [
      { size: 'sm', label: 'Small' },
      { size: 'md', label: 'Medium' },
      { size: 'lg', label: 'Large' }
    ];

    sizes.forEach(({ size, label }) => {
      const chip = createChip({
        label,
        variant: 'primary',
        size,
        closeable: true,
        standalone: true
      });
      chipsList.appendChild(chip);
    });

    container.appendChild(chipsList);
    initializeLucideIcons(container);
    return container;
  }
};

export const WithIcons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.setAttribute('role', 'list');

    const chips = [
      { label: 'JavaScript', icon: 'zap', variant: 'primary' },
      { label: 'TypeScript', icon: 'code', variant: 'info' },
      { label: 'React', icon: 'atom', variant: 'success' },
      { label: 'Vue', icon: 'triangle', variant: 'success' }
    ];

    chips.forEach(({ label, icon, variant }) => {
      const chip = createChip({
        label,
        icon,
        variant,
        size: 'md',
        closeable: true,
        standalone: true
      });
      chipsList.appendChild(chip);
    });

    container.appendChild(chipsList);
    initializeLucideIcons(container);
    return container;
  }
};

export const StatusTags: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.setAttribute('role', 'list');

    const statuses = [
      { label: 'Completed', variant: 'success' },
      { label: 'In Progress', variant: 'warning' },
      { label: 'Blocked', variant: 'error' },
      { label: 'Review', variant: 'info' },
      { label: 'Draft', variant: 'default' }
    ];

    statuses.forEach(({ label, variant }) => {
      const chip = createChip({
        label,
        variant,
        size: 'md',
        closeable: false,
        standalone: true
      });
      chipsList.appendChild(chip);
    });

    container.appendChild(chipsList);
    initializeLucideIcons(container);
    return container;
  }
};

export const FilterChips: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';

    // Title
    const title = document.createElement('p');
    title.textContent = 'Active Filters (3)';
    title.style.fontSize = '0.875rem';
    title.style.fontWeight = '600';
    title.style.margin = '0';
    container.appendChild(title);

    // Chips list
    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.setAttribute('role', 'list');

    const filters = [
      { label: 'Status: Active', variant: 'primary' },
      { label: 'Category: Design', variant: 'success' },
      { label: 'Priority: High', variant: 'info' }
    ];

    filters.forEach(({ label, variant }) => {
      const chip = createChip({
        label,
        variant,
        size: 'md',
        closeable: true,
        standalone: true
      });
      chipsList.appendChild(chip);
    });

    container.appendChild(chipsList);

    // Clear all button
    const clearBtn = document.createElement('button');
    clearBtn.className = 'btn btn-ghost btn-sm';
    clearBtn.textContent = 'Clear All Filters';
    clearBtn.style.alignSelf = 'flex-start';
    clearBtn.onclick = () => {
      while (chipsList.firstChild) {
        chipsList.removeChild(chipsList.firstChild);
      }
    };
    container.appendChild(clearBtn);

    initializeLucideIcons(container);
    return container;
  }
};

export const ChipInput: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const chipsContainer = document.createElement('div');
    chipsContainer.className = 'aural-chips';

    const chipsInnerContainer = document.createElement('div');
    chipsInnerContainer.className = 'aural-chips__container';

    // Add initial chips
    const initialChips = ['HTML', 'CSS', 'JavaScript'];
    initialChips.forEach(label => {
      const chip = createChip({
        label,
        variant: 'default',
        size: 'md',
        closeable: true,
        standalone: false
      });
      chip.classList.remove('aural-chip--standalone');
      chipsInnerContainer.appendChild(chip);
    });

    // Add input
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-chips__input';
    input.placeholder = 'Add skill...';
    input.setAttribute('aria-label', 'Add new chip');

    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && input.value.trim()) {
        e.preventDefault();
        const newChip = createChip({
          label: input.value.trim(),
          variant: 'default',
          size: 'md',
          closeable: true,
          standalone: false
        });
        newChip.classList.remove('aural-chip--standalone');
        chipsInnerContainer.insertBefore(newChip, input);
        input.value = '';
        initializeLucideIcons(container);
      }
    });

    chipsInnerContainer.appendChild(input);
    chipsContainer.appendChild(chipsInnerContainer);
    container.appendChild(chipsContainer);

    initializeLucideIcons(container);
    return container;
  }
};

export const TagFilters: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.setAttribute('role', 'list');

    const tags = [
      { label: 'All', variant: 'primary', active: true },
      { label: 'Design', variant: 'default', active: false },
      { label: 'Development', variant: 'default', active: false },
      { label: 'Marketing', variant: 'default', active: false }
    ];

    tags.forEach(({ label, variant, active }) => {
      const chip = createChip({
        label,
        variant,
        size: 'md',
        closeable: false,
        standalone: true
      });

      // Make clickable for filtering
      chip.style.cursor = 'pointer';
      chip.onclick = () => {
        // Remove primary from all chips
        chipsList.querySelectorAll('.aural-chip').forEach(c => {
          c.classList.remove('aural-chip--primary');
        });
        // Add primary to clicked chip
        chip.classList.add('aural-chip--primary');
      };

      chipsList.appendChild(chip);
    });

    container.appendChild(chipsList);
    initializeLucideIcons(container);
    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const chipsList = document.createElement('div');
      chipsList.className = 'aural-chips-list';
      chipsList.setAttribute('role', 'list');

      const chip = createChip({
        label: args.label,
        variant: args.variant,
        size: args.size,
        closeable: args.closeable,
        icon: args.icon,
        standalone: true
      });

      chipsList.appendChild(chip);

      // Initialize Lucide for the grid
      setTimeout(() => {
        if (typeof (window as any).lucide !== 'undefined') {
          (window as any).lucide.createIcons();
        }
      }, 100);

      return chipsList;
    });
  },
  args: {
    label: 'Chip',
    variant: 'primary',
    size: 'md',
    closeable: true,
    icon: ''
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Chip text content'
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Chip color variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Chip size'
    },
    closeable: {
      control: 'boolean',
      description: 'Show remove button'
    },
    icon: {
      control: 'text',
      description: 'Lucide icon name (e.g., "star", "tag", "x")'
    }
  }
};
