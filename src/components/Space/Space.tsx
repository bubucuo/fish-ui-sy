import React from "react";
import type { ForwardRefComponent } from "fish-ui-sy";
import { SpaceProps } from "./Space.types";
import { useSpaceStyles } from "./useSpaceStyles.styles";
import { isPresetSize, isValidGapNumber } from "../../utilities/utils/gapSize";
import Item from "./Item";
import { SpaceContextProvider, SpaceContextType } from "./context";

export const Space: ForwardRefComponent<SpaceProps> = React.forwardRef(
  (props, ref) => {
    const {
      align,
      className,
      direction = "horizontal",
      size = "small",
      children,
      split,
      wrap = false,
      style,
      ...restProps
    } = props;

    const [horizontalSize, verticalSize] = Array.isArray(size)
      ? size
      : ([size, size] as const);

    const styles = useSpaceStyles({
      className,
      align,
      direction,
      size: [horizontalSize, verticalSize],
    });

    // Calculate latest one
    let latestIndex = 0;
    const childNodes = Array.isArray(children) ? children : [children];
    const nodes = childNodes.map<React.ReactNode>((child, i) => {
      if (child !== null && child !== undefined) {
        latestIndex = i;
      }

      const itemClassName = styles.item;

      const key = (child && child.key) || `${itemClassName}-${i}`;

      return (
        <Item className={itemClassName} key={key} index={i} split={split}>
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

    if (!isPresetSize(horizontalSize) && isValidGapNumber(horizontalSize)) {
      gapStyle.columnGap = horizontalSize;
    }

    if (!isPresetSize(verticalSize) && isValidGapNumber(verticalSize)) {
      gapStyle.rowGap = verticalSize;
    }

    return (
      <div
        {...restProps}
        ref={ref as React.Ref<HTMLDivElement>}
        className={styles.root}
        style={{ ...style, ...gapStyle }}
      >
        <SpaceContextProvider value={spaceContext}>
          {nodes}
        </SpaceContextProvider>
      </div>
    );
  }
);

Space.displayName = "Space";
