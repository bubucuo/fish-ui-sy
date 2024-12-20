/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Pagination } from "fish-ui-sy";

import Default from "./PaginationDefault.stories";
import PaginationTable from "./PaginationTable.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./PaginationDefault.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import PaginationTableSource from "./PaginationTable.stories.tsx?raw";

const meta: Meta = {
  title: "组件/Pagination",
  component: Pagination,
};

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(PaginationTable as any).parameters = {
  docs: {
    source: {
      code: PaginationTableSource,
    },
  },
};

export { Default, PaginationTable };
