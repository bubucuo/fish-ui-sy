import { makeResetStyles, makeStyles, mergeClasses } from "@griffel/react";

import {
  DIALOG_GAP,
  MEDIA_QUERY_BREAKPOINT_SELECTOR,
} from "../../contexts/constants";
import { DialogActionsProps } from "./DialogActions.types";

export const dialogActionsClassNames = {
  root: "fish-ui-DialogActions",
};

/**
 * Styles for the root slot
 */
const useResetStyles = makeResetStyles({
  gap: DIALOG_GAP,
  height: "fit-content",
  boxSizing: "border-box",
  display: "flex",
  gridRowStart: 3,
  gridRowEnd: 3,
  [MEDIA_QUERY_BREAKPOINT_SELECTOR]: {
    flexDirection: "column",
    justifySelf: "stretch",
  },
});

const useStyles = makeStyles({
  gridPositionEnd: {
    justifySelf: "end",
    gridColumnStart: 2,
    gridColumnEnd: 4,
    [MEDIA_QUERY_BREAKPOINT_SELECTOR]: {
      gridColumnStart: 1,
      gridRowStart: 4,
      gridRowEnd: "auto",
    },
  },
  gridPositionStart: {
    justifySelf: "start",
    gridColumnStart: 1,
    gridColumnEnd: 2,
    [MEDIA_QUERY_BREAKPOINT_SELECTOR]: {
      gridColumnEnd: 4,
      gridRowStart: 3,
      gridRowEnd: "auto",
    },
  },
  fluidStart: {
    gridColumnEnd: 4,
  },
  fluidEnd: {
    gridColumnStart: 1,
  },
});

/**
 * Apply styling to the DialogActions slots based on the state
 */
export const useDialogActionsStyles = (state: DialogActionsProps) => {
  const resetStyles = useResetStyles();
  const styles = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _styles = {} as any;
  _styles.root = mergeClasses(
    dialogActionsClassNames.root,
    resetStyles,
    state.position === "start" && styles.gridPositionStart,
    state.position === "end" && styles.gridPositionEnd,
    state.fluid && state.position === "start" && styles.fluidStart,
    state.fluid && state.position === "end" && styles.fluidEnd,
    state.className
  );
  return _styles;
};
