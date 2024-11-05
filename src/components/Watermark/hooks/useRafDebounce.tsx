import React from "react";
import { useEventCallback } from "fish-ui-sy";
import raf from "./raf";
/**
 * Callback will only execute last one for each raf
 */
export default function useRafDebounce(callback: VoidFunction) {
  const executeRef = React.useRef(false);
  const rafRef = React.useRef<number>();

  const wrapperCallback = useEventCallback(callback);

  return () => {
    if (executeRef.current) {
      return;
    }

    executeRef.current = true;
    wrapperCallback();

    // window.requestAnimationFrame() 方法会告诉浏览器你希望执行一个动画。它要求浏览器在下一次重绘之前，调用用户提供的回调函数。
    rafRef.current = raf(() => {
      executeRef.current = false;
    });
  };
}
