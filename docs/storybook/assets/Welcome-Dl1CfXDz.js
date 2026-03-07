import{j as e,M as t}from"./index-C7ZAmKDP.js";import{useMDXComponents as s}from"./index-B27HN_ep.js";import"./iframe-B8VXdmvw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1c3tIrF.js";import"./index-DrFu-skq.js";function i(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Getting Started/Welcome",parameters:{toolbar:{theme:{hidden:!0}}}}),`
`,e.jsxs("div",{style:{fontFamily:"var(--font-sans, system-ui, -apple-system, sans-serif)",maxWidth:"900px",margin:"0 auto",padding:"3rem 2rem"},children:[e.jsx(r.h1,{id:"welcome-to-aural-ui",children:"Welcome to Aural UI"}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"A modern, accessible design system built for flexibility and customization"})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1.5rem",margin:"2rem 0"},children:[e.jsxs("div",{style:{padding:"1.5rem",background:"rgba(255, 255, 255, 0.05) !important",border:"1px solid rgba(255, 255, 255, 0.1) !important",borderRadius:"8px"},children:[e.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"🎨"}),e.jsx("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"1.125rem",color:"#ffffff !important"},children:"9 Built-in Themes"}),e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.8) !important"},children:e.jsx(r.p,{children:"From Dark & Light to Neon, Kinetic, Prismatic, and accessibility-focused themes"})})]}),e.jsxs("div",{style:{padding:"1.5rem",background:"rgba(255, 255, 255, 0.05) !important",border:"1px solid rgba(255, 255, 255, 0.1) !important",borderRadius:"8px"},children:[e.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"📦"}),e.jsx("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"1.125rem",color:"#ffffff !important"},children:"60+ Components"}),e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.8) !important"},children:e.jsx(r.p,{children:"Everything from buttons to notification centers, all production-ready"})})]}),e.jsxs("div",{style:{padding:"1.5rem",background:"rgba(255, 255, 255, 0.05) !important",border:"1px solid rgba(255, 255, 255, 0.1) !important",borderRadius:"8px"},children:[e.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"♿"}),e.jsx("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"1.125rem",color:"#ffffff !important"},children:"Accessibility First"}),e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.8) !important"},children:e.jsx(r.p,{children:"WCAG 2.1 AAA compliant with 7:1+ contrast ratios across all themes"})})]}),e.jsxs("div",{style:{padding:"1.5rem",background:"rgba(255, 255, 255, 0.05) !important",border:"1px solid rgba(255, 255, 255, 0.1) !important",borderRadius:"8px"},children:[e.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"🔧"}),e.jsx("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"1.125rem",color:"#ffffff !important"},children:"Framework Agnostic"}),e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.8) !important"},children:e.jsx(r.p,{children:"Works with React, Vue, Svelte, or vanilla JavaScript"})})]})]}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"quick-start",children:"Quick Start"}),e.jsx(r.h3,{id:"installation",children:"Installation"}),e.jsx(r.p,{children:"Add Aural UI to your project:"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`# Clone the repository
git clone https://github.com/ferology/aural-ui.git

# Navigate to your project
cd your-project

# Include CSS and theme
`})}),e.jsx(r.h3,{id:"html-setup",children:"HTML Setup"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Aural UI CSS -->
  <link rel="stylesheet" href="path/to/aural-ui.css">

  <!-- Choose a theme -->
  <link rel="stylesheet" href="path/to/dark.css">
  <!-- OR -->
  <link rel="stylesheet" href="path/to/light.css">
</head>
<body>
  <button class="btn btn-primary">Hello Aural UI</button>
</body>
</html>
`})}),e.jsx(r.h3,{id:"react-setup",children:"React Setup"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`// Import CSS at the root of your app
import './aural-ui.css';
import './dark.css'; // or your chosen theme

function App() {
  return (
    <button className="btn btn-primary">
      Hello Aural UI
    </button>
  );
}
`})}),e.jsx(r.h3,{id:"vue-setup",children:"Vue Setup"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-vue",children:`<template>
  <button class="btn btn-primary">
    Hello Aural UI
  </button>
</template>

<script>
// Import in main.js or App.vue
import './aural-ui.css';
import './dark.css'; // or your chosen theme
<\/script>
`})}),e.jsx(r.h3,{id:"svelte-setup",children:"Svelte Setup"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-svelte",children:`<script>
  // Import in App.svelte or layout
  import './aural-ui.css';
  import './dark.css'; // or your chosen theme
<\/script>

<button class="btn btn-primary">
  Hello Aural UI
</button>
`})}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"framework-specific-code-examples",children:"Framework-Specific Code Examples"}),e.jsx(r.p,{children:"Throughout this Storybook, each component includes code examples for:"}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Vanilla JavaScript / HTML"})," - Pure HTML/CSS/JS implementation"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"React"})," - Functional components with hooks"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Vue 3"})," - Composition API with ",e.jsx(r.code,{children:"<script setup>"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Svelte"})," - Reactive components"]}),`
`]}),e.jsx(r.p,{children:"Look for these sections in each component's documentation to see framework-specific implementation details."}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"browse-components",children:"Browse Components"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",margin:"2rem 0"},children:[e.jsxs("div",{style:{padding:"1rem",background:"rgba(255, 255, 255, 0.05) !important",borderRadius:"6px"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.7) !important"},children:"Forms & Inputs"}),e.jsxs("ul",{style:{margin:0,padding:"0 0 0 1.25rem",fontSize:"0.875rem",color:"#ffffff !important"},children:[e.jsx("li",{children:"Buttons"}),e.jsx("li",{children:"Inputs"}),e.jsx("li",{children:"Select"}),e.jsx("li",{children:"Checkbox"}),e.jsx("li",{children:"Radio"}),e.jsx("li",{children:"Switch"})]})]}),e.jsxs("div",{style:{padding:"1rem",background:"rgba(255, 255, 255, 0.05) !important",borderRadius:"6px"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.7) !important"},children:"Data Display"}),e.jsxs("ul",{style:{margin:0,padding:"0 0 0 1.25rem",fontSize:"0.875rem",color:"#ffffff !important"},children:[e.jsx("li",{children:"Cards"}),e.jsx("li",{children:"Tables"}),e.jsx("li",{children:"Badges"}),e.jsx("li",{children:"Chips"}),e.jsx("li",{children:"Avatars"}),e.jsx("li",{children:"Progress"})]})]}),e.jsxs("div",{style:{padding:"1rem",background:"rgba(255, 255, 255, 0.05) !important",borderRadius:"6px"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.7) !important"},children:"Navigation"}),e.jsxs("ul",{style:{margin:0,padding:"0 0 0 1.25rem",fontSize:"0.875rem",color:"#ffffff !important"},children:[e.jsx("li",{children:"Tabs"}),e.jsx("li",{children:"Breadcrumbs"}),e.jsx("li",{children:"Pagination"}),e.jsx("li",{children:"Navbar"}),e.jsx("li",{children:"Dropdown"}),e.jsx("li",{children:"Stepper"})]})]}),e.jsxs("div",{style:{padding:"1rem",background:"rgba(255, 255, 255, 0.05) !important",borderRadius:"6px"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.7) !important"},children:"Feedback"}),e.jsxs("ul",{style:{margin:0,padding:"0 0 0 1.25rem",fontSize:"0.875rem",color:"#ffffff !important"},children:[e.jsx("li",{children:"Modal"}),e.jsx("li",{children:"Dialog"}),e.jsx("li",{children:"Toast"}),e.jsx("li",{children:"Alert"}),e.jsx("li",{children:"Drawer"}),e.jsx("li",{children:"Snackbar"})]})]})]}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"resources",children:"Resources"}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"https://ferology.github.io/aural-ui/",rel:"nofollow",children:"Live Demo"})})," - Full component showcase"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"https://github.com/ferology/aural-ui",rel:"nofollow",children:"GitHub"})})," - Source code"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Documentation"})," - Complete API reference and guides"]}),`
`]}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"design-tokens",children:"Design Tokens"}),e.jsx(r.p,{children:"Aural UI is built on a powerful token system using CSS custom properties:"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* Colors */
--color-primary
--color-bg-primary
--color-text-primary
--color-border-subtle

/* Spacing */
--space-1 through --space-12

/* Typography */
--text-xs through --text-4xl
--font-sans, --font-mono

/* Borders */
--radius-sm, --radius-md, --radius-lg

/* Shadows */
--shadow-sm through --shadow-2xl
`})}),e.jsx(r.p,{children:"All themes override these tokens to provide consistent theming across components."}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"next-steps",children:"Next Steps"}),e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Browse Components"})," - Explore the component library in the sidebar"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Read Documentation"})," - Each component has detailed usage examples"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Try Examples"})," - Interactive stories show all variants and states"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Check Themes"})," - See how components look in all 9 themes"]}),`
`]}),e.jsx(r.p,{children:"Happy building! 🚀"})]})]})}function m(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{m as default};
