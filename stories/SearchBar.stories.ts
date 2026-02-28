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

Versatile search input components with autocomplete, filters, keyboard shortcuts, and command palette functionality for enhanced user experience.

## Key Features

- Multiple sizes (Small, Medium, Large)
- Search icon and clear button
- Voice search support
- Keyboard shortcuts (⌘K / Ctrl+K)
- Autocomplete and suggestions
- ARIA attributes for accessibility
- WCAG AAA compliant

## HTML Structure

\`\`\`html
<div class="aural-search-bar">
  <div class="aural-search-bar__wrapper">
    <div class="aural-search-bar__icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    </div>
    <input type="text" class="aural-search-bar__input" placeholder="Search..." aria-label="Search input">
  </div>
</div>
\`\`\`

## Size Variants

- \`aural-search-bar--sm\` - Small size
- \`aural-search-bar\` - Default/Medium size
- \`aural-search-bar--lg\` - Large size

## With Clear Button

\`\`\`html
<div class="aural-search-bar">
  <div class="aural-search-bar__wrapper">
    <div class="aural-search-bar__icon">...</div>
    <input type="text" class="aural-search-bar__input" placeholder="Type to search..." aria-label="Search with clear button">
    <button class="aural-search-bar__clear" aria-label="Clear search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>
</div>
\`\`\`

## Framework Examples

**React:**
\`\`\`jsx
const SearchBar = ({ placeholder = 'Search...', value, onChange }) => (
  <div className="aural-search-bar">
    <div className="aural-search-bar__wrapper">
      <div className="aural-search-bar__icon">
        <SearchIcon />
      </div>
      <input
        type="text"
        className="aural-search-bar__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label="Search"
      />
    </div>
  </div>
);
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div class="aural-search-bar">
    <div class="aural-search-bar__wrapper">
      <div class="aural-search-bar__icon">
        <SearchIcon />
      </div>
      <input
        type="text"
        class="aural-search-bar__input"
        :placeholder="placeholder"
        v-model="searchQuery"
        aria-label="Search"
      />
    </div>
  </div>
</template>
\`\`\`

**Svelte:**
\`\`\`svelte
<div class="aural-search-bar">
  <div class="aural-search-bar__wrapper">
    <div class="aural-search-bar__icon">
      <SearchIcon />
    </div>
    <input
      type="text"
      class="aural-search-bar__input"
      placeholder={placeholder}
      bind:value={searchQuery}
      aria-label="Search"
    />
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

export default meta;
type Story = StoryObj;

// Helper function to create search icon (matches docs exactly)
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

// Helper function to create clear/close icon (matches docs exactly)
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

// Helper function to create microphone icon
function createMicIcon(): SVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.style.width = '16px';
  svg.style.height = '16px';

  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.setAttribute('d', 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z');

  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path2.setAttribute('d', 'M19 10v2a7 7 0 0 1-14 0v-2');

  const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line1.setAttribute('x1', '12');
  line1.setAttribute('y1', '19');
  line1.setAttribute('x2', '12');
  line1.setAttribute('y2', '23');

  const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line2.setAttribute('x1', '8');
  line2.setAttribute('y1', '23');
  line2.setAttribute('x2', '16');
  line2.setAttribute('y2', '23');

  svg.appendChild(path1);
  svg.appendChild(path2);
  svg.appendChild(line1);
  svg.appendChild(line2);

  return svg;
}

export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const searchBar = document.createElement('div');
    // Apply size class correctly per docs
    searchBar.className = args.size === 'sm' ? 'aural-search-bar aural-search-bar--sm' :
                          args.size === 'lg' ? 'aural-search-bar aural-search-bar--lg' :
                          'aural-search-bar';

    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';

    // Search icon (required per docs)
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);

    // Input field
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = args.placeholder || 'Search...';
    input.value = args.value || '';
    input.disabled = args.disabled || false;
    input.setAttribute('aria-label', args.placeholder || 'Search input');
    wrapper.appendChild(input);

    // Clear button (optional, shown when there's a value)
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

    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);

    return container;
  },
  args: {
    placeholder: 'Search...',
    value: '',
    disabled: false,
    showClearButton: false,
    size: 'md'
  }
};

export const Small: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar aural-search-bar--sm';

    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Small search...';
    input.setAttribute('aria-label', 'Small search input');
    wrapper.appendChild(input);

    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);

    return container;
  }
};

export const Large: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar aural-search-bar--lg';

    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Large search...';
    input.setAttribute('aria-label', 'Large search input');
    wrapper.appendChild(input);

    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);

    return container;
  }
};

export const WithClearButton: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar';

    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'search-clear';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Type to search...';
    input.value = 'Button component';
    input.setAttribute('aria-label', 'Search with clear button');
    wrapper.appendChild(input);

    const clearBtn = document.createElement('button');
    clearBtn.className = 'aural-search-bar__clear';
    clearBtn.setAttribute('aria-label', 'Clear search');
    clearBtn.appendChild(createClearIcon());
    clearBtn.onclick = () => {
      input.value = '';
      input.focus();
    };
    wrapper.appendChild(clearBtn);

    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);

    return container;
  }
};

export const WithVoiceSearch: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar';

    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Search or use voice...';
    input.setAttribute('aria-label', 'Search with voice input');
    wrapper.appendChild(input);

    const voiceBtn = document.createElement('button');
    voiceBtn.className = 'btn btn-sm btn-ghost';
    voiceBtn.setAttribute('aria-label', 'Voice search');
    voiceBtn.onclick = () => alert('Voice search activated');
    voiceBtn.appendChild(createMicIcon());
    wrapper.appendChild(voiceBtn);

    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);

    return container;
  }
};

export const WithKeyboardShortcut: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar';
    searchBar.style.position = 'relative';

    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'keyboard-search';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Search...';
    input.setAttribute('aria-label', 'Search with keyboard shortcut');
    wrapper.appendChild(input);

    // Keyboard hint badge
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

export const WithSearchSuggestions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar';
    searchBar.id = 'demo-search-suggestions';

    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Search components...';
    input.value = 'button';
    input.setAttribute('aria-label', 'Search with suggestions');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('aria-expanded', 'true');
    wrapper.appendChild(input);

    searchBar.appendChild(wrapper);

    // Suggestions dropdown
    const suggestionsWrapper = document.createElement('div');
    suggestionsWrapper.className = 'aural-search-bar__suggestions';
    searchBar.appendChild(suggestionsWrapper);

    container.appendChild(searchBar);

    // Search suggestions container (separate from search bar per docs)
    const suggestions = document.createElement('div');
    suggestions.className = 'search-suggestions';
    suggestions.style.cssText = `
      margin-top: var(--space-2);
      padding: var(--space-2);
      background: var(--color-bg-primary);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    `;

    const items = [
      { title: 'Button Component', description: 'Interactive button with variants' },
      { title: 'Button Group', description: 'Group related buttons together' },
      { title: 'Toggle Button', description: 'Button with on/off state' }
    ];

    items.forEach((item) => {
      const suggestionItem = document.createElement('div');
      suggestionItem.className = 'suggestion-item';
      suggestionItem.style.cssText = `
        display: flex;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-3);
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: background-color 0.15s ease;
      `;

      const content = document.createElement('div');
      content.style.cssText = 'flex: 1;';

      const title = document.createElement('div');
      title.style.cssText = 'font-weight: var(--font-medium); color: var(--color-text-primary);';
      title.innerHTML = item.title.replace(/button/gi, '<span class="suggestion-highlight" style="font-weight: var(--font-semibold); color: var(--color-primary);">$&</span>');

      const description = document.createElement('div');
      description.style.cssText = 'font-size: var(--text-sm); color: var(--color-text-tertiary);';
      description.textContent = item.description;

      content.appendChild(title);
      content.appendChild(description);
      suggestionItem.appendChild(content);
      suggestions.appendChild(suggestionItem);
    });

    container.appendChild(suggestions);

    return container;
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; display: flex; flex-direction: column; gap: var(--space-6); max-width: 600px;';

    const sizes = [
      { className: 'aural-search-bar aural-search-bar--sm', placeholder: 'Small search...', label: 'Small' },
      { className: 'aural-search-bar', placeholder: 'Default search...', label: 'Default' },
      { className: 'aural-search-bar aural-search-bar--lg', placeholder: 'Large search...', label: 'Large' }
    ];

    sizes.forEach(({ className, placeholder, label }) => {
      const wrapper = document.createElement('div');

      const labelEl = document.createElement('div');
      labelEl.textContent = label;
      labelEl.style.cssText = 'font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: var(--tracking-wide); margin-bottom: var(--space-4);';
      wrapper.appendChild(labelEl);

      const searchBar = document.createElement('div');
      searchBar.className = className;

      const searchWrapper = document.createElement('div');
      searchWrapper.className = 'aural-search-bar__wrapper';

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'aural-search-bar__icon';
      iconWrapper.appendChild(createSearchIcon());
      searchWrapper.appendChild(iconWrapper);

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'aural-search-bar__input';
      input.placeholder = placeholder;
      input.setAttribute('aria-label', `${label} search input`);
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
      searchBar.className = args.size === 'sm' ? 'aural-search-bar aural-search-bar--sm' :
                            args.size === 'lg' ? 'aural-search-bar aural-search-bar--lg' :
                            'aural-search-bar';

      const wrapper = document.createElement('div');
      wrapper.className = 'aural-search-bar__wrapper';

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'aural-search-bar__icon';
      iconWrapper.appendChild(createSearchIcon());
      wrapper.appendChild(iconWrapper);

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'aural-search-bar__input';
      input.placeholder = args.placeholder || 'Search...';
      input.value = args.value || '';
      input.disabled = args.disabled || false;
      input.setAttribute('aria-label', args.placeholder || 'Search');
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
    showClearButton: false,
    size: 'md'
  }
};
