export default {
  title: "Components/Banner",
  component: "banner-component",
  tags: ["autodocs"],
  render(args) {
    return `
    <banner-component 
      headline="${args.headline}"
      action="${args.action}"
    />
    `;
  },
  argTypes: {
    headline: { control: "text" },
    action: { control: "text" },
  },
  parameters: {
    componentSubtitle: "When to use the banner component",
    docs: {
      description: {
        component:
          "To identify as an official government site - most government sites should use the banner.",
      },
    },
  },
};

export const Banner = {
  args: {
    headline: "An official website of the United States government",
    action: "Here's how you know",
  },
};
