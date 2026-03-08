import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Modal Component

Overlay dialogs that focus user attention on a specific task or decision, blocking interaction with the underlying page until dismissed.

Use Modals sparingly for critical decisions, focused forms, or important information that requires acknowledgment. They interrupt the user's workflow by design, so reserve them for tasks that truly need full attention. For less critical notifications that don't require immediate action, use Toast or Snackbar instead.

Modals provide a dedicated space for users to complete actions without distraction, make important choices, or review critical information. They're ideal for confirmations, short forms, detailed views, or multi-step flows where context switching would be disruptive.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Trigger button -->
<button class="btn btn-primary" onclick="window.Aural.openModal('my-modal')">
  Open Modal
</button>

<!-- Modal overlay -->
<div class="modal-overlay" id="my-modal">
  <div
    class="modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    aria-describedby="modal-desc"
  >
    <button
      class="modal-close"
      aria-label="Close modal"
      onclick="window.Aural.closeModal('my-modal')"
    >
      <i data-lucide="x"></i>
    </button>
    <div class="modal-header">
      <h2 id="modal-title" class="modal-title">Confirm Action</h2>
      <p class="modal-subtitle">This action cannot be undone</p>
    </div>
    <div class="modal-body">
      <p id="modal-desc">Are you sure you want to proceed?</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" onclick="window.Aural.closeModal('my-modal')">
        Cancel
      </button>
      <button class="btn btn-primary">
        Confirm
      </button>
    </div>
  </div>
</div>

<script>
  window.Aural?.initModals();
</script>
\`\`\`

**React:**
\`\`\`jsx
import { useEffect, useState } from 'react';

function ConfirmModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.Aural?.initModals();
  }, []);

  const openModal = () => {
    window.Aural?.openModal('confirm-modal');
    setIsOpen(true);
  };

  const closeModal = () => {
    window.Aural?.closeModal('confirm-modal');
    setIsOpen(false);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={openModal}>
        Open Modal
      </button>

      <div className="modal-overlay" id="confirm-modal">
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button
            className="modal-close"
            aria-label="Close modal"
            onClick={closeModal}
          >
            ×
          </button>
          <div className="modal-header">
            <h2 id="modal-title" className="modal-title">Confirm Action</h2>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to proceed?</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost" onClick={closeModal}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={closeModal}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div>
    <button class="btn btn-primary" @click="openModal">
      Open Modal
    </button>

    <div class="modal-overlay" id="confirm-modal">
      <div
        class="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          class="modal-close"
          aria-label="Close modal"
          @click="closeModal"
        >
          ×
        </button>
        <div class="modal-header">
          <h2 id="modal-title" class="modal-title">Confirm Action</h2>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to proceed?</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" @click="closeModal">Cancel</button>
          <button class="btn btn-primary" @click="closeModal">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  mounted() {
    window.Aural?.initModals();
  },
  methods: {
    openModal() {
      window.Aural?.openModal('confirm-modal');
      this.isOpen = true;
    },
    closeModal() {
      window.Aural?.closeModal('confirm-modal');
      this.isOpen = false;
    }
  }
};
</script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { onMount } from 'svelte';
  let isOpen = false;

  onMount(() => {
    window.Aural?.initModals();
  });

  function openModal() {
    window.Aural?.openModal('confirm-modal');
    isOpen = true;
  }

  function closeModal() {
    window.Aural?.closeModal('confirm-modal');
    isOpen = false;
  }
</script>

<button class="btn btn-primary" on:click={openModal}>
  Open Modal
</button>

<div class="modal-overlay" id="confirm-modal">
  <div
    class="modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <button
      class="modal-close"
      aria-label="Close modal"
      on:click={closeModal}
    >
      ×
    </button>
    <div class="modal-header">
      <h2 id="modal-title" class="modal-title">Confirm Action</h2>
    </div>
    <div class="modal-body">
      <p>Are you sure you want to proceed?</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" on:click={closeModal}>Cancel</button>
      <button class="btn btn-primary" on:click={closeModal}>Confirm</button>
    </div>
  </div>
</div>
\`\`\`

## Accessibility

- **Required ARIA attributes**: Add \`role="dialog"\` and \`aria-modal="true"\` to the modal container
- **Label association**: Use \`aria-labelledby\` referencing the modal title ID (e.g., \`id="modal-title"\`)
- **Description**: Use \`aria-describedby\` to reference the modal description for additional context
- **Focus trap**: JavaScript automatically traps focus within the modal, preventing Tab navigation to background content
- **Focus restoration**: When modal closes, focus returns to the trigger element that opened it
- **Keyboard dismissal**: Escape key closes the modal (handled automatically by \`window.Aural.initModals()\`)
- **Close button**: Always provide a visible close button with \`aria-label="Close modal"\`
- **Backdrop click**: Clicking outside the modal (on backdrop) closes it by default
- **Screen readers**: Announce modal opening with ARIA live region or role="dialog"
- **Scrollable content**: When modal content exceeds viewport height, only the modal body scrolls (header/footer remain fixed)

## Usage Guidelines

- **When to use:**
  - Destructive actions requiring confirmation (delete, remove, cancel subscription)
  - Critical decisions that need user attention (save changes before leaving)
  - Focused tasks like creating/editing items without page navigation
  - Displaying detailed information that would clutter the main page
  - Multi-step workflows (wizards, onboarding) where each step requires completion
  - Login, signup, or authentication forms

- **When NOT to use:**
  - Simple notifications or confirmations (use Toast or Alert instead)
  - Non-critical information that doesn't require acknowledgment
  - Long forms better suited for dedicated pages
  - Frequent interactions (use Dropdown or Popover for lighter overlays)
  - Mobile-first experiences where full-page views work better

- **Best practices:**
  - Keep modal content concise and focused on a single task
  - Provide clear primary action (e.g., "Confirm", "Save", "Delete")
  - Always offer a way to cancel or close without taking action
  - Use appropriate sizes: \`modal-sm\` for confirmations, \`modal-lg\` for forms
  - Limit nesting modals (avoid modal-within-modal patterns)
  - Test keyboard navigation (Tab through all interactive elements)
  - Ensure close button is always visible (positioned absolutely)
  - Use backdrop blur to maintain context of underlying page
  - For destructive actions, use danger variant buttons (red) and confirmation text

- **Mobile considerations:**
  - Modals should be responsive and take up more screen space on small devices
  - Consider using fullscreen modals (\`modal-fullscreen\`) on mobile for complex content
  - Ensure touch targets are at least 44px for close buttons and actions
  - Test scrolling behavior within modal body on touch devices
  - Avoid modals that require horizontal scrolling on narrow screens

- **Animation and transitions:**
  - Modal fades in with backdrop blur (respects \`prefers-reduced-motion\`)
  - Modal content scales up slightly (0.95 → 1) for smooth entrance
  - Close animations reverse the entrance effect
  - Backdrop click provides immediate visual feedback
        `.trim(),
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description:
        'Modal title text displayed in the header, referenced by aria-labelledby for screen readers',
    },
    subtitle: {
      control: 'text',
      description:
        'Optional subtitle or description displayed below the title for additional context',
    },
    content: {
      control: 'text',
      description: 'Main modal body content - can include text, forms, or any HTML elements',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'fullscreen'],
      description:
        'Modal size: sm (360px, confirmations), default (480px, standard), lg (640px, forms), fullscreen (95vw, immersive)',
    },
    closable: {
      control: 'boolean',
      description:
        'Whether the modal can be closed via close button, Escape key, or backdrop click (default: true)',
    },
    backdrop: {
      control: 'boolean',
      description:
        'Whether to show the backdrop overlay with blur effect behind the modal (default: true)',
    },
    icon: {
      control: 'text',
      description:
        'Optional icon displayed in modal header (e.g., "trash-2" for delete confirmation)',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.textContent = 'Open Modal';

    const modalId = `modal-${Math.random().toString(36).substr(2, 9)}`;

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = modalId;

    modalOverlay.innerHTML = `
      <div class="modal${args.size && args.size !== 'default' ? ' modal-' + args.size : ''}">
        <button class="modal-close" aria-label="Close modal" onclick="window.Aural?.closeModal('${modalId}')">
          <i data-lucide="x"></i>
        </button>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">${args.title}</h2>
            ${args.subtitle ? `<p class="modal-subtitle">${args.subtitle}</p>` : ''}
          </div>
        </div>
        <div class="modal-body">
          <p>${args.content}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="window.Aural?.closeModal('${modalId}')">Cancel</button>
          <button class="btn btn-primary" onclick="window.Aural?.closeModal('${modalId}')">Confirm</button>
        </div>
      </div>
    `;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openModal(modalId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(modalOverlay);

    // Initialize Lucide icons after modal is added
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  },
  args: {
    title: 'Modal Title',
    subtitle: 'Optional subtitle or description',
    content:
      'This is a modal dialog. It overlays the page content and focuses user attention on a specific task or message.',
    size: 'default',
  },
};

export const Small: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.textContent = 'Open Small Modal';

    const modalId = `modal-small-${Math.random().toString(36).substr(2, 9)}`;

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = modalId;

    modalOverlay.innerHTML = `
      <div class="modal modal-sm">
        <button class="modal-close" aria-label="Close modal" onclick="window.Aural?.closeModal('${modalId}')">
          <i data-lucide="x"></i>
        </button>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">${args.title}</h2>
          </div>
        </div>
        <div class="modal-body">
          <p>${args.content}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost btn-sm" onclick="window.Aural?.closeModal('${modalId}')">Cancel</button>
          <button class="btn btn-primary btn-sm" onclick="window.Aural?.closeModal('${modalId}')">OK</button>
        </div>
      </div>
    `;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openModal(modalId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(modalOverlay);

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  },
  args: {
    title: 'Quick Action',
    content: 'This is a compact modal for simple interactions or brief messages.',
  },
};

export const Large: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.textContent = 'Open Large Modal';

    const modalId = `modal-large-${Math.random().toString(36).substr(2, 9)}`;

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = modalId;

    modalOverlay.innerHTML = `
      <div class="modal modal-lg">
        <button class="modal-close" aria-label="Close modal" onclick="window.Aural?.closeModal('${modalId}')">
          <i data-lucide="x"></i>
        </button>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">${args.title}</h2>
            <p class="modal-subtitle">${args.subtitle}</p>
          </div>
        </div>
        <div class="modal-body">
          <h3 style="margin-top: 0; font-size: var(--text-lg); font-weight: var(--font-semibold); color: var(--color-text-primary);">Overview</h3>
          <p>${args.content}</p>
          <h3 style="font-size: var(--text-lg); font-weight: var(--font-semibold); color: var(--color-text-primary);">Features</h3>
          <ul>
            <li>Ample space for content</li>
            <li>Multiple sections support</li>
            <li>Scrollable content area</li>
            <li>Organized information layout</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="window.Aural?.closeModal('${modalId}')">Close</button>
          <button class="btn btn-primary" onclick="window.Aural?.closeModal('${modalId}')">Save Changes</button>
        </div>
      </div>
    `;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openModal(modalId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(modalOverlay);

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  },
  args: {
    title: 'Detailed Information',
    subtitle: 'Everything you need to know',
    content:
      'This is a large modal suitable for displaying extensive content, multiple sections, or complex forms.',
  },
};

export const Fullscreen: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.textContent = 'Open Fullscreen Modal';

    const modalId = `modal-fullscreen-${Math.random().toString(36).substr(2, 9)}`;

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = modalId;

    modalOverlay.innerHTML = `
      <div class="modal modal-fullscreen">
        <button class="modal-close" aria-label="Close modal" onclick="window.Aural?.closeModal('${modalId}')" style="position: absolute; top: var(--space-6); right: var(--space-6); z-index: 10;">
          <i data-lucide="x"></i>
        </button>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">${args.title}</h2>
            <p class="modal-subtitle">${args.subtitle}</p>
          </div>
        </div>
        <div class="modal-body">
          <h3 style="margin-top: 0; font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary);">Welcome to Fullscreen Mode</h3>
          <p>${args.content}</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-6); margin: var(--space-6) 0;">
            <div style="padding: var(--space-4); background: var(--color-bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle);">
              <div style="width: 40px; height: 40px; border-radius: var(--radius-md); background: var(--color-primary-subtle); display: flex; align-items: center; justify-content: center; color: var(--color-primary); margin-bottom: var(--space-3);">
                <i data-lucide="image" style="width: 20px; height: 20px;"></i>
              </div>
              <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Photo Viewers</h4>
              <p style="margin: 0; color: var(--color-text-secondary); font-size: var(--text-sm);">Display images without distractions</p>
            </div>
            <div style="padding: var(--space-4); background: var(--color-bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle);">
              <div style="width: 40px; height: 40px; border-radius: var(--radius-md); background: var(--color-secondary-subtle); display: flex; align-items: center; justify-content: center; color: var(--color-secondary); margin-bottom: var(--space-3);">
                <i data-lucide="file-text" style="width: 20px; height: 20px;"></i>
              </div>
              <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Document Editors</h4>
              <p style="margin: 0; color: var(--color-text-secondary); font-size: var(--text-sm);">Maximize workspace for editing</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="window.Aural?.closeModal('${modalId}')">Close</button>
          <button class="btn btn-primary">Save Changes</button>
        </div>
      </div>
    `;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openModal(modalId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(modalOverlay);

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  },
  args: {
    title: 'Fullscreen Experience',
    subtitle: 'Immersive content view',
    content: 'This modal takes up the entire viewport, providing maximum space for your content.',
  },
};

export const WithIcon: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.textContent = 'Open Modal with Icon';

    const modalId = `modal-icon-${Math.random().toString(36).substr(2, 9)}`;

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = modalId;

    modalOverlay.innerHTML = `
      <div class="modal">
        <button class="modal-close" aria-label="Close modal" onclick="window.Aural?.closeModal('${modalId}')">
          <i data-lucide="x"></i>
        </button>
        <div class="modal-header">
          <div class="modal-icon">
            <i data-lucide="rocket"></i>
          </div>
          <div>
            <h2 class="modal-title">${args.title}</h2>
            <p class="modal-subtitle">${args.subtitle}</p>
          </div>
        </div>
        <div class="modal-body">
          <p>${args.content}</p>
          <ul>
            <li>Beautiful gradient icon backgrounds</li>
            <li>Flexible header layouts</li>
            <li>Smooth animations</li>
            <li>Accessible by default</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="window.Aural?.closeModal('${modalId}')">Maybe Later</button>
          <button class="btn btn-primary" onclick="window.Aural?.closeModal('${modalId}')">Get Started</button>
        </div>
      </div>
    `;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openModal(modalId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(modalOverlay);

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  },
  args: {
    title: 'Get Started',
    subtitle: 'Welcome to Aural UI',
    content:
      'Thank you for choosing Aural UI! This modal demonstrates how to use icons in your modal headers.',
  },
};

export const Scrollable: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.textContent = 'Open Scrollable Modal';

    const modalId = `modal-scrollable-${Math.random().toString(36).substr(2, 9)}`;

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = modalId;

    modalOverlay.innerHTML = `
      <div class="modal modal-scrollable modal-lg">
        <button class="modal-close" aria-label="Close modal" onclick="window.Aural?.closeModal('${modalId}')">
          <i data-lucide="x"></i>
        </button>
        <div class="modal-header">
          <div class="modal-icon">
            <i data-lucide="scroll-text"></i>
          </div>
          <div>
            <h2 class="modal-title">${args.title}</h2>
            <p class="modal-subtitle">${args.subtitle}</p>
          </div>
        </div>
        <div class="modal-body">
          <h3 style="margin-top: 0; font-size: var(--text-lg); font-weight: var(--font-semibold); color: var(--color-text-primary);">1. Introduction</h3>
          <p>This modal demonstrates the scrollable variant, where the header and footer remain fixed while the body content scrolls independently.</p>

          <h3 style="font-size: var(--text-lg); font-weight: var(--font-semibold); color: var(--color-text-primary); margin-top: var(--space-6);">2. Content Organization</h3>
          <p>The scrollable modal maintains visual hierarchy and keeps important actions always visible at the bottom.</p>
          <ul>
            <li>Providing clear navigation context with a fixed header</li>
            <li>Ensuring call-to-action buttons are always accessible</li>
            <li>Allowing users to scroll through content comfortably</li>
          </ul>

          <h3 style="font-size: var(--text-lg); font-weight: var(--font-semibold); color: var(--color-text-primary); margin-top: var(--space-6);">3. Use Cases</h3>
          <p>Scrollable modals are ideal for:</p>
          <ul>
            <li><strong>Legal Documents:</strong> Terms of service, privacy policies</li>
            <li><strong>Long Forms:</strong> Multi-section forms that require scrolling</li>
            <li><strong>Documentation:</strong> Help articles, guides, tutorials</li>
            <li><strong>Product Details:</strong> Detailed product information</li>
          </ul>

          <h3 style="font-size: var(--text-lg); font-weight: var(--font-semibold); color: var(--color-text-primary); margin-top: var(--space-6);">4. Conclusion</h3>
          <p>The scrollable modal pattern provides an elegant solution for presenting lengthy content within a modal dialog.</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="window.Aural?.closeModal('${modalId}')">Decline</button>
          <button class="btn btn-primary">Accept Terms</button>
        </div>
      </div>
    `;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openModal(modalId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(modalOverlay);

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  },
  args: {
    title: 'Terms and Conditions',
    subtitle: 'Please read carefully',
  },
};

export const ConfirmationModal: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-danger';
    openButton.textContent = 'Delete Item';

    const modalId = `modal-confirm-${Math.random().toString(36).substr(2, 9)}`;

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = modalId;

    modalOverlay.innerHTML = `
      <div class="modal modal-sm">
        <button class="modal-close" aria-label="Close modal" onclick="window.Aural?.closeModal('${modalId}')">
          <i data-lucide="x"></i>
        </button>
        <div class="modal-header">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--color-danger-subtle); display: flex; align-items: center; justify-content: center; color: var(--color-danger);">
            <i data-lucide="trash-2" style="width: 24px; height: 24px;"></i>
          </div>
          <div>
            <h2 class="modal-title">${args.title}</h2>
            <p class="modal-subtitle">${args.subtitle}</p>
          </div>
        </div>
        <div class="modal-body">
          <p>${args.content}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="window.Aural?.closeModal('${modalId}')">Cancel</button>
          <button class="btn btn-error" onclick="window.Aural?.closeModal('${modalId}')">
            <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
            Delete
          </button>
        </div>
      </div>
    `;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openModal(modalId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(modalOverlay);

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  },
  args: {
    title: 'Delete Item?',
    subtitle: 'This action cannot be undone',
    content:
      'Are you sure you want to delete this item? All associated data will be permanently removed.',
  },
};

export const WithForm: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.textContent = 'Create New Item';

    const modalId = `modal-form-${Math.random().toString(36).substr(2, 9)}`;

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = modalId;

    modalOverlay.innerHTML = `
      <div class="modal">
        <button class="modal-close" aria-label="Close modal" onclick="window.Aural?.closeModal('${modalId}')">
          <i data-lucide="x"></i>
        </button>
        <div class="modal-header">
          <div class="modal-icon">
            <i data-lucide="plus-circle"></i>
          </div>
          <div>
            <h2 class="modal-title">Create New Item</h2>
            <p class="modal-subtitle">Fill in the details below</p>
          </div>
        </div>
        <div class="modal-body">
          <form id="create-item-form-${modalId}" style="display: flex; flex-direction: column; gap: var(--space-6);">
            <div>
              <label for="item-name-${modalId}" style="display: block; margin-bottom: var(--space-2); font-weight: var(--font-medium); color: var(--color-text-primary);">Item Name</label>
              <input type="text" id="item-name-${modalId}" class="input" placeholder="Enter item name" required>
            </div>
            <div>
              <label for="item-description-${modalId}" style="display: block; margin-bottom: var(--space-2); font-weight: var(--font-medium); color: var(--color-text-primary);">Description</label>
              <textarea id="item-description-${modalId}" class="input" rows="4" placeholder="Enter description"></textarea>
            </div>
            <div>
              <label for="item-category-${modalId}" style="display: block; margin-bottom: var(--space-2); font-weight: var(--font-medium); color: var(--color-text-primary);">Category</label>
              <select id="item-category-${modalId}" class="input">
                <option>General</option>
                <option>Work</option>
                <option>Personal</option>
                <option>Other</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-ghost" onclick="window.Aural?.closeModal('${modalId}')">Cancel</button>
          <button type="submit" form="create-item-form-${modalId}" class="btn btn-primary" onclick="event.preventDefault(); window.Aural?.closeModal('${modalId}')">Create Item</button>
        </div>
      </div>
    `;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openModal(modalId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(modalOverlay);

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);

    return container;
  },
};
