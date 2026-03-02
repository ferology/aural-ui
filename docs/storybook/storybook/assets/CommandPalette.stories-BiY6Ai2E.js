import{c as ue}from"./createThemeGrid-DWAncU4Q.js";const ge={title:"Components/Command Palette",tags:["autodocs"],parameters:{docs:{description:{component:`
# Command Palette Component

Quick command launcher with keyboard shortcuts, fuzzy search, and grouped actions for power users.

## Features

- **Keyboard Shortcuts**: Open with ⌘K / Ctrl+K
- **Fuzzy Search**: Fast filtering as you type
- **Grouped Commands**: Organized by category (Navigation, Actions, Theme, etc.)
- **Icons**: Visual identifiers using Lucide icons
- **Accessibility**: Full keyboard navigation with ARIA support

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-command-palette-backdrop is-open">
  <div class="aural-command-palette">
    <div class="aural-command-palette__search">
      <span class="aural-command-palette__search-icon">
        <i data-lucide="search"></i>
      </span>
      <input type="text" class="aural-command-palette__input"
             placeholder="Type a command...">
    </div>
    <div class="aural-command-palette__results">
      <div class="aural-command-palette__group">
        <div class="aural-command-palette__group-label">Navigation</div>
        <div class="aural-command-palette__items">
          <button class="aural-command-palette__item">
            <span class="aural-command-palette__item-icon">
              <i data-lucide="home"></i>
            </span>
            <div class="aural-command-palette__item-content">
              <div class="aural-command-palette__item-title">Go to Dashboard</div>
              <div class="aural-command-palette__item-subtitle">View overview</div>
            </div>
            <kbd class="aural-command-palette__item-kbd">⌘D</kbd>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  // Initialize Lucide icons
  lucide.createIcons();

  // Global keyboard shortcut
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      const backdrop = document.querySelector('.aural-command-palette-backdrop');
      backdrop.classList.add('is-open');
      // Focus input
      setTimeout(() => {
        const input = backdrop.querySelector('.aural-command-palette__input');
        if (input) input.focus();
      }, 100);
    }
    // Escape to close
    if (e.key === 'Escape') {
      document.querySelectorAll('.aural-command-palette-backdrop').forEach(el => {
        el.classList.remove('is-open');
      });
    }
  });

  // Click backdrop to close
  document.querySelectorAll('.aural-command-palette-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('is-open');
      }
    });
  });
<\/script>
\`\`\`

See the **Documentation** tab for React, Vue, and Svelte examples.
        `.trim()}}}};function i(n,e="Type a command..."){const t=document.createElement("div");t.className="aural-command-palette-backdrop is-open";const a=document.createElement("div");a.className="aural-command-palette";const o=document.createElement("div");o.className="aural-command-palette__search";const l=document.createElement("span");l.className="aural-command-palette__search-icon",l.innerHTML='<i data-lucide="search"></i>',o.appendChild(l);const m=document.createElement("input");m.type="text",m.className="aural-command-palette__input",m.placeholder=e,o.appendChild(m),a.appendChild(o);const T=document.createElement("div");return T.className="aural-command-palette__results",n.forEach(p=>{const u=document.createElement("div");u.className="aural-command-palette__group";const P=document.createElement("div");P.className="aural-command-palette__group-label",P.textContent=p.label,u.appendChild(P);const E=document.createElement("div");E.className="aural-command-palette__items",p.items.forEach(c=>{const d=document.createElement("button");if(d.className="aural-command-palette__item",c.icon){const s=document.createElement("span");s.className="aural-command-palette__item-icon",s.innerHTML=`<i data-lucide="${c.icon}" style="width: 18px; height: 18px;"></i>`,d.appendChild(s)}const b=document.createElement("div");b.className="aural-command-palette__item-content";const x=document.createElement("div");if(x.className="aural-command-palette__item-title",x.textContent=c.title,b.appendChild(x),c.subtitle){const s=document.createElement("div");s.className="aural-command-palette__item-subtitle",s.textContent=c.subtitle,b.appendChild(s)}if(d.appendChild(b),c.kbd){const s=document.createElement("kbd");s.className="aural-command-palette__item-kbd",s.textContent=c.kbd,d.appendChild(s)}E.appendChild(d)}),u.appendChild(E),T.appendChild(u)}),a.appendChild(T),t.appendChild(a),t.addEventListener("click",p=>{p.target===t&&t.classList.remove("is-open")}),setTimeout(()=>{window.lucide&&window.lucide.createIcons()},0),t}function r(n,e="Open Command Palette"){const t=document.createElement("div");t.style.padding="2rem";const a=document.createElement("button");a.className="btn btn-primary",a.innerHTML=`${e} <kbd style="margin-left: var(--space-2); padding: var(--space-1) var(--space-2); background: rgba(255,255,255,0.1); border-radius: var(--radius-sm); font-size: var(--text-xs);">⌘K</kbd>`,a.onclick=()=>n.classList.add("is-open");const o=document.createElement("p");return o.style.marginTop="var(--space-3)",o.style.color="var(--color-text-secondary)",o.style.fontSize="var(--text-sm)",o.innerHTML='Click to open or press <kbd style="padding: 2px 6px; background: var(--color-bg-tertiary); border-radius: var(--radius-sm);">⌘K</kbd> / <kbd style="padding: 2px 6px; background: var(--color-bg-tertiary); border-radius: var(--radius-sm);">Ctrl+K</kbd>',t.appendChild(a),t.appendChild(o),t.appendChild(n),n.classList.remove("is-open"),t}const g={render:()=>{const e=i([{label:"Navigation",items:[{icon:"home",title:"Go to Dashboard",subtitle:"View your dashboard overview",kbd:"⌘D"},{icon:"folder",title:"Browse Projects",subtitle:"View all your projects",kbd:"⌘P"},{icon:"settings",title:"Open Settings",subtitle:"Configure your preferences",kbd:"⌘,"}]}]);return r(e)}},h={render:()=>{const e=i([{label:"Navigation",items:[{icon:"home",title:"Go to Dashboard",subtitle:"View your dashboard overview",kbd:"⌘D"},{icon:"folder",title:"Browse Projects",subtitle:"View all your projects",kbd:"⌘P"},{icon:"settings",title:"Open Settings",subtitle:"Configure your preferences",kbd:"⌘,"}]},{label:"Actions",items:[{icon:"plus",title:"Create New Project",subtitle:"Start a new project",kbd:"⌘N"},{icon:"upload",title:"Upload Files",subtitle:"Upload documents or images",kbd:"⌘U"},{icon:"download",title:"Export Data",subtitle:"Download your data",kbd:"⌘E"}]},{label:"Theme",items:[{icon:"sun",title:"Light Mode"},{icon:"moon",title:"Dark Mode"},{icon:"monitor",title:"System Preference"}]}]);return r(e,"Open Full Palette")}},k={render:()=>{const e=i([{label:"Recent Files",items:[{icon:"file-text",title:"project-proposal.docx",subtitle:"Documents/Projects"},{icon:"file-spreadsheet",title:"budget-2024.xlsx",subtitle:"Documents/Finance"},{icon:"image",title:"logo-design.png",subtitle:"Images/Branding"},{icon:"file-code",title:"index.html",subtitle:"Web/Development"}]},{label:"All Files",items:[{icon:"file",title:"meeting-notes.txt",subtitle:"Documents/Notes"},{icon:"file-archive",title:"backup.zip",subtitle:"Downloads"}]}],"Search files...");return r(e,"Open File Search")}},v={render:()=>{const e=i([{label:"Quick Navigation",items:[{icon:"home",title:"Dashboard",subtitle:"View your dashboard",kbd:"⌘D"},{icon:"inbox",title:"Inbox",subtitle:"Check messages",kbd:"⌘I"},{icon:"calendar",title:"Calendar",subtitle:"View schedule",kbd:"⌘C"},{icon:"users",title:"Team",subtitle:"Manage team members",kbd:"⌘T"},{icon:"folder",title:"Projects",subtitle:"Browse all projects",kbd:"⌘P"},{icon:"star",title:"Favorites",subtitle:"Starred items",kbd:"⌘F"}]}]);return r(e,"Navigation Menu")}},y={render:()=>{const e=i([{label:"Create",items:[{icon:"file-plus",title:"New Document",kbd:"⌘N"},{icon:"folder-plus",title:"New Folder",kbd:"⌘⇧N"},{icon:"users-plus",title:"Invite Team Member"}]},{label:"Quick Actions",items:[{icon:"copy",title:"Duplicate",kbd:"⌘D"},{icon:"share-2",title:"Share",kbd:"⌘⇧S"},{icon:"download",title:"Download",kbd:"⌘S"},{icon:"trash-2",title:"Delete",kbd:"⌫"}]}]);return r(e,"Quick Actions")}},f={render:()=>{const e=i([{label:"Theme",items:[{icon:"sun",title:"Light Mode",subtitle:"Bright and clean"},{icon:"moon",title:"Dark Mode",subtitle:"Easy on the eyes"},{icon:"zap",title:"Neon Theme",subtitle:"Vibrant and electric"},{icon:"sparkles",title:"Prismatic Theme",subtitle:"Colorful gradients"},{icon:"minimize",title:"Minimal Theme",subtitle:"Simple and focused"},{icon:"flame",title:"Warm Theme",subtitle:"Cozy and inviting"},{icon:"activity",title:"Kinetic Theme",subtitle:"Dynamic and energetic"},{icon:"monitor",title:"System Preference",subtitle:"Match OS setting"}]}]);return r(e,"Change Theme")}},C={render:()=>{const e=i([{label:"Actions",items:[{icon:"plus",title:"Create New"},{icon:"copy",title:"Duplicate"},{icon:"edit",title:"Edit"},{icon:"trash-2",title:"Delete"},{icon:"share-2",title:"Share"}]}]);return r(e,"Simple Menu")}},w={render:()=>{const e=i([{label:"Commands",items:[{icon:"search",title:"Search Everything",subtitle:"Find files, commands, and more"},{icon:"filter",title:"Filter Results",subtitle:"Narrow down your search"}]},{label:"Results",items:[{icon:"file",title:"Search Implementation",subtitle:"src/components/Search.tsx"},{icon:"file",title:"Search Documentation",subtitle:"docs/search.md"},{icon:"folder",title:"Search Tests",subtitle:"tests/search/"}]}],"Search...");return r(e,"Search")}},S={render:()=>{const e=i([{label:"Recent",items:[{icon:"clock",title:"Open Settings",subtitle:"Used 2 minutes ago",kbd:"⌘,"},{icon:"clock",title:"Create New Project",subtitle:"Used 10 minutes ago",kbd:"⌘N"},{icon:"clock",title:"Upload Files",subtitle:"Used 1 hour ago",kbd:"⌘U"}]},{label:"All Commands",items:[{icon:"home",title:"Go to Dashboard",kbd:"⌘D"},{icon:"folder",title:"Browse Projects",kbd:"⌘P"}]}]);return r(e,"Recent & All Commands")}},D={render:()=>{const e=i([{label:"File",items:[{icon:"file-plus",title:"New File",kbd:"⌘N"},{icon:"folder-open",title:"Open File",kbd:"⌘O"},{icon:"save",title:"Save",kbd:"⌘S"}]},{label:"Edit",items:[{icon:"scissors",title:"Cut",kbd:"⌘X"},{icon:"copy",title:"Copy",kbd:"⌘C"},{icon:"clipboard",title:"Paste",kbd:"⌘V"}]},{label:"View",items:[{icon:"zoom-in",title:"Zoom In",kbd:"⌘+"},{icon:"zoom-out",title:"Zoom Out",kbd:"⌘-"},{icon:"maximize",title:"Full Screen",kbd:"⌘⇧F"}]}]);return r(e,"Menu Commands")}},N={render:()=>{const e=i([{label:"Navigation",items:[{icon:"home",title:"Dashboard",subtitle:"Your overview",kbd:"⌘D"},{icon:"folder",title:"Projects",subtitle:"All projects",kbd:"⌘P"}]},{label:"Actions",items:[{icon:"plus",title:"Create",subtitle:"New item",kbd:"⌘N"},{icon:"upload",title:"Upload",subtitle:"Add files",kbd:"⌘U"}]}]),t=o=>{if((o.metaKey||o.ctrlKey)&&o.key==="k"){o.preventDefault(),e.classList.add("is-open");const l=e.querySelector(".aural-command-palette__input");setTimeout(()=>l==null?void 0:l.focus(),100)}o.key==="Escape"&&e.classList.contains("is-open")&&e.classList.remove("is-open")};document.addEventListener("keydown",t);const a=r(e,"Try ⌘K / Ctrl+K");return a._cleanup=()=>{document.removeEventListener("keydown",t)},a}},_={render:()=>ue(()=>{const e=i([{label:"Navigation",items:[{icon:"home",title:"Dashboard",subtitle:"Overview",kbd:"⌘D"},{icon:"folder",title:"Projects",kbd:"⌘P"}]},{label:"Actions",items:[{icon:"plus",title:"Create New",kbd:"⌘N"}]}]);e.style.position="relative",e.style.pointerEvents="none";const t=e.querySelector(".aural-command-palette");return t&&(t.style.position="relative",t.style.transform="none",t.style.top="0",t.style.left="0",t.style.marginTop="0"),e})};var F,L,A;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const groups = [{
      label: 'Navigation',
      items: [{
        icon: 'home',
        title: 'Go to Dashboard',
        subtitle: 'View your dashboard overview',
        kbd: '⌘D'
      }, {
        icon: 'folder',
        title: 'Browse Projects',
        subtitle: 'View all your projects',
        kbd: '⌘P'
      }, {
        icon: 'settings',
        title: 'Open Settings',
        subtitle: 'Configure your preferences',
        kbd: '⌘,'
      }]
    }];
    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette);
  }
}`,...(A=(L=g.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var M,j,K;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const groups = [{
      label: 'Navigation',
      items: [{
        icon: 'home',
        title: 'Go to Dashboard',
        subtitle: 'View your dashboard overview',
        kbd: '⌘D'
      }, {
        icon: 'folder',
        title: 'Browse Projects',
        subtitle: 'View all your projects',
        kbd: '⌘P'
      }, {
        icon: 'settings',
        title: 'Open Settings',
        subtitle: 'Configure your preferences',
        kbd: '⌘,'
      }]
    }, {
      label: 'Actions',
      items: [{
        icon: 'plus',
        title: 'Create New Project',
        subtitle: 'Start a new project',
        kbd: '⌘N'
      }, {
        icon: 'upload',
        title: 'Upload Files',
        subtitle: 'Upload documents or images',
        kbd: '⌘U'
      }, {
        icon: 'download',
        title: 'Export Data',
        subtitle: 'Download your data',
        kbd: '⌘E'
      }]
    }, {
      label: 'Theme',
      items: [{
        icon: 'sun',
        title: 'Light Mode'
      }, {
        icon: 'moon',
        title: 'Dark Mode'
      }, {
        icon: 'monitor',
        title: 'System Preference'
      }]
    }];
    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Open Full Palette');
  }
}`,...(K=(j=h.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var O,z,V;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const groups = [{
      label: 'Recent Files',
      items: [{
        icon: 'file-text',
        title: 'project-proposal.docx',
        subtitle: 'Documents/Projects'
      }, {
        icon: 'file-spreadsheet',
        title: 'budget-2024.xlsx',
        subtitle: 'Documents/Finance'
      }, {
        icon: 'image',
        title: 'logo-design.png',
        subtitle: 'Images/Branding'
      }, {
        icon: 'file-code',
        title: 'index.html',
        subtitle: 'Web/Development'
      }]
    }, {
      label: 'All Files',
      items: [{
        icon: 'file',
        title: 'meeting-notes.txt',
        subtitle: 'Documents/Notes'
      }, {
        icon: 'file-archive',
        title: 'backup.zip',
        subtitle: 'Downloads'
      }]
    }];
    const palette = createCommandPalette(groups, 'Search files...');
    return createTriggerWrapper(palette, 'Open File Search');
  }
}`,...(V=(z=k.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var I,U,W;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const groups = [{
      label: 'Quick Navigation',
      items: [{
        icon: 'home',
        title: 'Dashboard',
        subtitle: 'View your dashboard',
        kbd: '⌘D'
      }, {
        icon: 'inbox',
        title: 'Inbox',
        subtitle: 'Check messages',
        kbd: '⌘I'
      }, {
        icon: 'calendar',
        title: 'Calendar',
        subtitle: 'View schedule',
        kbd: '⌘C'
      }, {
        icon: 'users',
        title: 'Team',
        subtitle: 'Manage team members',
        kbd: '⌘T'
      }, {
        icon: 'folder',
        title: 'Projects',
        subtitle: 'Browse all projects',
        kbd: '⌘P'
      }, {
        icon: 'star',
        title: 'Favorites',
        subtitle: 'Starred items',
        kbd: '⌘F'
      }]
    }];
    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Navigation Menu');
  }
}`,...(W=(U=v.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var B,R,G;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const groups = [{
      label: 'Create',
      items: [{
        icon: 'file-plus',
        title: 'New Document',
        kbd: '⌘N'
      }, {
        icon: 'folder-plus',
        title: 'New Folder',
        kbd: '⌘⇧N'
      }, {
        icon: 'users-plus',
        title: 'Invite Team Member'
      }]
    }, {
      label: 'Quick Actions',
      items: [{
        icon: 'copy',
        title: 'Duplicate',
        kbd: '⌘D'
      }, {
        icon: 'share-2',
        title: 'Share',
        kbd: '⌘⇧S'
      }, {
        icon: 'download',
        title: 'Download',
        kbd: '⌘S'
      }, {
        icon: 'trash-2',
        title: 'Delete',
        kbd: '⌫'
      }]
    }];
    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Quick Actions');
  }
}`,...(G=(R=y.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var Q,q,H;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const groups = [{
      label: 'Theme',
      items: [{
        icon: 'sun',
        title: 'Light Mode',
        subtitle: 'Bright and clean'
      }, {
        icon: 'moon',
        title: 'Dark Mode',
        subtitle: 'Easy on the eyes'
      }, {
        icon: 'zap',
        title: 'Neon Theme',
        subtitle: 'Vibrant and electric'
      }, {
        icon: 'sparkles',
        title: 'Prismatic Theme',
        subtitle: 'Colorful gradients'
      }, {
        icon: 'minimize',
        title: 'Minimal Theme',
        subtitle: 'Simple and focused'
      }, {
        icon: 'flame',
        title: 'Warm Theme',
        subtitle: 'Cozy and inviting'
      }, {
        icon: 'activity',
        title: 'Kinetic Theme',
        subtitle: 'Dynamic and energetic'
      }, {
        icon: 'monitor',
        title: 'System Preference',
        subtitle: 'Match OS setting'
      }]
    }];
    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Change Theme');
  }
}`,...(H=(q=f.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var Z,X,Y;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const groups = [{
      label: 'Actions',
      items: [{
        icon: 'plus',
        title: 'Create New'
      }, {
        icon: 'copy',
        title: 'Duplicate'
      }, {
        icon: 'edit',
        title: 'Edit'
      }, {
        icon: 'trash-2',
        title: 'Delete'
      }, {
        icon: 'share-2',
        title: 'Share'
      }]
    }];
    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Simple Menu');
  }
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,J,ee;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const groups = [{
      label: 'Commands',
      items: [{
        icon: 'search',
        title: 'Search Everything',
        subtitle: 'Find files, commands, and more'
      }, {
        icon: 'filter',
        title: 'Filter Results',
        subtitle: 'Narrow down your search'
      }]
    }, {
      label: 'Results',
      items: [{
        icon: 'file',
        title: 'Search Implementation',
        subtitle: 'src/components/Search.tsx'
      }, {
        icon: 'file',
        title: 'Search Documentation',
        subtitle: 'docs/search.md'
      }, {
        icon: 'folder',
        title: 'Search Tests',
        subtitle: 'tests/search/'
      }]
    }];
    const palette = createCommandPalette(groups, 'Search...');
    return createTriggerWrapper(palette, 'Search');
  }
}`,...(ee=(J=w.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};var te,ne,oe;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const groups = [{
      label: 'Recent',
      items: [{
        icon: 'clock',
        title: 'Open Settings',
        subtitle: 'Used 2 minutes ago',
        kbd: '⌘,'
      }, {
        icon: 'clock',
        title: 'Create New Project',
        subtitle: 'Used 10 minutes ago',
        kbd: '⌘N'
      }, {
        icon: 'clock',
        title: 'Upload Files',
        subtitle: 'Used 1 hour ago',
        kbd: '⌘U'
      }]
    }, {
      label: 'All Commands',
      items: [{
        icon: 'home',
        title: 'Go to Dashboard',
        kbd: '⌘D'
      }, {
        icon: 'folder',
        title: 'Browse Projects',
        kbd: '⌘P'
      }]
    }];
    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Recent & All Commands');
  }
}`,...(oe=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,ie,se;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const groups = [{
      label: 'File',
      items: [{
        icon: 'file-plus',
        title: 'New File',
        kbd: '⌘N'
      }, {
        icon: 'folder-open',
        title: 'Open File',
        kbd: '⌘O'
      }, {
        icon: 'save',
        title: 'Save',
        kbd: '⌘S'
      }]
    }, {
      label: 'Edit',
      items: [{
        icon: 'scissors',
        title: 'Cut',
        kbd: '⌘X'
      }, {
        icon: 'copy',
        title: 'Copy',
        kbd: '⌘C'
      }, {
        icon: 'clipboard',
        title: 'Paste',
        kbd: '⌘V'
      }]
    }, {
      label: 'View',
      items: [{
        icon: 'zoom-in',
        title: 'Zoom In',
        kbd: '⌘+'
      }, {
        icon: 'zoom-out',
        title: 'Zoom Out',
        kbd: '⌘-'
      }, {
        icon: 'maximize',
        title: 'Full Screen',
        kbd: '⌘⇧F'
      }]
    }];
    const palette = createCommandPalette(groups);
    return createTriggerWrapper(palette, 'Menu Commands');
  }
}`,...(se=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var re,le,ce;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const groups = [{
      label: 'Navigation',
      items: [{
        icon: 'home',
        title: 'Dashboard',
        subtitle: 'Your overview',
        kbd: '⌘D'
      }, {
        icon: 'folder',
        title: 'Projects',
        subtitle: 'All projects',
        kbd: '⌘P'
      }]
    }, {
      label: 'Actions',
      items: [{
        icon: 'plus',
        title: 'Create',
        subtitle: 'New item',
        kbd: '⌘N'
      }, {
        icon: 'upload',
        title: 'Upload',
        subtitle: 'Add files',
        kbd: '⌘U'
      }]
    }];
    const palette = createCommandPalette(groups);

    // Add keyboard shortcut support
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        palette.classList.add('is-open');
        const input = palette.querySelector('.aural-command-palette__input') as HTMLInputElement;
        setTimeout(() => input?.focus(), 100);
      }
      if (e.key === 'Escape' && palette.classList.contains('is-open')) {
        palette.classList.remove('is-open');
      }
    };
    document.addEventListener('keydown', handleKeydown);
    const wrapper = createTriggerWrapper(palette, 'Try ⌘K / Ctrl+K');

    // Cleanup
    (wrapper as any)._cleanup = () => {
      document.removeEventListener('keydown', handleKeydown);
    };
    return wrapper;
  }
}`,...(ce=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,pe;_.parameters={..._.parameters,docs:{...(de=_.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    return createThemeGrid(() => {
      const groups = [{
        label: 'Navigation',
        items: [{
          icon: 'home',
          title: 'Dashboard',
          subtitle: 'Overview',
          kbd: '⌘D'
        }, {
          icon: 'folder',
          title: 'Projects',
          kbd: '⌘P'
        }]
      }, {
        label: 'Actions',
        items: [{
          icon: 'plus',
          title: 'Create New',
          kbd: '⌘N'
        }]
      }];
      const palette = createCommandPalette(groups);

      // Keep palette open for theme comparison
      palette.style.position = 'relative';
      palette.style.pointerEvents = 'none';
      const paletteDiv = palette.querySelector('.aural-command-palette') as HTMLElement;
      if (paletteDiv) {
        paletteDiv.style.position = 'relative';
        paletteDiv.style.transform = 'none';
        paletteDiv.style.top = '0';
        paletteDiv.style.left = '0';
        paletteDiv.style.marginTop = '0';
      }
      return palette;
    });
  }
}`,...(pe=(me=_.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const he=["Basic","WithMultipleGroups","FileSearch","NavigationCommands","QuickActions","ThemeSwitcher","WithoutKeyboardShortcuts","SearchResults","RecentCommands","GroupedByCategory","InteractiveDemo","ThemeComparison"];export{g as Basic,k as FileSearch,D as GroupedByCategory,N as InteractiveDemo,v as NavigationCommands,y as QuickActions,S as RecentCommands,w as SearchResults,_ as ThemeComparison,f as ThemeSwitcher,h as WithMultipleGroups,C as WithoutKeyboardShortcuts,he as __namedExportsOrder,ge as default};
