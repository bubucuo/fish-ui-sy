import React from "react";
import { ForwardRefComponent, mergeClasses } from "fish-ui-sy";
import type { LabelProps } from "fish-ui-sy";
import { labelClassNames, useStyles } from "./useLabelStyles.styles";

export const Label: ForwardRefComponent<LabelProps> = React.forwardRef(
  (
    {
      disabled = false,
      required = false,
      weight = "regular",
      size = "medium",
      children,
      className,
      ...restProps
    },
    ref
  ) => {
    const styles = useStyles();
    return (
      <label
        ref={ref as React.Ref<HTMLLabelElement>}
        className={mergeClasses(
          labelClassNames.root,
          styles.root,
          disabled && styles.disabled,
          styles[size],
          weight === "semibold" && styles.semibold,
          className
        )}
        aria-hidden="true"
        {...restProps}
      >
        {children}
        {required && (
          <span
            className={mergeClasses(
              labelClassNames.required,
              styles.required,
              disabled && styles.disabled
            )}
          >
            {typeof required === "boolean" ? "*" : required}
          </span>
        )}
      </label>
    );
  }
);
