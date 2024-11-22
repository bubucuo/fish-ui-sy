import * as React from "react";

export type DialogTriggerAction = "open" | "close";

export type DialogTriggerProps = React.HTMLAttributes<HTMLHeadingElement> & {
  /**
   * Explicitly declare if the trigger is responsible for opening or
   * closing a Dialog visibility state.
   * 显示声明触发器是打开还是关闭对话框的可见状态。
   *
   * If `DialogTrigger` is outside `DialogSurface` then it'll be `open` by default
   * 如果`DialogTrigger`在`DialogSurface`之外，则默认为`open`
   *
   * If `DialogTrigger` is inside `DialogSurface` then it'll be `close` by default
   * 如果`DialogTrigger`在`DialogSurface`内部，则默认为`close`
   */
  action?: DialogTriggerAction;
  /**
   * Disables internal trigger mechanism that ensures a child provided will be a compliant ARIA button.
   * 禁用内部触发器机制，确保提供的子元素将是符合ARIA的按钮。
   * @default false
   */
  disableButtonEnhancement?: boolean;
};

/**
 * Props that are passed to the child of the DialogTrigger when cloned to ensure correct behaviour for the Dialog
 */
export type UnionToIntersection<U> = (
  U extends unknown ? (x: U) => U : never
) extends (x: infer I) => U
  ? I
  : never;

export type DialogTriggerState = {
  children: React.ReactElement | null;
};
