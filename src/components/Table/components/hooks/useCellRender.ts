import React, { ReactElement } from "react";
import { useMemo } from "react";
import type { ColumnType } from "../interface";
import { getValue } from "../../../../utilities";

export default function useCellRender<RecordType>(
  record: RecordType,
  dataIndex: ColumnType<RecordType>["dataIndex"],
  renderIndex: number,
  children?: React.ReactNode,
  render?: ColumnType<RecordType>["render"]
) {
  // ======================== Render ========================
  const retData = useMemo(
    () => {
      if (children != undefined) {
        return children;
      }
      const path =
        dataIndex === null || dataIndex === undefined || dataIndex === ""
          ? []
          : Array.isArray(dataIndex)
            ? dataIndex
            : [dataIndex];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const value: React.ReactNode = getValue(record, path as any);

      // Customize render node
      let returnChildNode = value;

      if (typeof render === "function") {
        const renderData = render(value, record, renderIndex);
        returnChildNode = renderData as ReactElement;
      }

      return returnChildNode;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [record, render, children]
  );

  return retData;
}
