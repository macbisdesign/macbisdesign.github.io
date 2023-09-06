export default {
  title: "Components/Banner",
  component: "banner-component",
  tags: ["autodocs"],
  render(args) {
    return `
    <banner-component 
      headline="${args.headline}"
      action="${args.action}"
      content1="${args.content1}"
      content2="${args.content2}"
      dark-mode="${args.darkMode}"
      size="${args.size}"
    />
    `;
  },
  argTypes: {
    headline: { name: "Headline", control: "text" },
    action: { name: "Action", control: "text" },
    darkMode: { name: "Dark mode", control: "boolean" },
    img: {
      table: {
        disable: true,
      },
    },
    size: {
      name: "Size",
      control: "select",
      options: ["base", "sm"],
    },
  },
  args: {
    darkMode: false,
    size: "sm",
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
    content1: "Official websites use .gov A .gov website belongs to an official government organization in the United States.",
    content2: "Secure .gov websites use HTTPSA lock (  ) or https:// means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites."
  },
};
