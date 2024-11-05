import * as React from "react";
import { mergeClasses } from "@griffel/react";
import {
  dividerClassNames,
  useBaseStyles,
  useHorizontalStyles,
  useVerticalStyles,
} from "./useDividerStyles.styles";
import type { ForwardRefComponent } from "fish-ui-sy";

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 分隔线内内容的对齐方式。
   * @default 'center'
   */
  alignContent?: "start" | "center" | "end";

  /**
   * 默认外观。
   *
   * @default 'default'
   */
  appearance?: "brand" | "default" | "strong" | "subtle";

  /**
   * 在divider的开头和结尾添加padding。
   *
   * @default false
   */
  inset?: boolean;

  /**
   * 分隔线可以是水平的（默认）或垂直的
   *
   * @default false
   */
  vertical?: boolean;
};

/**
 * 内容分割线。
 */
export const Divider: ForwardRefComponent<DividerProps> = React.forwardRef(
  (
    {
      alignContent = "center",
      appearance = "default",
      inset = false,
      vertical = false,
      className,
      style,
      children,
      ...restProps
    },
    ref
  ) => {
    const baseStyles = useBaseStyles();
    const horizontalStyles = useHorizontalStyles();
    const verticalStyles = useVerticalStyles();
    let hasChildren = children !== undefined && children !== null;
    if (hasChildren && typeof children === "string") {
      hasChildren = children.trim() !== "";
    }
    return (
      <div
        {...restProps}
        ref={ref as React.Ref<HTMLDivElement>}
        className={mergeClasses(
          dividerClassNames.root,

          // base
          baseStyles.base,
          baseStyles[alignContent],
          baseStyles[appearance],

          // 横线
          !vertical && horizontalStyles.base,
          !vertical && inset && horizontalStyles.inset,
          !vertical && horizontalStyles[alignContent],

          // 竖线
          vertical && verticalStyles.base,
          vertical && inset && verticalStyles.inset,
          vertical && verticalStyles[alignContent],
          vertical && hasChildren && verticalStyles.withChildren,

          // 没有子节点
          hasChildren === false && baseStyles.childless,

          className
        )}
        role="separator"
        aria-orientation={vertical ? "vertical" : "horizontal"}
        style={style}
      >
        {hasChildren && (
          <span className={dividerClassNames.wrapper}>{children}</span>
        )}
      </div>
    );
  }
);

Divider.displayName = "Divider";
