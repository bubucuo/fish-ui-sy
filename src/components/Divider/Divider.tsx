import * as React from "react";
import { mergeClasses } from "@griffel/react";
import {
  dividerClassNames,
  useBaseStyles,
  useHorizontalStyles,
  useVerticalStyles,
} from "./useDividerStyles.styles";

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 分隔线内内容的对齐方式。
   * @default 'center'
   */
  alignContent?: "start" | "center" | "end";

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
export const Divider = ({
  alignContent = "center",
  inset = false,
  vertical = false,
  children,
  className,
  style,
}: DividerProps) => {
  const baseStyles = useBaseStyles();
  const horizontalStyles = useHorizontalStyles();
  const verticalStyles = useVerticalStyles();

  let hasChildren = children !== undefined && children !== null;
  if (hasChildren && typeof children === "string") {
    hasChildren = children.trim() !== "";
  }
  const cls = mergeClasses(
    dividerClassNames.root,

    // Base styles
    baseStyles.base,
    baseStyles[alignContent],

    // Horizontal styles
    !vertical && horizontalStyles.base,
    !vertical && inset && horizontalStyles.inset,
    !vertical && horizontalStyles[alignContent],

    // Vertical styles
    vertical && verticalStyles.base,
    vertical && inset && verticalStyles.inset,
    vertical && verticalStyles[alignContent],
    vertical && hasChildren && verticalStyles.withChildren,

    // Childless styles
    hasChildren === false && baseStyles.childless,

    // User provided class name
    className
  );

  return (
    <div
      className={cls}
      role="separator"
      aria-orientation={vertical ? "vertical" : "horizontal"}
      style={style}
    >
      {hasChildren && <span>{children}</span>}
    </div>
  );
};

Divider.displayName = "Divider";
