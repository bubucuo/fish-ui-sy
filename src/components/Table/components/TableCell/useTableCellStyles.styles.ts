import { makeStyles, mergeClasses } from "@griffel/react";
import { tokens } from "../../../../tokens";
import { TableCellProps } from "./TableCell.types";
import { useTableContext } from "../context/TableContext";

export const tableCellClassNames = {
  root: "fish-ui-TableCell",
};

const borderColor = tokens.colorNeutralStroke3;

const useTDStyles_ = makeStyles({
  base: {
    position: "relative",
    textAlign: "start",
    padding: "16px",
    borderBottom: `1px solid ${borderColor}`,
    fontWeight: 500,
    fontSize: "14px",
  },

  head: {
    backgroundColor: tokens.colorNeutralBackground2,
    fontWeight: "bold",
    "::before": {
      content: "''",
      position: "absolute",
      top: "50%",
      marginLeft: "-1px",
      "inset-inline-end": 0,
      width: "1px",
      height: "1.6em",
      backgroundColor: tokens.colorNeutralStroke2, //borderColor,
      transform: "translateY(-50%)",
      transition: "background-color var(--ant-motion-duration-mid)",
      boxSizing: "border-box",
    },
    "&:last-child::before": {
      // 隐藏最后一个单元格的竖线
      content: "none",
    },
  },
  // 如果bordered为false，则不显示colgroup的border
  noneBorderThOfColgroup: {
    "&:first-child": {
      borderBottom: "none",
      "::before": {
        content: "none",
      },
    },
  },
  bordered: {
    "border-inline-end": `1px solid ${borderColor}`,
    transition: "background 0.2s, border-color 0.2s",
    borderBottom: `1px solid ${borderColor}`,
    "::before": {
      content: "none",
    },
  },
  borderHeader: {
    "border-start-start-radius": "8px",
  },
});

/**
 * Apply styling to the TableCell slots based on the state
 */
export const useTableCellStyles = <RecordType>({
  className,
  rowType,
  scope,
}: Partial<TableCellProps<RecordType>>) => {
  const { bordered } = useTableContext();

  const tdStyles = useTDStyles_();

  const styles = {
    root: mergeClasses(
      tableCellClassNames.root,
      tdStyles.base,
      rowType === "header" && tdStyles.head,
      bordered && tdStyles.bordered,
      bordered && rowType === "header" && tdStyles.borderHeader,
      !bordered && scope === "colgroup" && tdStyles.noneBorderThOfColgroup,
      className
    ),
  };

  return styles;
};
