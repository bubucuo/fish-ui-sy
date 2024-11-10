import {
  makeResetStyles,
  makeStyles,
  mergeClasses,
  shorthands,
} from "@griffel/react";
import { MessageBarProps, tokens } from "fish-ui-sy";

export const messageBarClassNames = {
  root: "fish-ui-MessageBar",
  icon: "fish-ui-MessageBar__icon",
  bottomReflowSpacer: "fish-ui-MessageBar__bottomReflowSpacer",
};

const useRootBaseStyles = makeResetStyles({
  whiteSpace: "nowrap",
  display: "grid",
  gridTemplateColumns: "auto 1fr auto auto",
  gridTemplateRows: "1fr",
  gridTemplateAreas: '"icon body secondaryActions actions"',
  padding: `${(tokens.spacingHorizontalM, tokens.spacingHorizontalS)}`,
  border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
  borderRadius: tokens.borderRadiusMedium,
  alignItems: "center",
  minHeight: "36px",
  boxSizing: "border-box",
  backgroundColor: tokens.colorNeutralBackground3,
});

const useIconBaseStyles = makeResetStyles({
  gridArea: "icon",
  fontSize: tokens.fontSizeBase500,
  marginRight: tokens.spacingHorizontalS,
  color: tokens.colorNeutralForeground3,
  display: "flex",
  alignItems: "center",
});

const useReflowSpacerBaseStyles = makeResetStyles({
  marginBottom: tokens.spacingVerticalS,
  gridArea: "secondaryActions",
});

const useStyles = makeStyles({
  rootMultiline: {
    whiteSpace: "normal",
    alignItems: "start",
    paddingTop: tokens.spacingVerticalMNudge,
    gridTemplateColumns: "auto 1fr auto",
    gridTemplateAreas: `
      "icon body actions"
      "secondaryActions secondaryActions secondaryActions"
    `,
  },

  secondaryActionsMultiline: {
    justifyContent: "end",
    marginTop: tokens.spacingVerticalMNudge,
    marginBottom: tokens.spacingVerticalS,
    marginRight: "0px",
  },

  square: {
    borderRadius: "0",
  },
});

const useIconIntentStyles = makeStyles({
  info: {
    /** already in base reset styles */
  },
  error: {
    color: tokens.colorStatusDangerForeground1,
  },
  warning: {
    color: tokens.colorStatusWarningForeground3,
  },
  success: {
    color: tokens.colorStatusSuccessForeground1,
  },
});

const useRootIntentStyles = makeStyles({
  info: {
    /** already in base reset styles */
  },
  error: {
    backgroundColor: tokens.colorStatusDangerBackground1,
    ...shorthands.borderColor(tokens.colorStatusDangerBorder1),
  },
  warning: {
    backgroundColor: tokens.colorStatusWarningBackground1,
    ...shorthands.borderColor(tokens.colorStatusWarningBorder1),
  },
  success: {
    backgroundColor: tokens.colorStatusSuccessBackground1,
    ...shorthands.borderColor(tokens.colorStatusSuccessBorder1),
  },
});

/**
 * Apply styling to the MessageBar slots based on the props
 */
export const useMessageBarStyles = (
  props: MessageBarProps & { transitionClassName: string }
) => {
  const { layout, intent, className, transitionClassName } = props;

  const rootBaseStyles = useRootBaseStyles();
  const iconBaseStyles = useIconBaseStyles();
  const iconIntentStyles = useIconIntentStyles();
  const rootIntentStyles = useRootIntentStyles();
  const reflowSpacerStyles = useReflowSpacerBaseStyles();
  const styles = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _styles = {} as any;
  _styles.root = mergeClasses(
    messageBarClassNames.root,
    rootBaseStyles,
    layout === "multiline" && styles.rootMultiline,
    props.shape === "square" && styles.square,
    rootIntentStyles[intent!],
    transitionClassName,
    className
  );

  _styles.icon = mergeClasses(
    messageBarClassNames.icon,
    iconBaseStyles,
    iconIntentStyles[intent!]
  );

  _styles.bottomReflowSpacer = mergeClasses(
    messageBarClassNames.bottomReflowSpacer,
    reflowSpacerStyles
  );

  return _styles;
};
