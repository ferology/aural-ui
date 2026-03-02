const Q={title:"Components/Alert Banner",tags:["autodocs"],parameters:{docs:{description:{component:"Prominent banners for important messages and system-wide alerts."}}},argTypes:{variant:{control:"select",options:["info","success","warning","error"],description:"Alert type"},title:{control:"text",description:"Alert title (optional)"},message:{control:"text",description:"Alert message"},closable:{control:"boolean",description:"Show close button"}}},K={info:"info",success:"check-circle",warning:"alert-triangle",error:"alert-circle"},r={render:e=>{const a=document.createElement("div");a.className=`aural-alert-banner aural-alert-banner--${e.variant}`,a.setAttribute("role","alert");let t=`<i data-lucide="${K[e.variant]}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>`;return t+='<div class="aural-alert-banner__content">',e.title&&(t+=`<div class="aural-alert-banner__title">${e.title}</div>`),t+=`<div class="aural-alert-banner__message">${e.message}</div>`,t+="</div>",e.closable&&(t+=`<button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>`),a.innerHTML=t,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),a},args:{variant:"info",title:"Information",message:"This is an informational alert message.",closable:!0}},l={...r,args:{variant:"success",title:"Success",message:"Your operation completed successfully!",closable:!0}},s={...r,args:{variant:"warning",title:"Warning",message:"Please review before proceeding.",closable:!0}},c={...r,args:{variant:"error",title:"Error",message:"Something went wrong. Please try again.",closable:!0}},o={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem",e.style.maxWidth="600px",[{variant:"info",title:"Info",message:"This is an informational message."},{variant:"success",title:"Success",message:"Operation completed successfully!"},{variant:"warning",title:"Warning",message:"Please be careful with this action."},{variant:"error",title:"Error",message:"An error occurred during processing."}].forEach(({variant:t,title:g,message:v})=>{const n=document.createElement("div");n.className=`aural-alert-banner aural-alert-banner--${t}`,n.setAttribute("role","alert"),n.innerHTML=`
        <i data-lucide="${K[t]}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
        <div class="aural-alert-banner__content">
          <div class="aural-alert-banner__title">${g}</div>
          <div class="aural-alert-banner__message">${v}</div>
        </div>
        <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      `,e.appendChild(n)}),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}},d={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem",e.style.maxWidth="600px",[{variant:"info",icon:"megaphone",title:"New feature available",message:"Check out our latest updates!"},{variant:"success",icon:"check-circle",title:"Payment successful",message:"Your payment has been processed."},{variant:"warning",icon:"alert-triangle",title:"Session expiring",message:"Your session will expire in 5 minutes."},{variant:"error",icon:"wifi-off",title:"Upload failed",message:"The file could not be uploaded."}].forEach(({variant:t,icon:g,title:v,message:n})=>{const i=document.createElement("div");i.className=`aural-alert-banner aural-alert-banner--${t}`,i.setAttribute("role","alert"),i.innerHTML=`
        <i data-lucide="${g}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
        <div class="aural-alert-banner__content">
          <div class="aural-alert-banner__title">${v}</div>
          <div class="aural-alert-banner__message">${n}</div>
        </div>
        <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      `,e.appendChild(i)}),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}},u={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const a=document.createElement("div");return a.className="aural-alert-banner aural-alert-banner--info",a.setAttribute("role","alert"),a.innerHTML=`
      <i data-lucide="megaphone" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Update Available</div>
        <div class="aural-alert-banner__message">A new version of the app is available. Update now to get the latest features.</div>
      </div>
      <button class="btn btn-sm btn-primary" style="margin-left: auto;">Update Now</button>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    `,e.appendChild(a),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}},m={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const a=document.createElement("div");return a.className="aural-alert-banner aural-alert-banner--success",a.setAttribute("role","alert"),a.innerHTML=`
      <i data-lucide="check-circle" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__message">Changes saved successfully!</div>
      </div>
    `,e.appendChild(a),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}},p={render:()=>{const e=document.createElement("div");e.style.padding="0";const a=document.createElement("div");return a.className="aural-alert-banner aural-alert-banner--warning",a.setAttribute("role","alert"),a.style.borderRadius="0",a.style.borderLeft="none",a.style.borderRight="none",a.style.borderTop="none",a.innerHTML=`
      <i data-lucide="alert-triangle" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__message">
          Special offer! Get 50% off on all premium plans.
          <a href="#" style="color: inherit; text-decoration: underline; margin-left: 0.5rem;">Learn more</a>
        </div>
      </div>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    `,e.appendChild(a),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}},b={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const a=document.createElement("div");return a.className="aural-alert-banner aural-alert-banner--info",a.setAttribute("role","alert"),a.innerHTML=`
      <i data-lucide="info" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Dismissible Alert</div>
        <div class="aural-alert-banner__message">This alert can be dismissed by clicking the X.</div>
      </div>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.style.display='none'">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    `,e.appendChild(a),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}},h={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const a=document.createElement("div");return a.className="aural-alert-banner aural-alert-banner--error",a.setAttribute("role","alert"),a.innerHTML=`
      <i data-lucide="wifi-off" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Connection Lost</div>
        <div class="aural-alert-banner__message">
          Unable to reach the server.
          <a href="#" style="color: inherit; text-decoration: underline;">Check your connection</a>
          or try again later.
        </div>
      </div>
    `,e.appendChild(a),setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0),e}};var f,x,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const alert = document.createElement('div');
    alert.className = \`aural-alert-banner aural-alert-banner--\${args.variant}\`;
    alert.setAttribute('role', 'alert');
    let content = \`<i data-lucide="\${iconMap[args.variant]}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>\`;
    content += \`<div class="aural-alert-banner__content">\`;
    if (args.title) {
      content += \`<div class="aural-alert-banner__title">\${args.title}</div>\`;
    }
    content += \`<div class="aural-alert-banner__message">\${args.message}</div>\`;
    content += \`</div>\`;
    if (args.closable) {
      content += \`<button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>\`;
    }
    alert.innerHTML = content;
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return alert;
  },
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an informational alert message.',
    closable: true
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var _,w,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Info,
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your operation completed successfully!',
    closable: true
  }
}`,...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var T,k,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Info,
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please review before proceeding.',
    closable: true
  }
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var A,I,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Info,
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    closable: true
  }
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var L,W,$;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';
    container.style.maxWidth = '600px';
    const alerts = [{
      variant: 'info',
      title: 'Info',
      message: 'This is an informational message.'
    }, {
      variant: 'success',
      title: 'Success',
      message: 'Operation completed successfully!'
    }, {
      variant: 'warning',
      title: 'Warning',
      message: 'Please be careful with this action.'
    }, {
      variant: 'error',
      title: 'Error',
      message: 'An error occurred during processing.'
    }];
    alerts.forEach(({
      variant,
      title,
      message
    }) => {
      const alert = document.createElement('div');
      alert.className = \`aural-alert-banner aural-alert-banner--\${variant}\`;
      alert.setAttribute('role', 'alert');
      alert.innerHTML = \`
        <i data-lucide="\${iconMap[variant]}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
        <div class="aural-alert-banner__content">
          <div class="aural-alert-banner__title">\${title}</div>
          <div class="aural-alert-banner__message">\${message}</div>
        </div>
        <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      \`;
      container.appendChild(alert);
    });
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...($=(W=o.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var M,N,H;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';
    container.style.maxWidth = '600px';
    const alerts = [{
      variant: 'info',
      icon: 'megaphone',
      title: 'New feature available',
      message: 'Check out our latest updates!'
    }, {
      variant: 'success',
      icon: 'check-circle',
      title: 'Payment successful',
      message: 'Your payment has been processed.'
    }, {
      variant: 'warning',
      icon: 'alert-triangle',
      title: 'Session expiring',
      message: 'Your session will expire in 5 minutes.'
    }, {
      variant: 'error',
      icon: 'wifi-off',
      title: 'Upload failed',
      message: 'The file could not be uploaded.'
    }];
    alerts.forEach(({
      variant,
      icon,
      title,
      message
    }) => {
      const alert = document.createElement('div');
      alert.className = \`aural-alert-banner aural-alert-banner--\${variant}\`;
      alert.setAttribute('role', 'alert');
      alert.innerHTML = \`
        <i data-lucide="\${icon}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
        <div class="aural-alert-banner__content">
          <div class="aural-alert-banner__title">\${title}</div>
          <div class="aural-alert-banner__message">\${message}</div>
        </div>
        <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      \`;
      container.appendChild(alert);
    });
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(H=(N=d.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var U,P,D;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const alert = document.createElement('div');
    alert.className = 'aural-alert-banner aural-alert-banner--info';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = \`
      <i data-lucide="megaphone" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Update Available</div>
        <div class="aural-alert-banner__message">A new version of the app is available. Update now to get the latest features.</div>
      </div>
      <button class="btn btn-sm btn-primary" style="margin-left: auto;">Update Now</button>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    \`;
    container.appendChild(alert);
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(D=(P=u.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var Y,R,B;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const alert = document.createElement('div');
    alert.className = 'aural-alert-banner aural-alert-banner--success';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = \`
      <i data-lucide="check-circle" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__message">Changes saved successfully!</div>
      </div>
    \`;
    container.appendChild(alert);
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var O,G,V;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '0';
    const banner = document.createElement('div');
    banner.className = 'aural-alert-banner aural-alert-banner--warning';
    banner.setAttribute('role', 'alert');
    banner.style.borderRadius = '0';
    banner.style.borderLeft = 'none';
    banner.style.borderRight = 'none';
    banner.style.borderTop = 'none';
    banner.innerHTML = \`
      <i data-lucide="alert-triangle" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__message">
          Special offer! Get 50% off on all premium plans.
          <a href="#" style="color: inherit; text-decoration: underline; margin-left: 0.5rem;">Learn more</a>
        </div>
      </div>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.remove()">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    \`;
    container.appendChild(banner);
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(V=(G=p.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var X,j,q;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const alert = document.createElement('div');
    alert.className = 'aural-alert-banner aural-alert-banner--info';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = \`
      <i data-lucide="info" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Dismissible Alert</div>
        <div class="aural-alert-banner__message">This alert can be dismissed by clicking the X.</div>
      </div>
      <button class="aural-alert-banner__close" aria-label="Close" onclick="this.parentElement.style.display='none'">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    \`;
    container.appendChild(alert);
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(q=(j=b.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,F,J;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const alert = document.createElement('div');
    alert.className = 'aural-alert-banner aural-alert-banner--error';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = \`
      <i data-lucide="wifi-off" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
      <div class="aural-alert-banner__content">
        <div class="aural-alert-banner__title">Connection Lost</div>
        <div class="aural-alert-banner__message">
          Unable to reach the server.
          <a href="#" style="color: inherit; text-decoration: underline;">Check your connection</a>
          or try again later.
        </div>
      </div>
    \`;
    container.appendChild(alert);
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(J=(F=h.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};const Z=["Info","Success","Warning","Error","AllVariants","WithIcon","WithActions","SimpleMessage","Banner","Dismissible","WithLink"];export{o as AllVariants,p as Banner,b as Dismissible,c as Error,r as Info,m as SimpleMessage,l as Success,s as Warning,u as WithActions,d as WithIcon,h as WithLink,Z as __namedExportsOrder,Q as default};
