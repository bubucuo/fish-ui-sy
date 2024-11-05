import { makeStyles, CompoundButton } from "fish-ui-sy";
import { CalendarMonthRegular } from "fish-ui-sy-react-icons";

const useStyles = makeStyles({
  wrapper: {
    alignItems: "center",
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <CompoundButton
        icon={<CalendarMonthRegular />}
        secondaryContent="Secondary content"
        size="small"
      >
        Size: small
      </CompoundButton>
      <CompoundButton
        icon={<CalendarMonthRegular />}
        secondaryContent="Secondary content"
        size="medium"
      >
        Size: medium
      </CompoundButton>
      <CompoundButton
        icon={<CalendarMonthRegular />}
        secondaryContent="Secondary content"
        size="large"
      >
        Size: large
      </CompoundButton>
    </div>
  );
};

export default Size;
