import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Overlay dialogs for focused user interactions and important content. Modal dialogs with focus trap, backdrop, and accessibility features.'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Modal title'
    },
    subtitle: {
      control: 'text',
      description: 'Optional modal subtitle'
    },
    content: {
      control: 'text',
      description: 'Modal content'
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'fullscreen'],
      description: 'Modal size'
    }
  }
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
    content: 'This is a modal dialog. It overlays the page content and focuses user attention on a specific task or message.',
    size: 'default'
  }
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
    content: 'This is a compact modal for simple interactions or brief messages.'
  }
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
    content: 'This is a large modal suitable for displaying extensive content, multiple sections, or complex forms.'
  }
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
    content: 'This modal takes up the entire viewport, providing maximum space for your content.'
  }
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
    content: 'Thank you for choosing Aural UI! This modal demonstrates how to use icons in your modal headers.'
  }
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
    subtitle: 'Please read carefully'
  }
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
    content: 'Are you sure you want to delete this item? All associated data will be permanently removed.'
  }
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
  }
};
