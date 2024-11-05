import {
  shorthands,
  makeStyles,
  mergeClasses,
  makeResetStyles,
} from "@griffel/react";
import { tokens, textClassNames } from "fish-ui-sy";
import { cardPreviewClassNames } from "../CardPreview/useCardPreviewStyles.styles";
import { cardHeaderClassNames } from "../CardHeader/useCardHeaderStyles.styles";
import { cardFooterClassNames } from "../CardFooter/useCardFooterStyles.styles";
import { CardProps } from "./Card.types";

/**
 * Static CSS class names used internally for the component slots.
 */
export const cardClassNames = {
  root: "fish-ui-Card",
};

/**
 * CSS variable names used internally for uniform styling in Card.
 */
export const cardCSSVars = {
  cardSizeVar: "--fish-ui-Card--size",
  cardBorderRadiusVar: "--fish-ui-Card--border-radius",
};

const useCardResetStyles = makeResetStyles({
  overflow: "hidden",
  borderRadius: `var(${cardCSSVars.cardBorderRadiusVar})`,
  padding: `var(${cardCSSVars.cardSizeVar})`,
  gap: `var(${cardCSSVars.cardSizeVar})`,

  display: "flex",
  position: "relative",
  boxSizing: "border-box",
  color: tokens.colorNeutralForeground1,

  // Border setting using after pseudo element to allow CardPreview to render behind it.
  "::after": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    content: '""',
    pointerEvents: "none",

    ...shorthands.borderStyle("solid"),
    ...shorthands.borderWidth(tokens.strokeWidthThin),
    borderRadius: `var(${cardCSSVars.cardBorderRadiusVar})`,
  },

  // Prevents CardHeader and CardFooter from shrinking.
  [`> .${cardHeaderClassNames.root}, > .${cardFooterClassNames.root}`]: {
    flexShrink: 0,
  },
});

const useCardStyles_ = makeStyles({
  orientationHorizontal: {
    flexDirection: "row",
    alignItems: "center",

    // Remove vertical padding to keep CardPreview content flush with Card's borders.
    [`> .${cardPreviewClassNames.root}`]: {
      marginTop: `calc(var(${cardCSSVars.cardSizeVar}) * -1)`,
      marginBottom: `calc(var(${cardCSSVars.cardSizeVar}) * -1)`,
    },
    // Due to Tabster's "Groupper" focus functionality, hidden elements are injected before and after Card's content.
    // As such, the code below targets a CardPreview, when it's the first element.
    // Since this is on horizontal cards, the left padding is removed to keep the content flush with the border.
    [`> :not([aria-hidden="true"]).${cardPreviewClassNames.root}:first-of-type`]:
      {
        marginLeft: `calc(var(${cardCSSVars.cardSizeVar}) * -1)`,
      },
    // Due to Tabster's "Groupper" focus functionality, hidden elements are injected before and after Card's content.
    // As such, the code below targets a CardPreview, when it's the last element.
    // Since this is on horizontal cards, the right padding is removed to keep the content flush with the border.
    [`> :not([aria-hidden="true"]).${cardPreviewClassNames.root}:last-of-type`]:
      {
        marginRight: `calc(var(${cardCSSVars.cardSizeVar}) * -1)`,
      },

    // If the last child is a CardHeader or CardFooter, allow it to grow to fill the available space.
    [`> .${cardHeaderClassNames.root}:last-of-type, > .${cardFooterClassNames.root}:last-of-type`]:
      {
        flexGrow: 1,
      },
  },
  orientationVertical: {
    flexDirection: "column",

    // Remove lateral padding to keep CardPreview content flush with Card's borders.
    [`> .${cardPreviewClassNames.root}`]: {
      marginLeft: `calc(var(${cardCSSVars.cardSizeVar}) * -1)`,
      marginRight: `calc(var(${cardCSSVars.cardSizeVar}) * -1)`,
    },

    // Due to Tabster's "Groupper" focus functionality, hidden elements are injected before and after Card's content.
    // As such, the code below targets a CardPreview, when it's the first element.
    // Since this is on vertical cards, the top padding is removed to keep the content flush with the border.
    [`> :not([aria-hidden="true"]).${cardPreviewClassNames.root}:first-of-type`]:
      {
        marginTop: `calc(var(${cardCSSVars.cardSizeVar}) * -1)`,
      },

    // Due to Tabster's "Groupper" focus functionality, hidden elements are injected before and after Card's content.
    // As such, the code below targets a CardPreview, when it's the first element.
    // Since this is on vertical cards, the bottom padding is removed to keep the content flush with the border.
    [`> :not([aria-hidden="true"]).${cardPreviewClassNames.root}:last-of-type`]:
      {
        marginBottom: `calc(var(${cardCSSVars.cardSizeVar}) * -1)`,
      },
  },

  sizeSmall: {
    [cardCSSVars.cardSizeVar]: "8px",
    [cardCSSVars.cardBorderRadiusVar]: tokens.borderRadiusSmall,
  },
  sizeMedium: {
    [cardCSSVars.cardSizeVar]: "12px",
    [cardCSSVars.cardBorderRadiusVar]: tokens.borderRadiusMedium,
  },
  sizeLarge: {
    [cardCSSVars.cardSizeVar]: "16px",
    [cardCSSVars.cardBorderRadiusVar]: tokens.borderRadiusLarge,
  },

  interactive: {
    [`& .${textClassNames.root}`]: {
      color: "currentColor",
    },
  },

  filled: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,

    "::after": {
      ...shorthands.borderColor(tokens.colorTransparentStroke),
    },
  },
  filledInteractive: {
    cursor: "pointer",
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,

    "::after": {
      ...shorthands.borderColor(tokens.colorTransparentStroke),
    },

    ":hover": {
      color: tokens.colorNeutralForeground1Hover,
      backgroundColor: tokens.colorNeutralBackground1Hover,
      boxShadow: tokens.shadow8,
    },
    ":active": {
      backgroundColor: tokens.colorNeutralBackground1Pressed,
    },
  },
  filledInteractiveSelected: {
    backgroundColor: tokens.colorNeutralBackground1Selected,

    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralStroke1Selected),
    },

    ":hover": {
      color: tokens.colorNeutralForeground1Selected,
      backgroundColor: tokens.colorNeutralBackground1Selected,
    },
  },

  filledAlternative: {
    backgroundColor: tokens.colorNeutralBackground2,
    boxShadow: tokens.shadow4,

    "::after": {
      ...shorthands.borderColor(tokens.colorTransparentStroke),
    },
  },
  filledAlternativeInteractive: {
    cursor: "pointer",
    backgroundColor: tokens.colorNeutralBackground2,
    boxShadow: tokens.shadow4,

    "::after": {
      ...shorthands.borderColor(tokens.colorTransparentStroke),
    },

    ":hover": {
      color: tokens.colorNeutralForeground2Hover,
      backgroundColor: tokens.colorNeutralBackground2Hover,
      boxShadow: tokens.shadow8,
    },
    ":active": {
      backgroundColor: tokens.colorNeutralBackground2Pressed,
    },
  },
  filledAlternativeInteractiveSelected: {
    backgroundColor: tokens.colorNeutralBackground2Selected,

    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralStroke1Selected),
    },

    ":hover": {
      color: tokens.colorNeutralForeground2Selected,
      backgroundColor: tokens.colorNeutralBackground2Selected,
    },
  },

  outline: {
    backgroundColor: tokens.colorTransparentBackground,
    boxShadow: "none",

    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralStroke1),
    },
  },
  outlineInteractive: {
    cursor: "pointer",
    backgroundColor: tokens.colorTransparentBackground,
    boxShadow: "none",

    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralStroke1),
    },

    ":hover": {
      color: tokens.colorNeutralForeground1Hover,
      backgroundColor: tokens.colorTransparentBackgroundHover,

      "::after": {
        ...shorthands.borderColor(tokens.colorNeutralStroke1Hover),
      },
    },
    ":active": {
      backgroundColor: tokens.colorTransparentBackgroundPressed,

      "::after": {
        ...shorthands.borderColor(tokens.colorNeutralStroke1Pressed),
      },
    },
  },
  outlineInteractiveSelected: {
    backgroundColor: tokens.colorTransparentBackgroundSelected,

    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralStroke1Selected),
    },

    ":hover": {
      color: tokens.colorNeutralForeground1Selected,
      backgroundColor: tokens.colorTransparentBackgroundSelected,
    },
  },

  subtle: {
    backgroundColor: tokens.colorSubtleBackground,
    boxShadow: "none",

    "::after": {
      ...shorthands.borderColor(tokens.colorTransparentStroke),
    },
  },
  subtleInteractive: {
    cursor: "pointer",
    backgroundColor: tokens.colorSubtleBackground,
    boxShadow: "none",

    "::after": {
      ...shorthands.borderColor(tokens.colorTransparentStroke),
    },

    ":hover": {
      color: tokens.colorNeutralForeground1Hover,
      backgroundColor: tokens.colorSubtleBackgroundHover,
    },
    ":active": {
      backgroundColor: tokens.colorSubtleBackgroundPressed,
    },
  },
  subtleInteractiveSelected: {
    backgroundColor: tokens.colorSubtleBackgroundSelected,

    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralStroke1Selected),
    },

    ":hover": {
      color: tokens.colorNeutralForeground1Selected,
      backgroundColor: tokens.colorSubtleBackgroundSelected,
    },
  },

  highContrastSelected: {
    "@media (forced-colors: active)": {
      forcedColorAdjust: "none",
      backgroundColor: "Highlight",
      color: "HighlightText",

      [`& .${cardPreviewClassNames.root}, & .${cardFooterClassNames.root}`]: {
        forcedColorAdjust: "auto",
      },

      "::after": {
        ...shorthands.borderColor("Highlight"),
      },
    },
  },

  highContrastInteractive: {
    "@media (forced-colors: active)": {
      ":hover, :active": {
        forcedColorAdjust: "none",
        backgroundColor: "Highlight",
        color: "HighlightText",

        [`& .${cardPreviewClassNames.root}, & .${cardFooterClassNames.root}`]: {
          forcedColorAdjust: "auto",
        },
      },

      "::after": {
        ...shorthands.borderColor("Highlight"),
      },
    },
  },
});

/**
 * Apply styling to the Card slots based on the props.
 */
export const useCardStyles = (props: CardProps) => {
  const {
    appearance = "filled",
    orientation = "vertical",
    size = "medium",
  } = props;

  const resetStyles = useCardResetStyles();
  const styles = useCardStyles_();

  const orientationMap = {
    horizontal: styles.orientationHorizontal,
    vertical: styles.orientationVertical,
  };

  const sizeMap = {
    small: styles.sizeSmall,
    medium: styles.sizeMedium,
    large: styles.sizeLarge,
  };

  const appearanceMap = {
    filled: styles.filled,
    "filled-alternative": styles.filledAlternative,
    outline: styles.outline,
    subtle: styles.subtle,
  };

  const _styles = {
    root: mergeClasses(
      cardClassNames.root,
      resetStyles,
      orientationMap[orientation],
      sizeMap[size],
      appearanceMap[appearance],
      props.className
    ),
  };

  return _styles;
};
