import type { ButtonProps } from "../Button/Button.types";

export type CompoundButtonProps = ButtonProps & {
  /**
   * Second line of text that describes the action this button takes.
   */
  secondaryContent?: React.ReactNode;
};
