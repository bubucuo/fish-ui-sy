import { useMemo } from "react";
import { getColumnsKey } from "../../utils/valueUtil";
import { TableCell } from "../TableCell";
import { TableBodyProps } from "./TableBody.types";
import { useTableBodyStyles } from "./useTableBodyStyles.styles";
import { ColumnType } from "../interface";

/**
 * The `TableBody` is a container where the content of the dialog is rendered.
 * Apart from styling, this component does not have other behavior.
 */

export function TableBody<RecordType>(props: TableBodyProps<RecordType>) {
  const { data = [], getRowKey, style, columns } = props;
  const styles = useTableBodyStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columnsKey = useMemo(() => getColumnsKey(columns as any), [columns]);

  return (
    <tbody className={styles.root} style={style}>
      {data.map((row, rowIndex) => {
        return (
          <tr key={getRowKey(row)} className={styles.tr}>
            {columns.map((column: ColumnType<RecordType>, index: number) => (
              <TableCell<RecordType>
                key={columnsKey[index] + String(rowIndex)}
                align={column.align}
                dataIndex={column.dataIndex}
                render={column.render}
                renderIndex={rowIndex}
                record={row}
                rowType="body"
              />
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}

TableBody.displayName = "TableBody";
