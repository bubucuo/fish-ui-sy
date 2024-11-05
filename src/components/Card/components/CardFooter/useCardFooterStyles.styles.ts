import { makeStyles, mergeClasses, shorthands } from "@griffel/react";
import { CardFooterProps } from "./CardFooter.types";

/**
 * Static CSS class names used internally for the component slots.
 */
export const cardFooterClassNames = {
  root: "fish-ui-CardFooter",
  action: "fish-ui-CardFooter__action",
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
  },
  action: {
    marginLeft: "auto",

    // when the card is selected or hovered, it has custom high contrast color and background styles
    // setting this ensures action buttons adopt those colors and are still visible in forced-colors mode
    "@media (forced-colors: active)": {
      "& .fish-ui-Button, & .fish-ui-Link": {
        ...shorthands.borderColor("currentColor"),
        color: "currentColor",
        outlineColor: "currentColor",
      },
    },
  },
});

/**
 * Apply styling to the CardFooter slots based on the state.
 */
export const useCardFooterStyles = (props: CardFooterProps) => {
  const styles = useStyles();
  const _styles = {
    root: mergeClasses(cardFooterClassNames.root, styles.root, props.className),
    action: mergeClasses(cardFooterClassNames.action, styles.action),
  };

  return _styles;
};
