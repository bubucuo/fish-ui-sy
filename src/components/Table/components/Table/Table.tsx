import * as React from "react";
import type { TableProps } from "./Table.types";
import { useTableStyles } from "./useTableStyles.styles";
import { TableHeader } from "../TableHeader";
import { TableBody } from "../TableBody";
import type { DefaultRecordType, GetRowKey } from "../interface";
import { convertChildrenToColumns } from "../hooks/useColumns";
import { TableContextProvider } from "../context/TableContext";

/**
 * A table displays rows of data.
 */
export const Table = React.forwardRef(function Table<
  RecordType extends DefaultRecordType,
>(props: TableProps<RecordType>, ref: React.Ref<HTMLDivElement>) {
  const {
    className,
    dataSource,
    rowKey = "key",
    showHeader = true,
    // title,
    // footer,
    columns,
    children,
    bordered = false,
    ...restProps
  } = props;

  const styles = useTableStyles({ className, bordered });

  const baseColumns = React.useMemo(() => {
    if (columns) {
      return columns;
    }
    const newColumns = convertChildrenToColumns<RecordType>(children);
    return newColumns || [];
  }, [columns, children]);

  const getRowKey = React.useMemo<GetRowKey<RecordType>>(() => {
    if (typeof rowKey === "function") {
      return rowKey;
    }
    return (record: RecordType) => {
      const key = record && record[rowKey as keyof RecordType];

      return key;
    };
  }, [rowKey]);

  const TableContextValue = React.useMemo(() => {
    return {
      bordered,
    };
  }, [bordered]);

  return (
    <TableContextProvider value={TableContextValue}>
      <div
        {...restProps}
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        className={styles.root as any}
        ref={ref}
      >
        <table className={styles.table}>
          {showHeader && <TableHeader<RecordType> columns={baseColumns} />}
          <TableBody<RecordType>
            data={dataSource}
            columns={baseColumns}
            getRowKey={getRowKey}
          />
        </table>
      </div>
    </TableContextProvider>
  );
}) as <RecordType extends DefaultRecordType>(
  props: TableProps<RecordType> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement;

type TableType = typeof Table & {
  displayName: string;
};

(Table as TableType).displayName = "Table";
