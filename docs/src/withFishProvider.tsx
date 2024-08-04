import * as React from "react";
import { FishProvider, webLightTheme } from "../../src";

export const withFishProvider = (Story) => {
  const theme = webLightTheme;
  return (
    <FishProvider>
      <div
        style={{
          padding: "48px 24px",
          backgroundColor: theme.colorNeutralBackground2,
        }}
      >
        <Story />
      </div>
    </FishProvider>
  );
};
