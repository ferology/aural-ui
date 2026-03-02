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
    // Hide theme toolbar on all docs pages by default
    // Individual stories in Canvas mode will still show it
    toolbar: {
      theme: {
        hidden: (context: any) => context?.viewMode === 'docs'
      }
    },
    docs: {
      toc: true,
      source: {
        type: 'code',
      },
      canvas: {
        sourceState: 'shown',
      }
    },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'minimal';

      // Load theme CSS
      let themeLink = document.getElementById('theme-stylesheet') as HTMLLinkElement;
      if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.id = 'theme-stylesheet';
        themeLink.rel = 'stylesheet';
        document.head.appendChild(themeLink);
      }
      themeLink.href = `/themes/${theme}.css`;

      // Apply theme
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);

      return story();
    }
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'minimal',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'minimal', title: 'Minimal' },
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'neon', title: 'Neon' },
          { value: 'kinetic', title: 'Kinetic' },
          { value: 'prismatic', title: 'Prismatic' },
          { value: 'high-contrast', title: 'High Contrast' },
          { value: 'colorblind-friendly', title: 'Colorblind' },
          { value: 'warm', title: 'Warm' }
        ],
        dynamicTitle: true
      }
    }
  }
};

export default preview;