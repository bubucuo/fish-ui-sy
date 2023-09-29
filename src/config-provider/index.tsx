import React from 'react';
import type { CSPConfig, ConfigConsumerProps } from './context';
import { ConfigContext } from './context';

export type ConfigProviderProps = any;

export { ConfigContext, type CSPConfig };

export const configConsumerProps = [
  'getTargetContainer',
  'getPopupContainer',
  'rootPrefixCls',
  'getPrefixCls',
  'renderEmpty',
  'csp',
  'autoInsertSpaceInButton',
  'locale',
  'pageHeader',
];

const ConfigProvider: React.FC<ConfigProviderProps> & {
  ConfigContext: typeof ConfigContext;
} = (props) => {
  const context = React.useContext<ConfigConsumerProps>(ConfigContext);
  // const config = {
  //   ...context,
  // };

  // return <ProviderChildren parentContext={context}/>
  return (
    <ConfigContext.Provider value={context}>
      {props.children}
    </ConfigContext.Provider>
  );
};

ConfigProvider.ConfigContext = ConfigContext;
// ConfigProvider.SizeContext = SizeContext;

export default ConfigProvider;
