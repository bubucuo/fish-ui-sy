import * as React from "react";
import { type ForwardRefComponent } from "fish-ui-sy";
import { CardPreviewProps } from "./CardPreview.types";
import { useCardPreviewStyles } from "./useCardPreviewStyles.styles";

/**
 * Component to render an image, text and an action in a Card component.
 */
export const CardPreview: ForwardRefComponent<CardPreviewProps> =
  React.forwardRef((props, ref) => {
    const { children, logo, ...restProps } = props;
    const styles = useCardPreviewStyles(props);

    return (
      <div
        {...restProps}
        ref={ref as React.Ref<HTMLDivElement>}
        className={styles.root}
      >
        {children}
        {logo && <div className={styles.logo}>{logo}</div>}
      </div>
    );
  });

CardPreview.displayName = "CardPreview";
