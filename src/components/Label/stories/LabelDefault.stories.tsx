import { Label } from "fish-ui-sy";
import type { LabelProps } from "fish-ui-sy";

const Default = (props: LabelProps) => {
  return (
    <>
      <Label {...props}>This is a label</Label>
      <Label required>This is a required label</Label>
      <Label required="***">This is a custom required label</Label>
      <Label required={<span>&</span>}>This is a custom required label</Label>
      <Label disabled>This is a disabled label</Label>
      <Label size="small">This is a small label</Label>
      <Label size="medium">This is a medium label</Label>
      <Label size="large">This is a large label</Label>
      <Label weight="semibold">This is a semibold label</Label>
    </>
  );
};

export default Default;
