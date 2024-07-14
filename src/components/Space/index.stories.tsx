import type { Meta, StoryObj } from "@storybook/react";
import { Button, Space } from "..";
import { html } from "lit/static-html.js";

export default {
  title: "布局/Space 间距",
  component: Space,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Space>;

type Story = StoryObj<typeof Space>;

// ! 代码中显示decorators
export const Default: Story = {
  decorators: [
    () => (
      <Space size={"large"}>
        <Button label="Button1" primary />
        <Button label="Button2" primary />
        <Button label="Button3" primary />
      </Space>
    ),
  ],
};

export const Default2: Story = {
  args: {
    size: "small",
    children: [
      <Button label="Button1" primary />,
      <Button label="Button2" primary />,
      <Button label="Button3" primary />,
    ],
  },
};

export const WithTextPlain: Story = {
  decorators: [
    () => (
      <Space>
        <p style={{ border: "solid 1px gray" }}>
          精通React精通React精通React精通React精通React精通React精通React
        </p>
        <p>文本2</p>
        <p>文本3</p>
        <p>文本5</p>
      </Space>
    ),
  ],
};
