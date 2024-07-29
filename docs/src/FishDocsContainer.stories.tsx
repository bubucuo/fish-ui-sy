import * as React from "react";
import { DocsContainer } from "@storybook/addon-docs";
import { webLightTheme, webDarkTheme, FishProvider } from "fish-ui-sy";
import { useGlobals } from "@storybook/manager-api";
import { Consumer, Provider } from "@storybook/api";

// interface FishDocsContainerProps {
//   context: FishStoryContext & DocsContextProps;
//   children: React.ReactNode;
// }

/**
 * A container that wraps storybook's native docs container to add extra components to the docs experience
 */
export const FishDocsContainer = (args) => {
  const { children, context } = args;

  return (
    <>
      <FishProvider
        style={{ backgroundColor: "transparent" }}
        theme={webLightTheme}
      >
        <DocsContainer context={context}>{children}</DocsContainer>
      </FishProvider>
    </>
  );
};
