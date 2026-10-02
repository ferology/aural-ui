import{c as oe}from"./createThemeGrid-DWAncU4Q.js";const ce={title:"Components/Button",tags:["autodocs"],parameters:{docs:{description:{component:'\n# Button Component\n\nVersatile button component with multiple variants, sizes, and states.\nSee the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).\n\n## Framework Examples\n\n**Vanilla HTML:**\n```html\n<button class="btn btn-primary">Click me</button>\n```\n\n**React:**\n```jsx\n<button className="btn btn-primary">Click me</button>\n```\n\n**Vue:**\n```vue\n<button class="btn btn-primary">Click me</button>\n```\n\n## Theme Variants\n\nThe docs site\'s theme switcher applies decorative reskins on top of `.btn` for the Kinetic (`.btn-kinetic*`, `kinetic-buttons.css`) and Neon (`.btn-neon*`, `deluxe-neon.css`) themes. These are demo-site-only CSS, not separate components and not part of the published npm package. A third reskin, Neon-Refined (`.btn-prismatic*`, `buttons-refined.css`), exists in the repo but currently isn\'t reachable from the live theme switcher.\n        '.trim()}}},argTypes:{label:{control:"text",description:"Button text"},variant:{control:"select",options:["primary","secondary","outline","ghost","danger","success"],description:"Button visual style"},size:{control:"select",options:["sm","md","lg"],description:"Button size"},disabled:{control:"boolean",description:"Disabled state"},loading:{control:"boolean",description:"Loading state with spinner"},icon:{control:"text",description:"Icon (emoji or text)"}}},a={render:e=>{const n=document.createElement("button");if(n.className=`btn btn-${e.variant} btn-${e.size}`,e.disabled&&(n.disabled=!0),e.loading&&(n.classList.add("btn-loading"),n.disabled=!0,n.setAttribute("aria-busy","true")),e.icon&&e.label){const t=document.createElement("span");t.setAttribute("aria-hidden","true"),t.textContent=e.icon,n.appendChild(t),n.appendChild(document.createTextNode(" "+e.label))}else if(e.loading){const t=document.createElement("span");t.className="spinner",t.setAttribute("aria-hidden","true"),n.appendChild(t),n.appendChild(document.createTextNode(" "+e.label))}else n.textContent=e.label;return n},args:{label:"Primary Button",variant:"primary",size:"md",disabled:!1,loading:!1}},s={...a,args:{label:"Secondary Button",variant:"secondary",size:"md"}},o={...a,args:{label:"Outline Button",variant:"outline",size:"md"}},i={...a,args:{label:"Ghost Button",variant:"ghost",size:"md"}},c={...a,args:{label:"Delete",variant:"danger",size:"md",icon:"🗑️"}},l={...a,args:{label:"Save",variant:"success",size:"md",icon:"✓"}},d={...a,args:{label:"Small Button",variant:"primary",size:"sm"}},m={...a,args:{label:"Large Button",variant:"primary",size:"lg"}},u={...a,args:{label:"Disabled Button",variant:"primary",size:"md",disabled:!0}},p={...a,args:{label:"Loading...",variant:"primary",size:"md",loading:!0}},b={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="1rem",e.style.flexWrap="wrap",e.style.padding="2rem",["primary","secondary","outline","ghost","danger","success"].forEach(t=>{const r=document.createElement("button");r.className=`btn btn-${t}`,r.textContent=t.charAt(0).toUpperCase()+t.slice(1),e.appendChild(r)}),e}},g={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="1rem",e.style.alignItems="center",e.style.padding="2rem",["sm","md","lg"].forEach(t=>{const r=document.createElement("button");r.className=`btn btn-primary btn-${t}`,r.textContent=t.toUpperCase(),e.appendChild(r)}),e}},y={render:()=>oe(()=>{const e=document.createElement("button");return e.className="btn btn-primary",e.textContent="Primary Button",e})},h={render:e=>oe(()=>{const n=document.createElement("button");if(n.className=`btn btn-${e.variant} btn-${e.size}`,e.disabled&&(n.disabled=!0),e.loading){n.classList.add("btn-loading"),n.disabled=!0,n.setAttribute("aria-busy","true");const t=document.createElement("span");t.className="spinner",t.setAttribute("aria-hidden","true"),n.appendChild(t),n.appendChild(document.createTextNode(" "+e.label))}else if(e.icon){const t=document.createElement("span");t.setAttribute("aria-hidden","true"),t.textContent=e.icon,n.appendChild(t),n.appendChild(document.createTextNode(" "+e.label))}else n.textContent=e.label;return n}),args:{variant:"primary",label:"Button",size:"md",loading:!1,disabled:!1,icon:""},argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger","success"],description:"Button style variant"},size:{control:"select",options:["sm","md","lg"],description:"Button size"},label:{control:"text",description:"Button text"},loading:{control:"boolean",description:"Loading state with spinner"},disabled:{control:"boolean",description:"Disabled state"},icon:{control:"text",description:"Icon (emoji or text)"}}};var v,x,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,S,z;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md'
  }
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var B,E,A;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...($=(D=c.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var w,k,G;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Save',
    variant: 'success',
    size: 'md',
    icon: '✓'
  }
}`,...(G=(k=l.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var V,I,O;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'sm'
  }
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var j,R,U;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'lg'
  }
}`,...(U=(R=m.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var H,W,_;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true
  }
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var F,K,M;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Primary,
  args: {
    label: 'Loading...',
    variant: 'primary',
    size: 'md',
    loading: true
  }
}`,...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var q,J,Q;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(se=(re=h.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const le=["Primary","Secondary","Outline","Ghost","Danger","Success","Small","Large","Disabled","Loading","AllVariants","AllSizes","AllThemes","ThemeComparison"];export{g as AllSizes,y as AllThemes,b as AllVariants,c as Danger,u as Disabled,i as Ghost,m as Large,p as Loading,o as Outline,a as Primary,s as Secondary,d as Small,l as Success,h as ThemeComparison,le as __namedExportsOrder,ce as default};
