export default {
  title: "Components/Header",
  tags: ["autodocs"],
  render(args) {
    return `
    <header-component 
    theme="${args.theme}"
    size="${args.size}"
    header-logo-theme="${args.headerLogoTheme}"
    header-logo="${args.headerLogo}"
    nav-theme="${args.navTheme}"
    nav-location="${args.navLocation}"
    nav-inline-position="${args.navInlinePosition}"
    account-label="${args.accountLabel}"
    show-search="${args.showSearch}"
    search-theme="${args.searchTheme}"
    search-text-theme="${args.searchTextTheme}"
    nav-separator="${args.navSeparator}"
    header-logo-dash="${args.headerLogoDash}"
    header-logo-stretched="${args.headerLogoStretched}"
    account-container-theme="${args.accountContainerTheme}"
    header-logo-dash-theme="${args.headerLogoDashTheme}"
    nav-separator-theme="${args.navSeparatorTheme}"
    account-container="${args.accountContainer}"
    >
     ${args.children}
    </header-component>
    `;
  },
  argTypes: {
    theme: {
      control: "text",
      options: ["white", "blue", "dark"],
    },
    size: {
      control: "text",
      options: ["slim", "normal"],
    },
    headerLogoTheme: {
      control: { type: "text" },
      options: ["white", "blue", "dark"],
    },
    headerLogo: {
      control: { type: "text" },
    },
    navTheme: {
      control: { type: "text" },
      options: ["white", "blue", "dark"],
    },
    navLocation: {
      control: { type: "text" },
      options: ["below", "inline", "none"],
    },
    navInlinePosition: {
      control: { type: "text" },
      options: ["right", "left"],
    },
    accountLabel: {
      control: { type: "text" },
    },
    showSearch: {
      control: { type: "boolean" },
      options: ["true", "false"],
    },
    searchTheme: {
      control: { type: "text" },
      options: ["white", "blue", "dark"],
    },
    searchTextTheme: {
      control: { type: "text" },
      options: ["white", "blue", "dark"],
    },
    navSeparator: {
      control: { type: "boolean" },
    },
    headerLogoDash: {
      control: { type: "boolean" },
    },
    headerLogoStretched: {
      control: { type: "boolean" },
    },
    accountContainerTheme: {
      control: { type: "text" },
      options: ["white", "blue", "dark"],
    },
    headerLogoDashTheme: {
      control: { type: "text" },
      options: ["blue", "white"],
    },
    navSeparatorTheme: {
      control: { type: "text" },
      options: ["blue", "white"],
    },
    accountContainer: {
      control: { type: "boolean" },
    },
  },
};

export const header1 = {
  args: {
    theme: "dark",
    size: "normal",
    showSearch: "false",
    headerLogo: "3",
    headerLogoTheme: "dark",
    accountLabel: '"My Account"',
    navLocation: "below",
    navTheme: "dark",
    navSeparator: "true",
    headerLogoDash: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
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
  },
};

export const header2 = {
  args: {
    theme: "blue",
    size: "normal",
    showSearch: "false",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    navLocation: "below",
    navTheme: "blue",
    navSeparator: "true",
    headerLogoDash: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
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
  },
};

export const header3 = {
  args: {
    theme: "blue",
    size: "normal",
    showSearch: "false",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    navLocation: "below",
    navTheme: "blue",
    navSeparator: "true",
    headerLogoDash: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
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
  },
};

export const header4 = {
  args: {
    theme: "blue",
    size: "normal",
    showSearch: "false",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    navLocation: "below",
    navTheme: "blue",
    navSeparator: "true",
    headerLogoDash: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
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
  },
};

export const header5 = {
  args: {
    theme: "blue",
    size: "normal",
    showSearch: "false",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    navLocation: "below",
    navTheme: "blue",
    navSeparator: "true",
    headerLogoDash: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
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
  },
};

export const header6 = {
  args: {
    theme: "dark",
    size: "normal",
    showSearch: "false",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "dark",
    accountLabel: '"My Account"',
    navLocation: "below",
    navTheme: "dark",
    navSeparator: "true",
    headerLogoDash: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
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
  },
};

export const header7 = {
  args: {
    theme: "blue",
    size: "slim",
    showSearch: "true",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    navSeparator: "false",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
  },
};

export const header8 = {
  args: {
    theme: "blue",
    navSeparator: "true",
    navSeparatorTheme: "white",
    size: "slim",
    showSearch: "false",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    accountContainerTheme: "white",
    headerLogoDash: "true",
    headerLogoStretched: "false",
  },
};

export const header9 = {
  args: {
    theme: "blue",
    size: "slim",
    showSearch: "false",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountContainer: "false",
    navLocation: "inline",
    headerLogoDash: "false",
    navSeparator: "false",
  },
};

export const header10 = {
  args: {
    theme: "blue",
    size: "slim",
    showSearch: "false",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    navLocation: "inline",
    navInlinePosition: "left",
    headerLogoDash: "true",
    navSeparator: "false",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
    children: `
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  `,
  },
};

export const header11 = {
  args: {
    theme: "blue",
    size: "slim",
    showSearch: "false",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    navLocation: "inline",
    navInlinePosition: "right",
    headerLogoDash: "true",
    navSeparator: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
    children: `
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  `,
  },
};

export const header12 = {
  args: {
    theme: "blue",
    size: "slim",
    showSearch: "true",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "4",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    headerLogoStretched: "true",
    navSeparator: "false",
    accountContainerTheme: "white",
  },
};

export const header13 = {
  args: {
    theme: "blue",
    size: "slim",
    showSearch: "true",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "4",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    headerLogoStretched: "true",
    navLocation: "inline",
    navInlinePosition: "right",
    navSeparator: "false",
    accountContainerTheme: "white",
    children: `
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  `,
  },
};

export const header14 = {
  args: {
    theme: "blue",
    size: "slim",
    showSearch: "true",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "4",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    headerLogoStretched: "true",
    navLocation: "inline",
    navInlinePosition: "right",
    navSeparator: "false",
    accountContainerTheme: "white",
    children: `
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  `,
  },
};

export const header15 = {
  args: {
    theme: "white",
    size: "slim",
    showSearch: "true",
    searchTheme: "white",
    searchTextTheme: "dark",
    headerLogo: "2",
    headerLogoTheme: "white",
    accountLabel: '"My Account"',
    accountContainerTheme: "dark",
    navSeparator: "false",
  },
};

export const header16 = {
  args: {
    theme: "white",
    size: "slim",
    showSearch: "true",
    searchTheme: "white",
    searchTextTheme: "blue",
    headerLogo: "0",
    headerLogoTheme: "white",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    accountContainerTheme: "blue",
    navSeparator: "false",
  },
};

export const header17 = {
  args: {
    theme: "white",
    size: "slim",
    showSearch: "true",
    searchTheme: "white",
    searchTextTheme: "blue",
    headerLogo: "6",
    headerLogoTheme: "white",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    headerLogoDashTheme: "blue",
    headerLogoStretched: "true",
    accountContainerTheme: "blue",
    navSeparator: "false",
  },
};

export const header18 = {
  args: {
    theme: "white",
    size: "slim",
    showSearch: "true",
    searchTheme: "white",
    searchTextTheme: "blue",
    headerLogo: "1",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    accountContainerTheme: "blue",
    headerLogoStretched: "true",
    navSeparator: "false",
  },
};

export const header19 = {
  args: {
    theme: "dark",
    size: "slim",
    showSearch: "true",
    searchTheme: "dark",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "dark",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    navSeparator: "false",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
  },
};

export const header20 = {
  args: {
    theme: "white",
    size: "slim",
    showSearch: "true",
    searchTheme: "white",
    searchTextTheme: "dark",
    headerLogo: "2",
    headerLogoTheme: "white",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    accountContainerTheme: "dark",
    navSeparator: "false",
  },
};

export const header21 = {
  args: {
    theme: "dark",
    size: "slim",
    showSearch: "true",
    searchTheme: "dark",
    searchTextTheme: "white",
    headerLogo: "5",
    headerLogoTheme: "blue",
    accountTheme: "blue",
    accountLabel: '"My Account"',
    accountStyle: "detailed",
    headerLogoStretched: "true",
    navSeparator: "false",
    accountContainerTheme: "white",
    headerLogoDash: "false",
  },
};

export const header22 = {
  args: {
    theme: "dark",
    size: "slim",
    showSearch: "false",
    headerLogo: "7",
    headerLogoTheme: "dark",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    accountContainerTheme: "white",
    navSeparator: "false",
    headerLogoStretched: "false",
  },
};

export const header23 = {
  args: {
    theme: "dark",
    size: "slim",
    showSearch: "false",
    headerLogo: "7",
    headerLogoTheme: "dark",
    accountLabel: '"My Account"',
    accountContainerTheme: "white",
    navSeparator: "false",
    headerLogoDash: "false",
  },
};

export const header24 = {
  args: {
    theme: "white",
    size: "slim",
    showSearch: "false",
    navSeparator: "true",
    headerLogo: "0",
    headerLogoTheme: "white",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    accountContainerTheme: "blue",
    navSeparatorTheme: "blue",
    headerLogoDashTheme: "blue",
    headerLogoStretched: "false",
  },
};
