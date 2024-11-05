import * as React from "react";
import { type ForwardRefComponent } from "fish-ui-sy";
import { CardHeaderProps } from "./CardHeader.types";
import { useCardHeaderStyles } from "./useCardHeaderStyles.styles";

/**
 * Component to render an image, text and an action in a Card component.
 */
export const CardHeader: ForwardRefComponent<CardHeaderProps> =
  React.forwardRef((props, ref) => {
    const { image, header, description, action, ...restProps } = props;
    const styles = useCardHeaderStyles(props);

    return (
      <div
        {...restProps}
        ref={ref as React.Ref<HTMLDivElement>}
        className={styles.root}
      >
        {image && <div className={styles.image}>{image}</div>}

        {header && <div className={styles.header}>{header}</div>}
        {description && <div className={styles.description}>{description}</div>}
        {action && <div className={styles.action}>{action}</div>}
      </div>
    );
  });

CardHeader.displayName = "CardHeader";
