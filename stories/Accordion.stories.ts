import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Accordion Component

Vertically stacked sections that expand and collapse to reveal content. Built with accessibility in mind, following WCAG guidelines and ARIA best practices.

Accordions help organize related content into scannable sections, allowing users to focus on one section at a time while reducing visual clutter and cognitive load.

## When to Use

- **FAQs**: Organize frequently asked questions into collapsible sections for easy scanning
- **Documentation**: Structure long-form documentation into navigable sections
- **Settings panels**: Group related settings into collapsible categories
- **Comparison tables**: Show/hide detailed product features or specifications on demand
- **Multi-step forms**: Break long forms into manageable, progressive sections

## When NOT to Use

- **Critical information**: Don't hide essential content that users must see immediately
- **Short content**: If all sections fit comfortably on screen, accordions add unnecessary complexity
- **Navigation**: Use Tabs or Navbar components for primary navigation instead
- **Single item**: If there's only one collapsible section, consider using a Drawer or simpler pattern
- **Complex nested content**: Accordions work best with simple text content, not heavily nested structures

## Framework Examples

### Vanilla HTML
\`\`\`html
<!-- Basic accordion -->
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="panel-1">
      <span>What is Aural UI?</span>
      <svg class="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
        <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
      </svg>
    </button>
    <div id="panel-1" class="accordion-panel" role="region" hidden>
      <div class="accordion-content">
        A modern, accessible component library for building web applications.
      </div>
    </div>
  </div>
</div>

<script>
// Initialize accordion functionality
if (window.Aural) {
  window.Aural.initAccordions();
}
</script>
\`\`\`

### React
\`\`\`jsx
import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
}

function AccordionItem({ title, children, isExpanded = false, onToggle }: AccordionItemProps) {
  const id = \`panel-\${Math.random().toString(36).substr(2, 9)}\`;

  return (
    <div className="accordion-item">
      <button
        className="accordion-header"
        aria-expanded={isExpanded}
        aria-controls={id}
        onClick={onToggle}
      >
        <span>{title}</span>
        <svg className="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
          <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
        </svg>
      </button>
      <div id={id} className="accordion-panel" role="region" hidden={!isExpanded}>
        <div className="accordion-content">
          {children}
        </div>
      </div>
    </div>
  );
}

// Full accordion with state management
interface AccordionProps {
  items: Array<{ title: string; content: React.ReactNode }>;
  allowMultiple?: boolean;
  defaultExpanded?: number[];
}

function Accordion({ items, allowMultiple = false, defaultExpanded = [0] }: AccordionProps) {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>(defaultExpanded);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setExpandedIndexes(prev =>
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setExpandedIndexes(prev => prev.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={\`accordion \${allowMultiple ? 'accordion-always-open' : ''}\`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isExpanded={expandedIndexes.includes(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

// Usage
<Accordion
  items={[
    { title: 'What is Aural UI?', content: 'A modern component library...' },
    { title: 'How do I install?', content: 'Simply include the CSS...' }
  ]}
  allowMultiple={false}
/>
\`\`\`

### Vue
\`\`\`vue
<template>
  <div :class="['accordion', { 'accordion-always-open': allowMultiple }]">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
    >
      <button
        class="accordion-header"
        :aria-expanded="isExpanded(index)"
        :aria-controls="\`panel-\${index}\`"
        @click="toggleItem(index)"
      >
        <span>{{ item.title }}</span>
        <svg class="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
          <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
        </svg>
      </button>
      <div
        :id="\`panel-\${index}\`"
        class="accordion-panel"
        role="region"
        :hidden="!isExpanded(index)"
      >
        <div class="accordion-content">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  items: { type: Array, required: true },
  allowMultiple: { type: Boolean, default: false }
});

const expandedIndexes = ref([0]);

const isExpanded = (index) => expandedIndexes.value.includes(index);

const toggleItem = (index) => {
  if (props.allowMultiple) {
    expandedIndexes.value = isExpanded(index)
      ? expandedIndexes.value.filter(i => i !== index)
      : [...expandedIndexes.value, index];
  } else {
    expandedIndexes.value = isExpanded(index) ? [] : [index];
  }
};
</script>

<!-- Usage -->
<Accordion
  :items="[
    { title: 'Section 1', content: 'Content 1' },
    { title: 'Section 2', content: 'Content 2' }
  ]"
  :allowMultiple="false"
/>
\`\`\`

### Svelte
\`\`\`svelte
<script>
  export let items = [];
  export let allowMultiple = false;

  let expandedIndexes = [0];

  function isExpanded(index) {
    return expandedIndexes.includes(index);
  }

  function toggleItem(index) {
    if (allowMultiple) {
      expandedIndexes = isExpanded(index)
        ? expandedIndexes.filter(i => i !== index)
        : [...expandedIndexes, index];
    } else {
      expandedIndexes = isExpanded(index) ? [] : [index];
    }
  }
</script>

<div class="accordion" class:accordion-always-open={allowMultiple}>
  {#each items as item, index}
    <div class="accordion-item">
      <button
        class="accordion-header"
        aria-expanded={isExpanded(index)}
        aria-controls="panel-{index}"
        on:click={() => toggleItem(index)}
      >
        <span>{item.title}</span>
        <svg class="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
          <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
        </svg>
      </button>
      <div
        id="panel-{index}"
        class="accordion-panel"
        role="region"
        hidden={!isExpanded(index)}
      >
        <div class="accordion-content">
          {item.content}
        </div>
      </div>
    </div>
  {/each}
</div>
\`\`\`

## Accessibility

1. **Button elements**: Accordion headers use \`<button>\` elements, not divs with click handlers
2. **ARIA expanded**: \`aria-expanded\` attribute indicates whether each panel is open or closed
3. **ARIA controls**: \`aria-controls\` links buttons to their corresponding panels via unique IDs
4. **Region role**: Panels use \`role="region"\` to identify them as content regions for screen readers
5. **Hidden attribute**: Collapsed panels use \`hidden\` attribute for proper screen reader behavior
6. **Keyboard navigation**: Arrow keys (Up/Down) move focus between accordion headers
7. **Home/End keys**: Jump to first/last accordion item for quick navigation
8. **Space/Enter keys**: Expand or collapse the focused accordion item
9. **Focus indicators**: Visible focus ring on keyboard focus (2px solid primary color, -2px offset)
10. **Heading structure**: Accordion items can include heading elements in proper hierarchy
11. **Unique IDs**: Each panel has a unique ID referenced by \`aria-controls\` attribute
12. **Semantic HTML**: Proper use of button, div, and region elements for structure
13. **Screen reader announcements**: State changes announced automatically via ARIA attributes
14. **Motion preferences**: Animations respect \`prefers-reduced-motion\` setting (no transitions/transforms)
15. **Touch targets**: Headers meet minimum 44×44px touch target size on all devices

## Usage Guidelines

### Best Practices

- **Clear headers**: Use descriptive, concise headers that clearly indicate content
- **Logical order**: Arrange items in order of importance or logical sequence
- **Default state**: Consider opening the first or most important item by default
- **Visual feedback**: Icon rotation indicates expanded/collapsed state
- **Consistent behavior**: Decide whether multiple items can be open (always-open variant)
- **Content length**: Keep panel content scannable; avoid extremely long sections

### Variants

- **Default**: Only one panel can be open at a time (accordion behavior)
- **Always open** (\`accordion-always-open\`): Multiple panels can be open simultaneously
- **Bordered** (\`accordion-bordered\`): Visible borders between items for clear separation
- **Flush** (\`accordion-flush\`): Remove outer borders for embedding in cards or containers
- **Small** (\`accordion-sm\`): Reduced padding and smaller text for compact layouts
- **Large** (\`accordion-lg\`): Increased padding and larger text for prominent displays

### Mobile Considerations

- Headers automatically meet 44×44px minimum touch target
- Font sizes and padding adjust for smaller screens
- Flush variant recommended for mobile to maximize screen space
- Animations disabled if user prefers reduced motion
- Touch-friendly spacing between interactive elements
        `.trim(),
      },
    },
  },
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
      <div class="accordion-item" id="acc-item-1">
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

      <div class="accordion-item" id="acc-item-2">
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

      <div class="accordion-item" id="acc-item-3">
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
  },
  parameters: {
    docs: {
      source: {
        code: `<div class="accordion">
  <div class="accordion-item" id="acc-item-1">
    <button class="accordion-header" aria-expanded="true" aria-controls="acc-panel-1">
      <span>What is Aural UI?</span>
      <svg class="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
        <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
      </svg>
    </button>
    <div id="acc-panel-1" class="accordion-panel" role="region">
      <div class="accordion-content">
        Aural UI is a modern, accessible component library designed for building beautiful web applications.
      </div>
    </div>
  </div>

  <div class="accordion-item" id="acc-item-2">
    <button class="accordion-header" aria-expanded="false" aria-controls="acc-panel-2">
      <span>How do I install it?</span>
      <svg class="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
        <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
      </svg>
    </button>
    <div id="acc-panel-2" class="accordion-panel" role="region" hidden>
      <div class="accordion-content">
        Simply include the CSS and JavaScript files in your HTML.
      </div>
    </div>
  </div>
</div>

<script>
// Initialize accordion functionality
if (window.Aural) {
  window.Aural.initAccordions();
}
</script>`,
      },
    },
  },
};

export const Bordered: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion accordion-bordered';

    accordion.innerHTML = `
      <div class="accordion-item" id="bordered-item-1">
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

      <div class="accordion-item" id="bordered-item-2">
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

      <div class="accordion-item" id="bordered-item-3">
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
  },
};

export const Flush: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion accordion-flush';

    accordion.innerHTML = `
      <div class="accordion-item" id="flush-item-1">
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

      <div class="accordion-item" id="flush-item-2">
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

      <div class="accordion-item" id="flush-item-3">
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
  },
};

export const AlwaysOpen: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion accordion-always-open accordion-bordered';

    accordion.innerHTML = `
      <div class="accordion-item" id="multi-item-1">
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

      <div class="accordion-item" id="multi-item-2">
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

      <div class="accordion-item" id="multi-item-3">
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

      <div class="accordion-item" id="multi-item-4">
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
  },
};

export const DefaultOpen: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion';

    accordion.innerHTML = `
      <div class="accordion-item" id="open-item-1">
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

      <div class="accordion-item" id="open-item-2">
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

      <div class="accordion-item" id="open-item-3">
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
  },
};

export const FAQ: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const accordion = document.createElement('div');
    accordion.className = 'accordion';

    accordion.innerHTML = `
      <div class="accordion-item" id="faq-item-1">
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

      <div class="accordion-item" id="faq-item-2">
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

      <div class="accordion-item" id="faq-item-3">
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

      <div class="accordion-item" id="faq-item-4">
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
  },
};
