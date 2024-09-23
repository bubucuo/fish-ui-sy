import { CompoundButton } from "fish-ui-sy";
import { CalendarMonthRegular } from "fish-ui-sy-react-icons";
import type { CompoundButtonProps } from "fish-ui-sy";

const Default = (props: CompoundButtonProps) => (
  <CompoundButton
    icon={<CalendarMonthRegular />}
    secondaryContent="Secondary content"
    {...props}
  >
    Example
  </CompoundButton>
);

export default Default;
