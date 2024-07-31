import { teamsLightTheme } from "fish-ui-sy";
import type { StrokeWidthTokens } from "fish-ui-sy";

const theme = teamsLightTheme;

export const StrokeWidths = () => {
  const strokeWidthTokens = Object.keys(theme).filter((tokenName) =>
    tokenName.startsWith("strokeWidth")
  ) as (keyof StrokeWidthTokens)[];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {strokeWidthTokens.map((strokeWidth: keyof StrokeWidthTokens) => [
        <div key={strokeWidth}>{strokeWidth}</div>,
        <div
          key={`${strokeWidth}-value`}
          style={{ borderBottom: `${theme[strokeWidth]} solid black` }}
        />,
      ])}
    </div>
  );
};

export default {
  title: "主题/StrokeWidths",
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: false,
      },
    },
  },
};
