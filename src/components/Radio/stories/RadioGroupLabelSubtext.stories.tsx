import { Label, Radio, RadioGroup, Text } from "fish-ui-sy";

const LabelSubtext = () => (
  <>
    <Label>Choose your favorite fruit:</Label>
    <RadioGroup>
      <Radio
        value="A"
        label={
          <>
            Banana
            <br />
            <Text size={200}>
              This is an example subtext of the first option
            </Text>
          </>
        }
      />
      <Radio
        value="B"
        label={
          <>
            Pear
            <br />
            <Text size={200}>This is some more example subtext</Text>
          </>
        }
        onChange={(ev, value) => {
          console.log(
            "%c [  ]-30",
            "font-size:13px; background:pink; color:#bf2c9f;",
            value
          );
        }}
      />
    </RadioGroup>
  </>
);

export default LabelSubtext;
