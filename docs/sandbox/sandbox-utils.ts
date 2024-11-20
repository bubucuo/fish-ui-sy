import { getDependencies } from "./getDependencies";
import { ParametersExtension } from "./types";

import type { StoryContext } from "@storybook/types";

type ParametersConfig = NonNullable<ParametersExtension["exportToSandbox"]>;

export function addHiddenInput(
  form: HTMLFormElement,
  name: string,
  value: string
) {
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = name;
  input.value = value;
  form.appendChild(input);
}

// 注意index.stories.tsx和mdx文档代码展示区域的css选择器不同
export function prepareSandboxContainer(context: StoryContext) {
  const docsSelector = `#anchor--${context.id} .docs-story`;
  const docsSelectorOfMdx = `#story--组件-portal-tomountnodeprops--default`; // mdx文档的css选择器

  const rootElement =
    document.querySelector(docsSelector) ||
    document.querySelector(docsSelectorOfMdx);

  if (!rootElement) {
    throw new Error(
      `css selector: ${docsSelector || docsSelectorOfMdx}, doesn't exist `
    );
  }

  let showCodeButton: HTMLElement | null = rootElement.querySelector(
    ".docblock-code-toggle"
  );

  if (!showCodeButton) {
    // 检查mdx文档的css选择器
    // 这里的的css层级，我是通过审查元素找到的
    const docStory = rootElement.closest(".docs-story");
    if (docStory) {
      showCodeButton = docStory.querySelector(".docblock-code-toggle");
    }
  }

  const container = showCodeButton?.parentElement;

  if (!container) {
    throw new Error(`css selector: '.docblock-code-toggle', doesn't exist `);
  }

  const classList = (
    showCodeButton!.classList.value + " with-code-sandbox-button"
  ).split(" ");

  // remove button if it already existed
  const ourButtons = container.querySelectorAll(`.with-code-sandbox-button`);
  ourButtons.forEach((node) => node.remove());

  return {
    container, // open按钮的父节点
    cssClasses: classList, // open按钮的class
  };
}

const addonConfigDefaults = {
  requiredDependencies: {},
  optionalDependencies: {},
};
export type Data = Pick<Required<ParametersConfig>, "provider"> & {
  storyFile: string;
  dependencies: Record<string, string>;
  title: string;
  description: string;
};

export function prepareData(context: StoryContext): Data | null {
  if (!context.parameters.exportToSandbox) {
    throw new Error("exportToSandbox config parameter cannot be empty");
  }

  const addonConfig: Required<ParametersConfig> = {
    ...addonConfigDefaults,
    ...context.parameters.exportToSandbox,
  };

  const { provider } = addonConfig;

  const storyFile = context.parameters?.docs.source?.code;

  if (!storyFile) {
    // 没有源代码，不显示在线编辑按钮
    return null;
  }

  const { requiredDependencies, optionalDependencies } = addonConfig;
  // 获取全部的依赖
  const dependencies = getDependencies(
    storyFile,
    requiredDependencies,
    optionalDependencies
  );

  const title = "bubucuo";
  const description = `Story demo: ${context.title} - ${context.name}`;

  const demoData = {
    storyFile,
    provider,
    dependencies,
    title,
    description,
  };

  return demoData;
}
