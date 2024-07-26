import * as React from "react";
import type { InputProps } from "./Input.types";
import type { ForwardRefComponent } from "@/index";
import {
  inputClassNames,
  useContentClassName,
  useContentStyles,
  useInputClassName,
  useInputElementStyles,
  useRootClassName,
  useRootStyles,
} from "./useInputStyles.styles";
import { mergeClasses } from "@griffel/react";

/**
 * The Input component allows people to enter and edit text.
 */
export const Input: ForwardRefComponent<InputProps> = React.forwardRef(
  (props, ref) => {
    const {
      type = "text",
      size = "medium",
      appearance = "outline",
      defaultValue,
      onChange,
      contentBefore,
      contentAfter,
      disabled,
      className,
    } = props;

    const invalid = `${props["aria-invalid"]}` === "true";
    const filled = appearance.startsWith("filled");

    const rootStyles = useRootStyles();
    const inputStyles = useInputElementStyles();
    const contentStyles = useContentStyles();

    const [value, setValue] = React.useState(props.value || defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      onChange?.(e, { value: newValue });
      setValue(newValue);
    };

    const contentClasses = [
      useContentClassName(),
      disabled && contentStyles.disabled,
      contentStyles[size],
    ];

    if (contentBefore) {
      contentBefore.className = mergeClasses(
        inputClassNames.contentBefore,
        ...contentClasses,
        contentBefore.className
      );
    }
    if (contentAfter) {
      contentAfter.className = mergeClasses(
        inputClassNames.contentAfter,
        ...contentClasses,
        contentAfter.className
      );
    }

    return (
      <span
        className={mergeClasses(
          inputClassNames.root,
          useRootClassName(),
          rootStyles[size],
          contentBefore && rootStyles[`${size}WithContentBefore`],
          contentAfter && rootStyles[`${size}WithContentAfter`],
          rootStyles[appearance],
          !disabled &&
            appearance === "outline" &&
            rootStyles.outlineInteractive,
          !disabled &&
            appearance === "underline" &&
            rootStyles.underlineInteractive,
          !disabled && filled && rootStyles.filledInteractive,
          filled && rootStyles.filled,
          !disabled && invalid && rootStyles.invalid,
          disabled && rootStyles.disabled,
          className
        )}
      >
        {contentBefore && contentBefore}

        <input
          className={mergeClasses(
            inputClassNames.input,
            useInputClassName(),
            inputStyles[size],
            contentBefore && inputStyles[`${size}WithContentBefore`],
            contentAfter && inputStyles[`${size}WithContentAfter`],
            disabled && inputStyles.disabled,
            className
          )}
          type={type}
          ref={ref}
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
        />
        {contentAfter && contentAfter}
      </span>
    );
  }
);

Input.displayName = "Input";
