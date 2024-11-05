import * as React from "react";

import { mergeClasses } from "@griffel/react";
import type { TextPresetProps } from "fish-ui-sy";
import { Text } from "fish-ui-sy";

type Options = {
  displayName: string;
  useStyles: () => Record<"root", string>;
};

export function createPreset(
  options: Options
): React.FunctionComponent<TextPresetProps> {
  const { useStyles, displayName } = options;
  const _className = `fish-ui-${displayName}`;
  const Wrapper = ({ className, ...restProps }: TextPresetProps) => {
    const styles = useStyles();

    const cls = mergeClasses(_className, styles.root, className);

    return <Text {...restProps} className={cls} />;
  };

  Wrapper.displayName = displayName;

  return Wrapper;
}
