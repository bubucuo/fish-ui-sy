import * as React from "react";
import { Checkbox } from "fish-ui-sy";
import type { CheckboxProps } from "fish-ui-sy";

const Checked = () => {
  const [checked, setChecked] = React.useState<CheckboxProps["checked"]>(true);

  return (
    <Checkbox
      checked={checked}
      onChange={(ev, data) => setChecked(data.checked)}
      label="Checked"
    />
  );
};

export default Checked;
