import React, { ReactNode } from "react";

/**
 * DialogTitle Props
 */
export type DialogTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  /**
   * By default a Dialog with modalType='non-modal' will have a close button action
   */
  action?: ReactNode;
};
