import React from "react";
import { Space, Table } from "fish-ui-sy";
import type { TableProps } from "fish-ui-sy";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    align: "center",
    title: "Action",
    dataIndex: "action",
    render: (_, record, renderIndex) => (
      <Space size="medium">
        <a>
          Invite {record.name} {renderIndex}
        </a>
        <a>Delete</a>
      </Space>
    ),
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
    name: "Joe2 Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];

const Default: React.FC = () => (
  <Table<DataType> columns={columns} dataSource={data} bordered={true} />
);

export default Default;
