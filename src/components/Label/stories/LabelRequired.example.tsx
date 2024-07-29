import { Label } from "fish-ui-sy";

export const Required = () => (
  <>
    <Label required>Required label</Label>
    <Label required="***">Required label</Label>
  </>
);

Required.parameters = {
  docs: {
    description: {
      story:
        "A Label can display a required asterisk or a custom required indicator. This custom required indicator can" +
        "be a custom string or jsx content.",
    },
  },
};
