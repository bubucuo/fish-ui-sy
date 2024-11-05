import React from "react";
import { Button, Space, RadioGroup, Radio, SizeType } from "fish-ui-sy";

const Size: React.FC = () => {
  const [gapSize, setGapSize] = React.useState<SizeType | "customize">("small");
  const [customGapSize, setCustomGapSize] = React.useState<number>(0);

  return (
    <Space size="medium" direction="vertical">
      <RadioGroup
        value={gapSize}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any) => setGapSize(e.target.value)}
        layout="horizontal"
      >
        {["small", "medium", "large", "customize"].map((size) => (
          <Radio key={size} value={size} label={size} />
        ))}
      </RadioGroup>

      {gapSize === "customize" && (
        <input
          type="number"
          value={customGapSize}
          onChange={(e) => setCustomGapSize(parseInt(e.target.value))}
        />
      )}

      <Space size={gapSize !== "customize" ? gapSize : customGapSize}>
        <Button appearance="primary">Primary</Button>
        <Button>Default</Button>
        <Button appearance="outline">Dashed</Button>
        <Button appearance="transparent">Link</Button>
      </Space>
    </Space>
  );
};

export default Size;
