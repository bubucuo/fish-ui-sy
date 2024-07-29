import * as React from "react";
import type { ArgTypes } from "@storybook/react";
import type { InputProps } from "fish-ui-sy";
import { Input } from "fish-ui-sy";

import { makeStyles } from "@griffel/react";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field
    display: "flex",
    flexDirection: "column",
    // Use 2px gap below the label (per the design system)
    gap: "2px",
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
  },
});

export const Default = (props: InputProps) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Input {...props} />
    </div>
  );
};

const argTypes: ArgTypes = {
  // Add these native props to the props table and controls pane
  placeholder: {
    description:
      "Placeholder text for the input. If using this instead of a label (which is " +
      "not recommended), be sure to provide an `aria-label` for screen reader users.",
    type: { name: "string", required: false }, // for inferring control type
    table: { type: { summary: "string" } }, // for showing type in prop table
  },
  disabled: {
    description: "Whether the input is disabled",
    type: { name: "boolean", required: false },
    table: { type: { summary: "boolean" } },
  },
  // Hide these from the props table and controls pane
  children: { table: { disable: true } },
  as: { table: { disable: true } },
};
Default.argTypes = argTypes;
