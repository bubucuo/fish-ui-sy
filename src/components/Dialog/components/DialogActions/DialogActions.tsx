import * as React from "react";
import type { DialogActionsProps } from "./DialogActions.types";
import { ForwardRefComponent } from "../../../../utilities";
import { useDialogActionsStyles } from "./useDialogActionsStyles.styles";

/**
 * `DialogActions` is a container for the actions of the dialog.
 * Apart from styling, this component does not have other behavior.
 */
export const DialogActions: ForwardRefComponent<DialogActionsProps> =
  React.forwardRef((props, ref) => {
    const { position = "end", fluid = false, ...restProps } = props;

    const styles = useDialogActionsStyles({
      ...props,
      position,
      fluid,
    });
    return (
      <div
        {...restProps}
        className={styles.root}
        ref={ref as React.Ref<HTMLDivElement>}
      />
    );
  });

DialogActions.displayName = "DialogActions";
