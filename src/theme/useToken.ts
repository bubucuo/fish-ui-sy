import type { Theme } from "@ant-design/cssinjs";
import { useCacheToken } from "@ant-design/cssinjs";
import {
  DesignTokenContext,
  DesignTokenProviderProps,
  defaultTheme,
} from "./context";
import { AliasToken } from "./interface/alias";
import { SeedToken } from "./internal";
import formatToken from "./util/alias";
import { GlobalToken } from "./interface";
import { MapToken } from "./interface/maps";
import React from "react";
import defaultSeedToken from "./themes/seed";
import version from "../version";

export const getComputedToken = (
  originToken: SeedToken,
  overrideToken: DesignTokenProviderProps["components"] & {
    override?: Partial<AliasToken>;
  },
  theme: Theme<any, any>
) => {
  const derivativeToken = theme.getDerivativeToken(originToken);

  const { override, ...components } = overrideToken;

  // Merge with override
  let mergedDerivativeToken = {
    ...derivativeToken,
    override,
  };

  // Format if needed
  mergedDerivativeToken = formatToken(mergedDerivativeToken);

  if (components) {
    Object.entries(components).forEach(([key, value]) => {
      const { theme: componentTheme, ...componentTokens } = value;
      let mergedComponentToken = componentTokens;
      if (componentTheme) {
        mergedComponentToken = getComputedToken(
          {
            ...mergedDerivativeToken,
            ...componentTokens,
          },
          {
            override: componentTokens,
          },
          componentTheme
        );
      }
      mergedDerivativeToken[key] = mergedComponentToken;
    });
  }

  return mergedDerivativeToken;
};

// ================================== Hook ==================================
export default function useToken(): [
  theme: Theme<SeedToken, MapToken>,
  token: GlobalToken,
  hashId: string,
] {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    components,
  } = React.useContext(DesignTokenContext);

  const salt = `${version}-${hashed || ""}`;

  const mergedTheme = theme || defaultTheme;

  const [token, hashId] = useCacheToken<GlobalToken, SeedToken>(
    mergedTheme,
    [defaultSeedToken, rootDesignToken],
    {
      salt,
      override: { override: rootDesignToken, ...components },
      getComputedToken,
      // formatToken will not be consumed after 1.15.0 with getComputedToken.
      // But token will break if @ant-design/cssinjs is under 1.15.0 without it
      formatToken,
    }
  );

  return [mergedTheme, token, hashed ? hashId : ""];
}
