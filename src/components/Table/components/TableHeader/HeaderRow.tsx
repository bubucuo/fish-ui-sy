import { CellType } from "../interface";
import { getColumnsKey } from "../../utils/valueUtil";
import { TableCell } from "../TableCell";

export interface RowProps<RecordType> {
  cells: CellType<RecordType>[];
}

const HeaderRow = <RecordType,>(props: RowProps<RecordType>) => {
  const { cells } = props;

  const columnsKey = getColumnsKey(cells.map((cell) => cell.column));

  return (
    <tr>
      {cells.map((cell: CellType<RecordType>, cellIndex) => {
        const { column } = cell;

        return (
          <TableCell<RecordType>
            {...cell}
            scope={
              column?.title
                ? parseInt(cell.colSpan + "") > 1
                  ? "colgroup"
                  : "col"
                : undefined
            }
            align={column?.align}
            key={columnsKey[cellIndex]}
            rowType="header"
            index={cellIndex}
          />
        );
      })}
    </tr>
  );
};

if (process.env.NODE_ENV !== "production") {
  HeaderRow.displayName = "HeaderRow";
}

export default HeaderRow;
