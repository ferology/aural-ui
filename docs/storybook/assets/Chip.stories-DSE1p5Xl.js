import{c as ke}from"./createThemeGrid-DWAncU4Q.js";const Be={title:"Components/Data Display/Chip",tags:["autodocs"],parameters:{docs:{description:{component:`
# Chip Component

Compact elements for tags, filters, and selections. Also known as tags or pills.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Key Features

- Multiple color variants (default, primary, success, warning, error, info)
- 4 sizes (small, medium, large, extra large)
- Removable with close button
- Optional Lucide icons
- Standalone or input mode
- Full keyboard accessibility
- WCAG AAA compliant

## Component Structure

\`\`\`html
<!-- Basic Chip -->
<div class="aural-chip aural-chip--standalone">
  <span class="aural-chip__text">Design</span>
</div>

<!-- Chip with Remove Button -->
<div class="aural-chip aural-chip--standalone">
  <span class="aural-chip__text">JavaScript</span>
  <button class="aural-chip__remove" aria-label="Remove JavaScript"></button>
</div>

<!-- Chip with Icon -->
<div class="aural-chip aural-chip--primary aural-chip--standalone">
  <i data-lucide="star"></i>
  <span class="aural-chip__text">Featured</span>
</div>

<!-- Chip Input Container -->
<div class="aural-chips">
  <div class="aural-chips__container">
    <div class="aural-chip">
      <span class="aural-chip__text">HTML</span>
      <button class="aural-chip__remove" aria-label="Remove HTML"></button>
    </div>
    <input type="text" class="aural-chips__input" placeholder="Add skill...">
  </div>
</div>
\`\`\`

## Important Classes

- \`.aural-chip\` - Base chip class
- \`.aural-chip--standalone\` - Use when chip is NOT inside \`.aural-chips\` input container
- \`.aural-chip--primary\`, \`.aural-chip--success\`, etc. - Color variants
- \`.aural-chip--sm\`, \`.aural-chip--lg\`, \`.aural-chip--xl\` - Size variants (default is medium)
- \`.aural-chip__text\` - Text wrapper (required)
- \`.aural-chip__remove\` - Remove button
- \`.aural-chips\` - Chip input container
- \`.aural-chips__container\` - Inner container for chips and input
- \`.aural-chips__input\` - Input field within chip container
- \`.aural-chips-list\` - Container for displaying multiple standalone chips
        `.trim()}}},argTypes:{label:{control:"text",description:"Chip text content"},variant:{control:"select",options:["default","primary","success","warning","error","info"],description:"Chip color variant"},size:{control:"select",options:["sm","md","lg","xl"],description:"Chip size"},closeable:{control:"boolean",description:"Show remove button"},icon:{control:"text",description:'Lucide icon name (e.g., "star", "tag", "x")'},standalone:{control:"boolean",description:"Use standalone styling (outside of chip input)"}}};function c(e){const n=document.createElement("div"),t=["aural-chip"];if(e.variant&&e.variant!=="default"&&t.push(`aural-chip--${e.variant}`),e.size&&e.size!=="md"&&t.push(`aural-chip--${e.size}`),e.standalone&&t.push("aural-chip--standalone"),n.className=t.join(" "),n.setAttribute("role","listitem"),e.icon){const a=document.createElement("i");a.setAttribute("data-lucide",e.icon),a.setAttribute("aria-hidden","true"),n.appendChild(a)}const i=document.createElement("span");if(i.className="aural-chip__text",i.textContent=e.label,n.appendChild(i),e.closeable){const a=document.createElement("button");a.className="aural-chip__remove",a.setAttribute("aria-label",`Remove ${e.label}`),a.setAttribute("type","button"),a.onclick=()=>{n.remove()},n.appendChild(a)}return n}function o(e){setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},0)}const l={render:e=>{const n=document.createElement("div");n.style.padding="2rem";const t=document.createElement("div");t.className="aural-chips-list",t.setAttribute("role","list");const i=c(e);return t.appendChild(i),n.appendChild(t),o(),n},args:{label:"Design",variant:"default",size:"md",closeable:!1,icon:"",standalone:!0}},p={...l,args:{label:"Primary",variant:"primary",size:"md",closeable:!1,standalone:!0}},d={...l,args:{label:"Completed",variant:"success",size:"md",closeable:!1,standalone:!0}},u={...l,args:{label:"In Progress",variant:"warning",size:"md",closeable:!1,standalone:!0}},m={...l,args:{label:"Blocked",variant:"error",size:"md",closeable:!1,standalone:!0}},h={...l,args:{label:"Review",variant:"info",size:"md",closeable:!1,standalone:!0}},v={...l,args:{label:"Featured",variant:"primary",size:"md",closeable:!1,icon:"star",standalone:!0}},b={...l,args:{label:"Removable",variant:"default",size:"md",closeable:!0,standalone:!0}},f={...l,args:{label:"Small",variant:"primary",size:"sm",closeable:!0,standalone:!0}},g={...l,args:{label:"Large",variant:"primary",size:"lg",closeable:!0,standalone:!0}},C={...l,args:{label:"Extra Large",variant:"primary",size:"xl",closeable:!0,standalone:!0}},y={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("div");return n.className="aural-chips-list",n.setAttribute("role","list"),[{variant:"default",label:"Default"},{variant:"primary",label:"Primary"},{variant:"success",label:"Success"},{variant:"warning",label:"Warning"},{variant:"error",label:"Error"},{variant:"info",label:"Info"}].forEach(({variant:i,label:a})=>{const r=c({label:a,variant:i,size:"md",closeable:!0,standalone:!0});n.appendChild(r)}),e.appendChild(n),o(),e}},L={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("div");return n.className="aural-chips-list",n.style.alignItems="center",n.setAttribute("role","list"),[{size:"sm",label:"Small"},{size:"md",label:"Medium"},{size:"lg",label:"Large"},{size:"xl",label:"Extra Large"}].forEach(({size:i,label:a})=>{const r=c({label:a,variant:"primary",size:i,closeable:!0,standalone:!0});n.appendChild(r)}),e.appendChild(n),o(),e}},z={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("div");return n.className="aural-chips-list",n.setAttribute("role","list"),[{label:"JavaScript",icon:"zap",variant:"primary"},{label:"TypeScript",icon:"code",variant:"info"},{label:"React",icon:"atom",variant:"success"},{label:"Vue",icon:"triangle",variant:"success"}].forEach(({label:i,icon:a,variant:r})=>{const s=c({label:i,icon:a,variant:r,size:"md",closeable:!0,standalone:!0});n.appendChild(s)}),e.appendChild(n),o(),e}},E={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("div");return n.className="aural-chips-list",n.setAttribute("role","list"),[{label:"Completed",variant:"success"},{label:"In Progress",variant:"warning"},{label:"Blocked",variant:"error"},{label:"Review",variant:"info"},{label:"Draft",variant:"default"}].forEach(({label:i,variant:a})=>{const r=c({label:i,variant:a,size:"md",closeable:!1,standalone:!0});n.appendChild(r)}),e.appendChild(n),o(),e}},S={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem";const n=document.createElement("p");n.textContent="Active Filters (3)",n.style.fontSize="0.875rem",n.style.fontWeight="600",n.style.margin="0",e.appendChild(n);const t=document.createElement("div");t.className="aural-chips-list",t.setAttribute("role","list"),[{label:"Status: Active",variant:"primary"},{label:"Category: Design",variant:"success"},{label:"Priority: High",variant:"info"}].forEach(({label:r,variant:s})=>{const I=c({label:r,variant:s,size:"md",closeable:!0,standalone:!0});t.appendChild(I)}),e.appendChild(t);const a=document.createElement("button");return a.className="btn btn-ghost btn-sm",a.textContent="Clear All Filters",a.style.alignSelf="flex-start",a.onclick=()=>{for(;t.firstChild;)t.removeChild(t.firstChild)},e.appendChild(a),o(),e}},x={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("div");n.className="aural-chips";const t=document.createElement("div");t.className="aural-chips__container",["HTML","CSS","JavaScript"].forEach(r=>{const s=c({label:r,variant:"default",size:"md",closeable:!0,standalone:!1});s.classList.remove("aural-chip--standalone"),t.appendChild(s)});const a=document.createElement("input");return a.type="text",a.className="aural-chips__input",a.placeholder="Add skill...",a.setAttribute("aria-label","Add new chip"),a.addEventListener("keypress",r=>{if(r.key==="Enter"&&a.value.trim()){r.preventDefault();const s=c({label:a.value.trim(),variant:"default",size:"md",closeable:!0,standalone:!1});s.classList.remove("aural-chip--standalone"),t.insertBefore(s,a),a.value="",o()}}),t.appendChild(a),n.appendChild(t),e.appendChild(n),o(),e}},A={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("div");return n.className="aural-chips-list",n.setAttribute("role","list"),[{label:"All",variant:"primary",active:!0},{label:"Design",variant:"default",active:!1},{label:"Development",variant:"default",active:!1},{label:"Marketing",variant:"default",active:!1}].forEach(({label:i,variant:a,active:r})=>{const s=c({label:i,variant:a,size:"md",closeable:!1,standalone:!0});s.style.cursor="pointer",s.onclick=()=>{n.querySelectorAll(".aural-chip").forEach(I=>{I.classList.remove("aural-chip--primary")}),s.classList.add("aural-chip--primary")},n.appendChild(s)}),e.appendChild(n),o(),e}},w={render:e=>ke(()=>{const n=document.createElement("div");n.className="aural-chips-list",n.setAttribute("role","list");const t=c({label:e.label,variant:e.variant,size:e.size,closeable:e.closeable,icon:e.icon,standalone:!0});return n.appendChild(t),setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},100),n}),args:{label:"Chip",variant:"primary",size:"md",closeable:!0,icon:""},argTypes:{label:{control:"text",description:"Chip text content"},variant:{control:"select",options:["default","primary","success","warning","error","info"],description:"Chip color variant"},size:{control:"select",options:["sm","md","lg","xl"],description:"Chip size"},closeable:{control:"boolean",description:"Show remove button"},icon:{control:"text",description:'Lucide icon name (e.g., "star", "tag", "x")'}}};var _,D,N;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.setAttribute('role', 'list');
    const chip = createChip(args);
    chipsList.appendChild(chip);
    container.appendChild(chipsList);
    initializeLucideIcons(container);
    return container;
  },
  args: {
    label: 'Design',
    variant: 'default',
    size: 'md',
    closeable: false,
    icon: '',
    standalone: true
  }
}`,...(N=(D=l.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var k,T,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'md',
    closeable: false,
    standalone: true
  }
}`,...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var R,F,P;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Completed',
    variant: 'success',
    size: 'md',
    closeable: false,
    standalone: true
  }
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var W,M,H;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'In Progress',
    variant: 'warning',
    size: 'md',
    closeable: false,
    standalone: true
  }
}`,...(H=(M=u.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var J,V,q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Blocked',
    variant: 'error',
    size: 'md',
    closeable: false,
    standalone: true
  }
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var G,O,$;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Review',
    variant: 'info',
    size: 'md',
    closeable: false,
    standalone: true
  }
}`,...($=(O=h.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var U,j,K;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Featured',
    variant: 'primary',
    size: 'md',
    closeable: false,
    icon: 'star',
    standalone: true
  }
}`,...(K=(j=v.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Removable',
    variant: 'default',
    size: 'md',
    closeable: true,
    standalone: true
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Small',
    variant: 'primary',
    size: 'sm',
    closeable: true,
    standalone: true
  }
}`,...(ne=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,ie;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Large',
    variant: 'primary',
    size: 'lg',
    closeable: true,
    standalone: true
  }
}`,...(ie=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var re,se,le;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Extra Large',
    variant: 'primary',
    size: 'xl',
    closeable: true,
    standalone: true
  }
}`,...(le=(se=C.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,oe,pe;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.setAttribute('role', 'list');
    const variants = [{
      variant: 'default',
      label: 'Default'
    }, {
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
    variants.forEach(({
      variant,
      label
    }) => {
      const chip = createChip({
        label,
        variant,
        size: 'md',
        closeable: true,
        standalone: true
      });
      chipsList.appendChild(chip);
    });
    container.appendChild(chipsList);
    initializeLucideIcons(container);
    return container;
  }
}`,...(pe=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:pe.source}}};var de,ue,me;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.style.alignItems = 'center';
    chipsList.setAttribute('role', 'list');
    const sizes = [{
      size: 'sm',
      label: 'Small'
    }, {
      size: 'md',
      label: 'Medium'
    }, {
      size: 'lg',
      label: 'Large'
    }, {
      size: 'xl',
      label: 'Extra Large'
    }];
    sizes.forEach(({
      size,
      label
    }) => {
      const chip = createChip({
        label,
        variant: 'primary',
        size,
        closeable: true,
        standalone: true
      });
      chipsList.appendChild(chip);
    });
    container.appendChild(chipsList);
    initializeLucideIcons(container);
    return container;
  }
}`,...(me=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,ve,be;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.setAttribute('role', 'list');
    const chips = [{
      label: 'JavaScript',
      icon: 'zap',
      variant: 'primary'
    }, {
      label: 'TypeScript',
      icon: 'code',
      variant: 'info'
    }, {
      label: 'React',
      icon: 'atom',
      variant: 'success'
    }, {
      label: 'Vue',
      icon: 'triangle',
      variant: 'success'
    }];
    chips.forEach(({
      label,
      icon,
      variant
    }) => {
      const chip = createChip({
        label,
        icon,
        variant,
        size: 'md',
        closeable: true,
        standalone: true
      });
      chipsList.appendChild(chip);
    });
    container.appendChild(chipsList);
    initializeLucideIcons(container);
    return container;
  }
}`,...(be=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var fe,ge,Ce;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.setAttribute('role', 'list');
    const statuses = [{
      label: 'Completed',
      variant: 'success'
    }, {
      label: 'In Progress',
      variant: 'warning'
    }, {
      label: 'Blocked',
      variant: 'error'
    }, {
      label: 'Review',
      variant: 'info'
    }, {
      label: 'Draft',
      variant: 'default'
    }];
    statuses.forEach(({
      label,
      variant
    }) => {
      const chip = createChip({
        label,
        variant,
        size: 'md',
        closeable: false,
        standalone: true
      });
      chipsList.appendChild(chip);
    });
    container.appendChild(chipsList);
    initializeLucideIcons(container);
    return container;
  }
}`,...(Ce=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};var ye,Le,ze;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';

    // Title
    const title = document.createElement('p');
    title.textContent = 'Active Filters (3)';
    title.style.fontSize = '0.875rem';
    title.style.fontWeight = '600';
    title.style.margin = '0';
    container.appendChild(title);

    // Chips list
    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.setAttribute('role', 'list');
    const filters = [{
      label: 'Status: Active',
      variant: 'primary'
    }, {
      label: 'Category: Design',
      variant: 'success'
    }, {
      label: 'Priority: High',
      variant: 'info'
    }];
    filters.forEach(({
      label,
      variant
    }) => {
      const chip = createChip({
        label,
        variant,
        size: 'md',
        closeable: true,
        standalone: true
      });
      chipsList.appendChild(chip);
    });
    container.appendChild(chipsList);

    // Clear all button
    const clearBtn = document.createElement('button');
    clearBtn.className = 'btn btn-ghost btn-sm';
    clearBtn.textContent = 'Clear All Filters';
    clearBtn.style.alignSelf = 'flex-start';
    clearBtn.onclick = () => {
      while (chipsList.firstChild) {
        chipsList.removeChild(chipsList.firstChild);
      }
    };
    container.appendChild(clearBtn);
    initializeLucideIcons(container);
    return container;
  }
}`,...(ze=(Le=S.parameters)==null?void 0:Le.docs)==null?void 0:ze.source}}};var Ee,Se,xe;x.parameters={...x.parameters,docs:{...(Ee=x.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const chipsContainer = document.createElement('div');
    chipsContainer.className = 'aural-chips';
    const chipsInnerContainer = document.createElement('div');
    chipsInnerContainer.className = 'aural-chips__container';

    // Add initial chips
    const initialChips = ['HTML', 'CSS', 'JavaScript'];
    initialChips.forEach(label => {
      const chip = createChip({
        label,
        variant: 'default',
        size: 'md',
        closeable: true,
        standalone: false
      });
      chip.classList.remove('aural-chip--standalone');
      chipsInnerContainer.appendChild(chip);
    });

    // Add input
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-chips__input';
    input.placeholder = 'Add skill...';
    input.setAttribute('aria-label', 'Add new chip');
    input.addEventListener('keypress', e => {
      if (e.key === 'Enter' && input.value.trim()) {
        e.preventDefault();
        const newChip = createChip({
          label: input.value.trim(),
          variant: 'default',
          size: 'md',
          closeable: true,
          standalone: false
        });
        newChip.classList.remove('aural-chip--standalone');
        chipsInnerContainer.insertBefore(newChip, input);
        input.value = '';
        initializeLucideIcons(container);
      }
    });
    chipsInnerContainer.appendChild(input);
    chipsContainer.appendChild(chipsInnerContainer);
    container.appendChild(chipsContainer);
    initializeLucideIcons(container);
    return container;
  }
}`,...(xe=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var Ae,we,Ie;A.parameters={...A.parameters,docs:{...(Ae=A.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const chipsList = document.createElement('div');
    chipsList.className = 'aural-chips-list';
    chipsList.setAttribute('role', 'list');
    const tags = [{
      label: 'All',
      variant: 'primary',
      active: true
    }, {
      label: 'Design',
      variant: 'default',
      active: false
    }, {
      label: 'Development',
      variant: 'default',
      active: false
    }, {
      label: 'Marketing',
      variant: 'default',
      active: false
    }];
    tags.forEach(({
      label,
      variant,
      active: _active
    }) => {
      const chip = createChip({
        label,
        variant,
        size: 'md',
        closeable: false,
        standalone: true
      });

      // Make clickable for filtering
      chip.style.cursor = 'pointer';
      chip.onclick = () => {
        // Remove primary from all chips
        chipsList.querySelectorAll('.aural-chip').forEach(c => {
          c.classList.remove('aural-chip--primary');
        });
        // Add primary to clicked chip
        chip.classList.add('aural-chip--primary');
      };
      chipsList.appendChild(chip);
    });
    container.appendChild(chipsList);
    initializeLucideIcons(container);
    return container;
  }
}`,...(Ie=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var _e,De,Ne;w.parameters={...w.parameters,docs:{...(_e=w.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const chipsList = document.createElement('div');
      chipsList.className = 'aural-chips-list';
      chipsList.setAttribute('role', 'list');
      const chip = createChip({
        label: args.label,
        variant: args.variant,
        size: args.size,
        closeable: args.closeable,
        icon: args.icon,
        standalone: true
      });
      chipsList.appendChild(chip);

      // Initialize Lucide for the grid
      setTimeout(() => {
        if (typeof (window as any).lucide !== 'undefined') {
          (window as any).lucide.createIcons();
        }
      }, 100);
      return chipsList;
    });
  },
  args: {
    label: 'Chip',
    variant: 'primary',
    size: 'md',
    closeable: true,
    icon: ''
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Chip text content'
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Chip color variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Chip size'
    },
    closeable: {
      control: 'boolean',
      description: 'Show remove button'
    },
    icon: {
      control: 'text',
      description: 'Lucide icon name (e.g., "star", "tag", "x")'
    }
  }
}`,...(Ne=(De=w.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};const Re=["Default","Primary","Success","Warning","Error","Info","WithIcon","Closeable","Small","Large","ExtraLarge","AllVariants","AllSizes","WithIcons","StatusTags","FilterChips","ChipInput","TagFilters","ThemeComparison"];export{L as AllSizes,y as AllVariants,x as ChipInput,b as Closeable,l as Default,m as Error,C as ExtraLarge,S as FilterChips,h as Info,g as Large,p as Primary,f as Small,E as StatusTags,d as Success,A as TagFilters,w as ThemeComparison,u as Warning,v as WithIcon,z as WithIcons,Re as __namedExportsOrder,Be as default};
