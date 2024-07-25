import React from "react";
import { Meta } from "@storybook/react";
import { Text } from "@/index";
import { makeStyles } from "@griffel/react";

import { Font } from "./TextFont.stories";

export default {
  title: "组件/Text",
  component: Text,
  // subcomponents: {
  //   Presets: Display,
  // },
  parameters: {
    docs: {
      description: "omg",
    },
  },
} as Meta;

// export const Default = () => (
//   <Text>This is an example of the Text component's usage.</Text>
// );

// export { Default };

export const Default = () => (
  <Text>This is an example of the Text component's usage.</Text>
);

export { Font };
// const useStyles = makeStyles({
//   container: {
//     gap: "16px",
//     display: "flex",
//     flexDirection: "column",
//   },
// });

// export const Font = () => {
//   const styles = useStyles();

//   return (
//     <div className={styles.container}>
//       <Text font="base">This is the default font</Text>
//       <Text font="numeric">This is numeric font</Text>
//       <Text font="monospace">This is monospace font</Text>
//     </div>
//   );
// };
