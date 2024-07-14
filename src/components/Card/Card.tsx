import { ReactNode } from "react";
import { PREFIX } from "../_util/index";
import "./card.css";

export interface CardProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  // 卡片标题
  title: ReactNode;
  // 卡片右上角的操作区域
  extra: ReactNode;
  // 卡片的封面
  children: ReactNode;
}

/**
 * 最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。
 */
export const Card = ({
  backgroundColor,
  title,
  extra,
  children,
  ...props
}: CardProps) => {
  // const cls = getClassName("card");
  const cmpPrefix = `${PREFIX}-card`;
  return (
    <div className={cmpPrefix} style={{ backgroundColor }} {...props}>
      <div className={`${cmpPrefix}-head`}>
        <div className={`${cmpPrefix}-head-title`}>{title}</div>
        <div className={`${cmpPrefix}-head-extra`}>{extra}</div>
      </div>
      <div className={`${cmpPrefix}-body`}>{children}</div>
    </div>
  );
};
