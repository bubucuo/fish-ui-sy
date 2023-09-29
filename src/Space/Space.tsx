import classnames from 'classnames';
import type { SizeType } from 'fish-ui/config-provider/SizeContext';
import { ConfigContext } from 'fish-ui/config-provider/context';
import toArray from 'rc-util/lib/Children/toArray';
import type { ReactNode } from 'react';
import React from 'react';
import Item from './Item';
import type { SpaceContextType } from './context';
import { SpaceContextProvider } from './context';

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

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    // size = 'small',
    // align,
    className,
    rootClassName,
    children,
    direction = 'horizontal',
    prefixCls: customizePrefixCls,
    split,
    style,
    // wrap = false,
    classNames: customClassNames,
    styles,
    ...otherProps
  } = props;

  const {
    getPrefixCls,
    space,
    direction: directionConfig,
  } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('space', customizePrefixCls);

  // const [wrapSSR, hashId] = useStyle(prefixCls);

  const cls = classnames(
    prefixCls,
    space?.className,
    // hashId,
    `${prefixCls}-${direction}`,
    {
      [`${prefixCls}-rtl`]: directionConfig === 'rtl',
      // [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
      // [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
      // [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize,
    },
    className,
    rootClassName,
  );

  const childNodes = toArray(children, { keepEmpty: true });

  const itemClassName = classnames(
    `${prefixCls}-item`,
    customClassNames?.item ?? space?.classNames?.item,
  );

  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map((child: ReactNode, i: number) => {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }

    const key = (child && child.key) || `${itemClassName}-${i}`;

    return (
      <Item
        className={itemClassName}
        key={key}
        index={i}
        split={split}
        style={styles?.item ?? space?.styles?.item}
      >
        {child}
      </Item>
    );
  });

  const spaceContext = React.useMemo<SpaceContextType>(
    () => ({ latestIndex }),
    [latestIndex],
  );

  return (
    <div ref={ref} className={cls} style={{ ...style }} {...otherProps}>
      <SpaceContextProvider value={spaceContext}>{nodes}</SpaceContextProvider>
    </div>
  );
});

export default Space;
