import { makeStyles, mergeClasses } from "@griffel/react";
import { TableProps } from "./Table.types";
import { tokens } from "../../../../tokens";

export const tableClassNames = {
  root: "fish-ui-Table",
};

/**
 * Styles for the root slot
 */

const useInnerTableStyles = makeStyles({
  base: {
    width: "100%",
    boxSizing: "content-box",
    textAlign: "start",
    borderCollapse: "separate",
    borderSPacing: 0,
    borderRadius: 0,
    borderSpacing: 0,
    cellSpacing: 0,
  },

  bordered: {
    borderTop: `1px solid ${tokens.colorNeutralStroke3}`,
    borderLeft: `1px solid ${tokens.colorNeutralStroke3}`,
    "border-start-start-radius": "8px",
    "border-start-end-radius": "8px",
    backgroundColor: tokens.colorNeutralBackground2,
  },
});

export const useTableStyles = (props: TableProps) => {
  const { className, bordered } = props;
  const tableStyles = useInnerTableStyles();
  const styles = {
    root: mergeClasses(tableClassNames.root, className),
    table: mergeClasses(tableStyles.base, bordered && tableStyles.bordered),
    panel: {},
    title: {},
    footer: {},
  };

  return styles;
};
