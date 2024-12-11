import * as React from "react";
import type { ColumnsType, RowKey } from "../interface";

export type PanelRender<RecordType> = (
  data: readonly RecordType[]
) => React.ReactNode;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TableProps<RecordType = any> =
  React.HTMLAttributes<HTMLDivElement> & {
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
  };
