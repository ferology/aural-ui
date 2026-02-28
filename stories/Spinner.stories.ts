import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Spinner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Loading spinner indicator with multiple sizes and variants.'
      }
    }
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Spinner size'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'white'],
      description: 'Spinner color'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const spinner = document.createElement('div');
    spinner.className = `spinner spinner-${args.size} spinner-${args.variant}`;
    spinner.setAttribute('role', 'status');
    spinner.setAttribute('aria-label', 'Loading...');

    spinner.innerHTML = `
      <svg class="spinner-svg" viewBox="0 0 50 50">
        <circle
          class="spinner-circle"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="4"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    `;

    return spinner;
  },
  args: {
    size: 'md',
    variant: 'primary'
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '2rem';
    container.style.alignItems = 'center';
    container.style.padding = '2rem';

    const sizes = ['sm', 'md', 'lg', 'xl'];

    sizes.forEach(size => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';

      const spinner = document.createElement('div');
      spinner.className = `spinner spinner-${size} spinner-primary`;
      spinner.innerHTML = `
        <svg class="spinner-svg" viewBox="0 0 50 50">
          <circle class="spinner-circle" cx="25" cy="25" r="20" fill="none" stroke-width="4" />
        </svg>
      `;

      const label = document.createElement('div');
      label.style.marginTop = '0.5rem';
      label.style.fontSize = '0.875rem';
      label.textContent = size.toUpperCase();

      wrapper.appendChild(spinner);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '2rem';
    container.style.padding = '2rem';

    const variants = [
      { name: 'primary', label: 'Primary' },
      { name: 'secondary', label: 'Secondary' },
      { name: 'white', label: 'White', bg: '#333' }
    ];

    variants.forEach(({ name, label, bg }) => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';
      if (bg) {
        wrapper.style.backgroundColor = bg;
        wrapper.style.padding = '1rem';
        wrapper.style.borderRadius = '0.5rem';
      }

      const spinner = document.createElement('div');
      spinner.className = `spinner spinner-md spinner-${name}`;
      spinner.innerHTML = `
        <svg class="spinner-svg" viewBox="0 0 50 50">
          <circle class="spinner-circle" cx="25" cy="25" r="20" fill="none" stroke-width="4" />
        </svg>
      `;

      const labelEl = document.createElement('div');
      labelEl.style.marginTop = '0.5rem';
      labelEl.style.fontSize = '0.875rem';
      if (bg) labelEl.style.color = 'white';
      labelEl.textContent = label;

      wrapper.appendChild(spinner);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const InButton: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';

    const button1 = document.createElement('button');
    button1.className = 'btn btn-primary';
    button1.disabled = true;
    button1.innerHTML = `
      <div class="spinner spinner-sm spinner-white" style="display: inline-block; margin-right: 0.5rem;">
        <svg class="spinner-svg" viewBox="0 0 50 50">
          <circle class="spinner-circle" cx="25" cy="25" r="20" fill="none" stroke-width="4" />
        </svg>
      </div>
      Loading...
    `;

    const button2 = document.createElement('button');
    button2.className = 'btn btn-outline';
    button2.disabled = true;
    button2.innerHTML = `
      <div class="spinner spinner-sm spinner-primary" style="display: inline-block; margin-right: 0.5rem;">
        <svg class="spinner-svg" viewBox="0 0 50 50">
          <circle class="spinner-circle" cx="25" cy="25" r="20" fill="none" stroke-width="4" />
        </svg>
      </div>
      Processing...
    `;

    container.appendChild(button1);
    container.appendChild(button2);

    return container;
  }
};

export const CenteredLoader: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.minHeight = '300px';
    container.style.gap = '1rem';

    const spinner = document.createElement('div');
    spinner.className = 'spinner spinner-lg spinner-primary';
    spinner.innerHTML = `
      <svg class="spinner-svg" viewBox="0 0 50 50">
        <circle class="spinner-circle" cx="25" cy="25" r="20" fill="none" stroke-width="4" />
      </svg>
    `;

    const text = document.createElement('div');
    text.textContent = 'Loading content...';
    text.style.color = 'var(--color-text-secondary)';

    container.appendChild(spinner);
    container.appendChild(text);

    return container;
  }
};
