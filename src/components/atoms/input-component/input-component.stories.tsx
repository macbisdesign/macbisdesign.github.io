export default {
  title: "Components/Input",
  component: "input-component",
  tags: ["autodocs"],
  render(args) {
    return `
    <input-component
     state="${args.state}"
     disabled="${args.disabled}"
     label="${args.label}"
     type="${args.type}"
     placeholder="${args.placeholder}"
    />
    `;
  },
  argTypes: {
    state: {
      control: { type: "select" },
      options: ["success", "error"],
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    type: {
      control: {
        type: "text",
      },
    },
  },
};

export const Default = {
  args: {
    type: "text",
    placeholder: "Default",
    label: "Default",
    disabled: false,
    state: "default",
  },
};

export const Success = {
  args: {
    type: "text",
    placeholder: "Success",
    label: "Success",
    disabled: false,
    state: "success",
  },
};

export const Error = {
  args: {
    type: "text",
    placeholder: "Error",
    label: "Error",
    disabled: false,
    state: "error",
  },
};
