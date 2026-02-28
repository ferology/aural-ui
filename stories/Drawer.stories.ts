import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Drawer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Sliding panel from screen edge with backdrop and animations.'
      }
    }
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Drawer position'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Right: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.textContent = 'Open Drawer (Right)';

    const drawerId = `drawer-${args.position}`;

    const drawer = document.createElement('div');
    drawer.innerHTML = `
      <div class="aural-drawer-backdrop"></div>
      <div id="${drawerId}" class="aural-drawer aural-drawer--${args.position}">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title">Drawer Title</h2>
          <button
            type="button"
            class="aural-drawer__close"
            onclick="window.Aural.closeDrawer('${drawerId}')"
          >
            &times;
          </button>
        </div>
        <div class="aural-drawer__body">
          <p>This is the drawer content. You can place any content here.</p>
          <p>The drawer slides in from the ${args.position} side of the screen.</p>
        </div>
        <div class="aural-drawer__footer">
          <button
            type="button"
            class="btn btn-ghost"
            onclick="window.Aural.closeDrawer('${drawerId}')"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onclick="window.Aural.closeDrawer('${drawerId}')"
          >
            Save
          </button>
        </div>
      </div>
    `;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(drawer);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
    }, 100);

    return container;
  },
  args: {
    position: 'right'
  }
};

export const Left: Story = {
  ...Right,
  args: {
    position: 'left'
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.textContent = 'Open Drawer (Left)';

    const drawerId = 'drawer-left';

    const drawer = document.createElement('div');
    drawer.innerHTML = `
      <div class="aural-drawer-backdrop"></div>
      <div id="${drawerId}" class="aural-drawer aural-drawer--left">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title">Navigation</h2>
          <button
            type="button"
            class="aural-drawer__close"
            onclick="window.Aural.closeDrawer('${drawerId}')"
          >
            &times;
          </button>
        </div>
        <div class="aural-drawer__body">
          <nav style="display: flex; flex-direction: column; gap: 0.5rem;">
            <a href="#" class="btn btn-ghost" style="justify-content: flex-start;">🏠 Home</a>
            <a href="#" class="btn btn-ghost" style="justify-content: flex-start;">📊 Dashboard</a>
            <a href="#" class="btn btn-ghost" style="justify-content: flex-start;">⚙️ Settings</a>
            <a href="#" class="btn btn-ghost" style="justify-content: flex-start;">👤 Profile</a>
          </nav>
        </div>
      </div>
    `;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(drawer);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
    }, 100);

    return container;
  }
};

export const WithForm: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const openButton = document.createElement('button');
    openButton.className = 'btn btn-primary';
    openButton.textContent = 'Open Form Drawer';

    const drawerId = 'drawer-form';

    const drawer = document.createElement('div');
    drawer.innerHTML = `
      <div class="aural-drawer-backdrop"></div>
      <div id="${drawerId}" class="aural-drawer aural-drawer--right">
        <div class="aural-drawer__header">
          <h2 class="aural-drawer__title">Add New Item</h2>
          <button
            type="button"
            class="aural-drawer__close"
            onclick="window.Aural.closeDrawer('${drawerId}')"
          >
            &times;
          </button>
        </div>
        <div class="aural-drawer__body">
          <form>
            <div class="form-group mb-4">
              <label class="label">Title</label>
              <input type="text" class="input" placeholder="Enter title" />
            </div>
            <div class="form-group mb-4">
              <label class="label">Description</label>
              <textarea class="input" rows="4" placeholder="Enter description"></textarea>
            </div>
            <div class="form-group mb-4">
              <label class="label">Category</label>
              <select class="input">
                <option>Select category</option>
                <option>Work</option>
                <option>Personal</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-group">
              <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                <input type="checkbox" />
                <span>Mark as important</span>
              </label>
            </div>
          </form>
        </div>
        <div class="aural-drawer__footer">
          <button
            type="button"
            class="btn btn-ghost"
            onclick="window.Aural.closeDrawer('${drawerId}')"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onclick="window.Aural.closeDrawer('${drawerId}')"
          >
            Create
          </button>
        </div>
      </div>
    `;

    openButton.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.openDrawer(drawerId);
      }
    };

    container.appendChild(openButton);
    container.appendChild(drawer);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initDrawers();
      }
    }, 100);

    return container;
  }
};
