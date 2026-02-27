# Svelte Documentation Guide

This guide explains how to add Svelte code examples to Aural UI component documentation pages.

## Overview

Component documentation pages at `/Users/feraf/Projects/aural-ui/docs/components/` now include framework tabs showing examples for:
- Vanilla JS
- React
- Vue
- **Svelte** (newly added)

## What Has Been Updated

### Completed
- ✅ `/Users/feraf/Projects/aural-ui/docs/components/buttons.html` - Svelte tab added
- ✅ `/Users/feraf/Projects/aural-ui/docs/components/inputs.html` - Svelte tab added

## How to Add Svelte Examples to Other Components

### Step 1: Add the Svelte Tab Button

Find the framework tabs section (usually under "Framework Examples"):

```html
<div class="framework-tabs">
    <div role="tablist" class="tabs-list">
        <button role="tab" aria-selected="true" aria-controls="vanilla-panel" id="vanilla-tab" class="tab active">
            Vanilla JS
        </button>
        <button role="tab" aria-selected="false" aria-controls="react-panel" id="react-tab" class="tab">
            React
        </button>
        <button role="tab" aria-selected="false" aria-controls="vue-panel" id="vue-tab" class="tab">
            Vue
        </button>
        <!-- ADD THIS BUTTON -->
        <button role="tab" aria-selected="false" aria-controls="svelte-panel" id="svelte-tab" class="tab">
            Svelte
        </button>
    </div>
```

### Step 2: Add the Svelte Panel Content

After the Vue panel (before the closing `</div>` of `.framework-tabs`), add:

```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte">&lt;script&gt;
  import { ComponentName } from '@aural-ui/svelte';
&lt;/script&gt;

&lt;!-- Basic usage example --&gt;
&lt;ComponentName prop="value"&gt;Content&lt;/ComponentName&gt;

&lt;!-- Additional examples with different props --&gt;
</code></pre>
</div>
```

## Svelte Component Reference

Available Svelte components in `/Users/feraf/Projects/aural-ui/packages/svelte/src/components/`:

### Form Components
- **Button.svelte** - Props: `variant`, `size`, `loading`, `disabled`, `type`, `fullWidth`, `icon`
- **Input.svelte** - Props: `value`, `type`, `placeholder`, `label`, `disabled`, `error`, `helperText`, `size`, `fullWidth`
- **Checkbox.svelte** - Props: `checked`, `label`, `disabled`, `indeterminate`
- **Radio.svelte** - Props: `checked`, `label`, `value`, `name`, `disabled`
- **Switch.svelte** - Props: `checked`, `label`, `disabled`
- **Select.svelte** - Props: `value`, `options`, `placeholder`, `disabled`, `error`
- **Toggle.svelte** - Props: `checked`, `label`, `disabled`
- **Slider.svelte** - Props: `value`, `min`, `max`, `step`, `disabled`
- **RangeSlider.svelte** - Props: `min`, `max`, `step`, `values`
- **Rating.svelte** - Props: `value`, `max`, `readonly`, `size`
- **FileUpload.svelte** - Props: `accept`, `multiple`, `maxSize`
- **ColorPicker.svelte** - Props: `value`, `format`
- **SearchBar.svelte** - Props: `value`, `placeholder`, `loading`
- **Combobox.svelte** - Props: `value`, `options`, `placeholder`
- **MultiSelect.svelte** - Props: `values`, `options`, `placeholder`
- **TimePicker.svelte** - Props: `value`, `format`, `disabled`
- **DatePicker.svelte** - Props: `value`, `min`, `max`, `disabled`
- **DateRangePicker.svelte** - Props: `startDate`, `endDate`, `min`, `max`

### Layout Components
- **Card.svelte** - Props: `variant`, `padding`, `hoverable`
- **Divider.svelte** - Props: `orientation`, `text`
- **Accordion.svelte** - Props: `items`, `multiple`, `defaultOpen`
- **Tabs.svelte** - Props: `tabs`, `activeTab`

### Feedback Components
- **Spinner.svelte** - Props: `size`, `variant`
- **Progress.svelte** - Props: `value`, `max`, `variant`, `showLabel`
- **Skeleton.svelte** - Props: `width`, `height`, `variant`, `count`
- **AlertBanner.svelte** - Props: `variant`, `title`, `dismissible`
- **Badge.svelte** - Props: `variant`, `size`, `dot`
- **Toast.svelte** - Props: `message`, `variant`, `duration`
- **Snackbar.svelte** - Props: `message`, `action`, `duration`

### Overlay Components
- **Modal.svelte** - Props: `open`, `title`, `size`, `closeOnOverlayClick`, `closeOnEscape`
- **Dialog.svelte** - Props: `open`, `title`, `message`, `confirmText`, `cancelText`
- **Drawer.svelte** - Props: `open`, `position`, `title`
- **Popover.svelte** - Props: `open`, `placement`, `trigger`
- **ContextMenu.svelte** - Props: `items`, `x`, `y`

### Navigation Components
- **Breadcrumb.svelte** - Props: `items`, `separator`
- **Pagination.svelte** - Props: `currentPage`, `totalPages`, `onPageChange`
- **Navbar.svelte** - Props: `items`, `logo`, `variant`
- **BottomNav.svelte** - Props: `items`, `activeItem`

### Data Display Components
- **Table.svelte** - Props: `data`, `columns`, `sortable`, `selectable`
- **Timeline.svelte** - Props: `items`, `variant`
- **TreeView.svelte** - Props: `data`, `expandable`, `selectable`
- **StatsCard.svelte** - Props: `title`, `value`, `change`, `icon`
- **Avatar.svelte** - Props: `src`, `alt`, `size`, `fallback`
- **Chips.svelte** - Props: `label`, `variant`, `removable`, `icon`
- **EmptyState.svelte** - Props: `title`, `message`, `icon`, `action`
- **Calendar.svelte** - Props: `value`, `min`, `max`, `events`
- **ImageGallery.svelte** - Props: `images`, `columns`, `lightbox`
- **NotificationCenter.svelte** - Props: `notifications`, `maxVisible`
- **CodeBlock.svelte** - Props: `code`, `language`, `showLineNumbers`, `theme`

### Interactive Components
- **Carousel.svelte** - Props: `items`, `autoplay`, `interval`, `showControls`
- **Stepper.svelte** - Props: `steps`, `currentStep`, `orientation`
- **CommandPalette.svelte** - Props: `open`, `commands`, `placeholder`
- **Dropdown.svelte** - Props: `items`, `trigger`, `placement`

## Example Patterns

### Simple Component (Button)
```svelte
<script>
  import { Button } from '@aural-ui/svelte';
</script>

<!-- Basic usage -->
<Button variant="primary">Click me</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger">Delete</Button>

<!-- With sizes -->
<Button variant="primary" size="small">Small</Button>
<Button variant="primary">Medium</Button>
<Button variant="primary" size="large">Large</Button>

<!-- With states -->
<Button variant="primary" disabled>Disabled</Button>
<Button variant="primary" loading>Loading</Button>
```

### Form Component with Binding (Input)
```svelte
<script>
  import { Input } from '@aural-ui/svelte';

  let value = '';
</script>

<!-- Basic usage -->
<Input
  type="text"
  placeholder="Enter text..."
  bind:value
/>

<!-- With label and helper text -->
<Input
  type="email"
  label="Email Address"
  placeholder="you@example.com"
  helperText="We'll never share your email"
  bind:value
/>

<!-- With error state -->
<Input
  type="email"
  placeholder="invalid-email"
  error="Please enter a valid email address"
  bind:value
/>
```

### Component with Event Handlers (Modal)
```svelte
<script>
  import { Modal, Button } from '@aural-ui/svelte';

  let isOpen = false;
</script>

<Button on:click={() => isOpen = true}>
  Open Modal
</Button>

<Modal
  bind:open={isOpen}
  title="Confirm Action"
  size="medium"
  on:close={() => isOpen = false}
>
  <p>Are you sure you want to continue?</p>

  <svelte:fragment slot="footer">
    <Button variant="ghost" on:click={() => isOpen = false}>
      Cancel
    </Button>
    <Button variant="primary" on:click={() => isOpen = false}>
      Confirm
    </Button>
  </svelte:fragment>
</Modal>
```

### Complex Component with Multiple Props (Table)
```svelte
<script>
  import { Table } from '@aural-ui/svelte';

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role' }
  ];

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
  ];

  let selectedRows = [];
</script>

<Table
  {columns}
  {data}
  sortable
  selectable
  bind:selectedRows
  on:rowClick={(e) => console.log('Row clicked:', e.detail)}
/>
```

## Best Practices

1. **Import Pattern**: Always show the import statement at the top of the script section
2. **Component Name**: Use the PascalCase component name from `@aural-ui/svelte`
3. **Props**: Show the most common props first, then advanced usage
4. **State Management**: Use `bind:` for two-way data binding when appropriate
5. **Event Handlers**: Use `on:eventName` for event handling
6. **Slots**: Show named slots when the component supports them
7. **Comments**: Add HTML comments to group related examples
8. **Code Style**: Match the indentation and style of React/Vue examples

## Testing Your Changes

After adding Svelte examples to a component page:

1. Open the HTML file in a browser
2. Navigate to the "Framework Examples" section
3. Click the "Svelte" tab
4. Verify:
   - Tab switches correctly
   - Code displays properly
   - Syntax highlighting works
   - Examples are clear and complete

## Additional Notes

- The Svelte components use TypeScript for better type safety
- All components support `on:click` and other native events via event forwarding
- Props marked with `bind:` create two-way bindings
- Use `{...$$restProps}` pattern is supported for passing additional attributes
- Check the actual Svelte component file for the complete prop interface

## Next Steps

To complete the Svelte documentation:

1. Add Svelte tabs to all component pages in `/Users/feraf/Projects/aural-ui/docs/components/`
2. Verify each example matches the component's actual API
3. Test the examples in a real Svelte application
4. Update this guide if you discover new patterns or best practices
