/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { CardFooter } from "fish-ui-sy";

import Default from "./CardFooterDefault.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./CardFooterDefault.stories.tsx?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export default {
  title: "组件/Card/CardFooter",
  component: CardFooter,
} as Meta;

export { Default };
