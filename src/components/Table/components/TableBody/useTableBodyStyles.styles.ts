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
    backgroundColor: tokens.colorNeutralBackground1, //添加背景颜色
    ":hover": {
      cursor: "pointer",
      backgroundColor: tokens.colorNeutralBackground1Hover, // 添加每一行的hover背景颜色
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
