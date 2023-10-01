import { mergeToken, type GenerateStyle } from '../../theme/internal';
import type { FullToken } from '../../theme/util/genComponentStyleHook';
import genComponentStyleHook from '../../theme/util/genComponentStyleHook';

export interface ComponentToken {
  // Component token here
}

interface SpaceToken extends FullToken<'Space'> {
  spaceGapSmallSize: number;
  spaceGapMiddleSize: number;
  spaceGapLargeSize: number;
}

export const genSpaceStyle: any = (token) => {
  const { componentCls } = token;

  return {
    // [componentCls]: {
    display: 'inline-flex',
    '&>div': {
      color: 'red',
    },
    '&-rtl': {
      direction: 'rtl',
    },
    '&-vertical': {
      flexDirection: 'column',
    },
    '&-align': {
      flexDirection: 'column',
      '&-center': {
        alignItems: 'center',
      },
      '&-start': {
        alignItems: 'flex-start',
      },
      '&-end': {
        alignItems: 'flex-end',
      },
      '&-baseline': {
        alignItems: 'baseline',
      },
    },

    [`${componentCls}-item:empty`]: {
      display: 'none',
    },
    // },
  };
};

const genSpaceGapStyle: GenerateStyle<SpaceToken> = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      '&-gap-row-small': {
        rowGap: token.spaceGapSmallSize,
      },
      '&-gap-row-middle': {
        rowGap: token.spaceGapMiddleSize,
      },
      '&-gap-row-large': {
        rowGap: token.spaceGapLargeSize,
      },
      '&-gap-col-small': {
        columnGap: token.spaceGapSmallSize,
      },
      '&-gap-col-middle': {
        columnGap: token.spaceGapMiddleSize,
      },
      '&-gap-col-large': {
        columnGap: token.spaceGapLargeSize,
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(
  'Space',
  (token) => {
    const spaceToken = mergeToken<SpaceToken>(token, {
      spaceGapSmallSize: token.paddingXS,
      spaceGapMiddleSize: token.padding,
      spaceGapLargeSize: token.paddingLG,
    });
    return [
      genSpaceStyle(spaceToken),
      genSpaceGapStyle(spaceToken),
      // genSpaceCompactStyle(spaceToken),
    ];
  },
  () => ({}),
  {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false,
  },
);
