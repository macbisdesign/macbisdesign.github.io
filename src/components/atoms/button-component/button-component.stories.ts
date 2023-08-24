export default {
  title: "Components/Button",
  component: "button-component",
  tags: ["autodocs"],
  render(args) {
    return `
    <button-component 
      visual="${args.visual}"
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
    visual: {
      name: "Visual",
      control: {
        type: "select",
      },
      options: ["primary", "success", "secondary", "warning", "error"],
    },
    leftIcon: { name: "Left icon", control: "boolean" },
    rightIcon: { name: "Right icon", control: "boolean" },
    variant: {
      name: "Variant",
      control: { type: "select" },
      options: ["solid", "outline", "ghost"],
    },
    disabled: {
      name: "Disabled",
      control: { type: "boolean" },
    },
    size: {
      name: "Size",
      control: { type: "select" },
      options: ["sm", "base", "md"],
    },
    text: {
      name: "Name",
      control: { type: "text" },
    },
  },
  args: {
    variant: "solid",
    size: "base",
    leftIcon: false,
    rightIcon: false,
    disabled: false,
  },
  parameters: {
    componentSubtitle: "When to use the button component",
    docs: {
      description: {
        component:
          "Important actions - use buttons for the most important actions you want users to take on your site, such as Download, Sign up or Log out.",
      },
    },
  },
};

export const Primary = {
  args: {
    visual: "primary",
    text: "Primary",
  },
};

export const Secondary = {
  args: {
    visual: "secondary",
    text: "Secondary",
  },
};

export const Success = {
  args: {
    visual: "success",
    text: "Success",
  },
};

export const Warning = {
  args: {
    visual: "warning",
    text: "Warning",
  },
};

export const Error = {
  args: {
    visual: "error",
    text: "Success",
  },
};
