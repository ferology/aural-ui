import{c as V}from"./createThemeGrid-DWAncU4Q.js";const _={title:"Components/Data Display/Tooltip",tags:["autodocs"],parameters:{docs:{description:{component:`
# Tooltip Component

Contextual help text that appears on hover or focus. Tooltips are implemented using data attributes and work automatically across all themes.

## Usage

Add the \`data-tooltip\` attribute to any element:

\`\`\`html
<button class="btn btn-secondary" data-tooltip="This is a helpful tooltip">
  Hover me
</button>
\`\`\`

## Attributes

- **data-tooltip** - The tooltip text content (required)
- **data-tooltip-position** - Position: \`top\` (default), \`bottom\`, \`left\`, \`right\`
- **data-tooltip-color** - Color variant: \`primary\`, \`success\`, \`warning\`, \`error\`
- **data-tooltip-size** - Size: \`sm\`, \`md\` (default), \`lg\`

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<button class="btn btn-secondary"
        data-tooltip="Helpful information"
        data-tooltip-position="top">
  Hover me
</button>
\`\`\`

**React:**
\`\`\`jsx
<button className="btn btn-secondary"
        data-tooltip="Helpful information"
        data-tooltip-position="top">
  Hover me
</button>
\`\`\`

**Vue:**
\`\`\`vue
<button class="btn btn-secondary"
        :data-tooltip="tooltipText"
        data-tooltip-position="top">
  Hover me
</button>
\`\`\`

**Svelte:**
\`\`\`svelte
<button class="btn btn-secondary"
        data-tooltip={tooltipText}
        data-tooltip-position="top">
  Hover me
</button>
\`\`\`

## Accessibility

- Tooltips appear on both hover and focus for keyboard users
- Always include \`aria-label\` on icon-only buttons
- Keep tooltip text concise (1-2 short sentences)
- Don't use tooltips for critical information
        `.trim()}}},argTypes:{text:{control:"text",description:"Tooltip text content"},position:{control:"select",options:["top","bottom","left","right"],description:"Tooltip position relative to element"},color:{control:"select",options:["default","primary","success","warning","error"],description:"Tooltip color variant"},size:{control:"select",options:["sm","md","lg"],description:"Tooltip size"},label:{control:"text",description:"Button label text"}}},c={render:t=>{const n=document.createElement("button");return n.className="btn btn-secondary",n.textContent=t.label||"Hover me",n.setAttribute("data-tooltip",t.text||"This is a helpful tooltip"),t.position&&t.position!=="top"&&n.setAttribute("data-tooltip-position",t.position),t.color&&t.color!=="default"&&n.setAttribute("data-tooltip-color",t.color),t.size&&t.size!=="md"&&n.setAttribute("data-tooltip-size",t.size),setTimeout(()=>{var e;(e=window.Aural)!=null&&e.initTooltips&&window.Aural.initTooltips()},0),n},args:{text:"This is a helpful tooltip",position:"top",color:"default",size:"md",label:"Hover me"}},p={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      justify-content: center;
      padding: var(--space-8) var(--space-4);
    `,[{pos:"top",label:"Top"},{pos:"bottom",label:"Bottom"},{pos:"left",label:"Left"},{pos:"right",label:"Right"}].forEach(({pos:e,label:a})=>{const l=document.createElement("button");l.className="btn btn-secondary",l.textContent=a,l.setAttribute("data-tooltip",`Tooltip on ${e}`),l.setAttribute("data-tooltip-position",e),t.appendChild(l)}),setTimeout(()=>{var e;(e=window.Aural)!=null&&e.initTooltips&&window.Aural.initTooltips()},0),t}},d={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      padding: var(--space-4);
    `,[{color:"",label:"Default",text:"Default tooltip"},{color:"primary",label:"Primary",text:"Primary tooltip"},{color:"success",label:"Success",text:"Success message"},{color:"warning",label:"Warning",text:"Warning message"},{color:"error",label:"Error",text:"Error message"}].forEach(({color:e,label:a,text:l})=>{const o=document.createElement("button");o.className="btn btn-secondary",o.textContent=a,o.setAttribute("data-tooltip",l),e&&o.setAttribute("data-tooltip-color",e),t.appendChild(o)}),setTimeout(()=>{var e;(e=window.Aural)!=null&&e.initTooltips&&window.Aural.initTooltips()},0),t}},u={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      padding: var(--space-4);
      align-items: center;
    `,[{size:"sm",label:"Small",text:"Small tooltip"},{size:"md",label:"Medium",text:"Default size tooltip"},{size:"lg",label:"Large",text:"Large tooltip with more content to display"}].forEach(({size:e,label:a,text:l})=>{const o=document.createElement("button");o.className="btn btn-secondary",o.textContent=a,o.setAttribute("data-tooltip",l),e!=="md"&&o.setAttribute("data-tooltip-size",e),t.appendChild(o)}),setTimeout(()=>{var e;(e=window.Aural)!=null&&e.initTooltips&&window.Aural.initTooltips()},0),t}},b={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      padding: var(--space-4);
    `,[{icon:"✏",tooltip:"Edit item",label:"Edit"},{icon:"🗑",tooltip:"Delete item",label:"Delete"},{icon:"↗",tooltip:"Share with others",label:"Share"},{icon:"♥",tooltip:"Add to favorites",label:"Favorite"}].forEach(({icon:e,tooltip:a,label:l})=>{const o=document.createElement("button");o.className="btn btn-ghost btn-icon",o.setAttribute("data-tooltip",a),o.setAttribute("aria-label",l),o.textContent=e,t.appendChild(o)}),setTimeout(()=>{var e;(e=window.Aural)!=null&&e.initTooltips&&window.Aural.initTooltips()},0),t}},m={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      padding: var(--space-4);
      max-width: 400px;
    `,[{id:"username",label:"Username",tooltip:"Your unique username for login"},{id:"password",label:"Password",tooltip:"Must be at least 8 characters"},{id:"email",label:"Email",tooltip:"We will send confirmation to this address"}].forEach(({id:e,label:a,tooltip:l})=>{const o=document.createElement("div");o.style.cssText=`
        display: flex;
        align-items: center;
        gap: var(--space-2);
      `;const r=document.createElement("label");r.htmlFor=e,r.textContent=a,r.style.fontWeight="var(--font-medium)";const i=document.createElement("button");i.className="btn btn-ghost btn-icon btn-sm",i.setAttribute("data-tooltip",l),i.setAttribute("data-tooltip-position","right"),i.setAttribute("aria-label",`Help for ${a}`),i.textContent="?",i.style.cssText=`
        width: 20px;
        height: 20px;
        padding: 0;
        font-size: 12px;
        border-radius: 50%;
        opacity: 0.7;
      `,o.appendChild(r),o.appendChild(i),t.appendChild(o)}),setTimeout(()=>{var e;(e=window.Aural)!=null&&e.initTooltips&&window.Aural.initTooltips()},0),t}},f={render:()=>{const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      gap: var(--space-4);
      flex-wrap: wrap;
      padding: var(--space-4);
    `,[{name:"API Server",status:"operational",color:"var(--color-success)",tooltip:"Service is operational",tooltipColor:"success"},{name:"Database",status:"degraded",color:"var(--color-warning)",tooltip:"Degraded performance",tooltipColor:"warning"},{name:"Cache Server",status:"offline",color:"var(--color-error)",tooltip:"Service offline",tooltipColor:"error"}].forEach(({name:e,status:a,color:l,tooltip:o,tooltipColor:r})=>{const i=document.createElement("div");i.style.cssText=`
        display: flex;
        align-items: center;
        gap: var(--space-2);
      `;const s=document.createElement("span");s.style.cssText=`
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${l};
      `,s.setAttribute("data-tooltip",o),s.setAttribute("data-tooltip-color",r),s.setAttribute("role","status"),s.setAttribute("aria-label",a);const h=document.createElement("span");h.textContent=e,i.appendChild(s),i.appendChild(h),t.appendChild(i)}),setTimeout(()=>{var e;(e=window.Aural)!=null&&e.initTooltips&&window.Aural.initTooltips()},0),t}},g={render:()=>{const t=document.createElement("div");t.style.cssText=`
      padding: var(--space-4);
    `;const n=document.createElement("div");return n.style.cssText=`
      display: flex;
      gap: var(--space-2);
      padding: var(--space-2);
      background: var(--color-bg-tertiary);
      border-radius: var(--radius-md);
      width: fit-content;
    `,n.setAttribute("role","toolbar"),n.setAttribute("aria-label","Text formatting"),[{icon:"B",tooltip:"Bold",label:"Bold"},{icon:"I",tooltip:"Italic",label:"Italic"},{icon:"U",tooltip:"Underline",label:"Underline"},{icon:"≡",tooltip:"Align left",label:"Align left"},{icon:"≣",tooltip:"Align center",label:"Align center"},{icon:"≡",tooltip:"Align right",label:"Align right"}].forEach(({icon:a,tooltip:l,label:o},r)=>{if(r===3){const s=document.createElement("div");s.style.cssText=`
          width: 1px;
          background: var(--color-border);
          margin: 0 var(--space-2);
        `,n.appendChild(s)}const i=document.createElement("button");i.className="btn btn-ghost btn-icon btn-sm",i.setAttribute("data-tooltip",l),i.setAttribute("aria-label",o),i.textContent=a,i.style.fontWeight=r<3?"bold":"normal",i.style.fontStyle=r===1?"italic":"normal",i.style.textDecoration=r===2?"underline":"none",n.appendChild(i)}),t.appendChild(n),setTimeout(()=>{var a;(a=window.Aural)!=null&&a.initTooltips&&window.Aural.initTooltips()},0),t}},x={render:t=>V(()=>{const n=document.createElement("button");return n.className="btn btn-secondary",n.textContent=t.label||"Hover me",n.setAttribute("data-tooltip",t.text||"This is a helpful tooltip"),t.position&&t.position!=="top"&&n.setAttribute("data-tooltip-position",t.position),t.color&&t.color!=="default"&&n.setAttribute("data-tooltip-color",t.color),t.size&&t.size!=="md"&&n.setAttribute("data-tooltip-size",t.size),setTimeout(()=>{var e;(e=window.Aural)!=null&&e.initTooltips&&window.Aural.initTooltips()},0),n}),args:{text:"Helpful tooltip",position:"top",color:"default",size:"md",label:"Hover me"},argTypes:{text:{control:"text",description:"Tooltip text content"},position:{control:"select",options:["top","bottom","left","right"],description:"Tooltip position"},color:{control:"select",options:["default","primary","success","warning","error"],description:"Tooltip color variant"},size:{control:"select",options:["sm","md","lg"],description:"Tooltip size"},label:{control:"text",description:"Button label"}}};var w,T,v;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var A,y,E;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(y=p.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var C,z,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(z=d.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var I,B,D;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(B=u.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,N,P;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(P=(N=b.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var U,W,k;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(k=(W=m.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var F,G,L;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(G=f.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var M,$,q;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var j,R,O;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(R=x.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const K=["Default","Positions","Colors","Sizes","IconButtons","HelpIcons","StatusIndicators","Toolbar","ThemeComparison"];export{d as Colors,c as Default,m as HelpIcons,b as IconButtons,p as Positions,u as Sizes,f as StatusIndicators,x as ThemeComparison,g as Toolbar,K as __namedExportsOrder,_ as default};
