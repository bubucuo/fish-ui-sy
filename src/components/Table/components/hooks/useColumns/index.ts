import React from "react";
import { toArray } from "../../../../../utilities";
import { ColumnsType } from "../../interface";

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
