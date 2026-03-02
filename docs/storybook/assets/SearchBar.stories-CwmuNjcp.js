import{c as U}from"./createThemeGrid-DWAncU4Q.js";const ee={title:"Components/Forms/Search Bar",tags:["autodocs"],parameters:{docs:{description:{component:`
# Search Bar Component

Versatile search input components with autocomplete, filters, keyboard shortcuts, and command palette functionality for enhanced user experience.

## Key Features

- Multiple sizes (Small, Medium, Large)
- Search icon and clear button
- Voice search support
- Keyboard shortcuts (⌘K / Ctrl+K)
- Autocomplete and suggestions
- ARIA attributes for accessibility
- WCAG AAA compliant

## HTML Structure

\`\`\`html
<div class="aural-search-bar">
  <div class="aural-search-bar__wrapper">
    <div class="aural-search-bar__icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    </div>
    <input type="text" class="aural-search-bar__input" placeholder="Search..." aria-label="Search input">
  </div>
</div>
\`\`\`

## Size Variants

- \`aural-search-bar--sm\` - Small size
- \`aural-search-bar\` - Default/Medium size
- \`aural-search-bar--lg\` - Large size

## With Clear Button

\`\`\`html
<div class="aural-search-bar">
  <div class="aural-search-bar__wrapper">
    <div class="aural-search-bar__icon">...</div>
    <input type="text" class="aural-search-bar__input" placeholder="Type to search..." aria-label="Search with clear button">
    <button class="aural-search-bar__clear" aria-label="Clear search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>
</div>
\`\`\`

## Framework Examples

**React:**
\`\`\`jsx
const SearchBar = ({ placeholder = 'Search...', value, onChange }) => (
  <div className="aural-search-bar">
    <div className="aural-search-bar__wrapper">
      <div className="aural-search-bar__icon">
        <SearchIcon />
      </div>
      <input
        type="text"
        className="aural-search-bar__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label="Search"
      />
    </div>
  </div>
);
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div class="aural-search-bar">
    <div class="aural-search-bar__wrapper">
      <div class="aural-search-bar__icon">
        <SearchIcon />
      </div>
      <input
        type="text"
        class="aural-search-bar__input"
        :placeholder="placeholder"
        v-model="searchQuery"
        aria-label="Search"
      />
    </div>
  </div>
</template>
\`\`\`

**Svelte:**
\`\`\`svelte
<div class="aural-search-bar">
  <div class="aural-search-bar__wrapper">
    <div class="aural-search-bar__icon">
      <SearchIcon />
    </div>
    <input
      type="text"
      class="aural-search-bar__input"
      placeholder={placeholder}
      bind:value={searchQuery}
      aria-label="Search"
    />
  </div>
</div>
\`\`\`
        `.trim()}}},argTypes:{placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Input value"},disabled:{control:"boolean",description:"Disabled state"},showClearButton:{control:"boolean",description:"Show clear button"},size:{control:"select",options:["sm","md","lg"],description:"Search bar size"}}};function i(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.setAttribute("stroke","currentColor"),e.setAttribute("stroke-width","2");const t=document.createElementNS("http://www.w3.org/2000/svg","circle");t.setAttribute("cx","11"),t.setAttribute("cy","11"),t.setAttribute("r","8");const r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d","m21 21-4.35-4.35"),e.appendChild(t),e.appendChild(r),e}function y(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.setAttribute("stroke","currentColor"),e.setAttribute("stroke-width","2");const t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","18"),t.setAttribute("y1","6"),t.setAttribute("x2","6"),t.setAttribute("y2","18");const r=document.createElementNS("http://www.w3.org/2000/svg","line");return r.setAttribute("x1","6"),r.setAttribute("y1","6"),r.setAttribute("x2","18"),r.setAttribute("y2","18"),e.appendChild(t),e.appendChild(r),e}function X(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.setAttribute("stroke","currentColor"),e.setAttribute("stroke-width","2"),e.style.width="16px",e.style.height="16px";const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z");const r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d","M19 10v2a7 7 0 0 1-14 0v-2");const n=document.createElementNS("http://www.w3.org/2000/svg","line");n.setAttribute("x1","12"),n.setAttribute("y1","19"),n.setAttribute("x2","12"),n.setAttribute("y2","23");const a=document.createElementNS("http://www.w3.org/2000/svg","line");return a.setAttribute("x1","8"),a.setAttribute("y1","23"),a.setAttribute("x2","16"),a.setAttribute("y2","23"),e.appendChild(t),e.appendChild(r),e.appendChild(n),e.appendChild(a),e}const u={render:e=>{const t=document.createElement("div");t.style.cssText="padding: 2rem; max-width: 600px;";const r=document.createElement("div");r.className=e.size==="sm"?"aural-search-bar aural-search-bar--sm":e.size==="lg"?"aural-search-bar aural-search-bar--lg":"aural-search-bar";const n=document.createElement("div");n.className="aural-search-bar__wrapper";const a=document.createElement("div");a.className="aural-search-bar__icon",a.appendChild(i()),n.appendChild(a);const c=document.createElement("input");if(c.type="text",c.className="aural-search-bar__input",c.placeholder=e.placeholder||"Search...",c.value=e.value||"",c.disabled=e.disabled||!1,c.setAttribute("aria-label",e.placeholder||"Search input"),n.appendChild(c),e.showClearButton&&e.value){const s=document.createElement("button");s.className="aural-search-bar__clear",s.setAttribute("aria-label","Clear search"),s.type="button",s.appendChild(y()),s.onclick=()=>{c.value="",c.focus()},n.appendChild(s)}return r.appendChild(n),t.appendChild(r),t},args:{placeholder:"Search...",value:"",disabled:!1,showClearButton:!1,size:"md"}},h={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; max-width: 600px;";const t=document.createElement("div");t.className="aural-search-bar aural-search-bar--sm";const r=document.createElement("div");r.className="aural-search-bar__wrapper";const n=document.createElement("div");n.className="aural-search-bar__icon",n.appendChild(i()),r.appendChild(n);const a=document.createElement("input");return a.type="text",a.className="aural-search-bar__input",a.placeholder="Small search...",a.setAttribute("aria-label","Small search input"),r.appendChild(a),t.appendChild(r),e.appendChild(t),e}},m={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; max-width: 600px;";const t=document.createElement("div");t.className="aural-search-bar aural-search-bar--lg";const r=document.createElement("div");r.className="aural-search-bar__wrapper";const n=document.createElement("div");n.className="aural-search-bar__icon",n.appendChild(i()),r.appendChild(n);const a=document.createElement("input");return a.type="text",a.className="aural-search-bar__input",a.placeholder="Large search...",a.setAttribute("aria-label","Large search input"),r.appendChild(a),t.appendChild(r),e.appendChild(t),e}},b={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; max-width: 600px;";const t=document.createElement("div");t.className="aural-search-bar";const r=document.createElement("div");r.className="aural-search-bar__wrapper";const n=document.createElement("div");n.className="aural-search-bar__icon",n.appendChild(i()),r.appendChild(n);const a=document.createElement("input");a.type="text",a.id="search-clear",a.className="aural-search-bar__input",a.placeholder="Type to search...",a.value="Button component",a.setAttribute("aria-label","Search with clear button"),r.appendChild(a);const c=document.createElement("button");return c.className="aural-search-bar__clear",c.setAttribute("aria-label","Clear search"),c.appendChild(y()),c.onclick=()=>{a.value="",a.focus()},r.appendChild(c),t.appendChild(r),e.appendChild(t),e}},v={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; max-width: 600px;";const t=document.createElement("div");t.className="aural-search-bar";const r=document.createElement("div");r.className="aural-search-bar__wrapper";const n=document.createElement("div");n.className="aural-search-bar__icon",n.appendChild(i()),r.appendChild(n);const a=document.createElement("input");a.type="text",a.className="aural-search-bar__input",a.placeholder="Search or use voice...",a.setAttribute("aria-label","Search with voice input"),r.appendChild(a);const c=document.createElement("button");return c.className="btn btn-sm btn-ghost",c.setAttribute("aria-label","Voice search"),c.onclick=()=>alert("Voice search activated"),c.appendChild(X()),r.appendChild(c),t.appendChild(r),e.appendChild(t),e}},g={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; max-width: 600px;";const t=document.createElement("div");t.className="aural-search-bar",t.style.position="relative";const r=document.createElement("div");r.className="aural-search-bar__wrapper";const n=document.createElement("div");n.className="aural-search-bar__icon",n.appendChild(i()),r.appendChild(n);const a=document.createElement("input");a.type="text",a.id="keyboard-search",a.className="aural-search-bar__input",a.placeholder="Search...",a.setAttribute("aria-label","Search with keyboard shortcut"),r.appendChild(a);const c=document.createElement("kbd");c.textContent="⌘K",c.style.cssText=`
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      padding: 4px 8px;
      background: var(--color-bg-tertiary);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-sm);
      font-size: var(--text-xs);
      color: var(--color-text-tertiary);
    `,r.appendChild(c),t.appendChild(r),e.appendChild(t);const s=document.createElement("p");return s.style.cssText="margin-top: var(--space-4); font-size: var(--text-sm); color: var(--color-text-tertiary);",s.innerHTML='Press <kbd style="padding: 2px 6px; background: var(--color-bg-tertiary); border-radius: var(--radius-sm);">⌘K</kbd> or <kbd style="padding: 2px 6px; background: var(--color-bg-tertiary); border-radius: var(--radius-sm);">Ctrl+K</kbd> to focus',e.appendChild(s),e}},w={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; max-width: 600px;";const t=document.createElement("div");t.className="aural-search-bar",t.id="demo-search-suggestions";const r=document.createElement("div");r.className="aural-search-bar__wrapper";const n=document.createElement("div");n.className="aural-search-bar__icon",n.appendChild(i()),r.appendChild(n);const a=document.createElement("input");a.type="text",a.className="aural-search-bar__input",a.placeholder="Search components...",a.value="button",a.setAttribute("aria-label","Search with suggestions"),a.setAttribute("aria-autocomplete","list"),a.setAttribute("aria-expanded","true"),r.appendChild(a),t.appendChild(r);const c=document.createElement("div");c.className="aural-search-bar__suggestions",t.appendChild(c),e.appendChild(t);const s=document.createElement("div");return s.className="search-suggestions",s.style.cssText=`
      margin-top: var(--space-2);
      padding: var(--space-2);
      background: var(--color-bg-primary);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    `,[{title:"Button Component",description:"Interactive button with variants"},{title:"Button Group",description:"Group related buttons together"},{title:"Toggle Button",description:"Button with on/off state"}].forEach(p=>{const o=document.createElement("div");o.className="suggestion-item",o.style.cssText=`
        display: flex;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-3);
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: background-color 0.15s ease;
      `;const l=document.createElement("div");l.style.cssText="flex: 1;";const _=document.createElement("div");_.style.cssText="font-weight: var(--font-medium); color: var(--color-text-primary);",_.innerHTML=p.title.replace(/button/gi,'<span class="suggestion-highlight" style="font-weight: var(--font-semibold); color: var(--color-primary);">$&</span>');const E=document.createElement("div");E.style.cssText="font-size: var(--text-sm); color: var(--color-text-tertiary);",E.textContent=p.description,l.appendChild(_),l.appendChild(E),o.appendChild(l),s.appendChild(o)}),e.appendChild(s),e}},x={render:()=>{const e=document.createElement("div");return e.style.cssText="padding: 2rem; display: flex; flex-direction: column; gap: var(--space-6); max-width: 600px;",[{className:"aural-search-bar aural-search-bar--sm",placeholder:"Small search...",label:"Small"},{className:"aural-search-bar",placeholder:"Default search...",label:"Default"},{className:"aural-search-bar aural-search-bar--lg",placeholder:"Large search...",label:"Large"}].forEach(({className:r,placeholder:n,label:a})=>{const c=document.createElement("div"),s=document.createElement("div");s.textContent=a,s.style.cssText="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: var(--tracking-wide); margin-bottom: var(--space-4);",c.appendChild(s);const d=document.createElement("div");d.className=r;const p=document.createElement("div");p.className="aural-search-bar__wrapper";const o=document.createElement("div");o.className="aural-search-bar__icon",o.appendChild(i()),p.appendChild(o);const l=document.createElement("input");l.type="text",l.className="aural-search-bar__input",l.placeholder=n,l.setAttribute("aria-label",`${a} search input`),p.appendChild(l),d.appendChild(p),c.appendChild(d),e.appendChild(c)}),e}},C={render:e=>U(()=>{const t=document.createElement("div");t.className=e.size==="sm"?"aural-search-bar aural-search-bar--sm":e.size==="lg"?"aural-search-bar aural-search-bar--lg":"aural-search-bar";const r=document.createElement("div");r.className="aural-search-bar__wrapper";const n=document.createElement("div");n.className="aural-search-bar__icon",n.appendChild(i()),r.appendChild(n);const a=document.createElement("input");if(a.type="text",a.className="aural-search-bar__input",a.placeholder=e.placeholder||"Search...",a.value=e.value||"",a.disabled=e.disabled||!1,a.setAttribute("aria-label",e.placeholder||"Search"),r.appendChild(a),e.showClearButton&&e.value){const c=document.createElement("button");c.className="aural-search-bar__clear",c.setAttribute("aria-label","Clear search"),c.type="button",c.appendChild(y()),r.appendChild(c)}return t.appendChild(r),t}),args:{placeholder:"Search...",value:"",disabled:!1,showClearButton:!1,size:"md"}};var N,B,S;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';
    const searchBar = document.createElement('div');
    // Apply size class correctly per docs
    searchBar.className = args.size === 'sm' ? 'aural-search-bar aural-search-bar--sm' : args.size === 'lg' ? 'aural-search-bar aural-search-bar--lg' : 'aural-search-bar';
    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';

    // Search icon (required per docs)
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);

    // Input field
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = args.placeholder || 'Search...';
    input.value = args.value || '';
    input.disabled = args.disabled || false;
    input.setAttribute('aria-label', args.placeholder || 'Search input');
    wrapper.appendChild(input);

    // Clear button (optional, shown when there's a value)
    if (args.showClearButton && args.value) {
      const clearBtn = document.createElement('button');
      clearBtn.className = 'aural-search-bar__clear';
      clearBtn.setAttribute('aria-label', 'Clear search');
      clearBtn.type = 'button';
      clearBtn.appendChild(createClearIcon());
      clearBtn.onclick = () => {
        input.value = '';
        input.focus();
      };
      wrapper.appendChild(clearBtn);
    }
    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);
    return container;
  },
  args: {
    placeholder: 'Search...',
    value: '',
    disabled: false,
    showClearButton: false,
    size: 'md'
  }
}`,...(S=(B=u.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var f,A,W;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';
    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar aural-search-bar--sm';
    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Small search...';
    input.setAttribute('aria-label', 'Small search input');
    wrapper.appendChild(input);
    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);
    return container;
  }
}`,...(W=(A=h.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var k,T,z;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';
    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar aural-search-bar--lg';
    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Large search...';
    input.setAttribute('aria-label', 'Large search input');
    wrapper.appendChild(input);
    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);
    return container;
  }
}`,...(z=(T=m.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var I,L,K;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';
    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar';
    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'search-clear';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Type to search...';
    input.value = 'Button component';
    input.setAttribute('aria-label', 'Search with clear button');
    wrapper.appendChild(input);
    const clearBtn = document.createElement('button');
    clearBtn.className = 'aural-search-bar__clear';
    clearBtn.setAttribute('aria-label', 'Clear search');
    clearBtn.appendChild(createClearIcon());
    clearBtn.onclick = () => {
      input.value = '';
      input.focus();
    };
    wrapper.appendChild(clearBtn);
    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);
    return container;
  }
}`,...(K=(L=b.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var M,V,D;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';
    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar';
    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Search or use voice...';
    input.setAttribute('aria-label', 'Search with voice input');
    wrapper.appendChild(input);
    const voiceBtn = document.createElement('button');
    voiceBtn.className = 'btn btn-sm btn-ghost';
    voiceBtn.setAttribute('aria-label', 'Voice search');
    voiceBtn.onclick = () => alert('Voice search activated');
    voiceBtn.appendChild(createMicIcon());
    wrapper.appendChild(voiceBtn);
    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);
    return container;
  }
}`,...(D=(V=v.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var G,H,$;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';
    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar';
    searchBar.style.position = 'relative';
    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'keyboard-search';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Search...';
    input.setAttribute('aria-label', 'Search with keyboard shortcut');
    wrapper.appendChild(input);

    // Keyboard hint badge
    const kbd = document.createElement('kbd');
    kbd.textContent = '⌘K';
    kbd.style.cssText = \`
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      padding: 4px 8px;
      background: var(--color-bg-tertiary);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-sm);
      font-size: var(--text-xs);
      color: var(--color-text-tertiary);
    \`;
    wrapper.appendChild(kbd);
    searchBar.appendChild(wrapper);
    container.appendChild(searchBar);
    const hint = document.createElement('p');
    hint.style.cssText = 'margin-top: var(--space-4); font-size: var(--text-sm); color: var(--color-text-tertiary);';
    hint.innerHTML = 'Press <kbd style="padding: 2px 6px; background: var(--color-bg-tertiary); border-radius: var(--radius-sm);">⌘K</kbd> or <kbd style="padding: 2px 6px; background: var(--color-bg-tertiary); border-radius: var(--radius-sm);">Ctrl+K</kbd> to focus';
    container.appendChild(hint);
    return container;
  }
}`,...($=(H=g.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var F,P,Q;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';
    const searchBar = document.createElement('div');
    searchBar.className = 'aural-search-bar';
    searchBar.id = 'demo-search-suggestions';
    const wrapper = document.createElement('div');
    wrapper.className = 'aural-search-bar__wrapper';
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'aural-search-bar__icon';
    iconWrapper.appendChild(createSearchIcon());
    wrapper.appendChild(iconWrapper);
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'aural-search-bar__input';
    input.placeholder = 'Search components...';
    input.value = 'button';
    input.setAttribute('aria-label', 'Search with suggestions');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('aria-expanded', 'true');
    wrapper.appendChild(input);
    searchBar.appendChild(wrapper);

    // Suggestions dropdown
    const suggestionsWrapper = document.createElement('div');
    suggestionsWrapper.className = 'aural-search-bar__suggestions';
    searchBar.appendChild(suggestionsWrapper);
    container.appendChild(searchBar);

    // Search suggestions container (separate from search bar per docs)
    const suggestions = document.createElement('div');
    suggestions.className = 'search-suggestions';
    suggestions.style.cssText = \`
      margin-top: var(--space-2);
      padding: var(--space-2);
      background: var(--color-bg-primary);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    \`;
    const items = [{
      title: 'Button Component',
      description: 'Interactive button with variants'
    }, {
      title: 'Button Group',
      description: 'Group related buttons together'
    }, {
      title: 'Toggle Button',
      description: 'Button with on/off state'
    }];
    items.forEach(item => {
      const suggestionItem = document.createElement('div');
      suggestionItem.className = 'suggestion-item';
      suggestionItem.style.cssText = \`
        display: flex;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-3);
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: background-color 0.15s ease;
      \`;
      const content = document.createElement('div');
      content.style.cssText = 'flex: 1;';
      const title = document.createElement('div');
      title.style.cssText = 'font-weight: var(--font-medium); color: var(--color-text-primary);';
      title.innerHTML = item.title.replace(/button/gi, '<span class="suggestion-highlight" style="font-weight: var(--font-semibold); color: var(--color-primary);">$&</span>');
      const description = document.createElement('div');
      description.style.cssText = 'font-size: var(--text-sm); color: var(--color-text-tertiary);';
      description.textContent = item.description;
      content.appendChild(title);
      content.appendChild(description);
      suggestionItem.appendChild(content);
      suggestions.appendChild(suggestionItem);
    });
    container.appendChild(suggestions);
    return container;
  }
}`,...(Q=(P=w.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var R,Y,j;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; display: flex; flex-direction: column; gap: var(--space-6); max-width: 600px;';
    const sizes = [{
      className: 'aural-search-bar aural-search-bar--sm',
      placeholder: 'Small search...',
      label: 'Small'
    }, {
      className: 'aural-search-bar',
      placeholder: 'Default search...',
      label: 'Default'
    }, {
      className: 'aural-search-bar aural-search-bar--lg',
      placeholder: 'Large search...',
      label: 'Large'
    }];
    sizes.forEach(({
      className,
      placeholder,
      label
    }) => {
      const wrapper = document.createElement('div');
      const labelEl = document.createElement('div');
      labelEl.textContent = label;
      labelEl.style.cssText = 'font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: var(--tracking-wide); margin-bottom: var(--space-4);';
      wrapper.appendChild(labelEl);
      const searchBar = document.createElement('div');
      searchBar.className = className;
      const searchWrapper = document.createElement('div');
      searchWrapper.className = 'aural-search-bar__wrapper';
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'aural-search-bar__icon';
      iconWrapper.appendChild(createSearchIcon());
      searchWrapper.appendChild(iconWrapper);
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'aural-search-bar__input';
      input.placeholder = placeholder;
      input.setAttribute('aria-label', \`\${label} search input\`);
      searchWrapper.appendChild(input);
      searchBar.appendChild(searchWrapper);
      wrapper.appendChild(searchBar);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(j=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var q,O,J;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const searchBar = document.createElement('div');
      searchBar.className = args.size === 'sm' ? 'aural-search-bar aural-search-bar--sm' : args.size === 'lg' ? 'aural-search-bar aural-search-bar--lg' : 'aural-search-bar';
      const wrapper = document.createElement('div');
      wrapper.className = 'aural-search-bar__wrapper';
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'aural-search-bar__icon';
      iconWrapper.appendChild(createSearchIcon());
      wrapper.appendChild(iconWrapper);
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'aural-search-bar__input';
      input.placeholder = args.placeholder || 'Search...';
      input.value = args.value || '';
      input.disabled = args.disabled || false;
      input.setAttribute('aria-label', args.placeholder || 'Search');
      wrapper.appendChild(input);
      if (args.showClearButton && args.value) {
        const clearBtn = document.createElement('button');
        clearBtn.className = 'aural-search-bar__clear';
        clearBtn.setAttribute('aria-label', 'Clear search');
        clearBtn.type = 'button';
        clearBtn.appendChild(createClearIcon());
        wrapper.appendChild(clearBtn);
      }
      searchBar.appendChild(wrapper);
      return searchBar;
    });
  },
  args: {
    placeholder: 'Search...',
    value: '',
    disabled: false,
    showClearButton: false,
    size: 'md'
  }
}`,...(J=(O=C.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};const ae=["Default","Small","Large","WithClearButton","WithVoiceSearch","WithKeyboardShortcut","WithSearchSuggestions","AllSizes","ThemeComparison"];export{x as AllSizes,u as Default,m as Large,h as Small,C as ThemeComparison,b as WithClearButton,g as WithKeyboardShortcut,w as WithSearchSuggestions,v as WithVoiceSearch,ae as __namedExportsOrder,ee as default};
