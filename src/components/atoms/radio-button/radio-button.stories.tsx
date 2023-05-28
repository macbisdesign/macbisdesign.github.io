export default {
  title: 'Components/Radio Button',
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

const Template = args => `<radio-button checked=${args.checked} disabled=${args.disabled}>${args.children}</radio-button>`;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  checked: false,
  children: 'Radio button',
};
