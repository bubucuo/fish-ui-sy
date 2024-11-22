import * as React from "react";

import type { DialogTitleProps } from "./DialogTitle.types";
import { ForwardRefComponent } from "../../../../utilities";
import { DialogContextValue, useDialogContext } from "../../contexts";
import { DialogTrigger } from "../DialogTrigger";
import {
  useDialogTitleInternalStyles,
  useDialogTitleStyles,
} from "./useDialogTitleStyles.styles";
import { Dismiss20Regular } from "fish-ui-sy-react-icons";

/**
 * The `DialogTitle` component expects to have a title/header
 * and when `Dialog` is `non-modal` a close (X icon) button is provided through `action` slot by default.
 */
export const DialogTitle: ForwardRefComponent<DialogTitleProps> =
  React.forwardRef((props, ref) => {
    const { action, ...restProps } = props;
    const { dialogTitleId } = useDialogContext(
      (ctx: DialogContextValue) => ctx
    );

    const internalStyles = useDialogTitleInternalStyles();

    const styles = useDialogTitleStyles(props);

    return (
      <>
        <h2
          {...restProps}
          id={dialogTitleId}
          ref={ref as React.Ref<HTMLHeadingElement>}
          className={styles.root}
        />

        <div className={styles.action}>
          {action || (
            <DialogTrigger disableButtonEnhancement action="close">
              <button
                type="button"
                className={internalStyles}
                aria-label="close"
              >
                <Dismiss20Regular />
              </button>
            </DialogTrigger>
          )}
        </div>
      </>
    );
  });

DialogTitle.displayName = "DialogTitle";
