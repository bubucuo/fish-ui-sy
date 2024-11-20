import * as React from "react";
import * as ReactDOM from "react-dom";
import type { PortalProps } from "./Portal.types";
import { toMountNodeProps } from "./utils/toMountNodeProps";
import { usePortalMountNode } from "./usePortalMountNode";

/**
 * A portal provides a way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */
export const Portal: React.FC<PortalProps> = (props) => {
  const { element } = toMountNodeProps(props.mountNode);
  const fallbackElement = usePortalMountNode({ disabled: !!element });
  const mountNode = element ?? fallbackElement;

  return (
    <span hidden>
      {mountNode && ReactDOM.createPortal(props.children, mountNode)}
    </span>
  );
};

Portal.displayName = "Portal";
