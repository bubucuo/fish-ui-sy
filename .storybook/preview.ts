import type { Preview } from "@storybook/react";
import { withLinks } from "@storybook/addon-links";

export const decorators = [withLinks];

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    viewMode: "docs",
    controls: {
      disable: true,
      expanded: true,
    },

    exportToSandbox: {
      provider: "stackblitz-cloud",
      bundler: "vite",
      requiredDependencies: {
        // for React
        react: "^18",
        "react-dom": "^18",
        // necessary for FluentProvider:
        "fish-ui": "^1.0.0",
      },
    },

    hideEmpty: true,
  },
};

export default preview;
