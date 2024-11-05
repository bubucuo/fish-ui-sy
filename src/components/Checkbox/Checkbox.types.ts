import * as React from "react";

/**
 * Checkbox Props
 */
export type CheckboxProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  disabled?: boolean;

  required?: boolean;

  /**
   * The controlled value for the checkbox.
   *
   * @default false
   */
  checked?: "mixed" | boolean;

  /**
   * Whether the checkbox should be rendered as checked by default.
   */
  defaultChecked?: "mixed" | boolean;

  /**
   * Checkboxes don't support children. To add a label, use the `label` prop.
   */
  children?: never;

  /**
   * The Checkbox's label.
   */
  label?: React.ReactNode | string;

  /**
   * The position of the label relative to the checkbox indicator.
   *
   * @default after
   */
  labelPosition?: "before" | "after";

  /**
   * Callback to be called when the checked state value changes.
   */
  onChange?: (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: CheckboxOnChangeData
  ) => void;

  /**
   * The size of the checkbox indicator.
   *
   * @default medium
   */
  size?: "medium" | "large";
};

/**
 * Data for the onChange event for checkbox.
 */
export interface CheckboxOnChangeData {
  checked: "mixed" | boolean;
}
