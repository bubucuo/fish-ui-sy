import * as React from "react";
import { themes, defaultTheme, ThemeIds } from "../theme";
import { THEME_ID } from "../constants";
import { FishGlobals, FishStoryContext } from "../hooks";
import { FishProvider } from "../../../../src/components/FishProvider/FishProvider";
import { Theme } from "../../../../src/tokens/types";

const findTheme = (themeId?: ThemeIds) => {
  if (!themeId) {
    return;
  }
  return themes.find((value) => value.id === themeId);
};

const getActiveFishTheme = (globals: FishGlobals) => {
  const selectedThemeId = globals[THEME_ID];
  const { theme } = findTheme(selectedThemeId) ?? defaultTheme;

  return { theme };
};

export const withFishProvider = (
  StoryFn: () => JSX.Element,
  context: FishStoryContext
) => {
  const { globals, parameters } = context;
  const globalTheme = getActiveFishTheme(globals);
  const paramTheme = findTheme(parameters.fluentTheme);
  const { theme } = paramTheme ?? globalTheme;

  return (
    <FishProvider theme={theme}>
      <FishExampleContainer theme={theme}>{StoryFn()}</FishExampleContainer>
    </FishProvider>
  );
};

const FishExampleContainer: React.FC<{ theme: Theme }> = (props) => {
  const { theme } = props;

  const backgroundColor = theme.colorNeutralBackground2;
  return (
    <div style={{ padding: "48px 24px", backgroundColor }}>
      {props.children}
    </div>
  );
};
