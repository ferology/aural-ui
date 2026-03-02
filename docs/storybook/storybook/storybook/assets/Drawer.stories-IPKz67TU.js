const M={title:"Components/Drawer",tags:["autodocs"],parameters:{docs:{description:{component:"Slide-out panels for navigation, settings, or additional content. Drawers can slide in from any edge of the screen."}}},argTypes:{position:{control:"select",options:["left","right","top","bottom"],description:"Drawer position"}}},d={render:()=>{const a=document.createElement("div");a.style.padding="2rem";const t=document.createElement("button");t.className="btn btn-primary",t.textContent="Open Left Drawer";const e="drawer-left",i=`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--left" id="${e}" role="dialog" aria-modal="true" aria-labelledby="${e}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${e}-title">Left Drawer</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is a left-side drawer. It slides in from the left edge of the screen.</p>
          <p>Drawers are useful for:</p>
          <ul>
            <li>Navigation menus</li>
            <li>Filters and settings</li>
            <li>Additional content panels</li>
            <li>Contextual actions</li>
          </ul>
        </div>
      </div>
    `,r=document.createElement("div");return r.innerHTML=i,t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.openDrawer(e)},a.appendChild(t),a.appendChild(r),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initDrawers(),typeof window.lucide<"u"&&window.lucide.createIcons()},100),a}},n={render:()=>{const a=document.createElement("div");a.style.padding="2rem";const t=document.createElement("button");t.className="btn btn-secondary",t.textContent="Open Right Drawer";const e="drawer-right",i=`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--right" id="${e}" role="dialog" aria-modal="true" aria-labelledby="${e}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${e}-title">Right Drawer</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is a right-side drawer. It slides in from the right edge of the screen.</p>
          <p>Right drawers are commonly used for:</p>
          <ul>
            <li>Shopping carts</li>
            <li>Details panels</li>
            <li>User profiles</li>
            <li>Notifications</li>
          </ul>
        </div>
      </div>
    `,r=document.createElement("div");return r.innerHTML=i,t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.openDrawer(e)},a.appendChild(t),a.appendChild(r),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initDrawers(),typeof window.lucide<"u"&&window.lucide.createIcons()},100),a}},l={render:()=>{const a=document.createElement("div");a.style.padding="2rem";const t=document.createElement("button");t.className="btn btn-secondary",t.textContent="Open Top Drawer";const e="drawer-top",i=`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--top" id="${e}" role="dialog" aria-modal="true" aria-labelledby="${e}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${e}-title">Top Drawer</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is a top drawer. It slides down from the top of the screen.</p>
          <p>Useful for announcements, search bars, or temporary notifications.</p>
        </div>
      </div>
    `,r=document.createElement("div");return r.innerHTML=i,t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.openDrawer(e)},a.appendChild(t),a.appendChild(r),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initDrawers(),typeof window.lucide<"u"&&window.lucide.createIcons()},100),a}},o={render:()=>{const a=document.createElement("div");a.style.padding="2rem";const t=document.createElement("button");t.className="btn btn-secondary",t.textContent="Open Bottom Drawer";const e="drawer-bottom",i=`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--bottom" id="${e}" role="dialog" aria-modal="true" aria-labelledby="${e}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${e}-title">Bottom Drawer</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is a bottom drawer. It slides up from the bottom of the screen.</p>
          <p>Common on mobile for action sheets, share menus, or quick options.</p>
        </div>
      </div>
    `,r=document.createElement("div");return r.innerHTML=i,t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.openDrawer(e)},a.appendChild(t),a.appendChild(r),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initDrawers(),typeof window.lucide<"u"&&window.lucide.createIcons()},100),a}},s={render:()=>{const a=document.createElement("div");a.style.padding="2rem";const t=document.createElement("button");t.className="btn btn-primary",t.innerHTML='<i data-lucide="menu" style="width: 16px; height: 16px;" aria-hidden="true"></i> Open Navigation';const e="drawer-nav",i=`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--left" id="${e}" role="dialog" aria-modal="true" aria-labelledby="${e}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${e}-title">Navigation</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <nav class="aural-drawer__nav">
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="home" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Home</span>
            </a>
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="inbox" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Messages</span>
            </a>
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="users" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Team</span>
            </a>
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="file-text" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Documents</span>
            </a>
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="settings" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Settings</span>
            </a>
          </nav>
        </div>
        <div class="aural-drawer__footer">
          <a href="#" class="aural-drawer__nav-item">
            <i data-lucide="log-out" style="width: 20px; height: 20px;" aria-hidden="true"></i>
            <span>Logout</span>
          </a>
        </div>
      </div>
    `,r=document.createElement("div");return r.innerHTML=i,t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.openDrawer(e)},a.appendChild(t),a.appendChild(r),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initDrawers(),typeof window.lucide<"u"&&window.lucide.createIcons()},100),a}},c={render:()=>{const a=document.createElement("div");a.style.padding="2rem";const t=document.createElement("button");t.className="btn btn-primary",t.textContent="Open Form Drawer";const e="drawer-form",i=`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--right" id="${e}" role="dialog" aria-modal="true" aria-labelledby="${e}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${e}-title">Add New Item</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <form style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div>
              <label for="item-title" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Title</label>
              <input type="text" id="item-title" class="input" placeholder="Enter title" />
            </div>
            <div>
              <label for="item-description" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Description</label>
              <textarea id="item-description" class="input" rows="4" placeholder="Enter description"></textarea>
            </div>
            <div>
              <label for="item-category" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Category</label>
              <select id="item-category" class="input">
                <option>Select category</option>
                <option>Work</option>
                <option>Personal</option>
                <option>Other</option>
              </select>
            </div>
            <label class="switch">
              <input type="checkbox" class="switch__input" role="switch">
              <div class="switch__track">
                <div class="switch__thumb"></div>
              </div>
              <span class="switch__label">Mark as important</span>
            </label>
          </form>
        </div>
        <div class="aural-drawer__footer" style="display: flex; gap: var(--space-3);">
          <button type="button" class="btn btn-ghost" onclick="window.Aural?.closeDrawer('${e}')">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" style="flex: 1;" onclick="window.Aural?.closeDrawer('${e}')">
            <i data-lucide="save" style="width: 16px; height: 16px;" aria-hidden="true"></i>
            Create
          </button>
        </div>
      </div>
    `,r=document.createElement("div");return r.innerHTML=i,t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.openDrawer(e)},a.appendChild(t),a.appendChild(r),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initDrawers(),typeof window.lucide<"u"&&window.lucide.createIcons()},100),a}},p={render:()=>{const a=document.createElement("div");a.style.padding="2rem";const t=document.createElement("button");t.className="btn btn-secondary",t.innerHTML='<i data-lucide="settings" style="width: 16px; height: 16px;" aria-hidden="true"></i> Settings';const e="drawer-settings",i=`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--right" id="${e}" role="dialog" aria-modal="true" aria-labelledby="${e}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="${e}-title">Settings</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <div style="display: flex; flex-direction: column; gap: var(--space-6);">
            <!-- Notifications Section -->
            <div>
              <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
                <i data-lucide="bell" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: var(--space-2);"></i>
                Notifications
              </h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch" checked>
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Push notifications</span>
                </label>
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch" checked>
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Email alerts</span>
                </label>
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch">
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Sound effects</span>
                </label>
              </div>
            </div>

            <!-- Privacy Section -->
            <div>
              <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
                <i data-lucide="shield" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: var(--space-2);"></i>
                Privacy
              </h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch" checked>
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Public profile</span>
                </label>
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch">
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Share activity</span>
                </label>
              </div>
            </div>

            <!-- Display Section -->
            <div>
              <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
                <i data-lucide="monitor" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: var(--space-2);"></i>
                Display
              </h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <div>
                  <label for="settings-theme" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Theme</label>
                  <select id="settings-theme" class="input input-sm">
                    <option>Light</option>
                    <option selected>Dark</option>
                    <option>Auto</option>
                  </select>
                </div>
                <div>
                  <label for="settings-language" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Language</label>
                  <select id="settings-language" class="input input-sm">
                    <option selected>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch" checked>
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Compact mode</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="aural-drawer__footer" style="display: flex; gap: var(--space-3);">
          <button class="btn btn-ghost" onclick="window.Aural?.closeDrawer('${e}')">Cancel</button>
          <button class="btn btn-primary" style="flex: 1;" onclick="window.Aural?.closeDrawer('${e}')">
            <i data-lucide="save" style="width: 16px; height: 16px;"></i>
            Save Changes
          </button>
        </div>
      </div>
    `,r=document.createElement("div");return r.innerHTML=i,t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.openDrawer(e)},a.appendChild(t),a.appendChild(r),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initDrawers(),typeof window.lucide<"u"&&window.lucide.createIcons()},100),a}};var u,w,h;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.textContent = 'Open Left Drawer';
    const drawerId = 'drawer-left';
    const drawerHTML = \`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--left" id="\${drawerId}" role="dialog" aria-modal="true" aria-labelledby="\${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="\${drawerId}-title">Left Drawer</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is a left-side drawer. It slides in from the left edge of the screen.</p>
          <p>Drawers are useful for:</p>
          <ul>
            <li>Navigation menus</li>
            <li>Filters and settings</li>
            <li>Additional content panels</li>
            <li>Contextual actions</li>
          </ul>
        </div>
      </div>
    \`;
    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;
    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };
    container.appendChild(openButton);
    container.appendChild(drawerWrapper);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      // Initialize Lucide icons if available
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
    return container;
  }
}`,...(h=(w=d.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var v,m,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.textContent = 'Open Right Drawer';
    const drawerId = 'drawer-right';
    const drawerHTML = \`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--right" id="\${drawerId}" role="dialog" aria-modal="true" aria-labelledby="\${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="\${drawerId}-title">Right Drawer</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is a right-side drawer. It slides in from the right edge of the screen.</p>
          <p>Right drawers are commonly used for:</p>
          <ul>
            <li>Shopping carts</li>
            <li>Details panels</li>
            <li>User profiles</li>
            <li>Notifications</li>
          </ul>
        </div>
      </div>
    \`;
    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;
    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };
    container.appendChild(openButton);
    container.appendChild(drawerWrapper);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
    return container;
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,y,_;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.textContent = 'Open Top Drawer';
    const drawerId = 'drawer-top';
    const drawerHTML = \`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--top" id="\${drawerId}" role="dialog" aria-modal="true" aria-labelledby="\${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="\${drawerId}-title">Top Drawer</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is a top drawer. It slides down from the top of the screen.</p>
          <p>Useful for announcements, search bars, or temporary notifications.</p>
        </div>
      </div>
    \`;
    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;
    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };
    container.appendChild(openButton);
    container.appendChild(drawerWrapper);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
    return container;
  }
}`,...(_=(y=l.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var g,x,k;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.textContent = 'Open Bottom Drawer';
    const drawerId = 'drawer-bottom';
    const drawerHTML = \`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--bottom" id="\${drawerId}" role="dialog" aria-modal="true" aria-labelledby="\${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="\${drawerId}-title">Bottom Drawer</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is a bottom drawer. It slides up from the bottom of the screen.</p>
          <p>Common on mobile for action sheets, share menus, or quick options.</p>
        </div>
      </div>
    \`;
    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;
    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };
    container.appendChild(openButton);
    container.appendChild(drawerWrapper);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
    return container;
  }
}`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var D,T,I;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.innerHTML = '<i data-lucide="menu" style="width: 16px; height: 16px;" aria-hidden="true"></i> Open Navigation';
    const drawerId = 'drawer-nav';
    const drawerHTML = \`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--left" id="\${drawerId}" role="dialog" aria-modal="true" aria-labelledby="\${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="\${drawerId}-title">Navigation</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <nav class="aural-drawer__nav">
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="home" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Home</span>
            </a>
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="inbox" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Messages</span>
            </a>
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="users" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Team</span>
            </a>
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="file-text" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Documents</span>
            </a>
            <a href="#" class="aural-drawer__nav-item">
              <i data-lucide="settings" style="width: 20px; height: 20px;" aria-hidden="true"></i>
              <span>Settings</span>
            </a>
          </nav>
        </div>
        <div class="aural-drawer__footer">
          <a href="#" class="aural-drawer__nav-item">
            <i data-lucide="log-out" style="width: 20px; height: 20px;" aria-hidden="true"></i>
            <span>Logout</span>
          </a>
        </div>
      </div>
    \`;
    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;
    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };
    container.appendChild(openButton);
    container.appendChild(drawerWrapper);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
    return container;
  }
}`,...(I=(T=s.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var A,C,L;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.textContent = 'Open Form Drawer';
    const drawerId = 'drawer-form';
    const drawerHTML = \`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--right" id="\${drawerId}" role="dialog" aria-modal="true" aria-labelledby="\${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="\${drawerId}-title">Add New Item</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <form style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div>
              <label for="item-title" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Title</label>
              <input type="text" id="item-title" class="input" placeholder="Enter title" />
            </div>
            <div>
              <label for="item-description" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Description</label>
              <textarea id="item-description" class="input" rows="4" placeholder="Enter description"></textarea>
            </div>
            <div>
              <label for="item-category" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Category</label>
              <select id="item-category" class="input">
                <option>Select category</option>
                <option>Work</option>
                <option>Personal</option>
                <option>Other</option>
              </select>
            </div>
            <label class="switch">
              <input type="checkbox" class="switch__input" role="switch">
              <div class="switch__track">
                <div class="switch__thumb"></div>
              </div>
              <span class="switch__label">Mark as important</span>
            </label>
          </form>
        </div>
        <div class="aural-drawer__footer" style="display: flex; gap: var(--space-3);">
          <button type="button" class="btn btn-ghost" onclick="window.Aural?.closeDrawer('\${drawerId}')">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" style="flex: 1;" onclick="window.Aural?.closeDrawer('\${drawerId}')">
            <i data-lucide="save" style="width: 16px; height: 16px;" aria-hidden="true"></i>
            Create
          </button>
        </div>
      </div>
    \`;
    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;
    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };
    container.appendChild(openButton);
    container.appendChild(drawerWrapper);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
    return container;
  }
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var E,$,B;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const openButton = document.createElement('button');
    openButton.className = 'btn btn-secondary';
    openButton.innerHTML = '<i data-lucide="settings" style="width: 16px; height: 16px;" aria-hidden="true"></i> Settings';
    const drawerId = 'drawer-settings';
    const drawerHTML = \`
      <div class="aural-drawer-backdrop"></div>
      <div class="aural-drawer aural-drawer--right" id="\${drawerId}" role="dialog" aria-modal="true" aria-labelledby="\${drawerId}-title">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title" id="\${drawerId}-title">Settings</h2>
          <button class="aural-drawer__close" aria-label="Close drawer">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>
        <div class="aural-drawer__body">
          <div style="display: flex; flex-direction: column; gap: var(--space-6);">
            <!-- Notifications Section -->
            <div>
              <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
                <i data-lucide="bell" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: var(--space-2);"></i>
                Notifications
              </h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch" checked>
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Push notifications</span>
                </label>
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch" checked>
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Email alerts</span>
                </label>
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch">
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Sound effects</span>
                </label>
              </div>
            </div>

            <!-- Privacy Section -->
            <div>
              <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
                <i data-lucide="shield" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: var(--space-2);"></i>
                Privacy
              </h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch" checked>
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Public profile</span>
                </label>
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch">
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Share activity</span>
                </label>
              </div>
            </div>

            <!-- Display Section -->
            <div>
              <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--color-text-primary); margin: 0 0 var(--space-4) 0;">
                <i data-lucide="monitor" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: var(--space-2);"></i>
                Display
              </h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <div>
                  <label for="settings-theme" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Theme</label>
                  <select id="settings-theme" class="input input-sm">
                    <option>Light</option>
                    <option selected>Dark</option>
                    <option>Auto</option>
                  </select>
                </div>
                <div>
                  <label for="settings-language" style="display: block; margin-bottom: var(--space-2); font-size: var(--text-sm); color: var(--color-text-secondary);">Language</label>
                  <select id="settings-language" class="input input-sm">
                    <option selected>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <label class="switch">
                  <input type="checkbox" class="switch__input" role="switch" checked>
                  <div class="switch__track">
                    <div class="switch__thumb"></div>
                  </div>
                  <span class="switch__label">Compact mode</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="aural-drawer__footer" style="display: flex; gap: var(--space-3);">
          <button class="btn btn-ghost" onclick="window.Aural?.closeDrawer('\${drawerId}')">Cancel</button>
          <button class="btn btn-primary" style="flex: 1;" onclick="window.Aural?.closeDrawer('\${drawerId}')">
            <i data-lucide="save" style="width: 16px; height: 16px;"></i>
            Save Changes
          </button>
        </div>
      </div>
    \`;
    const drawerWrapper = document.createElement('div');
    drawerWrapper.innerHTML = drawerHTML;
    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };
    container.appendChild(openButton);
    container.appendChild(drawerWrapper);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
    return container;
  }
}`,...(B=($=p.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const H=["Left","Right","Top","Bottom","NavigationDrawer","WithForm","SettingsDrawer"];export{o as Bottom,d as Left,s as NavigationDrawer,n as Right,p as SettingsDrawer,l as Top,c as WithForm,H as __namedExportsOrder,M as default};
