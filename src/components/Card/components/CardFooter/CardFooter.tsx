import * as React from "react";
import { type ForwardRefComponent } from "fish-ui-sy";
import type { CardFooterProps } from "./CardFooter.types";
import { useCardFooterStyles } from "./useCardFooterStyles.styles";

/**
 * Component to render Button actions in a Card component.
 */
export const CardFooter: ForwardRefComponent<CardFooterProps> =
  React.forwardRef((props, ref) => {
    const { children, action, ...restProps } = props;
    const styles = useCardFooterStyles(props);
    return (
      <div
        {...restProps}
        ref={ref as React.Ref<HTMLDivElement>}
        className={styles.root}
      >
        {children}
        {action && <div className={styles.action}>{action}</div>}
      </div>
    );
  });

CardFooter.displayName = "CardFooter";
