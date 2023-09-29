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
      genSpaceCompactStyle(spaceToken),
    ];
  },
  () => ({}),
  {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false,
  },
);
