import { makeStyles } from "@griffel/react";
import { Body1, Input, Label, Text, useId } from "fish-ui-sy";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
    // Stack the label above the field (with 2px gap per the design system)
    "> div": { display: "flex", flexDirection: "column", gap: "2px" },
  },
});

const ContentBeforeAfter = () => {
  const styles = useStyles();

  const beforeId = useId("content-before");
  const afterId = useId("content-after");
  const beforeAndAfterId = useId("content-before-and-after");
  const beforeLabelId = useId("before-label");
  const afterLabelId = useId("after-label");

  return (
    <div className={styles.root}>
      <div>
        <Label htmlFor={beforeId}>Full name</Label>
        <Input
          contentBefore={<span className="omg">before</span>}
          id={beforeId}
        />
        <Body1>
          An input with a decorative icon in the <code>contentBefore</code>{" "}
          slot.
        </Body1>
      </div>

      <div>
        <Label htmlFor={afterId}>Full name</Label>
        <Input contentAfter={<span className="omg">after</span>} id={afterId} />
        <Body1>
          An input with a decorative icon in the <code>contentAfter</code> slot.
        </Body1>
      </div>

      <div>
        <Label htmlFor={beforeAndAfterId}>Amount to pay</Label>
        <Input
          contentBefore={
            <Text size={800} id={beforeLabelId}>
              $
            </Text>
          }
          contentAfter={
            <Text size={400} id={afterLabelId}>
              .00
            </Text>
          }
          aria-labelledby={`${beforeAndAfterId} ${beforeLabelId} ${afterLabelId}`}
          id={beforeAndAfterId}
        />
        <Body1>
          An input with a presentational value in the <code>contentBefore</code>{" "}
          slot and another presentational value in the <code>contentAfter</code>{" "}
          slot.
        </Body1>
      </div>
    </div>
  );
};

export default ContentBeforeAfter;
