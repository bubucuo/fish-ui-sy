import { makeStyles } from "@griffel/react";
import { tokens } from "fish-ui-sy";

export const textClassNames = {
  root: "fish-ui-Text",
};

/**
 * Styles for the root slot
 */
export const useTextStyles = makeStyles({
  root: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    fontWeight: tokens.fontWeightRegular,
    textAlign: "start",
    display: "inline",
    whiteSpace: "normal",
    overflow: "visible",
    textOverflow: "clip",
  },
  nowrap: {
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  truncate: {
    textOverflow: "ellipsis",
  },
  block: {
    display: "block",
  },
  italic: {
    fontStyle: "italic",
  },
  underline: {
    textDecorationLine: "underline",
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  strikethroughUnderline: {
    textDecorationLine: "line-through underline",
  },
  base100: {
    fontSize: tokens.fontSizeBase100,
    lineHeight: tokens.lineHeightBase100,
  },
  base200: {
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
  },
  base400: {
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
  },
  base500: {
    fontSize: tokens.fontSizeBase500,
    lineHeight: tokens.lineHeightBase500,
  },
  base600: {
    fontSize: tokens.fontSizeBase600,
    lineHeight: tokens.lineHeightBase600,
  },
  hero700: {
    fontSize: tokens.fontSizeHero700,
    lineHeight: tokens.lineHeightHero700,
  },
  hero800: {
    fontSize: tokens.fontSizeHero800,
    lineHeight: tokens.lineHeightHero800,
  },
  hero900: {
    fontSize: tokens.fontSizeHero900,
    lineHeight: tokens.lineHeightHero900,
  },
  hero1000: {
    fontSize: tokens.fontSizeHero1000,
    lineHeight: tokens.lineHeightHero1000,
  },
  monospace: {
    fontFamily: tokens.fontFamilyMonospace,
  },
  numeric: {
    fontFamily: tokens.fontFamilyNumeric,
  },
  weightMedium: {
    fontWeight: tokens.fontWeightMedium,
  },
  weightSemibold: {
    fontWeight: tokens.fontWeightSemibold,
  },
  weightBold: {
    fontWeight: tokens.fontWeightBold,
  },
  alignCenter: {
    textAlign: "center",
  },
  alignEnd: {
    textAlign: "end",
  },
  alignJustify: {
    textAlign: "justify",
  },
});
