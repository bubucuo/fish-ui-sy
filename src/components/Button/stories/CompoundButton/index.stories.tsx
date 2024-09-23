/* eslint-disable @typescript-eslint/no-explicit-any */

import { Meta } from "@storybook/react";
import { CompoundButton } from "fish-ui-sy";

import Default from "./CompoundButtonDefault.stories";
import Shape from "./CompoundButtonShape.stories";
import Appearance from "./CompoundButtonAppearance.stories";
import Icon from "./CompoundButtonIcon.stories";
import Size from "./CompoundButtonSize.stories";
import Disabled from "./CompoundButtonDisabled.stories";
import WithLongText from "./CompoundButtonWithLongText.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./CompoundButtonDefault.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import ShapeSource from "./CompoundButtonShape.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import AppearanceSource from "./CompoundButtonAppearance.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import IconSource from "./CompoundButtonIcon.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import SizeSource from "./CompoundButtonSize.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import DisabledSource from "./CompoundButtonDisabled.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import WithLongTextSource from "./CompoundButtonWithLongText.stories.tsx?raw";

const meta: Meta = {
  title: "组件/Button/CompoundButton",
  component: CompoundButton,
  parameters: {
    docs: {
      description: {
        component:
          "A compound button is a button with an additional slot for secondary textual content.\nSince both primary and secondary textual contents are part of a compound button's name they should be kept concise.",
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
    description: {
      story: "A compound button can be rounded, circular, or square.",
    },
  },
};

(Appearance as any).parameters = {
  docs: {
    source: {
      code: AppearanceSource,
    },

    description: {
      story:
        "The CompoundButton has an `icon` slot that, if specified, renders an icon either `before` " +
        "or `after` the children, as specified by the `iconPosition` prop.",
    },
  },
};

(Icon as any).parameters = {
  docs: {
    source: {
      code: IconSource,
    },

    description: {
      story:
        "A compound button supports `small`, `medium` and `large` size. Default size is `medium`.",
    },
  },
};

(Size as any).parameters = {
  docs: {
    source: {
      code: SizeSource,
    },
    description: {
      story:
        "A compound button supports `small`, `medium` and `large` size. Default size is `medium`.",
    },
  },
};

(Disabled as any).parameters = {
  docs: {
    source: {
      code: DisabledSource,
    },
    description: {
      story: `A compound button can be \`disabled\` or \`disabledFocusable\`.
              \`disabledFocusable\` is used in scenarios where it is important to keep a consistent tab order
              for screen reader and keyboard users. The primary example of this pattern is when
              the disabled compound button is in a menu or a commandbar and is seldom used for standalone buttons.`,
    },
  },
};

(WithLongText as any).parameters = {
  docs: {
    source: {
      code: WithLongTextSource,
    },
    description: {
      story: "Text wraps after it hits the max width of the component.",
    },
  },
};

export { Default, Shape, Appearance, Icon, Size, Disabled, WithLongText };
