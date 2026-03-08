import{c as Y}from"./createThemeGrid-DWAncU4Q.js";const K={title:"Components/Data Display/Tooltip",tags:["autodocs"],parameters:{docs:{description:{component:`
# Tooltip Component

Contextual help text that appears on hover or focus, providing additional information without cluttering the interface.

Use Tooltip to provide supplementary information, clarify icon meanings, or explain abbreviated text. Tooltips appear on hover and focus, offering help without requiring a click. They're ideal for icon buttons, form field hints, status explanations, and feature descriptions.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Basic tooltip -->
<button class="btn btn-secondary" data-tooltip="This is helpful information">
  Hover me
</button>

<!-- Tooltip with positioning -->
<button
  class="btn btn-ghost btn-icon"
  data-tooltip="Edit item"
  data-tooltip-position="bottom"
  aria-label="Edit"
>
  ✏
</button>

<!-- Colored tooltip for status -->
<span
  class="status-indicator"
  data-tooltip="Service is operational"
  data-tooltip-color="success"
  data-tooltip-position="right"
  role="status"
  aria-label="Online"
></span>

<!-- Large tooltip with more content -->
<button
  class="btn btn-ghost"
  data-tooltip="This feature allows you to export your data in multiple formats including CSV, JSON, and XML"
  data-tooltip-size="lg"
  data-tooltip-position="top"
>
  Export Options
</button>

<!-- Initialize tooltips (if using JavaScript) -->
<script>
  window.Aural?.initTooltips();
<\/script>
\`\`\`

**React:**
\`\`\`jsx
import { useEffect } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

function Tooltip({
  children,
  content,
  position = 'top',
  color,
  size = 'md',
  className = ''
}: TooltipProps) {
  useEffect(() => {
    window.Aural?.initTooltips();
  }, []);

  const dataAttrs = {
    'data-tooltip': content,
    'data-tooltip-position': position,
    ...(color && color !== 'default' && { 'data-tooltip-color': color }),
    ...(size !== 'md' && { 'data-tooltip-size': size })
  };

  // Clone child element and add tooltip attributes
  return (
    <span className={className} {...dataAttrs}>
      {children}
    </span>
  );
}

// Usage examples
function IconWithTooltip() {
  return (
    <Tooltip content="Edit item" position="bottom">
      <button className="btn btn-ghost btn-icon" aria-label="Edit">
        <EditIcon />
      </button>
    </Tooltip>
  );
}

function HelpText() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <label htmlFor="username">Username</label>
      <Tooltip content="Your unique username for login" position="right" size="sm">
        <button
          className="btn btn-ghost btn-icon btn-sm"
          aria-label="Help for username"
          style={{ width: 20, height: 20 }}
        >
          ?
        </button>
      </Tooltip>
    </div>
  );
}

function StatusIndicator({ status }: { status: 'online' | 'offline' | 'busy' }) {
  const tooltips = {
    online: { text: 'Service is operational', color: 'success' as const },
    offline: { text: 'Service offline', color: 'error' as const },
    busy: { text: 'Service experiencing high load', color: 'warning' as const }
  };

  return (
    <Tooltip content={tooltips[status].text} color={tooltips[status].color}>
      <span className={\`status-dot status-\${status}\`} role="status" aria-label={status}>
      </span>
    </Tooltip>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <span
    :data-tooltip="content"
    :data-tooltip-position="position"
    :data-tooltip-color="color !== 'default' ? color : undefined"
    :data-tooltip-size="size !== 'md' ? size : undefined"
  >
    <slot />
  </span>
</template>

<script setup>
import { onMounted } from 'vue';

defineProps({
  content: { type: String, required: true },
  position: { type: String, default: 'top' },
  color: { type: String, default: 'default' },
  size: { type: String, default: 'md' }
});

onMounted(() => {
  window.Aural?.initTooltips();
});
<\/script>

<!-- Usage examples -->
<template>
  <!-- Icon button with tooltip -->
  <Tooltip content="Edit item" position="bottom">
    <button class="btn btn-ghost btn-icon" aria-label="Edit">
      <EditIcon />
    </button>
  </Tooltip>

  <!-- Form field help -->
  <div style="display: flex; align-items: center; gap: 8px;">
    <label for="username">Username</label>
    <Tooltip content="Your unique username for login" position="right" size="sm">
      <button
        class="btn btn-ghost btn-icon btn-sm"
        aria-label="Help for username"
        style="width: 20px; height: 20px;"
      >
        ?
      </button>
    </Tooltip>
  </div>

  <!-- Status with tooltip -->
  <Tooltip content="Service is operational" color="success">
    <span class="status-dot status-online" role="status" aria-label="Online"></span>
  </Tooltip>
</template>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { onMount } from 'svelte';

  export let content = '';
  export let position = 'top';
  export let color = 'default';
  export let size = 'md';

  onMount(() => {
    window.Aural?.initTooltips();
  });

  $: dataAttrs = {
    'data-tooltip': content,
    'data-tooltip-position': position,
    ...(color !== 'default' && { 'data-tooltip-color': color }),
    ...(size !== 'md' && { 'data-tooltip-size': size })
  };
<\/script>

<span {...dataAttrs}>
  <slot />
</span>

<!-- Usage examples -->
<!-- Icon button with tooltip -->
<Tooltip content="Edit item" position="bottom">
  <button class="btn btn-ghost btn-icon" aria-label="Edit">
    <EditIcon />
  </button>
</Tooltip>

<!-- Form field help -->
<div style="display: flex; align-items: center; gap: 8px;">
  <label for="username">Username</label>
  <Tooltip content="Your unique username for login" position="right" size="sm">
    <button
      class="btn btn-ghost btn-icon btn-sm"
      aria-label="Help for username"
      style="width: 20px; height: 20px;"
    >
      ?
    </button>
  </Tooltip>
</div>

<!-- Status with tooltip -->
<Tooltip content="Service is operational" color="success">
  <span class="status-dot status-online" role="status" aria-label="Online"></span>
</Tooltip>
\`\`\`

## Accessibility

- **Show on focus**: Tooltips appear on both :hover and :focus states, ensuring keyboard accessibility
- **Not for critical info**: Never hide essential information in tooltips - they should supplement, not replace visible text
- **Icon button labels**: Always provide \`aria-label\` on icon-only buttons in addition to tooltips
- **Concise content**: Keep tooltip text to 1-2 short sentences (max ~80 characters) for quick scanning
- **Keyboard dismissal**: Tooltips automatically hide on blur/mouse leave, respecting keyboard navigation
- **ARIA role**: Tooltips automatically include appropriate ARIA attributes for screen reader compatibility
- **Focus indicators**: Parent elements maintain visible focus rings when showing tooltips
- **No pointer interaction**: Tooltips use \`pointer-events: none\` to prevent blocking clicks on nearby elements
- **Delay timings**: 200ms entrance delay prevents tooltips from appearing during cursor movement
- **Color independence**: Don't rely on tooltip color variants alone - include text explanation
- **Reduced motion**: Tooltip animations respect \`prefers-reduced-motion\` user preference

## Usage Guidelines

- **When to use:**
  - Clarifying icon button functions (edit, delete, share, favorite)
  - Explaining abbreviations or truncated text
  - Providing additional context for form fields
  - Showing full values for shortened data (dates, numbers)
  - Describing status indicators or small visual elements
  - Offering help text for complex UI controls

- **When NOT to use:**
  - Critical instructions or error messages (use Alert or inline text)
  - Long explanations (use Modal, Popover, or dedicated help pages)
  - Interactive content (tooltips can't contain buttons or links)
  - Mobile-primary interfaces (touch doesn't have hover state)
  - Information that must always be visible
  - Form validation errors (use inline error messages)

- **Best practices:**
  - **Keep it brief**: Maximum 1-2 short sentences, aim for under 80 characters
  - **Supplement, don't hide**: Tooltips add context, they don't replace clear UI
  - **Consistent positioning**: Use the same position (top/bottom) throughout similar contexts
  - **Icon clarity**: If an icon needs a tooltip to be understood, consider using text instead
  - **Avoid overlap**: Position tooltips so they don't cover related content
  - **Descriptive text**: Make tooltip content actionable and specific ("Edit this item" > "Edit")
  - **Smart defaults**: Use top position by default, adjust when near edges

- **Mobile considerations:**
  - Tooltips don't work well on touch devices (no hover state)
  - Consider showing help text inline or using a tap-to-reveal pattern on mobile
  - Avoid relying on tooltips for critical mobile navigation
  - Test with actual touch devices - some implementations show tooltip on long-press
  - For icon buttons on mobile, ensure \`aria-label\` provides context without tooltip
  - Consider using Popover (tap-to-open) for mobile instead of Tooltip

- **Positioning strategy:**
  - **Top** (default): Most common, works for buttons and inline elements
  - **Bottom**: Use when element is near top of viewport or in navigation
  - **Left/Right**: Better for narrow elements, form field help icons
  - **Auto-adjustment**: Tooltips should reposition when near viewport edges (requires JS)
  - **Arrow indicators**: Optional arrows help connect tooltip to trigger element

- **Delay and timing:**
  - **Entrance delay**: 200ms prevents tooltips during rapid cursor movement
  - **No exit delay**: Tooltips hide immediately on mouse leave for snappy UX
  - **Show duration**: No auto-hide - user controls when tooltip disappears
  - **Animation**: 200ms fade-in/out with slight transform for polish
        `.trim()}}},argTypes:{text:{control:"text",description:"Tooltip text content - keep concise (1-2 sentences, max 80 characters). Provides supplementary information on hover/focus."},position:{control:"select",options:["top","bottom","left","right"],description:"Tooltip position: top (default, most common), bottom (nav bars), left (right-aligned elements), right (form field help). Auto-adjusts near viewport edges."},color:{control:"select",options:["default","primary","success","warning","error"],description:"Color variant: default (dark background), primary (accent), success (green, confirmations), warning (yellow, cautions), error (red, alerts). Use with descriptive text, not color alone."},size:{control:"select",options:["sm","md","lg"],description:"Tooltip size: sm (200px max-width, compact info), md (320px max-width, default), lg (400px max-width, detailed explanations)"},label:{control:"text",description:"Button label text displayed in the trigger button"}}},c={render:t=>{const e=document.createElement("button");return e.className="btn btn-secondary",e.textContent=t.label||"Hover me",e.setAttribute("data-tooltip",t.text||"This is a helpful tooltip"),t.position&&t.position!=="top"&&e.setAttribute("data-tooltip-position",t.position),t.color&&t.color!=="default"&&e.setAttribute("data-tooltip-color",t.color),t.size&&t.size!=="md"&&e.setAttribute("data-tooltip-size",t.size),setTimeout(()=>{var o;(o=window.Aural)!=null&&o.initTooltips&&window.Aural.initTooltips()},0),e},args:{text:"This is a helpful tooltip",position:"top",color:"default",size:"md",label:"Hover me"}},p={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      justify-content: center;
      padding: var(--space-8) var(--space-4);
    `,[{pos:"top",label:"Top"},{pos:"bottom",label:"Bottom"},{pos:"left",label:"Left"},{pos:"right",label:"Right"}].forEach(({pos:o,label:a})=>{const s=document.createElement("button");s.className="btn btn-secondary",s.textContent=a,s.setAttribute("data-tooltip",`Tooltip on ${o}`),s.setAttribute("data-tooltip-position",o),t.appendChild(s)}),setTimeout(()=>{var o;(o=window.Aural)!=null&&o.initTooltips&&window.Aural.initTooltips()},0),t}},d={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      padding: var(--space-4);
    `,[{color:"",label:"Default",text:"Default tooltip"},{color:"primary",label:"Primary",text:"Primary tooltip"},{color:"success",label:"Success",text:"Success message"},{color:"warning",label:"Warning",text:"Warning message"},{color:"error",label:"Error",text:"Error message"}].forEach(({color:o,label:a,text:s})=>{const n=document.createElement("button");n.className="btn btn-secondary",n.textContent=a,n.setAttribute("data-tooltip",s),o&&n.setAttribute("data-tooltip-color",o),t.appendChild(n)}),setTimeout(()=>{var o;(o=window.Aural)!=null&&o.initTooltips&&window.Aural.initTooltips()},0),t}},u={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      padding: var(--space-4);
      align-items: center;
    `,[{size:"sm",label:"Small",text:"Small tooltip"},{size:"md",label:"Medium",text:"Default size tooltip"},{size:"lg",label:"Large",text:"Large tooltip with more content to display"}].forEach(({size:o,label:a,text:s})=>{const n=document.createElement("button");n.className="btn btn-secondary",n.textContent=a,n.setAttribute("data-tooltip",s),o!=="md"&&n.setAttribute("data-tooltip-size",o),t.appendChild(n)}),setTimeout(()=>{var o;(o=window.Aural)!=null&&o.initTooltips&&window.Aural.initTooltips()},0),t}},m={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      padding: var(--space-4);
    `,[{icon:"✏",tooltip:"Edit item",label:"Edit"},{icon:"🗑",tooltip:"Delete item",label:"Delete"},{icon:"↗",tooltip:"Share with others",label:"Share"},{icon:"♥",tooltip:"Add to favorites",label:"Favorite"}].forEach(({icon:o,tooltip:a,label:s})=>{const n=document.createElement("button");n.className="btn btn-ghost btn-icon",n.setAttribute("data-tooltip",a),n.setAttribute("aria-label",s),n.textContent=o,t.appendChild(n)}),setTimeout(()=>{var o;(o=window.Aural)!=null&&o.initTooltips&&window.Aural.initTooltips()},0),t}},b={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      padding: var(--space-4);
      max-width: 400px;
    `,[{id:"username",label:"Username",tooltip:"Your unique username for login"},{id:"password",label:"Password",tooltip:"Must be at least 8 characters"},{id:"email",label:"Email",tooltip:"We will send confirmation to this address"}].forEach(({id:o,label:a,tooltip:s})=>{const n=document.createElement("div");n.style.cssText=`
        display: flex;
        align-items: center;
        gap: var(--space-2);
      `;const l=document.createElement("label");l.htmlFor=o,l.textContent=a,l.style.fontWeight="var(--font-medium)";const i=document.createElement("button");i.className="btn btn-ghost btn-icon btn-sm",i.setAttribute("data-tooltip",s),i.setAttribute("data-tooltip-position","right"),i.setAttribute("aria-label",`Help for ${a}`),i.textContent="?",i.style.cssText=`
        width: 20px;
        height: 20px;
        padding: 0;
        font-size: 12px;
        border-radius: 50%;
        opacity: 0.7;
      `,n.appendChild(l),n.appendChild(i),t.appendChild(n)}),setTimeout(()=>{var o;(o=window.Aural)!=null&&o.initTooltips&&window.Aural.initTooltips()},0),t}},f={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      gap: var(--space-4);
      flex-wrap: wrap;
      padding: var(--space-4);
    `,[{name:"API Server",status:"operational",color:"var(--color-success)",tooltip:"Service is operational",tooltipColor:"success"},{name:"Database",status:"degraded",color:"var(--color-warning)",tooltip:"Degraded performance",tooltipColor:"warning"},{name:"Cache Server",status:"offline",color:"var(--color-error)",tooltip:"Service offline",tooltipColor:"error"}].forEach(({name:o,status:a,color:s,tooltip:n,tooltipColor:l})=>{const i=document.createElement("div");i.style.cssText=`
        display: flex;
        align-items: center;
        gap: var(--space-2);
      `;const r=document.createElement("span");r.style.cssText=`
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${s};
      `,r.setAttribute("data-tooltip",n),r.setAttribute("data-tooltip-color",l),r.setAttribute("role","status"),r.setAttribute("aria-label",a);const x=document.createElement("span");x.textContent=o,i.appendChild(r),i.appendChild(x),t.appendChild(i)}),setTimeout(()=>{var o;(o=window.Aural)!=null&&o.initTooltips&&window.Aural.initTooltips()},0),t}},g={render:()=>{const t=document.createElement("div");t.style.cssText=`
      padding: var(--space-4);
    `;const e=document.createElement("div");return e.style.cssText=`
      display: flex;
      gap: var(--space-2);
      padding: var(--space-2);
      background: var(--color-bg-tertiary);
      border-radius: var(--radius-md);
      width: fit-content;
    `,e.setAttribute("role","toolbar"),e.setAttribute("aria-label","Text formatting"),[{icon:"B",tooltip:"Bold",label:"Bold"},{icon:"I",tooltip:"Italic",label:"Italic"},{icon:"U",tooltip:"Underline",label:"Underline"},{icon:"≡",tooltip:"Align left",label:"Align left"},{icon:"≣",tooltip:"Align center",label:"Align center"},{icon:"≡",tooltip:"Align right",label:"Align right"}].forEach(({icon:a,tooltip:s,label:n},l)=>{if(l===3){const r=document.createElement("div");r.style.cssText=`
          width: 1px;
          background: var(--color-border);
          margin: 0 var(--space-2);
        `,e.appendChild(r)}const i=document.createElement("button");i.className="btn btn-ghost btn-icon btn-sm",i.setAttribute("data-tooltip",s),i.setAttribute("aria-label",n),i.textContent=a,i.style.fontWeight=l<3?"bold":"normal",i.style.fontStyle=l===1?"italic":"normal",i.style.textDecoration=l===2?"underline":"none",e.appendChild(i)}),t.appendChild(e),setTimeout(()=>{var a;(a=window.Aural)!=null&&a.initTooltips&&window.Aural.initTooltips()},0),t}},h={render:t=>Y(()=>{const e=document.createElement("button");return e.className="btn btn-secondary",e.textContent=t.label||"Hover me",e.setAttribute("data-tooltip",t.text||"This is a helpful tooltip"),t.position&&t.position!=="top"&&e.setAttribute("data-tooltip-position",t.position),t.color&&t.color!=="default"&&e.setAttribute("data-tooltip-color",t.color),t.size&&t.size!=="md"&&e.setAttribute("data-tooltip-size",t.size),setTimeout(()=>{var o;(o=window.Aural)!=null&&o.initTooltips&&window.Aural.initTooltips()},0),e}),args:{text:"Helpful tooltip",position:"top",color:"default",size:"md",label:"Hover me"},argTypes:{text:{control:"text",description:"Tooltip text content"},position:{control:"select",options:["top","bottom","left","right"],description:"Tooltip position"},color:{control:"select",options:["default","primary","success","warning","error"],description:"Tooltip color variant"},size:{control:"select",options:["sm","md","lg"],description:"Tooltip size"},label:{control:"text",description:"Button label"}}};var w,v,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const button = document.createElement('button');
    button.className = 'btn btn-secondary';
    button.textContent = args.label || 'Hover me';
    button.setAttribute('data-tooltip', args.text || 'This is a helpful tooltip');
    if (args.position && args.position !== 'top') {
      button.setAttribute('data-tooltip-position', args.position);
    }
    if (args.color && args.color !== 'default') {
      button.setAttribute('data-tooltip-color', args.color);
    }
    if (args.size && args.size !== 'md') {
      button.setAttribute('data-tooltip-size', args.size);
    }

    // Initialize tooltips after element is added to DOM
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);
    return button;
  },
  args: {
    text: 'This is a helpful tooltip',
    position: 'top',
    color: 'default',
    size: 'md',
    label: 'Hover me'
  }
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var y,A,E;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      justify-content: center;
      padding: var(--space-8) var(--space-4);
    \`;
    const positions = [{
      pos: 'top',
      label: 'Top'
    }, {
      pos: 'bottom',
      label: 'Bottom'
    }, {
      pos: 'left',
      label: 'Left'
    }, {
      pos: 'right',
      label: 'Right'
    }];
    positions.forEach(({
      pos,
      label
    }) => {
      const button = document.createElement('button');
      button.className = 'btn btn-secondary';
      button.textContent = label;
      button.setAttribute('data-tooltip', \`Tooltip on \${pos}\`);
      button.setAttribute('data-tooltip-position', pos);
      container.appendChild(button);
    });

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);
    return container;
  }
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var C,z,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      padding: var(--space-4);
    \`;
    const colors = [{
      color: '',
      label: 'Default',
      text: 'Default tooltip'
    }, {
      color: 'primary',
      label: 'Primary',
      text: 'Primary tooltip'
    }, {
      color: 'success',
      label: 'Success',
      text: 'Success message'
    }, {
      color: 'warning',
      label: 'Warning',
      text: 'Warning message'
    }, {
      color: 'error',
      label: 'Error',
      text: 'Error message'
    }];
    colors.forEach(({
      color,
      label,
      text
    }) => {
      const button = document.createElement('button');
      button.className = 'btn btn-secondary';
      button.textContent = label;
      button.setAttribute('data-tooltip', text);
      if (color) {
        button.setAttribute('data-tooltip-color', color);
      }
      container.appendChild(button);
    });

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);
    return container;
  }
}`,...(S=(z=d.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var I,N,B;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      padding: var(--space-4);
      align-items: center;
    \`;
    const sizes = [{
      size: 'sm',
      label: 'Small',
      text: 'Small tooltip'
    }, {
      size: 'md',
      label: 'Medium',
      text: 'Default size tooltip'
    }, {
      size: 'lg',
      label: 'Large',
      text: 'Large tooltip with more content to display'
    }];
    sizes.forEach(({
      size,
      label,
      text
    }) => {
      const button = document.createElement('button');
      button.className = 'btn btn-secondary';
      button.textContent = label;
      button.setAttribute('data-tooltip', text);
      if (size !== 'md') {
        button.setAttribute('data-tooltip-size', size);
      }
      container.appendChild(button);
    });

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);
    return container;
  }
}`,...(B=(N=u.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var D,U,k;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      padding: var(--space-4);
    \`;

    // Using unicode symbols since lucide icons require special loading
    const iconButtons = [{
      icon: '✏',
      tooltip: 'Edit item',
      label: 'Edit'
    }, {
      icon: '🗑',
      tooltip: 'Delete item',
      label: 'Delete'
    }, {
      icon: '↗',
      tooltip: 'Share with others',
      label: 'Share'
    }, {
      icon: '♥',
      tooltip: 'Add to favorites',
      label: 'Favorite'
    }];
    iconButtons.forEach(({
      icon,
      tooltip,
      label
    }) => {
      const button = document.createElement('button');
      button.className = 'btn btn-ghost btn-icon';
      button.setAttribute('data-tooltip', tooltip);
      button.setAttribute('aria-label', label);
      button.textContent = icon;
      container.appendChild(button);
    });

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);
    return container;
  }
}`,...(k=(U=m.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var H,P,M;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      padding: var(--space-4);
      max-width: 400px;
    \`;
    const formFields = [{
      id: 'username',
      label: 'Username',
      tooltip: 'Your unique username for login'
    }, {
      id: 'password',
      label: 'Password',
      tooltip: 'Must be at least 8 characters'
    }, {
      id: 'email',
      label: 'Email',
      tooltip: 'We will send confirmation to this address'
    }];
    formFields.forEach(({
      id,
      label,
      tooltip
    }) => {
      const fieldGroup = document.createElement('div');
      fieldGroup.style.cssText = \`
        display: flex;
        align-items: center;
        gap: var(--space-2);
      \`;
      const labelElement = document.createElement('label');
      labelElement.htmlFor = id;
      labelElement.textContent = label;
      labelElement.style.fontWeight = 'var(--font-medium)';
      const helpButton = document.createElement('button');
      helpButton.className = 'btn btn-ghost btn-icon btn-sm';
      helpButton.setAttribute('data-tooltip', tooltip);
      helpButton.setAttribute('data-tooltip-position', 'right');
      helpButton.setAttribute('aria-label', \`Help for \${label}\`);
      helpButton.textContent = '?';
      helpButton.style.cssText = \`
        width: 20px;
        height: 20px;
        padding: 0;
        font-size: 12px;
        border-radius: 50%;
        opacity: 0.7;
      \`;
      fieldGroup.appendChild(labelElement);
      fieldGroup.appendChild(helpButton);
      container.appendChild(fieldGroup);
    });

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);
    return container;
  }
}`,...(M=(P=b.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var F,W,L;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      gap: var(--space-4);
      flex-wrap: wrap;
      padding: var(--space-4);
    \`;
    const statuses = [{
      name: 'API Server',
      status: 'operational',
      color: 'var(--color-success)',
      tooltip: 'Service is operational',
      tooltipColor: 'success'
    }, {
      name: 'Database',
      status: 'degraded',
      color: 'var(--color-warning)',
      tooltip: 'Degraded performance',
      tooltipColor: 'warning'
    }, {
      name: 'Cache Server',
      status: 'offline',
      color: 'var(--color-error)',
      tooltip: 'Service offline',
      tooltipColor: 'error'
    }];
    statuses.forEach(({
      name,
      status,
      color,
      tooltip,
      tooltipColor
    }) => {
      const statusItem = document.createElement('div');
      statusItem.style.cssText = \`
        display: flex;
        align-items: center;
        gap: var(--space-2);
      \`;
      const indicator = document.createElement('span');
      indicator.style.cssText = \`
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: \${color};
      \`;
      indicator.setAttribute('data-tooltip', tooltip);
      indicator.setAttribute('data-tooltip-color', tooltipColor);
      indicator.setAttribute('role', 'status');
      indicator.setAttribute('aria-label', status);
      const label = document.createElement('span');
      label.textContent = name;
      statusItem.appendChild(indicator);
      statusItem.appendChild(label);
      container.appendChild(statusItem);
    });

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);
    return container;
  }
}`,...(L=(W=f.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var q,O,G;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      padding: var(--space-4);
    \`;
    const toolbar = document.createElement('div');
    toolbar.style.cssText = \`
      display: flex;
      gap: var(--space-2);
      padding: var(--space-2);
      background: var(--color-bg-tertiary);
      border-radius: var(--radius-md);
      width: fit-content;
    \`;
    toolbar.setAttribute('role', 'toolbar');
    toolbar.setAttribute('aria-label', 'Text formatting');
    const actions = [{
      icon: 'B',
      tooltip: 'Bold',
      label: 'Bold'
    }, {
      icon: 'I',
      tooltip: 'Italic',
      label: 'Italic'
    }, {
      icon: 'U',
      tooltip: 'Underline',
      label: 'Underline'
    }, {
      icon: '≡',
      tooltip: 'Align left',
      label: 'Align left'
    }, {
      icon: '≣',
      tooltip: 'Align center',
      label: 'Align center'
    }, {
      icon: '≡',
      tooltip: 'Align right',
      label: 'Align right'
    }];
    actions.forEach(({
      icon,
      tooltip,
      label
    }, index) => {
      // Add divider before align buttons
      if (index === 3) {
        const divider = document.createElement('div');
        divider.style.cssText = \`
          width: 1px;
          background: var(--color-border);
          margin: 0 var(--space-2);
        \`;
        toolbar.appendChild(divider);
      }
      const button = document.createElement('button');
      button.className = 'btn btn-ghost btn-icon btn-sm';
      button.setAttribute('data-tooltip', tooltip);
      button.setAttribute('aria-label', label);
      button.textContent = icon;
      button.style.fontWeight = index < 3 ? 'bold' : 'normal';
      button.style.fontStyle = index === 1 ? 'italic' : 'normal';
      button.style.textDecoration = index === 2 ? 'underline' : 'none';
      toolbar.appendChild(button);
    });
    container.appendChild(toolbar);

    // Initialize tooltips
    setTimeout(() => {
      if (window.Aural?.initTooltips) {
        window.Aural.initTooltips();
      }
    }, 0);
    return container;
  }
}`,...(G=(O=g.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var R,$,j;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const button = document.createElement('button');
      button.className = 'btn btn-secondary';
      button.textContent = args.label || 'Hover me';
      button.setAttribute('data-tooltip', args.text || 'This is a helpful tooltip');
      if (args.position && args.position !== 'top') {
        button.setAttribute('data-tooltip-position', args.position);
      }
      if (args.color && args.color !== 'default') {
        button.setAttribute('data-tooltip-color', args.color);
      }
      if (args.size && args.size !== 'md') {
        button.setAttribute('data-tooltip-size', args.size);
      }

      // Initialize tooltips
      setTimeout(() => {
        if (window.Aural?.initTooltips) {
          window.Aural.initTooltips();
        }
      }, 0);
      return button;
    });
  },
  args: {
    text: 'Helpful tooltip',
    position: 'top',
    color: 'default',
    size: 'md',
    label: 'Hover me'
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Tooltip text content'
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip position'
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Tooltip color variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tooltip size'
    },
    label: {
      control: 'text',
      description: 'Button label'
    }
  }
}`,...(j=($=h.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const V=["Default","Positions","Colors","Sizes","IconButtons","HelpIcons","StatusIndicators","Toolbar","ThemeComparison"];export{d as Colors,c as Default,b as HelpIcons,m as IconButtons,p as Positions,u as Sizes,f as StatusIndicators,h as ThemeComparison,g as Toolbar,V as __namedExportsOrder,K as default};
