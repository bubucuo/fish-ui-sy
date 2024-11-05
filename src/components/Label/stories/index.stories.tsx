/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Label } from "fish-ui-sy";

import Default from "./LabelDefault.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./LabelDefault.stories.tsx?raw";

const meta: Meta = {
  title: "组件/Label",
  component: Label,
  argTypes: {
    required: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "grid",
        }}
      >
        <Story />
      </div>
    ),
  ],
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
