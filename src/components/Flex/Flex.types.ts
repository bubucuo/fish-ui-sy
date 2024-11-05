import * as React from "react";
import { SizeType } from "../../utilities";

export type FlexProps = React.HTMLAttributes<HTMLElement> & {
  /**
   * Defines the orientation of the Flex.
   *
   * @default false
   */
  vertical?: boolean;
  /**
   * Defines the wrap of the Flex.
   *
   * @default nowrap
   */
  wrap?: boolean | React.CSSProperties["flexWrap"];

  /**
   * Defines the justify of the Flex.
   *
   * @default normal
   * */
  justify?: React.CSSProperties["justifyContent"];
  /**
   * Defines the align of the Flex.
   * @default normal
   * */
  align?: React.CSSProperties["alignItems"];
  /**
   * Defines the flex of the Flex.
   *
   * @default normal
   * */
  flex?: React.CSSProperties["flex"];
  /**
   * Defines the gap.
   * */
  gap?: SizeType | React.CSSProperties["gap"];
};
