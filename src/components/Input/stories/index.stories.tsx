/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Input } from "fish-ui-sy";

import Default from "./InputDefault.stories";
import Appearance from "./InputAppearance.stories";
import ContentBeforeAfter from "./InputContentBeforeAfter.stories";
import Disabled from "./InputDisabled.stories";
import Inline from "./InputInline.stories";
import Placeholder from "./InputPlaceholder.stories";
import Size from "./InputSize.stories";
import Type from "./InputType.stories";
import Uncontrolled from "./InputUncontrolled.stories";
import Controlled from "./InputControlled.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./InputDefault.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import AppearanceSource from "./InputAppearance.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import DisabledSource from "./InputDisabled.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import ContentBeforeAfterSource from "./InputContentBeforeAfter.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import InlineSource from "./InputInline.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import PlaceholderSource from "./InputPlaceholder.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import SizeSource from "./InputSize.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import TypeSource from "./InputType.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import UncontrolledSource from "./InputUncontrolled.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import ControlledSource from "./InputControlled.stories.tsx?raw";

const meta: Meta = {
  title: "组件/Input",
  component: Input,
  argTypes: {
    contentBefore: {
      control: {
        type: "text",
      },
    },
    contentAfter: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        // component: [descriptionMd, bestPracticesMd].join("\n"),
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

(Appearance as any).parameters = {
  docs: {
    description: {
      story:
        "An input can have different appearances.\n" +
        `The colors adjacent to the input should have a sufficient contrast. Particularly, the color of input with
      filled darker and lighter styles needs to provide greater than 3 to 1 contrast ratio against the immediate
      surrounding color to pass accessibility requirements.`,
    },
    source: {
      code: AppearanceSource,
    },
  },
};

(ContentBeforeAfter as any).parameters = {
  docs: {
    description: {
      story:
        "An input can have elements such as an icon or a button before or after the entered text. " +
        "These elements are displayed inside the input border.",
    },
    source: {
      code: ContentBeforeAfterSource,
    },
  },
};

(Controlled as any).parameters = {
  docs: {
    description: {
      story:
        "An input can be controlled: the consuming component tracks the input's value in its state " +
        "and manually handles all updates.",
    },
    source: {
      code: ControlledSource,
    },
  },
};

(Inline as any).parameters = {
  docs: {
    description: {
      story: "An input can be rendered inline with text.",
    },
    source: {
      code: InlineSource,
    },
  },
};

(Disabled as any).parameters = {
  docs: {
    description: {
      story: "An input can be disabled.",
    },
    source: {
      code: DisabledSource,
    },
  },
};

(Placeholder as any).parameters = {
  docs: {
    description: {
      story:
        "An input can have placeholder text. If using the placeholder as a label (which is not " +
        "recommended for usability), be sure to provide an `aria-label` for screen reader users.",
    },
    source: {
      code: PlaceholderSource,
    },
  },
};

(Size as any).parameters = {
  docs: {
    description: {
      story: "An input can have different sizes.",
    },
    source: {
      code: SizeSource,
    },
  },
};

(Type as any).parameters = {
  docs: {
    description: {
      story:
        "An input can have a custom text-based [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types) " +
        "such as `email`, `url`, or `password` based on the type of value the user will enter.\n\n" +
        "Note that no custom styling is currently applied for alternative types, and some types may " +
        "activate browser-default styling which does not match the Fish design language.",
    },
    source: {
      code: TypeSource,
    },
  },
};

(Uncontrolled as any).parameters = {
  docs: {
    description: {
      story:
        "By default, an input is uncontrolled: it tracks all updates internally. " +
        "You can optionally provide a default value.",
    },
    source: {
      code: UncontrolledSource,
    },
  },
};

export {
  Default,
  Appearance,
  ContentBeforeAfter,
  Disabled,
  Inline,
  Placeholder,
  Size,
  Type,
  Uncontrolled,
  Controlled,
};
