import { makeStyles, useId, Input, Label } from "fish-ui-sy";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
    maxWidth: "300px",
  },
});

const Placeholder = () => {
  const inputId = useId("input-with-placeholder");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor={inputId}>Input with a placeholder</Label>
      <Input placeholder="This is a placeholder" id={inputId} />
    </div>
  );
};

export default Placeholder;
