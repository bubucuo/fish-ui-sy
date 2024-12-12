import { toArray } from "../../../utilities";

const INTERNAL_KEY_PREFIX = "FISH_UI_TABLE_KEY";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getColumnsKey(columns: any[]) {
  const columnKeys: React.Key[] = [];
  const keys: Record<PropertyKey, boolean> = {};

  columns.forEach((column) => {
    const { key, dataIndex } = column || {};

    let mergedKey = key || toArray(dataIndex).join("-") || INTERNAL_KEY_PREFIX;
    while (keys[mergedKey as string]) {
      mergedKey = `${mergedKey}_next`;
    }
    keys[mergedKey as string] = true;

    columnKeys.push(mergedKey);
  });

  return columnKeys;
}
