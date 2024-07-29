import { Meta } from "@storybook/react";
import { Text } from "fish-ui-sy";
import { Default } from "./Default.example";
import { Presets } from "./TextPresets.example";
import { Font } from "./TextFont.example";
import { Size } from "./TextSize.example";
import { Weight } from "./TextWeight.example";
import { Italic } from "./TextItalic.example";
import { Underline } from "./TextUnderline.example";
import { StrikeThrough } from "./TextStrikeThrough.example";
import { Truncate } from "./TextTruncate.example";
import { Alignment } from "./TextAlignment.example";

import DefaultSource from "./Default.example?raw";
import PresetsSource from "./TextPresets.example?raw";
import FontSource from "./TextFont.example?raw";
import SizeSource from "./TextSize.example?raw";
import WeightSource from "./TextWeight.example?raw";
import ItalicSource from "./TextItalic.example?raw";
import UnderlineSource from "./TextUnderline.example?raw";
import StrikeThroughSource from "./TextStrikeThrough.example?raw";
import TruncateSource from "./TextTruncate.example?raw";
import AlignmentSource from "./TextAlignment.example?raw";
import handleParameters from "@/utilities/handleParameters";

export default {
  title: "组件/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component: "文本，可以帮助你统一项目中的文本样式。",
      },
      source: {
        language: "tsx",
      },
    },
  },
} as Meta;

const arr1 = [
  Default,
  Presets,
  Font,
  Size,
  Weight,
  Italic,
  Underline,
  StrikeThrough,
  Truncate,
  Alignment,
];
handleParameters(arr1, [
  DefaultSource,
  PresetsSource,
  FontSource,
  SizeSource,
  WeightSource,
  ItalicSource,
  UnderlineSource,
  StrikeThroughSource,
  TruncateSource,
  AlignmentSource,
]);

export {
  Default,
  Presets,
  Font,
  Size,
  Weight,
  Italic,
  Underline,
  StrikeThrough,
  Truncate,
  Alignment,
};
