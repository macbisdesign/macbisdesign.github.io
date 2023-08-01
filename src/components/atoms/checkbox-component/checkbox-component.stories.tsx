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
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
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
