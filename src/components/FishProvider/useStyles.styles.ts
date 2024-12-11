import { makeStyles, mergeClasses } from "@griffel/react";
import { FishProviderProps, tokens } from "fish-ui-sy";
import { useThemeStyleTag } from "./useThemeStyleTag";

const fishProviderClassNames = {
  root: "fish-ui-FishProvider",
};

const useBaseStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground1,
    textAlign: "left",
    "& a": {
      color: tokens.colorBrandBackground,
    },
  },
});

export const useStyles = ({ className, theme }: Partial<FishProviderProps>) => {
  const baseStyles = useBaseStyles();
  // 根据theme创建cssrules
  const { themeClassName } = useThemeStyleTag({ theme });
  return mergeClasses(
    fishProviderClassNames.root,
    themeClassName,
    baseStyles.root,
    className
  );
};
