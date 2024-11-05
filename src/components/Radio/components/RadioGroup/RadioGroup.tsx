import React from "react";
import {
  ForwardRefComponent,
  RadioGroupProps,
  isHTMLElement,
  useEventCallback,
  useId,
} from "fish-ui-sy";
import { RadioGroupProvider, useRadioGroupContextValues } from "../../context";
import { useRadioGroupStyles } from "./useRadioGroupStyles.styles";

export const RadioGroup: ForwardRefComponent<RadioGroupProps> =
  React.forwardRef((props, ref) => {
    const {
      children,
      className,
      onChange,
      layout = "vertical",
      ...restProps
    } = props;
    const generatedName = useId("fish-ui-radiogroup-");

    const contextValues = useRadioGroupContextValues({
      name: generatedName,
      layout,
      ...props,
    });

    const cls = useRadioGroupStyles({
      layout,
      className,
    });
    return (
      <RadioGroupProvider value={contextValues.radioGroup}>
        <div
          {...restProps}
          className={cls}
          ref={ref as React.Ref<HTMLDivElement>}
          // 管理 RadioGroup 的 value，判断当前 Radio 是否被change
          onChange={useEventCallback((ev) => {
            if (
              onChange &&
              isHTMLElement(ev.target, {
                constructorName: "HTMLInputElement",
              }) &&
              ev.target.type === "radio"
            ) {
              onChange(ev, { value: ev.target.value });
            }
          })}
        >
          {children}
        </div>
      </RadioGroupProvider>
    );
  });

RadioGroup.displayName = "RadioGroup";
