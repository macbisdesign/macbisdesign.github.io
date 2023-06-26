export default {
  title: "Components/Radio Button",
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
