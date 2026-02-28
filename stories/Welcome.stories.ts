import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Getting Started/Welcome',
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj;

export const Welcome: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '3rem';
    container.style.textAlign = 'center';
    container.style.maxWidth = '600px';

    container.innerHTML = `
      <h1 style="margin-bottom: 1rem; font-size: 2.5rem;">🎨 Aural UI Storybook</h1>
      <p style="font-size: 1.25rem; margin-bottom: 2rem; color: var(--color-text-secondary);">
        Interactive component documentation with live examples
      </p>

      <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem;">
        <button class="btn btn-primary">Primary Button</button>
        <button class="btn btn-outline">Outline Button</button>
      </div>

      <div class="card card-elevated" style="text-align: left; padding: 1.5rem; margin-top: 2rem;">
        <h3 style="margin-top: 0;">Quick Start</h3>
        <ol style="margin: 0; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem;">Browse components in the sidebar</li>
          <li style="margin-bottom: 0.5rem;">Use the <strong>Controls</strong> panel to modify props</li>
          <li style="margin-bottom: 0.5rem;">Switch themes using the toolbar dropdown</li>
          <li style="margin-bottom: 0.5rem;">Check accessibility with the <strong>A11y</strong> panel</li>
        </ol>
      </div>

      <p style="margin-top: 2rem; font-size: 0.875rem; color: var(--color-text-secondary);">
        Aural UI • Modern Design System • 60+ Components • 7 Themes
      </p>
    `;

    // Test if Aural is available
    setTimeout(() => {
      if (typeof window.Aural === 'undefined') {
        const warning = document.createElement('div');
        warning.className = 'alert alert-warning';
        warning.style.marginTop = '1rem';
        warning.innerHTML = `
          <strong>Warning:</strong> Aural JavaScript not loaded.
          Some interactive components may not work properly.
        `;
        container.appendChild(warning);
      } else {
        const success = document.createElement('div');
        success.className = 'alert alert-success';
        success.style.marginTop = '1rem';
        success.innerHTML = `
          <strong>✓ Ready:</strong> Aural UI is loaded and ready!
        `;
        container.appendChild(success);
      }
    }, 100);

    return container;
  }
};

export const ThemeTest: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    container.innerHTML = `
      <h2>Theme Colors Test</h2>
      <p style="color: var(--color-text-secondary);">If you see styled colors, themes are working!</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
        <div style="padding: 1rem; background: var(--color-primary); color: white; border-radius: 0.5rem; text-align: center;">
          Primary
        </div>
        <div style="padding: 1rem; background: var(--color-secondary); color: white; border-radius: 0.5rem; text-align: center;">
          Secondary
        </div>
        <div style="padding: 1rem; background: var(--color-success); color: white; border-radius: 0.5rem; text-align: center;">
          Success
        </div>
        <div style="padding: 1rem; background: var(--color-warning); color: white; border-radius: 0.5rem; text-align: center;">
          Warning
        </div>
        <div style="padding: 1rem; background: var(--color-error); color: white; border-radius: 0.5rem; text-align: center;">
          Error
        </div>
      </div>

      <div style="margin-top: 2rem; padding: 1.5rem; background: var(--color-bg-secondary); border-radius: 0.5rem;">
        <p><strong>Current Theme:</strong> Use the toolbar dropdown to switch between:</p>
        <ul style="margin-top: 0.5rem;">
          <li>Dark (default)</li>
          <li>Light</li>
          <li>Neon</li>
          <li>Kinetic</li>
          <li>Prismatic</li>
          <li>Minimal</li>
          <li>Warm</li>
        </ul>
      </div>
    `;

    return container;
  }
};
