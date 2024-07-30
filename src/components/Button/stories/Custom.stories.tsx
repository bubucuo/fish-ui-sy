import { Button } from "fish-ui-sy";
import { makeStyles } from "@griffel/react";

const useClasses = makeStyles({
  root: {
    backgroundColor: "red",
    padding: "100px",
  },
});

export const Custom = () => {
  const styles = useClasses();
  return (
    <div className={styles.root}>
      <Button primary label="Custom Button" />
    </div>
  );
};
