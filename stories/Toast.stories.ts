import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Toast notifications for feedback messages with auto-dismiss.'
      }
    }
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Toast message'
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Toast type'
    },
    title: {
      control: 'text',
      description: 'Toast title'
    },
    duration: {
      control: { type: 'range', min: 0, max: 10000, step: 1000 },
      description: 'Auto-dismiss duration (ms), 0 for persistent'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Success: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-success';
    button.textContent = 'Show Success Toast';

    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(
          args.message,
          args.type,
          args.title,
          args.duration
        );
      }
    };

    container.appendChild(button);
    return container;
  },
  args: {
    message: 'Your changes have been saved successfully!',
    type: 'success',
    title: 'Success',
    duration: 3000
  }
};

export const Error: Story = {
  ...Success,
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-danger';
    button.textContent = 'Show Error Toast';

    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(
          args.message,
          args.type,
          args.title,
          args.duration
        );
      }
    };

    container.appendChild(button);
    return container;
  },
  args: {
    message: 'Something went wrong. Please try again.',
    type: 'error',
    title: 'Error',
    duration: 3000
  }
};

export const Warning: Story = {
  ...Success,
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn';
    button.style.backgroundColor = 'var(--color-warning)';
    button.textContent = 'Show Warning Toast';

    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(
          args.message,
          args.type,
          args.title,
          args.duration
        );
      }
    };

    container.appendChild(button);
    return container;
  },
  args: {
    message: 'Your session will expire in 5 minutes.',
    type: 'warning',
    title: 'Warning',
    duration: 5000
  }
};

export const Info: Story = {
  ...Success,
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-outline';
    button.textContent = 'Show Info Toast';

    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(
          args.message,
          args.type,
          args.title,
          args.duration
        );
      }
    };

    container.appendChild(button);
    return container;
  },
  args: {
    message: 'A new version is available. Click to update.',
    type: 'info',
    title: 'Info',
    duration: 3000
  }
};

export const AllTypes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';

    const toasts = [
      { type: 'success', message: 'Operation completed!', className: 'btn-success' },
      { type: 'error', message: 'Something went wrong!', className: 'btn-danger' },
      { type: 'warning', message: 'Please be careful!', className: '' },
      { type: 'info', message: 'Here is some info!', className: 'btn-outline' }
    ];

    toasts.forEach(({ type, message, className }) => {
      const button = document.createElement('button');
      button.className = `btn ${className}`;
      if (type === 'warning') {
        button.style.backgroundColor = 'var(--color-warning)';
      }
      button.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`;

      button.onclick = () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showToast(message, type as any, type.charAt(0).toUpperCase() + type.slice(1), 3000);
        }
      };

      container.appendChild(button);
    });

    return container;
  }
};

export const Persistent: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Show Persistent Toast (No Auto-Dismiss)';

    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(
          'This toast will not auto-dismiss. Click the X to close.',
          'info',
          'Persistent',
          0 // duration 0 = no auto-dismiss
        );
      }
    };

    container.appendChild(button);
    return container;
  }
};

export const LongMessage: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Show Long Message';

    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(
          'This is a much longer message that demonstrates how the toast handles longer content. It should wrap properly and maintain good readability.',
          'info',
          'Long Message',
          5000
        );
      }
    };

    container.appendChild(button);
    return container;
  }
};
