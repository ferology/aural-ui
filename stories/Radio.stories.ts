import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Forms/Radio',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Radio Button Component

Single-selection radio button groups for mutually exclusive choices. Allow users to select exactly one option from a set.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="radio-group" role="radiogroup" aria-labelledby="group-label">
  <div id="group-label" class="radio-group-label">Select your plan</div>
  <label class="radio">
    <input type="radio" name="plan" value="free" checked>
    <span>Free</span>
  </label>
</div>
\`\`\`

**React:**
\`\`\`jsx
<div className="radio-group" role="radiogroup" aria-labelledby="group-label">
  <div id="group-label" className="radio-group-label">Select your plan</div>
  <label className="radio">
    <input type="radio" name="plan" value="free" checked />
    <span>Free</span>
  </label>
</div>
\`\`\`

**Vue:**
\`\`\`vue
<div class="radio-group" role="radiogroup" aria-labelledby="group-label">
  <div id="group-label" class="radio-group-label">Select your plan</div>
  <label class="radio">
    <input type="radio" name="plan" value="free" :checked="true">
    <span>Free</span>
  </label>
</div>
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Radio group name (all radios in group must share same name)'
    },
    options: {
      control: 'object',
      description: 'Array of options: [{ label: string, value: string, description?: string, disabled?: boolean }]'
    },
    selected: {
      control: 'text',
      description: 'Currently selected value'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all radios in the group'
    },
    layout: {
      control: 'select',
      options: ['stacked', 'inline'],
      description: 'Layout direction for radio group'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Radio button size'
    },
    groupLabel: {
      control: 'text',
      description: 'Label for the radio group'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'radio-group';
    container.setAttribute('role', 'radiogroup');

    const groupLabelId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
    container.setAttribute('aria-labelledby', groupLabelId);

    if (args.groupLabel) {
      const label = document.createElement('div');
      label.id = groupLabelId;
      label.className = 'radio-group-label';
      label.textContent = args.groupLabel;
      container.appendChild(label);
    }

    args.options.forEach((option: any) => {
      const label = document.createElement('label');
      label.className = `radio ${args.size !== 'md' ? `radio-${args.size}` : ''}`;

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      input.disabled = args.disabled || option.disabled || false;
      input.setAttribute('aria-checked', String(option.value === args.selected));

      const span = document.createElement('span');
      span.textContent = option.label;

      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });

    return container;
  },
  args: {
    name: 'plan',
    groupLabel: 'Select your plan',
    options: [
      { label: 'Free - $0/month', value: 'free' },
      { label: 'Pro - $9/month', value: 'pro' },
      { label: 'Enterprise - $29/month', value: 'enterprise' }
    ],
    selected: 'free',
    disabled: false,
    layout: 'stacked',
    size: 'md'
  }
};

export const Selected: Story = {
  ...Default,
  args: {
    name: 'payment',
    groupLabel: 'Payment method',
    options: [
      { label: 'Credit Card', value: 'card' },
      { label: 'PayPal', value: 'paypal' },
      { label: 'Bank Transfer', value: 'bank' }
    ],
    selected: 'paypal',
    size: 'md'
  }
};

export const Disabled: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'radio-group';
    container.setAttribute('role', 'radiogroup');

    const groupLabelId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
    container.setAttribute('aria-labelledby', groupLabelId);

    const label = document.createElement('div');
    label.id = groupLabelId;
    label.className = 'radio-group-label';
    label.textContent = args.groupLabel;
    container.appendChild(label);

    args.options.forEach((option: any) => {
      const labelEl = document.createElement('label');
      labelEl.className = 'radio';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      input.disabled = option.disabled;

      const span = document.createElement('span');
      span.textContent = option.label;

      labelEl.appendChild(input);
      labelEl.appendChild(span);
      container.appendChild(labelEl);
    });

    return container;
  },
  args: {
    name: 'payment',
    groupLabel: 'Payment method',
    options: [
      { label: 'Credit Card', value: 'card', disabled: false },
      { label: 'PayPal', value: 'paypal', disabled: false },
      { label: 'Cryptocurrency (Coming Soon)', value: 'crypto', disabled: true }
    ],
    selected: 'card',
    size: 'md'
  }
};

export const Inline: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'radio-group';
    container.setAttribute('role', 'radiogroup');
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.gap = 'var(--space-6)';

    const groupLabelId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
    container.setAttribute('aria-labelledby', groupLabelId);

    if (args.groupLabel) {
      const label = document.createElement('div');
      label.id = groupLabelId;
      label.className = 'radio-group-label';
      label.textContent = args.groupLabel;
      label.style.width = '100%';
      container.appendChild(label);
    }

    const radioWrapper = document.createElement('div');
    radioWrapper.style.display = 'flex';
    radioWrapper.style.gap = 'var(--space-6)';
    radioWrapper.style.alignItems = 'center';

    args.options.forEach((option: any) => {
      const label = document.createElement('label');
      label.className = 'radio';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      input.setAttribute('aria-checked', String(option.value === args.selected));

      const span = document.createElement('span');
      span.textContent = option.label;

      label.appendChild(input);
      label.appendChild(span);
      radioWrapper.appendChild(label);
    });

    container.appendChild(radioWrapper);
    return container;
  },
  args: {
    name: 'gender',
    groupLabel: 'Gender',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' }
    ],
    selected: 'male',
    size: 'md'
  }
};

export const Stacked: Story = {
  ...Default,
  args: {
    name: 'shipping',
    groupLabel: 'Shipping method',
    options: [
      { label: 'Standard - 5-7 days', value: 'standard' },
      { label: 'Express - 2-3 days', value: 'express' },
      { label: 'Overnight - Next day', value: 'overnight' }
    ],
    selected: 'standard',
    size: 'md'
  }
};

export const WithDescription: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'radio-group';
    container.setAttribute('role', 'radiogroup');

    const groupLabelId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
    container.setAttribute('aria-labelledby', groupLabelId);

    const label = document.createElement('div');
    label.id = groupLabelId;
    label.className = 'radio-group-label';
    label.textContent = args.groupLabel;
    container.appendChild(label);

    args.options.forEach((option: any) => {
      const labelEl = document.createElement('label');
      labelEl.className = 'radio radio-with-description';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      input.setAttribute('aria-checked', String(option.value === args.selected));

      const textWrapper = document.createElement('span');
      textWrapper.textContent = option.label;

      if (option.description) {
        const desc = document.createElement('span');
        desc.className = 'radio-description';
        desc.textContent = option.description;
        textWrapper.appendChild(desc);
      }

      labelEl.appendChild(input);
      labelEl.appendChild(textWrapper);
      container.appendChild(labelEl);
    });

    return container;
  },
  args: {
    name: 'shipping',
    groupLabel: 'Choose shipping method',
    options: [
      { label: 'Standard Shipping', value: 'standard', description: 'Delivery in 5-7 business days' },
      { label: 'Express Shipping', value: 'express', description: 'Delivery in 2-3 business days' },
      { label: 'Overnight Shipping', value: 'overnight', description: 'Next business day delivery' }
    ],
    selected: 'standard',
    size: 'md'
  }
};

export const Sizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    container.style.padding = '2rem';

    const sizes = [
      { size: 'sm', label: 'Small' },
      { size: 'md', label: 'Default' },
      { size: 'lg', label: 'Large' }
    ];

    sizes.forEach(({ size, label }) => {
      const group = document.createElement('div');
      group.className = 'radio-group';

      const radioLabel = document.createElement('label');
      radioLabel.className = `radio ${size !== 'md' ? `radio-${size}` : ''}`;

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `size-${size}`;
      input.checked = true;

      const span = document.createElement('span');
      span.textContent = `${label} radio button`;

      radioLabel.appendChild(input);
      radioLabel.appendChild(span);
      group.appendChild(radioLabel);
      container.appendChild(group);
    });

    return container;
  }
};

export const ButtonStyle: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'radio-group radio-group-buttons';
    container.setAttribute('role', 'radiogroup');

    const groupLabelId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
    container.setAttribute('aria-labelledby', groupLabelId);

    args.options.forEach((option: any) => {
      const label = document.createElement('label');
      label.className = 'radio radio-button';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      input.setAttribute('aria-checked', String(option.value === args.selected));

      const span = document.createElement('span');
      span.textContent = option.label;

      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });

    return container;
  },
  args: {
    name: 'view',
    options: [
      { label: 'Grid', value: 'grid' },
      { label: 'List', value: 'list' },
      { label: 'Table', value: 'table' }
    ],
    selected: 'grid'
  }
};

export const AttachedButtons: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'radio-group radio-group-attached';
    container.setAttribute('role', 'radiogroup');

    const groupLabelId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
    container.setAttribute('aria-labelledby', groupLabelId);

    args.options.forEach((option: any) => {
      const label = document.createElement('label');
      label.className = 'radio radio-button';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      input.setAttribute('aria-checked', String(option.value === args.selected));

      const span = document.createElement('span');
      span.textContent = option.label;

      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });

    return container;
  },
  args: {
    name: 'period',
    options: [
      { label: 'Day', value: 'day' },
      { label: 'Week', value: 'week' },
      { label: 'Month', value: 'month' },
      { label: 'Year', value: 'year' }
    ],
    selected: 'day'
  }
};

export const CardStyle: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    container.style.gap = 'var(--space-4)';
    container.style.padding = '2rem';

    args.options.forEach((option: any) => {
      const label = document.createElement('label');
      label.className = 'radio radio-card';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      input.setAttribute('aria-checked', String(option.value === args.selected));

      const content = document.createElement('div');
      content.className = 'radio-card-content';

      const title = document.createElement('div');
      title.style.fontWeight = 'var(--font-semibold)';
      title.style.fontSize = 'var(--text-lg)';
      title.style.marginBottom = 'var(--space-2)';
      title.textContent = option.label;

      const price = document.createElement('div');
      price.style.fontSize = 'var(--text-2xl)';
      price.style.fontWeight = 'var(--font-bold)';
      price.style.color = 'var(--color-primary)';
      price.style.marginBottom = 'var(--space-2)';
      price.textContent = option.price;

      const desc = document.createElement('div');
      desc.style.fontSize = 'var(--text-sm)';
      desc.style.color = 'var(--color-text-secondary)';
      desc.textContent = option.description;

      content.appendChild(title);
      content.appendChild(price);
      content.appendChild(desc);

      label.appendChild(input);
      label.appendChild(content);
      container.appendChild(label);
    });

    return container;
  },
  args: {
    name: 'pricing',
    options: [
      { label: 'Starter', value: 'starter', price: '$9', description: 'Perfect for individuals' },
      { label: 'Pro', value: 'pro', price: '$29', description: 'For small teams' },
      { label: 'Enterprise', value: 'enterprise', price: '$99', description: 'For large organizations' }
    ],
    selected: 'starter'
  }
};

export const AllStates: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-8)';
    container.style.padding = '2rem';

    const states = [
      { label: 'Default (Unchecked)', checked: false, disabled: false },
      { label: 'Checked', checked: true, disabled: false },
      { label: 'Disabled (Unchecked)', checked: false, disabled: true },
      { label: 'Disabled (Checked)', checked: true, disabled: true }
    ];

    states.forEach((state, index) => {
      const group = document.createElement('div');
      group.className = 'radio-group';

      const groupLabel = document.createElement('div');
      groupLabel.className = 'radio-group-label';
      groupLabel.textContent = state.label;
      group.appendChild(groupLabel);

      const label = document.createElement('label');
      label.className = 'radio';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `state-${index}`;
      input.value = 'option';
      input.checked = state.checked;
      input.disabled = state.disabled;
      input.setAttribute('aria-checked', String(state.checked));

      const span = document.createElement('span');
      span.textContent = 'Radio option';

      label.appendChild(input);
      label.appendChild(span);
      group.appendChild(label);
      container.appendChild(group);
    });

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const container = document.createElement('div');
      container.className = 'radio-group';
      container.setAttribute('role', 'radiogroup');

      const groupLabelId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
      container.setAttribute('aria-labelledby', groupLabelId);

      if (args.groupLabel) {
        const label = document.createElement('div');
        label.id = groupLabelId;
        label.className = 'radio-group-label';
        label.textContent = args.groupLabel;
        container.appendChild(label);
      }

      args.options.forEach((option: any, index: number) => {
        const label = document.createElement('label');
        label.className = `radio ${args.size !== 'md' ? `radio-${args.size}` : ''}`;

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = args.name;
        input.value = option.value;
        input.checked = option.value === args.selected;
        input.disabled = args.disabled || option.disabled || false;

        const span = document.createElement('span');
        span.textContent = option.label;

        label.appendChild(input);
        label.appendChild(span);
        container.appendChild(label);
      });

      return container;
    });
  },
  args: {
    name: 'plan',
    groupLabel: 'Select your plan',
    options: [
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro' },
      { label: 'Enterprise', value: 'enterprise' }
    ],
    selected: 'pro',
    disabled: false,
    size: 'md'
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Radio group name'
    },
    groupLabel: {
      control: 'text',
      description: 'Label for the radio group'
    },
    options: {
      control: 'object',
      description: 'Array of radio options'
    },
    selected: {
      control: 'text',
      description: 'Currently selected value'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Radio button size'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all radios'
    }
  }
};
