import type { AlignType, ColumnType, ScopeType } from "../interface";

/**
 * DialogBody Props
 */
export type TableCellProps<RecordType> =
  React.HTMLAttributes<HTMLTableCellElement> & {
    index?: number;
    record?: RecordType;
    render?: ColumnType<RecordType>["render"];
    renderIndex?: number;
    align?: AlignType;
    rowType?: "header" | "body" | "footer";
    dataIndex?: ColumnType<RecordType>["dataIndex"];
    scope?: ScopeType;
    colSpan?: number;
    rowSpan?: number;
    column?: ColumnType<RecordType>;
  };
