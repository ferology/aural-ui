#!/usr/bin/env node

/**
 * Component Registry Generator
 *
 * Generates a machine-readable component registry JSON file by parsing:
 * - navigation.json for component structure
 * - Component CSS files for class names and patterns
 * - Storybook stories for examples
 * - COMPONENTS.md for documentation
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const NAVIGATION_FILE = path.join(ROOT_DIR, 'docs/data/navigation.json');
const COMPONENTS_DIR = path.join(ROOT_DIR, 'components');
const STORIES_DIR = path.join(ROOT_DIR, 'stories');
const OUTPUT_FILE = path.join(ROOT_DIR, 'component-registry.json');

/**
 * Component metadata template
 */
const COMPONENT_METADATA = {
  // Forms & Inputs
  'Buttons': {
    name: 'Button',
    category: 'Forms & Inputs',
    htmlStructure: '<button class="btn btn-{variant} btn-{size}">Text</button>',
    cssClasses: {
      base: 'btn',
      variants: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'hover', 'active', 'disabled', 'loading']
    },
    tokens: ['--color-button-primary-bg', '--color-button-primary-text', '--space-3', '--space-6', '--radius-md', '--shadow-primary'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'button',
      ariaAttributes: ['aria-label', 'aria-disabled', 'aria-busy'],
      keyboardSupport: ['Enter', 'Space']
    },
    cssFile: 'components/button.css',
    storybook: 'stories/Button.stories.ts'
  },
  'Inputs': {
    name: 'Input',
    category: 'Forms & Inputs',
    htmlStructure: '<input type="text" class="input" placeholder="Enter text">',
    cssClasses: {
      base: 'input',
      variants: ['default', 'error', 'success'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'focus', 'disabled', 'readonly']
    },
    tokens: ['--color-input-border', '--color-input-bg', '--space-3', '--radius-md'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'textbox',
      ariaAttributes: ['aria-label', 'aria-describedby', 'aria-invalid'],
      keyboardSupport: ['Tab', 'Arrow keys']
    },
    cssFile: 'components/input.css',
    storybook: 'stories/Input.stories.ts'
  },
  'Checkboxes': {
    name: 'Checkbox',
    category: 'Forms & Inputs',
    htmlStructure: '<label class="checkbox"><input type="checkbox"><span>Label</span></label>',
    cssClasses: {
      base: 'checkbox',
      variants: ['default'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'checked', 'indeterminate', 'disabled']
    },
    tokens: ['--color-checkbox-border', '--color-checkbox-bg', '--space-2', '--radius-sm'],
    javascript: { required: true, methods: ['Aural.setIndeterminate(id, state)'] },
    accessibility: {
      role: 'checkbox',
      ariaAttributes: ['aria-checked', 'aria-label'],
      keyboardSupport: ['Space']
    },
    cssFile: 'components/checkbox.css',
    storybook: 'stories/Checkbox.stories.ts'
  },
  'Radio Buttons': {
    name: 'Radio',
    category: 'Forms & Inputs',
    htmlStructure: '<label class="radio"><input type="radio" name="group"><span>Label</span></label>',
    cssClasses: {
      base: 'radio',
      variants: ['default'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'checked', 'disabled']
    },
    tokens: ['--color-radio-border', '--color-radio-bg', '--space-2', '--radius-full'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'radio',
      ariaAttributes: ['aria-checked', 'aria-label'],
      keyboardSupport: ['Space', 'Arrow keys']
    },
    cssFile: 'components/radio.css',
    storybook: 'stories/Radio.stories.ts'
  },
  'Switch / Toggle': {
    name: 'Switch',
    category: 'Forms & Inputs',
    htmlStructure: '<label class="switch"><input type="checkbox"><span class="switch-slider"></span></label>',
    cssClasses: {
      base: 'switch',
      variants: ['default'],
      sizes: ['sm', 'md', 'lg'],
      states: ['off', 'on', 'disabled']
    },
    tokens: ['--color-switch-bg', '--color-switch-handle', '--space-1', '--radius-full'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'switch',
      ariaAttributes: ['aria-checked', 'aria-label'],
      keyboardSupport: ['Space']
    },
    cssFile: 'components/switch.css',
    storybook: 'stories/Switch.stories.ts'
  },
  'Select': {
    name: 'Select',
    category: 'Forms & Inputs',
    htmlStructure: '<select class="select"><option>Option 1</option></select>',
    cssClasses: {
      base: 'select',
      variants: ['default'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'focus', 'disabled']
    },
    tokens: ['--color-select-border', '--color-select-bg', '--space-3', '--radius-md'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'combobox',
      ariaAttributes: ['aria-label', 'aria-expanded'],
      keyboardSupport: ['Arrow keys', 'Enter', 'Escape']
    },
    cssFile: 'components/select.css',
    storybook: 'stories/Select.stories.ts'
  },
  'Multi-Select': {
    name: 'MultiSelect',
    category: 'Forms & Inputs',
    htmlStructure: '<div class="multi-select" data-multi-select>...</div>',
    cssClasses: {
      base: 'multi-select',
      variants: ['default'],
      sizes: ['md'],
      states: ['default', 'focus', 'disabled']
    },
    tokens: ['--color-select-border', '--color-select-bg', '--space-3', '--radius-md'],
    javascript: { required: true, methods: ['Aural.initMultiSelect()'] },
    accessibility: {
      role: 'listbox',
      ariaAttributes: ['aria-multiselectable', 'aria-label'],
      keyboardSupport: ['Arrow keys', 'Space', 'Shift+Arrow']
    },
    cssFile: 'components/multi-select.css',
    storybook: 'stories/MultiSelect.stories.ts'
  },
  'Combobox': {
    name: 'Combobox',
    category: 'Forms & Inputs',
    htmlStructure: '<div class="combobox" data-combobox>...</div>',
    cssClasses: {
      base: 'combobox',
      variants: ['default'],
      sizes: ['md'],
      states: ['default', 'focus', 'disabled']
    },
    tokens: ['--color-input-border', '--color-input-bg', '--space-3', '--radius-md'],
    javascript: { required: true, methods: ['Aural.initCombobox()'] },
    accessibility: {
      role: 'combobox',
      ariaAttributes: ['aria-expanded', 'aria-autocomplete'],
      keyboardSupport: ['Arrow keys', 'Enter', 'Escape']
    },
    cssFile: 'components/combobox.css',
    storybook: 'stories/Combobox.stories.ts'
  },
  'Search Bar': {
    name: 'SearchBar',
    category: 'Forms & Inputs',
    htmlStructure: '<div class="search-bar"><input type="search" placeholder="Search..."></div>',
    cssClasses: {
      base: 'search-bar',
      variants: ['default'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'focus']
    },
    tokens: ['--color-input-border', '--color-input-bg', '--space-3', '--radius-md'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'searchbox',
      ariaAttributes: ['aria-label'],
      keyboardSupport: ['Tab', 'Enter']
    },
    cssFile: 'components/search-bar.css',
    storybook: 'stories/SearchBar.stories.ts'
  },
  'Slider': {
    name: 'Slider',
    category: 'Forms & Inputs',
    htmlStructure: '<input type="range" class="slider" min="0" max="100" value="50">',
    cssClasses: {
      base: 'slider',
      variants: ['default'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'disabled']
    },
    tokens: ['--color-slider-track', '--color-slider-thumb', '--radius-full'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'slider',
      ariaAttributes: ['aria-valuenow', 'aria-valuemin', 'aria-valuemax', 'aria-label'],
      keyboardSupport: ['Arrow keys', 'Page Up/Down', 'Home', 'End']
    },
    cssFile: 'components/slider.css',
    storybook: 'stories/Slider.stories.ts'
  },
  'Range Slider': {
    name: 'RangeSlider',
    category: 'Forms & Inputs',
    htmlStructure: '<div class="range-slider" data-range-slider>...</div>',
    cssClasses: {
      base: 'range-slider',
      variants: ['default'],
      sizes: ['md'],
      states: ['default', 'disabled']
    },
    tokens: ['--color-slider-track', '--color-slider-thumb', '--radius-full'],
    javascript: { required: true, methods: ['Aural.initRangeSlider()'] },
    accessibility: {
      role: 'slider',
      ariaAttributes: ['aria-valuenow', 'aria-valuemin', 'aria-valuemax', 'aria-label'],
      keyboardSupport: ['Arrow keys']
    },
    cssFile: 'components/range-slider.css',
    storybook: 'stories/RangeSlider.stories.ts'
  },
  'Rating': {
    name: 'Rating',
    category: 'Forms & Inputs',
    htmlStructure: '<div class="rating" data-rating>...</div>',
    cssClasses: {
      base: 'rating',
      variants: ['default'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'readonly', 'disabled']
    },
    tokens: ['--color-rating-active', '--color-rating-inactive', '--space-1'],
    javascript: { required: true, methods: ['Aural.initRating()'] },
    accessibility: {
      role: 'slider',
      ariaAttributes: ['aria-valuenow', 'aria-valuemin', 'aria-valuemax', 'aria-label'],
      keyboardSupport: ['Arrow keys', 'Number keys']
    },
    cssFile: 'components/rating.css',
    storybook: 'stories/Rating.stories.ts'
  },
  'Color Picker': {
    name: 'ColorPicker',
    category: 'Forms & Inputs',
    htmlStructure: '<input type="color" class="color-picker" value="#3b82f6">',
    cssClasses: {
      base: 'color-picker',
      variants: ['default'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'disabled']
    },
    tokens: ['--color-input-border', '--radius-md'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'button',
      ariaAttributes: ['aria-label'],
      keyboardSupport: ['Space', 'Enter']
    },
    cssFile: 'components/color-picker.css',
    storybook: 'stories/ColorPicker.stories.ts'
  },
  'Date Picker': {
    name: 'DatePicker',
    category: 'Forms & Inputs',
    htmlStructure: '<div class="date-picker" data-date-picker>...</div>',
    cssClasses: {
      base: 'date-picker',
      variants: ['default'],
      sizes: ['md'],
      states: ['default', 'focus', 'disabled']
    },
    tokens: ['--color-input-border', '--color-input-bg', '--space-3', '--radius-md'],
    javascript: { required: true, methods: ['Aural.initDatePicker()'] },
    accessibility: {
      role: 'dialog',
      ariaAttributes: ['aria-label', 'aria-modal'],
      keyboardSupport: ['Arrow keys', 'Enter', 'Escape']
    },
    cssFile: 'components/date-picker.css',
    storybook: 'stories/DatePicker.stories.ts'
  },
  'Date Range Picker': {
    name: 'DateRangePicker',
    category: 'Forms & Inputs',
    htmlStructure: '<div class="date-range-picker" data-date-range-picker>...</div>',
    cssClasses: {
      base: 'date-range-picker',
      variants: ['default'],
      sizes: ['md'],
      states: ['default', 'focus', 'disabled']
    },
    tokens: ['--color-input-border', '--color-input-bg', '--space-3', '--radius-md'],
    javascript: { required: true, methods: ['Aural.initDateRangePicker()'] },
    accessibility: {
      role: 'dialog',
      ariaAttributes: ['aria-label', 'aria-modal'],
      keyboardSupport: ['Arrow keys', 'Enter', 'Escape']
    },
    cssFile: 'components/date-range-picker.css',
    storybook: 'stories/DateRangePicker.stories.ts'
  },
  'Time Picker': {
    name: 'TimePicker',
    category: 'Forms & Inputs',
    htmlStructure: '<input type="time" class="time-picker">',
    cssClasses: {
      base: 'time-picker',
      variants: ['default'],
      sizes: ['md'],
      states: ['default', 'focus', 'disabled']
    },
    tokens: ['--color-input-border', '--color-input-bg', '--space-3', '--radius-md'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'textbox',
      ariaAttributes: ['aria-label'],
      keyboardSupport: ['Arrow keys', 'Tab']
    },
    cssFile: 'components/time-picker.css',
    storybook: 'stories/TimePicker.stories.ts'
  },
  'File Upload': {
    name: 'FileUpload',
    category: 'Forms & Inputs',
    htmlStructure: '<div class="file-upload" data-file-upload>...</div>',
    cssClasses: {
      base: 'file-upload',
      variants: ['default', 'drag-active'],
      sizes: ['md'],
      states: ['default', 'dragging', 'uploading']
    },
    tokens: ['--color-border', '--color-bg-secondary', '--space-4', '--radius-md'],
    javascript: { required: true, methods: ['Aural.initFileUpload()'] },
    accessibility: {
      role: 'button',
      ariaAttributes: ['aria-label'],
      keyboardSupport: ['Enter', 'Space']
    },
    cssFile: 'components/file-upload.css',
    storybook: 'stories/FileUpload.stories.ts'
  },

  // Data Display
  'Tables': {
    name: 'Table',
    category: 'Data Display',
    htmlStructure: '<table class="table"><thead>...</thead><tbody>...</tbody></table>',
    cssClasses: {
      base: 'table',
      variants: ['default', 'striped', 'bordered', 'hoverable'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default']
    },
    tokens: ['--color-border', '--color-bg-secondary', '--space-3'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'table',
      ariaAttributes: ['aria-label', 'aria-describedby'],
      keyboardSupport: ['Tab']
    },
    cssFile: 'components/table.css',
    storybook: 'stories/Table.stories.ts'
  },
  'Cards': {
    name: 'Card',
    category: 'Data Display',
    htmlStructure: '<div class="card"><div class="card-header">...</div><div class="card-body">...</div></div>',
    cssClasses: {
      base: 'card',
      variants: ['default', 'bordered', 'elevated'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'hover']
    },
    tokens: ['--color-bg-primary', '--color-border', '--space-4', '--radius-lg', '--shadow-md'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'article',
      ariaAttributes: ['aria-labelledby'],
      keyboardSupport: []
    },
    cssFile: 'components/card.css',
    storybook: 'stories/Card.stories.ts'
  },
  'Badges': {
    name: 'Badge',
    category: 'Data Display',
    htmlStructure: '<span class="badge badge-{variant}">Text</span>',
    cssClasses: {
      base: 'badge',
      variants: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default']
    },
    tokens: ['--color-badge-bg', '--color-badge-text', '--space-1', '--space-2', '--radius-full'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'status',
      ariaAttributes: ['aria-label'],
      keyboardSupport: []
    },
    cssFile: 'components/badge.css',
    storybook: 'stories/Badge.stories.ts'
  },
  'Chips': {
    name: 'Chip',
    category: 'Data Display',
    htmlStructure: '<span class="chip">Text <button class="chip-remove">×</button></span>',
    cssClasses: {
      base: 'chip',
      variants: ['default', 'outlined'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'hover']
    },
    tokens: ['--color-chip-bg', '--color-chip-text', '--space-2', '--radius-full'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'button',
      ariaAttributes: ['aria-label'],
      keyboardSupport: ['Enter', 'Delete']
    },
    cssFile: 'components/chips.css',
    storybook: 'stories/Chip.stories.ts'
  },
  'Tooltips': {
    name: 'Tooltip',
    category: 'Data Display',
    htmlStructure: '<div class="tooltip" role="tooltip">Tooltip text</div>',
    cssClasses: {
      base: 'tooltip',
      variants: ['top', 'right', 'bottom', 'left'],
      sizes: ['sm', 'md'],
      states: ['hidden', 'visible']
    },
    tokens: ['--color-tooltip-bg', '--color-tooltip-text', '--space-2', '--radius-sm', '--shadow-lg'],
    javascript: { required: true, methods: ['Aural.initTooltips()'] },
    accessibility: {
      role: 'tooltip',
      ariaAttributes: ['aria-describedby'],
      keyboardSupport: ['Escape']
    },
    cssFile: 'components/tooltip.css',
    storybook: 'stories/Tooltip.stories.ts'
  },
  'Progress': {
    name: 'Progress',
    category: 'Data Display',
    htmlStructure: '<div class="progress"><div class="progress-bar" style="width: 50%"></div></div>',
    cssClasses: {
      base: 'progress',
      variants: ['default', 'success', 'warning', 'danger'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'animated']
    },
    tokens: ['--color-progress-bg', '--color-progress-fill', '--radius-full'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'progressbar',
      ariaAttributes: ['aria-valuenow', 'aria-valuemin', 'aria-valuemax', 'aria-label'],
      keyboardSupport: []
    },
    cssFile: 'components/progress.css',
    storybook: 'stories/Progress.stories.ts'
  },
  'Spinner': {
    name: 'Spinner',
    category: 'Data Display',
    htmlStructure: '<div class="spinner" role="status"><span class="sr-only">Loading...</span></div>',
    cssClasses: {
      base: 'spinner',
      variants: ['default', 'primary', 'secondary'],
      sizes: ['sm', 'md', 'lg'],
      states: ['spinning']
    },
    tokens: ['--color-spinner', '--space-4'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'status',
      ariaAttributes: ['aria-live', 'aria-busy'],
      keyboardSupport: []
    },
    cssFile: 'components/spinner.css',
    storybook: 'stories/Spinner.stories.ts'
  },
  'Skeleton': {
    name: 'Skeleton',
    category: 'Data Display',
    htmlStructure: '<div class="skeleton skeleton-{type}"></div>',
    cssClasses: {
      base: 'skeleton',
      variants: ['text', 'circle', 'rect'],
      sizes: ['sm', 'md', 'lg'],
      states: ['loading']
    },
    tokens: ['--color-skeleton-bg', '--color-skeleton-shimmer', '--radius-md'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'status',
      ariaAttributes: ['aria-busy', 'aria-label'],
      keyboardSupport: []
    },
    cssFile: 'components/skeleton.css',
    storybook: 'stories/Skeleton.stories.ts'
  },
  'Avatars': {
    name: 'Avatar',
    category: 'Data Display',
    htmlStructure: '<div class="avatar"><img src="..." alt="User name"></div>',
    cssClasses: {
      base: 'avatar',
      variants: ['default', 'initials'],
      sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
      states: ['default']
    },
    tokens: ['--color-avatar-bg', '--radius-full', '--space-2'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'img',
      ariaAttributes: ['aria-label'],
      keyboardSupport: []
    },
    cssFile: 'components/avatar.css',
    storybook: 'stories/Avatar.stories.ts'
  },
  'Dividers': {
    name: 'Divider',
    category: 'Data Display',
    htmlStructure: '<hr class="divider">',
    cssClasses: {
      base: 'divider',
      variants: ['horizontal', 'vertical'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default']
    },
    tokens: ['--color-border', '--space-4'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'separator',
      ariaAttributes: [],
      keyboardSupport: []
    },
    cssFile: 'components/divider.css',
    storybook: 'stories/Divider.stories.ts'
  },
  'Timeline': {
    name: 'Timeline',
    category: 'Data Display',
    htmlStructure: '<div class="timeline"><div class="timeline-item">...</div></div>',
    cssClasses: {
      base: 'timeline',
      variants: ['default', 'alternate'],
      sizes: ['md'],
      states: ['default']
    },
    tokens: ['--color-timeline-line', '--color-timeline-dot', '--space-4'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'list',
      ariaAttributes: ['aria-label'],
      keyboardSupport: []
    },
    cssFile: 'components/timeline.css',
    storybook: 'stories/Timeline.stories.ts'
  },
  'Stats Cards': {
    name: 'StatsCard',
    category: 'Data Display',
    htmlStructure: '<div class="stats-card"><div class="stats-value">...</div></div>',
    cssClasses: {
      base: 'stats-card',
      variants: ['default', 'bordered'],
      sizes: ['md'],
      states: ['default']
    },
    tokens: ['--color-bg-primary', '--color-border', '--space-4', '--radius-lg'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'article',
      ariaAttributes: ['aria-label'],
      keyboardSupport: []
    },
    cssFile: 'components/stats-card.css',
    storybook: 'stories/StatsCard.stories.ts'
  },
  'Code Block': {
    name: 'CodeBlock',
    category: 'Data Display',
    htmlStructure: '<pre class="code-block"><code>...</code></pre>',
    cssClasses: {
      base: 'code-block',
      variants: ['default'],
      sizes: ['md'],
      states: ['default']
    },
    tokens: ['--color-code-bg', '--color-code-text', '--space-3', '--radius-md', '--font-mono'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'code',
      ariaAttributes: ['aria-label'],
      keyboardSupport: []
    },
    cssFile: 'components/code-block.css',
    storybook: 'stories/CodeBlock.stories.ts'
  },

  // Navigation
  'Breadcrumbs': {
    name: 'Breadcrumb',
    category: 'Navigation',
    htmlStructure: '<nav class="breadcrumb" aria-label="Breadcrumb"><ol>...</ol></nav>',
    cssClasses: {
      base: 'breadcrumb',
      variants: ['default'],
      sizes: ['sm', 'md'],
      states: ['default']
    },
    tokens: ['--color-text-secondary', '--space-2'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'navigation',
      ariaAttributes: ['aria-label', 'aria-current'],
      keyboardSupport: ['Tab']
    },
    cssFile: 'components/breadcrumb.css',
    storybook: 'stories/Breadcrumbs.stories.ts'
  },
  'Pagination': {
    name: 'Pagination',
    category: 'Navigation',
    htmlStructure: '<nav class="pagination" aria-label="Pagination"><ul>...</ul></nav>',
    cssClasses: {
      base: 'pagination',
      variants: ['default'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'active', 'disabled']
    },
    tokens: ['--color-pagination-bg', '--color-pagination-active', '--space-2', '--radius-md'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'navigation',
      ariaAttributes: ['aria-label', 'aria-current'],
      keyboardSupport: ['Tab', 'Arrow keys']
    },
    cssFile: 'components/pagination.css',
    storybook: 'stories/Pagination.stories.ts'
  },
  'Tabs': {
    name: 'Tabs',
    category: 'Navigation',
    htmlStructure: '<div class="tabs" role="tablist">...</div>',
    cssClasses: {
      base: 'tabs',
      variants: ['default', 'pills', 'underline'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'active']
    },
    tokens: ['--color-tabs-border', '--color-tabs-active', '--space-3', '--radius-md'],
    javascript: { required: true, methods: ['Aural.switchTab(tabId, panelId)'] },
    accessibility: {
      role: 'tablist',
      ariaAttributes: ['aria-selected', 'aria-controls'],
      keyboardSupport: ['Arrow keys', 'Home', 'End']
    },
    cssFile: 'components/tabs.css',
    storybook: 'stories/Tabs.stories.ts'
  },
  'Accordions': {
    name: 'Accordion',
    category: 'Navigation',
    htmlStructure: '<div class="accordion"><button class="accordion-trigger">...</button><div class="accordion-content">...</div></div>',
    cssClasses: {
      base: 'accordion',
      variants: ['default', 'bordered'],
      sizes: ['md'],
      states: ['collapsed', 'expanded']
    },
    tokens: ['--color-border', '--color-bg-secondary', '--space-3', '--radius-md'],
    javascript: { required: true, methods: ['Aural.toggleAccordion(id)'] },
    accessibility: {
      role: 'button',
      ariaAttributes: ['aria-expanded', 'aria-controls'],
      keyboardSupport: ['Enter', 'Space']
    },
    cssFile: 'components/accordion.css',
    storybook: 'stories/Accordion.stories.ts'
  },
  'Navbar': {
    name: 'Navbar',
    category: 'Navigation',
    htmlStructure: '<nav class="navbar"><div class="navbar-brand">...</div><div class="navbar-menu">...</div></nav>',
    cssClasses: {
      base: 'navbar',
      variants: ['default', 'transparent'],
      sizes: ['md'],
      states: ['default', 'sticky']
    },
    tokens: ['--color-navbar-bg', '--color-navbar-text', '--space-4', '--shadow-sm'],
    javascript: { required: true, methods: ['Aural.toggleNavbar()'] },
    accessibility: {
      role: 'navigation',
      ariaAttributes: ['aria-label'],
      keyboardSupport: ['Tab', 'Escape']
    },
    cssFile: 'components/navbar.css',
    storybook: 'stories/Navbar.stories.ts'
  },
  'Stepper': {
    name: 'Stepper',
    category: 'Navigation',
    htmlStructure: '<div class="stepper"><div class="step">...</div></div>',
    cssClasses: {
      base: 'stepper',
      variants: ['horizontal', 'vertical'],
      sizes: ['md'],
      states: ['pending', 'active', 'completed']
    },
    tokens: ['--color-stepper-active', '--color-stepper-completed', '--space-3'],
    javascript: { required: true, methods: ['Aural.setStep(stepIndex)'] },
    accessibility: {
      role: 'list',
      ariaAttributes: ['aria-current'],
      keyboardSupport: []
    },
    cssFile: 'components/stepper.css',
    storybook: 'stories/Stepper.stories.ts'
  },
  'Dropdowns': {
    name: 'Dropdown',
    category: 'Navigation',
    htmlStructure: '<div class="dropdown"><button class="dropdown-trigger">...</button><div class="dropdown-menu">...</div></div>',
    cssClasses: {
      base: 'dropdown',
      variants: ['default'],
      sizes: ['md'],
      states: ['closed', 'open']
    },
    tokens: ['--color-dropdown-bg', '--color-dropdown-border', '--space-2', '--radius-md', '--shadow-lg'],
    javascript: { required: true, methods: ['Aural.toggleDropdown(id)'] },
    accessibility: {
      role: 'menu',
      ariaAttributes: ['aria-expanded', 'aria-haspopup'],
      keyboardSupport: ['Arrow keys', 'Enter', 'Escape']
    },
    cssFile: 'components/dropdown.css',
    storybook: 'stories/Dropdown.stories.ts'
  },
  'Context Menu': {
    name: 'ContextMenu',
    category: 'Navigation',
    htmlStructure: '<div class="context-menu" role="menu">...</div>',
    cssClasses: {
      base: 'context-menu',
      variants: ['default'],
      sizes: ['md'],
      states: ['hidden', 'visible']
    },
    tokens: ['--color-menu-bg', '--color-menu-border', '--space-2', '--radius-md', '--shadow-lg'],
    javascript: { required: true, methods: ['Aural.initContextMenu()'] },
    accessibility: {
      role: 'menu',
      ariaAttributes: ['aria-label'],
      keyboardSupport: ['Arrow keys', 'Enter', 'Escape']
    },
    cssFile: 'components/context-menu.css',
    storybook: 'stories/ContextMenu.stories.ts'
  },
  'Bottom Navigation': {
    name: 'BottomNavigation',
    category: 'Navigation',
    htmlStructure: '<nav class="bottom-nav"><a class="bottom-nav-item">...</a></nav>',
    cssClasses: {
      base: 'bottom-nav',
      variants: ['default'],
      sizes: ['md'],
      states: ['default', 'active']
    },
    tokens: ['--color-nav-bg', '--color-nav-active', '--space-3', '--shadow-up'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'navigation',
      ariaAttributes: ['aria-label', 'aria-current'],
      keyboardSupport: ['Tab']
    },
    cssFile: 'components/bottom-nav.css',
    storybook: 'stories/BottomNavigation.stories.ts'
  },

  // Overlays & Feedback
  'Modals': {
    name: 'Modal',
    category: 'Overlays & Feedback',
    htmlStructure: '<div class="modal-overlay"><div class="modal" role="dialog">...</div></div>',
    cssClasses: {
      base: 'modal',
      variants: ['default', 'fullscreen'],
      sizes: ['sm', 'md', 'lg', 'xl'],
      states: ['hidden', 'visible']
    },
    tokens: ['--color-modal-bg', '--color-overlay-bg', '--space-4', '--radius-lg', '--shadow-2xl'],
    javascript: { required: true, methods: ['Aural.openModal(id)', 'Aural.closeModal(id)'] },
    accessibility: {
      role: 'dialog',
      ariaAttributes: ['aria-modal', 'aria-labelledby', 'aria-describedby'],
      keyboardSupport: ['Escape', 'Tab']
    },
    cssFile: 'components/modal.css',
    storybook: 'stories/Modal.stories.ts'
  },
  'Dialog': {
    name: 'Dialog',
    category: 'Overlays & Feedback',
    htmlStructure: '<dialog class="dialog">...</dialog>',
    cssClasses: {
      base: 'dialog',
      variants: ['default', 'alert'],
      sizes: ['sm', 'md', 'lg'],
      states: ['closed', 'open']
    },
    tokens: ['--color-dialog-bg', '--color-overlay-bg', '--space-4', '--radius-lg', '--shadow-2xl'],
    javascript: { required: true, methods: ['Aural.showDialog(id)', 'Aural.closeDialog(id)'] },
    accessibility: {
      role: 'dialog',
      ariaAttributes: ['aria-modal', 'aria-labelledby'],
      keyboardSupport: ['Escape']
    },
    cssFile: 'components/dialog.css',
    storybook: 'stories/Modal.stories.ts'
  },
  'Drawer': {
    name: 'Drawer',
    category: 'Overlays & Feedback',
    htmlStructure: '<div class="drawer drawer-{position}">...</div>',
    cssClasses: {
      base: 'drawer',
      variants: ['left', 'right', 'top', 'bottom'],
      sizes: ['sm', 'md', 'lg'],
      states: ['closed', 'open']
    },
    tokens: ['--color-drawer-bg', '--color-overlay-bg', '--space-4', '--shadow-2xl'],
    javascript: { required: true, methods: ['Aural.openDrawer(id)', 'Aural.closeDrawer(id)'] },
    accessibility: {
      role: 'dialog',
      ariaAttributes: ['aria-modal', 'aria-labelledby'],
      keyboardSupport: ['Escape']
    },
    cssFile: 'components/drawer.css',
    storybook: 'stories/Drawer.stories.ts'
  },
  'Alert Banner': {
    name: 'AlertBanner',
    category: 'Overlays & Feedback',
    htmlStructure: '<div class="alert alert-{variant}" role="alert">...</div>',
    cssClasses: {
      base: 'alert',
      variants: ['info', 'success', 'warning', 'danger'],
      sizes: ['md'],
      states: ['default', 'dismissible']
    },
    tokens: ['--color-alert-bg', '--color-alert-text', '--space-3', '--radius-md'],
    javascript: { required: false, methods: ['Aural.dismissAlert(id)'] },
    accessibility: {
      role: 'alert',
      ariaAttributes: ['aria-live', 'aria-atomic'],
      keyboardSupport: ['Escape']
    },
    cssFile: 'components/alert-banner.css',
    storybook: 'stories/Alert.stories.ts'
  },
  'Toast': {
    name: 'Toast',
    category: 'Overlays & Feedback',
    htmlStructure: '<div class="toast toast-{variant}">...</div>',
    cssClasses: {
      base: 'toast',
      variants: ['default', 'success', 'warning', 'danger', 'info'],
      sizes: ['md'],
      states: ['hidden', 'visible', 'exiting']
    },
    tokens: ['--color-toast-bg', '--color-toast-text', '--space-3', '--radius-md', '--shadow-lg'],
    javascript: { required: true, methods: ['Aural.showToast(message, variant, title, duration)'] },
    accessibility: {
      role: 'status',
      ariaAttributes: ['aria-live', 'aria-atomic'],
      keyboardSupport: []
    },
    cssFile: 'components/toast.css',
    storybook: 'stories/Toast.stories.ts'
  },
  'Snackbar': {
    name: 'Snackbar',
    category: 'Overlays & Feedback',
    htmlStructure: '<div class="snackbar">...</div>',
    cssClasses: {
      base: 'snackbar',
      variants: ['default'],
      sizes: ['md'],
      states: ['hidden', 'visible']
    },
    tokens: ['--color-snackbar-bg', '--color-snackbar-text', '--space-3', '--radius-md', '--shadow-lg'],
    javascript: { required: true, methods: ['Aural.showSnackbar(message, duration)'] },
    accessibility: {
      role: 'status',
      ariaAttributes: ['aria-live', 'aria-atomic'],
      keyboardSupport: []
    },
    cssFile: 'components/snackbar.css',
    storybook: 'stories/Snackbar.stories.ts'
  },
  'Popovers': {
    name: 'Popover',
    category: 'Overlays & Feedback',
    htmlStructure: '<div class="popover popover-{position}">...</div>',
    cssClasses: {
      base: 'popover',
      variants: ['top', 'right', 'bottom', 'left'],
      sizes: ['sm', 'md', 'lg'],
      states: ['hidden', 'visible']
    },
    tokens: ['--color-popover-bg', '--color-popover-border', '--space-3', '--radius-md', '--shadow-lg'],
    javascript: { required: true, methods: ['Aural.togglePopover(id)'] },
    accessibility: {
      role: 'dialog',
      ariaAttributes: ['aria-labelledby', 'aria-describedby'],
      keyboardSupport: ['Escape']
    },
    cssFile: 'components/popover.css',
    storybook: 'stories/Popover.stories.ts'
  },

  // Layout & Media
  'Carousel': {
    name: 'Carousel',
    category: 'Layout & Media',
    htmlStructure: '<div class="carousel" data-carousel>...</div>',
    cssClasses: {
      base: 'carousel',
      variants: ['default'],
      sizes: ['md'],
      states: ['default', 'transitioning']
    },
    tokens: ['--color-carousel-controls', '--space-4', '--radius-md'],
    javascript: { required: true, methods: ['Aural.initCarousel()', 'Aural.carouselNext()', 'Aural.carouselPrev()'] },
    accessibility: {
      role: 'region',
      ariaAttributes: ['aria-label', 'aria-live'],
      keyboardSupport: ['Arrow keys', 'Tab']
    },
    cssFile: 'components/carousel.css',
    storybook: 'stories/Carousel.stories.ts'
  },
  'Image Gallery': {
    name: 'ImageGallery',
    category: 'Layout & Media',
    htmlStructure: '<div class="image-gallery">...</div>',
    cssClasses: {
      base: 'image-gallery',
      variants: ['grid', 'masonry'],
      sizes: ['md'],
      states: ['default']
    },
    tokens: ['--space-4', '--radius-md'],
    javascript: { required: true, methods: ['Aural.initImageGallery()'] },
    accessibility: {
      role: 'list',
      ariaAttributes: ['aria-label'],
      keyboardSupport: ['Tab', 'Enter']
    },
    cssFile: 'components/image-gallery.css',
    storybook: 'stories/ImageGallery.stories.ts'
  },
  'Empty State': {
    name: 'EmptyState',
    category: 'Layout & Media',
    htmlStructure: '<div class="empty-state">...</div>',
    cssClasses: {
      base: 'empty-state',
      variants: ['default'],
      sizes: ['md'],
      states: ['default']
    },
    tokens: ['--color-text-secondary', '--space-6'],
    javascript: { required: false, methods: [] },
    accessibility: {
      role: 'status',
      ariaAttributes: ['aria-label'],
      keyboardSupport: []
    },
    cssFile: 'components/empty-state.css',
    storybook: 'stories/EmptyState.stories.ts'
  },

  // Advanced
  'Command Palette': {
    name: 'CommandPalette',
    category: 'Advanced',
    htmlStructure: '<div class="command-palette" data-command-palette>...</div>',
    cssClasses: {
      base: 'command-palette',
      variants: ['default'],
      sizes: ['md'],
      states: ['hidden', 'visible']
    },
    tokens: ['--color-palette-bg', '--color-palette-border', '--space-3', '--radius-lg', '--shadow-2xl'],
    javascript: { required: true, methods: ['Aural.toggleCommandPalette()', 'Aural.initCommandPalette()'] },
    accessibility: {
      role: 'dialog',
      ariaAttributes: ['aria-label', 'aria-modal'],
      keyboardSupport: ['Ctrl+K', 'Escape', 'Arrow keys', 'Enter']
    },
    cssFile: 'components/command-palette.css',
    storybook: 'stories/CommandPalette.stories.ts'
  },
  'Notification Center': {
    name: 'NotificationCenter',
    category: 'Advanced',
    htmlStructure: '<div class="notification-center">...</div>',
    cssClasses: {
      base: 'notification-center',
      variants: ['default'],
      sizes: ['md'],
      states: ['closed', 'open']
    },
    tokens: ['--color-notification-bg', '--color-notification-border', '--space-4', '--radius-md', '--shadow-lg'],
    javascript: { required: true, methods: ['Aural.toggleNotificationCenter()', 'Aural.addNotification()'] },
    accessibility: {
      role: 'region',
      ariaAttributes: ['aria-label', 'aria-live'],
      keyboardSupport: ['Escape', 'Tab']
    },
    cssFile: 'components/notification-center.css',
    storybook: 'stories/NotificationCenter.stories.ts'
  },
  'Tree View': {
    name: 'TreeView',
    category: 'Advanced',
    htmlStructure: '<div class="tree-view" role="tree">...</div>',
    cssClasses: {
      base: 'tree-view',
      variants: ['default'],
      sizes: ['md'],
      states: ['collapsed', 'expanded']
    },
    tokens: ['--color-tree-item-bg', '--color-tree-item-hover', '--space-3'],
    javascript: { required: true, methods: ['Aural.initTreeView()', 'Aural.toggleTreeNode()'] },
    accessibility: {
      role: 'tree',
      ariaAttributes: ['aria-expanded', 'aria-selected'],
      keyboardSupport: ['Arrow keys', 'Enter', 'Space']
    },
    cssFile: 'components/tree-view.css',
    storybook: 'stories/TreeView.stories.ts'
  }
};

/**
 * Generate component registry
 */
function generateRegistry() {
  console.log('🚀 Generating Component Registry...\n');

  // Load navigation data
  const navigationData = JSON.parse(fs.readFileSync(NAVIGATION_FILE, 'utf8'));
  const componentsSection = navigationData.sections.find(s => s.id === 'components');

  const registry = {
    version: navigationData.meta.version || '2.1',
    generatedAt: new Date().toISOString(),
    totalComponents: 0,
    components: []
  };

  // Process each component
  if (componentsSection && componentsSection.subsections) {
    componentsSection.subsections.forEach(subsection => {
      subsection.items.forEach(item => {
        const metadata = COMPONENT_METADATA[item.name];

        if (metadata) {
          const component = {
            name: metadata.name,
            displayName: item.name,
            category: metadata.category,
            description: `${item.name} component`,
            htmlStructure: metadata.htmlStructure,
            cssClasses: metadata.cssClasses,
            tokens: metadata.tokens,
            javascript: metadata.javascript,
            accessibility: metadata.accessibility,
            examples: [],
            storybook: metadata.storybook,
            cssFile: metadata.cssFile,
            figmaNodeId: null
          };

          registry.components.push(component);
          registry.totalComponents++;
          console.log(`✅ Added: ${item.name} (${metadata.category})`);
        } else {
          console.log(`⚠️  Missing metadata: ${item.name}`);
        }
      });
    });
  }

  // Write registry to file
  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(registry, null, 2),
    'utf8'
  );

  console.log(`\n✨ Registry generated successfully!`);
  console.log(`📊 Total components: ${registry.totalComponents}`);
  console.log(`📁 Output: ${OUTPUT_FILE}`);

  // Print summary
  const categoryCounts = {};
  registry.components.forEach(c => {
    categoryCounts[c.category] = (categoryCounts[c.category] || 0) + 1;
  });

  console.log('\n📈 Components by category:');
  Object.entries(categoryCounts).forEach(([category, count]) => {
    console.log(`   ${category}: ${count}`);
  });
}

// Run generator
try {
  generateRegistry();
} catch (error) {
  console.error('❌ Error generating registry:', error);
  process.exit(1);
}
