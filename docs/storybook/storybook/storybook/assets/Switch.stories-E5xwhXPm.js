import{c as ge}from"./createThemeGrid-DWAncU4Q.js";const xe={title:"Components/Forms/Switch",tags:["autodocs"],parameters:{docs:{description:{component:`
# Switch Component

iOS-style toggle switches for binary on/off options. Provide immediate visual feedback for settings and feature toggles.
See the **Documentation** tab for complete examples, best practices, and framework-specific code.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<label class="switch">
  <input type="checkbox" class="switch__input" role="switch" checked>
  <div class="switch__track">
    <div class="switch__thumb"></div>
  </div>
  <span class="switch__label">Enable notifications</span>
</label>
\`\`\`

**React:**
\`\`\`jsx
const [enabled, setEnabled] = useState(false);

<label className="switch">
  <input
    type="checkbox"
    className="switch__input"
    role="switch"
    checked={enabled}
    onChange={(e) => setEnabled(e.target.checked)}
  />
  <div className="switch__track">
    <div className="switch__thumb"></div>
  </div>
  <span className="switch__label">Enable notifications</span>
</label>
\`\`\`

**Vue:**
\`\`\`vue
<label class="switch">
  <input
    type="checkbox"
    class="switch__input"
    role="switch"
    v-model="enabled"
  />
  <div class="switch__track">
    <div class="switch__thumb"></div>
  </div>
  <span class="switch__label">Enable notifications</span>
</label>
\`\`\`
        `.trim()}}},argTypes:{label:{control:"text",description:"Switch label text"},checked:{control:"boolean",description:"Checked state (on/off)"},disabled:{control:"boolean",description:"Disabled state"},size:{control:"select",options:["sm","md","lg"],description:"Switch size"},labelPosition:{control:"select",options:["left","right"],description:"Label position relative to switch"},description:{control:"text",description:"Optional description text below the label"},variant:{control:"select",options:["default","primary","success","warning","error","info"],description:"Color variant for semantic meaning"}}};let Ce=0;const k=()=>`switch-${Date.now()}-${Ce++}`,o={render:e=>{const d=k(),a=document.createElement("label");a.className="switch",e.size&&e.size!=="md"&&a.classList.add(`switch-${e.size}`),e.variant&&e.variant!=="default"&&a.classList.add(`switch-${e.variant}`),e.description&&a.classList.add("switch-with-description"),e.labelPosition==="left"&&a.classList.add("switch-label-left");const n=document.createElement("input");if(n.type="checkbox",n.className="switch__input",n.id=d,n.checked=e.checked||!1,n.disabled=e.disabled||!1,n.setAttribute("role","switch"),n.setAttribute("aria-checked",e.checked?"true":"false"),e.label&&n.setAttribute("aria-labelledby",`${d}-label`),e.description){const l=`${d}-desc`;n.setAttribute("aria-describedby",l)}n.addEventListener("change",()=>{n.setAttribute("aria-checked",n.checked?"true":"false")});const i=document.createElement("div");i.className="switch__track";const t=document.createElement("div");t.className="switch__thumb",i.appendChild(t);const c=document.createElement("span");if(c.className="switch__label",c.id=`${d}-label`,c.textContent=e.label,e.description){const l=document.createElement("span");l.className="switch__description",l.id=`${d}-desc`,l.textContent=e.description,c.appendChild(l)}return a.appendChild(n),a.appendChild(i),e.label&&a.appendChild(c),a},args:{label:"Enable notifications",checked:!1,disabled:!1,size:"md",labelPosition:"right",description:"",variant:"default"}},v={...o,args:{label:"Dark mode",checked:!0,disabled:!1,size:"md",labelPosition:"right",variant:"default"}},_={...o,args:{label:"Disabled switch",checked:!1,disabled:!0,size:"md",labelPosition:"right",variant:"default"}},g={...o,args:{label:"Disabled checked",checked:!0,disabled:!0,size:"md",labelPosition:"right",variant:"default"}},C={...o,args:{label:"Auto-save",checked:!0,disabled:!1,size:"md",labelPosition:"right",variant:"default"}},E={...o,args:{label:"Email notifications",description:"Receive email updates about your account activity",checked:!0,disabled:!1,size:"md",labelPosition:"right",variant:"default"}},x={...o,args:{label:"Label on left",checked:!0,disabled:!1,size:"md",labelPosition:"left",variant:"default"}},y={...o,args:{label:"Small switch",checked:!0,disabled:!1,size:"sm",labelPosition:"right",variant:"default"}},S={...o,args:{label:"Large switch",checked:!0,disabled:!1,size:"lg",labelPosition:"right",variant:"default"}},N={render:()=>{const e=document.createElement("div");return e.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      max-width: 400px;
    `,[{label:"Off (unchecked)",checked:!1,disabled:!1},{label:"On (checked)",checked:!0,disabled:!1},{label:"Disabled off",checked:!1,disabled:!0},{label:"Disabled on",checked:!0,disabled:!0}].forEach(a=>{const n=k(),i=document.createElement("label");i.className="switch";const t=document.createElement("input");t.type="checkbox",t.className="switch__input",t.id=n,t.checked=a.checked,t.disabled=a.disabled,t.setAttribute("role","switch"),t.setAttribute("aria-checked",a.checked?"true":"false"),t.setAttribute("aria-labelledby",`${n}-label`),t.addEventListener("change",()=>{t.setAttribute("aria-checked",t.checked?"true":"false")});const c=document.createElement("div");c.className="switch__track";const l=document.createElement("div");l.className="switch__thumb",c.appendChild(l);const r=document.createElement("span");r.className="switch__label",r.id=`${n}-label`,r.textContent=a.label,i.appendChild(t),i.appendChild(c),i.appendChild(r),e.appendChild(i)}),e}},A={render:()=>{const e=document.createElement("div");return e.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      align-items: flex-start;
    `,[{size:"sm",label:"Small switch"},{size:"md",label:"Medium switch (default)"},{size:"lg",label:"Large switch"}].forEach(a=>{const n=k(),i=document.createElement("label");i.className="switch",a.size!=="md"&&i.classList.add(`switch-${a.size}`);const t=document.createElement("input");t.type="checkbox",t.className="switch__input",t.id=n,t.checked=!0,t.setAttribute("role","switch"),t.setAttribute("aria-checked","true"),t.setAttribute("aria-labelledby",`${n}-label`),t.addEventListener("change",()=>{t.setAttribute("aria-checked",t.checked?"true":"false")});const c=document.createElement("div");c.className="switch__track";const l=document.createElement("div");l.className="switch__thumb",c.appendChild(l);const r=document.createElement("span");r.className="switch__label",r.id=`${n}-label`,r.textContent=a.label,i.appendChild(t),i.appendChild(c),i.appendChild(r),e.appendChild(i)}),e}},z={render:()=>{const e=document.createElement("div");return e.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      max-width: 400px;
    `,[{variant:"primary",label:"Primary"},{variant:"success",label:"Success"},{variant:"warning",label:"Warning"},{variant:"error",label:"Error"},{variant:"info",label:"Info"}].forEach(a=>{const n=k(),i=document.createElement("label");i.className="switch",a.variant&&i.classList.add(`switch-${a.variant}`);const t=document.createElement("input");t.type="checkbox",t.className="switch__input",t.id=n,t.checked=!0,t.setAttribute("role","switch"),t.setAttribute("aria-checked","true"),t.setAttribute("aria-labelledby",`${n}-label`),t.addEventListener("change",()=>{t.setAttribute("aria-checked",t.checked?"true":"false")});const c=document.createElement("div");c.className="switch__track";const l=document.createElement("div");l.className="switch__thumb",c.appendChild(l);const r=document.createElement("span");r.className="switch__label",r.id=`${n}-label`,r.textContent=a.label,i.appendChild(t),i.appendChild(c),i.appendChild(r),e.appendChild(i)}),e}},$={render:()=>{const e=document.createElement("div");e.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
      max-width: 500px;
    `;const d=document.createElement("div"),a=document.createElement("h3");a.textContent="Privacy",a.style.cssText=`
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin: 0 0 1rem 0;
    `,d.appendChild(a);const n=[{label:"Public profile",description:"Allow others to view your profile",checked:!0},{label:"Show online status",description:"Display when you're active",checked:!1}],i=document.createElement("div");i.style.cssText="display: flex; flex-direction: column; gap: 1rem;",n.forEach(m=>{const p=k(),u=document.createElement("label");u.className="switch switch-with-description";const s=document.createElement("input");s.type="checkbox",s.className="switch__input",s.id=p,s.checked=m.checked,s.setAttribute("role","switch"),s.setAttribute("aria-checked",m.checked?"true":"false"),s.setAttribute("aria-labelledby",`${p}-label`),s.setAttribute("aria-describedby",`${p}-desc`),s.addEventListener("change",()=>{s.setAttribute("aria-checked",s.checked?"true":"false")});const f=document.createElement("div");f.className="switch__track";const w=document.createElement("div");w.className="switch__thumb",f.appendChild(w);const b=document.createElement("span");b.className="switch__label",b.id=`${p}-label`,b.textContent=m.label;const h=document.createElement("span");h.className="switch__description",h.id=`${p}-desc`,h.textContent=m.description,b.appendChild(h),u.appendChild(s),u.appendChild(f),u.appendChild(b),i.appendChild(u)}),d.appendChild(i),e.appendChild(d);const t=document.createElement("div");t.style.cssText="border-top: 1px solid var(--color-border-subtle);",e.appendChild(t);const c=document.createElement("div"),l=document.createElement("h3");l.textContent="Features",l.style.cssText=`
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin: 0 0 1rem 0;
    `,c.appendChild(l);const r=[{label:"Dark mode",description:"Use dark theme across the app",checked:!0},{label:"Auto-play videos",description:"Videos start automatically",checked:!1}],D=document.createElement("div");return D.style.cssText="display: flex; flex-direction: column; gap: 1rem;",r.forEach(m=>{const p=k(),u=document.createElement("label");u.className="switch switch-with-description";const s=document.createElement("input");s.type="checkbox",s.className="switch__input",s.id=p,s.checked=m.checked,s.setAttribute("role","switch"),s.setAttribute("aria-checked",m.checked?"true":"false"),s.setAttribute("aria-labelledby",`${p}-label`),s.setAttribute("aria-describedby",`${p}-desc`),s.addEventListener("change",()=>{s.setAttribute("aria-checked",s.checked?"true":"false")});const f=document.createElement("div");f.className="switch__track";const w=document.createElement("div");w.className="switch__thumb",f.appendChild(w);const b=document.createElement("span");b.className="switch__label",b.id=`${p}-label`,b.textContent=m.label;const h=document.createElement("span");h.className="switch__description",h.id=`${p}-desc`,h.textContent=m.description,b.appendChild(h),u.appendChild(s),u.appendChild(f),u.appendChild(b),D.appendChild(u)}),c.appendChild(D),e.appendChild(c),e}},L={render:e=>ge(()=>{const d=k(),a=document.createElement("label");a.className="switch",e.size&&e.size!=="md"&&a.classList.add(`switch-${e.size}`),e.variant&&e.variant!=="default"&&a.classList.add(`switch-${e.variant}`),e.description&&a.classList.add("switch-with-description"),e.labelPosition==="left"&&a.classList.add("switch-label-left");const n=document.createElement("input");n.type="checkbox",n.className="switch__input",n.id=d,n.checked=e.checked||!1,n.disabled=e.disabled||!1,n.setAttribute("role","switch"),n.setAttribute("aria-checked",e.checked?"true":"false"),e.label&&n.setAttribute("aria-labelledby",`${d}-label`),e.description&&n.setAttribute("aria-describedby",`${d}-desc`),n.addEventListener("change",()=>{n.setAttribute("aria-checked",n.checked?"true":"false")});const i=document.createElement("div");i.className="switch__track";const t=document.createElement("div");t.className="switch__thumb",i.appendChild(t);const c=document.createElement("span");if(c.className="switch__label",c.id=`${d}-label`,c.textContent=e.label,e.description){const l=document.createElement("span");l.className="switch__description",l.id=`${d}-desc`,l.textContent=e.description,c.appendChild(l)}return a.appendChild(n),a.appendChild(i),e.label&&a.appendChild(c),a}),args:{label:"Dark mode",checked:!0,disabled:!1,size:"md",labelPosition:"right",description:"",variant:"default"},argTypes:{label:{control:"text",description:"Switch label text"},checked:{control:"boolean",description:"Checked state"},disabled:{control:"boolean",description:"Disabled state"},size:{control:"select",options:["sm","md","lg"],description:"Switch size"},labelPosition:{control:"select",options:["left","right"],description:"Label position"},description:{control:"text",description:"Optional description text"},variant:{control:"select",options:["default","primary","success","warning","error","info"],description:"Color variant"}}};var P,T,O;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const id = generateId();
    const label = document.createElement('label');
    label.className = 'switch';

    // Add size class
    if (args.size && args.size !== 'md') {
      label.classList.add(\`switch-\${args.size}\`);
    }

    // Add variant class
    if (args.variant && args.variant !== 'default') {
      label.classList.add(\`switch-\${args.variant}\`);
    }

    // Add description class
    if (args.description) {
      label.classList.add('switch-with-description');
    }

    // Add label position class
    if (args.labelPosition === 'left') {
      label.classList.add('switch-label-left');
    }
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'switch__input';
    input.id = id;
    input.checked = args.checked || false;
    input.disabled = args.disabled || false;

    // Add ARIA attributes
    input.setAttribute('role', 'switch');
    input.setAttribute('aria-checked', args.checked ? 'true' : 'false');
    if (args.label) {
      input.setAttribute('aria-labelledby', \`\${id}-label\`);
    }
    if (args.description) {
      const descId = \`\${id}-desc\`;
      input.setAttribute('aria-describedby', descId);
    }

    // Update aria-checked on change
    input.addEventListener('change', () => {
      input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
    });
    const track = document.createElement('div');
    track.className = 'switch__track';
    const thumb = document.createElement('div');
    thumb.className = 'switch__thumb';
    track.appendChild(thumb);
    const labelSpan = document.createElement('span');
    labelSpan.className = 'switch__label';
    labelSpan.id = \`\${id}-label\`;
    labelSpan.textContent = args.label;
    if (args.description) {
      const desc = document.createElement('span');
      desc.className = 'switch__description';
      desc.id = \`\${id}-desc\`;
      desc.textContent = args.description;
      labelSpan.appendChild(desc);
    }
    label.appendChild(input);
    label.appendChild(track);
    if (args.label) {
      label.appendChild(labelSpan);
    }
    return label;
  },
  args: {
    label: 'Enable notifications',
    checked: false,
    disabled: false,
    size: 'md',
    labelPosition: 'right',
    description: '',
    variant: 'default'
  }
}`,...(O=(T=o.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var I,V,W;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Dark mode',
    checked: true,
    disabled: false,
    size: 'md',
    labelPosition: 'right',
    variant: 'default'
  }
}`,...(W=(V=v.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var F,R,M;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Disabled switch',
    checked: false,
    disabled: true,
    size: 'md',
    labelPosition: 'right',
    variant: 'default'
  }
}`,...(M=(R=_.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var U,G,j;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Disabled checked',
    checked: true,
    disabled: true,
    size: 'md',
    labelPosition: 'right',
    variant: 'default'
  }
}`,...(j=(G=g.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var H,q,B;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Auto-save',
    checked: true,
    disabled: false,
    size: 'md',
    labelPosition: 'right',
    variant: 'default'
  }
}`,...(B=(q=C.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var J,K,Q;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Email notifications',
    description: 'Receive email updates about your account activity',
    checked: true,
    disabled: false,
    size: 'md',
    labelPosition: 'right',
    variant: 'default'
  }
}`,...(Q=(K=E.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Label on left',
    checked: true,
    disabled: false,
    size: 'md',
    labelPosition: 'left',
    variant: 'default'
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Small switch',
    checked: true,
    disabled: false,
    size: 'sm',
    labelPosition: 'right',
    variant: 'default'
  }
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,ie,ce;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Large switch',
    checked: true,
    disabled: false,
    size: 'lg',
    labelPosition: 'right',
    variant: 'default'
  }
}`,...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var se,le,de;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      max-width: 400px;
    \`;
    const states = [{
      label: 'Off (unchecked)',
      checked: false,
      disabled: false
    }, {
      label: 'On (checked)',
      checked: true,
      disabled: false
    }, {
      label: 'Disabled off',
      checked: false,
      disabled: true
    }, {
      label: 'Disabled on',
      checked: true,
      disabled: true
    }];
    states.forEach(state => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'switch';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'switch__input';
      input.id = id;
      input.checked = state.checked;
      input.disabled = state.disabled;
      input.setAttribute('role', 'switch');
      input.setAttribute('aria-checked', state.checked ? 'true' : 'false');
      input.setAttribute('aria-labelledby', \`\${id}-label\`);
      input.addEventListener('change', () => {
        input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
      });
      const track = document.createElement('div');
      track.className = 'switch__track';
      const thumb = document.createElement('div');
      thumb.className = 'switch__thumb';
      track.appendChild(thumb);
      const labelSpan = document.createElement('span');
      labelSpan.className = 'switch__label';
      labelSpan.id = \`\${id}-label\`;
      labelSpan.textContent = state.label;
      label.appendChild(input);
      label.appendChild(track);
      label.appendChild(labelSpan);
      container.appendChild(label);
    });
    return container;
  }
}`,...(de=(le=N.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var re,oe,pe;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      align-items: flex-start;
    \`;
    const sizes = [{
      size: 'sm',
      label: 'Small switch'
    }, {
      size: 'md',
      label: 'Medium switch (default)'
    }, {
      size: 'lg',
      label: 'Large switch'
    }];
    sizes.forEach(item => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'switch';
      if (item.size !== 'md') {
        label.classList.add(\`switch-\${item.size}\`);
      }
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'switch__input';
      input.id = id;
      input.checked = true;
      input.setAttribute('role', 'switch');
      input.setAttribute('aria-checked', 'true');
      input.setAttribute('aria-labelledby', \`\${id}-label\`);
      input.addEventListener('change', () => {
        input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
      });
      const track = document.createElement('div');
      track.className = 'switch__track';
      const thumb = document.createElement('div');
      thumb.className = 'switch__thumb';
      track.appendChild(thumb);
      const labelSpan = document.createElement('span');
      labelSpan.className = 'switch__label';
      labelSpan.id = \`\${id}-label\`;
      labelSpan.textContent = item.label;
      label.appendChild(input);
      label.appendChild(track);
      label.appendChild(labelSpan);
      container.appendChild(label);
    });
    return container;
  }
}`,...(pe=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:pe.source}}};var ue,be,me;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      max-width: 400px;
    \`;
    const variants = [{
      variant: 'primary',
      label: 'Primary'
    }, {
      variant: 'success',
      label: 'Success'
    }, {
      variant: 'warning',
      label: 'Warning'
    }, {
      variant: 'error',
      label: 'Error'
    }, {
      variant: 'info',
      label: 'Info'
    }];
    variants.forEach(item => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'switch';
      if (item.variant) {
        label.classList.add(\`switch-\${item.variant}\`);
      }
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'switch__input';
      input.id = id;
      input.checked = true;
      input.setAttribute('role', 'switch');
      input.setAttribute('aria-checked', 'true');
      input.setAttribute('aria-labelledby', \`\${id}-label\`);
      input.addEventListener('change', () => {
        input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
      });
      const track = document.createElement('div');
      track.className = 'switch__track';
      const thumb = document.createElement('div');
      thumb.className = 'switch__thumb';
      track.appendChild(thumb);
      const labelSpan = document.createElement('span');
      labelSpan.className = 'switch__label';
      labelSpan.id = \`\${id}-label\`;
      labelSpan.textContent = item.label;
      label.appendChild(input);
      label.appendChild(track);
      label.appendChild(labelSpan);
      container.appendChild(label);
    });
    return container;
  }
}`,...(me=(be=z.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};var he,fe,ke;$.parameters={...$.parameters,docs:{...(he=$.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
      max-width: 500px;
    \`;

    // Privacy section
    const privacySection = document.createElement('div');
    const privacyTitle = document.createElement('h3');
    privacyTitle.textContent = 'Privacy';
    privacyTitle.style.cssText = \`
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin: 0 0 1rem 0;
    \`;
    privacySection.appendChild(privacyTitle);
    const privacyOptions = [{
      label: 'Public profile',
      description: 'Allow others to view your profile',
      checked: true
    }, {
      label: 'Show online status',
      description: 'Display when you\\'re active',
      checked: false
    }];
    const privacyContainer = document.createElement('div');
    privacyContainer.style.cssText = 'display: flex; flex-direction: column; gap: 1rem;';
    privacyOptions.forEach(option => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'switch switch-with-description';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'switch__input';
      input.id = id;
      input.checked = option.checked;
      input.setAttribute('role', 'switch');
      input.setAttribute('aria-checked', option.checked ? 'true' : 'false');
      input.setAttribute('aria-labelledby', \`\${id}-label\`);
      input.setAttribute('aria-describedby', \`\${id}-desc\`);
      input.addEventListener('change', () => {
        input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
      });
      const track = document.createElement('div');
      track.className = 'switch__track';
      const thumb = document.createElement('div');
      thumb.className = 'switch__thumb';
      track.appendChild(thumb);
      const labelSpan = document.createElement('span');
      labelSpan.className = 'switch__label';
      labelSpan.id = \`\${id}-label\`;
      labelSpan.textContent = option.label;
      const desc = document.createElement('span');
      desc.className = 'switch__description';
      desc.id = \`\${id}-desc\`;
      desc.textContent = option.description;
      labelSpan.appendChild(desc);
      label.appendChild(input);
      label.appendChild(track);
      label.appendChild(labelSpan);
      privacyContainer.appendChild(label);
    });
    privacySection.appendChild(privacyContainer);
    container.appendChild(privacySection);

    // Divider
    const divider = document.createElement('div');
    divider.style.cssText = 'border-top: 1px solid var(--color-border-subtle);';
    container.appendChild(divider);

    // Features section
    const featuresSection = document.createElement('div');
    const featuresTitle = document.createElement('h3');
    featuresTitle.textContent = 'Features';
    featuresTitle.style.cssText = \`
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin: 0 0 1rem 0;
    \`;
    featuresSection.appendChild(featuresTitle);
    const featuresOptions = [{
      label: 'Dark mode',
      description: 'Use dark theme across the app',
      checked: true
    }, {
      label: 'Auto-play videos',
      description: 'Videos start automatically',
      checked: false
    }];
    const featuresContainer = document.createElement('div');
    featuresContainer.style.cssText = 'display: flex; flex-direction: column; gap: 1rem;';
    featuresOptions.forEach(option => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'switch switch-with-description';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'switch__input';
      input.id = id;
      input.checked = option.checked;
      input.setAttribute('role', 'switch');
      input.setAttribute('aria-checked', option.checked ? 'true' : 'false');
      input.setAttribute('aria-labelledby', \`\${id}-label\`);
      input.setAttribute('aria-describedby', \`\${id}-desc\`);
      input.addEventListener('change', () => {
        input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
      });
      const track = document.createElement('div');
      track.className = 'switch__track';
      const thumb = document.createElement('div');
      thumb.className = 'switch__thumb';
      track.appendChild(thumb);
      const labelSpan = document.createElement('span');
      labelSpan.className = 'switch__label';
      labelSpan.id = \`\${id}-label\`;
      labelSpan.textContent = option.label;
      const desc = document.createElement('span');
      desc.className = 'switch__description';
      desc.id = \`\${id}-desc\`;
      desc.textContent = option.description;
      labelSpan.appendChild(desc);
      label.appendChild(input);
      label.appendChild(track);
      label.appendChild(labelSpan);
      featuresContainer.appendChild(label);
    });
    featuresSection.appendChild(featuresContainer);
    container.appendChild(featuresSection);
    return container;
  }
}`,...(ke=(fe=$.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var we,ve,_e;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'switch';
      if (args.size && args.size !== 'md') {
        label.classList.add(\`switch-\${args.size}\`);
      }
      if (args.variant && args.variant !== 'default') {
        label.classList.add(\`switch-\${args.variant}\`);
      }
      if (args.description) {
        label.classList.add('switch-with-description');
      }
      if (args.labelPosition === 'left') {
        label.classList.add('switch-label-left');
      }
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'switch__input';
      input.id = id;
      input.checked = args.checked || false;
      input.disabled = args.disabled || false;
      input.setAttribute('role', 'switch');
      input.setAttribute('aria-checked', args.checked ? 'true' : 'false');
      if (args.label) {
        input.setAttribute('aria-labelledby', \`\${id}-label\`);
      }
      if (args.description) {
        input.setAttribute('aria-describedby', \`\${id}-desc\`);
      }
      input.addEventListener('change', () => {
        input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
      });
      const track = document.createElement('div');
      track.className = 'switch__track';
      const thumb = document.createElement('div');
      thumb.className = 'switch__thumb';
      track.appendChild(thumb);
      const labelSpan = document.createElement('span');
      labelSpan.className = 'switch__label';
      labelSpan.id = \`\${id}-label\`;
      labelSpan.textContent = args.label;
      if (args.description) {
        const desc = document.createElement('span');
        desc.className = 'switch__description';
        desc.id = \`\${id}-desc\`;
        desc.textContent = args.description;
        labelSpan.appendChild(desc);
      }
      label.appendChild(input);
      label.appendChild(track);
      if (args.label) {
        label.appendChild(labelSpan);
      }
      return label;
    });
  },
  args: {
    label: 'Dark mode',
    checked: true,
    disabled: false,
    size: 'md',
    labelPosition: 'right',
    description: '',
    variant: 'default'
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Switch label text'
    },
    checked: {
      control: 'boolean',
      description: 'Checked state'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Switch size'
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Label position'
    },
    description: {
      control: 'text',
      description: 'Optional description text'
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Color variant'
    }
  }
}`,...(_e=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:_e.source}}};const ye=["Default","Checked","Disabled","DisabledChecked","WithLabel","WithDescription","LabelLeft","Small","Large","AllStates","AllSizes","ColorVariants","SettingsPanel","ThemeComparison"];export{A as AllSizes,N as AllStates,v as Checked,z as ColorVariants,o as Default,_ as Disabled,g as DisabledChecked,x as LabelLeft,S as Large,$ as SettingsPanel,y as Small,L as ThemeComparison,E as WithDescription,C as WithLabel,ye as __namedExportsOrder,xe as default};
