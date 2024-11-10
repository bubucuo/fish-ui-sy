import { makeResetStyles, makeStyles, mergeClasses } from "@griffel/react";
import { tokens } from "fish-ui-sy";
import { MessageBarContextValue } from "../../contexts";

export const messageBarActionsClassNames = {
  root: "fish-ui-MessageBarActions",
  containerAction: "fish-ui-MessageBarActions__containerAction",
};

/**
 * Styles for the root slot
 */
const useRootBaseStyles = makeResetStyles({
  gridArea: "secondaryActions",
  display: "flex",
  columnGap: tokens.spacingHorizontalM,
  paddingRight: tokens.spacingHorizontalM,
});

const useContainerActionBaseStyles = makeResetStyles({
  gridArea: "actions",
  paddingRight: tokens.spacingHorizontalM,
});

const useMultilineStyles = makeStyles({
  root: {
    justifyContent: "end",
    marginTop: tokens.spacingVerticalMNudge,
    marginBottom: tokens.spacingVerticalS,
    marginRight: "0px",
    paddingRight: tokens.spacingVerticalM,
  },

  noActions: {
    display: "none",
  },
});

/**
 * Apply styling to the MessageBarActions slots based on the state
 */
type State = {
  layout: MessageBarContextValue["layout"];
  hasActions: boolean;
  className?: string;
};
export const useMessageBarActionsStyles = (state: State) => {
  const rootBaseStyles = useRootBaseStyles();
  const containerActionBaseStyles = useContainerActionBaseStyles();
  const multilineStyles = useMultilineStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styles = {} as any;
  styles.root = mergeClasses(
    messageBarActionsClassNames.root,
    rootBaseStyles,
    state.layout === "multiline" && multilineStyles.root,
    !state.hasActions && multilineStyles.noActions,
    state.className
  );

  styles.containerAction = mergeClasses(
    messageBarActionsClassNames.containerAction,
    containerActionBaseStyles
  );

  return styles;
};
