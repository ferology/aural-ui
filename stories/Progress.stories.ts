import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Progress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Progress Component

Visual indicators for ongoing operations, file uploads, task completion, and loading states that show determinate progress (0-100%) or indeterminate activity when duration is unknown.

Use Progress bars for operations with measurable completion (file uploads, multi-step forms, data processing). For instant or unknown-duration loading, use **Spinners** instead. For content placeholders during initial load, use **Skeleton** screens.

Progress components provide real-time visual feedback that reassures users the system is working and helps estimate wait times, reducing perceived latency and abandonment.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Determinate Progress (known duration) -->
<div>
  <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
    <span style="font-size: 14px; color: var(--color-text-secondary);">
      Uploading files...
    </span>
    <span style="font-size: 14px; font-weight: 600;">65%</span>
  </div>
  <div
    class="progress"
    role="progressbar"
    aria-label="File upload progress"
    aria-valuenow="65"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="progress-bar" style="width: 65%"></div>
  </div>
</div>

<!-- Indeterminate Progress (unknown duration) -->
<div>
  <div style="margin-bottom: 8px; font-size: 14px; color: var(--color-text-secondary);">
    Processing data...
  </div>
  <div class="progress progress-indeterminate">
    <div class="progress-bar"></div>
  </div>
</div>

<!-- With Semantic Colors -->
<div
  class="progress progress-success"
  role="progressbar"
  aria-label="Installation complete"
  aria-valuenow="100"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div class="progress-bar" style="width: 100%"></div>
</div>
\`\`\`

**React:**
\`\`\`jsx
import { useState, useEffect } from 'react';

function ProgressBar({ value, max = 100, label, variant = 'default', size = 'default', indeterminate = false }) {
  if (indeterminate) {
    return (
      <div>
        {label && (
          <div className="text-sm text-secondary mb-2">{label}</div>
        )}
        <div className={\`progress progress-indeterminate progress-\${variant}\`}>
          <div className="progress-bar" />
        </div>
      </div>
    );
  }

  const percentage = Math.round((value / max) * 100);

  return (
    <div>
      {label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm text-secondary">{label}</span>
          <span className="text-sm font-semibold">{percentage}%</span>
        </div>
      )}
      <div
        className={\`progress progress-\${size} progress-\${variant}\`}
        role="progressbar"
        aria-label={label || 'Progress'}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax={max}
      >
        <div className="progress-bar" style={{ width: \`\${percentage}%\` }} />
      </div>
    </div>
  );
}

// Usage: File Upload Example
function FileUpload() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <ProgressBar
      value={progress}
      label="Uploading annual-report.pdf"
      variant={progress === 100 ? 'success' : 'default'}
    />
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div>
    <div v-if="label" class="flex justify-between mb-2">
      <span class="text-sm text-secondary">{{ label }}</span>
      <span v-if="!indeterminate" class="text-sm font-semibold">
        {{ percentage }}%
      </span>
    </div>
    <div
      :class="progressClasses"
      :role="indeterminate ? undefined : 'progressbar'"
      :aria-label="label || 'Progress'"
      :aria-valuenow="indeterminate ? undefined : value"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        class="progress-bar"
        :style="{ width: indeterminate ? undefined : \`\${percentage}%\` }"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  value: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  label: String,
  variant: { type: String, default: 'default' },
  size: { type: String, default: 'default' },
  indeterminate: Boolean
});

const percentage = computed(() => Math.round((props.value / props.max) * 100));

const progressClasses = computed(() => {
  const classes = ['progress'];
  if (props.indeterminate) classes.push('progress-indeterminate');
  if (props.variant !== 'default') classes.push(\`progress-\${props.variant}\`);
  if (props.size !== 'default') classes.push(\`progress-\${props.size}\`);
  return classes.join(' ');
});
</script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  export let value = 0;
  export let max = 100;
  export let label = '';
  export let variant = 'default';
  export let size = 'default';
  export let indeterminate = false;

  $: percentage = Math.round((value / max) * 100);
  $: progressClasses = [
    'progress',
    indeterminate && 'progress-indeterminate',
    variant !== 'default' && \`progress-\${variant}\`,
    size !== 'default' && \`progress-\${size}\`
  ].filter(Boolean).join(' ');
</script>

<div>
  {#if label}
    <div class="flex justify-between mb-2">
      <span class="text-sm text-secondary">{label}</span>
      {#if !indeterminate}
        <span class="text-sm font-semibold">{percentage}%</span>
      {/if}
    </div>
  {/if}

  <div
    class={progressClasses}
    role={indeterminate ? undefined : 'progressbar'}
    aria-label={label || 'Progress'}
    aria-valuenow={indeterminate ? undefined : value}
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div
      class="progress-bar"
      style={indeterminate ? '' : \`width: \${percentage}%\`}
    />
  </div>
</div>
\`\`\`

## Accessibility

1. **ARIA progressbar role** - Use \`role="progressbar"\` for determinate progress; omit for indeterminate (no meaningful value to announce)
2. **aria-valuenow updates** - Update \`aria-valuenow\` attribute in real-time as progress changes for screen reader announcements
3. **aria-valuemin/valuemax** - Always set \`aria-valuemin="0"\` and \`aria-valuemax="100"\` (or custom max) to establish scale
4. **Descriptive aria-label** - Provide context like \`aria-label="File upload progress"\` or \`aria-label="Installation step 2 of 4"\`
5. **Visual percentage display** - Show numeric percentage (e.g., "65%") adjacent to bar for users who can't perceive bar length
6. **Status text** - Include descriptive text above/below bar ("Uploading files...", "2.4 MB of 3.2 MB") for context
7. **Color + pattern** - Don't rely solely on color; use striped/animated patterns for indeterminate state
8. **Reduced motion** - Disable animations (indeterminate sliding, striped movement) for \`prefers-reduced-motion\`
9. **Completion announcement** - When progress reaches 100%, announce "Upload complete" via \`aria-live="polite"\` region
10. **Error handling** - If progress fails, change to error variant AND announce error message ("Upload failed at 45%")
11. **Keyboard focusable** - For interactive progress (pauseable uploads), make controls keyboard-accessible
12. **Minimum contrast** - Ensure 3:1 contrast ratio between bar fill and background (WCAG AA for graphical objects)
13. **Size accessibility** - Avoid progress-sm (4px) for critical operations; use progress-md (8px) or larger for visibility
14. **Tabular numerals** - Use \`font-variant-numeric: tabular-nums\` for percentage labels to prevent layout shift

## Usage Guidelines

### When to Use

- **File uploads** - Show bytes transferred and estimated time remaining
- **Multi-step forms** - "Step 2 of 4" progress through registration/checkout flows
- **Data processing** - Long-running operations like imports, exports, batch updates
- **Installation/setup** - Software installation, database migration, onboarding wizards
- **Loading with ETA** - Operations where you can calculate % complete and time remaining
- **Background tasks** - Non-blocking operations user can monitor while doing other work

### When NOT to Use

- **Instant operations** - Don't show progress for <500ms operations; use Spinner instead
- **Unknown duration** - If you can't estimate %, use indeterminate Spinner rather than fake progress
- **Page-level loading** - Use Skeleton screens for initial page load placeholders
- **Inline content loading** - Use Spinner for loading small sections (comments, notifications)
- **Real-time streaming** - For live data feeds, use activity indicators not progress bars
- **Downloads in browser** - Browser's native download UI is better; don't duplicate

### Best Practices

- Update progress smoothly (every 100-500ms) to avoid janky animation
- Show time remaining for operations >10 seconds ("45 seconds remaining")
- Use success variant (green) when reaching 100% to signal completion
- For indeterminate progress, add descriptive text ("Analyzing data...") to explain activity
- Disable cancel/pause buttons when progress >95% (too late to safely interrupt)
- For multi-step processes, show both current step (3 of 4) and step progress (60%)
- Use progress-xl with percentage label inside bar for dashboard/monitoring UIs
- Never fake progress; show actual completion based on backend metrics

### Mobile Considerations

- Use minimum 8px height (progress-md) for touch-friendly visibility
- Place percentage label above bar (not floating inside) for narrow screens
- Stack progress with associated text vertically to fit mobile width
- For file uploads, allow swipe-to-cancel gesture on progress card
- Use full-width progress bars in mobile cards/panels
- Reduce animation speed slightly on mobile to improve perceived performance
        `.trim(),
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description:
        'Current progress value (0-100); updates aria-valuenow for screen reader announcements; animate smoothly by updating every 100-500ms',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description:
        'Semantic color variant indicating progress status (default: primary blue, success: green when complete, warning: yellow for disk usage alerts, error: red for failed operations, info: informational progress)',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
      description:
        'Visual height of progress bar (sm: 4px for inline/subtle progress, default: 8px for standard UI, lg: 12px for emphasis, xl: 20px for dashboard/monitoring with internal percentage label)',
    },
    showLabel: {
      control: 'boolean',
      description:
        'Display percentage value inside progress bar fill (only visible on xl size due to height constraints); for smaller sizes, show percentage adjacent to bar instead',
    },
    indeterminate: {
      control: 'boolean',
      description:
        'Enable indeterminate/unknown-duration mode with sliding animation (use when operation duration cannot be calculated); omits aria-valuenow since no meaningful progress value exists',
    },
    ariaLabel: {
      control: 'text',
      description:
        'Accessible label describing the progress operation (e.g., "File upload progress", "Installation step 2 of 4"); announced to screen readers along with current percentage',
    },
  },
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
    ariaLabel: 'Progress',
  },
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
  },
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
  },
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
      { size: 'progress-xl', label: 'Extra Large - With label inside', value: 60, showLabel: true },
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
  },
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
      {
        variant: 'progress-success',
        label: 'Installation Complete',
        value: 100,
        ariaLabel: 'Installation complete',
      },
      {
        variant: 'progress-warning',
        label: 'Disk Space Warning',
        value: 85,
        ariaLabel: 'Disk space usage',
      },
      {
        variant: 'progress-error',
        label: 'Upload Failed',
        value: 30,
        ariaLabel: 'Upload failed at 30%',
      },
      {
        variant: 'progress-info',
        label: 'Download in Progress',
        value: 70,
        ariaLabel: 'Download progress',
      },
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
  },
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
    iconBox.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';

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
    cancelBtn.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

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
  },
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
      { icon: '✓', label: 'Confirm', state: 'pending' },
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
      labelEl.style.color =
        state === 'current' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)';
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
  },
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
      {
        title: 'Memory Usage',
        value: '13.6 GB',
        total: '16 GB',
        percentage: 85,
        variant: 'progress-warning',
      },
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
      percentLabel.style.color = variant.includes('warning')
        ? 'var(--color-warning)'
        : 'var(--color-text-primary)';
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
  },
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
  },
};
