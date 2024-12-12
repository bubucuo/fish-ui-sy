import type { TableHeaderProps } from "./TableHeader.types";
import { useTableHeaderStyles } from "./useTableHeaderStyles.styles";
import { CellType, ColumnGroupType, ColumnsType } from "../interface";
import React from "react";
import HeaderRow from "./HeaderRow";

function parseHeaderRows<RecordType>(
  rootColumns: ColumnsType<RecordType>
): CellType<RecordType>[][] {
  const rows: CellType<RecordType>[][] = [];

  function fillRowCells(
    columns: ColumnsType<RecordType>,
    colIndex: number,
    rowIndex: number = 0
  ): number[] {
    // Init rows
    rows[rowIndex] = rows[rowIndex] || [];

    let currentColIndex = colIndex;
    const colSpans: number[] = columns.filter(Boolean).map((column) => {
      const cell: CellType<RecordType> = {
        key: column.key,
        className: column.className || "",
        children: column.title,
        column,
      };

      let colSpan: number = 1;

      const subColumns = (column as ColumnGroupType<RecordType>).children;
      if (subColumns && subColumns.length > 0) {
        colSpan = fillRowCells(
          subColumns,
          currentColIndex,
          rowIndex + 1
        ).reduce((total, count) => total + count, 0);
        cell.hasSubColumns = true;
      }

      cell.colSpan = colSpan;
      rows[rowIndex].push(cell);

      currentColIndex += colSpan;

      return colSpan;
    });

    return colSpans;
  }

  // Generate `rows` cell data
  fillRowCells(rootColumns, 0);

  // Handle `rowSpan`
  const rowCount = rows.length;
  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    rows[rowIndex].forEach((cell) => {
      if (!("rowSpan" in cell) && !cell.hasSubColumns) {
        // eslint-disable-next-line no-param-reassign
        cell.rowSpan = rowCount - rowIndex;
      }
    });
  }

  return rows;
}

/**
 * `TableHeader` is a container for the actions of the dialog.
 * Apart from styling, this component does not have other behavior.
 */

export const TableHeader = <RecordType,>(
  props: TableHeaderProps<RecordType>
) => {
  const { columns } = props;

  const rows = React.useMemo<CellType<RecordType>[][]>(
    () => parseHeaderRows(columns),
    [columns]
  );

  const styles = useTableHeaderStyles();

  return (
    <thead className={styles.root}>
      {rows.map((row: CellType<RecordType>[], rowIndex) => {
        const rowNode = <HeaderRow key={rowIndex} cells={row} />;
        return rowNode;
      })}
    </thead>
  );
};

TableHeader.displayName = "TableHeader";
