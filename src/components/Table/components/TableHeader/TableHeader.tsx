import type { TableHeaderProps } from "./TableHeader.types";
import { useTableHeaderStyles } from "./useTableHeaderStyles.styles";
import { TableCell } from "../TableCell";

/**
 * `TableHeader` is a container for the actions of the dialog.
 * Apart from styling, this component does not have other behavior.
 */

export const TableHeader = <RecordType,>(
  props: TableHeaderProps<RecordType>
) => {
  const { columns, ...restProps } = props;

  const styles = useTableHeaderStyles();

  return (
    <thead {...restProps} className={styles.root}>
      <tr>
        {columns.map((column) => (
          <TableCell<RecordType>
            key={column.key || column.dataIndex}
            rowType="header"
            align={column.align}
          >
            {column.title}
          </TableCell>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.displayName = "TableHeader";
