import * as React from "react";
import { makeStyles } from "@griffel/react";
import { Button } from "@/index";

const useStyles = makeStyles({
  innerWrapper: {
    alignItems: "start",
    columnGap: "15px",
    display: "flex",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
    minWidth: "min-content",
  },
});

export const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Button size="small">Small</Button>
        <Button size="small">Small with calendar icon</Button>
        {/* <Tooltip content="Small with calendar icon only" relationship="label">
          <Button size="small" icon={<CalendarMonthRegular />} />
        </Tooltip> */}
      </div>
      <div className={styles.innerWrapper}>
        <Button>Medium</Button>
      </div>
      <div className={styles.innerWrapper}>
        <Button size="large">Large</Button>
      </div>
    </div>
  );
};
Size.parameters = {
  docs: {
    description: {
      story:
        "A button supports `small`, `medium` and `large` size. Default size is `medium`.",
    },
  },
};
