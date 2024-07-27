import React from "react";
import type { Preview } from "@storybook/react";
import { withLinks } from "@storybook/addon-links";
import { FishProvider } from "../src/components/FishProvider/FishProvider";
import { webLightTheme } from "../src/tokens/themes/web/lightTheme";
import { FishDocsContainer } from "../docs/src/FishDocsContainer.doc";
import { FishDocsPage } from "../docs/src/FishDocsPage.doc";

// export const decorators = [withLinks];

export const decorators = [
  (Story) => (
    <div
      style={{
        backgroundColor: "rgb(250, 250, 250)",
        padding: "48px 24px 48px 24px",
      }}
    >
      <Story />
    </div>
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

    // docs

    docs: {
      container: FishDocsContainer,
      page: FishDocsPage,
    },
  },
};

export default preview;
