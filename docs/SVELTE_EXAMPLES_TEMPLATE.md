# Svelte Examples Template

Quick reference for adding Svelte code examples to component documentation pages.

## Template Structure

### 1. Add Tab Button

Add this button to the `tabs-list`:

```html
<button role="tab" aria-selected="false" aria-controls="svelte-panel" id="svelte-tab" class="tab">
    Svelte
</button>
```

### 2. Add Panel Content

Add this panel after the Vue panel:

```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte"><!-- CONTENT HERE --></code></pre>
</div>
```

---

## Component Examples

### Button

```svelte
<script>
  import { Button } from '@aural-ui/svelte';
</script>

<!-- Basic variants -->
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="ghost">Ghost</Button>

<!-- Sizes -->
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

<!-- States -->
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>

<!-- With icon -->
<Button icon="plus">Add Item</Button>

<!-- Event handling -->
<Button on:click={() => alert('Clicked!')}>
  Click me
</Button>
```

### Input

```svelte
<script>
  import { Input } from '@aural-ui/svelte';

  let value = '';
</script>

<!-- Basic input -->
<Input
  type="text"
  placeholder="Enter text..."
  bind:value
/>

<!-- With label -->
<Input
  type="email"
  label="Email Address"
  placeholder="you@example.com"
  bind:value
/>

<!-- With error -->
<Input
  type="text"
  error="This field is required"
  bind:value
/>

<!-- With helper text -->
<Input
  type="password"
  label="Password"
  helperText="Must be at least 8 characters"
  bind:value
/>

<!-- Sizes -->
<Input size="small" placeholder="Small" />
<Input size="medium" placeholder="Medium" />
<Input size="large" placeholder="Large" />
```

### Checkbox

```svelte
<script>
  import { Checkbox } from '@aural-ui/svelte';

  let checked = false;
</script>

<!-- Basic checkbox -->
<Checkbox bind:checked>
  Accept terms and conditions
</Checkbox>

<!-- With label prop -->
<Checkbox
  bind:checked
  label="Subscribe to newsletter"
/>

<!-- Disabled -->
<Checkbox checked disabled>
  Disabled checkbox
</Checkbox>

<!-- Indeterminate -->
<Checkbox indeterminate>
  Select all
</Checkbox>

<!-- With change event -->
<Checkbox
  bind:checked
  on:change={(e) => console.log('Changed:', e.detail)}
>
  Notify me
</Checkbox>
```

### Radio

```svelte
<script>
  import { Radio } from '@aural-ui/svelte';

  let selected = 'option1';
</script>

<!-- Radio group -->
<Radio
  name="options"
  value="option1"
  bind:checked={selected}
  label="Option 1"
/>
<Radio
  name="options"
  value="option2"
  bind:checked={selected}
  label="Option 2"
/>
<Radio
  name="options"
  value="option3"
  bind:checked={selected}
  label="Option 3"
/>

<!-- Disabled -->
<Radio
  name="options"
  value="option4"
  disabled
  label="Disabled option"
/>
```

### Select

```svelte
<script>
  import { Select } from '@aural-ui/svelte';

  let value = '';

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4', disabled: true }
  ];
</script>

<!-- Basic select -->
<Select
  {options}
  bind:value
  placeholder="Select an option"
/>

<!-- Searchable select -->
<Select
  {options}
  bind:value
  searchable
  placeholder="Search options..."
/>

<!-- Disabled -->
<Select
  {options}
  bind:value
  disabled
  placeholder="Disabled select"
/>
```

### Switch

```svelte
<script>
  import { Switch } from '@aural-ui/svelte';

  let enabled = false;
</script>

<!-- Basic switch -->
<Switch bind:checked={enabled}>
  Enable notifications
</Switch>

<!-- With label prop -->
<Switch
  bind:checked={enabled}
  label="Dark mode"
/>

<!-- Disabled -->
<Switch checked disabled>
  Disabled switch
</Switch>

<!-- With change event -->
<Switch
  bind:checked={enabled}
  on:change={(e) => console.log('Toggled:', e.detail)}
>
  Auto-save
</Switch>
```

### Modal

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
  title="Modal Title"
  size="medium"
>
  <p>Modal content goes here.</p>

  <svelte:fragment slot="footer">
    <Button variant="ghost" on:click={() => isOpen = false}>
      Cancel
    </Button>
    <Button variant="primary" on:click={() => isOpen = false}>
      Confirm
    </Button>
  </svelte:fragment>
</Modal>

<!-- Different sizes -->
<Modal bind:open={isOpen} size="small" title="Small" />
<Modal bind:open={isOpen} size="medium" title="Medium" />
<Modal bind:open={isOpen} size="large" title="Large" />
<Modal bind:open={isOpen} size="fullscreen" title="Fullscreen" />
```

### Tabs

```svelte
<script>
  import { Tabs } from '@aural-ui/svelte';

  let activeTab = 'tab1';

  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content for tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for tab 3' }
  ];
</script>

<Tabs
  {tabs}
  bind:activeTab
/>

<!-- With custom content -->
<Tabs {tabs} bind:activeTab>
  <svelte:fragment slot="tab1">
    <h3>Custom Tab 1</h3>
    <p>Custom content for tab 1</p>
  </svelte:fragment>
  <svelte:fragment slot="tab2">
    <h3>Custom Tab 2</h3>
    <p>Custom content for tab 2</p>
  </svelte:fragment>
</Tabs>
```

### Accordion

```svelte
<script>
  import { Accordion } from '@aural-ui/svelte';

  const items = [
    {
      id: 'item1',
      title: 'Section 1',
      content: 'Content for section 1'
    },
    {
      id: 'item2',
      title: 'Section 2',
      content: 'Content for section 2'
    },
    {
      id: 'item3',
      title: 'Section 3',
      content: 'Content for section 3'
    }
  ];
</script>

<!-- Basic accordion -->
<Accordion {items} />

<!-- Allow multiple open -->
<Accordion {items} multiple />

<!-- Default open items -->
<Accordion {items} defaultOpen={['item1', 'item2']} />
```

### Card

```svelte
<script>
  import { Card } from '@aural-ui/svelte';
</script>

<!-- Basic card -->
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>

<!-- With variant -->
<Card variant="elevated">
  <p>Elevated card</p>
</Card>

<!-- With padding -->
<Card padding="large">
  <p>Card with large padding</p>
</Card>

<!-- Hoverable -->
<Card hoverable>
  <p>Hover over me</p>
</Card>
```

### Badge

```svelte
<script>
  import { Badge } from '@aural-ui/svelte';
</script>

<!-- Basic badges -->
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>

<!-- Sizes -->
<Badge size="small">Small</Badge>
<Badge size="medium">Medium</Badge>
<Badge size="large">Large</Badge>

<!-- Dot badge -->
<Badge dot>Notifications</Badge>
```

### Progress

```svelte
<script>
  import { Progress } from '@aural-ui/svelte';

  let value = 50;
</script>

<!-- Basic progress -->
<Progress value={50} max={100} />

<!-- With label -->
<Progress value={75} max={100} showLabel />

<!-- Different variants -->
<Progress value={60} variant="primary" />
<Progress value={60} variant="success" />
<Progress value={60} variant="danger" />

<!-- Indeterminate -->
<Progress indeterminate />
```

### Spinner

```svelte
<script>
  import { Spinner } from '@aural-ui/svelte';
</script>

<!-- Basic spinner -->
<Spinner />

<!-- Sizes -->
<Spinner size="small" />
<Spinner size="medium" />
<Spinner size="large" />

<!-- Variants -->
<Spinner variant="primary" />
<Spinner variant="secondary" />
<Spinner variant="white" />
```

### Toast

```svelte
<script>
  import { Toast, Button } from '@aural-ui/svelte';

  let showToast = false;

  function show() {
    showToast = true;
    setTimeout(() => showToast = false, 3000);
  }
</script>

<Button on:click={show}>Show Toast</Button>

{#if showToast}
  <Toast
    message="This is a toast message"
    variant="success"
    on:close={() => showToast = false}
  />
{/if}

<!-- Different variants -->
<Toast message="Info message" variant="info" />
<Toast message="Success message" variant="success" />
<Toast message="Warning message" variant="warning" />
<Toast message="Error message" variant="danger" />
```

### AlertBanner

```svelte
<script>
  import { AlertBanner } from '@aural-ui/svelte';

  let visible = true;
</script>

<!-- Basic alert -->
<AlertBanner
  variant="info"
  title="Information"
  bind:visible
>
  This is an informational message.
</AlertBanner>

<!-- Different variants -->
<AlertBanner variant="success" title="Success!">
  Your action was completed successfully.
</AlertBanner>

<AlertBanner variant="warning" title="Warning">
  Please review this important information.
</AlertBanner>

<AlertBanner variant="danger" title="Error">
  An error occurred. Please try again.
</AlertBanner>

<!-- Dismissible -->
<AlertBanner
  variant="info"
  title="Dismissible Alert"
  dismissible
  bind:visible
>
  You can close this alert.
</AlertBanner>
```

### Pagination

```svelte
<script>
  import { Pagination } from '@aural-ui/svelte';

  let currentPage = 1;
  const totalPages = 10;

  function handlePageChange(e) {
    currentPage = e.detail;
    console.log('Page changed to:', currentPage);
  }
</script>

<Pagination
  {currentPage}
  {totalPages}
  on:pageChange={handlePageChange}
/>

<!-- With custom page size -->
<Pagination
  {currentPage}
  {totalPages}
  pageSize={20}
  on:pageChange={handlePageChange}
/>
```

### Breadcrumb

```svelte
<script>
  import { Breadcrumb } from '@aural-ui/svelte';

  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Category', href: '/products/category' },
    { label: 'Item' }
  ];
</script>

<!-- Basic breadcrumb -->
<Breadcrumb {items} />

<!-- Custom separator -->
<Breadcrumb {items} separator=">" />
<Breadcrumb {items} separator="|" />
```

### Avatar

```svelte
<script>
  import { Avatar } from '@aural-ui/svelte';
</script>

<!-- With image -->
<Avatar
  src="https://example.com/avatar.jpg"
  alt="User name"
/>

<!-- With fallback -->
<Avatar
  src="broken-url.jpg"
  fallback="JD"
  alt="John Doe"
/>

<!-- Sizes -->
<Avatar src="avatar.jpg" size="small" />
<Avatar src="avatar.jpg" size="medium" />
<Avatar src="avatar.jpg" size="large" />

<!-- Without image (initials) -->
<Avatar fallback="AB" />
```

### Table

```svelte
<script>
  import { Table } from '@aural-ui/svelte';

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' }
  ];

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' }
  ];

  let selectedRows = [];
</script>

<!-- Basic table -->
<Table {columns} {data} />

<!-- Sortable table -->
<Table {columns} {data} sortable />

<!-- Selectable rows -->
<Table
  {columns}
  {data}
  selectable
  bind:selectedRows
/>

<!-- With row click handler -->
<Table
  {columns}
  {data}
  on:rowClick={(e) => console.log('Row clicked:', e.detail)}
/>
```

### Drawer

```svelte
<script>
  import { Drawer, Button } from '@aural-ui/svelte';

  let isOpen = false;
</script>

<Button on:click={() => isOpen = true}>
  Open Drawer
</Button>

<Drawer
  bind:open={isOpen}
  title="Drawer Title"
  position="right"
>
  <p>Drawer content goes here.</p>

  <svelte:fragment slot="footer">
    <Button variant="ghost" on:click={() => isOpen = false}>
      Close
    </Button>
  </svelte:fragment>
</Drawer>

<!-- Different positions -->
<Drawer bind:open={isOpen} position="left" title="Left Drawer" />
<Drawer bind:open={isOpen} position="right" title="Right Drawer" />
<Drawer bind:open={isOpen} position="top" title="Top Drawer" />
<Drawer bind:open={isOpen} position="bottom" title="Bottom Drawer" />
```

### DatePicker

```svelte
<script>
  import { DatePicker } from '@aural-ui/svelte';

  let date = new Date();
</script>

<!-- Basic date picker -->
<DatePicker bind:value={date} />

<!-- With min/max dates -->
<DatePicker
  bind:value={date}
  min={new Date(2024, 0, 1)}
  max={new Date(2024, 11, 31)}
/>

<!-- Disabled -->
<DatePicker bind:value={date} disabled />
```

### Slider

```svelte
<script>
  import { Slider } from '@aural-ui/svelte';

  let value = 50;
</script>

<!-- Basic slider -->
<Slider bind:value min={0} max={100} />

<!-- With step -->
<Slider bind:value min={0} max={100} step={5} />

<!-- Disabled -->
<Slider bind:value min={0} max={100} disabled />

<!-- With change event -->
<Slider
  bind:value
  min={0}
  max={100}
  on:change={(e) => console.log('Value:', e.detail)}
/>
```

---

## Quick Tips

1. Always import components from `@aural-ui/svelte`
2. Use `bind:` for two-way data binding (value, checked, open, etc.)
3. Use `on:eventName` for event handlers
4. Show multiple examples: basic usage, variants, sizes, states
5. Include state management with `let` declarations
6. Add comments to group related examples
7. Use `<svelte:fragment slot="name">` for named slots

## HTML Encoding Reference

When writing code in HTML `<pre><code>` blocks, remember to encode:

- `<` becomes `&lt;`
- `>` becomes `&gt;`
- `&` becomes `&amp;`

Example:
```html
<pre><code class="language-svelte">&lt;script&gt;
  import { Button } from '@aural-ui/svelte';
&lt;/script&gt;

&lt;Button variant="primary"&gt;Click me&lt;/Button&gt;</code></pre>
```
