import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Spinner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Loading indicators for asynchronous operations and processing states.'
      }
    }
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Spinner size'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'white'],
      description: 'Spinner color variant'
    },
    type: {
      control: 'select',
      options: ['default', 'dual', 'dots', 'pulse', 'bars'],
      description: 'Spinner animation type'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const spinner = document.createElement('div');
    const classes = ['aural-spinner'];

    if (args.variant) {
      classes.push(`aural-spinner--${args.variant}`);
    }

    if (args.size && args.size !== 'md') {
      classes.push(`aural-spinner--${args.size}`);
    }

    spinner.className = classes.join(' ');
    spinner.setAttribute('role', 'status');
    spinner.setAttribute('aria-label', 'Loading');

    const circle = document.createElement('div');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);

    return spinner;
  },
  args: {
    size: 'md',
    variant: 'primary',
    type: 'default'
  }
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';

    const variants = [
      { type: 'default', label: 'Default' },
      { type: 'dual', label: 'Dual Ring' },
      { type: 'dots', label: 'Dots' },
      { type: 'pulse', label: 'Pulse' },
      { type: 'bars', label: 'Bars' }
    ];

    variants.forEach(({ type, label }) => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';

      const spinner = document.createElement('div');
      const classes = ['aural-spinner', 'aural-spinner--primary'];

      if (type !== 'default') {
        classes.push(`aural-spinner--${type}`);
      }

      spinner.className = classes.join(' ');
      spinner.setAttribute('role', 'status');
      spinner.setAttribute('aria-label', 'Loading');

      // Add appropriate child elements based on type
      if (type === 'dots') {
        for (let i = 0; i < 3; i++) {
          const dot = document.createElement('div');
          dot.className = 'aural-spinner__dot';
          spinner.appendChild(dot);
        }
      } else if (type === 'bars') {
        for (let i = 0; i < 4; i++) {
          const bar = document.createElement('div');
          bar.className = 'aural-spinner__bar';
          spinner.appendChild(bar);
        }
      } else {
        const circle = document.createElement('div');
        circle.className = 'aural-spinner__circle';
        spinner.appendChild(circle);
      }

      const labelEl = document.createElement('p');
      labelEl.style.marginTop = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;

      wrapper.appendChild(spinner);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';

    const sizes = [
      { class: 'xs', label: 'Extra Small' },
      { class: 'sm', label: 'Small' },
      { class: '', label: 'Medium' },
      { class: 'lg', label: 'Large' },
      { class: 'xl', label: 'Extra Large' }
    ];

    sizes.forEach(({ class: sizeClass, label }) => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';

      const spinner = document.createElement('div');
      const classes = ['aural-spinner', 'aural-spinner--primary'];

      if (sizeClass) {
        classes.push(`aural-spinner--${sizeClass}`);
      }

      spinner.className = classes.join(' ');

      const circle = document.createElement('div');
      circle.className = 'aural-spinner__circle';
      spinner.appendChild(circle);

      const labelEl = document.createElement('p');
      labelEl.style.marginTop = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;

      wrapper.appendChild(spinner);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const AllColors: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';

    const colors = [
      { class: 'primary', label: 'Primary' },
      { class: 'secondary', label: 'Secondary' },
      { class: 'success', label: 'Success' },
      { class: 'warning', label: 'Warning' },
      { class: 'error', label: 'Error' }
    ];

    colors.forEach(({ class: colorClass, label }) => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';

      const spinner = document.createElement('div');
      spinner.className = `aural-spinner aural-spinner--${colorClass}`;

      const circle = document.createElement('div');
      circle.className = 'aural-spinner__circle';
      spinner.appendChild(circle);

      const labelEl = document.createElement('p');
      labelEl.style.marginTop = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;

      wrapper.appendChild(spinner);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const InButtons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-4)';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';

    // Primary button with white spinner
    const button1 = document.createElement('button');
    button1.className = 'btn btn-primary';
    button1.disabled = true;
    button1.setAttribute('aria-busy', 'true');

    const spinner1 = document.createElement('span');
    spinner1.className = 'aural-spinner aural-spinner--xs aural-spinner--white';
    spinner1.setAttribute('role', 'status');
    spinner1.setAttribute('aria-label', 'Loading');

    const circle1 = document.createElement('span');
    circle1.className = 'aural-spinner__circle';
    spinner1.appendChild(circle1);

    const text1 = document.createElement('span');
    text1.textContent = 'Loading...';

    button1.appendChild(spinner1);
    button1.appendChild(text1);

    // Secondary button with primary spinner
    const button2 = document.createElement('button');
    button2.className = 'btn btn-secondary';
    button2.disabled = true;
    button2.setAttribute('aria-busy', 'true');

    const spinner2 = document.createElement('span');
    spinner2.className = 'aural-spinner aural-spinner--xs aural-spinner--primary';
    spinner2.setAttribute('role', 'status');
    spinner2.setAttribute('aria-label', 'Processing');

    const circle2 = document.createElement('span');
    circle2.className = 'aural-spinner__circle';
    spinner2.appendChild(circle2);

    const text2 = document.createElement('span');
    text2.textContent = 'Processing';

    button2.appendChild(spinner2);
    button2.appendChild(text2);

    // Success button with white spinner
    const button3 = document.createElement('button');
    button3.className = 'btn btn-success';
    button3.disabled = true;
    button3.setAttribute('aria-busy', 'true');

    const spinner3 = document.createElement('span');
    spinner3.className = 'aural-spinner aural-spinner--xs aural-spinner--white';
    spinner3.setAttribute('role', 'status');
    spinner3.setAttribute('aria-label', 'Saving');

    const circle3 = document.createElement('span');
    circle3.className = 'aural-spinner__circle';
    spinner3.appendChild(circle3);

    const text3 = document.createElement('span');
    text3.textContent = 'Saving...';

    button3.appendChild(spinner3);
    button3.appendChild(text3);

    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);

    return container;
  }
};

export const WithText: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';

    // Default spinner with text
    const spinner1 = document.createElement('div');
    spinner1.className = 'aural-spinner aural-spinner--with-text aural-spinner--primary';

    const circle1 = document.createElement('div');
    circle1.className = 'aural-spinner__circle';
    spinner1.appendChild(circle1);

    const text1 = document.createElement('span');
    text1.className = 'aural-spinner__text';
    text1.textContent = 'Loading...';
    spinner1.appendChild(text1);

    // Success spinner with text
    const spinner2 = document.createElement('div');
    spinner2.className = 'aural-spinner aural-spinner--with-text aural-spinner--success';

    const circle2 = document.createElement('div');
    circle2.className = 'aural-spinner__circle';
    spinner2.appendChild(circle2);

    const text2 = document.createElement('span');
    text2.className = 'aural-spinner__text';
    text2.textContent = 'Processing';
    spinner2.appendChild(text2);

    // Dots spinner with text
    const spinner3 = document.createElement('div');
    spinner3.className = 'aural-spinner aural-spinner--with-text aural-spinner--dots aural-spinner--primary';

    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('div');
      dot.className = 'aural-spinner__dot';
      spinner3.appendChild(dot);
    }

    const text3 = document.createElement('span');
    text3.className = 'aural-spinner__text';
    text3.textContent = 'Please wait';
    spinner3.appendChild(text3);

    container.appendChild(spinner1);
    container.appendChild(spinner2);
    container.appendChild(spinner3);

    return container;
  }
};

export const LoadingCard: Story = {
  render: () => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '400px';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    cardContent.style.display = 'flex';
    cardContent.style.flexDirection = 'column';
    cardContent.style.alignItems = 'center';
    cardContent.style.gap = 'var(--space-4)';
    cardContent.style.padding = 'var(--space-8)';

    const spinner = document.createElement('div');
    spinner.className = 'aural-spinner aural-spinner--lg aural-spinner--primary';

    const circle = document.createElement('div');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);

    const text = document.createElement('p');
    text.style.color = 'var(--color-text-secondary)';
    text.style.margin = '0';
    text.textContent = 'Loading content...';

    cardContent.appendChild(spinner);
    cardContent.appendChild(text);
    card.appendChild(cardContent);

    return card;
  }
};

export const InlineLoading: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = 'var(--space-3)';
    container.style.padding = 'var(--space-6)';

    const spinner = document.createElement('span');
    spinner.className = 'aural-spinner aural-spinner--xs aural-spinner--primary';

    const circle = document.createElement('span');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);

    const text = document.createElement('span');
    text.style.color = 'var(--color-text-secondary)';
    text.textContent = 'Fetching data from server...';

    container.appendChild(spinner);
    container.appendChild(text);

    return container;
  }
};

export const FullPageOverlay: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.height = '300px';
    container.style.background = 'var(--color-bg-primary)';
    container.style.borderRadius = 'var(--radius-md)';
    container.style.overflow = 'hidden';

    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0, 0, 0, 0.6)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.backdropFilter = 'blur(2px)';

    const spinner = document.createElement('div');
    spinner.className = 'aural-spinner aural-spinner--with-text aural-spinner--xl aural-spinner--white';

    const circle = document.createElement('div');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);

    const text = document.createElement('span');
    text.className = 'aural-spinner__text';
    text.textContent = 'Loading application...';
    spinner.appendChild(text);

    overlay.appendChild(spinner);
    container.appendChild(overlay);

    return container;
  }
};

export const FormSubmission: Story = {
  render: () => {
    const form = document.createElement('form');
    form.style.maxWidth = '400px';
    form.style.padding = 'var(--space-6)';

    // Email field
    const emailGroup = document.createElement('div');
    emailGroup.style.marginBottom = 'var(--space-4)';

    const emailLabel = document.createElement('label');
    emailLabel.style.display = 'block';
    emailLabel.style.marginBottom = 'var(--space-2)';
    emailLabel.style.color = 'var(--color-text-primary)';
    emailLabel.textContent = 'Email';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.className = 'input';
    emailInput.placeholder = 'Enter your email';
    emailInput.disabled = true;

    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);

    // Password field
    const passwordGroup = document.createElement('div');
    passwordGroup.style.marginBottom = 'var(--space-4)';

    const passwordLabel = document.createElement('label');
    passwordLabel.style.display = 'block';
    passwordLabel.style.marginBottom = 'var(--space-2)';
    passwordLabel.style.color = 'var(--color-text-primary)';
    passwordLabel.textContent = 'Password';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.className = 'input';
    passwordInput.placeholder = 'Enter your password';
    passwordInput.disabled = true;

    passwordGroup.appendChild(passwordLabel);
    passwordGroup.appendChild(passwordInput);

    // Submit button
    const button = document.createElement('button');
    button.className = 'btn btn-primary btn-block';
    button.disabled = true;

    const spinner = document.createElement('span');
    spinner.className = 'aural-spinner aural-spinner--xs aural-spinner--white';

    const circle = document.createElement('span');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);

    const buttonText = document.createElement('span');
    buttonText.textContent = 'Signing in...';

    button.appendChild(spinner);
    button.appendChild(buttonText);

    form.appendChild(emailGroup);
    form.appendChild(passwordGroup);
    form.appendChild(button);

    return form;
  }
};
