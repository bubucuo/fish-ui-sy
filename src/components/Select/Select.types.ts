import * as React from "react";

export type SelectProps = Omit<
  React.InputHTMLAttributes<HTMLSelectElement>,
  "onChange" | "size"
> & {
  /**
   * Controls the colors and borders of the Select.
   *
   * @default 'outline'
   */
  appearance?: "outline" | "underline" | "filled-darker" | "filled-lighter";

  /**
   * Called when the user changes the select element's value by selecting an option.
   */
  onChange?: (
    ev: React.ChangeEvent<HTMLSelectElement>,
    data: SelectOnChangeData
  ) => void;

  /**
   * Matches the Input sizes
   *
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
};

/**
 * Data passed to the `onChange` callback when a new option is selected.
 */
export type SelectOnChangeData = {
  /**
   * Updated `<select>` value, taken from either the selected option's value prop or inner text.
   */
  value: string;
};
