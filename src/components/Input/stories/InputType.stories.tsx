import { makeStyles, Input, Label, useId } from "fish-ui-sy";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",

    maxWidth: "400px",
    // Stack the label above the field (with 2px gap per the design system)
    "> div": { display: "flex", flexDirection: "column", gap: "2px" },
  },
});

const Type = () => {
  const emailId = useId("input-email");
  const urlId = useId("input-url");
  const passwordId = useId("input-password");
  const styles = useStyles();

  return (
    <form noValidate autoComplete="off" className={styles.root}>
      <div>
        <Label htmlFor={emailId}>Email input</Label>
        <Input type="email" id={emailId} />
      </div>

      <div>
        <Label htmlFor={urlId}>URL input</Label>
        <Input type="url" id={urlId} />
      </div>

      <div>
        <Label htmlFor={passwordId}>Password input</Label>
        <Input type="password" defaultValue="password" id={passwordId} />
      </div>
    </form>
  );
};

export default Type;
