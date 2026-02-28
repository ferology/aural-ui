import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Vertically stacked sections that expand and collapse to reveal content. Built with accessibility in mind, following WCAG guidelines and ARIA best practices.'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

// SVG Chevron icon used in all accordions
const chevronIcon = `<svg class="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
  <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
</svg>`;

export const Default: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion';

    accordion.innerHTML = `
      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="true" aria-controls="acc-panel-1">
          <span>What is Aural UI?</span>
          ${chevronIcon}
        </button>
        <div id="acc-panel-1" class="accordion-panel" role="region">
          <div class="accordion-content">
            Aural UI is a modern, accessible component library designed for building beautiful web applications with a focus on audio and music interfaces.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-panel-2">
          <span>How do I install it?</span>
          ${chevronIcon}
        </button>
        <div id="acc-panel-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Simply include the CSS and JavaScript files in your HTML and start using the components.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-panel-3">
          <span>Is it accessible?</span>
          ${chevronIcon}
        </button>
        <div id="acc-panel-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Yes! Aural UI is built with accessibility in mind, following WCAG guidelines and ARIA best practices.
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

export const Bordered: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion accordion-bordered';

    accordion.innerHTML = `
      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-bordered-1">
          <span>First Section</span>
          ${chevronIcon}
        </button>
        <div id="acc-bordered-1" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Content for the first section goes here. You can add any content you want.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-bordered-2">
          <span>Second Section</span>
          ${chevronIcon}
        </button>
        <div id="acc-bordered-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Content for the second section. The bordered variant adds visible borders between items.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-bordered-3">
          <span>Third Section</span>
          ${chevronIcon}
        </button>
        <div id="acc-bordered-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            This variant is great when you want clear visual separation between accordion items.
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

export const Flush: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion accordion-flush';

    accordion.innerHTML = `
      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-flush-1">
          <span>Flush Item One</span>
          ${chevronIcon}
        </button>
        <div id="acc-flush-1" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Flush accordions remove outer borders for a cleaner look when embedded in cards or sidebars.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-flush-2">
          <span>Flush Item Two</span>
          ${chevronIcon}
        </button>
        <div id="acc-flush-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Perfect for use within cards or other containers where you don't want extra borders.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-flush-3">
          <span>Flush Item Three</span>
          ${chevronIcon}
        </button>
        <div id="acc-flush-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Notice how the first item has no top padding for a seamless integration.
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

export const AlwaysOpen: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion accordion-always-open accordion-bordered';

    accordion.innerHTML = `
      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="true" aria-controls="acc-multi-1">
          <span>Section One</span>
          ${chevronIcon}
        </button>
        <div id="acc-multi-1" class="accordion-panel" role="region">
          <div class="accordion-content">
            This panel stays open when you open another panel. Try clicking the other sections - this one will remain expanded!
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="true" aria-controls="acc-multi-2">
          <span>Section Two</span>
          ${chevronIcon}
        </button>
        <div id="acc-multi-2" class="accordion-panel" role="region">
          <div class="accordion-content">
            Multiple panels can be open at the same time. This is useful when users need to compare content across sections.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-multi-3">
          <span>Section Three</span>
          ${chevronIcon}
        </button>
        <div id="acc-multi-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Click to expand this section. Notice how the other sections stay open - they won't collapse automatically.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-multi-4">
          <span>Section Four</span>
          ${chevronIcon}
        </button>
        <div id="acc-multi-4" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Great for documentation, FAQs, or any content where users might want to view multiple sections at once.
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
        <button class="accordion-header" aria-expanded="true" aria-controls="acc-open-1">
          <span>Getting Started</span>
          ${chevronIcon}
        </button>
        <div id="acc-open-1" class="accordion-panel" role="region">
          <div class="accordion-content">
            This section is open by default. Follow these steps to get started with Aural UI.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-open-2">
          <span>Advanced Features</span>
          ${chevronIcon}
        </button>
        <div id="acc-open-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Learn about advanced features and customization options.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-open-3">
          <span>API Reference</span>
          ${chevronIcon}
        </button>
        <div id="acc-open-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Explore the complete API documentation for all components.
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

export const FAQ: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion';

    accordion.innerHTML = `
      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-faq-1">
          <span>What payment methods do you accept?</span>
          ${chevronIcon}
        </button>
        <div id="acc-faq-1" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-faq-2">
          <span>Can I cancel my subscription anytime?</span>
          ${chevronIcon}
        </button>
        <div id="acc-faq-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-faq-3">
          <span>Do you offer refunds?</span>
          ${chevronIcon}
        </button>
        <div id="acc-faq-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            We offer a 30-day money-back guarantee for all new subscriptions. Contact our support team for assistance.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-faq-4">
          <span>How do I upgrade my plan?</span>
          ${chevronIcon}
        </button>
        <div id="acc-faq-4" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            You can upgrade your plan anytime from your account settings. The price difference will be prorated for your current billing cycle.
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
