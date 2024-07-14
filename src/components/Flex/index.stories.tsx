import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "..";

export default {
  title: "布局/Flex 弹性布局",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Flex>;

type Story = StoryObj<typeof Flex>;

// ! 代码中显示decorators
export const Default: Story = {
  decorators: [
    () => (
      <article>
        <p>精通React精通React精通React精通React精通React精通React精通React</p>
        <Flex />
        <p>文本2</p>
        <Flex dashed={true} />
        <p>文本3</p>
      </article>
    ),
  ],
};

export const WithText: Story = {
  decorators: [
    () => (
      <article>
        <p>精通React精通React精通React精通React精通React精通React精通React</p>
        <Flex>Text</Flex>
        <p>文本2</p>
        <Flex orientation="left">Left Text</Flex>
        <p>文本3</p>
        <Flex orientation="right">Right Text</Flex>
        <p>文本4</p>
        <Flex orientation="left" orientationMargin="0">
          Left Text with 0 orientationMargin
        </Flex>
        <p>文本5</p>
        <Flex orientation="right" orientationMargin={50}>
          Right Text with 50px orientationMargin
        </Flex>
        <p>文本6</p>
      </article>
    ),
  ],
};

export const WithTextPlain: Story = {
  decorators: [
    () => (
      <article>
        <p>精通React精通React精通React精通React精通React精通React精通React</p>
        <Flex plain>Text</Flex>
        <p>文本2</p>
        <Flex orientation="left" plain>
          Left Text
        </Flex>
        <p>文本3</p>
        <Flex orientation="right">Right Text</Flex>
        <p>文本4</p>
        <Flex orientation="right" plain>
          Right Text
        </Flex>
        <p>文本5</p>
      </article>
    ),
  ],
};
