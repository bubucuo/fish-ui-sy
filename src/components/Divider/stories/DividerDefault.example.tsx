import React from "react";
import { makeStyles } from "@griffel/react";
import { Divider, tokens } from "fish-ui-sy";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
  },
  example: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "96px",
    backgroundColor: tokens.colorNeutralBackground1,
  },
});

export const Default = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.example}>
        <Divider />
      </div>
      <div className={styles.example}>
        <Divider>Text</Divider>
      </div>
    </div>
  );
};

Default.parameters = {
  docs: {
    description: {
      story: "DDD",
    },
  },
};

export default {};
