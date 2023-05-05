<<<<<<< HEAD
=======
import filledLargeButtons from "./utils/filledLargeButtons";
import outlinedLargeButtons from "./utils/outlinedLargeButtons";
import linkLargeButtons from "./utils/linkLargeButtons";
import filledMediumButtons from "./utils/filledMediumButtons";
import outlinedMediumButtons from "./utils/outlinedMediumButtons";
import linkMediumButtons from "./utils/linkMediumButtons";
import filledSmallButtons from "./utils/filledSmallButtons";
import outlinedSmallButtons from "./utils/outlinedSmallButtons";
import linkSmallButtons from "./utils/linkSmallButtons";
import iconButtons from "./utils/iconButtons";

>>>>>>> master
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
<<<<<<< HEAD
  },
};
//
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
=======
    state: {
        control: { type: 'select' },
        options: ['filled', 'hover', 'active', 'focus', 'default'],
    },
    iconPosition: {
        control: { type: 'select' },
        options: ['left', 'right'],
    },
  },
};

const Template = ({ ...args }) => {
    const buttonGroups = [[], [], [], [], []];
    args.buttons.forEach((button, index) => {
      buttonGroups[index % 5].push(button);
    });
  
    return `
      <div style="display: flex;">
        ${buttonGroups
          .map(
            (group) => `
            <div style="flex: 1;">
              ${group
                .map(
                  (button) => `
                  <button-component size="${button.size}" label="${button.label}" type="${button.type}" state="${button.state}" icon-position="${button.iconPosition ? button.iconPosition : ''}"></button-component>
                  `
                )
                .join('')}
            </div>
          `
          )
          .join('')}
      </div>
    `;
};

export const FilledLargeButtons = Template.bind({});
FilledLargeButtons.args = {
    buttons: filledLargeButtons,
};

export const FilledMediumButtons = Template.bind({});
FilledMediumButtons.args = {
    buttons: filledMediumButtons,
};

export const FilledSmallButtons = Template.bind({});
FilledSmallButtons.args = {
    buttons: filledSmallButtons,
};

export const OutlinedLargeButtons = Template.bind({});
OutlinedLargeButtons.args = {
    buttons: outlinedLargeButtons,
};

export const OutlinedMediumButtons = Template.bind({});
OutlinedMediumButtons.args = {
    buttons: outlinedMediumButtons,
};

export const OutlinedSmallButtons = Template.bind({});
OutlinedSmallButtons.args = {
    buttons: outlinedSmallButtons,
};

export const LinkLargeButtons = Template.bind({});
LinkLargeButtons.args = {
    buttons: linkLargeButtons,
};

export const LinkMediumButtons = Template.bind({});
LinkMediumButtons.args = {
    buttons: linkMediumButtons,
};

export const LinkSmallButtons = Template.bind({});
LinkSmallButtons.args = {
    buttons: linkSmallButtons,
};

export const ButtonsWithIcon = Template.bind({});
ButtonsWithIcon.args = {
    buttons: iconButtons,
>>>>>>> master
};
