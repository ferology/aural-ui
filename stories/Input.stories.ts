import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Form input component with labels, validation states, and helper text.'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input size'
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Validation state'
    },
    helperText: {
      control: 'text',
      description: 'Helper or error text'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    // Generate unique ID for accessibility
    const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
    const helperId = `${inputId}-helper`;

    if (args.label) {
      const label = document.createElement('label');
      label.className = 'label';
      label.textContent = args.label;
      label.htmlFor = inputId; // ✅ Associate label with input
      formGroup.appendChild(label);
    }

    const input = document.createElement('input');
    input.id = inputId; // ✅ Add ID for label association
    input.type = args.type || 'text';
    input.className = `input input-${args.size}`;
    input.placeholder = args.placeholder || '';
    input.disabled = args.disabled || false;

    // ✅ Add ARIA attributes for validation states
    if (args.state === 'error') {
      input.classList.add('input-error');
      input.setAttribute('aria-invalid', 'true');
      if (args.helperText) {
        input.setAttribute('aria-errormessage', helperId);
      }
    } else if (args.state === 'success') {
      input.classList.add('input-success');
      input.setAttribute('aria-invalid', 'false');
    }

    // ✅ Associate helper text with input
    if (args.helperText) {
      input.setAttribute('aria-describedby', helperId);
    }

    formGroup.appendChild(input);

    if (args.helperText) {
      const helperText = document.createElement('p');
      helperText.id = helperId; // ✅ Add ID for aria-describedby
      helperText.className = args.state === 'error' ? 'form-error' : 'form-helper';
      helperText.textContent = args.helperText;
      // ✅ Add role for error messages
      if (args.state === 'error') {
        helperText.setAttribute('role', 'alert');
      }
      formGroup.appendChild(helperText);
    }

    container.appendChild(formGroup);
    return container;
  },
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    size: 'md',
    state: 'default'
  }
};

export const WithError: Story = {
  ...Default,
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    size: 'md',
    state: 'error',
    helperText: 'Please enter a valid email address'
  }
};

export const WithSuccess: Story = {
  ...Default,
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    size: 'md',
    state: 'success',
    helperText: 'Email is valid'
  }
};

export const Small: Story = {
  ...Default,
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'sm'
  }
};

export const Large: Story = {
  ...Default,
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'lg'
  }
};

export const Disabled: Story = {
  ...Default,
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    disabled: true
  }
};

export const Password: Story = {
  ...Default,
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password'
  }
};

export const Number: Story = {
  ...Default,
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number'
  }
};

export const AllStates: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1.5rem';

    const states = [
      { label: 'Default', state: 'default', helperText: 'This is helper text' },
      { label: 'Error', state: 'error', helperText: 'This field is required' },
      { label: 'Success', state: 'success', helperText: 'Looks good!' }
    ];

    states.forEach(({ label, state, helperText }) => {
      const formGroup = document.createElement('div');
      formGroup.className = 'form-group';

      // ✅ Generate unique IDs for accessibility
      const inputId = `input-${state}-${Math.random().toString(36).substr(2, 9)}`;
      const helperId = `${inputId}-helper`;

      const labelEl = document.createElement('label');
      labelEl.className = 'label';
      labelEl.textContent = label;
      labelEl.htmlFor = inputId; // ✅ Associate label with input
      formGroup.appendChild(labelEl);

      const input = document.createElement('input');
      input.id = inputId; // ✅ Add ID for label association
      input.type = 'text';
      input.className = 'input';
      input.placeholder = `${label} input`;

      // ✅ Add ARIA attributes for validation states
      if (state === 'error') {
        input.classList.add('input-error');
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-errormessage', helperId);
      } else if (state === 'success') {
        input.classList.add('input-success');
        input.setAttribute('aria-invalid', 'false');
      }

      // ✅ Associate helper text with input
      if (helperText) {
        input.setAttribute('aria-describedby', helperId);
      }

      formGroup.appendChild(input);

      if (helperText) {
        const helper = document.createElement('p');
        helper.id = helperId; // ✅ Add ID for aria-describedby
        helper.className = state === 'error' ? 'form-error' : 'form-helper';
        helper.textContent = helperText;
        // ✅ Add role for error messages
        if (state === 'error') {
          helper.setAttribute('role', 'alert');
        }
        formGroup.appendChild(helper);
      }

      container.appendChild(formGroup);
    });

    return container;
  }
};
