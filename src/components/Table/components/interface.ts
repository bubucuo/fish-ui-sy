export type Key = React.Key;
export type AlignType =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type DefaultRecordType = Record<string, any>;

export type DataIndex = string | number; // | string[];

export type GetRowKey<RecordType> = (record: RecordType, index?: number) => Key;

export type RowKey<RecordType> =
  | string
  | keyof RecordType
  | GetRowKey<RecordType>;

export type ColScopeType = "col" | "colgroup";

export type RowScopeType = "row" | "rowgroup";

export type ScopeType = ColScopeType | RowScopeType;

export type ScrollConfig = {
  index?: number;
  key?: React.Key;
  top?: number;
};

export type Reference = {
  nativeElement: HTMLDivElement;
  scrollTo: (config: ScrollConfig) => void;
};

// export type ColumnTitle<RecordType> =
//   | React.ReactNode
//   | ((props: ColumnTitleProps<RecordType>) => React.ReactNode);

// =================== Column ===================
export type ColumnsType<RecordType = unknown> = readonly (
  | ColumnGroupType<RecordType>
  | ColumnType<RecordType>
)[];

export interface CellType<RecordType> {
  key?: Key;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  column?: ColumnsType<RecordType>[number];
  colSpan?: number;
  rowSpan?: number;

  /** Only used for table header */
  hasSubColumns?: boolean;
}

export interface RenderedCell<RecordType> {
  props?: CellType<RecordType>;
  children?: React.ReactNode;
}

interface ColumnSharedType {
  title?: React.ReactNode;
  key?: Key;
  align?: AlignType;
  className?: string;
}

export interface ColumnGroupType<RecordType> extends ColumnSharedType {
  children: ColumnsType<RecordType>;
}

export interface ColumnType<RecordType> extends ColumnSharedType {
  dataIndex?: DataIndex;
  render?: (
    value: any,
    record: RecordType,
    index: number
  ) => React.ReactNode | RenderedCell<RecordType>;
}

// ================= Customized =================
export type GetComponentProps<DataType> = (
  data: DataType,
  index?: number
) => React.HTMLAttributes<any> & React.TdHTMLAttributes<any>;

export interface RenderedCell<RecordType> {
  props?: CellType<RecordType>;
  children?: React.ReactNode;
}
