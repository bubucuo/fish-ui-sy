import * as React from "react";
import { DismissRegular } from "fish-ui-sy-react-icons";
import {
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarTitle,
  Button,
  Checkbox,
} from "fish-ui-sy";

const intents = ["info", "warning", "error", "success"] as const;
const ManualLayout = () => {
  const [single, setSingle] = React.useState(true);
  return (
    <>
      <Checkbox
        label={single ? "Single line layout" : "Multi line layout"}
        checked={single}
        onChange={(_, { checked }) => setSingle(!!checked)}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {intents.map((intent) => (
          <MessageBar
            key={intent}
            layout={single ? "singleline" : "multiline"}
            intent={intent}
          >
            <MessageBarBody>
              <MessageBarTitle>Descriptive title</MessageBarTitle>
              Message providing information to the user with actionable
              insights.
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
              <Button size="small">Action</Button>
              <Button size="small">Action</Button>
            </MessageBarActions>
          </MessageBar>
        ))}
      </div>
    </>
  );
};

export default ManualLayout;
