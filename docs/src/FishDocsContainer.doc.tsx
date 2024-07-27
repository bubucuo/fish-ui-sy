import * as React from "react";
import { DocsContainer } from "@storybook/addon-docs";
import { webLightTheme, FishProvider } from "@/index";

/**
 * A container that wraps storybook's native docs container to add extra components to the docs experience
 */
export const FishDocsContainer = ({ children, context }) => {
  return (
    <>
      {/** TODO add table of contents */}
      <FishProvider
        style={{ backgroundColor: "transparent" }}
        theme={webLightTheme}
      >
        <DocsContainer context={context}>{children}</DocsContainer>
      </FishProvider>
    </>
  );
};
