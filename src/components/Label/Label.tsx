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
  console.log(
    "%c [  ]-15",
    "font-size:13px; background:pink; color:#bf2c9f;",
    children,
    disabled
  );
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
          children={typeof required === "string" ? required : "*"}
        />
      )}
    </span>
  );
};

Label.displayName = "Label";
