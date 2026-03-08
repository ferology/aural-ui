const Q={title:"Components/Alert Banner",tags:["autodocs"],parameters:{docs:{description:{component:`
# Alert Banner Component

Prominent page-level notifications for important messages, system-wide announcements, and critical updates that require immediate attention.

Use Alert Banners for persistent, high-priority messages that affect the entire page or application (system maintenance, cookie notices, feature announcements). For temporary, action-specific feedback, use **Snackbars** instead.

Alert Banners remain visible until dismissed by the user or removed programmatically, making them ideal for information users should acknowledge before proceeding.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Basic Alert -->
<div class="aural-alert-banner aural-alert-banner--info" role="alert">
  <i data-lucide="info" style="width: 20px; height: 20px;"></i>
  <div class="aural-alert-banner__content">
    <div class="aural-alert-banner__title">Information</div>
    <div class="aural-alert-banner__message">
      This is an informational alert message.
    </div>
  </div>
  <button
    class="aural-alert-banner__close"
    aria-label="Close alert"
    onclick="this.parentElement.remove()"
  >
    <i data-lucide="x" style="width: 16px; height: 16px;"></i>
  </button>
</div>

<!-- Error Alert with Action -->
<div class="aural-alert-banner aural-alert-banner--error" role="alert">
  <i data-lucide="alert-circle" style="width: 20px; height: 20px;"></i>
  <div class="aural-alert-banner__content">
    <div class="aural-alert-banner__title">Upload Failed</div>
    <div class="aural-alert-banner__message">
      The file could not be uploaded. Please check your connection.
    </div>
    <div class="aural-alert-banner__actions">
      <button class="aural-alert-banner__action aural-alert-banner__action--primary">
        Retry Upload
      </button>
      <button class="aural-alert-banner__action">
        Cancel
      </button>
    </div>
  </div>
  <button class="aural-alert-banner__close" aria-label="Close">
    <i data-lucide="x" style="width: 16px; height: 16px;"></i>
  </button>
</div>

<script>
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
<\/script>
\`\`\`

**React:**
\`\`\`jsx
import { X, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { useState } from 'react';

function AlertBanner({ variant = 'info', title, message, closable = true, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const icons = {
    info: <Info className="w-5 h-5" />,
    success: <CheckCircle className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div
      className={\`aural-alert-banner aural-alert-banner--\${variant}\`}
      role="alert"
    >
      {icons[variant]}
      <div className="aural-alert-banner__content">
        <div className="aural-alert-banner__title">{title}</div>
        <div className="aural-alert-banner__message">{message}</div>
      </div>
      {closable && (
        <button
          className="aural-alert-banner__close"
          aria-label="Close alert"
          onClick={handleClose}
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

// Usage
function App() {
  return (
    <AlertBanner
      variant="success"
      title="Changes Saved"
      message="Your settings have been updated successfully."
    />
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div
    v-if="isVisible"
    :class="[\`aural-alert-banner aural-alert-banner--\${variant}\`]"
    role="alert"
  >
    <component :is="icon" class="w-5 h-5" />
    <div class="aural-alert-banner__content">
      <div class="aural-alert-banner__title">{{ title }}</div>
      <div class="aural-alert-banner__message">{{ message }}</div>
    </div>
    <button
      v-if="closable"
      class="aural-alert-banner__close"
      aria-label="Close alert"
      @click="handleClose"
    >
      <X class="w-4 h-4" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Info, CheckCircle, AlertTriangle, AlertCircle, X } from 'lucide-vue-next';

const props = defineProps({
  variant: { type: String, default: 'info' },
  title: String,
  message: String,
  closable: { type: Boolean, default: true }
});

const emit = defineEmits(['close']);
const isVisible = ref(true);

const iconMap = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle
};

const icon = iconMap[props.variant];

const handleClose = () => {
  isVisible.value = false;
  emit('close');
};
<\/script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { Info, CheckCircle, AlertTriangle, AlertCircle, X } from 'lucide-svelte';

  export let variant = 'info';
  export let title;
  export let message;
  export let closable = true;

  let isVisible = true;

  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle
  };

  function handleClose() {
    isVisible = false;
  }
<\/script>

{#if isVisible}
  <div class="aural-alert-banner aural-alert-banner--{variant}" role="alert">
    <svelte:component this={icons[variant]} class="w-5 h-5" />
    <div class="aural-alert-banner__content">
      <div class="aural-alert-banner__title">{title}</div>
      <div class="aural-alert-banner__message">{message}</div>
    </div>
    {#if closable}
      <button
        class="aural-alert-banner__close"
        aria-label="Close alert"
        on:click={handleClose}
      >
        <X class="w-4 h-4" />
      </button>
    {/if}
  </div>
{/if}
\`\`\`

## Accessibility

1. **ARIA role="alert"** - Use \`role="alert"\` for error/warning alerts to announce immediately; use \`role="status"\` for informational updates to announce politely without interruption
2. **Live regions** - Dynamically inserted alerts are automatically announced to screen readers via implicit \`aria-live="assertive"\` (for role="alert") or \`aria-live="polite"\` (for role="status")
3. **Close button labeling** - Always provide \`aria-label="Close alert"\` or \`aria-label="Dismiss notification"\` on close buttons for screen reader context
4. **Keyboard navigation** - Ensure close button is keyboard-focusable (native \`<button>\`) and activatable with Enter/Space
5. **Focus management** - When dismissing critical alerts, move focus to a logical next element (form field, next alert, or main content)
6. **Color independence** - Never rely solely on color to convey meaning; always pair severity colors with icons and explicit text (error icon + "Error" label)
7. **Sufficient contrast** - Maintain minimum 4.5:1 contrast ratio for text, 3:1 for icons/borders (WCAG AA)
8. **Icon semantics** - Include visually-hidden text like \`<span class="sr-only">Error:</span>\` before titles for screen reader users who can't perceive icons
9. **Action button clarity** - Label action buttons explicitly ("Retry Upload", "View Details") rather than ambiguous labels ("OK", "Click Here")
10. **Persistent visibility** - For critical alerts (system maintenance, session expiry), prevent auto-dismiss or require explicit user acknowledgment
11. **Reduced motion** - Respect \`prefers-reduced-motion\` by disabling slide-in/fade animations
12. **Mobile touch targets** - Ensure minimum 44×44px touch target size for close buttons and action buttons
13. **Sticky positioning** - For fixed-top/bottom alerts, ensure they don't obscure critical content (forms, navigation) or prevent scrolling
14. **Multiple alerts** - When stacking alerts, announce each individually and provide "Dismiss all" option for screen reader efficiency

## Usage Guidelines

### When to Use

- **System-wide announcements** - Maintenance windows, service disruptions, feature launches affecting all users
- **Critical errors** - Authentication failures, connection losses, payment processing errors requiring immediate attention
- **Cookie/consent notices** - GDPR banners, analytics opt-in, terms of service updates
- **Session warnings** - "Your session will expire in 5 minutes" with action to extend
- **Breaking changes** - "This feature will be deprecated on [date]" with migration path
- **Feature promotions** - Limited-time offers, new feature announcements, onboarding tips

### When NOT to Use

- **Form validation errors** - Use inline field-level errors instead (error text below input)
- **Action confirmation** - Use Snackbars for "Changes saved", "Item deleted" feedback
- **Temporary notifications** - Use Snackbars or Toasts for auto-dismissing messages
- **Long-form content** - Use Modals or dedicated pages for content exceeding 2-3 sentences
- **Per-item feedback** - Use inline status indicators for individual list items or table rows
- **Progress updates** - Use Progress bars or Spinners for loading states

### Best Practices

- Keep titles to 3-5 words (e.g., "Upload Failed", "Session Expiring")
- Limit messages to 1-2 sentences; link to help docs for details
- Place dismissible alerts at top of page (below header), non-dismissible at very top
- Use semantic colors sparingly: red (error), yellow (warning), blue (info), green (success)
- Provide actionable buttons when possible ("Retry", "Learn More", "Extend Session")
- For system-wide alerts, coordinate with support team to minimize surprise/confusion
- Never stack more than 3 alerts simultaneously; prioritize by severity
- Auto-dismiss low-priority info alerts after 10-15 seconds to reduce clutter

### Mobile Considerations

- Full-width banners work better than inline cards on narrow screens
- Place close button in top-right corner for thumb-reach accessibility
- Stack action buttons vertically on mobile (vs. horizontal on desktop)
- Consider bottom-fixed positioning for persistent alerts to avoid header crowding
- Reduce padding/font-size slightly to fit more content on small screens
- Allow swipe-to-dismiss gesture for touch-friendly interaction
        `.trim()}}},argTypes:{variant:{control:"select",options:["info","success","warning","error"],description:'Semantic severity level that controls icon, color scheme, and ARIA live region behavior (info/success use aria-live="polite", warning/error use role="alert" for immediate announcement)'},title:{control:"text",description:"Brief alert heading (3-5 words recommended) that summarizes the message type or action required"},message:{control:"text",description:"Detailed alert content (1-2 sentences) explaining the situation and next steps; use plain language and avoid technical jargon"},closable:{control:"boolean",description:"Whether to show dismissal button (X); set to false for critical non-dismissible alerts like system maintenance or session expiry warnings"}}},J={info:"info",success:"check-circle",warning:"alert-triangle",error:"alert-circle"},r={render:e=>{const a=document.createElement("div");a.className=`aural-alert-banner aural-alert-banner--${e.variant}`,a.setAttribute("role","alert");let t=`<i data-lucide="${J[e.variant]}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>`;return t+='<div class="aural-alert-banner__content">',e.title&&(t+=`<div class="aural-alert-banner__title">${e.title}</div>`),t+=`<div class="aural-alert-banner__message">${e.message}</div>`,t+="</div>",e.closable&&(t+=`<button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>`),a.innerHTML=t,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),a},args:{variant:"info",title:"Information",message:"This is an informational alert message.",closable:!0}},s={...r,args:{variant:"success",title:"Success",message:"Your operation completed successfully!",closable:!0}},l={...r,args:{variant:"warning",title:"Warning",message:"Please review before proceeding.",closable:!0}},o={...r,args:{variant:"error",title:"Error",message:"Something went wrong. Please try again.",closable:!0}},c={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem",e.style.maxWidth="600px",[{variant:"info",title:"Info",message:"This is an informational message."},{variant:"success",title:"Success",message:"Operation completed successfully!"},{variant:"warning",title:"Warning",message:"Please be careful with this action."},{variant:"error",title:"Error",message:"An error occurred during processing."}].forEach(({variant:t,title:v,message:f})=>{const n=document.createElement("div");n.className=`aural-alert-banner aural-alert-banner--${t}`,n.setAttribute("role","alert"),n.innerHTML=`
        <i data-lucide="${J[t]}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
        <div class="aural-alert-banner__content">
          <div class="aural-alert-banner__title">${v}</div>
          <div class="aural-alert-banner__message">${f}</div>
        </div>
        <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      `,e.appendChild(n)}),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}},d={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem",e.style.maxWidth="600px",[{variant:"info",icon:"megaphone",title:"New feature available",message:"Check out our latest updates!"},{variant:"success",icon:"check-circle",title:"Payment successful",message:"Your payment has been processed."},{variant:"warning",icon:"alert-triangle",title:"Session expiring",message:"Your session will expire in 5 minutes."},{variant:"error",icon:"wifi-off",title:"Upload failed",message:"The file could not be uploaded."}].forEach(({variant:t,icon:v,title:f,message:n})=>{const i=document.createElement("div");i.className=`aural-alert-banner aural-alert-banner--${t}`,i.setAttribute("role","alert"),i.innerHTML=`
        <i data-lucide="${v}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
        <div class="aural-alert-banner__content">
          <div class="aural-alert-banner__title">${f}</div>
          <div class="aural-alert-banner__message">${n}</div>
        </div>
        <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      `,e.appendChild(i)}),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}},u={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const a=document.createElement("div");return a.className="aural-alert-banner aural-alert-banner--info",a.setAttribute("role","alert"),a.innerHTML=`
      <i data-lucide="megaphone" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Update Available</div>
        <div class="aural-alert-banner__message">A new version of the app is available. Update now to get the latest features.</div>
      </div>
      <button class="btn btn-sm btn-primary" style="margin-left: auto;">Update Now</button>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    `,e.appendChild(a),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}},m={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const a=document.createElement("div");return a.className="aural-alert-banner aural-alert-banner--success",a.setAttribute("role","alert"),a.innerHTML=`
      <i data-lucide="check-circle" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__message">Changes saved successfully!</div>
      </div>
    `,e.appendChild(a),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}},p={render:()=>{const e=document.createElement("div");e.style.padding="0";const a=document.createElement("div");return a.className="aural-alert-banner aural-alert-banner--warning",a.setAttribute("role","alert"),a.style.borderRadius="0",a.style.borderLeft="none",a.style.borderRight="none",a.style.borderTop="none",a.innerHTML=`
      <i data-lucide="alert-triangle" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__message">
          Special offer! Get 50% off on all premium plans.
          <a href="#" style="color: inherit; text-decoration: underline; margin-left: 0.5rem;">Learn more</a>
        </div>
      </div>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    `,e.appendChild(a),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}},b={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const a=document.createElement("div");return a.className="aural-alert-banner aural-alert-banner--info",a.setAttribute("role","alert"),a.innerHTML=`
      <i data-lucide="info" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Dismissible Alert</div>
        <div class="aural-alert-banner__message">This alert can be dismissed by clicking the X.</div>
      </div>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.style.display='none'">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    `,e.appendChild(a),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}},h={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const a=document.createElement("div");return a.className="aural-alert-banner aural-alert-banner--error",a.setAttribute("role","alert"),a.innerHTML=`
      <i data-lucide="wifi-off" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Connection Lost</div>
        <div class="aural-alert-banner__message">
          Unable to reach the server.
          <a href="#" style="color: inherit; text-decoration: underline;">Check your connection</a>
          or try again later.
        </div>
      </div>
    `,e.appendChild(a),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}};var g,y,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const alert = document.createElement('div');
    alert.className = \`aural-alert-banner aural-alert-banner--\${args.variant}\`;
    alert.setAttribute('role', 'alert');
    let content = \`<i data-lucide="\${iconMap[args.variant]}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>\`;
    content += \`<div class="aural-alert-banner__content">\`;
    if (args.title) {
      content += \`<div class="aural-alert-banner__title">\${args.title}</div>\`;
    }
    content += \`<div class="aural-alert-banner__message">\${args.message}</div>\`;
    content += \`</div>\`;
    if (args.closable) {
      content += \`<button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>\`;
    }
    alert.innerHTML = content;
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return alert;
  },
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an informational alert message.',
    closable: true
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var _,w,C;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Info,
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your operation completed successfully!',
    closable: true
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,E,A;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Info,
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please review before proceeding.',
    closable: true
  }
}`,...(A=(E=l.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var T,S,I;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Info,
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    closable: true
  }
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var N,L,M;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';
    container.style.maxWidth = '600px';
    const alerts = [{
      variant: 'info',
      title: 'Info',
      message: 'This is an informational message.'
    }, {
      variant: 'success',
      title: 'Success',
      message: 'Operation completed successfully!'
    }, {
      variant: 'warning',
      title: 'Warning',
      message: 'Please be careful with this action.'
    }, {
      variant: 'error',
      title: 'Error',
      message: 'An error occurred during processing.'
    }];
    alerts.forEach(({
      variant,
      title,
      message
    }) => {
      const alert = document.createElement('div');
      alert.className = \`aural-alert-banner aural-alert-banner--\${variant}\`;
      alert.setAttribute('role', 'alert');
      alert.innerHTML = \`
        <i data-lucide="\${iconMap[variant]}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
        <div class="aural-alert-banner__content">
          <div class="aural-alert-banner__title">\${title}</div>
          <div class="aural-alert-banner__message">\${message}</div>
        </div>
        <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      \`;
      container.appendChild(alert);
    });
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var W,U,$;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';
    container.style.maxWidth = '600px';
    const alerts = [{
      variant: 'info',
      icon: 'megaphone',
      title: 'New feature available',
      message: 'Check out our latest updates!'
    }, {
      variant: 'success',
      icon: 'check-circle',
      title: 'Payment successful',
      message: 'Your payment has been processed.'
    }, {
      variant: 'warning',
      icon: 'alert-triangle',
      title: 'Session expiring',
      message: 'Your session will expire in 5 minutes.'
    }, {
      variant: 'error',
      icon: 'wifi-off',
      title: 'Upload failed',
      message: 'The file could not be uploaded.'
    }];
    alerts.forEach(({
      variant,
      icon,
      title,
      message
    }) => {
      const alert = document.createElement('div');
      alert.className = \`aural-alert-banner aural-alert-banner--\${variant}\`;
      alert.setAttribute('role', 'alert');
      alert.innerHTML = \`
        <i data-lucide="\${icon}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
        <div class="aural-alert-banner__content">
          <div class="aural-alert-banner__title">\${title}</div>
          <div class="aural-alert-banner__message">\${message}</div>
        </div>
        <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      \`;
      container.appendChild(alert);
    });
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...($=(U=d.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var P,H,V;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const alert = document.createElement('div');
    alert.className = 'aural-alert-banner aural-alert-banner--info';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = \`
      <i data-lucide="megaphone" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Update Available</div>
        <div class="aural-alert-banner__message">A new version of the app is available. Update now to get the latest features.</div>
      </div>
      <button class="btn btn-sm btn-primary" style="margin-left: auto;">Update Now</button>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    \`;
    container.appendChild(alert);
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(V=(H=u.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var D,R,B;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const alert = document.createElement('div');
    alert.className = 'aural-alert-banner aural-alert-banner--success';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = \`
      <i data-lucide="check-circle" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__message">Changes saved successfully!</div>
      </div>
    \`;
    container.appendChild(alert);
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var F,X,Y;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '0';
    const banner = document.createElement('div');
    banner.className = 'aural-alert-banner aural-alert-banner--warning';
    banner.setAttribute('role', 'alert');
    banner.style.borderRadius = '0';
    banner.style.borderLeft = 'none';
    banner.style.borderRight = 'none';
    banner.style.borderTop = 'none';
    banner.innerHTML = \`
      <i data-lucide="alert-triangle" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__message">
          Special offer! Get 50% off on all premium plans.
          <a href="#" style="color: inherit; text-decoration: underline; margin-left: 0.5rem;">Learn more</a>
        </div>
      </div>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    \`;
    container.appendChild(banner);
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var z,G,O;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const alert = document.createElement('div');
    alert.className = 'aural-alert-banner aural-alert-banner--info';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = \`
      <i data-lucide="info" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Dismissible Alert</div>
        <div class="aural-alert-banner__message">This alert can be dismissed by clicking the X.</div>
      </div>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.style.display='none'">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    \`;
    container.appendChild(alert);
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(O=(G=b.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var q,K,j;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const alert = document.createElement('div');
    alert.className = 'aural-alert-banner aural-alert-banner--error';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = \`
      <i data-lucide="wifi-off" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Connection Lost</div>
        <div class="aural-alert-banner__message">
          Unable to reach the server.
          <a href="#" style="color: inherit; text-decoration: underline;">Check your connection</a>
          or try again later.
        </div>
      </div>
    \`;
    container.appendChild(alert);
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(j=(K=h.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};const Z=["Info","Success","Warning","Error","AllVariants","WithIcon","WithActions","SimpleMessage","Banner","Dismissible","WithLink"];export{c as AllVariants,p as Banner,b as Dismissible,o as Error,r as Info,m as SimpleMessage,s as Success,l as Warning,u as WithActions,d as WithIcon,h as WithLink,Z as __namedExportsOrder,Q as default};
