import * as React from "react";

/**
 * Radio Props
 */
export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "size"
> & {
  /**
   * The value of the RadioGroup when this Radio item is selected.
   */
  value?: string;

  /**
   * The Checkbox's label.
   */
  label?: React.ReactNode | string;

  /**
   * The position of the label relative to the radio indicator.
   *
   * This defaults to `after` unless the Radio is inside a RadioGroup with `layout="horizontalStacked"`,
   * in which case it defaults to `below`.
   *
   * @defaultvalue after
   */
  labelPosition?: "after" | "below";

  /**
   * Disable this Radio item.
   */
  disabled?: boolean;

  /**
   * Callback when this Radio is selected in its group.
   *
   * **Note:** `onChange` is NOT called when this Radio is deselected.
   * Use RadioGroup's `onChange` event to determine when the selection in the group changes.
   */
  onChange?: (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: RadioOnChangeData
  ) => void;
};

/**
 * Data for the onChange event for Radio.
 */
export type RadioOnChangeData = {
  /**
   * The value prop of this Radio item.
   */
  value: string;
};
