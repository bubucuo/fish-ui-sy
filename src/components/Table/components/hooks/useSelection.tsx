import React, { useEffect, useMemo } from "react";
import type {
  ColumnsType,
  GetRowKey,
  Key,
  TableRowSelection,
} from "../interface";
import { Checkbox, Radio } from "fish-ui-sy";

export const SELECTION_KEY = "fish-ui-selection-column-key";

export const useSelection = <RecordType,>(
  flattenColumns: ColumnsType<RecordType>,
  dataSource: readonly RecordType[],
  getRowKey: GetRowKey<RecordType>,
  rowSelection?: TableRowSelection<RecordType>
) => {
  const {
    type: rowSelectionType,
    selectedRowKeys = [],
    onChange,
    getCheckboxProps, // 用于定制 checkbox 的属性, 例如是否禁用。也可以把label和disabled用在Radio上
  } = rowSelection || {};

  const mergedColumns = [...flattenColumns];

  const [validDataSource] = useMemo(() => {
    const validDataSource = dataSource.filter((item) => {
      if (getCheckboxProps) {
        const checkboxProps = getCheckboxProps(item);
        if (checkboxProps.disabled) {
          return false;
        }
      }
      return true;
    });

    return [validDataSource];
  }, [dataSource, getCheckboxProps]);

  const [_selectedRowKeys, set_SelectedRowKeys] = React.useState(
    new Set(selectedRowKeys)
  );

  useEffect(() => {
    // 如果换为Radio
    // 1. 如果当前选中的行数为1，则选中当前 -- 不代码处理
    // 2. 如果当前选中的行数为0，则不选中当前 -- 不代码处理
    // 3. 如果当前选中的行数大于1，则选中第一个，不选中其他 -- 需要代码处理
    if (rowSelectionType === "radio" && _selectedRowKeys.size > 1) {
      set_SelectedRowKeys(new Set([getRowKey(validDataSource[0])]));
    }
  }, [rowSelectionType, getRowKey, validDataSource, _selectedRowKeys.size]);

  if (rowSelection) {
    if (rowSelectionType === "radio") {
      mergedColumns.unshift({
        key: SELECTION_KEY,
        title: null,
        render: (_, record) => {
          const key = getRowKey(record);
          const { label, disabled } =
            (getCheckboxProps && getCheckboxProps(record)) || {};
          return (
            <Radio
              checked={_selectedRowKeys.has(key) ? true : false}
              disabled={disabled}
              label={label}
              onChange={(e) => {
                let new_selectedRowKeys: Key[] = [];
                if (e.target.checked) {
                  new_selectedRowKeys = [key];
                }
                set_SelectedRowKeys(new Set(new_selectedRowKeys));
                onChange &&
                  onChange(new_selectedRowKeys, [record], { type: "single" });
              }}
            />
          );
        },
      });
    } else {
      mergedColumns.unshift({
        key: SELECTION_KEY,
        title: (
          <Checkbox
            {...((getCheckboxProps && getCheckboxProps({} as RecordType)) ||
              {})}
            checked={
              _selectedRowKeys.size === validDataSource.length
                ? true
                : _selectedRowKeys.size > 0
                  ? "mixed"
                  : false
            }
            onChange={(e) => {
              let new_selectedRowKeys: Key[] = [];
              let selectedRows: RecordType[] = [];
              if (e.target.checked) {
                new_selectedRowKeys = validDataSource.map((item) =>
                  getRowKey(item)
                );
                selectedRows = validDataSource;
              }
              set_SelectedRowKeys(new Set(new_selectedRowKeys));
              onChange &&
                onChange(new_selectedRowKeys, selectedRows, { type: "all" });
            }}
          />
        ),
        render: (_, record) => {
          const key = getRowKey(record);
          return (
            <Checkbox
              {...((getCheckboxProps && getCheckboxProps(record)) || {})}
              checked={_selectedRowKeys.has(key)}
              onChange={(e) => {
                if (e.target.checked) {
                  _selectedRowKeys.add(key);
                } else {
                  _selectedRowKeys.delete(key);
                }
                set_SelectedRowKeys(new Set(_selectedRowKeys));
                const selectedRows = validDataSource.filter((item) =>
                  _selectedRowKeys.has(getRowKey(item))
                );
                onChange &&
                  onChange(Array.from(_selectedRowKeys), selectedRows, {
                    type: "single",
                  });
              }}
            />
          );
        },
      });
    }
  }
  return [mergedColumns];
};
