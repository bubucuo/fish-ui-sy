import * as React from "react";
import { mergeClasses } from "@griffel/react";
import { dividerClassNames, useBaseStyles, useHorizontalStyles, useVerticalStyles, } from "./useDividerStyles.styles";
/**
 * 内容分割线。
 */
export const Divider = ({ alignContent = "center", inset = false, vertical = false, children, className, style, }) => {
    const baseStyles = useBaseStyles();
    const horizontalStyles = useHorizontalStyles();
    const verticalStyles = useVerticalStyles();
    let hasChildren = children !== undefined && children !== null;
    if (hasChildren && typeof children === "string") {
        hasChildren = children.trim() !== "";
    }
    const cls = mergeClasses(dividerClassNames.root, 
    // Base styles
    baseStyles.base, baseStyles[alignContent], 
    // Horizontal styles
    !vertical && horizontalStyles.base, !vertical && inset && horizontalStyles.inset, !vertical && horizontalStyles[alignContent], 
    // Vertical styles
    vertical && verticalStyles.base, vertical && inset && verticalStyles.inset, vertical && verticalStyles[alignContent], vertical && hasChildren && verticalStyles.withChildren, 
    // Childless styles
    hasChildren === false && baseStyles.childless, 
    // User provided class name
    className);
    return (<div className={cls} role="separator" aria-orientation={vertical ? "vertical" : "horizontal"} style={style}>
      {hasChildren && <span>{children}</span>}
    </div>);
};
Divider.displayName = "Divider";
