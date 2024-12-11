import { makeStyles, mergeClasses } from "@griffel/react";
import { tokens } from "../../../../tokens";

export const tableBodyClassNames = {
  root: "fish-ui-TableBody",
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    display: "table-row-group",
  },
  tr: {
    display: "table-row",
    ":hover": {
      cursor: "pointer",
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
});

/**
 * Apply styling to the TableBody slots based on the state
 */
export const useTableBodyStyles = () => {
  const styles = useStyles();
  const _styles = {
    root: mergeClasses(tableBodyClassNames.root, styles.root),
    tr: styles.tr,
  };
  return _styles;
};
