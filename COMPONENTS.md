# Aural UI - Component Reference

Complete reference for all components in the Aural UI design system.

---

## Table of Contents

- [Form Controls](#form-controls)
  - [Checkbox](#checkbox)
  - [Radio](#radio)
  - [Toggle](#toggle)
  - [Select](#select)
  - [Slider](#slider)
  - [Chips/Tags](#chipstags)
- [Navigation](#navigation)
  - [Tabs](#tabs)
  - [Breadcrumb](#breadcrumb)
  - [Pagination](#pagination)
  - [Command Palette](#command-palette)
- [Data Display](#data-display)
  - [Table](#table)
  - [Avatar](#avatar)
  - [Progress](#progress)
  - [Divider](#divider)
  - [Code Block](#code-block)
- [Interactive](#interactive)
  - [Tooltip](#tooltip)
  - [Dropdown](#dropdown)
  - [Accordion](#accordion)
  - [Popover](#popover)
  - [Dialog](#dialog)
  - [File Upload](#file-upload)
- [Utilities](#utilities)
  - [Shadows](#shadows)
  - [Glows](#glows)

---

## Form Controls

### Checkbox

Custom styled checkboxes with indeterminate state support.

**Basic Usage:**

```html
<label class="checkbox">
  <input type="checkbox">
  <span>Accept terms and conditions</span>
</label>
```

**Sizes:**

```html
<label class="checkbox checkbox-sm">
  <input type="checkbox">
  <span>Small checkbox</span>
</label>

<label class="checkbox checkbox-lg">
  <input type="checkbox">
  <span>Large checkbox</span>
</label>
```

**With Description:**

```html
<label class="checkbox checkbox-with-description">
  <input type="checkbox">
  <span>
    Enable notifications
    <span class="checkbox-description">You'll receive email notifications</span>
  </span>
</label>
```

**Indeterminate State (JavaScript):**

```javascript
Aural.setIndeterminate('my-checkbox', true);
```

**States:**
- Default, Checked, Indeterminate, Disabled

---

### Radio

Custom styled radio buttons for single selection.

**Basic Usage:**

```html
<div class="radio-group">
  <label class="radio">
    <input type="radio" name="option">
    <span>Option 1</span>
  </label>
  <label class="radio">
    <input type="radio" name="option">
    <span>Option 2</span>
  </label>
</div>
```

**Button Style:**

```html
<div class="radio-group radio-group-buttons">
  <label class="radio radio-button">
    <input type="radio" name="view">
    <span>Grid</span>
  </label>
  <label class="radio radio-button">
    <input type="radio" name="view">
    <span>List</span>
  </label>
</div>
```

**Attached Buttons:**

```html
<div class="radio-group radio-group-attached">
  <label class="radio radio-button">
    <input type="radio" name="align">
    <span>Left</span>
  </label>
  <label class="radio radio-button">
    <input type="radio" name="align">
    <span>Center</span>
  </label>
  <label class="radio radio-button">
    <input type="radio" name="align">
    <span>Right</span>
  </label>
</div>
```

---

### Toggle

Animated on/off switch controls.

**Basic Usage:**

```html
<label class="toggle">
  <input type="checkbox" role="switch">
  <span>Enable dark mode</span>
</label>
```

**Sizes:**

```html
<label class="toggle toggle-sm">
  <input type="checkbox" role="switch">
  <span>Small toggle</span>
</label>

<label class="toggle toggle-lg">
  <input type="checkbox" role="switch">
  <span>Large toggle</span>
</label>
```

**Color Variants:**

```html
<label class="toggle toggle-success">
  <input type="checkbox" role="switch" checked>
  <span>Active</span>
</label>

<label class="toggle toggle-error">
  <input type="checkbox" role="switch" checked>
  <span>Danger zone</span>
</label>
```

**Label Position:**

```html
<label class="toggle toggle-label-left">
  <input type="checkbox" role="switch">
  <span>Label on left</span>
</label>
```

---

### Select

Dropdown selection with native and custom variants.

**Native Select:**

```html
<div class="select">
  <select>
    <option>Choose an option</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>
```

**Custom Select (with JavaScript):**

```html
<div class="select-custom" id="my-select">
  <button class="select-trigger" aria-haspopup="listbox" aria-expanded="false">
    <span>Select option...</span>
    <svg class="select-icon" viewBox="0 0 16 16">...</svg>
  </button>
  <div class="select-dropdown" role="listbox" hidden>
    <div class="select-option" role="option" data-value="1">Option 1</div>
    <div class="select-option" role="option" data-value="2">Option 2</div>
    <div class="select-option" role="option" data-value="3">Option 3</div>
  </div>
</div>
```

**JavaScript API:**

```javascript
// Open select
Aural.openSelect('my-select');

// Select an option
Aural.selectOption('my-select', '2');

// Close select
Aural.closeSelect('my-select');
```

**Sizes:**

```html
<div class="select select-sm">...</div>
<div class="select select-lg">...</div>
```

---

## Navigation

### Tabs

Tabbed navigation for organizing content.

**Basic Usage:**

```html
<div class="tabs" role="tablist">
  <button class="tab tab-active" role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">
    Tab 1
  </button>
  <button class="tab" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2">
    Tab 2
  </button>
</div>

<div id="panel-1" class="tab-panel" role="tabpanel" tabindex="0">
  Content 1
</div>
<div id="panel-2" class="tab-panel" role="tabpanel" tabindex="0" hidden>
  Content 2
</div>
```

**Variants:**

```html
<!-- Pills -->
<div class="tabs tabs-pills" role="tablist">...</div>

<!-- Boxed -->
<div class="tabs tabs-boxed" role="tablist">...</div>

<!-- Vertical -->
<div class="tabs tabs-vertical" role="tablist">...</div>
```

**JavaScript API:**

```javascript
// Switch to specific tab
Aural.switchTab('tab-2', 'panel-2');
```

**With Badges:**

```html
<button class="tab" role="tab">
  Messages
  <span class="tab-badge">3</span>
</button>
```

---

### Breadcrumb

Navigation hierarchy showing user's location.

**Basic Usage:**

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li aria-current="page">Widget</li>
  </ol>
</nav>
```

**Separator Variants:**

```html
<!-- Chevron -->
<nav class="breadcrumb breadcrumb-chevron">...</nav>

<!-- Dash -->
<nav class="breadcrumb breadcrumb-dash">...</nav>

<!-- Dot -->
<nav class="breadcrumb breadcrumb-dot">...</nav>

<!-- Arrow -->
<nav class="breadcrumb breadcrumb-arrow">...</nav>
```

**Sizes:**

```html
<nav class="breadcrumb breadcrumb-sm">...</nav>
<nav class="breadcrumb breadcrumb-lg">...</nav>
```

---

### Pagination

Page navigation for multi-page content.

**Basic Usage:**

```html
<nav class="pagination" aria-label="Pagination">
  <a href="#" class="pagination-prev">Previous</a>
  <a href="#" class="pagination-item">1</a>
  <a href="#" class="pagination-item pagination-active" aria-current="page">2</a>
  <a href="#" class="pagination-item">3</a>
  <span class="pagination-ellipsis">...</span>
  <a href="#" class="pagination-item">10</a>
  <a href="#" class="pagination-next">Next</a>
</nav>
```

**Variants:**

```html
<!-- Simple (no borders) -->
<nav class="pagination pagination-simple">...</nav>

<!-- Rounded -->
<nav class="pagination pagination-rounded">...</nav>

<!-- Compact (attached) -->
<nav class="pagination pagination-compact">...</nav>
```

**Sizes:**

```html
<nav class="pagination pagination-sm">...</nav>
<nav class="pagination pagination-lg">...</nav>
```

**With Info:**

```html
<div class="pagination-with-info">
  <nav class="pagination">...</nav>
  <p class="pagination-info">Showing 1-10 of 100 items</p>
</div>
```

---

## Data Display

### Table

Structured data display with various styles.

**Basic Usage:**

```html
<div class="table-wrapper">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Variants:**

```html
<!-- Striped rows -->
<table class="table table-striped">...</table>

<!-- Bordered -->
<table class="table table-bordered">...</table>

<!-- Hoverable -->
<table class="table table-hover">...</table>
```

**Sizes:**

```html
<table class="table table-sm">...</table>
<table class="table table-lg">...</table>
```

**Sortable Columns:**

```html
<th class="sortable">Name</th>
<th class="sortable sort-asc">Email</th>
<th class="sortable sort-desc">Date</th>
```

**Sticky Header:**

```html
<table class="table table-sticky">...</table>
```

---

### Avatar

User profile images with initials fallback and status indicators.

**Basic Usage:**

```html
<!-- With image -->
<div class="avatar">
  <img src="user.jpg" alt="User Name">
</div>

<!-- With initials -->
<div class="avatar">
  <span>JD</span>
</div>

<!-- With icon -->
<div class="avatar">
  <svg>...</svg>
</div>
```

**Sizes:**

```html
<div class="avatar avatar-sm">...</div>
<div class="avatar avatar-lg">...</div>
<div class="avatar avatar-xl">...</div>
```

**Shapes:**

```html
<div class="avatar avatar-square">...</div>
<div class="avatar avatar-rounded">...</div>
```

**Status Indicators:**

```html
<div class="avatar avatar-status-online">...</div>
<div class="avatar avatar-status-offline">...</div>
<div class="avatar avatar-status-busy">...</div>
<div class="avatar avatar-status-away">...</div>
```

**Avatar Group:**

```html
<div class="avatar-group">
  <div class="avatar"><img src="user1.jpg" alt="User 1"></div>
  <div class="avatar"><img src="user2.jpg" alt="User 2"></div>
  <div class="avatar"><img src="user3.jpg" alt="User 3"></div>
</div>
```

---

### Progress

Progress indicators for loading states and task completion.

**Basic Usage:**

```html
<div class="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 60%"></div>
</div>
```

**Color Variants:**

```html
<div class="progress progress-success">...</div>
<div class="progress progress-warning">...</div>
<div class="progress progress-error">...</div>
<div class="progress progress-info">...</div>
```

**Sizes:**

```html
<div class="progress progress-sm">...</div>
<div class="progress progress-lg">...</div>
<div class="progress progress-xl">...</div>
```

**Indeterminate:**

```html
<div class="progress progress-indeterminate">
  <div class="progress-bar"></div>
</div>
```

**With Label:**

```html
<div class="progress-with-label">
  <div class="progress">
    <div class="progress-bar" style="width: 75%"></div>
  </div>
  <span class="progress-label">75%</span>
</div>
```

**JavaScript API:**

```javascript
Aural.setProgress('my-progress', 75);
```

---

### Divider

Simple separator for visually dividing content.

**Basic Usage:**

```html
<hr class="divider">
```

**With Text:**

```html
<div class="divider divider-with-text">
  <span>OR</span>
</div>
```

**Vertical:**

```html
<div style="display: flex; align-items: center;">
  <span>Item 1</span>
  <hr class="divider divider-vertical">
  <span>Item 2</span>
</div>
```

**Spacing:**

```html
<hr class="divider divider-sm">
<hr class="divider divider-lg">
<hr class="divider divider-xl">
```

**Styles:**

```html
<hr class="divider divider-dashed">
<hr class="divider divider-dotted">
```

---

## Interactive

### Tooltip

Contextual information on hover/focus.

**Data Attribute Method:**

```html
<button class="btn" data-tooltip="This is a tooltip">
  Hover me
</button>

<button class="btn" data-tooltip="Bottom tooltip" data-tooltip-position="bottom">
  Bottom
</button>
```

**Custom Tooltip:**

```html
<div class="tooltip-wrapper">
  <button id="trigger" data-tooltip-trigger>Hover me</button>
  <div class="tooltip tooltip-top" role="tooltip">
    Tooltip content
  </div>
</div>
```

**Positions:**

```html
<div class="tooltip tooltip-top">...</div>
<div class="tooltip tooltip-bottom">...</div>
<div class="tooltip tooltip-left">...</div>
<div class="tooltip tooltip-right">...</div>
```

**With Arrow:**

```html
<div class="tooltip tooltip-top tooltip-with-arrow">...</div>
```

**Sizes:**

```html
<div class="tooltip tooltip-sm">...</div>
<div class="tooltip tooltip-lg">...</div>
```

**JavaScript API:**

```javascript
Aural.showTooltip('trigger-id');
Aural.hideTooltip('trigger-id');
```

---

### Dropdown

Action menus and dropdown panels.

**Basic Usage:**

```html
<div class="dropdown" id="my-dropdown">
  <button class="dropdown-trigger btn" aria-haspopup="true" aria-expanded="false">
    Menu
  </button>
  <div class="dropdown-menu" role="menu" hidden>
    <a href="#" class="dropdown-item" role="menuitem">Action</a>
    <a href="#" class="dropdown-item" role="menuitem">Another action</a>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item dropdown-item-danger" role="menuitem">Delete</a>
  </div>
</div>
```

**With Header:**

```html
<div class="dropdown-menu">
  <div class="dropdown-header">Actions</div>
  <a href="#" class="dropdown-item">Edit</a>
  <a href="#" class="dropdown-item">Duplicate</a>
</div>
```

**Positions:**

```html
<div class="dropdown dropdown-right">...</div>
<div class="dropdown dropdown-up">...</div>
```

**JavaScript API:**

```javascript
Aural.openDropdown('my-dropdown');
Aural.closeDropdown('my-dropdown');
Aural.toggleDropdown('my-dropdown');
```

---

### Accordion

Collapsible sections for organizing content.

**Basic Usage:**

```html
<div class="accordion">
  <div class="accordion-item" id="item-1">
    <button class="accordion-header" aria-expanded="false" aria-controls="panel-1">
      <span>Section 1</span>
      <svg class="accordion-icon">...</svg>
    </button>
    <div id="panel-1" class="accordion-panel" role="region" hidden>
      <div class="accordion-content">
        Content for section 1
      </div>
    </div>
  </div>
</div>
```

**Variants:**

```html
<!-- Flush (no borders) -->
<div class="accordion accordion-flush">...</div>

<!-- Separated -->
<div class="accordion accordion-separated">...</div>

<!-- Filled -->
<div class="accordion accordion-filled">...</div>

<!-- Always open (multiple sections) -->
<div class="accordion accordion-always-open">...</div>
```

**JavaScript API:**

```javascript
Aural.openAccordion('item-1');
Aural.closeAccordion('item-1');
Aural.toggleAccordion('item-1');
```

---

### Popover

Rich content overlays with positioning.

**Basic Usage:**

```html
<div class="popover-wrapper">
  <button id="trigger" class="btn" data-popover-trigger>Show Popover</button>
  <div class="popover popover-top" role="dialog" hidden>
    <div class="popover-header">
      <h3>Popover Title</h3>
      <button class="popover-close" aria-label="Close">×</button>
    </div>
    <div class="popover-body">
      Popover content goes here
    </div>
    <div class="popover-footer">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

**Positions:**

```html
<div class="popover popover-top">...</div>
<div class="popover popover-bottom">...</div>
<div class="popover popover-left">...</div>
<div class="popover popover-right">...</div>
```

**Sizes:**

```html
<div class="popover popover-sm">...</div>
<div class="popover popover-lg">...</div>
<div class="popover popover-xl">...</div>
```

**With Arrow:**

```html
<div class="popover popover-top popover-with-arrow">...</div>
```

**JavaScript API:**

```javascript
Aural.showPopover('trigger-id');
Aural.hidePopover('trigger-id');
Aural.togglePopover('trigger-id');
```

---

### Slider

Custom-styled range inputs with real-time value display and glow effects.

**Basic Usage:**

```html
<div class="aural-slider" id="my-slider">
  <div class="aural-slider__label-row">
    <label class="aural-slider__label">Volume</label>
    <span class="aural-slider__value">50</span>
  </div>
  <div class="aural-slider__track">
    <input type="range" class="aural-slider__input" min="0" max="100" value="50">
  </div>
</div>
```

**Size Variants:**

```html
<div class="aural-slider aural-slider--sm">...</div>
<div class="aural-slider aural-slider--lg">...</div>
```

**Color Variants:**

```html
<div class="aural-slider aural-slider--success">...</div>
<div class="aural-slider aural-slider--warning">...</div>
<div class="aural-slider aural-slider--error">...</div>
```

**With Min/Max Labels:**

```html
<div class="aural-slider">
  ...
  <div class="aural-slider__minmax">
    <span class="aural-slider__min">0</span>
    <span class="aural-slider__max">100</span>
  </div>
</div>
```

**Stepped Slider:**

```html
<div class="aural-slider aural-slider--stepped">
  ...
  <div class="aural-slider__ticks">
    <div class="aural-slider__tick"></div>
    <div class="aural-slider__tick"></div>
    <div class="aural-slider__tick"></div>
  </div>
</div>
```

**JavaScript API:**

```javascript
// Initialize slider
Aural.initSlider('my-slider');

// Set value programmatically
Aural.setSliderValue('my-slider', 75);
```

**Features:**
- Real-time value display
- Glow effects on hover/focus
- ARIA attributes for screen readers
- Keyboard accessible (arrow keys)
- 44px minimum touch target

---

### Chips/Tags

Tag input component with add/remove functionality and multiple variants.

**Basic Usage:**

```html
<div class="aural-chips" id="my-chips">
  <div class="aural-chips__container">
    <div class="aural-chip">
      <span class="aural-chip__text">JavaScript</span>
      <button class="aural-chip__remove" aria-label="Remove JavaScript"></button>
    </div>
    <input type="text" class="aural-chips__input" placeholder="Add tag...">
  </div>
</div>
```

**Color Variants:**

```html
<div class="aural-chip aural-chip--primary">...</div>
<div class="aural-chip aural-chip--success">...</div>
<div class="aural-chip aural-chip--error">...</div>
<div class="aural-chip aural-chip--warning">...</div>
<div class="aural-chip aural-chip--info">...</div>
```

**Size Variants:**

```html
<div class="aural-chip aural-chip--sm">...</div>
<div class="aural-chip aural-chip--lg">...</div>
```

**With Avatar:**

```html
<div class="aural-chip aural-chip--with-avatar">
  <img class="aural-chip__avatar" src="user.jpg" alt="User">
  <span class="aural-chip__text">John Doe</span>
  <button class="aural-chip__remove"></button>
</div>
```

**Standalone Chips:**

```html
<div class="aural-chips-list">
  <div class="aural-chip aural-chip--standalone aural-chip--clickable">
    <span class="aural-chip__text">Clickable</span>
  </div>
</div>
```

**JavaScript API:**

```javascript
// Initialize chips with options
const chips = Aural.initChips('my-chips', {
  maxTags: 10,
  allowDuplicates: false,
  onAdd: (tag) => console.log('Added:', tag),
  onRemove: (tag) => console.log('Removed:', tag)
});

// Get all tags
const tags = chips.getTags(); // Returns array

// Add tag programmatically
chips.addTag('New Tag');

// Clear all tags
chips.clearTags();
```

**Features:**
- Add tags on Enter or comma key
- Remove on click or Backspace
- Screen reader announcements
- Duplicate prevention
- Max tags limit

---

## Navigation

### Command Palette

Keyboard-driven search interface with CMD/CTRL+K shortcut.

**Basic Usage:**

```html
<div class="aural-command-palette-backdrop" id="my-palette">
  <div class="aural-command-palette">
    <div class="aural-command-palette__search">
      <span class="aural-command-palette__search-icon"></span>
      <input type="text" class="aural-command-palette__input"
             placeholder="Search commands...">
    </div>
    <div class="aural-command-palette__results"></div>
    <div class="aural-command-palette__footer">
      <div class="aural-command-palette__hint">
        <div class="aural-command-palette__hint-keys">
          <span class="aural-command-palette__key">↑</span>
          <span class="aural-command-palette__key">↓</span>
        </div>
        to navigate
      </div>
    </div>
  </div>
</div>
```

**JavaScript API:**

```javascript
// Define commands
const commands = [
  {
    id: 'new-file',
    title: 'Create New File',
    description: 'Create a new file',
    icon: '📄',
    group: 'File',
    shortcut: 'Ctrl+N',
    action: () => console.log('New file')
  },
  {
    id: 'save',
    title: 'Save',
    description: 'Save current file',
    icon: '💾',
    group: 'File',
    shortcut: 'Ctrl+S',
    action: () => console.log('Save')
  }
];

// Initialize palette
Aural.initCommandPalette('my-palette', commands);

// Open/close programmatically
Aural.openCommandPalette('my-palette');
Aural.closeCommandPalette('my-palette');

// Render specific commands
Aural.renderCommandResults('my-palette', filteredCommands);
```

**Features:**
- CMD/CTRL+K global shortcut
- Search filtering
- Grouped results
- Keyboard navigation (arrows, Enter, ESC)
- Shortcuts display
- Empty state
- ARIA combobox pattern

---

## Data Display

### Code Block

Syntax-highlighted code blocks with copy to clipboard functionality.

**Basic Usage:**

```html
<div class="aural-code-block" id="my-code">
  <div class="aural-code-block__header">
    <span class="aural-code-block__language">JavaScript</span>
    <button class="aural-code-block__copy">
      <span class="aural-code-block__copy-icon"></span>
      Copy
    </button>
  </div>
  <div class="aural-code-block__content">
    <pre class="aural-code-block__pre"><code class="aural-code-block__code">function greet(name) {
  return `Hello, ${name}!`;
}</code></pre>
  </div>
</div>
```

**With Line Numbers:**

```html
<div class="aural-code-block aural-code-block--with-line-numbers">
  <div class="aural-code-block__content">
    <div class="aural-code-block__line-numbers">
      <span class="aural-code-block__line-number">1</span>
      <span class="aural-code-block__line-number">2</span>
    </div>
    <pre class="aural-code-block__pre">...</pre>
  </div>
</div>
```

**Highlighted Lines:**

```html
<code class="aural-code-block__code">
  <span class="aural-code-block__line">Normal line</span>
  <span class="aural-code-block__line aural-code-block__line--highlight">Highlighted</span>
  <span class="aural-code-block__line aural-code-block__line--success">Success</span>
  <span class="aural-code-block__line aural-code-block__line--error">Error</span>
</code>
```

**Terminal Variant:**

```html
<div class="aural-code-block aural-code-block--terminal">...</div>
```

**Size Variants:**

```html
<div class="aural-code-block aural-code-block--sm">...</div>
<div class="aural-code-block aural-code-block--lg">...</div>
```

**Inline Code:**

```html
Use the <code class="aural-code-inline">console.log()</code> function.
```

**JavaScript API:**

```javascript
// Initialize specific code block
Aural.initCodeBlock('my-code');

// Initialize all code blocks on page (auto-called on load)
Aural.initAllCodeBlocks();

// Apply syntax highlighting (basic)
Aural.highlightCodeBlock('my-code', 'javascript');
```

**Features:**
- Copy to clipboard with feedback
- Line numbers support
- Syntax highlighting tokens
- Highlighted lines (success/error)
- Terminal variant
- Custom scrollbar
- Screen reader accessible

---

## Interactive

### Dialog

Lightweight confirmation dialogs with multiple variants.

**Basic Usage:**

```html
<div class="aural-dialog-backdrop" id="my-dialog">
  <div class="aural-dialog aural-dialog--alert">
    <div class="aural-dialog__header">
      <div class="aural-dialog__icon"></div>
      <div class="aural-dialog__title-group">
        <h3 class="aural-dialog__title">Confirm Action</h3>
      </div>
    </div>
    <div class="aural-dialog__body">
      <p class="aural-dialog__message">Are you sure you want to continue?</p>
    </div>
    <div class="aural-dialog__footer">
      <button class="btn btn-secondary" onclick="Aural.closeDialog('my-dialog')">
        Cancel
      </button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

**Variants:**

```html
<!-- Alert/Info -->
<div class="aural-dialog aural-dialog--alert">...</div>

<!-- Success -->
<div class="aural-dialog aural-dialog--success">...</div>

<!-- Warning -->
<div class="aural-dialog aural-dialog--warning">...</div>

<!-- Destructive/Error -->
<div class="aural-dialog aural-dialog--destructive">...</div>
```

**Without Icon:**

```html
<div class="aural-dialog aural-dialog--no-icon">...</div>
```

**With Close Button:**

```html
<div class="aural-dialog">
  <button class="aural-dialog__close" onclick="Aural.closeDialog('my-dialog')">
  </button>
  ...
</div>
```

**JavaScript API:**

```javascript
// Open dialog
Aural.openDialog('my-dialog');

// Close dialog
Aural.closeDialog('my-dialog');

// Show dynamic confirmation dialog
Aural.showConfirm(
  'Delete Item?',
  'This action cannot be undone.',
  () => console.log('Confirmed'),
  () => console.log('Cancelled')
);
```

**Features:**
- Multiple visual variants
- ESC key to close
- Focus trap
- Body scroll lock
- ARIA dialog pattern
- Backdrop blur
- Smooth animations

---

### File Upload

Drag-and-drop file upload with validation and progress tracking.

**Basic Usage:**

```html
<div class="aural-file-upload" id="my-upload">
  <div class="aural-file-upload__dropzone">
    <div class="aural-file-upload__icon"></div>
    <div class="aural-file-upload__text">
      <div class="aural-file-upload__primary-text">
        <span class="aural-file-upload__browse">Click to browse</span>
        or drag and drop
      </div>
      <div class="aural-file-upload__secondary-text">
        PNG, JPG, GIF up to 10MB
      </div>
    </div>
    <input type="file" class="aural-file-upload__input" accept="image/*" multiple>
  </div>
  <div class="aural-file-upload__files"></div>
</div>
```

**Compact Variant:**

```html
<div class="aural-file-upload aural-file-upload--compact">...</div>
```

**File Item Structure:**

```html
<div class="aural-file-upload__file aural-file-upload__file--uploading">
  <div class="aural-file-upload__preview aural-file-upload__preview--image">
    <img src="preview.jpg" alt="File">
  </div>
  <div class="aural-file-upload__info">
    <div class="aural-file-upload__filename">document.pdf</div>
    <div class="aural-file-upload__filesize">2.4 MB</div>
    <div class="aural-file-upload__progress">
      <div class="aural-file-upload__progress-bar">
        <div class="aural-file-upload__progress-fill" style="width: 60%"></div>
      </div>
    </div>
  </div>
  <div class="aural-file-upload__actions">
    <button class="aural-file-upload__remove"></button>
  </div>
</div>
```

**File States:**

```html
<div class="aural-file-upload__file aural-file-upload__file--uploading">...</div>
<div class="aural-file-upload__file aural-file-upload__file--success">...</div>
<div class="aural-file-upload__file aural-file-upload__file--error">...</div>
```

**JavaScript API:**

```javascript
// Initialize file upload
Aural.initFileUpload('my-upload', {
  maxSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: ['image/png', 'image/jpeg', 'image/gif'],
  multiple: true,
  onUpload: (file) => {
    console.log('Uploaded:', file.name);
  }
});
```

**Features:**
- Drag-and-drop support
- Click to browse
- File type validation
- File size validation
- Multiple files support
- Upload progress bars
- File previews/thumbnails
- Remove files functionality
- Error states
- Keyboard accessible

---

## Utilities

### Shadows

Elevation and depth utilities with shadow classes.

**Shadow Sizes:**

```html
<div class="shadow-xs">Extra small shadow</div>
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
<div class="shadow-2xl">2X large shadow</div>
```

**Colored Shadows:**

```html
<div class="shadow-primary">Primary colored shadow</div>
<div class="shadow-primary-lg">Large primary shadow</div>
<div class="shadow-secondary">Secondary shadow</div>
<div class="shadow-success">Success shadow</div>
<div class="shadow-warning">Warning shadow</div>
<div class="shadow-error">Error shadow</div>
```

**Directional Shadows:**

```html
<div class="shadow-top">Shadow from top</div>
<div class="shadow-bottom">Shadow from bottom</div>
<div class="shadow-left">Shadow from left</div>
<div class="shadow-right">Shadow from right</div>
```

**Inner Shadow:**

```html
<div class="shadow-inner">Inner shadow effect</div>
```

**Hover Variants:**

```html
<div class="hover:shadow-lg">Shadow on hover</div>
<div class="hover:shadow-primary">Primary shadow on hover</div>
```

**Responsive Variants:**

```html
<div class="shadow-sm md:shadow-lg xl:shadow-2xl">Responsive shadows</div>
```

**Transition Helper:**

```html
<div class="shadow-sm shadow-transition hover:shadow-lg">Smooth transition</div>
```

---

### Glows

Luminous effects with glow utility classes and animations.

**Glow Sizes:**

```html
<div class="glow-sm">Small glow</div>
<div class="glow-md">Medium glow</div>
<div class="glow-lg">Large glow</div>
<div class="glow-xl">Extra large glow</div>
<div class="glow-2xl">2X large glow</div>
```

**Colored Glows:**

```html
<!-- Primary -->
<div class="glow-primary-sm">Small primary glow</div>
<div class="glow-primary-md">Medium primary glow</div>
<div class="glow-primary-lg">Large primary glow</div>
<div class="glow-primary-xl">XL primary glow</div>

<!-- Other colors -->
<div class="glow-secondary-md">Secondary glow</div>
<div class="glow-success-md">Success glow</div>
<div class="glow-error-md">Error glow</div>
<div class="glow-warning-md">Warning glow</div>
<div class="glow-info-md">Info glow</div>
```

**Inner Glows:**

```html
<div class="glow-inner-sm">Small inner glow</div>
<div class="glow-inner-md">Medium inner glow</div>
<div class="glow-inner-lg">Large inner glow</div>
```

**Neon Glows (Multi-layer):**

```html
<div class="glow-neon-primary">Neon primary effect</div>
<div class="glow-neon-secondary">Neon secondary effect</div>
<div class="glow-neon-error">Neon error effect</div>
```

**Depth Glows (3D Effect):**

```html
<div class="glow-depth-sm">Small depth glow</div>
<div class="glow-depth-md">Medium depth glow</div>
<div class="glow-depth-lg">Large depth glow</div>
```

**Animated Glows:**

```html
<!-- Pulse animation (2s) -->
<div class="glow-pulse">Pulsing glow</div>

<!-- Breathing animation (3s) -->
<div class="glow-breathing">Breathing effect</div>
<div class="glow-primary-breathing">Primary breathing</div>
<div class="glow-secondary-breathing">Secondary breathing</div>

<!-- Flicker animation (0.15s) -->
<div class="glow-flicker">Flickering neon</div>
```

**Hover Variants:**

```html
<div class="hover:glow-md">Glow on hover</div>
<div class="hover:glow-primary-md">Primary glow on hover</div>
```

**Responsive Variants:**

```html
<div class="glow-sm md:glow-md lg:glow-xl">Responsive glows</div>
```

**Transition Helper:**

```html
<div class="glow-sm glow-transition hover:glow-lg">Smooth transition</div>
```

**Accessibility:**
- All animations respect `prefers-reduced-motion`
- No animation when user prefers reduced motion

---

## Accessibility Features

All components include:

- ✅ Keyboard navigation (Tab, Arrow keys, Enter, Escape)
- ✅ Visible focus indicators (`:focus-visible`)
- ✅ Proper ARIA attributes
- ✅ Screen reader support
- ✅ WCAG AA contrast compliance
- ✅ `prefers-reduced-motion` support
- ✅ Minimum 44px touch targets

---

## JavaScript Auto-Initialization

All interactive components auto-initialize on page load:

```javascript
// These are called automatically on DOMContentLoaded:
Aural.initModals();
Aural.initTabs();
Aural.initTooltips();
Aural.initDropdowns();
Aural.initAccordions();
Aural.initPopovers();
Aural.initSelects();
Aural.initAllCodeBlocks();
```

You can also call them manually if needed. For components that require configuration (Slider, Chips, File Upload, Command Palette), you need to initialize them explicitly with their IDs and options.

---

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari 12+
- iOS Safari 12+

---

For live examples of all components, open `docs/showcase.html` in your browser or run `npm run serve`.
