import { makeResetStyles, makeStyles, mergeClasses } from "@griffel/react";
import { DialogTitleProps, typographyStyles } from "fish-ui-sy";

export const dialogTitleClassNames = {
  root: "fish-ui-DialogTitle",
  action: "fish-ui-DialogTitle__action",
};

/**
 * Styles for the root slot
 */
const useRootResetStyles = makeResetStyles({
  ...typographyStyles.subtitle1,
  margin: 0,
  gridRowStart: 1,
  gridRowEnd: 1,
  gridColumnStart: 1,
  gridColumnEnd: 3,
});

const useStyles = makeStyles({
  rootWithoutAction: {
    gridColumnEnd: 4,
  },
});

/**
 * Styles for the action slot
 */
const useActionResetStyles = makeResetStyles({
  gridRowStart: 1,
  gridRowEnd: 1,
  gridColumnStart: 3,
  justifySelf: "end",
  alignSelf: "start",
});

/**
 * Styles to be applied on internal elements used by default action on non-modal Dialog
 * @internal
 */
export const useDialogTitleInternalStyles = makeResetStyles({
  overflow: "visible",
  padding: 0,
  borderStyle: "none",
  position: "relative",
  boxSizing: "content-box",
  backgroundColor: "inherit",
  color: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  cursor: "pointer",
  lineHeight: 0,
  WebkitAppearance: "button",
  textAlign: "unset",
});

/**
 * Apply styling to the DialogTitle slots based on the state
 */
export const useDialogTitleStyles = (state: DialogTitleProps) => {
  const rootResetStyles = useRootResetStyles();
  const actionResetStyles = useActionResetStyles();
  const styles = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _styles = {} as any;
  _styles.root = mergeClasses(
    dialogTitleClassNames.root,
    rootResetStyles,
    !state.action && styles.rootWithoutAction,
    state.className
  );

  _styles.action = mergeClasses(
    dialogTitleClassNames.action,
    actionResetStyles
  );

  return _styles;
};
