import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Text input fields with validation states, icons, and various sizes. Supports labels, helper text, and error/success feedback.'
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
      options: ['sm', 'default', 'lg'],
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
      label.htmlFor = inputId;
      formGroup.appendChild(label);
    }

    const input = document.createElement('input');
    input.id = inputId;
    input.type = args.type || 'text';

    // Build input classes correctly
    let inputClasses = ['input'];
    if (args.size === 'sm') {
      inputClasses.push('input-sm');
    } else if (args.size === 'lg') {
      inputClasses.push('input-lg');
    }

    input.className = inputClasses.join(' ');
    input.placeholder = args.placeholder || '';
    input.disabled = args.disabled || false;

    // Add state classes and ARIA attributes
    if (args.state === 'error') {
      input.classList.add('error');
      input.setAttribute('aria-invalid', 'true');
      if (args.helperText) {
        input.setAttribute('aria-errormessage', helperId);
      }
    } else if (args.state === 'success') {
      input.classList.add('success');
      input.setAttribute('aria-invalid', 'false');
    }

    // Associate helper text with input
    if (args.helperText) {
      input.setAttribute('aria-describedby', helperId);
    }

    formGroup.appendChild(input);

    if (args.helperText) {
      const helperText = document.createElement('p');
      helperText.id = helperId;

      if (args.state === 'error') {
        helperText.className = 'form-error';
        helperText.setAttribute('role', 'alert');
      } else if (args.state === 'success') {
        helperText.className = 'form-success';
      } else {
        helperText.className = 'form-helper';
      }

      helperText.textContent = args.helperText;
      formGroup.appendChild(helperText);
    }

    container.appendChild(formGroup);
    return container;
  },
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    size: 'default',
    state: 'default'
  }
};

export const WithError: Story = {
  ...Default,
  args: {
    label: 'Email',
    placeholder: 'invalid-email',
    type: 'email',
    size: 'default',
    state: 'error',
    helperText: 'Please enter a valid email address'
  }
};

export const WithSuccess: Story = {
  ...Default,
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    size: 'default',
    state: 'success',
    helperText: 'Looks good!'
  }
};

export const WithHelper: Story = {
  ...Default,
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
    size: 'default',
    state: 'default',
    helperText: "We'll never share your email"
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

export const WithPrefixIcon: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const label = document.createElement('label');
    label.className = 'label';
    label.textContent = 'Search';
    formGroup.appendChild(label);

    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group input-group-prefix';

    const iconSpan = document.createElement('span');
    iconSpan.className = 'input-group-icon input-group-icon-left';
    iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'input';
    input.placeholder = 'Search...';

    inputGroup.appendChild(iconSpan);
    inputGroup.appendChild(input);
    formGroup.appendChild(inputGroup);
    container.appendChild(formGroup);

    return container;
  }
};

export const WithSuffixIcon: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const label = document.createElement('label');
    label.className = 'label';
    label.textContent = 'Email';
    formGroup.appendChild(label);

    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group input-group-suffix';

    const input = document.createElement('input');
    input.type = 'email';
    input.className = 'input';
    input.placeholder = 'you@example.com';

    const iconSpan = document.createElement('span');
    iconSpan.className = 'input-group-icon input-group-icon-right';
    iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path></svg>';

    inputGroup.appendChild(input);
    inputGroup.appendChild(iconSpan);
    formGroup.appendChild(inputGroup);
    container.appendChild(formGroup);

    return container;
  }
};

export const WithBothIcons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const label = document.createElement('label');
    label.className = 'label';
    label.textContent = 'Password';
    formGroup.appendChild(label);

    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group input-group-prefix input-group-suffix';

    const leftIcon = document.createElement('span');
    leftIcon.className = 'input-group-icon input-group-icon-left';
    leftIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>';

    const input = document.createElement('input');
    input.type = 'password';
    input.className = 'input';
    input.placeholder = 'Enter password';

    const rightIcon = document.createElement('span');
    rightIcon.className = 'input-group-icon input-group-icon-right';
    rightIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>';

    inputGroup.appendChild(leftIcon);
    inputGroup.appendChild(input);
    inputGroup.appendChild(rightIcon);
    formGroup.appendChild(inputGroup);
    container.appendChild(formGroup);

    return container;
  }
};

export const InputSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';

    const sizes = [
      { label: 'Small', className: 'input input-sm', placeholder: 'Small input' },
      { label: 'Default', className: 'input', placeholder: 'Default input' },
      { label: 'Large', className: 'input input-lg', placeholder: 'Large input' }
    ];

    sizes.forEach(({ label, className, placeholder }) => {
      const formGroup = document.createElement('div');
      formGroup.className = 'form-group';

      const labelEl = document.createElement('label');
      labelEl.className = 'label';
      labelEl.textContent = label;
      formGroup.appendChild(labelEl);

      const input = document.createElement('input');
      input.type = 'text';
      input.className = className;
      input.placeholder = placeholder;
      formGroup.appendChild(input);

      container.appendChild(formGroup);
    });

    return container;
  }
};

export const InputSizesWithIcons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1.5rem';

    const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>';

    const sizes = [
      { label: 'Small', groupClass: 'input-group input-group-prefix input-group-sm', inputClass: 'input input-sm', placeholder: 'Small search...' },
      { label: 'Default', groupClass: 'input-group input-group-prefix', inputClass: 'input', placeholder: 'Default search...' },
      { label: 'Large', groupClass: 'input-group input-group-prefix input-group-lg', inputClass: 'input input-lg', placeholder: 'Large search...' }
    ];

    sizes.forEach(({ label, groupClass, inputClass, placeholder }) => {
      const formGroup = document.createElement('div');
      formGroup.className = 'form-group';

      const labelEl = document.createElement('label');
      labelEl.className = 'label';
      labelEl.textContent = label;
      formGroup.appendChild(labelEl);

      const inputGroup = document.createElement('div');
      inputGroup.className = groupClass;

      const iconSpan = document.createElement('span');
      iconSpan.className = 'input-group-icon input-group-icon-left';
      iconSpan.innerHTML = searchIcon;

      const input = document.createElement('input');
      input.type = 'text';
      input.className = inputClass;
      input.placeholder = placeholder;

      inputGroup.appendChild(iconSpan);
      inputGroup.appendChild(input);
      formGroup.appendChild(inputGroup);
      container.appendChild(formGroup);
    });

    return container;
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
      { label: 'Default', state: 'default', helperText: 'This is helper text', helperClass: 'form-helper' },
      { label: 'Error', state: 'error', helperText: 'Please enter a valid email address', helperClass: 'form-error' },
      { label: 'Success', state: 'success', helperText: 'Looks good!', helperClass: 'form-success' }
    ];

    states.forEach(({ label, state, helperText, helperClass }) => {
      const formGroup = document.createElement('div');
      formGroup.className = 'form-group';

      const inputId = `input-${state}-${Math.random().toString(36).substr(2, 9)}`;
      const helperId = `${inputId}-helper`;

      const labelEl = document.createElement('label');
      labelEl.className = 'label';
      labelEl.textContent = label;
      labelEl.htmlFor = inputId;
      formGroup.appendChild(labelEl);

      const input = document.createElement('input');
      input.id = inputId;
      input.type = 'email';
      input.className = 'input';
      input.placeholder = state === 'error' ? 'invalid-email' : 'you@example.com';

      if (state === 'error') {
        input.classList.add('error');
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-errormessage', helperId);
      } else if (state === 'success') {
        input.classList.add('success');
        input.setAttribute('aria-invalid', 'false');
      }

      if (helperText) {
        input.setAttribute('aria-describedby', helperId);
      }

      formGroup.appendChild(input);

      if (helperText) {
        const helper = document.createElement('p');
        helper.id = helperId;
        helper.className = helperClass;
        helper.textContent = helperText;

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

export const NumberWithSpinners: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const label = document.createElement('label');
    label.className = 'label';
    label.textContent = 'Quantity';
    formGroup.appendChild(label);

    const inputNumber = document.createElement('div');
    inputNumber.className = 'input-number';

    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'input';
    input.value = '5';
    input.min = '1';
    input.max = '100';

    const controls = document.createElement('div');
    controls.className = 'input-number__controls';

    const incrementBtn = document.createElement('button');
    incrementBtn.type = 'button';
    incrementBtn.className = 'input-number__button';
    incrementBtn.setAttribute('data-action', 'increment');
    incrementBtn.setAttribute('aria-label', 'Increment');
    incrementBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>';

    const decrementBtn = document.createElement('button');
    decrementBtn.type = 'button';
    decrementBtn.className = 'input-number__button';
    decrementBtn.setAttribute('data-action', 'decrement');
    decrementBtn.setAttribute('aria-label', 'Decrement');
    decrementBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>';

    // Add click handlers
    incrementBtn.addEventListener('click', () => {
      const current = parseInt(input.value) || 0;
      const max = parseInt(input.max) || Infinity;
      if (current < max) {
        input.value = String(current + 1);
      }
    });

    decrementBtn.addEventListener('click', () => {
      const current = parseInt(input.value) || 0;
      const min = parseInt(input.min) || -Infinity;
      if (current > min) {
        input.value = String(current - 1);
      }
    });

    controls.appendChild(incrementBtn);
    controls.appendChild(decrementBtn);

    inputNumber.appendChild(input);
    inputNumber.appendChild(controls);
    formGroup.appendChild(inputNumber);
    container.appendChild(formGroup);

    return container;
  }
};

export const NumberSpinnerSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = '1fr 1fr 1fr';
    container.style.gap = '1rem';

    const upIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    const downIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>';

    const sizes = [
      { label: 'Small', numberClass: 'input-number input-number--sm', inputClass: 'input input-sm', value: '10' },
      { label: 'Default', numberClass: 'input-number', inputClass: 'input', value: '25' },
      { label: 'Large', numberClass: 'input-number input-number--lg', inputClass: 'input input-lg', value: '50' }
    ];

    sizes.forEach(({ label, numberClass, inputClass, value }) => {
      const formGroup = document.createElement('div');
      formGroup.className = 'form-group';

      const labelEl = document.createElement('label');
      labelEl.className = 'label';
      labelEl.textContent = label;
      formGroup.appendChild(labelEl);

      const inputNumber = document.createElement('div');
      inputNumber.className = numberClass;

      const input = document.createElement('input');
      input.type = 'number';
      input.className = inputClass;
      input.value = value;
      input.min = '0';
      input.max = '100';

      const controls = document.createElement('div');
      controls.className = 'input-number__controls';

      const incrementBtn = document.createElement('button');
      incrementBtn.type = 'button';
      incrementBtn.className = 'input-number__button';
      incrementBtn.setAttribute('data-action', 'increment');
      incrementBtn.setAttribute('aria-label', 'Increment');
      incrementBtn.innerHTML = upIcon;

      const decrementBtn = document.createElement('button');
      decrementBtn.type = 'button';
      decrementBtn.className = 'input-number__button';
      decrementBtn.setAttribute('data-action', 'decrement');
      decrementBtn.setAttribute('aria-label', 'Decrement');
      decrementBtn.innerHTML = downIcon;

      // Add click handlers
      incrementBtn.addEventListener('click', () => {
        const current = parseInt(input.value) || 0;
        const max = parseInt(input.max) || Infinity;
        if (current < max) {
          input.value = String(current + 1);
        }
      });

      decrementBtn.addEventListener('click', () => {
        const current = parseInt(input.value) || 0;
        const min = parseInt(input.min) || -Infinity;
        if (current > min) {
          input.value = String(current - 1);
        }
      });

      controls.appendChild(incrementBtn);
      controls.appendChild(decrementBtn);

      inputNumber.appendChild(input);
      inputNumber.appendChild(controls);
      formGroup.appendChild(inputNumber);
      container.appendChild(formGroup);
    });

    return container;
  }
};
