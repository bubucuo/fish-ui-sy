import { tokens, CheckboxProps } from "fish-ui-sy";
import {
  makeResetStyles,
  makeStyles,
  mergeClasses,
  shorthands,
} from "@griffel/react";

export const checkboxClassNames = {
  root: "fish-ui-Checkbox",
  label: "fish-ui-Checkbox__label",
  input: "fish-ui-Checkbox__input",
  indicator: "fish-ui-Checkbox__indicator",
};

// CSS variables used internally in Checkbox's styles
const vars = {
  indicatorColor: "--fish-ui-Checkbox__indicator--color",
  indicatorBorderColor: "--fish-ui-Checkbox__indicator--borderColor",
  indicatorBackgroundColor:
    "--fish-ui-Checkbox__indicator--colorBrandForeground1",
} as const;

// The indicator size is used by the indicator and label styles
const indicatorSizeMedium = "16px";
const indicatorSizeLarge = "20px";

export const useRootBaseClassName = makeResetStyles({
  position: "relative",
  display: "inline-flex",
  cursor: "pointer",
  verticalAlign: "middle",
  color: tokens.colorNeutralForeground3,
});

export const useRootStyles = makeStyles({
  unchecked: {
    ":hover": {
      color: tokens.colorNeutralForeground2,
      [vars.indicatorBorderColor]: tokens.colorNeutralStrokeAccessibleHover,
    },

    ":active": {
      color: tokens.colorNeutralForeground1,
      [vars.indicatorBorderColor]: tokens.colorNeutralStrokeAccessiblePressed,
    },
  },

  // 选中
  checked: {
    color: tokens.colorNeutralForeground1,
    [vars.indicatorBackgroundColor]: tokens.colorCompoundBrandBackground,
    [vars.indicatorColor]: tokens.colorNeutralForegroundOnBrand,
    [vars.indicatorBorderColor]: tokens.colorCompoundBrandBackground,

    ":hover": {
      [vars.indicatorBackgroundColor]: tokens.colorCompoundBrandBackgroundHover,
      [vars.indicatorBorderColor]: tokens.colorCompoundBrandBackgroundHover,
    },

    ":active": {
      [vars.indicatorBackgroundColor]:
        tokens.colorCompoundBrandBackgroundPressed,
      [vars.indicatorBorderColor]: tokens.colorCompoundBrandBackgroundPressed,
    },
  },

  // 半选
  mixed: {
    color: tokens.colorNeutralForeground1,
    [vars.indicatorBorderColor]: tokens.colorCompoundBrandStroke,
    [vars.indicatorColor]: tokens.colorCompoundBrandForeground1,

    ":hover": {
      [vars.indicatorBorderColor]: tokens.colorCompoundBrandStrokeHover,
      [vars.indicatorColor]: tokens.colorCompoundBrandForeground1Hover,
    },

    ":active": {
      [vars.indicatorBorderColor]: tokens.colorCompoundBrandStrokePressed,
      [vars.indicatorColor]: tokens.colorCompoundBrandForeground1Pressed,
    },
  },

  // 禁用
  disabled: {
    cursor: "not-allowed",
    color: tokens.colorNeutralForegroundDisabled,

    [vars.indicatorBorderColor]: tokens.colorNeutralStrokeDisabled,
    [vars.indicatorColor]: tokens.colorNeutralForegroundDisabled,

    // colorCompoundBrandBackground: tokens.colorNeutralStrokeDisabled,

    // "@media (forced-colors: active)": {
    //   color: "GrayText",
    //   [vars.indicatorColor]: "GrayText",
    // },

    "& span": {
      backgroundColor: tokens.colorNeutralBackgroundDisabled,
    },
  },
});

export const useInputBaseClassName = makeResetStyles({
  boxSizing: "border-box",
  cursor: "inherit",
  height: "100%",
  margin: 0,
  opacity: 0, //need icon
  position: "absolute",
  top: 0,
  // Calculate the width of the hidden input by taking into account the size of the indicator + the padding around it.
  // This is done so that clicking on that "empty space" still toggles the checkbox.
  width: `calc(${indicatorSizeMedium} + 2 * ${tokens.spacingHorizontalS})`,
});

export const useInputStyles = makeStyles({
  before: {
    right: 0,
  },
  after: {
    left: 0,
  },

  large: {
    width: `calc(${indicatorSizeLarge} + 2 * ${tokens.spacingHorizontalS})`,
  },
});

const useIndicatorBaseClassName = makeResetStyles({
  alignSelf: "flex-start",
  boxSizing: "border-box",
  flexShrink: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  color: `var(${vars.indicatorColor})`,
  backgroundColor: `var(${vars.indicatorBackgroundColor})`,
  borderColor: `var(${vars.indicatorBorderColor}, ${tokens.colorNeutralStrokeAccessible})`,
  borderStyle: "solid",
  borderWidth: tokens.strokeWidthThin,
  borderRadius: tokens.borderRadiusSmall,
  margin: tokens.spacingVerticalS + " " + tokens.spacingHorizontalS,
  fill: "currentColor",
  pointerEvents: "none",

  fontSize: "12px",
  height: indicatorSizeMedium,
  width: indicatorSizeMedium,
});

export const useIndicatorStyles = makeStyles({
  large: {
    fontSize: "16px",
    height: indicatorSizeLarge,
    width: indicatorSizeLarge,
  },

  circular: { borderRadius: tokens.borderRadiusCircular },
});

// Can't use makeResetStyles here because Label is a component that may itself use makeResetStyles.
export const useLabelStyles = makeStyles({
  base: {
    alignSelf: "center",
    color: "inherit",
    cursor: "inherit",
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalS}`,
  },

  before: {
    paddingRight: tokens.spacingHorizontalXS,
  },
  after: {
    paddingLeft: tokens.spacingHorizontalXS,
  },

  // Use a (negative) margin to account for the difference between the indicator's height and the label's line height.
  // This prevents the label from expanding the height of the checkbox, but preserves line height if the label wraps.
  medium: {
    marginTop: `calc((${indicatorSizeMedium} - ${tokens.lineHeightBase300}) / 2)`,
    marginBottom: `calc((${indicatorSizeMedium} - ${tokens.lineHeightBase300}) / 2)`,
  },
  large: {
    marginTop: `calc((${indicatorSizeLarge} - ${tokens.lineHeightBase300}) / 2)`,
    marginBottom: `calc((${indicatorSizeLarge} - ${tokens.lineHeightBase300}) / 2)`,
  },
});

/**
 * Apply styling to the Checkbox slots based on the state
 */
type Styles = {
  root: string;
  input: string;
  indicator?: string;
  label?: string;
};
export const useCheckboxStyles = (args: Partial<CheckboxProps>): Styles => {
  const { checked, disabled, labelPosition, size, className } = args;
  const mixed = checked === "mixed";
  const styles = {} as Styles;
  const rootBaseClassName = useRootBaseClassName();
  const rootStyles = useRootStyles();

  styles.root = mergeClasses(
    checkboxClassNames.root,
    rootBaseClassName,
    disabled
      ? rootStyles.disabled
      : mixed
        ? rootStyles.mixed
        : checked
          ? rootStyles.checked
          : rootStyles.unchecked,
    className
  );

  const innerStyles = useInnerStyles();
  const inputBaseClassName = useInputBaseClassName();
  const inputStyles = useInputStyles();
  styles.input = mergeClasses(
    checkboxClassNames.input,
    inputBaseClassName,
    size === "large" && inputStyles.large,
    inputStyles[labelPosition!]
  );

  const indicatorBaseClassName = useIndicatorBaseClassName();
  const indicatorStyles = useIndicatorStyles();
  // if (args.indicator) {
  styles.indicator = mergeClasses(
    checkboxClassNames.indicator,
    indicatorBaseClassName,
    size === "large" && indicatorStyles.large,
    innerStyles.inner,
    checked && innerStyles.checked,
    mixed && innerStyles.mixed
  );
  // }

  const labelStyles = useLabelStyles();
  // if (args.label) {
  styles.label = mergeClasses(
    checkboxClassNames.label,
    labelStyles.base,
    labelStyles[size!],
    labelStyles[labelPosition!]
  );
  // }

  return styles;
};

export const useInnerStyles = makeStyles({
  inner: {
    boxSizing: "border-box",
    position: "relative",
    top: 0,
    insetInlineStart: 0,
    display: "block",
    backgroundColor: tokens.colorNeutralForegroundOnBrand,
    border: `${tokens.strokeWidthThick} solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
    borderCollapse: "separate",
    transition: `all ${tokens.durationUltraSlow}`,
    "::after": {
      content: '""',
      display: "table",
      boxSizing: "border-box",
      position: "absolute",
      top: "50%",
      transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
      opacity: 0,
      transition: `all ${tokens.durationFast} ${tokens.durationFast}, opacity ${tokens.durationFast}`,
    },
    ":hover:active": {
      backgroundColor: "yellow",
      border: `${tokens.strokeWidthThick} solid red`,
    },
  },
  checked: {
    backgroundColor: vars.indicatorBackgroundColor,
    ...shorthands.borderColor(`var(${vars.indicatorBorderColor})`),
    "::after": {
      opacity: 1,
      insetInlineStart: "21.5%",
      width: "50%",
      height: "70%",
      border: `${tokens.strokeWidthThick} solid var(${vars.indicatorColor})`,
      borderTop: 0,
      borderLeft: 0,
      transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
      transition: `all ${tokens.durationNormal} ${tokens.durationNormal} ${tokens.durationNormal}`,
    },
  },
  mixed: {
    backgroundColor: tokens.colorNeutralForegroundOnBrand,
    "::after": {
      opacity: 1,
      insetInlineStart: "50%",
      width: "60%",
      height: "60%",
      backgroundColor: `var(${vars.indicatorColor})`,
      border: 0,
      transform: "translate(-50%, -50%) scale(1)",
    },
  },
});
