export default {
  title: 'Test/Simple',
  parameters: {
    layout: 'centered'
  }
};

export const BasicTest = () => {
  const div = document.createElement('div');
  div.style.padding = '2rem';
  div.innerHTML = `
    <h1 style="color: var(--color-primary);">Storybook Works! 🎉</h1>
    <p>If you can see this, Storybook is loading correctly.</p>
    <button class="btn btn-primary">Test Button</button>
  `;
  return div;
};

export const ThemeTest = () => {
  const div = document.createElement('div');
  div.style.padding = '2rem';
  div.innerHTML = `
    <h2>Theme Color Test</h2>
    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
      <div style="width: 100px; height: 100px; background: var(--color-primary); border-radius: 8px;"></div>
      <div style="width: 100px; height: 100px; background: var(--color-secondary); border-radius: 8px;"></div>
      <div style="width: 100px; height: 100px; background: var(--color-success); border-radius: 8px;"></div>
    </div>
    <p style="margin-top: 1rem;">Switch themes using the toolbar dropdown above!</p>
  `;
  return div;
};
