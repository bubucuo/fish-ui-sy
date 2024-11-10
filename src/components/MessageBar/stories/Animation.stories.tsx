import * as React from "react";
import { DismissRegular } from "fish-ui-sy-react-icons";
import {
  MessageBar,
  MessageBarActions,
  MessageBarTitle,
  MessageBarBody,
  MessageBarGroup,
  MessageBarGroupProps,
  MessageBarIntent,
  Button,
  makeStyles,
  tokens,
  RadioGroup,
  Radio,
  Label,
  Flex,
} from "fish-ui-sy";

const useStyles = makeStyles({
  controlsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  messageBarGroup: {
    padding: tokens.spacingHorizontalMNudge,
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    gap: "10px",

    height: "300px",
    overflow: "auto",
    border: `2px solid ${tokens.colorBrandForeground1}`,
  },
  field: {
    flexGrow: 1,
    alignItems: "center",
    gridTemplateColumns: "max-content auto",
  },
  buttonGroup: {
    display: "flex",
    gap: "5px",
  },
});

const intents: MessageBarIntent[] = ["info", "warning", "error", "success"];

interface ExampleMessage {
  intent: MessageBarIntent;
  id: number;
}

const Animation = () => {
  const styles = useStyles();
  const counterRef = React.useRef(0);

  const [animate, setAnimate] =
    React.useState<MessageBarGroupProps["animate"]>("both");
  const [messages, setMessages] = React.useState<ExampleMessage[]>([]);

  const addMessage = () => {
    const intent = intents[Math.floor(Math.random() * intents.length)];
    const newMessage = { intent, id: counterRef.current++ };

    setMessages((s) => [newMessage, ...s]);
  };
  const clearMessages = () => setMessages([]);
  const dismissMessage = (messageId: number) =>
    setMessages((s) => s.filter((entry) => entry.id !== messageId));

  return (
    <div>
      <Flex className={styles.controlsContainer} align="center">
        <Label className={styles.field}>Select animation type:</Label>
        <RadioGroup
          layout="horizontal"
          onChange={(_, { value }) =>
            setAnimate(value as MessageBarGroupProps["animate"])
          }
          value={animate}
        >
          <Radio label="both" value="both" />
          <Radio label="exit-only" value="exit-only" />
        </RadioGroup>

        <div className={styles.buttonGroup}>
          <Button appearance="primary" onClick={addMessage}>
            Add message
          </Button>
          <Button onClick={clearMessages}>Clear</Button>
        </div>
      </Flex>

      <MessageBarGroup animate={animate} className={styles.messageBarGroup}>
        {messages.map(({ intent, id }) => (
          <MessageBar key={`${intent}-${id}`} intent={intent}>
            <MessageBarBody>
              <MessageBarTitle>Descriptive title</MessageBarTitle>
              Message providing information to the user with actionable
              insights.
              <a href="https://github.com/bubucuo">Link</a>
            </MessageBarBody>
            <MessageBarActions
              containerAction={
                <Button
                  onClick={() => dismissMessage(id)}
                  aria-label="dismiss"
                  appearance="transparent"
                  icon={<DismissRegular />}
                />
              }
            />
          </MessageBar>
        ))}
      </MessageBarGroup>
    </div>
  );
};

export default Animation;
