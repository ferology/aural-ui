import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Aural UI',
    brandUrl: 'https://ferology.github.io/aural-ui/',
    brandTarget: '_blank',
  },
});
