import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#000000',
  colorSecondary: '#0071BC',

  // UI
  appBg: '#FAFAFA',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'MACBIS Design System',
  brandUrl: 'https://macbisdesign.github.io/',
  brandImage: 'https://res.cloudinary.com/dmat2svkj/image/upload/v1680282008/macbis-logo_s9ncgt.png',
  brandTarget: '_self',
});