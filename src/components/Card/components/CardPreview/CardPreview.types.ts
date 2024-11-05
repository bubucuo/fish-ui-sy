import React from "react";

export type CardPreviewProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Container that holds a logo related to the image preview provided.
   */
  logo?: React.ReactNode;
};
