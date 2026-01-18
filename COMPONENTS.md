# Aural UI - Component Reference

Complete reference for all components in the Aural UI design system.

---

## Table of Contents

- [Form Controls](#form-controls)
  - [Checkbox](#checkbox)
  - [Radio](#radio)
  - [Toggle](#toggle)
  - [Select](#select)
- [Navigation](#navigation)
  - [Tabs](#tabs)
  - [Breadcrumb](#breadcrumb)
  - [Pagination](#pagination)
- [Data Display](#data-display)
  - [Table](#table)
  - [Avatar](#avatar)
  - [Progress](#progress)
  - [Divider](#divider)
- [Interactive](#interactive)
  - [Tooltip](#tooltip)
  - [Dropdown](#dropdown)
  - [Accordion](#accordion)
  - [Popover](#popover)

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
Aural.initTabs();
Aural.initTooltips();
Aural.initDropdowns();
Aural.initAccordions();
Aural.initPopovers();
Aural.initSelects();
```

You can also call them manually if needed.

---

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari 12+
- iOS Safari 12+

---

For live examples of all components, open `docs/showcase.html` in your browser or run `npm run serve`.
