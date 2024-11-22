import { makeResetStyles, mergeClasses } from "@griffel/react";

import { tokens, typographyStyles } from "fish-ui-sy";
import { MEDIA_QUERY_SHORT_SCREEN } from "../../contexts";

export const dialogContentClassNames = {
  root: "fish-ui-DialogContent",
};

/**
 * Styles for the root slot
 */
const useStyles = makeResetStyles({
  padding: tokens.strokeWidthThick,
  margin: `calc(${tokens.strokeWidthThick} * -1)`,
  ...typographyStyles.body1,
  overflowY: "auto",
  minHeight: "32px",
  boxSizing: "border-box",
  gridRowStart: 2,
  gridRowEnd: 2,
  gridColumnStart: 1,
  gridColumnEnd: 4,

  [MEDIA_QUERY_SHORT_SCREEN]: {
    overflowY: "unset",
  },
});

/**
 * Apply styling to the DialogContent slots based on the state
 */
export const useDialogContentStyles = ({
  className,
}: {
  className: string | undefined;
}) => {
  const styles = useStyles();
  const _styles = {
    root: mergeClasses(dialogContentClassNames.root, styles, className),
  };
  return _styles;
};
