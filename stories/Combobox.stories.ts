import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Forms/Combobox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Combobox Component

A searchable dropdown component that combines an input field with a filterable list of options, enabling efficient selection from large datasets.

Use Combobox when users need to select from 20+ options where searching or filtering significantly improves findability. Unlike standard Select components, Combobox provides type-ahead autocomplete and real-time filtering, making it ideal for country selectors, user directories, product catalogs, and any scenario where scrolling through a long list would be inefficient.

Combobox components excel at reducing cognitive load by allowing users to type what they're looking for instead of visually scanning. They support both structured data (with labels and descriptions) and custom value creation, enabling flexible workflows for tags, categories, and free-form input scenarios.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-combobox" id="country-combobox">
  <div class="aural-combobox__wrapper">
    <input
      type="text"
      class="aural-combobox__input"
      id="country-input"
      placeholder="Search countries..."
      aria-label="Search countries"
      role="combobox"
      aria-expanded="false"
      aria-autocomplete="list"
      aria-controls="country-listbox"
    >
    <div class="aural-combobox__icons">
      <button class="aural-combobox__clear" aria-label="Clear selection">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="aural-combobox__spinner" aria-live="polite"></div>
      <button class="aural-combobox__arrow" aria-label="Toggle dropdown">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  </div>
  <div class="aural-combobox__dropdown">
    <div class="aural-combobox__options" id="country-listbox" role="listbox">
      <!-- Options rendered dynamically -->
    </div>
  </div>
</div>

<script>
  window.Aural.initCombobox('country-combobox', {
    options: [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' }
    ],
    searchable: true,
    onChange: (selected) => console.log('Selected:', selected)
  });
</script>
\`\`\`

**React:**
\`\`\`jsx
import { useState, useEffect, useRef } from 'react';

interface ComboboxOption {
  value: string;
  label: string;
  description?: string;
}

interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchable?: boolean;
  creatable?: boolean;
  onCreate?: (value: string) => void;
}

function Combobox({
  options,
  value,
  onChange,
  placeholder = 'Search...',
  searchable = true,
  creatable = false,
  onCreate
}: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);

  const filteredOptions = searchable
    ? options.filter(opt =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  useEffect(() => {
    if (isOpen && listboxRef.current) {
      const focusedOption = listboxRef.current.querySelector(
        \`[data-index="\${focusedIndex}"]\`
      ) as HTMLElement;
      focusedOption?.scrollIntoView({ block: 'nearest' });
    }
  }, [focusedIndex, isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(prev =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(prev =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          onChange(filteredOptions[focusedIndex].value);
          setIsOpen(false);
        } else if (creatable && searchQuery && onCreate) {
          onCreate(searchQuery);
          setSearchQuery('');
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  return (
    <div className="aural-combobox">
      <div className="aural-combobox__wrapper">
        <input
          ref={inputRef}
          type="text"
          className="aural-combobox__input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls="combobox-listbox"
          aria-activedescendant={
            focusedIndex >= 0 ? \`option-\${focusedIndex}\` : undefined
          }
        />
        <button
          className="aural-combobox__arrow"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle dropdown"
        >
          ▼
        </button>
      </div>
      {isOpen && (
        <div className="aural-combobox__dropdown">
          <div
            ref={listboxRef}
            className="aural-combobox__options"
            id="combobox-listbox"
            role="listbox"
          >
            {filteredOptions.map((option, index) => (
              <div
                key={option.value}
                id={\`option-\${index}\`}
                data-index={index}
                className={\`aural-combobox__option \${
                  focusedIndex === index ? 'focused' : ''
                }\`}
                role="option"
                aria-selected={value === option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                <span>{option.label}</span>
                {option.description && (
                  <span className="description">{option.description}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div class="aural-combobox" ref="comboboxRef">
    <div class="aural-combobox__wrapper">
      <input
        ref="inputRef"
        type="text"
        class="aural-combobox__input"
        v-model="searchQuery"
        @focus="isOpen = true"
        @keydown="handleKeyDown"
        :placeholder="placeholder"
        role="combobox"
        :aria-expanded="isOpen"
        aria-autocomplete="list"
        aria-controls="combobox-listbox"
        :aria-activedescendant="focusedIndex >= 0 ? \`option-\${focusedIndex}\` : undefined"
      />
      <button
        class="aural-combobox__arrow"
        @click="isOpen = !isOpen"
        aria-label="Toggle dropdown"
      >
        ▼
      </button>
    </div>
    <div v-if="isOpen" class="aural-combobox__dropdown">
      <div
        ref="listboxRef"
        class="aural-combobox__options"
        id="combobox-listbox"
        role="listbox"
      >
        <div
          v-for="(option, index) in filteredOptions"
          :key="option.value"
          :id="\`option-\${index}\`"
          :data-index="index"
          :class="['aural-combobox__option', { focused: focusedIndex === index }]"
          role="option"
          :aria-selected="modelValue === option.value"
          @click="selectOption(option)"
        >
          <span>{{ option.label }}</span>
          <span v-if="option.description" class="description">
            {{ option.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    modelValue: String,
    placeholder: { type: String, default: 'Search...' },
    searchable: { type: Boolean, default: true }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      isOpen: false,
      searchQuery: '',
      focusedIndex: -1
    };
  },
  computed: {
    filteredOptions() {
      if (!this.searchable) return this.options;
      const query = this.searchQuery.toLowerCase();
      return this.options.filter(opt =>
        opt.label.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('update:modelValue', option.value);
      this.isOpen = false;
    },
    handleKeyDown(e) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          this.isOpen = true;
          this.focusedIndex = this.focusedIndex < this.filteredOptions.length - 1
            ? this.focusedIndex + 1
            : 0;
          break;
        case 'ArrowUp':
          e.preventDefault();
          this.isOpen = true;
          this.focusedIndex = this.focusedIndex > 0
            ? this.focusedIndex - 1
            : this.filteredOptions.length - 1;
          break;
        case 'Enter':
          e.preventDefault();
          if (this.focusedIndex >= 0 && this.filteredOptions[this.focusedIndex]) {
            this.selectOption(this.filteredOptions[this.focusedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          this.isOpen = false;
          this.$refs.inputRef.blur();
          break;
      }
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (!this.$refs.comboboxRef.contains(e.target)) {
        this.isOpen = false;
      }
    });
  }
};
</script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { onMount } from 'svelte';

  export let options = [];
  export let value = '';
  export let placeholder = 'Search...';
  export let searchable = true;

  let isOpen = false;
  let searchQuery = '';
  let focusedIndex = -1;
  let comboboxRef;
  let inputRef;
  let listboxRef;

  $: filteredOptions = searchable
    ? options.filter(opt =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  $: if (isOpen && focusedIndex >= 0 && listboxRef) {
    const focusedOption = listboxRef.querySelector(\`[data-index="\${focusedIndex}"]\`);
    focusedOption?.scrollIntoView({ block: 'nearest' });
  }

  function selectOption(option) {
    value = option.value;
    isOpen = false;
  }

  function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        isOpen = true;
        focusedIndex = focusedIndex < filteredOptions.length - 1
          ? focusedIndex + 1
          : 0;
        break;
      case 'ArrowUp':
        e.preventDefault();
        isOpen = true;
        focusedIndex = focusedIndex > 0
          ? focusedIndex - 1
          : filteredOptions.length - 1;
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          selectOption(filteredOptions[focusedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        isOpen = false;
        inputRef?.blur();
        break;
    }
  }

  onMount(() => {
    const handleClickOutside = (e) => {
      if (comboboxRef && !comboboxRef.contains(e.target)) {
        isOpen = false;
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div class="aural-combobox" bind:this={comboboxRef}>
  <div class="aural-combobox__wrapper">
    <input
      bind:this={inputRef}
      type="text"
      class="aural-combobox__input"
      bind:value={searchQuery}
      on:focus={() => (isOpen = true)}
      on:keydown={handleKeyDown}
      {placeholder}
      role="combobox"
      aria-expanded={isOpen}
      aria-autocomplete="list"
      aria-controls="combobox-listbox"
      aria-activedescendant={focusedIndex >= 0 ? \`option-\${focusedIndex}\` : undefined}
    />
    <button
      class="aural-combobox__arrow"
      on:click={() => (isOpen = !isOpen)}
      aria-label="Toggle dropdown"
    >
      ▼
    </button>
  </div>
  {#if isOpen}
    <div class="aural-combobox__dropdown">
      <div
        bind:this={listboxRef}
        class="aural-combobox__options"
        id="combobox-listbox"
        role="listbox"
      >
        {#each filteredOptions as option, index}
          <div
            id="option-{index}"
            data-index={index}
            class="aural-combobox__option"
            class:focused={focusedIndex === index}
            role="option"
            aria-selected={value === option.value}
            on:click={() => selectOption(option)}
          >
            <span>{option.label}</span>
            {#if option.description}
              <span class="description">{option.description}</span>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
\`\`\`

## Accessibility

- **Use role="combobox"**: Apply to the input field to indicate the interactive autocomplete pattern to screen readers
- **Set aria-expanded**: Toggle between "true" (dropdown open) and "false" (dropdown closed) to announce state changes
- **Provide aria-autocomplete="list"**: Indicates that the component shows a list of suggestions as the user types
- **Link with aria-controls**: Connect the input to the listbox ID so screen readers understand the relationship
- **Use aria-activedescendant**: Set to the currently focused option ID for screen reader navigation tracking
- **Arrow key navigation**: Support Up/Down arrows to navigate options, with visual focus indicators (2px outline, 2px offset)
- **Enter to select**: Allow Enter key to select the focused option and close the dropdown
- **Escape to close**: Support Escape key to close the dropdown and return focus to the input
- **Clear button accessibility**: Provide aria-label="Clear selection" and ensure 44×44px minimum touch target
- **Loading states**: Use aria-live="polite" on spinner elements to announce async data loading to screen readers
- **Focus management**: Return focus to input after selection, ensure focus is visible with high-contrast outline
- **Type-ahead search**: Filter options in real-time as users type, with no lag (debounce if needed)
- **Keyboard shortcuts**: Support Home/End to jump to first/last option, Page Up/Down for faster navigation
- **Touch targets**: Ensure all interactive elements (clear button, dropdown arrow, options) meet 44×44px minimum size
- **Screen reader announcements**: Announce filtered results count ("5 results available") and selection changes

## Usage Guidelines

- **When to use:**
  - Selecting from 20+ options where searching improves findability
  - Country, state, or city selectors with many choices
  - User directories or contact lists with search functionality
  - Product catalogs or item pickers with filtering needs
  - Tag selection with autocomplete suggestions

- **When NOT to use:**
  - Fewer than 10 options: Use standard Select for simpler interaction
  - Free-form text input: Use regular Input field instead
  - Multiple selections needed: Use MultiSelect component
  - Binary choices: Use Radio buttons or Toggle switch

- **Best practices:**
  - Provide clear placeholder text that describes what to search for
  - Show the most relevant or popular options first before filtering
  - Display match highlighting to show which part of the label matched the search
  - Support both mouse and keyboard interaction equally well
  - Include option descriptions for similar-looking items (e.g., "Paris, France" vs "Paris, Texas")
  - Allow creation of custom values only when appropriate (tags, flexible categories)
  - Show loading indicators for async data fetching (spinner with aria-live)
  - Clear the search query after selection for quick subsequent searches

- **Mobile considerations:**
  - Use native OS input for better touch keyboard experience
  - Ensure dropdown doesn't exceed viewport height with scrollable list
  - Make touch targets large enough (44×44px minimum for buttons)
  - Consider bottom sheet pattern for dropdowns on small screens
  - Test with different keyboard types (search, text, default)

- **Search behavior:**
  - Filter options in real-time as users type (no submit button)
  - Support partial matching anywhere in the label (not just start)
  - Ignore case sensitivity for user-friendly matching
  - Show "No results found" message when filter returns empty
  - Highlight or bold the matching portion of results
        `.trim(),
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description:
        'Placeholder text shown in the input field when empty (e.g., "Search countries..." or "Type to filter...")',
    },
    label: {
      control: 'text',
      description:
        'Label text displayed above the combobox, should be associated via htmlFor/for attribute for accessibility',
    },
    disabled: {
      control: 'boolean',
      description:
        'Disabled state prevents all interaction and applies muted styling with 50% opacity and disabled cursor',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description:
        'Component size: sm (compact, 36px height), md (standard, 44px height), lg (prominent, 52px height)',
    },
    searchable: {
      control: 'boolean',
      description:
        'Enable real-time search/filter functionality as user types, filtering options by label match (case-insensitive)',
    },
    creatable: {
      control: 'boolean',
      description:
        'Allow users to create custom values not in the options list by pressing Enter on unmatched search query (useful for tags)',
    },
    loading: {
      control: 'boolean',
      description:
        'Loading state displays spinner icon during async data fetching, with aria-live announcement for screen readers',
    },
  },
};

export default meta;
type Story = StoryObj;

// Helper function to create combobox HTML structure
function createComboboxHTML(id: string, placeholder: string, size: string = 'md') {
  const sizeClass = size !== 'md' ? ` aural-combobox--${size}` : '';

  return `
    <div class="aural-combobox${sizeClass}" id="${id}">
      <div class="aural-combobox__wrapper">
        <input type="text" class="aural-combobox__input" id="${id}-input" placeholder="${placeholder}" aria-label="${placeholder}" role="combobox" aria-expanded="false" aria-autocomplete="list">
        <div class="aural-combobox__icons">
          <button class="aural-combobox__clear" aria-label="Clear selection">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div class="aural-combobox__spinner"></div>
          <button class="aural-combobox__arrow" aria-label="Toggle dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>
      </div>
      <div class="aural-combobox__dropdown">
        <div class="aural-combobox__options">
          <!-- Options rendered by JS -->
        </div>
      </div>
    </div>
  `;
}

export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '350px';

    if (args.label) {
      const label = document.createElement('label');
      label.className = 'form-label';
      label.textContent = args.label;
      label.htmlFor = 'combobox-default-input';
      container.appendChild(label);
    }

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-default', args.placeholder, args.size);
    container.appendChild(wrapper.firstElementChild as HTMLElement);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-default', {
          options: [
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'cherry', label: 'Cherry' },
            { value: 'grape', label: 'Grape' },
            { value: 'mango', label: 'Mango' },
            { value: 'orange', label: 'Orange' },
            { value: 'pineapple', label: 'Pineapple' },
            { value: 'strawberry', label: 'Strawberry' },
          ],
          searchable: args.searchable,
          onChange: (selected) => console.log('Selected:', selected),
        });
      }
    }, 100);

    return container;
  },
  args: {
    label: 'Select a Fruit',
    placeholder: 'Search fruits...',
    size: 'md',
    searchable: true,
    disabled: false,
  },
};

export const WithAutocomplete: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '350px';

    if (args.label) {
      const label = document.createElement('label');
      label.className = 'form-label';
      label.textContent = args.label;
      label.htmlFor = 'combobox-autocomplete-input';
      container.appendChild(label);
    }

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-autocomplete', args.placeholder, args.size);
    container.appendChild(wrapper.firstElementChild as HTMLElement);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-autocomplete', {
          options: [
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'ca', label: 'Canada' },
            { value: 'au', label: 'Australia' },
            { value: 'de', label: 'Germany' },
            { value: 'fr', label: 'France' },
            { value: 'jp', label: 'Japan' },
            { value: 'cn', label: 'China' },
          ],
          searchable: true,
          onChange: (selected) => console.log('Selected country:', selected),
        });
      }
    }, 100);

    return container;
  },
  args: {
    label: 'Select Country',
    placeholder: 'Type to autocomplete...',
    size: 'md',
    searchable: true,
  },
};

export const AllowCustomValue: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '400px';

    if (args.label) {
      const label = document.createElement('label');
      label.className = 'form-label';
      label.textContent = args.label;
      label.htmlFor = 'combobox-custom-input';
      container.appendChild(label);
    }

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-custom', args.placeholder, args.size);
    container.appendChild(wrapper.firstElementChild as HTMLElement);

    const helperText = document.createElement('div');
    helperText.style.marginTop = 'var(--space-2)';
    helperText.style.fontSize = 'var(--text-sm)';
    helperText.style.color = 'var(--color-text-tertiary)';
    helperText.textContent = 'Type a new tag name to create it';
    container.appendChild(helperText);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-custom', {
          options: [
            { value: 'design', label: 'Design' },
            { value: 'frontend', label: 'Frontend' },
            { value: 'backend', label: 'Backend' },
            { value: 'ui', label: 'UI' },
            { value: 'ux', label: 'UX' },
          ],
          searchable: true,
          creatable: args.creatable,
          onCreate: (value) => {
            console.log('Created new tag:', value);
          },
          onChange: (selected) => console.log('Selected tag:', selected),
        });
      }
    }, 100);

    return container;
  },
  args: {
    label: 'Add Tag',
    placeholder: 'Search or create new tag...',
    size: 'md',
    creatable: true,
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '400px';

    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Search Products';
    label.htmlFor = 'combobox-descriptions-input';
    container.appendChild(label);

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-descriptions', 'Search products...');
    container.appendChild(wrapper.firstElementChild as HTMLElement);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-descriptions', {
          options: [
            { value: 'prod1', label: 'Wireless Headphones', description: 'SKU: WH-001 | $99.99' },
            { value: 'prod2', label: 'Laptop Stand', description: 'SKU: LS-045 | $49.99' },
            { value: 'prod3', label: 'USB-C Hub', description: 'SKU: UH-782 | $79.99' },
            { value: 'prod4', label: 'Mechanical Keyboard', description: 'SKU: MK-321 | $129.99' },
            { value: 'prod5', label: 'Webcam HD', description: 'SKU: WC-445 | $89.99' },
          ],
          searchable: true,
          onChange: (selected) => console.log('Selected product:', selected),
        });
      }
    }, 100);

    return container;
  },
};

export const SearchCallback: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '400px';

    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Search with Callback';
    label.htmlFor = 'combobox-search-input';
    container.appendChild(label);

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-search', 'Type to search...');
    container.appendChild(wrapper.firstElementChild as HTMLElement);

    const helperText = document.createElement('div');
    helperText.style.marginTop = 'var(--space-2)';
    helperText.style.fontSize = 'var(--text-sm)';
    helperText.style.color = 'var(--color-text-tertiary)';
    helperText.textContent = 'Search callback logs to console';
    container.appendChild(helperText);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-search', {
          options: [
            { value: 'user1', label: 'John Smith', description: 'john@example.com' },
            { value: 'user2', label: 'Jane Doe', description: 'jane@example.com' },
            { value: 'user3', label: 'Bob Johnson', description: 'bob@example.com' },
            { value: 'user4', label: 'Alice Williams', description: 'alice@example.com' },
          ],
          searchable: true,
          onSearch: (query, filteredResults) => {
            console.log('Search query:', query);
            console.log('Filtered results:', filteredResults);
          },
          onChange: (selected) => console.log('Selected:', selected),
        });
      }
    }, 100);

    return container;
  },
};

export const CityLocation: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '400px';

    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Select City';
    label.htmlFor = 'combobox-city-input';
    container.appendChild(label);

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-city', 'Search cities...');
    container.appendChild(wrapper.firstElementChild as HTMLElement);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-city', {
          options: [
            { value: 'nyc', label: 'New York City', description: 'New York, United States' },
            { value: 'london', label: 'London', description: 'England, United Kingdom' },
            { value: 'tokyo', label: 'Tokyo', description: 'Kanto, Japan' },
            { value: 'paris', label: 'Paris', description: 'Île-de-France, France' },
            { value: 'sydney', label: 'Sydney', description: 'New South Wales, Australia' },
            { value: 'berlin', label: 'Berlin', description: 'Berlin, Germany' },
            { value: 'toronto', label: 'Toronto', description: 'Ontario, Canada' },
          ],
          searchable: true,
          onChange: (selected) => console.log('Selected city:', selected),
        });
      }
    }, 100);

    return container;
  },
};

export const Disabled: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '250px';

    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Disabled Combobox';
    label.htmlFor = 'combobox-disabled-input';
    container.appendChild(label);

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-disabled', 'Cannot interact...');
    container.appendChild(wrapper.firstElementChild as HTMLElement);

    // Set disabled state
    setTimeout(() => {
      const input = container.querySelector('.aural-combobox__input') as HTMLInputElement;
      if (input) {
        input.disabled = true;
      }
    }, 0);

    return container;
  },
};

export const PreFilled: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '350px';

    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Pre-filled Selection';
    label.htmlFor = 'combobox-prefilled-input';
    container.appendChild(label);

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-prefilled', 'Search fruits...');
    container.appendChild(wrapper.firstElementChild as HTMLElement);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-prefilled', {
          options: [
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'cherry', label: 'Cherry' },
            { value: 'mango', label: 'Mango' },
          ],
          searchable: true,
          defaultValue: 'banana',
          onChange: (selected) => console.log('Selected:', selected),
        });
      }
    }, 100);

    return container;
  },
};

export const AsyncLoading: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '400px';

    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Async Data Loading';
    label.htmlFor = 'combobox-async-input';
    container.appendChild(label);

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-async', 'Search users...');
    container.appendChild(wrapper.firstElementChild as HTMLElement);

    const helperText = document.createElement('div');
    helperText.style.marginTop = 'var(--space-2)';
    helperText.style.fontSize = 'var(--text-sm)';
    helperText.style.color = 'var(--color-text-tertiary)';
    helperText.textContent = 'Simulates async data loading with spinner';
    container.appendChild(helperText);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        const combobox = document.getElementById('combobox-async');
        const spinner = combobox?.querySelector('.aural-combobox__spinner');

        // Show loading spinner
        if (args.loading && spinner) {
          (spinner as HTMLElement).style.display = 'block';
        }

        // Simulate async data load
        setTimeout(
          () => {
            if (spinner) {
              (spinner as HTMLElement).style.display = 'none';
            }

            window.Aural.initCombobox('combobox-async', {
              options: [
                { value: 'user1', label: 'John Smith', description: 'john@example.com' },
                { value: 'user2', label: 'Jane Doe', description: 'jane@example.com' },
                { value: 'user3', label: 'Bob Johnson', description: 'bob@example.com' },
                { value: 'user4', label: 'Alice Williams', description: 'alice@example.com' },
              ],
              searchable: true,
              onChange: (selected) => console.log('Selected user:', selected),
            });
          },
          args.loading ? 2000 : 0
        );
      }
    }, 100);

    return container;
  },
  args: {
    loading: true,
  },
};

export const Small: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '350px';
    container.style.minHeight = '300px';

    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Small Size';
    label.htmlFor = 'combobox-small-input';
    container.appendChild(label);

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-small', 'Small combobox...', 'sm');
    container.appendChild(wrapper.firstElementChild as HTMLElement);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-small', {
          options: [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ],
          searchable: true,
          onChange: (selected) => console.log('Selected:', selected),
        });
      }
    }, 100);

    return container;
  },
};

export const Large: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '500px';
    container.style.minHeight = '350px';

    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Large Size';
    label.htmlFor = 'combobox-large-input';
    container.appendChild(label);

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-large', 'Large combobox...', 'lg');
    container.appendChild(wrapper.firstElementChild as HTMLElement);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-large', {
          options: [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ],
          searchable: true,
          onChange: (selected) => console.log('Selected:', selected),
        });
      }
    }, 100);

    return container;
  },
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid((theme) => {
      const wrapper = document.createElement('div');
      const id = `combobox-theme-${theme}`;

      wrapper.innerHTML = createComboboxHTML(id, args.placeholder, args.size);

      setTimeout(() => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.initCombobox(id, {
            options: [
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
              { value: 'cherry', label: 'Cherry' },
              { value: 'grape', label: 'Grape' },
            ],
            searchable: true,
            onChange: (selected) => console.log(`${theme} selected:`, selected),
          });
        }
      }, 100);

      return wrapper.firstElementChild as HTMLElement;
    });
  },
  args: {
    placeholder: 'Search fruits...',
    size: 'md',
  },
};
