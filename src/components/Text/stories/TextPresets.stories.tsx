import * as React from "react";
import {
  Body1,
  Body1Strong,
  Body1Stronger,
  Body2,
  Caption1,
  Caption1Strong,
  Caption1Stronger,
  Caption2,
  Caption2Strong,
  Display,
  LargeTitle,
  Subtitle1,
  Subtitle2,
  Subtitle2Stronger,
  Title1,
  Title2,
  Title3,
} from "fish-ui-sy";
import { makeStyles } from "@griffel/react";

const useStyles = makeStyles({
  container: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
  },
});

const Presets = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Caption2>Caption2</Caption2>
      <Caption2Strong>Caption2Strong</Caption2Strong>
      <Caption1>Caption1</Caption1>
      <Caption1Strong>Caption1Strong</Caption1Strong>
      <Caption1Stronger>Caption1Stronger</Caption1Stronger>
      <Body1>Body1</Body1>
      <Body1Strong>Body1Strong</Body1Strong>
      <Body1Stronger>Body1Stronger</Body1Stronger>
      <Body2>Body2</Body2>
      <Subtitle2>Subtitle2</Subtitle2>
      <Subtitle2Stronger>Subtitle2Stronger</Subtitle2Stronger>
      <Subtitle1>Subtitle1</Subtitle1>
      <Title3>Title3</Title3>
      <Title2>Title2</Title2>
      <Title1>Title1</Title1>
      <LargeTitle>LargeTitle</LargeTitle>
      <Display>Display</Display>
    </div>
  );
};

export default Presets;
