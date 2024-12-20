import * as React from "react";
import type { SelectProps } from "fish-ui-sy";

export type SizeChangerRender = (info: {
  disabled: boolean;
  size: number;
  onSizeChange: SelectProps["onChange"];
  className: string;
  options: number[];
}) => React.ReactNode;

export type PaginationProps = Omit<
  React.HTMLAttributes<HTMLUListElement>,
  "onChange"
> & {
  /**
   * current page number
   * @default 1
   */
  defaultCurrent?: number;

  /**
   * current page number
   * @default 1
   */
  current?: number;

  /**
   * disabled
   */
  disabled?: boolean;

  /**
   * current page size
   * @default 10
   */
  defaultPageSize?: number;

  /**
   * show total number of data
   * @default 0
   */
  total?: number;

  /**
   * current page size
   * @default 10
   */
  pageSize?: number;

  /**
   * show total number of data
  //  * @default false
   */
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;
  // showTotal?: boolean; //  showTotal={(total) => `Total ${total} items`}

  /**
   * show Quick Jumper input box and go button
   * @default false
   */
  showQuickJumper?: boolean | { goButton?: React.ReactNode };

  /**
   * show size changer
   * @default false
   */
  showSizeChanger?: boolean;

  /**
   * pageSize 变化的回调
   */
  onShowSizeChange?: (current: number, size: number) => void;

  /**
   * current 或 pageSize 改变的回调，参数是改变后的页码及每页条数
   */
  onChange?: (current: number, size: number) => void;

  /**
   * if total <= pageSize, hide the pagination
   */
  hideOnSinglePage?: boolean;

  /**
   * show ...
   * @default true
   */
  showPrevNextJumpers?: boolean;

  /**
   * 是否显示较少页面内容
   */
  showLessItems?: boolean;

  /**
   * 什么时候显示 sizeChanger，当总条数大于 totalBoundaryShowSizeChanger 时显示
   * @default 50
   */
  totalBoundaryShowSizeChanger?: number;

  /**
   * sizeChanger的render函数，有默认实现
   */
  sizeChangerRender?: SizeChangerRender;

  /**
   * paseSize 可选值
   * @default [10, 20, 50, 100]
   */
  pageSizeOptions?: number[];
};
