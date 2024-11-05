export const KEYBOARD_NAV_ATTRIBUTE = "data-keyboard-nav" as const;
export const KEYBOARD_NAV_SELECTOR =
  `:global([${KEYBOARD_NAV_ATTRIBUTE}])` as const;

/**
 * @internal
 */
export const FOCUS_VISIBLE_ATTR = "data-fish-ui-focus-visible";

/**
 * @internal
 */
export const FOCUS_WITHIN_ATTR = "data-fish-ui-focus-within";
export const defaultOptions = {
  style: {},
  selector: "focus",
  customizeSelector: (selector: string) => selector,
} as const;
