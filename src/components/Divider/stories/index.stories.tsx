import { Meta } from "@storybook/react";
import { Divider } from "fish-ui-sy";
import { Default } from "./DividerDefault.example";
import { Vertical } from "./DividerVertical.example";
import { Appearance } from "./DividerAppearance.example";
import { Inset } from "./DividerInset.example";
import { AlignContent } from "./DividerAlignContent.example";

import DefaultSource from "./DividerDefault.example?raw";
import VerticalSource from "./DividerVertical.example?raw";
import AppearanceSource from "./DividerAppearance.example?raw";
import Insetsource from "./DividerInset.example?raw";
import AlignContentSource from "./DividerAlignContent.example?raw";
import handleParameters from "@/utilities/handleParameters";

handleParameters(
  [Default, Appearance, Inset, AlignContent],
  [DefaultSource, AppearanceSource, Insetsource, AlignContentSource]
);

Vertical.parameters = {
  docs: {
    description: {
      story: "A divider can vertically separate two pieces of content.",
    },
    source: {
      code: VerticalSource,
    },
  },
};

export default {
  title: "组件/Divider",
  component: Divider,
} as Meta;

export { Default, Vertical, Appearance, Inset, AlignContent };
