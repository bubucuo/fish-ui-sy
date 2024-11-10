import * as React from "react";
import { isHTMLElement } from "fish-ui-sy";

export function useMessageBarReflow(enabled: boolean = false) {
  const targetDocument = document;
  const forceUpdate = React.useReducer(() => ({}), {})[1];
  const reflowingRef = React.useRef(false);
  // TODO: exclude types from this lint rule: https://github.com/microsoft/fluentui/issues/31286
  // eslint-disable-next-line no-restricted-globals
  const resizeObserverRef = React.useRef<ResizeObserver | null>(null);
  const prevInlineSizeRef = React.useRef(-1);

  const handleResize: ResizeObserverCallback = React.useCallback(
    (entries) => {
      const entry = entries[0];
      // `borderBoxSize` is not supported before Chrome 84, Firefox 92, nor Safari 15.4
      const inlineSize =
        entry?.borderBoxSize?.[0].inlineSize ??
        entry?.target.getBoundingClientRect().width;
      if (inlineSize === undefined || !entry) {
        return;
      }

      const { target } = entry;

      if (!isHTMLElement(target)) {
        return;
      }

      let nextReflowing: boolean | undefined;

      // No easy way to really determine when the single line layout will fit
      // Just keep try to set single line layout as long as the size is growing
      // Will cause flickering when size is being adjusted gradually (i.e. drag) - but this should not be a common case
      if (reflowingRef.current) {
        if (prevInlineSizeRef.current < inlineSize) {
          nextReflowing = false;
        }
      } else {
        const scrollWidth = target.scrollWidth;
        if (inlineSize < scrollWidth) {
          nextReflowing = true;
        }
      }

      prevInlineSizeRef.current = inlineSize;
      if (
        typeof nextReflowing !== "undefined" &&
        reflowingRef.current !== nextReflowing
      ) {
        reflowingRef.current = nextReflowing;
        forceUpdate();
      }
    },
    [forceUpdate]
  );

  const ref = React.useCallback(
    (el: HTMLElement | null) => {
      if (!enabled || !el || !targetDocument?.defaultView) {
        return;
      }

      resizeObserverRef.current?.disconnect();

      const win = targetDocument.defaultView;
      const resizeObserver = new win.ResizeObserver(handleResize);
      resizeObserverRef.current = resizeObserver;
      resizeObserver.observe(el, { box: "border-box" });
    },
    [targetDocument, handleResize, enabled]
  );

  React.useEffect(() => {
    return () => {
      // 组件卸载之前，清理 ResizeObserver
      resizeObserverRef.current?.disconnect();
    };
  }, []);

  return { ref, reflowing: reflowingRef.current };
}
