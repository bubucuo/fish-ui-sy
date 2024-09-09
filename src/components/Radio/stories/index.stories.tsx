/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { RadioGroup, Radio } from "fish-ui-sy";

import Default from "./RadioGroupDefault.stories";
import Horizontal from "./RadioGroupHorizontal.stories";
import HorizontalStacked from "./RadioGroupHorizontalStacked.stories";
import DefaultValue from "./RadioGroupDefaultValue.stories";
import ControlledValue from "./RadioGroupControlledValue.stories";
// import Required from "./RadioGroupRequired.stories";
import Disabled from "./RadioGroupDisabled.stories";
import DisabledItem from "./RadioGroupDisabledItem.stories";
import LabelSubtext from "./RadioGroupLabelSubtext.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./RadioGroupDefault.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import HorizontalSource from "./RadioGroupHorizontal.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import HorizontalStackedSource from "./RadioGroupHorizontalStacked.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import DefaultValueSource from "./RadioGroupDefaultValue.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import ControlledValueSource from "./RadioGroupControlledValue.stories.tsx?raw";
// /*  @ts-expect-error - required for ts*/
// import RequiredSource from "./RadioGroupRequired.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import DisabledSource from "./RadioGroupDisabled.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import DisabledItemSource from "./RadioGroupDisabledItem.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import LabelSubtextSource from "./RadioGroupLabelSubtext.stories.tsx?raw";

const meta: Meta = {
  title: "组件/RadioGroup",
  component: RadioGroup,
  subcomponents: { Radio } as any,
  parameters: {
    docs: {
      description: {
        component:
          "RadioGroup lets people select a single option from two or more Radio items. Use RadioGroup to present all available choices if there's enough space. For more than 5 choices, consider using a different component such as Dropdown.",
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

(Horizontal as any).parameters = {
  docs: {
    description: {
      story:
        "The `horizontal` layout places each radio item in a row, with labels after the radio indicator.",
    },
    source: {
      code: HorizontalSource,
    },
  },
};

(HorizontalStacked as any).parameters = {
  docs: {
    description: {
      story:
        "The `horizontal-stacked` layout places each radio item in a row, with labels below the radio indicator.",
    },
    source: {
      code: HorizontalStackedSource,
    },
  },
};

(DefaultValue as any).parameters = {
  docs: {
    description: {
      story:
        "The initially selected item can be set by setting the `defaultValue` of RadioGroup. " +
        "Alternatively, one Radio item can have `defaultChecked` set. " +
        "Both methods have the same effect, but only one should be used in a given RadioGroup.",
    },
    source: {
      code: DefaultValueSource,
    },
  },
};

(ControlledValue as any).parameters = {
  docs: {
    description: {
      story:
        "The selected radio item can be controlled using the `value` and `onChange` props.",
    },
    source: {
      code: ControlledValueSource,
    },
  },
};

// (Required as any).parameters = {
//   docs: {
//     source: {
//       code: RequiredSource,
//     },
//   },
// };

(Disabled as any).parameters = {
  docs: {
    description: {
      story:
        "RadioGroup can be disabled, which disables all Radio items inside.",
    },
    source: {
      code: DisabledSource,
    },
  },
};

(DisabledItem as any).parameters = {
  docs: {
    description: {
      story: "Radio items can be disabled individually.",
    },
    source: {
      code: DisabledItemSource,
    },
  },
};

(LabelSubtext as any).parameters = {
  docs: {
    description: {
      story:
        "Radio's label supports any formatted text. In this example, smaller text is below the main label text.",
    },
    source: {
      code: LabelSubtextSource,
    },
  },
};

export {
  Default,
  Horizontal,
  HorizontalStacked,
  DefaultValue,
  ControlledValue,
  Disabled,
  DisabledItem,
  LabelSubtext,
};
