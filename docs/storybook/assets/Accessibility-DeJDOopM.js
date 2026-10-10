import{j as e,M as n}from"./index-Dp90SRqn.js";import{useMDXComponents as s}from"./index-CgFYr9Zc.js";import"./iframe-6cFiQjrG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1c3tIrF.js";import"./index-DrFu-skq.js";function r(t){const o={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Getting Started/Accessibility",parameters:{docs:{theme:{base:"light"}}}}),`
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
`,e.jsxs("div",{style:{fontFamily:"var(--font-sans, system-ui, -apple-system, sans-serif)",maxWidth:"900px",margin:"0 auto",padding:"3rem 2rem",background:"#ffffff !important",backgroundColor:"#ffffff !important",color:"#1a1a1a !important",minHeight:"100vh"},children:[e.jsx(o.h1,{id:"accessibility",children:"Accessibility"}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"Aural UI targets WCAG 2.1 AA. Color contrast is checked automatically in every theme."})}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"contrast-tokens",children:"Contrast tokens"}),e.jsx(o.p,{children:"The 500 status shades only reach 2.2:1 to 3.8:1 against white. Use the role tokens instead:"}),e.jsxs(o.p,{children:[`| Token | Use |
| --- | --- |
| `,e.jsx(o.code,{children:"--color-{success,error,info,warning}-solid"})," | Filled status backgrounds. Pair with ",e.jsx(o.code,{children:"--color-text-on-*"}),` |
| `,e.jsx(o.code,{children:"--color-{success,error,warning,info}-text"}),` | Status text and icons on surfaces (400 shades on dark themes; 700/600 in light and minimal) |
| `,e.jsx(o.code,{children:"--color-control-border"}),` | Boundary of input, checkbox, radio and select (3:1 or more, WCAG 1.4.11) |
| `,e.jsx(o.code,{children:"--color-button-primary-text"})," | Primary button label. Defaults to ",e.jsx(o.code,{children:"var(--color-bg-primary)"}),"; the light theme sets white |"]}),e.jsxs(o.p,{children:[e.jsx(o.code,{children:"--color-border-subtle"})," and ",e.jsx(o.code,{children:"--color-border-medium"})," are decorative only. Do not use them to mark where a form control starts."]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.pill        { background: var(--color-success-solid); color: var(--color-text-on-success); }
.field-error { color: var(--color-error-text); }
.text-input  { border: 1px solid var(--color-control-border); }
`})}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"auditing-contrast",children:"Auditing contrast"}),e.jsxs(o.p,{children:[e.jsx(o.code,{children:"npm run audit:contrast"})," loads each of the 11 themes in a real browser, resolves the semantic tokens and checks text on the page, secondary and elevated surfaces (4.5:1), status text, solid-fill text and form control borders (3:1). It exits with code 1 if any pair fails. Build the CSS first:"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-bash",children:`npm run build:css
npm run audit:contrast
`})}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"tooltips",children:"Tooltips"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Tooltips wired by ",e.jsx(o.code,{children:"Aural.initTooltips()"})," (",e.jsx(o.code,{children:".tooltip-wrapper"})," with a ",e.jsx(o.code,{children:"[data-tooltip-trigger]"})," and a ",e.jsx(o.code,{children:".tooltip"}),") stay open while the pointer is over the tooltip (WCAG 1.4.13) and dismiss on Escape."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:'role="tooltip"'})," and ",e.jsx(o.code,{children:"aria-describedby"})," are added automatically."]}),`
`,e.jsxs(o.li,{children:["CSS-only ",e.jsx(o.code,{children:"data-tooltip"})," tooltips are not hoverable. Keep their content short and non-essential."]}),`
`]}),e.jsx(o.h2,{id:"modals",children:"Modals"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Aural.openModal(id)"})," makes everything outside the modal ",e.jsx(o.code,{children:"inert"})," and ",e.jsx(o.code,{children:'aria-hidden="true"'}),", also when the modal is inside ",e.jsx(o.code,{children:"<main>"}),". ",e.jsx(o.code,{children:"Aural.closeModal(id)"})," restores it."]}),`
`,e.jsx(o.li,{children:"Focus moves to the first focusable element, or to the dialog when there is none. Focusable elements are recomputed on every Tab."}),`
`,e.jsx(o.li,{children:"Escape closes only the topmost modal, and focus returns to the trigger."}),`
`]}),e.jsx(o.h2,{id:"skip-link",children:"Skip link"}),e.jsxs(o.p,{children:["Use ",e.jsx(o.code,{children:".skip-link"})," pointing at ",e.jsx(o.code,{children:'<main id="main-content">'}),". It uses the button-primary tokens, so it keeps the same contrast as primary buttons in every theme."]}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"your-responsibilities",children:"Your responsibilities"}),e.jsxs(o.p,{children:["CSS cannot add semantics. Add ",e.jsx(o.code,{children:"aria-label"})," to icon-only buttons, ",e.jsx(o.code,{children:'role="status"'})," to loading indicators, and use real ",e.jsx(o.code,{children:"<button>"})," elements. See each component's ",e.jsx(o.strong,{children:"Accessibility"})," section for details."]})]})]})}function x(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{x as default};
