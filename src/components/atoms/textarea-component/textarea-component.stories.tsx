export default {
  title: "Components/Textarea",
  component: "textarea-component",
  tags: ["autodocs"],
  render(args) {
    return `
    <textarea-component
     rows="${args.rows}"
     cols="${args.cols}"
     state="${args.state}"
     disabled="${args.disabled}"
     label="${args.label}"
     error="${args.error}"
    />   
    `;
  },
  argTypes: {
    rows: {
      control: {
        type: "number",
      },
    },
    cols: {
      control: {
        type: "number",
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
    label: {
      control: {
        type: "text",
      },
    },
  },
};

export const Default = {
  args: {
    rows: 8,
    cols: 36,
    disabled: false,
    label: "Default",
    state: "default",
  },
};

export const Success = {
  args: {
    rows: 8,
    cols: 36,
    disabled: false,
    label: "Success",
    state: "success",
  },
};

export const Error = {
  args: {
    rows: 8,
    cols: 36,
    disabled: false,
    label: "Error",
    state: "error",
    error: "Helpful error message",
  },
};
