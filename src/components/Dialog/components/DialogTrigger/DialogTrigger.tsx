import * as React from "react";
import type { DialogTriggerProps } from "./DialogTrigger.types";
import {
  DialogContextValue,
  useDialogContext,
  useDialogSurfaceContext,
} from "../../contexts";
import { getTriggerChild } from "../../../../utilities/trigger/getTriggerChild";
import { useEventCallback } from "../../../../utilities";
import type { FishTriggerComponent } from "../../../../utilities/trigger/types";
import { applyTriggerPropsToChildren } from "../../../../utilities/trigger/applyTriggerPropsToChildren";

/**
 * A non-visual component that wraps its child
 * and configures them to be the trigger that will open or close a `Dialog`.
 * This component should only accept one child.
 *
 * This component sole purpose is to avoid opting out of the internal controlled open state of a `Dialog`
 * Besides being a trigger that opens/close a dialog through context this component doesn't do much,
 * making it basically unnecessary in cases where the trigger is outside of the `Dialog` component.
 */
export const DialogTrigger: React.FC<DialogTriggerProps> = (props) => {
  const isInsideSurfaceDialog = useDialogSurfaceContext();
  const { children, action = isInsideSurfaceDialog ? "close" : "open" } = props;

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const child = getTriggerChild(children as any);

  const { requestOpenChange } = useDialogContext(
    (ctx: DialogContextValue) => ctx
  );

  const handleClick = useEventCallback(
    (
      event: React.MouseEvent<
        HTMLButtonElement & HTMLAnchorElement & HTMLDivElement
      >
    ) => {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      (child?.props as any).onClick?.(event);
      if (!event.isDefaultPrevented()) {
        requestOpenChange({
          event,
          type: "triggerClick",
          open: action === "open",
        });
      }
    }
  );

  const triggerChildProps = {
    ...child?.props,
    ref: child?.ref,
    onClick: handleClick,
  } as const;

  /* eslint-disable @typescript-eslint/no-explicit-any */
  return applyTriggerPropsToChildren(children as any, triggerChildProps);
};

DialogTrigger.displayName = "DialogTrigger";
// type casting here is required to ensure internal type FishTriggerComponent is not leaked
(DialogTrigger as FishTriggerComponent).isFishTriggerComponent = true;
