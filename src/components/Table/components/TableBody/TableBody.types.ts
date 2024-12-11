import type { ColumnsType, GetRowKey } from "../interface";

/**
 * TableBody Props
 */
export type TableBodyProps<RecordType> =
  React.HTMLAttributes<HTMLTableRowElement> & {
    data?: readonly RecordType[];
    columns: ColumnsType<RecordType>;
    getRowKey: GetRowKey<RecordType>;
  };
