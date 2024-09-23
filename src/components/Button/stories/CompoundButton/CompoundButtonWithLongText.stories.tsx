import { makeStyles, CompoundButton } from "fish-ui-sy";

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
      <CompoundButton secondaryContent="Secondary content">
        Short text
      </CompoundButton>
      <CompoundButton
        className={styles.longText}
        secondaryContent="Secondary content"
      >
        Long text wraps after it hits the max width of the component
      </CompoundButton>
    </div>
  );
};

export default WithLongText;
