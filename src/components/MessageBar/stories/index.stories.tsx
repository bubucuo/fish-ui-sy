/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import {
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarGroup,
  MessageBarTitle,
} from "fish-ui-sy";

import Default from "./Default.stories";
import Actions from "./Actions.stories";
import Shape from "./Shape.stories";
import Reflow from "./Reflow.stories";
import Dismiss from "./Dismiss.stories";
import Animation from "./Animation.stories";
import ManualLayout from "./ManualLayout.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./Default.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import ActionsSource from "./Actions.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import ShapeSource from "./Shape.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import ReflowSource from "./Reflow.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import DismissSource from "./Dismiss.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import AnimationSource from "./Animation.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import ManualLayoutSource from "./ManualLayout.stories.tsx?raw";

const meta: Meta = {
  title: "组件/MessageBar",
  component: MessageBar,
  subcomponents: {
    MessageBarGroup,
    MessageBarBody,
    MessageBarTitle,
    MessageBarActions,
  } as any,
  parameters: {
    docs: {
      description: {
        component: "Add specific text or patterns to the page.",
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

(Shape as any).parameters = {
  docs: {
    source: {
      code: ShapeSource,
    },
  },
};

(Actions as any).parameters = {
  docs: {
    source: {
      code: ActionsSource,
    },
  },
};

(Dismiss as any).parameters = {
  docs: {
    source: {
      code: DismissSource,
    },
  },
};

(Animation as any).parameters = {
  docs: {
    source: {
      code: AnimationSource,
    },
  },
};

(Reflow as any).parameters = {
  docs: {
    source: {
      code: ReflowSource,
    },
  },
};

(ManualLayout as any).parameters = {
  docs: {
    source: {
      code: ManualLayoutSource,
    },
  },
};

export { Default, Shape, Actions, Dismiss, Animation, Reflow, ManualLayout };
