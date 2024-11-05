import React from "react";

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Element used to render an image or avatar related to the card.
   */
  image?: React.ReactNode;
  /**
   * Element used to render the main header title.
   */
  header?: React.ReactNode;

  /**
   * Element used to render short descriptions related to the title.
   */
  description?: React.ReactNode;

  /**
   * Container that renders on the far end of the footer, used for action buttons.
   */
  action?: React.ReactNode;
};
