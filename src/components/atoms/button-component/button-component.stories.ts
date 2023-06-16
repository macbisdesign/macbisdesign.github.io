import filledLargeButtons from './utils/filledLargeButtons';
import outlinedLargeButtons from './utils/outlinedLargeButtons';
import linkLargeButtons from './utils/linkLargeButtons';
import filledMediumButtons from './utils/filledMediumButtons';
import outlinedMediumButtons from './utils/outlinedMediumButtons';
import linkMediumButtons from './utils/linkMediumButtons';
import filledSmallButtons from './utils/filledSmallButtons';
import outlinedSmallButtons from './utils/outlinedSmallButtons';
import linkSmallButtons from './utils/linkSmallButtons';
import iconButtons from './utils/iconButtons';

interface Button {
  size: 'small' | 'medium' | 'large';
  label: string;
  type: 'success' | 'error' | 'inverse' | 'base';
  state: 'filled' | 'hover' | 'active' | 'focus' | 'default';
  iconPosition?: 'left' | 'right';
  }

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
            group => `
            <div style="flex: 1;">
              ${group
                .map(
                  button => `
                  <button-component size="${button.size}" label="${button.label}" type="${button.type}" state="${button.state}" icon-position="${
                    button.iconPosition ? button.iconPosition : ''
                  }"></button-component>
                  `,
                )
                .join('')}
            </div>
          `,
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
};
