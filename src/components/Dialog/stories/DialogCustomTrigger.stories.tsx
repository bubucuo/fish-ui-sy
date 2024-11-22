import * as React from "react";
import {
  Button,
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  DialogActions,
  DialogTrigger,
} from "fish-ui-sy";

const CustomDialogTrigger = React.forwardRef((props, ref) => {
  return (
    <Button {...props} ref={ref as React.Ref<HTMLDivElement>}>
      Custom Trigger
    </Button>
  );
});

const CustomTrigger = () => {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <CustomDialogTrigger />
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            exercitationem cumque repellendus eaque est dolor eius expedita
            nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
            in natus iure cumque eaque?
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button appearance="primary">Do Something</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default CustomTrigger;
