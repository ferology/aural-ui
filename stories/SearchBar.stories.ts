import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Forms/Search Bar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Search Bar Component

Versatile search input component with autocomplete, filters, keyboard shortcuts, and command palette functionality for enhanced user experience.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Key Features

- Multiple sizes (Small, Medium, Large)
- Search icon and clear button
- Loading states
- Keyboard shortcuts (⌘K / Ctrl+K)
- ARIA attributes for accessibility
- WCAG AAA compliant

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-search-bar" role="search">
  <div class="aural-search-bar__wrapper">
    <div class="aural-search-bar__icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    </div>
    <input type="text" class="aural-search-bar__input" placeholder="Search..." aria-label="Search">
  </div>
</div>
\`\`\`

**React:**
\`\`\`jsx
<div className="aural-search-bar" role="search">
  <div className="aural-search-bar__wrapper">
    <div className="aural-search-bar__icon">
      <SearchIcon />
    </div>
    <input type="text" className="aural-search-bar__input" placeholder="Search..." aria-label="Search" />
  </div>
</div>
\`\`\`

**Vue:**
\`\`\`vue
<div class="aural-search-bar" role="search">
  <div class="aural-search-bar__wrapper">
    <div class="aural-search-bar__icon">
      <SearchIcon />
    </div>
    <input type="text" class="aural-search-bar__input" placeholder="Search..." aria-label="Search" />
  </div>
</div>
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    value: {
      control: 'text',
      description: 'Input value'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state'
    },
    showClearButton: {
      control: 'boolean',
      description: 'Show clear button'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Search bar size'
    },
    variant: {
      control: 'select',
      options: ['default', 'rounded'],
      description: 'Visual variant'
    },
    showKeyboardHint: {
      control: 'boolean',
      description: 'Show keyboard shortcut hint'
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create search icon
function createSearchIcon(): SVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', '11');
  circle.setAttribute('cy', '11');
  circle.setAttribute('r', '8');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'm21 21-4.35-4.35');

  svg.appendChild(circle);
  svg.appendChild(path);

  return svg;
}

// Helper function to create clear/close icon
function createClearIcon(): SVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');

  const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line1.setAttribute('x1', '18');
  line1.setAttribute('y1', '6');
  line1.setAttribute('x2', '6');
  line1.setAttribute('y2', '18');

  const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line2.setAttribute('x1', '6');
  line2.setAttribute('y1', '6');
  line2.setAttribute('x2', '18');
  line2.setAttribute('y2', '18');

  svg.appendChild(line1);
  svg.appendChild(line2);

  return svg;
}

// Helper function to create loading spinner
function createSpinner(): HTMLElement {
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  spinner.setAttribute('aria-hidden', 'true');
  spinner.style.cssText = `
    width: 16px;
    height: 16px;
    border: 2px solid var(--color-text-tertiary);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  `;

  return spinner;
}

export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const searchBar = document.createElement('div');
    searchBar.className = `aural-search-bar${args.size !== 'md' ? ` aural-search-bar--${args.size}` : ''}`;
    searchBar.setAttribute('role', 'search');

    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';

    // Search icon
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.setAttribute('aria-hidden', 'true');
    if (args.loading) {
      iconWrapper.appendChild(createSpinner());
    } else {
      iconWrapper.appendChild(createSearchIcon());
    }
    wrapper.appendChild(iconWrapper);

    // Input
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = args.placeholder || 'Search...';
    input.value = args.value || '';
    input.disabled = args.disabled || false;
    input.setAttribute('aria-label', args.placeholder || 'Search');

    if (args.loading) {
      input.setAttribute('aria-busy', 'true');
    }

    wrapper.appendChild(input);

    // Clear button
    if (args.showClearButton && args.value) {
      const clearBtn = document.createElement('button');
      clearBtn.className = 'aural-search-bar__clear';
      clearBtn.setAttribute('aria-label', 'Clear search');
      clearBtn.type = 'button';
      clearBtn.appendChild(createClearIcon());
      clearBtn.onclick = () => {
        input.value = '';
        input.focus();
      };
      wrapper.appendChild(clearBtn);
    }

    // Keyboard hint
    if (args.showKeyboardHint) {
      const kbd = document.createElement('kbd');
      kbd.textContent = '⌘K';
      kbd.style.cssText = `
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        padding: 4px 8px;
        background: var(--color-bg-tertiary);
        border: 1px solid var(--color-border-subtle);
        border-radius: var(--radius-sm);
        font-size: var(--text-xs);
        color: var(--color-text-tertiary);
        pointer-events: none;
      `;
      wrapper.style.position = 'relative';
      wrapper.appendChild(kbd);
    }

    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);

    return container;
  },
  args: {
    placeholder: 'Search...',
    value: '',
    disabled: false,
    loading: false,
    showClearButton: false,
    size: 'md',
    variant: 'default',
    showKeyboardHint: false
  }
};

export const WithValue: Story = {
  ...Default,
  args: {
    placeholder: 'Search...',
    value: 'Search query',
    showClearButton: true,
    size: 'md'
  }
};

export const Loading: Story = {
  ...Default,
  args: {
    placeholder: 'Searching...',
    loading: true,
    size: 'md'
  }
};

export const Disabled: Story = {
  ...Default,
  args: {
    placeholder: 'Search disabled',
    disabled: true,
    size: 'md'
  }
};

export const WithClearButton: Story = {
  ...Default,
  args: {
    placeholder: 'Type to search...',
    value: 'Button component',
    showClearButton: true,
    size: 'md'
  }
};

export const Rounded: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar';
    searchBar.setAttribute('role', 'search');
    searchBar.style.borderRadius = 'var(--radius-full)';

    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.setAttribute('aria-hidden', 'true');
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = args.placeholder || 'Search...';
    input.setAttribute('aria-label', args.placeholder || 'Search');
    wrapper.appendChild(input);

    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);

    return container;
  },
  args: {
    placeholder: 'Rounded search...',
    variant: 'rounded'
  }
};

export const Small: Story = {
  ...Default,
  args: {
    placeholder: 'Small search...',
    size: 'sm'
  }
};

export const Large: Story = {
  ...Default,
  args: {
    placeholder: 'Large search...',
    size: 'lg'
  }
};

export const WithResults: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar';
    searchBar.setAttribute('role', 'search');

    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.setAttribute('aria-hidden', 'true');
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Search components...';
    input.value = 'button';
    input.setAttribute('aria-label', 'Search components');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('aria-expanded', 'true');
    wrapper.appendChild(input);

    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);

    // Results dropdown
    const results = document.createElement('div');
    results.className = 'search-suggestions';
    results.setAttribute('role', 'listbox');
    results.style.cssText = `
      margin-top: var(--space-2);
      padding: var(--space-2);
      background: var(--color-bg-primary);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    `;

    const suggestions = [
      { title: 'Button Component', description: 'Interactive button with variants' },
      { title: 'Button Group', description: 'Group related buttons together' },
      { title: 'Toggle Button', description: 'Button with on/off state' }
    ];

    suggestions.forEach((item, index) => {
      const suggestionItem = document.createElement('div');
      suggestionItem.className = 'suggestion-item';
      suggestionItem.setAttribute('role', 'option');
      suggestionItem.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      suggestionItem.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
        padding: var(--space-3);
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: background-color 0.15s ease;
      `;

      if (index === 0) {
        suggestionItem.style.background = 'var(--color-bg-secondary)';
      }

      const title = document.createElement('div');
      title.style.cssText = 'font-weight: var(--font-medium); color: var(--color-text-primary);';
      title.innerHTML = item.title.replace(/button/gi, '<span class="suggestion-highlight" style="font-weight: var(--font-semibold); color: var(--color-primary);">$&</span>');
      suggestionItem.appendChild(title);

      const description = document.createElement('div');
      description.style.cssText = 'font-size: var(--text-sm); color: var(--color-text-tertiary);';
      description.textContent = item.description;
      suggestionItem.appendChild(description);

      results.appendChild(suggestionItem);
    });

    container.appendChild(results);

    return container;
  }
};

export const WithKeyboardShortcut: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar';
    searchBar.setAttribute('role', 'search');

    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';
    wrapper.style.position = 'relative';

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.setAttribute('aria-hidden', 'true');
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Search...';
    input.setAttribute('aria-label', 'Search with keyboard shortcut');
    wrapper.appendChild(input);

    // Keyboard hint
    const kbd = document.createElement('kbd');
    kbd.textContent = '⌘K';
    kbd.style.cssText = `
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      padding: 4px 8px;
      background: var(--color-bg-tertiary);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-sm);
      font-size: var(--text-xs);
      color: var(--color-text-tertiary);
      pointer-events: none;
    `;
    wrapper.appendChild(kbd);

    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);

    const hint = document.createElement('p');
    hint.style.cssText = 'margin-top: var(--space-4); font-size: var(--text-sm); color: var(--color-text-tertiary);';
    hint.innerHTML = 'Press <kbd style="padding: 2px 6px; background: var(--color-bg-tertiary); border-radius: var(--radius-sm);">⌘K</kbd> or <kbd style="padding: 2px 6px; background: var(--color-bg-tertiary); border-radius: var(--radius-sm);">Ctrl+K</kbd> to focus';
    container.appendChild(hint);

    return container;
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; max-width: 600px;';

    const sizes = [
      { size: 'sm', label: 'Small' },
      { size: 'md', label: 'Medium (Default)' },
      { size: 'lg', label: 'Large' }
    ];

    sizes.forEach(({ size, label }) => {
      const wrapper = document.createElement('div');

      const labelEl = document.createElement('div');
      labelEl.textContent = label;
      labelEl.style.cssText = 'font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--color-text-secondary); margin-bottom: var(--space-2);';
      wrapper.appendChild(labelEl);

      const searchBar = document.createElement('div');
      searchBar.className = `aural-search-bar${size !== 'md' ? ` aural-search-bar--${size}` : ''}`;
      searchBar.setAttribute('role', 'search');

      const searchWrapper = document.createElement('div');
      searchWrapper.className = 'aural-search-bar__wrapper';

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'aural-search-bar__icon';
      iconWrapper.setAttribute('aria-hidden', 'true');
      iconWrapper.appendChild(createSearchIcon());
      searchWrapper.appendChild(iconWrapper);

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'aural-search-bar__input';
      input.placeholder = `${label} search...`;
      input.setAttribute('aria-label', `${label} search`);
      searchWrapper.appendChild(input);

      searchBar.appendChild(searchWrapper);
      wrapper.appendChild(searchBar);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const searchBar = document.createElement('div');
      searchBar.className = `aural-search-bar${args.size !== 'md' ? ` aural-search-bar--${args.size}` : ''}`;
      searchBar.setAttribute('role', 'search');

      const wrapper = document.createElement('div');
      wrapper.className = 'aural-search-bar__wrapper';

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'aural-search-bar__icon';
      iconWrapper.setAttribute('aria-hidden', 'true');

      if (args.loading) {
        iconWrapper.appendChild(createSpinner());
      } else {
        iconWrapper.appendChild(createSearchIcon());
      }

      wrapper.appendChild(iconWrapper);

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'aural-search-bar__input';
      input.placeholder = args.placeholder || 'Search...';
      input.value = args.value || '';
      input.disabled = args.disabled || false;
      input.setAttribute('aria-label', args.placeholder || 'Search');

      if (args.loading) {
        input.setAttribute('aria-busy', 'true');
      }

      wrapper.appendChild(input);

      if (args.showClearButton && args.value) {
        const clearBtn = document.createElement('button');
        clearBtn.className = 'aural-search-bar__clear';
        clearBtn.setAttribute('aria-label', 'Clear search');
        clearBtn.type = 'button';
        clearBtn.appendChild(createClearIcon());
        wrapper.appendChild(clearBtn);
      }

      searchBar.appendChild(wrapper);

      return searchBar;
    });
  },
  args: {
    placeholder: 'Search...',
    value: '',
    disabled: false,
    loading: false,
    showClearButton: false,
    size: 'md'
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    value: {
      control: 'text',
      description: 'Input value'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state'
    },
    showClearButton: {
      control: 'boolean',
      description: 'Show clear button'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Search bar size'
    }
  }
};
