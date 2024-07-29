import * as React from "react";
import { makeStyles } from "@griffel/react";
import { Button } from "fish-ui-sy";
// import { CalendarMonthRegular } from '@fluentui/react-icons';

const CalendarMonthRegular = () => <div>CalendarMonthRegular icon</div>;

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
  },
});

export const Icon = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Button icon={<CalendarMonthRegular />}>
        With calendar icon before contents
      </Button>
      <Button icon={<CalendarMonthRegular />} iconPosition="after">
        With calendar icon after contents
      </Button>
      {/* <Tooltip content="With calendar icon only" relationship="label">
        <Button icon={<CalendarMonthRegular />} />
      </Tooltip> */}
    </div>
  );
};

Icon.parameters = {
  docs: {
    description: {
      story:
        "Button has an `icon` slot that, if specified, renders an icon either `before` or `after` the children, " +
        "as specified by the `iconPosition` prop.",
    },
  },
};
