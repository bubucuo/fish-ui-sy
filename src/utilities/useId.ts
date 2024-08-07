import React from "react";

export const useId = (prefix: string = "fish-ui-") => {
  const id = React.useId();
  return `${prefix}-${id}`;
};
