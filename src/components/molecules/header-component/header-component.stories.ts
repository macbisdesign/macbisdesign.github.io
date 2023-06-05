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
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
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
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
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
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
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
