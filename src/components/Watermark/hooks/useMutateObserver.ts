import * as React from "react";
import { canUseDOM } from "../../../utilities";

const defaultOptions: MutationObserverInit = {
  subtree: true, //当为 true 时，将会监听以 target 为根节点的整个子树。默认值为 false。
  childList: true, //当为 true 时，监听 target 节点中发生的节点的新增与删除（同时，如果 subtree 为 true，会针对整个子树生效）。默认值为 false。
  attributeFilter: ["style", "class"], //一个用于声明哪些属性名会被监听的数组。如果不声明该属性，所有属性的变化都将触发通知。
};

export default function useMutateObserver(
  nodeOrList: HTMLElement | HTMLElement[],
  callback: MutationCallback,
  options: MutationObserverInit = defaultOptions
) {
  React.useEffect(() => {
    if (!canUseDOM() || !nodeOrList) {
      return;
    }

    let instance: MutationObserver;

    const nodeList = Array.isArray(nodeOrList) ? nodeOrList : [nodeOrList];

    if ("MutationObserver" in window) {
      // callback是一个回调函数，每当被指定的节点或子树以及配置项有 DOM 变动时会被调用。
      instance = new MutationObserver(callback);

      nodeList.forEach((element) => {
        // 配置 MutationObserver 在 DOM 更改匹配给定选项时，通过其回调函数开始接收通知。
        instance.observe(element, options);
      });
    }
    return () => {
      // 从 MutationObserver 的通知队列中删除所有待处理的通知，并将它们返回到 MutationRecord 对象的新 Array 中。
      instance?.takeRecords();
      // 阻止 MutationObserver 实例继续接收的通知，直到再次调用其 observe() 方法，该观察者对象包含的回调函数都不会再被调用。
      instance?.disconnect();
    };
  }, [options, nodeOrList]);
}
