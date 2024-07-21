import * as React from "react";
export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 分隔线内内容的对齐方式。
     * @default 'center'
     */
    alignContent?: "start" | "center" | "end";
    /**
     * 在divider的开头和结尾添加padding。
     *
     * @default false
     */
    inset?: boolean;
    /**
     * 分隔线可以是水平的（默认）或垂直的
     *
     * @default false
     */
    vertical?: boolean;
};
/**
 * 内容分割线。
 */
export declare const Divider: {
    ({ alignContent, inset, vertical, children, className, style, }: DividerProps): React.JSX.Element;
    displayName: string;
};
