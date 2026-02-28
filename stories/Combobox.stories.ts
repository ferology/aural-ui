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

A searchable dropdown component that combines an input field with a filterable list of options. Perfect for large datasets where users need to search and select from many items.

**Key Features:**
- Autocomplete functionality
- Keyboard navigation (Arrow keys, Enter, Escape)
- Custom value creation
- Async data loading support
- Rich options with descriptions
- WCAG AAA compliant
- Screen reader friendly

See the **Documentation** tab for complete framework examples and accessibility guidelines.
        `.trim()
      }
    }
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Input placeholder text'
    },
    label: {
      control: 'text',
      description: 'Combobox label'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input size'
    },
    searchable: {
      control: 'boolean',
      description: 'Enable search/filter functionality'
    },
    creatable: {
      control: 'boolean',
      description: 'Allow custom value creation'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state (async data)'
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create combobox HTML structure
function createComboboxHTML(id: string, placeholder: string, size: string = 'md') {
  const sizeClass = size !== 'md' ? ` aural-combobox--${size}` : '';

  return `
    <div class="aural-combobox${sizeClass}" id="${id}">
      <div class="aural-combobox__wrapper">
        <input type="text" class="aural-combobox__input" id="${id}-input" placeholder="${placeholder}">
        <div class="aural-combobox__icons">
          <button class="aural-combobox__clear">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div class="aural-combobox__spinner"></div>
          <button class="aural-combobox__arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
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
            { value: 'strawberry', label: 'Strawberry' }
          ],
          searchable: args.searchable,
          onChange: (selected) => console.log('Selected:', selected)
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
    disabled: false
  }
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
            { value: 'cn', label: 'China' }
          ],
          searchable: true,
          onChange: (selected) => console.log('Selected country:', selected)
        });
      }
    }, 100);

    return container;
  },
  args: {
    label: 'Select Country',
    placeholder: 'Type to autocomplete...',
    size: 'md',
    searchable: true
  }
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
            { value: 'ux', label: 'UX' }
          ],
          searchable: true,
          creatable: args.creatable,
          onCreate: (value) => {
            console.log('Created new tag:', value);
          },
          onChange: (selected) => console.log('Selected tag:', selected)
        });
      }
    }, 100);

    return container;
  },
  args: {
    label: 'Add Tag',
    placeholder: 'Search or create new tag...',
    size: 'md',
    creatable: true
  }
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
            { value: 'prod5', label: 'Webcam HD', description: 'SKU: WC-445 | $89.99' }
          ],
          searchable: true,
          onChange: (selected) => console.log('Selected product:', selected)
        });
      }
    }, 100);

    return container;
  }
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
            { value: 'user4', label: 'Alice Williams', description: 'alice@example.com' }
          ],
          searchable: true,
          onSearch: (query, filteredResults) => {
            console.log('Search query:', query);
            console.log('Filtered results:', filteredResults);
          },
          onChange: (selected) => console.log('Selected:', selected)
        });
      }
    }, 100);

    return container;
  }
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
            { value: 'toronto', label: 'Toronto', description: 'Ontario, Canada' }
          ],
          searchable: true,
          onChange: (selected) => console.log('Selected city:', selected)
        });
      }
    }, 100);

    return container;
  }
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
  }
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
            { value: 'mango', label: 'Mango' }
          ],
          searchable: true,
          defaultValue: 'banana',
          onChange: (selected) => console.log('Selected:', selected)
        });
      }
    }, 100);

    return container;
  }
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
        setTimeout(() => {
          if (spinner) {
            (spinner as HTMLElement).style.display = 'none';
          }

          window.Aural.initCombobox('combobox-async', {
            options: [
              { value: 'user1', label: 'John Smith', description: 'john@example.com' },
              { value: 'user2', label: 'Jane Doe', description: 'jane@example.com' },
              { value: 'user3', label: 'Bob Johnson', description: 'bob@example.com' },
              { value: 'user4', label: 'Alice Williams', description: 'alice@example.com' }
            ],
            searchable: true,
            onChange: (selected) => console.log('Selected user:', selected)
          });
        }, args.loading ? 2000 : 0);
      }
    }, 100);

    return container;
  },
  args: {
    loading: true
  }
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
            { value: '3', label: 'Option 3' }
          ],
          searchable: true,
          onChange: (selected) => console.log('Selected:', selected)
        });
      }
    }, 100);

    return container;
  }
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
            { value: '3', label: 'Option 3' }
          ],
          searchable: true,
          onChange: (selected) => console.log('Selected:', selected)
        });
      }
    }, 100);

    return container;
  }
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
              { value: 'grape', label: 'Grape' }
            ],
            searchable: true,
            onChange: (selected) => console.log(`${theme} selected:`, selected)
          });
        }
      }, 100);

      return wrapper.firstElementChild as HTMLElement;
    });
  },
  args: {
    placeholder: 'Search fruits...',
    size: 'md'
  }
};
