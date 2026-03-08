const q={title:"Components/Card",tags:["autodocs"],parameters:{docs:{description:{component:`
# Card Component

Flexible, composable content containers for organizing and displaying related information. Cards group related content and actions into a single container with consistent styling and spacing.

Use cards to display content such as articles, product information, user profiles, statistics, or any grouped set of information that forms a cohesive unit.

## When to Use

- **Content grouping**: Organize related information into scannable, digestible chunks
- **Product catalogs**: Display product images, titles, descriptions, and pricing
- **User profiles**: Show avatar, name, bio, and actions in a compact format
- **Dashboard widgets**: Present stats, charts, and metrics in modular containers
- **Article previews**: Display blog post summaries with images and metadata

## When NOT to Use

- **Single pieces of information**: Use text or typography components instead
- **Navigation**: Use Tabs, Navbar, or Sidebar components for navigation
- **Alerts**: Use Alert component for important messages
- **Forms**: While cards can contain forms, simple forms don't need card wrappers

## Framework Examples

### Vanilla HTML
\`\`\`html
<!-- Basic card -->
<div class="card">
  <div class="card-body">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
  </div>
</div>

<!-- Card with header and footer -->
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Project Status</h3>
    <span class="badge badge-success">Active</span>
  </div>
  <div class="card-body">
    <p>Project details and description.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">View</button>
    <button class="btn btn-ghost btn-sm">Edit</button>
  </div>
</div>

<!-- Card with image -->
<div class="card">
  <div class="card-image">
    <img src="image.jpg" alt="Product image">
  </div>
  <div class="card-body">
    <h3>Product Name</h3>
    <p>Product description.</p>
  </div>
</div>
\`\`\`

### React
\`\`\`jsx
// Basic card component
function Card({ children }) {
  return (
    <div className="card">
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Full-featured card with TypeScript
interface CardProps {
  title?: string;
  badge?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  hover?: boolean;
  children: React.ReactNode;
}

function Card({
  title,
  badge,
  image,
  imageAlt = '',
  footer,
  hover = false,
  children
}: CardProps) {
  return (
    <div className={\`card \${hover ? 'card-hover' : ''}\`}>
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt} />
        </div>
      )}
      {(title || badge) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {badge}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
}

// Usage
<Card
  title="Project Status"
  badge={<span className="badge badge-success">Active</span>}
  footer={
    <>
      <button className="btn btn-primary btn-sm">View</button>
      <button className="btn btn-ghost btn-sm">Edit</button>
    </>
  }
>
  <p>Project details go here.</p>
</Card>
\`\`\`

### Vue
\`\`\`vue
<template>
  <!-- Basic card -->
  <div class="card">
    <div class="card-body">
      <slot />
    </div>
  </div>

  <!-- Full-featured card -->
  <div :class="['card', { 'card-hover': hover }]">
    <div v-if="image" class="card-image">
      <img :src="image" :alt="imageAlt" />
    </div>
    <div v-if="title || badge" class="card-header">
      <h3 v-if="title" class="card-title">{{ title }}</h3>
      <slot name="badge" />
    </div>
    <div class="card-body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  badge: Boolean,
  image: String,
  imageAlt: { type: String, default: '' },
  hover: { type: Boolean, default: false }
});
<\/script>

<!-- Usage -->
<Card
  title="Project Status"
  :badge="true"
  :hover="true"
>
  <template #badge>
    <span class="badge badge-success">Active</span>
  </template>

  <p>Project details go here.</p>

  <template #footer>
    <button class="btn btn-primary btn-sm">View</button>
    <button class="btn btn-ghost btn-sm">Edit</button>
  </template>
</Card>
\`\`\`

### Svelte
\`\`\`svelte
<script>
  export let title = '';
  export let badge = false;
  export let image = '';
  export let imageAlt = '';
  export let footer = false;
  export let hover = false;
<\/script>

<div class="card" class:card-hover={hover}>
  {#if image}
    <div class="card-image">
      <img src={image} alt={imageAlt} />
    </div>
  {/if}

  {#if title || badge}
    <div class="card-header">
      {#if title}
        <h3 class="card-title">{title}</h3>
      {/if}
      {#if badge}
        <slot name="badge" />
      {/if}
    </div>
  {/if}

  <div class="card-body">
    <slot />
  </div>

  {#if footer}
    <div class="card-footer">
      <slot name="footer" />
    </div>
  {/if}
</div>

<!-- Usage -->
<Card
  title="Project Status"
  badge={true}
  hover={true}
>
  <span slot="badge" class="badge badge-success">Active</span>

  <p>Project details go here.</p>

  <div slot="footer">
    <button class="btn btn-primary btn-sm">View</button>
    <button class="btn btn-ghost btn-sm">Edit</button>
  </div>
</Card>
\`\`\`

## Accessibility

1. **Semantic HTML structure**: Cards use proper HTML elements (divs for containers, h3 for titles, p for descriptions)
2. **Heading hierarchy**: Card titles use appropriate heading levels (h3 by default) that fit within page structure
3. **Landmarks**: When cards contain navigation, use \`<nav>\` elements with \`aria-label\`
4. **Focus management**: Hoverable/clickable cards should be focusable with visible focus indicators
5. **Keyboard navigation**: Interactive cards should respond to Enter/Space keys
6. **Button elements**: Use \`<button>\` for actions, not \`<div>\` with click handlers
7. **Image alternatives**: All images must have descriptive \`alt\` text
8. **Color contrast**: Text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
9. **Touch targets**: Interactive elements meet minimum 44×44px touch target size
10. **Responsive design**: Cards adapt to mobile screens without horizontal scrolling
11. **Motion preferences**: Hover animations respect \`prefers-reduced-motion\` setting
12. **Screen reader text**: Use \`.sr-only\` class for additional context when needed
13. **ARIA labels**: Add \`aria-label\` or \`aria-labelledby\` when card purpose isn't clear from content
14. **Link vs button**: Use links (\`<a>\`) for navigation, buttons (\`<button>\`) for actions

## Usage Guidelines

### Best Practices

- **Consistent spacing**: Use card-body, card-header, and card-footer for consistent internal spacing
- **Content hierarchy**: Place most important information at the top
- **Action placement**: Primary actions in footer, secondary actions in header
- **Image aspect ratios**: Maintain consistent aspect ratios in card grids (1:1 or 16:9)
- **Scannable content**: Keep text concise and easy to scan
- **Visual balance**: Balance text with whitespace and visual elements

### Grid Layouts

Cards work best in responsive grids:
\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
}
\`\`\`

### Mobile Considerations

- Cards stack vertically on mobile devices
- Reduce padding on smaller screens (handled automatically)
- Ensure touch targets are at least 44×44px
- Consider horizontal cards for mobile list views
- Footer buttons may wrap on narrow screens (automatic)
- Images maintain aspect ratio and don't overflow

### Composition Patterns

**Header patterns**:
- Title only: Simple identification
- Title + Badge: Status indicators
- Title + Icon: Visual categorization
- Title + Actions: Quick access to common actions

**Body patterns**:
- Text only: Simple content
- Text + Image: Rich content with visuals
- List items: Structured information
- Mixed content: Combine text, images, lists, metrics

**Footer patterns**:
- Actions only: Primary and secondary buttons
- Metadata only: Timestamps, author info
- Actions + Metadata: Combined information and actions
- Empty footer: When no footer content is needed

### Variants

- **card-hover**: Add lift effect on hover (for clickable cards)
- **card-compact**: Reduced padding for denser layouts
- **card-bordered**: Add colored left border accent
- **card-active**: Highlight selected/active state
- **Color variants**: card-primary, card-success, card-warning, card-error (for bordered accent)
        `.trim()}}},argTypes:{hover:{control:"boolean",description:"Enable hover effect with lift animation and shadow. Use for clickable/interactive cards. Automatically includes focus states for keyboard navigation."}}},i={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px";const t=document.createElement("div");return t.className="card",t.innerHTML=`
      <div class="card-body">
        <h3 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Simple Card</h3>
        <p style="margin: 0; color: var(--color-text-secondary);">A basic card with just a body. Perfect for simple content grouping without extra decoration.</p>
      </div>
    `,e.appendChild(t),e}},o={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px";const t=document.createElement("div");return t.className="card",t.innerHTML=`
      <div class="card-header">
        <h3 class="card-title">Project Status</h3>
        <span class="badge badge-success">Active</span>
      </div>
      <div class="card-body">
        <p style="margin: 0; color: var(--color-text-secondary);">This project is currently in active development. The team is working on implementing new features and bug fixes.</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary btn-sm">View Details</button>
        <button class="btn btn-ghost btn-sm">Edit</button>
      </div>
    `,e.appendChild(t),e}},s={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="300px";const t=document.createElement("div");return t.className="card",t.innerHTML=`
      <div class="card-body">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-3);">
          <h4 style="margin: 0; color: var(--color-text-primary);">Total Revenue</h4>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <div style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-text-primary); margin-bottom: var(--space-2);">$45,231</div>
        <div style="display: flex; align-items: center; gap: var(--space-2);">
          <span class="badge badge-success badge-sm">
            ↑ 12%
          </span>
          <span style="font-size: var(--text-sm); color: var(--color-text-tertiary);">vs last month</span>
        </div>
      </div>
    `,e.appendChild(t),e}},n={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="300px";const t=document.createElement("div");return t.className="card",t.innerHTML=`
      <div class="card-image" style="height: 160px; background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); display: flex; align-items: center; justify-content: center; color: white; font-size: var(--text-3xl);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      </div>
      <div class="card-body">
        <h3 style="margin: 0 0 var(--space-3) 0; color: var(--color-text-primary); font-size: var(--text-lg); font-weight: var(--font-semibold);">Design System</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed);">Complete design system with 60+ components and utilities.</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary btn-sm" style="width: 100%;">Learn More</button>
      </div>
    `,e.appendChild(t),e}},c={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="320px";const t=document.createElement("div");return t.className="card",t.innerHTML=`
      <div class="card-image" style="height: 200px; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; color: white;">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      </div>
      <div class="card-body">
        <span class="badge badge-primary badge-sm" style="margin-bottom: var(--space-2);">New</span>
        <h3 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary); font-size: var(--text-lg);">Product Name</h3>
        <p style="margin: 0 0 var(--space-4) 0; color: var(--color-text-secondary); font-size: var(--text-sm);">High-quality product with amazing features and excellent reviews.</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: var(--color-text-primary);">$29.99</span>
          <button class="btn btn-primary btn-sm">Add to Cart</button>
        </div>
      </div>
    `,e.appendChild(t),e}},d={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="250px";const t=document.createElement("button");return t.className="card card-hover",t.style.border="inherit",t.style.background="inherit",t.style.textAlign="inherit",t.style.width="100%",t.setAttribute("aria-label","Manage team members"),t.innerHTML=`
      <div class="card-body" style="text-align: center;">
        <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); background: var(--color-primary-subtle); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-primary);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h4 style="margin: 0 0 var(--space-1) 0; color: var(--color-text-primary);">Team</h4>
        <p style="margin: 0; color: var(--color-text-tertiary); font-size: var(--text-sm);">Manage members</p>
      </div>
    `,e.appendChild(t),e}},l={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const t=document.createElement("div");return t.className="card",t.style.padding="0",t.style.overflow="hidden",t.innerHTML=`
      <div style="display: flex;">
        <div style="width: 200px; min-height: 180px; background: linear-gradient(135deg, var(--color-warning), var(--color-error)); flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: white;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <div style="flex: 1; padding: var(--space-6); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h3 style="margin: 0 0 var(--space-3) 0; color: var(--color-text-primary); font-size: var(--text-lg); font-weight: var(--font-semibold);">Premium Plan</h3>
            <p style="margin: 0 0 var(--space-4) 0; color: var(--color-text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed);">All features included with priority support and custom integrations.</p>
            <div style="display: flex; align-items: baseline; gap: var(--space-2);">
              <span style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-text-primary);">$99</span>
              <span style="color: var(--color-text-tertiary); font-size: var(--text-sm);">/month</span>
            </div>
          </div>
          <div style="margin-top: var(--space-5);">
            <button class="btn btn-primary btn-sm">Subscribe Now</button>
          </div>
        </div>
      </div>
    `,e.appendChild(t),e}},p={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))",e.style.gap="var(--space-6)",[{title:"Total Revenue",value:"$45,231",change:"+12%",trend:"up",icon:'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>'},{title:"New Users",value:"1,429",change:"+8%",trend:"up",icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>'},{title:"Conversion Rate",value:"3.24%",change:"-2%",trend:"down",icon:'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>'}].forEach(({title:v,value:g,change:y,trend:r,icon:h})=>{const a=document.createElement("div");a.className="card";const G=r==="up"?"badge-success":"badge-error",O=r==="up"?"var(--color-success)":"var(--color-error)";a.innerHTML=`
        <div class="card-body">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-3);">
            <h4 style="margin: 0; color: var(--color-text-primary);">${v}</h4>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${O}" stroke-width="2">
              ${h}
            </svg>
          </div>
          <div style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-text-primary); margin-bottom: var(--space-2);">${g}</div>
          <div style="display: flex; align-items: center; gap: var(--space-2);">
            <span class="badge ${G} badge-sm">
              ${y}
            </span>
            <span style="font-size: var(--text-sm); color: var(--color-text-tertiary);">vs last month</span>
          </div>
        </div>
      `,e.appendChild(a)}),e}},m={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))",e.style.gap="var(--space-6)",[{title:"Fast Performance",description:"Lightning-fast load times",color:"var(--color-primary)",bgColor:"var(--color-primary-subtle)",icon:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>'},{title:"Secure by Default",description:"Built-in security features",color:"var(--color-success)",bgColor:"var(--color-success-subtle)",icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>'},{title:"Mobile Friendly",description:"Responsive everywhere",color:"var(--color-secondary)",bgColor:"var(--color-secondary-subtle)",icon:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>'}].forEach(({title:v,description:g,color:y,bgColor:r,icon:h})=>{const a=document.createElement("div");a.className="card",a.innerHTML=`
        <div class="card-body" style="text-align: center;">
          <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); background: ${r}; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: ${y};">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${h}
            </svg>
          </div>
          <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">${v}</h4>
          <p style="margin: 0; color: var(--color-text-secondary); font-size: var(--text-sm);">${g}</p>
        </div>
      `,e.appendChild(a)}),e}};var u,b,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = \`
      <div class="card-body">
        <h3 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">Simple Card</h3>
        <p style="margin: 0; color: var(--color-text-secondary);">A basic card with just a body. Perfect for simple content grouping without extra decoration.</p>
      </div>
    \`;
    container.appendChild(card);
    return container;
  }
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,w,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = \`
      <div class="card-header">
        <h3 class="card-title">Project Status</h3>
        <span class="badge badge-success">Active</span>
      </div>
      <div class="card-body">
        <p style="margin: 0; color: var(--color-text-secondary);">This project is currently in active development. The team is working on implementing new features and bug fixes.</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary btn-sm">View Details</button>
        <button class="btn btn-ghost btn-sm">Edit</button>
      </div>
    \`;
    container.appendChild(card);
    return container;
  }
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,M,E;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '300px';
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = \`
      <div class="card-body">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-3);">
          <h4 style="margin: 0; color: var(--color-text-primary);">Total Revenue</h4>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <div style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-text-primary); margin-bottom: var(--space-2);">$45,231</div>
        <div style="display: flex; align-items: center; gap: var(--space-2);">
          <span class="badge badge-success badge-sm">
            ↑ 12%
          </span>
          <span style="font-size: var(--text-sm); color: var(--color-text-tertiary);">vs last month</span>
        </div>
      </div>
    \`;
    container.appendChild(card);
    return container;
  }
}`,...(E=(M=s.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var A,T,z;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '300px';
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = \`
      <div class="card-image" style="height: 160px; background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); display: flex; align-items: center; justify-content: center; color: white; font-size: var(--text-3xl);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      </div>
      <div class="card-body">
        <h3 style="margin: 0 0 var(--space-3) 0; color: var(--color-text-primary); font-size: var(--text-lg); font-weight: var(--font-semibold);">Design System</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed);">Complete design system with 60+ components and utilities.</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary btn-sm" style="width: 100%;">Learn More</button>
      </div>
    \`;
    container.appendChild(card);
    return container;
  }
}`,...(z=(T=n.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var H,N,S;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '320px';
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = \`
      <div class="card-image" style="height: 200px; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; color: white;">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      </div>
      <div class="card-body">
        <span class="badge badge-primary badge-sm" style="margin-bottom: var(--space-2);">New</span>
        <h3 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary); font-size: var(--text-lg);">Product Name</h3>
        <p style="margin: 0 0 var(--space-4) 0; color: var(--color-text-secondary); font-size: var(--text-sm);">High-quality product with amazing features and excellent reviews.</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: var(--color-text-primary);">$29.99</span>
          <button class="btn btn-primary btn-sm">Add to Cart</button>
        </div>
      </div>
    \`;
    container.appendChild(card);
    return container;
  }
}`,...(S=(N=c.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var P,j,$;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '250px';
    const card = document.createElement('button');
    card.className = 'card card-hover';
    card.style.border = 'inherit';
    card.style.background = 'inherit';
    card.style.textAlign = 'inherit';
    card.style.width = '100%';
    card.setAttribute('aria-label', 'Manage team members');
    card.innerHTML = \`
      <div class="card-body" style="text-align: center;">
        <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); background: var(--color-primary-subtle); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-primary);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h4 style="margin: 0 0 var(--space-1) 0; color: var(--color-text-primary);">Team</h4>
        <p style="margin: 0; color: var(--color-text-tertiary); font-size: var(--text-sm);">Manage members</p>
      </div>
    \`;
    container.appendChild(card);
    return container;
  }
}`,...($=(j=d.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var L,B,W;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const card = document.createElement('div');
    card.className = 'card';
    card.style.padding = '0';
    card.style.overflow = 'hidden';
    card.innerHTML = \`
      <div style="display: flex;">
        <div style="width: 200px; min-height: 180px; background: linear-gradient(135deg, var(--color-warning), var(--color-error)); flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: white;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <div style="flex: 1; padding: var(--space-6); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h3 style="margin: 0 0 var(--space-3) 0; color: var(--color-text-primary); font-size: var(--text-lg); font-weight: var(--font-semibold);">Premium Plan</h3>
            <p style="margin: 0 0 var(--space-4) 0; color: var(--color-text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed);">All features included with priority support and custom integrations.</p>
            <div style="display: flex; align-items: baseline; gap: var(--space-2);">
              <span style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-text-primary);">$99</span>
              <span style="color: var(--color-text-tertiary); font-size: var(--text-sm);">/month</span>
            </div>
          </div>
          <div style="margin-top: var(--space-5);">
            <button class="btn btn-primary btn-sm">Subscribe Now</button>
          </div>
        </div>
      </div>
    \`;
    container.appendChild(card);
    return container;
  }
}`,...(W=(B=l.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var R,U,V;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    container.style.gap = 'var(--space-6)';
    const stats = [{
      title: 'Total Revenue',
      value: '$45,231',
      change: '+12%',
      trend: 'up',
      icon: \`<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>\`
    }, {
      title: 'New Users',
      value: '1,429',
      change: '+8%',
      trend: 'up',
      icon: \`<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\`
    }, {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-2%',
      trend: 'down',
      icon: \`<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>\`
    }];
    stats.forEach(({
      title,
      value,
      change,
      trend,
      icon
    }) => {
      const card = document.createElement('div');
      card.className = 'card';
      const badgeClass = trend === 'up' ? 'badge-success' : 'badge-error';
      const iconColor = trend === 'up' ? 'var(--color-success)' : 'var(--color-error)';
      card.innerHTML = \`
        <div class="card-body">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-3);">
            <h4 style="margin: 0; color: var(--color-text-primary);">\${title}</h4>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="\${iconColor}" stroke-width="2">
              \${icon}
            </svg>
          </div>
          <div style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-text-primary); margin-bottom: var(--space-2);">\${value}</div>
          <div style="display: flex; align-items: center; gap: var(--space-2);">
            <span class="badge \${badgeClass} badge-sm">
              \${change}
            </span>
            <span style="font-size: var(--text-sm); color: var(--color-text-tertiary);">vs last month</span>
          </div>
        </div>
      \`;
      container.appendChild(card);
    });
    return container;
  }
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var F,I,D;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    container.style.gap = 'var(--space-6)';
    const features = [{
      title: 'Fast Performance',
      description: 'Lightning-fast load times',
      color: 'var(--color-primary)',
      bgColor: 'var(--color-primary-subtle)',
      icon: \`<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>\`
    }, {
      title: 'Secure by Default',
      description: 'Built-in security features',
      color: 'var(--color-success)',
      bgColor: 'var(--color-success-subtle)',
      icon: \`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>\`
    }, {
      title: 'Mobile Friendly',
      description: 'Responsive everywhere',
      color: 'var(--color-secondary)',
      bgColor: 'var(--color-secondary-subtle)',
      icon: \`<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>\`
    }];
    features.forEach(({
      title,
      description,
      color,
      bgColor,
      icon
    }) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = \`
        <div class="card-body" style="text-align: center;">
          <div style="width: 48px; height: 48px; margin: 0 auto var(--space-3); background: \${bgColor}; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: \${color};">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              \${icon}
            </svg>
          </div>
          <h4 style="margin: 0 0 var(--space-2) 0; color: var(--color-text-primary);">\${title}</h4>
          <p style="margin: 0; color: var(--color-text-secondary); font-size: var(--text-sm);">\${description}</p>
        </div>
      \`;
      container.appendChild(card);
    });
    return container;
  }
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const K=["BasicCard","WithHeaderAndFooter","StatCard","WithImage","ProductCard","HoverableCard","HorizontalCard","CardGrid","FeatureGrid"];export{i as BasicCard,p as CardGrid,m as FeatureGrid,l as HorizontalCard,d as HoverableCard,c as ProductCard,s as StatCard,o as WithHeaderAndFooter,n as WithImage,K as __namedExportsOrder,q as default};
