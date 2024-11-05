import * as React from "react";
export type WatermarkProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "content"
> & {
  // export type WatermarkProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * The width of the watermark, the default value of content is its own width
   * @default 120
   */
  width?: number;

  /**
   * The height of the watermark, the default value of content is its own height
   * @default 64
   */
  height?: number;

  /**
   * Pass the watermark to the pop-up component such as Modal
   * @default true
   */
  inherit?: boolean;

  /**
   * When the watermark is drawn, the rotation Angle, unit °
   * @default -22
   */
  rotate?: number;

  /**
   * The z-index of the appended watermark element
   * @default 9
   */
  zIndex?: number;

  /**
   * Image source, it is recommended to export 2x or 3x image, high priority (support base64 format)
   */
  image?: string;

  /**
   * Watermark text content
   * @default FishUI-bubucuo
   */
  content?: string | string[];

  /**
   * Text style
   * @default Font
   */
  font?: {
    /**
     * The font color
     * @default rgba(0,0,0,0.15)
     */
    color?: string;

    /**
     * The font size
     * @default 20
     */
    fontSize?: string | number;

    /**
     * The font weight
     * @default normal
     */
    fontWeight?: "normal" | "light" | "weight" | number;

    /**
     * The font style
     * @default none
     */
    fontStyle?: "none" | "normal" | "italic" | "oblique";

    /**
     * The font family
     * @default Arial
     */
    fontFamily?: string;
  };

  /**
   * The spacing between watermarks
   * @default [100, 100]
   */

  gap?: [number, number];

  /**
   * The offset of the watermark from the upper left corner of the container. The default is gap/2
   * @default [gap[0]/2, gap[1]/2]
   */
  offset?: [number, number];
};

// export interface Font {
//   /**
//    * The font color
//    * @default rgba(0,0,0,0.15)
//    */
//   color?: string;

//   /**
//    * The font size
//    * @default 20
//    */
//   fontSize?: string | number;

//   /**
//    * The font weight
//    * @default normal
//    */
//   fontWeight?: "normal" | "light" | "weight" | number;

//   /**
//    * The font style
//    * @default none
//    */
//   fontStyle?: "none" | "normal" | "italic" | "oblique";

//   /**
//    * The font family
//    * @default Arial
//    */
//   fontFamily?: string;
// }
