import { shorthands, makeStyles } from "@griffel/react";
import { tokens } from "fish-ui-sy";

const contentSpacing = "12px";
const insetSpacing = "12px";
const maxStartEndLength = "8px";
const minStartEndLength = "8px;";

export const dividerClassNames = {
  root: "fish-ui-Divider",
  wrapper: "fish-ui-Divider__wrapper",
};

export const useBaseStyles = makeStyles({
  // Base styles
  base: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    position: "relative",

    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase200,
    textAlign: "center",

    "::before": {
      boxSizing: "border-box",
      display: "flex",
      flexGrow: 1,
    },

    "::after": {
      boxSizing: "border-box",
      display: "flex",
      flexGrow: 1,
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

  // Appearance variations
  brand: {
    color: tokens.colorBrandForeground1,

    "::before": {
      ...shorthands.borderColor(tokens.colorBrandStroke1),
    },

    "::after": {
      ...shorthands.borderColor(tokens.colorBrandStroke1),
    },
  },
  default: {
    color: tokens.colorNeutralForeground2,

    "::before": {
      ...shorthands.borderColor(tokens.colorNeutralStroke2),
    },

    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralStroke2),
    },
  },
  subtle: {
    color: tokens.colorNeutralForeground3,

    "::before": {
      ...shorthands.borderColor(tokens.colorNeutralStroke3),
    },

    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralStroke3),
    },
  },
  strong: {
    color: tokens.colorNeutralForeground1,

    "::before": {
      ...shorthands.borderColor(tokens.colorNeutralStroke1),
    },

    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralStroke1),
    },
  },
});

// 横线
export const useHorizontalStyles = makeStyles({
  // Base styles
  base: {
    width: "100%",

    "::before": {
      borderTopStyle: "solid",
      borderTopWidth: tokens.strokeWidthThin,
      minWidth: minStartEndLength,
    },

    "::after": {
      borderTopStyle: "solid",
      borderTopWidth: tokens.strokeWidthThin,
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

// 竖线
export const useVerticalStyles = makeStyles({
  // Base styles
  base: {
    flexDirection: "column",
    minHeight: "20px",

    "::before": {
      borderRightStyle: "solid",
      borderRightWidth: tokens.strokeWidthThin,
      minHeight: minStartEndLength,
    },

    "::after": {
      borderRightStyle: "solid",
      borderRightWidth: tokens.strokeWidthThin,
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
