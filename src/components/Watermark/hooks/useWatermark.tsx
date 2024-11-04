import * as React from "react";

import { getStyleStr } from "../utils";

/**
 * Base size of the canvas, 1 for parallel layout and 2 for alternate layout
 * Only alternate layout is currently supported
 */
export const BaseSize = 2;
export const FontGap = 3;

export type AppendWatermark = (
  base64Url: string,
  markWidth: number,
  container: HTMLElement
) => void;

export default function useWatermark(
  markStyle: React.CSSProperties
): [appendWatermark: AppendWatermark, isWatermarkEle: (ele: Node) => boolean] {
  const watermarkMap = React.useRef(new Map<HTMLElement, HTMLDivElement>());

  const appendWatermark = (
    base64Url: string,
    markWidth: number,
    container: HTMLElement
  ) => {
    if (container) {
      if (!watermarkMap.current.get(container)) {
        const newWatermarkEle = document.createElement("div");
        watermarkMap.current.set(container, newWatermarkEle);
      }

      const watermarkEle = watermarkMap.current.get(container)!;

      watermarkEle.setAttribute(
        "style",
        getStyleStr({
          ...markStyle,
          backgroundImage: `url('${base64Url}')`,
          backgroundSize: `${Math.floor(markWidth)}px`,
        })
      );
      container.append(watermarkEle);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isWatermarkEle = (ele: any) =>
    Array.from(watermarkMap.current.values()).includes(ele);

  return [appendWatermark, isWatermarkEle];
}
