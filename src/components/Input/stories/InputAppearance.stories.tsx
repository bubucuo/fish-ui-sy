import React from "react";
import { tokens, useId, Input, Label } from "fish-ui-sy";
import { makeStyles, mergeClasses } from "@griffel/react";

const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
  },
  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalXXS,
    marginTop: tokens.spacingVerticalMNudge,
    padding: tokens.spacingHorizontalMNudge,
  },
  filledLighter: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    "> label": {
      color: tokens.colorNeutralForegroundInverted2,
    },
  },
  filledDarker: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    "> label": {
      color: tokens.colorNeutralForegroundInverted2,
    },
  },
});

const Appearance = () => {
  const outlineId = useId("input-outline");
  const underlineId = useId("input-underline");
  const filledLighterId = useId("input-filledLighter");
  const filledDarkerId = useId("input-filledDarker");

  const filledLighterId2 = useId("input-filledLighter2");
  const filledDarkerId2 = useId("input-filledDarker2");
  const styles = useStyles();

  return (
    <div className={styles.base}>
      <div className={styles.field}>
        <Label htmlFor={outlineId}>Outline appearance (default)</Label>
        <Input appearance="outline" id={outlineId} />
      </div>

      <div className={styles.field}>
        <Label htmlFor={underlineId}>Underline appearance</Label>
        <Input appearance="underline" id={underlineId} />
      </div>

      <div className={mergeClasses(styles.field, styles.filledLighter)}>
        <Label htmlFor={filledLighterId}>Filled lighter appearance</Label>
        <Input appearance="filled-lighter" id={filledLighterId} />
      </div>

      <div className={mergeClasses(styles.field, styles.filledDarker)}>
        <Label htmlFor={filledDarkerId}>Filled darker appearance</Label>
        <Input appearance="filled-darker" id={filledDarkerId} />
      </div>
    </div>
  );
};

export default Appearance;
