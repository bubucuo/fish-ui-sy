import { makeStyles, mergeClasses } from "@griffel/react";
import { RadioGroupProps } from "./RadioGroup.types";

export const radioGroupClassNames = {
  root: "fish-ui-RadioGroup",
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "flex-start",
  },

  vertical: {
    flexDirection: "column",
  },
});

/**
 * Apply styling to the RadioGroup slots based on the state
 */
export const useRadioGroupStyles = ({
  layout,
  className,
}: Pick<RadioGroupProps, "layout"> & { className: string | undefined }) => {
  const styles = useStyles();
  return mergeClasses(
    radioGroupClassNames.root,
    styles.root,
    layout === "vertical" && styles.vertical,
    className
  );
};
