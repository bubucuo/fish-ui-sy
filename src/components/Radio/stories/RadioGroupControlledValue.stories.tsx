import * as React from "react";
import { Label, Radio, RadioGroup, Button } from "fish-ui-sy";

const ControlledValue = () => {
  const [value, setValue] = React.useState("banana");
  return (
    <>
      <Label>Choose your favorite fruit:</Label>
      <RadioGroup value={value} onChange={(_, data) => setValue(data.value)}>
        <Radio value="apple" label="Apple" />
        <Radio value="pear" label="Pear" />
        <Radio value="banana" label="Banana" />
        <Radio value="orange" label="Orange" />
      </RadioGroup>
      <Button disabled={!value} onClick={() => setValue("")}>
        Clear selection
      </Button>
    </>
  );
};

export default ControlledValue;
