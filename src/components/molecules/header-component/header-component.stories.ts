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
    navSeparator: {
      control: { type: 'boolean' },
    },
    headerLogoDash: {
      control: { type: 'boolean' },
    },
    headerLogoStretched: {
      control: { type: 'boolean' },
    },
    accountContainerTheme: {
      control: { type: 'text' },
      options: ['white', 'blue', 'dark'],
    },
    headerLogoDashTheme: {
      control: { type: 'text' },
      options: ['blue', 'white'],
    },
    navSeparatorTheme: {
      control: { type: 'text' },
      options: ['blue', 'white'],
    },
    accountContainer: {
      control: { type: 'boolean' },
    },
  },
};

const Template = ({ ...args }) => `
${args.headers
  .map(header => {
    return `
    <header-component 
    theme=${header.theme}
    size=${header.size}
    header-logo-theme=${header.headerLogoTheme}
    header-logo=${header.headerLogo}
    nav-theme=${header.navTheme}
    nav-location=${header.navLocation}
    nav-inline-position=${header.navInlinePosition}
    account-label=${header.accountLabel}
    show-search=${header.showSearch}
    search-theme=${header.searchTheme}
    search-text-theme=${header.searchTextTheme}
    nav-separator=${header.navSeparator}
    header-logo-dash=${header.headerLogoDash}
    header-logo-stretched=${header.headerLogoStretched}
    account-container-theme=${header.accountContainerTheme}
    header-logo-dash-theme=${header.headerLogoDashTheme}
    nav-separator-theme=${header.navSeparatorTheme}
    account-container=${header.accountContainer}
    >
     ${header.children}
    </header-component>
    <hr />
    `;
  })
  .join('')}
`;

const header1 = {
  theme: 'dark',
  size: 'normal',
  showSearch: 'false',
  headerLogo: '3',
  headerLogoTheme: 'dark',
  accountLabel: '"My Account"',
  navLocation: 'below',
  navTheme: 'dark',
  navSeparator: 'true',
  headerLogoDash: 'true',
  navSeparatorTheme: 'white',
  accountContainerTheme: 'white',
  headerLogoStretched: 'false',
  children: `
  <dropdown-component>
    <dropdown-link theme="dark" panel-theme="dark" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
    <dropdown-link theme="dark" panel-theme="dark" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For designers </dropdown-panel-link>
        <dropdown-panel-link> For designers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
  </dropdown-component>
`,
};

const header2 = {
  theme: 'blue',
  size: 'normal',
  showSearch: 'false',
  headerLogo: '3',
  headerLogoTheme: 'blue',
  accountLabel: '"My Account"',
  navLocation: 'below',
  navTheme: 'blue',
  navSeparator: 'true',
  headerLogoDash: 'true',
  navSeparatorTheme: 'white',
  accountContainerTheme: 'white',
  headerLogoStretched: 'false',
  children: `
  <dropdown-component>
    <dropdown-link theme="white" panel-theme="white" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
    <dropdown-link theme="white" panel-theme="white" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For designers </dropdown-panel-link>
        <dropdown-panel-link> For designers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
  </dropdown-component>
  `,
};

const header3 = {
  theme: 'blue',
  size: 'normal',
  showSearch: 'false',
  headerLogo: '3',
  headerLogoTheme: 'blue',
  accountLabel: '"My Account"',
  navLocation: 'below',
  navTheme: 'blue',
  navSeparator: 'true',
  headerLogoDash: 'true',
  navSeparatorTheme: 'white',
  accountContainerTheme: 'white',
  headerLogoStretched: 'false',
  children: `
  <dropdown-component>
    <dropdown-link theme="dark-blue" panel-theme="dark-blue" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
    <dropdown-link theme="dark-blue" panel-theme="dark-blue" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For designers </dropdown-panel-link>
        <dropdown-panel-link> For designers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
  </dropdown-component>
  `,
};

const header4 = {
  theme: 'blue',
  size: 'normal',
  showSearch: 'false',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '3',
  headerLogoTheme: 'blue',
  accountLabel: '"My Account"',
  navLocation: 'below',
  navTheme: 'blue',
  navSeparator: 'true',
  headerLogoDash: 'true',
  navSeparatorTheme: 'white',
  accountContainerTheme: 'white',
  headerLogoStretched: 'false',
  children: `
  <dropdown-component>
    <dropdown-link theme="white" panel-theme="white" panel-size="contain" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
  </dropdown-component>
  `,
};

const header5 = {
  theme: 'blue',
  size: 'normal',
  showSearch: 'false',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '3',
  headerLogoTheme: 'blue',
  accountLabel: '"My Account"',
  navLocation: 'below',
  navTheme: 'blue',
  navSeparator: 'true',
  headerLogoDash: 'true',
  navSeparatorTheme: 'white',
  accountContainerTheme: 'white',
  headerLogoStretched: 'false',
  children: `
  <dropdown-component>
    <dropdown-link theme="dark-blue" panel-theme="dark-blue" panel-size="contain" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
  </dropdown-component>
  `,
};

const header6 = {
  theme: 'dark',
  size: 'normal',
  showSearch: 'false',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '3',
  headerLogoTheme: 'dark',
  accountLabel: '"My Account"',
  navLocation: 'below',
  navTheme: 'dark',
  navSeparator: 'true',
  headerLogoDash: 'true',
  navSeparatorTheme: 'white',
  accountContainerTheme: 'white',
  headerLogoStretched: 'false',
  children: `
  <dropdown-component>
    <dropdown-link theme="dark" panel-theme="dark" panel-size="contain" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
  </dropdown-component>
  `,
};

const header7 = {
  theme: 'blue',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '3',
  headerLogoTheme: 'blue',
  accountLabel: '"My Account"',
  headerLogoDash: 'true',
  navSeparator: 'false',
  accountContainerTheme: 'white',
  headerLogoStretched: 'false',
};

const header8 = {
  theme: 'blue',
  navSeparator: 'true',
  navSeparatorTheme: 'white',
  size: 'slim',
  showSearch: 'false',
  headerLogo: '3',
  headerLogoTheme: 'blue',
  accountLabel: '"My Account"',
  accountContainerTheme: 'white',
  headerLogoDash: 'true',
  headerLogoStretched: 'false',
};

const header9 = {
  theme: 'blue',
  size: 'slim',
  showSearch: 'false',
  headerLogo: '3',
  headerLogoTheme: 'blue',
  accountContainer: 'false',
  navLocation: 'inline',
  headerLogoDash: 'false',
  navSeparator: 'false',
};

const header10 = {
  theme: 'blue',
  size: 'slim',
  showSearch: 'false',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '3',
  headerLogoTheme: 'blue',
  accountLabel: '"My Account"',
  navLocation: 'inline',
  navInlinePosition: 'left',
  headerLogoDash: 'true',
  navSeparator: 'false',
  accountContainerTheme: 'white',
  headerLogoStretched: 'false',
  children: `
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  `,
};

const header11 = {
  theme: 'blue',
  size: 'slim',
  showSearch: 'false',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '3',
  headerLogoTheme: 'blue',
  accountLabel: '"My Account"',
  navLocation: 'inline',
  navInlinePosition: 'right',
  headerLogoDash: 'true',
  navSeparator: 'true',
  navSeparatorTheme: 'white',
  accountContainerTheme: 'white',
  headerLogoStretched: 'false',
  children: `
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  `,
};

const header12 = {
  theme: 'blue',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '4',
  headerLogoTheme: 'blue',
  accountLabel: '"My Account"',
  headerLogoDash: 'true',
  headerLogoStretched: 'true',
  navSeparator: 'false',
  accountContainerTheme: 'white',
};

const header13 = {
  theme: 'blue',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '4',
  headerLogoTheme: 'blue',
  accountLabel: '"My Account"',
  headerLogoDash: 'true',
  headerLogoStretched: 'true',
  navLocation: 'inline',
  navInlinePosition: 'right',
  navSeparator: 'false',
  accountContainerTheme: 'white',
  children: `
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  `,
};

const header14 = {
  theme: 'blue',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'blue',
  searchTextTheme: 'white',
  headerLogo: '4',
  headerLogoTheme: 'blue',
  accountLabel: '"My Account"',
  headerLogoDash: 'true',
  headerLogoStretched: 'true',
  navLocation: 'inline',
  navInlinePosition: 'right',
  navSeparator: 'false',
  accountContainerTheme: 'white',
  children: `
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  `,
};

const header15 = {
  theme: 'white',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'white',
  searchTextTheme: 'dark',
  headerLogo: '2',
  headerLogoTheme: 'white',
  accountLabel: '"My Account"',
  accountContainerTheme: 'dark',
  navSeparator: 'false',
};

const header16 = {
  theme: 'white',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'white',
  searchTextTheme: 'blue',
  headerLogo: '0',
  headerLogoTheme: 'white',
  accountLabel: '"My Account"',
  headerLogoDash: 'true',
  accountContainerTheme: 'blue',
  navSeparator: 'false',
};

const header17 = {
  theme: 'white',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'white',
  searchTextTheme: 'blue',
  headerLogo: '6',
  headerLogoTheme: 'white',
  accountLabel: '"My Account"',
  headerLogoDash: 'true',
  headerLogoDashTheme: 'blue',
  headerLogoStretched: 'true',
  accountContainerTheme: 'blue',
  navSeparator: 'false',
};

const header18 = {
  theme: 'white',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'white',
  searchTextTheme: 'blue',
  headerLogo: '1',
  headerLogoTheme: 'blue',
  accountLabel: '"My Account"',
  headerLogoDash: 'true',
  accountContainerTheme: 'blue',
  headerLogoStretched: 'true',
  navSeparator: 'false',
};

const header19 = {
  theme: 'dark',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'dark',
  searchTextTheme: 'white',
  headerLogo: '3',
  headerLogoTheme: 'dark',
  accountLabel: '"My Account"',
  headerLogoDash: 'true',
  navSeparator: 'false',
  accountContainerTheme: 'white',
  headerLogoStretched: 'false',
};

const header20 = {
  theme: 'white',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'white',
  searchTextTheme: 'dark',
  headerLogo: '2',
  headerLogoTheme: 'white',
  accountLabel: '"My Account"',
  headerLogoDash: 'true',
  accountContainerTheme: 'dark',
  navSeparator: 'false',
};

const header21 = {
  theme: 'dark',
  size: 'slim',
  showSearch: 'true',
  searchTheme: 'dark',
  searchTextTheme: 'white',
  headerLogo: '5',
  headerLogoTheme: 'blue',
  accountTheme: 'blue',
  accountLabel: '"My Account"',
  accountStyle: 'detailed',
  headerLogoStretched: 'true',
  navSeparator: 'false',
  accountContainerTheme: 'white',
  headerLogoDash: 'false',
};

const header22 = {
  theme: 'dark',
  size: 'slim',
  showSearch: 'false',
  headerLogo: '7',
  headerLogoTheme: 'dark',
  accountLabel: '"My Account"',
  headerLogoDash: 'true',
  accountContainerTheme: 'white',
  navSeparator: 'false',
  headerLogoStretched: 'false',
};

const header23 = {
  theme: 'dark',
  size: 'slim',
  showSearch: 'false',
  headerLogo: '7',
  headerLogoTheme: 'dark',
  accountLabel: '"My Account"',
  accountContainerTheme: 'white',
  navSeparator: 'false',
  headerLogoDash: 'false',
};

const header24 = {
  theme: 'white',
  size: 'slim',
  showSearch: 'false',
  navSeparator: 'true',
  headerLogo: '0',
  headerLogoTheme: 'white',
  accountLabel: '"My Account"',
  headerLogoDash: 'true',
  accountContainerTheme: 'blue',
  navSeparatorTheme: 'blue',
  headerLogoDashTheme: 'blue',
  headerLogoStretched: 'false',
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

export const EightHeader = Template.bind({});
EightHeader.args = {
  headers: [header8],
};

export const NinthHeader = Template.bind({});
NinthHeader.args = {
  headers: [header9],
};

export const TenthHeader = Template.bind({});
TenthHeader.args = {
  headers: [header10],
};

export const EleventhHeader = Template.bind({});

EleventhHeader.args = {
  headers: [header11],
};

export const TwelfthHeader = Template.bind({});

TwelfthHeader.args = {
  headers: [header12],
};

export const ThirteenthHeader = Template.bind({});
ThirteenthHeader.args = {
  headers: [header13],
};

export const FourteenthHeader = Template.bind({});
FourteenthHeader.args = {
  headers: [header14],
};

export const FifteenthHeader = Template.bind({});
FifteenthHeader.args = {
  headers: [header15],
};

export const SixteenthHeader = Template.bind({});
SixteenthHeader.args = {
  headers: [header16],
};

export const SeventeenthHeader = Template.bind({});
SeventeenthHeader.args = {
  headers: [header17],
};

export const EighteenthHeader = Template.bind({});
EighteenthHeader.args = {
  headers: [header18],
};

export const NineteenthHeader = Template.bind({});
NineteenthHeader.args = {
  headers: [header19],
};

export const TwentiethHeader = Template.bind({});
TwentiethHeader.args = {
  headers: [header20],
};

export const TwentyFirstHeader = Template.bind({});
TwentyFirstHeader.args = {
  headers: [header21],
};

export const TwentySecondHeader = Template.bind({});
TwentySecondHeader.args = {
  headers: [header22],
};

export const TwentyThirdHeader = Template.bind({});
TwentyThirdHeader.args = {
  headers: [header23],
};

export const TwentyFourHeader = Template.bind({});
TwentyFourHeader.args = {
  headers: [header24],
};
