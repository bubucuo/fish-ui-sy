import React from "react";
import { usePagerStyles } from "./usePagerStyles.styles";
import type { PagerProps } from "./Pager.types";
import { noop } from "../../../../utilities";

export const Pager: React.FC<PagerProps> = (props) => {
  const { page, onClick = noop } = props;

  const styles = usePagerStyles(props);

  const handleClick = () => {
    onClick(page);
  };

  return (
    <li
      title={String(page)}
      className={styles.root}
      onClick={handleClick}
      tabIndex={0}
    >
      {page}
    </li>
  );
};

Pager.displayName = "Pager";
