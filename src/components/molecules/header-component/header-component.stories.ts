export default {
  title: 'Components/Header',
  argTypes: {
    theme: {
      control: 'text',
      options: ['white', 'blue', 'dark'],
    },
    size: {
      control: 'text',
      options: ['slim', 'normal'],
    },
    headerLogoTheme: {
      control: { type: 'text' },
      options: ['white', 'blue', 'dark'],
    },
    headerLogo: {
      control: { type: 'text' },
    },
    navTheme: {
      control: { type: 'text' },
      options: ['white', 'blue', 'dark'],
    },
    navLocation: {
      control: { type: 'text' },
      options: ['below', 'inline', 'none'],
    },
    navInlinePosition: {
      control: { type: 'text' },
      options: ['right', 'left'],
    },
    accountTheme: {
      control: { type: 'text' },
      options: ['blue', 'dark'],
    },
    accountStyle: {
      control: { type: 'text' },
      options: ['detailed', 'simplified-icon', 'simplified-no-icon', 'simplified-no-label'],
    },
    accountLabel: {
      control: { type: 'text' },
    },
    showSearch: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
    },
    searchTheme: {
      control: { type: 'text' },
      options: ['white', 'blue', 'dark'],
    },
    searchTextTheme: {
      control: { type: 'text' },
      options: ['white', 'blue', 'dark'],
    },
    seperatorSize: {
      control: { type: 'text' },
      options: ['small', 'large', 'none'],
    },
    seperatorTheme: {
      control: { type: 'text' },
      options: ['white', 'blue'],
    },
  },
};

const Template = ({ ...args }) => `
${args.headers
  .map(header => {
    return `
    <header-component 
    theme="${header.theme}" 
    size="${header.size}" 
    header-logo-theme="${header.headerLogoTheme}" 
    header-logo="${header.headerLogo}" 
    nav-theme="${header.navTheme}"
    nav-location=${header.navLocation}
    nav-inline-position=${header.navInlinePosition}
    account-theme=${header.accountTheme}
    account-style=${header.accountStyle}
    account-label=${header.accountLabel}
    show-search=${header.showSearch}
    search-theme=${header.searchTheme}
    search-text-theme=${header.searchTextTheme}
    seperator-size=${header.seperatorSize}
    seperator-theme=${header.seperatorTheme}>
    ${header.children}
    </header-component>
    <hr />
    `;
  })
  .join('')}
`;

const header1 = {
  theme: 'blue',
  size: 'normal',
  showSearch: 'true',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '1',
  headerLogoTheme: 'blue',
  accountTheme: 'dark',
  accountLabel: 'My Account',
  accountStyle: 'simplified-no-label',
  navLocation: 'below',
  navTheme: 'blue',
  children: `<div slot="nav-slot" style="display: flex">
   <button-component size="large" label="Button" type="primary" state="hover"></button-component>
  <button-component size="large" label="Button" type="primary" state="hover"></button-component>
  <button-component size="large" label="Button" type="primary" state="hover"></button-component>
  <button-component size="large" label="Button" type="primary" state="hover"></button-component>
  <button-component size="large" label="Button" type="primary" state="hover"></button-component>
</div>
`,
};

const header2 = {
  theme: 'blue',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '1',
  headerLogoTheme: 'blue',
  accountTheme: 'dark',
  accountLabel: 'My Account',
  accountStyle: 'simplified-no-label',
};

const header3 = {
  theme: 'blue',
  size: 'slim',
  showSearch: 'false',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '1',
  headerLogoTheme: 'blue',
  accountTheme: 'dark',
  accountLabel: 'My Account',
  accountStyle: 'simplified-no-label',
  navLocation: 'inline',
  navInlinePosition: 'left',
  children: `<div slot="nav-slot" style="display: flex">
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
</div>`,
};

const header4 = {
  theme: 'white',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'white',
  searchTextTheme: 'dark',
  headerLogo: '2',
  headerLogoTheme: 'white',
  accountTheme: 'dark',
  accountLabel: 'My Account',
  accountStyle: 'simplified-no-label',
};

const header5 = {
  theme: 'blue',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '4',
  headerLogoTheme: 'blue',
  accountTheme: 'dark',
  accountLabel: 'My Account',
  accountStyle: 'detailed',
};

const header6 = {
  theme: 'white',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'white',
  searchTextTheme: 'blue',
  headerLogo: '6',
  headerLogoTheme: 'white',
  accountTheme: 'blue',
  accountLabel: 'My Account',
  accountStyle: 'detailed',
};

const header7 = {
  theme: 'blue',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '4',
  headerLogoTheme: 'blue',
  accountTheme: 'dark',
  accountLabel: 'My Account',
  accountStyle: 'simplified-no-label',
  navLocation: 'inline',
  navInlinePosition: 'right',
  children: `<div slot="nav-slot" style="display: flex">
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <dropdown-button button-label="Button"></dropdown-button>
</div>`,
};

const header8 = {
  theme: 'dark',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'dark',
  searchTextTheme: 'white',
  headerLogo: '5',
  headerLogoTheme: 'blue',
  accountTheme: 'blue',
  accountLabel: 'My Account',
  accountStyle: 'detailed',
};

export const FirstHeader = Template.bind({});
FirstHeader.args = {
  headers: [header1],
};

export const SecondHeader = Template.bind({});
SecondHeader.args = {
  headers: [header2],
};

export const ThirdHeader = Template.bind({});
ThirdHeader.args = {
  headers: [header3],
};

export const FourthHeader = Template.bind({});
FourthHeader.args = {
  headers: [header4],
};

export const FifthHeader = Template.bind({});
FifthHeader.args = {
  headers: [header5],
};

export const SixthHeader = Template.bind({});
SixthHeader.args = {
  headers: [header6],
};

export const SeventhHeader = Template.bind({});
SeventhHeader.args = {
  headers: [header7],
};

export const EighthHeader = Template.bind({});
EighthHeader.args = {
  headers: [header8],
};
