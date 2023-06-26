export default {
  title: "Components/Select",
  tags: ["autodocs"],
  render(args) {
    const select = document.createElement("select-component");
    select.options = args.options;
    select.label = args.label;
    select.state = args.state;
    select.disabled = args.disabled;
    return select;
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    state: {
      control: {
        type: "select",
      },
      options: ["error", "success"],
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    options: {
      control: {
        type: "array",
      },
    },
  },
};

export const Default = {
  args: {
    label: "Default",
    disabled: false,
    options: ["Select something", "Apple", "Mango", "Banana"],
    state: "default",
  },
};

export const Success = {
  args: {
    label: "Success",
    disabled: false,
    state: "success",
    options: ["Select something", "Apple", "Mango", "Banana"],
  },
};

export const Error = {
  args: {
    label: "Error",
    disabled: false,
    state: "error",
    options: ["Select something", "Apple", "Mango", "Banana"],
  },
};
