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

      // Remove any existing theme link
      const existingLink = document.getElementById('theme-stylesheet');
      if (existingLink) {
        existingLink.remove();
      }

      // Add new theme link
      const link = document.createElement('link');
      link.id = 'theme-stylesheet';
      link.rel = 'stylesheet';
      link.href = `/themes/${theme}.css`;
      document.head.appendChild(link);

      // Set data-theme attribute
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);

      return story();
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