import * as React from "react";

import {
  Button,
  FishProvider,
  makeStyles,
  mergeClasses,
  Portal,
  tokens,
  toMountNodeProps,
} from "fish-ui-sy";
import type { PortalProps } from "fish-ui-sy";

const useClasses = makeStyles({
  message: {
    backgroundColor: tokens.colorNeutralBackground1,
    border: `${tokens.strokeWidthThick} solid ${tokens.colorStatusSuccessBorder1}`,
    padding: "20px",

    fontSize: tokens.fontSizeBase600,

    position: "fixed",
    top: "0",
    left: "0",
  },

  // Heads up!
  // Overrides Portal's default z-index
  portal: {
    zIndex: 1,
  },
});

const CustomMessage: React.FC<
  { children: React.ReactNode } & Pick<PortalProps, "mountNode">
> = (props) => {
  const classes = useClasses();

  const mountNodeProps = toMountNodeProps(props.mountNode);
  mountNodeProps.className = mergeClasses(
    classes.portal,
    mountNodeProps.className
  );

  return (
    <Portal mountNode={mountNodeProps}>
      <FishProvider>
        <div className={classes.message}>{props.children}</div>
      </FishProvider>
    </Portal>
  );
};

export const Default = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen((v) => !v)}>Toggle message</Button>
      {open && (
        <CustomMessage>
          This message is rendered in a custom mount node
        </CustomMessage>
      )}
    </>
  );
};

export default Default;
