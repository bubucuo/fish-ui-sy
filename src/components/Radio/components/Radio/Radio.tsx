import React from "react";
import { ForwardRefComponent, Label, useId } from "fish-ui-sy";
import { RadioProps } from "./Radio.types";
import { useRadioStyles } from "./useRadioStyles.styles";
import { useRadioGroupContextValue } from "../../context";

export const Radio: ForwardRefComponent<RadioProps> = React.forwardRef(
  (props, ref) => {
    const group = useRadioGroupContextValue();

    const {
      value,
      className,
      name = group.name,
      checked = group.value !== undefined
        ? group.value === props.value
        : undefined,
      defaultChecked = group.defaultValue !== undefined
        ? group.defaultValue === props.value
        : undefined,
      labelPosition = group.layout === "horizontal-stacked" ? "below" : "after",
      disabled = group.disabled,
      required = group.required,
      onChange,
      label,
      ...restProps
    } = props;

    const styles = useRadioStyles({ labelPosition, className });

    const id = useId("fish-ui-radio");

    return (
      <span {...restProps} className={styles.root} ref={null}>
        <input
          id={id}
          type="radio"
          className={styles.input}
          ref={ref as React.Ref<HTMLInputElement>}
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          required={required}
          onChange={(ev) =>
            onChange && onChange(ev, { value: ev.target.value })
          }
        />
        <div aria-hidden={true} className={styles.indicator}></div>
        {label && (
          <Label
            htmlFor={id}
            disabled={disabled}
            required={required}
            size="medium"
            className={styles.label}
            children={label}
          />
        )}
      </span>
    );
  }
);

Radio.displayName = "Radio";
