import { makeResetStyles, mergeClasses } from "@griffel/react";
import type { MessageBarTitleProps } from "./MessageBarTitle.types";
import { typographyStyles } from "fish-ui-sy";

export const messageBarTitleClassNames = {
  root: "fish-ui-MessageBarTitle",
};

/**
 * Styles for the root slot
 */
const useRootBaseStyles = makeResetStyles({
  ...typographyStyles.body1Strong,
  "::after": {
    content: '" "',
  },
});

/**
 * Apply styling to the MessageBarTitle slots based on the state
 */
export const useMessageBarTitleStyles = (props: MessageBarTitleProps) => {
  const { className } = props;
  const rootBaseStyles = useRootBaseStyles();
  const styles = {
    root: mergeClasses(
      messageBarTitleClassNames.root,
      rootBaseStyles,
      className
    ),
  };

  return styles;
};
