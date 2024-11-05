/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Space } from "fish-ui-sy";

import Default from "./SpaceDefault.stories";
import Direction from "./SpaceDirection.stories";
import Size from "./SpaceSize.stories";
import Align from "./SpaceAlign.stories";
import Wrap from "./SpaceWrap.stories";
import Split from "./SpaceSplit.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./SpaceDefault.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import DirectionSource from "./SpaceDirection.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import SizeSource from "./SpaceSize.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import AlignSource from "./SpaceAlign.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import WrapSource from "./SpaceWrap.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import SplitSource from "./SpaceSplit.stories.tsx?raw";

const meta: Meta = {
  title: "组件/Space",
  component: Space,
  parameters: {
    docs: {
      description: {
        component: "Set components spacing.",
      },
    },
  },
};

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(Direction as any).parameters = {
  docs: {
    source: {
      code: DirectionSource,
    },
  },
};

(Size as any).parameters = {
  docs: {
    source: {
      code: SizeSource,
    },
  },
};

(Align as any).parameters = {
  docs: {
    source: {
      code: AlignSource,
    },
  },
};

(Wrap as any).parameters = {
  docs: {
    source: {
      code: WrapSource,
    },
  },
};

(Split as any).parameters = {
  docs: {
    source: {
      code: SplitSource,
    },
  },
};

export { Default, Direction, Size, Align, Wrap, Split };
