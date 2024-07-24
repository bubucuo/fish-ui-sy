import React from "react";
import { Meta } from "@storybook/react";
import { makeStyles } from "@griffel/react";
import {
  FishProvider,
  tokens,
  Button,
  webLightTheme,
  teamsLightTheme,
  teamsDarkTheme,
} from "@/index";

export default {
  title: "主题/FishProvider 主题设置",
  component: FishProvider,
} as Meta;

const useStyles = makeStyles({
  button: {
    marginTop: "5px",
  },
  provider: {
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "20px",
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

export const Default = () => {
  const styles = useStyles();
  return (
    <>
      <div>
        <FishProvider className={styles.provider} theme={webLightTheme}>
          <div className={styles.text}>Web Light Theme</div>
          <Button className={styles.button}>Web Light Theme</Button>
        </FishProvider>
      </div>
      <div>
        <FishProvider className={styles.provider} theme={teamsLightTheme}>
          <div className={styles.text}>Teams Light Theme</div>
          <Button className={styles.button}>Teams Light Theme</Button>
        </FishProvider>
      </div>
      <div>
        <FishProvider className={styles.provider} theme={teamsDarkTheme}>
          <div className={styles.text}>Teams Dark Theme</div>
          <Button className={styles.button}>Teams Dark Theme</Button>
        </FishProvider>
      </div>
    </>
  );
};

Default.parameters = {
  docs: {
    description: {
      story:
        "FishProvider将传递的主题转换为CSS变量，并将其他设置传递给Fish UI组件。",
    },
  },
};
