import { tokens } from "fish-ui-sy";
import { makeResetStyles, makeStyles, mergeClasses } from "@griffel/react";
import { RadioProps } from "./Radio.types";

export const radioClassNames = {
  root: "fish-ui-Radio",
  indicator: "fish-ui-Radio__indicator",
  input: "fish-ui-Radio__input",
  label: "fish-ui-Radio__label",
};

// The indicator size is used by the indicator and label styles
const indicatorSize = "16px";

const useRootBaseClassName = makeResetStyles({
  display: "inline-flex",
  position: "relative",
});

const useRootStyles = makeStyles({
  vertical: {
    flexDirection: "column",
    alignItems: "center",
  },
});

const useInputBaseClassName = makeResetStyles({
  position: "absolute",
  left: 0,
  top: 0,
  width: `calc(${indicatorSize} + 2 * ${tokens.spacingHorizontalS})`,
  height: "100%",
  boxSizing: "border-box",
  margin: 0,
  opacity: 0,

  ":enabled": {
    cursor: "pointer",
    [`& ~ .${radioClassNames.label}`]: {
      cursor: "pointer",
    },
  },

  // Colors for the unchecked state
  ":enabled:not(:checked)": {
    [`& ~ .${radioClassNames.label}`]: {
      color: tokens.colorNeutralForeground3,
    },
    [`& ~ .${radioClassNames.indicator}`]: {
      borderColor: tokens.colorNeutralStrokeAccessible,
      "@media (forced-colors: active)": {
        borderColor: "ButtonBorder",
      },
    },

    ":hover": {
      [`& ~ .${radioClassNames.label}`]: {
        color: tokens.colorNeutralForeground2,
      },
      [`& ~ .${radioClassNames.indicator}`]: {
        borderColor: tokens.colorNeutralStrokeAccessibleHover,
      },
    },

    ":hover:active": {
      [`& ~ .${radioClassNames.label}`]: {
        color: tokens.colorNeutralForeground1,
      },
      [`& ~ .${radioClassNames.indicator}`]: {
        borderColor: tokens.colorNeutralStrokeAccessiblePressed,
      },
    },
  },

  // Colors for the checked state
  ":enabled:checked": {
    [`& ~ .${radioClassNames.label}`]: {
      color: tokens.colorNeutralForeground1,
    },
    [`& ~ .${radioClassNames.indicator}`]: {
      borderColor: tokens.colorCompoundBrandStroke,
      color: tokens.colorCompoundBrandForeground1,
      "@media (forced-colors: active)": {
        borderColor: "Highlight",
        color: "Highlight",
        "::after": {
          backgroundColor: "Highlight",
        },
      },
    },

    ":hover": {
      [`& ~ .${radioClassNames.indicator}`]: {
        borderColor: tokens.colorCompoundBrandStrokeHover,
        color: tokens.colorCompoundBrandForeground1Hover,
      },
    },

    ":hover:active": {
      [`& ~ .${radioClassNames.indicator}`]: {
        borderColor: tokens.colorCompoundBrandStrokePressed,
        color: tokens.colorCompoundBrandForeground1Pressed,
      },
    },
  },

  // Colors for the disabled state
  ":disabled": {
    [`& ~ .${radioClassNames.label}`]: {
      color: tokens.colorNeutralForegroundDisabled,
      cursor: "default",
      "@media (forced-colors: active)": {
        color: "GrayText",
      },
    },
    [`& ~ .${radioClassNames.indicator}`]: {
      borderColor: tokens.colorNeutralStrokeDisabled,
      color: tokens.colorNeutralForegroundDisabled,
      backgroundColor: tokens.colorNeutralBackgroundDisabled,
      "@media (forced-colors: active)": {
        borderColor: "GrayText",
        color: "GrayText",
        "::after": {
          backgroundColor: "GrayText",
        },
      },
    },
  },
});

export const useInputStyles = makeStyles({
  below: {
    width: "100%",
    height: `calc(${indicatorSize} + 2 * ${tokens.spacingVerticalS})`,
  },

  // If the indicator has no children, use the ::after pseudo-element for the checked state
  defaultIndicator: {
    [`:checked ~ .${radioClassNames.indicator}::after`]: {
      content: '""',
    },
  },

  // If the indicator has a child, hide it until the radio is checked
  customIndicator: {
    [`:not(:checked) ~ .${radioClassNames.indicator} > *`]: {
      opacity: "0",
    },
  },
});

export const useIndicatorBaseClassName = makeResetStyles({
  position: "relative",
  width: indicatorSize,
  height: indicatorSize,
  fontSize: "12px",
  boxSizing: "border-box",
  flexShrink: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  border: tokens.strokeWidthThin + " solid",
  borderRadius: tokens.borderRadiusCircular,
  margin: tokens.spacingVerticalS + " " + tokens.spacingHorizontalS,
  fill: "currentColor",
  pointerEvents: "none",

  "::after": {
    position: "absolute",
    width: indicatorSize,
    height: indicatorSize,
    borderRadius: tokens.borderRadiusCircular,
    // Use a transform to avoid pixel rounding errors at 125% DPI
    // https://github.com/microsoft/fluentui/issues/30025
    transform: "scale(0.625)",
    backgroundColor: "currentColor",
  },
});

// Can't use makeResetStyles here because Label is a component that may itself use makeResetStyles.
export const useLabelStyles = makeStyles({
  base: {
    alignSelf: "center",
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalS}`,
  },

  after: {
    paddingLeft: tokens.spacingHorizontalXS,

    // Use a (negative) margin to account for the difference between the indicator's height and the label's line height.
    // This prevents the label from expanding the height of the Radio, but preserves line height if the label wraps.
    marginTop: `calc((${indicatorSize} - ${tokens.lineHeightBase300}) / 2)`,
    marginBottom: `calc((${indicatorSize} - ${tokens.lineHeightBase300}) / 2)`,
  },

  below: {
    paddingTop: tokens.spacingVerticalXS,
    textAlign: "center",
  },
});

/**
 * Apply styling to the Radio slots based on the state
 */
// {root:string, input:string,indicator:string, label:string }
type RadioStyles = Pick<RadioProps, "labelPosition"> & {
  className: string | undefined;
};
export const useRadioStyles = ({ labelPosition, className }: RadioStyles) => {
  const styles = {
    root: undefined as string | undefined,
    input: undefined as string | undefined,
    indicator: undefined as string | undefined,
    label: undefined as string | undefined,
  };
  const rootBaseClassName = useRootBaseClassName();
  const rootStyles = useRootStyles();
  styles.root = mergeClasses(
    radioClassNames.root,
    rootBaseClassName,
    labelPosition === "below" && rootStyles.vertical,
    className
  );

  const inputBaseClassName = useInputBaseClassName();
  const inputStyles = useInputStyles();
  styles.input = mergeClasses(
    radioClassNames.input,
    inputBaseClassName,
    labelPosition === "below" && inputStyles.below,
    inputStyles.defaultIndicator
  );

  const indicatorBaseClassName = useIndicatorBaseClassName();
  styles.indicator = mergeClasses(
    radioClassNames.indicator,
    indicatorBaseClassName
  );

  const labelStyles = useLabelStyles();
  styles.label = mergeClasses(
    radioClassNames.label,
    labelStyles.base,
    labelStyles[labelPosition!]
  );

  return styles;
};
