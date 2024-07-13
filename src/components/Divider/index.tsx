import React from "react";
import classNames from "classnames";
import styled, { css } from "styled-components";
import { ConfigContext } from "../config-context";

export interface DividerProps {
  prefixCls?: string;
  type?: "horizontal" | "vertical";
  orientation?: "left" | "right" | "center";
  orientationMargin?: string | number;
  className?: string;
  rootClassName?: string;
  children?: React.ReactNode;
  dashed?: boolean;
  style?: React.CSSProperties;
  plain?: boolean;
}

/**
 *对不同章节的文本段落进行分割。
 * 对行内文字/链接进行分割，例如表格的操作列。
 */
// 以对象的形式传递样式
const StyledDivider = styled.div<DividerProps>`
  ${({
    prefixCls,
    orientationMargin = 0,
    // dividerHorizontalGutterMargin,
  }: DividerProps) => {
    const componentCls = prefixCls;
    const lineWidth = 1;
    const colorSplit = "red";
    return {
      [`&.${prefixCls}`]: {
        margin: "24px 0",
        display: "flex",
        clear: "both",
        width: "100%",
        lineHeight: "22px",
        borderBlockStart: "1px solid red",
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        // margin: `${dividerHorizontalGutterMargin}px 0`,
      },

      [`&-horizontal${componentCls}-with-text`]: {
        display: "flex",
        alignItems: "center",
        // margin: `${token.dividerHorizontalWithTextGutterMargin}px 0`,
        // color: token.colorTextHeading,
        fontWeight: 500,
        // fontSize: token.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${colorSplit}`,

        "&::before, &::after": {
          position: "relative",
          width: "50%",
          borderBlockStart: `${lineWidth}px solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: "inherit",
          borderBlockEnd: 0,
          transform: "translateY(50%)",
          content: "''",
        },
      },

      [`&-horizontal${componentCls}-with-text-left`]: {
        "&::before": {
          width: `${orientationMargin * 100}%`,
        },

        "&::after": {
          width: `${100 - orientationMargin * 100}%`,
        },
      },

      [`&-horizontal${componentCls}-with-text-right`]: {
        "&::before": {
          width: `${100 - orientationMargin * 100}%`,
        },

        "&::after": {
          width: `${orientationMargin * 100}%`,
        },
      },

      "&-dashed": {
        background: "none",
        borderColor: colorSplit,
        borderStyle: "dashed",
        borderWidth: `${lineWidth}px 0 0`,
      },

      // [`&.${prefixCls}-dashed`]: {
      //   borderStyle: "dashed",
      // },
      [`&.${prefixCls}-with-text`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 500,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: "0 solid orange",
      },
      "&:before, &:after": {
        display: "block",
        position: "relative",
        width: "50%",
        borderBlockStart: "1px solid transparent",
        borderBlockStartColor: "inherit",
        borderBlockEnd: 0,
        transform: "translateY(50%)",
        content: '""',
      },
    };
  }});
`;

const StyledDividerInnerText = styled.span<DividerProps>`
  ${({ prefixCls }: DividerProps) => {
    return css`
      &.${prefixCls}-inner-text {
        color: red;
        box-sizing: border-box;
        display: inline-block;
        padding-block: 0;
      }
    `;
  }}
`;

const Divider: React.FC<DividerProps> = ({
  prefixCls: customizePrefixCls,
  type = "horizontal",
  orientation = "center",
  orientationMargin,
  className,
  rootClassName,
  children,
  dashed,
  plain,
  style,
  ...restProps
}) => {
  const { getPrefixCls, direction, divider } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls("divider", customizePrefixCls);

  const hasChildren = !!children;

  const hasCustomMarginLeft =
    orientation === "left" && orientationMargin != null;
  const hasCustomMarginRight =
    orientation === "right" && orientationMargin != null;
  const orientationPrefix =
    orientation.length > 0 ? `-${orientation}` : orientation;

  const classString = classNames(
    prefixCls,
    divider?.className,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-text`]: hasChildren,
      [`${prefixCls}-with-text${orientationPrefix}`]: hasChildren,
      [`${prefixCls}-dashed`]: !!dashed,
      [`${prefixCls}-plain`]: !!plain,
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-no-default-orientation-margin-left`]: hasCustomMarginLeft,
      [`${prefixCls}-no-default-orientation-margin-right`]:
        hasCustomMarginRight,
    },
    className,
    rootClassName
  );

  const memoizedOrientationMargin = React.useMemo<string | number>(() => {
    if (typeof orientationMargin === "number") {
      return orientationMargin;
    }
    if (/^\d+$/.test(orientationMargin!)) {
      return Number(orientationMargin);
    }
    return orientationMargin!;
  }, [orientationMargin]);

  const innerStyle: React.CSSProperties = {
    ...(hasCustomMarginLeft && { marginLeft: memoizedOrientationMargin }),
    ...(hasCustomMarginRight && { marginRight: memoizedOrientationMargin }),
  };

  return (
    <StyledDivider
      prefixCls={prefixCls}
      className={classString}
      style={{
        ...divider?.style,
        ...style,
      }}
      {...restProps}
      role="separator"
    >
      {children && type !== "vertical" && (
        <StyledDividerInnerText
          prefixCls={prefixCls}
          className={`${prefixCls}-inner-text`}
          style={innerStyle}
        >
          {children}
        </StyledDividerInnerText>
      )}
    </StyledDivider>
  );
};

export default Divider;
