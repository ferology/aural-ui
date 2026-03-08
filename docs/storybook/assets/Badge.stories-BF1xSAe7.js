const O={title:"Components/Badge",tags:["autodocs"],parameters:{docs:{description:{component:`
# Badge Component

Small, versatile status indicators and labels for displaying counts, statuses, and categories.

Use Badge to highlight status, categorize content, show counts, or draw attention to new or updated information. Badges are compact visual labels that add context without cluttering the interface. They work well for tags, notification counts, status indicators, and metadata display.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Basic badge -->
<span class="badge badge-primary">New</span>
<span class="badge badge-success">Active</span>
<span class="badge badge-error">Failed</span>

<!-- Badge sizes -->
<span class="badge badge-primary badge-sm">Small</span>
<span class="badge badge-primary">Default</span>
<span class="badge badge-primary badge-lg">Large</span>

<!-- Badge with icon -->
<span class="badge badge-success">
  <i data-lucide="check-circle"></i>
  Verified
</span>

<!-- Notification badge on button -->
<div style="position: relative; display: inline-flex;">
  <button class="btn btn-ghost btn-icon" aria-label="Notifications, 3 unread">
    <i data-lucide="bell"></i>
  </button>
  <span
    class="badge badge-error badge-sm"
    aria-hidden="true"
    style="position: absolute; top: -4px; right: -4px; min-width: 18px; height: 18px; border-radius: 9px; padding: 0 4px;"
  >
    3
  </span>
</div>

<!-- Content tags -->
<div>
  <span class="badge badge-secondary">JavaScript</span>
  <span class="badge badge-secondary">React</span>
  <span class="badge badge-primary badge-sm">Featured</span>
</div>
\`\`\`

**React:**
\`\`\`jsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'sm' | 'default' | 'lg';
  icon?: React.ReactNode;
}

function Badge({
  children,
  variant = 'primary',
  size = 'default',
  icon
}: BadgeProps) {
  const sizeClass = size !== 'default' ? \`badge-\${size}\` : '';
  const className = \`badge badge-\${variant} \${sizeClass}\`.trim();

  return (
    <span className={className}>
      {icon && <span className="badge-icon">{icon}</span>}
      {children}
    </span>
  );
}

// Notification Badge component
interface NotificationBadgeProps {
  count: number;
  max?: number;
  children: React.ReactNode;
}

function NotificationBadge({ count, max = 99, children }: NotificationBadgeProps) {
  const displayCount = count > max ? \`\${max}+\` : count;

  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      {children}
      {count > 0 && (
        <span
          className="badge badge-error badge-sm"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -4,
            right: -4,
            minWidth: 18,
            height: 18,
            borderRadius: 9,
            padding: '0 4px'
          }}
        >
          {displayCount}
        </span>
      )}
    </div>
  );
}

// Usage
<Badge variant="success" icon={<CheckIcon />}>Verified</Badge>
<Badge variant="warning" size="sm">Pending</Badge>

<NotificationBadge count={15}>
  <button className="btn btn-ghost btn-icon" aria-label="Notifications, 15 unread">
    <BellIcon />
  </button>
</NotificationBadge>
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <span :class="classes">
    <slot name="icon" />
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'default' }
});

const classes = computed(() => {
  const base = ['badge', \`badge-\${props.variant}\`];
  if (props.size !== 'default') base.push(\`badge-\${props.size}\`);
  return base.join(' ');
});
<\/script>

<!-- Notification Badge Component -->
<template>
  <div style="position: relative; display: inline-flex;">
    <slot />
    <span
      v-if="count > 0"
      class="badge badge-error badge-sm"
      aria-hidden="true"
      :style="badgeStyle"
    >
      {{ displayCount }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  count: { type: Number, required: true },
  max: { type: Number, default: 99 }
});

const displayCount = computed(() => {
  return props.count > props.max ? \`\${props.max}+\` : props.count;
});

const badgeStyle = {
  position: 'absolute',
  top: '-4px',
  right: '-4px',
  minWidth: '18px',
  height: '18px',
  borderRadius: '9px',
  padding: '0 4px'
};
<\/script>

<!-- Usage -->
<Badge variant="success"><template #icon><CheckIcon /></template>Verified</Badge>
<Badge variant="warning" size="sm">Pending</Badge>

<NotificationBadge :count="15">
  <button class="btn btn-ghost btn-icon" aria-label="Notifications, 15 unread">
    <BellIcon />
  </button>
</NotificationBadge>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  export let variant = 'primary';
  export let size = 'default';

  $: sizeClass = size !== 'default' ? \`badge-\${size}\` : '';
  $: className = \`badge badge-\${variant} \${sizeClass}\`.trim();
<\/script>

<span class={className}>
  <slot name="icon" />
  <slot />
</span>

<!-- Notification Badge Component -->
<script>
  export let count = 0;
  export let max = 99;

  $: displayCount = count > max ? \`\${max}+\` : count;
<\/script>

<div style="position: relative; display: inline-flex;">
  <slot />
  {#if count > 0}
    <span
      class="badge badge-error badge-sm"
      aria-hidden="true"
      style="position: absolute; top: -4px; right: -4px; min-width: 18px; height: 18px; border-radius: 9px; padding: 0 4px;"
    >
      {displayCount}
    </span>
  {/if}
</div>

<!-- Usage -->
<Badge variant="success"><CheckIcon slot="icon" />Verified</Badge>
<Badge variant="warning" size="sm">Pending</Badge>

<NotificationBadge count={15}>
  <button class="btn btn-ghost btn-icon" aria-label="Notifications, 15 unread">
    <BellIcon />
  </button>
</NotificationBadge>
\`\`\`

## Accessibility

- **Descriptive text**: Badge text should be concise but meaningful - avoid cryptic abbreviations
- **Color independence**: Never rely solely on color to convey meaning - use text labels alongside color variants
- **Notification badges**: For count badges on buttons/icons, include the count in the parent element's \`aria-label\` (e.g., "Notifications, 3 unread")
- **Hide decorative counts**: Use \`aria-hidden="true"\` on notification count badges when the count is already in the accessible label
- **Screen reader text**: Add \`.sr-only\` text for additional context when needed (e.g., \`<span class="sr-only">Status:</span><span class="badge">Active</span>\`)
- **Interactive badges**: If badges are clickable (e.g., removable tags), use \`<button>\` element with clear \`aria-label\`
- **Status indicators**: Pair status badges with icons or ARIA labels to convey meaning beyond color
- **Contrast requirements**: Badge text meets WCAG AA contrast standards (minimum 4.5:1 ratio against background)
- **Focus indicators**: If badges are interactive, ensure visible focus rings (2px solid, 2px offset)
- **Keyboard navigation**: Clickable badges must be keyboard accessible (Tab, Enter, Space)
- **Dynamic updates**: Announce badge count changes to screen readers using ARIA live regions when appropriate

## Usage Guidelines

- **When to use:**
  - Status indicators (Active, Pending, Failed, Verified)
  - Notification counts on icons and navigation items
  - Content categorization and tagging (blog tags, filters)
  - New or updated content markers
  - User roles and permissions (Admin, Member, Guest)
  - Quantifiable metadata (version numbers, item counts)

- **When NOT to use:**
  - Long text labels (use regular text or labels instead)
  - Primary call-to-action buttons (use Button component)
  - Critical information that must be seen (use Alert instead)
  - Interactive filters (use Checkbox or Toggle instead)
  - When color alone would convey meaning without text

- **Best practices:**
  - **Keep text short**: 1-2 words maximum, use abbreviations only when universally understood
  - **Consistent variants**: Use the same variant for the same meaning across your app (success = active/verified, warning = pending, error = failed)
  - **Size appropriately**: Small badges for metadata, default for primary indicators, large for emphasis
  - **Limit quantity**: Don't overuse badges - too many reduces their effectiveness
  - **Position logically**: Place badges near related content, align consistently
  - **Icons sparingly**: Only add icons when they enhance meaning (checkmark for verified, x for failed)
  - **Uppercase text**: Default uppercase styling improves scannability for short labels

- **Mobile considerations:**
  - Badges automatically scale font size for readability on small screens
  - Minimum touch target of 44x44px for interactive badges (tags, removable items)
  - Notification badges may need larger sizing (badge-lg) on mobile for visibility
  - Consider wrapping tag collections to multiple lines on narrow screens
  - Test notification badge positioning with different parent button sizes

- **Notification badge positioning:**
  - Use absolute positioning (top: -4px, right: -4px) for consistent placement
  - Add \`border: 2px solid background-color\` to create separation from parent
  - For counts >99, display as "99+" to prevent overflow
  - Ensure parent element has \`position: relative\`
  - Consider using dot badge (no text) for generic "has updates" indicators
        `.trim()}}},argTypes:{label:{control:"text",description:"Badge text content - should be short (1-2 words) and descriptive. Automatically displayed in uppercase."},variant:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"],description:"Color variant: primary (accent), secondary (neutral), success (green), warning (yellow), error (red), info (blue), neutral (gray)"},size:{control:"select",options:["sm","default","lg"],description:"Badge size: sm (10px font, compact metadata), default (12px font), lg (14px font, prominent indicators)"}}},d={render:e=>{const r=document.createElement("span"),n=["badge",`badge-${e.variant}`];return e.size==="sm"&&n.push("badge-sm"),e.size==="lg"&&n.push("badge-lg"),r.className=n.join(" "),r.textContent=e.label,r},args:{label:"Badge",variant:"primary",size:"default"}},p={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-3)",e.style.flexWrap="wrap",e.style.padding="2rem",e.style.alignItems="center",[{name:"primary",label:"Primary"},{name:"secondary",label:"Secondary"},{name:"success",label:"Success"},{name:"error",label:"Error"},{name:"warning",label:"Warning"},{name:"info",label:"Info"},{name:"neutral",label:"Neutral"}].forEach(({name:n,label:o})=>{const t=document.createElement("span");t.className=`badge badge-${n}`,t.textContent=o,e.appendChild(t)}),e}},m={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-3)",e.style.alignItems="center",e.style.padding="2rem",[{class:"badge-sm",label:"Small"},{class:"",label:"Default"},{class:"badge-lg",label:"Large"}].forEach(({class:n,label:o})=>{const t=document.createElement("span");t.className=n?`badge badge-primary ${n}`:"badge badge-primary",t.textContent=o,e.appendChild(t)}),e}},g={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-3)",e.style.flexWrap="wrap",e.style.padding="2rem",[{variant:"success",icon:"check-circle",label:"Verified"},{variant:"error",icon:"x-circle",label:"Failed"},{variant:"warning",icon:"alert-triangle",label:"Pending"},{variant:"info",icon:"info",label:"New"}].forEach(({variant:n,icon:o,label:t})=>{const s=document.createElement("span");s.className=`badge badge-${n}`;const i=document.createElement("i");i.setAttribute("data-lucide",o),i.style.width="14px",i.style.height="14px",s.appendChild(i),s.appendChild(document.createTextNode(" "+t)),e.appendChild(s)}),typeof lucide<"u"&&setTimeout(()=>lucide.createIcons(),0),e}},u={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",[{status:"success",label:"Delivered",text:"Order Status"},{status:"warning",label:"In Transit",text:"Order Status"},{status:"error",label:"Cancelled",text:"Order Status"}].forEach(({status:n,label:o,text:t})=>{const s=document.createElement("div");s.innerHTML=`
        <div style="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: var(--space-2);">${t}</div>
        <span class="badge badge-${n}">${o}</span>
      `,e.appendChild(s)}),e}},b={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-4)",[{name:"John Doe",role:"Admin",verified:!0},{name:"Jane Smith",role:"Editor",verified:!0},{name:"Bob Johnson",role:"Viewer",verified:!1}].forEach(({name:n,role:o,verified:t})=>{const s=document.createElement("div");s.style.display="flex",s.style.gap="var(--space-2)",s.style.alignItems="center";const i=document.createElement("span");i.style.color="var(--color-text-primary)",i.textContent=n;const c=document.createElement("span");if(c.className="badge badge-primary badge-sm",c.textContent=o,s.appendChild(i),s.appendChild(c),t){const l=document.createElement("span");l.className="badge badge-success badge-sm";const a=document.createElement("i");a.setAttribute("data-lucide","check"),a.style.width="12px",a.style.height="12px",l.appendChild(a),l.appendChild(document.createTextNode(" Verified")),s.appendChild(l)}e.appendChild(s)}),typeof lucide<"u"&&setTimeout(()=>lucide.createIcons(),0),e}},y={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-6)",e.style.flexWrap="wrap",e.style.alignItems="center",e.style.padding="2rem",[{icon:"bell",count:"3",variant:"error",label:"Notifications, 3 unread"},{icon:"mail",count:"12",variant:"primary",label:"Messages, 12 unread"},{icon:"shopping-cart",count:"5",variant:"success",label:"Shopping cart, 5 items"}].forEach(({icon:n,count:o,variant:t,label:s})=>{const i=document.createElement("div");i.style.position="relative",i.style.display="inline-flex";const c=document.createElement("button");c.className="btn btn-ghost btn-icon",c.setAttribute("aria-label",s);const l=document.createElement("i");l.setAttribute("data-lucide",n),c.appendChild(l);const a=document.createElement("span");a.className=`badge badge-${t} badge-sm`,a.setAttribute("aria-hidden","true"),a.style.position="absolute",a.style.top="-4px",a.style.right="-4px",a.style.minWidth="18px",a.style.height="18px",a.style.borderRadius="9px",a.style.padding="0 4px",a.style.display="flex",a.style.alignItems="center",a.style.justifyContent="center",a.style.fontSize="10px",a.textContent=o,i.appendChild(c),i.appendChild(a),e.appendChild(i)}),typeof lucide<"u"&&setTimeout(()=>lucide.createIcons(),0),e}},f={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const r=document.createElement("div");r.style.fontSize="var(--text-sm)",r.style.color="var(--color-text-tertiary)",r.style.marginBottom="var(--space-2)",r.textContent="Article Tags";const n=document.createElement("div");n.style.display="flex",n.style.gap="var(--space-2)",n.style.flexWrap="wrap",["JavaScript","React","Tutorial"].forEach(s=>{const i=document.createElement("span");i.className="badge badge-secondary",i.textContent=s,n.appendChild(i)});const t=document.createElement("span");return t.className="badge badge-primary badge-sm",t.textContent="Featured",n.appendChild(t),e.appendChild(r),e.appendChild(n),e}};var h,v,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const badge = document.createElement('span');
    const classes = ['badge', \`badge-\${args.variant}\`];
    if (args.size === 'sm') classes.push('badge-sm');
    if (args.size === 'lg') classes.push('badge-lg');
    badge.className = classes.join(' ');
    badge.textContent = args.label;
    return badge;
  },
  args: {
    label: 'Badge',
    variant: 'primary',
    size: 'default'
  }
}`,...(x=(v=d.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,E,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-3)';
    container.style.flexWrap = 'wrap';
    container.style.padding = '2rem';
    container.style.alignItems = 'center';
    const variants = [{
      name: 'primary',
      label: 'Primary'
    }, {
      name: 'secondary',
      label: 'Secondary'
    }, {
      name: 'success',
      label: 'Success'
    }, {
      name: 'error',
      label: 'Error'
    }, {
      name: 'warning',
      label: 'Warning'
    }, {
      name: 'info',
      label: 'Info'
    }, {
      name: 'neutral',
      label: 'Neutral'
    }];
    variants.forEach(({
      name,
      label
    }) => {
      const badge = document.createElement('span');
      badge.className = \`badge badge-\${name}\`;
      badge.textContent = label;
      container.appendChild(badge);
    });
    return container;
  }
}`,...(N=(E=p.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var B,w,S;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-3)';
    container.style.alignItems = 'center';
    container.style.padding = '2rem';
    const sizes = [{
      class: 'badge-sm',
      label: 'Small'
    }, {
      class: '',
      label: 'Default'
    }, {
      class: 'badge-lg',
      label: 'Large'
    }];
    sizes.forEach(({
      class: sizeClass,
      label
    }) => {
      const badge = document.createElement('span');
      badge.className = sizeClass ? \`badge badge-primary \${sizeClass}\` : 'badge badge-primary';
      badge.textContent = label;
      container.appendChild(badge);
    });
    return container;
  }
}`,...(S=(w=m.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var z,I,A;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-3)';
    container.style.flexWrap = 'wrap';
    container.style.padding = '2rem';
    const badges = [{
      variant: 'success',
      icon: 'check-circle',
      label: 'Verified'
    }, {
      variant: 'error',
      icon: 'x-circle',
      label: 'Failed'
    }, {
      variant: 'warning',
      icon: 'alert-triangle',
      label: 'Pending'
    }, {
      variant: 'info',
      icon: 'info',
      label: 'New'
    }];
    badges.forEach(({
      variant,
      icon,
      label
    }) => {
      const badge = document.createElement('span');
      badge.className = \`badge badge-\${variant}\`;
      const iconElement = document.createElement('i');
      iconElement.setAttribute('data-lucide', icon);
      iconElement.style.width = '14px';
      iconElement.style.height = '14px';
      badge.appendChild(iconElement);
      badge.appendChild(document.createTextNode(' ' + label));
      container.appendChild(badge);
    });

    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
      setTimeout(() => lucide.createIcons(), 0);
    }
    return container;
  }
}`,...(A=(I=g.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var $,T,W;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    const items = [{
      status: 'success',
      label: 'Delivered',
      text: 'Order Status'
    }, {
      status: 'warning',
      label: 'In Transit',
      text: 'Order Status'
    }, {
      status: 'error',
      label: 'Cancelled',
      text: 'Order Status'
    }];
    items.forEach(({
      status,
      label,
      text
    }) => {
      const item = document.createElement('div');
      item.innerHTML = \`
        <div style="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: var(--space-2);">\${text}</div>
        <span class="badge badge-\${status}">\${label}</span>
      \`;
      container.appendChild(item);
    });
    return container;
  }
}`,...(W=(T=u.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var k,P,R;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    const users = [{
      name: 'John Doe',
      role: 'Admin',
      verified: true
    }, {
      name: 'Jane Smith',
      role: 'Editor',
      verified: true
    }, {
      name: 'Bob Johnson',
      role: 'Viewer',
      verified: false
    }];
    users.forEach(({
      name,
      role,
      verified
    }) => {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.gap = 'var(--space-2)';
      item.style.alignItems = 'center';
      const nameSpan = document.createElement('span');
      nameSpan.style.color = 'var(--color-text-primary)';
      nameSpan.textContent = name;
      const roleBadge = document.createElement('span');
      roleBadge.className = 'badge badge-primary badge-sm';
      roleBadge.textContent = role;
      item.appendChild(nameSpan);
      item.appendChild(roleBadge);
      if (verified) {
        const verifiedBadge = document.createElement('span');
        verifiedBadge.className = 'badge badge-success badge-sm';
        const iconElement = document.createElement('i');
        iconElement.setAttribute('data-lucide', 'check');
        iconElement.style.width = '12px';
        iconElement.style.height = '12px';
        verifiedBadge.appendChild(iconElement);
        verifiedBadge.appendChild(document.createTextNode(' Verified'));
        item.appendChild(verifiedBadge);
      }
      container.appendChild(item);
    });

    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
      setTimeout(() => lucide.createIcons(), 0);
    }
    return container;
  }
}`,...(R=(P=b.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var D,V,U;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    container.style.alignItems = 'center';
    container.style.padding = '2rem';
    const notifications = [{
      icon: 'bell',
      count: '3',
      variant: 'error',
      label: 'Notifications, 3 unread'
    }, {
      icon: 'mail',
      count: '12',
      variant: 'primary',
      label: 'Messages, 12 unread'
    }, {
      icon: 'shopping-cart',
      count: '5',
      variant: 'success',
      label: 'Shopping cart, 5 items'
    }];
    notifications.forEach(({
      icon,
      count,
      variant,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.display = 'inline-flex';
      const button = document.createElement('button');
      button.className = 'btn btn-ghost btn-icon';
      button.setAttribute('aria-label', label);
      const iconElement = document.createElement('i');
      iconElement.setAttribute('data-lucide', icon);
      button.appendChild(iconElement);
      const badge = document.createElement('span');
      badge.className = \`badge badge-\${variant} badge-sm\`;
      badge.setAttribute('aria-hidden', 'true');
      badge.style.position = 'absolute';
      badge.style.top = '-4px';
      badge.style.right = '-4px';
      badge.style.minWidth = '18px';
      badge.style.height = '18px';
      badge.style.borderRadius = '9px';
      badge.style.padding = '0 4px';
      badge.style.display = 'flex';
      badge.style.alignItems = 'center';
      badge.style.justifyContent = 'center';
      badge.style.fontSize = '10px';
      badge.textContent = count;
      wrapper.appendChild(button);
      wrapper.appendChild(badge);
      container.appendChild(wrapper);
    });

    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
      setTimeout(() => lucide.createIcons(), 0);
    }
    return container;
  }
}`,...(U=(V=y.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var F,L,J;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const header = document.createElement('div');
    header.style.fontSize = 'var(--text-sm)';
    header.style.color = 'var(--color-text-tertiary)';
    header.style.marginBottom = 'var(--space-2)';
    header.textContent = 'Article Tags';
    const tagsContainer = document.createElement('div');
    tagsContainer.style.display = 'flex';
    tagsContainer.style.gap = 'var(--space-2)';
    tagsContainer.style.flexWrap = 'wrap';
    const tags = ['JavaScript', 'React', 'Tutorial'];
    tags.forEach(tag => {
      const badge = document.createElement('span');
      badge.className = 'badge badge-secondary';
      badge.textContent = tag;
      tagsContainer.appendChild(badge);
    });
    const featuredBadge = document.createElement('span');
    featuredBadge.className = 'badge badge-primary badge-sm';
    featuredBadge.textContent = 'Featured';
    tagsContainer.appendChild(featuredBadge);
    container.appendChild(header);
    container.appendChild(tagsContainer);
    return container;
  }
}`,...(J=(L=f.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};const M=["Default","AllVariants","AllSizes","WithIcons","StatusIndicators","UserRoles","NotificationBadges","ContentTags"];export{m as AllSizes,p as AllVariants,f as ContentTags,d as Default,y as NotificationBadges,u as StatusIndicators,b as UserRoles,g as WithIcons,M as __namedExportsOrder,O as default};
