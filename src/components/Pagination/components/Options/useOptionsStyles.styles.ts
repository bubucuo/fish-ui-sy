import { makeStyles, mergeClasses } from "@griffel/react";

/**
 * Static CSS class names used internally for the component slots.
 */
export const optionsClassNames = {
  root: "fish-ui-Options",
};

export const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "30px",
  },
  quickJumper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 8px",
  },

  quickJumperInput: {
    width: "60px",
    height: "30px",
    margin: "0 4px",
    textAlign: "center",
    border: "1px solid #d9d9d9",
    borderRadius: "2px",
    outline: 0,
  },
  jumperButton: {
    margin: "0 4px",
  },
});

export const useOptionsStyles = () => {
  const _styles = useStyles();
  const styles = {
    root: mergeClasses(optionsClassNames.root),
    sizeChanger: mergeClasses(),
    jumperButton: mergeClasses(_styles.jumperButton),
    quickJumper: mergeClasses(_styles.quickJumper),
    quickJumperInput: mergeClasses(_styles.quickJumperInput),
  };

  return styles;
};
