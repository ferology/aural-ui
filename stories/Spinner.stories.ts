import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Spinner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Spinner Component

Animated loading indicators for asynchronous operations, processing states, and instant feedback when content is loading or actions are being performed.

Use Spinners for operations with unknown duration or instant loading (<2 seconds). For measurable progress (file uploads, multi-step processes), use **Progress** bars instead. For initial page load, use **Skeleton** screens.

Spinners provide immediate visual feedback that the system is working, preventing users from thinking the interface is frozen or repeatedly clicking buttons.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Basic Spinner -->
<div class="aural-spinner aural-spinner--primary" role="status" aria-label="Loading">
  <div class="aural-spinner__circle"></div>
</div>

<!-- Spinner with Text -->
<div class="aural-spinner aural-spinner--with-text aural-spinner--primary">
  <div class="aural-spinner__circle"></div>
  <span class="aural-spinner__text">Loading...</span>
</div>

<!-- In Button -->
<button class="btn btn-primary" disabled aria-busy="true">
  <span class="aural-spinner aural-spinner--xs aural-spinner--white" role="status" aria-label="Loading">
    <span class="aural-spinner__circle"></span>
  </span>
  <span>Loading...</span>
</button>

<!-- Dots Variant -->
<div class="aural-spinner aural-spinner--dots aural-spinner--primary" role="status" aria-label="Loading">
  <div class="aural-spinner__dot"></div>
  <div class="aural-spinner__dot"></div>
  <div class="aural-spinner__dot"></div>
</div>
\`\`\`

**React:**
\`\`\`jsx
import { Loader2 } from 'lucide-react';

function Spinner({ size = 'md', variant = 'primary', label = 'Loading', withText = false }) {
  const sizeClasses = {
    xs: 'aural-spinner--xs',
    sm: 'aural-spinner--sm',
    md: '',
    lg: 'aural-spinner--lg',
    xl: 'aural-spinner--xl'
  };

  return (
    <div
      className={\`aural-spinner \${sizeClasses[size]} aural-spinner--\${variant} \${withText ? 'aural-spinner--with-text' : ''}\`}
      role="status"
      aria-label={label}
    >
      <div className="aural-spinner__circle" />
      {withText && <span className="aural-spinner__text">{label}</span>}
    </div>
  );
}

// Loading Button Example
function LoadingButton({ loading, children, onClick }) {
  return (
    <button
      className="btn btn-primary"
      disabled={loading}
      aria-busy={loading}
      onClick={onClick}
    >
      {loading && (
        <span className="aural-spinner aural-spinner--xs aural-spinner--white" role="status">
          <span className="aural-spinner__circle" />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}

// Full Page Overlay
function LoadingOverlay({ message = 'Loading...' }) {
  return (
    <div className="aural-spinner-overlay">
      <div className="aural-spinner aural-spinner--lg aural-spinner--primary aural-spinner--with-text">
        <div className="aural-spinner__circle" />
        <span className="aural-spinner__text">{message}</span>
      </div>
    </div>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div
    :class="spinnerClasses"
    role="status"
    :aria-label="label"
  >
    <div class="aural-spinner__circle" />
    <span v-if="withText" class="aural-spinner__text">{{ label }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: { type: String, default: 'md' },
  variant: { type: String, default: 'primary' },
  label: { type: String, default: 'Loading' },
  withText: Boolean
});

const spinnerClasses = computed(() => {
  const classes = ['aural-spinner'];

  if (props.size !== 'md') classes.push(\`aural-spinner--\${props.size}\`);
  if (props.variant) classes.push(\`aural-spinner--\${props.variant}\`);
  if (props.withText) classes.push('aural-spinner--with-text');

  return classes.join(' ');
});
</script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  export let size = 'md';
  export let variant = 'primary';
  export let label = 'Loading';
  export let withText = false;

  $: spinnerClasses = [
    'aural-spinner',
    size !== 'md' && \`aural-spinner--\${size}\`,
    \`aural-spinner--\${variant}\`,
    withText && 'aural-spinner--with-text'
  ].filter(Boolean).join(' ');
</script>

<div class={spinnerClasses} role="status" aria-label={label}>
  <div class="aural-spinner__circle" />
  {#if withText}
    <span class="aural-spinner__text">{label}</span>
  {/if}
</div>
\`\`\`

## Accessibility

1. **role="status"** - Use \`role="status"\` for non-intrusive loading announcements via implicit \`aria-live="polite"\`
2. **aria-label** - Provide descriptive label like \`aria-label="Loading content"\` or \`aria-label="Processing payment"\`
3. **Screen reader text** - For spinners without visible text, aria-label ensures screen readers announce the loading state
4. **Focus management** - Don't move focus to spinner; maintain focus on triggering element (button, input)
5. **Button states** - Set \`disabled\` and \`aria-busy="true"\` on buttons containing spinners during loading
6. **Reduced motion** - Slow down animations for users with \`prefers-reduced-motion\` preference (2s vs 0.8s)
7. **Color contrast** - Ensure spinner color meets 3:1 contrast ratio against background (WCAG AA)
8. **Size accessibility** - Use minimum md size (40px) for standalone spinners; xs (16px) only in buttons
9. **Timeout warnings** - For operations >30 seconds, announce "Still loading..." updates every 15 seconds
10. **Error recovery** - If loading fails, announce error via \`role="alert"\` and provide retry action
11. **Skip links** - For full-page overlays, offer "Cancel" button to abort long operations
12. **Multiple spinners** - When showing multiple spinners (list items), throttle announcements to avoid spam

## Usage Guidelines

### When to Use

- **Form submissions** - Show spinner in submit button during API call
- **Data fetching** - Display spinner while loading initial data or refreshing
- **Search/filtering** - Show inline spinner during live search or filter operations
- **Background tasks** - Indicate processing happening behind the scenes (calculations, exports)
- **Modal actions** - Show spinner during modal actions like saving or deleting
- **Infinite scroll** - Display spinner at bottom of list while loading more items

### When NOT to Use

- **Measurable progress** - Use Progress bars for file uploads, multi-step forms, or operations with known duration
- **Initial page load** - Use Skeleton screens to show content structure during first render
- **Long operations** - For tasks >30 seconds, use Progress bars with time estimates instead
- **Static placeholder** - Don't use spinner as permanent placeholder; show actual content or "No data" state
- **Multiple simultaneous actions** - Showing too many spinners creates anxiety; batch operations or show single global spinner

### Best Practices

- Use xs/sm spinners (16-24px) inside buttons; md+ (40px+) for standalone loading states
- Place spinner to the left of button text for better visual balance
- For full-page loading, use overlay with backdrop blur to indicate UI is temporarily disabled
- Match spinner color to button variant (white spinner in primary button, primary spinner in secondary button)
- Use dots/pulse variants for subtle loading (inline content), circle variant for prominent loading
- Auto-hide spinner after 30 seconds and show error/timeout message with retry option
- For data grids/lists, show skeleton rows instead of full-page spinner for better UX
- Avoid "spinner hell" - if >3 spinners visible simultaneously, reconsider loading strategy

### Mobile Considerations

- Use minimum 40px spinner size for standalone indicators on mobile (easier to perceive)
- For button spinners, ensure 44x44px minimum touch target remains during loading state
- Consider vibration feedback (200ms) when starting async action to confirm button press
- Use backdrop overlay spinners sparingly; prefer inline spinners to maintain context
- For slow connections, show spinner after 500ms delay to avoid flashing for fast operations
- Provide "Cancel" option for operations >10 seconds on mobile (users more impatient)
        `.trim(),
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description:
        'Visual size of spinner (xs: 16px for inline/button use, sm: 24px for compact areas, md: 40px default standalone, lg: 56px for emphasis, xl: 72px for full-page overlays)',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'white'],
      description:
        'Color variant matching semantic state or button style (primary: brand color, white: for colored buttons, success: successful operations, error: error recovery, warning: cautionary processing)',
    },
    type: {
      control: 'select',
      options: ['default', 'dual', 'dots', 'pulse', 'bars'],
      description:
        'Animation style (default: spinning circle for standard loading, dual: double ring for modern look, dots: bouncing dots for subtle loading, pulse: pulsing circle for background tasks, bars: vertical bars for audio/media processing)',
    },
  },
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
    type: 'default',
  },
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
      { type: 'bars', label: 'Bars' },
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
  },
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
      { class: 'xl', label: 'Extra Large' },
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
  },
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
      { class: 'error', label: 'Error' },
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
  },
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
  },
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
    spinner3.className =
      'aural-spinner aural-spinner--with-text aural-spinner--dots aural-spinner--primary';

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
  },
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
  },
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
  },
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
    spinner.className =
      'aural-spinner aural-spinner--with-text aural-spinner--xl aural-spinner--white';

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
  },
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
  },
};
