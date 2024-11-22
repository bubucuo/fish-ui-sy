import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Button,
} from "fish-ui-sy";

const Alert = () => {
  return (
    <Dialog modalType="alert">
      <DialogTrigger disableButtonEnhancement>
        <Button>Open Alert dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Alert dialog title</DialogTitle>
          <DialogContent>
            This dialog cannot be dismissed by clicking on the backdrop nor by
            pressing Escape. Close button should be pressed to dismiss this
            Alert
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button
              appearance="primary"
              onClick={() => {
                console.log(
                  "%c [ do sth ]-32",
                  "font-size:13px; background:pink; color:#bf2c9f;"
                );
              }}
            >
              Do Something
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default Alert;
