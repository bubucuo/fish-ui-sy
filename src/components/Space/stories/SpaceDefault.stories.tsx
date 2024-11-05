import React from "react";
import { ArrowUpload16Regular } from "fish-ui-sy-react-icons";
import { Button, Space, Text, Title1 } from "fish-ui-sy";

const Default: React.FC = () => (
  <Space align="center">
    Space
    <Title1>Title1</Title1>
    <Button appearance="primary">Button</Button>
    <Button>Button2</Button>
    <Button icon={<ArrowUpload16Regular />}>Upload</Button>
    <Text>Text</Text>
  </Space>
);

export default Default;
