import { mergeClasses } from "@griffel/react";
import { LabelProps } from "./Label.types";
import { labelClassNames, useStyles } from "./useLabelStyles.styles";

export const Label = ({
  disabled = false,
  required = false,
  weight = "regular",
  size = "medium",
  children,
  className,
}: LabelProps) => {
  const styles = useStyles();
  return (
    <span
      className={mergeClasses(
        labelClassNames.root,
        styles.root,
        disabled && styles.disabled,
        styles[size],
        weight === "semibold" && styles.semibold,
        className
      )}
    >
      {children}
      {required && (
        <span
          className={mergeClasses(
            labelClassNames.required,
            styles.required,
            disabled && styles.disabled
          )}
          aria-hidden={true}
        />
      )}
    </span>
  );
};

Label.displayName = "Label";
