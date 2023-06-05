export default {
  title: 'Components/BigFooter',
  argTypes: {
    topLeftColor: {
      control: { type: 'text' },
      options: ['blue', 'white'],
    },
    topRightColor: {
      control: {
        type: 'text',
      },
      options: ['white'],
    },
    bottomColor: {
      control: { type: 'text' },
      options: ['white'],
    },
    showInspect: {
      control: { type: 'boolean' },
    },
    topBg: {
      control: {
        type: 'text',
      },
      options: ['blue', 'gray', 'light-gray', 'black'],
    },
    bottomBg: {
      control: {
        type: 'text',
      },
      options: ['blue', 'gray', 'light-gray', 'black'],
    },
    hasBorders: {
      control: {
        type: 'boolean',
      },
    },
    sitemap: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ ...args }) => `
${args.headers
  .map(header => {
    return `
    <big-footer 
    top-left-color=${header.topLeftColor}
    top-right-color=${header.topRightColor}
    show-inspect=${header.showInspect}
    top-bg=${header.topBg}
    bottom-bg=${header.bottomBg}
    has-borders=${header.hasBorders}
    sitemap=${header.sitemap}
    bottom-color=${header.bottomColor}
    >
    </big-footer>
    <hr />
    `;
  })
  .join('')}
`;

const bigFooter1 = {
  sitemap: 'true',
  hasBorders: 'true',
  showInspect: 'false',
};

const bigFooter2 = {
  topBg: 'blue',
  bottomBg: 'blue',
  topLeftColor: 'white',
  topRightColor: 'white',
  bottomColor: 'white',
  showInspect: 'false',
  hasBorders: 'false',
  sitemap: 'false',
};

const bigFooter3 = {
  topBg: 'gray',
  bottomBg: 'gray',
  topLeftColor: 'white',
  topRightColor: 'white',
  bottomColor: 'white',
  showInspect: 'false',
  hasBorders: 'false',
  sitemap: 'false',
};

const bigFooter4 = {
  topBg: 'light-gray',
  bottomBg: 'light-gray',
  showInspect: 'true',
  hasBorders: 'false',
  sitemap: 'false',
};

const bigFooter5 = {
  topBg: 'black',
  topLeftColor: 'white',
  topRightColor: 'white',
  bottomColor: 'white',
  bottomBg: 'black',
  showInspect: 'false',
  hasBorders: 'false',
  sitemap: 'false',
};

export const FirstFooter = Template.bind({});
FirstFooter.args = {
  headers: [bigFooter1],
};

export const SecondFooter = Template.bind({});
SecondFooter.args = {
  headers: [bigFooter2],
};

export const ThirdFooter = Template.bind({});
ThirdFooter.args = {
  headers: [bigFooter3],
};

export const FourFooter = Template.bind({});
FourFooter.args = {
  headers: [bigFooter4],
};

export const FifthFooter = Template.bind({});
FifthFooter.args = {
  headers: [bigFooter5],
};
