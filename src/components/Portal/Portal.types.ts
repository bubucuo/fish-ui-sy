import * as React from "react";

export type PortalProps = {
  /**
   * React children
   */
  children?: React.ReactNode;

  /**
   * Where the portal children are mounted on DOM
   *
   * @default a new element on document.body without any styling
   */
  mountNode?:
    | HTMLElement
    | null
    | { element?: HTMLElement | null; className?: string };
};
