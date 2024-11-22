export type DialogActionsPosition = "start" | "end";

/**
 * DialogActions Props
 */
export type DialogActionsProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * defines the position on the dialog grid of the actions
   * @default 'end'
   */
  position?: DialogActionsPosition;

  /**
   * Makes the actions expand the entire width of the DialogBody
   * @default false
   */
  fluid?: boolean;
};
