import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Forms/Multi-Select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Multi-Select Component

A flexible multi-select component that allows users to select multiple items from a list with visual tags, search functionality, and keyboard navigation.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-multi-select" id="my-multi-select">
  <div class="aural-multi-select__trigger" tabindex="0" role="button" aria-haspopup="listbox">
    <div class="aural-multi-select__tags"></div>
    <span class="aural-multi-select__placeholder">Select items...</span>
    <span class="aural-multi-select__clear" aria-label="Clear all" role="button" tabindex="0">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </span>
    <span class="aural-multi-select__arrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </span>
  </div>
  <div class="aural-multi-select__dropdown">
    <div class="aural-multi-select__search">
      <input type="text" class="aural-multi-select__search-input" placeholder="Search...">
    </div>
    <div class="aural-multi-select__options">
      <button class="aural-multi-select__option" data-value="option1">
        <span class="aural-multi-select__checkbox">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span class="aural-multi-select__option-label">Option 1</span>
      </button>
    </div>
  </div>
</div>

<script>
Aural.initMultiSelect('my-multi-select', {
  searchable: true,
  onChange: (values) => console.log('Selected:', values)
});
</script>
\`\`\`

**React:**
\`\`\`jsx
const [selected, setSelected] = useState([]);
<MultiSelect options={options} value={selected} onChange={setSelected} />
\`\`\`

**Vue:**
\`\`\`vue
<MultiSelect v-model="selected" :options="options" />
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of option objects with value and label properties'
    },
    selected: {
      control: 'object',
      description: 'Array of selected values'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no items selected'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    searchable: {
      control: 'boolean',
      description: 'Enable search functionality'
    },
    maxHeight: {
      control: 'text',
      description: 'Maximum height of dropdown (CSS value)'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Component size'
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create multi-select HTML
function createMultiSelect(
  id: string,
  options: Array<{ value: string; label: string; group?: string }>,
  config: {
    placeholder?: string;
    searchable?: boolean;
    disabled?: boolean;
    size?: string;
    selected?: string[];
    maxHeight?: string;
  } = {}
): HTMLElement {
  const container = document.createElement('div');
  container.style.padding = '2rem';
  container.style.maxWidth = '500px';
  container.style.minHeight = '400px';

  const wrapper = document.createElement('div');
  wrapper.id = id;
  wrapper.className = 'aural-multi-select';
  if (config.disabled) wrapper.classList.add('aural-multi-select--disabled');

  // Trigger
  const trigger = document.createElement('div');
  trigger.className = 'aural-multi-select__trigger';
  trigger.setAttribute('tabindex', config.disabled ? '-1' : '0');
  trigger.setAttribute('role', 'button');
  trigger.setAttribute('aria-haspopup', 'listbox');

  const tagsContainer = document.createElement('div');
  tagsContainer.className = 'aural-multi-select__tags';

  const placeholder = document.createElement('span');
  placeholder.className = 'aural-multi-select__placeholder';
  placeholder.textContent = config.placeholder || 'Select items...';

  const clearBtn = document.createElement('span');
  clearBtn.className = 'aural-multi-select__clear';
  clearBtn.setAttribute('aria-label', 'Clear all');
  clearBtn.setAttribute('role', 'button');
  clearBtn.setAttribute('tabindex', '0');
  clearBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `;

  const arrow = document.createElement('span');
  arrow.className = 'aural-multi-select__arrow';
  arrow.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  `;

  trigger.appendChild(tagsContainer);
  trigger.appendChild(placeholder);
  trigger.appendChild(clearBtn);
  trigger.appendChild(arrow);

  // Dropdown
  const dropdown = document.createElement('div');
  dropdown.className = 'aural-multi-select__dropdown';
  if (config.maxHeight) {
    dropdown.style.maxHeight = config.maxHeight;
  }

  // Search input
  if (config.searchable) {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'aural-multi-select__search';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'aural-multi-select__search-input';
    searchInput.placeholder = 'Search...';

    searchContainer.appendChild(searchInput);
    dropdown.appendChild(searchContainer);
  }

  // Options container
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'aural-multi-select__options';

  // Group options if needed
  const groupedOptions = options.reduce((acc, option) => {
    const group = option.group || '__default__';
    if (!acc[group]) acc[group] = [];
    acc[group].push(option);
    return acc;
  }, {} as Record<string, typeof options>);

  Object.keys(groupedOptions).forEach((group) => {
    const groupOptions = groupedOptions[group];
    // Add group label if not default
    if (group !== '__default__') {
      const groupLabel = document.createElement('div');
      groupLabel.className = 'aural-multi-select__group-label';
      groupLabel.textContent = group;
      optionsContainer.appendChild(groupLabel);
    }

    // Add options
    groupOptions.forEach(option => {
      const optionBtn = document.createElement('button');
      optionBtn.className = 'aural-multi-select__option';
      optionBtn.setAttribute('data-value', option.value);
      optionBtn.type = 'button';

      const checkbox = document.createElement('span');
      checkbox.className = 'aural-multi-select__checkbox';
      checkbox.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      `;

      const label = document.createElement('span');
      label.className = 'aural-multi-select__option-label';
      label.textContent = option.label;

      optionBtn.appendChild(checkbox);
      optionBtn.appendChild(label);
      optionsContainer.appendChild(optionBtn);

      // Pre-select if in selected array
      if (config.selected?.includes(option.value)) {
        optionBtn.classList.add('aural-multi-select__option--selected');
      }
    });
  });

  dropdown.appendChild(optionsContainer);
  wrapper.appendChild(trigger);
  wrapper.appendChild(dropdown);
  container.appendChild(wrapper);

  // Initialize after render
  setTimeout(() => {
    if (typeof window.Aural !== 'undefined' && window.Aural.initMultiSelect) {
      window.Aural.initMultiSelect(id, {
        searchable: config.searchable,
        onChange: (values: string[]) => console.log('Selected:', values)
      });
    }
  }, 100);

  return container;
}

export const Default: Story = {
  render: () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
      { value: 'option5', label: 'Option 5' }
    ];

    return createMultiSelect('multi-select-default', options, {
      placeholder: 'Select items...',
      searchable: false
    });
  }
};

export const WithSearch: Story = {
  render: () => {
    const options = [
      { value: 'javascript', label: 'JavaScript' },
      { value: 'typescript', label: 'TypeScript' },
      { value: 'python', label: 'Python' },
      { value: 'rust', label: 'Rust' },
      { value: 'go', label: 'Go' },
      { value: 'java', label: 'Java' },
      { value: 'csharp', label: 'C#' },
      { value: 'php', label: 'PHP' },
      { value: 'ruby', label: 'Ruby' },
      { value: 'swift', label: 'Swift' }
    ];

    return createMultiSelect('multi-select-search', options, {
      placeholder: 'Search and select languages...',
      searchable: true
    });
  }
};

export const ManyOptions: Story = {
  render: () => {
    const options = Array.from({ length: 50 }, (_, i) => ({
      value: `item${i + 1}`,
      label: `Item ${i + 1}`
    }));

    return createMultiSelect('multi-select-many', options, {
      placeholder: 'Select from 50 options...',
      searchable: true,
      maxHeight: '300px'
    });
  }
};

export const PreSelected: Story = {
  render: () => {
    const options = [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'angular', label: 'Angular' },
      { value: 'svelte', label: 'Svelte' },
      { value: 'solid', label: 'Solid' }
    ];

    return createMultiSelect('multi-select-preselected', options, {
      placeholder: 'Select frameworks...',
      searchable: true,
      selected: ['react', 'vue']
    });
  }
};

export const WithGroups: Story = {
  render: () => {
    const options = [
      { value: 'orange', label: 'Orange', group: 'Citrus' },
      { value: 'lemon', label: 'Lemon', group: 'Citrus' },
      { value: 'lime', label: 'Lime', group: 'Citrus' },
      { value: 'strawberry', label: 'Strawberry', group: 'Berries' },
      { value: 'blueberry', label: 'Blueberry', group: 'Berries' },
      { value: 'raspberry', label: 'Raspberry', group: 'Berries' },
      { value: 'mango', label: 'Mango', group: 'Tropical' },
      { value: 'pineapple', label: 'Pineapple', group: 'Tropical' },
      { value: 'banana', label: 'Banana', group: 'Tropical' }
    ];

    return createMultiSelect('multi-select-groups', options, {
      placeholder: 'Select fruits...',
      searchable: true
    });
  }
};

export const SkillsSelector: Story = {
  render: () => {
    const options = [
      { value: 'html', label: 'HTML' },
      { value: 'css', label: 'CSS' },
      { value: 'js', label: 'JavaScript' },
      { value: 'ts', label: 'TypeScript' },
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'node', label: 'Node.js' },
      { value: 'sql', label: 'SQL' },
      { value: 'git', label: 'Git' },
      { value: 'docker', label: 'Docker' }
    ];

    return createMultiSelect('multi-select-skills', options, {
      placeholder: 'Select your skills...',
      searchable: true
    });
  }
};

export const TeamMemberSelector: Story = {
  render: () => {
    const options = [
      { value: 'sarah', label: 'Sarah Johnson' },
      { value: 'mike', label: 'Mike Chen' },
      { value: 'emily', label: 'Emily Rodriguez' },
      { value: 'alex', label: 'Alex Kumar' },
      { value: 'david', label: 'David Brown' },
      { value: 'lisa', label: 'Lisa Wang' }
    ];

    return createMultiSelect('multi-select-team', options, {
      placeholder: 'Assign to team members...',
      searchable: true
    });
  }
};

export const Disabled: Story = {
  render: () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ];

    return createMultiSelect('multi-select-disabled', options, {
      placeholder: 'Disabled multi-select',
      disabled: true,
      selected: ['option1', 'option2']
    });
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' }
      ];

      const wrapper = document.createElement('div');
      wrapper.id = `multi-select-theme-${Math.random().toString(36).substr(2, 9)}`;
      wrapper.className = 'aural-multi-select';

      // Trigger
      const trigger = document.createElement('div');
      trigger.className = 'aural-multi-select__trigger';
      trigger.setAttribute('tabindex', '0');
      trigger.setAttribute('role', 'button');
      trigger.setAttribute('aria-haspopup', 'listbox');

      const tagsContainer = document.createElement('div');
      tagsContainer.className = 'aural-multi-select__tags';

      // Add pre-selected tags
      if (args.selected && args.selected.length > 0) {
        args.selected.forEach((value: string) => {
          const option = options.find(opt => opt.value === value);
          if (option) {
            const tag = document.createElement('span');
            tag.className = 'aural-multi-select__tag';
            tag.innerHTML = `
              ${option.label}
              <button class="aural-multi-select__tag-remove" aria-label="Remove ${option.label}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            `;
            tagsContainer.appendChild(tag);
          }
        });
      }

      const placeholder = document.createElement('span');
      placeholder.className = 'aural-multi-select__placeholder';
      placeholder.textContent = args.placeholder || 'Select...';
      if (args.selected && args.selected.length > 0) {
        placeholder.style.display = 'none';
      }

      const clearBtn = document.createElement('span');
      clearBtn.className = 'aural-multi-select__clear';
      clearBtn.setAttribute('aria-label', 'Clear all');
      clearBtn.setAttribute('role', 'button');
      clearBtn.setAttribute('tabindex', '0');
      clearBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      `;

      const arrow = document.createElement('span');
      arrow.className = 'aural-multi-select__arrow';
      arrow.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      `;

      trigger.appendChild(tagsContainer);
      trigger.appendChild(placeholder);
      trigger.appendChild(clearBtn);
      trigger.appendChild(arrow);

      wrapper.appendChild(trigger);

      return wrapper;
    });
  },
  args: {
    placeholder: 'Select items...',
    selected: ['option1', 'option2']
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    selected: {
      control: 'object',
      description: 'Array of selected values'
    }
  }
};
