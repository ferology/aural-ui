import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Progress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Progress bar to show task completion or loading state.'
      }
    }
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)'
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Progress bar color'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Progress bar size'
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label'
    },
    striped: {
      control: 'boolean',
      description: 'Striped pattern'
    },
    animated: {
      control: 'boolean',
      description: 'Animated stripes'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const progress = document.createElement('div');
    progress.className = `progress progress-${args.size}`;

    const bar = document.createElement('div');
    bar.className = `progress-bar ${args.variant !== 'default' ? `progress-bar-${args.variant}` : ''} ${args.striped ? 'progress-bar-striped' : ''} ${args.animated ? 'progress-bar-animated' : ''}`;
    bar.style.width = `${args.value}%`;
    bar.setAttribute('role', 'progressbar');
    bar.setAttribute('aria-valuenow', args.value.toString());
    bar.setAttribute('aria-valuemin', '0');
    bar.setAttribute('aria-valuemax', '100');

    if (args.showLabel) {
      bar.innerHTML = `<span class="progress-label">${args.value}%</span>`;
    }

    progress.appendChild(bar);
    container.appendChild(progress);

    return container;
  },
  args: {
    value: 60,
    variant: 'primary',
    size: 'md',
    showLabel: false,
    striped: false,
    animated: false
  }
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1.5rem';

    const variants = [
      { name: 'default', value: 30, label: 'Default' },
      { name: 'primary', value: 50, label: 'Primary' },
      { name: 'success', value: 70, label: 'Success' },
      { name: 'warning', value: 85, label: 'Warning' },
      { name: 'error', value: 95, label: 'Error' }
    ];

    variants.forEach(({ name, value, label }) => {
      const wrapper = document.createElement('div');

      const labelEl = document.createElement('div');
      labelEl.style.marginBottom = '0.5rem';
      labelEl.textContent = label;
      wrapper.appendChild(labelEl);

      const progress = document.createElement('div');
      progress.className = 'progress';

      const bar = document.createElement('div');
      bar.className = `progress-bar progress-bar-${name}`;
      bar.style.width = `${value}%`;

      progress.appendChild(bar);
      wrapper.appendChild(progress);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const WithLabels: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1.5rem';

    const items = [
      { value: 25, variant: 'primary' },
      { value: 50, variant: 'success' },
      { value: 75, variant: 'warning' },
      { value: 100, variant: 'error' }
    ];

    items.forEach(({ value, variant }) => {
      const progress = document.createElement('div');
      progress.className = 'progress';

      const bar = document.createElement('div');
      bar.className = `progress-bar progress-bar-${variant}`;
      bar.style.width = `${value}%`;
      bar.innerHTML = `<span class="progress-label">${value}%</span>`;

      progress.appendChild(bar);
      container.appendChild(progress);
    });

    return container;
  }
};

export const Striped: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const progress = document.createElement('div');
    progress.className = 'progress';

    const bar = document.createElement('div');
    bar.className = 'progress-bar progress-bar-primary progress-bar-striped';
    bar.style.width = '70%';

    progress.appendChild(bar);
    container.appendChild(progress);

    return container;
  }
};

export const Animated: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const progress = document.createElement('div');
    progress.className = 'progress';

    const bar = document.createElement('div');
    bar.className = 'progress-bar progress-bar-primary progress-bar-striped progress-bar-animated';
    bar.style.width = '70%';

    progress.appendChild(bar);
    container.appendChild(progress);

    return container;
  }
};

export const Sizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1.5rem';

    const sizes = ['sm', 'md', 'lg'];

    sizes.forEach(size => {
      const wrapper = document.createElement('div');

      const label = document.createElement('div');
      label.style.marginBottom = '0.5rem';
      label.textContent = size.toUpperCase();
      wrapper.appendChild(label);

      const progress = document.createElement('div');
      progress.className = `progress progress-${size}`;

      const bar = document.createElement('div');
      bar.className = 'progress-bar progress-bar-primary';
      bar.style.width = '60%';

      progress.appendChild(bar);
      wrapper.appendChild(progress);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const LoadingExample: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const title = document.createElement('h3');
    title.textContent = 'Upload Progress';
    title.style.marginTop = '0';
    container.appendChild(title);

    const progress = document.createElement('div');
    progress.className = 'progress';

    const bar = document.createElement('div');
    bar.className = 'progress-bar progress-bar-success progress-bar-striped progress-bar-animated';
    bar.style.width = '0%';
    bar.innerHTML = '<span class="progress-label">0%</span>';

    progress.appendChild(bar);
    container.appendChild(progress);

    // Simulate upload progress
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 15;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }
      bar.style.width = `${value}%`;
      bar.querySelector('.progress-label').textContent = `${Math.round(value)}%`;
    }, 500);

    return container;
  }
};
