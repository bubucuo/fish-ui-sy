import * as React from "react";

import { useMessageBarBodyStyles } from "./useMessageBarBodyStyles.styles";
import type { MessageBarBodyProps } from "./MessageBarBody.types";
import { ForwardRefComponent, useMergedRefs } from "../../../../utilities";
import { useMessageBarContext } from "../../contexts";

/**
 * MessageBarBody component
 */
export const MessageBarBody: ForwardRefComponent<MessageBarBodyProps> =
  React.forwardRef((props, ref) => {
    const styles = useMessageBarBodyStyles(props);

    const { bodyRef } = useMessageBarContext();

    return (
      <div
        {...props}
        ref={useMergedRefs(ref, bodyRef) as React.Ref<HTMLDivElement>}
        className={styles.root}
      />
    );
  });

MessageBarBody.displayName = "MessageBarBody";
