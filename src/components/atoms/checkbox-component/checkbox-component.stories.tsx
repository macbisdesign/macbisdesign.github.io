export default {
  title: "Components/Checkbox",
  component: "checkbox-component",
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
      name: "Disabled",
      control: "boolean",
    },
    checked: {
      name: "Checked",
      control: "boolean",
    },
    label: {
      name: "Label",
      control: "text",
    },
  },
  args: {
    disabled: false,
  },
  parameters: {
    componentSubtitle: "When to use the checkbox component",
    docs: {
      description: {
        component: `To display multiple answers - when a user can select any number of choices from a list. To allow users to toggle answers - when a user needs to acknowledge acceptance of something (like terms of service) or switch between two opposite states, such as unchecked = “no” and checked = “yes.”`,
      },
    },
  },
};

export const Checked = {
  args: {
    checked: true,
    label: "Agree to private policy",
  },
};

export const Unchecked = {
  args: {
    checked: false,
    label: "Agree to private policy",
  },
};
