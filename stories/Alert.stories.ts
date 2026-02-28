import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Alert messages for important information and feedback.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Alert type'
    },
    title: {
      control: 'text',
      description: 'Alert title'
    },
    message: {
      control: 'text',
      description: 'Alert message'
    },
    closable: {
      control: 'boolean',
      description: 'Show close button'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Info: Story = {
  render: (args) => {
    const alert = document.createElement('div');
    alert.className = `alert alert-${args.variant}`;
    alert.setAttribute('role', 'alert');

    let content = '';

    if (args.title) {
      content += `<div class="alert-title">${args.title}</div>`;
    }

    content += `<div class="alert-message">${args.message}</div>`;

    if (args.closable) {
      content += `<button type="button" class="alert-close" aria-label="Close" onclick="this.parentElement.remove()">&times;</button>`;
    }

    alert.innerHTML = content;
    return alert;
  },
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an informational alert message.',
    closable: true
  }
};

export const Success: Story = {
  ...Info,
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your operation completed successfully!',
    closable: true
  }
};

export const Warning: Story = {
  ...Info,
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please review before proceeding.',
    closable: true
  }
};

export const Error: Story = {
  ...Info,
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    closable: true
  }
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';
    container.style.maxWidth = '600px';

    const alerts = [
      { variant: 'info', title: 'Info', message: 'This is an informational message.' },
      { variant: 'success', title: 'Success', message: 'Operation completed successfully!' },
      { variant: 'warning', title: 'Warning', message: 'Please be careful with this action.' },
      { variant: 'error', title: 'Error', message: 'An error occurred during processing.' }
    ];

    alerts.forEach(({ variant, title, message }) => {
      const alert = document.createElement('div');
      alert.className = `alert alert-${variant}`;
      alert.setAttribute('role', 'alert');
      alert.innerHTML = `
        <div class="alert-title">${title}</div>
        <div class="alert-message">${message}</div>
        <button type="button" class="alert-close" aria-label="Close" onclick="this.parentElement.remove()">&times;</button>
      `;
      container.appendChild(alert);
    });

    return container;
  }
};

export const WithIcon: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';
    container.style.maxWidth = '600px';

    const alerts = [
      { variant: 'info', icon: 'ℹ️', title: 'New feature available', message: 'Check out our latest updates!' },
      { variant: 'success', icon: '✅', title: 'Payment successful', message: 'Your payment has been processed.' },
      { variant: 'warning', icon: '⚠️', title: 'Session expiring', message: 'Your session will expire in 5 minutes.' },
      { variant: 'error', icon: '❌', title: 'Upload failed', message: 'The file could not be uploaded.' }
    ];

    alerts.forEach(({ variant, icon, title, message }) => {
      const alert = document.createElement('div');
      alert.className = `alert alert-${variant}`;
      alert.style.display = 'flex';
      alert.style.gap = '1rem';
      alert.innerHTML = `
        <div class="alert-icon" style="font-size: 1.5rem;">${icon}</div>
        <div style="flex: 1;">
          <div class="alert-title">${title}</div>
          <div class="alert-message">${message}</div>
        </div>
        <button type="button" class="alert-close" aria-label="Close" onclick="this.parentElement.remove()">&times;</button>
      `;
      container.appendChild(alert);
    });

    return container;
  }
};

export const WithActions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const alert = document.createElement('div');
    alert.className = 'alert alert-info';
    alert.innerHTML = `
      <div style="flex: 1;">
        <div class="alert-title">Update Available</div>
        <div class="alert-message">A new version of the app is available. Update now to get the latest features.</div>
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
          <button class="btn btn-primary btn-sm">Update Now</button>
          <button class="btn btn-ghost btn-sm">Remind Me Later</button>
        </div>
      </div>
      <button type="button" class="alert-close" aria-label="Close" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(alert);
    return container;
  }
};

export const SimpleMessage: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const alert = document.createElement('div');
    alert.className = 'alert alert-success';
    alert.innerHTML = `
      <div class="alert-message">Changes saved successfully!</div>
    `;

    container.appendChild(alert);
    return container;
  }
};

export const Banner: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '0';

    const banner = document.createElement('div');
    banner.className = 'alert alert-warning';
    banner.style.borderRadius = '0';
    banner.style.borderLeft = 'none';
    banner.style.borderRight = 'none';
    banner.style.borderTop = 'none';
    banner.innerHTML = `
      <div class="alert-message" style="text-align: center; width: 100%;">
        🎉 Special offer! Get 50% off on all premium plans.
        <a href="#" style="text-decoration: underline; font-weight: 600; margin-left: 0.5rem;">Learn more</a>
      </div>
      <button type="button" class="alert-close" aria-label="Close" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(banner);
    return container;
  }
};
