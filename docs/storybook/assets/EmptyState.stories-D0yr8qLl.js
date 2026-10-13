import{c as De}from"./createThemeGrid-DWAncU4Q.js";const qe={title:"Components/Layout/Empty State",tags:["autodocs"],parameters:{docs:{description:{component:`
# Empty State Component

Guide users when content is unavailable with helpful placeholders and clear calls to action.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Structure

\`\`\`html
<div class="empty-state">
  <div class="empty-state-icon">
    <i data-lucide="inbox"></i>
  </div>
  <h3 class="empty-state-title">No items yet</h3>
  <p class="empty-state-description">Get started by creating your first item.</p>
  <button class="btn btn-primary">
    <i data-lucide="plus"></i>
    Create Item
  </button>
</div>
\`\`\`

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="empty-state">
  <div class="empty-state-icon">
    <i data-lucide="inbox"></i>
  </div>
  <h3 class="empty-state-title">No items yet</h3>
  <p class="empty-state-description">Get started by creating your first item.</p>
  <button class="btn btn-primary">Create Item</button>
</div>
\`\`\`

**React:**
\`\`\`jsx
<div className="empty-state">
  <div className="empty-state-icon">
    <Inbox size={48} />
  </div>
  <h3 className="empty-state-title">No items yet</h3>
  <p className="empty-state-description">Get started by creating your first item.</p>
  <button className="btn btn-primary">Create Item</button>
</div>
\`\`\`

**Vue:**
\`\`\`vue
<div class="empty-state">
  <div class="empty-state-icon">
    <Inbox :size="48" />
  </div>
  <h3 class="empty-state-title">No items yet</h3>
  <p class="empty-state-description">Get started by creating your first item.</p>
  <button class="btn btn-primary">Create Item</button>
</div>
\`\`\`

**Svelte:**
\`\`\`svelte
<div class="empty-state">
  <div class="empty-state-icon">
    <Inbox size={48} />
  </div>
  <h3 class="empty-state-title">No items yet</h3>
  <p class="empty-state-description">Get started by creating your first item.</p>
  <button class="btn btn-primary">Create Item</button>
</div>
\`\`\`
        `.trim()}}},argTypes:{title:{control:"text",description:"Empty state heading"},description:{control:"text",description:"Helpful message explaining the empty state"},icon:{control:"text",description:'Lucide icon name (e.g., "inbox", "search", "alert-circle")'},iconColor:{control:"color",description:"Custom icon color (use CSS variable or hex)"},variant:{control:"select",options:["default","error","success","search"],description:"Empty state variant"},primaryAction:{control:"text",description:"Primary action button text"},secondaryAction:{control:"text",description:"Secondary action button text"}}};function n(e){const t=document.createElement("div");t.style.padding="3rem",t.style.minHeight="400px",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center";const o=document.createElement("div");o.className="empty-state";const i=document.createElement("div");i.className="empty-state-icon",e.iconColor&&(i.style.color=e.iconColor);const p=document.createElement("i");p.setAttribute("data-lucide",e.icon||"inbox"),p.style.width="48px",p.style.height="48px",i.appendChild(p),o.appendChild(i);const l=document.createElement("h3");l.className="empty-state-title",l.textContent=e.title||"No items yet",o.appendChild(l);const a=document.createElement("p");if(a.className="empty-state-description",a.textContent=e.description||"Get started by creating your first item.",o.appendChild(a),e.primaryAction||e.secondaryAction){if(e.secondaryAction){const r=document.createElement("div");r.style.display="flex",r.style.gap="var(--space-3)",r.style.justifyContent="center";const c=document.createElement("button");if(c.className="btn btn-secondary",e.secondaryIcon){const s=document.createElement("i");s.setAttribute("data-lucide",e.secondaryIcon),s.style.width="16px",s.style.height="16px",c.appendChild(s)}if(c.appendChild(document.createTextNode(e.secondaryAction)),r.appendChild(c),e.primaryAction){const s=document.createElement("button");if(s.className="btn btn-primary",e.primaryIcon){const d=document.createElement("i");d.setAttribute("data-lucide",e.primaryIcon),d.style.width="16px",d.style.height="16px",s.appendChild(d)}s.appendChild(document.createTextNode(e.primaryAction)),r.appendChild(s)}o.appendChild(r)}else if(e.primaryAction){const r=document.createElement("button");if(r.className="btn btn-primary",e.primaryIcon){const c=document.createElement("i");c.setAttribute("data-lucide",e.primaryIcon),c.style.width="16px",c.style.height="16px",r.appendChild(c)}r.appendChild(document.createTextNode(e.primaryAction)),o.appendChild(r)}}return t.appendChild(o),setTimeout(()=>{window.lucide&&window.lucide.createIcons()},0),t}const m={render:e=>n(e),args:{title:"No items yet",description:"Get started by creating your first item. It only takes a few seconds!",icon:"inbox",primaryAction:"Create Item",primaryIcon:"plus"}},y={render:e=>n(e),args:{title:'No results for "invoice"',description:"Check the spelling or try a broader search.",icon:"search",primaryAction:"Clear filters"}},u={render:e=>n(e),args:{title:'No results for "invoice"',description:"Check the spelling or try a broader search.",icon:"search",primaryAction:"Clear filters"}},h={render:e=>n(e),args:{title:"No data available",description:"Data will appear here once it's available.",icon:"inbox",primaryAction:"Refresh",primaryIcon:"refresh-cw"}},g={render:e=>n(e),args:{title:"We couldn't load your data",description:"Check your connection, then try again.",icon:"alert-circle",iconColor:"var(--color-error)",primaryAction:"Try again",primaryIcon:"refresh-cw",secondaryAction:"Go back"}},f={render:e=>n(e),args:{title:"We couldn't load your data",description:"Check your connection, then try again.",icon:"alert-circle",iconColor:"var(--color-error)",primaryAction:"Try again",primaryIcon:"refresh-cw",secondaryAction:"Go back"}},b={render:e=>n(e),args:{title:"No messages",description:"Your inbox is empty. Check back later for new messages.",icon:"inbox"}},C={render:e=>n(e),args:{title:"No notifications",description:"You're all caught up! We'll notify you when something new happens.",icon:"bell-off"}},w={render:e=>n(e),args:{title:"No connections yet",description:"Start building your network by connecting with people.",icon:"users"}},x={render:e=>n(e),args:{title:"Welcome to Aural UI!",description:"Let's get you started with a quick tour of the platform. It will only take a minute to set up your workspace.",icon:"rocket",iconColor:"var(--color-primary)",primaryAction:"Start Tour",primaryIcon:"play"}},I={render:e=>n(e),args:{title:"Welcome to Aural UI!",description:"Let's get you started with a quick tour of the platform.",icon:"rocket",iconColor:"var(--color-primary)",primaryAction:"Start Tour",primaryIcon:"play"}},N={render:e=>n(e),args:{title:"This folder is empty",description:"Upload files or create folders to organize your content.",icon:"folder-open",primaryAction:"Upload Files",primaryIcon:"upload",secondaryAction:"New Folder",secondaryIcon:"folder-plus"}},v={render:e=>n(e),args:{title:"No connections yet",description:"Start building your network by connecting with people you know or discovering new connections.",icon:"users",primaryAction:"Invite Friends",primaryIcon:"user-plus",secondaryAction:"Browse People",secondaryIcon:"search"}},A={render:e=>n(e),args:{title:"Access restricted",description:"You don't have permission to view this content. Contact your administrator for access.",icon:"lock",iconColor:"var(--color-warning)",primaryAction:"Request Access",secondaryAction:"Go back"}},E={render:e=>n(e),args:{title:"You're offline",description:"Check your internet connection, then try again.",icon:"wifi-off",iconColor:"var(--color-error)",primaryAction:"Try again",primaryIcon:"refresh-cw"}},S={render:e=>n(e),args:{title:"All caught up!",description:"You've completed all your tasks. Great work! We'll notify you when new items arrive.",icon:"check-circle",iconColor:"var(--color-success)"}},k={render:e=>n(e),args:{title:"All caught up!",description:"You're all caught up! We'll notify you when something new happens.",icon:"check-circle",iconColor:"var(--color-success)"}},W={render:()=>{const e=document.createElement("div");e.style.padding="3rem",e.style.minHeight="400px",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center";const t=document.createElement("div");t.className="empty-state";const o=document.createElement("div");o.className="empty-state-icon";const i=document.createElement("i");i.setAttribute("data-lucide","folder-open"),i.style.width="48px",i.style.height="48px",o.appendChild(i),t.appendChild(o);const p=document.createElement("h3");p.className="empty-state-title",p.textContent="This folder is empty",t.appendChild(p);const l=document.createElement("p");l.className="empty-state-description",l.textContent="Upload files or create folders to organize your content.",t.appendChild(l);const a=document.createElement("div");a.style.display="flex",a.style.gap="var(--space-3)",a.style.justifyContent="center";const r=document.createElement("button");r.className="btn btn-secondary";const c=document.createElement("i");c.setAttribute("data-lucide","folder-plus"),c.style.width="16px",c.style.height="16px",r.appendChild(c),r.appendChild(document.createTextNode("New Folder")),a.appendChild(r);const s=document.createElement("button");s.className="btn btn-primary";const d=document.createElement("i");return d.setAttribute("data-lucide","upload"),d.style.width="16px",d.style.height="16px",s.appendChild(d),s.appendChild(document.createTextNode("Upload Files")),a.appendChild(s),t.appendChild(a),e.appendChild(t),setTimeout(()=>{window.lucide&&window.lucide.createIcons()},0),e}},T={render:e=>n(e),args:{title:"Welcome to Aural UI!",description:"Let's get you started with a quick tour of the platform.",icon:"rocket",iconColor:"var(--color-primary)",primaryAction:"Start Tour",primaryIcon:"play"}},G={render:e=>De(()=>{const t=document.createElement("div");t.className="empty-state",t.style.padding="2rem";const o=document.createElement("div");o.className="empty-state-icon",e.iconColor&&(o.style.color=e.iconColor);const i=document.createElement("i");i.setAttribute("data-lucide",e.icon||"inbox"),i.style.width="48px",i.style.height="48px",o.appendChild(i),t.appendChild(o);const p=document.createElement("h3");p.className="empty-state-title",p.textContent=e.title||"No items yet",t.appendChild(p);const l=document.createElement("p");if(l.className="empty-state-description",l.textContent=e.description||"Get started by creating your first item.",t.appendChild(l),e.primaryAction){const a=document.createElement("button");if(a.className="btn btn-primary btn-sm",e.primaryIcon){const r=document.createElement("i");r.setAttribute("data-lucide",e.primaryIcon),r.style.width="16px",r.style.height="16px",a.appendChild(r)}a.appendChild(document.createTextNode(e.primaryAction)),t.appendChild(a)}return setTimeout(()=>{window.lucide&&window.lucide.createIcons()},0),t}),args:{title:"No items yet",description:"Get started by creating your first item.",icon:"inbox",primaryAction:"Create Item",primaryIcon:"plus",iconColor:""},argTypes:{title:{control:"text",description:"Empty state heading"},description:{control:"text",description:"Helpful message"},icon:{control:"text",description:"Lucide icon name"},iconColor:{control:"color",description:"Custom icon color"},primaryAction:{control:"text",description:"Primary button text"},primaryIcon:{control:"text",description:"Primary button icon"}}};var B,U,F;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No items yet',
    description: 'Get started by creating your first item. It only takes a few seconds!',
    icon: 'inbox',
    primaryAction: 'Create Item',
    primaryIcon: 'plus'
  }
}`,...(F=(U=m.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var R,Y,L;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No results for "invoice"',
    description: 'Check the spelling or try a broader search.',
    icon: 'search',
    primaryAction: 'Clear filters'
  }
}`,...(L=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var D,P,q;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No results for "invoice"',
    description: 'Check the spelling or try a broader search.',
    icon: 'search',
    primaryAction: 'Clear filters'
  }
}`,...(q=(P=u.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var j,z,H;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No data available',
    description: "Data will appear here once it's available.",
    icon: 'inbox',
    primaryAction: 'Refresh',
    primaryIcon: 'refresh-cw'
  }
}`,...(H=(z=h.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var M,O,V;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: "We couldn't load your data",
    description: 'Check your connection, then try again.',
    icon: 'alert-circle',
    iconColor: 'var(--color-error)',
    primaryAction: 'Try again',
    primaryIcon: 'refresh-cw',
    secondaryAction: 'Go back'
  }
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,J,K;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: "We couldn't load your data",
    description: 'Check your connection, then try again.',
    icon: 'alert-circle',
    iconColor: 'var(--color-error)',
    primaryAction: 'Try again',
    primaryIcon: 'refresh-cw',
    secondaryAction: 'Go back'
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No messages',
    description: 'Your inbox is empty. Check back later for new messages.',
    icon: 'inbox'
  }
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No notifications',
    description: "You're all caught up! We'll notify you when something new happens.",
    icon: 'bell-off'
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ne,oe;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No connections yet',
    description: 'Start building your network by connecting with people.',
    icon: 'users'
  }
}`,...(oe=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,ie,ce;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'Welcome to Aural UI!',
    description: "Let's get you started with a quick tour of the platform. It will only take a minute to set up your workspace.",
    icon: 'rocket',
    iconColor: 'var(--color-primary)',
    primaryAction: 'Start Tour',
    primaryIcon: 'play'
  }
}`,...(ce=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var se,pe,le;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'Welcome to Aural UI!',
    description: "Let's get you started with a quick tour of the platform.",
    icon: 'rocket',
    iconColor: 'var(--color-primary)',
    primaryAction: 'Start Tour',
    primaryIcon: 'play'
  }
}`,...(le=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var de,me,ye;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'This folder is empty',
    description: 'Upload files or create folders to organize your content.',
    icon: 'folder-open',
    primaryAction: 'Upload Files',
    primaryIcon: 'upload',
    secondaryAction: 'New Folder',
    secondaryIcon: 'folder-plus'
  }
}`,...(ye=(me=N.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var ue,he,ge;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No connections yet',
    description: 'Start building your network by connecting with people you know or discovering new connections.',
    icon: 'users',
    primaryAction: 'Invite Friends',
    primaryIcon: 'user-plus',
    secondaryAction: 'Browse People',
    secondaryIcon: 'search'
  }
}`,...(ge=(he=v.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var fe,be,Ce;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'Access restricted',
    description: "You don't have permission to view this content. Contact your administrator for access.",
    icon: 'lock',
    iconColor: 'var(--color-warning)',
    primaryAction: 'Request Access',
    secondaryAction: 'Go back'
  }
}`,...(Ce=(be=A.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var we,xe,Ie;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: "You're offline",
    description: 'Check your internet connection, then try again.',
    icon: 'wifi-off',
    iconColor: 'var(--color-error)',
    primaryAction: 'Try again',
    primaryIcon: 'refresh-cw'
  }
}`,...(Ie=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var Ne,ve,Ae;S.parameters={...S.parameters,docs:{...(Ne=S.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'All caught up!',
    description: "You've completed all your tasks. Great work! We'll notify you when new items arrive.",
    icon: 'check-circle',
    iconColor: 'var(--color-success)'
  }
}`,...(Ae=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:Ae.source}}};var Ee,Se,ke;k.parameters={...k.parameters,docs:{...(Ee=k.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'All caught up!',
    description: "You're all caught up! We'll notify you when something new happens.",
    icon: 'check-circle',
    iconColor: 'var(--color-success)'
  }
}`,...(ke=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var We,Te,Ge;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '3rem';
    container.style.minHeight = '400px';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';

    // Icon
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'empty-state-icon';
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', 'folder-open');
    icon.style.width = '48px';
    icon.style.height = '48px';
    iconWrapper.appendChild(icon);
    emptyState.appendChild(iconWrapper);

    // Title
    const title = document.createElement('h3');
    title.className = 'empty-state-title';
    title.textContent = 'This folder is empty';
    emptyState.appendChild(title);

    // Description
    const description = document.createElement('p');
    description.className = 'empty-state-description';
    description.textContent = 'Upload files or create folders to organize your content.';
    emptyState.appendChild(description);

    // Multiple actions in flex container
    const actionsWrapper = document.createElement('div');
    actionsWrapper.style.display = 'flex';
    actionsWrapper.style.gap = 'var(--space-3)';
    actionsWrapper.style.justifyContent = 'center';
    const secondaryBtn = document.createElement('button');
    secondaryBtn.className = 'btn btn-secondary';
    const folderIcon = document.createElement('i');
    folderIcon.setAttribute('data-lucide', 'folder-plus');
    folderIcon.style.width = '16px';
    folderIcon.style.height = '16px';
    secondaryBtn.appendChild(folderIcon);
    secondaryBtn.appendChild(document.createTextNode('New Folder'));
    actionsWrapper.appendChild(secondaryBtn);
    const primaryBtn = document.createElement('button');
    primaryBtn.className = 'btn btn-primary';
    const uploadIcon = document.createElement('i');
    uploadIcon.setAttribute('data-lucide', 'upload');
    uploadIcon.style.width = '16px';
    uploadIcon.style.height = '16px';
    primaryBtn.appendChild(uploadIcon);
    primaryBtn.appendChild(document.createTextNode('Upload Files'));
    actionsWrapper.appendChild(primaryBtn);
    emptyState.appendChild(actionsWrapper);
    container.appendChild(emptyState);
    setTimeout(() => {
      if ((window as any).lucide) {
        (window as any).lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(Ge=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ge.source}}};var Be,Ue,Fe;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'Welcome to Aural UI!',
    description: "Let's get you started with a quick tour of the platform.",
    icon: 'rocket',
    iconColor: 'var(--color-primary)',
    primaryAction: 'Start Tour',
    primaryIcon: 'play'
  }
}`,...(Fe=(Ue=T.parameters)==null?void 0:Ue.docs)==null?void 0:Fe.source}}};var Re,Ye,Le;G.parameters={...G.parameters,docs:{...(Re=G.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const emptyState = document.createElement('div');
      emptyState.className = 'empty-state';
      emptyState.style.padding = '2rem';

      // Icon
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'empty-state-icon';
      if (args.iconColor) {
        iconWrapper.style.color = args.iconColor;
      }
      const icon = document.createElement('i');
      icon.setAttribute('data-lucide', args.icon || 'inbox');
      icon.style.width = '48px';
      icon.style.height = '48px';
      iconWrapper.appendChild(icon);
      emptyState.appendChild(iconWrapper);

      // Title
      const title = document.createElement('h3');
      title.className = 'empty-state-title';
      title.textContent = args.title || 'No items yet';
      emptyState.appendChild(title);

      // Description
      const description = document.createElement('p');
      description.className = 'empty-state-description';
      description.textContent = args.description || 'Get started by creating your first item.';
      emptyState.appendChild(description);

      // Action
      if (args.primaryAction) {
        const button = document.createElement('button');
        button.className = 'btn btn-primary btn-sm';
        if (args.primaryIcon) {
          const btnIcon = document.createElement('i');
          btnIcon.setAttribute('data-lucide', args.primaryIcon);
          btnIcon.style.width = '16px';
          btnIcon.style.height = '16px';
          button.appendChild(btnIcon);
        }
        button.appendChild(document.createTextNode(args.primaryAction));
        emptyState.appendChild(button);
      }
      setTimeout(() => {
        if ((window as any).lucide) {
          (window as any).lucide.createIcons();
        }
      }, 0);
      return emptyState;
    });
  },
  args: {
    title: 'No items yet',
    description: 'Get started by creating your first item.',
    icon: 'inbox',
    primaryAction: 'Create Item',
    primaryIcon: 'plus',
    iconColor: ''
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Empty state heading'
    },
    description: {
      control: 'text',
      description: 'Helpful message'
    },
    icon: {
      control: 'text',
      description: 'Lucide icon name'
    },
    iconColor: {
      control: 'color',
      description: 'Custom icon color'
    },
    primaryAction: {
      control: 'text',
      description: 'Primary button text'
    },
    primaryIcon: {
      control: 'text',
      description: 'Primary button icon'
    }
  }
}`,...(Le=(Ye=G.parameters)==null?void 0:Ye.docs)==null?void 0:Le.source}}};const je=["Default","NoResults","NoSearchResults","NoData","Error","ErrorRecovery","NoMessages","NoNotifications","NoConnections","Welcome","Onboarding","EmptyFolder","NetworkBuilding","Permissions","Offline","Completed","AllCaughtUp","WithMultipleActions","WithColoredIcon","ThemeComparison"];export{k as AllCaughtUp,S as Completed,m as Default,N as EmptyFolder,g as Error,f as ErrorRecovery,v as NetworkBuilding,w as NoConnections,h as NoData,b as NoMessages,C as NoNotifications,y as NoResults,u as NoSearchResults,E as Offline,I as Onboarding,A as Permissions,G as ThemeComparison,x as Welcome,T as WithColoredIcon,W as WithMultipleActions,je as __namedExportsOrder,qe as default};
