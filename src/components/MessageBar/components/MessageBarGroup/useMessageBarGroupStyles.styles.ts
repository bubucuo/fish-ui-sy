import { makeStyles, mergeClasses } from "@griffel/react";
import type { MessageBarGroupProps } from "./MessageBarGroup.types";
import { tokens } from "fish-ui-sy";

export const messageBarGroupClassNames = {
  root: "fish-ui-MessageBarGroup",
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  base: {
    animationFillMode: "forwards",
    animationDuration: tokens.durationNormal,
  },

  enter: {
    animationName: {
      from: {
        opacity: 0,
        transform: "translateY(-100%)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  },

  exit: {
    animationName: {
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
    },
  },
});

/**
 * Apply styling to the MessageBarGroup slots based on the state
 */
export const useMessageBarGroupStyles = (props: MessageBarGroupProps) => {
  const { className } = props;

  const styles = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _styles = {} as any;
  _styles.root = mergeClasses(messageBarGroupClassNames.root, className);
  _styles.enterStyles = mergeClasses(styles.base, styles.enter);
  _styles.exitStyles = mergeClasses(styles.base, styles.exit);

  return _styles;
};
