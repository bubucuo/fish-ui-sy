import * as React from "react";
import type { CheckboxProps } from "./Checkbox.types";
import {
  Label,
  mergeClasses,
  useControllableState,
  useEventCallback,
  useId,
  type ForwardRefComponent,
} from "fish-ui-sy";

import {
  checkboxClassNames,
  useCheckboxStyles,
  useInputBaseClassName,
  useInputStyles,
  useLabelStyles,
} from "./useCheckboxStyles.styles";

/**
 * The Checkbox component allows people to enter and edit text.
 */
export const Checkbox: ForwardRefComponent<CheckboxProps> = React.forwardRef(
  (props, ref) => {
    const {
      disabled = false,
      required,
      size = "medium",
      labelPosition = "after",
      onChange,
      label,
      checked: _checked,
      defaultChecked,
      ...restProps
    } = props;

    const [checked, setChecked] = useControllableState({
      defaultState: defaultChecked,
      state: _checked,
      initialState: false,
    });

    const id = useId("checkbox-");

    const styles = useCheckboxStyles({
      checked,
      disabled,
      labelPosition,
      size,
    });

    const inputStyles = useInputStyles();
    const inputBaseClassName = useInputBaseClassName();

    const inputClassNames = mergeClasses(
      checkboxClassNames.input,
      inputBaseClassName,
      size === "large" && inputStyles.large,
      inputStyles[labelPosition]
    );

    const labelStyles = useLabelStyles();

    const _label = label && (
      <Label
        htmlFor={id}
        disabled={disabled}
        required={required}
        size="medium"
        className={mergeClasses(
          checkboxClassNames.label,
          labelStyles.base,
          labelStyles[size],
          labelStyles[labelPosition]
        )}
        children={label}
      />
    );

    return (
      <div {...restProps} className={styles.root} ref={null}>
        <input
          id={id}
          disabled={disabled}
          className={inputClassNames}
          type="checkbox"
          ref={ref as React.Ref<HTMLInputElement>}
          checked={checked === true}
          onChange={useEventCallback((ev) => {
            const val = ev.currentTarget.indeterminate
              ? "mixed"
              : ev.currentTarget.checked;
            onChange?.(ev, { checked: val });
            setChecked(val);
          })}
        />

        {labelPosition === "before" && _label}

        <span aria-hidden={true} className={styles.indicator}></span>

        {labelPosition === "after" && _label}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
