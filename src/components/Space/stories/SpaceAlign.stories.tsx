import React from "react";
import { Space, Radio, RadioGroup, Button, SpaceProps } from "fish-ui-sy";

const boxStyle: React.CSSProperties = {
  height: 120,
  borderRadius: 6,
  border: "1px solid #40a9ff",
};

const alignOptions = ["start", "center", "end", "baseline"];

const Align = () => {
  const [alignItems, setAlignItems] = React.useState<SpaceProps["align"]>(
    alignOptions[0] as SpaceProps["align"]
  );

  return (
    <Space size="medium" align="start" direction="vertical">
      <p>Select align :</p>
      <RadioGroup
        value={alignItems}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any) => setAlignItems(e.target.value)}
        layout="horizontal"
      >
        {alignOptions.map((option) => (
          <Radio key={option} value={option} label={option} />
        ))}
      </RadioGroup>

      <Space style={boxStyle} align={alignItems}>
        center
        <Button appearance="primary">Primary</Button>
        <div
          className="mock-block"
          style={{
            width: 200,
            height: 100,
            backgroundColor: "#40a9ff",
          }}
        >
          Block
        </div>
      </Space>
    </Space>
  );
};

export default Align;
