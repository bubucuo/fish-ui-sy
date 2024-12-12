import React from "react";
import { toArray } from "../../../../../utilities";
import { ColumnGroupType, ColumnsType } from "../../interface";

export const useColumns = <RecordType>(
  columns?: ColumnsType<RecordType>,
  children?: React.ReactNode
) => {
  const baseColumns = React.useMemo(() => {
    if (columns) {
      return columns;
    }
    const newColumns = convertChildrenToColumns<RecordType>(children);
    return newColumns || [];
  }, [columns, children]);

  // ========================== Flatten =========================
  const flattenColumns = React.useMemo(() => {
    return flatColumns(baseColumns);
  }, [baseColumns]);

  return [baseColumns, flattenColumns];
};

export function convertChildrenToColumns<RecordType>(
  children: React.ReactNode
): ColumnsType<RecordType> {
  return toArray(children)
    .filter((node): node is React.ReactElement => React.isValidElement(node)) // 类型保护
    .map(({ key, props }) => {
      const { children: nodeChildren, ...restProps } = props;
      const column = {
        key,
        ...restProps,
      };

      if (nodeChildren) {
        column.children = convertChildrenToColumns(nodeChildren);
      }

      return column;
    });
}

function flatColumns<RecordType>(
  columns: ColumnsType<RecordType>,
  parentKey = "key"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  return columns
    .filter((column) => column && typeof column === "object")
    .reduce((list: ColumnsType<RecordType>, column, index: number) => {
      const mergedKey = `${parentKey}-${index}`;

      const subColumns = (column as ColumnGroupType<RecordType>).children;
      if (subColumns && subColumns.length > 0) {
        return [
          ...list,
          ...flatColumns(subColumns, mergedKey).map(
            (subColum: ColumnsType<RecordType>) => ({
              ...subColum,
            })
          ),
        ];
      }
      return [
        ...list,
        {
          key: mergedKey,
          ...column,
        },
      ];
    }, []);
}
