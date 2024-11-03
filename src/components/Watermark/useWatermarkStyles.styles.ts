import { makeStyles, mergeClasses } from "@griffel/react";
import { WatermarkProps } from "fish-ui-sy";

/**
 * Static CSS class names used internally for the component slots.
 */
export const watermarkClassNames = {
  root: "fish-ui-Watermark",
  item: "fish-ui-Watermark-Item",
};

export const useStyles = makeStyles({
  root: {
    position: "relative",
    overflow: "hidden",
  },
});

export const useWatermarkStyles = (props: Partial<WatermarkProps>) => {
  const { className } = props;

  const _styles = useStyles();
  const styles = {
    root: mergeClasses(watermarkClassNames.root, _styles.root, className),
  };

  return styles;
};
