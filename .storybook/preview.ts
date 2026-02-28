import type { Preview } from '@storybook/html';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    layout: 'padded',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'dark';

      // Update or create theme link
      let themeLink = document.getElementById('theme-stylesheet') as HTMLLinkElement;
      if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.id = 'theme-stylesheet';
        themeLink.rel = 'stylesheet';
        document.head.appendChild(themeLink);
      }
      themeLink.href = `/themes/${theme}.css`;

      // Set data-theme attribute on html and body
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);

      // Apply theme background immediately
      document.body.style.transition = 'background-color 0.2s ease, color 0.2s ease';

      // Wrap story in a themed container
      const wrapper = document.createElement('div');
      wrapper.style.minHeight = '100vh';
      wrapper.style.background = 'var(--color-bg-primary)';
      wrapper.style.color = 'var(--color-text-primary)';
      wrapper.setAttribute('data-theme', theme);

      const storyContent = story();
      if (storyContent instanceof HTMLElement) {
        wrapper.appendChild(storyContent);
      } else {
        wrapper.innerHTML = storyContent;
      }

      return wrapper;
    }
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
          { value: 'neon', title: 'Neon' },
          { value: 'kinetic', title: 'Kinetic' },
          { value: 'prismatic', title: 'Prismatic' },
          { value: 'high-contrast', title: 'High Contrast' },
          { value: 'colorblind-friendly', title: 'Colorblind' },
          { value: 'minimal', title: 'Minimal' },
          { value: 'warm', title: 'Warm' }
        ],
        dynamicTitle: true
      }
    }
  }
};

export default preview;