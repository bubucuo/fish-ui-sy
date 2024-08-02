import { render } from "@testing-library/react";
import { Divider } from "fish-ui-sy";

describe("Divider", () => {
  it("renders a default divider", () => {
    const component = render(<Divider />);
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders a divider with content", () => {
    const component = render(<Divider>Default Divider</Divider>);
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders a divider with inset", () => {
    const component = render(<Divider inset>Inset</Divider>);
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders a subtle appearance", () => {
    const component = render(<Divider appearance="subtle">Subtle</Divider>);
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders a brand appearance", () => {
    const component = render(<Divider appearance="brand">Brand</Divider>);
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders a strong appearance", () => {
    const component = render(<Divider appearance="strong">Strong</Divider>);
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders content start aligned", () => {
    const component = render(<Divider alignContent="start">Start</Divider>);
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders content center aligned", () => {
    const component = render(<Divider alignContent="center">Center</Divider>);
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders content end aligned", () => {
    const component = render(<Divider alignContent="end">End</Divider>);
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders a divider with a different color", () => {
    const component = render(<Divider color="#FF00FF" />);
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders a vertical divider", () => {
    const component = render(<Divider vertical />);
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders a vertical divider with content", () => {
    const component = render(<Divider vertical>Vertical</Divider>);
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders a vertical divider with a fixed height", () => {
    const component = render(
      <Divider style={{ height: 100 }} vertical>
        fixed 100px height
      </Divider>
    );
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders a horizontal divider with a fixed width", () => {
    const component = render(
      <Divider style={{ width: 100 }}>fixed 100px width</Divider>
    );
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });
});
