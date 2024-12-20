import React from "react";
import { Button } from "../../../Button";
import { Pager } from "../Pager";
import { PagerProps } from "../Pager/Pager.types";
import { calculatePage } from "../../utils";

/**
 * @param showPrevNextJumpers 是否展示向前/向后按钮
 * @param total 数据总数
 * @param handleChange 页码改变的回调
 * @param pageSize 每页条数
 * @param current 当前页码
 * @param showLessItems 是否展示更少的页码
 */

interface UsePageListProps {
  showPrevNextJumpers: boolean;
  current: number;
  pageSize: number;
  total: number;
  handleChange: (page: number) => void;
  showLessItems?: boolean;
  allPages: number;
}

export const usePageList = ({
  showPrevNextJumpers,
  total,
  handleChange,
  pageSize,
  current,
  showLessItems,
  allPages,
}: UsePageListProps) => {
  const pagerList = [];

  const pageBufferSize = showLessItems ? 1 : 2;
  const pagerProps = {
    onClick: handleChange,
    page: -1,
  };

  if (allPages <= 3 + pageBufferSize * 2) {
    if (!allPages) {
      pagerList.push(<Pager {...pagerProps} disabled key="noPager" page={1} />);
    }

    for (let i = 1; i <= allPages; i += 1) {
      pagerList.push(
        <Pager {...pagerProps} key={i} page={i} active={current === i} />
      );
    }
  } else {
    const prevItemTitle = showLessItems ? "向前 3 页" : "向前 5 页";
    const nextItemTitle = showLessItems ? "向后 3 页" : "向后 5 页";

    let jumpPrev: React.ReactNode = null;
    let jumpNext: React.ReactNode = null;

    const jumpPrevHandle = () => {
      handleChange(Math.max(1, current - (showLessItems ? 3 : 5)));
    };

    const jumpNextHandle = () => {
      handleChange(Math.min(allPages, current + (showLessItems ? 3 : 5)));
    };

    if (showPrevNextJumpers) {
      jumpPrev = (
        <li
          title={prevItemTitle}
          key="prev"
          onClick={jumpPrevHandle}
          tabIndex={0}
        >
          <Button appearance="transparent">...</Button>
        </li>
      );

      jumpNext = (
        <li
          title={nextItemTitle}
          key="next"
          onClick={jumpNextHandle}
          tabIndex={0}
        >
          <Button appearance="transparent">...</Button>
        </li>
      );
    }

    let left = Math.max(1, current - pageBufferSize);
    let right = Math.min(current + pageBufferSize, allPages);

    if (current - 1 <= pageBufferSize) {
      right = 1 + pageBufferSize * 2;
    }
    if (allPages - current <= pageBufferSize) {
      left = allPages - pageBufferSize * 2;
    }

    for (let i = left; i <= right; i += 1) {
      pagerList.push(
        <Pager {...pagerProps} key={i} page={i} active={current === i} />
      );
    }

    if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
      pagerList[0] = React.cloneElement<PagerProps>(pagerList[0], {});

      pagerList.unshift(jumpPrev);
    }

    if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
      pagerList.push(jumpNext);
    }

    if (left !== 1) {
      pagerList.unshift(<Pager {...pagerProps} key={1} page={1} />);
    }
    if (right !== allPages) {
      pagerList.push(<Pager {...pagerProps} key={allPages} page={allPages} />);
    }
  }

  return [pagerList];
};
