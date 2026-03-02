/**
 * Creates a responsive grid that displays a component across all available themes.
 * Each theme is rendered in its own isolated container with the appropriate theme CSS loaded.
 *
 * @param renderComponent - Function that receives a theme ID and returns an HTMLElement to display
 * @param options - Optional configuration for grid layout
 * @returns HTMLElement containing the complete theme comparison grid
 *
 * @example
 * ```typescript
 * createThemeGrid((theme) => {
 *   const button = document.createElement('button');
 *   button.className = 'btn btn-primary';
 *   button.textContent = 'Button';
 *   return button;
 * });
 * ```
 */
export function createThemeGrid(
  renderComponent: (theme: string) => HTMLElement,
  options?: { columns?: string; gap?: string }
): HTMLElement {
  const themes = [
    { id: 'minimal', label: 'Minimal' },
    { id: 'light', label: 'Light' },
    { id: 'dark', label: 'Dark' },
    { id: 'neon', label: 'Neon' },
    { id: 'kinetic', label: 'Kinetic' },
    { id: 'prismatic', label: 'Prismatic' },
    { id: 'high-contrast', label: 'High Contrast' },
    { id: 'colorblind-friendly', label: 'Colorblind' },
    { id: 'warm', label: 'Warm' }
  ];

  const grid = document.createElement('div');
  grid.style.cssText = `
    display: grid;
    grid-template-columns: ${options?.columns || 'repeat(auto-fit, minmax(400px, 1fr))'};
    gap: ${options?.gap || '3rem'};
    padding: 3rem;
    max-width: 1800px;
    margin: 0 auto;
  `;

  themes.forEach(theme => {
    const themeBox = document.createElement('div');
    themeBox.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
    `;

    // Theme label
    const label = document.createElement('div');
    label.textContent = theme.label;
    label.style.cssText = `
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 0.7;
      text-align: center;
      padding: 0.5rem;
    `;

    // Theme container with data-theme attribute
    const container = document.createElement('div');
    container.setAttribute('data-theme', theme.id);
    container.style.cssText = `
      padding: 2.5rem;
      background: var(--color-bg-primary);
      border: 2px solid var(--color-border-medium);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 300px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    `;

    // Load theme CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/themes/${theme.id}.css`;
    container.appendChild(link);

    // Render component
    const component = renderComponent(theme.id);
    container.appendChild(component);

    themeBox.appendChild(label);
    themeBox.appendChild(container);
    grid.appendChild(themeBox);
  });

  return grid;
}
