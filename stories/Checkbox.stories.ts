import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Forms/Checkbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Checkbox Component

Multi-selection checkboxes with states and variants. Allow users to select multiple options from a list or toggle individual settings.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<label class="checkbox">
  <input type="checkbox" checked>
  <span>Accept terms</span>
</label>
\`\`\`

**React:**
\`\`\`jsx
<label className="checkbox">
  <input type="checkbox" checked onChange={handleChange} />
  <span>Accept terms</span>
</label>
\`\`\`

**Vue:**
\`\`\`vue
<label class="checkbox">
  <input type="checkbox" v-model="accepted">
  <span>Accept terms</span>
</label>
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Checkbox label text'
    },
    checked: {
      control: 'boolean',
      description: 'Checked state'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state (for "select all" scenarios)'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Checkbox size'
    },
    description: {
      control: 'text',
      description: 'Optional description text below the label'
    }
  }
};

export default meta;
type Story = StoryObj;

// Unique ID generator for label association
let idCounter = 0;
const generateId = () => `checkbox-${Date.now()}-${idCounter++}`;

export const Default: Story = {
  render: (args) => {
    const id = generateId();
    const label = document.createElement('label');
    label.className = 'checkbox';

    if (args.size && args.size !== 'md') {
      label.classList.add(`checkbox-${args.size}`);
    }

    if (args.description) {
      label.classList.add('checkbox-with-description');
    }

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = id;
    input.checked = args.checked || false;
    input.disabled = args.disabled || false;

    // Set indeterminate state
    if (args.indeterminate) {
      setTimeout(() => {
        input.indeterminate = true;
      }, 0);
    }

    // Add ARIA attributes
    input.setAttribute('aria-checked', args.indeterminate ? 'mixed' : (args.checked ? 'true' : 'false'));
    if (args.description) {
      const descId = `${id}-desc`;
      input.setAttribute('aria-describedby', descId);
    }

    const span = document.createElement('span');
    span.textContent = args.label;

    if (args.description) {
      const desc = document.createElement('span');
      desc.className = 'checkbox-description';
      desc.id = `${id}-desc`;
      desc.textContent = args.description;
      span.appendChild(desc);
    }

    label.appendChild(input);
    label.appendChild(span);

    return label;
  },
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: false,
    indeterminate: false,
    size: 'md',
    description: ''
  }
};

export const Checked: Story = {
  ...Default,
  args: {
    label: 'Subscribed to newsletter',
    checked: true,
    disabled: false,
    indeterminate: false,
    size: 'md'
  }
};

export const Disabled: Story = {
  ...Default,
  args: {
    label: 'Disabled checkbox',
    checked: false,
    disabled: true,
    indeterminate: false,
    size: 'md'
  }
};

export const DisabledChecked: Story = {
  ...Default,
  args: {
    label: 'Disabled checked checkbox',
    checked: true,
    disabled: true,
    indeterminate: false,
    size: 'md'
  }
};

export const Indeterminate: Story = {
  ...Default,
  args: {
    label: 'Select all',
    checked: false,
    disabled: false,
    indeterminate: true,
    size: 'md'
  }
};

export const Small: Story = {
  ...Default,
  args: {
    label: 'Small checkbox',
    checked: true,
    disabled: false,
    indeterminate: false,
    size: 'sm'
  }
};

export const Large: Story = {
  ...Default,
  args: {
    label: 'Large checkbox',
    checked: true,
    disabled: false,
    indeterminate: false,
    size: 'lg'
  }
};

export const WithDescription: Story = {
  ...Default,
  args: {
    label: 'Enable notifications',
    checked: true,
    disabled: false,
    indeterminate: false,
    size: 'md',
    description: 'Receive email updates about your account'
  }
};

export const AllStates: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      max-width: 400px;
    `;

    const states = [
      { label: 'Unchecked', checked: false, disabled: false, indeterminate: false },
      { label: 'Checked', checked: true, disabled: false, indeterminate: false },
      { label: 'Indeterminate', checked: false, disabled: false, indeterminate: true },
      { label: 'Disabled unchecked', checked: false, disabled: true, indeterminate: false },
      { label: 'Disabled checked', checked: true, disabled: true, indeterminate: false },
      { label: 'Disabled indeterminate', checked: false, disabled: true, indeterminate: true }
    ];

    states.forEach(state => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'checkbox';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = id;
      input.checked = state.checked;
      input.disabled = state.disabled;

      if (state.indeterminate) {
        setTimeout(() => {
          input.indeterminate = true;
        }, 0);
      }

      input.setAttribute('aria-checked', state.indeterminate ? 'mixed' : (state.checked ? 'true' : 'false'));

      const span = document.createElement('span');
      span.textContent = state.label;

      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });

    return container;
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      align-items: flex-start;
    `;

    const sizes = [
      { size: 'sm', label: 'Small checkbox' },
      { size: 'md', label: 'Medium checkbox (default)' },
      { size: 'lg', label: 'Large checkbox' }
    ];

    sizes.forEach(item => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'checkbox';

      if (item.size !== 'md') {
        label.classList.add(`checkbox-${item.size}`);
      }

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = id;
      input.checked = true;
      input.setAttribute('aria-checked', 'true');

      const span = document.createElement('span');
      span.textContent = item.label;

      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });

    return container;
  }
};

export const CheckboxGroup: Story = {
  render: () => {
    const fieldset = document.createElement('fieldset');
    fieldset.style.cssText = `
      border: none;
      padding: 2rem;
      margin: 0;
    `;

    const legend = document.createElement('legend');
    legend.textContent = 'Select your interests';
    legend.style.cssText = `
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin-bottom: 1rem;
      padding: 0;
    `;

    const checkboxContainer = document.createElement('div');
    checkboxContainer.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `;

    const options = [
      { value: 'design', label: 'Design', checked: true },
      { value: 'development', label: 'Development', checked: true },
      { value: 'marketing', label: 'Marketing', checked: false },
      { value: 'sales', label: 'Sales', checked: false }
    ];

    options.forEach(option => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'checkbox';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = id;
      input.name = 'interests';
      input.value = option.value;
      input.checked = option.checked;
      input.setAttribute('aria-checked', option.checked ? 'true' : 'false');

      const span = document.createElement('span');
      span.textContent = option.label;

      label.appendChild(input);
      label.appendChild(span);
      checkboxContainer.appendChild(label);
    });

    fieldset.appendChild(legend);
    fieldset.appendChild(checkboxContainer);

    return fieldset;
  }
};

export const SelectAllPattern: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      max-width: 400px;
    `;

    // Parent "select all" checkbox
    const parentId = generateId();
    const parentLabel = document.createElement('label');
    parentLabel.className = 'checkbox';

    const parentInput = document.createElement('input');
    parentInput.type = 'checkbox';
    parentInput.id = parentId;
    parentInput.setAttribute('aria-checked', 'mixed');

    const parentSpan = document.createElement('span');
    parentSpan.textContent = 'Select all';

    parentLabel.appendChild(parentInput);
    parentLabel.appendChild(parentSpan);
    container.appendChild(parentLabel);

    // Child checkboxes container
    const childContainer = document.createElement('div');
    childContainer.style.cssText = `
      padding-left: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      border-left: 2px solid var(--color-border-subtle);
    `;

    const children = [
      { label: 'Option 1', checked: true },
      { label: 'Option 2', checked: false },
      { label: 'Option 3', checked: false }
    ];

    const childInputs: HTMLInputElement[] = [];

    children.forEach(child => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'checkbox';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = id;
      input.checked = child.checked;
      input.setAttribute('aria-checked', child.checked ? 'true' : 'false');
      childInputs.push(input);

      const span = document.createElement('span');
      span.textContent = child.label;

      label.appendChild(input);
      label.appendChild(span);
      childContainer.appendChild(label);
    });

    container.appendChild(childContainer);

    // Update parent based on children
    const updateParent = () => {
      const checkedCount = childInputs.filter(cb => cb.checked).length;
      parentInput.checked = checkedCount === childInputs.length;
      parentInput.indeterminate = checkedCount > 0 && checkedCount < childInputs.length;
      parentInput.setAttribute('aria-checked',
        parentInput.indeterminate ? 'mixed' : (parentInput.checked ? 'true' : 'false')
      );
    };

    // Parent click handler
    parentInput.addEventListener('change', () => {
      childInputs.forEach(cb => {
        cb.checked = parentInput.checked;
        cb.setAttribute('aria-checked', parentInput.checked ? 'true' : 'false');
      });
    });

    // Child click handlers
    childInputs.forEach(cb => {
      cb.addEventListener('change', () => {
        cb.setAttribute('aria-checked', cb.checked ? 'true' : 'false');
        updateParent();
      });
    });

    // Initialize
    updateParent();

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'checkbox';

      if (args.size && args.size !== 'md') {
        label.classList.add(`checkbox-${args.size}`);
      }

      if (args.description) {
        label.classList.add('checkbox-with-description');
      }

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = id;
      input.checked = args.checked || false;
      input.disabled = args.disabled || false;

      if (args.indeterminate) {
        setTimeout(() => {
          input.indeterminate = true;
        }, 0);
      }

      input.setAttribute('aria-checked', args.indeterminate ? 'mixed' : (args.checked ? 'true' : 'false'));

      if (args.description) {
        const descId = `${id}-desc`;
        input.setAttribute('aria-describedby', descId);
      }

      const span = document.createElement('span');
      span.textContent = args.label;

      if (args.description) {
        const desc = document.createElement('span');
        desc.className = 'checkbox-description';
        desc.id = `${id}-desc`;
        desc.textContent = args.description;
        span.appendChild(desc);
      }

      label.appendChild(input);
      label.appendChild(span);

      return label;
    });
  },
  args: {
    label: 'Enable feature',
    checked: true,
    disabled: false,
    indeterminate: false,
    size: 'md',
    description: ''
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Checkbox label text'
    },
    checked: {
      control: 'boolean',
      description: 'Checked state'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Checkbox size'
    },
    description: {
      control: 'text',
      description: 'Optional description text'
    }
  }
};
