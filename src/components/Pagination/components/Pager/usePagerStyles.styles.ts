import { makeStyles, mergeClasses, shorthands } from "@griffel/react";
import type { PagerProps } from "./Pager.types";
import { tokens } from "../../../../tokens";
import { useDisabledStyles } from "../Pagination/usePaginationStyles.styles";

/**
 * Static CSS class names used internally for the component slots.
 */
export const pagerClassNames = {
  root: "fish-ui-Pager",
};

export const useStyles = makeStyles({
  root: {
    ...shorthands.border("1px", "solid", "#d9d9d9"),
    backgroundColor: tokens.colorNeutralBackground1,
    userSelect: "none",
  },
  active: {
    fontWeight: "500",
    backgroundColor: "#fff",
    ...shorthands.borderColor(tokens.colorNeutralForeground2BrandHover),
    color: tokens.colorNeutralForeground2BrandHover,
    ":hover": {
      ...shorthands.borderColor(tokens.colorNeutralForeground2BrandHover),
    },
  },
});

export const usePagerStyles = (props: PagerProps) => {
  const { className, active, disabled } = props;

  const _styles = useStyles();
  const disabledStyles = useDisabledStyles();

  const styles = {
    root: mergeClasses(
      pagerClassNames.root,
      _styles.root,
      active && _styles.active,
      disabled ? disabledStyles.yes : disabledStyles.no,
      className
    ),
  };

  return styles;
};
