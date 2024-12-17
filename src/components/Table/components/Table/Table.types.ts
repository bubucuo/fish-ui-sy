import * as React from "react";
import type {
  ColumnsType,
  RowKey,
  SorterResult,
  TableCurrentDataSource,
  TableRowSelection,
} from "../interface";

export type PanelRender<RecordType> = (
  data: readonly RecordType[]
) => React.ReactNode;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TableProps<RecordType = any> = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  /**
   * data array
   * @default []
   */
  dataSource?: readonly RecordType[];

  /**
   * Whether to show the border
   * @default false
   */
  bordered?: boolean;

  /**
   * data columns
   * @default []
   */
  columns?: ColumnsType<RecordType>;

  /**
   * 表格行 key 的取值，可以是字符串或一个函数
   * row key
   * @default 'key'
   */
  rowKey?: RowKey<RecordType>;

  /**
   * Whether to show the header
   * @default true
   */
  showHeader?: boolean;

  /**
   * Title of the table
   */
  title?: PanelRender<RecordType>;

  /**
   * Footer of the table
   */
  footer?: PanelRender<RecordType>;

  /**
   * Row selection config
   */
  rowSelection?: TableRowSelection<RecordType>;

  /**
   * Callback executed when the data source changes
   */

  onChange?: (
    // pagination: TablePaginationConfig,
    // filters: Record<string, FilterValue | null>,
    sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
    extra: TableCurrentDataSource<RecordType>
  ) => void;
};
