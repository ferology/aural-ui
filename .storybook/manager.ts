import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: 'Aural UI',
    brandUrl: 'https://ferology.github.io/aural-ui/',
    brandImage: undefined,
    brandTarget: '_blank',

    // UI
    appBg: '#1a1a1a',
    appContentBg: '#0a0a0a',
    appBorderColor: '#2a2a2a',
    appBorderRadius: 4,

    // Typography
    fontBase: 'system-ui, -apple-system, sans-serif',
    fontCode: 'ui-monospace, monospace',

    // Text colors
    textColor: '#ffffff',
    textInverseColor: '#0a0a0a',
    textMutedColor: '#b0b0b0',

    // Toolbar default and active colors
    barTextColor: '#b0b0b0',
    barSelectedColor: '#10b981',
    barBg: '#1a1a1a',

    // Form colors
    inputBg: '#0a0a0a',
    inputBorder: '#2a2a2a',
    inputTextColor: '#ffffff',
    inputBorderRadius: 4,

    // Brand
    colorPrimary: '#10b981',
    colorSecondary: '#06b6d4',
  },
});
