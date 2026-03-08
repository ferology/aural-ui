const aa={title:"Components/Avatar",tags:["autodocs"],parameters:{docs:{description:{component:`
# Avatar Component

User profile images and visual identifiers with support for images, initials, status indicators, and interactive states.

Use Avatar to represent users, teams, or entities visually throughout your application. Avatars provide instant visual recognition in lists, comments, headers, and notifications. They support graceful fallback from images to initials when images fail to load or aren't available.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Avatar with image -->
<div class="avatar">
  <img src="https://i.pravatar.cc/150?img=1" alt="John Doe">
</div>

<!-- Avatar with initials fallback -->
<div class="avatar">
  <span>JD</span>
</div>

<!-- Avatar with status indicator -->
<div class="avatar avatar-status-online">
  <img src="https://i.pravatar.cc/150?img=1" alt="Jane Smith">
</div>

<!-- Avatar group (team display) -->
<div class="avatar-group">
  <div class="avatar"><img src="user1.jpg" alt="User 1"></div>
  <div class="avatar"><img src="user2.jpg" alt="User 2"></div>
  <div class="avatar"><img src="user3.jpg" alt="User 3"></div>
  <div class="avatar"><span>+5</span></div>
</div>

<!-- Clickable avatar button -->
<button class="avatar avatar-clickable" aria-label="View profile of John Doe">
  <img src="https://i.pravatar.cc/150?img=1" alt="">
</button>
\`\`\`

**React:**
\`\`\`jsx
import { useState } from 'react';

interface AvatarProps {
  src?: string;
  initials?: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'busy' | 'away';
  clickable?: boolean;
  onClick?: () => void;
}

function Avatar({
  src,
  initials,
  alt,
  size = 'md',
  status,
  clickable = false,
  onClick
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);

  const sizeClass = size !== 'md' ? \`avatar-\${size}\` : '';
  const statusClass = status ? \`avatar-status-\${status}\` : '';
  const clickableClass = clickable ? 'avatar-clickable' : '';
  const className = \`avatar \${sizeClass} \${statusClass} \${clickableClass}\`.trim();

  const Component = clickable ? 'button' : 'div';

  return (
    <Component
      className={className}
      onClick={clickable ? onClick : undefined}
      aria-label={clickable ? \`View profile of \${alt}\` : undefined}
    >
      {src && !imgError ? (
        <img
          src={src}
          alt={clickable ? '' : alt}
          onError={() => setImgError(true)}
        />
      ) : (
        <span>{initials || alt.substring(0, 2).toUpperCase()}</span>
      )}
    </Component>
  );
}

// Avatar Group component
function AvatarGroup({ children, max = 5 }) {
  const avatars = Array.isArray(children) ? children : [children];
  const visible = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div className="avatar-group">
      {visible}
      {remaining > 0 && (
        <div className="avatar">
          <span>+{remaining}</span>
        </div>
      )}
    </div>
  );
}

// Usage
<Avatar src="https://i.pravatar.cc/150?img=1" alt="John Doe" status="online" />
<Avatar initials="JD" alt="John Doe" size="lg" clickable onClick={() => console.log('Clicked')} />

<AvatarGroup max={3}>
  <Avatar src="user1.jpg" alt="User 1" />
  <Avatar src="user2.jpg" alt="User 2" />
  <Avatar src="user3.jpg" alt="User 3" />
  <Avatar src="user4.jpg" alt="User 4" />
  <Avatar src="user5.jpg" alt="User 5" />
</AvatarGroup>
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <component
    :is="clickable ? 'button' : 'div'"
    :class="classes"
    :aria-label="clickable ? \`View profile of \${alt}\` : undefined"
    @click="clickable ? $emit('click') : undefined"
  >
    <img
      v-if="src && !imgError"
      :src="src"
      :alt="clickable ? '' : alt"
      @error="imgError = true"
    />
    <span v-else>{{ displayInitials }}</span>
  </component>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  src: String,
  initials: String,
  alt: { type: String, required: true },
  size: { type: String, default: 'md' },
  status: String,
  clickable: { type: Boolean, default: false }
});

defineEmits(['click']);

const imgError = ref(false);

const classes = computed(() => {
  const base = ['avatar'];
  if (props.size !== 'md') base.push(\`avatar-\${props.size}\`);
  if (props.status) base.push(\`avatar-status-\${props.status}\`);
  if (props.clickable) base.push('avatar-clickable');
  return base.join(' ');
});

const displayInitials = computed(() => {
  return props.initials || props.alt.substring(0, 2).toUpperCase();
});
<\/script>

<!-- Usage -->
<Avatar src="https://i.pravatar.cc/150?img=1" alt="John Doe" status="online" />
<Avatar initials="JD" alt="John Doe" size="lg" :clickable="true" @click="viewProfile" />

<!-- Avatar Group -->
<div class="avatar-group">
  <Avatar v-for="user in users" :key="user.id" :src="user.avatar" :alt="user.name" />
  <div v-if="remainingCount > 0" class="avatar">
    <span>+{{ remainingCount }}</span>
  </div>
</div>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  export let src = '';
  export let initials = '';
  export let alt = '';
  export let size = 'md';
  export let status = null;
  export let clickable = false;

  let imgError = false;

  $: sizeClass = size !== 'md' ? \`avatar-\${size}\` : '';
  $: statusClass = status ? \`avatar-status-\${status}\` : '';
  $: clickableClass = clickable ? 'avatar-clickable' : '';
  $: className = \`avatar \${sizeClass} \${statusClass} \${clickableClass}\`.trim();
  $: displayInitials = initials || alt.substring(0, 2).toUpperCase();
<\/script>

<svelte:element
  this={clickable ? 'button' : 'div'}
  class={className}
  aria-label={clickable ? \`View profile of \${alt}\` : undefined}
  on:click
>
  {#if src && !imgError}
    <img {src} alt={clickable ? '' : alt} on:error={() => imgError = true} />
  {:else}
    <span>{displayInitials}</span>
  {/if}
</svelte:element>

<!-- Usage -->
<Avatar src="https://i.pravatar.cc/150?img=1" alt="John Doe" status="online" />
<Avatar initials="JD" alt="John Doe" size="lg" clickable on:click={viewProfile} />

<!-- Avatar Group -->
<div class="avatar-group">
  {#each users as user}
    <Avatar src={user.avatar} alt={user.name} />
  {/each}
  {#if remainingCount > 0}
    <div class="avatar"><span>+{remainingCount}</span></div>
  {/if}
</div>
\`\`\`

## Accessibility

- **Image alternative text**: Provide descriptive \`alt\` text for avatar images identifying the person/entity. For decorative avatars in clickable buttons, use empty alt (\`alt=""\`) and provide \`aria-label\` on the button instead
- **Initials fallback**: Always provide initials or generate them from names to handle image loading failures gracefully
- **Status indicators**: Status colors alone aren't sufficient - pair with text labels for screen reader users (\`<span class="sr-only">Online</span>\`)
- **Clickable avatars**: Use \`<button>\` element (not div) for interactive avatars with clear \`aria-label\` like "View profile of John Doe"
- **Touch targets**: Clickable avatars automatically meet 44x44px minimum touch target size on touch devices through CSS
- **Focus visibility**: Focus rings (2px solid primary color, 2px offset) are visible on clickable avatars for keyboard navigation
- **Avatar groups**: Provide group context with ARIA labels (\`<div class="avatar-group" aria-label="Team members">\`)
- **Reduced motion**: Hover and click animations respect \`prefers-reduced-motion\` setting
- **Color contrast**: Initials text meets WCAG AA contrast requirements (4.5:1) against background colors
- **Status semantics**: Use semantic HTML or ARIA to convey status meaning, not just visual indicators
- **Keyboard interaction**: Clickable avatars respond to Enter and Space keys automatically when using \`<button>\` element

## Usage Guidelines

- **When to use:**
  - User profiles in headers, navigation, and account menus
  - Comment threads and discussion lists to identify authors
  - Team member lists and collaboration tools
  - User directories and people pickers
  - Activity feeds and notification centers
  - Chat interfaces and messaging apps

- **When NOT to use:**
  - Logo or brand images (use \`<img>\` directly)
  - Product thumbnails (use Card with image instead)
  - Decorative images without user context
  - Large hero images (avatars are for small profile pictures only)

- **Best practices:**
  - **Initials generation**: Extract first and last name initials (JD for John Doe), fallback to first two characters
  - **Image optimization**: Use appropriately sized images (150x150px for default, 80x80px for small, 240x240px for large)
  - **Consistent sizing**: Use the same avatar size throughout a single context (all comments, all list items)
  - **Status indicators**: Use sparingly - only when real-time presence matters (chat, collaboration tools)
  - **Group limits**: Show 3-5 avatars in groups, then "+N" for remaining count to prevent overflow
  - **Loading states**: Show initials immediately while image loads to prevent layout shift
  - **Color variety**: Use consistent background colors for initials or generate colors from user names for variety

- **Mobile considerations:**
  - Avatar sizes automatically adjust to be tappable (min 44x44px) on touch devices
  - Consider using larger sizes (md or lg) on mobile for better visibility
  - Avatar groups may wrap to multiple rows on narrow screens - test responsiveness
  - Status indicators are larger (10x10px minimum) on touch devices for visibility
  - Test image loading on slow networks - initials should appear immediately

- **Image fallback strategy:**
  1. Try to load provided image URL
  2. On error, show initials from \`initials\` prop
  3. If no initials, generate from first 2 characters of name/alt text
  4. If no name, show generic user icon (implement via CSS background)
  5. Always handle \`onerror\` event to prevent broken image icons
        `.trim()}}},argTypes:{src:{control:"text",description:"Image source URL - should be square, at least 150x150px for default size. Falls back to initials on load error."},initials:{control:"text",description:'Initials to display when image is unavailable (e.g., "JD" for John Doe). Auto-generated from alt text if not provided.'},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Avatar size: xs (24px, compact lists), sm (32px, dense UI), md (40px, default), lg (56px, profiles), xl (80px, profile pages)"},status:{control:"select",options:[null,"online","offline","busy","away"],description:"Status indicator dot: online (green), offline (gray), busy (red), away (yellow). Displayed as colored dot in bottom-right corner."},clickable:{control:"boolean",description:"Makes avatar interactive with hover/focus states and cursor pointer. Should be used with button element and aria-label."}}},d={render:a=>{const s=a.size&&a.size!=="md"?` avatar-${a.size}`:"",n=a.status?` avatar-status-${a.status}`:"",r=a.clickable?" avatar-clickable":"",e=document.createElement(a.clickable?"button":"div");return e.className=`avatar${s}${n}${r}`,a.clickable&&e.setAttribute("aria-label","View profile"),a.src?e.innerHTML=`<img src="${a.src}" alt="${a.initials?a.initials+" avatar":"User avatar"}">`:a.initials?e.innerHTML=`<span>${a.initials}</span>`:e.innerHTML="<span>JD</span>",e},args:{src:"https://i.pravatar.cc/150?img=1",size:"md",status:null,clickable:!1}},m={render:()=>{const a=document.createElement("div");return a.style.display="flex",a.style.alignItems="center",a.style.gap="var(--space-6)",a.style.flexWrap="wrap",["JD","AB","CD","EF"].forEach(n=>{const r=document.createElement("div");r.className="avatar",r.innerHTML=`<span>${n}</span>`,a.appendChild(r)}),a}},v={render:()=>{const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center",a.style.gap="var(--space-6)",a.style.flexWrap="wrap";for(let s=1;s<=4;s++){const n=document.createElement("div");n.className="avatar",n.innerHTML=`<img src="https://i.pravatar.cc/150?img=${s}" alt="Profile picture ${s}">`,a.appendChild(n)}return a}},u={render:()=>{const a=document.createElement("div");return a.style.display="flex",a.style.alignItems="center",a.style.gap="var(--space-6)",a.style.flexWrap="wrap",[{class:"avatar-xs",label:"XS"},{class:"avatar-sm",label:"SM"},{class:"",label:"Default"},{class:"avatar-lg",label:"LG"},{class:"avatar-xl",label:"XL"}].forEach(({class:n,label:r})=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.gap="var(--space-2)";const t=document.createElement("div");t.className=n?`avatar ${n}`:"avatar",t.innerHTML=`<span>${r}</span>`;const l=document.createElement("p");l.style.fontSize="var(--text-xs)",l.style.color="var(--color-text-secondary)",l.style.margin="0",l.textContent=r,e.appendChild(t),e.appendChild(l),a.appendChild(e)}),a}},g={render:()=>{const a=document.createElement("div");return a.style.display="flex",a.style.gap="var(--space-6)",a.style.flexWrap="wrap",[{status:"online",label:"Online"},{status:"busy",label:"Busy"},{status:"away",label:"Away"},{status:"offline",label:"Offline"}].forEach(({status:n,label:r},e)=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",t.style.gap="var(--space-2)";const l=document.createElement("div");l.className=`avatar avatar-status-${n}`,l.innerHTML=`<img src="https://i.pravatar.cc/150?img=${e+5}" alt="User ${n}">`;const i=document.createElement("p");i.style.fontSize="var(--text-sm)",i.style.color="var(--color-text-secondary)",i.style.margin="0",i.textContent=r,t.appendChild(l),t.appendChild(i),a.appendChild(t)}),a}},f={render:()=>{const a=document.createElement("div");return a.style.display="flex",a.style.gap="var(--space-6)",a.style.flexWrap="wrap",[{src:"https://i.pravatar.cc/150?img=14",alt:"John Doe"},{src:"https://i.pravatar.cc/150?img=15",alt:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=16",alt:"Mike Johnson",status:"online"},{initials:"SW",alt:"Sarah Wilson",size:"lg"}].forEach(({src:n,initials:r,alt:e,status:t,size:l})=>{const i=document.createElement("button"),c=l?` avatar-${l}`:"",o=t?` avatar-status-${t}`:"";i.className=`avatar avatar-clickable${c}${o}`,i.setAttribute("aria-label",`View profile of ${e}`),i.setAttribute("tabindex","0"),n?i.innerHTML=`<img src="${n}" alt="">`:i.innerHTML=`<span>${r}</span>`,a.appendChild(i)}),a}},y={render:()=>{const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.gap="var(--space-6)";const s=document.createElement("div");s.className="avatar-group",["A","B","C","D","+5"].forEach(e=>{const t=document.createElement("div");t.className="avatar",t.innerHTML=`<span>${e}</span>`,s.appendChild(t)}),a.appendChild(s);const r=document.createElement("div");r.className="avatar-group";for(let e=10;e<=13;e++){const t=document.createElement("div");t.className="avatar",t.innerHTML=`<img src="https://i.pravatar.cc/150?img=${e}" alt="Profile picture ${e}">`,r.appendChild(t)}return a.appendChild(r),a}},h={render:()=>{const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.gap="var(--space-6)";const s=document.createElement("div");s.style.display="flex",s.style.alignItems="center",s.style.gap="var(--space-3)";const n=document.createElement("div");n.className="avatar",n.innerHTML='<img src="https://i.pravatar.cc/150?img=20" alt="John Doe">';const r=document.createElement("div");r.innerHTML=`
      <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">John Doe</div>
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">john.doe@example.com</div>
    `,s.appendChild(n),s.appendChild(r),a.appendChild(s);const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="var(--space-3)";const t=document.createElement("div");t.className="avatar avatar-status-online",t.innerHTML='<img src="https://i.pravatar.cc/150?img=21" alt="Jane Smith">';const l=document.createElement("div");return l.innerHTML=`
      <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">Jane Smith</div>
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">Active now</div>
    `,e.appendChild(t),e.appendChild(l),a.appendChild(e),a}},b={render:()=>{const a=document.createElement("div");return a.style.display="flex",a.style.flexDirection="column",a.style.gap="var(--space-4)",[{src:"https://i.pravatar.cc/150?img=20",name:"John Doe",role:"Product Designer",badge:"Admin",badgeClass:"badge-success"},{src:"https://i.pravatar.cc/150?img=21",name:"Jane Smith",role:"Developer",badge:"Member",badgeClass:"badge-secondary",status:"online"},{initials:"MJ",name:"Mike Johnson",role:"Marketing Manager",badge:"Member",badgeClass:"badge-secondary",status:"away"}].forEach(({src:n,initials:r,name:e,role:t,badge:l,badgeClass:i,status:c})=>{const o=document.createElement("div");o.style.display="flex",o.style.alignItems="center",o.style.gap="var(--space-3)";const p=document.createElement("div"),Z=c?` avatar-status-${c}`:"";p.className=`avatar avatar-sm${Z}`,n?p.innerHTML=`<img src="${n}" alt="${e}">`:p.innerHTML=`<span>${r}</span>`;const C=document.createElement("div");C.style.flex="1",C.innerHTML=`
        <div style="font-weight: var(--font-semibold); color: var(--color-text-primary); font-size: var(--text-sm);">${e}</div>
        <div style="font-size: var(--text-xs); color: var(--color-text-secondary);">${t}</div>
      `;const E=document.createElement("span");E.className=`badge ${i} badge-sm`,E.textContent=l,o.appendChild(p),o.appendChild(C),o.appendChild(E),a.appendChild(o)}),a}},x={render:()=>{const a=document.createElement("div");return a.style.display="flex",a.style.flexDirection="column",a.style.gap="var(--space-6)",[{src:"https://i.pravatar.cc/150?img=30",name:"Sarah Wilson",time:"2 hours ago",text:"Great work on the new design! The color scheme really pops and the layout is much more intuitive."},{initials:"TJ",name:"Tom Jackson",time:"5 hours ago",text:"Updated the documentation with the latest API changes. Please review when you get a chance."}].forEach(({src:n,initials:r,name:e,time:t,text:l})=>{const i=document.createElement("div");i.style.display="flex",i.style.gap="var(--space-3)";const c=document.createElement("div");c.className="avatar avatar-sm",n?c.innerHTML=`<img src="${n}" alt="${e}">`:c.innerHTML=`<span>${r}</span>`;const o=document.createElement("div");o.style.flex="1",o.innerHTML=`
        <div>
          <span style="font-weight: var(--font-semibold); color: var(--color-text-primary);">${e}</span>
          <span style="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-left: var(--space-2);">${t}</span>
        </div>
        <p style="margin: var(--space-2) 0 0 0; color: var(--color-text-secondary); font-size: var(--text-sm);">${l}</p>
      `,i.appendChild(c),i.appendChild(o),a.appendChild(i)}),a}};var w,$,k;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const sizeClass = args.size && args.size !== 'md' ? \` avatar-\${args.size}\` : '';
    const statusClass = args.status ? \` avatar-status-\${args.status}\` : '';
    const clickableClass = args.clickable ? ' avatar-clickable' : '';
    const avatar = document.createElement(args.clickable ? 'button' : 'div');
    avatar.className = \`avatar\${sizeClass}\${statusClass}\${clickableClass}\`;
    if (args.clickable) {
      avatar.setAttribute('aria-label', 'View profile');
    }
    if (args.src) {
      avatar.innerHTML = \`<img src="\${args.src}" alt="\${args.initials ? args.initials + ' avatar' : 'User avatar'}">\`;
    } else if (args.initials) {
      avatar.innerHTML = \`<span>\${args.initials}</span>\`;
    } else {
      avatar.innerHTML = \`<span>JD</span>\`;
    }
    return avatar;
  },
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    size: 'md',
    status: null,
    clickable: false
  }
}`,...(k=($=d.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var A,z,M;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    const avatars = ['JD', 'AB', 'CD', 'EF'];
    avatars.forEach(initials => {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerHTML = \`<span>\${initials}</span>\`;
      container.appendChild(avatar);
    });
    return container;
  }
}`,...(M=(z=m.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var S,T,D;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    for (let i = 1; i <= 4; i++) {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerHTML = \`<img src="https://i.pravatar.cc/150?img=\${i}" alt="Profile picture \${i}">\`;
      container.appendChild(avatar);
    }
    return container;
  }
}`,...(D=(T=v.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var L,J,H;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    const sizes = [{
      class: 'avatar-xs',
      label: 'XS'
    }, {
      class: 'avatar-sm',
      label: 'SM'
    }, {
      class: '',
      label: 'Default'
    }, {
      class: 'avatar-lg',
      label: 'LG'
    }, {
      class: 'avatar-xl',
      label: 'XL'
    }];
    sizes.forEach(({
      class: sizeClass,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = 'var(--space-2)';
      const avatar = document.createElement('div');
      avatar.className = sizeClass ? \`avatar \${sizeClass}\` : 'avatar';
      avatar.innerHTML = \`<span>\${label}</span>\`;
      const labelEl = document.createElement('p');
      labelEl.style.fontSize = 'var(--text-xs)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.style.margin = '0';
      labelEl.textContent = label;
      wrapper.appendChild(avatar);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(H=(J=u.parameters)==null?void 0:J.docs)==null?void 0:H.source}}};var I,N,U;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    const statuses = [{
      status: 'online',
      label: 'Online'
    }, {
      status: 'busy',
      label: 'Busy'
    }, {
      status: 'away',
      label: 'Away'
    }, {
      status: 'offline',
      label: 'Offline'
    }];
    statuses.forEach(({
      status,
      label
    }, index) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = 'var(--space-2)';
      const avatar = document.createElement('div');
      avatar.className = \`avatar avatar-status-\${status}\`;
      avatar.innerHTML = \`<img src="https://i.pravatar.cc/150?img=\${index + 5}" alt="User \${status}">\`;
      const labelEl = document.createElement('p');
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.style.margin = '0';
      labelEl.textContent = label;
      wrapper.appendChild(avatar);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(U=(N=g.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var W,P,G;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    const examples = [{
      src: 'https://i.pravatar.cc/150?img=14',
      alt: 'John Doe'
    }, {
      src: 'https://i.pravatar.cc/150?img=15',
      alt: 'Jane Smith'
    }, {
      src: 'https://i.pravatar.cc/150?img=16',
      alt: 'Mike Johnson',
      status: 'online'
    }, {
      initials: 'SW',
      alt: 'Sarah Wilson',
      size: 'lg'
    }];
    examples.forEach(({
      src,
      initials,
      alt,
      status,
      size
    }) => {
      const avatar = document.createElement('button');
      const sizeClass = size ? \` avatar-\${size}\` : '';
      const statusClass = status ? \` avatar-status-\${status}\` : '';
      avatar.className = \`avatar avatar-clickable\${sizeClass}\${statusClass}\`;
      avatar.setAttribute('aria-label', \`View profile of \${alt}\`);
      avatar.setAttribute('tabindex', '0');
      if (src) {
        avatar.innerHTML = \`<img src="\${src}" alt="">\`;
      } else {
        avatar.innerHTML = \`<span>\${initials}</span>\`;
      }
      container.appendChild(avatar);
    });
    return container;
  }
}`,...(G=(P=f.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var j,V,B;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    // Initials group
    const group1 = document.createElement('div');
    group1.className = 'avatar-group';
    const initials = ['A', 'B', 'C', 'D', '+5'];
    initials.forEach(initial => {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerHTML = \`<span>\${initial}</span>\`;
      group1.appendChild(avatar);
    });
    container.appendChild(group1);

    // Images group
    const group2 = document.createElement('div');
    group2.className = 'avatar-group';
    for (let i = 10; i <= 13; i++) {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerHTML = \`<img src="https://i.pravatar.cc/150?img=\${i}" alt="Profile picture \${i}">\`;
      group2.appendChild(avatar);
    }
    container.appendChild(group2);
    return container;
  }
}`,...(B=(V=y.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var O,F,R;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    // Basic user profile
    const profile1 = document.createElement('div');
    profile1.style.display = 'flex';
    profile1.style.alignItems = 'center';
    profile1.style.gap = 'var(--space-3)';
    const avatar1 = document.createElement('div');
    avatar1.className = 'avatar';
    avatar1.innerHTML = \`<img src="https://i.pravatar.cc/150?img=20" alt="John Doe">\`;
    const info1 = document.createElement('div');
    info1.innerHTML = \`
      <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">John Doe</div>
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">john.doe@example.com</div>
    \`;
    profile1.appendChild(avatar1);
    profile1.appendChild(info1);
    container.appendChild(profile1);

    // Online user
    const profile2 = document.createElement('div');
    profile2.style.display = 'flex';
    profile2.style.alignItems = 'center';
    profile2.style.gap = 'var(--space-3)';
    const avatar2 = document.createElement('div');
    avatar2.className = 'avatar avatar-status-online';
    avatar2.innerHTML = \`<img src="https://i.pravatar.cc/150?img=21" alt="Jane Smith">\`;
    const info2 = document.createElement('div');
    info2.innerHTML = \`
      <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">Jane Smith</div>
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">Active now</div>
    \`;
    profile2.appendChild(avatar2);
    profile2.appendChild(info2);
    container.appendChild(profile2);
    return container;
  }
}`,...(R=(F=h.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var X,q,_;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    const users = [{
      src: 'https://i.pravatar.cc/150?img=20',
      name: 'John Doe',
      role: 'Product Designer',
      badge: 'Admin',
      badgeClass: 'badge-success'
    }, {
      src: 'https://i.pravatar.cc/150?img=21',
      name: 'Jane Smith',
      role: 'Developer',
      badge: 'Member',
      badgeClass: 'badge-secondary',
      status: 'online'
    }, {
      initials: 'MJ',
      name: 'Mike Johnson',
      role: 'Marketing Manager',
      badge: 'Member',
      badgeClass: 'badge-secondary',
      status: 'away'
    }];
    users.forEach(({
      src,
      initials,
      name,
      role,
      badge,
      badgeClass,
      status
    }) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = 'var(--space-3)';
      const avatar = document.createElement('div');
      const statusClass = status ? \` avatar-status-\${status}\` : '';
      avatar.className = \`avatar avatar-sm\${statusClass}\`;
      if (src) {
        avatar.innerHTML = \`<img src="\${src}" alt="\${name}">\`;
      } else {
        avatar.innerHTML = \`<span>\${initials}</span>\`;
      }
      const info = document.createElement('div');
      info.style.flex = '1';
      info.innerHTML = \`
        <div style="font-weight: var(--font-semibold); color: var(--color-text-primary); font-size: var(--text-sm);">\${name}</div>
        <div style="font-size: var(--text-xs); color: var(--color-text-secondary);">\${role}</div>
      \`;
      const badgeEl = document.createElement('span');
      badgeEl.className = \`badge \${badgeClass} badge-sm\`;
      badgeEl.textContent = badge;
      row.appendChild(avatar);
      row.appendChild(info);
      row.appendChild(badgeEl);
      container.appendChild(row);
    });
    return container;
  }
}`,...(_=(q=b.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var K,Q,Y;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    const comments = [{
      src: 'https://i.pravatar.cc/150?img=30',
      name: 'Sarah Wilson',
      time: '2 hours ago',
      text: 'Great work on the new design! The color scheme really pops and the layout is much more intuitive.'
    }, {
      initials: 'TJ',
      name: 'Tom Jackson',
      time: '5 hours ago',
      text: 'Updated the documentation with the latest API changes. Please review when you get a chance.'
    }];
    comments.forEach(({
      src,
      initials,
      name,
      time,
      text
    }) => {
      const comment = document.createElement('div');
      comment.style.display = 'flex';
      comment.style.gap = 'var(--space-3)';
      const avatar = document.createElement('div');
      avatar.className = 'avatar avatar-sm';
      if (src) {
        avatar.innerHTML = \`<img src="\${src}" alt="\${name}">\`;
      } else {
        avatar.innerHTML = \`<span>\${initials}</span>\`;
      }
      const content = document.createElement('div');
      content.style.flex = '1';
      content.innerHTML = \`
        <div>
          <span style="font-weight: var(--font-semibold); color: var(--color-text-primary);">\${name}</span>
          <span style="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-left: var(--space-2);">\${time}</span>
        </div>
        <p style="margin: var(--space-2) 0 0 0; color: var(--color-text-secondary); font-size: var(--text-sm);">\${text}</p>
      \`;
      comment.appendChild(avatar);
      comment.appendChild(content);
      container.appendChild(comment);
    });
    return container;
  }
}`,...(Y=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const ea=["Default","WithInitials","WithImages","AllSizes","WithStatus","Clickable","AvatarGroup","UserProfile","UserList","Comments"];export{u as AllSizes,y as AvatarGroup,f as Clickable,x as Comments,d as Default,b as UserList,h as UserProfile,v as WithImages,m as WithInitials,g as WithStatus,ea as __namedExportsOrder,aa as default};
