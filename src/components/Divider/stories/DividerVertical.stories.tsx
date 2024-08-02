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

const Vertical = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.example}>
        <Divider vertical style={{ height: "100%" }} />
      </div>
      <div className={styles.example}>
        <Divider vertical style={{ height: "100%" }}>
          Text
        </Divider>
      </div>
    </div>
  );
};

export default Vertical;
