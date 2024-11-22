/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogActions,
  DialogTrigger,
} from "fish-ui-sy";

import Default from "./DialogDefault.stories";
import NonModal from "./DialogNonModal.stories";
import Alert from "./DialogAlert.stories";
import ScrollingLongContent from "./DialogScrollingLongContent.stories";
import Actions from "./DialogActions.stories";
import FluidActions from "./DialogFluidDialogActions.stories";
import NoFocusableElement from "./DialogNoFocusableElement.stories";
import ControllingOpenAndClose from "./DialogControllingOpenAndClose.stories";
import ChangeFocus from "./DialogChangeFocus.stories";
import TriggerOutsideDialog from "./DialogTriggerOutsideDialog.stories";
import CustomTrigger from "./DialogCustomTrigger.stories";
import WithForm from "./DialogWithForm.stories";
import TitleCustomAction from "./DialogTitleCustomAction.stories";
import TitleNoAction from "./DialogTitleNoAction.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./DialogDefault.stories.tsx?raw";
/*  @ts-expect-error - required for ts*/
import NonModalSource from "./DialogNonModal.stories?raw";
/*  @ts-expect-error - required for ts*/
import AlertSource from "./DialogAlert.stories?raw";
/*  @ts-expect-error - required for ts*/
import ScrollingLongContentSource from "./DialogScrollingLongContent.stories?raw";
/*  @ts-expect-error - required for ts*/
import ActionsSource from "./DialogActions.stories?raw";
/*  @ts-expect-error - required for ts*/
import FluidActionsSource from "./DialogFluidDialogActions.stories?raw";
/*  @ts-expect-error - required for ts*/
import NoFocusableElementSource from "./DialogNoFocusableElement.stories?raw";
/*  @ts-expect-error - required for ts*/
import ControllingOpenAndCloseSource from "./DialogControllingOpenAndClose.stories?raw";
/*  @ts-expect-error - required for ts*/
import ChangeFocusSource from "./DialogChangeFocus.stories?raw";
/*  @ts-expect-error - required for ts*/
import TriggerOutsideDialogSource from "./DialogTriggerOutsideDialog.stories?raw";
/*  @ts-expect-error - required for ts*/
import CustomTriggerSource from "./DialogCustomTrigger.stories?raw";
/*  @ts-expect-error - required for ts*/
import WithFormSource from "./DialogWithForm.stories?raw";
/*  @ts-expect-error - required for ts*/
import TitleCustomActionSource from "./DialogTitleCustomAction.stories?raw";
/*  @ts-expect-error - required for ts*/
import TitleNoActionSource from "./DialogTitleNoAction.stories?raw";

const meta: Meta = {
  title: "组件/Dialog",
  component: Dialog,
  subcomponents: {
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogActions,
  } as any,
  parameters: {
    docs: {
      description: {},
    },
  },
};

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(NonModal as any).parameters = {
  docs: {
    source: {
      code: NonModalSource,
    },
  },
};

(Alert as any).parameters = {
  docs: {
    source: {
      code: AlertSource,
    },
  },
};

(ScrollingLongContent as any).parameters = {
  docs: {
    source: {
      code: ScrollingLongContentSource,
    },
  },
};

(Actions as any).parameters = {
  docs: {
    source: {
      code: ActionsSource,
    },
  },
};

(FluidActions as any).parameters = {
  docs: {
    source: {
      code: FluidActionsSource,
    },
  },
};

(NoFocusableElement as any).parameters = {
  docs: {
    source: {
      code: NoFocusableElementSource,
    },
  },
};

(ControllingOpenAndClose as any).parameters = {
  docs: {
    source: {
      code: ControllingOpenAndCloseSource,
    },
  },
};

(ChangeFocus as any).parameters = {
  docs: {
    source: {
      code: ChangeFocusSource,
    },
  },
};

(TriggerOutsideDialog as any).parameters = {
  docs: {
    source: {
      code: TriggerOutsideDialogSource,
    },
  },
};

(CustomTrigger as any).parameters = {
  docs: {
    source: {
      code: CustomTriggerSource,
    },
  },
};

(WithForm as any).parameters = {
  docs: {
    source: {
      code: WithFormSource,
    },
  },
};

(TitleCustomAction as any).parameters = {
  docs: {
    source: {
      code: TitleCustomActionSource,
    },
  },
};

(TitleNoAction as any).parameters = {
  docs: {
    source: {
      code: TitleNoActionSource,
    },
  },
};

export {
  Default,
  NonModal,
  Alert,
  ScrollingLongContent,
  Actions,
  FluidActions,
  NoFocusableElement,
  ControllingOpenAndClose,
  ChangeFocus,
  TriggerOutsideDialog,
  CustomTrigger,
  WithForm,
  TitleCustomAction,
  TitleNoAction,
};
