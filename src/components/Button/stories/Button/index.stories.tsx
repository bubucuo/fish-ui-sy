import { Meta } from "@storybook/react";
import { Button } from "@fluentui/react-components";
// import descriptionMd from './ButtonDescription.md';
// import bestPracticesMd from './ButtonBestPractices.md';

export { Default } from "./ButtonDefault.example";
export { Shape } from "./ButtonShape.example";
export { Appearance } from "./ButtonAppearance.example";
export { Icon } from "./ButtonIcon.example";
export { Size } from "./ButtonSize.example";
export { Disabled } from "./ButtonDisabled.example";
export { WithLongText } from "./ButtonWithLongText.example";

export default {
  title: "组件/Button/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        // component: [descriptionMd, bestPracticesMd].join('\n'),
      },
    },
  },
} as Meta;
