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
      name: "Rows",
      control: {
        type: "number",
      },
    },
    cols: {
      name: "Columns",
      control: {
        type: "number",
      },
    },
    state: {
      name: "State",
      control: {
        type: "select",
      },
      options: ["error", "success"],
    },
    disabled: {
      name: "Disabled",
      control: {
        type: "boolean",
      },
    },
    label: {
      name: "Label",
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    componentSubtitle: "When to use the text input component",
    docs: {
      description: {
        component:
          "Unpredictable or freeform responses - if you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers. Input simplicity - when using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a date picker. Pasted content - when users want to be able to paste in a response.",
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
