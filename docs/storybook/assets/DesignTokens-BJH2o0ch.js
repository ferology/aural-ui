import{j as e,M as d}from"./index-JTf9FKo8.js";import{useMDXComponents as o}from"./index-BdWZuA2l.js";import"./iframe-D8mWHUuz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1c3tIrF.js";import"./index-DrFu-skq.js";function n(s){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Getting Started/Design Tokens",parameters:{toolbar:{theme:{hidden:!1}}}}),`
`,e.jsx("style",{children:`
  #storybook-docs,
  .sbdocs,
  .sbdocs-wrapper,
  .sbdocs-content {
    background: #ffffff !important;
    background-color: #ffffff !important;
  }
  .sbdocs-content * {
    color: #1a1a1a !important;
  }
`}),`
`,e.jsxs("div",{style:{fontFamily:"var(--font-sans, system-ui, -apple-system, sans-serif)",maxWidth:"1200px",margin:"0 auto",padding:"3rem 2rem",background:"#ffffff !important",backgroundColor:"#ffffff !important",color:"#1a1a1a !important",minHeight:"100vh"},children:[e.jsx(r.h1,{id:"design-tokens",children:"Design Tokens"}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Design tokens"})," are the foundation of Aural UI's themeable architecture. They're CSS custom properties (variables) that control every visual aspect of the design system."]}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"-how-tokens-work",children:"🎯 How Tokens Work"}),e.jsxs(r.p,{children:["Aural UI uses a ",e.jsx(r.strong,{children:"two-layer token system"}),":"]}),e.jsx(r.h3,{id:"layer-1-primitive-tokens-foundation",children:"Layer 1: Primitive Tokens (Foundation)"}),e.jsxs(r.p,{children:["These are the actual color values that ",e.jsx(r.strong,{children:"never change"})," across themes:"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
  /* Color scales: 50 (lightest) → 950 (darkest) */
  --primary-400: #5ebd8f;     /* Vibrant green */
  --secondary-500: #06b6d4;    /* Cyan */
  --neutral-100: #f5f5f5;      /* Light gray */
  --neutral-900: #171717;      /* Dark gray */
}
`})}),e.jsx(r.h3,{id:"layer-2-semantic-tokens-meaning",children:"Layer 2: Semantic Tokens (Meaning)"}),e.jsxs(r.p,{children:["These tokens map to ",e.jsx(r.strong,{children:"purposes"})," and ",e.jsx(r.strong,{children:"change per theme"}),":"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* Dark Theme */
:root {
  --color-bg-primary: #0f0f1a;      /* Dark background */
  --color-text-primary: #f5f5fa;     /* Light text */
}

/* Light Theme */
:root {
  --color-bg-primary: #ffffff;       /* Light background */
  --color-text-primary: #111827;     /* Dark text */
}
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Same token name, different values per theme!"})}),e.jsx(r.h3,{id:"layer-3-components-use-semantic-tokens",children:"Layer 3: Components Use Semantic Tokens"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`.btn-primary {
  background: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
}

.card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-border-subtle);
}
`})}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"-token-categories",children:"📚 Token Categories"}),e.jsx(r.h3,{id:"colors",children:"Colors"}),e.jsxs("div",{style:{background:"#f5f5f5",border:"1px solid #e0e0e0",padding:"1rem",borderRadius:"8px",marginBottom:"1rem",color:"#1a1a1a"},children:[e.jsx(r.p,{children:e.jsx(r.strong,{children:"Backgrounds:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--color-bg-primary       /* Main page background */
--color-bg-secondary     /* Section backgrounds */
--color-bg-tertiary      /* Card/panel backgrounds */
--color-bg-hover         /* Hover states */
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Text:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--color-text-primary     /* Headings, main text */
--color-text-secondary   /* Body text, labels */
--color-text-tertiary    /* Captions, hints */
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Borders:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--color-border-subtle    /* Light dividers */
--color-border-medium    /* Input borders */
--color-border-strong    /* Focused borders */
`})})]}),e.jsx(r.h3,{id:"spacing",children:"Spacing"}),e.jsxs("div",{style:{background:"#f5f5f5",border:"1px solid #e0e0e0",padding:"1rem",borderRadius:"8px",marginBottom:"1rem",color:"#1a1a1a"},children:[e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-4: 1rem;       /* 16px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-12: 3rem;      /* 48px */
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Usage:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`.card {
  padding: var(--space-6);
  margin-bottom: var(--space-4);
  gap: var(--space-3);
}
`})})]}),e.jsx(r.h3,{id:"typography",children:"Typography"}),e.jsxs("div",{style:{background:"#f5f5f5",border:"1px solid #e0e0e0",padding:"1rem",borderRadius:"8px",marginBottom:"1rem",color:"#1a1a1a"},children:[e.jsx(r.p,{children:e.jsx(r.strong,{children:"Font Sizes:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-2xl: 1.5rem;     /* 24px */
--text-4xl: 2.25rem;    /* 36px */
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Font Weights:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Font Families:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--font-sans: system-ui, -apple-system, sans-serif;
--font-mono: Monaco, "Cascadia Code", monospace;
`})})]}),e.jsx(r.h3,{id:"border-radius",children:"Border Radius"}),e.jsxs("div",{style:{background:"var(--color-bg-primary)",border:"1px solid var(--color-border-subtle)",padding:"var(--space-4)",borderRadius:"var(--radius-md)",marginBottom:"var(--space-4)",display:"flex",gap:"var(--space-3)",flexWrap:"wrap",color:"var(--color-text-primary)"},children:[e.jsx("div",{style:{padding:"var(--space-3)",background:"var(--color-primary)",color:"white",borderRadius:"var(--radius-sm)"},children:e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--radius-sm"})," (4px)"]})}),e.jsx("div",{style:{padding:"var(--space-3)",background:"var(--color-primary)",color:"white",borderRadius:"var(--radius-md)"},children:e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--radius-md"})," (12px)"]})}),e.jsx("div",{style:{padding:"var(--space-3)",background:"var(--color-primary)",color:"white",borderRadius:"var(--radius-lg)"},children:e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--radius-lg"})," (16px)"]})}),e.jsx("div",{style:{padding:"var(--space-3)",background:"var(--color-primary)",color:"white",borderRadius:"var(--radius-full)"},children:e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--radius-full"})," (pill)"]})})]}),e.jsx(r.h3,{id:"shadows",children:"Shadows"}),e.jsxs("div",{style:{background:"var(--color-bg-tertiary)",padding:"var(--space-4)",borderRadius:"var(--radius-md)",marginBottom:"var(--space-4)",display:"flex",gap:"var(--space-4)",flexWrap:"wrap"},children:[e.jsx("div",{style:{padding:"var(--space-4)",background:"var(--color-bg-primary)",boxShadow:"var(--shadow-sm)",borderRadius:"var(--radius-md)"},children:e.jsx(r.p,{children:"Small Shadow"})}),e.jsx("div",{style:{padding:"var(--space-4)",background:"var(--color-bg-primary)",boxShadow:"var(--shadow-md)",borderRadius:"var(--radius-md)"},children:e.jsx(r.p,{children:"Medium Shadow"})}),e.jsx("div",{style:{padding:"var(--space-4)",background:"var(--color-bg-primary)",boxShadow:"var(--shadow-lg)",borderRadius:"var(--radius-md)"},children:e.jsx(r.p,{children:"Large Shadow"})})]}),e.jsx(r.h3,{id:"transitions",children:"Transitions"}),e.jsxs("div",{style:{background:"#f5f5f5",border:"1px solid #e0e0e0",padding:"1rem",borderRadius:"8px",marginBottom:"1rem",color:"#1a1a1a"},children:[e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* Durations */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;

/* Easing Functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Combined Transitions */
--transition-fast: 150ms ease-in-out;
--transition-colors: color 150ms ease-in-out,
                     background-color 150ms ease-in-out;
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Usage:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`.btn {
  transition: var(--transition-all-fast);
}
`})})]}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"-what-tokens-can-control",children:"✅ What Tokens Can Control"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:"var(--space-6)"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"rgba(255, 255, 255, 0.05)",color:"#ffffff"},children:[e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",color:"#ffffff"},children:"Property Type"}),e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",color:"#ffffff"},children:"Support"}),e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",color:"#ffffff"},children:"Example"})]})}),e.jsxs("tbody",{style:{color:"#e5e5e5"},children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"Colors"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"✅ Full"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("code",{children:"--color-primary: #5ebd8f"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"Spacing"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"✅ Full"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("code",{children:"--space-4: 1rem"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"Typography"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"✅ Full"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("code",{children:"--text-lg: 1.125rem"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"Shadows"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"✅ Full"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("code",{children:"--shadow-lg: 0 20px 25px..."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"Transitions"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"✅ Full"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("code",{children:"--duration-fast: 150ms"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"Gradients"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"✅ Full"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("code",{children:"--gradient: linear-gradient(...)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"Property Names"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"❌ No"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"Can't tokenize property names"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"Selectors"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"❌ No"}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:"Can't tokenize CSS selectors"})]})]})]}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Summary:"})," Tokens control ~95% of visual styling (any CSS ",e.jsx(r.strong,{children:"value"}),"), but not CSS ",e.jsx(r.strong,{children:"structure"})," (selectors, property names, media queries)."]}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"-creating-custom-themes",children:"🎨 Creating Custom Themes"}),e.jsx(r.h3,{id:"method-1-override-individual-tokens",children:"Method 1: Override Individual Tokens"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<style>
  :root {
    /* Change primary brand color */
    --color-primary: #8B5CF6;     /* Purple */

    /* Adjust spacing scale */
    --space-4: 1.25rem;           /* Increase base spacing */

    /* Rounder corners */
    --radius-md: 1rem;            /* More rounded */
  }
</style>
`})}),e.jsx(r.h3,{id:"method-2-create-a-full-custom-theme",children:"Method 2: Create a Full Custom Theme"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* my-brand.css */
:root {
  /* Brand Colors */
  --color-primary: #8B5CF6;
  --color-secondary: #EC4899;

  /* Backgrounds (Dark Theme) */
  --color-bg-primary: #1a1a1a;
  --color-bg-secondary: #2a2a2a;
  --color-bg-tertiary: #3a3a3a;

  /* Text */
  --color-text-primary: #ffffff;
  --color-text-secondary: #a0a0a0;

  /* Borders */
  --color-border-subtle: rgba(255, 255, 255, 0.1);

  /* Typography */
  --font-sans: "Inter", system-ui, sans-serif;

  /* Spacing - Compact Scale */
  --space-4: 0.875rem;
  --space-6: 1.25rem;
}
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Load it:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<link rel="stylesheet" href="aural-ui.css">
<link rel="stylesheet" href="my-brand.css">
`})}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"-advanced-techniques",children:"🔧 Advanced Techniques"}),e.jsx(r.h3,{id:"token-composition",children:"Token Composition"}),e.jsx(r.p,{children:"Combine tokens to create new values:"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
  --duration-fast: 150ms;
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* Compose them */
  --transition-fast: var(--duration-fast) var(--ease-in-out);
}
`})}),e.jsx(r.h3,{id:"math-with-tokens",children:"Math with Tokens"}),e.jsxs(r.p,{children:["Use ",e.jsx(r.code,{children:"calc()"})," for dynamic values:"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`.double-padding {
  padding: calc(var(--space-4) * 2);  /* 2rem */
}

.half-margin {
  margin: calc(var(--space-4) / 2);   /* 0.5rem */
}
`})}),e.jsx(r.h3,{id:"fallback-values",children:"Fallback Values"}),e.jsx(r.p,{children:"Provide defaults for missing tokens:"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`.card {
  /* If --radius-md doesn't exist, use 0.75rem */
  border-radius: var(--radius-md, 0.75rem);
}
`})}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"-best-practices",children:"💡 Best Practices"}),e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Use semantic tokens in components"})," - Reference ",e.jsx(r.code,{children:"--color-bg-primary"}),", not ",e.jsx(r.code,{children:"--neutral-900"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Don't hardcode values"})," - Always use tokens for consistency"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Test in multiple themes"})," - Switch themes to ensure proper contrast"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Override sparingly"})," - Only customize what you need"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Document custom tokens"})," - Comment your customizations"]}),`
`]}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"-token-reference",children:"🎯 Token Reference"}),e.jsx(r.p,{children:"For a complete list of all available tokens, see:"}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://ferology.github.io/aural-ui/tokens.html",rel:"nofollow",children:"Demo Site Token Reference"})}),`
`,e.jsxs(r.li,{children:["Inspect any theme CSS file in ",e.jsx(r.code,{children:"/themes/"})," directory"]}),`
`]}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"-try-it-now",children:"🚀 Try It Now"}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Change the theme using the toolbar above"})," ↑ and watch how tokens update automatically across all components!"]})]})]})}function x(s={}){const{wrapper:r}={...o(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{x as default};
