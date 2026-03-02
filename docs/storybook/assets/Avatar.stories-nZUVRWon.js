const ee={title:"Components/Avatar",tags:["autodocs"],parameters:{docs:{description:{component:"User profile images and visual identifiers with support for images, initials, status indicators, and interactive states."}}},argTypes:{src:{control:"text",description:"Image URL"},initials:{control:"text",description:"Initials to display"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Avatar size"},status:{control:"select",options:[null,"online","offline","busy","away"],description:"Status indicator"},clickable:{control:"boolean",description:"Make avatar clickable"}}},d={render:e=>{const r=e.size&&e.size!=="md"?` avatar-${e.size}`:"",n=e.status?` avatar-status-${e.status}`:"",s=e.clickable?" avatar-clickable":"",a=document.createElement(e.clickable?"button":"div");return a.className=`avatar${r}${n}${s}`,e.clickable&&a.setAttribute("aria-label","View profile"),e.src?a.innerHTML=`<img src="${e.src}" alt="${e.initials?e.initials+" avatar":"User avatar"}">`:e.initials?a.innerHTML=`<span>${e.initials}</span>`:a.innerHTML="<span>JD</span>",a},args:{src:"https://i.pravatar.cc/150?img=1",size:"md",status:null,clickable:!1}},m={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.alignItems="center",e.style.gap="var(--space-6)",e.style.flexWrap="wrap",["JD","AB","CD","EF"].forEach(n=>{const s=document.createElement("div");s.className="avatar",s.innerHTML=`<span>${n}</span>`,e.appendChild(s)}),e}},v={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="var(--space-6)",e.style.flexWrap="wrap";for(let r=1;r<=4;r++){const n=document.createElement("div");n.className="avatar",n.innerHTML=`<img src="https://i.pravatar.cc/150?img=${r}" alt="Profile picture ${r}">`,e.appendChild(n)}return e}},u={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.alignItems="center",e.style.gap="var(--space-6)",e.style.flexWrap="wrap",[{class:"avatar-xs",label:"XS"},{class:"avatar-sm",label:"SM"},{class:"",label:"Default"},{class:"avatar-lg",label:"LG"},{class:"avatar-xl",label:"XL"}].forEach(({class:n,label:s})=>{const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="center",a.style.gap="var(--space-2)";const t=document.createElement("div");t.className=n?`avatar ${n}`:"avatar",t.innerHTML=`<span>${s}</span>`;const i=document.createElement("p");i.style.fontSize="var(--text-xs)",i.style.color="var(--color-text-secondary)",i.style.margin="0",i.textContent=s,a.appendChild(t),a.appendChild(i),e.appendChild(a)}),e}},y={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-6)",e.style.flexWrap="wrap",[{status:"online",label:"Online"},{status:"busy",label:"Busy"},{status:"away",label:"Away"},{status:"offline",label:"Offline"}].forEach(({status:n,label:s},a)=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",t.style.gap="var(--space-2)";const i=document.createElement("div");i.className=`avatar avatar-status-${n}`,i.innerHTML=`<img src="https://i.pravatar.cc/150?img=${a+5}" alt="User ${n}">`;const l=document.createElement("p");l.style.fontSize="var(--text-sm)",l.style.color="var(--color-text-secondary)",l.style.margin="0",l.textContent=s,t.appendChild(i),t.appendChild(l),e.appendChild(t)}),e}},g={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--space-6)",e.style.flexWrap="wrap",[{src:"https://i.pravatar.cc/150?img=14",alt:"John Doe"},{src:"https://i.pravatar.cc/150?img=15",alt:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=16",alt:"Mike Johnson",status:"online"},{initials:"SW",alt:"Sarah Wilson",size:"lg"}].forEach(({src:n,initials:s,alt:a,status:t,size:i})=>{const l=document.createElement("button"),o=i?` avatar-${i}`:"",c=t?` avatar-status-${t}`:"";l.className=`avatar avatar-clickable${o}${c}`,l.setAttribute("aria-label",`View profile of ${a}`),l.setAttribute("tabindex","0"),n?l.innerHTML=`<img src="${n}" alt="">`:l.innerHTML=`<span>${s}</span>`,e.appendChild(l)}),e}},f={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)";const r=document.createElement("div");r.className="avatar-group",["A","B","C","D","+5"].forEach(a=>{const t=document.createElement("div");t.className="avatar",t.innerHTML=`<span>${a}</span>`,r.appendChild(t)}),e.appendChild(r);const s=document.createElement("div");s.className="avatar-group";for(let a=10;a<=13;a++){const t=document.createElement("div");t.className="avatar",t.innerHTML=`<img src="https://i.pravatar.cc/150?img=${a}" alt="Profile picture ${a}">`,s.appendChild(t)}return e.appendChild(s),e}},h={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)";const r=document.createElement("div");r.style.display="flex",r.style.alignItems="center",r.style.gap="var(--space-3)";const n=document.createElement("div");n.className="avatar",n.innerHTML='<img src="https://i.pravatar.cc/150?img=20" alt="John Doe">';const s=document.createElement("div");s.innerHTML=`
      <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">John Doe</div>
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">john.doe@example.com</div>
    `,r.appendChild(n),r.appendChild(s),e.appendChild(r);const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center",a.style.gap="var(--space-3)";const t=document.createElement("div");t.className="avatar avatar-status-online",t.innerHTML='<img src="https://i.pravatar.cc/150?img=21" alt="Jane Smith">';const i=document.createElement("div");return i.innerHTML=`
      <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">Jane Smith</div>
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">Active now</div>
    `,a.appendChild(t),a.appendChild(i),e.appendChild(a),e}},x={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-4)",[{src:"https://i.pravatar.cc/150?img=20",name:"John Doe",role:"Product Designer",badge:"Admin",badgeClass:"badge-success"},{src:"https://i.pravatar.cc/150?img=21",name:"Jane Smith",role:"Developer",badge:"Member",badgeClass:"badge-secondary",status:"online"},{initials:"MJ",name:"Mike Johnson",role:"Marketing Manager",badge:"Member",badgeClass:"badge-secondary",status:"away"}].forEach(({src:n,initials:s,name:a,role:t,badge:i,badgeClass:l,status:o})=>{const c=document.createElement("div");c.style.display="flex",c.style.alignItems="center",c.style.gap="var(--space-3)";const p=document.createElement("div"),Z=o?` avatar-status-${o}`:"";p.className=`avatar avatar-sm${Z}`,n?p.innerHTML=`<img src="${n}" alt="${a}">`:p.innerHTML=`<span>${s}</span>`;const E=document.createElement("div");E.style.flex="1",E.innerHTML=`
        <div style="font-weight: var(--font-semibold); color: var(--color-text-primary); font-size: var(--text-sm);">${a}</div>
        <div style="font-size: var(--text-xs); color: var(--color-text-secondary);">${t}</div>
      `;const C=document.createElement("span");C.className=`badge ${l} badge-sm`,C.textContent=i,c.appendChild(p),c.appendChild(E),c.appendChild(C),e.appendChild(c)}),e}},b={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",[{src:"https://i.pravatar.cc/150?img=30",name:"Sarah Wilson",time:"2 hours ago",text:"Great work on the new design! The color scheme really pops and the layout is much more intuitive."},{initials:"TJ",name:"Tom Jackson",time:"5 hours ago",text:"Updated the documentation with the latest API changes. Please review when you get a chance."}].forEach(({src:n,initials:s,name:a,time:t,text:i})=>{const l=document.createElement("div");l.style.display="flex",l.style.gap="var(--space-3)";const o=document.createElement("div");o.className="avatar avatar-sm",n?o.innerHTML=`<img src="${n}" alt="${a}">`:o.innerHTML=`<span>${s}</span>`;const c=document.createElement("div");c.style.flex="1",c.innerHTML=`
        <div>
          <span style="font-weight: var(--font-semibold); color: var(--color-text-primary);">${a}</span>
          <span style="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-left: var(--space-2);">${t}</span>
        </div>
        <p style="margin: var(--space-2) 0 0 0; color: var(--color-text-secondary); font-size: var(--text-sm);">${i}</p>
      `,l.appendChild(o),l.appendChild(c),e.appendChild(l)}),e}};var $,w,M;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const sizeClass = args.size && args.size !== 'md' ? \` avatar-\${args.size}\` : '';
    const statusClass = args.status ? \` avatar-status-\${args.status}\` : '';
    const clickableClass = args.clickable ? ' avatar-clickable' : '';
    const avatar = document.createElement(args.clickable ? 'button' : 'div');
    avatar.className = \`avatar\${sizeClass}\${statusClass}\${clickableClass}\`;
    if (args.clickable) {
      avatar.setAttribute('aria-label', 'View profile');
    }
    if (args.src) {
      avatar.innerHTML = \`<img src="\${args.src}" alt="\${args.initials ? args.initials + ' avatar' : 'User avatar'}">\`;
    } else if (args.initials) {
      avatar.innerHTML = \`<span>\${args.initials}</span>\`;
    } else {
      avatar.innerHTML = \`<span>JD</span>\`;
    }
    return avatar;
  },
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    size: 'md',
    status: null,
    clickable: false
  }
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var L,T,z;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    const avatars = ['JD', 'AB', 'CD', 'EF'];
    avatars.forEach(initials => {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerHTML = \`<span>\${initials}</span>\`;
      container.appendChild(avatar);
    });
    return container;
  }
}`,...(z=(T=m.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var H,S,D;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    for (let i = 1; i <= 4; i++) {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerHTML = \`<img src="https://i.pravatar.cc/150?img=\${i}" alt="Profile picture \${i}">\`;
      container.appendChild(avatar);
    }
    return container;
  }
}`,...(D=(S=v.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var k,J,N;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    const sizes = [{
      class: 'avatar-xs',
      label: 'XS'
    }, {
      class: 'avatar-sm',
      label: 'SM'
    }, {
      class: '',
      label: 'Default'
    }, {
      class: 'avatar-lg',
      label: 'LG'
    }, {
      class: 'avatar-xl',
      label: 'XL'
    }];
    sizes.forEach(({
      class: sizeClass,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = 'var(--space-2)';
      const avatar = document.createElement('div');
      avatar.className = sizeClass ? \`avatar \${sizeClass}\` : 'avatar';
      avatar.innerHTML = \`<span>\${label}</span>\`;
      const labelEl = document.createElement('p');
      labelEl.style.fontSize = 'var(--text-xs)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.style.margin = '0';
      labelEl.textContent = label;
      wrapper.appendChild(avatar);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(N=(J=u.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var I,A,W;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    const statuses = [{
      status: 'online',
      label: 'Online'
    }, {
      status: 'busy',
      label: 'Busy'
    }, {
      status: 'away',
      label: 'Away'
    }, {
      status: 'offline',
      label: 'Offline'
    }];
    statuses.forEach(({
      status,
      label
    }, index) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = 'var(--space-2)';
      const avatar = document.createElement('div');
      avatar.className = \`avatar avatar-status-\${status}\`;
      avatar.innerHTML = \`<img src="https://i.pravatar.cc/150?img=\${index + 5}" alt="User \${status}">\`;
      const labelEl = document.createElement('p');
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.style.margin = '0';
      labelEl.textContent = label;
      wrapper.appendChild(avatar);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(W=(A=y.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var P,U,B;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';
    const examples = [{
      src: 'https://i.pravatar.cc/150?img=14',
      alt: 'John Doe'
    }, {
      src: 'https://i.pravatar.cc/150?img=15',
      alt: 'Jane Smith'
    }, {
      src: 'https://i.pravatar.cc/150?img=16',
      alt: 'Mike Johnson',
      status: 'online'
    }, {
      initials: 'SW',
      alt: 'Sarah Wilson',
      size: 'lg'
    }];
    examples.forEach(({
      src,
      initials,
      alt,
      status,
      size
    }) => {
      const avatar = document.createElement('button');
      const sizeClass = size ? \` avatar-\${size}\` : '';
      const statusClass = status ? \` avatar-status-\${status}\` : '';
      avatar.className = \`avatar avatar-clickable\${sizeClass}\${statusClass}\`;
      avatar.setAttribute('aria-label', \`View profile of \${alt}\`);
      avatar.setAttribute('tabindex', '0');
      if (src) {
        avatar.innerHTML = \`<img src="\${src}" alt="">\`;
      } else {
        avatar.innerHTML = \`<span>\${initials}</span>\`;
      }
      container.appendChild(avatar);
    });
    return container;
  }
}`,...(B=(U=g.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var G,O,V;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    // Initials group
    const group1 = document.createElement('div');
    group1.className = 'avatar-group';
    const initials = ['A', 'B', 'C', 'D', '+5'];
    initials.forEach(initial => {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerHTML = \`<span>\${initial}</span>\`;
      group1.appendChild(avatar);
    });
    container.appendChild(group1);

    // Images group
    const group2 = document.createElement('div');
    group2.className = 'avatar-group';
    for (let i = 10; i <= 13; i++) {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerHTML = \`<img src="https://i.pravatar.cc/150?img=\${i}" alt="Profile picture \${i}">\`;
      group2.appendChild(avatar);
    }
    container.appendChild(group2);
    return container;
  }
}`,...(V=(O=f.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var X,j,F;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    // Basic user profile
    const profile1 = document.createElement('div');
    profile1.style.display = 'flex';
    profile1.style.alignItems = 'center';
    profile1.style.gap = 'var(--space-3)';
    const avatar1 = document.createElement('div');
    avatar1.className = 'avatar';
    avatar1.innerHTML = \`<img src="https://i.pravatar.cc/150?img=20" alt="John Doe">\`;
    const info1 = document.createElement('div');
    info1.innerHTML = \`
      <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">John Doe</div>
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">john.doe@example.com</div>
    \`;
    profile1.appendChild(avatar1);
    profile1.appendChild(info1);
    container.appendChild(profile1);

    // Online user
    const profile2 = document.createElement('div');
    profile2.style.display = 'flex';
    profile2.style.alignItems = 'center';
    profile2.style.gap = 'var(--space-3)';
    const avatar2 = document.createElement('div');
    avatar2.className = 'avatar avatar-status-online';
    avatar2.innerHTML = \`<img src="https://i.pravatar.cc/150?img=21" alt="Jane Smith">\`;
    const info2 = document.createElement('div');
    info2.innerHTML = \`
      <div style="font-weight: var(--font-semibold); color: var(--color-text-primary);">Jane Smith</div>
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">Active now</div>
    \`;
    profile2.appendChild(avatar2);
    profile2.appendChild(info2);
    container.appendChild(profile2);
    return container;
  }
}`,...(F=(j=h.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var _,R,q;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    const users = [{
      src: 'https://i.pravatar.cc/150?img=20',
      name: 'John Doe',
      role: 'Product Designer',
      badge: 'Admin',
      badgeClass: 'badge-success'
    }, {
      src: 'https://i.pravatar.cc/150?img=21',
      name: 'Jane Smith',
      role: 'Developer',
      badge: 'Member',
      badgeClass: 'badge-secondary',
      status: 'online'
    }, {
      initials: 'MJ',
      name: 'Mike Johnson',
      role: 'Marketing Manager',
      badge: 'Member',
      badgeClass: 'badge-secondary',
      status: 'away'
    }];
    users.forEach(({
      src,
      initials,
      name,
      role,
      badge,
      badgeClass,
      status
    }) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = 'var(--space-3)';
      const avatar = document.createElement('div');
      const statusClass = status ? \` avatar-status-\${status}\` : '';
      avatar.className = \`avatar avatar-sm\${statusClass}\`;
      if (src) {
        avatar.innerHTML = \`<img src="\${src}" alt="\${name}">\`;
      } else {
        avatar.innerHTML = \`<span>\${initials}</span>\`;
      }
      const info = document.createElement('div');
      info.style.flex = '1';
      info.innerHTML = \`
        <div style="font-weight: var(--font-semibold); color: var(--color-text-primary); font-size: var(--text-sm);">\${name}</div>
        <div style="font-size: var(--text-xs); color: var(--color-text-secondary);">\${role}</div>
      \`;
      const badgeEl = document.createElement('span');
      badgeEl.className = \`badge \${badgeClass} badge-sm\`;
      badgeEl.textContent = badge;
      row.appendChild(avatar);
      row.appendChild(info);
      row.appendChild(badgeEl);
      container.appendChild(row);
    });
    return container;
  }
}`,...(q=(R=x.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var K,Q,Y;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    const comments = [{
      src: 'https://i.pravatar.cc/150?img=30',
      name: 'Sarah Wilson',
      time: '2 hours ago',
      text: 'Great work on the new design! The color scheme really pops and the layout is much more intuitive.'
    }, {
      initials: 'TJ',
      name: 'Tom Jackson',
      time: '5 hours ago',
      text: 'Updated the documentation with the latest API changes. Please review when you get a chance.'
    }];
    comments.forEach(({
      src,
      initials,
      name,
      time,
      text
    }) => {
      const comment = document.createElement('div');
      comment.style.display = 'flex';
      comment.style.gap = 'var(--space-3)';
      const avatar = document.createElement('div');
      avatar.className = 'avatar avatar-sm';
      if (src) {
        avatar.innerHTML = \`<img src="\${src}" alt="\${name}">\`;
      } else {
        avatar.innerHTML = \`<span>\${initials}</span>\`;
      }
      const content = document.createElement('div');
      content.style.flex = '1';
      content.innerHTML = \`
        <div>
          <span style="font-weight: var(--font-semibold); color: var(--color-text-primary);">\${name}</span>
          <span style="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-left: var(--space-2);">\${time}</span>
        </div>
        <p style="margin: var(--space-2) 0 0 0; color: var(--color-text-secondary); font-size: var(--text-sm);">\${text}</p>
      \`;
      comment.appendChild(avatar);
      comment.appendChild(content);
      container.appendChild(comment);
    });
    return container;
  }
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const ae=["Default","WithInitials","WithImages","AllSizes","WithStatus","Clickable","AvatarGroup","UserProfile","UserList","Comments"];export{u as AllSizes,f as AvatarGroup,g as Clickable,b as Comments,d as Default,x as UserList,h as UserProfile,v as WithImages,m as WithInitials,y as WithStatus,ae as __namedExportsOrder,ee as default};
