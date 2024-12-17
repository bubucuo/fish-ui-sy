import { makeStyles, mergeClasses } from "@griffel/react";
import { tokens } from "../../../../tokens";
import { TableCellProps } from "./TableCell.types";
import { useTableContext } from "../context/TableContext";
import { ASCEND, DESCEND } from "./TableCell";

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

  sorter: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: "10px",
  },

  arrow: {
    cursor: "pointer",
    fontSize: tokens.fontSizeBase100,
    ":hover": {
      color: tokens.colorCompoundBrandForeground1Hover,
      fontSize: tokens.fontSizeBase300,
    },
  },

  canClick: {
    cursor: "pointer",
    userSelect: "none",
    transition: "color 0.3s",
    paddingRight: "34px",
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1,
    },
  },
  selected: {
    color: tokens.colorPaletteRedBorderActive,
    fontSize: tokens.fontSizeBase300,
  },
});

/**
 * Apply styling to the TableCell slots based on the state
 */
export const useTableCellStyles = <RecordType>({
  className,
  rowType,
  scope,
  column,
  index,
}: Partial<TableCellProps<RecordType>>) => {
  const { bordered, sortInfo } = useTableContext();

  const tdStyles = useTDStyles_();

  const isASCEND = sortInfo?.[0] === index && sortInfo?.[1] === ASCEND;
  const isDESCEND = sortInfo?.[0] === index && sortInfo?.[1] === DESCEND;

  const styles = {
    root: mergeClasses(
      tableCellClassNames.root,
      tdStyles.base,
      rowType === "header" && tdStyles.head,
      bordered && tdStyles.bordered,
      bordered && rowType === "header" && tdStyles.borderHeader,
      !bordered && scope === "colgroup" && tdStyles.noneBorderThOfColgroup,
      column?.sorter && tdStyles.canClick,
      className
    ),
    sorter: tdStyles.sorter,
    arrowASCEND: mergeClasses(tdStyles.arrow, isASCEND && tdStyles.selected),
    arrowDESCEND: mergeClasses(tdStyles.arrow, isDESCEND && tdStyles.selected),
  };

  return styles;
};
