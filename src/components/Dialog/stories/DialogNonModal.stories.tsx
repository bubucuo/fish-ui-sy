import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  Button,
} from "fish-ui-sy";

const NonModal = () => {
  return (
    <Dialog modalType="non-modal">
      <DialogTrigger disableButtonEnhancement>
        <Button>Open non-modal dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Non-modal dialog title</DialogTitle>
          <DialogContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            explicabo repudiandae impedit doloribus laborum quidem maxime
            dolores perspiciatis non ipsam, nostrum commodi quis autem sequi,
            incidunt cum? Consequuntur, repellendus nostrum?
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default NonModal;
