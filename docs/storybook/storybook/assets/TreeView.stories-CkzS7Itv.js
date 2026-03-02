import{c as W}from"./createThemeGrid-DWAncU4Q.js";const P={title:"Components/TreeView",tags:["autodocs"],parameters:{docs:{description:{component:`
# Tree View Component

Hierarchical tree structure for files, folders, and nested navigation with expand/collapse functionality.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Key Features

- Expand/collapse functionality with proper ARIA attributes
- Support for icons (Lucide)
- Multi-level nesting (unlimited depth)
- Badges for item counts
- Color-coded icons (primary, success, warning, error, info)
- Keyboard navigation support
- Leaf and parent item differentiation
- File explorer and organization chart patterns

## Component Structure

\`\`\`html
<ul class="aural-tree">
  <li class="aural-tree__item aural-tree__item--collapsed">
    <button class="aural-tree__content">
      <span class="aural-tree__toggle">
        <i data-lucide="chevron-right"></i>
      </span>
      <span class="aural-tree__icon">
        <i data-lucide="folder"></i>
      </span>
      <span class="aural-tree__label">Documents</span>
      <span class="aural-tree__badge">12</span>
    </button>
    <ul class="aural-tree__children">
      <li class="aural-tree__item aural-tree__item--leaf">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle"></span>
          <span class="aural-tree__icon">
            <i data-lucide="file"></i>
          </span>
          <span class="aural-tree__label">file.txt</span>
        </button>
      </li>
    </ul>
  </li>
</ul>
\`\`\`

## Important Classes

- \`.aural-tree\` - Root container (ul)
- \`.aural-tree__item\` - Tree item (li)
- \`.aural-tree__item--collapsed\` - Collapsed parent item
- \`.aural-tree__item--expanded\` - Expanded parent item
- \`.aural-tree__item--leaf\` - Leaf item (no children)
- \`.aural-tree__content\` - Item content wrapper (button)
- \`.aural-tree__toggle\` - Expand/collapse icon container
- \`.aural-tree__icon\` - Item icon container
- \`.aural-tree__icon--primary\`, etc. - Icon color variants
- \`.aural-tree__label\` - Item text
- \`.aural-tree__badge\` - Badge for counts
- \`.aural-tree__children\` - Children container (ul)

## Initialization

Tree views require JavaScript initialization for expand/collapse functionality:

\`\`\`javascript
// Initialize Lucide icons
lucide.createIcons();

// Initialize tree view interactivity
Aural.initTreeView();
\`\`\`

## Accessibility

- Proper ARIA attributes for tree navigation
- Keyboard support (Arrow keys, Enter, Space)
- Screen reader friendly
- Focus management
        `.trim()}}}};function t(a){setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},100)}function l(a){setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initTreeView()},100)}const s={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="600px";const e=document.createElement("ul");return e.className="aural-tree",e.innerHTML=`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Documents</span>
          <span class="aural-tree__badge">12</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon">
                <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Projects</span>
              <span class="aural-tree__badge">8</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon aural-tree__icon--primary">
                    <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">project-plan.pdf</span>
                </button>
              </li>
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon aural-tree__icon--success">
                    <i data-lucide="file-spreadsheet" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">budget.xlsx</span>
                </button>
              </li>
            </ul>
          </li>
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--warning">
                <i data-lucide="file" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">report-draft.doc</span>
            </button>
          </li>
        </ul>
      </li>
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Images</span>
          <span class="aural-tree__badge">45</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--info">
                <i data-lucide="image" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">screenshot.png</span>
            </button>
          </li>
        </ul>
      </li>
    `,a.appendChild(e),t(),l(),a}},r={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="600px";const e=document.createElement("ul");return e.className="aural-tree",e.innerHTML=`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="layout-dashboard" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Dashboard</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon">
                <i data-lucide="bar-chart" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Analytics</span>
            </button>
          </li>
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon">
                <i data-lucide="trending-up" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Reports</span>
            </button>
          </li>
        </ul>
      </li>
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="users" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Team</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon">
                <i data-lucide="user" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Members</span>
              <span class="aural-tree__badge">24</span>
            </button>
          </li>
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon">
                <i data-lucide="user-plus" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Invitations</span>
              <span class="aural-tree__badge">3</span>
            </button>
          </li>
        </ul>
      </li>
      <li class="aural-tree__item aural-tree__item--leaf">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle"></span>
          <span class="aural-tree__icon">
            <i data-lucide="settings" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Settings</span>
        </button>
      </li>
    `,a.appendChild(e),t(),l(),a}},n={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="600px";const e=document.createElement("ul");return e.className="aural-tree",e.innerHTML=`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon aural-tree__icon--primary">
            <i data-lucide="inbox" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Inbox</span>
          <span class="aural-tree__badge">42</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--success">
                <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Completed</span>
              <span class="aural-tree__badge">128</span>
            </button>
          </li>
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--warning">
                <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Pending</span>
              <span class="aural-tree__badge">15</span>
            </button>
          </li>
        </ul>
      </li>
      <li class="aural-tree__item aural-tree__item--leaf">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle"></span>
          <span class="aural-tree__icon aural-tree__icon--error">
            <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Trash</span>
          <span class="aural-tree__badge">7</span>
        </button>
      </li>
      <li class="aural-tree__item aural-tree__item--leaf">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle"></span>
          <span class="aural-tree__icon aural-tree__icon--info">
            <i data-lucide="archive" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Archive</span>
          <span class="aural-tree__badge">203</span>
        </button>
      </li>
    `,a.appendChild(e),t(),l(),a}},i={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="600px";const e=document.createElement("ul");return e.className="aural-tree",e.innerHTML=`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="code" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">src</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon">
                <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">components</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--collapsed">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle">
                    <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__icon">
                    <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">ui</span>
                </button>
                <ul class="aural-tree__children">
                  <li class="aural-tree__item aural-tree__item--leaf">
                    <button class="aural-tree__content">
                      <span class="aural-tree__toggle"></span>
                      <span class="aural-tree__icon aural-tree__icon--info">
                        <i data-lucide="file-code" style="width: 16px; height: 16px;"></i>
                      </span>
                      <span class="aural-tree__label">Button.tsx</span>
                    </button>
                  </li>
                  <li class="aural-tree__item aural-tree__item--leaf">
                    <button class="aural-tree__content">
                      <span class="aural-tree__toggle"></span>
                      <span class="aural-tree__icon aural-tree__icon--info">
                        <i data-lucide="file-code" style="width: 16px; height: 16px;"></i>
                      </span>
                      <span class="aural-tree__label">Modal.tsx</span>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--primary">
                <i data-lucide="file-code" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">index.ts</span>
            </button>
          </li>
        </ul>
      </li>
      <li class="aural-tree__item aural-tree__item--leaf">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle"></span>
          <span class="aural-tree__icon aural-tree__icon--warning">
            <i data-lucide="file-json" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">package.json</span>
        </button>
      </li>
    `,a.appendChild(e),t(),l(),a}},c={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="600px";const e=document.createElement("ul");return e.className="aural-tree",e.innerHTML=`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="hard-drive" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">My Computer</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon">
                <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Desktop</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon aural-tree__icon--primary">
                    <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">notes.txt</span>
                </button>
              </li>
            </ul>
          </li>
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon">
                <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Downloads</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon aural-tree__icon--success">
                    <i data-lucide="file-archive" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">archive.zip</span>
                </button>
              </li>
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon aural-tree__icon--info">
                    <i data-lucide="image" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">photo.jpg</span>
                </button>
              </li>
            </ul>
          </li>
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon">
                <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Documents</span>
              <span class="aural-tree__badge">125</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon aural-tree__icon--error">
                    <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">important.pdf</span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    `,a.appendChild(e),t(),l(),a}},_={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="600px";const e=document.createElement("ul");return e.className="aural-tree",e.innerHTML=`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon aural-tree__icon--primary">
            <i data-lucide="crown" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">CEO - Sarah Johnson</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon aural-tree__icon--info">
                <i data-lucide="user" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">CTO - Michael Chen</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon">
                    <i data-lucide="user" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">Engineering Lead - Alex Kim</span>
                </button>
              </li>
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon">
                    <i data-lucide="user" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">DevOps Lead - Jamie Lee</span>
                </button>
              </li>
            </ul>
          </li>
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon aural-tree__icon--info">
                <i data-lucide="user" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">CMO - Lisa Wang</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon">
                    <i data-lucide="user" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">Content Lead - Taylor Brown</span>
                </button>
              </li>
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon">
                    <i data-lucide="user" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">Social Media - Jordan Smith</span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    `,a.appendChild(e),t(),l(),a}},u={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="600px";const e=document.createElement("ul");return e.className="aural-tree",e.innerHTML=`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <input type="checkbox" class="aural-tree__checkbox" style="margin-right: 8px;" aria-label="Select All Projects">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Projects</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <input type="checkbox" class="aural-tree__checkbox" style="margin-right: 8px;" aria-label="Select Project A">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--primary">
                <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Project A</span>
            </button>
          </li>
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <input type="checkbox" class="aural-tree__checkbox" style="margin-right: 8px;" aria-label="Select Project B">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--success">
                <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Project B</span>
            </button>
          </li>
        </ul>
      </li>
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <input type="checkbox" class="aural-tree__checkbox" style="margin-right: 8px;" aria-label="Select All Reports">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Reports</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <input type="checkbox" class="aural-tree__checkbox" style="margin-right: 8px;" aria-label="Select Q1 Report">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--info">
                <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Q1 Report</span>
            </button>
          </li>
        </ul>
      </li>
    `,a.appendChild(e),t(),l(),a}},p={render:()=>W(()=>{const a=document.createElement("ul");return a.className="aural-tree",a.style.maxWidth="400px",a.innerHTML=`
        <li class="aural-tree__item aural-tree__item--collapsed">
          <button class="aural-tree__content">
            <span class="aural-tree__toggle">
              <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
            </span>
            <span class="aural-tree__icon">
              <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
            </span>
            <span class="aural-tree__label">Documents</span>
            <span class="aural-tree__badge">5</span>
          </button>
          <ul class="aural-tree__children">
            <li class="aural-tree__item aural-tree__item--leaf">
              <button class="aural-tree__content">
                <span class="aural-tree__toggle"></span>
                <span class="aural-tree__icon aural-tree__icon--primary">
                  <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
                </span>
                <span class="aural-tree__label">readme.pdf</span>
              </button>
            </li>
            <li class="aural-tree__item aural-tree__item--leaf">
              <button class="aural-tree__content">
                <span class="aural-tree__toggle"></span>
                <span class="aural-tree__icon aural-tree__icon--success">
                  <i data-lucide="file-spreadsheet" style="width: 16px; height: 16px;"></i>
                </span>
                <span class="aural-tree__label">data.xlsx</span>
              </button>
            </li>
          </ul>
        </li>
        <li class="aural-tree__item aural-tree__item--leaf">
          <button class="aural-tree__content">
            <span class="aural-tree__toggle"></span>
            <span class="aural-tree__icon aural-tree__icon--info">
              <i data-lucide="image" style="width: 16px; height: 16px;"></i>
            </span>
            <span class="aural-tree__label">photo.png</span>
          </button>
        </li>
      `,setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons(),typeof window.Aural<"u"&&window.Aural.initTreeView()},100),a})};var o,d,h;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const tree = document.createElement('ul');
    tree.className = 'aural-tree';
    tree.innerHTML = \`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Documents</span>
          <span class="aural-tree__badge">12</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon">
                <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Projects</span>
              <span class="aural-tree__badge">8</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon aural-tree__icon--primary">
                    <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">project-plan.pdf</span>
                </button>
              </li>
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon aural-tree__icon--success">
                    <i data-lucide="file-spreadsheet" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">budget.xlsx</span>
                </button>
              </li>
            </ul>
          </li>
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--warning">
                <i data-lucide="file" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">report-draft.doc</span>
            </button>
          </li>
        </ul>
      </li>
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Images</span>
          <span class="aural-tree__badge">45</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--info">
                <i data-lucide="image" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">screenshot.png</span>
            </button>
          </li>
        </ul>
      </li>
    \`;
    container.appendChild(tree);
    initializeLucideIcons(container);
    initializeTreeView(container);
    return container;
  }
}`,...(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,m,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const tree = document.createElement('ul');
    tree.className = 'aural-tree';
    tree.innerHTML = \`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="layout-dashboard" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Dashboard</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon">
                <i data-lucide="bar-chart" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Analytics</span>
            </button>
          </li>
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon">
                <i data-lucide="trending-up" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Reports</span>
            </button>
          </li>
        </ul>
      </li>
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="users" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Team</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon">
                <i data-lucide="user" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Members</span>
              <span class="aural-tree__badge">24</span>
            </button>
          </li>
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon">
                <i data-lucide="user-plus" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Invitations</span>
              <span class="aural-tree__badge">3</span>
            </button>
          </li>
        </ul>
      </li>
      <li class="aural-tree__item aural-tree__item--leaf">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle"></span>
          <span class="aural-tree__icon">
            <i data-lucide="settings" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Settings</span>
        </button>
      </li>
    \`;
    container.appendChild(tree);
    initializeLucideIcons(container);
    initializeTreeView(container);
    return container;
  }
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,y,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const tree = document.createElement('ul');
    tree.className = 'aural-tree';
    tree.innerHTML = \`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon aural-tree__icon--primary">
            <i data-lucide="inbox" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Inbox</span>
          <span class="aural-tree__badge">42</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--success">
                <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Completed</span>
              <span class="aural-tree__badge">128</span>
            </button>
          </li>
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--warning">
                <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Pending</span>
              <span class="aural-tree__badge">15</span>
            </button>
          </li>
        </ul>
      </li>
      <li class="aural-tree__item aural-tree__item--leaf">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle"></span>
          <span class="aural-tree__icon aural-tree__icon--error">
            <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Trash</span>
          <span class="aural-tree__badge">7</span>
        </button>
      </li>
      <li class="aural-tree__item aural-tree__item--leaf">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle"></span>
          <span class="aural-tree__icon aural-tree__icon--info">
            <i data-lucide="archive" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Archive</span>
          <span class="aural-tree__badge">203</span>
        </button>
      </li>
    \`;
    container.appendChild(tree);
    initializeLucideIcons(container);
    initializeTreeView(container);
    return container;
  }
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var f,v,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const tree = document.createElement('ul');
    tree.className = 'aural-tree';
    tree.innerHTML = \`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="code" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">src</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon">
                <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">components</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--collapsed">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle">
                    <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__icon">
                    <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">ui</span>
                </button>
                <ul class="aural-tree__children">
                  <li class="aural-tree__item aural-tree__item--leaf">
                    <button class="aural-tree__content">
                      <span class="aural-tree__toggle"></span>
                      <span class="aural-tree__icon aural-tree__icon--info">
                        <i data-lucide="file-code" style="width: 16px; height: 16px;"></i>
                      </span>
                      <span class="aural-tree__label">Button.tsx</span>
                    </button>
                  </li>
                  <li class="aural-tree__item aural-tree__item--leaf">
                    <button class="aural-tree__content">
                      <span class="aural-tree__toggle"></span>
                      <span class="aural-tree__icon aural-tree__icon--info">
                        <i data-lucide="file-code" style="width: 16px; height: 16px;"></i>
                      </span>
                      <span class="aural-tree__label">Modal.tsx</span>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--primary">
                <i data-lucide="file-code" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">index.ts</span>
            </button>
          </li>
        </ul>
      </li>
      <li class="aural-tree__item aural-tree__item--leaf">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle"></span>
          <span class="aural-tree__icon aural-tree__icon--warning">
            <i data-lucide="file-json" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">package.json</span>
        </button>
      </li>
    \`;
    container.appendChild(tree);
    initializeLucideIcons(container);
    initializeTreeView(container);
    return container;
  }
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var C,E,L;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const tree = document.createElement('ul');
    tree.className = 'aural-tree';
    tree.innerHTML = \`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="hard-drive" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">My Computer</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon">
                <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Desktop</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon aural-tree__icon--primary">
                    <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">notes.txt</span>
                </button>
              </li>
            </ul>
          </li>
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon">
                <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Downloads</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon aural-tree__icon--success">
                    <i data-lucide="file-archive" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">archive.zip</span>
                </button>
              </li>
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon aural-tree__icon--info">
                    <i data-lucide="image" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">photo.jpg</span>
                </button>
              </li>
            </ul>
          </li>
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon">
                <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Documents</span>
              <span class="aural-tree__badge">125</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon aural-tree__icon--error">
                    <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">important.pdf</span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    \`;
    container.appendChild(tree);
    initializeLucideIcons(container);
    initializeTreeView(container);
    return container;
  }
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var S,k,M;_.parameters={..._.parameters,docs:{...(S=_.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const tree = document.createElement('ul');
    tree.className = 'aural-tree';
    tree.innerHTML = \`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon aural-tree__icon--primary">
            <i data-lucide="crown" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">CEO - Sarah Johnson</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon aural-tree__icon--info">
                <i data-lucide="user" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">CTO - Michael Chen</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon">
                    <i data-lucide="user" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">Engineering Lead - Alex Kim</span>
                </button>
              </li>
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon">
                    <i data-lucide="user" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">DevOps Lead - Jamie Lee</span>
                </button>
              </li>
            </ul>
          </li>
          <li class="aural-tree__item aural-tree__item--collapsed">
            <button class="aural-tree__content">
              <span class="aural-tree__toggle">
                <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__icon aural-tree__icon--info">
                <i data-lucide="user" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">CMO - Lisa Wang</span>
            </button>
            <ul class="aural-tree__children">
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon">
                    <i data-lucide="user" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">Content Lead - Taylor Brown</span>
                </button>
              </li>
              <li class="aural-tree__item aural-tree__item--leaf">
                <button class="aural-tree__content">
                  <span class="aural-tree__toggle"></span>
                  <span class="aural-tree__icon">
                    <i data-lucide="user" style="width: 16px; height: 16px;"></i>
                  </span>
                  <span class="aural-tree__label">Social Media - Jordan Smith</span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    \`;
    container.appendChild(tree);
    initializeLucideIcons(container);
    initializeTreeView(container);
    return container;
  }
}`,...(M=(k=_.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var I,A,z;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const tree = document.createElement('ul');
    tree.className = 'aural-tree';
    tree.innerHTML = \`
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <input type="checkbox" class="aural-tree__checkbox" style="margin-right: 8px;" aria-label="Select All Projects">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Projects</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <input type="checkbox" class="aural-tree__checkbox" style="margin-right: 8px;" aria-label="Select Project A">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--primary">
                <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Project A</span>
            </button>
          </li>
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <input type="checkbox" class="aural-tree__checkbox" style="margin-right: 8px;" aria-label="Select Project B">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--success">
                <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Project B</span>
            </button>
          </li>
        </ul>
      </li>
      <li class="aural-tree__item aural-tree__item--collapsed">
        <button class="aural-tree__content">
          <input type="checkbox" class="aural-tree__checkbox" style="margin-right: 8px;" aria-label="Select All Reports">
          <span class="aural-tree__toggle">
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__icon">
            <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
          </span>
          <span class="aural-tree__label">Reports</span>
        </button>
        <ul class="aural-tree__children">
          <li class="aural-tree__item aural-tree__item--leaf">
            <button class="aural-tree__content">
              <input type="checkbox" class="aural-tree__checkbox" style="margin-right: 8px;" aria-label="Select Q1 Report">
              <span class="aural-tree__toggle"></span>
              <span class="aural-tree__icon aural-tree__icon--info">
                <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
              </span>
              <span class="aural-tree__label">Q1 Report</span>
            </button>
          </li>
        </ul>
      </li>
    \`;
    container.appendChild(tree);
    initializeLucideIcons(container);
    initializeTreeView(container);
    return container;
  }
}`,...(z=(A=u.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var j,D,N;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return createThemeGrid(() => {
      const tree = document.createElement('ul');
      tree.className = 'aural-tree';
      tree.style.maxWidth = '400px';
      tree.innerHTML = \`
        <li class="aural-tree__item aural-tree__item--collapsed">
          <button class="aural-tree__content">
            <span class="aural-tree__toggle">
              <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
            </span>
            <span class="aural-tree__icon">
              <i data-lucide="folder" style="width: 16px; height: 16px;"></i>
            </span>
            <span class="aural-tree__label">Documents</span>
            <span class="aural-tree__badge">5</span>
          </button>
          <ul class="aural-tree__children">
            <li class="aural-tree__item aural-tree__item--leaf">
              <button class="aural-tree__content">
                <span class="aural-tree__toggle"></span>
                <span class="aural-tree__icon aural-tree__icon--primary">
                  <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
                </span>
                <span class="aural-tree__label">readme.pdf</span>
              </button>
            </li>
            <li class="aural-tree__item aural-tree__item--leaf">
              <button class="aural-tree__content">
                <span class="aural-tree__toggle"></span>
                <span class="aural-tree__icon aural-tree__icon--success">
                  <i data-lucide="file-spreadsheet" style="width: 16px; height: 16px;"></i>
                </span>
                <span class="aural-tree__label">data.xlsx</span>
              </button>
            </li>
          </ul>
        </li>
        <li class="aural-tree__item aural-tree__item--leaf">
          <button class="aural-tree__content">
            <span class="aural-tree__toggle"></span>
            <span class="aural-tree__icon aural-tree__icon--info">
              <i data-lucide="image" style="width: 16px; height: 16px;"></i>
            </span>
            <span class="aural-tree__label">photo.png</span>
          </button>
        </li>
      \`;
      setTimeout(() => {
        if (typeof (window as any).lucide !== 'undefined') {
          (window as any).lucide.createIcons();
        }
        if (typeof (window as any).Aural !== 'undefined') {
          (window as any).Aural.initTreeView();
        }
      }, 100);
      return tree;
    });
  }
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const V=["Default","NavigationMenu","ColorCodedIcons","DeepNesting","FileExplorer","OrganizationChart","WithCheckboxes","ThemeComparison"];export{n as ColorCodedIcons,i as DeepNesting,s as Default,c as FileExplorer,r as NavigationMenu,_ as OrganizationChart,p as ThemeComparison,u as WithCheckboxes,V as __namedExportsOrder,P as default};
