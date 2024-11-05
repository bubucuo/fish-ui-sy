import { Label, Radio, RadioGroup } from "fish-ui-sy";

const DisabledItem = () => (
  <>
    <Label>Choose your favorite fruit:</Label>
    <RadioGroup defaultValue="apple">
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" disabled />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </>
);

export default DisabledItem;
