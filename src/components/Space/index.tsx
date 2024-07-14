import React from "react";
import classNames from "classnames";
import { ConfigContext } from "../config-provider";
import useStyle from "./style";
import { SizeType } from "../config-provider/SizeContext";
import { isPresetSize, isValidGapNumber } from "../_util/gapSize";
import toArray from "rc-util/lib/Children/toArray";
import { SpaceContextProvider } from "./context";
import Item from "./Item";

export type SpaceSize = SizeType | number;

export interface SpaceProps {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
  // size?: //SpaceSize | [SpaceSize, SpaceSize];
  direction?: "horizontal" | "vertical";
  // No `stretch` since many components do not support that.
  align?: "start" | "end" | "center" | "baseline";
  split?: React.ReactNode;
  wrap?: boolean;
  classNames?: { item: string };
  styles?: { item: React.CSSProperties };
}

/**
 *设置组件之间的间距。
 */
const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    getPrefixCls,
    space,
    direction: directionConfig,
  } = React.useContext(ConfigContext);

  const {
    size = space?.size || "small",
    align,
    className,
    rootClassName,
    children,
    direction = "horizontal",
    prefixCls: customizePrefixCls,
    split,
    style,
    wrap = false,
    classNames: customClassNames,
    styles,
    ...otherProps
  } = props;

  const [horizontalSize, verticalSize] = Array.isArray(size)
    ? size
    : ([size, size] as const);

  const isPresetVerticalSize = isPresetSize(verticalSize);

  const isPresetHorizontalSize = isPresetSize(horizontalSize);

  const isValidVerticalSize = isValidGapNumber(verticalSize);

  const isValidHorizontalSize = isValidGapNumber(horizontalSize);

  const childNodes = toArray(children, { keepEmpty: true });

  const mergedAlign =
    align === undefined && direction === "horizontal" ? "center" : align;
  const prefixCls = getPrefixCls("space", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);

  const cls = classNames(
    prefixCls,
    space?.className,
    hashId,
    `${prefixCls}-${direction}`,
    {
      [`${prefixCls}-rtl`]: directionConfig === "rtl",
      [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
      [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
      [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize,
    },
    className,
    rootClassName
  );

  const itemClassName = classNames(
    `${prefixCls}-item`,
    customClassNames?.item ?? space?.classNames?.item
  );

  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map<React.ReactNode>((child, i) => {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }

    const key = (child && child.key) || `${itemClassName}-${i}`;

    return (
      <Item
        className={itemClassName}
        key={key}
        index={i}
        split={split}
        style={styles?.item ?? space?.styles?.item}
      >
        {child}
      </Item>
    );
  });

  const spaceContext = React.useMemo<SpaceContextType>(
    () => ({ latestIndex }),
    [latestIndex]
  );

  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }

  const gapStyle: React.CSSProperties = {};

  if (wrap) {
    gapStyle.flexWrap = "wrap";
  }

  if (!isPresetHorizontalSize && isValidHorizontalSize) {
    gapStyle.columnGap = horizontalSize;
  }

  if (!isPresetVerticalSize && isValidVerticalSize) {
    gapStyle.rowGap = verticalSize;
  }

  return wrapSSR(
    <div
      ref={ref}
      className={cls}
      style={{ ...gapStyle, ...space?.style, ...style }}
      {...otherProps}
    >
      <SpaceContextProvider value={spaceContext}>{nodes}</SpaceContextProvider>
    </div>
  );
});

export default Space;
