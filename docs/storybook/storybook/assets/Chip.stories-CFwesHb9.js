import{c as _e}from"./createThemeGrid-DWAncU4Q.js";const De={title:"Components/Data Display/Chip",tags:["autodocs"],parameters:{docs:{description:{component:`
# Chip Component

Compact elements for tags, filters, and selections. Also known as tags or pills.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Key Features

- Multiple color variants (default, primary, success, warning, error, info)
- 3 sizes (small, medium, large)
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
- \`.aural-chip--sm\`, \`.aural-chip--lg\` - Size variants (default is medium)
- \`.aural-chip__text\` - Text wrapper (required)
- \`.aural-chip__remove\` - Remove button
- \`.aural-chips\` - Chip input container
- \`.aural-chips__container\` - Inner container for chips and input
- \`.aural-chips__input\` - Input field within chip container
- \`.aural-chips-list\` - Container for displaying multiple standalone chips
        `.trim()}}},argTypes:{label:{control:"text",description:"Chip text content"},variant:{control:"select",options:["default","primary","success","warning","error","info"],description:"Chip color variant"},size:{control:"select",options:["sm","md","lg"],description:"Chip size"},closeable:{control:"boolean",description:"Show remove button"},icon:{control:"text",description:'Lucide icon name (e.g., "star", "tag", "x")'},standalone:{control:"boolean",description:"Use standalone styling (outside of chip input)"}}};function c(e){const n=document.createElement("div"),t=["aural-chip"];if(e.variant&&e.variant!=="default"&&t.push(`aural-chip--${e.variant}`),e.size&&e.size!=="md"&&t.push(`aural-chip--${e.size}`),e.standalone&&t.push("aural-chip--standalone"),n.className=t.join(" "),n.setAttribute("role","listitem"),e.icon){const a=document.createElement("i");a.setAttribute("data-lucide",e.icon),a.setAttribute("aria-hidden","true"),n.appendChild(a)}const i=document.createElement("span");if(i.className="aural-chip__text",i.textContent=e.label,n.appendChild(i),e.closeable){const a=document.createElement("button");a.className="aural-chip__remove",a.setAttribute("aria-label",`Remove ${e.label}`),a.setAttribute("type","button"),a.onclick=()=>{n.remove()},n.appendChild(a)}return n}function o(e){setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},0)}const l={render:e=>{const n=document.createElement("div");n.style.padding="2rem";const t=document.createElement("div");t.className="aural-chips-list",t.setAttribute("role","list");const i=c(e);return t.appendChild(i),n.appendChild(t),o(),n},args:{label:"Design",variant:"default",size:"md",closeable:!1,icon:"",standalone:!0}},p={...l,args:{label:"Primary",variant:"primary",size:"md",closeable:!1,standalone:!0}},d={...l,args:{label:"Completed",variant:"success",size:"md",closeable:!1,standalone:!0}},u={...l,args:{label:"In Progress",variant:"warning",size:"md",closeable:!1,standalone:!0}},m={...l,args:{label:"Blocked",variant:"error",size:"md",closeable:!1,standalone:!0}},h={...l,args:{label:"Review",variant:"info",size:"md",closeable:!1,standalone:!0}},v={...l,args:{label:"Featured",variant:"primary",size:"md",closeable:!1,icon:"star",standalone:!0}},b={...l,args:{label:"Removable",variant:"default",size:"md",closeable:!0,standalone:!0}},f={...l,args:{label:"Small",variant:"primary",size:"sm",closeable:!0,standalone:!0}},C={...l,args:{label:"Large",variant:"primary",size:"lg",closeable:!0,standalone:!0}},g={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("div");return n.className="aural-chips-list",n.setAttribute("role","list"),[{variant:"default",label:"Default"},{variant:"primary",label:"Primary"},{variant:"success",label:"Success"},{variant:"warning",label:"Warning"},{variant:"error",label:"Error"},{variant:"info",label:"Info"}].forEach(({variant:i,label:a})=>{const r=c({label:a,variant:i,size:"md",closeable:!0,standalone:!0});n.appendChild(r)}),e.appendChild(n),o(),e}},y={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("div");return n.className="aural-chips-list",n.style.alignItems="center",n.setAttribute("role","list"),[{size:"sm",label:"Small"},{size:"md",label:"Medium"},{size:"lg",label:"Large"}].forEach(({size:i,label:a})=>{const r=c({label:a,variant:"primary",size:i,closeable:!0,standalone:!0});n.appendChild(r)}),e.appendChild(n),o(),e}},L={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("div");return n.className="aural-chips-list",n.setAttribute("role","list"),[{label:"JavaScript",icon:"zap",variant:"primary"},{label:"TypeScript",icon:"code",variant:"info"},{label:"React",icon:"atom",variant:"success"},{label:"Vue",icon:"triangle",variant:"success"}].forEach(({label:i,icon:a,variant:r})=>{const s=c({label:i,icon:a,variant:r,size:"md",closeable:!0,standalone:!0});n.appendChild(s)}),e.appendChild(n),o(),e}},z={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("div");return n.className="aural-chips-list",n.setAttribute("role","list"),[{label:"Completed",variant:"success"},{label:"In Progress",variant:"warning"},{label:"Blocked",variant:"error"},{label:"Review",variant:"info"},{label:"Draft",variant:"default"}].forEach(({label:i,variant:a})=>{const r=c({label:i,variant:a,size:"md",closeable:!1,standalone:!0});n.appendChild(r)}),e.appendChild(n),o(),e}},E={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem";const n=document.createElement("p");n.textContent="Active Filters (3)",n.style.fontSize="0.875rem",n.style.fontWeight="600",n.style.margin="0",e.appendChild(n);const t=document.createElement("div");t.className="aural-chips-list",t.setAttribute("role","list"),[{label:"Status: Active",variant:"primary"},{label:"Category: Design",variant:"success"},{label:"Priority: High",variant:"info"}].forEach(({label:r,variant:s})=>{const I=c({label:r,variant:s,size:"md",closeable:!0,standalone:!0});t.appendChild(I)}),e.appendChild(t);const a=document.createElement("button");return a.className="btn btn-ghost btn-sm",a.textContent="Clear All Filters",a.style.alignSelf="flex-start",a.onclick=()=>{for(;t.firstChild;)t.removeChild(t.firstChild)},e.appendChild(a),o(),e}},S={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("div");n.className="aural-chips";const t=document.createElement("div");t.className="aural-chips__container",["HTML","CSS","JavaScript"].forEach(r=>{const s=c({label:r,variant:"default",size:"md",closeable:!0,standalone:!1});s.classList.remove("aural-chip--standalone"),t.appendChild(s)});const a=document.createElement("input");return a.type="text",a.className="aural-chips__input",a.placeholder="Add skill...",a.setAttribute("aria-label","Add new chip"),a.addEventListener("keypress",r=>{if(r.key==="Enter"&&a.value.trim()){r.preventDefault();const s=c({label:a.value.trim(),variant:"default",size:"md",closeable:!0,standalone:!1});s.classList.remove("aural-chip--standalone"),t.insertBefore(s,a),a.value="",o()}}),t.appendChild(a),n.appendChild(t),e.appendChild(n),o(),e}},A={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("div");return n.className="aural-chips-list",n.setAttribute("role","list"),[{label:"All",variant:"primary",active:!0},{label:"Design",variant:"default",active:!1},{label:"Development",variant:"default",active:!1},{label:"Marketing",variant:"default",active:!1}].forEach(({label:i,variant:a,active:r})=>{const s=c({label:i,variant:a,size:"md",closeable:!1,standalone:!0});s.style.cursor="pointer",s.onclick=()=>{n.querySelectorAll(".aural-chip").forEach(I=>{I.classList.remove("aural-chip--primary")}),s.classList.add("aural-chip--primary")},n.appendChild(s)}),e.appendChild(n),o(),e}},w={render:e=>_e(()=>{const n=document.createElement("div");n.className="aural-chips-list",n.setAttribute("role","list");const t=c({label:e.label,variant:e.variant,size:e.size,closeable:e.closeable,icon:e.icon,standalone:!0});return n.appendChild(t),setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},100),n}),args:{label:"Chip",variant:"primary",size:"md",closeable:!0,icon:""},argTypes:{label:{control:"text",description:"Chip text content"},variant:{control:"select",options:["default","primary","success","warning","error","info"],description:"Chip color variant"},size:{control:"select",options:["sm","md","lg"],description:"Chip size"},closeable:{control:"boolean",description:"Show remove button"},icon:{control:"text",description:'Lucide icon name (e.g., "star", "tag", "x")'}}};var _,x,D;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(x=l.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var N,k,T;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'md',
    closeable: false,
    standalone: true
  }
}`,...(T=(k=p.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var B,R,F;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Completed',
    variant: 'success',
    size: 'md',
    closeable: false,
    standalone: true
  }
}`,...(F=(R=d.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var P,W,M;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'In Progress',
    variant: 'warning',
    size: 'md',
    closeable: false,
    standalone: true
  }
}`,...(M=(W=u.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var H,J,V;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Blocked',
    variant: 'error',
    size: 'md',
    closeable: false,
    standalone: true
  }
}`,...(V=(J=m.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var q,G,O;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Review',
    variant: 'info',
    size: 'md',
    closeable: false,
    standalone: true
  }
}`,...(O=(G=h.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var $,U,j;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Featured',
    variant: 'primary',
    size: 'md',
    closeable: false,
    icon: 'star',
    standalone: true
  }
}`,...(j=(U=v.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Removable',
    variant: 'default',
    size: 'md',
    closeable: true,
    standalone: true
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Small',
    variant: 'primary',
    size: 'sm',
    closeable: true,
    standalone: true
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,te;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Large',
    variant: 'primary',
    size: 'lg',
    closeable: true,
    standalone: true
  }
}`,...(te=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ie,re,se;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(re=g.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,ce,oe;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:oe.source}}};var pe,de,ue;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(de=L.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,he,ve;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(he=z.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var be,fe,Ce;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ce=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var ge,ye,Le;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Le=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:Le.source}}};var ze,Ee,Se;A.parameters={...A.parameters,docs:{...(ze=A.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
      active
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
}`,...(Se=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};var Ae,we,Ie;w.parameters={...w.parameters,docs:{...(Ae=w.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
      options: ['sm', 'md', 'lg'],
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
}`,...(Ie=(we=w.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};const Ne=["Default","Primary","Success","Warning","Error","Info","WithIcon","Closeable","Small","Large","AllVariants","AllSizes","WithIcons","StatusTags","FilterChips","ChipInput","TagFilters","ThemeComparison"];export{y as AllSizes,g as AllVariants,S as ChipInput,b as Closeable,l as Default,m as Error,E as FilterChips,h as Info,C as Large,p as Primary,f as Small,z as StatusTags,d as Success,A as TagFilters,w as ThemeComparison,u as Warning,v as WithIcon,L as WithIcons,Ne as __namedExportsOrder,De as default};
