import React from "react";
import {
  RadioGroupContextValue,
  RadioGroupProps,
} from "../components/RadioGroup/RadioGroup.types";

// 1. 创建一个 RadioGroupContext
const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(
  null
);
// 2. Provider 提供 context value 给 children
export const RadioGroupProvider = RadioGroupContext.Provider;
// 3. 后代函数组件通过Hook API useContext消费 context value
export const useRadioGroupContextValue = () =>
  React.useContext(RadioGroupContext) || {};

export const useRadioGroupContextValues = (props: Partial<RadioGroupProps>) => {
  const { name, value, defaultValue, disabled, layout, required } = props;

  const radioGroup = React.useMemo<RadioGroupContextValue>(
    () => ({
      name,
      value,
      defaultValue,
      disabled,
      layout,
      required,
    }),
    [name, value, defaultValue, disabled, layout, required]
  );

  return { radioGroup };
};
