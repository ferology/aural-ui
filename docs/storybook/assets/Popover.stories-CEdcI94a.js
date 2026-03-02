import{c as K}from"./createThemeGrid-DWAncU4Q.js";const X={title:"Components/Overlays/Popover",tags:["autodocs"],parameters:{docs:{description:{component:`
# Popover Component

Contextual overlays triggered by user actions with rich content. Popovers display interactive content like forms, menus, and detailed information.

## Usage

Wrap your trigger element and popover in a \`.popover-wrapper\`:

\`\`\`html
<div class="popover-wrapper">
  <button class="btn btn-primary" id="trigger">Show Popover</button>
  <div class="popover popover-bottom" id="popover" role="dialog" hidden>
    <div class="popover-header">
      <h3 class="popover-title">Title</h3>
      <button class="popover-close" aria-label="Close">
        <i data-lucide="x"></i>
      </button>
    </div>
    <div class="popover-body">
      <p>Content goes here</p>
    </div>
  </div>
</div>
\`\`\`

## Position Classes

- **\`.popover-top\`** - Opens above the trigger
- **\`.popover-right\`** - Opens to the right
- **\`.popover-bottom\`** - Opens below (default)
- **\`.popover-left\`** - Opens to the left

## Structure

- **\`.popover-wrapper\`** - Container for trigger and popover
- **\`.popover-header\`** - Title and close button
- **\`.popover-body\`** - Main content area
- **\`.popover-close\`** - Close button

## Accessibility

- Use \`role="dialog"\` for the popover
- Link title with \`aria-labelledby\`
- Include a visible close button
- Support keyboard navigation (Escape to close)

## Initialization

\`\`\`javascript
// Initialize all popovers
window.Aural?.initPopovers();
\`\`\`
        `.trim()}}},argTypes:{title:{control:"text",description:"Popover title"},content:{control:"text",description:"Popover content"},position:{control:"select",options:["top","bottom","left","right"],description:"Popover position relative to trigger"},showClose:{control:"boolean",description:"Show close button"},showHeader:{control:"boolean",description:"Show header with title"}}},d={render:t=>{const n=document.createElement("div");n.className="popover-wrapper",n.style.cssText="display: inline-block;";const i=`popover-trigger-${Math.random().toString(36).substr(2,9)}`,o=`popover-${Math.random().toString(36).substr(2,9)}`,e=document.createElement("button");e.className="btn btn-primary",e.id=i,e.textContent="Show Popover";const r=document.createElement("div");if(r.className=`popover popover-${t.position}`,r.id=o,r.setAttribute("role","dialog"),r.setAttribute("aria-labelledby",`${o}-title`),r.setAttribute("hidden",""),t.showHeader){const p=document.createElement("div");p.className="popover-header";const a=document.createElement("h3");if(a.id=`${o}-title`,a.className="popover-title",a.textContent=t.title,t.showClose){const l=document.createElement("button");l.className="popover-close",l.setAttribute("aria-label","Close"),l.innerHTML='<i data-lucide="x" style="width: 16px; height: 16px;"></i>',p.appendChild(a),p.appendChild(l)}else p.appendChild(a);r.appendChild(p)}const s=document.createElement("div");return s.className="popover-body",s.innerHTML=`<p style="margin: 0;">${t.content}</p>`,r.appendChild(s),n.appendChild(e),n.appendChild(r),setTimeout(()=>{var p;(p=window.Aural)!=null&&p.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),n},args:{title:"Popover Title",content:"This is a basic popover with a title and some content.",position:"bottom",showClose:!0,showHeader:!0}},c={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-6);
      justify-content: center;
      padding: var(--space-8);
    `,["top","right","bottom","left"].forEach(i=>{const o=document.createElement("div");o.className="popover-wrapper";const e=`popover-trigger-${i}`,r=`popover-${i}`,s=document.createElement("button");s.className="btn btn-secondary",s.id=e,s.textContent=i.charAt(0).toUpperCase()+i.slice(1);const p=document.createElement("div");p.className=`popover popover-${i}`,p.id=r,p.setAttribute("role","dialog"),p.setAttribute("hidden","");const a=document.createElement("div");a.className="popover-body",a.innerHTML=`<p style="margin: 0;">Popover on ${i}</p>`,p.appendChild(a),o.appendChild(s),o.appendChild(p),t.appendChild(o)}),setTimeout(()=>{var i;(i=window.Aural)!=null&&i.initPopovers&&window.Aural.initPopovers()},0),t}},v={render:()=>{const t=document.createElement("div");t.className="popover-wrapper",t.style.cssText="display: inline-block;";const n="popover-trigger-close",i="popover-close",o=document.createElement("button");o.className="btn btn-primary",o.id=n,o.textContent="Show Popover";const e=document.createElement("div");return e.className="popover popover-bottom",e.id=i,e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",`${i}-title`),e.setAttribute("hidden",""),e.innerHTML=`
      <div class="popover-header">
        <h3 id="${i}-title" class="popover-title">Popover Title</h3>
        <button class="popover-close" aria-label="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="popover-body">
        <p style="margin: 0;">This popover includes a close button in the header.</p>
      </div>
    `,t.appendChild(o),t.appendChild(e),setTimeout(()=>{var r;(r=window.Aural)!=null&&r.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),t}},u={render:()=>{const t=document.createElement("div");t.className="popover-wrapper",t.style.cssText="display: inline-block;";const n="popover-trigger-menu",i="popover-menu",o=document.createElement("button");o.className="btn btn-primary",o.id=n,o.textContent="User Actions";const e=document.createElement("div");return e.className="popover popover-bottom",e.id=i,e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",`${i}-title`),e.setAttribute("hidden",""),e.innerHTML=`
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
    `;const n=document.createElement("span");n.textContent="Hover for information";const i=document.createElement("div");i.className="popover-wrapper",i.style.cssText="display: inline-block;";const o="popover-trigger-info",e="popover-info",r=document.createElement("button");r.className="btn btn-ghost btn-sm",r.id=o,r.style.cssText="padding: var(--space-1); width: 24px; height: 24px;",r.setAttribute("aria-label","More information"),r.innerHTML='<i data-lucide="info" style="width: 16px; height: 16px;" aria-hidden="true"></i>';const s=document.createElement("div");return s.className="popover popover-top",s.id=e,s.setAttribute("role","dialog"),s.setAttribute("hidden",""),s.innerHTML=`
      <div class="popover-body">
        <p style="margin: 0; max-width: 250px;">This feature requires a premium subscription. Upgrade your account to unlock all features.</p>
      </div>
    `,i.appendChild(r),i.appendChild(s),t.appendChild(n),t.appendChild(i),setTimeout(()=>{var p;(p=window.Aural)!=null&&p.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),t}},g={render:()=>{const t=document.createElement("div");t.className="popover-wrapper",t.style.cssText="display: inline-block;";const n="popover-trigger-list",i="popover-list",o=document.createElement("button");o.className="btn btn-secondary",o.id=n,o.textContent="View Features";const e=document.createElement("div");return e.className="popover popover-bottom",e.id=i,e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",`${i}-title`),e.setAttribute("hidden",""),e.innerHTML=`
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
    `,t.appendChild(o),t.appendChild(e),setTimeout(()=>{var r;(r=window.Aural)!=null&&r.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),t}},w={render:t=>K(()=>{const n=document.createElement("div");n.className="popover-wrapper",n.style.cssText="display: inline-block;";const i=`theme-popover-trigger-${Math.random().toString(36).substr(2,9)}`,o=`theme-popover-${Math.random().toString(36).substr(2,9)}`,e=document.createElement("button");e.className="btn btn-primary",e.id=i,e.textContent="Show Popover";const r=document.createElement("div");if(r.className=`popover popover-${t.position}`,r.id=o,r.setAttribute("role","dialog"),r.setAttribute("aria-labelledby",`${o}-title`),r.setAttribute("hidden",""),t.showHeader){const p=document.createElement("div");p.className="popover-header";const a=document.createElement("h3");if(a.id=`${o}-title`,a.className="popover-title",a.textContent=t.title,t.showClose){const l=document.createElement("button");l.className="popover-close",l.setAttribute("aria-label","Close"),l.innerHTML='<i data-lucide="x" style="width: 16px; height: 16px;"></i>',p.appendChild(a),p.appendChild(l)}else p.appendChild(a);r.appendChild(p)}const s=document.createElement("div");return s.className="popover-body",s.innerHTML=`<p style="margin: 0;">${t.content}</p>`,r.appendChild(s),n.appendChild(e),n.appendChild(r),setTimeout(()=>{var p;(p=window.Aural)!=null&&p.initPopovers&&window.Aural.initPopovers(),typeof lucide<"u"&&lucide.createIcons()},0),n}),args:{title:"Popover Title",content:"This is a popover component.",position:"bottom",showClose:!0,showHeader:!0},argTypes:{title:{control:"text",description:"Popover title"},content:{control:"text",description:"Popover content"},position:{control:"select",options:["top","bottom","left","right"],description:"Popover position"},showClose:{control:"boolean",description:"Show close button"},showHeader:{control:"boolean",description:"Show header with title"}}};var x,f,C;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(f=d.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var A,I,T;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var P,E,N;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(N=(E=v.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var $,S,M;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(M=(S=u.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var H,L,j;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(L=m.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var k,B,U;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(U=(B=b.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var D,W,O;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(W=g.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var F,J,z;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(J=h.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var V,Y,q;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var G,Q,_;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(_=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};const Z=["Default","Positions","WithCloseButton","MenuPattern","FormPattern","InfoPattern","WithList","WithButtons","ComplexContent","ThemeComparison"];export{y as ComplexContent,d as Default,m as FormPattern,b as InfoPattern,u as MenuPattern,c as Positions,w as ThemeComparison,h as WithButtons,v as WithCloseButton,g as WithList,Z as __namedExportsOrder,X as default};
