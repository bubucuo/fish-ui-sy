import React from "react";
import { Pagination, type PaginationProps } from "fish-ui-sy";

const showTotal: PaginationProps["showTotal"] = (total, range) => {
  console.log(
    "%c [  ]-6",
    "font-size:13px; background:pink; color:#bf2c9f;",
    range
  );
  return `Total ${total} items`;
};

const Default: React.FC = () => (
  <div>
    <Pagination
      total={25}
      showTotal={showTotal}
      defaultCurrent={2}
      defaultPageSize={5}
      hideOnSinglePage={false}
      totalBoundaryShowSizeChanger={1}
      // showQuickJumper={{ goButton: <button>go</button> }}
      showQuickJumper={{ goButton: true }}
      pageSizeOptions={[5, 10, 15, 20, 30]}
      onShowSizeChange={(current, size) => {
        console.log(
          "%c [ onShowSizeChange-101 ]-101",
          "font-size:13px; background:pink; color:#bf2c9f;",
          current,
          size
        );
      }}
      onChange={(current, size) => {
        console.log(
          "%c [ change-11 ]-11",
          "font-size:13px; background:pink; color:#bf2c9f;",
          current,
          size
        );
      }}
    />
    <Pagination total={0} hideOnSinglePage={false} />
    <Pagination total={60} />
    <Pagination total={70} />
    <Pagination total={80} />
    <Pagination total={90} />
    <Pagination total={100} />
    <Pagination total={120} />
    <Pagination total={500} showLessItems={true} />
  </div>
);

export default Default;
