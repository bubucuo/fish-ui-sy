import * as React from "react";
import type { TableProps } from "./Table.types";
import { useTableStyles } from "./useTableStyles.styles";
import { TableHeader } from "../TableHeader";
import { TableBody } from "../TableBody";
import type {
  ColumnType,
  DefaultRecordType,
  GetRowKey,
  SortInfo,
  SortOrder,
} from "../interface";
import { useColumns } from "../hooks/useColumns";
import { TableContextProvider } from "../context/TableContext";
import { useSelection } from "../hooks/useSelection";
import { areArraysEqual } from "../../../../utilities";

/**
 * A table displays rows of data.
 */
export const Table = React.forwardRef(function Table<
  RecordType extends DefaultRecordType,
>(props: TableProps<RecordType>, ref: React.Ref<HTMLDivElement>) {
  const {
    className,
    dataSource = [],
    rowKey = "key",
    showHeader = true,
    // title,
    // footer,
    columns,
    children,
    bordered = false,
    rowSelection,
    onChange, //当展示数据发生变化时触发，如排序
    ...restProps
  } = props;

  const styles = useTableStyles({ className, bordered });

  // ========================== Columns ==========================
  // 第一个参数是_baseColumns 暂时不用
  const [, flattenColumns] = useColumns(columns, children);

  const getRowKey = React.useMemo<GetRowKey<RecordType>>(() => {
    if (typeof rowKey === "function") {
      return rowKey;
    }
    return (record: RecordType) => {
      const key = record && record[rowKey as keyof RecordType];

      return key;
    };
  }, [rowKey]);

  // ========================== Selections ==========================
  const [mergedColumns] = useSelection(
    flattenColumns,
    dataSource,
    getRowKey,
    rowSelection
  );
  const [sortInfo, setSortInfo] = React.useState<SortInfo>([null, null]);

  // ========================== Sort Data ==========================
  // 根据 sortInfo 排序 dataSource
  const sortedData = React.useMemo(() => {
    if (typeof sortInfo[0] === "number") {
      // 创建一个新数组并使用 sortInfo 排序
      const { sorter } = mergedColumns[sortInfo[0]] as ColumnType<RecordType>;
      if (typeof sorter === "function") {
        const sortedSource = [...dataSource].toSorted((a, b) => {
          const result = sorter?.(a, b) ?? 0; // 确保 sortInfo 是一个有效函数
          return sortInfo[1] === "ascend" ? result : -result;
        });
        return sortedSource;
      }
    }

    // 如果没有 sorter，直接返回 dataSource
    return dataSource;
  }, [dataSource, sortInfo, mergedColumns]);

  const updateSortInfo = React.useCallback(
    (_sortInfo: SortInfo) => {
      let newSortInfo = _sortInfo;
      if (areArraysEqual(sortInfo, _sortInfo)) {
        newSortInfo = [null, null];
      }

      setSortInfo(newSortInfo);
      const index = newSortInfo[0];
      let column;
      if (index !== null) {
        column = mergedColumns[index] as ColumnType<RecordType>;
      }
      onChange?.(
        {
          order: newSortInfo[1],
          field: column?.dataIndex || column?.key,
          column,
        },
        { action: "sort", currentDataSource: sortedData }
      );
    },
    [sortInfo, mergedColumns, onChange, sortedData]
  );

  const TableContextValue = React.useMemo(() => {
    return {
      bordered,
      sortInfo,
      updateSortInfo,
    };
  }, [bordered, sortInfo, updateSortInfo]);

  return (
    <TableContextProvider value={TableContextValue}>
      <div
        {...restProps}
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        className={styles.root as any}
        ref={ref}
      >
        <table className={styles.table}>
          {showHeader && <TableHeader<RecordType> columns={mergedColumns} />}
          <TableBody<RecordType>
            data={sortedData as RecordType[]}
            columns={mergedColumns}
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
