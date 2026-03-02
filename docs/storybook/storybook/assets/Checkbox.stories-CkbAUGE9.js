import{c as ue}from"./createThemeGrid-DWAncU4Q.js";const ke={title:"Components/Forms/Checkbox",tags:["autodocs"],parameters:{docs:{description:{component:`
# Checkbox Component

Multi-selection checkboxes with states and variants. Allow users to select multiple options from a list or toggle individual settings.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<label class="checkbox">
  <input type="checkbox" checked>
  <span>Accept terms</span>
</label>
\`\`\`

**React:**
\`\`\`jsx
<label className="checkbox">
  <input type="checkbox" checked onChange={handleChange} />
  <span>Accept terms</span>
</label>
\`\`\`

**Vue:**
\`\`\`vue
<label class="checkbox">
  <input type="checkbox" v-model="accepted">
  <span>Accept terms</span>
</label>
\`\`\`
        `.trim()}}},argTypes:{label:{control:"text",description:"Checkbox label text"},checked:{control:"boolean",description:"Checked state"},disabled:{control:"boolean",description:"Disabled state"},indeterminate:{control:"boolean",description:'Indeterminate state (for "select all" scenarios)'},size:{control:"select",options:["sm","md","lg"],description:"Checkbox size"},description:{control:"text",description:"Optional description text below the label"}}};let be=0;const o=()=>`checkbox-${Date.now()}-${be++}`,r={render:e=>{const s=o(),t=document.createElement("label");t.className="checkbox",e.size&&e.size!=="md"&&t.classList.add(`checkbox-${e.size}`),e.description&&t.classList.add("checkbox-with-description");const n=document.createElement("input");if(n.type="checkbox",n.id=s,n.checked=e.checked||!1,n.disabled=e.disabled||!1,e.indeterminate&&setTimeout(()=>{n.indeterminate=!0},0),n.setAttribute("aria-checked",e.indeterminate?"mixed":e.checked?"true":"false"),e.description){const a=`${s}-desc`;n.setAttribute("aria-describedby",a)}const c=document.createElement("span");if(c.textContent=e.label,e.description){const a=document.createElement("span");a.className="checkbox-description",a.id=`${s}-desc`,a.textContent=e.description,c.appendChild(a)}return t.appendChild(n),t.appendChild(c),t},args:{label:"Accept terms and conditions",checked:!1,disabled:!1,indeterminate:!1,size:"md",description:""}},b={...r,args:{label:"Subscribed to newsletter",checked:!0,disabled:!1,indeterminate:!1,size:"md"}},h={...r,args:{label:"Disabled checkbox",checked:!1,disabled:!0,indeterminate:!1,size:"md"}},k={...r,args:{label:"Disabled checked checkbox",checked:!0,disabled:!0,indeterminate:!1,size:"md"}},f={...r,args:{label:"Select all",checked:!1,disabled:!1,indeterminate:!0,size:"md"}},x={...r,args:{label:"Small checkbox",checked:!0,disabled:!1,indeterminate:!1,size:"sm"}},g={...r,args:{label:"Large checkbox",checked:!0,disabled:!1,indeterminate:!1,size:"lg"}},C={...r,args:{label:"Enable notifications",checked:!0,disabled:!1,indeterminate:!1,size:"md",description:"Receive email updates about your account"}},E={render:()=>{const e=document.createElement("div");return e.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      padding: var(--space-8);
      max-width: 400px;
    `,[{label:"Unchecked",checked:!1,disabled:!1,indeterminate:!1},{label:"Checked",checked:!0,disabled:!1,indeterminate:!1},{label:"Indeterminate",checked:!1,disabled:!1,indeterminate:!0},{label:"Disabled unchecked",checked:!1,disabled:!0,indeterminate:!1},{label:"Disabled checked",checked:!0,disabled:!0,indeterminate:!1},{label:"Disabled indeterminate",checked:!1,disabled:!0,indeterminate:!0}].forEach(t=>{const n=o(),c=document.createElement("label");c.className="checkbox";const a=document.createElement("input");a.type="checkbox",a.id=n,a.checked=t.checked,a.disabled=t.disabled,t.indeterminate&&setTimeout(()=>{a.indeterminate=!0},0),a.setAttribute("aria-checked",t.indeterminate?"mixed":t.checked?"true":"false");const l=document.createElement("span");l.textContent=t.label,c.appendChild(a),c.appendChild(l),e.appendChild(c)}),e}},v={render:()=>{const e=document.createElement("div");return e.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      padding: var(--space-8);
      align-items: flex-start;
    `,[{size:"sm",label:"Small checkbox"},{size:"md",label:"Medium checkbox (default)"},{size:"lg",label:"Large checkbox"}].forEach(t=>{const n=o(),c=document.createElement("label");c.className="checkbox",t.size!=="md"&&c.classList.add(`checkbox-${t.size}`);const a=document.createElement("input");a.type="checkbox",a.id=n,a.checked=!0,a.setAttribute("aria-checked","true");const l=document.createElement("span");l.textContent=t.label,c.appendChild(a),c.appendChild(l),e.appendChild(c)}),e}},z={render:()=>{const e=document.createElement("fieldset");e.style.cssText=`
      border: none;
      padding: var(--space-8);
      margin: 0;
    `;const s=document.createElement("legend");s.textContent="Select your interests",s.style.cssText=`
      font-size: var(--text-base);
      font-weight: var(--font-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--space-4);
      padding: 0;
    `;const t=document.createElement("div");return t.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    `,[{value:"design",label:"Design",checked:!0},{value:"development",label:"Development",checked:!0},{value:"marketing",label:"Marketing",checked:!1},{value:"sales",label:"Sales",checked:!1}].forEach(c=>{const a=o(),l=document.createElement("label");l.className="checkbox";const d=document.createElement("input");d.type="checkbox",d.id=a,d.name="interests",d.value=c.value,d.checked=c.checked,d.setAttribute("aria-checked",c.checked?"true":"false");const m=document.createElement("span");m.textContent=c.label,l.appendChild(d),l.appendChild(m),t.appendChild(l)}),e.appendChild(s),e.appendChild(t),e}},y={render:()=>{const e=document.createElement("div");e.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      padding: var(--space-8);
      max-width: 400px;
    `;const s=o(),t=document.createElement("label");t.className="checkbox";const n=document.createElement("input");n.type="checkbox",n.id=s,n.setAttribute("aria-checked","mixed");const c=document.createElement("span");c.textContent="Select all",t.appendChild(n),t.appendChild(c),e.appendChild(t);const a=document.createElement("div");a.style.cssText=`
      padding-left: var(--space-6);
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      border-left: 2px solid var(--color-border-subtle);
    `;const l=[{label:"Option 1",checked:!0},{label:"Option 2",checked:!1},{label:"Option 3",checked:!1}],d=[];l.forEach(i=>{const S=o(),u=document.createElement("label");u.className="checkbox";const p=document.createElement("input");p.type="checkbox",p.id=S,p.checked=i.checked,p.setAttribute("aria-checked",i.checked?"true":"false"),d.push(p);const A=document.createElement("span");A.textContent=i.label,u.appendChild(p),u.appendChild(A),a.appendChild(u)}),e.appendChild(a);const m=()=>{const i=d.filter(S=>S.checked).length;n.checked=i===d.length,n.indeterminate=i>0&&i<d.length,n.setAttribute("aria-checked",n.indeterminate?"mixed":n.checked?"true":"false")};return n.addEventListener("change",()=>{d.forEach(i=>{i.checked=n.checked,i.setAttribute("aria-checked",n.checked?"true":"false")})}),d.forEach(i=>{i.addEventListener("change",()=>{i.setAttribute("aria-checked",i.checked?"true":"false"),m()})}),m(),e}},I={render:e=>ue(()=>{const s=o(),t=document.createElement("label");t.className="checkbox",e.size&&e.size!=="md"&&t.classList.add(`checkbox-${e.size}`),e.description&&t.classList.add("checkbox-with-description");const n=document.createElement("input");if(n.type="checkbox",n.id=s,n.checked=e.checked||!1,n.disabled=e.disabled||!1,e.indeterminate&&setTimeout(()=>{n.indeterminate=!0},0),n.setAttribute("aria-checked",e.indeterminate?"mixed":e.checked?"true":"false"),e.description){const a=`${s}-desc`;n.setAttribute("aria-describedby",a)}const c=document.createElement("span");if(c.textContent=e.label,e.description){const a=document.createElement("span");a.className="checkbox-description",a.id=`${s}-desc`,a.textContent=e.description,c.appendChild(a)}return t.appendChild(n),t.appendChild(c),t}),args:{label:"Enable feature",checked:!0,disabled:!1,indeterminate:!1,size:"md",description:""},argTypes:{label:{control:"text",description:"Checkbox label text"},checked:{control:"boolean",description:"Checked state"},disabled:{control:"boolean",description:"Disabled state"},indeterminate:{control:"boolean",description:"Indeterminate state"},size:{control:"select",options:["sm","md","lg"],description:"Checkbox size"},description:{control:"text",description:"Optional description text"}}};var D,T,L;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const id = generateId();
    const label = document.createElement('label');
    label.className = 'checkbox';
    if (args.size && args.size !== 'md') {
      label.classList.add(\`checkbox-\${args.size}\`);
    }
    if (args.description) {
      label.classList.add('checkbox-with-description');
    }
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = id;
    input.checked = args.checked || false;
    input.disabled = args.disabled || false;

    // Set indeterminate state
    if (args.indeterminate) {
      setTimeout(() => {
        input.indeterminate = true;
      }, 0);
    }

    // Add ARIA attributes
    input.setAttribute('aria-checked', args.indeterminate ? 'mixed' : args.checked ? 'true' : 'false');
    if (args.description) {
      const descId = \`\${id}-desc\`;
      input.setAttribute('aria-describedby', descId);
    }
    const span = document.createElement('span');
    span.textContent = args.label;
    if (args.description) {
      const desc = document.createElement('span');
      desc.className = 'checkbox-description';
      desc.id = \`\${id}-desc\`;
      desc.textContent = args.description;
      span.appendChild(desc);
    }
    label.appendChild(input);
    label.appendChild(span);
    return label;
  },
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: false,
    indeterminate: false,
    size: 'md',
    description: ''
  }
}`,...(L=(T=r.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var N,w,$;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Subscribed to newsletter',
    checked: true,
    disabled: false,
    indeterminate: false,
    size: 'md'
  }
}`,...($=(w=b.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var O,P,M;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Disabled checkbox',
    checked: false,
    disabled: true,
    indeterminate: false,
    size: 'md'
  }
}`,...(M=(P=h.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var R,G,U;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Disabled checked checkbox',
    checked: true,
    disabled: true,
    indeterminate: false,
    size: 'md'
  }
}`,...(U=(G=k.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var V,F,H;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Select all',
    checked: false,
    disabled: false,
    indeterminate: true,
    size: 'md'
  }
}`,...(H=(F=f.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var W,_,j;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Small checkbox',
    checked: true,
    disabled: false,
    indeterminate: false,
    size: 'sm'
  }
}`,...(j=(_=x.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var q,B,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Large checkbox',
    checked: true,
    disabled: false,
    indeterminate: false,
    size: 'lg'
  }
}`,...(J=(B=g.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,Q,X;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Enable notifications',
    checked: true,
    disabled: false,
    indeterminate: false,
    size: 'md',
    description: 'Receive email updates about your account'
  }
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      padding: var(--space-8);
      max-width: 400px;
    \`;
    const states = [{
      label: 'Unchecked',
      checked: false,
      disabled: false,
      indeterminate: false
    }, {
      label: 'Checked',
      checked: true,
      disabled: false,
      indeterminate: false
    }, {
      label: 'Indeterminate',
      checked: false,
      disabled: false,
      indeterminate: true
    }, {
      label: 'Disabled unchecked',
      checked: false,
      disabled: true,
      indeterminate: false
    }, {
      label: 'Disabled checked',
      checked: true,
      disabled: true,
      indeterminate: false
    }, {
      label: 'Disabled indeterminate',
      checked: false,
      disabled: true,
      indeterminate: true
    }];
    states.forEach(state => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'checkbox';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = id;
      input.checked = state.checked;
      input.disabled = state.disabled;
      if (state.indeterminate) {
        setTimeout(() => {
          input.indeterminate = true;
        }, 0);
      }
      input.setAttribute('aria-checked', state.indeterminate ? 'mixed' : state.checked ? 'true' : 'false');
      const span = document.createElement('span');
      span.textContent = state.label;
      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });
    return container;
  }
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ae;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      padding: var(--space-8);
      align-items: flex-start;
    \`;
    const sizes = [{
      size: 'sm',
      label: 'Small checkbox'
    }, {
      size: 'md',
      label: 'Medium checkbox (default)'
    }, {
      size: 'lg',
      label: 'Large checkbox'
    }];
    sizes.forEach(item => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'checkbox';
      if (item.size !== 'md') {
        label.classList.add(\`checkbox-\${item.size}\`);
      }
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = id;
      input.checked = true;
      input.setAttribute('aria-checked', 'true');
      const span = document.createElement('span');
      span.textContent = item.label;
      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });
    return container;
  }
}`,...(ae=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ce,se,de;z.parameters={...z.parameters,docs:{...(ce=z.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const fieldset = document.createElement('fieldset');
    fieldset.style.cssText = \`
      border: none;
      padding: var(--space-8);
      margin: 0;
    \`;
    const legend = document.createElement('legend');
    legend.textContent = 'Select your interests';
    legend.style.cssText = \`
      font-size: var(--text-base);
      font-weight: var(--font-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--space-4);
      padding: 0;
    \`;
    const checkboxContainer = document.createElement('div');
    checkboxContainer.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    \`;
    const options = [{
      value: 'design',
      label: 'Design',
      checked: true
    }, {
      value: 'development',
      label: 'Development',
      checked: true
    }, {
      value: 'marketing',
      label: 'Marketing',
      checked: false
    }, {
      value: 'sales',
      label: 'Sales',
      checked: false
    }];
    options.forEach(option => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'checkbox';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = id;
      input.name = 'interests';
      input.value = option.value;
      input.checked = option.checked;
      input.setAttribute('aria-checked', option.checked ? 'true' : 'false');
      const span = document.createElement('span');
      span.textContent = option.label;
      label.appendChild(input);
      label.appendChild(span);
      checkboxContainer.appendChild(label);
    });
    fieldset.appendChild(legend);
    fieldset.appendChild(checkboxContainer);
    return fieldset;
  }
}`,...(de=(se=z.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ie,le,re;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      padding: var(--space-8);
      max-width: 400px;
    \`;

    // Parent "select all" checkbox
    const parentId = generateId();
    const parentLabel = document.createElement('label');
    parentLabel.className = 'checkbox';
    const parentInput = document.createElement('input');
    parentInput.type = 'checkbox';
    parentInput.id = parentId;
    parentInput.setAttribute('aria-checked', 'mixed');
    const parentSpan = document.createElement('span');
    parentSpan.textContent = 'Select all';
    parentLabel.appendChild(parentInput);
    parentLabel.appendChild(parentSpan);
    container.appendChild(parentLabel);

    // Child checkboxes container
    const childContainer = document.createElement('div');
    childContainer.style.cssText = \`
      padding-left: var(--space-6);
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      border-left: 2px solid var(--color-border-subtle);
    \`;
    const children = [{
      label: 'Option 1',
      checked: true
    }, {
      label: 'Option 2',
      checked: false
    }, {
      label: 'Option 3',
      checked: false
    }];
    const childInputs: HTMLInputElement[] = [];
    children.forEach(child => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'checkbox';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = id;
      input.checked = child.checked;
      input.setAttribute('aria-checked', child.checked ? 'true' : 'false');
      childInputs.push(input);
      const span = document.createElement('span');
      span.textContent = child.label;
      label.appendChild(input);
      label.appendChild(span);
      childContainer.appendChild(label);
    });
    container.appendChild(childContainer);

    // Update parent based on children
    const updateParent = () => {
      const checkedCount = childInputs.filter(cb => cb.checked).length;
      parentInput.checked = checkedCount === childInputs.length;
      parentInput.indeterminate = checkedCount > 0 && checkedCount < childInputs.length;
      parentInput.setAttribute('aria-checked', parentInput.indeterminate ? 'mixed' : parentInput.checked ? 'true' : 'false');
    };

    // Parent click handler
    parentInput.addEventListener('change', () => {
      childInputs.forEach(cb => {
        cb.checked = parentInput.checked;
        cb.setAttribute('aria-checked', parentInput.checked ? 'true' : 'false');
      });
    });

    // Child click handlers
    childInputs.forEach(cb => {
      cb.addEventListener('change', () => {
        cb.setAttribute('aria-checked', cb.checked ? 'true' : 'false');
        updateParent();
      });
    });

    // Initialize
    updateParent();
    return container;
  }
}`,...(re=(le=y.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var oe,pe,me;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'checkbox';
      if (args.size && args.size !== 'md') {
        label.classList.add(\`checkbox-\${args.size}\`);
      }
      if (args.description) {
        label.classList.add('checkbox-with-description');
      }
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = id;
      input.checked = args.checked || false;
      input.disabled = args.disabled || false;
      if (args.indeterminate) {
        setTimeout(() => {
          input.indeterminate = true;
        }, 0);
      }
      input.setAttribute('aria-checked', args.indeterminate ? 'mixed' : args.checked ? 'true' : 'false');
      if (args.description) {
        const descId = \`\${id}-desc\`;
        input.setAttribute('aria-describedby', descId);
      }
      const span = document.createElement('span');
      span.textContent = args.label;
      if (args.description) {
        const desc = document.createElement('span');
        desc.className = 'checkbox-description';
        desc.id = \`\${id}-desc\`;
        desc.textContent = args.description;
        span.appendChild(desc);
      }
      label.appendChild(input);
      label.appendChild(span);
      return label;
    });
  },
  args: {
    label: 'Enable feature',
    checked: true,
    disabled: false,
    indeterminate: false,
    size: 'md',
    description: ''
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Checkbox label text'
    },
    checked: {
      control: 'boolean',
      description: 'Checked state'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Checkbox size'
    },
    description: {
      control: 'text',
      description: 'Optional description text'
    }
  }
}`,...(me=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const fe=["Default","Checked","Disabled","DisabledChecked","Indeterminate","Small","Large","WithDescription","AllStates","AllSizes","CheckboxGroup","SelectAllPattern","ThemeComparison"];export{v as AllSizes,E as AllStates,z as CheckboxGroup,b as Checked,r as Default,h as Disabled,k as DisabledChecked,f as Indeterminate,g as Large,y as SelectAllPattern,x as Small,I as ThemeComparison,C as WithDescription,fe as __namedExportsOrder,ke as default};
