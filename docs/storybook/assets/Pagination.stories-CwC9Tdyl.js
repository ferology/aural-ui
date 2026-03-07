import{c as ie}from"./createThemeGrid-DWAncU4Q.js";const le={title:"Components/Navigation/Pagination",tags:["autodocs"],parameters:{docs:{description:{component:`
# Pagination Component

Navigation controls for browsing through multiple pages of content. Essential for managing large datasets and improving user experience.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<nav class="pagination" aria-label="Pagination">
  <a href="#" class="pagination-prev" aria-label="Go to previous page">
    <i data-lucide="chevron-left"></i>
    Previous
  </a>
  <a href="#" class="pagination-item" aria-label="Go to page 1">1</a>
  <a href="#" class="pagination-item pagination-active" aria-current="page">2</a>
  <a href="#" class="pagination-item" aria-label="Go to page 3">3</a>
  <a href="#" class="pagination-next" aria-label="Go to next page">
    Next
    <i data-lucide="chevron-right"></i>
  </a>
</nav>
\`\`\`

**React:**
\`\`\`jsx
const [page, setPage] = useState(1);
<Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
\`\`\`

**Vue:**
\`\`\`vue
<Pagination :currentPage="page" :totalPages="10" @pageChange="page = $event" />
\`\`\`
        `.trim()}}},argTypes:{currentPage:{control:{type:"number",min:1,max:100},description:"Current active page number"},totalPages:{control:{type:"number",min:1,max:100},description:"Total number of pages"},siblingCount:{control:{type:"number",min:0,max:3},description:"Number of page buttons to show before and after current page"},size:{control:"select",options:["sm","md","lg"],description:"Pagination size variant"},variant:{control:"select",options:["default","rounded","simple","compact"],description:"Pagination visual style"},showFirstLast:{control:"boolean",description:"Always show first and last page numbers with ellipsis"},showPrevNext:{control:"boolean",description:"Show Previous/Next buttons"},showPrevNextText:{control:"boolean",description:'Show "Previous"/"Next" text in buttons (or just icons)'}}};function oe(n,e,a=1,i=!0){const t=[];if(e<=7){for(let r=1;r<=e;r++)t.push(r);return t}if(i){t.push(1);const r=Math.max(n-a,2),u=Math.min(n+a,e-1),g=r>2,m=u<e-1;g&&t.push("...");for(let l=r;l<=u;l++)t.push(l);m&&t.push("..."),t.push(e)}else{const r=Math.max(1,n-a),u=Math.min(e,n+a);for(let g=r;g<=u;g++)t.push(g)}return t}function c(n){const{currentPage:e=1,totalPages:a=10,siblingCount:i=1,size:t="md",variant:r="default",showFirstLast:u=!0,showPrevNext:g=!0,showPrevNextText:m=!0,onPageChange:l}=n,d=document.createElement("nav");if(d.className="pagination",d.setAttribute("aria-label","Pagination"),r!=="default"&&d.classList.add(`pagination-${r}`),t!=="md"&&d.classList.add(`pagination-${t}`),g){const o=document.createElement("a");o.href="#",o.className="pagination-prev",o.setAttribute("aria-label",e===1?"No previous page":"Go to previous page"),e===1&&(o.classList.add("pagination-disabled"),o.setAttribute("aria-disabled","true"));const s=document.createElement("i");s.setAttribute("data-lucide","chevron-left"),s.setAttribute("aria-hidden","true"),o.appendChild(s),m&&o.appendChild(document.createTextNode(" Previous")),o.addEventListener("click",p=>{p.preventDefault(),e>1&&l&&l(e-1)}),d.appendChild(o)}if(oe(e,a,i,u).forEach(o=>{if(o==="..."){const s=document.createElement("span");s.className="pagination-ellipsis",s.textContent="...",s.setAttribute("aria-hidden","true"),d.appendChild(s)}else{const s=document.createElement("a");s.href="#",s.className="pagination-item",s.textContent=String(o),o===e?(s.classList.add("pagination-active"),s.setAttribute("aria-current","page"),s.setAttribute("aria-label",`Current page, page ${o}`)):s.setAttribute("aria-label",`Go to page ${o}`),s.addEventListener("click",p=>{p.preventDefault(),o!==e&&l&&l(o)}),d.appendChild(s)}}),g){const o=document.createElement("a");o.href="#",o.className="pagination-next",o.setAttribute("aria-label",e===a?"No next page":"Go to next page"),e===a&&(o.classList.add("pagination-disabled"),o.setAttribute("aria-disabled","true")),m&&o.appendChild(document.createTextNode("Next "));const s=document.createElement("i");s.setAttribute("data-lucide","chevron-right"),s.setAttribute("aria-hidden","true"),o.appendChild(s),o.addEventListener("click",p=>{p.preventDefault(),e<a&&l&&l(e+1)}),d.appendChild(o)}return setTimeout(()=>{window.lucide&&window.lucide.createIcons()},0),d}const h={render:n=>{const e=document.createElement("div");e.style.padding="2rem";const a=c({...n,onPageChange:i=>{n.currentPage=i;const t=c({...n,onPageChange:r=>n.currentPage=r});e.replaceChild(t,e.firstChild)}});return e.appendChild(a),e},args:{currentPage:2,totalPages:10,siblingCount:1,size:"md",variant:"default",showFirstLast:!0,showPrevNext:!0,showPrevNextText:!0}},P={render:n=>{const e=document.createElement("div");e.style.padding="2rem";const a=c({...n,onPageChange:i=>{n.currentPage=i;const t=c({...n,onPageChange:r=>n.currentPage=r});e.replaceChild(t,e.firstChild)}});return e.appendChild(a),e},args:{currentPage:5,totalPages:20,siblingCount:1,size:"md",variant:"default",showFirstLast:!0,showPrevNext:!0,showPrevNextText:!0}},v={render:n=>{const e=document.createElement("div");e.style.padding="2rem";const a=c({...n,onPageChange:i=>{n.currentPage=i;const t=c({...n,onPageChange:r=>n.currentPage=r});e.replaceChild(t,e.firstChild)}});return e.appendChild(a),e},args:{currentPage:3,totalPages:10,siblingCount:1,size:"md",variant:"compact",showFirstLast:!0,showPrevNext:!0,showPrevNextText:!1}},w={render:n=>{const e=document.createElement("div");e.style.padding="2rem";const a=c({...n,onPageChange:i=>{n.currentPage=i;const t=c({...n,onPageChange:r=>n.currentPage=r});e.replaceChild(t,e.firstChild)}});return e.appendChild(a),e},args:{currentPage:50,totalPages:100,siblingCount:1,size:"md",variant:"default",showFirstLast:!0,showPrevNext:!0,showPrevNextText:!0}},x={render:n=>{const e=document.createElement("div");e.style.padding="2rem";const a=c({...n,onPageChange:i=>{n.currentPage=i;const t=c({...n,onPageChange:r=>n.currentPage=r});e.replaceChild(t,e.firstChild)}});return e.appendChild(a),e},args:{currentPage:2,totalPages:10,siblingCount:1,size:"sm",variant:"default",showFirstLast:!0,showPrevNext:!0,showPrevNextText:!1}},C={render:n=>{const e=document.createElement("div");e.style.padding="2rem";const a=c({...n,onPageChange:i=>{n.currentPage=i;const t=c({...n,onPageChange:r=>n.currentPage=r});e.replaceChild(t,e.firstChild)}});return e.appendChild(a),e},args:{currentPage:3,totalPages:10,siblingCount:1,size:"lg",variant:"default",showFirstLast:!0,showPrevNext:!0,showPrevNextText:!0}},f={render:n=>{const e=document.createElement("div");e.style.padding="2rem";const a=c({...n,onPageChange:i=>{n.currentPage=i;const t=c({...n,onPageChange:r=>n.currentPage=r});e.replaceChild(t,e.firstChild)}});return e.appendChild(a),e},args:{currentPage:1,totalPages:10,siblingCount:1,size:"md",variant:"default",showFirstLast:!0,showPrevNext:!0,showPrevNextText:!0}},b={render:n=>{const e=document.createElement("div");e.style.padding="2rem";const a=c({...n,onPageChange:i=>{n.currentPage=i;const t=c({...n,onPageChange:r=>n.currentPage=r});e.replaceChild(t,e.firstChild)}});return e.appendChild(a),e},args:{currentPage:10,totalPages:10,siblingCount:1,size:"md",variant:"default",showFirstLast:!0,showPrevNext:!0,showPrevNextText:!0}},N={render:()=>{const n=document.createElement("div");return n.style.cssText="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;",[{id:"default",label:"Default"},{id:"rounded",label:"Rounded"},{id:"simple",label:"Simple"},{id:"compact",label:"Compact"}].forEach(a=>{const i=document.createElement("div"),t=document.createElement("p");t.textContent=a.label,t.style.cssText="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; margin-bottom: 1rem;";const r=c({currentPage:2,totalPages:5,siblingCount:1,size:"md",variant:a.id,showFirstLast:!1,showPrevNext:!0,showPrevNextText:a.id!=="compact"});i.appendChild(t),i.appendChild(r),n.appendChild(i)}),n}},y={render:()=>{const n=document.createElement("div");return n.style.cssText="display: flex; flex-direction: column; gap: 2rem; padding: 2rem; align-items: flex-start;",[{id:"sm",label:"Small"},{id:"md",label:"Medium"},{id:"lg",label:"Large"}].forEach(a=>{const i=document.createElement("div"),t=document.createElement("p");t.textContent=a.label,t.style.cssText="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; margin-bottom: 1rem;";const r=c({currentPage:2,totalPages:5,siblingCount:1,size:a.id,variant:"default",showFirstLast:!1,showPrevNext:!0,showPrevNextText:a.id!=="sm"});i.appendChild(t),i.appendChild(r),n.appendChild(i)}),n}},T={render:n=>ie(()=>c(n)),args:{currentPage:2,totalPages:10,siblingCount:1,size:"md",variant:"default",showFirstLast:!0,showPrevNext:!0,showPrevNextText:!0},argTypes:{variant:{control:"select",options:["default","rounded","simple","compact"],description:"Pagination style variant"},size:{control:"select",options:["sm","md","lg"],description:"Pagination size"},currentPage:{control:{type:"number",min:1,max:10},description:"Current page number"},totalPages:{control:{type:"number",min:1,max:100},description:"Total number of pages"},siblingCount:{control:{type:"number",min:0,max:3},description:"Pages shown around current"},showFirstLast:{control:"boolean",description:"Show first/last with ellipsis"},showPrevNext:{control:"boolean",description:"Show prev/next buttons"},showPrevNextText:{control:"boolean",description:"Show text in prev/next"}}};var L,E,z;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
    });
    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 2,
    totalPages: 10,
    siblingCount: 1,
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true
  }
}`,...(z=(E=h.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var S,F,A;P.parameters={...P.parameters,docs:{...(S=P.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
    });
    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 5,
    totalPages: 20,
    siblingCount: 1,
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true
  }
}`,...(A=(F=P.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var D,G,M;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
    });
    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 3,
    totalPages: 10,
    siblingCount: 1,
    size: 'md',
    variant: 'compact',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: false
  }
}`,...(M=(G=v.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var R,V,k;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
    });
    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 50,
    totalPages: 100,
    siblingCount: 1,
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true
  }
}`,...(k=(V=w.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var B,$,I;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
    });
    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 2,
    totalPages: 10,
    siblingCount: 1,
    size: 'sm',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: false
  }
}`,...(I=($=x.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var j,W,_;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
    });
    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 3,
    totalPages: 10,
    siblingCount: 1,
    size: 'lg',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true
  }
}`,...(_=(W=C.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var H,O,q;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
    });
    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    siblingCount: 1,
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true
  }
}`,...(q=(O=f.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
    });
    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 10,
    totalPages: 10,
    siblingCount: 1,
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 2rem; padding: 2rem;';
    const variants = [{
      id: 'default',
      label: 'Default'
    }, {
      id: 'rounded',
      label: 'Rounded'
    }, {
      id: 'simple',
      label: 'Simple'
    }, {
      id: 'compact',
      label: 'Compact'
    }];
    variants.forEach(variant => {
      const section = document.createElement('div');
      const label = document.createElement('p');
      label.textContent = variant.label;
      label.style.cssText = 'font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; margin-bottom: 1rem;';
      const pagination = renderPagination({
        currentPage: 2,
        totalPages: 5,
        siblingCount: 1,
        size: 'md',
        variant: variant.id,
        showFirstLast: false,
        showPrevNext: true,
        showPrevNextText: variant.id !== 'compact'
      });
      section.appendChild(label);
      section.appendChild(pagination);
      container.appendChild(section);
    });
    return container;
  }
}`,...(Y=(X=N.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 2rem; padding: 2rem; align-items: flex-start;';
    const sizes = [{
      id: 'sm',
      label: 'Small'
    }, {
      id: 'md',
      label: 'Medium'
    }, {
      id: 'lg',
      label: 'Large'
    }];
    sizes.forEach(size => {
      const section = document.createElement('div');
      const label = document.createElement('p');
      label.textContent = size.label;
      label.style.cssText = 'font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; margin-bottom: 1rem;';
      const pagination = renderPagination({
        currentPage: 2,
        totalPages: 5,
        siblingCount: 1,
        size: size.id,
        variant: 'default',
        showFirstLast: false,
        showPrevNext: true,
        showPrevNextText: size.id !== 'sm'
      });
      section.appendChild(label);
      section.appendChild(pagination);
      container.appendChild(section);
    });
    return container;
  }
}`,...(ne=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,re;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      return renderPagination(args);
    });
  },
  args: {
    currentPage: 2,
    totalPages: 10,
    siblingCount: 1,
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'rounded', 'simple', 'compact'],
      description: 'Pagination style variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Pagination size'
    },
    currentPage: {
      control: {
        type: 'number',
        min: 1,
        max: 10
      },
      description: 'Current page number'
    },
    totalPages: {
      control: {
        type: 'number',
        min: 1,
        max: 100
      },
      description: 'Total number of pages'
    },
    siblingCount: {
      control: {
        type: 'number',
        min: 0,
        max: 3
      },
      description: 'Pages shown around current'
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first/last with ellipsis'
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show prev/next buttons'
    },
    showPrevNextText: {
      control: 'boolean',
      description: 'Show text in prev/next'
    }
  }
}`,...(re=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const de=["Default","WithFirstLast","CompactView","LargeDataset","Small","Large","FirstPage","LastPage","AllVariants","AllSizes","ThemeComparison"];export{y as AllSizes,N as AllVariants,v as CompactView,h as Default,f as FirstPage,C as Large,w as LargeDataset,b as LastPage,x as Small,T as ThemeComparison,P as WithFirstLast,de as __namedExportsOrder,le as default};
