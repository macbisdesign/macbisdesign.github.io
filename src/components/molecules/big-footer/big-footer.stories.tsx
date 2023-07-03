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
      control: { type: "text" },
      options: ["blue", "white"],
    },
    topRightColor: {
      control: {
        type: "text",
      },
      options: ["white"],
    },
    bottomColor: {
      control: { type: "text" },
      options: ["white"],
    },
    showIcon: {
      control: { type: "boolean" },
    },
    topBg: {
      control: {
        type: "text",
      },
      options: ["blue", "gray", "light-gray", "black"],
    },
    bottomBg: {
      control: {
        type: "text",
      },
      options: ["blue", "gray", "light-gray", "black"],
    },
    topBorderY: {
      control: {
        type: "boolean",
      },
    },
    showSitemap: {
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

export const Blue = {
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

export const Gray = {
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

export const LightGray = {
  args: {
    topBg: "light-gray",
    bottomBg: "light-gray",
    showIcon: "true",
    topBorderY: "false",
    showSitemap: "false",
  },
};

export const Black = {
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
