import React, { ChangeEvent } from "react";
import { Flex, Radio, RadioGroup, Button, FlexProps } from "fish-ui-sy";

const boxStyle: React.CSSProperties = {
  width: "100%",
  height: 120,
  borderRadius: 6,
  border: "1px solid #40a9ff",
};

const justifyOptions = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
];
const alignOptions = ["flex-start", "center", "flex-end"];

const Align = () => {
  const [justify, setJustify] = React.useState<FlexProps["justify"]>(
    justifyOptions[0]
  );
  const [alignItems, setAlignItems] = React.useState<FlexProps["align"]>(
    alignOptions[0]
  );

  justifyOptions.map((option) => console.log(option));
  return (
    <Flex gap="medium" align="start" vertical>
      <p>Select justify :</p>

      <RadioGroup
        value={justify}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any) => setJustify(e.target.value)}
        layout="horizontal"
      >
        {justifyOptions.map((option) => (
          <Radio key={option} value={option} label={option} />
        ))}
      </RadioGroup>

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

      <Flex style={boxStyle} justify={justify} align={alignItems}>
        <Button appearance="primary">Primary</Button>
        <Button appearance="primary">Primary</Button>
        <Button appearance="primary">Primary</Button>
        <Button appearance="primary">Primary</Button>
      </Flex>
    </Flex>
  );
};

export default Align;
