import { makeStyles } from "@griffel/react";
// import { tokens } from "../../../../tokens";

export const tableHeaderClassNames = {
  root: "fish-ui-tableHeader",
};

/**
 * Styles for the root slot
 */

const useMainStyles_ = makeStyles({
  base: {
    // backgroundColor: tokens.colorNeutralStroke3,
  },
});

/**
 * Apply styling to the TableHeader slots based on the state
 */
export const useTableHeaderStyles = () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const mainStyles = useMainStyles_();
  const styles = {
    root: mainStyles.base,
  } as any;

  return styles;
};
