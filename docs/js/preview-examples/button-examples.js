/**
 * Button Component Examples
 * Live interactive examples for the Button component
 */

export const examples = {
  'primary-buttons': {
    title: 'Button Variants',
    description: 'Different button styles for various use cases',
    vanilla: {
      html: `
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-ghost">Ghost</button>
      `,
      css: ``,
      js: ``
    },
    react: {
      code: `
import { Button } from '@aural-ui/react';

function Example() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
    </>
  );
}
      `
    },
    vue: {
      code: `
<template>
  <AuralButton variant="primary">Primary</AuralButton>
  <AuralButton variant="secondary">Secondary</AuralButton>
  <AuralButton variant="danger">Danger</AuralButton>
  <AuralButton variant="ghost">Ghost</AuralButton>
</template>

<script setup>
import { AuralButton } from '@aural-ui/vue';
</script>
      `
    },
    svelte: {
      code: `
<script>
  import { Button } from '@aural-ui/svelte';
</script>

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="ghost">Ghost</Button>
      `
    }
  },

  'button-sizes': {
    title: 'Button Sizes',
    description: 'Small, medium (default), and large buttons',
    vanilla: {
      html: `
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Medium</button>
<button class="btn btn-primary btn-lg">Large</button>
      `,
      css: ``,
      js: ``
    },
    react: {
      code: `
import { Button } from '@aural-ui/react';

function Example() {
  return (
    <>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="medium">Medium</Button>
      <Button variant="primary" size="large">Large</Button>
    </>
  );
}
      `
    },
    vue: {
      code: `
<template>
  <AuralButton variant="primary" size="small">Small</AuralButton>
  <AuralButton variant="primary" size="medium">Medium</AuralButton>
  <AuralButton variant="primary" size="large">Large</AuralButton>
</template>

<script setup>
import { AuralButton } from '@aural-ui/vue';
</script>
      `
    },
    svelte: {
      code: `
<script>
  import { Button } from '@aural-ui/svelte';
</script>

<Button variant="primary" size="small">Small</Button>
<Button variant="primary" size="medium">Medium</Button>
<Button variant="primary" size="large">Large</Button>
      `
    }
  },

  'button-states': {
    title: 'Button States',
    description: 'Disabled and loading states',
    vanilla: {
      html: `
<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-primary btn-loading">
  <span class="btn-spinner"></span>
  Loading
</button>
      `,
      css: ``,
      js: ``
    },
    react: {
      code: `
import { Button } from '@aural-ui/react';

function Example() {
  return (
    <>
      <Button variant="primary" disabled>Disabled</Button>
      <Button variant="primary" loading>Loading</Button>
    </>
  );
}
      `
    },
    vue: {
      code: `
<template>
  <AuralButton variant="primary" disabled>Disabled</AuralButton>
  <AuralButton variant="primary" loading>Loading</AuralButton>
</template>

<script setup>
import { AuralButton } from '@aural-ui/vue';
</script>
      `
    },
    svelte: {
      code: `
<script>
  import { Button } from '@aural-ui/svelte';
</script>

<Button variant="primary" disabled>Disabled</Button>
<Button variant="primary" loading>Loading</Button>
      `
    }
  },

  'button-icons': {
    title: 'Buttons with Icons',
    description: 'Add icons to buttons for better visual communication',
    vanilla: {
      html: `
<button class="btn btn-primary">
  <i data-lucide="plus"></i>
  Add Item
</button>
<button class="btn btn-secondary">
  <i data-lucide="download"></i>
  Download
</button>
<button class="btn btn-danger">
  <i data-lucide="trash-2"></i>
  Delete
</button>
      `,
      css: ``,
      js: `
// Icons will be automatically initialized
      `
    },
    react: {
      code: `
import { Button } from '@aural-ui/react';

function Example() {
  return (
    <>
      <Button variant="primary">
        <i data-lucide="plus"></i>
        Add Item
      </Button>
      <Button variant="secondary">
        <i data-lucide="download"></i>
        Download
      </Button>
      <Button variant="danger">
        <i data-lucide="trash-2"></i>
        Delete
      </Button>
    </>
  );
}
      `
    },
    vue: {
      code: `
<template>
  <AuralButton variant="primary">
    <i data-lucide="plus"></i>
    Add Item
  </AuralButton>
  <AuralButton variant="secondary">
    <i data-lucide="download"></i>
    Download
  </AuralButton>
  <AuralButton variant="danger">
    <i data-lucide="trash-2"></i>
    Delete
  </AuralButton>
</template>

<script setup>
import { AuralButton } from '@aural-ui/vue';
</script>
      `
    },
    svelte: {
      code: `
<script>
  import { Button } from '@aural-ui/svelte';
</script>

<Button variant="primary">
  <i data-lucide="plus"></i>
  Add Item
</Button>
<Button variant="secondary">
  <i data-lucide="download"></i>
  Download
</Button>
<Button variant="danger">
  <i data-lucide="trash-2"></i>
  Delete
</Button>
      `
    }
  },

  'icon-only-buttons': {
    title: 'Icon-Only Buttons',
    description: 'Square buttons with only icons, perfect for toolbars',
    vanilla: {
      html: `
<button class="btn btn-primary btn-icon btn-sm" title="Search">
  <i data-lucide="search"></i>
</button>
<button class="btn btn-primary btn-icon" title="Heart">
  <i data-lucide="heart"></i>
</button>
<button class="btn btn-primary btn-icon btn-lg" title="Star">
  <i data-lucide="star"></i>
</button>
      `,
      css: ``,
      js: ``
    },
    react: {
      code: `
import { Button } from '@aural-ui/react';

function Example() {
  return (
    <>
      <Button variant="primary" size="small" className="btn-icon" title="Search">
        <i data-lucide="search"></i>
      </Button>
      <Button variant="primary" className="btn-icon" title="Heart">
        <i data-lucide="heart"></i>
      </Button>
      <Button variant="primary" size="large" className="btn-icon" title="Star">
        <i data-lucide="star"></i>
      </Button>
    </>
  );
}
      `
    },
    vue: {
      code: `
<template>
  <AuralButton variant="primary" size="small" class="btn-icon" title="Search">
    <i data-lucide="search"></i>
  </AuralButton>
  <AuralButton variant="primary" class="btn-icon" title="Heart">
    <i data-lucide="heart"></i>
  </AuralButton>
  <AuralButton variant="primary" size="large" class="btn-icon" title="Star">
    <i data-lucide="star"></i>
  </AuralButton>
</template>

<script setup>
import { AuralButton } from '@aural-ui/vue';
</script>
      `
    },
    svelte: {
      code: `
<script>
  import { Button } from '@aural-ui/svelte';
</script>

<Button variant="primary" size="small" class="btn-icon" title="Search">
  <i data-lucide="search"></i>
</Button>
<Button variant="primary" class="btn-icon" title="Heart">
  <i data-lucide="heart"></i>
</Button>
<Button variant="primary" size="large" class="btn-icon" title="Star">
  <i data-lucide="star"></i>
</Button>
      `
    }
  },

  'interactive-example': {
    title: 'Interactive Button',
    description: 'Click the button to see it in action',
    vanilla: {
      html: `
<button class="btn btn-primary" onclick="handleClick()" id="demo-btn">
  Click me!
</button>
<p id="click-count" style="margin-top: 12px; color: var(--color-text-secondary);">
  Clicks: <strong>0</strong>
</p>
      `,
      css: ``,
      js: `
let count = 0;

function handleClick() {
  count++;
  const countEl = document.querySelector('#click-count strong');
  if (countEl) {
    countEl.textContent = count;
  }

  // Show loading state briefly
  const btn = document.getElementById('demo-btn');
  btn.classList.add('btn-loading');
  btn.disabled = true;

  setTimeout(() => {
    btn.classList.remove('btn-loading');
    btn.disabled = false;
  }, 500);
}
      `
    },
    react: {
      code: `
import { Button } from '@aural-ui/react';
import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <>
      <Button variant="primary" onClick={handleClick} loading={loading}>
        Click me!
      </Button>
      <p style={{ marginTop: '12px', color: 'var(--color-text-secondary)' }}>
        Clicks: <strong>{count}</strong>
      </p>
    </>
  );
}
      `
    },
    vue: {
      code: `
<template>
  <AuralButton variant="primary" @click="handleClick" :loading="loading">
    Click me!
  </AuralButton>
  <p style="margin-top: 12px; color: var(--color-text-secondary);">
    Clicks: <strong>{{ count }}</strong>
  </p>
</template>

<script setup>
import { ref } from 'vue';
import { AuralButton } from '@aural-ui/vue';

const count = ref(0);
const loading = ref(false);

const handleClick = () => {
  count.value++;
  loading.value = true;
  setTimeout(() => loading.value = false, 500);
};
</script>
      `
    },
    svelte: {
      code: `
<script>
  import { Button } from '@aural-ui/svelte';

  let count = 0;
  let loading = false;

  function handleClick() {
    count++;
    loading = true;
    setTimeout(() => loading = false, 500);
  }
</script>

<Button variant="primary" on:click={handleClick} loading={loading}>
  Click me!
</Button>
<p style="margin-top: 12px; color: var(--color-text-secondary);">
  Clicks: <strong>{count}</strong>
</p>
      `
    }
  }
};
