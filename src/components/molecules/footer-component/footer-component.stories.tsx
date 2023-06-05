export default {
  title: 'Components/Footer',
  argTypes: {
    hasBorders: {
      control: { type: 'boolean' },
    },
    filled: {
      control: { type: 'boolean' },
    },
    flexCol: {
      control: { type: 'boolean' },
    },
    showInspect: {
      control: { type: 'boolean' },
    },
    showAbovePart: {
      control: { type: 'boolean' },
    },
    showAddress: {
      control: { type: 'boolean' },
    },
    hasBorder: {
      control: { type: 'boolean' },
    },
    topLeftColor: {
      control: { type: 'text' },
      options: ['blue', 'white'],
    },
    topRightColor: {
      control: { type: 'text' },
      options: ['white'],
    },
    bottomColor: {
      control: {
        type: 'text',
      },
      options: ['white'],
    },
    topBg: {
      control: {
        type: 'text',
      },
      options: ['blue', 'gray', 'black', 'light-gray'],
    },
    bottomBg: {
      control: {
        type: 'text',
      },
      options: ['blue', 'gray', 'black', 'light-gray'],
    },
  },
};

const Template = ({ ...args }) => `
${args.headers
  .map(header => {
    return `
    <footer-component 
    has-borders=${header.hasBorders}
    filled=${header.filled}
    flex-col=${header.flexCol}
    show-inspect=${header.showInspect}
    show-address=${header.showAddress}
    has-border=${header.hasBorder}
    top-left-color=${header.topLeftColor}
    top-right-color=${header.topRightColor}
    bottom-color=${header.bottomColor}
    top-bg=${header.topBg}
    bottom-bg=${header.bottomBg}
    show-above-part=${header.showAbovePart}
    >
    </footer-component>
    <hr />
    `;
  })
  .join('')}
`;

const footer1 = {
  hasBorders: 'true',
  filled: 'false',
  flexCol: 'false',
  showInspect: 'false',
  showAbovePart: 'false',
  showAddress: 'false',
  hasBorder: 'false',
  topLeftColor: 'blue',
};

const footer2 = {
  bottomBg: 'light-gray',
  hasBorders: 'false',
  filled: 'false',
  flexCol: 'false',
  showInspect: 'false',
  showAbovePart: 'false',
  showAddress: 'false',
  hasBorder: 'false',
  topLeftColor: 'blue',
};

const footer3 = {
  flexCol: 'true',
  bottomBg: 'light-gray',
  hasBorders: 'false',
  filled: 'false',
  showInspect: 'false',
  showAbovePart: 'false',
  showAddress: 'false',
  hasBorder: 'false',
  topLeftColor: 'blue',
};

const footer4 = {
  bottomBg: 'light-gray',
  showInspect: 'true',
  hasBorders: 'false',
  flexCol: 'false',
  filled: 'false',
  showAbovePart: 'false',
  showAddress: 'false',
  hasBorder: 'false',
  topLeftColor: 'blue',
};

const footer5 = {
  showAbovePart: 'false',
  showAddress: 'true',
  bottomBg: 'light-gray',
  showInspect: 'false',
  hasBorders: 'false',
  flexCol: 'false',
  filled: 'false',
  hasBorder: 'false',
  topLeftColor: 'blue',
};

const footer6 = {
  showAbovePart: 'false',
  hasBorder: 'true',
  showAddress: 'false',
  showInspect: 'false',
  hasBorders: 'false',
  flexCol: 'false',
  filled: 'false',
  topLeftColor: 'blue',
};

const footer7 = {
  showAbovePart: 'false',
  hasBorder: 'true',
  showAddress: 'true',
  showInspect: 'false',
  hasBorders: 'false',
  flexCol: 'false',
  filled: 'false',
  topLeftColor: 'blue',
};

const footer8 = {
  hasBorders: 'true',
  bottomBg: 'light-gray',
  topLeftColor: 'blue',
  filled: 'false',
  flexCol: 'false',
  showInspect: 'false',
  showAbovePart: 'true',
  showAddress: 'false',
  hasBorder: 'false',
};

const footer9 = {
  hasBorders: 'true',
  bottomBg: 'blue',
  bottomColor: 'white',
  topLeftColor: 'blue',
  filled: 'false',
  flexCol: 'false',
  showInspect: 'false',
  showAbovePart: 'true',
  showAddress: 'false',
  hasBorder: 'false',
};

const footer10 = {
  hasBorders: 'true',
  bottomBg: 'blue',
  bottomColor: 'white',
  filled: 'false',
  flexCol: 'false',
  showInspect: 'false',
  showAbovePart: 'true',
  showAddress: 'false',
  hasBorder: 'false',
  topBg: 'blue',
  topLeftColor: 'white',
  topRightColor: 'white',
};

const footer11 = {
  hasBorders: 'true',
  bottomBg: 'gray',
  bottomColor: 'white',
  filled: 'false',
  flexCol: 'false',
  showInspect: 'false',
  showAbovePart: 'true',
  showAddress: 'false',
  hasBorder: 'false',
  topBg: 'gray',
  topLeftColor: 'white',
  topRightColor: 'white',
};

const footer12 = {
  topBg: 'light-gray',
  bottomBg: 'light-gray',
  showInspect: 'true',
  hasBorders: 'false',
  filled: 'false',
  flexCol: 'false',
  showAbovePart: 'true',
  hasBorder: 'false',
  showAddress: 'false',
};

const footer13 = {
  topLeftColor: 'white',
  topRightColor: 'white',
  bottomColor: 'white',
  topBg: 'black',
  bottomBg: 'black',
  hasBorders: 'false',
  filled: 'false',
  flexCol: 'false',
  showInspect: 'false',
  showAbovePart: 'true',
  showAddress: 'false',
  hasBorder: 'false',
};

export const FirstFooter = Template.bind({});
FirstFooter.args = {
  headers: [footer1],
};

export const SecondFooter = Template.bind({});
SecondFooter.args = {
  headers: [footer2],
};

export const ThirdFooter = Template.bind({});
ThirdFooter.args = {
  headers: [footer3],
};

export const FourFooter = Template.bind({});
FourFooter.args = {
  headers: [footer4],
};

export const FiveFooter = Template.bind({});
FiveFooter.args = {
  headers: [footer5],
};

export const SixthFooter = Template.bind({});
SixthFooter.args = {
  headers: [footer6],
};

export const SeventhFooter = Template.bind({});
SeventhFooter.args = {
  headers: [footer7],
};

export const EighthFooter = Template.bind({});
EighthFooter.args = {
  headers: [footer8],
};

export const NinthFooter = Template.bind({});
NinthFooter.args = {
  headers: [footer9],
};

export const TenthFooter = Template.bind({});
TenthFooter.args = {
  headers: [footer10],
};

export const EleventhFooter = Template.bind({});
EleventhFooter.args = {
  headers: [footer11],
};

export const TwelfthFooter = Template.bind({});
TwelfthFooter.args = {
  headers: [footer12],
};

export const ThirteenFooter = Template.bind({});
ThirteenFooter.args = {
  headers: [footer13],
};
