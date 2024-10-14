import { makeStyles, mergeClasses } from "@griffel/react";
import { FlexProps, isPresetSize, tokens } from "fish-ui-sy";

/**
 * Static CSS class names used internally for the component slots.
 */
export const flexClassNames = {
  root: "fish-ui-Flex",
};

export const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  vertical: {
    flexDirection: "column",
  },
});

const useGapStyles = makeStyles({
  small: {
    gap: tokens.spacingHorizontalS,
  },
  medium: {
    gap: tokens.spacingHorizontalM,
  },
  large: {
    gap: tokens.spacingHorizontalL,
  },
});

export const useFlexStyles = (props: FlexProps) => {
  const { className, gap, vertical = false } = props;

  const _styles = useStyles();
  const gapStyles = useGapStyles();
  const styles = {
    root: mergeClasses(
      flexClassNames.root,
      _styles.root,
      vertical && _styles.vertical,
      isPresetSize(gap) && gapStyles[gap],
      className
    ),
  };

  return styles;
};
