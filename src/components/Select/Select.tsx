import React from "react";
import { ForwardRefComponent, useEventCallback } from "fish-ui-sy";
import { SelectProps } from "./Select.types";
import { useSelectStyles } from "./useSelectStyles.styles";

export const Select: ForwardRefComponent<SelectProps> = React.forwardRef(
  (props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, size, id, defaultValue, value, onChange, ...restProps } =
      props;
    const styles = useSelectStyles({
      size: "medium",
      appearance: "outline",
      ...props,
    });
    return (
      <span className={styles.root}>
        <select
          {...restProps}
          id={id}
          className={styles.select}
          defaultValue={defaultValue}
          value={value}
          ref={ref as React.Ref<HTMLSelectElement>}
          onChange={useEventCallback((ev) => {
            onChange?.(ev, { value: ev.target.value });
          })}
        >
          {children}
        </select>
        <span className={styles.icon}>
          <svg aria-hidden="true">
            <path
              d="M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </span>
    );
  }
);

Select.displayName = "Select";
