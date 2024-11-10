import * as React from "react";
import { useMessageBarTitleStyles } from "./useMessageBarTitleStyles.styles";
import type { MessageBarTitleProps } from "./MessageBarTitle.types";
import { ForwardRefComponent } from "../../../../utilities";
import { useMessageBarContext } from "../../contexts";

/**
 * MessageBarTitle component
 */
export const MessageBarTitle: ForwardRefComponent<MessageBarTitleProps> =
  React.forwardRef((props, ref) => {
    const styles = useMessageBarTitleStyles(props);
    const { titleId } = useMessageBarContext();

    return (
      <span
        {...props}
        ref={ref as React.Ref<HTMLSpanElement>}
        className={styles.root}
        id={titleId}
      />
    );
  });

MessageBarTitle.displayName = "MessageBarTitle";
