import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "..";

export default {
  title: "组件/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  decorators: [
    () => (
      <article>
        <p>
          文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文文本文本文本文本文本文本文本文本文本文本
        </p>
        <Divider />
        <p>文本2</p>
        <Divider dashed={true} />
        <p>文本3</p>
      </article>
    ),
  ],
};

export const WithText: Story = {
  decorators: [
    () => (
      <article>
        <p>
          文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文文本文本文本文本文本文本文本文本文本文本
        </p>
        <Divider>Text</Divider>
        <p>文本2</p>
        <Divider orientation="left">Left Text</Divider>
        <p>文本3</p>
        <Divider orientation="right">Right Text</Divider>
        <p>文本4</p>
        <Divider orientation="left" orientationMargin="0">
          Left Text with 0 orientationMargin
        </Divider>
        <p>文本5</p>
        <Divider orientation="right" orientationMargin={50}>
          Right Text with 50px orientationMargin
        </Divider>
        <p>文本6</p>
      </article>
    ),
  ],
};
