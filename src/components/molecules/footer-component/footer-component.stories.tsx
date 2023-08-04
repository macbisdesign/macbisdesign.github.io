export default {
  title: "Components/Footer",
  component: "footer-component",
  tags: ["autodocs"],
  render(args) {
    return `
    <footer-component 
      top-border-y="${args.topBorderY}"
      show-icon="${args.showIcon}"
      show-address="${args.showAddress}"
      bottom-border-t="${args.bottomBorderT}"
      top-left-color="${args.topLeftColor}"
      top-right-color="${args.topRightColor}"
      bottom-color="${args.bottomColor}"
      top-bg="${args.topBg}"
      bottom-bg="${args.bottomBg}"
      show="${args.show}"
      flex-col=${args.flexCol}
    />
    `;
  },
  argTypes: {
    topBorderY: {
      control: "boolean",
    },
    showIcon: {
      control: "boolean",
    },
    show: {
      control: "boolean",
    },
    showAddress: {
      control: "boolean",
    },
    bottomBorderT: {
      control: "boolean",
    },
    topLeftColor: {
      control: "select",
      options: ["blue", "white"],
    },
    topRightColor: {
      control: "select",
      options: ["white"],
    },
    bottomColor: {
      control: "select",
      options: ["white"],
    },
    topBg: {
      control: "select",
      options: ["blue", "gray", "black", "light-gray"],
    },
    bottomBg: {
      control: "select",
      options: ["blue", "gray", "black", "light-gray"],
    },
    flexCol: {
      control: "boolean",
    },
  },
  parameters: {
    componentSubtitle: "When to use the footer component",
    docs: {
      description: {
        component: `Big footer - use the big footer when you want to replicate your site’s navigation scheme in the footer and offer newsletter signups. Medium footer - use the medium footer when you want to offer only a few footer links (for disclaimers, terms of service, etc.), social media icons, and contact information. Slim footer - Use the slim footer when you only want to offer a few footer links and nothing else.`,
      },
    },
  },
};

export const Small = {
  args: {
    flexCol: "false",
    show: "false",
    showAddress: "false",
    bottomBorderT: "false",
  },
};

export const SmallGray = {
  args: {
    flexCol: "false",
    show: "false",
    bottomBg: "light-gray",
    showAddress: "false",
    bottomBorderT: "false",
  },
};

export const LongGray = {
  args: {
    flexCol: "false",
    show: "false",
    showAddress: "true",
    bottomBg: "light-gray",
    bottomBorderT: "false",
  },
};

export const SmallOutlined = {
  args: {
    flexCol: "false",
    show: "false",
    bottomBorderT: "true",
    showAddress: "false",
    showIcon: "false",
  },
};

export const LongOutlined = {
  args: {
    flexCol: "false",
    show: "false",
    bottomBorderT: "true",
    showAddress: "true",
    showIcon: "false",
  },
};

export const Gray = {
  args: {
    flexCol: "false",
    show: "true",
    showIcon: "false",
    topBorderY: "true",
    topLeftColor: "blue",
    bottomBg: "light-gray",
    showAddress: "false",
    bottomBorderT: "false",
  },
};

export const Blue = {
  args: {
    flexCol: "false",
    show: "true",
    showIcon: "false",
    topBorderY: "true",
    topLeftColor: "blue",
    bottomBg: "blue",
    bottomColor: "white",
    showAddress: "false",
    bottomBorderT: "false",
  },
};

export const BlueBg = {
  args: {
    flexCol: "false",
    show: "true",
    topBg: "blue",
    showIcon: "false",
    topLeftColor: "white",
    topRightColor: "white",
    topBorderY: "true",
    bottomBg: "blue",
    bottomColor: "white",
    showAddress: "false",
    bottomBorderT: "false",
  },
};

export const GrayBg = {
  args: {
    flexCol: "false",
    show: "true",
    topBg: "gray",
    showIcon: "false",
    topRightColor: "white",
    topLeftColor: "white",
    topBorderY: "true",
    bottomBg: "gray",
    bottomColor: "white",
    showAddress: "false",
    bottomBorderT: "false",
  },
};

export const LightGrayBg = {
  args: {
    flexCol: "false",
    show: "true",
    showIcon: "true",
    topBorderY: "false",
    topBg: "light-gray",
    bottomBg: "light-gray",
    bottomBorderT: "false",
    showAddress: "false",
  },
};

export const BlackBg = {
  args: {
    flexCol: "false",
    show: "true",
    showIcon: "false",
    topBorderY: "false",
    topBg: "black",
    topLeftColor: "white",
    topRightColor: "white",
    bottomColor: "white",
    bottomBg: "black",
    showAddress: "false",
    bottomBorderT: "false",
  },
};
