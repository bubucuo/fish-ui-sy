import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "组件/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Default size card",
    extra: <a href="#">More</a>,
    children: (
      <>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </>
    ),
  },
};
