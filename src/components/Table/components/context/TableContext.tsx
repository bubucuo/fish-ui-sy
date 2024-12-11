import React from "react";

interface TableContextValue {
  bordered: boolean;
}

export const TableContext = React.createContext<TableContextValue>({
  bordered: false,
});
export const TableContextProvider = TableContext.Provider;
export const useTableContext = (): TableContextValue =>
  React.useContext(TableContext);
