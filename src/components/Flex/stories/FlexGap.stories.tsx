import React from "react";
import { Button, Flex, RadioGroup, Radio, SizeType } from "fish-ui-sy";

const Gap: React.FC = () => {
  const [gapSize, setGapSize] = React.useState<SizeType | "customize">("small");
  const [customGapSize, setCustomGapSize] = React.useState<number>(0);

  return (
    <Flex gap="medium" vertical>
      <RadioGroup
        value={gapSize}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any) => setGapSize(e.target.value)}
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

      <Flex gap={gapSize !== "customize" ? gapSize : customGapSize}>
        <Button appearance="primary">Primary</Button>
        <Button>Default</Button>
        <Button appearance="outline">Dashed</Button>
        <Button appearance="transparent">Link</Button>
      </Flex>
    </Flex>
  );
};

export default Gap;
