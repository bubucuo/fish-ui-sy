import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../..";
import { makeStyles } from "@griffel/react";
import { tokens } from "@fluentui/react-theme";

export default {
  title: "布局/Divider 分割线",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
  },
  example: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "96px",
    backgroundColor: tokens.colorNeutralBackground1,
  },
});

export const Default = () => {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <div className={styles.example}>
        <Divider />
      </div>
      <div className={styles.example}>
        <Divider>Text</Divider>
      </div>
    </section>
  );
};

// ! vertical
const useStylesOfVertical = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
  },
  example: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "96px",
    backgroundColor: tokens.colorNeutralBackground1,
  },
});

export const Vertical = () => {
  const styles = useStylesOfVertical();
  return (
    <div className={styles.root}>
      <div className={styles.example}>
        <Divider vertical style={{ height: "100%" }} />
      </div>
      <div className={styles.example}>
        <Divider vertical style={{ height: "100%" }}>
          Text
        </Divider>
      </div>
    </div>
  );
};

Vertical.parameters = {
  docs: {
    description: {
      story: "A divider can vertically separate two pieces of content.",
    },
  },
};

// ! 代码中显示decorators
// export const Default: Story = {
//   decorators: [
//     () => (
//       <article>
//         <p>精通React精通React精通React精通React精通React精通React精通React</p>
//         <Divider />
//         <p>文本2</p>
//         <Divider dashed={true} />
//         <p>文本3</p>
//       </article>
//     ),
//   ],
// };

export const WithText: Story = {
  decorators: [
    () => (
      <article>
        <p>精通React精通React精通React精通React精通React精通React精通React</p>
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

export const WithTextPlain: Story = {
  decorators: [
    () => (
      <article>
        <p>精通React精通React精通React精通React精通React精通React精通React</p>
        <Divider plain>Text</Divider>
        <p>文本2</p>
        <Divider orientation="left" plain>
          Left Text
        </Divider>
        <p>文本3</p>
        <Divider orientation="right">Right Text</Divider>
        <p>文本4</p>
        <Divider orientation="right" plain>
          Right Text
        </Divider>
        <p>文本5</p>
      </article>
    ),
  ],
};
