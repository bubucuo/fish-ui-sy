import React from "react";
import type { SortInfo, UpdateSortInfo } from "../interface";

interface TableContextValue {
  bordered: boolean;
  sortInfo: SortInfo;
  updateSortInfo: UpdateSortInfo;
}

export const TableContext = React.createContext<TableContextValue>({
  bordered: false,
  updateSortInfo: null,
  sortInfo: [null, null],
});
export const TableContextProvider = TableContext.Provider;
export const useTableContext = (): TableContextValue =>
  React.useContext(TableContext);
