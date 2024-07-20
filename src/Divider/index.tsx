import React from "react";
import classNames from "classnames";
import { ConfigContext } from "../config-provider";
import useStyle from "./style";

export interface DividerProps {
  prefixCls?: string;
  type?: "horizontal" | "vertical";
  orientation?: "left" | "right" | "center";
  orientationMargin?: string | number;
  className?: string;
  rootClassName?: string;
  children?: React.ReactNode;
  dashed?: boolean;
  style?: React.CSSProperties;
  plain?: boolean;
}

/**
 *对不同章节的文本段落进行分割。
 * 对行内文字/链接进行分割，例如表格的操作列。
 */
const Divider: React.FC<DividerProps> = ({
  prefixCls: customizePrefixCls,
  type = "horizontal",
  orientation = "center",
  orientationMargin,
  className,
  rootClassName,
  children,
  dashed,
  plain,
  style,
  ...restProps
}) => {
  const { getPrefixCls, direction, divider } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls("divider", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);

  const orientationPrefix =
    orientation.length > 0 ? `-${orientation}` : orientation;
  const hasChildren = !!children;
  const hasCustomMarginLeft =
    orientation === "left" && orientationMargin != null;
  const hasCustomMarginRight =
    orientation === "right" && orientationMargin != null;
  const classString = classNames(
    prefixCls,
    divider?.className,
    hashId,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-text`]: hasChildren,
      [`${prefixCls}-with-text${orientationPrefix}`]: hasChildren,
      [`${prefixCls}-dashed`]: !!dashed,
      [`${prefixCls}-plain`]: !!plain,
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-no-default-orientation-margin-left`]: hasCustomMarginLeft,
      [`${prefixCls}-no-default-orientation-margin-right`]:
        hasCustomMarginRight,
    },
    className,
    rootClassName
  );

  const memoizedOrientationMargin = React.useMemo<string | number>(() => {
    if (typeof orientationMargin === "number") {
      return orientationMargin;
    }
    if (/^\d+$/.test(orientationMargin!)) {
      return Number(orientationMargin);
    }
    return orientationMargin!;
  }, [orientationMargin]);

  const innerStyle: React.CSSProperties = {
    ...(hasCustomMarginLeft && { marginLeft: memoizedOrientationMargin }),
    ...(hasCustomMarginRight && { marginRight: memoizedOrientationMargin }),
  };

  return wrapSSR(
    <div
      className={classString}
      style={{ ...divider?.style, ...style }}
      {...restProps}
      role="separator"
    >
      {children && type !== "vertical" && (
        <span className={`${prefixCls}-inner-text`} style={innerStyle}>
          {children}
        </span>
      )}
    </div>
  );
};

export default Divider;
