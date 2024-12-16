import React, { useState } from "react";
import { Divider, Radio, RadioGroup, Table } from "fish-ui-sy";
import type { TableProps, RowSelectMethod } from "fish-ui-sy";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection: TableProps<DataType>["rowSelection"] = {
  // selectedRowKeys: ["1",], // 默认选中的行
  onChange: (
    selectedRowKeys: React.Key[],
    selectedRows: DataType[],
    info: { type: RowSelectMethod }
  ) => {
    console.log(
      `type: ${info.type}`,
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    label: !record.name
      ? "全选"
      : record.name == "Disabled User"
        ? "DDD"
        : record.name,
  }),
};

const TableSelection: React.FC = () => {
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );

  return (
    <div>
      <RadioGroup
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any) => setSelectionType(e.target.value)}
        value={selectionType}
      >
        <Radio value="checkbox" label="Checkbox" />
        <Radio value="radio" label="Radio" />
      </RadioGroup>
      <Divider />
      <Table<DataType>
        rowSelection={{ type: selectionType, ...rowSelection }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default TableSelection;
