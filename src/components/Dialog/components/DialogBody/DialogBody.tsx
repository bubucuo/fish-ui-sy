import * as React from "react";
import type { DialogBodyProps } from "./DialogBody.types";
import { ForwardRefComponent } from "../../../../utilities";
import { useDialogBodyStyles } from "./useDialogBodyStyles.styles";

/**
 * The `DialogBody` is a container where the content of the dialog is rendered.
 * Apart from styling, this component does not have other behavior.
 */
export const DialogBody: ForwardRefComponent<DialogBodyProps> =
  React.forwardRef((props, ref) => {
    const { className, ...restProps } = props;
    const styles = useDialogBodyStyles({ className });
    return (
      <div
        {...restProps}
        className={styles.root}
        ref={ref as React.Ref<HTMLDivElement>}
      />
    );
  });

DialogBody.displayName = "DialogBody";
