import { mergeClasses } from "@griffel/react";
import { ButtonProps } from "./Button.types";
import {
  buttonClassNames,
  useIconBaseClassName,
  useIconStyles,
  useRootBaseClassName,
  useRootDisabledStyles,
  useRootFocusStyles,
  useRootIconOnlyStyles,
  useRootStyles,
} from "./useButtonStyles.styles";

export const Button = (props: ButtonProps) => {
  const {
    appearance = "secondary",
    disabled = false,
    disabledFocusable = false,
    icon,
    iconPosition = "before",
    shape = "rounded",
    size = "medium",
    children,
    className,
  } = props;

  const rootBaseClassName = useRootBaseClassName();
  const iconBaseClassName = useIconBaseClassName();

  const rootStyles = useRootStyles();
  const rootDisabledStyles = useRootDisabledStyles();
  const rootFocusStyles = useRootFocusStyles();
  const rootIconOnlyStyles = useRootIconOnlyStyles();
  const iconStyles = useIconStyles();

  const iconOnly = Boolean(icon?.children && !props.children); // Slots definition

  // if (icon) {
  //   icon.className = mergeClasses(
  //     buttonClassNames.icon,
  //     iconBaseClassName,
  //     !!children && iconStyles[iconPosition],
  //     iconStyles[size],
  //     icon.className
  //   );
  // }

  return (
    <button
      className={mergeClasses(
        buttonClassNames.root,
        rootBaseClassName,

        appearance && rootStyles[appearance],

        rootStyles[size],
        icon && size === "small" && rootStyles.smallWithIcon,
        icon && size === "large" && rootStyles.largeWithIcon,
        rootStyles[shape],

        // Disabled styles
        (disabled || disabledFocusable) && rootDisabledStyles.base,
        (disabled || disabledFocusable) && rootDisabledStyles.highContrast,
        appearance &&
          (disabled || disabledFocusable) &&
          rootDisabledStyles[appearance],

        // Focus styles
        appearance === "primary" && rootFocusStyles.primary,
        rootFocusStyles[size],
        rootFocusStyles[shape],

        // Icon-only styles
        iconOnly && rootIconOnlyStyles[size],

        // User provided class name
        className
      )}
    >
      {iconPosition !== "after" && icon}
      {children}
      {iconPosition === "after" && icon}
    </button>
  );
};

Button.displayName = "Button";
