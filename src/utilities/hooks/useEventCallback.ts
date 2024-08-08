import * as React from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

/**
 * @param fn - The callback function that will be used
 */
export const useEventCallback = <Args extends unknown[], Return>(
  fn: (...args: Args) => Return
) => {
  const callbackRef = React.useRef<typeof fn>(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });

  // useLayoutEffect is used to ensure that the ref is updated synchronously
  useIsomorphicLayoutEffect(() => {
    callbackRef.current = fn;
  }, [fn]);

  return React.useCallback(
    (...args: Args) => {
      const callback = callbackRef.current;
      return callback(...args);
    },
    [callbackRef]
  );
};
