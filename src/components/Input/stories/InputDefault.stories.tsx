import type { ArgTypes } from "@storybook/react";
import type { InputProps } from "fish-ui-sy";
import { Input } from "fish-ui-sy";
import { makeStyles } from "@griffel/react";

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

const Default = (props: InputProps) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Input {...props} />
    </div>
  );
};

export default Default;
