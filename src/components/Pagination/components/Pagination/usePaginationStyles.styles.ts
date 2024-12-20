import { makeStyles, mergeClasses, shorthands } from "@griffel/react";
import type { PaginationProps } from "./Pagination.types";
import { tokens } from "../../../../tokens";

/**
 * Static CSS class names used internally for the component slots.
 */
export const flexClassNames = {
  root: "fish-ui-Pagination",
};

export const useStyles = makeStyles({
  root: {
    display: "flex",
    "& > li": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "28px",
      height: "28px",
      marginRight: "8px",
      textAlign: "center",
      verticalAlign: "middle",
      fontFamily: "Arial",
      lineHeight: "26px",
      outline: 0,
      transition: "all 0.3s",
      color: tokens.colorNeutralForeground2,
      "& button": {
        minWidth: "30px", // 这里用了Button，重置下默认最小宽度
      },
    },
  },
  borderItem: {
    ...shorthands.border("1px", "solid", "#d9d9d9"),
    backgroundColor: tokens.colorNeutralBackground1,
    cursor: "pointer",
    userSelect: "none",
    fontFamily: "Arial",
    lineHeight: "26px",
    outline: 0,
  },
});

export const useDisabledStyles = makeStyles({
  yes: {
    cursor: "not-allowed",
    backgroundColor: tokens.colorNeutralBackgroundDisabled,
    ...shorthands.borderColor(tokens.colorNeutralForegroundDisabled),
    color: tokens.colorNeutralStrokeDisabled,
  },
  no: {
    cursor: "pointer",
    ":hover": {
      ...shorthands.borderColor(tokens.colorNeutralForeground2BrandHover),
      color: tokens.colorNeutralForeground2BrandHover,
    },
  },
});

export const usePaginationStyles = (props: Partial<PaginationProps>) => {
  const { className, current, pageSize, total } = props;

  const _styles = useStyles();
  const disabledStyles = useDisabledStyles();
  const styles = {
    root: mergeClasses(flexClassNames.root, _styles.root, className),
    totalText: {},
    prev: mergeClasses(
      _styles.borderItem,
      current === 1 ? disabledStyles.yes : disabledStyles.no
    ),
    next: mergeClasses(
      _styles.borderItem,
      current! >= Math.ceil(total! / pageSize!)
        ? disabledStyles.yes
        : disabledStyles.no
    ),
  };

  return styles;
};
