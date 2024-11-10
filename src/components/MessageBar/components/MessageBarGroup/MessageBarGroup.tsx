import * as React from "react";
// @ts-expect-error// @ts-expect-error
import { TransitionGroup } from "react-transition-group";
import { useMessageBarGroupStyles } from "./useMessageBarGroupStyles.styles";
import type { MessageBarGroupProps } from "./MessageBarGroup.types";
import { ForwardRefComponent } from "../../../../utilities";
import { MessageBarTransition } from "./MessageBarTransition";

/**
 * MessageBarGroup component
 */
export const MessageBarGroup: ForwardRefComponent<MessageBarGroupProps> =
  React.forwardRef((props, ref) => {
    const { children, animate = "exit-only", ...restProps } = props;
    const styles = useMessageBarGroupStyles(props);

    const childNodes = React.Children.map(children ?? [], (c) =>
      React.isValidElement(c) && c.type !== React.Fragment ? c : null
    ).filter(Boolean);

    return (
      <div
        {...restProps}
        ref={ref as React.Ref<HTMLDivElement>}
        className={styles.root}
      >
        <TransitionGroup component={null}>
          {childNodes.map((child) => (
            <MessageBarTransition
              animate={animate}
              key={child.key}
              enterClassName={styles.enterStyles}
              exitClassName={styles.exitStyles}
            >
              {child}
            </MessageBarTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  });

MessageBarGroup.displayName = "MessageBarGroup";
