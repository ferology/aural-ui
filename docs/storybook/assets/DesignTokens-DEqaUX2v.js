import{j as e,M as i}from"./index-BxCYlGOW.js";import{useMDXComponents as o}from"./index-9JdgMxtl.js";import"./iframe-DL67_EpE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1c3tIrF.js";import"./index-DrFu-skq.js";function n(s){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting Started/Design Tokens",parameters:{docs:{theme:{base:"light"}}}}),`
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
`,e.jsxs("div",{style:{fontFamily:"var(--font-sans, system-ui, -apple-system, sans-serif)",maxWidth:"1200px",margin:"0 auto",padding:"3rem 2rem",background:"#ffffff !important",backgroundColor:"#ffffff !important",color:"#1a1a1a !important",minHeight:"100vh"},children:[e.jsx(r.h1,{id:"design-tokens",children:"Design Tokens"}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Design tokens"})," are the foundation of Aural UI's themeable architecture. They're CSS custom properties (variables) that control every visual aspect of the design system."]}),e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["🎨 ",e.jsx(r.strong,{children:"Designing in Figma?"})," These same tokens ship as ",e.jsx(r.strong,{children:"Figma Variables"})," in the ",e.jsx(r.a,{href:"https://www.figma.com/community/file/1649056373718832084/aural-ai",rel:"nofollow",children:"Aural UI Figma kit"})," — primitives feed semantic tokens, switchable across all 9 theme modes, so design and code stay in sync."]}),`
`]}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"-how-tokens-work",children:"🎯 How Tokens Work"}),e.jsxs(r.p,{children:["Aural UI uses a ",e.jsx(r.strong,{children:"two-layer token system"}),":"]}),e.jsx(r.h3,{id:"layer-1-primitive-tokens-foundation",children:"Layer 1: Primitive Tokens (Foundation)"}),e.jsxs(r.p,{children:["These are the actual color values that ",e.jsx(r.strong,{children:"never change"})," across themes:"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
  /* Color scales: 50 (lightest) → 950 (darkest) */
  --primary-400: #5ebd8f; /* Vibrant green */
  --secondary-500: #06b6d4; /* Cyan */
  --neutral-100: #f5f5f5; /* Light gray */
  --neutral-900: #171717; /* Dark gray */
}
`})}),e.jsx(r.h3,{id:"layer-2-semantic-tokens-meaning",children:"Layer 2: Semantic Tokens (Meaning)"}),e.jsxs(r.p,{children:["These tokens map to ",e.jsx(r.strong,{children:"purposes"})," and ",e.jsx(r.strong,{children:"change per theme"}),":"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* Dark Theme */
:root {
  --color-bg-primary: #0f0f1a; /* Dark background */
  --color-text-primary: #f5f5fa; /* Light text */
}

/* Light Theme */
:root {
  --color-bg-primary: #ffffff; /* Light background */
  --color-text-primary: #111827; /* Dark text */
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
`})})]}),e.jsx(r.h3,{id:"spacing",children:"Spacing"}),e.jsxs("div",{style:{background:"#f5f5f5",border:"1px solid #e0e0e0",padding:"1rem",borderRadius:"8px",marginBottom:"1rem",color:"#1a1a1a"},children:[e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-4: 1rem; /* 16px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-12: 3rem; /* 48px */
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Usage:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`.card {
  padding: var(--space-6);
  margin-bottom: var(--space-4);
  gap: var(--space-3);
}
`})})]}),e.jsx(r.h3,{id:"size",children:"Size"}),e.jsxs("div",{style:{background:"#f5f5f5",border:"1px solid #e0e0e0",padding:"1rem",borderRadius:"8px",marginBottom:"1rem",color:"#1a1a1a"},children:[e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--size-N"})," sizes a UI element's ",e.jsx(r.strong,{children:"own box"})," — icon dimensions, avatar diameter, status-dot size, toggle track/thumb — as opposed to ",e.jsx(r.code,{children:"--space-N"}),", which sizes the ",e.jsx(r.strong,{children:"gap between"})," elements."]}),e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["⚠️ ",e.jsxs(r.strong,{children:["Not the same convention as ",e.jsx(r.code,{children:"--space-N"}),"."]})," ",e.jsx(r.code,{children:"--size-N"}),"'s ",e.jsx(r.code,{children:"N"})," is the ",e.jsx(r.strong,{children:"literal pixel value"})," — ",e.jsx(r.code,{children:"--size-14"})," is 14px, ",e.jsx(r.code,{children:"--size-44"})," is 44px. ",e.jsx(r.code,{children:"--space-N"})," uses ",e.jsx(r.code,{children:"N"})," = px ÷ 4, so ",e.jsx(r.code,{children:"--space-14"})," is ",e.jsx(r.strong,{children:"56px"}),". Never assume ",e.jsx(r.code,{children:"--size-N"})," and ",e.jsx(r.code,{children:"--space-N"})," with the same ",e.jsx(r.code,{children:"N"})," are interchangeable — always check the actual value."]}),`
`]}),e.jsxs(r.p,{children:["Where a size value coincides with an existing ",e.jsx(r.code,{children:"--space-N"})," value, ",e.jsx(r.code,{children:"--size-N"})," aliases it instead of duplicating the literal (e.g. ",e.jsx(r.code,{children:"--size-16: var(--space-4)"}),"), so the two scales stay numerically consistent even though their naming conventions differ."]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--size-6: 0.375rem; /* 6px  — status dot */
--size-14: 0.875rem; /* 14px — small icon */
--size-18: 1.125rem; /* 18px — medium icon */
--size-24: var(--space-6); /* 24px — large icon */
--size-36: 2.25rem; /* 36px — small toggle track */
--size-40: var(--space-10); /* 40px — avatar */
--size-44: 2.75rem; /* 44px — touch target */
`})})]}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Size Scale"})," — rendered at actual token size:"]}),e.jsxs("div",{style:{background:"var(--color-bg-tertiary)",padding:"var(--space-4)",borderRadius:"var(--radius-md)",marginBottom:"var(--space-4)",display:"flex",alignItems:"flex-end",gap:"var(--space-6)",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem"},children:[e.jsx("div",{style:{width:"var(--size-6)",height:"var(--size-6)",background:"var(--color-primary)",borderRadius:"var(--radius-full)"}}),e.jsx("code",{style:{fontSize:"0.7rem"},children:"--size-6"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem"},children:[e.jsx("div",{style:{width:"var(--size-14)",height:"var(--size-14)",background:"var(--color-primary)",borderRadius:"var(--radius-sm)"}}),e.jsx("code",{style:{fontSize:"0.7rem"},children:"--size-14"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem"},children:[e.jsx("div",{style:{width:"var(--size-18)",height:"var(--size-18)",background:"var(--color-primary)",borderRadius:"var(--radius-sm)"}}),e.jsx("code",{style:{fontSize:"0.7rem"},children:"--size-18"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem"},children:[e.jsx("div",{style:{width:"var(--size-24)",height:"var(--size-24)",background:"var(--color-primary)",borderRadius:"var(--radius-sm)"}}),e.jsx("code",{style:{fontSize:"0.7rem"},children:"--size-24"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem"},children:[e.jsx("div",{style:{width:"var(--size-36)",height:"var(--size-36)",background:"var(--color-primary)",borderRadius:"var(--radius-md)"}}),e.jsx("code",{style:{fontSize:"0.7rem"},children:"--size-36"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem"},children:[e.jsx("div",{style:{width:"var(--size-44)",height:"var(--size-44)",background:"var(--color-primary)",borderRadius:"var(--radius-md)"}}),e.jsx("code",{style:{fontSize:"0.7rem"},children:"--size-44"})]})]}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Full icon/control scale"})," (",e.jsx(r.code,{children:"N"})," = literal px):"]}),e.jsxs(r.p,{children:[`| Token       | Value             | Pixels |
| ----------- | ----------------- | ------ |
| `,e.jsx(r.code,{children:"--size-6"}),"  | ",e.jsx(r.code,{children:"0.375rem"}),`        | 6px    |
| `,e.jsx(r.code,{children:"--size-12"})," | ",e.jsx(r.code,{children:"var(--space-3)"}),`  | 12px   |
| `,e.jsx(r.code,{children:"--size-14"})," | ",e.jsx(r.code,{children:"0.875rem"}),`        | 14px   |
| `,e.jsx(r.code,{children:"--size-16"})," | ",e.jsx(r.code,{children:"var(--space-4)"}),`  | 16px   |
| `,e.jsx(r.code,{children:"--size-18"})," | ",e.jsx(r.code,{children:"1.125rem"}),`        | 18px   |
| `,e.jsx(r.code,{children:"--size-20"})," | ",e.jsx(r.code,{children:"var(--space-5)"}),`  | 20px   |
| `,e.jsx(r.code,{children:"--size-24"})," | ",e.jsx(r.code,{children:"var(--space-6)"}),`  | 24px   |
| `,e.jsx(r.code,{children:"--size-28"})," | ",e.jsx(r.code,{children:"var(--space-7)"}),`  | 28px   |
| `,e.jsx(r.code,{children:"--size-32"})," | ",e.jsx(r.code,{children:"var(--space-8)"}),`  | 32px   |
| `,e.jsx(r.code,{children:"--size-36"})," | ",e.jsx(r.code,{children:"2.25rem"}),`         | 36px   |
| `,e.jsx(r.code,{children:"--size-40"})," | ",e.jsx(r.code,{children:"var(--space-10)"}),` | 40px   |
| `,e.jsx(r.code,{children:"--size-44"})," | ",e.jsx(r.code,{children:"2.75rem"}),`         | 44px   |
| `,e.jsx(r.code,{children:"--size-48"})," | ",e.jsx(r.code,{children:"var(--space-12)"}),` | 48px   |
| `,e.jsx(r.code,{children:"--size-52"})," | ",e.jsx(r.code,{children:"3.25rem"}),`         | 52px   |
| `,e.jsx(r.code,{children:"--size-56"})," | ",e.jsx(r.code,{children:"var(--space-14)"}),` | 56px   |
| `,e.jsx(r.code,{children:"--size-64"})," | ",e.jsx(r.code,{children:"var(--space-16)"}),` | 64px   |
| `,e.jsx(r.code,{children:"--size-80"})," | ",e.jsx(r.code,{children:"var(--space-20)"}),` | 80px   |
| `,e.jsx(r.code,{children:"--size-96"})," | ",e.jsx(r.code,{children:"var(--space-24)"})," | 96px   |"]}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Container / overlay width scale"})," — larger steps for dialog, drawer, and overlay ",e.jsx(r.code,{children:"max-width"}),", same literal-pixel convention:"]}),e.jsxs(r.p,{children:[`| Token        | Value     | Pixels |
| ------------ | --------- | ------ |
| `,e.jsx(r.code,{children:"--size-360"})," | ",e.jsx(r.code,{children:"22.5rem"}),` | 360px  |
| `,e.jsx(r.code,{children:"--size-480"})," | ",e.jsx(r.code,{children:"30rem"}),`   | 480px  |
| `,e.jsx(r.code,{children:"--size-640"})," | ",e.jsx(r.code,{children:"40rem"}),`   | 640px  |
| `,e.jsx(r.code,{children:"--size-800"})," | ",e.jsx(r.code,{children:"50rem"}),"   | 800px  |"]}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Usage:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`.icon-sm {
  width: var(--size-14);
  height: var(--size-14);
} /* 14px small icon */

.avatar {
  width: var(--size-40);
  height: var(--size-40);
} /* 40px avatar */

.toggle-track {
  width: var(--size-44);
  height: var(--size-24);
} /* 44px touch target */

.dialog {
  max-width: var(--size-480);
} /* 480px dialog */
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Do / don't:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* Don't — raw px for a control dimension */
.status-dot {
  width: 6px;
  height: 6px;
}

/* Don't — reaching for the wrong scale by number-matching intuition */
.icon-md {
  width: var(--space-14);
} /* this is 56px, not 14px! */

/* Do */
.status-dot {
  width: var(--size-6);
  height: var(--size-6);
}
.icon-md {
  width: var(--size-18);
}
`})}),e.jsx(r.h3,{id:"typography",children:"Typography"}),e.jsxs("div",{style:{background:"#f5f5f5",border:"1px solid #e0e0e0",padding:"1rem",borderRadius:"8px",marginBottom:"1rem",color:"#1a1a1a"},children:[e.jsx(r.p,{children:e.jsx(r.strong,{children:"Font Sizes:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-2xl: 1.5rem; /* 24px */
--text-4xl: 2.25rem; /* 36px */
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Font Weights:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Font Families:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--font-sans: system-ui, -apple-system, sans-serif;
--font-mono: Monaco, 'Cascadia Code', monospace;
`})})]}),e.jsx(r.h3,{id:"border-radius",children:"Border Radius"}),e.jsxs("div",{style:{background:"var(--color-bg-primary)",border:"1px solid var(--color-border-subtle)",padding:"var(--space-4)",borderRadius:"var(--radius-md)",marginBottom:"var(--space-4)",display:"flex",gap:"var(--space-3)",flexWrap:"wrap",color:"var(--color-text-primary)"},children:[e.jsx("div",{style:{padding:"var(--space-3)",background:"var(--color-primary)",color:"white",borderRadius:"var(--radius-sm)"},children:e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--radius-sm"})," (4px)"]})}),e.jsx("div",{style:{padding:"var(--space-3)",background:"var(--color-primary)",color:"white",borderRadius:"var(--radius-md)"},children:e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--radius-md"})," (12px)"]})}),e.jsx("div",{style:{padding:"var(--space-3)",background:"var(--color-primary)",color:"white",borderRadius:"var(--radius-lg)"},children:e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--radius-lg"})," (16px)"]})}),e.jsx("div",{style:{padding:"var(--space-3)",background:"var(--color-primary)",color:"white",borderRadius:"var(--radius-full)"},children:e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--radius-full"})," (pill)"]})})]}),e.jsx(r.h3,{id:"shadows",children:"Shadows"}),e.jsxs("div",{style:{background:"var(--color-bg-tertiary)",padding:"var(--space-4)",borderRadius:"var(--radius-md)",marginBottom:"var(--space-4)",display:"flex",gap:"var(--space-4)",flexWrap:"wrap"},children:[e.jsx("div",{style:{padding:"var(--space-4)",background:"var(--color-bg-primary)",boxShadow:"var(--shadow-sm)",borderRadius:"var(--radius-md)"},children:e.jsx(r.p,{children:"Small Shadow"})}),e.jsx("div",{style:{padding:"var(--space-4)",background:"var(--color-bg-primary)",boxShadow:"var(--shadow-md)",borderRadius:"var(--radius-md)"},children:e.jsx(r.p,{children:"Medium Shadow"})}),e.jsx("div",{style:{padding:"var(--space-4)",background:"var(--color-bg-primary)",boxShadow:"var(--shadow-lg)",borderRadius:"var(--radius-md)"},children:e.jsx(r.p,{children:"Large Shadow"})})]}),e.jsx(r.h3,{id:"z-index",children:"Z-Index"}),e.jsxs(r.p,{children:["Two layers, same pattern as color: a ",e.jsx(r.strong,{children:"core scale"})," of raw, meaningless rungs (",e.jsx(r.code,{children:"--z-0"})," through ",e.jsx(r.code,{children:"--z-90"}),"), and a ",e.jsx(r.strong,{children:"semantic scale"})," of intent-named aliases onto those rungs (",e.jsx(r.code,{children:"--z-dropdown"}),", ",e.jsx(r.code,{children:"--z-modal"}),", ",e.jsx(r.code,{children:"--z-popover"}),", and so on). The jumps between rungs are deliberately uneven — they were set to match stacking values already in use across components (dropdowns at 1000, overlays near 9999, etc.), so introducing the token scale didn't change any existing stacking behavior."]}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Stacking order"})," — each panel below is rendered at its real semantic z-index:"]}),e.jsxs("div",{style:{background:"var(--color-bg-tertiary)",padding:"var(--space-4)",borderRadius:"var(--radius-md)",marginBottom:"var(--space-4)",position:"relative",height:"190px"},children:[e.jsxs("div",{style:{position:"absolute",top:"20px",left:"0px",width:"150px",height:"80px",borderRadius:"8px",background:"#525252",color:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",boxShadow:"0 8px 20px rgba(0,0,0,0.35)",zIndex:"var(--z-sticky)"},children:[e.jsx("strong",{children:"sticky navbar"}),e.jsx("code",{style:{color:"#fff",opacity:.85},children:"--z-sticky (100)"})]}),e.jsxs("div",{style:{position:"absolute",top:"20px",left:"60px",width:"150px",height:"80px",borderRadius:"8px",background:"#3d8a64",color:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",boxShadow:"0 8px 20px rgba(0,0,0,0.35)",zIndex:"var(--z-dropdown)"},children:[e.jsx("strong",{children:"dropdown panel"}),e.jsx("code",{style:{color:"#fff",opacity:.85},children:"--z-dropdown (1000)"})]}),e.jsxs("div",{style:{position:"absolute",top:"20px",left:"120px",width:"150px",height:"80px",borderRadius:"8px",background:"#0891b2",color:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",boxShadow:"0 8px 20px rgba(0,0,0,0.35)",zIndex:"var(--z-modal)"},children:[e.jsx("strong",{children:"modal"}),e.jsx("code",{style:{color:"#fff",opacity:.85},children:"--z-modal (2000)"})]}),e.jsxs("div",{style:{position:"absolute",top:"20px",left:"180px",width:"150px",height:"80px",borderRadius:"8px",background:"#b45309",color:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",boxShadow:"0 8px 20px rgba(0,0,0,0.35)",zIndex:"var(--z-overlay)"},children:[e.jsx("strong",{children:"drawer overlay"}),e.jsx("code",{style:{color:"#fff",opacity:.85},children:"--z-overlay (9998)"})]}),e.jsxs("div",{style:{position:"absolute",top:"20px",left:"240px",width:"150px",height:"80px",borderRadius:"8px",background:"#9333ea",color:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",boxShadow:"0 8px 20px rgba(0,0,0,0.35)",zIndex:"var(--z-popover)"},children:[e.jsx("strong",{children:"tooltip / toast"}),e.jsx("code",{style:{color:"#fff",opacity:.85},children:"--z-popover (9999)"})]}),e.jsxs("div",{style:{position:"absolute",top:"20px",left:"300px",width:"150px",height:"80px",borderRadius:"8px",background:"#dc2626",color:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",boxShadow:"0 8px 20px rgba(0,0,0,0.35)",zIndex:"var(--z-max)"},children:[e.jsx("strong",{children:"command palette"}),e.jsx("code",{style:{color:"#fff",opacity:.85},children:"--z-max (10000)"})]})]}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Core scale:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--z-0: 0;
--z-40: 100;
--z-70: 9998;
--z-10: 10;
--z-50: 1000;
--z-80: 9999;
--z-20: 20;
--z-60: 2000;
--z-90: 10000;
--z-30: 30;
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Semantic scale:"})}),e.jsxs(r.p,{children:[`| Token          | Resolves to           | Use for                                                                                           |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------- |
| `,e.jsx(r.code,{children:"--z-sticky"}),"   | ",e.jsx(r.code,{children:"var(--z-40)"}),` · 100   | Sticky in-flow elements, e.g. a sticky navbar                                                     |
| `,e.jsx(r.code,{children:"--z-dropdown"})," | ",e.jsx(r.code,{children:"var(--z-50)"}),` · 1000  | Floating panels anchored to a trigger: dropdown, select, combobox, date/time pickers, suggestions |
| `,e.jsx(r.code,{children:"--z-modal"}),"    | ",e.jsx(r.code,{children:"var(--z-60)"}),` · 2000  | App-level modal backdrop + content                                                                |
| `,e.jsx(r.code,{children:"--z-overlay"}),"  | ",e.jsx(r.code,{children:"var(--z-70)"}),` · 9998  | A secondary overlay above a modal, e.g. a drawer backdrop                                         |
| `,e.jsx(r.code,{children:"--z-popover"}),"  | ",e.jsx(r.code,{children:"var(--z-80)"}),` · 9999  | Content that must float above everything in normal flow                                           |
| `,e.jsx(r.code,{children:"--z-tooltip"}),"  | ",e.jsx(r.code,{children:"var(--z-80)"}),` · 9999  | Same layer as popover — tooltips                                                                  |
| `,e.jsx(r.code,{children:"--z-toast"}),"    | ",e.jsx(r.code,{children:"var(--z-80)"}),` · 9999  | Same layer as popover — toast notifications                                                       |
| `,e.jsx(r.code,{children:"--z-max"}),"      | ",e.jsx(r.code,{children:"var(--z-90)"})," · 10000 | Absolute top layer: command palette, snackbar, lightbox, submenus                                 |"]}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"When to use it — and when not to:"})}),e.jsxs(r.p,{children:["Component code should reference the ",e.jsx(r.strong,{children:"semantic tokens"})," (",e.jsx(r.code,{children:"var(--z-dropdown)"}),"), not the raw ",e.jsx(r.code,{children:"--z-N"})," rungs, so the meaning of a layer is visible at the call site."]}),e.jsxs(r.p,{children:["Small z-index values used purely for local stacking tricks inside a single component are ",e.jsx(r.strong,{children:"not"})," part of this scale and don't need a token. If you're layering a decorative pseudo-element above its own container, ordering a badge dot over an avatar, or doing any z-index trick where everything being stacked lives inside one component's own DOM subtree — and the value is 20 or smaller — leave it as a plain integer. Reach for a global token only when the element needs to stack above or below content belonging to a ",e.jsx(r.strong,{children:"different"})," component."]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* Local stacking trick — stays a plain small integer, no token needed */
.avatar-status-dot {
  position: absolute;
  z-index: 1;
}

/* Cross-component global layer — use the semantic token */
.dropdown-menu {
  position: absolute;
  z-index: var(--z-dropdown);
}
.modal-backdrop {
  position: fixed;
  z-index: var(--z-modal);
}
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Do / don't:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* Don't — raw global-scale number, meaning not visible at the call site */
.toast {
  z-index: 9999;
}

/* Don't — reaching past the semantic layer for no reason */
.toast {
  z-index: var(--z-80);
}

/* Do */
.toast {
  z-index: var(--z-toast);
}
`})}),e.jsx(r.h3,{id:"transitions--animation",children:"Transitions & Animation"}),e.jsxs(r.p,{children:["Aural UI ships a full motion token system with three layers: ",e.jsx(r.strong,{children:"durations"}),", ",e.jsx(r.strong,{children:"easing functions"}),", and ",e.jsx(r.strong,{children:"composite transitions"}),". Every animated component uses these tokens, so motion is always consistent and easy to override per theme."]}),e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["📖 ",e.jsx(r.strong,{children:"See the live interactive demos"})," in ",e.jsx(r.a,{href:"?path=/docs/design-system-animation-transitions--docs",children:"Design System → Animation & Transitions"})," — including an easing playground, duration comparison, and per-token reference table."]}),`
`]}),e.jsx(r.h4,{id:"duration-scale",children:"Duration scale"}),e.jsxs(r.p,{children:["All six steps are available as both CSS custom properties and Figma Variables (",e.jsx(r.code,{children:"Aural/Animation / duration/*"}),", type ",e.jsx(r.strong,{children:"FLOAT"})," in ms):"]}),e.jsx("div",{style:{background:"#f5f5f5",border:"1px solid #e0e0e0",padding:"1rem 1.25rem",borderRadius:"8px",marginBottom:"1rem",color:"#1a1a1a"},children:e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--duration-instant: 0ms; /* No visible motion — toggles, focus rings */
--duration-fast: 150ms; /* Micro-interactions: hover, button press */
--duration-normal: 300ms; /* Menus, tooltips, modals */
--duration-slow: 500ms; /* Drawers, page transitions */
--duration-slower: 750ms; /* Emphasis, onboarding */
--duration-slowest: 1000ms; /* Skeleton loaders, looping animations */
`})})}),e.jsx(r.h4,{id:"easing-functions",children:"Easing functions"}),e.jsxs(r.p,{children:["Six named curves available as CSS properties and Figma Variables (",e.jsx(r.code,{children:"Aural/Animation / easing/*"}),", type ",e.jsx(r.strong,{children:"STRING"}),"):"]}),e.jsx("div",{style:{background:"#f5f5f5",border:"1px solid #e0e0e0",padding:"1rem 1.25rem",borderRadius:"8px",marginBottom:"1rem",color:"#1a1a1a"},children:e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--ease-linear: linear; /* Spinners, looping */
--ease-in: cubic-bezier(0.4, 0, 1, 1); /* Elements leaving */
--ease-out: cubic-bezier(0, 0, 0.2, 1); /* Elements entering */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1); /* Default — most UI */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Playful emphasis */
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Organic snap */
`})})}),e.jsx(r.h4,{id:"composite-transitions-ready-to-use",children:"Composite transitions (ready to use)"}),e.jsx(r.p,{children:"Pre-built shorthand tokens that combine a duration + easing in one variable:"}),e.jsx("div",{style:{background:"#f5f5f5",border:"1px solid #e0e0e0",padding:"1rem 1.25rem",borderRadius:"8px",marginBottom:"1rem",color:"#1a1a1a"},children:e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`--transition-fast: 150ms ease-in-out;
--transition-normal: 300ms ease-in-out;
--transition-slow: 500ms ease-in-out;
--transition-all-fast: all 150ms ease-in-out;
--transition-all-normal: all 300ms ease-in-out;
--transition-colors: color 150ms, background-color 150ms, border-color 150ms;
--transition-transform: transform 150ms ease-in-out; /* GPU composited */
--transition-opacity: opacity 300ms ease-in-out; /* GPU composited */
`})})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Usage:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* Use a composite token for the common case */
.btn {
  transition: var(--transition-all-fast);
}

/* Or compose duration + easing yourself */
.drawer {
  transition: transform var(--duration-slow) var(--ease-spring);
}

/* Prefer GPU-composited properties for performance */
.modal-overlay {
  transition: var(--transition-opacity);
}
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"When to use which easing:"})}),e.jsxs(r.p,{children:[`| Easing      | Token           | Best for                           |
| ----------- | --------------- | ---------------------------------- |
| ease-out    | `,e.jsx(r.code,{children:"--ease-out"}),`    | Things appearing on screen         |
| ease-in     | `,e.jsx(r.code,{children:"--ease-in"}),`     | Things disappearing off screen     |
| ease-in-out | `,e.jsx(r.code,{children:"--ease-in-out"}),` | Default — moving within the screen |
| linear      | `,e.jsx(r.code,{children:"--ease-linear"}),` | Spinners and progress bars         |
| bounce      | `,e.jsx(r.code,{children:"--ease-bounce"}),` | Playful confirmations              |
| spring      | `,e.jsx(r.code,{children:"--ease-spring"})," | Modals, drawers, natural snapping  |"]}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Figma Variables:"})," All duration values are ",e.jsx(r.code,{children:"FLOAT"})," variables and all easing strings are ",e.jsx(r.code,{children:"STRING"})," variables in the ",e.jsx(r.code,{children:"Aural/Animation"})," collection. Figma does not yet support binding animation variables to layer properties directly, but they serve as accurate spec references for handoff."]}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"-what-tokens-can-control",children:"✅ What Tokens Can Control"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:"var(--space-6)"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"rgba(255, 255, 255, 0.05)",color:"#ffffff"},children:[e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",color:"#ffffff"},children:e.jsx(r.p,{children:"Property Type"})}),e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",color:"#ffffff"},children:e.jsx(r.p,{children:"Support"})}),e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",color:"#ffffff"},children:e.jsx(r.p,{children:"Example"})})]})}),e.jsxs("tbody",{style:{color:"#e5e5e5"},children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"Colors"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"✅ Full"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("code",{children:"--color-primary: #5ebd8f"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"Spacing"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"✅ Full"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("code",{children:"--space-4: 1rem"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"Typography"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"✅ Full"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("code",{children:"--text-lg: 1.125rem"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"Shadows"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"✅ Full"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("code",{children:"--shadow-lg: 0 20px 25px..."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"Transitions"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"✅ Full"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("code",{children:"--duration-fast: 150ms"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"Gradients"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"✅ Full"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("code",{children:"--gradient: linear-gradient(...)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"Property Names"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"❌ No"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"Can't tokenize property names"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"Selectors"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"❌ No"})}),e.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(r.p,{children:"Can't tokenize CSS selectors"})})]})]})]}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Summary:"})," Tokens control ~95% of visual styling (any CSS ",e.jsx(r.strong,{children:"value"}),"), but not CSS ",e.jsx(r.strong,{children:"structure"})," (selectors, property names, media queries)."]}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"-creating-custom-themes",children:"🎨 Creating Custom Themes"}),e.jsx(r.h3,{id:"method-1-override-individual-tokens",children:"Method 1: Override Individual Tokens"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<style>
  :root {
    /* Change primary brand color */
    --color-primary: #8b5cf6; /* Purple */

    /* Adjust spacing scale */
    --space-4: 1.25rem; /* Increase base spacing */

    /* Rounder corners */
    --radius-md: 1rem; /* More rounded */
  }
</style>
`})}),e.jsx(r.h3,{id:"method-2-create-a-full-custom-theme",children:"Method 2: Create a Full Custom Theme"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* my-brand.css */
:root {
  /* Brand Colors */
  --color-primary: #8b5cf6;
  --color-secondary: #ec4899;

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
  --font-sans: 'Inter', system-ui, sans-serif;

  /* Spacing - Compact Scale */
  --space-4: 0.875rem;
  --space-6: 1.25rem;
}
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Load it:"})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<link rel="stylesheet" href="aural-ui.css" /> <link rel="stylesheet" href="my-brand.css" />
`})}),e.jsx(r.hr,{}),e.jsx(r.h2,{id:"-advanced-techniques",children:"🔧 Advanced Techniques"}),e.jsx(r.h3,{id:"token-composition",children:"Token Composition"}),e.jsx(r.p,{children:"Combine tokens to create new values:"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
  --duration-fast: 150ms;
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* Compose them */
  --transition-fast: var(--duration-fast) var(--ease-in-out);
}
`})}),e.jsx(r.h3,{id:"math-with-tokens",children:"Math with Tokens"}),e.jsxs(r.p,{children:["Use ",e.jsx(r.code,{children:"calc()"})," for dynamic values:"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`.double-padding {
  padding: calc(var(--space-4) * 2); /* 2rem */
}

.half-margin {
  margin: calc(var(--space-4) / 2); /* 0.5rem */
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
