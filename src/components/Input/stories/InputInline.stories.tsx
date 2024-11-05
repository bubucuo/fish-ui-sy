import { useId, Input, Label } from "fish-ui-sy";

const Inline = () => {
  const inputId = useId("input");

  return (
    <div>
      <Label htmlFor={inputId} style={{ paddingInlineEnd: "12px" }}>
        Sample inline input
      </Label>
      <Input id={inputId} />

      <p>
        This input is <Input placeholder="inline" aria-label="inline" /> within
        a paragraph of text (be sure to provide an <code>aria-label</code>).
      </p>
    </div>
  );
};

export default Inline;
