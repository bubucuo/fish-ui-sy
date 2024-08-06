// 传递theme主题，生效的区域是它的后代组件
// 跨组件层级传递参数(theme)
// props 1-2层
// context 深层次

import { Theme, webLightTheme } from "fish-ui-sy";
import React from "react";
import { useStyles } from "./useStyles.styles";

// 1. 创建一个context
type ThemeContextValue = Theme | Partial<Theme> | undefined;
const ThemeContext = React.createContext<ThemeContextValue>(undefined);

// 2. 创建一个provider
export type FishProviderProps = React.HTMLAttributes<HTMLDivElement> & {
  theme?: ThemeContextValue;
};
export const FishProvider = ({
  className,
  theme = webLightTheme,
  children,
  ...restProps
}: FishProviderProps) => {
  const cls = useStyles({ className, theme });
  return (
    <ThemeContext.Provider value={theme}>
      <div {...restProps} className={cls}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 3. 根据theme创建cssrules
