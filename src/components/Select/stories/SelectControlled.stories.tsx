import * as React from "react";
import { Select, useId } from "fish-ui-sy";
import type { SelectProps } from "fish-ui-sy";

const Controlled = () => {
  const selectId = useId();
  const [value, setValue] = React.useState("Red");

  const onChange: SelectProps["onChange"] = (event, data) => {
    setValue(data.value);
  };

  return (
    <>
      <label htmlFor={selectId}>Color</label>
      <Select id={selectId} onChange={onChange} value={value}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
      <button onClick={() => setValue("Blue")}>Select Blue</button>
    </>
  );
};

export default Controlled;
