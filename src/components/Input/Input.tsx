import * as React from "react";
import type { InputProps } from "./Input.types";
import {
  mergeClasses,
  useControllableState,
  useEventCallback,
  type ForwardRefComponent,
} from "fish-ui-sy";
import {
  inputClassNames,
  useContentClassName,
  useContentStyles,
  useInputClassName,
  useInputElementStyles,
  useRootClassName,
  useRootStyles,
} from "./useInputStyles.styles";

/**
 * The Input component allows people to enter and edit text.
 */
export const Input: ForwardRefComponent<InputProps> = React.forwardRef(
  (props, ref) => {
    const {
      type = "text",
      size = "medium",
      appearance = "outline",
      defaultValue, // 非受控组件
      value: _value,
      onChange,
      contentBefore,
      contentAfter,
      disabled,
      className,
      ...restProps
    } = props;
    const invalid = `${props["aria-invalid"]}` === "true";

    const rootStyles = useRootStyles();
    const filled = appearance.indexOf("filled") > -1;

    const contentStyles = useContentStyles();

    const contentClasses = [
      useContentClassName(),
      disabled && contentStyles.disabled,
      contentStyles[size],
    ];

    const inputStyles = useInputElementStyles();

    const [value, setValue] = useControllableState({
      defaultState: defaultValue,
      state: _value,
      initialState: "",
    });

    return (
      <span
        className={mergeClasses(
          inputClassNames.root,
          useRootClassName(),
          rootStyles[size],
          !!contentBefore && rootStyles[`${size}WithContentBefore`],
          !!contentAfter && rootStyles[`${size}WithContentAfter`],
          rootStyles[appearance],
          !disabled &&
            (appearance === "outline" || appearance === "underline") &&
            rootStyles[`${appearance}Interactive`],

          !disabled && filled && rootStyles.filledInteractive,
          filled && rootStyles.filled,
          invalid && rootStyles.invalid,
          disabled && rootStyles.disabled,
          className
        )}
      >
        {contentBefore && (
          <span
            className={mergeClasses(
              inputClassNames.contentBefore,
              ...contentClasses
            )}
          >
            {contentBefore}
          </span>
        )}

        <input
          {...restProps}
          type={type}
          disabled={disabled}
          ref={ref as React.Ref<HTMLInputElement>}
          className={mergeClasses(
            inputClassNames.input,
            useInputClassName(),
            inputStyles[size],
            !!contentBefore && inputStyles[`${size}WithContentBefore`],
            !!contentAfter && inputStyles[`${size}WithContentAfter`],
            disabled && inputStyles.disabled
          )}
          value={value}
          onChange={useEventCallback((e) => {
            const newValue = e.target.value;
            onChange?.(e, { value: newValue });
            setValue(newValue);
          })}
        />

        {contentAfter && (
          <span
            className={mergeClasses(
              inputClassNames.contentAfter,
              ...contentClasses
            )}
          >
            {contentAfter}
          </span>
        )}
      </span>
    );
  }
);

Input.displayName = "Input";
