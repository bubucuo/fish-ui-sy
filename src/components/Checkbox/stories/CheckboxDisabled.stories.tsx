import { Checkbox } from "fish-ui-sy";

const Disabled = () => (
  <>
    <Checkbox disabled label="Disabled" />
    <Checkbox disabled label="Disabled checked" checked />
    <Checkbox disabled label="Disabled mixed" checked="mixed" />
  </>
);

export default Disabled;
