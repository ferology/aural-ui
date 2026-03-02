import{c as ae}from"./createThemeGrid-DWAncU4Q.js";const re={title:"Components/Forms/Multi-Select",tags:["autodocs"],parameters:{docs:{description:{component:`
# Multi-Select Component

A flexible multi-select component that allows users to select multiple items from a list with visual tags, search functionality, and keyboard navigation.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-multi-select" id="my-multi-select">
  <div class="aural-multi-select__trigger" tabindex="0" role="button" aria-haspopup="listbox">
    <div class="aural-multi-select__tags"></div>
    <span class="aural-multi-select__placeholder">Select items...</span>
    <span class="aural-multi-select__clear" aria-label="Clear all" role="button" tabindex="0">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </span>
    <span class="aural-multi-select__arrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </span>
  </div>
  <div class="aural-multi-select__dropdown">
    <div class="aural-multi-select__search">
      <input type="text" class="aural-multi-select__search-input" placeholder="Search..." aria-label="Search options">
    </div>
    <div class="aural-multi-select__options">
      <button class="aural-multi-select__option" data-value="option1">
        <span class="aural-multi-select__checkbox">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span class="aural-multi-select__option-label">Option 1</span>
      </button>
    </div>
  </div>
</div>

<script>
Aural.initMultiSelect('my-multi-select', {
  searchable: true,
  onChange: (values) => console.log('Selected:', values)
});
<\/script>
\`\`\`

**React:**
\`\`\`jsx
const [selected, setSelected] = useState([]);
<MultiSelect options={options} value={selected} onChange={setSelected} />
\`\`\`

**Vue:**
\`\`\`vue
<MultiSelect v-model="selected" :options="options" />
\`\`\`
        `.trim()}}},argTypes:{options:{control:"object",description:"Array of option objects with value and label properties"},selected:{control:"object",description:"Array of selected values"},placeholder:{control:"text",description:"Placeholder text when no items selected"},disabled:{control:"boolean",description:"Disabled state"},searchable:{control:"boolean",description:"Enable search functionality"},maxHeight:{control:"text",description:"Maximum height of dropdown (CSS value)"},size:{control:"select",options:["sm","md","lg"],description:"Component size"}}};function p(e,v,l={}){const t=document.createElement("div");t.style.padding="2rem",t.style.maxWidth="500px",t.style.minHeight="400px";const s=document.createElement("div");s.id=e,s.className="aural-multi-select",l.disabled&&s.classList.add("aural-multi-select--disabled");const a=document.createElement("div");a.className="aural-multi-select__trigger",a.setAttribute("tabindex",l.disabled?"-1":"0"),a.setAttribute("role","button"),a.setAttribute("aria-haspopup","listbox");const c=document.createElement("div");c.className="aural-multi-select__tags";const d=document.createElement("span");d.className="aural-multi-select__placeholder",d.textContent=l.placeholder||"Select items...";const u=document.createElement("span");u.className="aural-multi-select__clear",u.setAttribute("aria-label","Clear all"),u.setAttribute("role","button"),u.setAttribute("tabindex","0"),u.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `;const m=document.createElement("span");m.className="aural-multi-select__arrow",m.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  `,a.appendChild(c),a.appendChild(d),a.appendChild(u),a.appendChild(m);const r=document.createElement("div");if(r.className="aural-multi-select__dropdown",l.maxHeight&&(r.style.maxHeight=l.maxHeight),l.searchable){const n=document.createElement("div");n.className="aural-multi-select__search";const i=document.createElement("input");i.type="text",i.className="aural-multi-select__search-input",i.placeholder="Search...",i.setAttribute("aria-label","Search options"),n.appendChild(i),r.appendChild(n)}const h=document.createElement("div");h.className="aural-multi-select__options";const E=v.reduce((n,i)=>{const o=i.group||"__default__";return n[o]||(n[o]=[]),n[o].push(i),n},{});return Object.keys(E).forEach(n=>{const i=E[n];if(n!=="__default__"){const o=document.createElement("div");o.className="aural-multi-select__group-label",o.textContent=n,h.appendChild(o)}i.forEach(o=>{var B;const b=document.createElement("button");b.className="aural-multi-select__option",b.setAttribute("data-value",o.value),b.type="button";const M=document.createElement("span");M.className="aural-multi-select__checkbox",M.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      `;const A=document.createElement("span");A.className="aural-multi-select__option-label",A.textContent=o.label,b.appendChild(M),b.appendChild(A),h.appendChild(b),(B=l.selected)!=null&&B.includes(o.value)&&b.classList.add("aural-multi-select__option--selected")})}),r.appendChild(h),s.appendChild(a),s.appendChild(r),t.appendChild(s),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initMultiSelect&&window.Aural.initMultiSelect(e,{searchable:l.searchable,onChange:n=>console.log("Selected:",n)})},100),t}const g={render:()=>p("multi-select-default",[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}],{placeholder:"Select items...",searchable:!1})},y={render:()=>p("multi-select-search",[{value:"javascript",label:"JavaScript"},{value:"typescript",label:"TypeScript"},{value:"python",label:"Python"},{value:"rust",label:"Rust"},{value:"go",label:"Go"},{value:"java",label:"Java"},{value:"csharp",label:"C#"},{value:"php",label:"PHP"},{value:"ruby",label:"Ruby"},{value:"swift",label:"Swift"}],{placeholder:"Search and select languages...",searchable:!0})},_={render:()=>{const e=Array.from({length:50},(v,l)=>({value:`item${l+1}`,label:`Item ${l+1}`}));return p("multi-select-many",e,{placeholder:"Select from 50 options...",searchable:!0,maxHeight:"300px"})}},S={render:()=>p("multi-select-preselected",[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],{placeholder:"Select frameworks...",searchable:!0,selected:["react","vue"]})},x={render:()=>p("multi-select-groups",[{value:"orange",label:"Orange",group:"Citrus"},{value:"lemon",label:"Lemon",group:"Citrus"},{value:"lime",label:"Lime",group:"Citrus"},{value:"strawberry",label:"Strawberry",group:"Berries"},{value:"blueberry",label:"Blueberry",group:"Berries"},{value:"raspberry",label:"Raspberry",group:"Berries"},{value:"mango",label:"Mango",group:"Tropical"},{value:"pineapple",label:"Pineapple",group:"Tropical"},{value:"banana",label:"Banana",group:"Tropical"}],{placeholder:"Select fruits...",searchable:!0})},C={render:()=>p("multi-select-skills",[{value:"html",label:"HTML"},{value:"css",label:"CSS"},{value:"js",label:"JavaScript"},{value:"ts",label:"TypeScript"},{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"node",label:"Node.js"},{value:"sql",label:"SQL"},{value:"git",label:"Git"},{value:"docker",label:"Docker"}],{placeholder:"Select your skills...",searchable:!0})},w={render:()=>p("multi-select-team",[{value:"sarah",label:"Sarah Johnson"},{value:"mike",label:"Mike Chen"},{value:"emily",label:"Emily Rodriguez"},{value:"alex",label:"Alex Kumar"},{value:"david",label:"David Brown"},{value:"lisa",label:"Lisa Wang"}],{placeholder:"Assign to team members...",searchable:!0})},f={render:()=>p("multi-select-disabled",[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],{placeholder:"Disabled multi-select",disabled:!0,selected:["option1","option2"]})},k={render:e=>ae(()=>{const v=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],l=document.createElement("div");l.id=`multi-select-theme-${Math.random().toString(36).substr(2,9)}`,l.className="aural-multi-select";const t=document.createElement("div");t.className="aural-multi-select__trigger",t.setAttribute("tabindex","0"),t.setAttribute("role","button"),t.setAttribute("aria-haspopup","listbox");const s=document.createElement("div");s.className="aural-multi-select__tags",e.selected&&e.selected.length>0&&e.selected.forEach(u=>{const m=v.find(r=>r.value===u);if(m){const r=document.createElement("span");r.className="aural-multi-select__tag",r.innerHTML=`
              ${m.label}
              <button class="aural-multi-select__tag-remove" aria-label="Remove ${m.label}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            `,s.appendChild(r)}});const a=document.createElement("span");a.className="aural-multi-select__placeholder",a.textContent=e.placeholder||"Select...",e.selected&&e.selected.length>0&&(a.style.display="none");const c=document.createElement("span");c.className="aural-multi-select__clear",c.setAttribute("aria-label","Clear all"),c.setAttribute("role","button"),c.setAttribute("tabindex","0"),c.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      `;const d=document.createElement("span");return d.className="aural-multi-select__arrow",d.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      `,t.appendChild(s),t.appendChild(a),t.appendChild(c),t.appendChild(d),l.appendChild(t),l}),args:{placeholder:"Select items...",selected:["option1","option2"]},argTypes:{placeholder:{control:"text",description:"Placeholder text"},selected:{control:"object",description:"Array of selected values"}}};var O,T,N;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }, {
      value: 'option4',
      label: 'Option 4'
    }, {
      value: 'option5',
      label: 'Option 5'
    }];
    return createMultiSelect('multi-select-default', options, {
      placeholder: 'Select items...',
      searchable: false
    });
  }
}`,...(N=(T=g.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var L,H,j;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'javascript',
      label: 'JavaScript'
    }, {
      value: 'typescript',
      label: 'TypeScript'
    }, {
      value: 'python',
      label: 'Python'
    }, {
      value: 'rust',
      label: 'Rust'
    }, {
      value: 'go',
      label: 'Go'
    }, {
      value: 'java',
      label: 'Java'
    }, {
      value: 'csharp',
      label: 'C#'
    }, {
      value: 'php',
      label: 'PHP'
    }, {
      value: 'ruby',
      label: 'Ruby'
    }, {
      value: 'swift',
      label: 'Swift'
    }];
    return createMultiSelect('multi-select-search', options, {
      placeholder: 'Search and select languages...',
      searchable: true
    });
  }
}`,...(j=(H=y.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var R,P,D;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const options = Array.from({
      length: 50
    }, (_, i) => ({
      value: \`item\${i + 1}\`,
      label: \`Item \${i + 1}\`
    }));
    return createMultiSelect('multi-select-many', options, {
      placeholder: 'Select from 50 options...',
      searchable: true,
      maxHeight: '300px'
    });
  }
}`,...(D=(P=_.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var $,G,J;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'react',
      label: 'React'
    }, {
      value: 'vue',
      label: 'Vue'
    }, {
      value: 'angular',
      label: 'Angular'
    }, {
      value: 'svelte',
      label: 'Svelte'
    }, {
      value: 'solid',
      label: 'Solid'
    }];
    return createMultiSelect('multi-select-preselected', options, {
      placeholder: 'Select frameworks...',
      searchable: true,
      selected: ['react', 'vue']
    });
  }
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var W,V,z;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'orange',
      label: 'Orange',
      group: 'Citrus'
    }, {
      value: 'lemon',
      label: 'Lemon',
      group: 'Citrus'
    }, {
      value: 'lime',
      label: 'Lime',
      group: 'Citrus'
    }, {
      value: 'strawberry',
      label: 'Strawberry',
      group: 'Berries'
    }, {
      value: 'blueberry',
      label: 'Blueberry',
      group: 'Berries'
    }, {
      value: 'raspberry',
      label: 'Raspberry',
      group: 'Berries'
    }, {
      value: 'mango',
      label: 'Mango',
      group: 'Tropical'
    }, {
      value: 'pineapple',
      label: 'Pineapple',
      group: 'Tropical'
    }, {
      value: 'banana',
      label: 'Banana',
      group: 'Tropical'
    }];
    return createMultiSelect('multi-select-groups', options, {
      placeholder: 'Select fruits...',
      searchable: true
    });
  }
}`,...(z=(V=x.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var I,q,F;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'html',
      label: 'HTML'
    }, {
      value: 'css',
      label: 'CSS'
    }, {
      value: 'js',
      label: 'JavaScript'
    }, {
      value: 'ts',
      label: 'TypeScript'
    }, {
      value: 'react',
      label: 'React'
    }, {
      value: 'vue',
      label: 'Vue'
    }, {
      value: 'node',
      label: 'Node.js'
    }, {
      value: 'sql',
      label: 'SQL'
    }, {
      value: 'git',
      label: 'Git'
    }, {
      value: 'docker',
      label: 'Docker'
    }];
    return createMultiSelect('multi-select-skills', options, {
      placeholder: 'Select your skills...',
      searchable: true
    });
  }
}`,...(F=(q=C.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var K,Q,U;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'sarah',
      label: 'Sarah Johnson'
    }, {
      value: 'mike',
      label: 'Mike Chen'
    }, {
      value: 'emily',
      label: 'Emily Rodriguez'
    }, {
      value: 'alex',
      label: 'Alex Kumar'
    }, {
      value: 'david',
      label: 'David Brown'
    }, {
      value: 'lisa',
      label: 'Lisa Wang'
    }];
    return createMultiSelect('multi-select-team', options, {
      placeholder: 'Assign to team members...',
      searchable: true
    });
  }
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }];
    return createMultiSelect('multi-select-disabled', options, {
      placeholder: 'Disabled multi-select',
      disabled: true,
      selected: ['option1', 'option2']
    });
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,le,te;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const options = [{
        value: 'option1',
        label: 'Option 1'
      }, {
        value: 'option2',
        label: 'Option 2'
      }, {
        value: 'option3',
        label: 'Option 3'
      }, {
        value: 'option4',
        label: 'Option 4'
      }];
      const wrapper = document.createElement('div');
      wrapper.id = \`multi-select-theme-\${Math.random().toString(36).substr(2, 9)}\`;
      wrapper.className = 'aural-multi-select';

      // Trigger
      const trigger = document.createElement('div');
      trigger.className = 'aural-multi-select__trigger';
      trigger.setAttribute('tabindex', '0');
      trigger.setAttribute('role', 'button');
      trigger.setAttribute('aria-haspopup', 'listbox');
      const tagsContainer = document.createElement('div');
      tagsContainer.className = 'aural-multi-select__tags';

      // Add pre-selected tags
      if (args.selected && args.selected.length > 0) {
        args.selected.forEach((value: string) => {
          const option = options.find(opt => opt.value === value);
          if (option) {
            const tag = document.createElement('span');
            tag.className = 'aural-multi-select__tag';
            tag.innerHTML = \`
              \${option.label}
              <button class="aural-multi-select__tag-remove" aria-label="Remove \${option.label}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            \`;
            tagsContainer.appendChild(tag);
          }
        });
      }
      const placeholder = document.createElement('span');
      placeholder.className = 'aural-multi-select__placeholder';
      placeholder.textContent = args.placeholder || 'Select...';
      if (args.selected && args.selected.length > 0) {
        placeholder.style.display = 'none';
      }
      const clearBtn = document.createElement('span');
      clearBtn.className = 'aural-multi-select__clear';
      clearBtn.setAttribute('aria-label', 'Clear all');
      clearBtn.setAttribute('role', 'button');
      clearBtn.setAttribute('tabindex', '0');
      clearBtn.innerHTML = \`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      \`;
      const arrow = document.createElement('span');
      arrow.className = 'aural-multi-select__arrow';
      arrow.innerHTML = \`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      \`;
      trigger.appendChild(tagsContainer);
      trigger.appendChild(placeholder);
      trigger.appendChild(clearBtn);
      trigger.appendChild(arrow);
      wrapper.appendChild(trigger);
      return wrapper;
    });
  },
  args: {
    placeholder: 'Select items...',
    selected: ['option1', 'option2']
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    selected: {
      control: 'object',
      description: 'Array of selected values'
    }
  }
}`,...(te=(le=k.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};const oe=["Default","WithSearch","ManyOptions","PreSelected","WithGroups","SkillsSelector","TeamMemberSelector","Disabled","ThemeComparison"];export{g as Default,f as Disabled,_ as ManyOptions,S as PreSelected,C as SkillsSelector,w as TeamMemberSelector,k as ThemeComparison,x as WithGroups,y as WithSearch,oe as __namedExportsOrder,re as default};
