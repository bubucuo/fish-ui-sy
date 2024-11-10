import {
  MessageBar,
  MessageBarTitle,
  MessageBarBody,
  MessageBarIntent,
  makeStyles,
} from "fish-ui-sy";

const useClasses = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});
const intents: MessageBarIntent[] = ["info", "warning", "error", "success"];

const Default = () => {
  const classes = useClasses();

  return (
    <div className={classes.container}>
      {intents.map((intent) => (
        <MessageBar key={intent} intent={intent}>
          <MessageBarBody>
            <MessageBarTitle>Intent {intent}</MessageBarTitle>
            Message providing information to the user with actionable insights.{" "}
            <a href="https://github.com/bubucuo">Link</a>
          </MessageBarBody>
        </MessageBar>
      ))}
    </div>
  );
};

export default Default;
