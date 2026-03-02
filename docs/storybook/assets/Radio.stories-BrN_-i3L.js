import{c as te}from"./createThemeGrid-DWAncU4Q.js";const oe={title:"Components/Forms/Radio",tags:["autodocs"],parameters:{docs:{description:{component:`
# Radio Button Component

Single-selection radio button groups for mutually exclusive choices. Allow users to select exactly one option from a set.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="radio-group">
  <div class="radio-group-label">Select your plan</div>
  <label class="radio">
    <input type="radio" name="plan" value="free" checked>
    <span>Free - $0/month</span>
  </label>
  <label class="radio">
    <input type="radio" name="plan" value="pro">
    <span>Pro - $9/month</span>
  </label>
</div>
\`\`\`

**React:**
\`\`\`jsx
<div className="radio-group">
  <div className="radio-group-label">Select your plan</div>
  <label className="radio">
    <input type="radio" name="plan" value="free" checked />
    <span>Free - $0/month</span>
  </label>
  <label className="radio">
    <input type="radio" name="plan" value="pro" />
    <span>Pro - $9/month</span>
  </label>
</div>
\`\`\`

**Vue:**
\`\`\`vue
<div class="radio-group">
  <div class="radio-group-label">Select your plan</div>
  <label class="radio">
    <input type="radio" name="plan" value="free" :checked="true">
    <span>Free - $0/month</span>
  </label>
  <label class="radio">
    <input type="radio" name="plan" value="pro">
    <span>Pro - $9/month</span>
  </label>
</div>
\`\`\`
        `.trim()}}},argTypes:{name:{control:"text",description:"Radio group name (all radios in group must share same name)"},options:{control:"object",description:"Array of options: [{ label: string, value: string, description?: string, disabled?: boolean }]"},selected:{control:"text",description:"Currently selected value"},disabled:{control:"boolean",description:"Disable all radios in the group"},layout:{control:"select",options:["stacked","inline"],description:"Layout direction for radio group"},size:{control:"select",options:["sm","md","lg"],description:"Radio button size"},groupLabel:{control:"text",description:"Label for the radio group"}}},d={render:e=>{const t=document.createElement("div");if(t.className="radio-group",e.groupLabel){const n=document.createElement("div");n.className="radio-group-label",n.textContent=e.groupLabel,t.appendChild(n)}return e.options.forEach(n=>{const l=document.createElement("label");l.className=`radio${e.size==="sm"?" radio-sm":e.size==="lg"?" radio-lg":""}`;const a=document.createElement("input");a.type="radio",a.name=e.name,a.value=n.value,a.checked=n.value===e.selected,a.disabled=e.disabled||n.disabled||!1;const o=document.createElement("span");o.textContent=n.label,l.appendChild(a),l.appendChild(o),t.appendChild(l)}),t},args:{name:"plan",groupLabel:"Select your plan",options:[{label:"Free - $0/month",value:"free"},{label:"Pro - $9/month",value:"pro"},{label:"Enterprise - $29/month",value:"enterprise"}],selected:"free",disabled:!1,layout:"stacked",size:"md"}},c={...d,args:{name:"payment",groupLabel:"Payment method",options:[{label:"Credit Card",value:"card"},{label:"PayPal",value:"paypal"},{label:"Bank Transfer",value:"bank"}],selected:"paypal",size:"md"}},p={render:e=>{const t=document.createElement("div");t.className="radio-group";const n=document.createElement("div");return n.className="radio-group-label",n.textContent=e.groupLabel,t.appendChild(n),e.options.forEach(l=>{const a=document.createElement("label");a.className="radio";const o=document.createElement("input");o.type="radio",o.name=e.name,o.value=l.value,o.checked=l.value===e.selected,o.disabled=l.disabled;const r=document.createElement("span");r.textContent=l.label,a.appendChild(o),a.appendChild(r),t.appendChild(a)}),t},args:{name:"payment",groupLabel:"Payment method",options:[{label:"Credit Card",value:"card",disabled:!1},{label:"PayPal",value:"paypal",disabled:!1},{label:"Cryptocurrency (Coming Soon)",value:"crypto",disabled:!0}],selected:"card",size:"md"}},u={render:e=>{const t=document.createElement("div");if(t.className="radio-group",t.style.display="flex",t.style.flexDirection="row",t.style.gap="var(--space-6)",t.style.flexWrap="wrap",e.groupLabel){const n=document.createElement("div");n.className="radio-group-label",n.textContent=e.groupLabel,n.style.width="100%",t.appendChild(n)}return e.options.forEach(n=>{const l=document.createElement("label");l.className="radio";const a=document.createElement("input");a.type="radio",a.name=e.name,a.value=n.value,a.checked=n.value===e.selected;const o=document.createElement("span");o.textContent=n.label,l.appendChild(a),l.appendChild(o),t.appendChild(l)}),t},args:{name:"gender",groupLabel:"Gender",options:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Other",value:"other"}],selected:"male",size:"md"}},m={...d,args:{name:"shipping",groupLabel:"Shipping method",options:[{label:"Standard - 5-7 days",value:"standard"},{label:"Express - 2-3 days",value:"express"},{label:"Overnight - Next day",value:"overnight"}],selected:"standard",size:"md"}},b={render:e=>{const t=document.createElement("div");t.className="radio-group";const n=document.createElement("div");return n.className="radio-group-label",n.textContent=e.groupLabel,t.appendChild(n),e.options.forEach(l=>{const a=document.createElement("label");a.className="radio radio-with-description";const o=document.createElement("input");o.type="radio",o.name=e.name,o.value=l.value,o.checked=l.value===e.selected;const r=document.createElement("span");if(r.textContent=l.label,l.description){const s=document.createElement("span");s.className="radio-description",s.textContent=l.description,r.appendChild(document.createTextNode(" ")),r.appendChild(s)}a.appendChild(o),a.appendChild(r),t.appendChild(a)}),t},args:{name:"shipping",groupLabel:"Choose shipping method",options:[{label:"Standard Shipping",value:"standard",description:"Delivery in 5-7 business days"},{label:"Express Shipping",value:"express",description:"Delivery in 2-3 business days"},{label:"Overnight Shipping",value:"overnight",description:"Next business day delivery"}],selected:"standard",size:"md"}},g={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",[{size:"sm",label:"Small"},{size:"md",label:"Default"},{size:"lg",label:"Large"}].forEach(({size:n,label:l})=>{const a=document.createElement("div");a.className="radio-group";const o=document.createElement("label");o.className=`radio${n==="sm"?" radio-sm":n==="lg"?" radio-lg":""}`;const r=document.createElement("input");r.type="radio",r.name=`size-${n}`,r.checked=!0;const s=document.createElement("span");s.textContent=`${l} radio button`,o.appendChild(r),o.appendChild(s),a.appendChild(o),e.appendChild(a)}),e}},h={render:e=>{const t=document.createElement("div");return t.className="radio-group radio-group-buttons",e.options.forEach(n=>{const l=document.createElement("label");l.className="radio radio-button";const a=document.createElement("input");a.type="radio",a.name=e.name,a.value=n.value,a.checked=n.value===e.selected;const o=document.createElement("span");o.textContent=n.label,l.appendChild(a),l.appendChild(o),t.appendChild(l)}),t},args:{name:"view",options:[{label:"Grid",value:"grid"},{label:"List",value:"list"},{label:"Table",value:"table"}],selected:"grid"}},v={render:e=>{const t=document.createElement("div");return t.className="radio-group radio-group-attached",e.options.forEach(n=>{const l=document.createElement("label");l.className="radio radio-button";const a=document.createElement("input");a.type="radio",a.name=e.name,a.value=n.value,a.checked=n.value===e.selected;const o=document.createElement("span");o.textContent=n.label,l.appendChild(a),l.appendChild(o),t.appendChild(l)}),t},args:{name:"period",options:[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"},{label:"Year",value:"year"}],selected:"day"}},y={render:e=>{const t=document.createElement("div");return t.style.display="grid",t.style.gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))",t.style.gap="var(--space-4)",e.options.forEach(n=>{const l=document.createElement("label");l.className="radio radio-card";const a=document.createElement("input");a.type="radio",a.name=e.name,a.value=n.value,a.checked=n.value===e.selected;const o=document.createElement("div");o.className="radio-card-content";const r=document.createElement("div");r.style.fontWeight="var(--font-semibold)",r.style.fontSize="var(--text-lg)",r.style.marginBottom="var(--space-2)",r.textContent=n.label;const s=document.createElement("div");s.style.fontSize="var(--text-2xl)",s.style.fontWeight="var(--font-bold)",s.style.color="var(--color-primary)",s.style.marginBottom="var(--space-2)",s.textContent=n.price;const i=document.createElement("div");i.style.fontSize="var(--text-sm)",i.style.color="var(--color-text-secondary)",i.textContent=n.description,o.appendChild(r),o.appendChild(s),o.appendChild(i),l.appendChild(a),l.appendChild(o),t.appendChild(l)}),t},args:{name:"pricing",options:[{label:"Starter",value:"starter",price:"$9",description:"Perfect for individuals"},{label:"Pro",value:"pro",price:"$29",description:"For small teams"},{label:"Enterprise",value:"enterprise",price:"$99",description:"For large organizations"}],selected:"starter"}},C={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-8)",[{label:"Default (Unchecked)",checked:!1,disabled:!1},{label:"Checked",checked:!0,disabled:!1},{label:"Disabled (Unchecked)",checked:!1,disabled:!0},{label:"Disabled (Checked)",checked:!0,disabled:!0}].forEach((n,l)=>{const a=document.createElement("div");a.className="radio-group";const o=document.createElement("div");o.className="radio-group-label",o.textContent=n.label,a.appendChild(o);const r=document.createElement("label");r.className="radio";const s=document.createElement("input");s.type="radio",s.name=`state-${l}`,s.value="option",s.checked=n.checked,s.disabled=n.disabled;const i=document.createElement("span");i.textContent="Radio option",r.appendChild(s),r.appendChild(i),a.appendChild(r),e.appendChild(a)}),e}},E={render:e=>te(()=>{const t=document.createElement("div");if(t.className="radio-group",e.groupLabel){const n=document.createElement("div");n.className="radio-group-label",n.textContent=e.groupLabel,t.appendChild(n)}return e.options.forEach(n=>{const l=document.createElement("label");l.className=`radio${e.size==="sm"?" radio-sm":e.size==="lg"?" radio-lg":""}`;const a=document.createElement("input");a.type="radio",a.name=e.name,a.value=n.value,a.checked=n.value===e.selected,a.disabled=e.disabled||n.disabled||!1;const o=document.createElement("span");o.textContent=n.label,l.appendChild(a),l.appendChild(o),t.appendChild(l)}),t}),args:{name:"plan",groupLabel:"Select your plan",options:[{label:"Free",value:"free"},{label:"Pro",value:"pro"},{label:"Enterprise",value:"enterprise"}],selected:"pro",disabled:!1,size:"md"},argTypes:{name:{control:"text",description:"Radio group name"},groupLabel:{control:"text",description:"Label for the radio group"},options:{control:"object",description:"Array of radio options"},selected:{control:"text",description:"Currently selected value"},size:{control:"select",options:["sm","md","lg"],description:"Radio button size"},disabled:{control:"boolean",description:"Disable all radios"}}};var f,x,N;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.className = 'radio-group';
    if (args.groupLabel) {
      const label = document.createElement('div');
      label.className = 'radio-group-label';
      label.textContent = args.groupLabel;
      container.appendChild(label);
    }
    args.options.forEach((option: any) => {
      const label = document.createElement('label');
      label.className = \`radio\${args.size === 'sm' ? ' radio-sm' : args.size === 'lg' ? ' radio-lg' : ''}\`;
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      input.disabled = args.disabled || option.disabled || false;
      const span = document.createElement('span');
      span.textContent = option.label;
      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });
    return container;
  },
  args: {
    name: 'plan',
    groupLabel: 'Select your plan',
    options: [{
      label: 'Free - $0/month',
      value: 'free'
    }, {
      label: 'Pro - $9/month',
      value: 'pro'
    }, {
      label: 'Enterprise - $29/month',
      value: 'enterprise'
    }],
    selected: 'free',
    disabled: false,
    layout: 'stacked',
    size: 'md'
  }
}`,...(N=(x=d.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var S,k,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Default,
  args: {
    name: 'payment',
    groupLabel: 'Payment method',
    options: [{
      label: 'Credit Card',
      value: 'card'
    }, {
      label: 'PayPal',
      value: 'paypal'
    }, {
      label: 'Bank Transfer',
      value: 'bank'
    }],
    selected: 'paypal',
    size: 'md'
  }
}`,...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var z,D,$;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.className = 'radio-group';
    const label = document.createElement('div');
    label.className = 'radio-group-label';
    label.textContent = args.groupLabel;
    container.appendChild(label);
    args.options.forEach((option: any) => {
      const labelEl = document.createElement('label');
      labelEl.className = 'radio';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      input.disabled = option.disabled;
      const span = document.createElement('span');
      span.textContent = option.label;
      labelEl.appendChild(input);
      labelEl.appendChild(span);
      container.appendChild(labelEl);
    });
    return container;
  },
  args: {
    name: 'payment',
    groupLabel: 'Payment method',
    options: [{
      label: 'Credit Card',
      value: 'card',
      disabled: false
    }, {
      label: 'PayPal',
      value: 'paypal',
      disabled: false
    }, {
      label: 'Cryptocurrency (Coming Soon)',
      value: 'crypto',
      disabled: true
    }],
    selected: 'card',
    size: 'md'
  }
}`,...($=(D=p.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var P,T,W;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.className = 'radio-group';
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    if (args.groupLabel) {
      const label = document.createElement('div');
      label.className = 'radio-group-label';
      label.textContent = args.groupLabel;
      label.style.width = '100%';
      container.appendChild(label);
    }
    args.options.forEach((option: any) => {
      const label = document.createElement('label');
      label.className = 'radio';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      const span = document.createElement('span');
      span.textContent = option.label;
      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });
    return container;
  },
  args: {
    name: 'gender',
    groupLabel: 'Gender',
    options: [{
      label: 'Male',
      value: 'male'
    }, {
      label: 'Female',
      value: 'female'
    }, {
      label: 'Other',
      value: 'other'
    }],
    selected: 'male',
    size: 'md'
  }
}`,...(W=(T=u.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var w,F,R;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Default,
  args: {
    name: 'shipping',
    groupLabel: 'Shipping method',
    options: [{
      label: 'Standard - 5-7 days',
      value: 'standard'
    }, {
      label: 'Express - 2-3 days',
      value: 'express'
    }, {
      label: 'Overnight - Next day',
      value: 'overnight'
    }],
    selected: 'standard',
    size: 'md'
  }
}`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var B,A,O;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.className = 'radio-group';
    const label = document.createElement('div');
    label.className = 'radio-group-label';
    label.textContent = args.groupLabel;
    container.appendChild(label);
    args.options.forEach((option: any) => {
      const labelEl = document.createElement('label');
      labelEl.className = 'radio radio-with-description';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      const textWrapper = document.createElement('span');
      textWrapper.textContent = option.label;
      if (option.description) {
        const desc = document.createElement('span');
        desc.className = 'radio-description';
        desc.textContent = option.description;
        textWrapper.appendChild(document.createTextNode(' '));
        textWrapper.appendChild(desc);
      }
      labelEl.appendChild(input);
      labelEl.appendChild(textWrapper);
      container.appendChild(labelEl);
    });
    return container;
  },
  args: {
    name: 'shipping',
    groupLabel: 'Choose shipping method',
    options: [{
      label: 'Standard Shipping',
      value: 'standard',
      description: 'Delivery in 5-7 business days'
    }, {
      label: 'Express Shipping',
      value: 'express',
      description: 'Delivery in 2-3 business days'
    }, {
      label: 'Overnight Shipping',
      value: 'overnight',
      description: 'Next business day delivery'
    }],
    selected: 'standard',
    size: 'md'
  }
}`,...(O=(A=b.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var G,M,j;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    const sizes = [{
      size: 'sm',
      label: 'Small'
    }, {
      size: 'md',
      label: 'Default'
    }, {
      size: 'lg',
      label: 'Large'
    }];
    sizes.forEach(({
      size,
      label
    }) => {
      const group = document.createElement('div');
      group.className = 'radio-group';
      const radioLabel = document.createElement('label');
      radioLabel.className = \`radio\${size === 'sm' ? ' radio-sm' : size === 'lg' ? ' radio-lg' : ''}\`;
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = \`size-\${size}\`;
      input.checked = true;
      const span = document.createElement('span');
      span.textContent = \`\${label} radio button\`;
      radioLabel.appendChild(input);
      radioLabel.appendChild(span);
      group.appendChild(radioLabel);
      container.appendChild(group);
    });
    return container;
  }
}`,...(j=(M=g.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var U,V,I;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.className = 'radio-group radio-group-buttons';
    args.options.forEach((option: any) => {
      const label = document.createElement('label');
      label.className = 'radio radio-button';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      const span = document.createElement('span');
      span.textContent = option.label;
      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });
    return container;
  },
  args: {
    name: 'view',
    options: [{
      label: 'Grid',
      value: 'grid'
    }, {
      label: 'List',
      value: 'list'
    }, {
      label: 'Table',
      value: 'table'
    }],
    selected: 'grid'
  }
}`,...(I=(V=h.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var Y,_,H;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.className = 'radio-group radio-group-attached';
    args.options.forEach((option: any) => {
      const label = document.createElement('label');
      label.className = 'radio radio-button';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      const span = document.createElement('span');
      span.textContent = option.label;
      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });
    return container;
  },
  args: {
    name: 'period',
    options: [{
      label: 'Day',
      value: 'day'
    }, {
      label: 'Week',
      value: 'week'
    }, {
      label: 'Month',
      value: 'month'
    }, {
      label: 'Year',
      value: 'year'
    }],
    selected: 'day'
  }
}`,...(H=(_=v.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var q,J,K;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    container.style.gap = 'var(--space-4)';
    args.options.forEach((option: any) => {
      const label = document.createElement('label');
      label.className = 'radio radio-card';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = args.name;
      input.value = option.value;
      input.checked = option.value === args.selected;
      const content = document.createElement('div');
      content.className = 'radio-card-content';
      const title = document.createElement('div');
      title.style.fontWeight = 'var(--font-semibold)';
      title.style.fontSize = 'var(--text-lg)';
      title.style.marginBottom = 'var(--space-2)';
      title.textContent = option.label;
      const price = document.createElement('div');
      price.style.fontSize = 'var(--text-2xl)';
      price.style.fontWeight = 'var(--font-bold)';
      price.style.color = 'var(--color-primary)';
      price.style.marginBottom = 'var(--space-2)';
      price.textContent = option.price;
      const desc = document.createElement('div');
      desc.style.fontSize = 'var(--text-sm)';
      desc.style.color = 'var(--color-text-secondary)';
      desc.textContent = option.description;
      content.appendChild(title);
      content.appendChild(price);
      content.appendChild(desc);
      label.appendChild(input);
      label.appendChild(content);
      container.appendChild(label);
    });
    return container;
  },
  args: {
    name: 'pricing',
    options: [{
      label: 'Starter',
      value: 'starter',
      price: '$9',
      description: 'Perfect for individuals'
    }, {
      label: 'Pro',
      value: 'pro',
      price: '$29',
      description: 'For small teams'
    }, {
      label: 'Enterprise',
      value: 'enterprise',
      price: '$99',
      description: 'For large organizations'
    }],
    selected: 'starter'
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-8)';
    const states = [{
      label: 'Default (Unchecked)',
      checked: false,
      disabled: false
    }, {
      label: 'Checked',
      checked: true,
      disabled: false
    }, {
      label: 'Disabled (Unchecked)',
      checked: false,
      disabled: true
    }, {
      label: 'Disabled (Checked)',
      checked: true,
      disabled: true
    }];
    states.forEach((state, index) => {
      const group = document.createElement('div');
      group.className = 'radio-group';
      const groupLabel = document.createElement('div');
      groupLabel.className = 'radio-group-label';
      groupLabel.textContent = state.label;
      group.appendChild(groupLabel);
      const label = document.createElement('label');
      label.className = 'radio';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = \`state-\${index}\`;
      input.value = 'option';
      input.checked = state.checked;
      input.disabled = state.disabled;
      const span = document.createElement('span');
      span.textContent = 'Radio option';
      label.appendChild(input);
      label.appendChild(span);
      group.appendChild(label);
      container.appendChild(group);
    });
    return container;
  }
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,ae;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const container = document.createElement('div');
      container.className = 'radio-group';
      if (args.groupLabel) {
        const label = document.createElement('div');
        label.className = 'radio-group-label';
        label.textContent = args.groupLabel;
        container.appendChild(label);
      }
      args.options.forEach((option: any) => {
        const label = document.createElement('label');
        label.className = \`radio\${args.size === 'sm' ? ' radio-sm' : args.size === 'lg' ? ' radio-lg' : ''}\`;
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = args.name;
        input.value = option.value;
        input.checked = option.value === args.selected;
        input.disabled = args.disabled || option.disabled || false;
        const span = document.createElement('span');
        span.textContent = option.label;
        label.appendChild(input);
        label.appendChild(span);
        container.appendChild(label);
      });
      return container;
    });
  },
  args: {
    name: 'plan',
    groupLabel: 'Select your plan',
    options: [{
      label: 'Free',
      value: 'free'
    }, {
      label: 'Pro',
      value: 'pro'
    }, {
      label: 'Enterprise',
      value: 'enterprise'
    }],
    selected: 'pro',
    disabled: false,
    size: 'md'
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Radio group name'
    },
    groupLabel: {
      control: 'text',
      description: 'Label for the radio group'
    },
    options: {
      control: 'object',
      description: 'Array of radio options'
    },
    selected: {
      control: 'text',
      description: 'Currently selected value'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Radio button size'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all radios'
    }
  }
}`,...(ae=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const re=["Default","Selected","Disabled","Inline","Stacked","WithDescription","Sizes","ButtonStyle","AttachedButtons","CardStyle","AllStates","ThemeComparison"];export{C as AllStates,v as AttachedButtons,h as ButtonStyle,y as CardStyle,d as Default,p as Disabled,u as Inline,c as Selected,g as Sizes,m as Stacked,E as ThemeComparison,b as WithDescription,re as __namedExportsOrder,oe as default};
