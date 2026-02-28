import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Temporary notification messages that appear at the corner of the screen. Toasts provide brief feedback for user actions and status updates.'
      }
    }
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'The message to display in the toast'
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Toast type: success, error, warning, or info'
    },
    title: {
      control: 'text',
      description: 'Optional custom title (defaults to type name)'
    },
    duration: {
      control: { type: 'range', min: 0, max: 10000, step: 1000 },
      description: 'Auto-dismiss duration in milliseconds (0 = persistent, default: 5000)'
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
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-error';
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
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-warning';
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
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-info';
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
      { type: 'success', message: 'Operation completed successfully!', className: 'btn-success' },
      { type: 'error', message: 'Something went wrong!', className: 'btn-error' },
      { type: 'warning', message: 'Please be careful!', className: 'btn-warning' },
      { type: 'info', message: 'Here is some information!', className: 'btn-info' }
    ];

    toasts.forEach(({ type, message, className }) => {
      const button = document.createElement('button');
      button.className = `btn ${className}`;
      button.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`;

      button.onclick = () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showToast(
            message,
            type as any,
            type.charAt(0).toUpperCase() + type.slice(1),
            3000
          );
        }
      };

      container.appendChild(button);
    });

    return container;
  }
};

export const WithTitle: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';

    const button1 = document.createElement('button');
    button1.className = 'btn btn-success';
    button1.textContent = 'Success with Title';
    button1.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(
          'Your profile has been updated successfully.',
          'success',
          'Profile Updated',
          4000
        );
      }
    };

    const button2 = document.createElement('button');
    button2.className = 'btn btn-error';
    button2.textContent = 'Error with Title';
    button2.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(
          'Unable to connect to the server. Please check your connection.',
          'error',
          'Connection Error',
          4000
        );
      }
    };

    container.appendChild(button1);
    container.appendChild(button2);
    return container;
  }
};

export const CustomDuration: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';

    const button1 = document.createElement('button');
    button1.className = 'btn btn-secondary';
    button1.textContent = 'Quick (2s)';
    button1.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(
          'This is a quick message that dismisses in 2 seconds.',
          'info',
          'Quick Message',
          2000
        );
      }
    };

    const button2 = document.createElement('button');
    button2.className = 'btn btn-secondary';
    button2.textContent = 'Long (8s)';
    button2.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(
          'This is a longer message that stays visible for 8 seconds.',
          'info',
          'Extended Message',
          8000
        );
      }
    };

    container.appendChild(button1);
    container.appendChild(button2);
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
          'This toast will not auto-dismiss. Click the X button to close it.',
          'info',
          'Persistent Notification',
          0 // duration 0 = no auto-dismiss
        );
      }
    };

    container.appendChild(button);
    return container;
  }
};

export const MultipleToasts: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Show Multiple Toasts';

    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast('First notification', 'success', 'Step 1', 4000);
        setTimeout(() => {
          window.Aural.showToast('Second notification', 'info', 'Step 2', 4000);
        }, 500);
        setTimeout(() => {
          window.Aural.showToast('Third notification', 'warning', 'Step 3', 4000);
        }, 1000);
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
          'This is a much longer message that demonstrates how the toast component handles extended content. It should wrap properly and maintain good readability even with multiple lines of text.',
          'info',
          'Long Message Example',
          6000
        );
      }
    };

    container.appendChild(button);
    return container;
  }
};

export const CommonUseCases: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';

    const useCases = [
      {
        label: 'Add to Cart',
        message: 'Product added to your cart',
        type: 'success',
        title: 'Cart Updated',
        className: 'btn-primary'
      },
      {
        label: 'Copy Link',
        message: 'Link copied to clipboard',
        type: 'info',
        title: null,
        className: 'btn-secondary'
      },
      {
        label: 'Delete Item',
        message: 'Item has been removed',
        type: 'error',
        title: 'Deleted',
        className: 'btn-error'
      },
      {
        label: 'Save Draft',
        message: 'Draft saved automatically',
        type: 'success',
        title: null,
        className: 'btn-success'
      }
    ];

    useCases.forEach(({ label, message, type, title, className }) => {
      const button = document.createElement('button');
      button.className = `btn ${className}`;
      button.textContent = label;

      button.onclick = () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showToast(message, type as any, title, 3000);
        }
      };

      container.appendChild(button);
    });

    return container;
  }
};
