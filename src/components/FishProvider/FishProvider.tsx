import React from "react";
import { makeStyles, mergeClasses, useRenderer_unstable } from "@griffel/react";
import { Theme, canUseDOM, tokens } from "@/index";
import { useFluentProviderThemeStyleTag } from "./useFluentProviderThemeStyleTag";

export type ThemeContextValue = Theme | Partial<Theme> | undefined;

export const ThemeContext = React.createContext<ThemeContextValue>(undefined);

export type FishProviderProps = React.HTMLAttributes<
  React.ChildContextProvider<ThemeContextValue>
> & {
  theme: ThemeContextValue;
};

const useStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground1,
    textAlign: "left",
  },
});

export const FishProvider = ({
  theme,
  children,
  ...restProps
}: FishProviderProps) => {
  const parentTheme = useTheme();

  const mergedTheme = shallowMerge(parentTheme, theme);

  const renderer = useRenderer_unstable();

  // themeClassName: styleTagId, rule
  const { styleTagId: themeClassName, rule: cssRule } =
    useFluentProviderThemeStyleTag({
      theme: mergedTheme as Theme,
      targetDocument: document,
      rendererAttributes: renderer.styleElementAttributes ?? {},
    });

  const styles = useStyles();

  const cls = mergeClasses("fish-ui-FishProvider", themeClassName, styles.root);
  return (
    <ThemeContext.Provider {...restProps} value={mergedTheme}>
      <div className={cls}>
        {canUseDOM() ? null : (
          <style
            dangerouslySetInnerHTML={{ __html: cssRule }}
            {...renderer.styleElementAttributes}
            id={themeClassName}
          />
        )}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

function shallowMerge<T>(a: T, b: T): T {
  // Merge impacts perf: we should like to avoid it if it's possible
  if (a && b) {
    return { ...a, ...b };
  }

  if (a) {
    return a;
  }

  return b;
}

function useTheme(): ThemeContextValue {
  return React.useContext(ThemeContext);
}

FishProvider.displayName = "FishProvider";
