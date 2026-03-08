import{c as ae}from"./createThemeGrid-DWAncU4Q.js";const oe={title:"Components/Forms/Multi-Select",tags:["autodocs"],parameters:{docs:{description:{component:`
# Multi-Select Component

A flexible multi-selection dropdown that allows users to choose multiple items from a list, displayed as removable chips with search and keyboard navigation.

Use Multi-Select when users need to select multiple options from a predefined list, such as assigning tasks to team members, selecting tags/categories, choosing skills, or applying multiple filters. Unlike Checkbox groups, Multi-Select saves vertical space by collapsing options into a dropdown, making it ideal for forms with 10+ options.

Multi-Select components combine the space efficiency of dropdowns with the clarity of chip-based selection indicators. Selected items appear as removable tags/chips, providing visual confirmation and easy removal. The search functionality enables quick filtering in long lists, while keyboard shortcuts allow power users to add and remove selections efficiently without touching the mouse.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-multi-select" id="skills-select">
  <!-- Trigger with chips display -->
  <div class="aural-multi-select__trigger" tabindex="0" role="button" aria-haspopup="listbox" aria-expanded="false">
    <div class="aural-multi-select__tags">
      <!-- Selected chips rendered dynamically -->
      <span class="aural-multi-select__tag">
        JavaScript
        <button class="aural-multi-select__tag-remove" aria-label="Remove JavaScript">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </span>
    </div>
    <span class="aural-multi-select__placeholder">Select skills...</span>
    <span class="aural-multi-select__clear" aria-label="Clear all selections" role="button" tabindex="0">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </span>
    <span class="aural-multi-select__arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </span>
  </div>

  <!-- Dropdown with search and options -->
  <div class="aural-multi-select__dropdown" hidden>
    <div class="aural-multi-select__search">
      <input
        type="text"
        class="aural-multi-select__search-input"
        placeholder="Search..."
        aria-label="Search options"
      >
    </div>
    <div class="aural-multi-select__options" role="listbox" aria-multiselectable="true">
      <button
        class="aural-multi-select__option"
        data-value="javascript"
        role="option"
        aria-selected="true"
      >
        <span class="aural-multi-select__checkbox" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span class="aural-multi-select__option-label">JavaScript</span>
      </button>
      <!-- More options... -->
    </div>
  </div>
</div>

<script>
  window.Aural.initMultiSelect('skills-select', {
    options: [
      { value: 'javascript', label: 'JavaScript' },
      { value: 'typescript', label: 'TypeScript' },
      { value: 'react', label: 'React' }
    ],
    searchable: true,
    maxSelections: 5,
    onChange: (values) => console.log('Selected:', values)
  });
<\/script>
\`\`\`

**React:**
\`\`\`jsx
import { useState, useRef, useEffect } from 'react';

interface MultiSelectOption {
  value: string;
  label: string;
  group?: string;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  value: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  searchable?: boolean;
  maxSelections?: number;
  disabled?: boolean;
}

function MultiSelect({
  options,
  value,
  onChange,
  placeholder = 'Select items...',
  searchable = true,
  maxSelections,
  disabled = false
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredOptions = searchable
    ? options.filter(opt =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  const selectedOptions = options.filter(opt => value.includes(opt.value));

  const toggleOption = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter(v => v !== optionValue));
    } else {
      if (!maxSelections || value.length < maxSelections) {
        onChange([...value, optionValue]);
      }
    }
  };

  const removeOption = (optionValue: string) => {
    onChange(value.filter(v => v !== optionValue));
  };

  const clearAll = () => {
    onChange([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

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
          toggleOption(filteredOptions[focusedIndex].value);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      case 'Backspace':
        if (!searchQuery && value.length > 0) {
          // Remove last selected item
          removeOption(value[value.length - 1]);
        }
        break;
    }
  };

  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="aural-multi-select" ref={dropdownRef}>
      <div
        className="aural-multi-select__trigger"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        tabIndex={disabled ? -1 : 0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        <div className="aural-multi-select__tags">
          {selectedOptions.map((option) => (
            <span key={option.value} className="aural-multi-select__tag">
              {option.label}
              <button
                className="aural-multi-select__tag-remove"
                onClick={(e) => {
                  e.stopPropagation();
                  removeOption(option.value);
                }}
                aria-label={\`Remove \${option.label}\`}
                disabled={disabled}
              >
                ×
              </button>
            </span>
          ))}
        </div>
        {value.length === 0 && (
          <span className="aural-multi-select__placeholder">{placeholder}</span>
        )}
        {value.length > 0 && !disabled && (
          <button
            className="aural-multi-select__clear"
            onClick={(e) => {
              e.stopPropagation();
              clearAll();
            }}
            aria-label="Clear all selections"
          >
            ×
          </button>
        )}
        <span className="aural-multi-select__arrow" aria-hidden="true">▼</span>
      </div>

      {isOpen && (
        <div className="aural-multi-select__dropdown">
          {searchable && (
            <div className="aural-multi-select__search">
              <input
                ref={searchRef}
                type="text"
                className="aural-multi-select__search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
                aria-label="Search options"
              />
            </div>
          )}
          <div className="aural-multi-select__options" role="listbox" aria-multiselectable="true">
            {filteredOptions.length === 0 ? (
              <div className="aural-multi-select__no-results">No results found</div>
            ) : (
              filteredOptions.map((option, index) => (
                <button
                  key={option.value}
                  className={\`aural-multi-select__option \${
                    value.includes(option.value) ? 'aural-multi-select__option--selected' : ''
                  } \${focusedIndex === index ? 'aural-multi-select__option--focused' : ''}\`}
                  onClick={() => toggleOption(option.value)}
                  role="option"
                  aria-selected={value.includes(option.value)}
                >
                  <span className="aural-multi-select__checkbox" aria-hidden="true">
                    {value.includes(option.value) && '✓'}
                  </span>
                  <span className="aural-multi-select__option-label">{option.label}</span>
                </button>
              ))
            )}
          </div>
          {maxSelections && (
            <div className="aural-multi-select__footer">
              {value.length} of {maxSelections} selected
            </div>
          )}
        </div>
      )}
    </div>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div class="aural-multi-select" ref="dropdownRef">
    <div
      class="aural-multi-select__trigger"
      @click="!disabled && (isOpen = !isOpen)"
      :tabindex="disabled ? -1 : 0"
      role="button"
      aria-haspopup="listbox"
      :aria-expanded="isOpen"
      :aria-disabled="disabled"
    >
      <div class="aural-multi-select__tags">
        <span
          v-for="option in selectedOptions"
          :key="option.value"
          class="aural-multi-select__tag"
        >
          {{ option.label }}
          <button
            class="aural-multi-select__tag-remove"
            @click.stop="removeOption(option.value)"
            :aria-label="\`Remove \${option.label}\`"
            :disabled="disabled"
          >
            ×
          </button>
        </span>
      </div>
      <span v-if="modelValue.length === 0" class="aural-multi-select__placeholder">
        {{ placeholder }}
      </span>
      <button
        v-if="modelValue.length > 0 && !disabled"
        class="aural-multi-select__clear"
        @click.stop="clearAll"
        aria-label="Clear all selections"
      >
        ×
      </button>
      <span class="aural-multi-select__arrow" aria-hidden="true">▼</span>
    </div>

    <div v-if="isOpen" class="aural-multi-select__dropdown">
      <div v-if="searchable" class="aural-multi-select__search">
        <input
          ref="searchRef"
          type="text"
          class="aural-multi-select__search-input"
          v-model="searchQuery"
          @keydown="handleKeyDown"
          placeholder="Search..."
          aria-label="Search options"
        />
      </div>
      <div class="aural-multi-select__options" role="listbox" aria-multiselectable="true">
        <div v-if="filteredOptions.length === 0" class="aural-multi-select__no-results">
          No results found
        </div>
        <button
          v-for="(option, index) in filteredOptions"
          :key="option.value"
          :class="[
            'aural-multi-select__option',
            { 'aural-multi-select__option--selected': modelValue.includes(option.value) },
            { 'aural-multi-select__option--focused': focusedIndex === index }
          ]"
          @click="toggleOption(option.value)"
          role="option"
          :aria-selected="modelValue.includes(option.value)"
        >
          <span class="aural-multi-select__checkbox" aria-hidden="true">
            {{ modelValue.includes(option.value) ? '✓' : '' }}
          </span>
          <span class="aural-multi-select__option-label">{{ option.label }}</span>
        </button>
      </div>
      <div v-if="maxSelections" class="aural-multi-select__footer">
        {{ modelValue.length }} of {{ maxSelections }} selected
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    modelValue: { type: Array, default: () => [] },
    placeholder: { type: String, default: 'Select items...' },
    searchable: { type: Boolean, default: true },
    maxSelections: Number,
    disabled: { type: Boolean, default: false }
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
    },
    selectedOptions() {
      return this.options.filter(opt => this.modelValue.includes(opt.value));
    }
  },
  methods: {
    toggleOption(value) {
      if (this.modelValue.includes(value)) {
        this.$emit('update:modelValue', this.modelValue.filter(v => v !== value));
      } else {
        if (!this.maxSelections || this.modelValue.length < this.maxSelections) {
          this.$emit('update:modelValue', [...this.modelValue, value]);
        }
      }
    },
    removeOption(value) {
      this.$emit('update:modelValue', this.modelValue.filter(v => v !== value));
    },
    clearAll() {
      this.$emit('update:modelValue', []);
    },
    handleKeyDown(e) {
      if (this.disabled) return;
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          this.focusedIndex = this.focusedIndex < this.filteredOptions.length - 1
            ? this.focusedIndex + 1
            : 0;
          break;
        case 'ArrowUp':
          e.preventDefault();
          this.focusedIndex = this.focusedIndex > 0
            ? this.focusedIndex - 1
            : this.filteredOptions.length - 1;
          break;
        case 'Enter':
          e.preventDefault();
          if (this.focusedIndex >= 0 && this.filteredOptions[this.focusedIndex]) {
            this.toggleOption(this.filteredOptions[this.focusedIndex].value);
          }
          break;
        case 'Escape':
          e.preventDefault();
          this.isOpen = false;
          break;
        case 'Backspace':
          if (!this.searchQuery && this.modelValue.length > 0) {
            this.removeOption(this.modelValue[this.modelValue.length - 1]);
          }
          break;
      }
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal && this.$refs.searchRef) {
        this.$nextTick(() => this.$refs.searchRef.focus());
      }
    }
  },
  mounted() {
    const handleClickOutside = (e) => {
      if (this.$refs.dropdownRef && !this.$refs.dropdownRef.contains(e.target)) {
        this.isOpen = false;
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('mousedown', handleClickOutside);
    });
  }
};
<\/script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { onMount } from 'svelte';

  export let options = [];
  export let value = [];
  export let placeholder = 'Select items...';
  export let searchable = true;
  export let maxSelections = undefined;
  export let disabled = false;

  let isOpen = false;
  let searchQuery = '';
  let focusedIndex = -1;
  let dropdownRef;
  let searchRef;

  $: filteredOptions = searchable
    ? options.filter(opt =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  $: selectedOptions = options.filter(opt => value.includes(opt.value));

  function toggleOption(optionValue) {
    if (value.includes(optionValue)) {
      value = value.filter(v => v !== optionValue);
    } else {
      if (!maxSelections || value.length < maxSelections) {
        value = [...value, optionValue];
      }
    }
  }

  function removeOption(optionValue) {
    value = value.filter(v => v !== optionValue);
  }

  function clearAll() {
    value = [];
  }

  function handleKeyDown(e) {
    if (disabled) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        focusedIndex = focusedIndex < filteredOptions.length - 1
          ? focusedIndex + 1
          : 0;
        break;
      case 'ArrowUp':
        e.preventDefault();
        focusedIndex = focusedIndex > 0
          ? focusedIndex - 1
          : filteredOptions.length - 1;
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          toggleOption(filteredOptions[focusedIndex].value);
        }
        break;
      case 'Escape':
        e.preventDefault();
        isOpen = false;
        break;
      case 'Backspace':
        if (!searchQuery && value.length > 0) {
          removeOption(value[value.length - 1]);
        }
        break;
    }
  }

  $: if (isOpen && searchRef) {
    searchRef.focus();
  }

  onMount(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef && !dropdownRef.contains(e.target)) {
        isOpen = false;
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });
<\/script>

<div class="aural-multi-select" bind:this={dropdownRef}>
  <div
    class="aural-multi-select__trigger"
    on:click={() => !disabled && (isOpen = !isOpen)}
    tabindex={disabled ? -1 : 0}
    role="button"
    aria-haspopup="listbox"
    aria-expanded={isOpen}
    aria-disabled={disabled}
  >
    <div class="aural-multi-select__tags">
      {#each selectedOptions as option (option.value)}
        <span class="aural-multi-select__tag">
          {option.label}
          <button
            class="aural-multi-select__tag-remove"
            on:click|stopPropagation={() => removeOption(option.value)}
            aria-label="Remove {option.label}"
            {disabled}
          >
            ×
          </button>
        </span>
      {/each}
    </div>
    {#if value.length === 0}
      <span class="aural-multi-select__placeholder">{placeholder}</span>
    {/if}
    {#if value.length > 0 && !disabled}
      <button
        class="aural-multi-select__clear"
        on:click|stopPropagation={clearAll}
        aria-label="Clear all selections"
      >
        ×
      </button>
    {/if}
    <span class="aural-multi-select__arrow" aria-hidden="true">▼</span>
  </div>

  {#if isOpen}
    <div class="aural-multi-select__dropdown">
      {#if searchable}
        <div class="aural-multi-select__search">
          <input
            bind:this={searchRef}
            type="text"
            class="aural-multi-select__search-input"
            bind:value={searchQuery}
            on:keydown={handleKeyDown}
            placeholder="Search..."
            aria-label="Search options"
          />
        </div>
      {/if}
      <div class="aural-multi-select__options" role="listbox" aria-multiselectable="true">
        {#if filteredOptions.length === 0}
          <div class="aural-multi-select__no-results">No results found</div>
        {:else}
          {#each filteredOptions as option, index (option.value)}
            <button
              class="aural-multi-select__option"
              class:aural-multi-select__option--selected={value.includes(option.value)}
              class:aural-multi-select__option--focused={focusedIndex === index}
              on:click={() => toggleOption(option.value)}
              role="option"
              aria-selected={value.includes(option.value)}
            >
              <span class="aural-multi-select__checkbox" aria-hidden="true">
                {value.includes(option.value) ? '✓' : ''}
              </span>
              <span class="aural-multi-select__option-label">{option.label}</span>
            </button>
          {/each}
        {/if}
      </div>
      {#if maxSelections}
        <div class="aural-multi-select__footer">
          {value.length} of {maxSelections} selected
        </div>
      {/if}
    </div>
  {/if}
</div>
\`\`\`

## Accessibility

- **Use role="listbox"**: Apply to options container with aria-multiselectable="true" for multi-selection support
- **Set aria-selected**: Mark each option as selected/unselected to announce state to screen readers
- **Provide aria-haspopup="listbox"**: Indicate that the trigger opens a selectable list
- **Toggle aria-expanded**: Switch between "true" (dropdown open) and "false" (dropdown closed) for state announcements
- **Arrow key navigation**: Support Up/Down arrows to navigate options, with visual focus indicators (2px outline, 2px offset)
- **Space to toggle**: Allow Space key to toggle selection of focused option without closing dropdown
- **Enter to toggle**: Support Enter key as alternative to Space for toggling options
- **Escape to close**: Close dropdown and return focus to trigger with Escape key
- **Backspace to remove**: Remove last selected chip when search is empty and Backspace is pressed
- **Clear button accessibility**: Provide aria-label="Clear all selections" with 44×44px minimum touch target
- **Chip remove buttons**: Each chip remove button needs aria-label with item name ("Remove JavaScript")
- **Search input**: Include aria-label="Search options" for screen reader context
- **Focus management**: Move focus to search input when dropdown opens, return to trigger when closed
- **Selection count**: Announce count updates via aria-live="polite" ("3 of 5 selected")
- **Keyboard shortcuts**: Support Ctrl+A to select all visible options, Ctrl+D to deselect all
- **Touch targets**: Ensure all interactive elements (chips, remove buttons, options) meet 44×44px minimum

## Usage Guidelines

- **When to use:**
  - Selecting multiple items from 10+ options (skills, tags, team members)
  - Assigning tasks or content to multiple categories simultaneously
  - Applying multiple filters to data tables or search results
  - Choosing recipients for emails or notifications (user lists)
  - Building tag systems or keyword selectors with many options

- **When NOT to use:**
  - Fewer than 5 options: Use Checkbox group for better scannability
  - Single selection needed: Use standard Select or Combobox
  - Unlimited free-form input: Use Tag Input component instead
  - Binary selections: Use Toggle switches or Checkbox group

- **Best practices:**
  - Show selected items as removable chips/tags for clear visual confirmation
  - Enable search functionality when options exceed 15 items
  - Set maximum selection limits when appropriate (e.g., "Select up to 5 skills")
  - Display selection count indicator ("3 of 5 selected") when max limit exists
  - Provide "Clear all" button for quick deselection of multiple items
  - Order options logically (alphabetical, most common first, or grouped by category)
  - Show "No results found" message when search filter returns empty
  - Keep chip labels concise to prevent horizontal overflow

- **Mobile considerations:**
  - Use larger touch targets for chips and remove buttons (min 44×44px)
  - Consider bottom sheet pattern for dropdown on small screens
  - Make chips wrap to multiple lines instead of horizontal scrolling
  - Ensure search input has appropriate keyboard type (text, search)
  - Test dropdown height doesn't exceed viewport (use scrollable list)

- **Maximum selections:**
  - Set maxSelections prop to enforce limits (e.g., "Select 3-5 skills")
  - Disable unselected options when maximum is reached
  - Show clear feedback: "Maximum 5 selections" or "3 of 5 selected"
  - Allow removal of selected items to make room for new selections
  - Consider using validation message if user tries to exceed limit
        `.trim()}}},argTypes:{options:{control:"object",description:"Array of option objects with value and label properties ({ value: string, label: string, group?: string }), can include optional group for categorization"},selected:{control:"object",description:'Array of currently selected option values (e.g., ["option1", "option2"]), displayed as removable chips in the trigger'},placeholder:{control:"text",description:'Placeholder text displayed in the trigger when no items are selected (e.g., "Select skills..." or "Choose team members...")'},disabled:{control:"boolean",description:"Disabled state prevents all interaction, applies muted styling with 50% opacity, and disables chip remove buttons"},searchable:{control:"boolean",description:"Enable real-time search/filter functionality with search input at top of dropdown for finding options by label (case-insensitive)"},maxHeight:{control:"text",description:'Maximum height of dropdown options list in CSS units (e.g., "300px", "20rem"), applies scrollbar when exceeded'},size:{control:"select",options:["sm","md","lg"],description:"Component size: sm (compact, 36px height), md (standard, 44px height), lg (prominent, 52px height)"}}};function p(e,v,t={}){const l=document.createElement("div");l.style.padding="2rem",l.style.maxWidth="500px",l.style.minHeight="400px";const i=document.createElement("div");i.id=e,i.className="aural-multi-select",t.disabled&&i.classList.add("aural-multi-select--disabled");const a=document.createElement("div");a.className="aural-multi-select__trigger",a.setAttribute("tabindex",t.disabled?"-1":"0"),a.setAttribute("role","button"),a.setAttribute("aria-haspopup","listbox");const c=document.createElement("div");c.className="aural-multi-select__tags";const d=document.createElement("span");d.className="aural-multi-select__placeholder",d.textContent=t.placeholder||"Select items...";const u=document.createElement("span");u.className="aural-multi-select__clear",u.setAttribute("aria-label","Clear all"),u.setAttribute("role","button"),u.setAttribute("tabindex","0"),u.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `;const m=document.createElement("span");m.className="aural-multi-select__arrow",m.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  `,a.appendChild(c),a.appendChild(d),a.appendChild(u),a.appendChild(m);const o=document.createElement("div");if(o.className="aural-multi-select__dropdown",t.maxHeight&&(o.style.maxHeight=t.maxHeight),t.searchable){const s=document.createElement("div");s.className="aural-multi-select__search";const r=document.createElement("input");r.type="text",r.className="aural-multi-select__search-input",r.placeholder="Search...",r.setAttribute("aria-label","Search options"),s.appendChild(r),o.appendChild(s)}const b=document.createElement("div");b.className="aural-multi-select__options";const A=v.reduce((s,r)=>{const n=r.group||"__default__";return s[n]||(s[n]=[]),s[n].push(r),s},{});return Object.keys(A).forEach(s=>{const r=A[s];if(s!=="__default__"){const n=document.createElement("div");n.className="aural-multi-select__group-label",n.textContent=s,b.appendChild(n)}r.forEach(n=>{var M;const h=document.createElement("button");h.className="aural-multi-select__option",h.setAttribute("data-value",n.value),h.type="button";const O=document.createElement("span");O.className="aural-multi-select__checkbox",O.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      `;const E=document.createElement("span");E.className="aural-multi-select__option-label",E.textContent=n.label,h.appendChild(O),h.appendChild(E),b.appendChild(h),(M=t.selected)!=null&&M.includes(n.value)&&h.classList.add("aural-multi-select__option--selected")})}),o.appendChild(b),i.appendChild(a),i.appendChild(o),l.appendChild(i),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initMultiSelect&&window.Aural.initMultiSelect(e,{searchable:t.searchable,onChange:s=>console.log("Selected:",s)})},100),l}const g={render:()=>p("multi-select-default",[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}],{placeholder:"Select items...",searchable:!1})},f={render:()=>p("multi-select-search",[{value:"javascript",label:"JavaScript"},{value:"typescript",label:"TypeScript"},{value:"python",label:"Python"},{value:"rust",label:"Rust"},{value:"go",label:"Go"},{value:"java",label:"Java"},{value:"csharp",label:"C#"},{value:"php",label:"PHP"},{value:"ruby",label:"Ruby"},{value:"swift",label:"Swift"}],{placeholder:"Search and select languages...",searchable:!0})},_={render:()=>{const e=Array.from({length:50},(v,t)=>({value:`item${t+1}`,label:`Item ${t+1}`}));return p("multi-select-many",e,{placeholder:"Select from 50 options...",searchable:!0,maxHeight:"300px"})}},x={render:()=>p("multi-select-preselected",[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],{placeholder:"Select frameworks...",searchable:!0,selected:["react","vue"]})},w={render:()=>p("multi-select-groups",[{value:"orange",label:"Orange",group:"Citrus"},{value:"lemon",label:"Lemon",group:"Citrus"},{value:"lime",label:"Lime",group:"Citrus"},{value:"strawberry",label:"Strawberry",group:"Berries"},{value:"blueberry",label:"Blueberry",group:"Berries"},{value:"raspberry",label:"Raspberry",group:"Berries"},{value:"mango",label:"Mango",group:"Tropical"},{value:"pineapple",label:"Pineapple",group:"Tropical"},{value:"banana",label:"Banana",group:"Tropical"}],{placeholder:"Select fruits...",searchable:!0})},y={render:()=>p("multi-select-skills",[{value:"html",label:"HTML"},{value:"css",label:"CSS"},{value:"js",label:"JavaScript"},{value:"ts",label:"TypeScript"},{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"node",label:"Node.js"},{value:"sql",label:"SQL"},{value:"git",label:"Git"},{value:"docker",label:"Docker"}],{placeholder:"Select your skills...",searchable:!0})},S={render:()=>p("multi-select-team",[{value:"sarah",label:"Sarah Johnson"},{value:"mike",label:"Mike Chen"},{value:"emily",label:"Emily Rodriguez"},{value:"alex",label:"Alex Kumar"},{value:"david",label:"David Brown"},{value:"lisa",label:"Lisa Wang"}],{placeholder:"Assign to team members...",searchable:!0})},k={render:()=>p("multi-select-disabled",[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],{placeholder:"Disabled multi-select",disabled:!0,selected:["option1","option2"]})},C={render:e=>ae(()=>{const v=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],t=document.createElement("div");t.id=`multi-select-theme-${Math.random().toString(36).substr(2,9)}`,t.className="aural-multi-select";const l=document.createElement("div");l.className="aural-multi-select__trigger",l.setAttribute("tabindex","0"),l.setAttribute("role","button"),l.setAttribute("aria-haspopup","listbox");const i=document.createElement("div");i.className="aural-multi-select__tags",e.selected&&e.selected.length>0&&e.selected.forEach(u=>{const m=v.find(o=>o.value===u);if(m){const o=document.createElement("span");o.className="aural-multi-select__tag",o.innerHTML=`
              ${m.label}
              <button class="aural-multi-select__tag-remove" aria-label="Remove ${m.label}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            `,i.appendChild(o)}});const a=document.createElement("span");a.className="aural-multi-select__placeholder",a.textContent=e.placeholder||"Select...",e.selected&&e.selected.length>0&&(a.style.display="none");const c=document.createElement("span");c.className="aural-multi-select__clear",c.setAttribute("aria-label","Clear all"),c.setAttribute("role","button"),c.setAttribute("tabindex","0"),c.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      `;const d=document.createElement("span");return d.className="aural-multi-select__arrow",d.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      `,l.appendChild(i),l.appendChild(a),l.appendChild(c),l.appendChild(d),t.appendChild(l),t}),args:{placeholder:"Select items...",selected:["option1","option2"]},argTypes:{placeholder:{control:"text",description:"Placeholder text"},selected:{control:"object",description:"Array of selected values"}}};var N,R,B;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }, {
      value: 'option4',
      label: 'Option 4'
    }, {
      value: 'option5',
      label: 'Option 5'
    }];
    return createMultiSelect('multi-select-default', options, {
      placeholder: 'Select items...',
      searchable: false
    });
  }
}`,...(B=(R=g.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var T,I,V;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'javascript',
      label: 'JavaScript'
    }, {
      value: 'typescript',
      label: 'TypeScript'
    }, {
      value: 'python',
      label: 'Python'
    }, {
      value: 'rust',
      label: 'Rust'
    }, {
      value: 'go',
      label: 'Go'
    }, {
      value: 'java',
      label: 'Java'
    }, {
      value: 'csharp',
      label: 'C#'
    }, {
      value: 'php',
      label: 'PHP'
    }, {
      value: 'ruby',
      label: 'Ruby'
    }, {
      value: 'swift',
      label: 'Swift'
    }];
    return createMultiSelect('multi-select-search', options, {
      placeholder: 'Search and select languages...',
      searchable: true
    });
  }
}`,...(V=(I=f.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var D,L,$;_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const options = Array.from({
      length: 50
    }, (_, i) => ({
      value: \`item\${i + 1}\`,
      label: \`Item \${i + 1}\`
    }));
    return createMultiSelect('multi-select-many', options, {
      placeholder: 'Select from 50 options...',
      searchable: true,
      maxHeight: '300px'
    });
  }
}`,...($=(L=_.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var H,P,j;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'react',
      label: 'React'
    }, {
      value: 'vue',
      label: 'Vue'
    }, {
      value: 'angular',
      label: 'Angular'
    }, {
      value: 'svelte',
      label: 'Svelte'
    }, {
      value: 'solid',
      label: 'Solid'
    }];
    return createMultiSelect('multi-select-preselected', options, {
      placeholder: 'Select frameworks...',
      searchable: true,
      selected: ['react', 'vue']
    });
  }
}`,...(j=(P=x.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var Q,U,J;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'orange',
      label: 'Orange',
      group: 'Citrus'
    }, {
      value: 'lemon',
      label: 'Lemon',
      group: 'Citrus'
    }, {
      value: 'lime',
      label: 'Lime',
      group: 'Citrus'
    }, {
      value: 'strawberry',
      label: 'Strawberry',
      group: 'Berries'
    }, {
      value: 'blueberry',
      label: 'Blueberry',
      group: 'Berries'
    }, {
      value: 'raspberry',
      label: 'Raspberry',
      group: 'Berries'
    }, {
      value: 'mango',
      label: 'Mango',
      group: 'Tropical'
    }, {
      value: 'pineapple',
      label: 'Pineapple',
      group: 'Tropical'
    }, {
      value: 'banana',
      label: 'Banana',
      group: 'Tropical'
    }];
    return createMultiSelect('multi-select-groups', options, {
      placeholder: 'Select fruits...',
      searchable: true
    });
  }
}`,...(J=(U=w.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,G,W;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'html',
      label: 'HTML'
    }, {
      value: 'css',
      label: 'CSS'
    }, {
      value: 'js',
      label: 'JavaScript'
    }, {
      value: 'ts',
      label: 'TypeScript'
    }, {
      value: 'react',
      label: 'React'
    }, {
      value: 'vue',
      label: 'Vue'
    }, {
      value: 'node',
      label: 'Node.js'
    }, {
      value: 'sql',
      label: 'SQL'
    }, {
      value: 'git',
      label: 'Git'
    }, {
      value: 'docker',
      label: 'Docker'
    }];
    return createMultiSelect('multi-select-skills', options, {
      placeholder: 'Select your skills...',
      searchable: true
    });
  }
}`,...(W=(G=y.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var z,F,q;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'sarah',
      label: 'Sarah Johnson'
    }, {
      value: 'mike',
      label: 'Mike Chen'
    }, {
      value: 'emily',
      label: 'Emily Rodriguez'
    }, {
      value: 'alex',
      label: 'Alex Kumar'
    }, {
      value: 'david',
      label: 'David Brown'
    }, {
      value: 'lisa',
      label: 'Lisa Wang'
    }];
    return createMultiSelect('multi-select-team', options, {
      placeholder: 'Assign to team members...',
      searchable: true
    });
  }
}`,...(q=(F=S.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }];
    return createMultiSelect('multi-select-disabled', options, {
      placeholder: 'Disabled multi-select',
      disabled: true,
      selected: ['option1', 'option2']
    });
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,le;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const options = [{
        value: 'option1',
        label: 'Option 1'
      }, {
        value: 'option2',
        label: 'Option 2'
      }, {
        value: 'option3',
        label: 'Option 3'
      }, {
        value: 'option4',
        label: 'Option 4'
      }];
      const wrapper = document.createElement('div');
      wrapper.id = \`multi-select-theme-\${Math.random().toString(36).substr(2, 9)}\`;
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
            tag.innerHTML = \`
              \${option.label}
              <button class="aural-multi-select__tag-remove" aria-label="Remove \${option.label}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            \`;
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
      clearBtn.innerHTML = \`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      \`;
      const arrow = document.createElement('span');
      arrow.className = 'aural-multi-select__arrow';
      arrow.innerHTML = \`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      \`;
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
}`,...(le=(te=C.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const ne=["Default","WithSearch","ManyOptions","PreSelected","WithGroups","SkillsSelector","TeamMemberSelector","Disabled","ThemeComparison"];export{g as Default,k as Disabled,_ as ManyOptions,x as PreSelected,y as SkillsSelector,S as TeamMemberSelector,C as ThemeComparison,w as WithGroups,f as WithSearch,ne as __namedExportsOrder,oe as default};
