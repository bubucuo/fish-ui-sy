import React from "react";
import { mergeClasses } from "@griffel/react";
import type { ForwardRefComponent, TextProps } from "fish-ui-sy";
import { textClassNames, useTextStyles } from "./useTextStyles.styles";

export const Text: ForwardRefComponent<TextProps> = React.forwardRef(
  (
    {
      align = "start",
      block = false,
      font = "base",
      italic = false,
      size = 300,
      strikethrough = false,
      truncate = false,
      underline = false,
      weight = "regular",
      wrap = true,
      className,
      children,
      ...restProps
    },
    ref
  ) => {
    const styles = useTextStyles();

    return (
      <span
        {...restProps}
        ref={ref as React.Ref<HTMLHeadingElement & HTMLPreElement>}
        className={mergeClasses(
          textClassNames.root,
          styles.root,
          wrap === false && styles.nowrap,
          truncate && styles.truncate,
          block && styles.block,
          italic && styles.italic,
          underline && styles.underline,
          strikethrough && styles.strikethrough,
          underline && strikethrough && styles.strikethroughUnderline,
          size === 100 && styles.base100,
          size === 200 && styles.base200,
          size === 400 && styles.base400,
          size === 500 && styles.base500,
          size === 600 && styles.base600,
          size === 700 && styles.hero700,
          size === 800 && styles.hero800,
          size === 900 && styles.hero900,
          size === 1000 && styles.hero1000,
          font === "monospace" && styles.monospace,
          font === "numeric" && styles.numeric,
          weight === "medium" && styles.weightMedium,
          weight === "semibold" && styles.weightSemibold,
          weight === "bold" && styles.weightBold,
          align === "center" && styles.alignCenter,
          align === "end" && styles.alignEnd,
          align === "justify" && styles.alignJustify,
          className
        )}
      >
        {children}
      </span>
    );
  }
);

Text.displayName = "Text";
