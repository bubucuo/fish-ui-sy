import { Label, Radio, RadioGroup } from "fish-ui-sy";

const Disabled = () => (
  <>
    <Label>Choose your favorite fruit:</Label>
    <RadioGroup defaultValue="apple" disabled>
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </>
);

export default Disabled;
