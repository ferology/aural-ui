/**
 * Design System Rules for Aural UI
 * These rules ensure all components maintain consistency and quality
 */

export const DESIGN_SYSTEM_RULES = {
  /**
   * Token Architecture Rules
   */
  tokens: {
    coreTokensPath: '../tokens/core',
    semanticTokensPath: '../tokens/semantic',
    rules: [
      'All components MUST use semantic tokens, never core tokens directly',
      'Use --color-* for all color properties',
      'Use --space-* for all spacing (margin, padding, gap)',
      'Use --text-* for font sizes',
      'Use --radius-* for border radius',
      'Use --shadow-* for box shadows',
      'Use --duration-* and --ease-* for transitions',
    ],
  },

  /**
   * Component Architecture Rules
   */
  components: {
    path: '../components',
    naming: {
      pattern: 'kebab-case',
      prefix: '',
      example: 'button.css, modal.css, date-picker.css',
    },
    structure: [
      'Components MUST be self-contained in a single CSS file',
      'Use BEM-inspired class naming: .component, .component-element, .component--variant',
      'All interactive elements MUST have :hover, :focus, :active states',
      'All components MUST support disabled state',
      'All variants should use modifier classes (e.g., .btn--primary, .btn--lg)',
    ],
  },

  /**
   * Accessibility Requirements (WCAG 2.1 AA)
   */
  accessibility: {
    requirements: [
      'Minimum touch target size: 44x44px (48x48px recommended)',
      'Color contrast ratio: 4.5:1 for text, 3:1 for UI components',
      'Focus indicators MUST be visible (2px solid outline minimum)',
      'All interactive elements MUST be keyboard accessible',
      'Respect prefers-reduced-motion for animations',
      'Support prefers-color-scheme for theme switching',
      'Use semantic HTML elements (button, nav, main, etc.)',
      'Include proper ARIA attributes (role, aria-label, aria-expanded, etc.)',
    ],
    ariaPatterns: {
      modal: ['role="dialog"', 'aria-modal="true"', 'aria-labelledby', 'focus trap'],
      dropdown: ['role="menu"', 'role="menuitem"', 'aria-expanded', 'aria-haspopup'],
      tabs: ['role="tablist"', 'role="tab"', 'role="tabpanel"', 'aria-selected'],
      accordion: ['role="region"', 'aria-expanded', 'aria-controls'],
    },
  },

  /**
   * Responsive Design Rules
   */
  responsive: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    approach: 'mobile-first',
    rules: [
      'Use mobile-first media queries (@media (min-width: ...))',
      'Test at 320px, 768px, 1024px, and 1440px viewports',
      'Touch targets MUST be 44px minimum on mobile',
      'Ensure horizontal scrolling never occurs',
      'Stack layouts vertically on mobile when appropriate',
    ],
  },

  /**
   * Component Categories
   */
  categories: {
    'form-controls': [
      'button',
      'input',
      'select',
      'checkbox',
      'radio',
      'toggle',
      'slider',
      'textarea',
      'file-upload',
      'date-picker',
      'time-picker',
      'color-picker',
      'rating',
    ],
    navigation: [
      'navbar',
      'tabs',
      'breadcrumb',
      'pagination',
      'stepper',
      'drawer',
      'command-palette',
      'context-menu',
    ],
    'data-display': [
      'table',
      'card',
      'avatar',
      'badge',
      'progress',
      'timeline',
      'code-block',
      'stats-card',
      'empty-state',
      'divider',
    ],
    interactive: [
      'modal',
      'dialog',
      'tooltip',
      'popover',
      'dropdown',
      'accordion',
    ],
    feedback: [
      'toast',
      'snackbar',
      'alert',
      'skeleton',
      'spinner',
      'notification-center',
    ],
  },

  /**
   * CSS Best Practices
   */
  css: {
    rules: [
      'Use CSS custom properties for all themeable values',
      'Avoid !important unless absolutely necessary',
      'Use logical properties (padding-inline, margin-block) for better RTL support',
      'Group related properties (layout, typography, colors, misc)',
      'Use shorthand properties when appropriate (margin, padding, border)',
      'Avoid magic numbers - use tokens instead',
      'Comment complex selectors or calculations',
    ],
    formatting: {
      indentation: '2 spaces',
      selectorFormat: 'One selector per line in multi-selector rules',
      propertyOrder: 'Grouped by type (layout → typography → visual → misc)',
    },
  },

  /**
   * JavaScript Best Practices
   */
  javascript: {
    path: '../javascript',
    rules: [
      'Use vanilla JavaScript (no frameworks)',
      'All methods should be namespaced under Aural global object',
      'Support ES6+ features',
      'Handle errors gracefully with try-catch',
      'Clean up event listeners on component destroy',
      'Use requestAnimationFrame for animations',
      'Debounce expensive operations (resize, scroll)',
      'Support keyboard navigation',
      'Trap focus in modals and dialogs',
    ],
    api: {
      naming: 'camelCase',
      pattern: 'Aural.methodName()',
      examples: [
        'Aural.showToast(message, type)',
        'Aural.openModal(id)',
        'Aural.initDropdown(element)',
      ],
    },
  },

  /**
   * Documentation Requirements
   */
  documentation: {
    required: [
      'Component description and use cases',
      'All variants with visual examples',
      'All states (hover, focus, active, disabled)',
      'Accessibility notes and keyboard shortcuts',
      'Code examples with proper HTML structure',
      'Props/options table for JavaScript components',
      'Browser support notes if limitations exist',
    ],
    structure: {
      overview: 'Brief description of the component',
      examples: 'Live interactive examples',
      variants: 'All available variants',
      states: 'All possible states',
      api: 'JavaScript API if applicable',
      accessibility: 'A11y features and keyboard shortcuts',
      notes: 'Additional notes or limitations',
    },
  },

  /**
   * Testing Requirements
   */
  testing: {
    required: [
      'Visual regression tests for all variants',
      'Accessibility audit (WCAG AA)',
      'Keyboard navigation test',
      'Screen reader test (VoiceOver/NVDA)',
      'Cross-browser test (Chrome, Firefox, Safari, Edge)',
      'Mobile responsive test (iOS Safari, Chrome Android)',
      'Color contrast validation',
      'Focus indicator visibility check',
    ],
  },

  /**
   * Performance Guidelines
   */
  performance: {
    budgets: {
      css: {
        individual: '10KB max per component',
        bundle: '150KB max for full design system',
      },
      js: {
        individual: '5KB max per component',
        bundle: '30KB max for all utilities',
      },
    },
    rules: [
      'Minimize CSS specificity',
      'Avoid deep nesting (max 3 levels)',
      'Use CSS containment where appropriate',
      'Lazy load non-critical components',
      'Optimize animations (use transform and opacity)',
      'Avoid layout thrashing in JavaScript',
    ],
  },

  /**
   * Version Control & Release
   */
  versioning: {
    strategy: 'Semantic Versioning (semver)',
    changelogRequired: true,
    migrationGuideRequired: 'For breaking changes',
    deprecationNotice: 'At least one major version before removal',
  },
};

export default DESIGN_SYSTEM_RULES;
