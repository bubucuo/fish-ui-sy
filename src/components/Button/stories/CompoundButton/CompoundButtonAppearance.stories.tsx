import { makeStyles, CompoundButton } from "fish-ui-sy";
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
} from "fish-ui-sy-react-icons";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

const Appearance = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <CompoundButton
        secondaryContent="Secondary content"
        icon={<CalendarMonthRegular />}
      >
        Default
      </CompoundButton>
      <CompoundButton
        secondaryContent="Secondary content"
        appearance="primary"
        icon={<CalendarMonthRegular />}
      >
        Primary
      </CompoundButton>
      <CompoundButton
        secondaryContent="Secondary content"
        appearance="outline"
        icon={<CalendarMonth />}
      >
        Outline
      </CompoundButton>
      <CompoundButton
        secondaryContent="Secondary content"
        appearance="subtle"
        icon={<CalendarMonth />}
      >
        Subtle
      </CompoundButton>
      <CompoundButton
        secondaryContent="Secondary content"
        appearance="transparent"
        icon={<CalendarMonth />}
      >
        Transparent
      </CompoundButton>
    </div>
  );
};

export default Appearance;
