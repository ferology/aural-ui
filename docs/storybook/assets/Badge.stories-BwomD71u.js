const M={title:"Components/Badge",tags:["autodocs"],parameters:{docs:{description:{component:"Small, versatile status indicators and labels for displaying counts, statuses, and categories."}}},argTypes:{label:{control:"text",description:"Badge text"},variant:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"],description:"Badge color variant"},size:{control:"select",options:["sm","default","lg"],description:"Badge size"}}},d={render:e=>{const i=document.createElement("span"),n=["badge",`badge-${e.variant}`];return e.size==="sm"&&n.push("badge-sm"),e.size==="lg"&&n.push("badge-lg"),i.className=n.join(" "),i.textContent=e.label,i},args:{label:"Badge",variant:"primary",size:"default"}},p={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-3)",e.style.flexWrap="wrap",e.style.padding="2rem",e.style.alignItems="center",[{name:"primary",label:"Primary"},{name:"secondary",label:"Secondary"},{name:"success",label:"Success"},{name:"error",label:"Error"},{name:"warning",label:"Warning"},{name:"info",label:"Info"},{name:"neutral",label:"Neutral"}].forEach(({name:n,label:l})=>{const a=document.createElement("span");a.className=`badge badge-${n}`,a.textContent=l,e.appendChild(a)}),e}},m={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-3)",e.style.alignItems="center",e.style.padding="2rem",[{class:"badge-sm",label:"Small"},{class:"",label:"Default"},{class:"badge-lg",label:"Large"}].forEach(({class:n,label:l})=>{const a=document.createElement("span");a.className=n?`badge badge-primary ${n}`:"badge badge-primary",a.textContent=l,e.appendChild(a)}),e}},g={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-3)",e.style.flexWrap="wrap",e.style.padding="2rem",[{variant:"success",icon:"check-circle",label:"Verified"},{variant:"error",icon:"x-circle",label:"Failed"},{variant:"warning",icon:"alert-triangle",label:"Pending"},{variant:"info",icon:"info",label:"New"}].forEach(({variant:n,icon:l,label:a})=>{const r=document.createElement("span");r.className=`badge badge-${n}`;const s=document.createElement("i");s.setAttribute("data-lucide",l),s.style.width="14px",s.style.height="14px",r.appendChild(s),r.appendChild(document.createTextNode(" "+a)),e.appendChild(r)}),typeof lucide<"u"&&setTimeout(()=>lucide.createIcons(),0),e}},u={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",[{status:"success",label:"Delivered",text:"Order Status"},{status:"warning",label:"In Transit",text:"Order Status"},{status:"error",label:"Cancelled",text:"Order Status"}].forEach(({status:n,label:l,text:a})=>{const r=document.createElement("div");r.innerHTML=`
        <div style="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: var(--space-2);">${a}</div>
        <span class="badge badge-${n}">${l}</span>
      `,e.appendChild(r)}),e}},b={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-4)",[{name:"John Doe",role:"Admin",verified:!0},{name:"Jane Smith",role:"Editor",verified:!0},{name:"Bob Johnson",role:"Viewer",verified:!1}].forEach(({name:n,role:l,verified:a})=>{const r=document.createElement("div");r.style.display="flex",r.style.gap="var(--space-2)",r.style.alignItems="center";const s=document.createElement("span");s.style.color="var(--color-text-primary)",s.textContent=n;const c=document.createElement("span");if(c.className="badge badge-primary badge-sm",c.textContent=l,r.appendChild(s),r.appendChild(c),a){const o=document.createElement("span");o.className="badge badge-success badge-sm";const t=document.createElement("i");t.setAttribute("data-lucide","check"),t.style.width="12px",t.style.height="12px",o.appendChild(t),o.appendChild(document.createTextNode(" Verified")),r.appendChild(o)}e.appendChild(r)}),typeof lucide<"u"&&setTimeout(()=>lucide.createIcons(),0),e}},y={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-6)",e.style.flexWrap="wrap",e.style.alignItems="center",e.style.padding="2rem",[{icon:"bell",count:"3",variant:"error",label:"Notifications, 3 unread"},{icon:"mail",count:"12",variant:"primary",label:"Messages, 12 unread"},{icon:"shopping-cart",count:"5",variant:"success",label:"Shopping cart, 5 items"}].forEach(({icon:n,count:l,variant:a,label:r})=>{const s=document.createElement("div");s.style.position="relative",s.style.display="inline-flex";const c=document.createElement("button");c.className="btn btn-ghost btn-icon",c.setAttribute("aria-label",r);const o=document.createElement("i");o.setAttribute("data-lucide",n),c.appendChild(o);const t=document.createElement("span");t.className=`badge badge-${a} badge-sm`,t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.top="-4px",t.style.right="-4px",t.style.minWidth="18px",t.style.height="18px",t.style.borderRadius="9px",t.style.padding="0 4px",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.fontSize="10px",t.textContent=l,s.appendChild(c),s.appendChild(t),e.appendChild(s)}),typeof lucide<"u"&&setTimeout(()=>lucide.createIcons(),0),e}},f={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const i=document.createElement("div");i.style.fontSize="var(--text-sm)",i.style.color="var(--color-text-tertiary)",i.style.marginBottom="var(--space-2)",i.textContent="Article Tags";const n=document.createElement("div");n.style.display="flex",n.style.gap="var(--space-2)",n.style.flexWrap="wrap",["JavaScript","React","Tutorial"].forEach(r=>{const s=document.createElement("span");s.className="badge badge-secondary",s.textContent=r,n.appendChild(s)});const a=document.createElement("span");return a.className="badge badge-primary badge-sm",a.textContent="Featured",n.appendChild(a),e.appendChild(i),e.appendChild(n),e}};var v,h,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const badge = document.createElement('span');
    const classes = ['badge', \`badge-\${args.variant}\`];
    if (args.size === 'sm') classes.push('badge-sm');
    if (args.size === 'lg') classes.push('badge-lg');
    badge.className = classes.join(' ');
    badge.textContent = args.label;
    return badge;
  },
  args: {
    label: 'Badge',
    variant: 'primary',
    size: 'default'
  }
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var E,C,S;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-3)';
    container.style.flexWrap = 'wrap';
    container.style.padding = '2rem';
    container.style.alignItems = 'center';
    const variants = [{
      name: 'primary',
      label: 'Primary'
    }, {
      name: 'secondary',
      label: 'Secondary'
    }, {
      name: 'success',
      label: 'Success'
    }, {
      name: 'error',
      label: 'Error'
    }, {
      name: 'warning',
      label: 'Warning'
    }, {
      name: 'info',
      label: 'Info'
    }, {
      name: 'neutral',
      label: 'Neutral'
    }];
    variants.forEach(({
      name,
      label
    }) => {
      const badge = document.createElement('span');
      badge.className = \`badge badge-\${name}\`;
      badge.textContent = label;
      container.appendChild(badge);
    });
    return container;
  }
}`,...(S=(C=p.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var N,w,B;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-3)';
    container.style.alignItems = 'center';
    container.style.padding = '2rem';
    const sizes = [{
      class: 'badge-sm',
      label: 'Small'
    }, {
      class: '',
      label: 'Default'
    }, {
      class: 'badge-lg',
      label: 'Large'
    }];
    sizes.forEach(({
      class: sizeClass,
      label
    }) => {
      const badge = document.createElement('span');
      badge.className = sizeClass ? \`badge badge-primary \${sizeClass}\` : 'badge badge-primary';
      badge.textContent = label;
      container.appendChild(badge);
    });
    return container;
  }
}`,...(B=(w=m.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var I,z,T;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-3)';
    container.style.flexWrap = 'wrap';
    container.style.padding = '2rem';
    const badges = [{
      variant: 'success',
      icon: 'check-circle',
      label: 'Verified'
    }, {
      variant: 'error',
      icon: 'x-circle',
      label: 'Failed'
    }, {
      variant: 'warning',
      icon: 'alert-triangle',
      label: 'Pending'
    }, {
      variant: 'info',
      icon: 'info',
      label: 'New'
    }];
    badges.forEach(({
      variant,
      icon,
      label
    }) => {
      const badge = document.createElement('span');
      badge.className = \`badge badge-\${variant}\`;
      const iconElement = document.createElement('i');
      iconElement.setAttribute('data-lucide', icon);
      iconElement.style.width = '14px';
      iconElement.style.height = '14px';
      badge.appendChild(iconElement);
      badge.appendChild(document.createTextNode(' ' + label));
      container.appendChild(badge);
    });

    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
      setTimeout(() => lucide.createIcons(), 0);
    }
    return container;
  }
}`,...(T=(z=g.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var A,$,W;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    const items = [{
      status: 'success',
      label: 'Delivered',
      text: 'Order Status'
    }, {
      status: 'warning',
      label: 'In Transit',
      text: 'Order Status'
    }, {
      status: 'error',
      label: 'Cancelled',
      text: 'Order Status'
    }];
    items.forEach(({
      status,
      label,
      text
    }) => {
      const item = document.createElement('div');
      item.innerHTML = \`
        <div style="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: var(--space-2);">\${text}</div>
        <span class="badge badge-\${status}">\${label}</span>
      \`;
      container.appendChild(item);
    });
    return container;
  }
}`,...(W=($=u.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var D,J,V;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    const users = [{
      name: 'John Doe',
      role: 'Admin',
      verified: true
    }, {
      name: 'Jane Smith',
      role: 'Editor',
      verified: true
    }, {
      name: 'Bob Johnson',
      role: 'Viewer',
      verified: false
    }];
    users.forEach(({
      name,
      role,
      verified
    }) => {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.gap = 'var(--space-2)';
      item.style.alignItems = 'center';
      const nameSpan = document.createElement('span');
      nameSpan.style.color = 'var(--color-text-primary)';
      nameSpan.textContent = name;
      const roleBadge = document.createElement('span');
      roleBadge.className = 'badge badge-primary badge-sm';
      roleBadge.textContent = role;
      item.appendChild(nameSpan);
      item.appendChild(roleBadge);
      if (verified) {
        const verifiedBadge = document.createElement('span');
        verifiedBadge.className = 'badge badge-success badge-sm';
        const iconElement = document.createElement('i');
        iconElement.setAttribute('data-lucide', 'check');
        iconElement.style.width = '12px';
        iconElement.style.height = '12px';
        verifiedBadge.appendChild(iconElement);
        verifiedBadge.appendChild(document.createTextNode(' Verified'));
        item.appendChild(verifiedBadge);
      }
      container.appendChild(item);
    });

    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
      setTimeout(() => lucide.createIcons(), 0);
    }
    return container;
  }
}`,...(V=(J=b.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var L,O,R;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    container.style.alignItems = 'center';
    container.style.padding = '2rem';
    const notifications = [{
      icon: 'bell',
      count: '3',
      variant: 'error',
      label: 'Notifications, 3 unread'
    }, {
      icon: 'mail',
      count: '12',
      variant: 'primary',
      label: 'Messages, 12 unread'
    }, {
      icon: 'shopping-cart',
      count: '5',
      variant: 'success',
      label: 'Shopping cart, 5 items'
    }];
    notifications.forEach(({
      icon,
      count,
      variant,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.display = 'inline-flex';
      const button = document.createElement('button');
      button.className = 'btn btn-ghost btn-icon';
      button.setAttribute('aria-label', label);
      const iconElement = document.createElement('i');
      iconElement.setAttribute('data-lucide', icon);
      button.appendChild(iconElement);
      const badge = document.createElement('span');
      badge.className = \`badge badge-\${variant} badge-sm\`;
      badge.setAttribute('aria-hidden', 'true');
      badge.style.position = 'absolute';
      badge.style.top = '-4px';
      badge.style.right = '-4px';
      badge.style.minWidth = '18px';
      badge.style.height = '18px';
      badge.style.borderRadius = '9px';
      badge.style.padding = '0 4px';
      badge.style.display = 'flex';
      badge.style.alignItems = 'center';
      badge.style.justifyContent = 'center';
      badge.style.fontSize = '10px';
      badge.textContent = count;
      wrapper.appendChild(button);
      wrapper.appendChild(badge);
      container.appendChild(wrapper);
    });

    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
      setTimeout(() => lucide.createIcons(), 0);
    }
    return container;
  }
}`,...(R=(O=y.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var j,k,F;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const header = document.createElement('div');
    header.style.fontSize = 'var(--text-sm)';
    header.style.color = 'var(--color-text-tertiary)';
    header.style.marginBottom = 'var(--space-2)';
    header.textContent = 'Article Tags';
    const tagsContainer = document.createElement('div');
    tagsContainer.style.display = 'flex';
    tagsContainer.style.gap = 'var(--space-2)';
    tagsContainer.style.flexWrap = 'wrap';
    const tags = ['JavaScript', 'React', 'Tutorial'];
    tags.forEach(tag => {
      const badge = document.createElement('span');
      badge.className = 'badge badge-secondary';
      badge.textContent = tag;
      tagsContainer.appendChild(badge);
    });
    const featuredBadge = document.createElement('span');
    featuredBadge.className = 'badge badge-primary badge-sm';
    featuredBadge.textContent = 'Featured';
    tagsContainer.appendChild(featuredBadge);
    container.appendChild(header);
    container.appendChild(tagsContainer);
    return container;
  }
}`,...(F=(k=f.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const P=["Default","AllVariants","AllSizes","WithIcons","StatusIndicators","UserRoles","NotificationBadges","ContentTags"];export{m as AllSizes,p as AllVariants,f as ContentTags,d as Default,y as NotificationBadges,u as StatusIndicators,b as UserRoles,g as WithIcons,P as __namedExportsOrder,M as default};
