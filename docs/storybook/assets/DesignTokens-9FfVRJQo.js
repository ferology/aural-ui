import{j as r,M as n}from"./index-Ca2L7Vqm.js";import{useMDXComponents as a}from"./index-BHgHO5-H.js";import"./iframe-BCYKPgAz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1c3tIrF.js";import"./index-DrFu-skq.js";function o(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{title:"Getting Started/Design Tokens",parameters:{toolbar:{theme:{hidden:!1}}}}),`
`,r.jsxs("div",{style:{fontFamily:"var(--font-sans, system-ui, -apple-system, sans-serif)",maxWidth:"1200px",margin:"0 auto",padding:"3rem 2rem"},children:[r.jsx(e.h1,{id:"design-tokens",children:"Design Tokens"}),r.jsxs(e.p,{children:[r.jsx(e.strong,{children:"Design tokens"})," are the foundation of Aural UI's themeable architecture. They're CSS custom properties (variables) that control every visual aspect of the design system."]}),r.jsx(e.hr,{}),r.jsx(e.h2,{id:"-how-tokens-work",children:"🎯 How Tokens Work"}),r.jsxs(e.p,{children:["Aural UI uses a ",r.jsx(e.strong,{children:"two-layer token system"}),":"]}),r.jsx(e.h3,{id:"layer-1-primitive-tokens-foundation",children:"Layer 1: Primitive Tokens (Foundation)"}),r.jsxs(e.p,{children:["These are the actual color values that ",r.jsx(e.strong,{children:"never change"})," across themes:"]}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`:root {
  /* Color scales: 50 (lightest) → 950 (darkest) */
  --primary-400: #5ebd8f;     /* Vibrant green */
  --secondary-500: #06b6d4;    /* Cyan */
  --neutral-100: #f5f5f5;      /* Light gray */
  --neutral-900: #171717;      /* Dark gray */
}
`})}),r.jsx(e.h3,{id:"layer-2-semantic-tokens-meaning",children:"Layer 2: Semantic Tokens (Meaning)"}),r.jsxs(e.p,{children:["These tokens map to ",r.jsx(e.strong,{children:"purposes"})," and ",r.jsx(e.strong,{children:"change per theme"}),":"]}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`/* Dark Theme */
:root {
  --color-bg-primary: #0f0f1a;      /* Dark background */
  --color-text-primary: #f5f5fa;     /* Light text */
}

/* Light Theme */
:root {
  --color-bg-primary: #ffffff;       /* Light background */
  --color-text-primary: #111827;     /* Dark text */
}
`})}),r.jsx(e.p,{children:r.jsx(e.strong,{children:"Same token name, different values per theme!"})}),r.jsx(e.h3,{id:"layer-3-components-use-semantic-tokens",children:"Layer 3: Components Use Semantic Tokens"}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`.btn-primary {
  background: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
}

.card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-border-subtle);
}
`})}),r.jsx(e.hr,{}),r.jsx(e.h2,{id:"-token-categories",children:"📚 Token Categories"}),r.jsx(e.h3,{id:"colors",children:"Colors"}),r.jsxs("div",{style:{background:"var(--color-bg-primary)",border:"1px solid var(--color-border-subtle)",padding:"var(--space-4)",borderRadius:"var(--radius-md)",marginBottom:"var(--space-4)",color:"var(--color-text-primary)"},children:[r.jsx(e.p,{children:r.jsx(e.strong,{children:"Backgrounds:"})}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`--color-bg-primary       /* Main page background */
--color-bg-secondary     /* Section backgrounds */
--color-bg-tertiary      /* Card/panel backgrounds */
--color-bg-hover         /* Hover states */
`})}),r.jsx(e.p,{children:r.jsx(e.strong,{children:"Text:"})}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`--color-text-primary     /* Headings, main text */
--color-text-secondary   /* Body text, labels */
--color-text-tertiary    /* Captions, hints */
`})}),r.jsx(e.p,{children:r.jsx(e.strong,{children:"Borders:"})}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`--color-border-subtle    /* Light dividers */
--color-border-medium    /* Input borders */
--color-border-strong    /* Focused borders */
`})})]}),r.jsx(e.h3,{id:"spacing",children:"Spacing"}),r.jsxs("div",{style:{background:"var(--color-bg-primary)",border:"1px solid var(--color-border-subtle)",padding:"var(--space-4)",borderRadius:"var(--radius-md)",marginBottom:"var(--space-4)",color:"var(--color-text-primary)"},children:[r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-4: 1rem;       /* 16px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-12: 3rem;      /* 48px */
`})}),r.jsx(e.p,{children:r.jsx(e.strong,{children:"Usage:"})}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`.card {
  padding: var(--space-6);
  margin-bottom: var(--space-4);
  gap: var(--space-3);
}
`})})]}),r.jsx(e.h3,{id:"typography",children:"Typography"}),r.jsxs("div",{style:{background:"var(--color-bg-primary)",border:"1px solid var(--color-border-subtle)",padding:"var(--space-4)",borderRadius:"var(--radius-md)",marginBottom:"var(--space-4)",color:"var(--color-text-primary)"},children:[r.jsx(e.p,{children:r.jsx(e.strong,{children:"Font Sizes:"})}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-2xl: 1.5rem;     /* 24px */
--text-4xl: 2.25rem;    /* 36px */
`})}),r.jsx(e.p,{children:r.jsx(e.strong,{children:"Font Weights:"})}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
`})}),r.jsx(e.p,{children:r.jsx(e.strong,{children:"Font Families:"})}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`--font-sans: system-ui, -apple-system, sans-serif;
--font-mono: Monaco, "Cascadia Code", monospace;
`})})]}),r.jsx(e.h3,{id:"border-radius",children:"Border Radius"}),r.jsxs("div",{style:{background:"var(--color-bg-primary)",border:"1px solid var(--color-border-subtle)",padding:"var(--space-4)",borderRadius:"var(--radius-md)",marginBottom:"var(--space-4)",display:"flex",gap:"var(--space-3)",flexWrap:"wrap",color:"var(--color-text-primary)"},children:[r.jsx("div",{style:{padding:"var(--space-3)",background:"var(--color-primary)",color:"white",borderRadius:"var(--radius-sm)"},children:r.jsxs(e.p,{children:[r.jsx(e.code,{children:"--radius-sm"})," (4px)"]})}),r.jsx("div",{style:{padding:"var(--space-3)",background:"var(--color-primary)",color:"white",borderRadius:"var(--radius-md)"},children:r.jsxs(e.p,{children:[r.jsx(e.code,{children:"--radius-md"})," (12px)"]})}),r.jsx("div",{style:{padding:"var(--space-3)",background:"var(--color-primary)",color:"white",borderRadius:"var(--radius-lg)"},children:r.jsxs(e.p,{children:[r.jsx(e.code,{children:"--radius-lg"})," (16px)"]})}),r.jsx("div",{style:{padding:"var(--space-3)",background:"var(--color-primary)",color:"white",borderRadius:"var(--radius-full)"},children:r.jsxs(e.p,{children:[r.jsx(e.code,{children:"--radius-full"})," (pill)"]})})]}),r.jsx(e.h3,{id:"shadows",children:"Shadows"}),r.jsxs("div",{style:{background:"var(--color-bg-tertiary)",padding:"var(--space-4)",borderRadius:"var(--radius-md)",marginBottom:"var(--space-4)",display:"flex",gap:"var(--space-4)",flexWrap:"wrap"},children:[r.jsx("div",{style:{padding:"var(--space-4)",background:"var(--color-bg-primary)",boxShadow:"var(--shadow-sm)",borderRadius:"var(--radius-md)"},children:r.jsx(e.p,{children:"Small Shadow"})}),r.jsx("div",{style:{padding:"var(--space-4)",background:"var(--color-bg-primary)",boxShadow:"var(--shadow-md)",borderRadius:"var(--radius-md)"},children:r.jsx(e.p,{children:"Medium Shadow"})}),r.jsx("div",{style:{padding:"var(--space-4)",background:"var(--color-bg-primary)",boxShadow:"var(--shadow-lg)",borderRadius:"var(--radius-md)"},children:r.jsx(e.p,{children:"Large Shadow"})})]}),r.jsx(e.h3,{id:"transitions",children:"Transitions"}),r.jsxs("div",{style:{background:"var(--color-bg-primary)",border:"1px solid var(--color-border-subtle)",padding:"var(--space-4)",borderRadius:"var(--radius-md)",marginBottom:"var(--space-4)",color:"var(--color-text-primary)"},children:[r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`/* Durations */
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
`})}),r.jsx(e.p,{children:r.jsx(e.strong,{children:"Usage:"})}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`.btn {
  transition: var(--transition-all-fast);
}
`})})]}),r.jsx(e.hr,{}),r.jsx(e.h2,{id:"-what-tokens-can-control",children:"✅ What Tokens Can Control"}),r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:"var(--space-6)"},children:[r.jsx("thead",{children:r.jsxs("tr",{style:{background:"var(--color-bg-secondary)",color:"var(--color-text-primary)"},children:[r.jsx("th",{style:{padding:"var(--space-3)",textAlign:"left",borderBottom:"1px solid var(--color-border-subtle)",color:"var(--color-text-primary)"},children:"Property Type"}),r.jsx("th",{style:{padding:"var(--space-3)",textAlign:"left",borderBottom:"1px solid var(--color-border-subtle)",color:"var(--color-text-primary)"},children:"Support"}),r.jsx("th",{style:{padding:"var(--space-3)",textAlign:"left",borderBottom:"1px solid var(--color-border-subtle)",color:"var(--color-text-primary)"},children:"Example"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"Colors"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"✅ Full"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:r.jsx("code",{children:"--color-primary: #5ebd8f"})})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"Spacing"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"✅ Full"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:r.jsx("code",{children:"--space-4: 1rem"})})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"Typography"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"✅ Full"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:r.jsx("code",{children:"--text-lg: 1.125rem"})})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"Shadows"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"✅ Full"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:r.jsx("code",{children:"--shadow-lg: 0 20px 25px..."})})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"Transitions"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"✅ Full"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:r.jsx("code",{children:"--duration-fast: 150ms"})})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"Gradients"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"✅ Full"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:r.jsx("code",{children:"--gradient: linear-gradient(...)"})})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"Property Names"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"❌ No"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"Can't tokenize property names"})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"Selectors"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"❌ No"}),r.jsx("td",{style:{padding:"var(--space-3)",borderBottom:"1px solid var(--color-border-subtle)"},children:"Can't tokenize CSS selectors"})]})]})]}),r.jsxs(e.p,{children:[r.jsx(e.strong,{children:"Summary:"})," Tokens control ~95% of visual styling (any CSS ",r.jsx(e.strong,{children:"value"}),"), but not CSS ",r.jsx(e.strong,{children:"structure"})," (selectors, property names, media queries)."]}),r.jsx(e.hr,{}),r.jsx(e.h2,{id:"-creating-custom-themes",children:"🎨 Creating Custom Themes"}),r.jsx(e.h3,{id:"method-1-override-individual-tokens",children:"Method 1: Override Individual Tokens"}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<style>
  :root {
    /* Change primary brand color */
    --color-primary: #8B5CF6;     /* Purple */

    /* Adjust spacing scale */
    --space-4: 1.25rem;           /* Increase base spacing */

    /* Rounder corners */
    --radius-md: 1rem;            /* More rounded */
  }
</style>
`})}),r.jsx(e.h3,{id:"method-2-create-a-full-custom-theme",children:"Method 2: Create a Full Custom Theme"}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`/* my-brand.css */
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
`})}),r.jsx(e.p,{children:r.jsx(e.strong,{children:"Load it:"})}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<link rel="stylesheet" href="aural-ui.css">
<link rel="stylesheet" href="my-brand.css">
`})}),r.jsx(e.hr,{}),r.jsx(e.h2,{id:"-advanced-techniques",children:"🔧 Advanced Techniques"}),r.jsx(e.h3,{id:"token-composition",children:"Token Composition"}),r.jsx(e.p,{children:"Combine tokens to create new values:"}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`:root {
  --duration-fast: 150ms;
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* Compose them */
  --transition-fast: var(--duration-fast) var(--ease-in-out);
}
`})}),r.jsx(e.h3,{id:"math-with-tokens",children:"Math with Tokens"}),r.jsxs(e.p,{children:["Use ",r.jsx(e.code,{children:"calc()"})," for dynamic values:"]}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`.double-padding {
  padding: calc(var(--space-4) * 2);  /* 2rem */
}

.half-margin {
  margin: calc(var(--space-4) / 2);   /* 0.5rem */
}
`})}),r.jsx(e.h3,{id:"fallback-values",children:"Fallback Values"}),r.jsx(e.p,{children:"Provide defaults for missing tokens:"}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`.card {
  /* If --radius-md doesn't exist, use 0.75rem */
  border-radius: var(--radius-md, 0.75rem);
}
`})}),r.jsx(e.hr,{}),r.jsx(e.h2,{id:"-best-practices",children:"💡 Best Practices"}),r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Use semantic tokens in components"})," - Reference ",r.jsx(e.code,{children:"--color-bg-primary"}),", not ",r.jsx(e.code,{children:"--neutral-900"})]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Don't hardcode values"})," - Always use tokens for consistency"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Test in multiple themes"})," - Switch themes to ensure proper contrast"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Override sparingly"})," - Only customize what you need"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Document custom tokens"})," - Comment your customizations"]}),`
`]}),r.jsx(e.hr,{}),r.jsx(e.h2,{id:"-token-reference",children:"🎯 Token Reference"}),r.jsx(e.p,{children:"For a complete list of all available tokens, see:"}),r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.a,{href:"https://ferology.github.io/aural-ui/tokens.html",rel:"nofollow",children:"Demo Site Token Reference"})}),`
`,r.jsxs(e.li,{children:["Inspect any theme CSS file in ",r.jsx(e.code,{children:"/themes/"})," directory"]}),`
`]}),r.jsx(e.hr,{}),r.jsx(e.h2,{id:"-try-it-now",children:"🚀 Try It Now"}),r.jsxs(e.p,{children:[r.jsx(e.strong,{children:"Change the theme using the toolbar above"})," ↑ and watch how tokens update automatically across all components!"]})]})]})}function p(s={}){const{wrapper:e}={...a(),...s.components};return e?r.jsx(e,{...s,children:r.jsx(o,{...s})}):o(s)}export{p as default};
