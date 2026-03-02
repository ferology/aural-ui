const c={title:"Test/Simple",parameters:{layout:"centered"}},r=()=>{const e=document.createElement("div");return e.style.padding="2rem",e.innerHTML=`
    <h1 style="color: var(--color-primary);">Storybook Works! 🎉</h1>
    <p>If you can see this, Storybook is loading correctly.</p>
    <button class="btn btn-primary">Test Button</button>
  `,e},t=()=>{const e=document.createElement("div");return e.style.padding="2rem",e.innerHTML=`
    <h2>Theme Color Test</h2>
    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
      <div style="width: 100px; height: 100px; background: var(--color-primary); border-radius: 8px;"></div>
      <div style="width: 100px; height: 100px; background: var(--color-secondary); border-radius: 8px;"></div>
      <div style="width: 100px; height: 100px; background: var(--color-success); border-radius: 8px;"></div>
    </div>
    <p style="margin-top: 1rem;">Switch themes using the toolbar dropdown above!</p>
  `,e};var o,s,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const div = document.createElement('div');
  div.style.padding = '2rem';
  div.innerHTML = \`
    <h1 style="color: var(--color-primary);">Storybook Works! 🎉</h1>
    <p>If you can see this, Storybook is loading correctly.</p>
    <button class="btn btn-primary">Test Button</button>
  \`;
  return div;
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,d,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const div = document.createElement('div');
  div.style.padding = '2rem';
  div.innerHTML = \`
    <h2>Theme Color Test</h2>
    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
      <div style="width: 100px; height: 100px; background: var(--color-primary); border-radius: 8px;"></div>
      <div style="width: 100px; height: 100px; background: var(--color-secondary); border-radius: 8px;"></div>
      <div style="width: 100px; height: 100px; background: var(--color-success); border-radius: 8px;"></div>
    </div>
    <p style="margin-top: 1rem;">Switch themes using the toolbar dropdown above!</p>
  \`;
  return div;
}`,...(a=(d=t.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const p=["BasicTest","ThemeTest"];export{r as BasicTest,t as ThemeTest,p as __namedExportsOrder,c as default};
