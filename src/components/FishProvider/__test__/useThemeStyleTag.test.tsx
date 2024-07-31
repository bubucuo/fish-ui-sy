import { renderHook } from "@testing-library/react";
import type { Theme } from "fish-ui-sy";
import { useThemeStyleTag } from "../useThemeStyleTag";

describe("useThemeStyleTag", () => {
  const defaultTheme = {
    "css-variable-1": "1",
    "css-variable-2": "2",
  } as unknown as Theme;

  it("should render style tag", () => {
    // Act
    const { result } = renderHook(() =>
      useThemeStyleTag({
        theme: defaultTheme,
      })
    );

    // Assert
    expect(
      document.getElementById(result.current.themeClassName)
    ).not.toBeNull();
  });

  it("should remove style tag on unmount", () => {
    // Arrange
    const { result, unmount } = renderHook(() =>
      useThemeStyleTag({
        theme: defaultTheme,
      })
    );

    // Act
    unmount();

    // Assert
    expect(document.getElementById(result.current.themeClassName)).toBeNull();
  });
});
