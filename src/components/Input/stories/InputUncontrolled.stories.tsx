import { makeStyles, useId, Input, Label } from "fish-ui-sy";
import type { InputProps } from "fish-ui-sy";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field
    display: "flex",
    flexDirection: "column",
    // Use 2px gap below the label (per the design system)
    gap: "2px",
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
  },
});

const onChange: InputProps["onChange"] = (ev, data) => {
  // Uncontrolled inputs can be notified of changes to the value
  console.log(`New value: "${data.value}"`);
};

const Uncontrolled = () => {
  const inputId = useId("input");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor={inputId}>Uncontrolled input with default value</Label>
      <Input defaultValue="default value" onChange={onChange} id={inputId} />
    </div>
  );
};

export default Uncontrolled;
