import React, { ReactNode } from "react";

export function toArray(children: ReactNode) {
  const ret: ReactNode[] = [];
  React.Children.forEach(children, function each(c) {
    ret.push(c);
  });
  return ret;
}
