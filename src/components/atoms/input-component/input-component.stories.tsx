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
     required="${args.required}"
     help-text="${args.helpText}"
    />
    `;
  },
  argTypes: {
    state: {
      control: "select",
      options: ["success", "error", "default"],
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
    label: {
      control: "text",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "tel"],
    },
    required: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
    required: false,
    helpText: "",
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
    type: "text",
    placeholder: "Default",
    label: "Default",
    helpText: "Helpful text",
    state: "default",
  },
};

export const Success = {
  args: {
    type: "text",
    placeholder: "Success",
    label: "Success",
    state: "success",
  },
};

export const Error = {
  args: {
    type: "text",
    placeholder: "Error",
    label: "Error",
    state: "error",
  },
};
