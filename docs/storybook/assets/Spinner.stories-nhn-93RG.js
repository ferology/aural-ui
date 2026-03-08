const Z={title:"Components/Spinner",tags:["autodocs"],parameters:{docs:{description:{component:`
# Spinner Component

Animated loading indicators for asynchronous operations, processing states, and instant feedback when content is loading or actions are being performed.

Use Spinners for operations with unknown duration or instant loading (<2 seconds). For measurable progress (file uploads, multi-step processes), use **Progress** bars instead. For initial page load, use **Skeleton** screens.

Spinners provide immediate visual feedback that the system is working, preventing users from thinking the interface is frozen or repeatedly clicking buttons.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Basic Spinner -->
<div class="aural-spinner aural-spinner--primary" role="status" aria-label="Loading">
  <div class="aural-spinner__circle"></div>
</div>

<!-- Spinner with Text -->
<div class="aural-spinner aural-spinner--with-text aural-spinner--primary">
  <div class="aural-spinner__circle"></div>
  <span class="aural-spinner__text">Loading...</span>
</div>

<!-- In Button -->
<button class="btn btn-primary" disabled aria-busy="true">
  <span class="aural-spinner aural-spinner--xs aural-spinner--white" role="status" aria-label="Loading">
    <span class="aural-spinner__circle"></span>
  </span>
  <span>Loading...</span>
</button>

<!-- Dots Variant -->
<div class="aural-spinner aural-spinner--dots aural-spinner--primary" role="status" aria-label="Loading">
  <div class="aural-spinner__dot"></div>
  <div class="aural-spinner__dot"></div>
  <div class="aural-spinner__dot"></div>
</div>
\`\`\`

**React:**
\`\`\`jsx
import { Loader2 } from 'lucide-react';

function Spinner({ size = 'md', variant = 'primary', label = 'Loading', withText = false }) {
  const sizeClasses = {
    xs: 'aural-spinner--xs',
    sm: 'aural-spinner--sm',
    md: '',
    lg: 'aural-spinner--lg',
    xl: 'aural-spinner--xl'
  };

  return (
    <div
      className={\`aural-spinner \${sizeClasses[size]} aural-spinner--\${variant} \${withText ? 'aural-spinner--with-text' : ''}\`}
      role="status"
      aria-label={label}
    >
      <div className="aural-spinner__circle" />
      {withText && <span className="aural-spinner__text">{label}</span>}
    </div>
  );
}

// Loading Button Example
function LoadingButton({ loading, children, onClick }) {
  return (
    <button
      className="btn btn-primary"
      disabled={loading}
      aria-busy={loading}
      onClick={onClick}
    >
      {loading && (
        <span className="aural-spinner aural-spinner--xs aural-spinner--white" role="status">
          <span className="aural-spinner__circle" />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}

// Full Page Overlay
function LoadingOverlay({ message = 'Loading...' }) {
  return (
    <div className="aural-spinner-overlay">
      <div className="aural-spinner aural-spinner--lg aural-spinner--primary aural-spinner--with-text">
        <div className="aural-spinner__circle" />
        <span className="aural-spinner__text">{message}</span>
      </div>
    </div>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div
    :class="spinnerClasses"
    role="status"
    :aria-label="label"
  >
    <div class="aural-spinner__circle" />
    <span v-if="withText" class="aural-spinner__text">{{ label }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: { type: String, default: 'md' },
  variant: { type: String, default: 'primary' },
  label: { type: String, default: 'Loading' },
  withText: Boolean
});

const spinnerClasses = computed(() => {
  const classes = ['aural-spinner'];

  if (props.size !== 'md') classes.push(\`aural-spinner--\${props.size}\`);
  if (props.variant) classes.push(\`aural-spinner--\${props.variant}\`);
  if (props.withText) classes.push('aural-spinner--with-text');

  return classes.join(' ');
});
<\/script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  export let size = 'md';
  export let variant = 'primary';
  export let label = 'Loading';
  export let withText = false;

  $: spinnerClasses = [
    'aural-spinner',
    size !== 'md' && \`aural-spinner--\${size}\`,
    \`aural-spinner--\${variant}\`,
    withText && 'aural-spinner--with-text'
  ].filter(Boolean).join(' ');
<\/script>

<div class={spinnerClasses} role="status" aria-label={label}>
  <div class="aural-spinner__circle" />
  {#if withText}
    <span class="aural-spinner__text">{label}</span>
  {/if}
</div>
\`\`\`

## Accessibility

1. **role="status"** - Use \`role="status"\` for non-intrusive loading announcements via implicit \`aria-live="polite"\`
2. **aria-label** - Provide descriptive label like \`aria-label="Loading content"\` or \`aria-label="Processing payment"\`
3. **Screen reader text** - For spinners without visible text, aria-label ensures screen readers announce the loading state
4. **Focus management** - Don't move focus to spinner; maintain focus on triggering element (button, input)
5. **Button states** - Set \`disabled\` and \`aria-busy="true"\` on buttons containing spinners during loading
6. **Reduced motion** - Slow down animations for users with \`prefers-reduced-motion\` preference (2s vs 0.8s)
7. **Color contrast** - Ensure spinner color meets 3:1 contrast ratio against background (WCAG AA)
8. **Size accessibility** - Use minimum md size (40px) for standalone spinners; xs (16px) only in buttons
9. **Timeout warnings** - For operations >30 seconds, announce "Still loading..." updates every 15 seconds
10. **Error recovery** - If loading fails, announce error via \`role="alert"\` and provide retry action
11. **Skip links** - For full-page overlays, offer "Cancel" button to abort long operations
12. **Multiple spinners** - When showing multiple spinners (list items), throttle announcements to avoid spam

## Usage Guidelines

### When to Use

- **Form submissions** - Show spinner in submit button during API call
- **Data fetching** - Display spinner while loading initial data or refreshing
- **Search/filtering** - Show inline spinner during live search or filter operations
- **Background tasks** - Indicate processing happening behind the scenes (calculations, exports)
- **Modal actions** - Show spinner during modal actions like saving or deleting
- **Infinite scroll** - Display spinner at bottom of list while loading more items

### When NOT to Use

- **Measurable progress** - Use Progress bars for file uploads, multi-step forms, or operations with known duration
- **Initial page load** - Use Skeleton screens to show content structure during first render
- **Long operations** - For tasks >30 seconds, use Progress bars with time estimates instead
- **Static placeholder** - Don't use spinner as permanent placeholder; show actual content or "No data" state
- **Multiple simultaneous actions** - Showing too many spinners creates anxiety; batch operations or show single global spinner

### Best Practices

- Use xs/sm spinners (16-24px) inside buttons; md+ (40px+) for standalone loading states
- Place spinner to the left of button text for better visual balance
- For full-page loading, use overlay with backdrop blur to indicate UI is temporarily disabled
- Match spinner color to button variant (white spinner in primary button, primary spinner in secondary button)
- Use dots/pulse variants for subtle loading (inline content), circle variant for prominent loading
- Auto-hide spinner after 30 seconds and show error/timeout message with retry option
- For data grids/lists, show skeleton rows instead of full-page spinner for better UX
- Avoid "spinner hell" - if >3 spinners visible simultaneously, reconsider loading strategy

### Mobile Considerations

- Use minimum 40px spinner size for standalone indicators on mobile (easier to perceive)
- For button spinners, ensure 44x44px minimum touch target remains during loading state
- Consider vibration feedback (200ms) when starting async action to confirm button press
- Use backdrop overlay spinners sparingly; prefer inline spinners to maintain context
- For slow connections, show spinner after 500ms delay to avoid flashing for fast operations
- Provide "Cancel" option for operations >10 seconds on mobile (users more impatient)
        `.trim()}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Visual size of spinner (xs: 16px for inline/button use, sm: 24px for compact areas, md: 40px default standalone, lg: 56px for emphasis, xl: 72px for full-page overlays)"},variant:{control:"select",options:["primary","secondary","success","warning","error","white"],description:"Color variant matching semantic state or button style (primary: brand color, white: for colored buttons, success: successful operations, error: error recovery, warning: cautionary processing)"},type:{control:"select",options:["default","dual","dots","pulse","bars"],description:"Animation style (default: spinning circle for standard loading, dual: double ring for modern look, dots: bouncing dots for subtle loading, pulse: pulsing circle for background tasks, bars: vertical bars for audio/media processing)"}}},d={render:e=>{const n=document.createElement("div"),a=["aural-spinner"];e.variant&&a.push(`aural-spinner--${e.variant}`),e.size&&e.size!=="md"&&a.push(`aural-spinner--${e.size}`),n.className=a.join(" "),n.setAttribute("role","status"),n.setAttribute("aria-label","Loading");const r=document.createElement("div");return r.className="aural-spinner__circle",n.appendChild(r),n},args:{size:"md",variant:"primary",type:"default"}},u={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-6)",e.style.alignItems="center",e.style.flexWrap="wrap",e.style.padding="var(--space-6)",[{type:"default",label:"Default"},{type:"dual",label:"Dual Ring"},{type:"dots",label:"Dots"},{type:"pulse",label:"Pulse"},{type:"bars",label:"Bars"}].forEach(({type:a,label:r})=>{const t=document.createElement("div");t.style.textAlign="center";const s=document.createElement("div"),o=["aural-spinner","aural-spinner--primary"];if(a!=="default"&&o.push(`aural-spinner--${a}`),s.className=o.join(" "),s.setAttribute("role","status"),s.setAttribute("aria-label","Loading"),a==="dots")for(let i=0;i<3;i++){const c=document.createElement("div");c.className="aural-spinner__dot",s.appendChild(c)}else if(a==="bars")for(let i=0;i<4;i++){const c=document.createElement("div");c.className="aural-spinner__bar",s.appendChild(c)}else{const i=document.createElement("div");i.className="aural-spinner__circle",s.appendChild(i)}const l=document.createElement("p");l.style.marginTop="var(--space-2)",l.style.fontSize="var(--text-sm)",l.style.color="var(--color-text-secondary)",l.textContent=r,t.appendChild(s),t.appendChild(l),e.appendChild(t)}),e}},m={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-6)",e.style.alignItems="center",e.style.flexWrap="wrap",e.style.padding="var(--space-6)",[{class:"xs",label:"Extra Small"},{class:"sm",label:"Small"},{class:"",label:"Medium"},{class:"lg",label:"Large"},{class:"xl",label:"Extra Large"}].forEach(({class:a,label:r})=>{const t=document.createElement("div");t.style.textAlign="center";const s=document.createElement("div"),o=["aural-spinner","aural-spinner--primary"];a&&o.push(`aural-spinner--${a}`),s.className=o.join(" ");const l=document.createElement("div");l.className="aural-spinner__circle",s.appendChild(l);const i=document.createElement("p");i.style.marginTop="var(--space-2)",i.style.fontSize="var(--text-sm)",i.style.color="var(--color-text-secondary)",i.textContent=r,t.appendChild(s),t.appendChild(i),e.appendChild(t)}),e}},b={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-6)",e.style.alignItems="center",e.style.flexWrap="wrap",e.style.padding="var(--space-6)",[{class:"primary",label:"Primary"},{class:"secondary",label:"Secondary"},{class:"success",label:"Success"},{class:"warning",label:"Warning"},{class:"error",label:"Error"}].forEach(({class:a,label:r})=>{const t=document.createElement("div");t.style.textAlign="center";const s=document.createElement("div");s.className=`aural-spinner aural-spinner--${a}`;const o=document.createElement("div");o.className="aural-spinner__circle",s.appendChild(o);const l=document.createElement("p");l.style.marginTop="var(--space-2)",l.style.fontSize="var(--text-sm)",l.style.color="var(--color-text-secondary)",l.textContent=r,t.appendChild(s),t.appendChild(l),e.appendChild(t)}),e}},y={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.gap="var(--space-4)",e.style.flexWrap="wrap",e.style.padding="var(--space-6)";const n=document.createElement("button");n.className="btn btn-primary",n.disabled=!0,n.setAttribute("aria-busy","true");const a=document.createElement("span");a.className="aural-spinner aural-spinner--xs aural-spinner--white",a.setAttribute("role","status"),a.setAttribute("aria-label","Loading");const r=document.createElement("span");r.className="aural-spinner__circle",a.appendChild(r);const t=document.createElement("span");t.textContent="Loading...",n.appendChild(a),n.appendChild(t);const s=document.createElement("button");s.className="btn btn-secondary",s.disabled=!0,s.setAttribute("aria-busy","true");const o=document.createElement("span");o.className="aural-spinner aural-spinner--xs aural-spinner--primary",o.setAttribute("role","status"),o.setAttribute("aria-label","Processing");const l=document.createElement("span");l.className="aural-spinner__circle",o.appendChild(l);const i=document.createElement("span");i.textContent="Processing",s.appendChild(o),s.appendChild(i);const c=document.createElement("button");c.className="btn btn-success",c.disabled=!0,c.setAttribute("aria-busy","true");const p=document.createElement("span");p.className="aural-spinner aural-spinner--xs aural-spinner--white",p.setAttribute("role","status"),p.setAttribute("aria-label","Saving");const E=document.createElement("span");E.className="aural-spinner__circle",p.appendChild(E);const f=document.createElement("span");return f.textContent="Saving...",c.appendChild(p),c.appendChild(f),e.appendChild(n),e.appendChild(s),e.appendChild(c),e}},g={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.gap="var(--space-6)",e.style.alignItems="center",e.style.flexWrap="wrap",e.style.padding="var(--space-6)";const n=document.createElement("div");n.className="aural-spinner aural-spinner--with-text aural-spinner--primary";const a=document.createElement("div");a.className="aural-spinner__circle",n.appendChild(a);const r=document.createElement("span");r.className="aural-spinner__text",r.textContent="Loading...",n.appendChild(r);const t=document.createElement("div");t.className="aural-spinner aural-spinner--with-text aural-spinner--success";const s=document.createElement("div");s.className="aural-spinner__circle",t.appendChild(s);const o=document.createElement("span");o.className="aural-spinner__text",o.textContent="Processing",t.appendChild(o);const l=document.createElement("div");l.className="aural-spinner aural-spinner--with-text aural-spinner--dots aural-spinner--primary";for(let c=0;c<3;c++){const p=document.createElement("div");p.className="aural-spinner__dot",l.appendChild(p)}const i=document.createElement("span");return i.className="aural-spinner__text",i.textContent="Please wait",l.appendChild(i),e.appendChild(n),e.appendChild(t),e.appendChild(l),e}},v={render:()=>{const e=document.createElement("div");e.className="card",e.style.maxWidth="400px";const n=document.createElement("div");n.className="card-content",n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.gap="var(--space-4)",n.style.padding="var(--space-8)";const a=document.createElement("div");a.className="aural-spinner aural-spinner--lg aural-spinner--primary";const r=document.createElement("div");r.className="aural-spinner__circle",a.appendChild(r);const t=document.createElement("p");return t.style.color="var(--color-text-secondary)",t.style.margin="0",t.textContent="Loading content...",n.appendChild(a),n.appendChild(t),e.appendChild(n),e}},h={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="var(--space-3)",e.style.padding="var(--space-6)";const n=document.createElement("span");n.className="aural-spinner aural-spinner--xs aural-spinner--primary";const a=document.createElement("span");a.className="aural-spinner__circle",n.appendChild(a);const r=document.createElement("span");return r.style.color="var(--color-text-secondary)",r.textContent="Fetching data from server...",e.appendChild(n),e.appendChild(r),e}},x={render:()=>{const e=document.createElement("div");e.style.position="relative",e.style.height="300px",e.style.background="var(--color-bg-primary)",e.style.borderRadius="var(--radius-md)",e.style.overflow="hidden";const n=document.createElement("div");n.style.position="absolute",n.style.inset="0",n.style.background="rgba(0, 0, 0, 0.6)",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center",n.style.backdropFilter="blur(2px)";const a=document.createElement("div");a.className="aural-spinner aural-spinner--with-text aural-spinner--xl aural-spinner--white";const r=document.createElement("div");r.className="aural-spinner__circle",a.appendChild(r);const t=document.createElement("span");return t.className="aural-spinner__text",t.textContent="Loading application...",a.appendChild(t),n.appendChild(a),e.appendChild(n),e}},C={render:()=>{const e=document.createElement("form");e.style.maxWidth="400px",e.style.padding="var(--space-6)";const n=document.createElement("div");n.style.marginBottom="var(--space-4)";const a=document.createElement("label");a.style.display="block",a.style.marginBottom="var(--space-2)",a.style.color="var(--color-text-primary)",a.textContent="Email";const r=document.createElement("input");r.type="email",r.className="input",r.placeholder="Enter your email",r.disabled=!0,n.appendChild(a),n.appendChild(r);const t=document.createElement("div");t.style.marginBottom="var(--space-4)";const s=document.createElement("label");s.style.display="block",s.style.marginBottom="var(--space-2)",s.style.color="var(--color-text-primary)",s.textContent="Password";const o=document.createElement("input");o.type="password",o.className="input",o.placeholder="Enter your password",o.disabled=!0,t.appendChild(s),t.appendChild(o);const l=document.createElement("button");l.className="btn btn-primary btn-block",l.disabled=!0;const i=document.createElement("span");i.className="aural-spinner aural-spinner--xs aural-spinner--white";const c=document.createElement("span");c.className="aural-spinner__circle",i.appendChild(c);const p=document.createElement("span");return p.textContent="Signing in...",l.appendChild(i),l.appendChild(p),e.appendChild(n),e.appendChild(t),e.appendChild(l),e}};var w,_,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const spinner = document.createElement('div');
    const classes = ['aural-spinner'];
    if (args.variant) {
      classes.push(\`aural-spinner--\${args.variant}\`);
    }
    if (args.size && args.size !== 'md') {
      classes.push(\`aural-spinner--\${args.size}\`);
    }
    spinner.className = classes.join(' ');
    spinner.setAttribute('role', 'status');
    spinner.setAttribute('aria-label', 'Loading');
    const circle = document.createElement('div');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);
    return spinner;
  },
  args: {
    size: 'md',
    variant: 'primary',
    type: 'default'
  }
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var S,L,A;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';
    const variants = [{
      type: 'default',
      label: 'Default'
    }, {
      type: 'dual',
      label: 'Dual Ring'
    }, {
      type: 'dots',
      label: 'Dots'
    }, {
      type: 'pulse',
      label: 'Pulse'
    }, {
      type: 'bars',
      label: 'Bars'
    }];
    variants.forEach(({
      type,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';
      const spinner = document.createElement('div');
      const classes = ['aural-spinner', 'aural-spinner--primary'];
      if (type !== 'default') {
        classes.push(\`aural-spinner--\${type}\`);
      }
      spinner.className = classes.join(' ');
      spinner.setAttribute('role', 'status');
      spinner.setAttribute('aria-label', 'Loading');

      // Add appropriate child elements based on type
      if (type === 'dots') {
        for (let i = 0; i < 3; i++) {
          const dot = document.createElement('div');
          dot.className = 'aural-spinner__dot';
          spinner.appendChild(dot);
        }
      } else if (type === 'bars') {
        for (let i = 0; i < 4; i++) {
          const bar = document.createElement('div');
          bar.className = 'aural-spinner__bar';
          spinner.appendChild(bar);
        }
      } else {
        const circle = document.createElement('div');
        circle.className = 'aural-spinner__circle';
        spinner.appendChild(circle);
      }
      const labelEl = document.createElement('p');
      labelEl.style.marginTop = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;
      wrapper.appendChild(spinner);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(A=(L=u.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var k,I,z;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';
    const sizes = [{
      class: 'xs',
      label: 'Extra Small'
    }, {
      class: 'sm',
      label: 'Small'
    }, {
      class: '',
      label: 'Medium'
    }, {
      class: 'lg',
      label: 'Large'
    }, {
      class: 'xl',
      label: 'Extra Large'
    }];
    sizes.forEach(({
      class: sizeClass,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';
      const spinner = document.createElement('div');
      const classes = ['aural-spinner', 'aural-spinner--primary'];
      if (sizeClass) {
        classes.push(\`aural-spinner--\${sizeClass}\`);
      }
      spinner.className = classes.join(' ');
      const circle = document.createElement('div');
      circle.className = 'aural-spinner__circle';
      spinner.appendChild(circle);
      const labelEl = document.createElement('p');
      labelEl.style.marginTop = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;
      wrapper.appendChild(spinner);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(z=(I=m.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var P,T,F;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';
    const colors = [{
      class: 'primary',
      label: 'Primary'
    }, {
      class: 'secondary',
      label: 'Secondary'
    }, {
      class: 'success',
      label: 'Success'
    }, {
      class: 'warning',
      label: 'Warning'
    }, {
      class: 'error',
      label: 'Error'
    }];
    colors.forEach(({
      class: colorClass,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';
      const spinner = document.createElement('div');
      spinner.className = \`aural-spinner aural-spinner--\${colorClass}\`;
      const circle = document.createElement('div');
      circle.className = 'aural-spinner__circle';
      spinner.appendChild(circle);
      const labelEl = document.createElement('p');
      labelEl.style.marginTop = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;
      wrapper.appendChild(spinner);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(F=(T=b.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var W,B,D;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-4)';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';

    // Primary button with white spinner
    const button1 = document.createElement('button');
    button1.className = 'btn btn-primary';
    button1.disabled = true;
    button1.setAttribute('aria-busy', 'true');
    const spinner1 = document.createElement('span');
    spinner1.className = 'aural-spinner aural-spinner--xs aural-spinner--white';
    spinner1.setAttribute('role', 'status');
    spinner1.setAttribute('aria-label', 'Loading');
    const circle1 = document.createElement('span');
    circle1.className = 'aural-spinner__circle';
    spinner1.appendChild(circle1);
    const text1 = document.createElement('span');
    text1.textContent = 'Loading...';
    button1.appendChild(spinner1);
    button1.appendChild(text1);

    // Secondary button with primary spinner
    const button2 = document.createElement('button');
    button2.className = 'btn btn-secondary';
    button2.disabled = true;
    button2.setAttribute('aria-busy', 'true');
    const spinner2 = document.createElement('span');
    spinner2.className = 'aural-spinner aural-spinner--xs aural-spinner--primary';
    spinner2.setAttribute('role', 'status');
    spinner2.setAttribute('aria-label', 'Processing');
    const circle2 = document.createElement('span');
    circle2.className = 'aural-spinner__circle';
    spinner2.appendChild(circle2);
    const text2 = document.createElement('span');
    text2.textContent = 'Processing';
    button2.appendChild(spinner2);
    button2.appendChild(text2);

    // Success button with white spinner
    const button3 = document.createElement('button');
    button3.className = 'btn btn-success';
    button3.disabled = true;
    button3.setAttribute('aria-busy', 'true');
    const spinner3 = document.createElement('span');
    spinner3.className = 'aural-spinner aural-spinner--xs aural-spinner--white';
    spinner3.setAttribute('role', 'status');
    spinner3.setAttribute('aria-label', 'Saving');
    const circle3 = document.createElement('span');
    circle3.className = 'aural-spinner__circle';
    spinner3.appendChild(circle3);
    const text3 = document.createElement('span');
    text3.textContent = 'Saving...';
    button3.appendChild(spinner3);
    button3.appendChild(text3);
    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);
    return container;
  }
}`,...(D=(B=y.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var $,G,U;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';

    // Default spinner with text
    const spinner1 = document.createElement('div');
    spinner1.className = 'aural-spinner aural-spinner--with-text aural-spinner--primary';
    const circle1 = document.createElement('div');
    circle1.className = 'aural-spinner__circle';
    spinner1.appendChild(circle1);
    const text1 = document.createElement('span');
    text1.className = 'aural-spinner__text';
    text1.textContent = 'Loading...';
    spinner1.appendChild(text1);

    // Success spinner with text
    const spinner2 = document.createElement('div');
    spinner2.className = 'aural-spinner aural-spinner--with-text aural-spinner--success';
    const circle2 = document.createElement('div');
    circle2.className = 'aural-spinner__circle';
    spinner2.appendChild(circle2);
    const text2 = document.createElement('span');
    text2.className = 'aural-spinner__text';
    text2.textContent = 'Processing';
    spinner2.appendChild(text2);

    // Dots spinner with text
    const spinner3 = document.createElement('div');
    spinner3.className = 'aural-spinner aural-spinner--with-text aural-spinner--dots aural-spinner--primary';
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('div');
      dot.className = 'aural-spinner__dot';
      spinner3.appendChild(dot);
    }
    const text3 = document.createElement('span');
    text3.className = 'aural-spinner__text';
    text3.textContent = 'Please wait';
    spinner3.appendChild(text3);
    container.appendChild(spinner1);
    container.appendChild(spinner2);
    container.appendChild(spinner3);
    return container;
  }
}`,...(U=(G=g.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var j,M,O;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '400px';
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    cardContent.style.display = 'flex';
    cardContent.style.flexDirection = 'column';
    cardContent.style.alignItems = 'center';
    cardContent.style.gap = 'var(--space-4)';
    cardContent.style.padding = 'var(--space-8)';
    const spinner = document.createElement('div');
    spinner.className = 'aural-spinner aural-spinner--lg aural-spinner--primary';
    const circle = document.createElement('div');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);
    const text = document.createElement('p');
    text.style.color = 'var(--color-text-secondary)';
    text.style.margin = '0';
    text.textContent = 'Loading content...';
    cardContent.appendChild(spinner);
    cardContent.appendChild(text);
    card.appendChild(cardContent);
    return card;
  }
}`,...(O=(M=v.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,V,H;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = 'var(--space-3)';
    container.style.padding = 'var(--space-6)';
    const spinner = document.createElement('span');
    spinner.className = 'aural-spinner aural-spinner--xs aural-spinner--primary';
    const circle = document.createElement('span');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);
    const text = document.createElement('span');
    text.style.color = 'var(--color-text-secondary)';
    text.textContent = 'Fetching data from server...';
    container.appendChild(spinner);
    container.appendChild(text);
    return container;
  }
}`,...(H=(V=h.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var X,q,J;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.height = '300px';
    container.style.background = 'var(--color-bg-primary)';
    container.style.borderRadius = 'var(--radius-md)';
    container.style.overflow = 'hidden';
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0, 0, 0, 0.6)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.backdropFilter = 'blur(2px)';
    const spinner = document.createElement('div');
    spinner.className = 'aural-spinner aural-spinner--with-text aural-spinner--xl aural-spinner--white';
    const circle = document.createElement('div');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);
    const text = document.createElement('span');
    text.className = 'aural-spinner__text';
    text.textContent = 'Loading application...';
    spinner.appendChild(text);
    overlay.appendChild(spinner);
    container.appendChild(overlay);
    return container;
  }
}`,...(J=(q=x.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Y;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const form = document.createElement('form');
    form.style.maxWidth = '400px';
    form.style.padding = 'var(--space-6)';

    // Email field
    const emailGroup = document.createElement('div');
    emailGroup.style.marginBottom = 'var(--space-4)';
    const emailLabel = document.createElement('label');
    emailLabel.style.display = 'block';
    emailLabel.style.marginBottom = 'var(--space-2)';
    emailLabel.style.color = 'var(--color-text-primary)';
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.className = 'input';
    emailInput.placeholder = 'Enter your email';
    emailInput.disabled = true;
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);

    // Password field
    const passwordGroup = document.createElement('div');
    passwordGroup.style.marginBottom = 'var(--space-4)';
    const passwordLabel = document.createElement('label');
    passwordLabel.style.display = 'block';
    passwordLabel.style.marginBottom = 'var(--space-2)';
    passwordLabel.style.color = 'var(--color-text-primary)';
    passwordLabel.textContent = 'Password';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.className = 'input';
    passwordInput.placeholder = 'Enter your password';
    passwordInput.disabled = true;
    passwordGroup.appendChild(passwordLabel);
    passwordGroup.appendChild(passwordInput);

    // Submit button
    const button = document.createElement('button');
    button.className = 'btn btn-primary btn-block';
    button.disabled = true;
    const spinner = document.createElement('span');
    spinner.className = 'aural-spinner aural-spinner--xs aural-spinner--white';
    const circle = document.createElement('span');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);
    const buttonText = document.createElement('span');
    buttonText.textContent = 'Signing in...';
    button.appendChild(spinner);
    button.appendChild(buttonText);
    form.appendChild(emailGroup);
    form.appendChild(passwordGroup);
    form.appendChild(button);
    return form;
  }
}`,...(Y=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const ee=["Default","AllVariants","AllSizes","AllColors","InButtons","WithText","LoadingCard","InlineLoading","FullPageOverlay","FormSubmission"];export{b as AllColors,m as AllSizes,u as AllVariants,d as Default,C as FormSubmission,x as FullPageOverlay,y as InButtons,h as InlineLoading,v as LoadingCard,g as WithText,ee as __namedExportsOrder,Z as default};
