import{c as je}from"./createThemeGrid-DWAncU4Q.js";const qe={title:"Components/Layout/Empty State",tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `.trim()}}},argTypes:{title:{control:"text",description:"Empty state heading"},description:{control:"text",description:"Helpful message explaining the empty state"},icon:{control:"text",description:'Lucide icon name (e.g., "inbox", "search", "alert-circle")'},iconColor:{control:"color",description:"Custom icon color (use CSS variable or hex)"},variant:{control:"select",options:["default","error","success","search"],description:"Empty state variant"},primaryAction:{control:"text",description:"Primary action button text"},secondaryAction:{control:"text",description:"Secondary action button text"}}};function r(e){const t=document.createElement("div");t.style.padding="3rem",t.style.minHeight="400px",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center";const o=document.createElement("div");o.className="empty-state";const i=document.createElement("div");i.className="empty-state-icon",e.iconColor&&(i.style.color=e.iconColor);const l=document.createElement("i");l.setAttribute("data-lucide",e.icon||"inbox"),l.style.width="48px",l.style.height="48px",i.appendChild(l),o.appendChild(i);const p=document.createElement("h3");p.className="empty-state-title",p.textContent=e.title||"No items yet",o.appendChild(p);const a=document.createElement("p");if(a.className="empty-state-description",a.textContent=e.description||"Get started by creating your first item.",o.appendChild(a),e.primaryAction||e.secondaryAction){if(e.secondaryAction){const n=document.createElement("div");n.style.display="flex",n.style.gap="var(--space-3)",n.style.justifyContent="center";const c=document.createElement("button");if(c.className="btn btn-secondary",e.secondaryIcon){const s=document.createElement("i");s.setAttribute("data-lucide",e.secondaryIcon),s.style.width="16px",s.style.height="16px",c.appendChild(s)}if(c.appendChild(document.createTextNode(e.secondaryAction)),n.appendChild(c),e.primaryAction){const s=document.createElement("button");if(s.className="btn btn-primary",e.primaryIcon){const d=document.createElement("i");d.setAttribute("data-lucide",e.primaryIcon),d.style.width="16px",d.style.height="16px",s.appendChild(d)}s.appendChild(document.createTextNode(e.primaryAction)),n.appendChild(s)}o.appendChild(n)}else if(e.primaryAction){const n=document.createElement("button");if(n.className="btn btn-primary",e.primaryIcon){const c=document.createElement("i");c.setAttribute("data-lucide",e.primaryIcon),c.style.width="16px",c.style.height="16px",n.appendChild(c)}n.appendChild(document.createTextNode(e.primaryAction)),o.appendChild(n)}}return t.appendChild(o),setTimeout(()=>{window.lucide&&window.lucide.createIcons()},0),t}const m={render:e=>r(e),args:{title:"No items yet",description:"Get started by creating your first item. It only takes a few seconds!",icon:"inbox",primaryAction:"Create Item",primaryIcon:"plus"}},y={render:e=>r(e),args:{title:"No results found",description:"We couldn't find any results matching your search. Try adjusting your filters or search terms.",icon:"search",primaryAction:"Clear Filters"}},u={render:e=>r(e),args:{title:"No results found",description:"Try adjusting your filters or search terms.",icon:"search",primaryAction:"Clear Filters"}},h={render:e=>r(e),args:{title:"No data available",description:"There is no data to display at this time. Check back later or refresh the page.",icon:"inbox",primaryAction:"Refresh",primaryIcon:"refresh-cw"}},g={render:e=>r(e),args:{title:"Something went wrong",description:"We're having trouble loading your data. Please check your connection and try again.",icon:"alert-circle",iconColor:"var(--color-error)",primaryAction:"Try Again",primaryIcon:"refresh-cw",secondaryAction:"Go Back"}},f={render:e=>r(e),args:{title:"Something went wrong",description:"We're having trouble loading your data. Please check your connection and try again.",icon:"alert-circle",iconColor:"var(--color-error)",primaryAction:"Try Again",primaryIcon:"refresh-cw",secondaryAction:"Go Back"}},b={render:e=>r(e),args:{title:"No messages",description:"Your inbox is empty. Check back later for new messages.",icon:"inbox"}},C={render:e=>r(e),args:{title:"No notifications",description:"You're all caught up! We'll notify you when something new happens.",icon:"bell-off"}},w={render:e=>r(e),args:{title:"No connections yet",description:"Start building your network by connecting with people.",icon:"users"}},x={render:e=>r(e),args:{title:"Welcome to Aural UI!",description:"Let's get you started with a quick tour of the platform. It will only take a minute to set up your workspace.",icon:"rocket",iconColor:"var(--color-primary)",primaryAction:"Start Tour",primaryIcon:"play"}},I={render:e=>r(e),args:{title:"Welcome to Aural UI!",description:"Let's get you started with a quick tour of the platform.",icon:"rocket",iconColor:"var(--color-primary)",primaryAction:"Start Tour",primaryIcon:"play"}},A={render:e=>r(e),args:{title:"This folder is empty",description:"Upload files or create folders to organize your content.",icon:"folder-open",primaryAction:"Upload Files",primaryIcon:"upload",secondaryAction:"New Folder",secondaryIcon:"folder-plus"}},N={render:e=>r(e),args:{title:"No connections yet",description:"Start building your network by connecting with people you know or discovering new connections.",icon:"users",primaryAction:"Invite Friends",primaryIcon:"user-plus",secondaryAction:"Browse People",secondaryIcon:"search"}},v={render:e=>r(e),args:{title:"Access restricted",description:"You don't have permission to view this content. Contact your administrator for access.",icon:"lock",iconColor:"var(--color-warning)",primaryAction:"Request Access",secondaryAction:"Go Back"}},E={render:e=>r(e),args:{title:"You're offline",description:"Please check your internet connection and try again.",icon:"wifi-off",iconColor:"var(--color-error)",primaryAction:"Retry",primaryIcon:"refresh-cw"}},S={render:e=>r(e),args:{title:"All caught up!",description:"You've completed all your tasks. Great work! We'll notify you when new items arrive.",icon:"check-circle",iconColor:"var(--color-success)"}},k={render:e=>r(e),args:{title:"All caught up!",description:"You're all caught up! We'll notify you when something new happens.",icon:"check-circle",iconColor:"var(--color-success)"}},W={render:()=>{const e=document.createElement("div");e.style.padding="3rem",e.style.minHeight="400px",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center";const t=document.createElement("div");t.className="empty-state";const o=document.createElement("div");o.className="empty-state-icon";const i=document.createElement("i");i.setAttribute("data-lucide","folder-open"),i.style.width="48px",i.style.height="48px",o.appendChild(i),t.appendChild(o);const l=document.createElement("h3");l.className="empty-state-title",l.textContent="This folder is empty",t.appendChild(l);const p=document.createElement("p");p.className="empty-state-description",p.textContent="Upload files or create folders to organize your content.",t.appendChild(p);const a=document.createElement("div");a.style.display="flex",a.style.gap="var(--space-3)",a.style.justifyContent="center";const n=document.createElement("button");n.className="btn btn-secondary";const c=document.createElement("i");c.setAttribute("data-lucide","folder-plus"),c.style.width="16px",c.style.height="16px",n.appendChild(c),n.appendChild(document.createTextNode("New Folder")),a.appendChild(n);const s=document.createElement("button");s.className="btn btn-primary";const d=document.createElement("i");return d.setAttribute("data-lucide","upload"),d.style.width="16px",d.style.height="16px",s.appendChild(d),s.appendChild(document.createTextNode("Upload Files")),a.appendChild(s),t.appendChild(a),e.appendChild(t),setTimeout(()=>{window.lucide&&window.lucide.createIcons()},0),e}},T={render:e=>r(e),args:{title:"Welcome to Aural UI!",description:"Let's get you started with a quick tour of the platform.",icon:"rocket",iconColor:"var(--color-primary)",primaryAction:"Start Tour",primaryIcon:"play"}},B={render:e=>je(()=>{const t=document.createElement("div");t.className="empty-state",t.style.padding="2rem";const o=document.createElement("div");o.className="empty-state-icon",e.iconColor&&(o.style.color=e.iconColor);const i=document.createElement("i");i.setAttribute("data-lucide",e.icon||"inbox"),i.style.width="48px",i.style.height="48px",o.appendChild(i),t.appendChild(o);const l=document.createElement("h3");l.className="empty-state-title",l.textContent=e.title||"No items yet",t.appendChild(l);const p=document.createElement("p");if(p.className="empty-state-description",p.textContent=e.description||"Get started by creating your first item.",t.appendChild(p),e.primaryAction){const a=document.createElement("button");if(a.className="btn btn-primary btn-sm",e.primaryIcon){const n=document.createElement("i");n.setAttribute("data-lucide",e.primaryIcon),n.style.width="16px",n.style.height="16px",a.appendChild(n)}a.appendChild(document.createTextNode(e.primaryAction)),t.appendChild(a)}return setTimeout(()=>{window.lucide&&window.lucide.createIcons()},0),t}),args:{title:"No items yet",description:"Get started by creating your first item.",icon:"inbox",primaryAction:"Create Item",primaryIcon:"plus",iconColor:""},argTypes:{title:{control:"text",description:"Empty state heading"},description:{control:"text",description:"Helpful message"},icon:{control:"text",description:"Lucide icon name"},iconColor:{control:"color",description:"Custom icon color"},primaryAction:{control:"text",description:"Primary button text"},primaryIcon:{control:"text",description:"Primary button icon"}}};var G,F,U;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No items yet',
    description: 'Get started by creating your first item. It only takes a few seconds!',
    icon: 'inbox',
    primaryAction: 'Create Item',
    primaryIcon: 'plus'
  }
}`,...(U=(F=m.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var P,R,Y;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No results found',
    description: 'We couldn\\'t find any results matching your search. Try adjusting your filters or search terms.',
    icon: 'search',
    primaryAction: 'Clear Filters'
  }
}`,...(Y=(R=y.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var j,L,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No results found',
    description: 'Try adjusting your filters or search terms.',
    icon: 'search',
    primaryAction: 'Clear Filters'
  }
}`,...(q=(L=u.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var z,D,H;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No data available',
    description: 'There is no data to display at this time. Check back later or refresh the page.',
    icon: 'inbox',
    primaryAction: 'Refresh',
    primaryIcon: 'refresh-cw'
  }
}`,...(H=(D=h.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var M,O,V;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'Something went wrong',
    description: 'We\\'re having trouble loading your data. Please check your connection and try again.',
    icon: 'alert-circle',
    iconColor: 'var(--color-error)',
    primaryAction: 'Try Again',
    primaryIcon: 'refresh-cw',
    secondaryAction: 'Go Back'
  }
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,J,K;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'Something went wrong',
    description: 'We\\'re having trouble loading your data. Please check your connection and try again.',
    icon: 'alert-circle',
    iconColor: 'var(--color-error)',
    primaryAction: 'Try Again',
    primaryIcon: 'refresh-cw',
    secondaryAction: 'Go Back'
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
    description: 'You\\'re all caught up! We\\'ll notify you when something new happens.',
    icon: 'bell-off'
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,oe;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'No connections yet',
    description: 'Start building your network by connecting with people.',
    icon: 'users'
  }
}`,...(oe=(re=w.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ae,ie,ce;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'Welcome to Aural UI!',
    description: 'Let\\'s get you started with a quick tour of the platform. It will only take a minute to set up your workspace.',
    icon: 'rocket',
    iconColor: 'var(--color-primary)',
    primaryAction: 'Start Tour',
    primaryIcon: 'play'
  }
}`,...(ce=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var se,le,pe;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'Welcome to Aural UI!',
    description: 'Let\\'s get you started with a quick tour of the platform.',
    icon: 'rocket',
    iconColor: 'var(--color-primary)',
    primaryAction: 'Start Tour',
    primaryIcon: 'play'
  }
}`,...(pe=(le=I.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var de,me,ye;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ye=(me=A.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var ue,he,ge;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(he=N.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var fe,be,Ce;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'Access restricted',
    description: 'You don\\'t have permission to view this content. Contact your administrator for access.',
    icon: 'lock',
    iconColor: 'var(--color-warning)',
    primaryAction: 'Request Access',
    secondaryAction: 'Go Back'
  }
}`,...(Ce=(be=v.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var we,xe,Ie;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'You\\'re offline',
    description: 'Please check your internet connection and try again.',
    icon: 'wifi-off',
    iconColor: 'var(--color-error)',
    primaryAction: 'Retry',
    primaryIcon: 'refresh-cw'
  }
}`,...(Ie=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var Ae,Ne,ve;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'All caught up!',
    description: 'You\\'ve completed all your tasks. Great work! We\\'ll notify you when new items arrive.',
    icon: 'check-circle',
    iconColor: 'var(--color-success)'
  }
}`,...(ve=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:ve.source}}};var Ee,Se,ke;k.parameters={...k.parameters,docs:{...(Ee=k.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'All caught up!',
    description: 'You\\'re all caught up! We\\'ll notify you when something new happens.',
    icon: 'check-circle',
    iconColor: 'var(--color-success)'
  }
}`,...(ke=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var We,Te,Be;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Be=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};var Ge,Fe,Ue;T.parameters={...T.parameters,docs:{...(Ge=T.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: args => createEmptyState(args),
  args: {
    title: 'Welcome to Aural UI!',
    description: 'Let\\'s get you started with a quick tour of the platform.',
    icon: 'rocket',
    iconColor: 'var(--color-primary)',
    primaryAction: 'Start Tour',
    primaryIcon: 'play'
  }
}`,...(Ue=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:Ue.source}}};var Pe,Re,Ye;B.parameters={...B.parameters,docs:{...(Pe=B.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ye=(Re=B.parameters)==null?void 0:Re.docs)==null?void 0:Ye.source}}};const ze=["Default","NoResults","NoSearchResults","NoData","Error","ErrorRecovery","NoMessages","NoNotifications","NoConnections","Welcome","Onboarding","EmptyFolder","NetworkBuilding","Permissions","Offline","Completed","AllCaughtUp","WithMultipleActions","WithColoredIcon","ThemeComparison"];export{k as AllCaughtUp,S as Completed,m as Default,A as EmptyFolder,g as Error,f as ErrorRecovery,N as NetworkBuilding,w as NoConnections,h as NoData,b as NoMessages,C as NoNotifications,y as NoResults,u as NoSearchResults,E as Offline,I as Onboarding,v as Permissions,B as ThemeComparison,x as Welcome,T as WithColoredIcon,W as WithMultipleActions,ze as __namedExportsOrder,qe as default};
