import * as React from 'react';

export interface ItemProps {
  className: string;
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ className, children }) => {
  if (children === null || children === undefined) {
    return null;
  }

  return <div className={className}>{children}</div>;
};

export default Item;
