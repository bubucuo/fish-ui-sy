import { Label, Radio, RadioGroup } from "fish-ui-sy";

const DefaultValue = () => (
  <>
    <Label>Choose your favorite fruit:</Label>
    <RadioGroup defaultValue="pear">
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </>
);

export default DefaultValue;
