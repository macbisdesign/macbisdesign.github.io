export default {
  title: 'Components/Banner',
  argTypes: {
    bannerTitle: { control: 'text' },
    bannerAction: { control: 'text' },
    bannerDomain: {
      control: { type: 'select' },
      options: ['gov', 'mil'],
    },
    bannerLang: {
      control: { type: 'select' },
      options: ['english', 'spanish'],
    },
  },
};

const Template = ({ ...args }) => `
${args.banners
  .map(banner => {
    return `
    <banner-component banner-title="${banner.bannerTitle}" banner-action="${banner.bannerAction}" banner-domain="${banner.bannerDomain}" banner-lang="${banner.bannerLang}"></banner-component>
    <hr />
    `;
  })
  .join('')}
`;

const banner1 = {
  bannerTitle: 'An official website of the United States government',
  bannerAction: "Here's how you know",
  bannerDomain: 'gov',
  bannerLang: 'english',
};

const banner2 = {
  bannerTitle: 'An official website of the United States government',
  bannerAction: "Here's how you know",
  bannerDomain: 'mil',
  bannerLang: 'english',
};

const banner3 = {
  bannerTitle: 'Un sitio oficial del Gobierno de Estados Unidos',
  bannerAction: 'Así es como usted puede verificarlo',
  bannerDomain: 'gov',
  bannerLang: 'spanish',
};

const banner4 = {
  bannerTitle: 'Un sitio oficial del Gobierno de Estados Unidos',
  bannerAction: 'Así es como usted puede verificarlo',
  bannerDomain: 'mil',
  bannerLang: 'spanish',
};

const banner5 = {
  bannerTitle: 'Testing the banner',
  bannerAction: 'Así es como usted puede verificarlo',
  bannerDomain: 'mil',
  bannerLang: 'spanish',
};

export const Banners = Template.bind({});
Banners.args = {
  banners: [banner1, banner2, banner3, banner4, banner5],
};
