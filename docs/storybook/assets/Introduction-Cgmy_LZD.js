import{j as e,M as l}from"./index-C8u13IX6.js";import{useMDXComponents as r}from"./index-B-FP1PxX.js";import"./iframe-amq7yxG9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1c3tIrF.js";import"./index-DrFu-skq.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Introduction",parameters:{docs:{theme:{base:"light"}}}}),`
`,e.jsx("style",{children:`
  :root,
  #storybook-docs,
  .sbdocs,
  .sbdocs-wrapper,
  .sbdocs-content {
    --color-bg-primary: #ffffff !important;
    --color-bg-secondary: #f5f5f5 !important;
    --color-text-primary: #1a1a1a !important;
    --color-text-secondary: #4a4a4a !important;
    background: #ffffff !important;
    background-color: #ffffff !important;
  }
  .sbdocs-content * {
    color: #1a1a1a !important;
  }
`}),`
`,e.jsxs("div",{style:{background:"#ffffff !important",backgroundColor:"#ffffff !important",color:"#1a1a1a !important",minHeight:"100vh",padding:"2rem"},children:[e.jsx(n.h1,{id:"aural-ui",children:"Aural UI"}),e.jsx(n.p,{children:"A modern, accessible design system with comprehensive components, utilities, and themes."}),e.jsx(n.h2,{id:"features",children:"Features"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"🎨 7 Built-in Themes"})," - Dark, Light, Neon, Kinetic, Prismatic, Minimal, and Warm"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"♿ Accessibility First"})," - WCAG 2.1 AA compliant with proper ARIA attributes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"🎯 60+ Components"})," - Buttons, modals, forms, datepickers, and more"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"🔧 Framework Agnostic"})," - Vanilla JavaScript with React, Vue, and Svelte wrappers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"📱 Fully Responsive"})," - Mobile-first design with breakpoint utilities"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"⚡ Performance Optimized"})," - Minimal CSS and JS footprint"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"🎭 Design Tokens"})," - CSS custom properties for easy customization"]}),`
`]}),e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),e.jsx(n.h3,{id:"installation",children:"Installation"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install aural-design
`})}),e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="stylesheet" href="path/to/aural-ui.css">
<link rel="stylesheet" href="path/to/themes/dark.css">
<script src="path/to/aural-ui.js"><\/script>

<button class="btn btn-primary">Click Me</button>
`})}),e.jsx(n.h2,{id:"theming",children:"Theming"}),e.jsxs(n.p,{children:["Switch between themes by changing the ",e.jsx(n.code,{children:"data-theme"})," attribute:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html data-theme="dark">
  <body>
    Your content here
  </body>
</html>
`})}),e.jsx(n.p,{children:"Available themes:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dark"})," - Default dark theme"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"light"})," - Clean light theme"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"neon"})," - Vibrant neon aesthetic"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"kinetic"})," - Dynamic gradient theme"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"prismatic"})," - Colorful prismatic theme"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"minimal"})," - Minimalist grayscale theme"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"warm"})," - Warm, inviting color palette"]}),`
`]}),e.jsx(n.h2,{id:"component-categories",children:"Component Categories"}),e.jsx(n.h3,{id:"interactive-components",children:"Interactive Components"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Modals & Drawers"}),`
`,e.jsx(n.li,{children:"Dropdowns & Popovers"}),`
`,e.jsx(n.li,{children:"Tabs & Accordions"}),`
`,e.jsx(n.li,{children:"Tooltips"}),`
`]}),e.jsx(n.h3,{id:"form-components",children:"Form Components"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Inputs & Textareas"}),`
`,e.jsx(n.li,{children:"Select & Combobox"}),`
`,e.jsx(n.li,{children:"Checkboxes & Radio Buttons"}),`
`,e.jsx(n.li,{children:"Date Pickers & Time Pickers"}),`
`]}),e.jsx(n.h3,{id:"feedback-components",children:"Feedback Components"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Alerts & Toasts"}),`
`,e.jsx(n.li,{children:"Progress Bars & Spinners"}),`
`,e.jsx(n.li,{children:"Snackbars"}),`
`,e.jsx(n.li,{children:"Badges"}),`
`]}),e.jsx(n.h3,{id:"display-components",children:"Display Components"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Cards"}),`
`,e.jsx(n.li,{children:"Avatars"}),`
`,e.jsx(n.li,{children:"Dividers"}),`
`,e.jsx(n.li,{children:"Tables"}),`
`]}),e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),e.jsx(n.p,{children:"All components are built with accessibility in mind:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard Navigation"})," - Full keyboard support for all interactive elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Screen Reader Support"})," - Proper ARIA labels and roles"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus Management"})," - Visible focus indicators and focus trapping"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Color Contrast"})," - WCAG AA compliant color ratios"]}),`
`]}),e.jsx(n.h2,{id:"browser-support",children:"Browser Support"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Chrome 90+"}),`
`,e.jsx(n.li,{children:"Firefox 88+"}),`
`,e.jsx(n.li,{children:"Safari 14+"}),`
`,e.jsx(n.li,{children:"Edge 90+"}),`
`]}),e.jsx(n.h2,{id:"resources",children:"Resources"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/ferology/aural-ui",rel:"nofollow",children:"GitHub Repository"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://ferology.github.io/aural-ui/",rel:"nofollow",children:"Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://ferology.github.io/aural-ui/demo.html#catalog.html",rel:"nofollow",children:"Component Demos"})}),`
`]}),e.jsx(n.h2,{id:"license",children:"License"}),e.jsx(n.p,{children:"MIT License - feel free to use in personal and commercial projects."})]})]})}function x(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{x as default};
