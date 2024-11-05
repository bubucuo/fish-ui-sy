import { ReactNode } from "react";

/**
 * Label Props
 */
// export type LabelProps = React.HTMLAttributes<HTMLLabelElement> & {

export type LabelProps = React.ComponentProps<"label"> & {
  /**
   * Renders the label as disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Displays an indicator that the label is for a required field. The required prop can be set to true to display
   * an asterisk (*). Or it can be set to a string or jsx content to display a different indicator.
   * @example <Label required="Required field" /> or <Label required="*" /> or <Label required /> or <Label required={<span>Required field</span>} />
   * @default false
   */
  required?: ReactNode;

  /**
   * A label supports different sizes.
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";

  /**
   * A label supports regular and semibold fontweight.
   * @default regular
   */
  weight?: "regular" | "semibold";
};
