import{c as te}from"./createThemeGrid-DWAncU4Q.js";const le={title:"Components/Forms/Combobox",tags:["autodocs"],parameters:{docs:{description:{component:`
# Combobox Component

A searchable dropdown component that combines an input field with a filterable list of options. Perfect for large datasets where users need to search and select from many items.

**Key Features:**
- Autocomplete functionality
- Keyboard navigation (Arrow keys, Enter, Escape)
- Custom value creation
- Async data loading support
- Rich options with descriptions
- WCAG AAA compliant
- Screen reader friendly

See the **Documentation** tab for complete framework examples and accessibility guidelines.
        `.trim()}}},argTypes:{placeholder:{control:"text",description:"Input placeholder text"},label:{control:"text",description:"Combobox label"},disabled:{control:"boolean",description:"Disabled state"},size:{control:"select",options:["sm","md","lg"],description:"Input size"},searchable:{control:"boolean",description:"Enable search/filter functionality"},creatable:{control:"boolean",description:"Allow custom value creation"},loading:{control:"boolean",description:"Loading state (async data)"}}};function l(e,n,t="md"){return`
    <div class="aural-combobox${t!=="md"?` aural-combobox--${t}`:""}" id="${e}">
      <div class="aural-combobox__wrapper">
        <input type="text" class="aural-combobox__input" id="${e}-input" placeholder="${n}" aria-label="${n}" role="combobox" aria-expanded="false" aria-autocomplete="list">
        <div class="aural-combobox__icons">
          <button class="aural-combobox__clear" aria-label="Clear selection">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div class="aural-combobox__spinner"></div>
          <button class="aural-combobox__arrow" aria-label="Toggle dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>
      </div>
      <div class="aural-combobox__dropdown">
        <div class="aural-combobox__options">
          <!-- Options rendered by JS -->
        </div>
      </div>
    </div>
  `}const c={render:e=>{const n=document.createElement("div");if(n.style.padding="2rem",n.style.maxWidth="400px",n.style.minHeight="350px",e.label){const a=document.createElement("label");a.className="form-label",a.textContent=e.label,a.htmlFor="combobox-default-input",n.appendChild(a)}const t=document.createElement("div");return t.innerHTML=l("combobox-default",e.placeholder,e.size),n.appendChild(t.firstElementChild),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initCombobox("combobox-default",{options:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"},{value:"orange",label:"Orange"},{value:"pineapple",label:"Pineapple"},{value:"strawberry",label:"Strawberry"}],searchable:e.searchable,onChange:a=>console.log("Selected:",a)})},100),n},args:{label:"Select a Fruit",placeholder:"Search fruits...",size:"md",searchable:!0,disabled:!1}},s={render:e=>{const n=document.createElement("div");if(n.style.padding="2rem",n.style.maxWidth="400px",n.style.minHeight="350px",e.label){const a=document.createElement("label");a.className="form-label",a.textContent=e.label,a.htmlFor="combobox-autocomplete-input",n.appendChild(a)}const t=document.createElement("div");return t.innerHTML=l("combobox-autocomplete",e.placeholder,e.size),n.appendChild(t.firstElementChild),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initCombobox("combobox-autocomplete",{options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"},{value:"cn",label:"China"}],searchable:!0,onChange:a=>console.log("Selected country:",a)})},100),n},args:{label:"Select Country",placeholder:"Type to autocomplete...",size:"md",searchable:!0}},d={render:e=>{const n=document.createElement("div");if(n.style.padding="2rem",n.style.maxWidth="400px",n.style.minHeight="400px",e.label){const o=document.createElement("label");o.className="form-label",o.textContent=e.label,o.htmlFor="combobox-custom-input",n.appendChild(o)}const t=document.createElement("div");t.innerHTML=l("combobox-custom",e.placeholder,e.size),n.appendChild(t.firstElementChild);const a=document.createElement("div");return a.style.marginTop="var(--space-2)",a.style.fontSize="var(--text-sm)",a.style.color="var(--color-text-tertiary)",a.textContent="Type a new tag name to create it",n.appendChild(a),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initCombobox("combobox-custom",{options:[{value:"design",label:"Design"},{value:"frontend",label:"Frontend"},{value:"backend",label:"Backend"},{value:"ui",label:"UI"},{value:"ux",label:"UX"}],searchable:!0,creatable:e.creatable,onCreate:o=>{console.log("Created new tag:",o)},onChange:o=>console.log("Selected tag:",o)})},100),n},args:{label:"Add Tag",placeholder:"Search or create new tag...",size:"md",creatable:!0}},m={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px",e.style.minHeight="400px";const n=document.createElement("label");n.className="form-label",n.textContent="Search Products",n.htmlFor="combobox-descriptions-input",e.appendChild(n);const t=document.createElement("div");return t.innerHTML=l("combobox-descriptions","Search products..."),e.appendChild(t.firstElementChild),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initCombobox("combobox-descriptions",{options:[{value:"prod1",label:"Wireless Headphones",description:"SKU: WH-001 | $99.99"},{value:"prod2",label:"Laptop Stand",description:"SKU: LS-045 | $49.99"},{value:"prod3",label:"USB-C Hub",description:"SKU: UH-782 | $79.99"},{value:"prod4",label:"Mechanical Keyboard",description:"SKU: MK-321 | $129.99"},{value:"prod5",label:"Webcam HD",description:"SKU: WC-445 | $89.99"}],searchable:!0,onChange:a=>console.log("Selected product:",a)})},100),e}},p={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px",e.style.minHeight="400px";const n=document.createElement("label");n.className="form-label",n.textContent="Search with Callback",n.htmlFor="combobox-search-input",e.appendChild(n);const t=document.createElement("div");t.innerHTML=l("combobox-search","Type to search..."),e.appendChild(t.firstElementChild);const a=document.createElement("div");return a.style.marginTop="var(--space-2)",a.style.fontSize="var(--text-sm)",a.style.color="var(--color-text-tertiary)",a.textContent="Search callback logs to console",e.appendChild(a),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initCombobox("combobox-search",{options:[{value:"user1",label:"John Smith",description:"john@example.com"},{value:"user2",label:"Jane Doe",description:"jane@example.com"},{value:"user3",label:"Bob Johnson",description:"bob@example.com"},{value:"user4",label:"Alice Williams",description:"alice@example.com"}],searchable:!0,onSearch:(o,r)=>{console.log("Search query:",o),console.log("Filtered results:",r)},onChange:o=>console.log("Selected:",o)})},100),e}},b={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px",e.style.minHeight="400px";const n=document.createElement("label");n.className="form-label",n.textContent="Select City",n.htmlFor="combobox-city-input",e.appendChild(n);const t=document.createElement("div");return t.innerHTML=l("combobox-city","Search cities..."),e.appendChild(t.firstElementChild),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initCombobox("combobox-city",{options:[{value:"nyc",label:"New York City",description:"New York, United States"},{value:"london",label:"London",description:"England, United Kingdom"},{value:"tokyo",label:"Tokyo",description:"Kanto, Japan"},{value:"paris",label:"Paris",description:"Île-de-France, France"},{value:"sydney",label:"Sydney",description:"New South Wales, Australia"},{value:"berlin",label:"Berlin",description:"Berlin, Germany"},{value:"toronto",label:"Toronto",description:"Ontario, Canada"}],searchable:!0,onChange:a=>console.log("Selected city:",a)})},100),e}},u={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px",e.style.minHeight="250px";const n=document.createElement("label");n.className="form-label",n.textContent="Disabled Combobox",n.htmlFor="combobox-disabled-input",e.appendChild(n);const t=document.createElement("div");return t.innerHTML=l("combobox-disabled","Cannot interact..."),e.appendChild(t.firstElementChild),setTimeout(()=>{const a=e.querySelector(".aural-combobox__input");a&&(a.disabled=!0)},0),e}},h={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px",e.style.minHeight="350px";const n=document.createElement("label");n.className="form-label",n.textContent="Pre-filled Selection",n.htmlFor="combobox-prefilled-input",e.appendChild(n);const t=document.createElement("div");return t.innerHTML=l("combobox-prefilled","Search fruits..."),e.appendChild(t.firstElementChild),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initCombobox("combobox-prefilled",{options:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"mango",label:"Mango"}],searchable:!0,defaultValue:"banana",onChange:a=>console.log("Selected:",a)})},100),e}},x={render:e=>{const n=document.createElement("div");n.style.padding="2rem",n.style.maxWidth="400px",n.style.minHeight="400px";const t=document.createElement("label");t.className="form-label",t.textContent="Async Data Loading",t.htmlFor="combobox-async-input",n.appendChild(t);const a=document.createElement("div");a.innerHTML=l("combobox-async","Search users..."),n.appendChild(a.firstElementChild);const o=document.createElement("div");return o.style.marginTop="var(--space-2)",o.style.fontSize="var(--text-sm)",o.style.color="var(--color-text-tertiary)",o.textContent="Simulates async data loading with spinner",n.appendChild(o),setTimeout(()=>{if(typeof window.Aural<"u"){const r=document.getElementById("combobox-async"),i=r==null?void 0:r.querySelector(".aural-combobox__spinner");e.loading&&i&&(i.style.display="block"),setTimeout(()=>{i&&(i.style.display="none"),window.Aural.initCombobox("combobox-async",{options:[{value:"user1",label:"John Smith",description:"john@example.com"},{value:"user2",label:"Jane Doe",description:"jane@example.com"},{value:"user3",label:"Bob Johnson",description:"bob@example.com"},{value:"user4",label:"Alice Williams",description:"alice@example.com"}],searchable:!0,onChange:ae=>console.log("Selected user:",ae)})},e.loading?2e3:0)}},100),n},args:{loading:!0}},y={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="350px",e.style.minHeight="300px";const n=document.createElement("label");n.className="form-label",n.textContent="Small Size",n.htmlFor="combobox-small-input",e.appendChild(n);const t=document.createElement("div");return t.innerHTML=l("combobox-small","Small combobox...","sm"),e.appendChild(t.firstElementChild),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initCombobox("combobox-small",{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],searchable:!0,onChange:a=>console.log("Selected:",a)})},100),e}},g={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="500px",e.style.minHeight="350px";const n=document.createElement("label");n.className="form-label",n.textContent="Large Size",n.htmlFor="combobox-large-input",e.appendChild(n);const t=document.createElement("div");return t.innerHTML=l("combobox-large","Large combobox...","lg"),e.appendChild(t.firstElementChild),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initCombobox("combobox-large",{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],searchable:!0,onChange:a=>console.log("Selected:",a)})},100),e}},C={render:e=>te(n=>{const t=document.createElement("div"),a=`combobox-theme-${n}`;return t.innerHTML=l(a,e.placeholder,e.size),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initCombobox(a,{options:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"grape",label:"Grape"}],searchable:!0,onChange:o=>console.log(`${n} selected:`,o)})},100),t.firstElementChild}),args:{placeholder:"Search fruits...",size:"md"}};var v,w,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '350px';
    if (args.label) {
      const label = document.createElement('label');
      label.className = 'form-label';
      label.textContent = args.label;
      label.htmlFor = 'combobox-default-input';
      container.appendChild(label);
    }
    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-default', args.placeholder, args.size);
    container.appendChild(wrapper.firstElementChild as HTMLElement);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-default', {
          options: [{
            value: 'apple',
            label: 'Apple'
          }, {
            value: 'banana',
            label: 'Banana'
          }, {
            value: 'cherry',
            label: 'Cherry'
          }, {
            value: 'grape',
            label: 'Grape'
          }, {
            value: 'mango',
            label: 'Mango'
          }, {
            value: 'orange',
            label: 'Orange'
          }, {
            value: 'pineapple',
            label: 'Pineapple'
          }, {
            value: 'strawberry',
            label: 'Strawberry'
          }],
          searchable: args.searchable,
          onChange: selected => console.log('Selected:', selected)
        });
      }
    }, 100);
    return container;
  },
  args: {
    label: 'Select a Fruit',
    placeholder: 'Search fruits...',
    size: 'md',
    searchable: true,
    disabled: false
  }
}`,...(f=(w=c.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,T,E;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '350px';
    if (args.label) {
      const label = document.createElement('label');
      label.className = 'form-label';
      label.textContent = args.label;
      label.htmlFor = 'combobox-autocomplete-input';
      container.appendChild(label);
    }
    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-autocomplete', args.placeholder, args.size);
    container.appendChild(wrapper.firstElementChild as HTMLElement);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-autocomplete', {
          options: [{
            value: 'us',
            label: 'United States'
          }, {
            value: 'uk',
            label: 'United Kingdom'
          }, {
            value: 'ca',
            label: 'Canada'
          }, {
            value: 'au',
            label: 'Australia'
          }, {
            value: 'de',
            label: 'Germany'
          }, {
            value: 'fr',
            label: 'France'
          }, {
            value: 'jp',
            label: 'Japan'
          }, {
            value: 'cn',
            label: 'China'
          }],
          searchable: true,
          onChange: selected => console.log('Selected country:', selected)
        });
      }
    }, 100);
    return container;
  },
  args: {
    label: 'Select Country',
    placeholder: 'Type to autocomplete...',
    size: 'md',
    searchable: true
  }
}`,...(E=(T=s.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var H,A,L;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '400px';
    if (args.label) {
      const label = document.createElement('label');
      label.className = 'form-label';
      label.textContent = args.label;
      label.htmlFor = 'combobox-custom-input';
      container.appendChild(label);
    }
    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-custom', args.placeholder, args.size);
    container.appendChild(wrapper.firstElementChild as HTMLElement);
    const helperText = document.createElement('div');
    helperText.style.marginTop = 'var(--space-2)';
    helperText.style.fontSize = 'var(--text-sm)';
    helperText.style.color = 'var(--color-text-tertiary)';
    helperText.textContent = 'Type a new tag name to create it';
    container.appendChild(helperText);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-custom', {
          options: [{
            value: 'design',
            label: 'Design'
          }, {
            value: 'frontend',
            label: 'Frontend'
          }, {
            value: 'backend',
            label: 'Backend'
          }, {
            value: 'ui',
            label: 'UI'
          }, {
            value: 'ux',
            label: 'UX'
          }],
          searchable: true,
          creatable: args.creatable,
          onCreate: value => {
            console.log('Created new tag:', value);
          },
          onChange: selected => console.log('Selected tag:', selected)
        });
      }
    }, 100);
    return container;
  },
  args: {
    label: 'Add Tag',
    placeholder: 'Search or create new tag...',
    size: 'md',
    creatable: true
  }
}`,...(L=(A=d.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var M,W,F;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '400px';
    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Search Products';
    label.htmlFor = 'combobox-descriptions-input';
    container.appendChild(label);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-descriptions', 'Search products...');
    container.appendChild(wrapper.firstElementChild as HTMLElement);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-descriptions', {
          options: [{
            value: 'prod1',
            label: 'Wireless Headphones',
            description: 'SKU: WH-001 | $99.99'
          }, {
            value: 'prod2',
            label: 'Laptop Stand',
            description: 'SKU: LS-045 | $49.99'
          }, {
            value: 'prod3',
            label: 'USB-C Hub',
            description: 'SKU: UH-782 | $79.99'
          }, {
            value: 'prod4',
            label: 'Mechanical Keyboard',
            description: 'SKU: MK-321 | $129.99'
          }, {
            value: 'prod5',
            label: 'Webcam HD',
            description: 'SKU: WC-445 | $89.99'
          }],
          searchable: true,
          onChange: selected => console.log('Selected product:', selected)
        });
      }
    }, 100);
    return container;
  }
}`,...(F=(W=m.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var k,z,N;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '400px';
    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Search with Callback';
    label.htmlFor = 'combobox-search-input';
    container.appendChild(label);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-search', 'Type to search...');
    container.appendChild(wrapper.firstElementChild as HTMLElement);
    const helperText = document.createElement('div');
    helperText.style.marginTop = 'var(--space-2)';
    helperText.style.fontSize = 'var(--text-sm)';
    helperText.style.color = 'var(--color-text-tertiary)';
    helperText.textContent = 'Search callback logs to console';
    container.appendChild(helperText);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-search', {
          options: [{
            value: 'user1',
            label: 'John Smith',
            description: 'john@example.com'
          }, {
            value: 'user2',
            label: 'Jane Doe',
            description: 'jane@example.com'
          }, {
            value: 'user3',
            label: 'Bob Johnson',
            description: 'bob@example.com'
          }, {
            value: 'user4',
            label: 'Alice Williams',
            description: 'alice@example.com'
          }],
          searchable: true,
          onSearch: (query, filteredResults) => {
            console.log('Search query:', query);
            console.log('Filtered results:', filteredResults);
          },
          onChange: selected => console.log('Selected:', selected)
        });
      }
    }, 100);
    return container;
  }
}`,...(N=(z=p.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var U,_,B;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '400px';
    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Select City';
    label.htmlFor = 'combobox-city-input';
    container.appendChild(label);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-city', 'Search cities...');
    container.appendChild(wrapper.firstElementChild as HTMLElement);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-city', {
          options: [{
            value: 'nyc',
            label: 'New York City',
            description: 'New York, United States'
          }, {
            value: 'london',
            label: 'London',
            description: 'England, United Kingdom'
          }, {
            value: 'tokyo',
            label: 'Tokyo',
            description: 'Kanto, Japan'
          }, {
            value: 'paris',
            label: 'Paris',
            description: 'Île-de-France, France'
          }, {
            value: 'sydney',
            label: 'Sydney',
            description: 'New South Wales, Australia'
          }, {
            value: 'berlin',
            label: 'Berlin',
            description: 'Berlin, Germany'
          }, {
            value: 'toronto',
            label: 'Toronto',
            description: 'Ontario, Canada'
          }],
          searchable: true,
          onChange: selected => console.log('Selected city:', selected)
        });
      }
    }, 100);
    return container;
  }
}`,...(B=(_=b.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var K,D,$;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '250px';
    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Disabled Combobox';
    label.htmlFor = 'combobox-disabled-input';
    container.appendChild(label);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-disabled', 'Cannot interact...');
    container.appendChild(wrapper.firstElementChild as HTMLElement);

    // Set disabled state
    setTimeout(() => {
      const input = container.querySelector('.aural-combobox__input') as HTMLInputElement;
      if (input) {
        input.disabled = true;
      }
    }, 0);
    return container;
  }
}`,...($=(D=u.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var O,J,j;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '350px';
    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Pre-filled Selection';
    label.htmlFor = 'combobox-prefilled-input';
    container.appendChild(label);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-prefilled', 'Search fruits...');
    container.appendChild(wrapper.firstElementChild as HTMLElement);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-prefilled', {
          options: [{
            value: 'apple',
            label: 'Apple'
          }, {
            value: 'banana',
            label: 'Banana'
          }, {
            value: 'cherry',
            label: 'Cherry'
          }, {
            value: 'mango',
            label: 'Mango'
          }],
          searchable: true,
          defaultValue: 'banana',
          onChange: selected => console.log('Selected:', selected)
        });
      }
    }, 100);
    return container;
  }
}`,...(j=(J=h.parameters)==null?void 0:J.docs)==null?void 0:j.source}}};var G,P,q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '400px';
    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Async Data Loading';
    label.htmlFor = 'combobox-async-input';
    container.appendChild(label);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-async', 'Search users...');
    container.appendChild(wrapper.firstElementChild as HTMLElement);
    const helperText = document.createElement('div');
    helperText.style.marginTop = 'var(--space-2)';
    helperText.style.fontSize = 'var(--text-sm)';
    helperText.style.color = 'var(--color-text-tertiary)';
    helperText.textContent = 'Simulates async data loading with spinner';
    container.appendChild(helperText);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        const combobox = document.getElementById('combobox-async');
        const spinner = combobox?.querySelector('.aural-combobox__spinner');

        // Show loading spinner
        if (args.loading && spinner) {
          (spinner as HTMLElement).style.display = 'block';
        }

        // Simulate async data load
        setTimeout(() => {
          if (spinner) {
            (spinner as HTMLElement).style.display = 'none';
          }
          window.Aural.initCombobox('combobox-async', {
            options: [{
              value: 'user1',
              label: 'John Smith',
              description: 'john@example.com'
            }, {
              value: 'user2',
              label: 'Jane Doe',
              description: 'jane@example.com'
            }, {
              value: 'user3',
              label: 'Bob Johnson',
              description: 'bob@example.com'
            }, {
              value: 'user4',
              label: 'Alice Williams',
              description: 'alice@example.com'
            }],
            searchable: true,
            onChange: selected => console.log('Selected user:', selected)
          });
        }, args.loading ? 2000 : 0);
      }
    }, 100);
    return container;
  },
  args: {
    loading: true
  }
}`,...(q=(P=x.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var I,V,Y;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '350px';
    container.style.minHeight = '300px';
    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Small Size';
    label.htmlFor = 'combobox-small-input';
    container.appendChild(label);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-small', 'Small combobox...', 'sm');
    container.appendChild(wrapper.firstElementChild as HTMLElement);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-small', {
          options: [{
            value: '1',
            label: 'Option 1'
          }, {
            value: '2',
            label: 'Option 2'
          }, {
            value: '3',
            label: 'Option 3'
          }],
          searchable: true,
          onChange: selected => console.log('Selected:', selected)
        });
      }
    }, 100);
    return container;
  }
}`,...(Y=(V=y.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var R,X,Q;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '500px';
    container.style.minHeight = '350px';
    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = 'Large Size';
    label.htmlFor = 'combobox-large-input';
    container.appendChild(label);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = createComboboxHTML('combobox-large', 'Large combobox...', 'lg');
    container.appendChild(wrapper.firstElementChild as HTMLElement);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initCombobox('combobox-large', {
          options: [{
            value: '1',
            label: 'Option 1'
          }, {
            value: '2',
            label: 'Option 2'
          }, {
            value: '3',
            label: 'Option 3'
          }],
          searchable: true,
          onChange: selected => console.log('Selected:', selected)
        });
      }
    }, 100);
    return container;
  }
}`,...(Q=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Z,ee,ne;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(theme => {
      const wrapper = document.createElement('div');
      const id = \`combobox-theme-\${theme}\`;
      wrapper.innerHTML = createComboboxHTML(id, args.placeholder, args.size);
      setTimeout(() => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.initCombobox(id, {
            options: [{
              value: 'apple',
              label: 'Apple'
            }, {
              value: 'banana',
              label: 'Banana'
            }, {
              value: 'cherry',
              label: 'Cherry'
            }, {
              value: 'grape',
              label: 'Grape'
            }],
            searchable: true,
            onChange: selected => console.log(\`\${theme} selected:\`, selected)
          });
        }
      }, 100);
      return wrapper.firstElementChild as HTMLElement;
    });
  },
  args: {
    placeholder: 'Search fruits...',
    size: 'md'
  }
}`,...(ne=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const re=["Default","WithAutocomplete","AllowCustomValue","WithDescriptions","SearchCallback","CityLocation","Disabled","PreFilled","AsyncLoading","Small","Large","ThemeComparison"];export{d as AllowCustomValue,x as AsyncLoading,b as CityLocation,c as Default,u as Disabled,g as Large,h as PreFilled,p as SearchCallback,y as Small,C as ThemeComparison,s as WithAutocomplete,m as WithDescriptions,re as __namedExportsOrder,le as default};
