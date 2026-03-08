import{c as Q}from"./createThemeGrid-DWAncU4Q.js";const X={title:"Components/Overlays/Popover",tags:["autodocs"],parameters:{docs:{description:{component:`
# Popover Component

Contextual overlays anchored to trigger elements that display rich, interactive content like forms, menus, user profiles, or detailed information.

Use Popovers for supplementary content that relates directly to a specific UI element. Unlike Tooltips which show simple text on hover, Popovers support complex layouts with forms, buttons, lists, and images. They're perfect for user account menus, quick-action panels, inline help content, or detailed previews that don't warrant a full Modal.

Popovers are dismissible overlays that appear on click (or hover for read-only content), positioned intelligently around their trigger element. They provide rich context without navigating away from the current page or blocking the entire interface like a Modal would.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Trigger and popover wrapper -->
<div class="popover-wrapper">
  <button class="btn btn-primary" id="user-menu-trigger">
    User Menu
  </button>

  <div
    class="popover popover-bottom"
    id="user-menu-popover"
    role="dialog"
    aria-labelledby="popover-title"
    hidden
  >
    <div class="popover-header">
      <h3 id="popover-title" class="popover-title">Account</h3>
      <button class="popover-close" aria-label="Close">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    </div>

    <div class="popover-body">
      <div style="display: flex; flex-direction: column; gap: var(--space-2);">
        <button class="btn btn-ghost btn-sm">
          <i data-lucide="user"></i>
          Profile
        </button>
        <button class="btn btn-ghost btn-sm">
          <i data-lucide="settings"></i>
          Settings
        </button>
        <button class="btn btn-ghost btn-sm">
          <i data-lucide="log-out"></i>
          Logout
        </button>
      </div>
    </div>
  </div>
</div>

<script>
  window.Aural?.initPopovers();
<\/script>
\`\`\`

**React:**
\`\`\`jsx
import { useEffect, useRef } from 'react';

function UserMenuPopover() {
  const popoverRef = useRef(null);

  useEffect(() => {
    window.Aural?.initPopovers();
  }, []);

  return (
    <div className="popover-wrapper">
      <button className="btn btn-primary" id="user-menu-trigger">
        User Menu
      </button>

      <div
        ref={popoverRef}
        className="popover popover-bottom"
        id="user-menu-popover"
        role="dialog"
        aria-labelledby="popover-title"
        hidden
      >
        <div className="popover-header">
          <h3 id="popover-title" className="popover-title">
            Account
          </h3>
          <button className="popover-close" aria-label="Close">
            <i data-lucide="x" style={{ width: 16, height: 16 }}></i>
          </button>
        </div>

        <div className="popover-body">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <button className="btn btn-ghost btn-sm">
              <i data-lucide="user"></i>
              Profile
            </button>
            <button className="btn btn-ghost btn-sm">
              <i data-lucide="settings"></i>
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div class="popover-wrapper">
    <button class="btn btn-primary" id="user-menu-trigger">
      User Menu
    </button>

    <div
      class="popover popover-bottom"
      id="user-menu-popover"
      role="dialog"
      aria-labelledby="popover-title"
      hidden
    >
      <div class="popover-header">
        <h3 id="popover-title" class="popover-title">Account</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>

      <div class="popover-body">
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <button class="btn btn-ghost btn-sm">
            <i data-lucide="user"></i>
            Profile
          </button>
          <button class="btn btn-ghost btn-sm">
            <i data-lucide="settings"></i>
            Settings
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.Aural?.initPopovers();
  }
};
<\/script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    window.Aural?.initPopovers();
  });
<\/script>

<div class="popover-wrapper">
  <button class="btn btn-primary" id="user-menu-trigger">
    User Menu
  </button>

  <div
    class="popover popover-bottom"
    id="user-menu-popover"
    role="dialog"
    aria-labelledby="popover-title"
    hidden
  >
    <div class="popover-header">
      <h3 id="popover-title" class="popover-title">Account</h3>
      <button class="popover-close" aria-label="Close">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    </div>

    <div class="popover-body">
      <div style="display: flex; flex-direction: column; gap: var(--space-2);">
        <button class="btn btn-ghost btn-sm">
          <i data-lucide="user"></i>
          Profile
        </button>
        <button class="btn btn-ghost btn-sm">
          <i data-lucide="settings"></i>
          Settings
        </button>
      </div>
    </div>
  </div>
</div>
\`\`\`

## Accessibility

- **Trigger association**: Popover must be wrapped with trigger in \`.popover-wrapper\` for proper positioning
- **Role and labeling**: Use \`role="dialog"\` with \`aria-labelledby\` pointing to the popover title
- **Keyboard navigation**: Escape key closes the popover and returns focus to trigger element
- **Focus management**: Focus moves into popover when opened, returns to trigger when closed
- **Click outside**: Clicking outside the popover dismisses it (configurable for forms)
- **Close button**: Always include a visible close button with \`aria-label="Close"\`
- **Touch targets**: All interactive elements meet 44×44px minimum touch target size
- **Tab sequence**: All focusable elements in popover are reachable via Tab key
- **Arrow keys**: Optional arrow key navigation for menu-style popovers
- **Color contrast**: Text and UI elements meet WCAG AA standards (4.5:1 for text, 3:1 for components)
- **Animation respect**: Popover animations are disabled when \`prefers-reduced-motion\` is set
- **Scrollable content**: Long popover content is scrollable with visible scrollbars

## Usage Guidelines

- **When to use:**
  - User account menus with profile, settings, and logout options
  - Quick action panels with 3-7 related actions
  - Rich tooltips with formatting, images, or interactive elements
  - Inline forms for comments, notes, or quick data entry
  - Detail previews for list items (e.g., contact cards, product info)
  - Filter panels or sorting options near data tables

- **When NOT to use:**
  - For simple text hints — use Tooltip instead for plain text on hover
  - For primary navigation — use Navbar or Drawer for main menu structures
  - For critical decisions — use Modal for confirmations requiring full attention
  - For large forms — navigate to dedicated page or use Drawer for better UX
  - For notifications — use Toast or Snackbar for transient messages
  - For multi-step processes — use Modal or dedicated page for complex flows

- **Best practices:**
  - Keep popover content focused (single purpose, 3-7 actions maximum)
  - Position popovers to avoid covering the trigger element when possible
  - Use \`popover-top\`, \`popover-bottom\`, \`popover-left\`, or \`popover-right\` classes for positioning
  - Set max-width between 250-400px for optimal readability
  - Include header with title for context, especially with complex content
  - Use close button for popovers with forms or multiple actions
  - Consider click-outside-to-close vs. requiring explicit close button based on content criticality
  - Ensure popover doesn't exceed viewport boundaries (auto-positioning recommended)
  - Use subtle backdrop blur for visual separation from main content
  - Test popover positioning at all viewport sizes

- **Mobile considerations:**
  - Popovers automatically adjust position to stay within viewport on small screens
  - Bottom position often works best on mobile (easier to reach with thumbs)
  - Consider using Drawer or Modal for complex mobile popovers (better usability)
  - Ensure touch targets are at least 44×44px for easy tapping
  - Test popover behavior with on-screen keyboards (may obscure content)
  - Keep mobile popover content minimal to avoid scrolling
        `.trim()}}},argTypes:{title:{control:"text",description:"Popover title shown in the header. Visible when showHeader is true. Should be concise (2-4 words) and describe the popover content or action."},content:{control:"text",description:"Main content displayed in the popover body. Can contain text, forms, buttons, lists, or rich HTML. Keep content focused and avoid excessive length to prevent scrolling."},position:{control:"select",options:["top","bottom","left","right"],description:"Position relative to the trigger element. **top** — opens above trigger, good for bottom-screen elements. **bottom** (default) — opens below trigger, most common. **left** — opens to left of trigger, for right-edge elements. **right** — opens to right of trigger, for left-edge elements. Position auto-adjusts if popover would exceed viewport boundaries."},showClose:{control:"boolean",description:"Whether to show the close button in the header. Recommended true for popovers with forms, actions, or complex content. Can be false for simple info popovers that dismiss on click-outside."},showHeader:{control:"boolean",description:"Whether to show the header section with title and optional close button. Set to false for minimal popovers with only body content (e.g., simple menus or info cards)."}}},d={render:t=>{const n=document.createElement("div");n.className="popover-wrapper",n.style.cssText="display: inline-block;";const i=`popover-trigger-${Math.random().toString(36).substr(2,9)}`,o=`popover-${Math.random().toString(36).substr(2,9)}`,e=document.createElement("button");e.className="btn btn-primary",e.id=i,e.textContent="Show Popover";const r=document.createElement("div");if(r.className=`popover popover-${t.position}`,r.id=o,r.setAttribute("role","dialog"),r.setAttribute("aria-labelledby",`${o}-title`),r.setAttribute("hidden",""),t.showHeader){const s=document.createElement("div");s.className="popover-header";const a=document.createElement("h3");if(a.id=`${o}-title`,a.className="popover-title",a.textContent=t.title,t.showClose){const l=document.createElement("button");l.className="popover-close",l.setAttribute("aria-label","Close"),l.innerHTML='<i data-lucide="x" style="width: 16px; height: 16px;"></i>',s.appendChild(a),s.appendChild(l)}else s.appendChild(a);r.appendChild(s)}const p=document.createElement("div");return p.className="popover-body",p.innerHTML=`<p style="margin: 0;">${t.content}</p>`,r.appendChild(p),n.appendChild(e),n.appendChild(r),setTimeout(()=>{var s;(s=window.Aural)!=null&&s.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),n},args:{title:"Popover Title",content:"This is a basic popover with a title and some content.",position:"bottom",showClose:!0,showHeader:!0}},c={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-6);
      justify-content: center;
      padding: var(--space-8);
    `,["top","right","bottom","left"].forEach(i=>{const o=document.createElement("div");o.className="popover-wrapper";const e=`popover-trigger-${i}`,r=`popover-${i}`,p=document.createElement("button");p.className="btn btn-secondary",p.id=e,p.textContent=i.charAt(0).toUpperCase()+i.slice(1);const s=document.createElement("div");s.className=`popover popover-${i}`,s.id=r,s.setAttribute("role","dialog"),s.setAttribute("hidden","");const a=document.createElement("div");a.className="popover-body",a.innerHTML=`<p style="margin: 0;">Popover on ${i}</p>`,s.appendChild(a),o.appendChild(p),o.appendChild(s),t.appendChild(o)}),setTimeout(()=>{var i;(i=window.Aural)!=null&&i.initPopovers&&window.Aural.initPopovers()},0),t}},u={render:()=>{const t=document.createElement("div");t.className="popover-wrapper",t.style.cssText="display: inline-block;";const n="popover-trigger-close",i="popover-close",o=document.createElement("button");o.className="btn btn-primary",o.id=n,o.textContent="Show Popover";const e=document.createElement("div");return e.className="popover popover-bottom",e.id=i,e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",`${i}-title`),e.setAttribute("hidden",""),e.innerHTML=`
      <div class="popover-header">
        <h3 id="${i}-title" class="popover-title">Popover Title</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <p style="margin: 0;">This popover includes a close button in the header.</p>
      </div>
    `,t.appendChild(o),t.appendChild(e),setTimeout(()=>{var r;(r=window.Aural)!=null&&r.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),t}},v={render:()=>{const t=document.createElement("div");t.className="popover-wrapper",t.style.cssText="display: inline-block;";const n="popover-trigger-menu",i="popover-menu",o=document.createElement("button");o.className="btn btn-primary",o.id=n,o.textContent="User Actions";const e=document.createElement("div");return e.className="popover popover-bottom",e.id=i,e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",`${i}-title`),e.setAttribute("hidden",""),e.innerHTML=`
      <div class="popover-header">
        <h3 id="${i}-title" class="popover-title">User Settings</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <p style="margin: 0 0 var(--space-3) 0; color: var(--color-text-secondary);">Manage your account</p>
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="user" style="width: 16px; height: 16px;"></i>
            Profile
          </button>
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="settings" style="width: 16px; height: 16px;"></i>
            Settings
          </button>
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="log-out" style="width: 16px; height: 16px;"></i>
            Logout
          </button>
        </div>
      </div>
    `,t.appendChild(o),t.appendChild(e),setTimeout(()=>{var r;(r=window.Aural)!=null&&r.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),t}},m={render:()=>{const t=document.createElement("div");t.className="popover-wrapper",t.style.cssText="display: inline-block;";const n="popover-trigger-form",i="popover-form",o=document.createElement("button");o.className="btn btn-primary",o.id=n,o.textContent="Add Comment";const e=document.createElement("div");return e.className="popover popover-bottom",e.id=i,e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",`${i}-title`),e.setAttribute("hidden",""),e.style.width="300px",e.innerHTML=`
      <div class="popover-header">
        <h3 id="${i}-title" class="popover-title">Add Comment</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <form style="display: flex; flex-direction: column; gap: var(--space-3);">
          <label for="comment-textarea" class="visually-hidden">Your comment</label>
          <textarea id="comment-textarea" class="input" rows="3" placeholder="Write your comment..." aria-label="Your comment"></textarea>
          <div style="display: flex; gap: var(--space-2); justify-content: flex-end;">
            <button type="button" class="btn btn-ghost btn-sm">Cancel</button>
            <button type="submit" class="btn btn-primary btn-sm">Post</button>
          </div>
        </form>
      </div>
    `,t.appendChild(o),t.appendChild(e),setTimeout(()=>{var r;(r=window.Aural)!=null&&r.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),t}},b={render:()=>{const t=document.createElement("div");t.style.cssText=`
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
    `;const n=document.createElement("span");n.textContent="Hover for information";const i=document.createElement("div");i.className="popover-wrapper",i.style.cssText="display: inline-block;";const o="popover-trigger-info",e="popover-info",r=document.createElement("button");r.className="btn btn-ghost btn-sm",r.id=o,r.style.cssText="padding: var(--space-1); width: 24px; height: 24px;",r.setAttribute("aria-label","More information"),r.innerHTML='<i data-lucide="info" style="width: 16px; height: 16px;" aria-hidden="true"></i>';const p=document.createElement("div");return p.className="popover popover-top",p.id=e,p.setAttribute("role","dialog"),p.setAttribute("hidden",""),p.innerHTML=`
      <div class="popover-body">
        <p style="margin: 0; max-width: 250px;">This feature requires a premium subscription. Upgrade your account to unlock all features.</p>
      </div>
    `,i.appendChild(r),i.appendChild(p),t.appendChild(n),t.appendChild(i),setTimeout(()=>{var s;(s=window.Aural)!=null&&s.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),t}},g={render:()=>{const t=document.createElement("div");t.className="popover-wrapper",t.style.cssText="display: inline-block;";const n="popover-trigger-list",i="popover-list",o=document.createElement("button");o.className="btn btn-secondary",o.id=n,o.textContent="View Features";const e=document.createElement("div");return e.className="popover popover-bottom",e.id=i,e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",`${i}-title`),e.setAttribute("hidden",""),e.innerHTML=`
      <div class="popover-header">
        <h3 id="${i}-title" class="popover-title">Premium Features</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <ul style="margin: 0; padding-left: var(--space-5); color: var(--color-text-secondary);">
          <li>Unlimited storage space</li>
          <li>Advanced analytics</li>
          <li>Priority support</li>
          <li>Custom branding</li>
        </ul>
      </div>
    `,t.appendChild(o),t.appendChild(e),setTimeout(()=>{var r;(r=window.Aural)!=null&&r.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),t}},h={render:()=>{const t=document.createElement("div");t.className="popover-wrapper",t.style.cssText="display: inline-block;";const n="popover-trigger-buttons",i="popover-buttons",o=document.createElement("button");o.className="btn btn-primary",o.id=n,o.textContent="Quick Actions";const e=document.createElement("div");return e.className="popover popover-bottom",e.id=i,e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",`${i}-title`),e.setAttribute("hidden",""),e.innerHTML=`
      <div class="popover-header">
        <h3 id="${i}-title" class="popover-title">Actions</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <button class="btn btn-outline btn-sm" style="justify-content: flex-start;">
            <i data-lucide="download" style="width: 16px; height: 16px;"></i>
            Download
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content: flex-start;">
            <i data-lucide="share-2" style="width: 16px; height: 16px;"></i>
            Share
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content: flex-start;">
            <i data-lucide="copy" style="width: 16px; height: 16px;"></i>
            Duplicate
          </button>
        </div>
      </div>
    `,t.appendChild(o),t.appendChild(e),setTimeout(()=>{var r;(r=window.Aural)!=null&&r.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),t}},y={render:()=>{const t=document.createElement("div");t.className="popover-wrapper",t.style.cssText="display: inline-block;";const n="popover-trigger-complex",i="popover-complex",o=document.createElement("button");o.className="btn btn-primary",o.id=n,o.textContent="User Profile";const e=document.createElement("div");return e.className="popover popover-bottom",e.id=i,e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",`${i}-title`),e.setAttribute("hidden",""),e.style.width="280px",e.innerHTML=`
      <div class="popover-header">
        <h3 id="${i}-title" class="popover-title">John Doe</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <div style="display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-4);">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary-subtle); display: flex; align-items: center; justify-content: center; color: var(--color-primary); font-weight: var(--font-bold);">
            JD
          </div>
          <div>
            <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">John Doe</div>
            <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">john@example.com</div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="user" style="width: 16px; height: 16px;"></i>
            View Profile
          </button>
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="settings" style="width: 16px; height: 16px;"></i>
            Account Settings
          </button>
          <hr style="margin: var(--space-2) 0; border: none; border-top: 1px solid var(--color-border-subtle);">
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start; color: var(--color-error);">
            <i data-lucide="log-out" style="width: 16px; height: 16px;"></i>
            Sign Out
          </button>
        </div>
      </div>
    `,t.appendChild(o),t.appendChild(e),setTimeout(()=>{var r;(r=window.Aural)!=null&&r.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),t}},w={render:t=>Q(()=>{const n=document.createElement("div");n.className="popover-wrapper",n.style.cssText="display: inline-block;";const i=`theme-popover-trigger-${Math.random().toString(36).substr(2,9)}`,o=`theme-popover-${Math.random().toString(36).substr(2,9)}`,e=document.createElement("button");e.className="btn btn-primary",e.id=i,e.textContent="Show Popover";const r=document.createElement("div");if(r.className=`popover popover-${t.position}`,r.id=o,r.setAttribute("role","dialog"),r.setAttribute("aria-labelledby",`${o}-title`),r.setAttribute("hidden",""),t.showHeader){const s=document.createElement("div");s.className="popover-header";const a=document.createElement("h3");if(a.id=`${o}-title`,a.className="popover-title",a.textContent=t.title,t.showClose){const l=document.createElement("button");l.className="popover-close",l.setAttribute("aria-label","Close"),l.innerHTML='<i data-lucide="x" style="width: 16px; height: 16px;"></i>',s.appendChild(a),s.appendChild(l)}else s.appendChild(a);r.appendChild(s)}const p=document.createElement("div");return p.className="popover-body",p.innerHTML=`<p style="margin: 0;">${t.content}</p>`,r.appendChild(p),n.appendChild(e),n.appendChild(r),setTimeout(()=>{var s;(s=window.Aural)!=null&&s.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),n}),args:{title:"Popover Title",content:"This is a popover component.",position:"bottom",showClose:!0,showHeader:!0},argTypes:{title:{control:"text",description:"Popover title"},content:{control:"text",description:"Popover content"},position:{control:"select",options:["top","bottom","left","right"],description:"Popover position"},showClose:{control:"boolean",description:"Show close button"},showHeader:{control:"boolean",description:"Show header with title"}}};var f,x,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';
    const triggerId = \`popover-trigger-\${Math.random().toString(36).substr(2, 9)}\`;
    const popoverId = \`popover-\${Math.random().toString(36).substr(2, 9)}\`;
    const trigger = document.createElement('button');
    trigger.className = 'btn btn-primary';
    trigger.id = triggerId;
    trigger.textContent = 'Show Popover';
    const popover = document.createElement('div');
    popover.className = \`popover popover-\${args.position}\`;
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', \`\${popoverId}-title\`);
    popover.setAttribute('hidden', '');
    if (args.showHeader) {
      const header = document.createElement('div');
      header.className = 'popover-header';
      const title = document.createElement('h3');
      title.id = \`\${popoverId}-title\`;
      title.className = 'popover-title';
      title.textContent = args.title;
      if (args.showClose) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'popover-close';
        closeBtn.setAttribute('aria-label', 'Close');
        closeBtn.innerHTML = '<i data-lucide="x" style="width: 16px; height: 16px;"></i>';
        header.appendChild(title);
        header.appendChild(closeBtn);
      } else {
        header.appendChild(title);
      }
      popover.appendChild(header);
    }
    const body = document.createElement('div');
    body.className = 'popover-body';
    body.innerHTML = \`<p style="margin: 0;">\${args.content}</p>\`;
    popover.appendChild(body);
    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);

    // Initialize popovers and icons
    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return wrapper;
  },
  args: {
    title: 'Popover Title',
    content: 'This is a basic popover with a title and some content.',
    position: 'bottom',
    showClose: true,
    showHeader: true
  }
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var A,T,I;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-6);
      justify-content: center;
      padding: var(--space-8);
    \`;
    const positions = ['top', 'right', 'bottom', 'left'];
    positions.forEach(position => {
      const wrapper = document.createElement('div');
      wrapper.className = 'popover-wrapper';
      const triggerId = \`popover-trigger-\${position}\`;
      const popoverId = \`popover-\${position}\`;
      const trigger = document.createElement('button');
      trigger.className = 'btn btn-secondary';
      trigger.id = triggerId;
      trigger.textContent = position.charAt(0).toUpperCase() + position.slice(1);
      const popover = document.createElement('div');
      popover.className = \`popover popover-\${position}\`;
      popover.id = popoverId;
      popover.setAttribute('role', 'dialog');
      popover.setAttribute('hidden', '');
      const body = document.createElement('div');
      body.className = 'popover-body';
      body.innerHTML = \`<p style="margin: 0;">Popover on \${position}</p>\`;
      popover.appendChild(body);
      wrapper.appendChild(trigger);
      wrapper.appendChild(popover);
      container.appendChild(wrapper);
    });
    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
    }, 0);
    return container;
  }
}`,...(I=(T=c.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var P,E,N;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';
    const triggerId = 'popover-trigger-close';
    const popoverId = 'popover-close';
    const trigger = document.createElement('button');
    trigger.className = 'btn btn-primary';
    trigger.id = triggerId;
    trigger.textContent = 'Show Popover';
    const popover = document.createElement('div');
    popover.className = 'popover popover-bottom';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', \`\${popoverId}-title\`);
    popover.setAttribute('hidden', '');
    popover.innerHTML = \`
      <div class="popover-header">
        <h3 id="\${popoverId}-title" class="popover-title">Popover Title</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <p style="margin: 0;">This popover includes a close button in the header.</p>
      </div>
    \`;
    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);
    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return wrapper;
  }
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var M,$,S;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';
    const triggerId = 'popover-trigger-menu';
    const popoverId = 'popover-menu';
    const trigger = document.createElement('button');
    trigger.className = 'btn btn-primary';
    trigger.id = triggerId;
    trigger.textContent = 'User Actions';
    const popover = document.createElement('div');
    popover.className = 'popover popover-bottom';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', \`\${popoverId}-title\`);
    popover.setAttribute('hidden', '');
    popover.innerHTML = \`
      <div class="popover-header">
        <h3 id="\${popoverId}-title" class="popover-title">User Settings</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <p style="margin: 0 0 var(--space-3) 0; color: var(--color-text-secondary);">Manage your account</p>
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="user" style="width: 16px; height: 16px;"></i>
            Profile
          </button>
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="settings" style="width: 16px; height: 16px;"></i>
            Settings
          </button>
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="log-out" style="width: 16px; height: 16px;"></i>
            Logout
          </button>
        </div>
      </div>
    \`;
    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);
    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return wrapper;
  }
}`,...(S=($=v.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var k,H,L;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';
    const triggerId = 'popover-trigger-form';
    const popoverId = 'popover-form';
    const trigger = document.createElement('button');
    trigger.className = 'btn btn-primary';
    trigger.id = triggerId;
    trigger.textContent = 'Add Comment';
    const popover = document.createElement('div');
    popover.className = 'popover popover-bottom';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', \`\${popoverId}-title\`);
    popover.setAttribute('hidden', '');
    popover.style.width = '300px';
    popover.innerHTML = \`
      <div class="popover-header">
        <h3 id="\${popoverId}-title" class="popover-title">Add Comment</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <form style="display: flex; flex-direction: column; gap: var(--space-3);">
          <label for="comment-textarea" class="visually-hidden">Your comment</label>
          <textarea id="comment-textarea" class="input" rows="3" placeholder="Write your comment..." aria-label="Your comment"></textarea>
          <div style="display: flex; gap: var(--space-2); justify-content: flex-end;">
            <button type="button" class="btn btn-ghost btn-sm">Cancel</button>
            <button type="submit" class="btn btn-primary btn-sm">Post</button>
          </div>
        </form>
      </div>
    \`;
    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);
    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return wrapper;
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var j,U,B;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
    \`;
    const span = document.createElement('span');
    span.textContent = 'Hover for information';
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';
    const triggerId = 'popover-trigger-info';
    const popoverId = 'popover-info';
    const trigger = document.createElement('button');
    trigger.className = 'btn btn-ghost btn-sm';
    trigger.id = triggerId;
    trigger.style.cssText = 'padding: var(--space-1); width: 24px; height: 24px;';
    trigger.setAttribute('aria-label', 'More information');
    trigger.innerHTML = '<i data-lucide="info" style="width: 16px; height: 16px;" aria-hidden="true"></i>';
    const popover = document.createElement('div');
    popover.className = 'popover popover-top';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('hidden', '');
    popover.innerHTML = \`
      <div class="popover-body">
        <p style="margin: 0; max-width: 250px;">This feature requires a premium subscription. Upgrade your account to unlock all features.</p>
      </div>
    \`;
    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);
    container.appendChild(span);
    container.appendChild(wrapper);
    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(B=(U=b.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var D,F,W;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';
    const triggerId = 'popover-trigger-list';
    const popoverId = 'popover-list';
    const trigger = document.createElement('button');
    trigger.className = 'btn btn-secondary';
    trigger.id = triggerId;
    trigger.textContent = 'View Features';
    const popover = document.createElement('div');
    popover.className = 'popover popover-bottom';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', \`\${popoverId}-title\`);
    popover.setAttribute('hidden', '');
    popover.innerHTML = \`
      <div class="popover-header">
        <h3 id="\${popoverId}-title" class="popover-title">Premium Features</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <ul style="margin: 0; padding-left: var(--space-5); color: var(--color-text-secondary);">
          <li>Unlimited storage space</li>
          <li>Advanced analytics</li>
          <li>Priority support</li>
          <li>Custom branding</li>
        </ul>
      </div>
    \`;
    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);
    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return wrapper;
  }
}`,...(W=(F=g.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var R,q,V;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';
    const triggerId = 'popover-trigger-buttons';
    const popoverId = 'popover-buttons';
    const trigger = document.createElement('button');
    trigger.className = 'btn btn-primary';
    trigger.id = triggerId;
    trigger.textContent = 'Quick Actions';
    const popover = document.createElement('div');
    popover.className = 'popover popover-bottom';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', \`\${popoverId}-title\`);
    popover.setAttribute('hidden', '');
    popover.innerHTML = \`
      <div class="popover-header">
        <h3 id="\${popoverId}-title" class="popover-title">Actions</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <button class="btn btn-outline btn-sm" style="justify-content: flex-start;">
            <i data-lucide="download" style="width: 16px; height: 16px;"></i>
            Download
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content: flex-start;">
            <i data-lucide="share-2" style="width: 16px; height: 16px;"></i>
            Share
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content: flex-start;">
            <i data-lucide="copy" style="width: 16px; height: 16px;"></i>
            Duplicate
          </button>
        </div>
      </div>
    \`;
    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);
    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return wrapper;
  }
}`,...(V=(q=h.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var J,O,z;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'popover-wrapper';
    wrapper.style.cssText = 'display: inline-block;';
    const triggerId = 'popover-trigger-complex';
    const popoverId = 'popover-complex';
    const trigger = document.createElement('button');
    trigger.className = 'btn btn-primary';
    trigger.id = triggerId;
    trigger.textContent = 'User Profile';
    const popover = document.createElement('div');
    popover.className = 'popover popover-bottom';
    popover.id = popoverId;
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-labelledby', \`\${popoverId}-title\`);
    popover.setAttribute('hidden', '');
    popover.style.width = '280px';
    popover.innerHTML = \`
      <div class="popover-header">
        <h3 id="\${popoverId}-title" class="popover-title">John Doe</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <div style="display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-4);">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary-subtle); display: flex; align-items: center; justify-content: center; color: var(--color-primary); font-weight: var(--font-bold);">
            JD
          </div>
          <div>
            <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">John Doe</div>
            <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">john@example.com</div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="user" style="width: 16px; height: 16px;"></i>
            View Profile
          </button>
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start;">
            <i data-lucide="settings" style="width: 16px; height: 16px;"></i>
            Account Settings
          </button>
          <hr style="margin: var(--space-2) 0; border: none; border-top: 1px solid var(--color-border-subtle);">
          <button class="btn btn-ghost btn-sm" style="justify-content: flex-start; color: var(--color-error);">
            <i data-lucide="log-out" style="width: 16px; height: 16px;"></i>
            Sign Out
          </button>
        </div>
      </div>
    \`;
    wrapper.appendChild(trigger);
    wrapper.appendChild(popover);
    setTimeout(() => {
      if (window.Aural?.initPopovers) {
        window.Aural.initPopovers();
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return wrapper;
  }
}`,...(z=(O=y.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var G,K,Y;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const wrapper = document.createElement('div');
      wrapper.className = 'popover-wrapper';
      wrapper.style.cssText = 'display: inline-block;';
      const triggerId = \`theme-popover-trigger-\${Math.random().toString(36).substr(2, 9)}\`;
      const popoverId = \`theme-popover-\${Math.random().toString(36).substr(2, 9)}\`;
      const trigger = document.createElement('button');
      trigger.className = 'btn btn-primary';
      trigger.id = triggerId;
      trigger.textContent = 'Show Popover';
      const popover = document.createElement('div');
      popover.className = \`popover popover-\${args.position}\`;
      popover.id = popoverId;
      popover.setAttribute('role', 'dialog');
      popover.setAttribute('aria-labelledby', \`\${popoverId}-title\`);
      popover.setAttribute('hidden', '');
      if (args.showHeader) {
        const header = document.createElement('div');
        header.className = 'popover-header';
        const title = document.createElement('h3');
        title.id = \`\${popoverId}-title\`;
        title.className = 'popover-title';
        title.textContent = args.title;
        if (args.showClose) {
          const closeBtn = document.createElement('button');
          closeBtn.className = 'popover-close';
          closeBtn.setAttribute('aria-label', 'Close');
          closeBtn.innerHTML = '<i data-lucide="x" style="width: 16px; height: 16px;"></i>';
          header.appendChild(title);
          header.appendChild(closeBtn);
        } else {
          header.appendChild(title);
        }
        popover.appendChild(header);
      }
      const body = document.createElement('div');
      body.className = 'popover-body';
      body.innerHTML = \`<p style="margin: 0;">\${args.content}</p>\`;
      popover.appendChild(body);
      wrapper.appendChild(trigger);
      wrapper.appendChild(popover);
      setTimeout(() => {
        if (window.Aural?.initPopovers) {
          window.Aural.initPopovers();
        }
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }, 0);
      return wrapper;
    });
  },
  args: {
    title: 'Popover Title',
    content: 'This is a popover component.',
    position: 'bottom',
    showClose: true,
    showHeader: true
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Popover title'
    },
    content: {
      control: 'text',
      description: 'Popover content'
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Popover position'
    },
    showClose: {
      control: 'boolean',
      description: 'Show close button'
    },
    showHeader: {
      control: 'boolean',
      description: 'Show header with title'
    }
  }
}`,...(Y=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};const Z=["Default","Positions","WithCloseButton","MenuPattern","FormPattern","InfoPattern","WithList","WithButtons","ComplexContent","ThemeComparison"];export{y as ComplexContent,d as Default,m as FormPattern,b as InfoPattern,v as MenuPattern,c as Positions,w as ThemeComparison,h as WithButtons,u as WithCloseButton,g as WithList,Z as __namedExportsOrder,X as default};
