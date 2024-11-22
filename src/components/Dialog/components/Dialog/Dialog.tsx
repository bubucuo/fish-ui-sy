import * as React from "react";
import type { DialogOpenChangeData, DialogProps } from "./Dialog.types";
import {
  DialogContextValue,
  DialogProvider,
  DialogSurfaceContextValue,
  DialogSurfaceProvider,
} from "../../contexts";
import {
  useControllableState,
  useEventCallback,
  useId,
} from "../../../../utilities";

/**
 * The `Dialog` root level component serves as an interface for interaction with all possible behaviors exposed.
 * It provides context down the hierarchy to `children` compound components to allow functionality.
 * This component expects to receive as children either a `DialogSurface` or a `DialogTrigger`
 * and a `DialogSurface` (or some component that will eventually render one of those compound components)
 * in this specific order
 */
export const Dialog: React.FC<DialogProps> = React.memo((props) => {
  const {
    children,
    modalType = "modal",
    onOpenChange,
    backdropClosable = true,
  } = props;
  const [trigger, content] = childrenToTriggerAndContent(children);

  const [open, setOpen] = useControllableState({
    state: props.open,
    defaultState: props.defaultOpen,
    initialState: false,
  });

  const requestOpenChange = useEventCallback((data: DialogOpenChangeData) => {
    onOpenChange?.(data.event, data);

    // if user prevents default then do not change state value
    // otherwise updates state value and trigger reference to the element that caused the opening
    if (!data.event.isDefaultPrevented()) {
      setOpen(data.open);
    }
  });

  const dialog: DialogContextValue = {
    open,
    modalType,
    dialogTitleId: useId("dialog-title-"),
    requestOpenChange,
    backdropClosable,
  };

  const dialogSurface: DialogSurfaceContextValue = false;

  return (
    <DialogProvider value={dialog}>
      <DialogSurfaceProvider value={dialogSurface}>
        {trigger}
        {content}
      </DialogSurfaceProvider>
    </DialogProvider>
  );
});

Dialog.displayName = "Dialog";

/**
 * Extracts trigger and content from children
 */
function childrenToTriggerAndContent(
  children: React.ReactNode
): readonly [trigger: React.ReactNode, content: React.ReactNode] {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement[];
  switch (childrenArray.length) {
    // case where there's a trigger followed by content
    case 2:
      return childrenArray as [
        trigger: React.ReactNode,
        content: React.ReactNode,
      ];
    // case where there's only content
    case 1:
      return [undefined, childrenArray[0]];
    // unknown case
    default:
      return [undefined, undefined];
  }
}
