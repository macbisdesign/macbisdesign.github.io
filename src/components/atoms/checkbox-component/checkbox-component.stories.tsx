export default {
  title: 'Components/Checkbox',
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

const Template = args => `<checkbox-component checked=${args.checked} disabled=${args.disabled}>${args.children}</checkbox-component>`;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  checked: false,
  children: 'Checkbox',
};
