import * as React from "react";
import { makeStyles, Input, Label, useId } from "fish-ui-sy";
import type { InputProps } from "fish-ui-sy";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    // Use 2px gap below the label (per the design system)
    gap: "2px",
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
  },
});

const Controlled = () => {
  const inputId = useId("input");
  const [value, setValue] = React.useState("initial value");
  const styles = useStyles();

  const onChange: InputProps["onChange"] = (ev, data) => {
    if (data.value.length <= 20) {
      setValue(data.value);
    }
  };

  return (
    <div className={styles.root}>
      <Label htmlFor={inputId}>
        Controlled input limiting the value to 20 characters
      </Label>
      <Input value={value} onChange={onChange} id={inputId} />
    </div>
  );
};

export default Controlled;
