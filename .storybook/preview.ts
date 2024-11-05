import type { Preview } from "@storybook/react";
import { useExportToSandboxButton } from "../docs/sandbox/decorators/with-export-to-sandbox-button";
import "../docs/sandbox/styles.css";
import { withFishProvider } from "../docs/src/withFishProvider";
import { FishDocsPage } from "../docs/src/FishDocsPage.stories";
import { THEME_ID } from "../docs/theme-addon";

export const decorators = [withFishProvider, useExportToSandboxButton];

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    exportToSandbox: {
      requiredDependencies: {
        react: "^18",
        "react-dom": "^18",
      },
    },

    docs: {
      toc: {
        title: "Contents",
        //  headingSelector: "h1, h2, h3"
      },
      page: FishDocsPage,
      canvas: {
        withToolbar: false,
      },
    },
  },
};

export const initialGlobals = { [THEME_ID]: undefined }; // allow theme to be set by URL query param

export default preview;
