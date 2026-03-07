const Le={title:"Components/Input",tags:["autodocs"],parameters:{docs:{description:{component:"Text input fields with validation states, icons, and various sizes. Supports labels, helper text, and error/success feedback."}}},argTypes:{label:{control:"text",description:"Input label"},placeholder:{control:"text",description:"Placeholder text"},type:{control:"select",options:["text","email","password","number","tel","url"],description:"Input type"},size:{control:"select",options:["sm","default","lg"],description:"Input size"},state:{control:"select",options:["default","error","success"],description:"Validation state"},helperText:{control:"text",description:"Helper or error text"},disabled:{control:"boolean",description:"Disabled state"}}},d={render:e=>{const l=document.createElement("div");l.style.padding="2rem",l.style.maxWidth="400px";const o=document.createElement("div");o.className="form-group";const a=`input-${Math.random().toString(36).substr(2,9)}`,n=`${a}-helper`;if(e.label){const r=document.createElement("label");r.className="label",r.textContent=e.label,r.htmlFor=a,o.appendChild(r)}const t=document.createElement("input");t.id=a,t.type=e.type||"text";const s=["input"];if(e.size==="sm"?s.push("input-sm"):e.size==="lg"&&s.push("input-lg"),t.className=s.join(" "),t.placeholder=e.placeholder||"",t.disabled=e.disabled||!1,e.state==="error"?(t.classList.add("error"),t.setAttribute("aria-invalid","true"),e.helperText&&t.setAttribute("aria-errormessage",n)):e.state==="success"&&(t.classList.add("success"),t.setAttribute("aria-invalid","false")),e.helperText&&t.setAttribute("aria-describedby",n),o.appendChild(t),e.helperText){const r=document.createElement("p");r.id=n,e.state==="error"?(r.className="form-error",r.setAttribute("role","alert")):e.state==="success"?r.className="form-success":r.className="form-helper",r.textContent=e.helperText,o.appendChild(r)}return l.appendChild(o),l},args:{label:"Email",placeholder:"Enter your email",type:"email",size:"default",state:"default"}},f={...d,args:{label:"Email",placeholder:"invalid-email",type:"email",size:"default",state:"error",helperText:"Please enter a valid email address"}},x={...d,args:{label:"Email",placeholder:"you@example.com",type:"email",size:"default",state:"success",helperText:"Looks good!"}},v={...d,args:{label:"Email Address",placeholder:"you@example.com",type:"email",size:"default",state:"default",helperText:"We'll never share your email"}},C={...d,args:{label:"Small Input",placeholder:"Small size",size:"sm"}},y={...d,args:{label:"Large Input",placeholder:"Large size",size:"lg"}},E={...d,args:{label:"Disabled Input",placeholder:"Cannot type here",disabled:!0}},w={...d,args:{label:"Password",placeholder:"Enter your password",type:"password"}},N={...d,args:{label:"Age",placeholder:"Enter your age",type:"number"}},I={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px";const l=document.createElement("div");l.className="form-group";const o=document.createElement("label");o.className="label",o.textContent="Search",l.appendChild(o);const a=document.createElement("div");a.className="input-group input-group-prefix";const n=document.createElement("span");n.className="input-group-icon input-group-icon-left",n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>';const t=document.createElement("input");return t.type="text",t.className="input",t.placeholder="Search...",a.appendChild(n),a.appendChild(t),l.appendChild(a),e.appendChild(l),e}},S={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px";const l=document.createElement("div");l.className="form-group";const o=document.createElement("label");o.className="label",o.textContent="Email",l.appendChild(o);const a=document.createElement("div");a.className="input-group input-group-suffix";const n=document.createElement("input");n.type="email",n.className="input",n.placeholder="you@example.com";const t=document.createElement("span");return t.className="input-group-icon input-group-icon-right",t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path></svg>',a.appendChild(n),a.appendChild(t),l.appendChild(a),e.appendChild(l),e}},G={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px";const l=document.createElement("div");l.className="form-group";const o=document.createElement("label");o.className="label",o.textContent="Password",l.appendChild(o);const a=document.createElement("div");a.className="input-group input-group-prefix input-group-suffix";const n=document.createElement("span");n.className="input-group-icon input-group-icon-left",n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>';const t=document.createElement("input");t.type="password",t.className="input",t.placeholder="Enter password";const s=document.createElement("span");return s.className="input-group-icon input-group-icon-right",s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>',a.appendChild(n),a.appendChild(t),a.appendChild(s),l.appendChild(a),e.appendChild(l),e}},k={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="400px",e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem",[{label:"Small",className:"input input-sm",placeholder:"Small input"},{label:"Default",className:"input",placeholder:"Default input"},{label:"Large",className:"input input-lg",placeholder:"Large input"}].forEach(({label:o,className:a,placeholder:n})=>{const t=document.createElement("div");t.className="form-group";const s=document.createElement("label");s.className="label",s.textContent=o,t.appendChild(s);const r=document.createElement("input");r.type="text",r.className=a,r.placeholder=n,t.appendChild(r),e.appendChild(t)}),e}},B={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px",e.style.display="flex",e.style.flexDirection="column",e.style.gap="1.5rem";const l='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>';return[{label:"Small",groupClass:"input-group input-group-prefix input-group-sm",inputClass:"input input-sm",placeholder:"Small search..."},{label:"Default",groupClass:"input-group input-group-prefix",inputClass:"input",placeholder:"Default search..."},{label:"Large",groupClass:"input-group input-group-prefix input-group-lg",inputClass:"input input-lg",placeholder:"Large search..."}].forEach(({label:a,groupClass:n,inputClass:t,placeholder:s})=>{const r=document.createElement("div");r.className="form-group";const c=document.createElement("label");c.className="label",c.textContent=a,r.appendChild(c);const u=document.createElement("div");u.className=n;const p=document.createElement("span");p.className="input-group-icon input-group-icon-left",p.innerHTML=l;const i=document.createElement("input");i.type="text",i.className=t,i.placeholder=s,u.appendChild(p),u.appendChild(i),r.appendChild(u),e.appendChild(r)}),e}},T={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="400px",e.style.display="flex",e.style.flexDirection="column",e.style.gap="1.5rem",[{label:"Default",state:"default",helperText:"This is helper text",helperClass:"form-helper"},{label:"Error",state:"error",helperText:"Please enter a valid email address",helperClass:"form-error"},{label:"Success",state:"success",helperText:"Looks good!",helperClass:"form-success"}].forEach(({label:o,state:a,helperText:n,helperClass:t})=>{const s=document.createElement("div");s.className="form-group";const r=`input-${a}-${Math.random().toString(36).substr(2,9)}`,c=`${r}-helper`,u=document.createElement("label");u.className="label",u.textContent=o,u.htmlFor=r,s.appendChild(u);const p=document.createElement("input");if(p.id=r,p.type="email",p.className="input",p.placeholder=a==="error"?"invalid-email":"you@example.com",a==="error"?(p.classList.add("error"),p.setAttribute("aria-invalid","true"),p.setAttribute("aria-errormessage",c)):a==="success"&&(p.classList.add("success"),p.setAttribute("aria-invalid","false")),n&&p.setAttribute("aria-describedby",c),s.appendChild(p),n){const i=document.createElement("p");i.id=c,i.className=t,i.textContent=n,a==="error"&&i.setAttribute("role","alert"),s.appendChild(i)}e.appendChild(s)}),e}},L={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px";const l=document.createElement("div");l.className="form-group";const o=document.createElement("label");o.className="label",o.textContent="Quantity",l.appendChild(o);const a=document.createElement("div");a.className="input-number";const n=document.createElement("input");n.type="number",n.className="input",n.value="5",n.min="1",n.max="100";const t=document.createElement("div");t.className="input-number__controls";const s=document.createElement("button");s.type="button",s.className="input-number__button",s.setAttribute("data-action","increment"),s.setAttribute("aria-label","Increment"),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>';const r=document.createElement("button");return r.type="button",r.className="input-number__button",r.setAttribute("data-action","decrement"),r.setAttribute("aria-label","Decrement"),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>',s.addEventListener("click",()=>{const c=parseInt(n.value)||0,u=parseInt(n.max)||1/0;c<u&&(n.value=String(c+1))}),r.addEventListener("click",()=>{const c=parseInt(n.value)||0,u=parseInt(n.min)||-1/0;c>u&&(n.value=String(c-1))}),t.appendChild(s),t.appendChild(r),a.appendChild(n),a.appendChild(t),l.appendChild(a),e.appendChild(l),e}},A={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px",e.style.display="grid",e.style.gridTemplateColumns="1fr 1fr 1fr",e.style.gap="1rem";const l='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>',o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>';return[{label:"Small",numberClass:"input-number input-number--sm",inputClass:"input input-sm",value:"10"},{label:"Default",numberClass:"input-number",inputClass:"input",value:"25"},{label:"Large",numberClass:"input-number input-number--lg",inputClass:"input input-lg",value:"50"}].forEach(({label:n,numberClass:t,inputClass:s,value:r})=>{const c=document.createElement("div");c.className="form-group";const u=document.createElement("label");u.className="label",u.textContent=n,c.appendChild(u);const p=document.createElement("div");p.className=t;const i=document.createElement("input");i.type="number",i.className=s,i.value=r,i.min="0",i.max="100";const b=document.createElement("div");b.className="input-number__controls";const m=document.createElement("button");m.type="button",m.className="input-number__button",m.setAttribute("data-action","increment"),m.setAttribute("aria-label","Increment"),m.innerHTML=l;const h=document.createElement("button");h.type="button",h.className="input-number__button",h.setAttribute("data-action","decrement"),h.setAttribute("aria-label","Decrement"),h.innerHTML=o,m.addEventListener("click",()=>{const g=parseInt(i.value)||0,z=parseInt(i.max)||1/0;g<z&&(i.value=String(g+1))}),h.addEventListener("click",()=>{const g=parseInt(i.value)||0,z=parseInt(i.min)||-1/0;g>z&&(i.value=String(g-1))}),b.appendChild(m),b.appendChild(h),p.appendChild(i),p.appendChild(b),c.appendChild(p),e.appendChild(c)}),e}};var D,W,M;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    // Generate unique ID for accessibility
    const inputId = \`input-\${Math.random().toString(36).substr(2, 9)}\`;
    const helperId = \`\${inputId}-helper\`;
    if (args.label) {
      const label = document.createElement('label');
      label.className = 'label';
      label.textContent = args.label;
      label.htmlFor = inputId;
      formGroup.appendChild(label);
    }
    const input = document.createElement('input');
    input.id = inputId;
    input.type = args.type || 'text';

    // Build input classes correctly
    const inputClasses = ['input'];
    if (args.size === 'sm') {
      inputClasses.push('input-sm');
    } else if (args.size === 'lg') {
      inputClasses.push('input-lg');
    }
    input.className = inputClasses.join(' ');
    input.placeholder = args.placeholder || '';
    input.disabled = args.disabled || false;

    // Add state classes and ARIA attributes
    if (args.state === 'error') {
      input.classList.add('error');
      input.setAttribute('aria-invalid', 'true');
      if (args.helperText) {
        input.setAttribute('aria-errormessage', helperId);
      }
    } else if (args.state === 'success') {
      input.classList.add('success');
      input.setAttribute('aria-invalid', 'false');
    }

    // Associate helper text with input
    if (args.helperText) {
      input.setAttribute('aria-describedby', helperId);
    }
    formGroup.appendChild(input);
    if (args.helperText) {
      const helperText = document.createElement('p');
      helperText.id = helperId;
      if (args.state === 'error') {
        helperText.className = 'form-error';
        helperText.setAttribute('role', 'alert');
      } else if (args.state === 'success') {
        helperText.className = 'form-success';
      } else {
        helperText.className = 'form-helper';
      }
      helperText.textContent = args.helperText;
      formGroup.appendChild(helperText);
    }
    container.appendChild(formGroup);
    return container;
  },
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    size: 'default',
    state: 'default'
  }
}`,...(M=(W=d.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var _,H,P;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Email',
    placeholder: 'invalid-email',
    type: 'email',
    size: 'default',
    state: 'error',
    helperText: 'Please enter a valid email address'
  }
}`,...(P=(H=f.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var j,$,F;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    size: 'default',
    state: 'success',
    helperText: 'Looks good!'
  }
}`,...(F=($=x.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var V,Q,Z;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
    size: 'default',
    state: 'default',
    helperText: "We'll never share your email"
  }
}`,...(Z=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var q,O,R;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'sm'
  }
}`,...(R=(O=C.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var J,K,U;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'lg'
  }
}`,...(U=(K=y.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,Y,ee;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    disabled: true
  }
}`,...(ee=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,ne,re;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password'
  }
}`,...(re=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,le,se;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number'
  }
}`,...(se=(le=N.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var oe,ie,pe;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    const label = document.createElement('label');
    label.className = 'label';
    label.textContent = 'Search';
    formGroup.appendChild(label);
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group input-group-prefix';
    const iconSpan = document.createElement('span');
    iconSpan.className = 'input-group-icon input-group-icon-left';
    iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>';
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'input';
    input.placeholder = 'Search...';
    inputGroup.appendChild(iconSpan);
    inputGroup.appendChild(input);
    formGroup.appendChild(inputGroup);
    container.appendChild(formGroup);
    return container;
  }
}`,...(pe=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var ce,ue,de;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    const label = document.createElement('label');
    label.className = 'label';
    label.textContent = 'Email';
    formGroup.appendChild(label);
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group input-group-suffix';
    const input = document.createElement('input');
    input.type = 'email';
    input.className = 'input';
    input.placeholder = 'you@example.com';
    const iconSpan = document.createElement('span');
    iconSpan.className = 'input-group-icon input-group-icon-right';
    iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path></svg>';
    inputGroup.appendChild(input);
    inputGroup.appendChild(iconSpan);
    formGroup.appendChild(inputGroup);
    container.appendChild(formGroup);
    return container;
  }
}`,...(de=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,he,ge;G.parameters={...G.parameters,docs:{...(me=G.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    const label = document.createElement('label');
    label.className = 'label';
    label.textContent = 'Password';
    formGroup.appendChild(label);
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group input-group-prefix input-group-suffix';
    const leftIcon = document.createElement('span');
    leftIcon.className = 'input-group-icon input-group-icon-left';
    leftIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>';
    const input = document.createElement('input');
    input.type = 'password';
    input.className = 'input';
    input.placeholder = 'Enter password';
    const rightIcon = document.createElement('span');
    rightIcon.className = 'input-group-icon input-group-icon-right';
    rightIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    inputGroup.appendChild(leftIcon);
    inputGroup.appendChild(input);
    inputGroup.appendChild(rightIcon);
    formGroup.appendChild(inputGroup);
    container.appendChild(formGroup);
    return container;
  }
}`,...(ge=(he=G.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var be,fe,xe;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';
    const sizes = [{
      label: 'Small',
      className: 'input input-sm',
      placeholder: 'Small input'
    }, {
      label: 'Default',
      className: 'input',
      placeholder: 'Default input'
    }, {
      label: 'Large',
      className: 'input input-lg',
      placeholder: 'Large input'
    }];
    sizes.forEach(({
      label,
      className,
      placeholder
    }) => {
      const formGroup = document.createElement('div');
      formGroup.className = 'form-group';
      const labelEl = document.createElement('label');
      labelEl.className = 'label';
      labelEl.textContent = label;
      formGroup.appendChild(labelEl);
      const input = document.createElement('input');
      input.type = 'text';
      input.className = className;
      input.placeholder = placeholder;
      formGroup.appendChild(input);
      container.appendChild(formGroup);
    });
    return container;
  }
}`,...(xe=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ve,Ce,ye;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1.5rem';
    const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>';
    const sizes = [{
      label: 'Small',
      groupClass: 'input-group input-group-prefix input-group-sm',
      inputClass: 'input input-sm',
      placeholder: 'Small search...'
    }, {
      label: 'Default',
      groupClass: 'input-group input-group-prefix',
      inputClass: 'input',
      placeholder: 'Default search...'
    }, {
      label: 'Large',
      groupClass: 'input-group input-group-prefix input-group-lg',
      inputClass: 'input input-lg',
      placeholder: 'Large search...'
    }];
    sizes.forEach(({
      label,
      groupClass,
      inputClass,
      placeholder
    }) => {
      const formGroup = document.createElement('div');
      formGroup.className = 'form-group';
      const labelEl = document.createElement('label');
      labelEl.className = 'label';
      labelEl.textContent = label;
      formGroup.appendChild(labelEl);
      const inputGroup = document.createElement('div');
      inputGroup.className = groupClass;
      const iconSpan = document.createElement('span');
      iconSpan.className = 'input-group-icon input-group-icon-left';
      iconSpan.innerHTML = searchIcon;
      const input = document.createElement('input');
      input.type = 'text';
      input.className = inputClass;
      input.placeholder = placeholder;
      inputGroup.appendChild(iconSpan);
      inputGroup.appendChild(input);
      formGroup.appendChild(inputGroup);
      container.appendChild(formGroup);
    });
    return container;
  }
}`,...(ye=(Ce=B.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source}}};var Ee,we,Ne;T.parameters={...T.parameters,docs:{...(Ee=T.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1.5rem';
    const states = [{
      label: 'Default',
      state: 'default',
      helperText: 'This is helper text',
      helperClass: 'form-helper'
    }, {
      label: 'Error',
      state: 'error',
      helperText: 'Please enter a valid email address',
      helperClass: 'form-error'
    }, {
      label: 'Success',
      state: 'success',
      helperText: 'Looks good!',
      helperClass: 'form-success'
    }];
    states.forEach(({
      label,
      state,
      helperText,
      helperClass
    }) => {
      const formGroup = document.createElement('div');
      formGroup.className = 'form-group';
      const inputId = \`input-\${state}-\${Math.random().toString(36).substr(2, 9)}\`;
      const helperId = \`\${inputId}-helper\`;
      const labelEl = document.createElement('label');
      labelEl.className = 'label';
      labelEl.textContent = label;
      labelEl.htmlFor = inputId;
      formGroup.appendChild(labelEl);
      const input = document.createElement('input');
      input.id = inputId;
      input.type = 'email';
      input.className = 'input';
      input.placeholder = state === 'error' ? 'invalid-email' : 'you@example.com';
      if (state === 'error') {
        input.classList.add('error');
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-errormessage', helperId);
      } else if (state === 'success') {
        input.classList.add('success');
        input.setAttribute('aria-invalid', 'false');
      }
      if (helperText) {
        input.setAttribute('aria-describedby', helperId);
      }
      formGroup.appendChild(input);
      if (helperText) {
        const helper = document.createElement('p');
        helper.id = helperId;
        helper.className = helperClass;
        helper.textContent = helperText;
        if (state === 'error') {
          helper.setAttribute('role', 'alert');
        }
        formGroup.appendChild(helper);
      }
      container.appendChild(formGroup);
    });
    return container;
  }
}`,...(Ne=(we=T.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var Ie,Se,Ge;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    const label = document.createElement('label');
    label.className = 'label';
    label.textContent = 'Quantity';
    formGroup.appendChild(label);
    const inputNumber = document.createElement('div');
    inputNumber.className = 'input-number';
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'input';
    input.value = '5';
    input.min = '1';
    input.max = '100';
    const controls = document.createElement('div');
    controls.className = 'input-number__controls';
    const incrementBtn = document.createElement('button');
    incrementBtn.type = 'button';
    incrementBtn.className = 'input-number__button';
    incrementBtn.setAttribute('data-action', 'increment');
    incrementBtn.setAttribute('aria-label', 'Increment');
    incrementBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    const decrementBtn = document.createElement('button');
    decrementBtn.type = 'button';
    decrementBtn.className = 'input-number__button';
    decrementBtn.setAttribute('data-action', 'decrement');
    decrementBtn.setAttribute('aria-label', 'Decrement');
    decrementBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>';

    // Add click handlers
    incrementBtn.addEventListener('click', () => {
      const current = parseInt(input.value) || 0;
      const max = parseInt(input.max) || Infinity;
      if (current < max) {
        input.value = String(current + 1);
      }
    });
    decrementBtn.addEventListener('click', () => {
      const current = parseInt(input.value) || 0;
      const min = parseInt(input.min) || -Infinity;
      if (current > min) {
        input.value = String(current - 1);
      }
    });
    controls.appendChild(incrementBtn);
    controls.appendChild(decrementBtn);
    inputNumber.appendChild(input);
    inputNumber.appendChild(controls);
    formGroup.appendChild(inputNumber);
    container.appendChild(formGroup);
    return container;
  }
}`,...(Ge=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Ge.source}}};var ke,Be,Te;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = '1fr 1fr 1fr';
    container.style.gap = '1rem';
    const upIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    const downIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>';
    const sizes = [{
      label: 'Small',
      numberClass: 'input-number input-number--sm',
      inputClass: 'input input-sm',
      value: '10'
    }, {
      label: 'Default',
      numberClass: 'input-number',
      inputClass: 'input',
      value: '25'
    }, {
      label: 'Large',
      numberClass: 'input-number input-number--lg',
      inputClass: 'input input-lg',
      value: '50'
    }];
    sizes.forEach(({
      label,
      numberClass,
      inputClass,
      value
    }) => {
      const formGroup = document.createElement('div');
      formGroup.className = 'form-group';
      const labelEl = document.createElement('label');
      labelEl.className = 'label';
      labelEl.textContent = label;
      formGroup.appendChild(labelEl);
      const inputNumber = document.createElement('div');
      inputNumber.className = numberClass;
      const input = document.createElement('input');
      input.type = 'number';
      input.className = inputClass;
      input.value = value;
      input.min = '0';
      input.max = '100';
      const controls = document.createElement('div');
      controls.className = 'input-number__controls';
      const incrementBtn = document.createElement('button');
      incrementBtn.type = 'button';
      incrementBtn.className = 'input-number__button';
      incrementBtn.setAttribute('data-action', 'increment');
      incrementBtn.setAttribute('aria-label', 'Increment');
      incrementBtn.innerHTML = upIcon;
      const decrementBtn = document.createElement('button');
      decrementBtn.type = 'button';
      decrementBtn.className = 'input-number__button';
      decrementBtn.setAttribute('data-action', 'decrement');
      decrementBtn.setAttribute('aria-label', 'Decrement');
      decrementBtn.innerHTML = downIcon;

      // Add click handlers
      incrementBtn.addEventListener('click', () => {
        const current = parseInt(input.value) || 0;
        const max = parseInt(input.max) || Infinity;
        if (current < max) {
          input.value = String(current + 1);
        }
      });
      decrementBtn.addEventListener('click', () => {
        const current = parseInt(input.value) || 0;
        const min = parseInt(input.min) || -Infinity;
        if (current > min) {
          input.value = String(current - 1);
        }
      });
      controls.appendChild(incrementBtn);
      controls.appendChild(decrementBtn);
      inputNumber.appendChild(input);
      inputNumber.appendChild(controls);
      formGroup.appendChild(inputNumber);
      container.appendChild(formGroup);
    });
    return container;
  }
}`,...(Te=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};const Ae=["Default","WithError","WithSuccess","WithHelper","Small","Large","Disabled","Password","Number","WithPrefixIcon","WithSuffixIcon","WithBothIcons","InputSizes","InputSizesWithIcons","AllStates","NumberWithSpinners","NumberSpinnerSizes"];export{T as AllStates,d as Default,E as Disabled,k as InputSizes,B as InputSizesWithIcons,y as Large,N as Number,A as NumberSpinnerSizes,L as NumberWithSpinners,w as Password,C as Small,G as WithBothIcons,f as WithError,v as WithHelper,I as WithPrefixIcon,x as WithSuccess,S as WithSuffixIcon,Ae as __namedExportsOrder,Le as default};
