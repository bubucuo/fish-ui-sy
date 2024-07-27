import * as React from "react";
import {
  DocsContext,
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
} from "@storybook/addon-docs";
import type { SBEnumType } from "@storybook/csf";
import { tokens } from "@/index";
import { makeStyles, shorthands } from "@griffel/react";
import { Toc } from "./Toc.doc";
import { themes } from "./theme";
import { ThemePicker } from "./ThemePicker.doc";

const useStyles = makeStyles({
  divider: {
    height: "1px",
    backgroundColor: "#e1dfdd",
    ...shorthands.border("0px", "none"),
    ...shorthands.margin("48px", "0px"),
  },
  wrapper: {
    display: "flex",
    ...shorthands.gap("16px"),
  },
  toc: {
    flexBasis: "200px",
    flexShrink: 0,
    [`@media screen and (max-width: 1000px)`]: {
      display: "none",
    },
  },
  container: {
    // without a width, this div grows wider than its parent
    width: "200px",
    flexGrow: 1,
  },
  globalTogglesContainer: {
    columnGap: tokens.spacingHorizontalXXXL,
    display: "flex",
  },
  description: {
    display: "grid",
    gridTemplateColumns: "1fr min-content",
  },
  nativeProps: {
    display: "flex",
    gap: tokens.spacingHorizontalM,

    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingHorizontalM,
    margin: `0 ${tokens.spacingHorizontalM}`,
  },
  nativePropsIcon: {
    alignSelf: "center",
    color: tokens.colorBrandForeground1,
    fontSize: "24px",
  },
  nativePropsMessage: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
});

const getNativeElementsList = (elements: SBEnumType["value"]): JSX.Element => {
  const elementsArr = elements.map((el, idx) => [
    <code key={idx}>{`<${el}>`}</code>,
    idx !== elements.length - 1 ? ", " : " ",
  ]);

  return (
    <>
      {elementsArr}
      {elementsArr.length > 1 ? "elements" : "element"}
    </>
  );
};

export const FishDocsPage = () => {
  const context = React.useContext(DocsContext);
  // const selectedTheme = themes.find(
  //   (theme) => theme.id === context.globals![THEME_ID]
  // );

  const stories = context.componentStories();
  const primaryStory = stories[0];
  // const videos = context.parameters?.videos ?? null;
  const styles = useStyles();

  return (
    <div>
      <Title />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.globalTogglesContainer}>
            <ThemePicker />
          </div>
          <Subtitle />
          <div className={styles.description}>
            <Description />
            {/* {videos && <VideoPreviews videos={videos} />} */}
          </div>
          <hr className={styles.divider} />
          {/* <HeaderMdx as="h3" id={nameToHash(primaryStory.name)}>
            {primaryStory.name}
          </HeaderMdx> */}
          <Primary />
          {/* <ArgsTable story={PRIMARY_STORY} /> */}
          {primaryStory.argTypes.as &&
            primaryStory.argTypes.as?.type?.name === "enum" && (
              <div className={styles.nativeProps}>
                {/* <InfoFilled className={styles.nativePropsIcon} /> */}
                <div className={styles.nativePropsMessage}>
                  <b>
                    Native props are supported{" "}
                    <span role="presentation">🙌</span>
                  </b>
                  <span>
                    All HTML attributes native to the{" "}
                    {getNativeElementsList(primaryStory.argTypes.as.type.value)}
                    , including all <code>aria-*</code> and <code>data-*</code>{" "}
                    attributes, can be applied as native props on this
                    component.
                  </span>
                </div>
              </div>
            )}
          <Stories />
        </div>
        <div className={styles.toc}>
          <Toc stories={stories} />
        </div>
      </div>
    </div>
  );
};
