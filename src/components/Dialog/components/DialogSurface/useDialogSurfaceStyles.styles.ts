import { makeResetStyles, mergeClasses } from "@griffel/react";
import { DialogSurfaceProps, tokens } from "fish-ui-sy";
import {
  FULLSCREEN_DIALOG_SCROLLBAR_OFFSET,
  MEDIA_QUERY_BREAKPOINT_SELECTOR,
  MEDIA_QUERY_SHORT_SCREEN,
  SURFACE_BORDER_WIDTH,
  SURFACE_PADDING,
} from "../../contexts";

export const dialogSurfaceClassNames = {
  root: "fish-ui-DialogSurface",
  backdrop: "fish-ui-DialogSurface__backdrop",
};

/**
 * Styles for the root slot
 */
const useRootBaseStyle = makeResetStyles({
  inset: 0,
  padding: SURFACE_PADDING,
  margin: "auto",
  borderStyle: "none",
  overflow: "unset",
  border: `${SURFACE_BORDER_WIDTH} solid ${tokens.colorTransparentStroke}`,
  borderRadius: tokens.borderRadiusXLarge,

  display: "block",
  userSelect: "unset",
  visibility: "unset",
  position: "fixed",
  height: "fit-content",
  maxWidth: "600px",
  maxHeight: "100vh",
  boxSizing: "border-box",
  backgroundColor: tokens.colorNeutralBackground1,
  color: tokens.colorNeutralForeground1,
  boxShadow: tokens.shadow64,

  [MEDIA_QUERY_BREAKPOINT_SELECTOR]: {
    maxWidth: "100vw",
  },

  [MEDIA_QUERY_SHORT_SCREEN]: {
    overflowY: "auto",
    // We need to offset the scrollbar by adding transparent borders otherwise
    // it conflicts with the border radius.
    paddingRight: `calc(${SURFACE_PADDING} - ${FULLSCREEN_DIALOG_SCROLLBAR_OFFSET})`,
    borderRightWidth: FULLSCREEN_DIALOG_SCROLLBAR_OFFSET,
    borderTopWidth: FULLSCREEN_DIALOG_SCROLLBAR_OFFSET,
    borderBottomWidth: FULLSCREEN_DIALOG_SCROLLBAR_OFFSET,
  },
});

const useBackdropBaseStyle = makeResetStyles({
  inset: "0px",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  position: "fixed",
});

/**
 * Apply styling to the DialogSurface slots based on the state
 */
export const useDialogSurfaceStyles = (state: DialogSurfaceProps) => {
  const rootBaseStyle = useRootBaseStyle();

  const backdropBaseStyle = useBackdropBaseStyle();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styles = {} as any;
  styles.root = mergeClasses(
    dialogSurfaceClassNames.root,
    rootBaseStyle,
    state.className
  );

  styles.backdrop = mergeClasses(
    dialogSurfaceClassNames.backdrop,
    backdropBaseStyle
  );

  return styles;
};
