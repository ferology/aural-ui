const Z={title:"Components/Spinner",tags:["autodocs"],parameters:{docs:{description:{component:"Loading indicators for asynchronous operations and processing states."}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Spinner size"},variant:{control:"select",options:["primary","secondary","success","warning","error","white"],description:"Spinner color variant"},type:{control:"select",options:["default","dual","dots","pulse","bars"],description:"Spinner animation type"}}},d={render:e=>{const n=document.createElement("div"),t=["aural-spinner"];e.variant&&t.push(`aural-spinner--${e.variant}`),e.size&&e.size!=="md"&&t.push(`aural-spinner--${e.size}`),n.className=t.join(" "),n.setAttribute("role","status"),n.setAttribute("aria-label","Loading");const r=document.createElement("div");return r.className="aural-spinner__circle",n.appendChild(r),n},args:{size:"md",variant:"primary",type:"default"}},m={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-6)",e.style.alignItems="center",e.style.flexWrap="wrap",e.style.padding="var(--space-6)",[{type:"default",label:"Default"},{type:"dual",label:"Dual Ring"},{type:"dots",label:"Dots"},{type:"pulse",label:"Pulse"},{type:"bars",label:"Bars"}].forEach(({type:t,label:r})=>{const a=document.createElement("div");a.style.textAlign="center";const s=document.createElement("div"),i=["aural-spinner","aural-spinner--primary"];if(t!=="default"&&i.push(`aural-spinner--${t}`),s.className=i.join(" "),s.setAttribute("role","status"),s.setAttribute("aria-label","Loading"),t==="dots")for(let c=0;c<3;c++){const o=document.createElement("div");o.className="aural-spinner__dot",s.appendChild(o)}else if(t==="bars")for(let c=0;c<4;c++){const o=document.createElement("div");o.className="aural-spinner__bar",s.appendChild(o)}else{const c=document.createElement("div");c.className="aural-spinner__circle",s.appendChild(c)}const l=document.createElement("p");l.style.marginTop="var(--space-2)",l.style.fontSize="var(--text-sm)",l.style.color="var(--color-text-secondary)",l.textContent=r,a.appendChild(s),a.appendChild(l),e.appendChild(a)}),e}},u={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-6)",e.style.alignItems="center",e.style.flexWrap="wrap",e.style.padding="var(--space-6)",[{class:"xs",label:"Extra Small"},{class:"sm",label:"Small"},{class:"",label:"Medium"},{class:"lg",label:"Large"},{class:"xl",label:"Extra Large"}].forEach(({class:t,label:r})=>{const a=document.createElement("div");a.style.textAlign="center";const s=document.createElement("div"),i=["aural-spinner","aural-spinner--primary"];t&&i.push(`aural-spinner--${t}`),s.className=i.join(" ");const l=document.createElement("div");l.className="aural-spinner__circle",s.appendChild(l);const c=document.createElement("p");c.style.marginTop="var(--space-2)",c.style.fontSize="var(--text-sm)",c.style.color="var(--color-text-secondary)",c.textContent=r,a.appendChild(s),a.appendChild(c),e.appendChild(a)}),e}},y={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-6)",e.style.alignItems="center",e.style.flexWrap="wrap",e.style.padding="var(--space-6)",[{class:"primary",label:"Primary"},{class:"secondary",label:"Secondary"},{class:"success",label:"Success"},{class:"warning",label:"Warning"},{class:"error",label:"Error"}].forEach(({class:t,label:r})=>{const a=document.createElement("div");a.style.textAlign="center";const s=document.createElement("div");s.className=`aural-spinner aural-spinner--${t}`;const i=document.createElement("div");i.className="aural-spinner__circle",s.appendChild(i);const l=document.createElement("p");l.style.marginTop="var(--space-2)",l.style.fontSize="var(--text-sm)",l.style.color="var(--color-text-secondary)",l.textContent=r,a.appendChild(s),a.appendChild(l),e.appendChild(a)}),e}},b={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.gap="var(--space-4)",e.style.flexWrap="wrap",e.style.padding="var(--space-6)";const n=document.createElement("button");n.className="btn btn-primary",n.disabled=!0,n.setAttribute("aria-busy","true");const t=document.createElement("span");t.className="aural-spinner aural-spinner--xs aural-spinner--white",t.setAttribute("role","status"),t.setAttribute("aria-label","Loading");const r=document.createElement("span");r.className="aural-spinner__circle",t.appendChild(r);const a=document.createElement("span");a.textContent="Loading...",n.appendChild(t),n.appendChild(a);const s=document.createElement("button");s.className="btn btn-secondary",s.disabled=!0,s.setAttribute("aria-busy","true");const i=document.createElement("span");i.className="aural-spinner aural-spinner--xs aural-spinner--primary",i.setAttribute("role","status"),i.setAttribute("aria-label","Processing");const l=document.createElement("span");l.className="aural-spinner__circle",i.appendChild(l);const c=document.createElement("span");c.textContent="Processing",s.appendChild(i),s.appendChild(c);const o=document.createElement("button");o.className="btn btn-success",o.disabled=!0,o.setAttribute("aria-busy","true");const p=document.createElement("span");p.className="aural-spinner aural-spinner--xs aural-spinner--white",p.setAttribute("role","status"),p.setAttribute("aria-label","Saving");const g=document.createElement("span");g.className="aural-spinner__circle",p.appendChild(g);const f=document.createElement("span");return f.textContent="Saving...",o.appendChild(p),o.appendChild(f),e.appendChild(n),e.appendChild(s),e.appendChild(o),e}},x={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.gap="var(--space-6)",e.style.alignItems="center",e.style.flexWrap="wrap",e.style.padding="var(--space-6)";const n=document.createElement("div");n.className="aural-spinner aural-spinner--with-text aural-spinner--primary";const t=document.createElement("div");t.className="aural-spinner__circle",n.appendChild(t);const r=document.createElement("span");r.className="aural-spinner__text",r.textContent="Loading...",n.appendChild(r);const a=document.createElement("div");a.className="aural-spinner aural-spinner--with-text aural-spinner--success";const s=document.createElement("div");s.className="aural-spinner__circle",a.appendChild(s);const i=document.createElement("span");i.className="aural-spinner__text",i.textContent="Processing",a.appendChild(i);const l=document.createElement("div");l.className="aural-spinner aural-spinner--with-text aural-spinner--dots aural-spinner--primary";for(let o=0;o<3;o++){const p=document.createElement("div");p.className="aural-spinner__dot",l.appendChild(p)}const c=document.createElement("span");return c.className="aural-spinner__text",c.textContent="Please wait",l.appendChild(c),e.appendChild(n),e.appendChild(a),e.appendChild(l),e}},E={render:()=>{const e=document.createElement("div");e.className="card",e.style.maxWidth="400px";const n=document.createElement("div");n.className="card-content",n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.gap="var(--space-4)",n.style.padding="var(--space-8)";const t=document.createElement("div");t.className="aural-spinner aural-spinner--lg aural-spinner--primary";const r=document.createElement("div");r.className="aural-spinner__circle",t.appendChild(r);const a=document.createElement("p");return a.style.color="var(--color-text-secondary)",a.style.margin="0",a.textContent="Loading content...",n.appendChild(t),n.appendChild(a),e.appendChild(n),e}},h={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="var(--space-3)",e.style.padding="var(--space-6)";const n=document.createElement("span");n.className="aural-spinner aural-spinner--xs aural-spinner--primary";const t=document.createElement("span");t.className="aural-spinner__circle",n.appendChild(t);const r=document.createElement("span");return r.style.color="var(--color-text-secondary)",r.textContent="Fetching data from server...",e.appendChild(n),e.appendChild(r),e}},v={render:()=>{const e=document.createElement("div");e.style.position="relative",e.style.height="300px",e.style.background="var(--color-bg-primary)",e.style.borderRadius="var(--radius-md)",e.style.overflow="hidden";const n=document.createElement("div");n.style.position="absolute",n.style.inset="0",n.style.background="rgba(0, 0, 0, 0.6)",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center",n.style.backdropFilter="blur(2px)";const t=document.createElement("div");t.className="aural-spinner aural-spinner--with-text aural-spinner--xl aural-spinner--white";const r=document.createElement("div");r.className="aural-spinner__circle",t.appendChild(r);const a=document.createElement("span");return a.className="aural-spinner__text",a.textContent="Loading application...",t.appendChild(a),n.appendChild(t),e.appendChild(n),e}},C={render:()=>{const e=document.createElement("form");e.style.maxWidth="400px",e.style.padding="var(--space-6)";const n=document.createElement("div");n.style.marginBottom="var(--space-4)";const t=document.createElement("label");t.style.display="block",t.style.marginBottom="var(--space-2)",t.style.color="var(--color-text-primary)",t.textContent="Email";const r=document.createElement("input");r.type="email",r.className="input",r.placeholder="Enter your email",r.disabled=!0,n.appendChild(t),n.appendChild(r);const a=document.createElement("div");a.style.marginBottom="var(--space-4)";const s=document.createElement("label");s.style.display="block",s.style.marginBottom="var(--space-2)",s.style.color="var(--color-text-primary)",s.textContent="Password";const i=document.createElement("input");i.type="password",i.className="input",i.placeholder="Enter your password",i.disabled=!0,a.appendChild(s),a.appendChild(i);const l=document.createElement("button");l.className="btn btn-primary btn-block",l.disabled=!0;const c=document.createElement("span");c.className="aural-spinner aural-spinner--xs aural-spinner--white";const o=document.createElement("span");o.className="aural-spinner__circle",c.appendChild(o);const p=document.createElement("span");return p.textContent="Signing in...",l.appendChild(c),l.appendChild(p),e.appendChild(n),e.appendChild(a),e.appendChild(l),e}};var w,N,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const spinner = document.createElement('div');
    const classes = ['aural-spinner'];
    if (args.variant) {
      classes.push(\`aural-spinner--\${args.variant}\`);
    }
    if (args.size && args.size !== 'md') {
      classes.push(\`aural-spinner--\${args.size}\`);
    }
    spinner.className = classes.join(' ');
    spinner.setAttribute('role', 'status');
    spinner.setAttribute('aria-label', 'Loading');
    const circle = document.createElement('div');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);
    return spinner;
  },
  args: {
    size: 'md',
    variant: 'primary',
    type: 'default'
  }
}`,...(_=(N=d.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var S,A,L;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';
    const variants = [{
      type: 'default',
      label: 'Default'
    }, {
      type: 'dual',
      label: 'Dual Ring'
    }, {
      type: 'dots',
      label: 'Dots'
    }, {
      type: 'pulse',
      label: 'Pulse'
    }, {
      type: 'bars',
      label: 'Bars'
    }];
    variants.forEach(({
      type,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';
      const spinner = document.createElement('div');
      const classes = ['aural-spinner', 'aural-spinner--primary'];
      if (type !== 'default') {
        classes.push(\`aural-spinner--\${type}\`);
      }
      spinner.className = classes.join(' ');
      spinner.setAttribute('role', 'status');
      spinner.setAttribute('aria-label', 'Loading');

      // Add appropriate child elements based on type
      if (type === 'dots') {
        for (let i = 0; i < 3; i++) {
          const dot = document.createElement('div');
          dot.className = 'aural-spinner__dot';
          spinner.appendChild(dot);
        }
      } else if (type === 'bars') {
        for (let i = 0; i < 4; i++) {
          const bar = document.createElement('div');
          bar.className = 'aural-spinner__bar';
          spinner.appendChild(bar);
        }
      } else {
        const circle = document.createElement('div');
        circle.className = 'aural-spinner__circle';
        spinner.appendChild(circle);
      }
      const labelEl = document.createElement('p');
      labelEl.style.marginTop = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;
      wrapper.appendChild(spinner);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(L=(A=m.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var I,z,P;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';
    const sizes = [{
      class: 'xs',
      label: 'Extra Small'
    }, {
      class: 'sm',
      label: 'Small'
    }, {
      class: '',
      label: 'Medium'
    }, {
      class: 'lg',
      label: 'Large'
    }, {
      class: 'xl',
      label: 'Extra Large'
    }];
    sizes.forEach(({
      class: sizeClass,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';
      const spinner = document.createElement('div');
      const classes = ['aural-spinner', 'aural-spinner--primary'];
      if (sizeClass) {
        classes.push(\`aural-spinner--\${sizeClass}\`);
      }
      spinner.className = classes.join(' ');
      const circle = document.createElement('div');
      circle.className = 'aural-spinner__circle';
      spinner.appendChild(circle);
      const labelEl = document.createElement('p');
      labelEl.style.marginTop = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;
      wrapper.appendChild(spinner);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(P=(z=u.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var W,T,k;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';
    const colors = [{
      class: 'primary',
      label: 'Primary'
    }, {
      class: 'secondary',
      label: 'Secondary'
    }, {
      class: 'success',
      label: 'Success'
    }, {
      class: 'warning',
      label: 'Warning'
    }, {
      class: 'error',
      label: 'Error'
    }];
    colors.forEach(({
      class: colorClass,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';
      const spinner = document.createElement('div');
      spinner.className = \`aural-spinner aural-spinner--\${colorClass}\`;
      const circle = document.createElement('div');
      circle.className = 'aural-spinner__circle';
      spinner.appendChild(circle);
      const labelEl = document.createElement('p');
      labelEl.style.marginTop = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;
      wrapper.appendChild(spinner);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(k=(T=y.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var B,D,G;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-4)';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';

    // Primary button with white spinner
    const button1 = document.createElement('button');
    button1.className = 'btn btn-primary';
    button1.disabled = true;
    button1.setAttribute('aria-busy', 'true');
    const spinner1 = document.createElement('span');
    spinner1.className = 'aural-spinner aural-spinner--xs aural-spinner--white';
    spinner1.setAttribute('role', 'status');
    spinner1.setAttribute('aria-label', 'Loading');
    const circle1 = document.createElement('span');
    circle1.className = 'aural-spinner__circle';
    spinner1.appendChild(circle1);
    const text1 = document.createElement('span');
    text1.textContent = 'Loading...';
    button1.appendChild(spinner1);
    button1.appendChild(text1);

    // Secondary button with primary spinner
    const button2 = document.createElement('button');
    button2.className = 'btn btn-secondary';
    button2.disabled = true;
    button2.setAttribute('aria-busy', 'true');
    const spinner2 = document.createElement('span');
    spinner2.className = 'aural-spinner aural-spinner--xs aural-spinner--primary';
    spinner2.setAttribute('role', 'status');
    spinner2.setAttribute('aria-label', 'Processing');
    const circle2 = document.createElement('span');
    circle2.className = 'aural-spinner__circle';
    spinner2.appendChild(circle2);
    const text2 = document.createElement('span');
    text2.textContent = 'Processing';
    button2.appendChild(spinner2);
    button2.appendChild(text2);

    // Success button with white spinner
    const button3 = document.createElement('button');
    button3.className = 'btn btn-success';
    button3.disabled = true;
    button3.setAttribute('aria-busy', 'true');
    const spinner3 = document.createElement('span');
    spinner3.className = 'aural-spinner aural-spinner--xs aural-spinner--white';
    spinner3.setAttribute('role', 'status');
    spinner3.setAttribute('aria-label', 'Saving');
    const circle3 = document.createElement('span');
    circle3.className = 'aural-spinner__circle';
    spinner3.appendChild(circle3);
    const text3 = document.createElement('span');
    text3.textContent = 'Saving...';
    button3.appendChild(spinner3);
    button3.appendChild(text3);
    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);
    return container;
  }
}`,...(G=(D=b.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var $,j,F;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.padding = 'var(--space-6)';

    // Default spinner with text
    const spinner1 = document.createElement('div');
    spinner1.className = 'aural-spinner aural-spinner--with-text aural-spinner--primary';
    const circle1 = document.createElement('div');
    circle1.className = 'aural-spinner__circle';
    spinner1.appendChild(circle1);
    const text1 = document.createElement('span');
    text1.className = 'aural-spinner__text';
    text1.textContent = 'Loading...';
    spinner1.appendChild(text1);

    // Success spinner with text
    const spinner2 = document.createElement('div');
    spinner2.className = 'aural-spinner aural-spinner--with-text aural-spinner--success';
    const circle2 = document.createElement('div');
    circle2.className = 'aural-spinner__circle';
    spinner2.appendChild(circle2);
    const text2 = document.createElement('span');
    text2.className = 'aural-spinner__text';
    text2.textContent = 'Processing';
    spinner2.appendChild(text2);

    // Dots spinner with text
    const spinner3 = document.createElement('div');
    spinner3.className = 'aural-spinner aural-spinner--with-text aural-spinner--dots aural-spinner--primary';
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('div');
      dot.className = 'aural-spinner__dot';
      spinner3.appendChild(dot);
    }
    const text3 = document.createElement('span');
    text3.className = 'aural-spinner__text';
    text3.textContent = 'Please wait';
    spinner3.appendChild(text3);
    container.appendChild(spinner1);
    container.appendChild(spinner2);
    container.appendChild(spinner3);
    return container;
  }
}`,...(F=(j=x.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var R,O,M;E.parameters={...E.parameters,docs:{...(R=E.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '400px';
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    cardContent.style.display = 'flex';
    cardContent.style.flexDirection = 'column';
    cardContent.style.alignItems = 'center';
    cardContent.style.gap = 'var(--space-4)';
    cardContent.style.padding = 'var(--space-8)';
    const spinner = document.createElement('div');
    spinner.className = 'aural-spinner aural-spinner--lg aural-spinner--primary';
    const circle = document.createElement('div');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);
    const text = document.createElement('p');
    text.style.color = 'var(--color-text-secondary)';
    text.style.margin = '0';
    text.textContent = 'Loading content...';
    cardContent.appendChild(spinner);
    cardContent.appendChild(text);
    card.appendChild(cardContent);
    return card;
  }
}`,...(M=(O=E.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var V,q,H;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = 'var(--space-3)';
    container.style.padding = 'var(--space-6)';
    const spinner = document.createElement('span');
    spinner.className = 'aural-spinner aural-spinner--xs aural-spinner--primary';
    const circle = document.createElement('span');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);
    const text = document.createElement('span');
    text.style.color = 'var(--color-text-secondary)';
    text.textContent = 'Fetching data from server...';
    container.appendChild(spinner);
    container.appendChild(text);
    return container;
  }
}`,...(H=(q=h.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.height = '300px';
    container.style.background = 'var(--color-bg-primary)';
    container.style.borderRadius = 'var(--radius-md)';
    container.style.overflow = 'hidden';
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0, 0, 0, 0.6)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.backdropFilter = 'blur(2px)';
    const spinner = document.createElement('div');
    spinner.className = 'aural-spinner aural-spinner--with-text aural-spinner--xl aural-spinner--white';
    const circle = document.createElement('div');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);
    const text = document.createElement('span');
    text.className = 'aural-spinner__text';
    text.textContent = 'Loading application...';
    spinner.appendChild(text);
    overlay.appendChild(spinner);
    container.appendChild(overlay);
    return container;
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const form = document.createElement('form');
    form.style.maxWidth = '400px';
    form.style.padding = 'var(--space-6)';

    // Email field
    const emailGroup = document.createElement('div');
    emailGroup.style.marginBottom = 'var(--space-4)';
    const emailLabel = document.createElement('label');
    emailLabel.style.display = 'block';
    emailLabel.style.marginBottom = 'var(--space-2)';
    emailLabel.style.color = 'var(--color-text-primary)';
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.className = 'input';
    emailInput.placeholder = 'Enter your email';
    emailInput.disabled = true;
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);

    // Password field
    const passwordGroup = document.createElement('div');
    passwordGroup.style.marginBottom = 'var(--space-4)';
    const passwordLabel = document.createElement('label');
    passwordLabel.style.display = 'block';
    passwordLabel.style.marginBottom = 'var(--space-2)';
    passwordLabel.style.color = 'var(--color-text-primary)';
    passwordLabel.textContent = 'Password';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.className = 'input';
    passwordInput.placeholder = 'Enter your password';
    passwordInput.disabled = true;
    passwordGroup.appendChild(passwordLabel);
    passwordGroup.appendChild(passwordInput);

    // Submit button
    const button = document.createElement('button');
    button.className = 'btn btn-primary btn-block';
    button.disabled = true;
    const spinner = document.createElement('span');
    spinner.className = 'aural-spinner aural-spinner--xs aural-spinner--white';
    const circle = document.createElement('span');
    circle.className = 'aural-spinner__circle';
    spinner.appendChild(circle);
    const buttonText = document.createElement('span');
    buttonText.textContent = 'Signing in...';
    button.appendChild(spinner);
    button.appendChild(buttonText);
    form.appendChild(emailGroup);
    form.appendChild(passwordGroup);
    form.appendChild(button);
    return form;
  }
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ee=["Default","AllVariants","AllSizes","AllColors","InButtons","WithText","LoadingCard","InlineLoading","FullPageOverlay","FormSubmission"];export{y as AllColors,u as AllSizes,m as AllVariants,d as Default,C as FormSubmission,v as FullPageOverlay,b as InButtons,h as InlineLoading,E as LoadingCard,x as WithText,ee as __namedExportsOrder,Z as default};
