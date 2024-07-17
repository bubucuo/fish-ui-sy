// import type { Preview } from "@storybook/react";

import { THEME_ID } from "../docs/constants";

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;

// import { withFluentProvider } from '../decorators/withFluentProvider';
// import { withReactStrictMode } from '../decorators/withReactStrictMode';
// import { withAriaLive } from '../decorators/withAriaLive';
// import { THEME_ID } from '../constants';
import { withFluentProvider } from "../docs/decorators/withFluentProvider";
import { withAriaLive } from "../docs/decorators/withAriaLive";
import { withReactStrictMode } from "../docs/decorators/withReactStrictMode";

export const decorators = [
  withFluentProvider,
  withAriaLive,
  withReactStrictMode,
];
export const globals = { [THEME_ID]: undefined }; // allow theme to be set by URL query param
