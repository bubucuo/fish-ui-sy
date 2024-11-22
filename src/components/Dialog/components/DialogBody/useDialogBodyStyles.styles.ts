import { makeResetStyles, mergeClasses } from "@griffel/react";
import {
  DIALOG_GAP,
  MEDIA_QUERY_BREAKPOINT_SELECTOR,
  MEDIA_QUERY_SHORT_SCREEN,
  SURFACE_PADDING,
} from "../../contexts";

export const dialogBodyClassNames = {
  root: "fish-ui-DialogBody",
};

/**
 * Styles for the root slot
 */
const useResetStyles = makeResetStyles({
  overflow: "unset",
  gap: DIALOG_GAP,
  display: "grid",
  maxHeight: `calc(100vh - 2 * ${SURFACE_PADDING})`,
  boxSizing: "border-box",
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns: "1fr 1fr auto",

  [MEDIA_QUERY_BREAKPOINT_SELECTOR]: {
    maxWidth: "100vw",
    gridTemplateRows: "auto 1fr auto",
  },

  [MEDIA_QUERY_SHORT_SCREEN]: {
    maxHeight: "unset",
  },
});

/**
 * Apply styling to the DialogBody slots based on the state
 */
export const useDialogBodyStyles = ({
  className,
}: {
  className: string | undefined;
}) => {
  const resetStyles = useResetStyles();

  const styles = {
    root: mergeClasses(dialogBodyClassNames.root, resetStyles, className),
  };

  return styles;
};
