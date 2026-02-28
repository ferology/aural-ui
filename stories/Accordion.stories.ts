import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Collapsible content sections with smooth animations and keyboard support.'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion';

    accordion.innerHTML = `
      <div class="accordion-item">
        <button
          id="accordion-item-1"
          class="accordion-trigger"
          aria-expanded="false"
          aria-controls="accordion-content-1"
        >
          <span>What is Aural UI?</span>
          <span class="accordion-icon" aria-hidden="true">+</span>
        </button>
        <div
          id="accordion-content-1"
          class="accordion-content"
          role="region"
          aria-labelledby="accordion-item-1"
          hidden
        >
          <div class="accordion-body">
            Aural UI is a modern, accessible design system with comprehensive components, utilities, and themes. It provides a complete UI toolkit for building beautiful web applications.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button
          id="accordion-item-2"
          class="accordion-trigger"
          aria-expanded="false"
          aria-controls="accordion-content-2"
        >
          <span>How do I customize themes?</span>
          <span class="accordion-icon" aria-hidden="true">+</span>
        </button>
        <div
          id="accordion-content-2"
          class="accordion-content"
          role="region"
          aria-labelledby="accordion-item-2"
          hidden
        >
          <div class="accordion-body">
            You can customize themes by modifying CSS custom properties or creating your own theme file. All design tokens are exposed as CSS variables for easy customization.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button
          id="accordion-item-3"
          class="accordion-trigger"
          aria-expanded="false"
          aria-controls="accordion-content-3"
        >
          <span>Is it accessible?</span>
          <span class="accordion-icon" aria-hidden="true">+</span>
        </button>
        <div
          id="accordion-content-3"
          class="accordion-content"
          role="region"
          aria-labelledby="accordion-item-3"
          hidden
        >
          <div class="accordion-body">
            Yes! All components are WCAG 2.1 AA compliant with proper ARIA attributes, keyboard navigation, and focus management. Accessibility is a core priority.
          </div>
        </div>
      </div>
    `;

    container.appendChild(accordion);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initAccordions();
      }
    }, 100);

    return container;
  }
};

export const AllowMultiple: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion accordion-multiple';
    accordion.setAttribute('data-allow-multiple', 'true');

    accordion.innerHTML = `
      <div class="accordion-item">
        <button
          id="accordion-multi-1"
          class="accordion-trigger"
          aria-expanded="false"
        >
          <span>Section 1</span>
          <span class="accordion-icon">+</span>
        </button>
        <div class="accordion-content" hidden>
          <div class="accordion-body">
            Content for section 1. Multiple sections can be open at once.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button
          id="accordion-multi-2"
          class="accordion-trigger"
          aria-expanded="false"
        >
          <span>Section 2</span>
          <span class="accordion-icon">+</span>
        </button>
        <div class="accordion-content" hidden>
          <div class="accordion-body">
            Content for section 2. Try opening both sections!
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button
          id="accordion-multi-3"
          class="accordion-trigger"
          aria-expanded="false"
        >
          <span>Section 3</span>
          <span class="accordion-icon">+</span>
        </button>
        <div class="accordion-content" hidden>
          <div class="accordion-body">
            Content for section 3. All sections can be open simultaneously.
          </div>
        </div>
      </div>
    `;

    container.appendChild(accordion);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initAccordions();
      }
    }, 100);

    return container;
  }
};

export const DefaultOpen: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion';

    accordion.innerHTML = `
      <div class="accordion-item">
        <button
          id="accordion-open-1"
          class="accordion-trigger active"
          aria-expanded="true"
        >
          <span>Getting Started</span>
          <span class="accordion-icon">−</span>
        </button>
        <div class="accordion-content open">
          <div class="accordion-body">
            This section is open by default. Follow these steps to get started with Aural UI.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button
          id="accordion-open-2"
          class="accordion-trigger"
          aria-expanded="false"
        >
          <span>Advanced Features</span>
          <span class="accordion-icon">+</span>
        </button>
        <div class="accordion-content" hidden>
          <div class="accordion-body">
            Learn about advanced features and customization options.
          </div>
        </div>
      </div>
    `;

    container.appendChild(accordion);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initAccordions();
      }
    }, 100);

    return container;
  }
};
