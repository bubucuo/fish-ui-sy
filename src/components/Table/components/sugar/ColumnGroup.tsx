import type * as React from "react";
import type { ColumnProps } from "./Column";
import type { ColumnType } from "../interface";

export interface ColumnGroupProps<RecordType>
  extends Omit<ColumnType<RecordType>, "children"> {
  children:
    | React.ReactElement<ColumnProps<RecordType>>
    | readonly React.ReactElement<ColumnProps<RecordType>>[];
}

/* istanbul ignore next */
/**
 * This is a syntactic sugar for `columns` prop.
 * So HOC will not work on this.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ColumnGroup<RecordType>(_: ColumnGroupProps<RecordType>) {
  return null;
}
