import { makeStyles, mergeClasses } from "@griffel/react";
import { CardPreviewProps } from "./CardPreview.types";

/**
 * Static CSS class names used internally for the component slots.
 */
export const cardPreviewClassNames = {
  root: "fish-ui-CardPreview",
  logo: "fish-ui-CardPreview__logo",
};

const useStyles = makeStyles({
  root: {
    position: "relative",

    [`> :not(.${cardPreviewClassNames.logo})`]: {
      display: "block",
      height: "100%",
      width: "100%",
    },
  },

  logo: {
    position: "absolute",
    bottom: "12px",
    left: "12px",
    width: "32px",
    height: "32px",
  },
});

/**
 * Apply styling to the CardPreview slots based on the props.
 */
export const useCardPreviewStyles = (props: CardPreviewProps) => {
  const styles = useStyles();

  const _styles = {
    root: mergeClasses(
      cardPreviewClassNames.root,
      styles.root,
      props.className
    ),
    logo: mergeClasses(cardPreviewClassNames.logo, styles.logo),
  };

  return _styles;
};
