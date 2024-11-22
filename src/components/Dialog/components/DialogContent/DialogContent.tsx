import * as React from "react";
import { ForwardRefComponent } from "../../../../utilities";
import { DialogContentProps } from "./DialogContent.types";
import { useDialogContentStyles } from "./useDialogContentStyles.styles";

/**
 * The `DialogContent` is a container where the content of the dialog is rendered.
 * Apart from styling, this component does not have other behavior.
 */
export const DialogContent: ForwardRefComponent<DialogContentProps> =
  React.forwardRef((props, ref) => {
    const { className, ...rest } = props;
    const styles = useDialogContentStyles({ className });
    return (
      <div
        {...rest}
        className={styles.root}
        ref={ref as React.Ref<HTMLDivElement>}
      />
    );
  });

DialogContent.displayName = "DialogContent";
