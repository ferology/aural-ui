import{c as Se}from"./createThemeGrid-DWAncU4Q.js";const ze={title:"Components/Data Display/Code Block",tags:["autodocs"],parameters:{docs:{description:{component:`
# Code Block Component

Display code snippets with syntax highlighting, copy functionality, and multiple variants for different programming languages.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-code-block">
  <div class="aural-code-block__header">
    <span class="aural-code-block__language">JavaScript</span>
    <button class="aural-code-block__copy">
      <i data-lucide="copy" style="width: 14px; height: 14px;"></i>
      Copy
    </button>
  </div>
  <div class="aural-code-block__content">
    <pre class="aural-code-block__pre"><code class="aural-code-block__code">const x = 42;</code></pre>
  </div>
</div>

<script>
  // Initialize code blocks
  window.Aural?.initAllCodeBlocks();
  // Initialize Lucide icons
  lucide.createIcons();
<\/script>
\`\`\`

**React:**
\`\`\`jsx
<CodeBlock code="const x = 42;" language="javascript" copyable />
\`\`\`

**Vue:**
\`\`\`vue
<CodeBlock :code="code" language="javascript" :copyable="true" />
\`\`\`
        `.trim()}}},argTypes:{code:{control:"text",description:"Code content to display"},language:{control:"select",options:["javascript","html","css","python","bash","json","typescript","jsx","vue","go","rust"],description:"Programming language for syntax context"},showLineNumbers:{control:"boolean",description:"Display line numbers"},highlightLines:{control:"object",description:"Array of line numbers to highlight"},fileName:{control:"text",description:"Optional filename to display"},copyable:{control:"boolean",description:"Show copy button"},size:{control:"select",options:["sm","md","lg"],description:"Code block size"},terminal:{control:"boolean",description:"Terminal style variant"}}};function J(e){setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons({nameAttr:"data-lucide"})},0)}const i={render:e=>{const c=document.createElement("div"),a=document.createElement("div"),t=["aural-code-block"];e.showLineNumbers&&t.push("aural-code-block--line-numbers"),e.terminal&&t.push("aural-code-block--terminal"),e.size&&e.size!=="md"&&t.push(`aural-code-block--${e.size}`),a.className=t.join(" ");const l=document.createElement("div");l.className="aural-code-block__header";const n=document.createElement("span");if(n.className="aural-code-block__language",n.setAttribute("aria-label","Code language"),n.textContent=e.fileName||e.language,l.appendChild(n),e.copyable){const s=document.createElement("button");s.className="aural-code-block__copy",s.setAttribute("aria-label","Copy code to clipboard"),s.innerHTML='<i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy',l.appendChild(s)}a.appendChild(l);const r=document.createElement("div");r.className="aural-code-block__content";const o=document.createElement("pre");o.className="aural-code-block__pre";const d=document.createElement("code");return d.className="aural-code-block__code",d.textContent=e.code,o.appendChild(d),r.appendChild(o),a.appendChild(r),c.appendChild(a),J(),setTimeout(()=>{var s;typeof((s=window.Aural)==null?void 0:s.initAllCodeBlocks)=="function"&&window.Aural.initAllCodeBlocks()},0),c},args:{code:`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`,language:"javascript",showLineNumbers:!1,copyable:!0,size:"md",terminal:!1}},h={...i,args:{code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Aural UI</title>
  <link rel="stylesheet" href="aural-ui.css">
</head>
<body>
  <button class="btn btn-primary">Click me</button>
</body>
</html>`,language:"html",copyable:!0,size:"md"}},C={...i,args:{code:`.btn {
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-text-inverse);
}`,language:"css",fileName:"button.css",copyable:!0,size:"md"}},y={...i,args:{code:`$ npm install aural-ui
$ npm run dev

> aural-ui@1.0.0 dev
> vite

  VITE v4.0.0  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose`,language:"bash",copyable:!0,terminal:!0,size:"md"}},k={...i,args:{code:`{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "aural-ui": "^1.0.0",
    "react": "^18.2.0"
  }
}`,language:"json",fileName:"package.json",copyable:!0,size:"md"}},_={...i,args:{code:`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Print first 10 numbers
for i in range(10):
    print(fibonacci(i))`,language:"python",fileName:"fibonacci.py",copyable:!0,size:"md"}},f={...i,args:{code:`const user = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin'
};

function updateUser(updates) {
  return { ...user, ...updates };
}`,language:"javascript",showLineNumbers:!0,copyable:!0,size:"md"}},v={render:()=>{const e=document.createElement("div"),c=document.createElement("div");c.className="aural-code-block aural-code-block--line-numbers";const a=document.createElement("div");a.className="aural-code-block__header";const t=document.createElement("span");t.className="aural-code-block__language",t.setAttribute("aria-label","Code language"),t.textContent="JavaScript",a.appendChild(t);const l=document.createElement("button");l.className="aural-code-block__copy",l.setAttribute("aria-label","Copy code to clipboard"),l.innerHTML='<i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy',a.appendChild(l),c.appendChild(a);const n=document.createElement("div");n.className="aural-code-block__content";const r=document.createElement("pre");r.className="aural-code-block__pre";const o=document.createElement("code");return o.className="aural-code-block__code",o.innerHTML=`<span class="aural-code-block__line">const user = {</span>
<span class="aural-code-block__line aural-code-block__line--highlight">  name: 'John Doe',</span>
<span class="aural-code-block__line aural-code-block__line--success">  email: 'john@example.com',</span>
<span class="aural-code-block__line aural-code-block__line--error">  password: '123456', // Insecure!</span>
<span class="aural-code-block__line">};</span>`,r.appendChild(o),n.appendChild(r),c.appendChild(n),e.appendChild(c),J(),setTimeout(()=>{var d;typeof((d=window.Aural)==null?void 0:d.initAllCodeBlocks)=="function"&&window.Aural.initAllCodeBlocks()},0),e}},E={...i,args:{code:`import 'aural-ui/dist/aural-ui.css';
import { Button, Card } from 'aural-ui';

export default function App() {
  return (
    <Card>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}`,language:"jsx",fileName:"App.jsx",copyable:!0,showLineNumbers:!0,size:"md"}},x={...i,args:{code:"npm install aural-ui",language:"bash",copyable:!0,terminal:!0,size:"md"}},N={render:e=>{const c=document.createElement("div"),a=document.createElement("div");a.className="aural-code-block";const t=document.createElement("div");t.className="aural-code-block__content";const l=document.createElement("pre");l.className="aural-code-block__pre";const n=document.createElement("code");return n.className="aural-code-block__code",n.textContent=e.code,l.appendChild(n),t.appendChild(l),a.appendChild(t),c.appendChild(a),setTimeout(()=>{var r;typeof((r=window.Aural)==null?void 0:r.initAllCodeBlocks)=="function"&&window.Aural.initAllCodeBlocks()},0),c},args:{code:`npm install aural-ui
npm run dev`}},w={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const c=document.createElement("p");return c.style.cssText="color: var(--color-text-secondary); margin: 0; line-height: 1.8;",c.innerHTML=`Use the <code class="aural-code-inline">console.log()</code> function to output messages.
Variables can be declared with <code class="aural-code-inline">const</code>,
<code class="aural-code-inline">let</code>, or <code class="aural-code-inline">var</code>.`,e.appendChild(c),e}},B={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; gap: 1.5rem; padding: 2rem;";const c=document.createElement("p");return c.style.cssText="color: var(--color-text-secondary); margin: 0 0 1rem 0; font-weight: 600;",c.textContent="The same function in different languages:",e.appendChild(c),[{lang:"JavaScript",code:`function sum(a, b) {
  return a + b;
}`},{lang:"Python",code:`def sum(a, b):
    return a + b`},{lang:"Go",code:`func sum(a, b int) int {
    return a + b
}`},{lang:"Rust",code:`fn sum(a: i32, b: i32) -> i32 {
    a + b
}`}].forEach(({lang:t,code:l})=>{const n=document.createElement("div");n.className="aural-code-block";const r=document.createElement("div");r.className="aural-code-block__header";const o=document.createElement("span");o.className="aural-code-block__language",o.setAttribute("aria-label","Code language"),o.textContent=t,r.appendChild(o),n.appendChild(r);const d=document.createElement("div");d.className="aural-code-block__content";const s=document.createElement("pre");s.className="aural-code-block__pre";const u=document.createElement("code");u.className="aural-code-block__code",u.textContent=l,s.appendChild(u),d.appendChild(s),n.appendChild(d),e.appendChild(n)}),setTimeout(()=>{var t;typeof((t=window.Aural)==null?void 0:t.initAllCodeBlocks)=="function"&&window.Aural.initAllCodeBlocks()},0),e}},A={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;",[{size:"sm",label:"Small"},{size:"md",label:"Medium (Default)"},{size:"lg",label:"Large"}].forEach(({size:a,label:t})=>{const l=document.createElement("div"),n=document.createElement("p");n.style.cssText="color: var(--color-text-secondary); font-size: 0.875rem; margin: 0 0 0.5rem 0; font-weight: 600;",n.textContent=t,l.appendChild(n);const r=document.createElement("div");r.className=`aural-code-block${a!=="md"?" aural-code-block--"+a:""}`;const o=document.createElement("div");o.className="aural-code-block__content";const d=document.createElement("pre");d.className="aural-code-block__pre";const s=document.createElement("code");s.className="aural-code-block__code",s.textContent='const greeting = "Hello, World!";',d.appendChild(s),o.appendChild(d),r.appendChild(o),l.appendChild(r),e.appendChild(l)}),setTimeout(()=>{var a;typeof((a=window.Aural)==null?void 0:a.initAllCodeBlocks)=="function"&&window.Aural.initAllCodeBlocks()},0),e}},L={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem;";const c=document.createElement("h3");c.style.cssText="color: var(--color-text-primary); margin: 0 0 1rem 0;",c.textContent="POST /api/users",e.appendChild(c);const a=document.createElement("p");a.style.cssText="color: var(--color-text-secondary); margin: 0 0 1.5rem 0;",a.textContent="Create a new user account.",e.appendChild(a);const t=document.createElement("p");t.style.cssText="color: var(--color-text-primary); font-weight: 600; margin: 1.5rem 0 0.5rem 0;",t.textContent="Request Body:",e.appendChild(t);const l=document.createElement("div");l.className="aural-code-block";const n=document.createElement("div");n.className="aural-code-block__header";const r=document.createElement("span");r.className="aural-code-block__language",r.setAttribute("aria-label","Code language"),r.textContent="JSON",n.appendChild(r);const o=document.createElement("button");o.className="aural-code-block__copy",o.setAttribute("aria-label","Copy code to clipboard"),o.innerHTML='<i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy',n.appendChild(o),l.appendChild(n);const d=document.createElement("div");d.className="aural-code-block__content";const s=document.createElement("pre");s.className="aural-code-block__pre";const u=document.createElement("code");u.className="aural-code-block__code",u.textContent=`{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure_password"
}`,s.appendChild(u),d.appendChild(s),l.appendChild(d),e.appendChild(l);const S=document.createElement("p");S.style.cssText="color: var(--color-text-primary); font-weight: 600; margin: 1.5rem 0 0.5rem 0;",S.textContent="Response:",e.appendChild(S);const p=document.createElement("div");p.className="aural-code-block";const m=document.createElement("div");m.className="aural-code-block__header";const b=document.createElement("span");b.className="aural-code-block__language",b.setAttribute("aria-label","Code language"),b.textContent="JSON",m.appendChild(b);const g=document.createElement("button");g.className="aural-code-block__copy",g.setAttribute("aria-label","Copy code to clipboard"),g.innerHTML='<i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy',m.appendChild(g),p.appendChild(m);const q=document.createElement("div");q.className="aural-code-block__content";const z=document.createElement("pre");z.className="aural-code-block__pre";const H=document.createElement("code");return H.className="aural-code-block__code",H.textContent=`{
  "id": "usr_1234567890",
  "name": "John Doe",
  "email": "john@example.com",
  "created_at": "2024-01-15T10:30:00Z"
}`,z.appendChild(H),q.appendChild(z),p.appendChild(q),e.appendChild(p),J(),setTimeout(()=>{var j;typeof((j=window.Aural)==null?void 0:j.initAllCodeBlocks)=="function"&&window.Aural.initAllCodeBlocks()},0),e}},T={render:e=>Se(()=>{const c=document.createElement("div");c.className="aural-code-block";const a=document.createElement("div");a.className="aural-code-block__header";const t=document.createElement("span");if(t.className="aural-code-block__language",t.setAttribute("aria-label","Code language"),t.textContent=e.language,a.appendChild(t),e.copyable){const o=document.createElement("button");o.className="aural-code-block__copy",o.setAttribute("aria-label","Copy code to clipboard"),o.innerHTML='<i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy',a.appendChild(o)}c.appendChild(a);const l=document.createElement("div");l.className="aural-code-block__content";const n=document.createElement("pre");n.className="aural-code-block__pre";const r=document.createElement("code");return r.className="aural-code-block__code",r.textContent=e.code,n.appendChild(r),l.appendChild(n),c.appendChild(l),setTimeout(()=>{var o;typeof window.lucide<"u"&&window.lucide.createIcons({nameAttr:"data-lucide"}),typeof((o=window.Aural)==null?void 0:o.initAllCodeBlocks)=="function"&&window.Aural.initAllCodeBlocks()},100),c}),args:{code:"function greet(name) {\n  return `Hello, ${name}!`;\n}",language:"JavaScript",copyable:!0},argTypes:{code:{control:"text",description:"Code content to display"},language:{control:"select",options:["JavaScript","HTML","CSS","Python","Bash","JSON"],description:"Programming language label"},copyable:{control:"boolean",description:"Show copy button"}}};var P,M,D;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    const codeBlock = document.createElement('div');
    const classes = ['aural-code-block'];
    if (args.showLineNumbers) classes.push('aural-code-block--line-numbers');
    if (args.terminal) classes.push('aural-code-block--terminal');
    if (args.size && args.size !== 'md') classes.push(\`aural-code-block--\${args.size}\`);
    codeBlock.className = classes.join(' ');
    const header = document.createElement('div');
    header.className = 'aural-code-block__header';
    const languageLabel = document.createElement('span');
    languageLabel.className = 'aural-code-block__language';
    languageLabel.setAttribute('aria-label', 'Code language');
    languageLabel.textContent = args.fileName || args.language;
    header.appendChild(languageLabel);
    if (args.copyable) {
      const copyButton = document.createElement('button');
      copyButton.className = 'aural-code-block__copy';
      copyButton.setAttribute('aria-label', 'Copy code to clipboard');
      copyButton.innerHTML = '<i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy';
      header.appendChild(copyButton);
    }
    codeBlock.appendChild(header);
    const content = document.createElement('div');
    content.className = 'aural-code-block__content';
    const pre = document.createElement('pre');
    pre.className = 'aural-code-block__pre';
    const code = document.createElement('code');
    code.className = 'aural-code-block__code';
    code.textContent = args.code;
    pre.appendChild(code);
    content.appendChild(pre);
    codeBlock.appendChild(content);
    container.appendChild(codeBlock);
    initLucideIcons(container);

    // Initialize code blocks if Aural is available
    setTimeout(() => {
      if (typeof (window as any).Aural?.initAllCodeBlocks === 'function') {
        (window as any).Aural.initAllCodeBlocks();
      }
    }, 0);
    return container;
  },
  args: {
    code: \`function greet(name) {
  return \\\`Hello, \\\${name}!\\\`;
}

console.log(greet('World'));\`,
    language: 'javascript',
    showLineNumbers: false,
    copyable: true,
    size: 'md',
    terminal: false
  }
}`,...(D=(M=i.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var I,O,W;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...JavaScript,
  args: {
    code: \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Aural UI</title>
  <link rel="stylesheet" href="aural-ui.css">
</head>
<body>
  <button class="btn btn-primary">Click me</button>
</body>
</html>\`,
    language: 'html',
    copyable: true,
    size: 'md'
  }
}`,...(W=(O=h.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var $,R,V;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...JavaScript,
  args: {
    code: \`.btn {
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-text-inverse);
}\`,
    language: 'css',
    fileName: 'button.css',
    copyable: true,
    size: 'md'
  }
}`,...(V=(R=C.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var U,G,F;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...JavaScript,
  args: {
    code: \`$ npm install aural-ui
$ npm run dev

> aural-ui@1.0.0 dev
> vite

  VITE v4.0.0  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose\`,
    language: 'bash',
    copyable: true,
    terminal: true,
    size: 'md'
  }
}`,...(F=(G=y.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var Y,Z,K;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...JavaScript,
  args: {
    code: \`{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "aural-ui": "^1.0.0",
    "react": "^18.2.0"
  }
}\`,
    language: 'json',
    fileName: 'package.json',
    copyable: true,
    size: 'md'
  }
}`,...(K=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var Q,X,ee;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...JavaScript,
  args: {
    code: \`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Print first 10 numbers
for i in range(10):
    print(fibonacci(i))\`,
    language: 'python',
    fileName: 'fibonacci.py',
    copyable: true,
    size: 'md'
  }
}`,...(ee=(X=_.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ne,ae,te;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...JavaScript,
  args: {
    code: \`const user = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin'
};

function updateUser(updates) {
  return { ...user, ...updates };
}\`,
    language: 'javascript',
    showLineNumbers: true,
    copyable: true,
    size: 'md'
  }
}`,...(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ce,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    const codeBlock = document.createElement('div');
    codeBlock.className = 'aural-code-block aural-code-block--line-numbers';
    const header = document.createElement('div');
    header.className = 'aural-code-block__header';
    const languageLabel = document.createElement('span');
    languageLabel.className = 'aural-code-block__language';
    languageLabel.setAttribute('aria-label', 'Code language');
    languageLabel.textContent = 'JavaScript';
    header.appendChild(languageLabel);
    const copyButton = document.createElement('button');
    copyButton.className = 'aural-code-block__copy';
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    copyButton.innerHTML = '<i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy';
    header.appendChild(copyButton);
    codeBlock.appendChild(header);
    const content = document.createElement('div');
    content.className = 'aural-code-block__content';
    const pre = document.createElement('pre');
    pre.className = 'aural-code-block__pre';
    const code = document.createElement('code');
    code.className = 'aural-code-block__code';
    code.innerHTML = \`<span class="aural-code-block__line">const user = {</span>
<span class="aural-code-block__line aural-code-block__line--highlight">  name: 'John Doe',</span>
<span class="aural-code-block__line aural-code-block__line--success">  email: 'john@example.com',</span>
<span class="aural-code-block__line aural-code-block__line--error">  password: '123456', // Insecure!</span>
<span class="aural-code-block__line">};</span>\`;
    pre.appendChild(code);
    content.appendChild(pre);
    codeBlock.appendChild(content);
    container.appendChild(codeBlock);
    initLucideIcons(container);
    setTimeout(() => {
      if (typeof (window as any).Aural?.initAllCodeBlocks === 'function') {
        (window as any).Aural.initAllCodeBlocks();
      }
    }, 0);
    return container;
  }
}`,...(le=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var re,se,de;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...JavaScript,
  args: {
    code: \`import 'aural-ui/dist/aural-ui.css';
import { Button, Card } from 'aural-ui';

export default function App() {
  return (
    <Card>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}\`,
    language: 'jsx',
    fileName: 'App.jsx',
    copyable: true,
    showLineNumbers: true,
    size: 'md'
  }
}`,...(de=(se=E.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ie,ue,pe;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...JavaScript,
  args: {
    code: \`npm install aural-ui\`,
    language: 'bash',
    copyable: true,
    terminal: true,
    size: 'md'
  }
}`,...(pe=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,be,ge;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    const codeBlock = document.createElement('div');
    codeBlock.className = 'aural-code-block';
    const content = document.createElement('div');
    content.className = 'aural-code-block__content';
    const pre = document.createElement('pre');
    pre.className = 'aural-code-block__pre';
    const code = document.createElement('code');
    code.className = 'aural-code-block__code';
    code.textContent = args.code;
    pre.appendChild(code);
    content.appendChild(pre);
    codeBlock.appendChild(content);
    container.appendChild(codeBlock);
    setTimeout(() => {
      if (typeof (window as any).Aural?.initAllCodeBlocks === 'function') {
        (window as any).Aural.initAllCodeBlocks();
      }
    }, 0);
    return container;
  },
  args: {
    code: \`npm install aural-ui
npm run dev\`
  }
}`,...(ge=(be=N.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var he,Ce,ye;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const paragraph = document.createElement('p');
    paragraph.style.cssText = 'color: var(--color-text-secondary); margin: 0; line-height: 1.8;';
    paragraph.innerHTML = \`Use the <code class="aural-code-inline">console.log()</code> function to output messages.
Variables can be declared with <code class="aural-code-inline">const</code>,
<code class="aural-code-inline">let</code>, or <code class="aural-code-inline">var</code>.\`;
    container.appendChild(paragraph);
    return container;
  }
}`,...(ye=(Ce=w.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source}}};var ke,_e,fe;B.parameters={...B.parameters,docs:{...(ke=B.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 1.5rem; padding: 2rem;';
    const title = document.createElement('p');
    title.style.cssText = 'color: var(--color-text-secondary); margin: 0 0 1rem 0; font-weight: 600;';
    title.textContent = 'The same function in different languages:';
    container.appendChild(title);
    const languages = [{
      lang: 'JavaScript',
      code: 'function sum(a, b) {\\n  return a + b;\\n}'
    }, {
      lang: 'Python',
      code: 'def sum(a, b):\\n    return a + b'
    }, {
      lang: 'Go',
      code: 'func sum(a, b int) int {\\n    return a + b\\n}'
    }, {
      lang: 'Rust',
      code: 'fn sum(a: i32, b: i32) -> i32 {\\n    a + b\\n}'
    }];
    languages.forEach(({
      lang,
      code
    }) => {
      const codeBlock = document.createElement('div');
      codeBlock.className = 'aural-code-block';
      const header = document.createElement('div');
      header.className = 'aural-code-block__header';
      const languageLabel = document.createElement('span');
      languageLabel.className = 'aural-code-block__language';
      languageLabel.setAttribute('aria-label', 'Code language');
      languageLabel.textContent = lang;
      header.appendChild(languageLabel);
      codeBlock.appendChild(header);
      const content = document.createElement('div');
      content.className = 'aural-code-block__content';
      const pre = document.createElement('pre');
      pre.className = 'aural-code-block__pre';
      const codeElement = document.createElement('code');
      codeElement.className = 'aural-code-block__code';
      codeElement.textContent = code;
      pre.appendChild(codeElement);
      content.appendChild(pre);
      codeBlock.appendChild(content);
      container.appendChild(codeBlock);
    });
    setTimeout(() => {
      if (typeof (window as any).Aural?.initAllCodeBlocks === 'function') {
        (window as any).Aural.initAllCodeBlocks();
      }
    }, 0);
    return container;
  }
}`,...(fe=(_e=B.parameters)==null?void 0:_e.docs)==null?void 0:fe.source}}};var ve,Ee,xe;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 2rem; padding: 2rem;';
    const sizes = [{
      size: 'sm',
      label: 'Small'
    }, {
      size: 'md',
      label: 'Medium (Default)'
    }, {
      size: 'lg',
      label: 'Large'
    }];
    sizes.forEach(({
      size,
      label
    }) => {
      const wrapper = document.createElement('div');
      const labelEl = document.createElement('p');
      labelEl.style.cssText = 'color: var(--color-text-secondary); font-size: 0.875rem; margin: 0 0 0.5rem 0; font-weight: 600;';
      labelEl.textContent = label;
      wrapper.appendChild(labelEl);
      const codeBlock = document.createElement('div');
      codeBlock.className = \`aural-code-block\${size !== 'md' ? ' aural-code-block--' + size : ''}\`;
      const content = document.createElement('div');
      content.className = 'aural-code-block__content';
      const pre = document.createElement('pre');
      pre.className = 'aural-code-block__pre';
      const code = document.createElement('code');
      code.className = 'aural-code-block__code';
      code.textContent = 'const greeting = "Hello, World!";';
      pre.appendChild(code);
      content.appendChild(pre);
      codeBlock.appendChild(content);
      wrapper.appendChild(codeBlock);
      container.appendChild(wrapper);
    });
    setTimeout(() => {
      if (typeof (window as any).Aural?.initAllCodeBlocks === 'function') {
        (window as any).Aural.initAllCodeBlocks();
      }
    }, 0);
    return container;
  }
}`,...(xe=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:xe.source}}};var Ne,we,Be;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem;';
    const title = document.createElement('h3');
    title.style.cssText = 'color: var(--color-text-primary); margin: 0 0 1rem 0;';
    title.textContent = 'POST /api/users';
    container.appendChild(title);
    const description = document.createElement('p');
    description.style.cssText = 'color: var(--color-text-secondary); margin: 0 0 1.5rem 0;';
    description.textContent = 'Create a new user account.';
    container.appendChild(description);
    const requestLabel = document.createElement('p');
    requestLabel.style.cssText = 'color: var(--color-text-primary); font-weight: 600; margin: 1.5rem 0 0.5rem 0;';
    requestLabel.textContent = 'Request Body:';
    container.appendChild(requestLabel);

    // Request code block
    const requestBlock = document.createElement('div');
    requestBlock.className = 'aural-code-block';
    const requestHeader = document.createElement('div');
    requestHeader.className = 'aural-code-block__header';
    const requestLang = document.createElement('span');
    requestLang.className = 'aural-code-block__language';
    requestLang.setAttribute('aria-label', 'Code language');
    requestLang.textContent = 'JSON';
    requestHeader.appendChild(requestLang);
    const requestCopy = document.createElement('button');
    requestCopy.className = 'aural-code-block__copy';
    requestCopy.setAttribute('aria-label', 'Copy code to clipboard');
    requestCopy.innerHTML = '<i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy';
    requestHeader.appendChild(requestCopy);
    requestBlock.appendChild(requestHeader);
    const requestContent = document.createElement('div');
    requestContent.className = 'aural-code-block__content';
    const requestPre = document.createElement('pre');
    requestPre.className = 'aural-code-block__pre';
    const requestCode = document.createElement('code');
    requestCode.className = 'aural-code-block__code';
    requestCode.textContent = \`{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure_password"
}\`;
    requestPre.appendChild(requestCode);
    requestContent.appendChild(requestPre);
    requestBlock.appendChild(requestContent);
    container.appendChild(requestBlock);
    const responseLabel = document.createElement('p');
    responseLabel.style.cssText = 'color: var(--color-text-primary); font-weight: 600; margin: 1.5rem 0 0.5rem 0;';
    responseLabel.textContent = 'Response:';
    container.appendChild(responseLabel);

    // Response code block
    const responseBlock = document.createElement('div');
    responseBlock.className = 'aural-code-block';
    const responseHeader = document.createElement('div');
    responseHeader.className = 'aural-code-block__header';
    const responseLang = document.createElement('span');
    responseLang.className = 'aural-code-block__language';
    responseLang.setAttribute('aria-label', 'Code language');
    responseLang.textContent = 'JSON';
    responseHeader.appendChild(responseLang);
    const responseCopy = document.createElement('button');
    responseCopy.className = 'aural-code-block__copy';
    responseCopy.setAttribute('aria-label', 'Copy code to clipboard');
    responseCopy.innerHTML = '<i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy';
    responseHeader.appendChild(responseCopy);
    responseBlock.appendChild(responseHeader);
    const responseContent = document.createElement('div');
    responseContent.className = 'aural-code-block__content';
    const responsePre = document.createElement('pre');
    responsePre.className = 'aural-code-block__pre';
    const responseCode = document.createElement('code');
    responseCode.className = 'aural-code-block__code';
    responseCode.textContent = \`{
  "id": "usr_1234567890",
  "name": "John Doe",
  "email": "john@example.com",
  "created_at": "2024-01-15T10:30:00Z"
}\`;
    responsePre.appendChild(responseCode);
    responseContent.appendChild(responsePre);
    responseBlock.appendChild(responseContent);
    container.appendChild(responseBlock);
    initLucideIcons(container);
    setTimeout(() => {
      if (typeof (window as any).Aural?.initAllCodeBlocks === 'function') {
        (window as any).Aural.initAllCodeBlocks();
      }
    }, 0);
    return container;
  }
}`,...(Be=(we=L.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var Ae,Le,Te;T.parameters={...T.parameters,docs:{...(Ae=T.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const codeBlock = document.createElement('div');
      codeBlock.className = 'aural-code-block';
      const header = document.createElement('div');
      header.className = 'aural-code-block__header';
      const languageLabel = document.createElement('span');
      languageLabel.className = 'aural-code-block__language';
      languageLabel.setAttribute('aria-label', 'Code language');
      languageLabel.textContent = args.language;
      header.appendChild(languageLabel);
      if (args.copyable) {
        const copyButton = document.createElement('button');
        copyButton.className = 'aural-code-block__copy';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        copyButton.innerHTML = '<i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy';
        header.appendChild(copyButton);
      }
      codeBlock.appendChild(header);
      const content = document.createElement('div');
      content.className = 'aural-code-block__content';
      const pre = document.createElement('pre');
      pre.className = 'aural-code-block__pre';
      const code = document.createElement('code');
      code.className = 'aural-code-block__code';
      code.textContent = args.code;
      pre.appendChild(code);
      content.appendChild(pre);
      codeBlock.appendChild(content);
      setTimeout(() => {
        if (typeof (window as any).lucide !== 'undefined') {
          (window as any).lucide.createIcons({
            nameAttr: 'data-lucide'
          });
        }
        if (typeof (window as any).Aural?.initAllCodeBlocks === 'function') {
          (window as any).Aural.initAllCodeBlocks();
        }
      }, 100);
      return codeBlock;
    });
  },
  args: {
    code: \`function greet(name) {
  return \\\`Hello, \\\${name}!\\\`;
}\`,
    language: 'JavaScript',
    copyable: true
  },
  argTypes: {
    code: {
      control: 'text',
      description: 'Code content to display'
    },
    language: {
      control: 'select',
      options: ['JavaScript', 'HTML', 'CSS', 'Python', 'Bash', 'JSON'],
      description: 'Programming language label'
    },
    copyable: {
      control: 'boolean',
      description: 'Show copy button'
    }
  }
}`,...(Te=(Le=T.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};const He=["JavaScript","HTML","CSS","Bash","JSON","Python","WithLineNumbers","WithHighlightedLines","WithFileName","WithCopyButton","WithoutHeader","InlineCode","MultiLanguageDemo","SizeVariants","APIDocumentation","ThemeComparison"];export{L as APIDocumentation,y as Bash,C as CSS,h as HTML,w as InlineCode,k as JSON,i as JavaScript,B as MultiLanguageDemo,_ as Python,A as SizeVariants,T as ThemeComparison,x as WithCopyButton,E as WithFileName,v as WithHighlightedLines,f as WithLineNumbers,N as WithoutHeader,He as __namedExportsOrder,ze as default};
