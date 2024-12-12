import { makeStyles, mergeClasses } from "@griffel/react";
import { useTableContext } from "../context/TableContext";
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
  borderHeader: {
    "border-start-start-radius": "8px",
    "& tr:first-child th:last-child": {
      "border-start-end-radius": "8px",
    },
  },
});

/**
 * Apply styling to the TableHeader slots based on the state
 */
export const useTableHeaderStyles = () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const mainStyles = useMainStyles_();
  const { bordered } = useTableContext();
  const styles = {
    root: mergeClasses(mainStyles.base, bordered && mainStyles.borderHeader),
  } as any;

  return styles;
};
