import { makeStyles, CompoundButton } from "fish-ui-sy";

const useStyles = makeStyles({
  innerWrapper: {
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
  },
});

const Disabled = () => {
  const styles = useStyles();

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <CompoundButton secondaryContent="Secondary content">
          Enabled state
        </CompoundButton>
        <CompoundButton disabled secondaryContent="Secondary content">
          Disabled state
        </CompoundButton>
        <CompoundButton disabledFocusable secondaryContent="Secondary content">
          Disabled focusable state
        </CompoundButton>
      </div>
      <div className={styles.innerWrapper}>
        <CompoundButton
          appearance="primary"
          secondaryContent="Secondary content"
        >
          Enabled state
        </CompoundButton>
        <CompoundButton
          appearance="primary"
          disabled
          secondaryContent="Secondary content"
        >
          Disabled state
        </CompoundButton>
        <CompoundButton
          appearance="primary"
          disabledFocusable
          secondaryContent="Secondary content"
        >
          Disabled focusable state
        </CompoundButton>
      </div>
    </div>
  );
};

export default Disabled;
