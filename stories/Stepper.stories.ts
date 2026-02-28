import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Stepper',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Stepper Component

Multi-step process indicator showing progress through sequential steps. Perfect for form wizards, onboarding flows, checkout processes, and order tracking.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-stepper" role="navigation" aria-label="Registration progress">
  <div class="aural-step aural-step--completed">
    <div class="aural-step__indicator">
      <i data-lucide="check"></i>
    </div>
    <div class="aural-step__connector"></div>
    <div class="aural-step__content">
      <div class="aural-step__title">Account</div>
    </div>
  </div>
  <div class="aural-step aural-step--active">
    <div class="aural-step__indicator" aria-current="step">2</div>
    <div class="aural-step__connector"></div>
    <div class="aural-step__content">
      <div class="aural-step__title">Profile</div>
    </div>
  </div>
</div>
\`\`\`

**Initialization:**
\`\`\`javascript
// Initialize Lucide icons for check/error icons
lucide.createIcons();
\`\`\`
        `.trim()
      }
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create step HTML
function createStep(config: {
  number: number;
  title: string;
  description?: string;
  state?: 'completed' | 'active' | 'error' | 'pending';
  icon?: string;
  isLast?: boolean;
}) {
  const { number, title, description, state = 'pending', icon, isLast = false } = config;

  const step = document.createElement('div');
  step.className = 'aural-step';

  if (state === 'completed') step.classList.add('aural-step--completed');
  if (state === 'active') step.classList.add('aural-step--active');
  if (state === 'error') step.classList.add('aural-step--error');

  // Indicator
  const indicator = document.createElement('div');
  indicator.className = 'aural-step__indicator';

  if (state === 'completed') {
    indicator.setAttribute('aria-label', `Step ${number}: Completed`);
    const checkIcon = document.createElement('i');
    checkIcon.setAttribute('data-lucide', 'check');
    checkIcon.style.width = '20px';
    checkIcon.style.height = '20px';
    checkIcon.setAttribute('aria-hidden', 'true');
    indicator.appendChild(checkIcon);
  } else if (state === 'error') {
    indicator.setAttribute('aria-label', `Step ${number}: Error`);
    const errorIcon = document.createElement('i');
    errorIcon.setAttribute('data-lucide', 'x');
    errorIcon.style.width = '20px';
    errorIcon.style.height = '20px';
    errorIcon.setAttribute('aria-hidden', 'true');
    indicator.appendChild(errorIcon);
  } else if (icon) {
    if (state === 'active') {
      indicator.setAttribute('aria-current', 'step');
    } else {
      indicator.setAttribute('aria-disabled', 'true');
    }
    const iconElement = document.createElement('i');
    iconElement.setAttribute('data-lucide', icon);
    iconElement.style.width = '20px';
    iconElement.style.height = '20px';
    iconElement.setAttribute('aria-hidden', 'true');
    indicator.appendChild(iconElement);
  } else {
    if (state === 'active') {
      indicator.setAttribute('aria-current', 'step');
      indicator.setAttribute('aria-label', `Step ${number}: ${title}, Active`);
    } else {
      indicator.setAttribute('aria-disabled', 'true');
      indicator.setAttribute('aria-label', `Step ${number}: ${title}, Pending`);
    }
    indicator.textContent = number.toString();
  }

  step.appendChild(indicator);

  // Connector
  if (!isLast) {
    const connector = document.createElement('div');
    connector.className = 'aural-step__connector';
    connector.setAttribute('aria-hidden', 'true');
    step.appendChild(connector);
  }

  // Content
  const content = document.createElement('div');
  content.className = 'aural-step__content';

  const titleEl = document.createElement('div');
  titleEl.className = 'aural-step__title';
  titleEl.textContent = title;
  content.appendChild(titleEl);

  if (description) {
    const descEl = document.createElement('div');
    descEl.className = 'aural-step__description';
    descEl.textContent = description;
    content.appendChild(descEl);
  }

  step.appendChild(content);

  return step;
}

// Helper to initialize icons
function initializeIcons(element: HTMLElement) {
  setTimeout(() => {
    if (window.lucide) {
      window.lucide.createIcons({ nameAttr: 'data-lucide' });
    }
  }, 0);
  return element;
}

export const Default: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Registration progress');

    container.appendChild(createStep({
      number: 1,
      title: 'Account',
      description: 'Create your account',
      state: 'completed'
    }));

    container.appendChild(createStep({
      number: 2,
      title: 'Profile',
      description: 'Add your details',
      state: 'active'
    }));

    container.appendChild(createStep({
      number: 3,
      title: 'Preferences',
      description: 'Set preferences',
      state: 'pending'
    }));

    container.appendChild(createStep({
      number: 4,
      title: 'Complete',
      description: 'Review and finish',
      state: 'pending',
      isLast: true
    }));

    return initializeIcons(container);
  }
};

export const Vertical: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper aural-stepper--vertical';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Order status');
    container.style.maxWidth = '400px';

    container.appendChild(createStep({
      number: 1,
      title: 'Order Placed',
      description: 'Your order has been confirmed',
      state: 'completed'
    }));

    container.appendChild(createStep({
      number: 2,
      title: 'Processing',
      description: 'We\'re preparing your order',
      state: 'active'
    }));

    container.appendChild(createStep({
      number: 3,
      title: 'Shipped',
      description: 'On its way to you',
      state: 'pending'
    }));

    container.appendChild(createStep({
      number: 4,
      title: 'Delivered',
      description: 'Package delivered',
      state: 'pending',
      isLast: true
    }));

    return initializeIcons(container);
  }
};

export const WithNumbers: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Checkout steps');

    container.appendChild(createStep({
      number: 1,
      title: 'Cart',
      state: 'completed'
    }));

    container.appendChild(createStep({
      number: 2,
      title: 'Address',
      state: 'completed'
    }));

    container.appendChild(createStep({
      number: 3,
      title: 'Payment',
      state: 'active'
    }));

    container.appendChild(createStep({
      number: 4,
      title: 'Confirm',
      state: 'pending',
      isLast: true
    }));

    return initializeIcons(container);
  }
};

export const WithIcons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Setup progress');

    const steps = [
      { icon: 'user', title: 'Sign Up', state: 'completed' as const },
      { icon: 'mail', title: 'Verify', state: 'active' as const },
      { icon: 'settings', title: 'Setup', state: 'pending' as const },
      { icon: 'check-circle', title: 'Done', state: 'pending' as const, isLast: true }
    ];

    steps.forEach((step, index) => {
      container.appendChild(createStep({
        number: index + 1,
        title: step.title,
        state: step.state,
        icon: step.icon,
        isLast: step.isLast
      }));
    });

    return initializeIcons(container);
  }
};

export const ErrorState: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Payment process');

    container.appendChild(createStep({
      number: 1,
      title: 'Information',
      state: 'completed'
    }));

    container.appendChild(createStep({
      number: 2,
      title: 'Payment',
      description: 'Card declined',
      state: 'error'
    }));

    container.appendChild(createStep({
      number: 3,
      title: 'Confirmation',
      state: 'pending',
      isLast: true
    }));

    return initializeIcons(container);
  }
};

export const AllStates: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Step states example');

    container.appendChild(createStep({
      number: 1,
      title: 'Completed',
      state: 'completed'
    }));

    container.appendChild(createStep({
      number: 2,
      title: 'Active',
      state: 'active'
    }));

    container.appendChild(createStep({
      number: 3,
      title: 'Error',
      state: 'error'
    }));

    container.appendChild(createStep({
      number: 4,
      title: 'Pending',
      state: 'pending',
      isLast: true
    }));

    return initializeIcons(container);
  }
};

export const FormWizard: Story = {
  render: () => {
    const wrapper = document.createElement('div');

    // Stepper
    const stepper = document.createElement('div');
    stepper.className = 'aural-stepper';
    stepper.setAttribute('role', 'navigation');
    stepper.setAttribute('aria-label', 'Form wizard');
    stepper.style.marginBottom = 'var(--space-6)';

    stepper.appendChild(createStep({
      number: 1,
      title: 'Personal',
      description: 'Basic info',
      state: 'completed'
    }));

    stepper.appendChild(createStep({
      number: 2,
      title: 'Contact',
      description: 'Email & phone',
      state: 'active'
    }));

    stepper.appendChild(createStep({
      number: 3,
      title: 'Address',
      description: 'Location',
      state: 'pending'
    }));

    stepper.appendChild(createStep({
      number: 4,
      title: 'Review',
      description: 'Confirm',
      state: 'pending',
      isLast: true
    }));

    wrapper.appendChild(stepper);

    // Card with form
    const card = document.createElement('div');
    card.className = 'card';
    card.style.padding = 'var(--space-6)';

    const heading = document.createElement('h3');
    heading.textContent = 'Contact Information';
    heading.style.margin = '0 0 var(--space-4) 0';
    heading.style.color = 'var(--color-text-primary)';
    card.appendChild(heading);

    // Email field
    const emailGroup = document.createElement('div');
    emailGroup.style.marginBottom = 'var(--space-4)';

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    emailLabel.style.display = 'block';
    emailLabel.style.marginBottom = 'var(--space-2)';
    emailLabel.style.color = 'var(--color-text-secondary)';
    emailGroup.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.className = 'input';
    emailInput.placeholder = 'your@email.com';
    emailGroup.appendChild(emailInput);

    card.appendChild(emailGroup);

    // Phone field
    const phoneGroup = document.createElement('div');
    phoneGroup.style.marginBottom = 'var(--space-6)';

    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone';
    phoneLabel.style.display = 'block';
    phoneLabel.style.marginBottom = 'var(--space-2)';
    phoneLabel.style.color = 'var(--color-text-secondary)';
    phoneGroup.appendChild(phoneLabel);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.className = 'input';
    phoneInput.placeholder = '+1 (555) 000-0000';
    phoneGroup.appendChild(phoneInput);

    card.appendChild(phoneGroup);

    // Buttons
    const buttonGroup = document.createElement('div');
    buttonGroup.style.display = 'flex';
    buttonGroup.style.gap = 'var(--space-3)';
    buttonGroup.style.justifyContent = 'space-between';

    const backBtn = document.createElement('button');
    backBtn.className = 'btn btn-ghost';
    backBtn.textContent = 'Back';
    buttonGroup.appendChild(backBtn);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-primary';
    nextBtn.textContent = 'Next Step';
    buttonGroup.appendChild(nextBtn);

    card.appendChild(buttonGroup);
    wrapper.appendChild(card);

    return initializeIcons(wrapper);
  }
};

export const OrderTracking: Story = {
  render: () => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.padding = 'var(--space-6)';
    card.style.maxWidth = '500px';

    // Header
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = 'var(--space-6)';

    const headerInfo = document.createElement('div');

    const orderNumber = document.createElement('h3');
    orderNumber.textContent = 'Order #12345';
    orderNumber.style.margin = '0 0 var(--space-1) 0';
    orderNumber.style.color = 'var(--color-text-primary)';
    headerInfo.appendChild(orderNumber);

    const deliveryDate = document.createElement('p');
    deliveryDate.textContent = 'Estimated delivery: Jan 30, 2026';
    deliveryDate.style.margin = '0';
    deliveryDate.style.color = 'var(--color-text-secondary)';
    deliveryDate.style.fontSize = 'var(--text-sm)';
    headerInfo.appendChild(deliveryDate);

    header.appendChild(headerInfo);

    const badge = document.createElement('span');
    badge.className = 'badge badge-success';
    badge.textContent = 'In Transit';
    header.appendChild(badge);

    card.appendChild(header);

    // Stepper
    const stepper = document.createElement('div');
    stepper.className = 'aural-stepper aural-stepper--vertical';
    stepper.setAttribute('role', 'navigation');
    stepper.setAttribute('aria-label', 'Order tracking');

    stepper.appendChild(createStep({
      number: 1,
      title: 'Order Confirmed',
      description: 'Jan 25, 2026 at 10:30 AM',
      state: 'completed'
    }));

    stepper.appendChild(createStep({
      number: 2,
      title: 'Processing',
      description: 'Jan 26, 2026 at 9:15 AM',
      state: 'completed'
    }));

    const shippedStep = createStep({
      number: 3,
      title: 'Shipped',
      description: 'In transit - arriving soon',
      state: 'active',
      icon: 'truck'
    });
    stepper.appendChild(shippedStep);

    const deliveredStep = createStep({
      number: 4,
      title: 'Delivered',
      description: 'Expected Jan 30',
      state: 'pending',
      icon: 'home',
      isLast: true
    });
    stepper.appendChild(deliveredStep);

    card.appendChild(stepper);

    return initializeIcons(card);
  }
};

export const OnboardingFlow: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Onboarding');

    const steps = [
      { icon: 'user-plus', title: 'Welcome', state: 'completed' as const },
      { icon: 'shield-check', title: 'Verify', state: 'completed' as const },
      { icon: 'sliders', title: 'Preferences', state: 'active' as const },
      { icon: 'rocket', title: 'Launch', state: 'pending' as const, isLast: true }
    ];

    steps.forEach((step, index) => {
      container.appendChild(createStep({
        number: index + 1,
        title: step.title,
        state: step.state,
        icon: step.icon,
        isLast: step.isLast
      }));
    });

    return initializeIcons(container);
  }
};

export const CompactStepper: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Progress indicator');

    for (let i = 1; i <= 5; i++) {
      let state: 'completed' | 'active' | 'pending' = 'pending';
      if (i < 4) state = 'completed';
      if (i === 4) state = 'active';

      container.appendChild(createStep({
        number: i,
        title: `Step ${i}`,
        state: state,
        isLast: i === 5
      }));
    }

    return initializeIcons(container);
  }
};

export const ThemeComparison: Story = {
  render: () => {
    return createThemeGrid(() => {
      const container = document.createElement('div');
      container.className = 'aural-stepper';
      container.setAttribute('role', 'navigation');
      container.setAttribute('aria-label', 'Progress');

      container.appendChild(createStep({
        number: 1,
        title: 'Complete',
        state: 'completed'
      }));

      container.appendChild(createStep({
        number: 2,
        title: 'Active',
        state: 'active'
      }));

      container.appendChild(createStep({
        number: 3,
        title: 'Pending',
        state: 'pending',
        isLast: true
      }));

      const result = initializeIcons(container);
      return result;
    });
  }
};
