import { defineCustomElements } from '../loader';
defineCustomElements();

export const parameters = {
  options: {
    storySort: {
      order: ['Overview', 'Content', ['Introduction', 'Capitalization', 'Punctuation'], 'Components'],
      hierarchyRootSeparator: /\//,
      // order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Design System', '*', 'WIP'],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

