import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../javascript', '../dist'],
  viteFinal: async (config, { configType }) => {
    // GitHub Pages serves the build under /aural-ui/storybook/. Apply that only
    // to the production build: with it, `storybook dev` cannot find /index.json
    // and every story fails to render.
    if (configType === 'PRODUCTION') {
      config.base = '/aural-ui/storybook/';
    }
    return config;
  },
};

export default config;
