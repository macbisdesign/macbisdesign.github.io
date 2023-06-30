export default {
  title: "Components/Footer",
  tags: ["autodocs"],
  render(args) {
    return `
    <footer-component 
      has-borders="${args.hasBorders}"
      filled="${args.filled}"
      flex-col="${args.flexCol}"
      show-inspect="${args.showInspect}"
      show-address="${args.showAddress}"
      has-border="${args.hasBorder}"
      top-left-color="${args.topLeftColor}"
      top-right-color="${args.topRightColor}"
      bottom-color="${args.bottomColor}"
      top-bg="${args.topBg}"
      bottom-bg="${args.bottomBg}"
      show-above-part="${args.showAbovePart}"
    />
    `;
  },
  argTypes: {
    hasBorders: {
      control: { type: "boolean" },
    },
    filled: {
      control: { type: "boolean" },
    },
    flexCol: {
      control: { type: "boolean" },
    },
    showInspect: {
      control: { type: "boolean" },
    },
    showAbovePart: {
      control: { type: "boolean" },
    },
    showAddress: {
      control: { type: "boolean" },
    },
    hasBorder: {
      control: { type: "boolean" },
    },
    topLeftColor: {
      control: { type: "text" },
      options: ["blue", "white"],
    },
    topRightColor: {
      control: { type: "text" },
      options: ["white"],
    },
    bottomColor: {
      control: {
        type: "text",
      },
      options: ["white"],
    },
    topBg: {
      control: {
        type: "text",
      },
      options: ["blue", "gray", "black", "light-gray"],
    },
    bottomBg: {
      control: {
        type: "text",
      },
      options: ["blue", "gray", "black", "light-gray"],
    },
  },
};

export const footer1 = {
  args: {
    hasBorders: "true",
    filled: "false",
    flexCol: "false",
    showInspect: "false",
    showAbovePart: "false",
    showAddress: "false",
    hasBorder: "false",
    topLeftColor: "blue",
  },
};

export const footer2 = {
  args: {
    bottomBg: "light-gray",
    hasBorders: "false",
    filled: "false",
    flexCol: "false",
    showInspect: "false",
    showAbovePart: "false",
    showAddress: "false",
    hasBorder: "false",
    topLeftColor: "blue",
  },
};

export const footer3 = {
  args: {
    flexCol: "true",
    bottomBg: "light-gray",
    hasBorders: "false",
    filled: "false",
    showInspect: "false",
    showAbovePart: "false",
    showAddress: "false",
    hasBorder: "false",
    topLeftColor: "blue",
  },
};

export const footer4 = {
  args: {
    bottomBg: "light-gray",
    showInspect: "true",
    hasBorders: "false",
    flexCol: "false",
    filled: "false",
    showAbovePart: "false",
    showAddress: "false",
    hasBorder: "false",
    topLeftColor: "blue",
  },
};

export const footer5 = {
  args: {
    showAbovePart: "false",
    showAddress: "true",
    bottomBg: "light-gray",
    showInspect: "false",
    hasBorders: "false",
    flexCol: "false",
    filled: "false",
    hasBorder: "false",
    topLeftColor: "blue",
  },
};

export const footer6 = {
  args: {
    showAbovePart: "false",
    hasBorder: "true",
    showAddress: "false",
    showInspect: "false",
    hasBorders: "false",
    flexCol: "false",
    filled: "false",
    topLeftColor: "blue",
  },
};

export const footer7 = {
  args: {
    showAbovePart: "false",
    hasBorder: "true",
    showAddress: "true",
    showInspect: "false",
    hasBorders: "false",
    flexCol: "false",
    filled: "false",
    topLeftColor: "blue",
  },
};

export const footer8 = {
  args: {
    hasBorders: "true",
    bottomBg: "light-gray",
    topLeftColor: "blue",
    filled: "false",
    flexCol: "false",
    showInspect: "false",
    showAbovePart: "true",
    showAddress: "false",
    hasBorder: "false",
  },
};

export const footer9 = {
  args: {
    hasBorders: "true",
    bottomBg: "blue",
    bottomColor: "white",
    topLeftColor: "blue",
    filled: "false",
    flexCol: "false",
    showInspect: "false",
    showAbovePart: "true",
    showAddress: "false",
    hasBorder: "false",
  },
};

export const footer10 = {
  args: {
    hasBorders: "true",
    bottomBg: "blue",
    bottomColor: "white",
    filled: "false",
    flexCol: "false",
    showInspect: "false",
    showAbovePart: "true",
    showAddress: "false",
    hasBorder: "false",
    topBg: "blue",
    topLeftColor: "white",
    topRightColor: "white",
  },
};

export const footer11 = {
  args: {
    hasBorders: "true",
    bottomBg: "gray",
    bottomColor: "white",
    filled: "false",
    flexCol: "false",
    showInspect: "false",
    showAbovePart: "true",
    showAddress: "false",
    hasBorder: "false",
    topBg: "gray",
    topLeftColor: "white",
    topRightColor: "white",
  },
};

export const footer12 = {
  args: {
    topBg: "light-gray",
    bottomBg: "light-gray",
    showInspect: "true",
    hasBorders: "false",
    filled: "false",
    flexCol: "false",
    showAbovePart: "true",
    hasBorder: "false",
    showAddress: "false",
  },
};

export const footer13 = {
  args: {
    topLeftColor: "white",
    topRightColor: "white",
    bottomColor: "white",
    topBg: "black",
    bottomBg: "black",
    hasBorders: "false",
    filled: "false",
    flexCol: "false",
    showInspect: "false",
    showAbovePart: "true",
    showAddress: "false",
    hasBorder: "false",
  },
};
