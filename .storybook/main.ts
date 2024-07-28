import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import remarkGfm from "remark-gfm";

const tsConfigPath = path.resolve(__dirname, "../tsconfig.base.json");

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/**/*.mdx",
    "../src/**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))",
    "../src/**/**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/preview-api",
    "@storybook/manager-api",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    // docs/addon
    // loadWorkspaceAddon("@fishui/react-storybook-addon", { tsConfigPath }),
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    //👇 See the table below for the list of supported options
    defaultName: "Documentation",
  },
};
export default config;
