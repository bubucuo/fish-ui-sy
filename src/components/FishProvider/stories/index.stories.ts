import type { Meta } from "@storybook/react";
import { FishProvider } from "fish-ui-sy";
import Default from "./Default.stories";
// @ts-expect-error - required for ts
import DefaultSource from "./Default.stories?raw";
import Nested from "./Nested.stories";
// @ts-expect-error - required for ts
import NestedSource from "./Nested.stories?raw";

const meta = {
  title: "组件/FishProvider",
  component: FishProvider,
} satisfies Meta<typeof FishProvider>;

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Nested as any).parameters = {
  docs: {
    description: {
      story: "FishProvider可以嵌套使用。",
    },
    source: {
      code: NestedSource,
    },
  },
};

export { Default, Nested };
