import * as React from "react";
import {
  Button,
  Checkbox,
  makeStyles,
  tokens,
  mergeClasses,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarTitle,
} from "fish-ui-sy";
import { DismissRegular } from "fish-ui-sy-react-icons";

const useStyles = makeStyles({
  compact: {
    width: "600px",
  },
  resizableArea: {
    display: "flex",
    flexDirection: "column",
    padding: "30px 10px",
    gap: "10px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    position: "relative",
    overflow: "hidden",

    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

const Reflow = () => {
  const styles = useStyles();
  const [compact, setCompact] = React.useState(true);
  return (
    <>
      <Checkbox
        label={compact ? "Compact width" : "Full width"}
        checked={compact}
        onChange={(_, { checked }) => setCompact(!!checked)}
      />
      <div
        className={mergeClasses(
          styles.resizableArea,
          compact && styles.compact
        )}
      >
        <MessageBar intent="success">
          <MessageBarBody>
            <MessageBarTitle>Descriptive title</MessageBarTitle>
            Message providing information to the user with actionable insights.{" "}
            <a href="https://github.com/bubucuo">Link</a>
          </MessageBarBody>
          <MessageBarActions
            containerAction={
              <Button
                aria-label="dismiss"
                appearance="transparent"
                icon={<DismissRegular />}
              />
            }
          >
            <Button>Action</Button>
            <Button>Action</Button>
          </MessageBarActions>
        </MessageBar>
      </div>
    </>
  );
};

export default Reflow;
