import React from "react";
import type { Preview } from "@storybook/react";
import { withLinks } from "@storybook/addon-links";
import { FishProvider } from "../src/components/FishProvider/FishProvider";
import { webLightTheme } from "../src/tokens/themes/web/lightTheme";

// export const decorators = [withLinks];

export const decorators = [
  (Story) => (
    <FishProvider theme={webLightTheme}>
      <Story />
    </FishProvider>
  ),
];

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
