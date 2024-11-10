import React from "react";
import { MessageBarContextValue } from "../../contexts";

export type MessageBarContextValues = {
  messageBar: MessageBarContextValue;
};

export type MessageBarIntent = "info" | "success" | "warning" | "error";

/**
 * MessageBar Props
 */
export type MessageBarProps = React.HTMLAttributes<HTMLDivElement> &
  Pick<Partial<MessageBarContextValue>, "layout"> & {
    /**
     * Default designs announcement presets
     * @default info
     */
    intent?: MessageBarIntent;

    /**
     * Use squal for page level messages and rounded for component level messages
     * @default rounded
     */
    shape?: "square" | "rounded";
  };
