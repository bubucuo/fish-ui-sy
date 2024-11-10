import React from "react";
import { type ForwardRefComponent, useId, useMergedRefs } from "fish-ui-sy";
import { MessageBarProps } from "./MessageBar.types";
import { useMessageBarStyles } from "./useMessageBarStyles.styles";
import {
  MessageBarContextProvider,
  useMessageBarTransitionContext,
} from "../../contexts";
import { useMessageBarReflow } from "./useMessageBarReflow";
import { getIntentIcon } from "./getIntentIcon";

export const MessageBar: ForwardRefComponent<MessageBarProps> =
  React.forwardRef((props, ref) => {
    const {
      layout = "auto",
      intent = "info",
      shape = "rounded",
      children,
      ...restProps
    } = props;

    const autoReflow = layout === "auto";
    const { ref: reflowRef, reflowing } = useMessageBarReflow(autoReflow);
    const computedLayout = autoReflow
      ? reflowing
        ? "multiline"
        : "singleline"
      : layout;
    const { className: transitionClassName, nodeRef } =
      useMessageBarTransitionContext();
    const actionsRef = React.useRef<HTMLDivElement | null>(null);
    const bodyRef = React.useRef<HTMLDivElement | null>(null);
    // const { announce } = useAnnounce_unstable();
    const titleId = useId();

    const styles = useMessageBarStyles({
      ...props,
      layout: computedLayout,
      intent,
      shape,
      transitionClassName,
    });

    const messageBarContext = React.useMemo(
      () => ({
        layout: computedLayout,
        actionsRef,
        bodyRef,
        titleId,
      }),
      [computedLayout, actionsRef, bodyRef, titleId]
    );

    return (
      <MessageBarContextProvider value={messageBarContext}>
        <div
          {...restProps}
          role="group"
          aria-labelledby={titleId}
          ref={
            useMergedRefs(ref, reflowRef, nodeRef) as React.Ref<HTMLDivElement>
          }
          className={styles.root}
        >
          <div className={styles.icon}>{getIntentIcon(intent)}</div>
          {children}
          {computedLayout === "multiline" && (
            <div className={styles.bottomReflowSpacer}>
              {/* {bottomReflowSpacer} */}
            </div>
          )}
        </div>
      </MessageBarContextProvider>
    );
  });

MessageBar.displayName = "MessageBar";
