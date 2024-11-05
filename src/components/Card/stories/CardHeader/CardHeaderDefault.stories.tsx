import { makeStyles, Button, Body1, Caption1, CardHeader } from "fish-ui-sy";
import { MoreHorizontal20Regular } from "fish-ui-sy-react-icons";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    gap: "16px",
  },
  header: {
    width: "300px",
  },
});

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const Default = () => {
  const styles = useStyles();

  const powerpointLogoURL = resolveAsset("pptx.png");

  return (
    <div className={styles.container}>
      <CardHeader
        className={styles.header}
        image={<img src={powerpointLogoURL} alt="Microsoft PowerPoint logo" />}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        description={<Caption1>Developer</Caption1>}
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More options"
          />
        }
      />

      <CardHeader
        className={styles.header}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        description={<Caption1>Developer</Caption1>}
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More options"
          />
        }
      />

      <CardHeader
        className={styles.header}
        image={<img src={powerpointLogoURL} alt="Microsoft PowerPoint logo" />}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More options"
          />
        }
      />

      <CardHeader
        className={styles.header}
        image={<img src={powerpointLogoURL} alt="Microsoft PowerPoint logo" />}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        description={<Caption1>Developer</Caption1>}
      />

      <CardHeader
        className={styles.header}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More options"
          />
        }
      />

      <CardHeader
        className={styles.header}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        description={<Caption1>Developer</Caption1>}
      />

      <CardHeader
        className={styles.header}
        image={<img src={powerpointLogoURL} alt="Microsoft PowerPoint logo" />}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
      />

      <CardHeader
        className={styles.header}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
      />
    </div>
  );
};

export default Default;
