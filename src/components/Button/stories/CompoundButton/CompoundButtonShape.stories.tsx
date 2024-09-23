import { makeStyles, CompoundButton } from "fish-ui-sy";

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

const Shape = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <CompoundButton secondaryContent="Secondary content">
        Rounded
      </CompoundButton>
      <CompoundButton secondaryContent="Secondary content" shape="circular">
        Circular
      </CompoundButton>
      <CompoundButton secondaryContent="Secondary content" shape="square">
        Square
      </CompoundButton>
    </div>
  );
};

export default Shape;
