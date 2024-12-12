import type { ColumnsType } from "../interface";

export type TableHeaderPosition = "start" | "end";

/**
 * TableHeader Props
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TableHeaderProps<RecordType> {
  columns: ColumnsType<RecordType>;
}
