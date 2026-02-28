import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Modal dialog with focus trap, backdrop, and accessibility features.'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Modal title'
    },
    content: {
      control: 'text',
      description: 'Modal content'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
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

    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = `modal modal-${args.size || 'md'}`;
    modal.setAttribute('aria-labelledby', `${modalId}-title`);
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('role', 'dialog');

    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-container">
        <div class="modal-header">
          <h2 id="${modalId}-title" class="modal-title">${args.title}</h2>
          <button
            type="button"
            class="modal-close"
            aria-label="Close modal"
            onclick="window.Aural.closeModal('${modalId}')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>${args.content}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-ghost"
            onclick="window.Aural.closeModal('${modalId}')"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onclick="window.Aural.closeModal('${modalId}')"
          >
            Confirm
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
    container.appendChild(modal);

    return container;
  },
  args: {
    title: 'Modal Title',
    content: 'This is the modal content. You can place any content here.',
    size: 'md'
  }
};

export const Small: Story = {
  ...Default,
  args: {
    title: 'Small Modal',
    content: 'This is a small modal dialog.',
    size: 'sm'
  }
};

export const Large: Story = {
  ...Default,
  args: {
    title: 'Large Modal',
    content: 'This is a large modal dialog with more space for content.',
    size: 'lg'
  }
};

export const ExtraLarge: Story = {
  ...Default,
  args: {
    title: 'Extra Large Modal',
    content: 'This is an extra large modal dialog.',
    size: 'xl'
  }
};

export const FullScreen: Story = {
  ...Default,
  args: {
    title: 'Full Screen Modal',
    content: 'This modal takes up the entire screen.',
    size: 'full'
  }
};

export const WithForm: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.textContent = 'Open Form Modal';

    const modalId = 'modal-form';

    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal modal-md';
    modal.setAttribute('aria-labelledby', `${modalId}-title`);
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('role', 'dialog');

    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-container">
        <div class="modal-header">
          <h2 id="${modalId}-title" class="modal-title">Contact Form</h2>
          <button
            type="button"
            class="modal-close"
            aria-label="Close modal"
            onclick="window.Aural.closeModal('${modalId}')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group mb-4">
              <label for="name" class="label">Name</label>
              <input type="text" id="name" class="input" placeholder="Enter your name" />
            </div>
            <div class="form-group mb-4">
              <label for="email" class="label">Email</label>
              <input type="email" id="email" class="input" placeholder="Enter your email" />
            </div>
            <div class="form-group">
              <label for="message" class="label">Message</label>
              <textarea id="message" class="input" rows="4" placeholder="Enter your message"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-ghost"
            onclick="window.Aural.closeModal('${modalId}')"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onclick="window.Aural.closeModal('${modalId}')"
          >
            Send
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
    container.appendChild(modal);

    return container;
  }
};
