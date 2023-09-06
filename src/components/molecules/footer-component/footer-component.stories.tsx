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
      name: "Top boarder",
      control: "boolean",
    },
    showIcon: {
      name: "Show icon",
      control: "boolean",
    },
    show: {
      name: "Show top",
      control: "boolean",
    },
    showAddress: {
      name: "Show address",
      control: "boolean",
    },
    bottomBorderT: {
      name: "Bottom boarder",
      control: "boolean",
    },
    topLeftColor: {
      name: "Top left color",
      control: "select",
      options: ["blue", "white"],
    },
    topRightColor: {
      name: "Top right color",
      control: "select",
      options: ["white"],
    },
    bottomColor: {
      name: "Bottom color",
      control: "select",
      options: ["white"],
    },
    topBg: {
      name: "Top background",
      control: "select",
      options: ["blue", "gray", "black", "light-gray"],
    },
    bottomBg: {
      name: "Bottom background",
      control: "select",
      options: ["blue", "gray", "black", "light-gray"],
    },
    flexCol: {
      name: "Flex column", 
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

export const SmallOneLine = {
  args: {
    flexCol: "false",
    show: "false",
    bottomBg: "light-gray",
    showAddress: "false",
    bottomBorderT: "false",
  },
};

export const SmallMultiLine = {
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

export const LargeBottomBorder = {
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

export const LargeBottomBorder2 = {
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

export const LargeBottomBorderGap = {
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

export const LargeBottomBorderGap2 = {
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

export const LargeNoBottomBorder = {
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

export const LargeNoBottomBorder2 = {
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
