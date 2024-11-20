/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
// import descriptionMd from "./toMountNodePropsDescription.md";

import Default from "./Default.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./Default.stories.tsx?raw";

const meta: Meta = {
  title: "组件/Portal/toMountNodeProps",
  component: null as any,
  parameters: {
    docs: {
      description: {
        // component: [descriptionMd].join("\n"),
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
