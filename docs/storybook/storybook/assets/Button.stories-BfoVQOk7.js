import{c as oe}from"./createThemeGrid-DWAncU4Q.js";const ce={title:"Components/Button",tags:["autodocs"],parameters:{docs:{description:{component:`
# Button Component

Versatile button component with multiple variants, sizes, and states.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<button class="btn btn-primary">Click me</button>
\`\`\`

**React:**
\`\`\`jsx
<button className="btn btn-primary">Click me</button>
\`\`\`

**Vue:**
\`\`\`vue
<button class="btn btn-primary">Click me</button>
\`\`\`
        `.trim()}}},argTypes:{label:{control:"text",description:"Button text"},variant:{control:"select",options:["primary","secondary","outline","ghost","danger","success"],description:"Button visual style"},size:{control:"select",options:["sm","md","lg"],description:"Button size"},disabled:{control:"boolean",description:"Disabled state"},loading:{control:"boolean",description:"Loading state with spinner"},icon:{control:"text",description:"Icon (emoji or text)"}}},a={render:e=>{const n=document.createElement("button");if(n.className=`btn btn-${e.variant} btn-${e.size}`,e.disabled&&(n.disabled=!0),e.loading&&(n.classList.add("btn-loading"),n.disabled=!0,n.setAttribute("aria-busy","true")),e.icon&&e.label){const t=document.createElement("span");t.setAttribute("aria-hidden","true"),t.textContent=e.icon,n.appendChild(t),n.appendChild(document.createTextNode(" "+e.label))}else if(e.loading){const t=document.createElement("span");t.className="spinner",t.setAttribute("aria-hidden","true"),n.appendChild(t),n.appendChild(document.createTextNode(" "+e.label))}else n.textContent=e.label;return n},args:{label:"Primary Button",variant:"primary",size:"md",disabled:!1,loading:!1}},s={...a,args:{label:"Secondary Button",variant:"secondary",size:"md"}},o={...a,args:{label:"Outline Button",variant:"outline",size:"md"}},i={...a,args:{label:"Ghost Button",variant:"ghost",size:"md"}},c={...a,args:{label:"Delete",variant:"danger",size:"md",icon:"🗑️"}},l={...a,args:{label:"Save",variant:"success",size:"md",icon:"✓"}},d={...a,args:{label:"Small Button",variant:"primary",size:"sm"}},u={...a,args:{label:"Large Button",variant:"primary",size:"lg"}},m={...a,args:{label:"Disabled Button",variant:"primary",size:"md",disabled:!0}},p={...a,args:{label:"Loading...",variant:"primary",size:"md",loading:!0}},b={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="1rem",e.style.flexWrap="wrap",e.style.padding="2rem",["primary","secondary","outline","ghost","danger","success"].forEach(t=>{const r=document.createElement("button");r.className=`btn btn-${t}`,r.textContent=t.charAt(0).toUpperCase()+t.slice(1),e.appendChild(r)}),e}},g={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="1rem",e.style.alignItems="center",e.style.padding="2rem",["sm","md","lg"].forEach(t=>{const r=document.createElement("button");r.className=`btn btn-primary btn-${t}`,r.textContent=t.toUpperCase(),e.appendChild(r)}),e}},y={render:()=>oe(()=>{const e=document.createElement("button");return e.className="btn btn-primary",e.textContent="Primary Button",e})},h={render:e=>oe(()=>{const n=document.createElement("button");if(n.className=`btn btn-${e.variant} btn-${e.size}`,e.disabled&&(n.disabled=!0),e.loading){n.classList.add("btn-loading"),n.disabled=!0,n.setAttribute("aria-busy","true");const t=document.createElement("span");t.className="spinner",t.setAttribute("aria-hidden","true"),n.appendChild(t),n.appendChild(document.createTextNode(" "+e.label))}else if(e.icon){const t=document.createElement("span");t.setAttribute("aria-hidden","true"),t.textContent=e.icon,n.appendChild(t),n.appendChild(document.createTextNode(" "+e.label))}else n.textContent=e.label;return n}),args:{variant:"primary",label:"Button",size:"md",loading:!1,disabled:!1,icon:""},argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger","success"],description:"Button style variant"},size:{control:"select",options:["sm","md","lg"],description:"Button size"},label:{control:"text",description:"Button text"},loading:{control:"boolean",description:"Loading state with spinner"},disabled:{control:"boolean",description:"Disabled state"},icon:{control:"text",description:"Icon (emoji or text)"}}};var v,x,C;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const button = document.createElement('button');
    button.className = \`btn btn-\${args.variant} btn-\${args.size}\`;
    if (args.disabled) {
      button.disabled = true;
    }

    // ✅ Add proper ARIA attributes for loading state
    if (args.loading) {
      button.classList.add('btn-loading');
      button.disabled = true;
      button.setAttribute('aria-busy', 'true'); // ✅ Announce loading state
    }
    if (args.icon && args.label) {
      // ✅ Hide decorative icon from screen readers
      const iconSpan = document.createElement('span');
      iconSpan.setAttribute('aria-hidden', 'true');
      iconSpan.textContent = args.icon;
      button.appendChild(iconSpan);
      button.appendChild(document.createTextNode(' ' + args.label));
    } else if (args.loading) {
      // ✅ Loading state with hidden spinner
      const spinner = document.createElement('span');
      spinner.className = 'spinner';
      spinner.setAttribute('aria-hidden', 'true'); // ✅ Hide spinner from screen readers
      button.appendChild(spinner);
      button.appendChild(document.createTextNode(' ' + args.label));
    } else {
      button.textContent = args.label;
    }
    return button;
  },
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var z,f,S;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md'
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var B,E,A;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Outline Button',
    variant: 'outline',
    size: 'md'
  }
}`,...(A=(E=o.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var N,T,L;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
    size: 'md'
  }
}`,...(L=(T=i.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var P,D,$;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Delete',
    variant: 'danger',
    size: 'md',
    icon: '🗑️'
  }
}`,...($=(D=c.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var w,G,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Save',
    variant: 'success',
    size: 'md',
    icon: '✓'
  }
}`,...(I=(G=l.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var V,k,O;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'sm'
  }
}`,...(O=(k=d.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var j,U,H;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'lg'
  }
}`,...(H=(U=u.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var R,W,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true
  }
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var F,M,q;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Loading...',
    variant: 'primary',
    size: 'md',
    loading: true
  }
}`,...(q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';
    container.style.padding = '2rem';
    const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'];
    variants.forEach(variant => {
      const button = document.createElement('button');
      button.className = \`btn btn-\${variant}\`;
      button.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      container.appendChild(button);
    });
    return container;
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.alignItems = 'center';
    container.style.padding = '2rem';
    const sizes = ['sm', 'md', 'lg'];
    sizes.forEach(size => {
      const button = document.createElement('button');
      button.className = \`btn btn-primary btn-\${size}\`;
      button.textContent = size.toUpperCase();
      container.appendChild(button);
    });
    return container;
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    return createThemeGrid(() => {
      const button = document.createElement('button');
      button.className = 'btn btn-primary';
      button.textContent = 'Primary Button';
      return button;
    });
  }
}`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,re,se;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const button = document.createElement('button');
      button.className = \`btn btn-\${args.variant} btn-\${args.size}\`;
      if (args.disabled) {
        button.disabled = true;
      }
      if (args.loading) {
        button.classList.add('btn-loading');
        button.disabled = true;
        button.setAttribute('aria-busy', 'true');
        const spinner = document.createElement('span');
        spinner.className = 'spinner';
        spinner.setAttribute('aria-hidden', 'true');
        button.appendChild(spinner);
        button.appendChild(document.createTextNode(' ' + args.label));
      } else if (args.icon) {
        const iconSpan = document.createElement('span');
        iconSpan.setAttribute('aria-hidden', 'true');
        iconSpan.textContent = args.icon;
        button.appendChild(iconSpan);
        button.appendChild(document.createTextNode(' ' + args.label));
      } else {
        button.textContent = args.label;
      }
      return button;
    });
  },
  args: {
    variant: 'primary',
    label: 'Button',
    size: 'md',
    loading: false,
    disabled: false,
    icon: ''
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'],
      description: 'Button style variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size'
    },
    label: {
      control: 'text',
      description: 'Button text'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    icon: {
      control: 'text',
      description: 'Icon (emoji or text)'
    }
  }
}`,...(se=(re=h.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const le=["Primary","Secondary","Outline","Ghost","Danger","Success","Small","Large","Disabled","Loading","AllVariants","AllSizes","AllThemes","ThemeComparison"];export{g as AllSizes,y as AllThemes,b as AllVariants,c as Danger,m as Disabled,i as Ghost,u as Large,p as Loading,o as Outline,a as Primary,s as Secondary,d as Small,l as Success,h as ThemeComparison,le as __namedExportsOrder,ce as default};
