import type { FunctionComponent } from "react";
import type { TextPresetProps } from "fish-ui-sy";
import { typographyStyles } from "fish-ui-sy";
import { makeStyles } from "@griffel/react";
import { createPreset } from "./createPreset";

export const Body1: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.body1,
  }),
  displayName: "Body1",
});

export const Body1Strong: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.body1Strong,
  }),
  displayName: "Body1Strong",
});

export const Body1Stronger: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.body1Stronger,
  }),
  displayName: "Body1Stronger",
});
export const Body2: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.body2,
  }),
  displayName: "Body2",
});

export const Caption1: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.caption1,
  }),
  displayName: "Caption1",
});

export const Caption1Strong: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.caption1Strong,
  }),
  displayName: "Caption1Strong",
});
export const Caption1Stronger: FunctionComponent<TextPresetProps> =
  createPreset({
    useStyles: makeStyles({
      root: typographyStyles.caption1Stronger,
    }),
    displayName: "Caption1Stronger",
  });

export const Caption2: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.caption2,
  }),
  displayName: "Caption2",
});

export const Caption2Strong: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.caption2Strong,
  }),
  displayName: "Caption2Strong",
});

export const Display: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.display,
  }),
  displayName: "Display",
});

export const LargeTitle: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.largeTitle,
  }),
  displayName: "LargeTitle",
});

export const Subtitle1: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.subtitle1,
  }),
  displayName: "Subtitle1",
});

export const Subtitle2: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.subtitle2,
  }),
  displayName: "Subtitle2",
});

export const Subtitle2Stronger: FunctionComponent<TextPresetProps> =
  createPreset({
    useStyles: makeStyles({
      root: typographyStyles.subtitle2Stronger,
    }),
    displayName: "Subtitle2Stronger",
  });

export const Title1: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.title1,
  }),
  displayName: "Title1",
});

export const Title2: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.title2,
  }),
  displayName: "Title2",
});

export const Title3: FunctionComponent<TextPresetProps> = createPreset({
  useStyles: makeStyles({
    root: typographyStyles.title3,
  }),
  displayName: "Title3",
});
