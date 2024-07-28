import { Meta } from "@storybook/react";
import { Divider } from "@/index";
export { Default } from "./DividerDefault.example";
export { Vertical } from "./DividerVertical.example";
export { Appearance } from "./DividerAppearance.example";
export { Inset } from "./DividerInset.example";
export { AlignContent } from "./DividerAlignContent.example";
export { CustomStyles } from "./DividerCustomStyles.example";

export default {
  title: "组件/Divider",
  component: Divider,
} as Meta;

// export const Default = {
//   args: {
//     children: "Text",
//   },
// };

// export const Vertical = {
//   args: {
//     vertical: true,
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: "垂直分隔线。",
//       },
//     },
//   },
// };

// export const WithContent = () => {
//   <Divider alignContent="center">
//     <div>omg</div>
//     <img src="https://react.fluentui.dev/static/media/fluentui-logo.2c059e02.svg" />
//     <div>omg</div>
//   </Divider>;
// };

// WithContent.parameters = {
//   docs: {
//     description: {
//       story: "带内容的分隔线，居中位置可自行调节，默认居中。",
//     },
//   },
// };

// const useStyles = makeStyles({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     rowGap: "5px",
//   },
//   example: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyItems: "center",
//     minHeight: "96px",
//     backgroundColor: tokens.colorNeutralBackground1,
//   },
//   customHeightExample: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     minHeight: "192px",
//   },
//   customWidth: {
//     width: "500px",
//   },
//   customHeight: {
//     maxHeight: "50px",
//   },
//   customFont: {
//     fontSize: "14px",
//     fontWeight: "bold",
//     color: "pink",
//   },
//   customLineColor: {
//     "::before": {
//       ...shorthands.borderColor("red"),
//     },
//     "::after": {
//       ...shorthands.borderColor("red"),
//     },
//   },
//   customLineStyle: {
//     ...shorthands.borderWidth("2px"),
//     "::before": {
//       borderTopStyle: "dashed",
//       borderTopWidth: "2px",
//     },
//     "::after": {
//       borderTopStyle: "dashed",
//       borderTopWidth: "2px",
//     },
//   },
// });

// export const CustomStyles = () => {
//   const styles = useStyles();
//   return (
//     <div className={styles.root}>
//       <div className={styles.example}>
//         <Divider className={styles.customWidth}>Custom width (500px)</Divider>
//       </div>
//       <div className={styles.customHeightExample}>
//         <Divider vertical className={styles.customHeight}>
//           Custom height (50px)
//         </Divider>
//       </div>
//       <div className={styles.example}>
//         <Divider className={styles.customFont}>Custom font (14px bold)</Divider>
//       </div>
//       <div className={styles.example}>
//         <Divider className={styles.customLineColor}>
//           Custom line color (<code>tokens.colorPaletteRedBorder2</code>)
//         </Divider>
//       </div>
//       <div className={styles.example}>
//         <Divider className={styles.customLineStyle}>
//           Custom line style (2px dashed)
//         </Divider>
//       </div>
//     </div>
//   );
// };

// CustomStyles.parameters = {
//   docs: {
//     description: {
//       story: "分隔线可以自定义样式。",
//     },
//   },
// };
