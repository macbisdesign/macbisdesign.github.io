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
     helpful-text="${args.helpfulText}"
     error="${args.error}"
     placeholder="${args.placeholder}"
    />   
    `;
  },
  argTypes: {
    rows: {
      control: "number",
    },
    cols: {
      control: "number",
    },
    state: {
      control: "select",
      options: ["error", "success"],
    },
    disabled: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
  },
  args: {
    disabled: false,
    rows: 8,
    cols: 36,
    helpfulText: "",
    error: "",
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
    label: "Default",
    state: "default",
    placeholder: "Type something",
  },
};

export const Success = {
  args: {
    label: "Success",
    state: "success",
    helpfulText: "Helpful message",
    placeholder: "Type something",
  },
};

export const Error = {
  args: {
    label: "Error",
    state: "error",
    error: "Error message",
    placeholder: "Type something",
  },
};
