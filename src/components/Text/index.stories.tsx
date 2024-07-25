import React from "react";
import { Meta } from "@storybook/react";
import { Text } from "@/index";

export { Default } from "./stories/Default.stories";
export { Font } from "./stories/TextFont.stories";

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
