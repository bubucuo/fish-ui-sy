import React from 'react';
import type {
  AliasToken,
  MappingAlgorithm,
  OverrideToken,
} from '../theme/interface';

export interface Theme {
  primaryColor?: string;
  infoColor?: string;
  successColor?: string;
  processingColor?: string;
  errorColor?: string;
  warningColor?: string;
}

export interface CSPConfig {
  nonce?: string;
}

type ComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};

export interface ThemeConfig {
  token?: Partial<AliasToken>;
  components?: ComponentsConfig;
  algorithm?: MappingAlgorithm | MappingAlgorithm[];
  hashed?: boolean;
  inherit?: boolean;
}

export type ConfigConsumerProps = any;

export interface ComponentStyleConfig {
  className?: string;
  style?: React.CSSProperties;
}

const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string,
) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `fish-${suffixCls}` : 'fish';
};

export const defaultIconPrefixCls = 'fishIcon';

// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
export const ConfigContext = React.createContext<ConfigConsumerProps>({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls,
});

export const { Consumer: ConfigConsumer } = ConfigContext;
