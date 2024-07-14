export const PREFIX = process.env.PREFIX;

export const getPrefixCls = (postfix: string): string => `${PREFIX}-${postfix}`;

export const getPrefix = (...postfixes: Array<string>): Array<string> => {
  return postfixes.map((postfix: string) => {
    return `${PREFIX}-${postfix}`;
  });
};

export const getClassName = (...postfixes: Array<string>): string => {
  return getPrefix(...postfixes).join(" ");
};
