import React from "react";
import { ForwardRefComponent } from "fish-ui-sy";
import { CompoundButtonProps } from "./CompoundButton.types";
import { useCompoundButtonStyles } from "./useCompoundButtonStyles.styles";

export const CompoundButton: ForwardRefComponent<CompoundButtonProps> =
  React.forwardRef((props, ref) => {
    const {
      appearance = "secondary",
      disabled = false,
      disabledFocusable = false,
      icon,
      iconPosition = "before",
      shape = "rounded",
      size = "medium",
      children,
      secondaryContent,
      ...restProps
    } = props;

    const iconOnly = !!(!children && icon);

    const styles = useCompoundButtonStyles({
      appearance,
      disabled,
      disabledFocusable,
      iconPosition,
      shape,
      size,
      ...props,
      iconOnly,
    });

    let Icon;
    if (icon) {
      Icon = <span className={styles.icon}>{icon}</span>;
    }

    return (
      <button
        {...restProps}
        className={styles.root}
        ref={ref as React.Ref<HTMLButtonElement & HTMLAnchorElement>}
      >
        {iconPosition === "before" && Icon}
        <span className={styles.contentContainer}>
          {children}
          {secondaryContent && (
            <span className={styles.secondaryContent}>{secondaryContent}</span>
          )}
        </span>
        {iconPosition === "after" && Icon}
      </button>
    );
  });

CompoundButton.displayName = "CompoundButton";
