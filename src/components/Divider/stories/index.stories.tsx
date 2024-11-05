/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Divider } from "fish-ui-sy";
import Default from "./DividerDefault.stories";
import Vertical from "./DividerVertical.stories";
import Appearance from "./DividerAppearance.stories";
import Inset from "./DividerInset.stories";
import AlignContent from "./DividerAlignContent.stories";
import CustomStyles from "./DividerCustomStyles.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./DividerDefault.stories.tsx?raw";
// @ts-expect-error - required for ts
import VerticalSource from "./DividerVertical.stories?raw";
// @ts-expect-error - required for ts
import AppearanceSource from "./DividerAppearance.stories?raw";
// @ts-expect-error - required for ts
import InsetSource from "./DividerInset.stories?raw";
// @ts-expect-error - required for ts
import AlignContentSource from "./DividerAlignContent.stories?raw";
// @ts-expect-error - required for ts
import CustomStylesSource from "./DividerCustomStyles.stories?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(Vertical as any).parameters = {
  docs: {
    description: {
      story: "竖直分割线。",
    },
    source: {
      code: VerticalSource,
    },
  },
};

(Appearance as any).parameters = {
  docs: {
    description: {
      story:
        "appearance 可取值 `brand`, `subtle`, 或者`strong` 。" +
        "没有指定的时候,取其默认值。",
    },
    source: {
      code: AppearanceSource,
    },
  },
};

(Inset as any).parameters = {
  docs: {
    description: {
      story: "分隔线可以使其线条与容器的边缘内部对齐。",
    },
    source: {
      code: InsetSource,
    },
  },
};

(AlignContent as any).parameters = {
  docs: {
    description: {
      story:
        "与分隔线相关联的label可以在分隔线的“start”、“center”或“end”对齐。",
    },
    source: {
      code: AlignContentSource,
    },
  },
};

(CustomStyles as any).parameters = {
  docs: {
    description: {
      story: "自定义样式。",
    },
    source: {
      code: CustomStylesSource,
    },
  },
};

export default {
  title: "组件/Divider",
  component: Divider,
} as Meta;

export { Default, Vertical, Appearance, Inset, AlignContent, CustomStyles };
