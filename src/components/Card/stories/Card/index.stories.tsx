/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Card } from "fish-ui-sy";

import Default from "./CardDefault.stories";
import CardAppearance from "./CardAppearance.stories";
import CardOrientation from "./CardOrientation.stories";
import CardSize from "./CardSize.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./CardDefault.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import CardAppearanceSource from "./CardAppearance.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import CardOrientationSource from "./CardOrientation.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import CardSizeSource from "./CardSize.stories.tsx?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(CardAppearance as any).parameters = {
  docs: {
    source: {
      code: CardAppearanceSource,
    },
  },
};

(CardOrientation as any).parameters = {
  docs: {
    source: {
      code: CardOrientationSource,
    },
  },
};

(CardSize as any).parameters = {
  docs: {
    source: {
      code: CardSizeSource,
    },
  },
};

export default {
  title: "组件/Card/Card",
  component: Card,
} as Meta;

export { Default, CardOrientation, CardSize, CardAppearance };
