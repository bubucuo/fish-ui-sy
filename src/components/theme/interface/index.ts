import type { CSSInterpolation, DerivativeFunc } from "@ant-design/cssinjs";

import { AliasToken } from "./alias";
import { ComponentTokenMap } from "./components";

export { PresetColors } from "./presetColors";
export type {
  ColorPalettes,
  LegacyColorPalettes,
  PresetColorKey,
  PresetColorType,
} from "./presetColors";
export type { SeedToken } from "./seeds";

export type OverrideToken = {
  [key in keyof ComponentTokenMap]: Partial<ComponentTokenMap[key]> &
    Partial<AliasToken>;
};

export type GlobalToken = AliasToken & ComponentTokenMap;

export type UseComponentStyleResult = [
  (node: React.ReactNode) => React.ReactElement,
  string,
];

export type GenerateStyle<
  ComponentToken extends object = AliasToken,
  ReturnType = CSSInterpolation,
> = (token: ComponentToken) => ReturnType;
