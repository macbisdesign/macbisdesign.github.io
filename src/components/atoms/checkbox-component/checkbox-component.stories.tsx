export default {
  title: "Components/Checkbox",
  tags: ["autodocs"],
  render(args) {
    return `
    <checkbox-component
      checked="${args.checked}"
      disabled="${args.disabled}"
      label="${args.label}"
    />
    `;
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
  },
};

export const Checked = {
  args: {
    disabled: false,
    checked: true,
    label: "Agree to private policy",
  },
};

export const Unchecked = {
  args: {
    disabled: false,
    checked: false,
    label: "Agree to private policy",
  },
};
