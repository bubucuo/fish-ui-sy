import React from "react";
import { Button, Pagination, Select } from "fish-ui-sy";
import type { PaginationProps } from "fish-ui-sy";

const showTotal: PaginationProps["showTotal"] = (total) =>
  `Total ${total} items`;

const sizeChangerRender: PaginationProps["sizeChangerRender"] = ({
  disabled,
  size: pageSize,
  onSizeChange,
  className,
  options,
}) => {
  return (
    <Select
      disabled={disabled}
      value={pageSize}
      aria-label="页码"
      className={className}
      onChange={onSizeChange}
    >
      {options.map((opt) => {
        return (
          <option key={opt} value={opt}>
            {opt} 个/页
          </option>
        );
      })}
    </Select>
  );
};

const Default: React.FC = () => (
  <div>
    <Pagination
      total={250}
      defaultCurrent={2}
      showTotal={showTotal}
      showSizeChanger
      pageSizeOptions={[10, 15, 20, 25]}
      showQuickJumper={{
        // goButton: true,
        goButton: <Button appearance="secondary">Go</Button>,
      }}
      sizeChangerRender={sizeChangerRender}
      showLessItems={true}
      onShowSizeChange={(current, size) => {
        console.log(
          "%c [  ]-246",
          "font-size:13px; background:pink; color:#bf2c9f;",
          current,
          size
        );
      }}
      onChange={(current, size) => {
        console.log(
          "%c [  ]-21",
          "font-size:13px; background:pink; color:#bf2c9f;",
          current,
          size
        );
      }}
    />
  </div>
);

export default Default;
