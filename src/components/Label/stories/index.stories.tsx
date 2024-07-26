import * as React from "react";
import { Meta } from "@storybook/react";
import { Label } from "@/index";

// import descriptionMd from "./LabelDescription.md";
export { Default } from "./LabelDefault.example";
export { Size } from "./LabelSize.example";
export { Weight } from "./LabelWeight.example";
export { Disabled } from "./LabelDisabled.example";
export { Required } from "./LabelRequired.example";

const meta: Meta = {
  title: "组件/Label",
  component: Label,
  parameters: {
    docs: {
      description: {
        // component: descriptionMd,
      },
    },
  },
  argTypes: {
    required: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
