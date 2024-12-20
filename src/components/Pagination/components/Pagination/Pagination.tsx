import React, { useMemo } from "react";
import {
  Select,
  noop,
  useControllableState,
  type ForwardRefComponent,
  type PaginationProps,
} from "fish-ui-sy";
import { usePaginationStyles } from "./usePaginationStyles.styles";
import {
  ChevronLeft20Regular,
  ChevronRight20Regular,
} from "fish-ui-sy-react-icons";
import { usePageList } from "./usePageList";
import { Options } from "../Options";
import { calculatePage, isInteger } from "../../utils";

const defaultSizeChangerRender: PaginationProps["sizeChangerRender"] = ({
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
            {opt} 条/页
          </option>
        );
      })}
    </Select>
  );
};

/**  A long list can be divided into several pages, and only one page will be loaded at a time. */
export const Pagination: ForwardRefComponent<PaginationProps> =
  React.forwardRef((props, ref) => {
    const {
      className,

      // control
      current: currentProp,
      defaultCurrent = 1,
      total = 0,
      pageSize: pageSizeProp,
      defaultPageSize = 10,
      onChange = noop,

      // config
      hideOnSinglePage,
      showPrevNextJumpers = true,
      showQuickJumper,
      showLessItems,
      onShowSizeChange = noop,
      style,
      totalBoundaryShowSizeChanger = 50,
      disabled,
      showTotal,
      showSizeChanger = total > totalBoundaryShowSizeChanger,
      sizeChangerRender = defaultSizeChangerRender,
      pageSizeOptions,
    } = props;

    const [current, setCurrent] = useControllableState({
      defaultState: defaultCurrent,
      state: currentProp,
      initialState: 0,
    });

    const [pageSize, setPageSize] = useControllableState({
      defaultState: defaultPageSize,
      state: pageSizeProp,
      initialState: 10,
    });

    const allPages = useMemo(
      () => calculatePage(undefined, pageSize, total),
      [pageSize, total]
    );

    function isValid(page: number) {
      return (
        isInteger(page) && page !== current && isInteger(total) && total > 0
      );
    }

    function changePageSize(size: number) {
      const newCurrent = calculatePage(size, pageSize, total);
      const nextCurrent =
        current > newCurrent && newCurrent !== 0 ? newCurrent : current;

      setPageSize(size);
      onShowSizeChange?.(current, size);
      setCurrent(nextCurrent);
      onChange?.(nextCurrent, size);
    }

    function handleChange(page: number) {
      if (isValid(page) && !disabled) {
        const currentPage = allPages;
        let newPage = page;
        if (page > currentPage) {
          newPage = currentPage;
        } else if (page < 1) {
          newPage = 1;
        }

        setCurrent(newPage);

        onChange?.(newPage, pageSize);

        return newPage;
      }

      return current;
    }

    const totalNode = useMemo(
      () =>
        showTotal
          ? showTotal(total, [
              total === 0 ? 0 : (current - 1) * pageSize + 1,
              current * pageSize > total ? total : current * pageSize,
            ])
          : null,
      [showTotal, total, current, pageSize]
    );

    const [pageList] = usePageList({
      showPrevNextJumpers,
      showLessItems,
      total,
      handleChange,
      pageSize,
      current,
      allPages,
    });

    const styles = usePaginationStyles({
      className,
      current,
      pageSize,
      total,
    });

    const hasPrev = current > 1;
    const hasNext = current < calculatePage(undefined, pageSize, total);

    function prevHandle() {
      if (hasPrev) handleChange(current - 1);
    }

    function nextHandle() {
      if (hasNext) handleChange(current + 1);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const goButton = showQuickJumper && (showQuickJumper as any).goButton;
    const shouldDisplayQuickJumper = total > pageSize ? showQuickJumper : false;

    if (hideOnSinglePage && total <= pageSize) {
      return null;
    }

    return (
      <ul
        ref={ref as React.Ref<HTMLUListElement>}
        className={styles.root}
        style={style}
      >
        <li>{totalNode}</li>
        {/* prev */}
        <li className={styles.prev} onClick={prevHandle}>
          <ChevronLeft20Regular />
        </li>

        {/* content */}
        {pageList}

        {/* next */}
        <li className={styles.next} onClick={nextHandle}>
          <ChevronRight20Regular />
        </li>

        <Options
          disabled={disabled}
          changeSize={changePageSize}
          pageSize={pageSize}
          pageSizeOptions={pageSizeOptions}
          quickGo={shouldDisplayQuickJumper ? handleChange : null}
          goButton={goButton}
          showSizeChanger={showSizeChanger}
          sizeChangerRender={sizeChangerRender}
        />
      </ul>
    );
  });

Pagination.displayName = "Pagination";
