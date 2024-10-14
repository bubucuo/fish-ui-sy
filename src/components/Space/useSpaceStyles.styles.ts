import { makeStyles, mergeClasses } from "@griffel/react";
import { SpaceProps, SpaceSize, isPresetSize, tokens } from "fish-ui-sy";

/**
 * Static CSS class names used internally for the component slots.
 */
export const flexClassNames = {
  root: "fish-ui-Space",
  item: "fish-ui-Space-Item",
};

export const useStyles = makeStyles({
  root: {
    display: "inline-flex",
  },
  vertical: {
    flexDirection: "column",
  },
});

const useAlignStyles = makeStyles({
  start: {
    alignItems: "flex-start",
  },
  end: {
    alignItems: "flex-end",
  },
  center: {
    alignItems: "center",
  },
  baseline: {
    alignItems: "baseline",
  },
});

const useHorizontalGapStyles = makeStyles({
  small: {
    columnGap: tokens.spacingHorizontalS,
  },
  medium: {
    columnGap: tokens.spacingHorizontalM,
  },
  large: {
    columnGap: tokens.spacingHorizontalL,
  },
});

const useVerticalGapStyles = makeStyles({
  small: {
    rowGap: tokens.spacingVerticalS,
  },
  medium: {
    rowGap: tokens.spacingVerticalM,
  },
  large: {
    rowGap: tokens.spacingVerticalL,
  },
});

export const useSpaceStyles = (props: Partial<SpaceProps>) => {
  const { size, align, className, direction } = props;

  const [horizontalSize, verticalSize] = size as [SpaceSize, SpaceSize];
  const isPresetVerticalSize = isPresetSize(verticalSize);
  const isPresetHorizontalSize = isPresetSize(horizontalSize);

  const _styles = useStyles();
  const horizontalGapStyles = useHorizontalGapStyles();
  const verticalGapStyles = useVerticalGapStyles();
  const alignStyles = useAlignStyles();
  const styles = {
    root: mergeClasses(
      flexClassNames.root,
      _styles.root,
      direction === "horizontal" &&
        isPresetHorizontalSize &&
        horizontalGapStyles[horizontalSize],
      direction === "vertical" && _styles.vertical,
      direction === "vertical" &&
        isPresetVerticalSize &&
        verticalGapStyles[verticalSize],

      align && alignStyles[align as keyof typeof alignStyles],

      className
    ),
    item: mergeClasses(flexClassNames.item),
  };

  return styles;
};
