import { makeStyles, mergeClasses, shorthands } from "@griffel/react";
import { CardHeaderProps } from "./CardHeader.types";

/**
 * Static CSS class names used internally for the component slots.
 */
export const cardHeaderClassNames = {
  root: "fish-ui-CardHeader",
  image: "fish-ui-CardHeader__image",
  header: "fish-ui-CardHeader__header",
  description: "fish-ui-CardHeader__description",
  action: "fish-ui-CardHeader__action",
};

/**
 * CSS variable names used internally for uniform styling in CardHeader.
 */
export const cardHeaderCSSVars = {
  cardHeaderGapVar: "--fish-ui-CardHeader--gap",
};

const useStyles = makeStyles({
  root: {
    [cardHeaderCSSVars.cardHeaderGapVar]: "12px",
    alignItems: "center",
  },
  image: {
    display: "inline-flex",
    marginRight: `var(${cardHeaderCSSVars.cardHeaderGapVar})`,
  },
  header: {
    display: "flex",
  },
  description: {
    display: "flex",
  },
  action: {
    marginLeft: `var(${cardHeaderCSSVars.cardHeaderGapVar})`,

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

const useStylesGrid = makeStyles({
  root: {
    display: "grid",
    gridAutoColumns: "min-content 1fr min-content",
  },

  image: {
    gridColumnStart: "1",
    gridRowStart: "span 2",
  },

  header: {
    gridColumnStart: "2",
    gridRowStart: "1",
  },

  description: {
    gridColumnStart: "2",
    gridRowStart: "2",
  },

  action: {
    gridColumnStart: "3",
    gridRowStart: "span 2",
  },
});

const useStylesFlex = makeStyles({
  root: {
    display: "flex",
  },

  header: {
    flexGrow: 1,
  },

  image: {},
  description: {},
  action: {},
});

/**
 * Apply styling to the CardHeader slots based on the props.
 */
export const useCardHeaderStyles = (props: CardHeaderProps) => {
  const styles = useStyles();
  const stylesGrid = useStylesGrid();
  const stylesFlex = useStylesFlex();

  const boxModelStyles = props.description ? stylesGrid : stylesFlex;

  const getSlotStyles = (
    slotName: "root" | "image" | "header" | "description" | "action"
  ): string => {
    return mergeClasses(
      cardHeaderClassNames[slotName],
      styles[slotName],
      boxModelStyles[slotName]
    );
  };

  const _styles = {
    root: mergeClasses(getSlotStyles("root"), props.className),
    image: getSlotStyles("image"),
    header: getSlotStyles("header"),
    description: getSlotStyles("description"),
    action: getSlotStyles("action"),
  };

  return _styles;
};
