import { makeStyles, Button } from "fish-ui-sy";

const useStyles = makeStyles({
  longText: {
    width: "280px",
  },
  wrapper: {
    alignItems: "center",
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

const WithLongText = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Button>Short text</Button>
      <Button className={styles.longText}>
        Long text wraps after it hits the max width of the component
      </Button>
    </div>
  );
};

export default WithLongText;
