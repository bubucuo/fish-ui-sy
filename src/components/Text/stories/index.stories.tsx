/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Text } from "fish-ui-sy";
import Default from "./Default.stories";
import Presets from "./TextPresets.stories";
import Font from "./TextFont.stories";
import Size from "./TextSize.stories";
import Weight from "./TextWeight.stories";
import Italic from "./TextItalic.stories";
import Underline from "./TextUnderline.stories";
import StrikeThrough from "./TextStrikeThrough.stories";
import Truncate from "./TextTruncate.stories";
import Alignment from "./TextAlignment.stories";
// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./Default.stories?raw";
/*  @ts-expect-error - required for ts*/
import PresetsSource from "./TextPresets.stories?raw";
/*  @ts-expect-error - required for ts*/
import FontSource from "./TextFont.stories?raw";
/*  @ts-expect-error - required for ts*/
import SizeSource from "./TextSize.stories?raw";
/*  @ts-expect-error - required for ts*/
import WeightSource from "./TextWeight.stories?raw";
/*  @ts-expect-error - required for ts*/
import ItalicSource from "./TextItalic.stories?raw";
/*  @ts-expect-error - required for ts*/
import UnderlineSource from "./TextUnderline.stories?raw";
/*  @ts-expect-error - required for ts*/
import StrikeThroughSource from "./TextStrikeThrough.stories?raw";
/*  @ts-expect-error - required for ts*/
import TruncateSource from "./TextTruncate.stories?raw";
/*  @ts-expect-error - required for ts*/
import AlignmentSource from "./TextAlignment.stories?raw";
import { handleParameters } from "fish-ui-sy";

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
