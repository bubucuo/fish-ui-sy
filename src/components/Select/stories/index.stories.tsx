/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Select } from "fish-ui-sy";

import Default from "./SelectDefault.stories";
import Appearance from "./SelectAppearance.stories";
import Controlled from "./SelectControlled.stories";
import Disabled from "./SelectDisabled.stories";
import InitialValue from "./SelectInitialValue.stories";
import Size from "./SelectSize.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./SelectDefault.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import AppearanceSource from "./SelectAppearance.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import ControlledSource from "./SelectControlled.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import DisabledSource from "./SelectDisabled.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import InitialValueSource from "./SelectInitialValue.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import SizeSource from "./SelectSize.stories.tsx?raw";

const meta: Meta = {
  title: "组件/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          "A Select allows one option to be selected from multiple options. The Select component is a wrapper around the native `select` element.",
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
    source: {
      code: AppearanceSource,
    },
    description: {
      story:
        `Select can have different appearances.\n` +
        `The colors adjacent to the input should have a sufficient contrast. Particularly, the color of input with
    filled darker and lighter styles needs to provide greater than 3 to 1 contrast ratio against the immediate
    surrounding color to pass accessibility requirements.`,
    },
  },
};

(Controlled as any).parameters = {
  docs: {
    source: {
      code: ControlledSource,
    },
    description: {
      story:
        "The value of a Select can be controlled by updating the `selected` prop on `option` elements.",
    },
  },
};

(Disabled as any).parameters = {
  docs: {
    source: {
      code: DisabledSource,
    },
    description: {
      story: "A Select can be disabled through the native `disabled` prop",
    },
  },
};

(InitialValue as any).parameters = {
  docs: {
    source: {
      code: InitialValueSource,
    },
    description: {
      story:
        "A Select can have an initial value set through the native `value` prop",
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
        "A Select's size can be set to `small`, `medium` (default), or `large`.",
    },
  },
};

export { Default, Appearance, Controlled, Disabled, InitialValue, Size };
