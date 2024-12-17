import { useTableCellStyles } from "./useTableCellStyles.styles";
import { TableCellProps } from "./TableCell.types";
import useCellRender from "../hooks/useCellRender";
import { TriangleDownRegular, TriangleUpRegular } from "fish-ui-sy-react-icons";
import { Flex } from "../../../Flex";
import { useTableContext } from "../context/TableContext";
import React from "react";

/**
 * The `TableCell` is a container where the content of the dialog is rendered.
 * Apart from styling, this component does not have other behavior.
 */

export const ASCEND = "ascend";
export const DESCEND = "descend";
export const TableCell = <RecordType,>(props: TableCellProps<RecordType>) => {
  const {
    className,
    rowType,
    align,
    record,
    children,
    render,
    dataIndex,
    renderIndex,
    scope,
    colSpan,
    rowSpan,
    index, // index of column
    column = {},
    // ...restProps
  } = props;

  const { sortDirections = [ASCEND, DESCEND] } = column;
  const { updateSortInfo } = useTableContext();

  const styles = useTableCellStyles({
    className,
    rowType,
    scope,
    column,
    index,
  });

  const alignStyle: React.CSSProperties = {};
  if (align) {
    alignStyle.textAlign = align;
  }

  if (scope === "colgroup") {
    alignStyle.textAlign = "center";
  }

  const mergedStyle = {
    ...alignStyle,
  };

  const childNode = useCellRender<RecordType>(
    record as RecordType,
    dataIndex,
    renderIndex as number,
    children,
    render
  );

  return (
    <th
      className={styles.root}
      colSpan={colSpan}
      rowSpan={rowSpan}
      style={mergedStyle}
      scope={scope}
    >
      {childNode}
      {rowType === "header" && column?.sorter && (
        <Flex className={styles.sorter} align="center" justify="center">
          {sortDirections.includes(ASCEND) && (
            <TriangleUpRegular
              className={styles.arrowASCEND}
              onClick={(e) => {
                e.stopPropagation;
                updateSortInfo!([index!, ASCEND]);
              }}
            />
          )}
          {sortDirections.includes(DESCEND) && (
            <TriangleDownRegular
              className={styles.arrowDESCEND}
              onClick={(e) => {
                e.stopPropagation;
                updateSortInfo!([index!, DESCEND]);
              }}
            />
          )}
        </Flex>
      )}
    </th>
  );
};

TableCell.displayName = "TableCell";
