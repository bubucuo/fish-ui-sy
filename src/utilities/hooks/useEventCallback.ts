import * as React from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useConst } from "./useConst";

/**
 * @param fn - The callback function that will be used
 */
// 缓存函数
// useCallback(缓存函数，这个函数就是第一个参数)
// useMemo(缓存的是值，这个值就是第一个参数函数的返回值)
// 都有依赖项，当依赖项发生变化时，才会重新计算
// ref
// ARef.current存储了一个值之后，后来再每次通过ARef.current取到的是最新的值
// useEventCallback缓存的是函数，与组件渲染没有直接关系，只有在函数调用时才会用到
// fiber节点上(内存中)
export const useEventCallback = <Args extends unknown[], Return>(
  fn: (...args: Args) => Return
) => {
  const callbackRef = React.useRef<typeof fn>(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });

  // ssr
  // useEffect | useLayoutEffect
  useIsomorphicLayoutEffect(() => {
    callbackRef.current = fn;
  }, [fn]);

  return useConst(() => (...args: Args) => {
    const callback = callbackRef.current;
    return callback(...args);
  });
};
