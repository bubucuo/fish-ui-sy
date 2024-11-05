import React from "react";
import { Card, Title1, Flex, CompoundButton } from "fish-ui-sy";

const imgStyle: React.CSSProperties = {
  display: "block",
  width: 273,
};

const FlexGroup: React.FC = () => (
  <Card>
    <Flex justify="space-between">
      <img
        alt="avatar"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={imgStyle}
      />
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{ padding: 32 }}
      >
        <Title1>
          “antd is an enterprise-class UI design language and React UI library.”
        </Title1>
        <CompoundButton appearance="primary">
          Get Started
          <a href="https://ant.design" target="_blank"></a>
        </CompoundButton>
      </Flex>
    </Flex>
  </Card>
);

export default FlexGroup;
