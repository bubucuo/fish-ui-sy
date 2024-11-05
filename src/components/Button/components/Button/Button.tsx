import React from "react";
import { ForwardRefComponent } from "fish-ui-sy";
import { ButtonProps } from "./Button.types";
import { useButtonStyles } from "./useButtonStyles.styles";

export const Button: ForwardRefComponent<ButtonProps> = React.forwardRef(
  (props, ref) => {
    const {
      appearance = "secondary",
      disabled = false,
      disabledFocusable = false,
      icon,
      iconPosition = "before",
      shape = "rounded",
      size = "medium",
      children,
      ...restProps
    } = props;

    const iconOnly = !!(!children && icon);

    const styles = useButtonStyles({
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
        {children}
        {iconPosition === "after" && Icon}
      </button>
    );
  }
);

Button.displayName = "Button";
