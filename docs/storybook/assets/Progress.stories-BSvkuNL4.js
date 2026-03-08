const ee={title:"Components/Progress",tags:["autodocs"],parameters:{docs:{description:{component:`
# Progress Component

Visual indicators for ongoing operations, file uploads, task completion, and loading states that show determinate progress (0-100%) or indeterminate activity when duration is unknown.

Use Progress bars for operations with measurable completion (file uploads, multi-step forms, data processing). For instant or unknown-duration loading, use **Spinners** instead. For content placeholders during initial load, use **Skeleton** screens.

Progress components provide real-time visual feedback that reassures users the system is working and helps estimate wait times, reducing perceived latency and abandonment.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Determinate Progress (known duration) -->
<div>
  <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
    <span style="font-size: 14px; color: var(--color-text-secondary);">
      Uploading files...
    </span>
    <span style="font-size: 14px; font-weight: 600;">65%</span>
  </div>
  <div
    class="progress"
    role="progressbar"
    aria-label="File upload progress"
    aria-valuenow="65"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="progress-bar" style="width: 65%"></div>
  </div>
</div>

<!-- Indeterminate Progress (unknown duration) -->
<div>
  <div style="margin-bottom: 8px; font-size: 14px; color: var(--color-text-secondary);">
    Processing data...
  </div>
  <div class="progress progress-indeterminate">
    <div class="progress-bar"></div>
  </div>
</div>

<!-- With Semantic Colors -->
<div
  class="progress progress-success"
  role="progressbar"
  aria-label="Installation complete"
  aria-valuenow="100"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div class="progress-bar" style="width: 100%"></div>
</div>
\`\`\`

**React:**
\`\`\`jsx
import { useState, useEffect } from 'react';

function ProgressBar({ value, max = 100, label, variant = 'default', size = 'default', indeterminate = false }) {
  if (indeterminate) {
    return (
      <div>
        {label && (
          <div className="text-sm text-secondary mb-2">{label}</div>
        )}
        <div className={\`progress progress-indeterminate progress-\${variant}\`}>
          <div className="progress-bar" />
        </div>
      </div>
    );
  }

  const percentage = Math.round((value / max) * 100);

  return (
    <div>
      {label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm text-secondary">{label}</span>
          <span className="text-sm font-semibold">{percentage}%</span>
        </div>
      )}
      <div
        className={\`progress progress-\${size} progress-\${variant}\`}
        role="progressbar"
        aria-label={label || 'Progress'}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax={max}
      >
        <div className="progress-bar" style={{ width: \`\${percentage}%\` }} />
      </div>
    </div>
  );
}

// Usage: File Upload Example
function FileUpload() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <ProgressBar
      value={progress}
      label="Uploading annual-report.pdf"
      variant={progress === 100 ? 'success' : 'default'}
    />
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div>
    <div v-if="label" class="flex justify-between mb-2">
      <span class="text-sm text-secondary">{{ label }}</span>
      <span v-if="!indeterminate" class="text-sm font-semibold">
        {{ percentage }}%
      </span>
    </div>
    <div
      :class="progressClasses"
      :role="indeterminate ? undefined : 'progressbar'"
      :aria-label="label || 'Progress'"
      :aria-valuenow="indeterminate ? undefined : value"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        class="progress-bar"
        :style="{ width: indeterminate ? undefined : \`\${percentage}%\` }"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  value: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  label: String,
  variant: { type: String, default: 'default' },
  size: { type: String, default: 'default' },
  indeterminate: Boolean
});

const percentage = computed(() => Math.round((props.value / props.max) * 100));

const progressClasses = computed(() => {
  const classes = ['progress'];
  if (props.indeterminate) classes.push('progress-indeterminate');
  if (props.variant !== 'default') classes.push(\`progress-\${props.variant}\`);
  if (props.size !== 'default') classes.push(\`progress-\${props.size}\`);
  return classes.join(' ');
});
<\/script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  export let value = 0;
  export let max = 100;
  export let label = '';
  export let variant = 'default';
  export let size = 'default';
  export let indeterminate = false;

  $: percentage = Math.round((value / max) * 100);
  $: progressClasses = [
    'progress',
    indeterminate && 'progress-indeterminate',
    variant !== 'default' && \`progress-\${variant}\`,
    size !== 'default' && \`progress-\${size}\`
  ].filter(Boolean).join(' ');
<\/script>

<div>
  {#if label}
    <div class="flex justify-between mb-2">
      <span class="text-sm text-secondary">{label}</span>
      {#if !indeterminate}
        <span class="text-sm font-semibold">{percentage}%</span>
      {/if}
    </div>
  {/if}

  <div
    class={progressClasses}
    role={indeterminate ? undefined : 'progressbar'}
    aria-label={label || 'Progress'}
    aria-valuenow={indeterminate ? undefined : value}
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div
      class="progress-bar"
      style={indeterminate ? '' : \`width: \${percentage}%\`}
    />
  </div>
</div>
\`\`\`

## Accessibility

1. **ARIA progressbar role** - Use \`role="progressbar"\` for determinate progress; omit for indeterminate (no meaningful value to announce)
2. **aria-valuenow updates** - Update \`aria-valuenow\` attribute in real-time as progress changes for screen reader announcements
3. **aria-valuemin/valuemax** - Always set \`aria-valuemin="0"\` and \`aria-valuemax="100"\` (or custom max) to establish scale
4. **Descriptive aria-label** - Provide context like \`aria-label="File upload progress"\` or \`aria-label="Installation step 2 of 4"\`
5. **Visual percentage display** - Show numeric percentage (e.g., "65%") adjacent to bar for users who can't perceive bar length
6. **Status text** - Include descriptive text above/below bar ("Uploading files...", "2.4 MB of 3.2 MB") for context
7. **Color + pattern** - Don't rely solely on color; use striped/animated patterns for indeterminate state
8. **Reduced motion** - Disable animations (indeterminate sliding, striped movement) for \`prefers-reduced-motion\`
9. **Completion announcement** - When progress reaches 100%, announce "Upload complete" via \`aria-live="polite"\` region
10. **Error handling** - If progress fails, change to error variant AND announce error message ("Upload failed at 45%")
11. **Keyboard focusable** - For interactive progress (pauseable uploads), make controls keyboard-accessible
12. **Minimum contrast** - Ensure 3:1 contrast ratio between bar fill and background (WCAG AA for graphical objects)
13. **Size accessibility** - Avoid progress-sm (4px) for critical operations; use progress-md (8px) or larger for visibility
14. **Tabular numerals** - Use \`font-variant-numeric: tabular-nums\` for percentage labels to prevent layout shift

## Usage Guidelines

### When to Use

- **File uploads** - Show bytes transferred and estimated time remaining
- **Multi-step forms** - "Step 2 of 4" progress through registration/checkout flows
- **Data processing** - Long-running operations like imports, exports, batch updates
- **Installation/setup** - Software installation, database migration, onboarding wizards
- **Loading with ETA** - Operations where you can calculate % complete and time remaining
- **Background tasks** - Non-blocking operations user can monitor while doing other work

### When NOT to Use

- **Instant operations** - Don't show progress for <500ms operations; use Spinner instead
- **Unknown duration** - If you can't estimate %, use indeterminate Spinner rather than fake progress
- **Page-level loading** - Use Skeleton screens for initial page load placeholders
- **Inline content loading** - Use Spinner for loading small sections (comments, notifications)
- **Real-time streaming** - For live data feeds, use activity indicators not progress bars
- **Downloads in browser** - Browser's native download UI is better; don't duplicate

### Best Practices

- Update progress smoothly (every 100-500ms) to avoid janky animation
- Show time remaining for operations >10 seconds ("45 seconds remaining")
- Use success variant (green) when reaching 100% to signal completion
- For indeterminate progress, add descriptive text ("Analyzing data...") to explain activity
- Disable cancel/pause buttons when progress >95% (too late to safely interrupt)
- For multi-step processes, show both current step (3 of 4) and step progress (60%)
- Use progress-xl with percentage label inside bar for dashboard/monitoring UIs
- Never fake progress; show actual completion based on backend metrics

### Mobile Considerations

- Use minimum 8px height (progress-md) for touch-friendly visibility
- Place percentage label above bar (not floating inside) for narrow screens
- Stack progress with associated text vertically to fit mobile width
- For file uploads, allow swipe-to-cancel gesture on progress card
- Use full-width progress bars in mobile cards/panels
- Reduce animation speed slightly on mobile to improve perceived performance
        `.trim()}}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current progress value (0-100); updates aria-valuenow for screen reader announcements; animate smoothly by updating every 100-500ms"},variant:{control:"select",options:["default","success","warning","error","info"],description:"Semantic color variant indicating progress status (default: primary blue, success: green when complete, warning: yellow for disk usage alerts, error: red for failed operations, info: informational progress)"},size:{control:"select",options:["sm","default","lg","xl"],description:"Visual height of progress bar (sm: 4px for inline/subtle progress, default: 8px for standard UI, lg: 12px for emphasis, xl: 20px for dashboard/monitoring with internal percentage label)"},showLabel:{control:"boolean",description:"Display percentage value inside progress bar fill (only visible on xl size due to height constraints); for smaller sizes, show percentage adjacent to bar instead"},indeterminate:{control:"boolean",description:"Enable indeterminate/unknown-duration mode with sliding animation (use when operation duration cannot be calculated); omits aria-valuenow since no meaningful progress value exists"},ariaLabel:{control:"text",description:'Accessible label describing the progress operation (e.g., "File upload progress", "Installation step 2 of 4"); announced to screen readers along with current percentage'}}},b={render:e=>{const o=document.createElement("div");o.style.padding="2rem",o.style.maxWidth="600px";const t=document.createElement("div"),a=["progress"];e.size&&e.size!=="default"&&a.push(`progress-${e.size}`),e.variant&&e.variant!=="default"&&a.push(`progress-${e.variant}`),e.indeterminate&&a.push("progress-indeterminate"),t.className=a.join(" "),e.indeterminate||(t.setAttribute("role","progressbar"),t.setAttribute("aria-label",e.ariaLabel||"Progress"),t.setAttribute("aria-valuenow",e.value.toString()),t.setAttribute("aria-valuemin","0"),t.setAttribute("aria-valuemax","100"));const r=document.createElement("div");return r.className="progress-bar",e.indeterminate||(r.style.width=`${e.value}%`),e.showLabel&&!e.indeterminate&&(r.textContent=`${e.value}%`),t.appendChild(r),o.appendChild(t),o},args:{value:65,variant:"default",size:"default",showLabel:!1,indeterminate:!1,ariaLabel:"Progress"}},y={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const o=document.createElement("div");o.style.marginBottom="var(--space-2)",o.style.display="flex",o.style.justifyContent="space-between";const t=document.createElement("span");t.style.fontSize="var(--text-sm)",t.style.color="var(--color-text-secondary)",t.textContent="Uploading files...";const a=document.createElement("span");a.style.fontSize="var(--text-sm)",a.style.fontWeight="var(--font-semibold)",a.style.color="var(--color-text-primary)",a.textContent="65%",o.appendChild(t),o.appendChild(a),e.appendChild(o);const r=document.createElement("div");r.className="progress",r.setAttribute("role","progressbar"),r.setAttribute("aria-label","File upload progress"),r.setAttribute("aria-valuenow","65"),r.setAttribute("aria-valuemin","0"),r.setAttribute("aria-valuemax","100");const n=document.createElement("div");return n.className="progress-bar",n.style.width="65%",r.appendChild(n),e.appendChild(r),e}},h={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)";const o=document.createElement("div"),t=document.createElement("div");t.style.marginBottom="var(--space-2)",t.style.fontSize="var(--text-sm)",t.style.color="var(--color-text-secondary)",t.textContent="Processing data...",o.appendChild(t);const a=document.createElement("div");a.className="progress progress-indeterminate";const r=document.createElement("div");r.className="progress-bar",a.appendChild(r),o.appendChild(a),e.appendChild(o);const n=document.createElement("div"),i=document.createElement("div");i.style.marginBottom="var(--space-2)",i.style.fontSize="var(--text-sm)",i.style.color="var(--color-text-secondary)",i.textContent="Connecting to server...",n.appendChild(i);const s=document.createElement("div");s.className="progress progress-indeterminate progress-info";const l=document.createElement("div");return l.className="progress-bar",s.appendChild(l),n.appendChild(s),e.appendChild(n),e}},f={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="600px",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",[{size:"progress-sm",label:"Small - Inline progress",value:60},{size:"progress",label:"Default - Standard progress",value:60},{size:"progress-lg",label:"Large - Prominent progress",value:60},{size:"progress-xl",label:"Extra Large - With label inside",value:60,showLabel:!0}].forEach(({size:t,label:a,value:r,showLabel:n})=>{const i=document.createElement("div"),s=document.createElement("div");s.style.marginBottom="var(--space-2)",s.style.fontSize="var(--text-sm)",s.style.color="var(--color-text-secondary)",s.textContent=a,i.appendChild(s);const l=document.createElement("div");l.className=t;const c=document.createElement("div");c.className="progress-bar",c.style.width=`${r}%`,n&&(c.textContent=`${r}%`),l.appendChild(c),i.appendChild(l),e.appendChild(i)}),e}},x={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="600px",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",[{variant:"",label:"Default Progress",value:45,ariaLabel:"Default progress"},{variant:"progress-success",label:"Installation Complete",value:100,ariaLabel:"Installation complete"},{variant:"progress-warning",label:"Disk Space Warning",value:85,ariaLabel:"Disk space usage"},{variant:"progress-error",label:"Upload Failed",value:30,ariaLabel:"Upload failed at 30%"},{variant:"progress-info",label:"Download in Progress",value:70,ariaLabel:"Download progress"}].forEach(({variant:t,label:a,value:r,ariaLabel:n})=>{const i=document.createElement("div"),s=document.createElement("div");s.style.marginBottom="var(--space-2)",s.style.fontSize="var(--text-sm)",s.style.color="var(--color-text-secondary)",s.textContent=a,i.appendChild(s);const l=document.createElement("div");l.className=t?`progress ${t}`:"progress",l.setAttribute("role","progressbar"),l.setAttribute("aria-label",n),l.setAttribute("aria-valuenow",r.toString()),l.setAttribute("aria-valuemin","0"),l.setAttribute("aria-valuemax","100");const c=document.createElement("div");c.className="progress-bar",c.style.width=`${r}%`,l.appendChild(c),i.appendChild(l),e.appendChild(i)}),e}},C={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const o=document.createElement("div");o.style.background="var(--color-bg-primary)",o.style.padding="var(--space-4)",o.style.borderRadius="var(--radius-md)",o.style.border="1px solid var(--color-border-medium)";const t=document.createElement("div");t.style.display="flex",t.style.alignItems="center",t.style.gap="var(--space-3)",t.style.marginBottom="var(--space-3)";const a=document.createElement("div");a.style.width="40px",a.style.height="40px",a.style.background="var(--color-primary-subtle)",a.style.borderRadius="var(--radius-md)",a.style.display="flex",a.style.alignItems="center",a.style.justifyContent="center",a.style.flexShrink="0",a.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';const r=document.createElement("div");r.style.flex="1",r.style.minWidth="0";const n=document.createElement("div");n.style.fontWeight="var(--font-semibold)",n.style.color="var(--color-text-primary)",n.style.marginBottom="var(--space-1)",n.textContent="annual-report-2024.pdf";const i=document.createElement("div");i.style.fontSize="var(--text-sm)",i.style.color="var(--color-text-tertiary)",i.textContent="2.4 MB of 3.2 MB • 45 seconds remaining",r.appendChild(n),r.appendChild(i);const s=document.createElement("button");s.className="btn btn-ghost btn-sm",s.style.flexShrink="0",s.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',t.appendChild(a),t.appendChild(r),t.appendChild(s);const l=document.createElement("div");l.className="progress",l.setAttribute("role","progressbar"),l.setAttribute("aria-label","File upload progress"),l.setAttribute("aria-valuenow","75"),l.setAttribute("aria-valuemin","0"),l.setAttribute("aria-valuemax","100");const c=document.createElement("div");return c.className="progress-bar",c.style.width="75%",l.appendChild(c),o.appendChild(t),o.appendChild(l),e.appendChild(o),e}},E={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const o=document.createElement("div");o.style.marginBottom="var(--space-4)";const t=document.createElement("div");t.style.display="flex",t.style.justifyContent="space-between",t.style.marginBottom="var(--space-3)";const a=document.createElement("span");a.style.fontSize="var(--text-sm)",a.style.color="var(--color-text-secondary)",a.textContent="Step 2 of 4: Payment Information";const r=document.createElement("span");r.style.fontSize="var(--text-sm)",r.style.fontWeight="var(--font-semibold)",r.style.color="var(--color-text-primary)",r.textContent="50%",t.appendChild(a),t.appendChild(r),o.appendChild(t);const n=document.createElement("div");n.className="progress progress-lg",n.setAttribute("role","progressbar"),n.setAttribute("aria-label","Checkout progress: step 2 of 4"),n.setAttribute("aria-valuenow","50"),n.setAttribute("aria-valuemin","0"),n.setAttribute("aria-valuemax","100");const i=document.createElement("div");i.className="progress-bar",i.style.width="50%",n.appendChild(i),o.appendChild(n),e.appendChild(o);const s=document.createElement("div");return s.style.display="grid",s.style.gridTemplateColumns="repeat(4, 1fr)",s.style.gap="var(--space-2)",[{icon:"✓",label:"Account",state:"complete"},{icon:"💳",label:"Payment",state:"current"},{icon:"🚚",label:"Shipping",state:"pending"},{icon:"✓",label:"Confirm",state:"pending"}].forEach(({icon:c,label:g,state:m})=>{const d=document.createElement("div");d.style.textAlign="center",d.style.padding="var(--space-2)",d.style.borderRadius="var(--radius-sm)",m==="complete"?d.style.background="var(--color-success-subtle)":m==="current"?d.style.background="var(--color-primary-subtle)":d.style.opacity="0.5";const p=document.createElement("div");p.style.marginBottom="var(--space-1)",p.textContent=c;const u=document.createElement("div");u.style.fontSize="var(--text-xs)",u.style.color=m==="current"?"var(--color-text-primary)":"var(--color-text-secondary)",m==="current"&&(u.style.fontWeight="var(--font-semibold)"),u.textContent=g,d.appendChild(p),d.appendChild(u),s.appendChild(d)}),e.appendChild(s),e}},w={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="900px",e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))",e.style.gap="var(--space-6)",[{title:"Disk Usage",value:"45.2 GB",total:"100 GB",percentage:45,variant:""},{title:"Memory Usage",value:"13.6 GB",total:"16 GB",percentage:85,variant:"progress-warning"}].forEach(({title:t,value:a,total:r,percentage:n,variant:i})=>{const s=document.createElement("div");s.className="card";const l=document.createElement("div");l.className="card-body";const c=document.createElement("div");c.style.marginBottom="var(--space-3)";const g=document.createElement("div");g.style.fontSize="var(--text-sm)",g.style.color="var(--color-text-tertiary)",g.style.marginBottom="var(--space-1)",g.textContent=t;const m=document.createElement("div");m.style.fontSize="var(--text-2xl)",m.style.fontWeight="var(--font-bold)",m.style.color="var(--color-text-primary)",m.textContent=a,c.appendChild(g),c.appendChild(m);const d=document.createElement("div");d.style.marginTop="var(--space-4)";const p=document.createElement("div");p.style.display="flex",p.style.justifyContent="space-between",p.style.marginBottom="var(--space-2)",p.style.fontSize="var(--text-sm)";const u=document.createElement("span");u.style.color="var(--color-text-tertiary)",u.textContent=`${a} of ${r}`;const v=document.createElement("span");v.style.color=i.includes("warning")?"var(--color-warning)":"var(--color-text-primary)",v.style.fontWeight="var(--font-semibold)",v.textContent=`${n}%`,p.appendChild(u),p.appendChild(v);const A=document.createElement("div");A.className=i?`progress ${i}`:"progress";const B=document.createElement("div");B.className="progress-bar",B.style.width=`${n}%`,A.appendChild(B),d.appendChild(p),d.appendChild(A),l.appendChild(c),l.appendChild(d),s.appendChild(l),e.appendChild(s)}),e}},S={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const o=document.createElement("h3");o.textContent="Simulated Upload Progress",o.style.marginTop="0",o.style.marginBottom="var(--space-3)",e.appendChild(o);const t=document.createElement("div");t.style.marginBottom="var(--space-2)",t.style.display="flex",t.style.justifyContent="space-between";const a=document.createElement("span");a.style.fontSize="var(--text-sm)",a.style.color="var(--color-text-secondary)",a.textContent="Uploading...";const r=document.createElement("span");r.style.fontSize="var(--text-sm)",r.style.fontWeight="var(--font-semibold)",r.style.color="var(--color-text-primary)",r.textContent="0%",t.appendChild(a),t.appendChild(r),e.appendChild(t);const n=document.createElement("div");n.className="progress",n.setAttribute("role","progressbar"),n.setAttribute("aria-label","Upload progress"),n.setAttribute("aria-valuenow","0"),n.setAttribute("aria-valuemin","0"),n.setAttribute("aria-valuemax","100");const i=document.createElement("div");i.className="progress-bar",i.style.width="0%",n.appendChild(i),e.appendChild(n);let s=0;const l=setInterval(()=>{s+=Math.random()*15,s>=100&&(s=100,a.textContent="Upload complete!",n.classList.add("progress-success"),clearInterval(l)),i.style.width=`${s}%`,r.textContent=`${Math.round(s)}%`,n.setAttribute("aria-valuenow",Math.round(s).toString())},500);return e}};var z,L,N;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const progress = document.createElement('div');
    const progressClasses = ['progress'];
    if (args.size && args.size !== 'default') {
      progressClasses.push(\`progress-\${args.size}\`);
    }
    if (args.variant && args.variant !== 'default') {
      progressClasses.push(\`progress-\${args.variant}\`);
    }
    if (args.indeterminate) {
      progressClasses.push('progress-indeterminate');
    }
    progress.className = progressClasses.join(' ');

    // ARIA attributes on wrapper (not on bar)
    if (!args.indeterminate) {
      progress.setAttribute('role', 'progressbar');
      progress.setAttribute('aria-label', args.ariaLabel || 'Progress');
      progress.setAttribute('aria-valuenow', args.value.toString());
      progress.setAttribute('aria-valuemin', '0');
      progress.setAttribute('aria-valuemax', '100');
    }
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    if (!args.indeterminate) {
      bar.style.width = \`\${args.value}%\`;
    }
    if (args.showLabel && !args.indeterminate) {
      bar.textContent = \`\${args.value}%\`;
    }
    progress.appendChild(bar);
    container.appendChild(progress);
    return container;
  },
  args: {
    value: 65,
    variant: 'default',
    size: 'default',
    showLabel: false,
    indeterminate: false,
    ariaLabel: 'Progress'
  }
}`,...(N=(L=b.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var k,P,D;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    // Label and percentage
    const header = document.createElement('div');
    header.style.marginBottom = 'var(--space-2)';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    const label = document.createElement('span');
    label.style.fontSize = 'var(--text-sm)';
    label.style.color = 'var(--color-text-secondary)';
    label.textContent = 'Uploading files...';
    const percentage = document.createElement('span');
    percentage.style.fontSize = 'var(--text-sm)';
    percentage.style.fontWeight = 'var(--font-semibold)';
    percentage.style.color = 'var(--color-text-primary)';
    percentage.textContent = '65%';
    header.appendChild(label);
    header.appendChild(percentage);
    container.appendChild(header);

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'File upload progress');
    progress.setAttribute('aria-valuenow', '65');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.style.width = '65%';
    progress.appendChild(bar);
    container.appendChild(progress);
    return container;
  }
}`,...(D=(P=y.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var U,W,$;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    // Default indeterminate
    const wrapper1 = document.createElement('div');
    const label1 = document.createElement('div');
    label1.style.marginBottom = 'var(--space-2)';
    label1.style.fontSize = 'var(--text-sm)';
    label1.style.color = 'var(--color-text-secondary)';
    label1.textContent = 'Processing data...';
    wrapper1.appendChild(label1);
    const progress1 = document.createElement('div');
    progress1.className = 'progress progress-indeterminate';
    const bar1 = document.createElement('div');
    bar1.className = 'progress-bar';
    progress1.appendChild(bar1);
    wrapper1.appendChild(progress1);
    container.appendChild(wrapper1);

    // Info indeterminate
    const wrapper2 = document.createElement('div');
    const label2 = document.createElement('div');
    label2.style.marginBottom = 'var(--space-2)';
    label2.style.fontSize = 'var(--text-sm)';
    label2.style.color = 'var(--color-text-secondary)';
    label2.textContent = 'Connecting to server...';
    wrapper2.appendChild(label2);
    const progress2 = document.createElement('div');
    progress2.className = 'progress progress-indeterminate progress-info';
    const bar2 = document.createElement('div');
    bar2.className = 'progress-bar';
    progress2.appendChild(bar2);
    wrapper2.appendChild(progress2);
    container.appendChild(wrapper2);
    return container;
  }
}`,...($=(W=h.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var I,R,M;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    const sizes = [{
      size: 'progress-sm',
      label: 'Small - Inline progress',
      value: 60
    }, {
      size: 'progress',
      label: 'Default - Standard progress',
      value: 60
    }, {
      size: 'progress-lg',
      label: 'Large - Prominent progress',
      value: 60
    }, {
      size: 'progress-xl',
      label: 'Extra Large - With label inside',
      value: 60,
      showLabel: true
    }];
    sizes.forEach(({
      size,
      label,
      value,
      showLabel
    }) => {
      const wrapper = document.createElement('div');
      const labelEl = document.createElement('div');
      labelEl.style.marginBottom = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;
      wrapper.appendChild(labelEl);
      const progress = document.createElement('div');
      progress.className = size;
      const bar = document.createElement('div');
      bar.className = 'progress-bar';
      bar.style.width = \`\${value}%\`;
      if (showLabel) {
        bar.textContent = \`\${value}%\`;
      }
      progress.appendChild(bar);
      wrapper.appendChild(progress);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(M=(R=f.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var F,j,T;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    const variants = [{
      variant: '',
      label: 'Default Progress',
      value: 45,
      ariaLabel: 'Default progress'
    }, {
      variant: 'progress-success',
      label: 'Installation Complete',
      value: 100,
      ariaLabel: 'Installation complete'
    }, {
      variant: 'progress-warning',
      label: 'Disk Space Warning',
      value: 85,
      ariaLabel: 'Disk space usage'
    }, {
      variant: 'progress-error',
      label: 'Upload Failed',
      value: 30,
      ariaLabel: 'Upload failed at 30%'
    }, {
      variant: 'progress-info',
      label: 'Download in Progress',
      value: 70,
      ariaLabel: 'Download progress'
    }];
    variants.forEach(({
      variant,
      label,
      value,
      ariaLabel
    }) => {
      const wrapper = document.createElement('div');
      const labelEl = document.createElement('div');
      labelEl.style.marginBottom = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;
      wrapper.appendChild(labelEl);
      const progress = document.createElement('div');
      progress.className = variant ? \`progress \${variant}\` : 'progress';
      progress.setAttribute('role', 'progressbar');
      progress.setAttribute('aria-label', ariaLabel);
      progress.setAttribute('aria-valuenow', value.toString());
      progress.setAttribute('aria-valuemin', '0');
      progress.setAttribute('aria-valuemax', '100');
      const bar = document.createElement('div');
      bar.className = 'progress-bar';
      bar.style.width = \`\${value}%\`;
      progress.appendChild(bar);
      wrapper.appendChild(progress);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(T=(j=x.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var G,H,V;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const card = document.createElement('div');
    card.style.background = 'var(--color-bg-primary)';
    card.style.padding = 'var(--space-4)';
    card.style.borderRadius = 'var(--radius-md)';
    card.style.border = '1px solid var(--color-border-medium)';

    // File info row
    const fileRow = document.createElement('div');
    fileRow.style.display = 'flex';
    fileRow.style.alignItems = 'center';
    fileRow.style.gap = 'var(--space-3)';
    fileRow.style.marginBottom = 'var(--space-3)';

    // File icon
    const iconBox = document.createElement('div');
    iconBox.style.width = '40px';
    iconBox.style.height = '40px';
    iconBox.style.background = 'var(--color-primary-subtle)';
    iconBox.style.borderRadius = 'var(--radius-md)';
    iconBox.style.display = 'flex';
    iconBox.style.alignItems = 'center';
    iconBox.style.justifyContent = 'center';
    iconBox.style.flexShrink = '0';
    iconBox.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';

    // File details
    const fileDetails = document.createElement('div');
    fileDetails.style.flex = '1';
    fileDetails.style.minWidth = '0';
    const fileName = document.createElement('div');
    fileName.style.fontWeight = 'var(--font-semibold)';
    fileName.style.color = 'var(--color-text-primary)';
    fileName.style.marginBottom = 'var(--space-1)';
    fileName.textContent = 'annual-report-2024.pdf';
    const fileSize = document.createElement('div');
    fileSize.style.fontSize = 'var(--text-sm)';
    fileSize.style.color = 'var(--color-text-tertiary)';
    fileSize.textContent = '2.4 MB of 3.2 MB • 45 seconds remaining';
    fileDetails.appendChild(fileName);
    fileDetails.appendChild(fileSize);

    // Cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'btn btn-ghost btn-sm';
    cancelBtn.style.flexShrink = '0';
    cancelBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    fileRow.appendChild(iconBox);
    fileRow.appendChild(fileDetails);
    fileRow.appendChild(cancelBtn);

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'File upload progress');
    progress.setAttribute('aria-valuenow', '75');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.style.width = '75%';
    progress.appendChild(bar);
    card.appendChild(fileRow);
    card.appendChild(progress);
    container.appendChild(card);
    return container;
  }
}`,...(V=(H=C.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var O,_,K;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    // Progress header
    const header = document.createElement('div');
    header.style.marginBottom = 'var(--space-4)';
    const headerRow = document.createElement('div');
    headerRow.style.display = 'flex';
    headerRow.style.justifyContent = 'space-between';
    headerRow.style.marginBottom = 'var(--space-3)';
    const stepLabel = document.createElement('span');
    stepLabel.style.fontSize = 'var(--text-sm)';
    stepLabel.style.color = 'var(--color-text-secondary)';
    stepLabel.textContent = 'Step 2 of 4: Payment Information';
    const percentage = document.createElement('span');
    percentage.style.fontSize = 'var(--text-sm)';
    percentage.style.fontWeight = 'var(--font-semibold)';
    percentage.style.color = 'var(--color-text-primary)';
    percentage.textContent = '50%';
    headerRow.appendChild(stepLabel);
    headerRow.appendChild(percentage);
    header.appendChild(headerRow);

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'progress progress-lg';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'Checkout progress: step 2 of 4');
    progress.setAttribute('aria-valuenow', '50');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.style.width = '50%';
    progress.appendChild(bar);
    header.appendChild(progress);
    container.appendChild(header);

    // Step indicators
    const steps = document.createElement('div');
    steps.style.display = 'grid';
    steps.style.gridTemplateColumns = 'repeat(4, 1fr)';
    steps.style.gap = 'var(--space-2)';
    const stepData = [{
      icon: '✓',
      label: 'Account',
      state: 'complete'
    }, {
      icon: '💳',
      label: 'Payment',
      state: 'current'
    }, {
      icon: '🚚',
      label: 'Shipping',
      state: 'pending'
    }, {
      icon: '✓',
      label: 'Confirm',
      state: 'pending'
    }];
    stepData.forEach(({
      icon,
      label,
      state
    }) => {
      const step = document.createElement('div');
      step.style.textAlign = 'center';
      step.style.padding = 'var(--space-2)';
      step.style.borderRadius = 'var(--radius-sm)';
      if (state === 'complete') {
        step.style.background = 'var(--color-success-subtle)';
      } else if (state === 'current') {
        step.style.background = 'var(--color-primary-subtle)';
      } else {
        step.style.opacity = '0.5';
      }
      const iconEl = document.createElement('div');
      iconEl.style.marginBottom = 'var(--space-1)';
      iconEl.textContent = icon;
      const labelEl = document.createElement('div');
      labelEl.style.fontSize = 'var(--text-xs)';
      labelEl.style.color = state === 'current' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)';
      if (state === 'current') {
        labelEl.style.fontWeight = 'var(--font-semibold)';
      }
      labelEl.textContent = label;
      step.appendChild(iconEl);
      step.appendChild(labelEl);
      steps.appendChild(step);
    });
    container.appendChild(steps);
    return container;
  }
}`,...(K=(_=E.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var q,J,Q;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '900px';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    container.style.gap = 'var(--space-6)';
    const stats = [{
      title: 'Disk Usage',
      value: '45.2 GB',
      total: '100 GB',
      percentage: 45,
      variant: ''
    }, {
      title: 'Memory Usage',
      value: '13.6 GB',
      total: '16 GB',
      percentage: 85,
      variant: 'progress-warning'
    }];
    stats.forEach(({
      title,
      value,
      total,
      percentage,
      variant
    }) => {
      const card = document.createElement('div');
      card.className = 'card';
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      // Header
      const header = document.createElement('div');
      header.style.marginBottom = 'var(--space-3)';
      const titleEl = document.createElement('div');
      titleEl.style.fontSize = 'var(--text-sm)';
      titleEl.style.color = 'var(--color-text-tertiary)';
      titleEl.style.marginBottom = 'var(--space-1)';
      titleEl.textContent = title;
      const valueEl = document.createElement('div');
      valueEl.style.fontSize = 'var(--text-2xl)';
      valueEl.style.fontWeight = 'var(--font-bold)';
      valueEl.style.color = 'var(--color-text-primary)';
      valueEl.textContent = value;
      header.appendChild(titleEl);
      header.appendChild(valueEl);

      // Progress section
      const progressSection = document.createElement('div');
      progressSection.style.marginTop = 'var(--space-4)';
      const progressLabel = document.createElement('div');
      progressLabel.style.display = 'flex';
      progressLabel.style.justifyContent = 'space-between';
      progressLabel.style.marginBottom = 'var(--space-2)';
      progressLabel.style.fontSize = 'var(--text-sm)';
      const totalLabel = document.createElement('span');
      totalLabel.style.color = 'var(--color-text-tertiary)';
      totalLabel.textContent = \`\${value} of \${total}\`;
      const percentLabel = document.createElement('span');
      percentLabel.style.color = variant.includes('warning') ? 'var(--color-warning)' : 'var(--color-text-primary)';
      percentLabel.style.fontWeight = 'var(--font-semibold)';
      percentLabel.textContent = \`\${percentage}%\`;
      progressLabel.appendChild(totalLabel);
      progressLabel.appendChild(percentLabel);
      const progress = document.createElement('div');
      progress.className = variant ? \`progress \${variant}\` : 'progress';
      const bar = document.createElement('div');
      bar.className = 'progress-bar';
      bar.style.width = \`\${percentage}%\`;
      progress.appendChild(bar);
      progressSection.appendChild(progressLabel);
      progressSection.appendChild(progress);
      cardBody.appendChild(header);
      cardBody.appendChild(progressSection);
      card.appendChild(cardBody);
      container.appendChild(card);
    });
    return container;
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const title = document.createElement('h3');
    title.textContent = 'Simulated Upload Progress';
    title.style.marginTop = '0';
    title.style.marginBottom = 'var(--space-3)';
    container.appendChild(title);

    // Progress header
    const header = document.createElement('div');
    header.style.marginBottom = 'var(--space-2)';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    const label = document.createElement('span');
    label.style.fontSize = 'var(--text-sm)';
    label.style.color = 'var(--color-text-secondary)';
    label.textContent = 'Uploading...';
    const percentageLabel = document.createElement('span');
    percentageLabel.style.fontSize = 'var(--text-sm)';
    percentageLabel.style.fontWeight = 'var(--font-semibold)';
    percentageLabel.style.color = 'var(--color-text-primary)';
    percentageLabel.textContent = '0%';
    header.appendChild(label);
    header.appendChild(percentageLabel);
    container.appendChild(header);

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'Upload progress');
    progress.setAttribute('aria-valuenow', '0');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.style.width = '0%';
    progress.appendChild(bar);
    container.appendChild(progress);

    // Simulate upload progress
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 15;
      if (value >= 100) {
        value = 100;
        label.textContent = 'Upload complete!';
        progress.classList.add('progress-success');
        clearInterval(interval);
      }
      bar.style.width = \`\${value}%\`;
      percentageLabel.textContent = \`\${Math.round(value)}%\`;
      progress.setAttribute('aria-valuenow', Math.round(value).toString());
    }, 500);
    return container;
  }
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const te=["Default","BasicProgress","IndeterminateProgress","Sizes","SemanticColors","FileUploadPattern","MultiStepProgress","DashboardStats","AnimatedUpload"];export{S as AnimatedUpload,y as BasicProgress,w as DashboardStats,b as Default,C as FileUploadPattern,h as IndeterminateProgress,E as MultiStepProgress,x as SemanticColors,f as Sizes,te as __namedExportsOrder,ee as default};
