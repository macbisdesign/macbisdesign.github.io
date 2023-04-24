export default {
  title: 'Components/Button',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'inverse', 'base'],
    },
    label: { control: 'text' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = ({...args}) => `
${args.buttons.map(button => {
    return `
    <button-component size="${button.size}" label="${button.label}" type="${button.type}"></button-component>
    <hr />
    `;
}).join('')}
`;

const button1 = {
  size: 'large',
  label: 'Button',
  type: 'success',
};

const button2 = {
  size: 'large',
  label: 'Button',
  type: 'error',
};

const button3 = {
  size: 'large',
  label: 'Button',
  type: 'inverse',
};

const button4= {
  size: 'large',
  label: 'Button',
  type: 'base',
};

const button5 = {
  size: 'large',
  label: 'Button',
  type: 'link',
};

const button6 = {
  size: 'large',
  label: 'Button',
  type: 'outline',
};

const button7 = {
  size: 'extralarge',
  label: 'Button',
  type: 'base',
};

export const Buttons = Template.bind({});
Buttons.args = {
    buttons: [button1, button2, button3, button4, button5, button6, button7]
};
