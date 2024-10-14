import * as React from "react";
import { SizeType } from "../../utilities";

export type SpaceSize = SizeType | number;

export type SpaceProps = React.HTMLAttributes<HTMLElement> & {
  /**
   * The space size
   * both horizontalSize and verticalSize, or [horizontalSize, verticalSize]
   *
   * @default small
   */
  size?: SpaceSize | [SpaceSize, SpaceSize];

  /**
   * The space direction
   * @default horizontal
   */
  direction?: "horizontal" | "vertical";

  /**
   * Set split
   *
   */
  split?: React.ReactNode;

  /**
   * Defines the wrap of the Space.
   * 是否自动换行，仅在 horizontal 时有效
   *
   * @default false
   */
  wrap?: boolean;

  /**
   * Defines the align of the Space.
   *
   * */
  align?: "start" | "end" | "center" | "baseline";
};
