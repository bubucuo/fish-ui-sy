import * as React from "react";
import { makeStyles, useId, Input, Label } from "fish-ui-sy";

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

const Disabled = () => {
  const inputId = useId("input");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor={inputId}>Disabled input</Label>
      <Input disabled id={inputId} defaultValue="disabled value" />
    </div>
  );
};

export default Disabled;
