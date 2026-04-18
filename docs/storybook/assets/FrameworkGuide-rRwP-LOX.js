import{j as n,M as o}from"./index-Dd1tOUWA.js";import{useMDXComponents as a}from"./index-D07d6PwH.js";import"./iframe-DaaNqE6k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1c3tIrF.js";import"./index-DrFu-skq.js";function t(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Getting Started/Framework Guide",parameters:{docs:{theme:{base:"light"}}}}),`
`,n.jsx("style",{children:`
  :root,
  #storybook-docs,
  .sbdocs,
  .sbdocs-wrapper,
  .sbdocs-content {
    --color-bg-primary: #ffffff !important;
    --color-bg-secondary: #f5f5f5 !important;
    --color-text-primary: #1a1a1a !important;
    --color-text-secondary: #4a4a4a !important;
    background: #ffffff !important;
    background-color: #ffffff !important;
  }
  .sbdocs-content * {
    color: #1a1a1a !important;
  }
`}),`
`,n.jsxs("div",{style:{fontFamily:"var(--font-sans, system-ui, -apple-system, sans-serif)",maxWidth:"900px",margin:"0 auto",padding:"3rem 2rem",background:"#ffffff !important",backgroundColor:"#ffffff !important",color:"#1a1a1a !important",minHeight:"100vh"},children:[n.jsx(e.h1,{id:"framework-guide",children:"Framework Guide"}),n.jsxs(e.p,{children:["Aural UI is ",n.jsx(e.strong,{children:"framework-agnostic"})," and works seamlessly with vanilla JavaScript, React, Vue, Svelte, and other modern frameworks."]}),n.jsx(e.hr,{}),n.jsx(e.h2,{id:"vanilla-javascript--html",children:"Vanilla JavaScript / HTML"}),n.jsx(e.p,{children:"The simplest way to use Aural UI - just HTML and CSS classes."}),n.jsx(e.h3,{id:"setup",children:"Setup"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="path/to/aural-ui.css">
  <link rel="stylesheet" href="path/to/dark.css">
</head>
<body>
  <!-- Your components here -->
</body>
</html>
`})}),n.jsx(e.h3,{id:"component-usage",children:"Component Usage"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- Button -->
<button class="btn btn-primary">Click me</button>

<!-- Card -->
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>

<!-- Input -->
<input type="text" class="input" placeholder="Enter text">

<!-- Modal -->
<dialog class="modal" id="my-modal">
  <div class="modal-content">
    <h2>Modal Title</h2>
    <p>Modal content.</p>
    <button class="btn btn-primary" onclick="document.getElementById('my-modal').close()">
      Close
    </button>
  </div>
</dialog>
`})}),n.jsx(e.hr,{}),n.jsx(e.h2,{id:"react",children:"React"}),n.jsx(e.h3,{id:"setup-1",children:"Setup"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// main.jsx or App.jsx
import './aural-ui.css';
import './dark.css'; // or your chosen theme

function App() {
  return <YourComponent />;
}
`})}),n.jsx(e.h3,{id:"creating-reusable-components",children:"Creating Reusable Components"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// components/Button.jsx
function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  ...props
}) {
  const className = [
    'btn',
    \`btn-\${variant}\`,
    \`btn-\${size}\`,
    loading && 'btn-loading'
  ].filter(Boolean).join(' ');

  return (
    <button
      className={className}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <span className="spinner" aria-hidden="true" />}
      {children}
    </button>
  );
}

// Usage
<Button variant="primary" size="lg" onClick={handleClick}>
  Save
</Button>
`})}),n.jsx(e.h3,{id:"with-typescript",children:"With TypeScript"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// components/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  className,
  ...props
}) => {
  const classes = [
    'btn',
    \`btn-\${variant}\`,
    \`btn-\${size}\`,
    loading && 'btn-loading',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <span className="spinner" aria-hidden="true" />}
      {children}
    </button>
  );
};
`})}),n.jsx(e.h3,{id:"state-management-example",children:"State Management Example"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useState } from 'react';

function FormExample() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitForm(value);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
      />

      <button
        type="submit"
        className={\`btn btn-primary \${loading ? 'btn-loading' : ''}\`}
        disabled={loading}
        aria-busy={loading}
      >
        {loading && <span className="spinner" aria-hidden="true" />}
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
`})}),n.jsx(e.hr,{}),n.jsx(e.h2,{id:"vue-3",children:"Vue 3"}),n.jsx(e.h3,{id:"setup-2",children:"Setup"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// main.js
import { createApp } from 'vue';
import App from './App.vue';
import './aural-ui.css';
import './dark.css'; // or your chosen theme

createApp(App).mount('#app');
`})}),n.jsx(e.h3,{id:"creating-reusable-components-1",children:"Creating Reusable Components"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<!-- components/Button.vue -->
<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    :aria-busy="loading"
    v-bind="$attrs"
  >
    <span v-if="loading" class="spinner" aria-hidden="true"></span>
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const buttonClasses = computed(() => [
  'btn',
  \`btn-\${props.variant}\`,
  \`btn-\${props.size}\`,
  { 'btn-loading': props.loading }
]);
<\/script>

<!-- Usage -->
<Button variant="primary" size="lg" @click="handleClick">
  Save
</Button>
`})}),n.jsx(e.h3,{id:"with-typescript-1",children:"With TypeScript"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<!-- components/Button.vue -->
<script setup lang="ts">
import { computed } from 'vue';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
type Size = 'sm' | 'md' | 'lg';

interface Props {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false
});

const buttonClasses = computed(() => [
  'btn',
  \`btn-\${props.variant}\`,
  \`btn-\${props.size}\`,
  { 'btn-loading': props.loading }
]);
<\/script>
`})}),n.jsx(e.h3,{id:"composition-function-example",children:"Composition Function Example"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// composables/useToast.js
import { ref } from 'vue';

export function useToast() {
  const toasts = ref([]);

  function showToast(message, type = 'info') {
    const id = Date.now();
    toasts.value.push({ id, message, type });

    setTimeout(() => {
      removeToast(id);
    }, 3000);
  }

  function removeToast(id) {
    toasts.value = toasts.value.filter(toast => toast.id !== id);
  }

  return {
    toasts,
    showToast,
    removeToast
  };
}

// Usage in component
<script setup>
import { useToast } from './composables/useToast';

const { toasts, showToast } = useToast();

function handleSuccess() {
  showToast('Operation successful!', 'success');
}
<\/script>

<template>
  <button class="btn btn-primary" @click="handleSuccess">
    Show Toast
  </button>

  <div class="toast-container">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="\`toast toast-\${toast.type}\`"
    >
      {{ toast.message }}
    </div>
  </div>
</template>
`})}),n.jsx(e.hr,{}),n.jsx(e.h2,{id:"svelte",children:"Svelte"}),n.jsx(e.h3,{id:"setup-3",children:"Setup"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// App.svelte or layout
import './aural-ui.css';
import './dark.css'; // or your chosen theme
`})}),n.jsx(e.h3,{id:"creating-reusable-components-2",children:"Creating Reusable Components"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-svelte",children:`<!-- components/Button.svelte -->
<script>
  export let variant = 'primary';
  export let size = 'md';
  export let loading = false;
  export let disabled = false;

  $: buttonClass = [
    'btn',
    \`btn-\${variant}\`,
    \`btn-\${size}\`,
    loading && 'btn-loading'
  ].filter(Boolean).join(' ');
<\/script>

<button
  class={buttonClass}
  disabled={disabled || loading}
  aria-busy={loading}
  on:click
  {...$$restProps}
>
  {#if loading}
    <span class="spinner" aria-hidden="true"></span>
  {/if}
  <slot />
</button>

<!-- Usage -->
<Button variant="primary" size="lg" on:click={handleClick}>
  Save
</Button>
`})}),n.jsx(e.h3,{id:"with-typescript-2",children:"With TypeScript"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-svelte",children:`<!-- components/Button.svelte -->
<script lang="ts">
  type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  type Size = 'sm' | 'md' | 'lg';

  export let variant: Variant = 'primary';
  export let size: Size = 'md';
  export let loading: boolean = false;
  export let disabled: boolean = false;

  $: buttonClass = [
    'btn',
    \`btn-\${variant}\`,
    \`btn-\${size}\`,
    loading && 'btn-loading'
  ].filter(Boolean).join(' ');
<\/script>
`})}),n.jsx(e.h3,{id:"store-example",children:"Store Example"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// stores/toast.js
import { writable } from 'svelte/store';

function createToastStore() {
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    show: (message, type = 'info') => {
      const id = Date.now();
      update(toasts => [...toasts, { id, message, type }]);

      setTimeout(() => {
        update(toasts => toasts.filter(t => t.id !== id));
      }, 3000);
    }
  };
}

export const toasts = createToastStore();

// Usage in component
<script>
  import { toasts } from './stores/toast';

  function handleSuccess() {
    toasts.show('Operation successful!', 'success');
  }
<\/script>

<button class="btn btn-primary" on:click={handleSuccess}>
  Show Toast
</button>

<div class="toast-container">
  {#each $toasts as toast (toast.id)}
    <div class="toast toast-{toast.type}">
      {toast.message}
    </div>
  {/each}
</div>
`})}),n.jsx(e.hr,{}),n.jsx(e.h2,{id:"key-differences-summary",children:"Key Differences Summary"}),n.jsx("div",{style:{overflowX:"auto"},children:n.jsxs(e.p,{children:[`| Feature | Vanilla | React | Vue | Svelte |
|---------|---------|-------|-----|--------|
| `,n.jsx(e.strong,{children:"Class Syntax"})," | ",n.jsx(e.code,{children:'class="btn"'})," | ",n.jsx(e.code,{children:'className="btn"'})," | ",n.jsx(e.code,{children:':class="btn"'})," | ",n.jsx(e.code,{children:'class="btn"'}),` |
| `,n.jsx(e.strong,{children:"Event Handlers"})," | ",n.jsx(e.code,{children:'onclick="fn()"'})," | ",n.jsx(e.code,{children:"onClick={fn}"})," | ",n.jsx(e.code,{children:'@click="fn"'})," | ",n.jsx(e.code,{children:"on:click={fn}"}),` |
| `,n.jsx(e.strong,{children:"Dynamic Classes"})," | Template literals | Template literals | ",n.jsx(e.code,{children:":class"})," object | Reactive ",n.jsx(e.code,{children:"$:"}),` |
| `,n.jsx(e.strong,{children:"Props"})," | HTML attributes | ",n.jsx(e.code,{children:"props"})," object | ",n.jsx(e.code,{children:"defineProps()"})," | ",n.jsx(e.code,{children:"export let"}),` |
| `,n.jsx(e.strong,{children:"State"})," | DOM manipulation | ",n.jsx(e.code,{children:"useState()"})," | ",n.jsx(e.code,{children:"ref()"})," / ",n.jsx(e.code,{children:"reactive()"}),` | Reactive variables |
| `,n.jsx(e.strong,{children:"Slots/Children"})," | HTML content | ",n.jsx(e.code,{children:"{children}"})," | ",n.jsx(e.code,{children:"<slot />"})," | ",n.jsx(e.code,{children:"<slot />"})," |"]})}),n.jsx(e.hr,{}),n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),n.jsx(e.h3,{id:"all-frameworks",children:"All Frameworks"}),n.jsxs(e.p,{children:["✅ ",n.jsx(e.strong,{children:"Import CSS once"}),` at the app root
✅ `,n.jsx(e.strong,{children:"Use semantic HTML"}),` elements when possible
✅ `,n.jsx(e.strong,{children:"Include ARIA attributes"}),` for accessibility
✅ `,n.jsx(e.strong,{children:"Test keyboard navigation"}),` (Tab, Enter, Escape)
✅ `,n.jsx(e.strong,{children:"Respect user preferences"})," (prefers-reduced-motion, prefers-color-scheme)"]}),n.jsx(e.h3,{id:"framework-specific",children:"Framework-Specific"}),n.jsx(e.p,{children:n.jsx(e.strong,{children:"React:"})}),n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"className"})," instead of ",n.jsx(e.code,{children:"class"})]}),`
`,n.jsxs(e.li,{children:["Memoize expensive class computations with ",n.jsx(e.code,{children:"useMemo"})]}),`
`,n.jsx(e.li,{children:"Use React context for theme switching"}),`
`]}),n.jsx(e.p,{children:n.jsx(e.strong,{children:"Vue:"})}),n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:":class"})," for dynamic classes"]}),`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:'v-bind="$attrs"'})," to forward attributes"]}),`
`,n.jsx(e.li,{children:"Use composables for shared logic"}),`
`]}),n.jsx(e.p,{children:n.jsx(e.strong,{children:"Svelte:"})}),n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Use reactive declarations ",n.jsx(e.code,{children:"$:"})," for computed classes"]}),`
`,n.jsx(e.li,{children:"Use stores for global state"}),`
`,n.jsx(e.li,{children:"Leverage Svelte's built-in transitions"}),`
`]}),n.jsx(e.hr,{}),n.jsx(e.h2,{id:"need-help",children:"Need Help?"}),n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component Docs"}),": Each component page shows framework-specific examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Live Demo"}),": ",n.jsx(e.a,{href:"https://ferology.github.io/aural-ui/",rel:"nofollow",children:"https://ferology.github.io/aural-ui/"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"GitHub"}),": ",n.jsx(e.a,{href:"https://github.com/ferology/aural-ui",rel:"nofollow",children:"https://github.com/ferology/aural-ui"})]}),`
`]})]})]})}function h(s={}){const{wrapper:e}={...a(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{h as default};
