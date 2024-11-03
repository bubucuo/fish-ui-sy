import React from "react";
import { Flex, Title1, Watermark } from "fish-ui-sy";

const Default: React.FC = () => (
  <Watermark content="FishUI bubucuo">
    <Flex style={{ height: "500px" }} justify="center" align="center">
      <Title1> 公司账户余额：¥ 1,000,000.00 </Title1>
    </Flex>
  </Watermark>
);

export default Default;
