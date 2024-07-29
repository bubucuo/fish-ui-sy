import { makeStyles } from "@griffel/react";
import { tokens } from "fish-ui-sy";

export const labelClassNames = {
  root: "fish-ui-Label",
  required: "fish-ui-Label__required",
};

/**
 * Styles for the label
 */
export const useStyles = makeStyles({
  root: {
    fontFamily: tokens.fontFamilyBase,
    color: tokens.colorNeutralForeground1,
  },

  disabled: {
    color: tokens.colorNeutralForegroundDisabled,
    "@media (forced-colors: active)": {
      color: "GrayText",
    },
  },

  required: {
    color: tokens.colorPaletteRedForeground3,
    paddingLeft: tokens.spacingHorizontalXS,
  },

  small: {
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
  },

  medium: {
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
  },

  large: {
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    fontWeight: tokens.fontWeightSemibold,
  },

  semibold: {
    fontWeight: tokens.fontWeightSemibold,
  },
});
