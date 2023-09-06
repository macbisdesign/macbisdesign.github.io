export default {
  title: "Components/Big footer",
  component: "big-footer",
  tags: ["autodocs"],
  render(args) {
    return `
    <big-footer 
      top-left-color="${args.topLeftColor}"
      top-right-color="${args.topRightColor}"
      show-icon="${args.showIcon}"
      top-bg="${args.topBg}"
      bottom-bg="${args.bottomBg}"
      top-border-y="${args.topBorderY}"
      show-sitemap="${args.showSitemap}"
      bottom-color="${args.bottomColor}"
    />
    `;
  },
  argTypes: {
    topLeftColor: {
      name: "Top left color",
      control: { type: "text" },
      options: ["blue", "white"],
    },
    topRightColor: {
      name: "Top right color",
      control: {
        type: "text",
      },
      options: ["white"],
    },
    bottomColor: {
      name: "Bottom color",
      control: { type: "text" },
      options: ["white"],
    },
    showIcon: {
      name: "Show icon",
      control: { type: "boolean" },
    },
    topBg: {
      name: "Name",
      control: {
        type: "text",
      },
      options: ["blue", "gray", "light-gray", "black"],
    },
    bottomBg: {
      name: "Bottom background",
      control: {
        type: "text",
      },
      options: ["blue", "gray", "light-gray", "black"],
    },
    topBorderY: {
      name: "Top border",
      control: {
        type: "boolean",
      },
    },
    showSitemap: {
      name: "Show sitemap",
      control: {
        type: "boolean",
      },
    },
  },
  parameters: {
    componentSubtitle: "When to use the big footer component",
    docs: {
      description: {
        component: `Big footer - use the big footer when you want to replicate your site’s navigation scheme in the footer and offer newsletter signups.`,
      },
    },
  },
};

export const Simple = {
  args: {
    showSitemap: "true",
    topBorderY: "true",
    showIcon: "false",
  },
};

export const BottomThickBorder1 = {
  args: {
    topBg: "blue",
    bottomBg: "blue",
    topLeftColor: "white",
    topRightColor: "white",
    bottomColor: "white",
    showIcon: "false",
    topBorderY: "false",
    showSitemap: "false",
  },
};

export const BottomThickBorder2 = {
  args: {
    topBg: "gray",
    bottomBg: "gray",
    topLeftColor: "white",
    topRightColor: "white",
    bottomColor: "white",
    showIcon: "false",
    topBorderY: "false",
    showSitemap: "false",
  },
};

export const NoBottomBorder1 = {
  args: {
    topBg: "light-gray",
    bottomBg: "light-gray",
    showIcon: "true",
    topBorderY: "false",
    showSitemap: "false",
  },
};

export const NoBottomBorder2 = {
  args: {
    topBg: "black",
    topLeftColor: "white",
    topRightColor: "white",
    bottomColor: "white",
    bottomBg: "black",
    showIcon: "false",
    topBorderY: "false",
    showSitemap: "false",
  },
};
