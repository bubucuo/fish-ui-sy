/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Portal } from "fish-ui-sy";

import Default from "./PortalDefault.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./PortalDefault.stories.tsx?raw";

const meta: Meta = {
  title: "组件/Portal/Portal",
  component: Portal,
  parameters: {
    docs: {
      description: {
        component:
          "A portal renders content outside of a DOM tree, at the end of the document.",
      },
    },
  },
};

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export { Default };
