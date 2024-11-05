import React from "react";
import { Flex, Radio, RadioGroup } from "fish-ui-sy";

const baseStyle: React.CSSProperties = {
  width: "25%",
  height: 54,
};

const Default = () => {
  const [value, setValue] = React.useState<string>("horizontal");

  return (
    <Flex gap="medium" vertical>
      <RadioGroup
        value={value}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any) => setValue(e.target.value)}
        layout="horizontal"
      >
        <Radio value="horizontal" label="horizontal" />
        <Radio value="vertical" label="vertical" />
      </RadioGroup>
      <Flex vertical={value === "vertical"}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            style={{
              ...baseStyle,
              backgroundColor: i % 2 ? "#1677ff" : "#1677ffbf",
            }}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Default;
