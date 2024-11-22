import type { DialogSurfaceContextValues } from "./DialogSurface.types";
import type { DialogSurfaceContextValue } from "../../contexts";

export function useDialogSurfaceContextValues(): DialogSurfaceContextValues {
  const dialogSurface: DialogSurfaceContextValue = true;
  return { dialogSurface };
}
