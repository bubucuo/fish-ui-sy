import React from "react";
import { Meta } from "@storybook/react";
import { Text } from "@/index";

export { Default } from "./Default.stories";
export { Font } from "./TextFont.stories";

export default {
  title: "组件/Text",
  component: Text,
  // subcomponents: {
  //   Presets: Display,
  // },
  parameters: {
    docs: {
      description: "omg",
    },
  },
} as Meta;

// export { Default };

// export { Font };
