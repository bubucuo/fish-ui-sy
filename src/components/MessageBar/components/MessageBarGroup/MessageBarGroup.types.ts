import React from "react";
/**
 * MessageBarGroup Props
 */
export type MessageBarGroupProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactElement[] | React.ReactElement;
  animate?: "exit-only" | "both";
};
