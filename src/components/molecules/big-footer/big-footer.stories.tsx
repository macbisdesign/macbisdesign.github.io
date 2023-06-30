export default {
  title: "Components/Big footer",
  tags: ["autodocs"],
  render(args) {
    return `
    <big-footer 
      top-left-color="${args.topLeftColor}"
      top-right-color="${args.topRightColor}"
      show-inspect="${args.showInspect}"
      top-bg="${args.topBg}"
      bottom-bg="${args.bottomBg}"
      has-borders="${args.hasBorders}"
      sitemap="${args.sitemap}"
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
    showInspect: {
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
    hasBorders: {
      control: {
        type: "boolean",
      },
    },
    sitemap: {
      control: {
        type: "boolean",
      },
    },
  },
};

export const bigFooter1 = {
  args: {
    sitemap: "true",
    hasBorders: "true",
    showInspect: "false",
  },
};

export const bigFooter2 = {
  args: {
    topBg: "blue",
    bottomBg: "blue",
    topLeftColor: "white",
    topRightColor: "white",
    bottomColor: "white",
    showInspect: "false",
    hasBorders: "false",
    sitemap: "false",
  },
};

export const bigFooter3 = {
  args: {
    topBg: "gray",
    bottomBg: "gray",
    topLeftColor: "white",
    topRightColor: "white",
    bottomColor: "white",
    showInspect: "false",
    hasBorders: "false",
    sitemap: "false",
  },
};

export const bigFooter4 = {
  args: {
    topBg: "light-gray",
    bottomBg: "light-gray",
    showInspect: "true",
    hasBorders: "false",
    sitemap: "false",
  },
};

export const bigFooter5 = {
  args: {
    topBg: "black",
    topLeftColor: "white",
    topRightColor: "white",
    bottomColor: "white",
    bottomBg: "black",
    showInspect: "false",
    hasBorders: "false",
    sitemap: "false",
  },
};
