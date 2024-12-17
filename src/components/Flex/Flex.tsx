import React from "react";
import type { ForwardRefComponent } from "fish-ui-sy";
import { FlexProps } from "./Flex.types";
import { useFlexStyles } from "./useFlexStyles.styles";
import { isPresetSize } from "../../utilities/utils/gapSize";

export const Flex: ForwardRefComponent<FlexProps> = React.forwardRef(
  (props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      children,
      flex,
      gap,
      style,
      wrap,
      justify,
      align,
      vertical,
      className,
      ...restProps
    } = props;
    const styles = useFlexStyles({ vertical, gap, className });

    const mergedStyle = {
      ...style,
      flexWrap: wrap === true ? "wrap" : wrap || "nowrap",
      justifyContent: justify || "normal",
      alignItems: align || "normal",
    } as React.CSSProperties;

    if (flex) {
      mergedStyle.flex = flex;
    }
    if (gap && !isPresetSize(gap)) {
      // 有效的css属性值
      mergedStyle.gap = gap;
    }

    return (
      <div
        {...restProps}
        ref={ref as React.Ref<HTMLDivElement>}
        className={styles.root}
        style={mergedStyle}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = "Flex";
