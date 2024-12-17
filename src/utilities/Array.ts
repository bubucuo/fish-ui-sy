import React, { ReactNode } from "react";

export function toArray(children: ReactNode) {
  const ret: ReactNode[] = [];
  React.Children.forEach(children, function each(c) {
    ret.push(c);
  });
  return ret;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const areArraysEqual = (arr1: any[], arr2: any[]) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};
