import type { Preview } from "@storybook/react";
import type { StoryContextForEnhancers } from "@storybook/csf";
import { FishDocsContainer } from "../docs/src/FishDocsContainer.stories";
import { FishDocsPage } from "../docs/src/FishDocsPage.doc";

import { withFishProvider } from "../addons/react-storybook-addon/src/decorators/withFishProvider";
import { withReactStrictMode } from "../addons/react-storybook-addon/src/decorators/withReactStrictMode";
import { THEME_ID } from "../addons/react-storybook-addon/src";
import { withExportToSandboxButton } from "../addons/react-storybook-addon-export-to-sandbox/src/decorators/with-export-to-sandbox-button";

import "../addons/react-storybook-addon-export-to-sandbox/src/styles.css";

// export const decorators = [withLinks];

export const decorators = [
  // withExportToSandboxButton,
  withFishProvider,
  withReactStrictMode,
];

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    viewMode: "docs",
    controls: {
      disable: true,
      expanded: true,
    },

    hideEmpty: true,

    // docs
    docs: {
      source: {
        excludeDecorators: true,
        type: "source",
      },
      // source: { code: "omg" },
      // theme: themes[0].id,
      container: FishDocsContainer,
      page: FishDocsPage,
      transformSource: (
        source: string,
        storyContext: StoryContextForEnhancers
      ) => {
        console.log(
          "%c [  ]-48",
          "font-size:13px; background:pink; color:#bf2c9f;",
          storyContext
        );
        // This config renders story source generated via `fullSource` parameter that is being added by @fluentui/babel-preset-storybook-full-source plugin, which is registered as part of this preset
        return storyContext.parameters.fullSource;
      },
    },

    exportToSandbox: {
      provider: "stackblitz-cloud",
      bundler: "vite",
      requiredDependencies: {
        // for React
        react: "^18",
        "react-dom": "^18",
        // necessary for FluentProvider:
        "fish-ui-sy": "^0.4.0",
      },
    },
  },
};

export const initialGlobals = { [THEME_ID]: undefined }; // allow theme to be set by URL query param

export default preview;
