import * as React from "react";
import type {
  DialogModalType,
  DialogOpenChangeData,
} from "../components/Dialog";
import { ContextSelector } from "../../../utilities";

export type DialogContextValue = {
  open: boolean;
  dialogTitleId?: string;
  modalType: DialogModalType;
  /**
   * Requests dialog main component to update it's internal open state
   */
  requestOpenChange: (data: DialogOpenChangeData) => void;
  backdropClosable?: boolean;
}; // & Partial<ReturnType<typeof useModalAttributes>>;

const defaultContextValue: DialogContextValue = {
  open: false,
  modalType: "modal",
  requestOpenChange() {},
  backdropClosable: true,
};

// Contexts should default to undefined
export const DialogContext = React.createContext<
  DialogContextValue | undefined
>(undefined);

export const DialogProvider = DialogContext.Provider;
export const useDialogContext = <T>(
  selector?: ContextSelector<DialogContextValue, T>
) => {
  const contextValue = React.useContext(DialogContext);
  return selector
    ? selector(contextValue || defaultContextValue)
    : contextValue || defaultContextValue;
};
