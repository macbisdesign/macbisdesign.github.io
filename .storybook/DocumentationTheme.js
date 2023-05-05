import { create } from '@storybook/theming';
// import logoUrl from './public/images/MACBISimg.png';

export default create({
  base: 'light',
  brandTitle: 'Macbis',
  brandUrl: 'https://macbisdesign.github.io/',
  // brandImage: 'https://i.ibb.co/NxTHPmf/MACBIS-4.png',
  // brandImage: 'https://i.ibb.co/d6zqzFK/MACBIS-5.png',
  // brandImage: 'https://i.ibb.co/42CF4rK/MACBIS-8.PNG',
  // brandImage: 'images/MACBISimg.png',
  // brandImage: (process.env.NODE_ENV === 'production') ? logoUrl : '/MACBISimg.png',
  brandImage: 'https://res.cloudinary.com/dne7utix5/image/upload/v1678843332/MACBISimg_ewtjlc.png',
  brandTarget: '_self',
  colorPrimary: '#F9F9F9',
  colorSecondary: '#2a4362',

  // UI //
  // appBg: '#2a4362',
  appBg: '#2a4362',
  appContentBg: '#F9F9F9',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Merriweather", sans-serif',
  fontCode: 'monospace',
  fontSize: 24,


  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '',
  // barBg: '#18415E',
  barBg: '#2a4362',
  // barBorderColor: 'red',
  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});
// .storybook/YourTheme.js

