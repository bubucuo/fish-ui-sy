/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Table, Column } from "fish-ui-sy";

import Default from "./TableDefault.stories";
import TableJSX from "./TableJSX.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./TableDefault.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import TableJSXSource from "./TableJSX.stories.tsx?raw";

const meta: Meta = {
  title: "组件/Table",
  component: Table,
  subcomponents: {
    Column: Column as any,
  },
  parameters: {
    backgrounds: {
      default: "static-bg",
      values: [
        { name: "static-bg", value: "white" }, // 固定背景色
      ],
    },
  },
};

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(TableJSX as any).parameters = {
  docs: {
    source: {
      code: TableJSXSource,
    },
  },
};

export { Default, TableJSX };
