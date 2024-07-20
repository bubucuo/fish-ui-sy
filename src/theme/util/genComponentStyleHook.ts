import type { CSSInterpolation } from "@ant-design/cssinjs";
import {
  GlobalToken,
  OverrideToken,
  UseComponentStyleResult,
} from "../interface";
import { useStyleRegister } from "@ant-design/cssinjs";

import { ComponentTokenMap } from "../interface/components";
import statisticToken, { merge } from "../../_util/statistic";
import useToken from "../useToken";
import { useContext } from "react";
import { ConfigContext } from "../../config-provider";
import { genCommonStyle, genLinkStyle } from "../../style";

type ComponentToken<ComponentName extends OverrideComponent> = Exclude<
  OverrideToken[ComponentName],
  undefined
>;

export type OverrideTokenWithoutDerivative = ComponentTokenMap;

export type OverrideComponent = keyof OverrideTokenWithoutDerivative;

export type GlobalTokenWithComponent<ComponentName extends OverrideComponent> =
  GlobalToken & ComponentTokenMap[ComponentName];

export type TokenWithCommonCls<T> = T & {
  /** Wrap component class with `.` prefix */
  componentCls: string;
  /** Origin prefix which do not have `.` prefix */
  prefixCls: string;
  /** Wrap icon class with `.` prefix */
  iconCls: string;
  /** Wrap ant prefixCls class with `.` prefix */
  antCls: string;
};

export type FullToken<ComponentName extends OverrideComponent> =
  TokenWithCommonCls<GlobalTokenWithComponent<ComponentName>>;

export interface StyleInfo<ComponentName extends OverrideComponent> {
  hashId: string;
  prefixCls: string;
  rootPrefixCls: string;
  iconPrefixCls: string;
  overrideComponentToken: ComponentTokenMap[ComponentName];
}

export type GenStyleFn<ComponentName extends OverrideComponent> = (
  token: FullToken<ComponentName>,
  info: StyleInfo<ComponentName>
) => CSSInterpolation;

export default function genComponentStyleHook<
  ComponentName extends OverrideComponent,
>(
  componentName: ComponentName | [ComponentName, string],
  styleFn: GenStyleFn<ComponentName>,
  getDefaultToken?:
    | null
    | OverrideTokenWithoutDerivative[ComponentName]
    | ((token: GlobalToken) => OverrideTokenWithoutDerivative[ComponentName]),

  options: {
    resetStyle?: boolean;
    /**
     * Only use component style in client side. Ignore in SSR.
     */
    clientOnly?: boolean;
    /**
     * Set order of component style. Default is -999.
     */
    order?: number;
  } = {}
) {
  const cells = (
    Array.isArray(componentName)
      ? componentName
      : [componentName, componentName]
  ) as [ComponentName, string];

  const [component] = cells;
  const concatComponent = cells.join("-");

  return (prefixCls: string): UseComponentStyleResult => {
    const [theme, token, hashId] = useToken();
    const { getPrefixCls, iconPrefixCls, csp } = useContext(ConfigContext);
    const rootPrefixCls = getPrefixCls();

    // Shared config
    const sharedConfig: Omit<Parameters<typeof useStyleRegister>[0], "path"> = {
      theme,
      token,
      hashId,
      nonce: () => csp?.nonce!,
      // antd is always at top of styles
      clientOnly: options.clientOnly,

      // antd is always at top of styles
      order: options.order || -999,
    };

    // Generate style for all a tags in antd component.
    useStyleRegister(
      { ...sharedConfig, clientOnly: false, path: ["Shared", rootPrefixCls] },
      () => [
        {
          // Link
          "&": genLinkStyle(token),
        },
      ]
    );

    // Generate style for icons
    // useResetIconStyle(iconPrefixCls);

    return [
      useStyleRegister(
        { ...sharedConfig, path: [concatComponent, prefixCls, iconPrefixCls] },
        () => {
          const { token: proxyToken, flush } = statisticToken(token);

          const customComponentToken = {
            ...(token[component] as ComponentToken<ComponentName>),
          };

          const defaultComponentToken =
            typeof getDefaultToken === "function"
              ? getDefaultToken(merge(proxyToken, customComponentToken ?? {}))
              : getDefaultToken;

          const mergedComponentToken = {
            ...defaultComponentToken,
            ...customComponentToken,
          };

          const componentCls = `.${prefixCls}`;
          const mergedToken = merge<
            TokenWithCommonCls<GlobalTokenWithComponent<OverrideComponent>>
          >(
            proxyToken,
            {
              componentCls,
              prefixCls,
              iconCls: `.${iconPrefixCls}`,
              antCls: `.${rootPrefixCls}`,
            },
            mergedComponentToken
          );

          const styleInterpolation = styleFn(
            mergedToken as unknown as FullToken<ComponentName>,
            {
              hashId,
              prefixCls,
              rootPrefixCls,
              iconPrefixCls,
              overrideComponentToken: customComponentToken as any,
            }
          );
          flush(component, mergedComponentToken);
          return [
            options.resetStyle === false
              ? null
              : genCommonStyle(token, prefixCls),
            styleInterpolation,
          ];
        }
      ),
      hashId,
    ];
  };
}
