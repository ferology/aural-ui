import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Progress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Visual indicators for ongoing operations, loading states, and task completion showing progress percentage or indeterminate activity.'
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
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Progress bar semantic color'
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'Progress bar size'
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label inside the bar (recommended for xl size)'
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate progress (animated when duration is unknown)'
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for the progress bar'
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
    const progressClasses = ['progress'];

    if (args.size && args.size !== 'default') {
      progressClasses.push(`progress-${args.size}`);
    }
    if (args.variant && args.variant !== 'default') {
      progressClasses.push(`progress-${args.variant}`);
    }
    if (args.indeterminate) {
      progressClasses.push('progress-indeterminate');
    }

    progress.className = progressClasses.join(' ');

    // ARIA attributes on wrapper (not on bar)
    if (!args.indeterminate) {
      progress.setAttribute('role', 'progressbar');
      progress.setAttribute('aria-label', args.ariaLabel || 'Progress');
      progress.setAttribute('aria-valuenow', args.value.toString());
      progress.setAttribute('aria-valuemin', '0');
      progress.setAttribute('aria-valuemax', '100');
    }

    const bar = document.createElement('div');
    bar.className = 'progress-bar';

    if (!args.indeterminate) {
      bar.style.width = `${args.value}%`;
    }

    if (args.showLabel && !args.indeterminate) {
      bar.textContent = `${args.value}%`;
    }

    progress.appendChild(bar);
    container.appendChild(progress);

    return container;
  },
  args: {
    value: 65,
    variant: 'default',
    size: 'default',
    showLabel: false,
    indeterminate: false,
    ariaLabel: 'Progress'
  }
};

export const BasicProgress: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    // Label and percentage
    const header = document.createElement('div');
    header.style.marginBottom = 'var(--space-2)';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';

    const label = document.createElement('span');
    label.style.fontSize = 'var(--text-sm)';
    label.style.color = 'var(--color-text-secondary)';
    label.textContent = 'Uploading files...';

    const percentage = document.createElement('span');
    percentage.style.fontSize = 'var(--text-sm)';
    percentage.style.fontWeight = 'var(--font-semibold)';
    percentage.style.color = 'var(--color-text-primary)';
    percentage.textContent = '65%';

    header.appendChild(label);
    header.appendChild(percentage);
    container.appendChild(header);

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'File upload progress');
    progress.setAttribute('aria-valuenow', '65');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');

    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.style.width = '65%';

    progress.appendChild(bar);
    container.appendChild(progress);

    return container;
  }
};

export const IndeterminateProgress: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    // Default indeterminate
    const wrapper1 = document.createElement('div');
    const label1 = document.createElement('div');
    label1.style.marginBottom = 'var(--space-2)';
    label1.style.fontSize = 'var(--text-sm)';
    label1.style.color = 'var(--color-text-secondary)';
    label1.textContent = 'Processing data...';
    wrapper1.appendChild(label1);

    const progress1 = document.createElement('div');
    progress1.className = 'progress progress-indeterminate';
    const bar1 = document.createElement('div');
    bar1.className = 'progress-bar';
    progress1.appendChild(bar1);
    wrapper1.appendChild(progress1);
    container.appendChild(wrapper1);

    // Info indeterminate
    const wrapper2 = document.createElement('div');
    const label2 = document.createElement('div');
    label2.style.marginBottom = 'var(--space-2)';
    label2.style.fontSize = 'var(--text-sm)';
    label2.style.color = 'var(--color-text-secondary)';
    label2.textContent = 'Connecting to server...';
    wrapper2.appendChild(label2);

    const progress2 = document.createElement('div');
    progress2.className = 'progress progress-indeterminate progress-info';
    const bar2 = document.createElement('div');
    bar2.className = 'progress-bar';
    progress2.appendChild(bar2);
    wrapper2.appendChild(progress2);
    container.appendChild(wrapper2);

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
    container.style.gap = 'var(--space-6)';

    const sizes = [
      { size: 'progress-sm', label: 'Small - Inline progress', value: 60 },
      { size: 'progress', label: 'Default - Standard progress', value: 60 },
      { size: 'progress-lg', label: 'Large - Prominent progress', value: 60 },
      { size: 'progress-xl', label: 'Extra Large - With label inside', value: 60, showLabel: true }
    ];

    sizes.forEach(({ size, label, value, showLabel }) => {
      const wrapper = document.createElement('div');

      const labelEl = document.createElement('div');
      labelEl.style.marginBottom = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;
      wrapper.appendChild(labelEl);

      const progress = document.createElement('div');
      progress.className = size;

      const bar = document.createElement('div');
      bar.className = 'progress-bar';
      bar.style.width = `${value}%`;

      if (showLabel) {
        bar.textContent = `${value}%`;
      }

      progress.appendChild(bar);
      wrapper.appendChild(progress);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const SemanticColors: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    const variants = [
      { variant: '', label: 'Default Progress', value: 45, ariaLabel: 'Default progress' },
      { variant: 'progress-success', label: 'Installation Complete', value: 100, ariaLabel: 'Installation complete' },
      { variant: 'progress-warning', label: 'Disk Space Warning', value: 85, ariaLabel: 'Disk space usage' },
      { variant: 'progress-error', label: 'Upload Failed', value: 30, ariaLabel: 'Upload failed at 30%' },
      { variant: 'progress-info', label: 'Download in Progress', value: 70, ariaLabel: 'Download progress' }
    ];

    variants.forEach(({ variant, label, value, ariaLabel }) => {
      const wrapper = document.createElement('div');

      const labelEl = document.createElement('div');
      labelEl.style.marginBottom = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;
      wrapper.appendChild(labelEl);

      const progress = document.createElement('div');
      progress.className = variant ? `progress ${variant}` : 'progress';
      progress.setAttribute('role', 'progressbar');
      progress.setAttribute('aria-label', ariaLabel);
      progress.setAttribute('aria-valuenow', value.toString());
      progress.setAttribute('aria-valuemin', '0');
      progress.setAttribute('aria-valuemax', '100');

      const bar = document.createElement('div');
      bar.className = 'progress-bar';
      bar.style.width = `${value}%`;

      progress.appendChild(bar);
      wrapper.appendChild(progress);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const FileUploadPattern: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const card = document.createElement('div');
    card.style.background = 'var(--color-bg-primary)';
    card.style.padding = 'var(--space-4)';
    card.style.borderRadius = 'var(--radius-md)';
    card.style.border = '1px solid var(--color-border-medium)';

    // File info row
    const fileRow = document.createElement('div');
    fileRow.style.display = 'flex';
    fileRow.style.alignItems = 'center';
    fileRow.style.gap = 'var(--space-3)';
    fileRow.style.marginBottom = 'var(--space-3)';

    // File icon
    const iconBox = document.createElement('div');
    iconBox.style.width = '40px';
    iconBox.style.height = '40px';
    iconBox.style.background = 'var(--color-primary-subtle)';
    iconBox.style.borderRadius = 'var(--radius-md)';
    iconBox.style.display = 'flex';
    iconBox.style.alignItems = 'center';
    iconBox.style.justifyContent = 'center';
    iconBox.style.flexShrink = '0';
    iconBox.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';

    // File details
    const fileDetails = document.createElement('div');
    fileDetails.style.flex = '1';
    fileDetails.style.minWidth = '0';

    const fileName = document.createElement('div');
    fileName.style.fontWeight = 'var(--font-semibold)';
    fileName.style.color = 'var(--color-text-primary)';
    fileName.style.marginBottom = 'var(--space-1)';
    fileName.textContent = 'annual-report-2024.pdf';

    const fileSize = document.createElement('div');
    fileSize.style.fontSize = 'var(--text-sm)';
    fileSize.style.color = 'var(--color-text-tertiary)';
    fileSize.textContent = '2.4 MB of 3.2 MB • 45 seconds remaining';

    fileDetails.appendChild(fileName);
    fileDetails.appendChild(fileSize);

    // Cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'btn btn-ghost btn-sm';
    cancelBtn.style.flexShrink = '0';
    cancelBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

    fileRow.appendChild(iconBox);
    fileRow.appendChild(fileDetails);
    fileRow.appendChild(cancelBtn);

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'File upload progress');
    progress.setAttribute('aria-valuenow', '75');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');

    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.style.width = '75%';

    progress.appendChild(bar);

    card.appendChild(fileRow);
    card.appendChild(progress);
    container.appendChild(card);

    return container;
  }
};

export const MultiStepProgress: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    // Progress header
    const header = document.createElement('div');
    header.style.marginBottom = 'var(--space-4)';

    const headerRow = document.createElement('div');
    headerRow.style.display = 'flex';
    headerRow.style.justifyContent = 'space-between';
    headerRow.style.marginBottom = 'var(--space-3)';

    const stepLabel = document.createElement('span');
    stepLabel.style.fontSize = 'var(--text-sm)';
    stepLabel.style.color = 'var(--color-text-secondary)';
    stepLabel.textContent = 'Step 2 of 4: Payment Information';

    const percentage = document.createElement('span');
    percentage.style.fontSize = 'var(--text-sm)';
    percentage.style.fontWeight = 'var(--font-semibold)';
    percentage.style.color = 'var(--color-text-primary)';
    percentage.textContent = '50%';

    headerRow.appendChild(stepLabel);
    headerRow.appendChild(percentage);
    header.appendChild(headerRow);

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'progress progress-lg';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'Checkout progress: step 2 of 4');
    progress.setAttribute('aria-valuenow', '50');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');

    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.style.width = '50%';

    progress.appendChild(bar);
    header.appendChild(progress);
    container.appendChild(header);

    // Step indicators
    const steps = document.createElement('div');
    steps.style.display = 'grid';
    steps.style.gridTemplateColumns = 'repeat(4, 1fr)';
    steps.style.gap = 'var(--space-2)';

    const stepData = [
      { icon: '✓', label: 'Account', state: 'complete' },
      { icon: '💳', label: 'Payment', state: 'current' },
      { icon: '🚚', label: 'Shipping', state: 'pending' },
      { icon: '✓', label: 'Confirm', state: 'pending' }
    ];

    stepData.forEach(({ icon, label, state }) => {
      const step = document.createElement('div');
      step.style.textAlign = 'center';
      step.style.padding = 'var(--space-2)';
      step.style.borderRadius = 'var(--radius-sm)';

      if (state === 'complete') {
        step.style.background = 'var(--color-success-subtle)';
      } else if (state === 'current') {
        step.style.background = 'var(--color-primary-subtle)';
      } else {
        step.style.opacity = '0.5';
      }

      const iconEl = document.createElement('div');
      iconEl.style.marginBottom = 'var(--space-1)';
      iconEl.textContent = icon;

      const labelEl = document.createElement('div');
      labelEl.style.fontSize = 'var(--text-xs)';
      labelEl.style.color = state === 'current' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)';
      if (state === 'current') {
        labelEl.style.fontWeight = 'var(--font-semibold)';
      }
      labelEl.textContent = label;

      step.appendChild(iconEl);
      step.appendChild(labelEl);
      steps.appendChild(step);
    });

    container.appendChild(steps);

    return container;
  }
};

export const DashboardStats: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '900px';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    container.style.gap = 'var(--space-6)';

    const stats = [
      { title: 'Disk Usage', value: '45.2 GB', total: '100 GB', percentage: 45, variant: '' },
      { title: 'Memory Usage', value: '13.6 GB', total: '16 GB', percentage: 85, variant: 'progress-warning' }
    ];

    stats.forEach(({ title, value, total, percentage, variant }) => {
      const card = document.createElement('div');
      card.className = 'card';

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      // Header
      const header = document.createElement('div');
      header.style.marginBottom = 'var(--space-3)';

      const titleEl = document.createElement('div');
      titleEl.style.fontSize = 'var(--text-sm)';
      titleEl.style.color = 'var(--color-text-tertiary)';
      titleEl.style.marginBottom = 'var(--space-1)';
      titleEl.textContent = title;

      const valueEl = document.createElement('div');
      valueEl.style.fontSize = 'var(--text-2xl)';
      valueEl.style.fontWeight = 'var(--font-bold)';
      valueEl.style.color = 'var(--color-text-primary)';
      valueEl.textContent = value;

      header.appendChild(titleEl);
      header.appendChild(valueEl);

      // Progress section
      const progressSection = document.createElement('div');
      progressSection.style.marginTop = 'var(--space-4)';

      const progressLabel = document.createElement('div');
      progressLabel.style.display = 'flex';
      progressLabel.style.justifyContent = 'space-between';
      progressLabel.style.marginBottom = 'var(--space-2)';
      progressLabel.style.fontSize = 'var(--text-sm)';

      const totalLabel = document.createElement('span');
      totalLabel.style.color = 'var(--color-text-tertiary)';
      totalLabel.textContent = `${value} of ${total}`;

      const percentLabel = document.createElement('span');
      percentLabel.style.color = variant.includes('warning') ? 'var(--color-warning)' : 'var(--color-text-primary)';
      percentLabel.style.fontWeight = 'var(--font-semibold)';
      percentLabel.textContent = `${percentage}%`;

      progressLabel.appendChild(totalLabel);
      progressLabel.appendChild(percentLabel);

      const progress = document.createElement('div');
      progress.className = variant ? `progress ${variant}` : 'progress';

      const bar = document.createElement('div');
      bar.className = 'progress-bar';
      bar.style.width = `${percentage}%`;

      progress.appendChild(bar);
      progressSection.appendChild(progressLabel);
      progressSection.appendChild(progress);

      cardBody.appendChild(header);
      cardBody.appendChild(progressSection);
      card.appendChild(cardBody);
      container.appendChild(card);
    });

    return container;
  }
};

export const AnimatedUpload: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const title = document.createElement('h3');
    title.textContent = 'Simulated Upload Progress';
    title.style.marginTop = '0';
    title.style.marginBottom = 'var(--space-3)';
    container.appendChild(title);

    // Progress header
    const header = document.createElement('div');
    header.style.marginBottom = 'var(--space-2)';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';

    const label = document.createElement('span');
    label.style.fontSize = 'var(--text-sm)';
    label.style.color = 'var(--color-text-secondary)';
    label.textContent = 'Uploading...';

    const percentageLabel = document.createElement('span');
    percentageLabel.style.fontSize = 'var(--text-sm)';
    percentageLabel.style.fontWeight = 'var(--font-semibold)';
    percentageLabel.style.color = 'var(--color-text-primary)';
    percentageLabel.textContent = '0%';

    header.appendChild(label);
    header.appendChild(percentageLabel);
    container.appendChild(header);

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'Upload progress');
    progress.setAttribute('aria-valuenow', '0');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');

    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.style.width = '0%';

    progress.appendChild(bar);
    container.appendChild(progress);

    // Simulate upload progress
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 15;
      if (value >= 100) {
        value = 100;
        label.textContent = 'Upload complete!';
        progress.classList.add('progress-success');
        clearInterval(interval);
      }
      bar.style.width = `${value}%`;
      percentageLabel.textContent = `${Math.round(value)}%`;
      progress.setAttribute('aria-valuenow', Math.round(value).toString());
    }, 500);

    return container;
  }
};
