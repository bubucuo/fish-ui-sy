import React from "react";
import { Radio, RadioGroup, Space } from "fish-ui-sy";

const baseStyle: React.CSSProperties = {
  width: 54,
  height: 54,
};

const Direction = () => {
  const [value, setValue] = React.useState<"horizontal" | "vertical">(
    "horizontal"
  );

  return (
    <Space direction="vertical">
      <RadioGroup
        value={value}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any) => setValue(e.target.value)}
        layout="horizontal"
      >
        <Radio value="horizontal" label="horizontal" />
        <Radio value="vertical" label="vertical" />
      </RadioGroup>
      <Space direction={value}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            style={{
              ...baseStyle,
              backgroundColor: i % 2 ? "#1677ff" : "#1677ffbf",
            }}
          />
        ))}
      </Space>
    </Space>
  );
};

export default Direction;
