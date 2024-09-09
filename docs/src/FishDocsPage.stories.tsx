import * as React from "react";
import {
  DocsContext,
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  HeaderMdx,
  ArgTypes,
} from "@storybook/addon-docs";
import { tokens } from "../../src";
import { makeStyles, shorthands } from "@griffel/react";

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

const nameToHash = (id: string): string =>
  id.toLowerCase().replace(/[^a-z0-9]/gi, "-");

export const FishDocsPage = () => {
  const context = React.useContext(DocsContext);

  const stories = context.componentStories();
  const primaryStory = stories[0];
  const styles = useStyles();

  return (
    <div>
      <Title />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.globalTogglesContainer}></div>
          <Subtitle />
          <div className={styles.description}>
            <Description />
          </div>
          <hr className={styles.divider} />
          <HeaderMdx as="h3" id={nameToHash(primaryStory.name)}>
            {primaryStory.name}
          </HeaderMdx>
          <Primary />
          <ArgTypes />
          <Stories includePrimary={false} />
        </div>
      </div>
    </div>
  );
};
