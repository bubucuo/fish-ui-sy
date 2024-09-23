import { tokens } from "fish-ui-sy";
import { mergeClasses, makeStyles } from "@griffel/react";
import { useButtonStyles } from "../Button/useButtonStyles.styles";
import { CompoundButtonProps } from "./CompoundButton.types";

export const compoundButtonClassNames = {
  root: "fish-ui-CompoundButton",
  icon: "fish-ui-CompoundButton__icon",
  contentContainer: "fish-ui-CompoundButton__contentContainer",
  secondaryContent: "fish-ui-CompoundButton__secondaryContent",
};

const useRootStyles = makeStyles({
  // Base styles
  base: {
    height: "auto",

    [`& .${compoundButtonClassNames.secondaryContent}`]: {
      color: tokens.colorNeutralForeground2,
    },

    ":hover": {
      [`& .${compoundButtonClassNames.secondaryContent}`]: {
        color: tokens.colorNeutralForeground2Hover,
      },
    },

    ":hover:active": {
      [`& .${compoundButtonClassNames.secondaryContent}`]: {
        color: tokens.colorNeutralForeground2Pressed,
      },
    },
  },

  // High contrast styles
  highContrast: {
    "@media (forced-colors: active)": {
      ":hover": {
        [`& .${compoundButtonClassNames.secondaryContent}`]: {
          color: "Highlight",
        },
      },

      ":hover:active": {
        [`& .${compoundButtonClassNames.secondaryContent}`]: {
          color: "Highlight",
        },
      },
    },
  },

  // Appearance variations
  outline: {
    /* No styles */
  },
  primary: {
    [`& .${compoundButtonClassNames.secondaryContent}`]: {
      color: tokens.colorNeutralForegroundOnBrand,
    },

    ":hover": {
      [`& .${compoundButtonClassNames.secondaryContent}`]: {
        color: tokens.colorNeutralForegroundOnBrand,
      },
    },

    ":hover:active": {
      [`& .${compoundButtonClassNames.secondaryContent}`]: {
        color: tokens.colorNeutralForegroundOnBrand,
      },
    },

    "@media (forced-colors: active)": {
      [`& .${compoundButtonClassNames.secondaryContent}`]: {
        color: "HighlightText",
      },
    },
  },
  secondary: {
    /* The secondary styles are exactly the same as the base styles. */
  },
  subtle: {
    [`& .${compoundButtonClassNames.secondaryContent}`]: {
      color: tokens.colorNeutralForeground2,
    },

    ":hover": {
      [`& .${compoundButtonClassNames.secondaryContent}`]: {
        color: tokens.colorNeutralForeground2Hover,
      },
    },

    ":hover:active": {
      [`& .${compoundButtonClassNames.secondaryContent}`]: {
        color: tokens.colorNeutralForeground2Pressed,
      },
    },

    "@media (forced-colors: active)": {
      ":hover": {
        [`& .${compoundButtonClassNames.secondaryContent}`]: {
          color: "Canvas",
        },
      },
      ":hover:active": {
        [`& .${compoundButtonClassNames.secondaryContent}`]: {
          color: "Canvas",
        },
      },
    },
  },
  transparent: {
    [`& .${compoundButtonClassNames.secondaryContent}`]: {
      color: tokens.colorNeutralForeground2,
    },

    ":hover": {
      [`& .${compoundButtonClassNames.secondaryContent}`]: {
        color: tokens.colorNeutralForeground2BrandHover,
      },
    },

    ":hover:active": {
      [`& .${compoundButtonClassNames.secondaryContent}`]: {
        color: tokens.colorNeutralForeground2BrandPressed,
      },
    },
  },

  // Size variations
  small: {
    padding: `${tokens.spacingHorizontalS} ${tokens.spacingHorizontalS} ${tokens.spacingHorizontalMNudge} ${tokens.spacingHorizontalS}`,

    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
  },
  medium: {
    padding: `14px ${tokens.spacingHorizontalM} ${tokens.spacingHorizontalL} ${tokens.spacingHorizontalM}`,

    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
  },
  large: {
    padding: `18px ${tokens.spacingHorizontalL} ${tokens.spacingHorizontalXL} ${tokens.spacingHorizontalL}`,

    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
  },

  // Disabled styles
  disabled: {
    [`& .${compoundButtonClassNames.secondaryContent}`]: {
      color: tokens.colorNeutralForegroundDisabled,
    },

    ":hover": {
      [`& .${compoundButtonClassNames.secondaryContent}`]: {
        color: tokens.colorNeutralForegroundDisabled,
      },
    },

    ":hover:active": {
      [`& .${compoundButtonClassNames.secondaryContent}`]: {
        color: tokens.colorNeutralForegroundDisabled,
      },
    },
  },

  // Disabled high contrast styles
  disabledHighContrast: {
    "@media (forced-colors: active)": {
      [`& .${compoundButtonClassNames.secondaryContent}`]: {
        color: "GrayText",
      },

      ":hover": {
        [`& .${compoundButtonClassNames.secondaryContent}`]: {
          color: "GrayText",
        },
      },

      ":hover:active": {
        [`& .${compoundButtonClassNames.secondaryContent}`]: {
          color: "GrayText",
        },
      },
    },
  },
});

const useRootIconOnlyStyles = makeStyles({
  // Size variations
  small: {
    padding: tokens.spacingHorizontalXS,

    maxWidth: "48px",
    minWidth: "48px",
  },
  medium: {
    padding: tokens.spacingHorizontalSNudge,

    maxWidth: "52px",
    minWidth: "52px",
  },
  large: {
    padding: tokens.spacingHorizontalS,

    maxWidth: "56px",
    minWidth: "56px",
  },
});

const useIconStyles = makeStyles({
  // Base styles
  base: {
    fontSize: "40px",
    height: "40px",
    width: "40px",
  },

  // Icon position variations
  before: {
    marginRight: tokens.spacingHorizontalM,
  },
  after: {
    marginLeft: tokens.spacingHorizontalM,
  },
});

const useContentContainerStyles = makeStyles({
  // Base styles
  base: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
});

const useSecondaryContentStyles = makeStyles({
  // Base styles
  base: {
    lineHeight: "100%",
    fontWeight: tokens.fontWeightRegular,
  },

  // Size variations
  small: {
    fontSize: tokens.fontSizeBase200,
  },
  medium: {
    fontSize: tokens.fontSizeBase200,
  },
  large: {
    fontSize: tokens.fontSizeBase300,
  },
});

export const useCompoundButtonStyles = (
  props: CompoundButtonProps & { iconOnly: boolean }
) => {
  const rootStyles = useRootStyles();
  const rootIconOnlyStyles = useRootIconOnlyStyles();
  const iconStyles = useIconStyles();
  const contentContainerStyles = useContentContainerStyles();
  const secondaryContentStyles = useSecondaryContentStyles();

  const {
    appearance,
    disabled,
    disabledFocusable,
    iconOnly,
    iconPosition,
    size,
    icon,
    secondaryContent,
    children,
    className,
  } = props;

  const styles = {
    root: undefined as string | undefined, //button
    contentContainer: undefined as string | undefined,
    secondaryContent: undefined as string | undefined,
    icon: undefined as string | undefined,
  };

  styles.root = mergeClasses(
    compoundButtonClassNames.root,

    // Root styles
    rootStyles.base,
    rootStyles.highContrast,
    appearance && rootStyles[appearance],
    rootStyles[size!],

    // Disabled styles
    (disabled || disabledFocusable) && rootStyles.disabled,
    (disabled || disabledFocusable) && rootStyles.disabledHighContrast,

    // Icon-only styles
    iconOnly && rootIconOnlyStyles[size!],

    // User provided class name
    className
  );

  styles.contentContainer = mergeClasses(
    compoundButtonClassNames.contentContainer,
    contentContainerStyles.base
  );

  if (icon) {
    styles.icon = mergeClasses(
      compoundButtonClassNames.icon,
      iconStyles.base,
      children !== undefined && children !== null && iconStyles[iconPosition!]
    );
  }

  if (secondaryContent) {
    styles.secondaryContent = mergeClasses(
      compoundButtonClassNames.secondaryContent,
      secondaryContentStyles.base,
      secondaryContentStyles[size!]
    );
  }

  const _styles = useButtonStyles(props);

  styles.root = mergeClasses(styles.root, _styles.root);
  styles.icon = mergeClasses(styles.icon, _styles.icon);

  return styles;
};
