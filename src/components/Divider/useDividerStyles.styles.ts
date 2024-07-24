import { tokens } from "@/index";
import { shorthands, makeStyles } from "@griffel/react";
// import {   DividerState } from './Divider.types';

export const dividerClassNames = {
  root: "fish-ui-Divider",
  wrapper: "fish-ui-Divider__wrapper",
};

const contentSpacing = "12px";
const insetSpacing = "12px";
const maxStartEndLength = "8px";
const minStartEndLength = "8px;";

const borderColor = "red";
const borderWidth = "1px";

// console.log(
//   "%c [  ]-19",
//   "font-size:13px; background:pink; color:#bf2c9f;",
//   tokens.colorNeutralForeground3BrandHover
// );

export const useBaseStyles = makeStyles({
  // Base styles
  base: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    position: "relative",

    // fontFamily: tokens.fontFamilyBase,
    // fontSize: tokens.fontSizeBase200,
    // fontWeight: tokens.fontWeightRegular,
    // lineHeight: tokens.lineHeightBase200,

    textAlign: "center",
    // color:'orange',

    // color: tokens.colorNeutralForeground3BrandHover,

    // Border styles
    // border:'1px solid red',

    // color: tokens.colorBrandForeground1,

    "::before": {
      content: '""',
      boxSizing: "border-box",
      display: "flex",
      flexGrow: 1,
      // ...shorthands.borderColor(tokens.colorBrandStroke1),

      ...shorthands.borderColor(borderColor),
    },

    "::after": {
      boxSizing: "border-box",
      content: '""',

      display: "flex",
      flexGrow: 1,
      // ...shorthands.borderColor(tokens.colorBrandStroke1),

      ...shorthands.borderColor(borderColor),
    },
  },

  // Childless styles
  childless: {
    "::before": {
      marginBottom: 0,
      marginRight: 0,
    },

    "::after": {
      marginLeft: 0,
      marginTop: 0,
    },
  },

  // Alignment variations
  start: {
    "::after": {
      content: '""',
    },
  },
  center: {
    "::before": {
      content: '""',
    },
    "::after": {
      content: '""',
    },
  },
  end: {
    "::before": {
      content: '""',
    },
  },
});

export const useHorizontalStyles = makeStyles({
  // Base styles
  base: {
    width: "100%",
    "::before": {
      borderTopStyle: "solid",
      borderTopWidth: borderWidth,
      minWidth: minStartEndLength,
    },

    "::after": {
      borderTopStyle: "solid",
      borderTopWidth: borderWidth,
      minWidth: minStartEndLength,
    },
  },

  // Inset styles
  inset: {
    paddingLeft: insetSpacing,
    paddingRight: insetSpacing,
  },

  // Alignment variations
  start: {
    "::before": {
      content: '""',
      marginRight: contentSpacing,
      maxWidth: maxStartEndLength,
    },

    "::after": {
      marginLeft: contentSpacing,
    },
  },
  center: {
    "::before": {
      marginRight: contentSpacing,
    },
    "::after": {
      marginLeft: contentSpacing,
    },
  },
  end: {
    "::before": {
      marginRight: contentSpacing,
    },
    "::after": {
      content: '""',
      marginLeft: contentSpacing,
      maxWidth: maxStartEndLength,
    },
  },
});

export const useVerticalStyles = makeStyles({
  // Base styles
  base: {
    flexDirection: "column",
    minHeight: "20px",

    "::before": {
      borderRightStyle: "solid",
      borderRightWidth: borderWidth,
      minHeight: minStartEndLength,
    },

    "::after": {
      borderRightStyle: "solid",
      borderRightWidth: borderWidth,
      minHeight: minStartEndLength,
    },
  },

  // Inset styles
  inset: {
    marginTop: insetSpacing,
    marginBottom: insetSpacing,
  },

  // With children styles
  withChildren: {
    minHeight: "84px",
  },

  // Alignment variations
  start: {
    "::before": {
      content: '""',
      marginBottom: contentSpacing,
      maxHeight: maxStartEndLength,
    },

    "::after": {
      marginTop: contentSpacing,
    },
  },
  center: {
    "::before": {
      marginBottom: contentSpacing,
    },
    "::after": {
      marginTop: contentSpacing,
    },
  },
  end: {
    "::before": {
      marginBottom: contentSpacing,
    },
    "::after": {
      content: '""',
      marginTop: contentSpacing,
      maxHeight: maxStartEndLength,
    },
  },
});
