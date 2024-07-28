import * as React from "react";
import { makeStyles } from "@griffel/react";
import { Text } from "@/index";

const useStyles = makeStyles({
  container: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
  },
});

export const Font = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Text font="base">This is the default font</Text>
      <Text font="numeric">This is numeric font</Text>
      <Text font="monospace">This is monospace font</Text>
    </div>
  );
};