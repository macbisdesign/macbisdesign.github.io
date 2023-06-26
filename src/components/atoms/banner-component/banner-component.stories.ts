export default {
  title: "Components/Banner",
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
};

export const Banner = {
  args: {
    headline: "An official website of the United States government",
    action: "Here's how you know",
  },
};
