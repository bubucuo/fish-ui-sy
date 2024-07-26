import { Meta } from "@storybook/react";
import { Text } from "@/index";
export { Default } from "./Default.example";
export { Presets } from "./TextPresets.example";
export { Font } from "./TextFont.example";
export { Size } from "./TextSize.example";
export { Weight } from "./TextWeight.example";
export { Italic } from "./TextItalic.example";
export { Underline } from "./TextUnderline.example";
export { StrikeThrough } from "./TextStrikeThrough.example";
export { Truncate } from "./TextTruncate.example";
export { Alignment } from "./TextAlignment.example";

export default {
  title: "组件/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component: "文本，可以帮助你统一项目中的文本样式。",
      },
    },
  },
} as Meta;
