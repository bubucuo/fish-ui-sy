import * as React from "react";
import { useMessageBarActionsStyles } from "./useMessageBarActionsStyles.styles";
import type { MessageBarActionsProps } from "./MessageBarActions.types";
import { ForwardRefComponent, useMergedRefs } from "../../../../utilities";
import { useMessageBarContext } from "../../contexts";

/**
 * MessageBarActions component
 */
export const MessageBarActions: ForwardRefComponent<MessageBarActionsProps> =
  React.forwardRef((props, ref) => {
    const { containerAction, children, className, ...restProps } = props;
    const { layout = "singleline", actionsRef } = useMessageBarContext();

    const styles = useMessageBarActionsStyles({
      layout,
      className,
      hasActions: !!children,
    });
    const _ref = useMergedRefs(actionsRef, ref) as React.Ref<HTMLDivElement>;

    if (layout === "multiline") {
      return (
        <>
          {containerAction && (
            <div
              className={styles.containerAction}
              children={containerAction}
            />
          )}
          <div {...restProps} ref={_ref} className={styles.root}>
            {children}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div {...restProps} ref={_ref} className={styles.root}>
            {children}
          </div>
          {containerAction && (
            <div
              className={styles.containerAction}
              children={containerAction}
            />
          )}
        </>
      );
    }

    return (
      <div {...restProps} ref={_ref} className={styles.root}>
        <div className={styles.containerAction}>{children}</div>
      </div>
    );
  });

MessageBarActions.displayName = "MessageBarActions";
