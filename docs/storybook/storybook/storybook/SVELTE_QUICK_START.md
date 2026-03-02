# Svelte Documentation Quick Start

Fast track guide for adding Svelte examples to component documentation pages.

## 5-Minute Setup

### Step 1: Find Your Component

Navigate to: `/Users/feraf/Projects/aural-ui/docs/components/[component-name].html`

### Step 2: Locate Framework Tabs Section

Search for this code block (usually around line 460-475):

```html
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
</div>
```

### Step 3: Add Svelte Tab Button

Add this button before the closing `</div>`:

```html
<button role="tab" aria-selected="false" aria-controls="svelte-panel" id="svelte-tab" class="tab">
    Svelte
</button>
```

### Step 4: Find Vue Panel

Look for the Vue panel (search for `id="vue-panel"`):

```html
<div role="tabpanel" id="vue-panel" aria-labelledby="vue-tab" hidden>
    <!-- Vue code here -->
</div>
```

### Step 5: Add Svelte Panel After Vue

Insert this AFTER the Vue panel closing `</div>` but BEFORE the framework-tabs closing `</div>`:

```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte"><!-- YOUR CODE HERE --></code></pre>
</div>
```

### Step 6: Add Your Svelte Code

Replace `<!-- YOUR CODE HERE -->` with the appropriate example from `SVELTE_EXAMPLES_TEMPLATE.md`.

**Remember to HTML encode:**
- `<` becomes `&lt;`
- `>` becomes `&gt;`

## Component-Specific Examples

### Buttons
```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte">&lt;script&gt;
  import { Button } from '@aural-ui/svelte';
&lt;/script&gt;

&lt;Button variant="primary"&gt;Click me&lt;/Button&gt;
&lt;Button variant="secondary"&gt;Cancel&lt;/Button&gt;
&lt;Button variant="danger"&gt;Delete&lt;/Button&gt;</code></pre>
</div>
```

### Inputs
```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte">&lt;script&gt;
  import { Input } from '@aural-ui/svelte';

  let value = '';
&lt;/script&gt;

&lt;Input
  type="text"
  placeholder="Enter text..."
  bind:value
/&gt;</code></pre>
</div>
```

### Checkboxes
```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte">&lt;script&gt;
  import { Checkbox } from '@aural-ui/svelte';

  let checked = false;
&lt;/script&gt;

&lt;Checkbox bind:checked&gt;
  Accept terms
&lt;/Checkbox&gt;</code></pre>
</div>
```

### Radio Buttons
```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte">&lt;script&gt;
  import { Radio } from '@aural-ui/svelte';

  let selected = 'option1';
&lt;/script&gt;

&lt;Radio name="options" value="option1" bind:checked={selected} label="Option 1" /&gt;
&lt;Radio name="options" value="option2" bind:checked={selected} label="Option 2" /&gt;</code></pre>
</div>
```

### Select
```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte">&lt;script&gt;
  import { Select } from '@aural-ui/svelte';

  let value = '';
  const options = [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' }
  ];
&lt;/script&gt;

&lt;Select {options} bind:value /&gt;</code></pre>
</div>
```

### Switch
```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte">&lt;script&gt;
  import { Switch } from '@aural-ui/svelte';

  let enabled = false;
&lt;/script&gt;

&lt;Switch bind:checked={enabled}&gt;
  Enable feature
&lt;/Switch&gt;</code></pre>
</div>
```

### Modal
```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte">&lt;script&gt;
  import { Modal, Button } from '@aural-ui/svelte';

  let isOpen = false;
&lt;/script&gt;

&lt;Button on:click={() =&gt; isOpen = true}&gt;
  Open Modal
&lt;/Button&gt;

&lt;Modal bind:open={isOpen} title="Modal Title"&gt;
  &lt;p&gt;Content here&lt;/p&gt;
&lt;/Modal&gt;</code></pre>
</div>
```

### Tabs
```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte">&lt;script&gt;
  import { Tabs } from '@aural-ui/svelte';

  let activeTab = 'tab1';
  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content 2' }
  ];
&lt;/script&gt;

&lt;Tabs {tabs} bind:activeTab /&gt;</code></pre>
</div>
```

### Cards
```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte">&lt;script&gt;
  import { Card } from '@aural-ui/svelte';
&lt;/script&gt;

&lt;Card&gt;
  &lt;h3&gt;Card Title&lt;/h3&gt;
  &lt;p&gt;Card content&lt;/p&gt;
&lt;/Card&gt;</code></pre>
</div>
```

### Badges
```html
<div role="tabpanel" id="svelte-panel" aria-labelledby="svelte-tab" hidden>
    <pre><code class="language-svelte">&lt;script&gt;
  import { Badge } from '@aural-ui/svelte';
&lt;/script&gt;

&lt;Badge variant="primary"&gt;New&lt;/Badge&gt;
&lt;Badge variant="success"&gt;Active&lt;/Badge&gt;
&lt;Badge variant="danger"&gt;Error&lt;/Badge&gt;</code></pre>
</div>
```

## Checklist

Use this checklist for each component page:

- [ ] Found the framework tabs section
- [ ] Added Svelte tab button to tabs-list
- [ ] Added Svelte panel after Vue panel
- [ ] Copied appropriate example from template
- [ ] HTML encoded all `<` and `>` characters
- [ ] Tested in browser (tab switches correctly)
- [ ] Code displays with proper formatting
- [ ] Example is clear and complete

## Testing

1. Open the HTML file in a browser
2. Scroll to "Framework Examples" section
3. Click through all tabs: Vanilla JS → React → Vue → **Svelte**
4. Verify Svelte tab appears and switches correctly
5. Check code formatting and syntax highlighting

## Common Issues

### Tab doesn't switch
- Check that `aria-controls` matches panel `id`
- Verify `id="svelte-tab"` and `id="svelte-panel"`

### Code not displaying
- Ensure HTML encoding is correct (`&lt;` not `<`)
- Check closing tags match opening tags

### Panel always visible
- Verify `hidden` attribute on panel
- Check that only vanilla-tab has `aria-selected="true"`

## Resources

- **Full Guide**: `SVELTE_DOCUMENTATION_GUIDE.md`
- **Code Examples**: `SVELTE_EXAMPLES_TEMPLATE.md`
- **Summary**: `SVELTE_DOCUMENTATION_SUMMARY.md`
- **This Guide**: `SVELTE_QUICK_START.md`

## Priority Order

Complete components in this order for maximum impact:

**Phase 1: Form Components** (Most Used)
1. checkboxes.html
2. radio-buttons.html
3. select.html
4. switch.html
5. slider.html

**Phase 2: Common UI** (High Visibility)
6. modals.html
7. tabs.html
8. cards.html
9. badges.html
10. accordions.html

**Phase 3: Navigation** (User Flow)
11. breadcrumbs.html
12. pagination.html
13. navbar.html
14. bottom-navigation.html

**Phase 4: Feedback** (User Experience)
15. progress.html
16. spinner.html
17. toast.html
18. alert-banner.html

**Phase 5: Advanced** (Power Users)
19. tables.html
20. drawer.html
21. date-picker.html
22. And remaining components...

## Time Estimate

- **Per component**: 5-10 minutes
- **Simple components** (Badge, Spinner): 5 minutes
- **Form components** (Input, Select): 7 minutes
- **Complex components** (Table, Modal): 10 minutes

**Total for all 50+ components**: ~6-8 hours

## Need Help?

1. Check `SVELTE_EXAMPLES_TEMPLATE.md` for your component
2. Look at completed examples: buttons.html, inputs.html
3. Review `SVELTE_DOCUMENTATION_GUIDE.md` for detailed info
4. Verify component props in `/packages/svelte/src/components/[Component].svelte`

---

**Ready to start?** Pick a component and follow the 6 steps above!
