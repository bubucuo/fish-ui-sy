import classnames from 'classnames';
import toArray from 'rc-util/lib/Children/toArray';
import type { ReactNode } from 'react';
import React from 'react';
import { ConfigContext } from '../config-provider';
import type { SizeType } from '../config-provider/SizeContext';
import Item from './Item';
import { genSpaceStyle } from './style';

// import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type SpaceSize = SizeType | number;

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  size?: SpaceSize | [SpaceSize, SpaceSize];
  direction?: 'horizontal' | 'vertical';
  // No `stretch` since many components do not support that.
  align?: 'start' | 'end' | 'center' | 'baseline';
  split?: React.ReactNode;
  wrap?: boolean;
  classNames?: { item: string };
  styles?: { item: React.CSSProperties };
}

const Space = (props) => {
  const {
    // size = 'small',
    className,
    children,
    direction = 'horizontal',
    ...otherProps
  } = props;

  const { getPrefixCls } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('space');

  const cls = classnames(
    prefixCls,
    // hashId,
    `${prefixCls}-${direction}`,
    className,
  );

  const childNodes = toArray(children, { keepEmpty: true });

  const itemClassName = classnames(`${prefixCls}-item`);

  // Calculate latest one
  const nodes = childNodes.map<ReactNode>((child, i) => {
    const key = (child && child.key) || `${itemClassName}-${i}`;

    return (
      <Item className={itemClassName} key={key}>
        {child}
      </Item>
    );
  });

  const _style = genSpaceStyle(prefixCls); // [prefixCls];

  const SpaceNode = styled.div(_style);

  return (
    <SpaceNode className={cls} {...otherProps}>
      {nodes}
    </SpaceNode>
  );
};

export default Space;
