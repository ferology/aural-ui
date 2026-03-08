import{c as ue}from"./createThemeGrid-DWAncU4Q.js";const ye={title:"Components/Data Display/Skeleton",tags:["autodocs"],parameters:{docs:{description:{component:`
# Skeleton Component

Animated loading placeholders that mimic the structure of content before it loads, providing visual continuity and improving perceived performance during initial page renders.

Use Skeleton screens for initial page load and data-heavy components (dashboards, feeds, tables). For button/form loading, use **Spinners** instead. For measurable progress, use **Progress** bars.

Skeleton screens reduce perceived load time by 40% (research from Luke Wroblewski) because users see structure immediately rather than blank screens, creating the illusion of faster performance.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Text Skeleton -->
<div aria-busy="true" aria-label="Loading content">
  <div class="skeleton skeleton-text" style="width: 100%"></div>
  <div class="skeleton skeleton-text" style="width: 80%"></div>
  <div class="skeleton skeleton-text" style="width: 60%"></div>
  <span class="sr-only">Loading content...</span>
</div>

<!-- Avatar + Text Pattern -->
<div aria-busy="true" aria-label="Loading user profile">
  <div style="display: flex; gap: 16px; align-items: center;">
    <div class="skeleton skeleton-circle" style="width: 48px; height: 48px;"></div>
    <div style="flex: 1;">
      <div class="skeleton skeleton-text" style="width: 40%; margin-bottom: 8px;"></div>
      <div class="skeleton skeleton-text" style="width: 60%;"></div>
    </div>
  </div>
</div>

<!-- Card Skeleton -->
<div class="card" aria-busy="true" aria-label="Loading card content">
  <div class="skeleton skeleton-rect" style="width: 100%; height: 200px; border-radius: 8px 8px 0 0;"></div>
  <div style="padding: 16px;">
    <div class="skeleton skeleton-text" style="width: 70%; height: 24px; margin-bottom: 12px;"></div>
    <div class="skeleton skeleton-text" style="width: 100%;"></div>
    <div class="skeleton skeleton-text" style="width: 90%;"></div>
  </div>
</div>
\`\`\`

**React:**
\`\`\`jsx
function Skeleton({ variant = 'text', width, height, className, count = 1 }) {
  const baseClass = \`skeleton skeleton-\${variant}\`;

  if (count > 1 && variant === 'text') {
    const widths = ['100%', '80%', '60%'];
    return (
      <div aria-busy="true" aria-label="Loading content">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={baseClass}
            style={{ width: width || widths[i] || widths[widths.length - 1] }}
          />
        ))}
        <span className="sr-only">Loading content...</span>
      </div>
    );
  }

  return (
    <div className={baseClass} style={{ width, height }} />
  );
}

// Card Skeleton Example
function CardSkeleton() {
  return (
    <div className="card" aria-busy="true" aria-label="Loading card content">
      <Skeleton variant="rect" height="200px" />
      <div className="card-body">
        <Skeleton variant="text" width="70%" height="24px" />
        <Skeleton variant="text" count={2} />
        <div className="flex gap-3 mt-4">
          <Skeleton variant="rect" width="80px" height="36px" />
          <Skeleton variant="rect" width="80px" height="36px" />
        </div>
      </div>
    </div>
  );
}

// Avatar List Skeleton
function UserListSkeleton({ count = 4 }) {
  return (
    <div className="space-y-4" aria-busy="true" aria-label="Loading list items">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex gap-4 items-center p-4 bg-surface rounded-lg">
          <Skeleton variant="circle" width="48px" height="48px" />
          <div className="flex-1">
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="text" width="70%" />
          </div>
          <Skeleton variant="rect" width="24px" height="24px" />
        </div>
      ))}
    </div>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div
    v-if="count > 1 && variant === 'text'"
    aria-busy="true"
    aria-label="Loading content"
  >
    <div
      v-for="(_, i) in count"
      :key="i"
      :class="skeletonClass"
      :style="getStyle(i)"
    />
    <span class="sr-only">Loading content...</span>
  </div>
  <div
    v-else
    :class="skeletonClass"
    :style="{ width, height }"
  />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: { type: String, default: 'text' },
  width: String,
  height: String,
  count: { type: Number, default: 1 }
});

const skeletonClass = computed(() => \`skeleton skeleton-\${props.variant}\`);

const widths = ['100%', '80%', '60%'];

const getStyle = (index) => {
  if (props.width) return { width: props.width };
  return { width: widths[index] || widths[widths.length - 1] };
};
<\/script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  export let variant = 'text';
  export let width = undefined;
  export let height = undefined;
  export let count = 1;

  $: skeletonClass = \`skeleton skeleton-\${variant}\`;
  $: widths = ['100%', '80%', '60%'];
<\/script>

{#if count > 1 && variant === 'text'}
  <div aria-busy="true" aria-label="Loading content">
    {#each Array(count) as _, i}
      <div
        class={skeletonClass}
        style:width={width || widths[i] || widths[widths.length - 1]}
      />
    {/each}
    <span class="sr-only">Loading content...</span>
  </div>
{:else}
  <div class={skeletonClass} style:width style:height />
{/if}
\`\`\`

## Accessibility

1. **aria-busy="true"** - Mark containers with \`aria-busy="true"\` to indicate content is loading; remove when real content appears
2. **aria-label context** - Provide descriptive label like \`aria-label="Loading user profile"\` or \`aria-label="Loading table data"\`
3. **aria-live="polite"** - Add \`aria-live="polite"\` to container so screen readers announce when content finishes loading
4. **Screen reader text** - Include hidden text like \`<span class="sr-only">Loading content...</span>\` for screen reader users
5. **Completion announcement** - When real content loads, announce "Content loaded" via \`role="status"\` for screen reader notification
6. **Reduced motion** - Disable shimmer animation for \`prefers-reduced-motion\` users; show static gray placeholder instead
7. **Color contrast** - Ensure skeleton background meets 3:1 contrast ratio against page background (WCAG AA)
8. **Semantic HTML** - Use proper structure (headings, lists) in actual content; skeleton should mirror this hierarchy
9. **Keyboard navigation** - Don't trap focus in skeleton; allow users to tab past loading areas
10. **Timeout handling** - If loading fails or exceeds 30 seconds, replace skeleton with error message and retry button
11. **Progressive disclosure** - Load and reveal content incrementally (top-to-bottom) rather than showing skeleton for entire page
12. **No fake interactivity** - Don't make skeleton buttons/links clickable; they should be purely visual placeholders

## Usage Guidelines

### When to Use

- **Initial page load** - Show skeleton on first render before data arrives from API
- **Dashboard/analytics** - Display skeleton for charts, graphs, and stat cards during data fetching
- **User profiles** - Show avatar + bio skeleton while loading profile information
- **News feeds/timelines** - Display post skeletons for infinite scroll or feed pagination
- **Search results** - Show skeleton results grid while search query processes
- **Data tables** - Display skeleton rows (5-10) while table data loads

### When NOT to Use

- **Button loading** - Use Spinner inside button instead; skeleton too large for inline actions
- **Form submission** - Use disabled state + Spinner; skeleton doesn't make sense mid-interaction
- **Real-time updates** - For live data streams, show actual data immediately then update; skeleton creates jarring flash
- **Subsequent loads** - After initial load, use Spinner for refreshes (skeleton implies blank slate, confusing for updates)
- **Instant operations** - Don't show skeleton for <200ms operations; creates unnecessary flash
- **Known empty states** - If API returns empty result, show proper "No data" state not skeleton

### Best Practices

- Match skeleton structure exactly to final content layout (same width, height, positioning)
- Use 5-10 skeleton items for lists/grids to fill viewport without overwhelming
- Stagger animation start times for each skeleton element (50-100ms delay) for wave effect
- Keep skeleton simple; no need to recreate every detail (icons, buttons) - focus on shape
- For varied content heights (cards, posts), use average or median height for skeletons
- Remove skeleton and show actual content in one atomic operation (no partial rendering)
- For slow connections, show skeleton after 200ms delay to avoid flash on fast loads
- Use lighter skeleton backgrounds in dark mode (adjust gradient opacity)

### Mobile Considerations

- Reduce skeleton item count on mobile (3-5 vs 10) due to smaller viewport
- Increase skeleton height slightly on mobile for better visual weight (48px vs 40px avatars)
- Disable complex shimmer animations on mobile to improve performance (static gray acceptable)
- For mobile infinite scroll, show 2-3 skeleton items at bottom when loading more
- Ensure skeleton respects mobile safe areas (avoid notch/home indicator overlaps)
- Consider connection speed: show skeleton longer on 3G, shorter on 5G/WiFi
        `.trim()}}},argTypes:{variant:{control:"select",options:["text","circle","rect","custom"],description:"Shape variant matching content type (text: lines of text/paragraphs, circle: avatars/profile pictures, rect: images/cards/buttons, custom: any arbitrary shape with width/height)"},width:{control:"text",description:'CSS width value (e.g., "200px", "80%", "100%"); for text lines, use percentages like 100%, 80%, 60% to create natural paragraph appearance'},height:{control:"text",description:'CSS height value (e.g., "20px", "100px"); defaults to 16px for text, but customize for headings (24px), images (200px), or buttons (44px)'},animation:{control:"select",options:["pulse","wave","none"],description:"Animation style (pulse: fade in/out effect, wave: shimmer left-to-right, none: static for reduced motion preference); automatically disabled for prefers-reduced-motion users"},count:{control:"number",description:"Number of skeleton elements to render (typically 3-5 for text lines, 5-10 for list items); helps fill viewport without overwhelming on initial load",min:1,max:10}}},b={render:e=>{const t=document.createElement("div");t.style.maxWidth="600px",t.setAttribute("aria-busy","true"),t.setAttribute("aria-label","Loading content");const n=e.count||3,a=["100%","80%","60%"];for(let l=0;l<n;l++){const o=document.createElement("div");o.className="skeleton skeleton-text",e.width?o.style.width=e.width:l<a.length&&(o.style.width=a[l]),e.height&&(o.style.height=e.height),t.appendChild(o)}const s=document.createElement("span");return s.className="sr-only",s.textContent="Loading content...",t.appendChild(s),t},args:{variant:"text",count:3,width:"",height:""}},f={render:e=>{const t=document.createElement("div");t.style.display="flex",t.style.gap="var(--space-4)",t.setAttribute("aria-busy","true"),t.setAttribute("aria-label","Loading avatars");const n=e.count||3,a=e.width||e.height||"48px";for(let s=0;s<n;s++){const l=document.createElement("div");l.className="skeleton skeleton-circle",l.style.width=a,l.style.height=a,t.appendChild(l)}return t},args:{variant:"circle",count:3,width:"48px",height:"48px"}},C={render:e=>{const t=document.createElement("div");return t.className="skeleton skeleton-rect",t.style.width=e.width||"300px",t.style.height=e.height||"200px",t.style.borderRadius="var(--radius-md)",t.setAttribute("aria-busy","true"),t.setAttribute("aria-label","Loading image"),t},args:{variant:"rect",width:"300px",height:"200px"}},w={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.gap="var(--space-6)",e.style.alignItems="center",e.style.maxWidth="600px",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading user profile");const t=document.createElement("div");t.className="skeleton skeleton-circle",t.style.width="48px",t.style.height="48px",t.style.flexShrink="0";const n=document.createElement("div");n.style.flex="1",n.style.display="flex",n.style.flexDirection="column",n.style.gap="var(--space-2)";const a=document.createElement("div");a.className="skeleton skeleton-text",a.style.width="40%";const s=document.createElement("div");return s.className="skeleton skeleton-text",s.style.width="60%",n.appendChild(a),n.appendChild(s),e.appendChild(t),e.appendChild(n),e}},E={render:()=>{const e=document.createElement("div");e.className="card",e.style.maxWidth="400px",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading card content");const t=document.createElement("div");t.className="skeleton skeleton-rect",t.style.width="100%",t.style.height="200px",t.style.borderRadius="var(--radius-md) var(--radius-md) 0 0";const n=document.createElement("div");n.style.padding="var(--space-4)";const a=document.createElement("div");a.className="skeleton skeleton-text",a.style.width="70%",a.style.height="24px",a.style.marginBottom="var(--space-3)";const s=document.createElement("div");s.className="skeleton skeleton-text",s.style.width="100%",s.style.marginBottom="var(--space-2)";const l=document.createElement("div");l.className="skeleton skeleton-text",l.style.width="90%",l.style.marginBottom="var(--space-4)";const o=document.createElement("div");o.style.display="flex",o.style.gap="var(--space-3)";const i=document.createElement("div");i.className="skeleton skeleton-rect",i.style.width="80px",i.style.height="36px",i.style.borderRadius="var(--radius-sm)";const r=document.createElement("div");return r.className="skeleton skeleton-rect",r.style.width="80px",r.style.height="36px",r.style.borderRadius="var(--radius-sm)",o.appendChild(i),o.appendChild(r),n.appendChild(a),n.appendChild(s),n.appendChild(l),n.appendChild(o),e.appendChild(t),e.appendChild(n),e}},N={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-3)",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading table data");for(let t=0;t<5;t++){const n=document.createElement("div");n.style.display="grid",n.style.gridTemplateColumns="2fr 1fr 1fr 80px",n.style.gap="var(--space-6)",n.style.padding="var(--space-3)",n.style.borderBottom="1px solid var(--color-border-subtle)",["70%","80%","65%","60px"].forEach((s,l)=>{const o=document.createElement("div");l===3?(o.className="skeleton skeleton-rect",o.style.height="24px",o.style.borderRadius="var(--radius-sm)"):o.className="skeleton skeleton-text",o.style.width=s,n.appendChild(o)}),e.appendChild(n)}return e}},A={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-4)",e.style.maxWidth="600px",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading list items");const t=["40%","50%","35%","45%"];for(let n=0;n<4;n++){const a=document.createElement("div");a.style.display="flex",a.style.gap="var(--space-6)",a.style.alignItems="center",a.style.padding="var(--space-4)",a.style.background="var(--color-bg-primary)",a.style.borderRadius="var(--radius-md)";const s=document.createElement("div");s.className="skeleton skeleton-circle",s.style.width="48px",s.style.height="48px",s.style.flexShrink="0";const l=document.createElement("div");l.style.flex="1",l.style.display="flex",l.style.flexDirection="column",l.style.gap="var(--space-2)";const o=document.createElement("div");o.className="skeleton skeleton-text",o.style.width=t[n];const i=document.createElement("div");i.className="skeleton skeleton-text",i.style.width="70%",l.appendChild(o),l.appendChild(i);const r=document.createElement("div");r.className="skeleton skeleton-rect",r.style.width="24px",r.style.height="24px",r.style.borderRadius="var(--radius-sm)",r.style.flexShrink="0",a.appendChild(s),a.appendChild(l),a.appendChild(r),e.appendChild(a)}return e}},S={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",e.style.maxWidth="500px",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading form");for(let n=0;n<3;n++){const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.gap="var(--space-2)";const s=document.createElement("div");s.className="skeleton skeleton-text",s.style.width="30%",s.style.height="14px";const l=document.createElement("div");l.className="skeleton skeleton-rect",l.style.width="100%",l.style.height="44px",l.style.borderRadius="var(--radius-md)",a.appendChild(s),a.appendChild(l),e.appendChild(a)}const t=document.createElement("div");return t.className="skeleton skeleton-rect",t.style.width="120px",t.style.height="44px",t.style.borderRadius="var(--radius-md)",t.style.marginTop="var(--space-4)",e.appendChild(t),e}},L={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",e.style.maxWidth="700px",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading article");const t=document.createElement("div");t.style.display="flex",t.style.gap="var(--space-6)",t.style.alignItems="center";const n=document.createElement("div");n.className="skeleton skeleton-circle",n.style.width="40px",n.style.height="40px";const a=document.createElement("div");a.style.flex="1",a.style.display="flex",a.style.flexDirection="column",a.style.gap="var(--space-2)";const s=document.createElement("div");s.className="skeleton skeleton-text",s.style.width="30%";const l=document.createElement("div");l.className="skeleton skeleton-text",l.style.width="20%",l.style.height="12px",a.appendChild(s),a.appendChild(l),t.appendChild(n),t.appendChild(a);const o=document.createElement("div");o.className="skeleton skeleton-text",o.style.width="80%",o.style.height="32px";const i=document.createElement("div");i.style.display="flex",i.style.flexDirection="column",i.style.gap="var(--space-2)";for(let c=0;c<3;c++){const d=document.createElement("div");d.className="skeleton skeleton-text",d.style.width=c===2?"70%":"100%",i.appendChild(d)}const r=document.createElement("div");r.className="skeleton skeleton-rect",r.style.width="100%",r.style.height="300px",r.style.borderRadius="var(--radius-md)";const m=document.createElement("div");m.style.display="flex",m.style.gap="var(--space-3)";for(let c=0;c<3;c++){const d=document.createElement("div");d.className="skeleton skeleton-rect",d.style.width="60px",d.style.height="24px",d.style.borderRadius="var(--radius-full)",m.appendChild(d)}return e.appendChild(t),e.appendChild(o),e.appendChild(i),e.appendChild(r),e.appendChild(m),e}},T={render:()=>ue(()=>{const e=document.createElement("div");e.style.display="flex",e.style.gap="var(--space-6)",e.style.alignItems="center",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading content");const t=document.createElement("div");t.className="skeleton skeleton-circle",t.style.width="48px",t.style.height="48px",t.style.flexShrink="0";const n=document.createElement("div");n.style.flex="1",n.style.display="flex",n.style.flexDirection="column",n.style.gap="var(--space-2)";const a=document.createElement("div");a.className="skeleton skeleton-text",a.style.width="60%";const s=document.createElement("div");return s.className="skeleton skeleton-text",s.style.width="80%",n.appendChild(a),n.appendChild(s),e.appendChild(t),e.appendChild(n),e})},D={render:()=>{const e=document.createElement("div");e.style.maxWidth="600px";const t=document.createElement("button");t.className="btn btn-primary",t.textContent="Load Content",t.style.marginBottom="var(--space-6)";const n=document.createElement("div");return t.addEventListener("click",()=>{t.disabled=!0,t.textContent="Loading...",n.innerHTML="",n.setAttribute("aria-busy","true"),n.setAttribute("aria-live","polite");const a=document.createElement("div");a.className="card";const s=document.createElement("div");s.style.padding="var(--space-4)";const l=document.createElement("div");l.style.display="flex",l.style.gap="var(--space-6)",l.style.alignItems="center",l.style.marginBottom="var(--space-4)";const o=document.createElement("div");o.className="skeleton skeleton-circle",o.style.width="48px",o.style.height="48px";const i=document.createElement("div");i.style.flex="1",i.style.display="flex",i.style.flexDirection="column",i.style.gap="var(--space-2)";const r=document.createElement("div");r.className="skeleton skeleton-text",r.style.width="40%";const m=document.createElement("div");m.className="skeleton skeleton-text",m.style.width="60%",i.appendChild(r),i.appendChild(m),l.appendChild(o),l.appendChild(i);const c=document.createElement("div");c.className="skeleton skeleton-text",c.style.width="100%",c.style.marginBottom="var(--space-2)";const d=document.createElement("div");d.className="skeleton skeleton-text",d.style.width="90%",d.style.marginBottom="var(--space-2)";const B=document.createElement("div");B.className="skeleton skeleton-text",B.style.width="70%";const R=document.createElement("span");R.className="sr-only",R.textContent="Loading user profile...",s.appendChild(l),s.appendChild(c),s.appendChild(d),s.appendChild(B),s.appendChild(R),a.appendChild(s),n.appendChild(a),setTimeout(()=>{n.removeAttribute("aria-busy"),n.innerHTML="";const I=document.createElement("div");I.className="card";const x=document.createElement("div");x.style.padding="var(--space-4)";const u=document.createElement("div");u.style.display="flex",u.style.gap="var(--space-6)",u.style.alignItems="center",u.style.marginBottom="var(--space-4)";const p=document.createElement("div");p.style.width="48px",p.style.height="48px",p.style.borderRadius="50%",p.style.background="var(--color-primary)",p.style.display="flex",p.style.alignItems="center",p.style.justifyContent="center",p.style.color="white",p.style.fontWeight="var(--font-semibold)",p.textContent="JD";const g=document.createElement("div");g.style.flex="1";const h=document.createElement("div");h.style.fontWeight="var(--font-semibold)",h.style.color="var(--color-text-primary)",h.style.marginBottom="var(--space-1)",h.textContent="John Doe";const k=document.createElement("div");k.style.fontSize="var(--text-sm)",k.style.color="var(--color-text-secondary)",k.textContent="Product Designer",g.appendChild(h),g.appendChild(k),u.appendChild(p),u.appendChild(g);const y=document.createElement("p");y.style.color="var(--color-text-secondary)",y.style.lineHeight="1.6",y.style.margin="0",y.textContent="Passionate about creating beautiful and functional user interfaces. Love working with modern design systems and accessibility-first approaches.",x.appendChild(u),x.appendChild(y),I.appendChild(x),n.appendChild(I),t.disabled=!1,t.textContent="Load Content";const v=document.createElement("div");v.setAttribute("role","status"),v.setAttribute("aria-live","polite"),v.className="sr-only",v.textContent="Content loaded successfully",n.appendChild(v)},2e3)}),e.appendChild(t),e.appendChild(n),e}};var W,H,P;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.maxWidth = '600px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading content');
    const count = args.count || 3;
    const widths = ['100%', '80%', '60%'];
    for (let i = 0; i < count; i++) {
      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton skeleton-text';
      if (args.width) {
        skeleton.style.width = args.width;
      } else if (i < widths.length) {
        skeleton.style.width = widths[i];
      }
      if (args.height) {
        skeleton.style.height = args.height;
      }
      container.appendChild(skeleton);
    }

    // Screen reader text
    const srText = document.createElement('span');
    srText.className = 'sr-only';
    srText.textContent = 'Loading content...';
    container.appendChild(srText);
    return container;
  },
  args: {
    variant: 'text',
    count: 3,
    width: '',
    height: ''
  }
}`,...(P=(H=b.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var G,F,U;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-4)';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading avatars');
    const count = args.count || 3;
    const size = args.width || args.height || '48px';
    for (let i = 0; i < count; i++) {
      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton skeleton-circle';
      skeleton.style.width = size;
      skeleton.style.height = size;
      container.appendChild(skeleton);
    }
    return container;
  },
  args: {
    variant: 'circle',
    count: 3,
    width: '48px',
    height: '48px'
  }
}`,...(U=(F=f.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var M,z,_;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton skeleton-rect';
    skeleton.style.width = args.width || '300px';
    skeleton.style.height = args.height || '200px';
    skeleton.style.borderRadius = 'var(--radius-md)';
    skeleton.setAttribute('aria-busy', 'true');
    skeleton.setAttribute('aria-label', 'Loading image');
    return skeleton;
  },
  args: {
    variant: 'rect',
    width: '300px',
    height: '200px'
  }
}`,...(_=(z=C.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var j,$,J;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.maxWidth = '600px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading user profile');
    const avatar = document.createElement('div');
    avatar.className = 'skeleton skeleton-circle';
    avatar.style.width = '48px';
    avatar.style.height = '48px';
    avatar.style.flexShrink = '0';
    const textContainer = document.createElement('div');
    textContainer.style.flex = '1';
    textContainer.style.display = 'flex';
    textContainer.style.flexDirection = 'column';
    textContainer.style.gap = 'var(--space-2)';
    const name = document.createElement('div');
    name.className = 'skeleton skeleton-text';
    name.style.width = '40%';
    const email = document.createElement('div');
    email.className = 'skeleton skeleton-text';
    email.style.width = '60%';
    textContainer.appendChild(name);
    textContainer.appendChild(email);
    container.appendChild(avatar);
    container.appendChild(textContainer);
    return container;
  }
}`,...(J=($=w.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,q,O;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '400px';
    card.setAttribute('aria-busy', 'true');
    card.setAttribute('aria-label', 'Loading card content');
    const image = document.createElement('div');
    image.className = 'skeleton skeleton-rect';
    image.style.width = '100%';
    image.style.height = '200px';
    image.style.borderRadius = 'var(--radius-md) var(--radius-md) 0 0';
    const body = document.createElement('div');
    body.style.padding = 'var(--space-4)';
    const title = document.createElement('div');
    title.className = 'skeleton skeleton-text';
    title.style.width = '70%';
    title.style.height = '24px';
    title.style.marginBottom = 'var(--space-3)';
    const line1 = document.createElement('div');
    line1.className = 'skeleton skeleton-text';
    line1.style.width = '100%';
    line1.style.marginBottom = 'var(--space-2)';
    const line2 = document.createElement('div');
    line2.className = 'skeleton skeleton-text';
    line2.style.width = '90%';
    line2.style.marginBottom = 'var(--space-4)';
    const buttonGroup = document.createElement('div');
    buttonGroup.style.display = 'flex';
    buttonGroup.style.gap = 'var(--space-3)';
    const button1 = document.createElement('div');
    button1.className = 'skeleton skeleton-rect';
    button1.style.width = '80px';
    button1.style.height = '36px';
    button1.style.borderRadius = 'var(--radius-sm)';
    const button2 = document.createElement('div');
    button2.className = 'skeleton skeleton-rect';
    button2.style.width = '80px';
    button2.style.height = '36px';
    button2.style.borderRadius = 'var(--radius-sm)';
    buttonGroup.appendChild(button1);
    buttonGroup.appendChild(button2);
    body.appendChild(title);
    body.appendChild(line1);
    body.appendChild(line2);
    body.appendChild(buttonGroup);
    card.appendChild(image);
    card.appendChild(body);
    return card;
  }
}`,...(O=(q=E.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var V,Q,X;N.parameters={...N.parameters,docs:{...(V=N.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-3)';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading table data');
    for (let i = 0; i < 5; i++) {
      const row = document.createElement('div');
      row.style.display = 'grid';
      row.style.gridTemplateColumns = '2fr 1fr 1fr 80px';
      row.style.gap = 'var(--space-6)';
      row.style.padding = 'var(--space-3)';
      row.style.borderBottom = '1px solid var(--color-border-subtle)';
      const widths = ['70%', '80%', '65%', '60px'];
      widths.forEach((width, index) => {
        const cell = document.createElement('div');
        if (index === 3) {
          cell.className = 'skeleton skeleton-rect';
          cell.style.height = '24px';
          cell.style.borderRadius = 'var(--radius-sm)';
        } else {
          cell.className = 'skeleton skeleton-text';
        }
        cell.style.width = width;
        row.appendChild(cell);
      });
      container.appendChild(row);
    }
    return container;
  }
}`,...(X=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    container.style.maxWidth = '600px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading list items');
    const nameWidths = ['40%', '50%', '35%', '45%'];
    for (let i = 0; i < 4; i++) {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.gap = 'var(--space-6)';
      item.style.alignItems = 'center';
      item.style.padding = 'var(--space-4)';
      item.style.background = 'var(--color-bg-primary)';
      item.style.borderRadius = 'var(--radius-md)';
      const avatar = document.createElement('div');
      avatar.className = 'skeleton skeleton-circle';
      avatar.style.width = '48px';
      avatar.style.height = '48px';
      avatar.style.flexShrink = '0';
      const textContainer = document.createElement('div');
      textContainer.style.flex = '1';
      textContainer.style.display = 'flex';
      textContainer.style.flexDirection = 'column';
      textContainer.style.gap = 'var(--space-2)';
      const name = document.createElement('div');
      name.className = 'skeleton skeleton-text';
      name.style.width = nameWidths[i];
      const description = document.createElement('div');
      description.className = 'skeleton skeleton-text';
      description.style.width = '70%';
      textContainer.appendChild(name);
      textContainer.appendChild(description);
      const icon = document.createElement('div');
      icon.className = 'skeleton skeleton-rect';
      icon.style.width = '24px';
      icon.style.height = '24px';
      icon.style.borderRadius = 'var(--radius-sm)';
      icon.style.flexShrink = '0';
      item.appendChild(avatar);
      item.appendChild(textContainer);
      item.appendChild(icon);
      container.appendChild(item);
    }
    return container;
  }
}`,...(ee=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    container.style.maxWidth = '500px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading form');
    for (let i = 0; i < 3; i++) {
      const field = document.createElement('div');
      field.style.display = 'flex';
      field.style.flexDirection = 'column';
      field.style.gap = 'var(--space-2)';
      const label = document.createElement('div');
      label.className = 'skeleton skeleton-text';
      label.style.width = '30%';
      label.style.height = '14px';
      const input = document.createElement('div');
      input.className = 'skeleton skeleton-rect';
      input.style.width = '100%';
      input.style.height = '44px';
      input.style.borderRadius = 'var(--radius-md)';
      field.appendChild(label);
      field.appendChild(input);
      container.appendChild(field);
    }
    const button = document.createElement('div');
    button.className = 'skeleton skeleton-rect';
    button.style.width = '120px';
    button.style.height = '44px';
    button.style.borderRadius = 'var(--radius-md)';
    button.style.marginTop = 'var(--space-4)';
    container.appendChild(button);
    return container;
  }
}`,...(ae=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,le,oe;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    container.style.maxWidth = '700px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading article');

    // Header
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.gap = 'var(--space-6)';
    header.style.alignItems = 'center';
    const avatar = document.createElement('div');
    avatar.className = 'skeleton skeleton-circle';
    avatar.style.width = '40px';
    avatar.style.height = '40px';
    const authorInfo = document.createElement('div');
    authorInfo.style.flex = '1';
    authorInfo.style.display = 'flex';
    authorInfo.style.flexDirection = 'column';
    authorInfo.style.gap = 'var(--space-2)';
    const author = document.createElement('div');
    author.className = 'skeleton skeleton-text';
    author.style.width = '30%';
    const date = document.createElement('div');
    date.className = 'skeleton skeleton-text';
    date.style.width = '20%';
    date.style.height = '12px';
    authorInfo.appendChild(author);
    authorInfo.appendChild(date);
    header.appendChild(avatar);
    header.appendChild(authorInfo);

    // Title
    const title = document.createElement('div');
    title.className = 'skeleton skeleton-text';
    title.style.width = '80%';
    title.style.height = '32px';

    // Excerpt
    const excerpt = document.createElement('div');
    excerpt.style.display = 'flex';
    excerpt.style.flexDirection = 'column';
    excerpt.style.gap = 'var(--space-2)';
    for (let i = 0; i < 3; i++) {
      const line = document.createElement('div');
      line.className = 'skeleton skeleton-text';
      line.style.width = i === 2 ? '70%' : '100%';
      excerpt.appendChild(line);
    }

    // Image
    const image = document.createElement('div');
    image.className = 'skeleton skeleton-rect';
    image.style.width = '100%';
    image.style.height = '300px';
    image.style.borderRadius = 'var(--radius-md)';

    // Tags
    const tags = document.createElement('div');
    tags.style.display = 'flex';
    tags.style.gap = 'var(--space-3)';
    for (let i = 0; i < 3; i++) {
      const tag = document.createElement('div');
      tag.className = 'skeleton skeleton-rect';
      tag.style.width = '60px';
      tag.style.height = '24px';
      tag.style.borderRadius = 'var(--radius-full)';
      tags.appendChild(tag);
    }
    container.appendChild(header);
    container.appendChild(title);
    container.appendChild(excerpt);
    container.appendChild(image);
    container.appendChild(tags);
    return container;
  }
}`,...(oe=(le=L.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ie,re,de;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    return createThemeGrid(() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = 'var(--space-6)';
      container.style.alignItems = 'center';
      container.setAttribute('aria-busy', 'true');
      container.setAttribute('aria-label', 'Loading content');
      const avatar = document.createElement('div');
      avatar.className = 'skeleton skeleton-circle';
      avatar.style.width = '48px';
      avatar.style.height = '48px';
      avatar.style.flexShrink = '0';
      const textContainer = document.createElement('div');
      textContainer.style.flex = '1';
      textContainer.style.display = 'flex';
      textContainer.style.flexDirection = 'column';
      textContainer.style.gap = 'var(--space-2)';
      const line1 = document.createElement('div');
      line1.className = 'skeleton skeleton-text';
      line1.style.width = '60%';
      const line2 = document.createElement('div');
      line2.className = 'skeleton skeleton-text';
      line2.style.width = '80%';
      textContainer.appendChild(line1);
      textContainer.appendChild(line2);
      container.appendChild(avatar);
      container.appendChild(textContainer);
      return container;
    });
  }
}`,...(de=(re=T.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var ce,pe,me;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = '600px';
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Load Content';
    button.style.marginBottom = 'var(--space-6)';
    const contentContainer = document.createElement('div');
    button.addEventListener('click', () => {
      button.disabled = true;
      button.textContent = 'Loading...';

      // Show skeleton
      contentContainer.innerHTML = '';
      contentContainer.setAttribute('aria-busy', 'true');
      contentContainer.setAttribute('aria-live', 'polite');
      const card = document.createElement('div');
      card.className = 'card';
      const cardBody = document.createElement('div');
      cardBody.style.padding = 'var(--space-4)';
      const header = document.createElement('div');
      header.style.display = 'flex';
      header.style.gap = 'var(--space-6)';
      header.style.alignItems = 'center';
      header.style.marginBottom = 'var(--space-4)';
      const avatar = document.createElement('div');
      avatar.className = 'skeleton skeleton-circle';
      avatar.style.width = '48px';
      avatar.style.height = '48px';
      const textContainer = document.createElement('div');
      textContainer.style.flex = '1';
      textContainer.style.display = 'flex';
      textContainer.style.flexDirection = 'column';
      textContainer.style.gap = 'var(--space-2)';
      const name = document.createElement('div');
      name.className = 'skeleton skeleton-text';
      name.style.width = '40%';
      const role = document.createElement('div');
      role.className = 'skeleton skeleton-text';
      role.style.width = '60%';
      textContainer.appendChild(name);
      textContainer.appendChild(role);
      header.appendChild(avatar);
      header.appendChild(textContainer);
      const line1 = document.createElement('div');
      line1.className = 'skeleton skeleton-text';
      line1.style.width = '100%';
      line1.style.marginBottom = 'var(--space-2)';
      const line2 = document.createElement('div');
      line2.className = 'skeleton skeleton-text';
      line2.style.width = '90%';
      line2.style.marginBottom = 'var(--space-2)';
      const line3 = document.createElement('div');
      line3.className = 'skeleton skeleton-text';
      line3.style.width = '70%';
      const srText = document.createElement('span');
      srText.className = 'sr-only';
      srText.textContent = 'Loading user profile...';
      cardBody.appendChild(header);
      cardBody.appendChild(line1);
      cardBody.appendChild(line2);
      cardBody.appendChild(line3);
      cardBody.appendChild(srText);
      card.appendChild(cardBody);
      contentContainer.appendChild(card);

      // Load actual content after 2 seconds
      setTimeout(() => {
        contentContainer.removeAttribute('aria-busy');
        contentContainer.innerHTML = '';
        const loadedCard = document.createElement('div');
        loadedCard.className = 'card';
        const loadedBody = document.createElement('div');
        loadedBody.style.padding = 'var(--space-4)';
        const loadedHeader = document.createElement('div');
        loadedHeader.style.display = 'flex';
        loadedHeader.style.gap = 'var(--space-6)';
        loadedHeader.style.alignItems = 'center';
        loadedHeader.style.marginBottom = 'var(--space-4)';
        const loadedAvatar = document.createElement('div');
        loadedAvatar.style.width = '48px';
        loadedAvatar.style.height = '48px';
        loadedAvatar.style.borderRadius = '50%';
        loadedAvatar.style.background = 'var(--color-primary)';
        loadedAvatar.style.display = 'flex';
        loadedAvatar.style.alignItems = 'center';
        loadedAvatar.style.justifyContent = 'center';
        loadedAvatar.style.color = 'white';
        loadedAvatar.style.fontWeight = 'var(--font-semibold)';
        loadedAvatar.textContent = 'JD';
        const loadedTextContainer = document.createElement('div');
        loadedTextContainer.style.flex = '1';
        const loadedName = document.createElement('div');
        loadedName.style.fontWeight = 'var(--font-semibold)';
        loadedName.style.color = 'var(--color-text-primary)';
        loadedName.style.marginBottom = 'var(--space-1)';
        loadedName.textContent = 'John Doe';
        const loadedRole = document.createElement('div');
        loadedRole.style.fontSize = 'var(--text-sm)';
        loadedRole.style.color = 'var(--color-text-secondary)';
        loadedRole.textContent = 'Product Designer';
        loadedTextContainer.appendChild(loadedName);
        loadedTextContainer.appendChild(loadedRole);
        loadedHeader.appendChild(loadedAvatar);
        loadedHeader.appendChild(loadedTextContainer);
        const loadedText = document.createElement('p');
        loadedText.style.color = 'var(--color-text-secondary)';
        loadedText.style.lineHeight = '1.6';
        loadedText.style.margin = '0';
        loadedText.textContent = 'Passionate about creating beautiful and functional user interfaces. Love working with modern design systems and accessibility-first approaches.';
        loadedBody.appendChild(loadedHeader);
        loadedBody.appendChild(loadedText);
        loadedCard.appendChild(loadedBody);
        contentContainer.appendChild(loadedCard);
        button.disabled = false;
        button.textContent = 'Load Content';

        // Announce to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = 'Content loaded successfully';
        contentContainer.appendChild(announcement);
      }, 2000);
    });
    wrapper.appendChild(button);
    wrapper.appendChild(contentContainer);
    return wrapper;
  }
}`,...(me=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const ve=["Text","Circle","Rectangle","Avatar","Card","Table","List","Form","ArticlePreview","ThemeComparison","LoadingSimulation"];export{L as ArticlePreview,w as Avatar,E as Card,f as Circle,S as Form,A as List,D as LoadingSimulation,C as Rectangle,N as Table,b as Text,T as ThemeComparison,ve as __namedExportsOrder,ye as default};
