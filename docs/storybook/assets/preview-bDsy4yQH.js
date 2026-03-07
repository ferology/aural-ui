const i={parameters:{backgrounds:{disable:!0},layout:"padded",controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},toolbar:{theme:{hidden:t=>(t==null?void 0:t.viewMode)==="docs"}},docs:{toc:!0,source:{type:"code"},canvas:{sourceState:"shown"}}},decorators:[(t,a)=>{const r=a.globals.theme||"minimal";let e=document.getElementById("theme-stylesheet");e||(e=document.createElement("link"),e.id="theme-stylesheet",e.rel="stylesheet",document.head.appendChild(e)),e.href=`${r}.css`,document.documentElement.setAttribute("data-theme",r),document.body.setAttribute("data-theme",r);let o=document.getElementById("theme-body-override");return o||(o=document.createElement("style"),o.id="theme-body-override",document.head.appendChild(o)),o.textContent=`
        body {
          background: var(--color-bg-primary) !important;
          color: var(--color-text-primary) !important;
        }
        .sbdocs,
        .sbdocs-content,
        .sbdocs-wrapper,
        .docs-story {
          background: var(--color-bg-primary) !important;
          color: var(--color-text-primary) !important;
        }
      `,t()}],globalTypes:{theme:{name:"Theme",defaultValue:"minimal",toolbar:{title:"Theme",icon:"paintbrush",items:[{value:"minimal",title:"Minimal"},{value:"light",title:"Light"},{value:"dark",title:"Dark"},{value:"neon",title:"Neon"},{value:"kinetic",title:"Kinetic"},{value:"prismatic",title:"Prismatic"},{value:"high-contrast",title:"High Contrast"},{value:"colorblind-friendly",title:"Colorblind"},{value:"warm",title:"Warm"}],dynamicTitle:!0}}}};export{i as default};
