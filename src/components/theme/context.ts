import type { Theme } from "@ant-design/cssinjs";
import { createTheme } from "@ant-design/cssinjs";
import { AliasToken } from "./interface/alias";
import { MapToken } from "./interface/maps";
import { SeedToken } from "./internal";
import { OverrideToken } from "./interface";
import React from "react";
import defaultDerivative from "./default";
import defaultSeedToken from "./themes/seed";

export const defaultTheme = createTheme(defaultDerivative);

// ================================ Context =================================
// To ensure snapshot stable. We disable hashed in test env.
export const defaultConfig = {
  token: defaultSeedToken,
  hashed: true,
};

export interface DesignTokenProviderProps {
  token: Partial<AliasToken>;
  theme?: Theme<SeedToken, MapToken>;
  components?: {
    [key in keyof OverrideToken]?: OverrideToken[key] & {
      theme?: Theme<SeedToken, MapToken>;
    };
  };
  hashed?: string | boolean;
}

export const DesignTokenContext =
  React.createContext<DesignTokenProviderProps>(defaultConfig);