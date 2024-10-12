import React from "react";

/**
 * Card component props.
 */
export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Sets the appearance of the card.
   *
   * `filled`
   * The card will have a shadow, border and background color.
   *
   * `filled-alternative`
   * This appearance is similar to `filled`, but the background color will be a little darker.
   *
   * `outline`
   * This appearance is similar to `filled`, but the background color will be transparent and no shadow applied.
   *
   * `subtle`
   * This appearance is similar to `filled-alternative`, but no border is applied.
   *
   * @default 'filled'
   */
  appearance?: "filled" | "filled-alternative" | "outline" | "subtle";

  /**
   * Defines the orientation of the card.
   *
   * @default 'vertical'
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Controls the card's border radius and padding between inner elements.
   *
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
};
