export default {
  title: "Components/Select",
  component: "select-component",
  tags: ["autodocs"],
  render(args) {
    const select = document.createElement("select-component");
    select.options = args.options;
    select.label = args.label;
    select.state = args.state;
    select.disabled = args.disabled;
    select.helpText = args.helpText;
    select.required = args.required;
    return select;
  },
  argTypes: {
    label: {
      control: "text",
    },
    state: {
      control: "select",
      options: ["error", "success", "default"],
    },
    disabled: {
      control: "boolean",
    },
    helpText: {
      control: "text",
    },
    options: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    disabled: false,
    helpText: "",
    required: false,
  },
  parameters: {
    componentSubtitle: "When to use the select component",
    docs: {
      description: {
        component:
          "Use sparingly - use the select component only when a user needs to choose from about seven to 15 possible options and you have limited space to display the options.",
      },
    },
  },
};

export const Default = {
  args: {
    label: "Default",
    options: ["Select something", "Apple", "Mango", "Banana"],
    state: "default",
    helpText: "Helpful text",
  },
};

export const Success = {
  args: {
    label: "Success",
    state: "success",
    options: ["Select something", "Apple", "Mango", "Banana"],
  },
};

export const Error = {
  args: {
    label: "Error",
    state: "error",
    options: ["Select something", "Apple", "Mango", "Banana"],
  },
};
