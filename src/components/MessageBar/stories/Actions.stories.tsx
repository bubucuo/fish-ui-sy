import {
  MessageBar,
  MessageBarTitle,
  MessageBarBody,
  MessageBarActions,
  Button,
} from "fish-ui-sy";
import { DismissRegular } from "fish-ui-sy-react-icons";

const Default = () => {
  return (
    <MessageBar>
      <MessageBarBody>
        <MessageBarTitle>Descriptive title</MessageBarTitle>
        Message providing information to the user with actionable insights.{" "}
        <a href="https://github.com/bubucuo">Link</a>
      </MessageBarBody>
      <MessageBarActions
        containerAction={
          <Button appearance="transparent" icon={<DismissRegular />} />
        }
      >
        <Button>Action</Button>
        <Button>Action</Button>
      </MessageBarActions>
    </MessageBar>
  );
};

export default Default;
