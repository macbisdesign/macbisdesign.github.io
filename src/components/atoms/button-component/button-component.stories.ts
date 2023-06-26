export default {
  title: "Components/Button",
  tags: ["autodocs"],
  render(args) {
    return `
    <button-component 
      color-scheme="${args.colorScheme}"
      variant="${args.variant}"
      size="${args.size}"
      disabled="${args.disabled}"
      left-icon="${args.leftIcon}"
      right-icon="${args.rightIcon}"
    >
    ${args.text}
    </button-component>`;
  },
  argTypes: {
    colorScheme: {
      control: {
        type: "select",
      },
      options: ["blue", "green", "sky", "yellow", "red"],
    },
    leftIcon: { control: "boolean" },
    rightIcon: { control: "boolean" },
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "ghost"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "base", "md"],
    },
    text: {
      control: { type: "text" },
    },
  },
};

export const Primary = {
  args: {
    colorScheme: "blue",
    variant: "solid",
    leftIcon: false,
    rightIcon: false,
    disabled: false,
    size: "base",
    text: "Primary",
  },
};

export const Secondary = {
  args: {
    colorScheme: "sky",
    variant: "solid",
    leftIcon: false,
    rightIcon: false,
    disabled: false,
    size: "base",
    text: "Secondary",
  },
};

export const Success = {
  args: {
    colorScheme: "green",
    variant: "solid",
    leftIcon: false,
    rightIcon: false,
    disabled: false,
    size: "base",
    text: "Success",
  },
};

export const Warning = {
  args: {
    colorScheme: "yellow",
    variant: "solid",
    leftIcon: false,
    rightIcon: false,
    disabled: false,
    size: "base",
    text: "Success",
  },
};

export const Error = {
  args: {
    colorScheme: "red",
    variant: "solid",
    leftIcon: false,
    rightIcon: false,
    disabled: false,
    size: "base",
    text: "Success",
  },
};
