import {
  makeStyles,
  MessageBar,
  MessageBarTitle,
  MessageBarBody,
} from "fish-ui-sy";

const useClasses = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

const Shape = () => {
  const classes = useClasses();

  return (
    <div className={classes.container}>
      <MessageBar shape="rounded">
        <MessageBarBody>
          <MessageBarTitle>Rounded shape</MessageBarTitle>
          This message has rounded shape.
        </MessageBarBody>
      </MessageBar>
      <MessageBar shape="square">
        <MessageBarBody>
          <MessageBarTitle>Square shape</MessageBarTitle>
          This message has square shape.
        </MessageBarBody>
      </MessageBar>
    </div>
  );
};
export default Shape;
