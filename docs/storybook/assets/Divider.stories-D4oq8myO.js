import{c as Z}from"./createThemeGrid-DWAncU4Q.js";const te={title:"Components/Data Display/Divider",tags:["autodocs"],parameters:{docs:{description:{component:`
# Divider Component

Visual separators to organize and structure content sections.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<!-- Horizontal divider -->
<hr class="divider">

<!-- With text -->
<div class="divider divider-with-text">
  <span>OR</span>
</div>

<!-- Vertical divider -->
<div style="display: flex; align-items: center; gap: var(--space-4);">
  <span>Item 1</span>
  <hr class="divider divider-vertical" role="separator" aria-orientation="vertical">
  <span>Item 2</span>
</div>
\`\`\`

**React:**
\`\`\`jsx
<hr className="divider" />
\`\`\`

**Vue:**
\`\`\`vue
<hr class="divider">
\`\`\`
        `.trim()}}},argTypes:{variant:{control:"select",options:["solid","dashed","dotted"],description:"Visual style of the divider",table:{defaultValue:{summary:"solid"}}},orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the divider",table:{defaultValue:{summary:"horizontal"}}},spacing:{control:"select",options:["default","compact","spacious"],description:"Spacing around the divider",table:{defaultValue:{summary:"default"}}},withLabel:{control:"boolean",description:"Show divider with text label",table:{defaultValue:{summary:!1}}},label:{control:"text",description:"Text label to display (when withLabel is true)",if:{arg:"withLabel",truthy:!0}}}},s={render:e=>{if(e.withLabel){const a=document.createElement("div");a.className="divider divider-with-text",e.spacing&&e.spacing!=="default"&&a.classList.add(`divider-${e.spacing}`);const d=document.createElement("span");return d.textContent=e.label||"OR",a.appendChild(d),a}const t=document.createElement("hr"),r=["divider"];if(e.orientation==="vertical"&&(r.push("divider-vertical"),t.setAttribute("role","separator"),t.setAttribute("aria-orientation","vertical")),e.variant&&e.variant!=="solid"&&r.push(`divider-${e.variant}`),e.spacing&&e.spacing!=="default"&&r.push(`divider-${e.spacing}`),t.className=r.join(" "),e.orientation==="vertical"){const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center",a.style.gap="var(--space-4)",a.style.padding="var(--space-6)";const d=document.createElement("span");d.textContent="Item 1",d.style.color="var(--color-text-secondary)";const l=document.createElement("span");return l.textContent="Item 2",l.style.color="var(--color-text-secondary)",a.appendChild(d),a.appendChild(t),a.appendChild(l),a}const o=document.createElement("div");o.style.padding="var(--space-6)";const i=document.createElement("p");i.textContent="Content above the divider",i.style.color="var(--color-text-secondary)",i.style.margin="0 0 var(--space-4) 0";const n=document.createElement("p");return n.textContent="Content below the divider",n.style.color="var(--color-text-secondary)",n.style.margin="var(--space-4) 0 0 0",o.appendChild(i),o.appendChild(t),o.appendChild(n),o},args:{variant:"solid",orientation:"horizontal",spacing:"default",withLabel:!1,label:"OR"}},c={render:()=>{const e=document.createElement("div");e.style.padding="var(--space-6)";const t=document.createElement("p");t.textContent="Content above the dashed divider",t.style.color="var(--color-text-secondary)",t.style.margin="0 0 var(--space-4) 0";const r=document.createElement("hr");r.className="divider divider-dashed";const o=document.createElement("p");return o.textContent="Content below the dashed divider",o.style.color="var(--color-text-secondary)",o.style.margin="var(--space-4) 0 0 0",e.appendChild(t),e.appendChild(r),e.appendChild(o),e}},p={render:()=>{const e=document.createElement("div");e.style.padding="var(--space-6)";const t=document.createElement("p");t.textContent="Content above the dotted divider",t.style.color="var(--color-text-secondary)",t.style.margin="0 0 var(--space-4) 0";const r=document.createElement("hr");r.className="divider divider-dotted";const o=document.createElement("p");return o.textContent="Content below the dotted divider",o.style.color="var(--color-text-secondary)",o.style.margin="var(--space-4) 0 0 0",e.appendChild(t),e.appendChild(r),e.appendChild(o),e}},m={render:()=>{const e=document.createElement("div");e.style.padding="var(--space-6)",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)";const t=document.createElement("div");t.className="divider divider-with-text";const r=document.createElement("span");r.textContent="OR",t.appendChild(r);const o=document.createElement("div");o.className="divider divider-with-text";const i=document.createElement("span");i.textContent="Continue with",o.appendChild(i);const n=document.createElement("div");n.className="divider divider-with-text";const a=document.createElement("span");return a.textContent="Optional Information",n.appendChild(a),e.appendChild(t),e.appendChild(o),e.appendChild(n),e}},v={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="var(--space-4)",e.style.padding="var(--space-6)";const t=["Dashboard","Settings","Profile","Logout"];return t.forEach((r,o)=>{const i=document.createElement("span");if(i.textContent=r,i.style.color="var(--color-text-secondary)",e.appendChild(i),o<t.length-1){const n=document.createElement("hr");n.className="divider divider-vertical",n.setAttribute("role","separator"),n.setAttribute("aria-orientation","vertical"),e.appendChild(n)}}),e}},u={render:()=>{const e=document.createElement("div");e.style.padding="var(--space-6)",e.style.maxWidth="600px";const t=document.createElement("h3");t.textContent="Introduction",t.style.color="var(--color-text-primary)",t.style.margin="0 0 var(--space-3) 0",t.style.fontSize="var(--text-xl)",t.style.fontWeight="var(--font-semibold)";const r=document.createElement("p");r.textContent="This is the introduction section with some descriptive content that explains the topic.",r.style.color="var(--color-text-secondary)",r.style.margin="0",r.style.lineHeight="1.6";const o=document.createElement("hr");o.className="divider";const i=document.createElement("h3");i.textContent="Main Content",i.style.color="var(--color-text-primary)",i.style.margin="0 0 var(--space-3) 0",i.style.fontSize="var(--text-xl)",i.style.fontWeight="var(--font-semibold)";const n=document.createElement("p");n.textContent="The main content section contains the primary information that users need to understand.",n.style.color="var(--color-text-secondary)",n.style.margin="0",n.style.lineHeight="1.6";const a=document.createElement("hr");a.className="divider";const d=document.createElement("h3");d.textContent="Conclusion",d.style.color="var(--color-text-primary)",d.style.margin="0 0 var(--space-3) 0",d.style.fontSize="var(--text-xl)",d.style.fontWeight="var(--font-semibold)";const l=document.createElement("p");return l.textContent="Finally, the conclusion wraps up the content and provides key takeaways.",l.style.color="var(--color-text-secondary)",l.style.margin="0",l.style.lineHeight="1.6",e.appendChild(t),e.appendChild(r),e.appendChild(o),e.appendChild(i),e.appendChild(n),e.appendChild(a),e.appendChild(d),e.appendChild(l),e}},h={render:()=>{const e=document.createElement("div");e.style.padding="var(--space-6)",e.style.maxWidth="400px",e.style.background="var(--color-bg-secondary)",e.style.border="1px solid var(--color-border-subtle)",e.style.borderRadius="var(--radius-md)";const t=[{label:"Dashboard",shortcut:"⌘D"},{label:"Settings",shortcut:"⌘,"},{label:"Profile",shortcut:"⌘P"},{label:"Help",shortcut:"⌘H"}];return t.forEach((r,o)=>{const i=document.createElement("div");i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="space-between",i.style.padding="var(--space-3) 0";const n=document.createElement("span");n.textContent=r.label,n.style.color="var(--color-text-primary)";const a=document.createElement("span");if(a.textContent=r.shortcut,a.style.color="var(--color-text-secondary)",a.style.fontSize="var(--text-sm)",i.appendChild(n),i.appendChild(a),e.appendChild(i),o<t.length-1){const d=document.createElement("hr");d.className="divider divider-compact",e.appendChild(d)}}),e}},y={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="var(--space-2)",e.style.padding="var(--space-3)",e.style.background="var(--color-bg-tertiary)",e.style.borderRadius="var(--radius-md)",e.style.width="fit-content";const t=(i,n)=>{const a=document.createElement("button");return a.className="btn btn-ghost btn-sm btn-icon",a.setAttribute("aria-label",n),a.textContent=i,a.style.minWidth="32px",a.style.height="32px",a};e.appendChild(t("B","Bold")),e.appendChild(t("I","Italic")),e.appendChild(t("U","Underline"));const r=document.createElement("hr");r.className="divider divider-vertical",r.style.height="24px",r.setAttribute("role","separator"),r.setAttribute("aria-orientation","vertical"),e.appendChild(r),e.appendChild(t("⬅","Align left")),e.appendChild(t("⬌","Align center")),e.appendChild(t("➡","Align right"));const o=document.createElement("hr");return o.className="divider divider-vertical",o.style.height="24px",o.setAttribute("role","separator"),o.setAttribute("aria-orientation","vertical"),e.appendChild(o),e.appendChild(t("🔗","Insert link")),e.appendChild(t("🖼","Insert image")),e}},x={render:()=>{const e=document.createElement("div");e.style.padding="var(--space-6)",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-8)";const t=(r,o)=>{const i=document.createElement("div"),n=document.createElement("p");n.textContent=r,n.style.color="var(--color-text-secondary)",n.style.fontSize="var(--text-sm)",n.style.margin="0 0 var(--space-2) 0";const a=document.createElement("hr");return a.className=o,i.appendChild(n),i.appendChild(a),i};return e.appendChild(t("Compact spacing (divider-compact)","divider divider-compact")),e.appendChild(t("Default spacing","divider")),e.appendChild(t("Spacious (divider-spacious)","divider divider-spacious")),e}},g={render:()=>{const e=document.createElement("div");e.style.padding="var(--space-6)",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)";const t=(r,o)=>{const i=document.createElement("div"),n=document.createElement("p");n.textContent=r,n.style.color="var(--color-text-secondary)",n.style.fontSize="var(--text-sm)",n.style.margin="0 0 var(--space-2) 0";const a=document.createElement("hr");return a.className=o,i.appendChild(n),i.appendChild(a),i};return e.appendChild(t("Solid (default)","divider")),e.appendChild(t("Dashed","divider divider-dashed")),e.appendChild(t("Dotted","divider divider-dotted")),e}},b={render:e=>Z(()=>{if(e.withLabel){const a=document.createElement("div");a.className="divider divider-with-text",e.spacing&&e.spacing!=="default"&&a.classList.add(`divider-${e.spacing}`);const d=document.createElement("span");return d.textContent=e.label||"OR",a.appendChild(d),a}const t=document.createElement("div");t.style.padding="var(--space-4)";const r=document.createElement("p");r.textContent="Content above",r.style.color="var(--color-text-secondary)",r.style.margin="0 0 var(--space-2) 0",r.style.fontSize="var(--text-sm)";const o=document.createElement("hr"),i=["divider"];e.variant&&e.variant!=="solid"&&i.push(`divider-${e.variant}`),e.spacing&&e.spacing!=="default"&&i.push(`divider-${e.spacing}`),o.className=i.join(" ");const n=document.createElement("p");return n.textContent="Content below",n.style.color="var(--color-text-secondary)",n.style.margin="var(--space-2) 0 0 0",n.style.fontSize="var(--text-sm)",t.appendChild(r),t.appendChild(o),t.appendChild(n),t}),args:{variant:"solid",spacing:"default",withLabel:!1,label:"OR"},argTypes:{variant:{control:"select",options:["solid","dashed","dotted"],description:"Visual style of the divider"},spacing:{control:"select",options:["default","compact","spacious"],description:"Spacing around the divider"},withLabel:{control:"boolean",description:"Show divider with text label"},label:{control:"text",description:"Text label to display (when withLabel is true)",if:{arg:"withLabel",truthy:!0}}}};var C,f,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    // With label variant
    if (args.withLabel) {
      const container = document.createElement('div');
      container.className = 'divider divider-with-text';
      if (args.spacing && args.spacing !== 'default') {
        container.classList.add(\`divider-\${args.spacing}\`);
      }
      const label = document.createElement('span');
      label.textContent = args.label || 'OR';
      container.appendChild(label);
      return container;
    }

    // Regular divider
    const divider = document.createElement('hr');
    const classes = ['divider'];

    // Add orientation
    if (args.orientation === 'vertical') {
      classes.push('divider-vertical');
      divider.setAttribute('role', 'separator');
      divider.setAttribute('aria-orientation', 'vertical');
    }

    // Add variant
    if (args.variant && args.variant !== 'solid') {
      classes.push(\`divider-\${args.variant}\`);
    }

    // Add spacing
    if (args.spacing && args.spacing !== 'default') {
      classes.push(\`divider-\${args.spacing}\`);
    }
    divider.className = classes.join(' ');

    // Wrap vertical divider for demo
    if (args.orientation === 'vertical') {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = 'var(--space-4)';
      wrapper.style.padding = 'var(--space-6)';
      const text1 = document.createElement('span');
      text1.textContent = 'Item 1';
      text1.style.color = 'var(--color-text-secondary)';
      const text2 = document.createElement('span');
      text2.textContent = 'Item 2';
      text2.style.color = 'var(--color-text-secondary)';
      wrapper.appendChild(text1);
      wrapper.appendChild(divider);
      wrapper.appendChild(text2);
      return wrapper;
    }

    // Wrap horizontal divider for demo
    const wrapper = document.createElement('div');
    wrapper.style.padding = 'var(--space-6)';
    const text1 = document.createElement('p');
    text1.textContent = 'Content above the divider';
    text1.style.color = 'var(--color-text-secondary)';
    text1.style.margin = '0 0 var(--space-4) 0';
    const text2 = document.createElement('p');
    text2.textContent = 'Content below the divider';
    text2.style.color = 'var(--color-text-secondary)';
    text2.style.margin = 'var(--space-4) 0 0 0';
    wrapper.appendChild(text1);
    wrapper.appendChild(divider);
    wrapper.appendChild(text2);
    return wrapper;
  },
  args: {
    variant: 'solid',
    orientation: 'horizontal',
    spacing: 'default',
    withLabel: false,
    label: 'OR'
  }
}`,...(E=(f=s.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var w,D,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.padding = 'var(--space-6)';
    const text1 = document.createElement('p');
    text1.textContent = 'Content above the dashed divider';
    text1.style.color = 'var(--color-text-secondary)';
    text1.style.margin = '0 0 var(--space-4) 0';
    const divider = document.createElement('hr');
    divider.className = 'divider divider-dashed';
    const text2 = document.createElement('p');
    text2.textContent = 'Content below the dashed divider';
    text2.style.color = 'var(--color-text-secondary)';
    text2.style.margin = 'var(--space-4) 0 0 0';
    wrapper.appendChild(text1);
    wrapper.appendChild(divider);
    wrapper.appendChild(text2);
    return wrapper;
  }
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var L,N,I;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.padding = 'var(--space-6)';
    const text1 = document.createElement('p');
    text1.textContent = 'Content above the dotted divider';
    text1.style.color = 'var(--color-text-secondary)';
    text1.style.margin = '0 0 var(--space-4) 0';
    const divider = document.createElement('hr');
    divider.className = 'divider divider-dotted';
    const text2 = document.createElement('p');
    text2.textContent = 'Content below the dotted divider';
    text2.style.color = 'var(--color-text-secondary)';
    text2.style.margin = 'var(--space-4) 0 0 0';
    wrapper.appendChild(text1);
    wrapper.appendChild(divider);
    wrapper.appendChild(text2);
    return wrapper;
  }
}`,...(I=(N=p.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var A,z,V;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--space-6)';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    // OR divider
    const orDivider = document.createElement('div');
    orDivider.className = 'divider divider-with-text';
    const orLabel = document.createElement('span');
    orLabel.textContent = 'OR';
    orDivider.appendChild(orLabel);

    // Continue with divider
    const continueDivider = document.createElement('div');
    continueDivider.className = 'divider divider-with-text';
    const continueLabel = document.createElement('span');
    continueLabel.textContent = 'Continue with';
    continueDivider.appendChild(continueLabel);

    // Optional Information divider
    const optionalDivider = document.createElement('div');
    optionalDivider.className = 'divider divider-with-text';
    const optionalLabel = document.createElement('span');
    optionalLabel.textContent = 'Optional Information';
    optionalDivider.appendChild(optionalLabel);
    container.appendChild(orDivider);
    container.appendChild(continueDivider);
    container.appendChild(optionalDivider);
    return container;
  }
}`,...(V=(z=m.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var R,W,T;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.gap = 'var(--space-4)';
    wrapper.style.padding = 'var(--space-6)';
    const items = ['Dashboard', 'Settings', 'Profile', 'Logout'];
    items.forEach((item, index) => {
      const span = document.createElement('span');
      span.textContent = item;
      span.style.color = 'var(--color-text-secondary)';
      wrapper.appendChild(span);
      if (index < items.length - 1) {
        const divider = document.createElement('hr');
        divider.className = 'divider divider-vertical';
        divider.setAttribute('role', 'separator');
        divider.setAttribute('aria-orientation', 'vertical');
        wrapper.appendChild(divider);
      }
    });
    return wrapper;
  }
}`,...(T=(W=v.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var O,B,k;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--space-6)';
    container.style.maxWidth = '600px';

    // Section 1
    const heading1 = document.createElement('h3');
    heading1.textContent = 'Introduction';
    heading1.style.color = 'var(--color-text-primary)';
    heading1.style.margin = '0 0 var(--space-3) 0';
    heading1.style.fontSize = 'var(--text-xl)';
    heading1.style.fontWeight = 'var(--font-semibold)';
    const para1 = document.createElement('p');
    para1.textContent = 'This is the introduction section with some descriptive content that explains the topic.';
    para1.style.color = 'var(--color-text-secondary)';
    para1.style.margin = '0';
    para1.style.lineHeight = '1.6';
    const divider1 = document.createElement('hr');
    divider1.className = 'divider';

    // Section 2
    const heading2 = document.createElement('h3');
    heading2.textContent = 'Main Content';
    heading2.style.color = 'var(--color-text-primary)';
    heading2.style.margin = '0 0 var(--space-3) 0';
    heading2.style.fontSize = 'var(--text-xl)';
    heading2.style.fontWeight = 'var(--font-semibold)';
    const para2 = document.createElement('p');
    para2.textContent = 'The main content section contains the primary information that users need to understand.';
    para2.style.color = 'var(--color-text-secondary)';
    para2.style.margin = '0';
    para2.style.lineHeight = '1.6';
    const divider2 = document.createElement('hr');
    divider2.className = 'divider';

    // Section 3
    const heading3 = document.createElement('h3');
    heading3.textContent = 'Conclusion';
    heading3.style.color = 'var(--color-text-primary)';
    heading3.style.margin = '0 0 var(--space-3) 0';
    heading3.style.fontSize = 'var(--text-xl)';
    heading3.style.fontWeight = 'var(--font-semibold)';
    const para3 = document.createElement('p');
    para3.textContent = 'Finally, the conclusion wraps up the content and provides key takeaways.';
    para3.style.color = 'var(--color-text-secondary)';
    para3.style.margin = '0';
    para3.style.lineHeight = '1.6';
    container.appendChild(heading1);
    container.appendChild(para1);
    container.appendChild(divider1);
    container.appendChild(heading2);
    container.appendChild(para2);
    container.appendChild(divider2);
    container.appendChild(heading3);
    container.appendChild(para3);
    return container;
  }
}`,...(k=(B=u.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var H,$,j;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--space-6)';
    container.style.maxWidth = '400px';
    container.style.background = 'var(--color-bg-secondary)';
    container.style.border = '1px solid var(--color-border-subtle)';
    container.style.borderRadius = 'var(--radius-md)';
    const items = [{
      label: 'Dashboard',
      shortcut: '⌘D'
    }, {
      label: 'Settings',
      shortcut: '⌘,'
    }, {
      label: 'Profile',
      shortcut: '⌘P'
    }, {
      label: 'Help',
      shortcut: '⌘H'
    }];
    items.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.style.display = 'flex';
      itemDiv.style.alignItems = 'center';
      itemDiv.style.justifyContent = 'space-between';
      itemDiv.style.padding = 'var(--space-3) 0';
      const label = document.createElement('span');
      label.textContent = item.label;
      label.style.color = 'var(--color-text-primary)';
      const shortcut = document.createElement('span');
      shortcut.textContent = item.shortcut;
      shortcut.style.color = 'var(--color-text-secondary)';
      shortcut.style.fontSize = 'var(--text-sm)';
      itemDiv.appendChild(label);
      itemDiv.appendChild(shortcut);
      container.appendChild(itemDiv);
      if (index < items.length - 1) {
        const divider = document.createElement('hr');
        divider.className = 'divider divider-compact';
        container.appendChild(divider);
      }
    });
    return container;
  }
}`,...(j=($=h.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var P,U,F;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const toolbar = document.createElement('div');
    toolbar.style.display = 'flex';
    toolbar.style.alignItems = 'center';
    toolbar.style.gap = 'var(--space-2)';
    toolbar.style.padding = 'var(--space-3)';
    toolbar.style.background = 'var(--color-bg-tertiary)';
    toolbar.style.borderRadius = 'var(--radius-md)';
    toolbar.style.width = 'fit-content';

    // Text formatting group
    const createButton = (content: string, ariaLabel: string) => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-ghost btn-sm btn-icon';
      btn.setAttribute('aria-label', ariaLabel);
      btn.textContent = content;
      btn.style.minWidth = '32px';
      btn.style.height = '32px';
      return btn;
    };
    toolbar.appendChild(createButton('B', 'Bold'));
    toolbar.appendChild(createButton('I', 'Italic'));
    toolbar.appendChild(createButton('U', 'Underline'));

    // Divider
    const divider1 = document.createElement('hr');
    divider1.className = 'divider divider-vertical';
    divider1.style.height = '24px';
    divider1.setAttribute('role', 'separator');
    divider1.setAttribute('aria-orientation', 'vertical');
    toolbar.appendChild(divider1);

    // Alignment group
    toolbar.appendChild(createButton('⬅', 'Align left'));
    toolbar.appendChild(createButton('⬌', 'Align center'));
    toolbar.appendChild(createButton('➡', 'Align right'));

    // Divider
    const divider2 = document.createElement('hr');
    divider2.className = 'divider divider-vertical';
    divider2.style.height = '24px';
    divider2.setAttribute('role', 'separator');
    divider2.setAttribute('aria-orientation', 'vertical');
    toolbar.appendChild(divider2);

    // Insert group
    toolbar.appendChild(createButton('🔗', 'Insert link'));
    toolbar.appendChild(createButton('🖼', 'Insert image'));
    return toolbar;
  }
}`,...(F=(U=y.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var M,G,_;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--space-6)';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-8)';
    const createSection = (label: string, className: string) => {
      const section = document.createElement('div');
      const labelEl = document.createElement('p');
      labelEl.textContent = label;
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.margin = '0 0 var(--space-2) 0';
      const divider = document.createElement('hr');
      divider.className = className;
      section.appendChild(labelEl);
      section.appendChild(divider);
      return section;
    };
    container.appendChild(createSection('Compact spacing (divider-compact)', 'divider divider-compact'));
    container.appendChild(createSection('Default spacing', 'divider'));
    container.appendChild(createSection('Spacious (divider-spacious)', 'divider divider-spacious'));
    return container;
  }
}`,...(_=(G=x.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var q,J,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--space-6)';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    const createVariant = (label: string, className: string) => {
      const section = document.createElement('div');
      const labelEl = document.createElement('p');
      labelEl.textContent = label;
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.margin = '0 0 var(--space-2) 0';
      const divider = document.createElement('hr');
      divider.className = className;
      section.appendChild(labelEl);
      section.appendChild(divider);
      return section;
    };
    container.appendChild(createVariant('Solid (default)', 'divider'));
    container.appendChild(createVariant('Dashed', 'divider divider-dashed'));
    container.appendChild(createVariant('Dotted', 'divider divider-dotted'));
    return container;
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      // With label variant
      if (args.withLabel) {
        const container = document.createElement('div');
        container.className = 'divider divider-with-text';
        if (args.spacing && args.spacing !== 'default') {
          container.classList.add(\`divider-\${args.spacing}\`);
        }
        const label = document.createElement('span');
        label.textContent = args.label || 'OR';
        container.appendChild(label);
        return container;
      }

      // Regular divider
      const wrapper = document.createElement('div');
      wrapper.style.padding = 'var(--space-4)';
      const text1 = document.createElement('p');
      text1.textContent = 'Content above';
      text1.style.color = 'var(--color-text-secondary)';
      text1.style.margin = '0 0 var(--space-2) 0';
      text1.style.fontSize = 'var(--text-sm)';
      const divider = document.createElement('hr');
      const classes = ['divider'];

      // Add variant
      if (args.variant && args.variant !== 'solid') {
        classes.push(\`divider-\${args.variant}\`);
      }

      // Add spacing
      if (args.spacing && args.spacing !== 'default') {
        classes.push(\`divider-\${args.spacing}\`);
      }
      divider.className = classes.join(' ');
      const text2 = document.createElement('p');
      text2.textContent = 'Content below';
      text2.style.color = 'var(--color-text-secondary)';
      text2.style.margin = 'var(--space-2) 0 0 0';
      text2.style.fontSize = 'var(--text-sm)';
      wrapper.appendChild(text1);
      wrapper.appendChild(divider);
      wrapper.appendChild(text2);
      return wrapper;
    });
  },
  args: {
    variant: 'solid',
    spacing: 'default',
    withLabel: false,
    label: 'OR'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Visual style of the divider'
    },
    spacing: {
      control: 'select',
      options: ['default', 'compact', 'spacious'],
      description: 'Spacing around the divider'
    },
    withLabel: {
      control: 'boolean',
      description: 'Show divider with text label'
    },
    label: {
      control: 'text',
      description: 'Text label to display (when withLabel is true)',
      if: {
        arg: 'withLabel',
        truthy: true
      }
    }
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ne=["Default","Dashed","Dotted","WithLabel","Vertical","InContent","InList","InToolbar","Spacing","AllVariants","ThemeComparison"];export{g as AllVariants,c as Dashed,s as Default,p as Dotted,u as InContent,h as InList,y as InToolbar,x as Spacing,b as ThemeComparison,v as Vertical,m as WithLabel,ne as __namedExportsOrder,te as default};
