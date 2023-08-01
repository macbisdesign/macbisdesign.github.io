export default {
  title: "Components/Radio Button",
  component: "radio-button",
  tags: ["autodocs"],
  render: (args) => {
    return `
    <radio-button
      checked="${args.checked}"
      disabled="${args.disabled}"
      label="${args.label}"
    />
    `;
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    checked: {
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
  parameters: {
    componentSubtitle: "When to use the radio buttons component",
    docs: {
      description: {
        component:
          "To display a single selection - when users need to select only one option from a set of mutually exclusive choices.",
      },
    },
  },
};

export const Checked = {
  args: {
    disabled: false,
    checked: true,
    label: "Checked",
  },
};

export const Unchecked = {
  args: {
    disabled: false,
    checked: false,
    label: "Unchecked",
  },
};
