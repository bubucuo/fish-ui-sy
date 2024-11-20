import { useInsertionEffect } from "react";
import { usePortalMountNodeContext } from "./PortalMountNodeContext";
import { mergeClasses } from "@griffel/react";
import { useDisposable } from "use-disposable";

import { usePortalMountNodeStylesStyles } from "./usePortalMountNodeStyles.styles";

export type UsePortalMountNodeOptions = {
  /**
   * Since hooks cannot be called conditionally use this flag to disable creating the node
   */
  disabled?: boolean;

  className?: string;
};

/**
 * Creates a new element on a "document.body" to mount portals.
 */
export const usePortalMountNode = (
  options: UsePortalMountNodeOptions
): HTMLElement | null => {
  const targetDocument = document;
  const mountNode = usePortalMountNodeContext();

  const classes = usePortalMountNodeStylesStyles();

  const className = mergeClasses(classes.root, options.className);
  const targetNode: HTMLElement | ShadowRoot | undefined =
    mountNode ?? targetDocument?.body;
  // https://github1s.com/microsoft/use-disposable/blob/HEAD/src/useDisposable.ts
  // 严格模式下，useDisposable 会在每次渲染时都创建一个新的元素，
  // 因为 useDisposable 会在每次渲染时都创建一个新的函数，而这个函数会在每次渲染时都返回一个新的元素。
  const element = useDisposable(() => {
    if (targetNode === undefined || options.disabled) {
      return [null, () => null];
    }

    const newElement = targetNode.ownerDocument.createElement("div");
    targetNode.appendChild(newElement);
    return [newElement, () => newElement.remove()];
  }, [targetNode]);

  // useInsertionEffect allows inserting elements into the DOM before any layout Effects fire.
  useInsertionEffect(() => {
    if (!element) {
      return;
    }

    const classesToApply = className.split(" ").filter(Boolean);

    element.classList.add(...classesToApply);
    element.setAttribute("data-portal-node", "true");

    return () => {
      element.classList.remove(...classesToApply);
    };
  }, [className, element]);

  return element;
};
