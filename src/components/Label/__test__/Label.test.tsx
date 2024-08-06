import { render } from "@testing-library/react";
import { Label } from "fish-ui-sy";

describe("Label", () => {
  it("renders a default state", () => {
    const result = render(<Label>Default Label</Label>);
    expect(result.container).toMatchSnapshot();
  });

  it("renders a custom asterisk", () => {
    const result = render(
      <Label required="foo" data-testid="label-id">
        I'm a label
      </Label>
    );
    const label = result.getByTestId("label-id");
    const requiredSlot = label.children[0];
    if (requiredSlot) {
      expect(requiredSlot.innerHTML).toBe("foo");
    } else {
      throw Error("Custom required text was not rendered");
    }
    expect(result.baseElement).toMatchSnapshot();
  });
});
