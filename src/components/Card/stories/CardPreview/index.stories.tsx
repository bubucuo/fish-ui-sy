/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { CardPreview } from "fish-ui-sy";

import Default from "./CardPreviewDefault.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./CardPreviewDefault.stories.tsx?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export default {
  title: "组件/Card/CardPreview",
  component: CardPreview,
} as Meta;

export { Default };
