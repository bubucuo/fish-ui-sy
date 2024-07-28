import type { Preview } from "@storybook/react";
import { FishDocsContainer } from "../docs/src/FishDocsContainer.stories";
import { FishDocsPage } from "../docs/src/FishDocsPage.doc";

import { withFishProvider } from "../addons/react-storybook-addon/src/decorators/withFishProvider";
import { withReactStrictMode } from "../addons/react-storybook-addon/src/decorators/withReactStrictMode";
import { THEME_ID } from "../addons/react-storybook-addon/src";

// export const decorators = [withLinks];

export const decorators = [withFishProvider, withReactStrictMode];

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
      // theme: themes[0].id,
      container: FishDocsContainer,
      page: FishDocsPage,
      components: {
        // code: "omg",
      },
    },
  },
};

export const globals = { [THEME_ID]: undefined }; // allow theme to be set by URL query param

export default preview;
