import{c as ie}from"./createThemeGrid-DWAncU4Q.js";const ce={title:"Components/Stepper",tags:["autodocs"],parameters:{docs:{description:{component:`
# Stepper Component

Multi-step process indicator showing progress through sequential steps. Perfect for form wizards, onboarding flows, checkout processes, and order tracking.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-stepper" role="navigation" aria-label="Registration progress">
  <div class="aural-step aural-step--completed">
    <div class="aural-step__indicator">
      <i data-lucide="check"></i>
    </div>
    <div class="aural-step__connector"></div>
    <div class="aural-step__content">
      <div class="aural-step__title">Account</div>
    </div>
  </div>
  <div class="aural-step aural-step--active">
    <div class="aural-step__indicator" aria-current="step">2</div>
    <div class="aural-step__connector"></div>
    <div class="aural-step__content">
      <div class="aural-step__title">Profile</div>
    </div>
  </div>
</div>
\`\`\`

**Initialization:**
\`\`\`javascript
// Initialize Lucide icons for check/error icons
lucide.createIcons();
\`\`\`
        `.trim()}}}};function n(e){const{number:t,title:a,description:c,state:s="pending",icon:p,isLast:o=!1}=e,l=document.createElement("div");l.className="aural-step",s==="completed"&&l.classList.add("aural-step--completed"),s==="active"&&l.classList.add("aural-step--active"),s==="error"&&l.classList.add("aural-step--error");const i=document.createElement("div");if(i.className="aural-step__indicator",s==="completed"){i.setAttribute("aria-label",`Step ${t}: Completed`);const r=document.createElement("i");r.setAttribute("data-lucide","check"),r.style.width="20px",r.style.height="20px",r.setAttribute("aria-hidden","true"),i.appendChild(r)}else if(s==="error"){i.setAttribute("aria-label",`Step ${t}: Error`);const r=document.createElement("i");r.setAttribute("data-lucide","x"),r.style.width="20px",r.style.height="20px",r.setAttribute("aria-hidden","true"),i.appendChild(r)}else if(p){s==="active"?i.setAttribute("aria-current","step"):i.setAttribute("aria-disabled","true");const r=document.createElement("i");r.setAttribute("data-lucide",p),r.style.width="20px",r.style.height="20px",r.setAttribute("aria-hidden","true"),i.appendChild(r)}else s==="active"?(i.setAttribute("aria-current","step"),i.setAttribute("aria-label",`Step ${t}: ${a}, Active`)):(i.setAttribute("aria-disabled","true"),i.setAttribute("aria-label",`Step ${t}: ${a}, Pending`)),i.textContent=t.toString();if(l.appendChild(i),!o){const r=document.createElement("div");r.className="aural-step__connector",r.setAttribute("aria-hidden","true"),l.appendChild(r)}const u=document.createElement("div");u.className="aural-step__content";const m=document.createElement("div");if(m.className="aural-step__title",m.textContent=a,u.appendChild(m),c){const r=document.createElement("div");r.className="aural-step__description",r.textContent=c,u.appendChild(r)}return l.appendChild(u),l}function d(e){return setTimeout(()=>{window.lucide&&window.lucide.createIcons({nameAttr:"data-lucide"})},0),e}const b={render:()=>{const e=document.createElement("div");return e.className="aural-stepper",e.setAttribute("role","navigation"),e.setAttribute("aria-label","Registration progress"),e.appendChild(n({number:1,title:"Account",description:"Create your account",state:"completed"})),e.appendChild(n({number:2,title:"Profile",description:"Add your details",state:"active"})),e.appendChild(n({number:3,title:"Preferences",description:"Set preferences",state:"pending"})),e.appendChild(n({number:4,title:"Complete",description:"Review and finish",state:"pending",isLast:!0})),d(e)}},h={render:()=>{const e=document.createElement("div");return e.className="aural-stepper aural-stepper--vertical",e.setAttribute("role","navigation"),e.setAttribute("aria-label","Order status"),e.style.maxWidth="400px",e.appendChild(n({number:1,title:"Order Placed",description:"Your order has been confirmed",state:"completed"})),e.appendChild(n({number:2,title:"Processing",description:"We're preparing your order",state:"active"})),e.appendChild(n({number:3,title:"Shipped",description:"On its way to you",state:"pending"})),e.appendChild(n({number:4,title:"Delivered",description:"Package delivered",state:"pending",isLast:!0})),d(e)}},v={render:()=>{const e=document.createElement("div");return e.className="aural-stepper",e.setAttribute("role","navigation"),e.setAttribute("aria-label","Checkout steps"),e.appendChild(n({number:1,title:"Cart",state:"completed"})),e.appendChild(n({number:2,title:"Address",state:"completed"})),e.appendChild(n({number:3,title:"Payment",state:"active"})),e.appendChild(n({number:4,title:"Confirm",state:"pending",isLast:!0})),d(e)}},C={render:()=>{const e=document.createElement("div");return e.className="aural-stepper",e.setAttribute("role","navigation"),e.setAttribute("aria-label","Setup progress"),[{icon:"user",title:"Sign Up",state:"completed"},{icon:"mail",title:"Verify",state:"active"},{icon:"settings",title:"Setup",state:"pending"},{icon:"check-circle",title:"Done",state:"pending",isLast:!0}].forEach((a,c)=>{e.appendChild(n({number:c+1,title:a.title,state:a.state,icon:a.icon,isLast:a.isLast}))}),d(e)}},g={render:()=>{const e=document.createElement("div");return e.className="aural-stepper",e.setAttribute("role","navigation"),e.setAttribute("aria-label","Payment process"),e.appendChild(n({number:1,title:"Information",state:"completed"})),e.appendChild(n({number:2,title:"Payment",description:"Card declined",state:"error"})),e.appendChild(n({number:3,title:"Confirmation",state:"pending",isLast:!0})),d(e)}},y={render:()=>{const e=document.createElement("div");return e.className="aural-stepper",e.setAttribute("role","navigation"),e.setAttribute("aria-label","Step states example"),e.appendChild(n({number:1,title:"Completed",state:"completed"})),e.appendChild(n({number:2,title:"Active",state:"active"})),e.appendChild(n({number:3,title:"Error",state:"error"})),e.appendChild(n({number:4,title:"Pending",state:"pending",isLast:!0})),d(e)}},E={render:()=>{const e=document.createElement("div"),t=document.createElement("div");t.className="aural-stepper",t.setAttribute("role","navigation"),t.setAttribute("aria-label","Form wizard"),t.style.marginBottom="var(--space-6)",t.appendChild(n({number:1,title:"Personal",description:"Basic info",state:"completed"})),t.appendChild(n({number:2,title:"Contact",description:"Email & phone",state:"active"})),t.appendChild(n({number:3,title:"Address",description:"Location",state:"pending"})),t.appendChild(n({number:4,title:"Review",description:"Confirm",state:"pending",isLast:!0})),e.appendChild(t);const a=document.createElement("div");a.className="card",a.style.padding="var(--space-6)";const c=document.createElement("h3");c.textContent="Contact Information",c.style.margin="0 0 var(--space-4) 0",c.style.color="var(--color-text-primary)",a.appendChild(c);const s=document.createElement("div");s.style.marginBottom="var(--space-4)";const p=document.createElement("label");p.textContent="Email",p.style.display="block",p.style.marginBottom="var(--space-2)",p.style.color="var(--color-text-secondary)",s.appendChild(p);const o=document.createElement("input");o.type="email",o.className="input",o.placeholder="your@email.com",s.appendChild(o),a.appendChild(s);const l=document.createElement("div");l.style.marginBottom="var(--space-6)";const i=document.createElement("label");i.textContent="Phone",i.style.display="block",i.style.marginBottom="var(--space-2)",i.style.color="var(--color-text-secondary)",l.appendChild(i);const u=document.createElement("input");u.type="tel",u.className="input",u.placeholder="+1 (555) 000-0000",l.appendChild(u),a.appendChild(l);const m=document.createElement("div");m.style.display="flex",m.style.gap="var(--space-3)",m.style.justifyContent="space-between";const r=document.createElement("button");r.className="btn btn-ghost",r.textContent="Back",m.appendChild(r);const L=document.createElement("button");return L.className="btn btn-primary",L.textContent="Next Step",m.appendChild(L),a.appendChild(m),e.appendChild(a),d(e)}},S={render:()=>{const e=document.createElement("div");e.className="card",e.style.padding="var(--space-6)",e.style.maxWidth="500px";const t=document.createElement("div");t.style.display="flex",t.style.justifyContent="space-between",t.style.alignItems="center",t.style.marginBottom="var(--space-6)";const a=document.createElement("div"),c=document.createElement("h3");c.textContent="Order #12345",c.style.margin="0 0 var(--space-1) 0",c.style.color="var(--color-text-primary)",a.appendChild(c);const s=document.createElement("p");s.textContent="Estimated delivery: Jan 30, 2026",s.style.margin="0",s.style.color="var(--color-text-secondary)",s.style.fontSize="var(--text-sm)",a.appendChild(s),t.appendChild(a);const p=document.createElement("span");p.className="badge badge-success",p.textContent="In Transit",t.appendChild(p),e.appendChild(t);const o=document.createElement("div");o.className="aural-stepper aural-stepper--vertical",o.setAttribute("role","navigation"),o.setAttribute("aria-label","Order tracking"),o.appendChild(n({number:1,title:"Order Confirmed",description:"Jan 25, 2026 at 10:30 AM",state:"completed"})),o.appendChild(n({number:2,title:"Processing",description:"Jan 26, 2026 at 9:15 AM",state:"completed"}));const l=n({number:3,title:"Shipped",description:"In transit - arriving soon",state:"active",icon:"truck"});o.appendChild(l);const i=n({number:4,title:"Delivered",description:"Expected Jan 30",state:"pending",icon:"home",isLast:!0});return o.appendChild(i),e.appendChild(o),d(e)}},f={render:()=>{const e=document.createElement("div");return e.className="aural-stepper",e.setAttribute("role","navigation"),e.setAttribute("aria-label","Onboarding"),[{icon:"user-plus",title:"Welcome",state:"completed"},{icon:"shield-check",title:"Verify",state:"completed"},{icon:"sliders",title:"Preferences",state:"active"},{icon:"rocket",title:"Launch",state:"pending",isLast:!0}].forEach((a,c)=>{e.appendChild(n({number:c+1,title:a.title,state:a.state,icon:a.icon,isLast:a.isLast}))}),d(e)}},A={render:()=>{const e=document.createElement("div");e.className="aural-stepper",e.setAttribute("role","navigation"),e.setAttribute("aria-label","Progress indicator");for(let t=1;t<=5;t++){let a="pending";t<4&&(a="completed"),t===4&&(a="active"),e.appendChild(n({number:t,title:`Step ${t}`,state:a,isLast:t===5}))}return d(e)}},x={render:()=>ie(()=>{const e=document.createElement("div");return e.className="aural-stepper",e.setAttribute("role","navigation"),e.setAttribute("aria-label","Progress"),e.appendChild(n({number:1,title:"Complete",state:"completed"})),e.appendChild(n({number:2,title:"Active",state:"active"})),e.appendChild(n({number:3,title:"Pending",state:"pending",isLast:!0})),d(e)})};var N,I,P;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Registration progress');
    container.appendChild(createStep({
      number: 1,
      title: 'Account',
      description: 'Create your account',
      state: 'completed'
    }));
    container.appendChild(createStep({
      number: 2,
      title: 'Profile',
      description: 'Add your details',
      state: 'active'
    }));
    container.appendChild(createStep({
      number: 3,
      title: 'Preferences',
      description: 'Set preferences',
      state: 'pending'
    }));
    container.appendChild(createStep({
      number: 4,
      title: 'Complete',
      description: 'Review and finish',
      state: 'pending',
      isLast: true
    }));
    return initializeIcons(container);
  }
}`,...(P=(I=b.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var k,w,_;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper aural-stepper--vertical';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Order status');
    container.style.maxWidth = '400px';
    container.appendChild(createStep({
      number: 1,
      title: 'Order Placed',
      description: 'Your order has been confirmed',
      state: 'completed'
    }));
    container.appendChild(createStep({
      number: 2,
      title: 'Processing',
      description: 'We\\'re preparing your order',
      state: 'active'
    }));
    container.appendChild(createStep({
      number: 3,
      title: 'Shipped',
      description: 'On its way to you',
      state: 'pending'
    }));
    container.appendChild(createStep({
      number: 4,
      title: 'Delivered',
      description: 'Package delivered',
      state: 'pending',
      isLast: true
    }));
    return initializeIcons(container);
  }
}`,...(_=(w=h.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var B,G,z;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Checkout steps');
    container.appendChild(createStep({
      number: 1,
      title: 'Cart',
      state: 'completed'
    }));
    container.appendChild(createStep({
      number: 2,
      title: 'Address',
      state: 'completed'
    }));
    container.appendChild(createStep({
      number: 3,
      title: 'Payment',
      state: 'active'
    }));
    container.appendChild(createStep({
      number: 4,
      title: 'Confirm',
      state: 'pending',
      isLast: true
    }));
    return initializeIcons(container);
  }
}`,...(z=(G=v.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var O,D,W;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Setup progress');
    const steps = [{
      icon: 'user',
      title: 'Sign Up',
      state: 'completed' as const
    }, {
      icon: 'mail',
      title: 'Verify',
      state: 'active' as const
    }, {
      icon: 'settings',
      title: 'Setup',
      state: 'pending' as const
    }, {
      icon: 'check-circle',
      title: 'Done',
      state: 'pending' as const,
      isLast: true
    }];
    steps.forEach((step, index) => {
      container.appendChild(createStep({
        number: index + 1,
        title: step.title,
        state: step.state,
        icon: step.icon,
        isLast: step.isLast
      }));
    });
    return initializeIcons(container);
  }
}`,...(W=(D=C.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var T,J,R;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Payment process');
    container.appendChild(createStep({
      number: 1,
      title: 'Information',
      state: 'completed'
    }));
    container.appendChild(createStep({
      number: 2,
      title: 'Payment',
      description: 'Card declined',
      state: 'error'
    }));
    container.appendChild(createStep({
      number: 3,
      title: 'Confirmation',
      state: 'pending',
      isLast: true
    }));
    return initializeIcons(container);
  }
}`,...(R=(J=g.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var V,$,F;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Step states example');
    container.appendChild(createStep({
      number: 1,
      title: 'Completed',
      state: 'completed'
    }));
    container.appendChild(createStep({
      number: 2,
      title: 'Active',
      state: 'active'
    }));
    container.appendChild(createStep({
      number: 3,
      title: 'Error',
      state: 'error'
    }));
    container.appendChild(createStep({
      number: 4,
      title: 'Pending',
      state: 'pending',
      isLast: true
    }));
    return initializeIcons(container);
  }
}`,...(F=($=y.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var M,j,H;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');

    // Stepper
    const stepper = document.createElement('div');
    stepper.className = 'aural-stepper';
    stepper.setAttribute('role', 'navigation');
    stepper.setAttribute('aria-label', 'Form wizard');
    stepper.style.marginBottom = 'var(--space-6)';
    stepper.appendChild(createStep({
      number: 1,
      title: 'Personal',
      description: 'Basic info',
      state: 'completed'
    }));
    stepper.appendChild(createStep({
      number: 2,
      title: 'Contact',
      description: 'Email & phone',
      state: 'active'
    }));
    stepper.appendChild(createStep({
      number: 3,
      title: 'Address',
      description: 'Location',
      state: 'pending'
    }));
    stepper.appendChild(createStep({
      number: 4,
      title: 'Review',
      description: 'Confirm',
      state: 'pending',
      isLast: true
    }));
    wrapper.appendChild(stepper);

    // Card with form
    const card = document.createElement('div');
    card.className = 'card';
    card.style.padding = 'var(--space-6)';
    const heading = document.createElement('h3');
    heading.textContent = 'Contact Information';
    heading.style.margin = '0 0 var(--space-4) 0';
    heading.style.color = 'var(--color-text-primary)';
    card.appendChild(heading);

    // Email field
    const emailGroup = document.createElement('div');
    emailGroup.style.marginBottom = 'var(--space-4)';
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    emailLabel.style.display = 'block';
    emailLabel.style.marginBottom = 'var(--space-2)';
    emailLabel.style.color = 'var(--color-text-secondary)';
    emailGroup.appendChild(emailLabel);
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.className = 'input';
    emailInput.placeholder = 'your@email.com';
    emailGroup.appendChild(emailInput);
    card.appendChild(emailGroup);

    // Phone field
    const phoneGroup = document.createElement('div');
    phoneGroup.style.marginBottom = 'var(--space-6)';
    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone';
    phoneLabel.style.display = 'block';
    phoneLabel.style.marginBottom = 'var(--space-2)';
    phoneLabel.style.color = 'var(--color-text-secondary)';
    phoneGroup.appendChild(phoneLabel);
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.className = 'input';
    phoneInput.placeholder = '+1 (555) 000-0000';
    phoneGroup.appendChild(phoneInput);
    card.appendChild(phoneGroup);

    // Buttons
    const buttonGroup = document.createElement('div');
    buttonGroup.style.display = 'flex';
    buttonGroup.style.gap = 'var(--space-3)';
    buttonGroup.style.justifyContent = 'space-between';
    const backBtn = document.createElement('button');
    backBtn.className = 'btn btn-ghost';
    backBtn.textContent = 'Back';
    buttonGroup.appendChild(backBtn);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-primary';
    nextBtn.textContent = 'Next Step';
    buttonGroup.appendChild(nextBtn);
    card.appendChild(buttonGroup);
    wrapper.appendChild(card);
    return initializeIcons(wrapper);
  }
}`,...(H=(j=E.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var U,Y,q;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.padding = 'var(--space-6)';
    card.style.maxWidth = '500px';

    // Header
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = 'var(--space-6)';
    const headerInfo = document.createElement('div');
    const orderNumber = document.createElement('h3');
    orderNumber.textContent = 'Order #12345';
    orderNumber.style.margin = '0 0 var(--space-1) 0';
    orderNumber.style.color = 'var(--color-text-primary)';
    headerInfo.appendChild(orderNumber);
    const deliveryDate = document.createElement('p');
    deliveryDate.textContent = 'Estimated delivery: Jan 30, 2026';
    deliveryDate.style.margin = '0';
    deliveryDate.style.color = 'var(--color-text-secondary)';
    deliveryDate.style.fontSize = 'var(--text-sm)';
    headerInfo.appendChild(deliveryDate);
    header.appendChild(headerInfo);
    const badge = document.createElement('span');
    badge.className = 'badge badge-success';
    badge.textContent = 'In Transit';
    header.appendChild(badge);
    card.appendChild(header);

    // Stepper
    const stepper = document.createElement('div');
    stepper.className = 'aural-stepper aural-stepper--vertical';
    stepper.setAttribute('role', 'navigation');
    stepper.setAttribute('aria-label', 'Order tracking');
    stepper.appendChild(createStep({
      number: 1,
      title: 'Order Confirmed',
      description: 'Jan 25, 2026 at 10:30 AM',
      state: 'completed'
    }));
    stepper.appendChild(createStep({
      number: 2,
      title: 'Processing',
      description: 'Jan 26, 2026 at 9:15 AM',
      state: 'completed'
    }));
    const shippedStep = createStep({
      number: 3,
      title: 'Shipped',
      description: 'In transit - arriving soon',
      state: 'active',
      icon: 'truck'
    });
    stepper.appendChild(shippedStep);
    const deliveredStep = createStep({
      number: 4,
      title: 'Delivered',
      description: 'Expected Jan 30',
      state: 'pending',
      icon: 'home',
      isLast: true
    });
    stepper.appendChild(deliveredStep);
    card.appendChild(stepper);
    return initializeIcons(card);
  }
}`,...(q=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var K,Q,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Onboarding');
    const steps = [{
      icon: 'user-plus',
      title: 'Welcome',
      state: 'completed' as const
    }, {
      icon: 'shield-check',
      title: 'Verify',
      state: 'completed' as const
    }, {
      icon: 'sliders',
      title: 'Preferences',
      state: 'active' as const
    }, {
      icon: 'rocket',
      title: 'Launch',
      state: 'pending' as const,
      isLast: true
    }];
    steps.forEach((step, index) => {
      container.appendChild(createStep({
        number: index + 1,
        title: step.title,
        state: step.state,
        icon: step.icon,
        isLast: step.isLast
      }));
    });
    return initializeIcons(container);
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'aural-stepper';
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', 'Progress indicator');
    for (let i = 1; i <= 5; i++) {
      let state: 'completed' | 'active' | 'pending' = 'pending';
      if (i < 4) state = 'completed';
      if (i === 4) state = 'active';
      container.appendChild(createStep({
        number: i,
        title: \`Step \${i}\`,
        state: state,
        isLast: i === 5
      }));
    }
    return initializeIcons(container);
  }
}`,...(te=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,re;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    return createThemeGrid(() => {
      const container = document.createElement('div');
      container.className = 'aural-stepper';
      container.setAttribute('role', 'navigation');
      container.setAttribute('aria-label', 'Progress');
      container.appendChild(createStep({
        number: 1,
        title: 'Complete',
        state: 'completed'
      }));
      container.appendChild(createStep({
        number: 2,
        title: 'Active',
        state: 'active'
      }));
      container.appendChild(createStep({
        number: 3,
        title: 'Pending',
        state: 'pending',
        isLast: true
      }));
      const result = initializeIcons(container);
      return result;
    });
  }
}`,...(re=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const oe=["Default","Vertical","WithNumbers","WithIcons","ErrorState","AllStates","FormWizard","OrderTracking","OnboardingFlow","CompactStepper","ThemeComparison"];export{y as AllStates,A as CompactStepper,b as Default,g as ErrorState,E as FormWizard,f as OnboardingFlow,S as OrderTracking,x as ThemeComparison,h as Vertical,C as WithIcons,v as WithNumbers,oe as __namedExportsOrder,ce as default};
