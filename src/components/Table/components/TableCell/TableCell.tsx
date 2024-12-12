import { useTableCellStyles } from "./useTableCellStyles.styles";
import { TableCellProps } from "./TableCell.types";
import useCellRender from "../hooks/useCellRender";

/**
 * The `TableCell` is a container where the content of the dialog is rendered.
 * Apart from styling, this component does not have other behavior.
 */
export const TableCell = <RecordType,>(props: TableCellProps<RecordType>) => {
  const {
    className,
    rowType,
    align,
    record,
    children,
    render,
    dataIndex,
    renderIndex,
    scope,
    colSpan,
    rowSpan,
    // ...restProps
  } = props;

  const styles = useTableCellStyles({ className, rowType, scope });

  const alignStyle: React.CSSProperties = {};
  if (align) {
    alignStyle.textAlign = align;
  }

  if (scope === "colgroup") {
    alignStyle.textAlign = "center";
  }

  const mergedStyle = {
    ...alignStyle,
  };

  const childNode = useCellRender<RecordType>(
    record as RecordType,
    dataIndex,
    renderIndex as number,
    children,
    render
  );

  return (
    <th
      className={styles.root}
      colSpan={colSpan}
      rowSpan={rowSpan}
      style={mergedStyle}
      scope={scope}
    >
      {childNode}
    </th>
  );
};

TableCell.displayName = "TableCell";
