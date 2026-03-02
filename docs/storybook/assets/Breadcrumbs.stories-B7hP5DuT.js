import{c as ve}from"./createThemeGrid-DWAncU4Q.js";const Se={title:"Components/Navigation/Breadcrumbs",tags:["autodocs"],parameters:{docs:{description:{component:`
# Breadcrumbs Component

Navigation trail showing the current page's location within the site hierarchy, helping users understand where they are and navigate back through parent pages.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li aria-current="page">Details</li>
  </ol>
</nav>
\`\`\`

**React:**
\`\`\`jsx
<nav className="breadcrumb" aria-label="Breadcrumb">
  <ol>
    {items.map((item, index) => (
      <li key={index}>
        {item.href ? (
          <a href={item.href}>{item.label}</a>
        ) : (
          <span aria-current="page">{item.label}</span>
        )}
      </li>
    ))}
  </ol>
</nav>
\`\`\`

**Vue:**
\`\`\`vue
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li v-for="(item, index) in items" :key="index">
      <a v-if="item.href" :href="item.href">{{ item.label }}</a>
      <span v-else aria-current="page">{{ item.label }}</span>
    </li>
  </ol>
</nav>
\`\`\`
        `.trim()}}},argTypes:{items:{control:"object",description:"Array of breadcrumb items with label and optional href"},separator:{control:"select",options:["slash","chevron","arrow","dash","dot"],description:"Visual separator between breadcrumb items"},size:{control:"select",options:["sm","md","lg"],description:"Breadcrumb size"},withIcons:{control:"boolean",description:"Display icons alongside labels"},withBackground:{control:"boolean",description:"Display with background container"},maxItems:{control:"number",description:"Maximum items to show before collapsing (optional)"}}};function r(e){const a=document.createElement("nav");a.className="breadcrumb",a.setAttribute("aria-label","Breadcrumb"),e.separator!=="slash"&&a.classList.add(`breadcrumb-${e.separator}`),e.size!=="md"&&a.classList.add(`breadcrumb-${e.size}`),e.withIcons&&a.classList.add("breadcrumb-with-icons"),e.withBackground&&a.classList.add("breadcrumb-bg"),e.maxItems&&e.items.length>e.maxItems&&a.classList.add("breadcrumb-collapsed");const l=document.createElement("ol");return e.items.forEach((o,s)=>{const n=document.createElement("li");if(s===e.items.length-1){if(n.setAttribute("aria-current","page"),e.withIcons){const t=document.createElement("i");t.setAttribute("data-lucide","file-text"),t.className="breadcrumb-icon",t.setAttribute("aria-hidden","true"),n.appendChild(t)}n.appendChild(document.createTextNode(o.label))}else{const t=document.createElement("a");if(t.href=o.href||"#",e.withIcons){const i=document.createElement("i");i.setAttribute("data-lucide",s===0?"home":"folder"),i.className="breadcrumb-icon",i.setAttribute("aria-hidden","true"),t.appendChild(i)}t.appendChild(document.createTextNode(o.label)),n.appendChild(t)}l.appendChild(n)}),a.appendChild(l),e.withIcons&&setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},0),a}const d={render:r,args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptop"}],separator:"slash",size:"md",withIcons:!1,withBackground:!1}},m={render:r,args:{items:[{label:"Home",href:"/"},{label:"About"}],separator:"slash",size:"md",withIcons:!1,withBackground:!1}},p={render:r,args:{items:[{label:"Home",href:"/"},{label:"Documentation",href:"/docs"},{label:"Components",href:"/docs/components"},{label:"Navigation",href:"/docs/components/navigation"},{label:"Breadcrumbs"}],separator:"chevron",size:"md",withIcons:!1,withBackground:!0}},h={render:r,args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Computers",href:"/products/electronics/computers"},{label:"Laptops",href:"/products/electronics/computers/laptops"},{label:"Gaming Laptops",href:"/products/electronics/computers/laptops/gaming"},{label:"High Performance Model"}],separator:"slash",size:"md",withIcons:!1,withBackground:!1,maxItems:4}},u={render:r,args:{items:[{label:"Home",href:"/"},{label:"Documents",href:"/documents"},{label:"Projects",href:"/documents/projects"},{label:"Report.pdf"}],separator:"slash",size:"md",withIcons:!0,withBackground:!1}},b={render:r,args:{items:[{label:"Dashboard",href:"/dashboard"},{label:"Settings",href:"/dashboard/settings"},{label:"Profile"}],separator:"chevron",size:"md",withIcons:!1,withBackground:!0}},f={render:r,args:{items:[{label:"Home",href:"/"},{label:"Categories",href:"/categories"},{label:"Fashion",href:"/categories/fashion"},{label:"Shoes"}],separator:"chevron",size:"md",withIcons:!1,withBackground:!1}},g={render:r,args:{items:[{label:"Drive",href:"/drive"},{label:"Projects",href:"/drive/projects"},{label:"Website",href:"/drive/projects/website"},{label:"index.html"}],separator:"arrow",size:"md",withIcons:!0,withBackground:!1}},w={render:r,args:{items:[{label:"Store",href:"/"},{label:"Electronics",href:"/electronics"},{label:"Audio",href:"/electronics/audio"},{label:"Headphones"}],separator:"dash",size:"md",withIcons:!1,withBackground:!1}},B={render:r,args:{items:[{label:"Blog",href:"/blog"},{label:"Technology",href:"/blog/technology"},{label:"Web Development",href:"/blog/technology/web"},{label:"CSS Tips"}],separator:"dot",size:"md",withIcons:!1,withBackground:!1}},v={render:r,args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details"}],separator:"slash",size:"sm",withIcons:!1,withBackground:!1}},z={render:r,args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details"}],separator:"slash",size:"lg",withIcons:!1,withBackground:!1}},S={render:r,args:{items:[{label:"Home",href:"/"},{label:"Shop",href:"/shop"},{label:"Men",href:"/shop/men"},{label:"Shoes",href:"/shop/men/shoes"},{label:"Running Shoes"}],separator:"chevron",size:"md",withIcons:!1,withBackground:!1}},y={render:()=>{const e=document.createElement("div");return e.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
    `,[{type:"slash",label:"Slash (Default)"},{type:"chevron",label:"Chevron"},{type:"arrow",label:"Arrow"},{type:"dash",label:"Dash"},{type:"dot",label:"Dot"}].forEach(({type:l,label:o})=>{const s=document.createElement("div"),n=document.createElement("div");n.textContent=o,n.style.cssText=`
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.7;
        margin-bottom: 0.5rem;
      `;const c=r({items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details"}],separator:l,size:"md",withIcons:!1,withBackground:!1});s.appendChild(n),s.appendChild(c),e.appendChild(s)}),e}},k={render:()=>{const e=document.createElement("div");return e.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
    `,[{size:"sm",label:"Small"},{size:"md",label:"Medium (Default)"},{size:"lg",label:"Large"}].forEach(({size:l,label:o})=>{const s=document.createElement("div"),n=document.createElement("div");n.textContent=o,n.style.cssText=`
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.7;
        margin-bottom: 0.5rem;
      `;const c=r({items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details"}],separator:"slash",size:l,withIcons:!1,withBackground:!1});s.appendChild(n),s.appendChild(c),e.appendChild(s)}),e}},I={render:e=>ve(()=>r(e)),args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptop"}],separator:"chevron",size:"md",withIcons:!1,withBackground:!1},argTypes:{items:{control:"object",description:"Array of breadcrumb items"},separator:{control:"select",options:["slash","chevron","arrow","dash","dot"],description:"Separator style"},size:{control:"select",options:["sm","md","lg"],description:"Breadcrumb size"},withIcons:{control:"boolean",description:"Show icons"},withBackground:{control:"boolean",description:"Show background"}}};var x,C,D;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Electronics',
      href: '/products/electronics'
    }, {
      label: 'Laptop'
    }],
    separator: 'slash',
    size: 'md',
    withIcons: false,
    withBackground: false
  }
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var E,H,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'About'
    }],
    separator: 'slash',
    size: 'md',
    withIcons: false,
    withBackground: false
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var A,P,T;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Documentation',
      href: '/docs'
    }, {
      label: 'Components',
      href: '/docs/components'
    }, {
      label: 'Navigation',
      href: '/docs/components/navigation'
    }, {
      label: 'Breadcrumbs'
    }],
    separator: 'chevron',
    size: 'md',
    withIcons: false,
    withBackground: true
  }
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var j,M,N;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Electronics',
      href: '/products/electronics'
    }, {
      label: 'Computers',
      href: '/products/electronics/computers'
    }, {
      label: 'Laptops',
      href: '/products/electronics/computers/laptops'
    }, {
      label: 'Gaming Laptops',
      href: '/products/electronics/computers/laptops/gaming'
    }, {
      label: 'High Performance Model'
    }],
    separator: 'slash',
    size: 'md',
    withIcons: false,
    withBackground: false,
    maxItems: 4
  }
}`,...(N=(M=h.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var W,R,F;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Documents',
      href: '/documents'
    }, {
      label: 'Projects',
      href: '/documents/projects'
    }, {
      label: 'Report.pdf'
    }],
    separator: 'slash',
    size: 'md',
    withIcons: true,
    withBackground: false
  }
}`,...(F=(R=u.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var G,V,_;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Dashboard',
      href: '/dashboard'
    }, {
      label: 'Settings',
      href: '/dashboard/settings'
    }, {
      label: 'Profile'
    }],
    separator: 'chevron',
    size: 'md',
    withIcons: false,
    withBackground: true
  }
}`,...(_=(V=b.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var $,O,q;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Categories',
      href: '/categories'
    }, {
      label: 'Fashion',
      href: '/categories/fashion'
    }, {
      label: 'Shoes'
    }],
    separator: 'chevron',
    size: 'md',
    withIcons: false,
    withBackground: false
  }
}`,...(q=(O=f.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Drive',
      href: '/drive'
    }, {
      label: 'Projects',
      href: '/drive/projects'
    }, {
      label: 'Website',
      href: '/drive/projects/website'
    }, {
      label: 'index.html'
    }],
    separator: 'arrow',
    size: 'md',
    withIcons: true,
    withBackground: false
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Store',
      href: '/'
    }, {
      label: 'Electronics',
      href: '/electronics'
    }, {
      label: 'Audio',
      href: '/electronics/audio'
    }, {
      label: 'Headphones'
    }],
    separator: 'dash',
    size: 'md',
    withIcons: false,
    withBackground: false
  }
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Blog',
      href: '/blog'
    }, {
      label: 'Technology',
      href: '/blog/technology'
    }, {
      label: 'Web Development',
      href: '/blog/technology/web'
    }, {
      label: 'CSS Tips'
    }],
    separator: 'dot',
    size: 'md',
    withIcons: false,
    withBackground: false
  }
}`,...(re=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,ae,se;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Details'
    }],
    separator: 'slash',
    size: 'sm',
    withIcons: false,
    withBackground: false
  }
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,oe,le;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Details'
    }],
    separator: 'slash',
    size: 'lg',
    withIcons: false,
    withBackground: false
  }
}`,...(le=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,ie,de;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: renderBreadcrumb,
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Shop',
      href: '/shop'
    }, {
      label: 'Men',
      href: '/shop/men'
    }, {
      label: 'Shoes',
      href: '/shop/men/shoes'
    }, {
      label: 'Running Shoes'
    }],
    separator: 'chevron',
    size: 'md',
    withIcons: false,
    withBackground: false
  }
}`,...(de=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,pe,he;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
    \`;
    const separators: Array<{
      type: BreadcrumbArgs['separator'];
      label: string;
    }> = [{
      type: 'slash',
      label: 'Slash (Default)'
    }, {
      type: 'chevron',
      label: 'Chevron'
    }, {
      type: 'arrow',
      label: 'Arrow'
    }, {
      type: 'dash',
      label: 'Dash'
    }, {
      type: 'dot',
      label: 'Dot'
    }];
    separators.forEach(({
      type,
      label
    }) => {
      const section = document.createElement('div');
      const heading = document.createElement('div');
      heading.textContent = label;
      heading.style.cssText = \`
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.7;
        margin-bottom: 0.5rem;
      \`;
      const breadcrumb = renderBreadcrumb({
        items: [{
          label: 'Home',
          href: '/'
        }, {
          label: 'Products',
          href: '/products'
        }, {
          label: 'Details'
        }],
        separator: type,
        size: 'md',
        withIcons: false,
        withBackground: false
      });
      section.appendChild(heading);
      section.appendChild(breadcrumb);
      container.appendChild(section);
    });
    return container;
  }
}`,...(he=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ue,be,fe;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
    \`;
    const sizes: Array<{
      size: BreadcrumbArgs['size'];
      label: string;
    }> = [{
      size: 'sm',
      label: 'Small'
    }, {
      size: 'md',
      label: 'Medium (Default)'
    }, {
      size: 'lg',
      label: 'Large'
    }];
    sizes.forEach(({
      size,
      label
    }) => {
      const section = document.createElement('div');
      const heading = document.createElement('div');
      heading.textContent = label;
      heading.style.cssText = \`
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.7;
        margin-bottom: 0.5rem;
      \`;
      const breadcrumb = renderBreadcrumb({
        items: [{
          label: 'Home',
          href: '/'
        }, {
          label: 'Products',
          href: '/products'
        }, {
          label: 'Details'
        }],
        separator: 'slash',
        size,
        withIcons: false,
        withBackground: false
      });
      section.appendChild(heading);
      section.appendChild(breadcrumb);
      container.appendChild(section);
    });
    return container;
  }
}`,...(fe=(be=k.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ge,we,Be;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      return renderBreadcrumb(args);
    });
  },
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Electronics',
      href: '/products/electronics'
    }, {
      label: 'Laptop'
    }],
    separator: 'chevron',
    size: 'md',
    withIcons: false,
    withBackground: false
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items'
    },
    separator: {
      control: 'select',
      options: ['slash', 'chevron', 'arrow', 'dash', 'dot'],
      description: 'Separator style'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Breadcrumb size'
    },
    withIcons: {
      control: 'boolean',
      description: 'Show icons'
    },
    withBackground: {
      control: 'boolean',
      description: 'Show background'
    }
  }
}`,...(Be=(we=I.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};const ye=["Default","TwoLevels","FourLevels","ManyLevels","WithIcons","WithBackground","ChevronSeparator","ArrowSeparator","DashSeparator","DotSeparator","SmallSize","LargeSize","CurrentPageHighlighted","AllSeparators","AllSizes","ThemeComparison"];export{y as AllSeparators,k as AllSizes,g as ArrowSeparator,f as ChevronSeparator,S as CurrentPageHighlighted,w as DashSeparator,d as Default,B as DotSeparator,p as FourLevels,z as LargeSize,h as ManyLevels,v as SmallSize,I as ThemeComparison,m as TwoLevels,b as WithBackground,u as WithIcons,ye as __namedExportsOrder,Se as default};
