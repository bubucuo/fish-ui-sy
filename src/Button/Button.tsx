import classnames from 'classnames';
import React, { forwardRef, useContext } from 'react';
import { ConfigContext } from '../config-provider/context';
import type { ButtonProps } from './Button.type';

// const Button: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    type = 'default',
    shape = 'default',
    // size: customizeSize,
    // disabled: customDisabled,
    className,
    children,
    // classNames: customClassNames,
    // style: customStyle = {},
    // htmlType = 'button',
    ...rest
  } = props;

  const {
    getPrefixCls,

    // autoInsertSpaceInButton, direction,

    button,
  } = useContext(ConfigContext);

  const prefixCls = getPrefixCls('btn', customizePrefixCls);

  const classes = classnames(
    prefixCls,
    // hashId,
    {
      [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
      [`${prefixCls}-${type}`]: type,
      //   [`${prefixCls}-${sizeCls}`]: sizeCls,
      //   [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
      //   [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonType(type),
      //   [`${prefixCls}-loading`]: innerLoading,
      //   [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && autoInsertSpace && !innerLoading,
      //   [`${prefixCls}-block`]: block,
      //   [`${prefixCls}-dangerous`]: !!danger,
      //   [`${prefixCls}-rtl`]: direction === 'rtl',
    },
    // compactItemClassnames,
    className,
    // rootClassName,
    button?.className,
  );

  return (
    <button {...rest} type="button" className={classes}>
      {children}
    </button>
  );
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  InternalButton,
);

export default Button;
