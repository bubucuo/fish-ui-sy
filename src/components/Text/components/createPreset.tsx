import * as React from "react";

import { mergeClasses } from "@griffel/react";
import type { ForwardRefComponent, TextPresetProps } from "@/index";
import { Text } from "@/index";

type Options = {
  displayName: string;
  useStyles: () => Record<"root", string>;
};

export function createPreset(
  options: Options
): React.FunctionComponent<TextPresetProps> {
  const { useStyles, displayName } = options;
  const className = `fish-ui-${displayName}`;
  const Wrapper = (props: TextPresetProps) => {
    const styles = useStyles();

    const cls = mergeClasses(className, styles.root, className);

    return <Text className={cls} {...props} />;
  };

  Wrapper.displayName = displayName;

  return Wrapper;
}
