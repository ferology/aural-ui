import type { Meta, StoryObj } from '@storybook/html';

declare const lucide: any;

const meta: Meta = {
  title: 'Components/Alert Banner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Prominent banners for important messages and system-wide alerts.'
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
      description: 'Alert title (optional)'
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

const iconMap = {
  'info': 'info',
  'success': 'check-circle',
  'warning': 'alert-triangle',
  'error': 'alert-circle'
};

export const Info: Story = {
  render: (args) => {
    const alert = document.createElement('div');
    alert.className = `aural-alert-banner aural-alert-banner--${args.variant}`;
    alert.setAttribute('role', 'alert');

    let content = `<i data-lucide="${iconMap[args.variant]}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>`;

    content += `<div class="aural-alert-banner__content">`;

    if (args.title) {
      content += `<div class="aural-alert-banner__title">${args.title}</div>`;
    }

    content += `<div class="aural-alert-banner__message">${args.message}</div>`;
    content += `</div>`;

    if (args.closable) {
      content += `<button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>`;
    }

    alert.innerHTML = content;

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

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
      alert.className = `aural-alert-banner aural-alert-banner--${variant}`;
      alert.setAttribute('role', 'alert');
      alert.innerHTML = `
        <i data-lucide="${iconMap[variant]}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
        <div class="aural-alert-banner__content">
          <div class="aural-alert-banner__title">${title}</div>
          <div class="aural-alert-banner__message">${message}</div>
        </div>
        <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      `;
      container.appendChild(alert);
    });

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

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
      { variant: 'info', icon: 'megaphone', title: 'New feature available', message: 'Check out our latest updates!' },
      { variant: 'success', icon: 'check-circle', title: 'Payment successful', message: 'Your payment has been processed.' },
      { variant: 'warning', icon: 'alert-triangle', title: 'Session expiring', message: 'Your session will expire in 5 minutes.' },
      { variant: 'error', icon: 'wifi-off', title: 'Upload failed', message: 'The file could not be uploaded.' }
    ];

    alerts.forEach(({ variant, icon, title, message }) => {
      const alert = document.createElement('div');
      alert.className = `aural-alert-banner aural-alert-banner--${variant}`;
      alert.setAttribute('role', 'alert');
      alert.innerHTML = `
        <i data-lucide="${icon}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
        <div class="aural-alert-banner__content">
          <div class="aural-alert-banner__title">${title}</div>
          <div class="aural-alert-banner__message">${message}</div>
        </div>
        <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      `;
      container.appendChild(alert);
    });

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const WithActions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const alert = document.createElement('div');
    alert.className = 'aural-alert-banner aural-alert-banner--info';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `
      <i data-lucide="megaphone" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Update Available</div>
        <div class="aural-alert-banner__message">A new version of the app is available. Update now to get the latest features.</div>
      </div>
      <button class="btn btn-sm btn-primary" style="margin-left: auto;">Update Now</button>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    `;

    container.appendChild(alert);

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const SimpleMessage: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const alert = document.createElement('div');
    alert.className = 'aural-alert-banner aural-alert-banner--success';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `
      <i data-lucide="check-circle" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__message">Changes saved successfully!</div>
      </div>
    `;

    container.appendChild(alert);

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const Banner: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '0';

    const banner = document.createElement('div');
    banner.className = 'aural-alert-banner aural-alert-banner--warning';
    banner.setAttribute('role', 'alert');
    banner.style.borderRadius = '0';
    banner.style.borderLeft = 'none';
    banner.style.borderRight = 'none';
    banner.style.borderTop = 'none';
    banner.innerHTML = `
      <i data-lucide="alert-triangle" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__message">
          Special offer! Get 50% off on all premium plans.
          <a href="#" style="color: inherit; text-decoration: underline; margin-left: 0.5rem;">Learn more</a>
        </div>
      </div>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    `;

    container.appendChild(banner);

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const Dismissible: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const alert = document.createElement('div');
    alert.className = 'aural-alert-banner aural-alert-banner--info';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `
      <i data-lucide="info" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Dismissible Alert</div>
        <div class="aural-alert-banner__message">This alert can be dismissed by clicking the X.</div>
      </div>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.style.display='none'">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    `;

    container.appendChild(alert);

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const WithLink: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const alert = document.createElement('div');
    alert.className = 'aural-alert-banner aural-alert-banner--error';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `
      <i data-lucide="wifi-off" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Connection Lost</div>
        <div class="aural-alert-banner__message">
          Unable to reach the server.
          <a href="#" style="color: inherit; text-decoration: underline;">Check your connection</a>
          or try again later.
        </div>
      </div>
    `;

    container.appendChild(alert);

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  }
};
