import { makeResetStyles, mergeClasses } from "@griffel/react";
import { MessageBarBodyProps, tokens, typographyStyles } from "fish-ui-sy";

export const messageBarBodyClassNames = {
  root: "fish-ui-MessageBarBody",
};

const useRootBaseStyles = makeResetStyles({
  ...typographyStyles.body1,
  gridArea: "body",
  paddingRight: tokens.spacingHorizontalM,
});

/**
 * Apply styling to the MessageBarBody slots based on the state
 */
export const useMessageBarBodyStyles = (props: MessageBarBodyProps) => {
  const rootBaseStyles = useRootBaseStyles();
  const styles = {
    root: mergeClasses(
      messageBarBodyClassNames.root,
      rootBaseStyles,
      props.className
    ),
  };

  return styles;
};
